import re
import json
import requests
from sys import path
from urllib.parse import unquote
from base64 import b64decode, b64encode

path.append('..')
from units import setCache, delCache, getCache, getProxyUrl, handleMedia

class YOUTUBE():
    def getInfo(self, params):
        rid = params['rid']
        header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
        }
        url = 'https://www.youtube.com/watch?v={}'.format(rid)
        r = requests.get(url=url, headers=header, verify=False, timeout=30)
        data = json.loads(re.search(r'var ytInitialPlayerResponse =(.*?});', r.text).group(1))
        localUrl = getCache('localUrl')
        if 'proxy' in params and params['proxy']:
            proxy = True
        else:
            proxy = False
        if 'streamingData' in data:
            if 'hlsManifestUrl' in data['streamingData']:
                if type(data['streamingData']['hlsManifestUrl']) is str:
                    url = data['streamingData']['hlsManifestUrl']
                elif type(data['streamingData']['hlsManifestUrl']) is list:
                    url = data['streamingData']['hlsManifestUrl'][0]
                if proxy:
                    url = getProxyUrl(YOUTUBE.__name__, self.proxyM3u8.__name__, {'url': b64encode(url.encode()).decode(), 'proxyUrl': params['proxyUrl'], 'header': b64encode(json.dumps(header).encode()).decode(), "base64": True}).replace('http://localUrl', localUrl)
            elif 'adaptiveFormats' in data['streamingData']:
                dashList = data['streamingData']['adaptiveFormats']
                setCache(rid, dashList)
                url = getProxyUrl(YOUTUBE.__name__, self.proxyDash.__name__, {'rid': rid, 'proxy': proxy, 'proxyUrl': params['proxyUrl']}).replace('http://localUrl', localUrl)
            else:
                raise Exception('错误：未找到直播地址')
        else:
            raise Exception('错误：未找到直播地址')
        return url

    def proxyM3u8(self, params):
        return handleMedia('YOUTUBE', 'proxyM3u8', {'url': b64decode(params['url'].encode()).decode(), 'header': json.loads(b64decode(params['header'].encode()).decode()), "base64": params['base64']}, params['proxyUrl'], params['base64'])

    def proxyDash(self, params):
        proxy = params['proxy']
        dashList = getCache(params['rid'])
        delCache(params['rid'])
        proxyUrl = params['proxyUrl']
        audioinfo = ''
        videoinfo = ''
        for item in dashList:
            avid = item['itag']
            typeinfo = item['mimeType'].split(';')
            mimeType = typeinfo[0]
            codecs = typeinfo[1].split('=')[1].strip('"').strip()
            bandwidth = item['averageBitrate']
            if proxy:
                baseUrl = unquote(proxyUrl) + b64encode(item['url'].strip('%0C').encode()).decode()
            else:
                baseUrl = item['url'].strip('%0C')
            if mimeType.startswith('video'):
                frameRate = item['fps']
                height = item['height']
                width = item['width']
                videoinfo = videoinfo + f"""      <Representation mimeType="{mimeType}" bandwidth="{bandwidth}" codecs="{codecs}" frameRate="{frameRate}" height="{height}" id="{avid}" width="{width}">
        <BaseURL>{baseUrl.replace('&', '&amp;')}</BaseURL>
      </Representation>\n"""
            else:
                audioSamplingRate = item['audioSampleRate']
                audioinfo = audioinfo + f"""      <Representation audioSamplingRate="{audioSamplingRate}" bandwidth="{bandwidth}" codecs="{codecs}" id="{avid}">
        <BaseURL>{baseUrl.replace('&', '&amp;')}</BaseURL>
      </Representation>\n"""
        mpd = f"""<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011" type="static" minBufferTime="PT1.5S">
  <Period>
    <AdaptationSet startWithSAP="1" scanType="progressive" segmentAlignment="true">
      {videoinfo.strip()}
    </AdaptationSet>
    <AdaptationSet mimeType="audio/mp4" startWithSAP="1" segmentAlignment="true" lang="und">
      {audioinfo.strip()}
    </AdaptationSet>
  </Period>
</MPD>"""
        return mpd, 'application/dash+xml', 200
