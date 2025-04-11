

# -*- coding: utf-8 -*-
import json
import re
import sys
import requests
from pyquery import PyQuery as pq
from urllib.parse import urlparse
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
sys.path.append('..')
from base.spider import Spider

class Spider(Spider):
    def init(self, extend=""):
        self.session = requests.Session()
        self.default_host = "https://25kkuu.vip/xjzy"
        self.host = self.default_host
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 15; PJX110 Build/UKQ1.231108.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/134.0.6998.40 Mobile Safari/537.36',
            'accept-language': 'zh-CN,zh;q=0.9',
        }

        retries = Retry(total=3, backoff_factor=1, status_forcelist=[429, 500, 502, 503, 504])
        self.session.mount('http://', HTTPAdapter(max_retries=retries))
        self.session.mount('https://', HTTPAdapter(max_retries=retries))

        try:
            extend_data = json.loads(extend)
            if 'host' in extend_data:
                self.host = extend_data['host'].rstrip('/')
            self.proxies = extend_data.get('proxies', {})
        except:
            self.proxies = {}
            print("未提供外部域名，使用默认域名")

        self.host = self.detect_host(self.host)
        self.headers.update({'referer': f"{self.host}/"})
        self.session.headers.update(self.headers)
        self.session.proxies.update(self.proxies)

        self.pheader = {
            'User-Agent': self.headers['User-Agent'],
            'Referer': f"{self.host}/",
            'Origin': self.host,
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9',
        }

    def detect_host(self, host):
        try:
            response = self.session.get(host, allow_redirects=False, timeout=10)
            if response.status_code in [301, 302]:
                new_location = response.headers.get('Location', '')
                if new_location:
                    parsed = urlparse(new_location)
                    new_host = f"{parsed.scheme}://{parsed.netloc}{parsed.path.rstrip('/')}"
                    print(f"域名重定向: {host} -> {new_host}")
                    return new_host
            return host
        except Exception as e:
            print(f"域名检测失败: {host}, 错误: {str(e)}")
            return host

    def getName(self):
        return "香蕉资源"

    def isVideoFormat(self, url):
        return '.m3u8' in url or '.mp4' in url

    def homeContent(self, filter):
        response = self.session.get(self.host)
        data = self.getpq(response)
        print(f"Home HTML snippet: {response.text[:500]}")  # 打印前500字符检查 HTML
        result = {}
        class_map = {
            "解说原片": "cn-jieshuoyuanpian",
            "3D同人": "cn-3Dtongren",
            "中文无码": "cn-zhongwenwuma",
            "中文综合": "cn-zhongwenzonghe",
            "中文近亲": "cn-zhongwenjingqing",
            "中文护士": "cn-zhongwenhushi",
            "中文师生": "cn-zhongwenshisheng",
            "中文强奸": "cn-zhongwenqiangjian",
            "明星淫梦": "cn-mingxingyinmeng",
            "国产自拍": "cn-guochanzipai",
            "三级伦理": "cn-sanjizonghe"
        }
        result['class'] = [{"type_name": k, "type_id": v} for k, v in class_map.items()]
        ldata = data('.list-videos .item')
        result['list'] = self.getlist(ldata)
        print(f"Home list: {result['list']}")
        return result

    def homeVideoContent(self):
        return {'list': ''}

    def categoryContent(self, tid, pg, filter, extend):
        url = f"https://25kkuu.vip/xjzy/{tid}-{pg}.html"
        data = self.getpq(self.session.get(url))
        result = {
            'list': self.getlist(data('.list-videos .item')),
            'page': int(pg),
            'pagecount': 9999,
            'limit': 20,
            'total': 999999
        }
        print(f"Category list: {result['list']}")
        return result

    def detailContent(self, ids):
        vod_id = ids[0]
        url = f"https://25kkuu.vip/xjzy/xplay{vod_id}.html"
        response = self.session.get(url)
        data = self.getpq(response)
        print(f"Detail HTML snippet: {response.text[:500]}")  # 打印前500字符检查 HTML
        title = data('strong.title').text().strip() or self.extract(data, 'title="', '"')
        cover = (data('.img img').attr('data-original') or 
                 data('img[data-original]').attr('data-original') or 
                 data('img').attr('data-original') or 
                 self.extract(response.text, 'data-original="', '"'))
        print(f"Raw cover extracted: {cover}")
        if cover and not cover.startswith('http'):
            cover = f"https:{cover}"
        
        vod = {
            'vod_id': vod_id,
            'vod_name': title,
            'vod_pic': cover if cover else '',
            'vod_actor': '',
            'vod_play_from': '香蕉资源',
            'vod_play_url': f"播放源1${url}"
        }
        print(f"Detail: {vod}")
        return {'list': [vod]}

    def searchContent(self, key, quick, pg="1"):
        url = f"https://25kkuu.vip/xjzy/vod/search/page/{pg}/wd/{key}.html"
        data = self.getpq(self.session.get(url))
        result = {
            'list': self.getlist(data('.list-videos .item')),
            'page': pg
        }
        print(f"Search list: {result['list']}")
        return result

    def playerContent(self, flag, id, vipFlags):
        url = id if id.startswith('http') else f"https://25kkuu.vip/xjzy/xplay{id}.html"
        print(f"Fetching player URL: {url}")
        try:
            response = self.session.get(url)
            data = self.getpq(response)
            print(f"Player HTML snippet: {response.text[:500]}")  # 打印前500字符检查 HTML
            scripts = data('script')
            m3u8_url = None
            for script in scripts.items():
                script_text = script.text()
                if 'player_aaaa' in script_text:
                    print(f"Found player script: {script_text}")
                    match = re.search(r'"url":"(https?://[^"]+)"', script_text)
                    if match:
                        m3u8_url = match.group(1).replace('\\', '')
                        print(f"Extracted m3u8: {m3u8_url}")
                        break
            
            if not m3u8_url:
                print("未找到 player_aaaa 中的 URL，尝试嗅探")
                m3u8_url = self.sniff_url(url)
                print(f"Sniffed URL: {m3u8_url}")
            
            if not m3u8_url:
                print("未找到 m3u8 链接，返回播放页面 URL")
                return {'parse': 1, 'url': url, 'header': self.pheader}

            # 测试 m3u8 链接
            response = requests.get(m3u8_url, headers=self.pheader, timeout=15)
            print(f"m3u8 response: {response.status_code}, content: {response.text[:200]}")
            if response.status_code != 200:
                print(f"m3u8 请求失败，返回播放页面 URL")
                return {'parse': 1, 'url': url, 'header': self.pheader}

            return {
                'parse': 0,
                'url': m3u8_url,
                'header': self.pheader
            }
        except Exception as e:
            print(f"playerContent 错误: {str(e)}")
            return {'parse': 1, 'url': url, 'header': self.pheader}

    def sniff_url(self, url):
        try:
            response = self.session.get(url)
            text = response.text
            match = re.search(r'https?://[^"\']+\.m3u8', text)
            if match:
                return match.group(0)
            return None
        except Exception as e:
            print(f"Sniff error: {str(e)}")
            return None

    def getlist(self, data):
        videos = []
        for item in data.items():
            vod_id = self.extract(item, 'href="/xjzy/xplay', '.html')
            if not vod_id:
                continue
            title = item('strong.title').text().strip() or self.extract(item, 'title="', '"')
            cover = (item('.img img').attr('data-original') or 
                     item('img[data-original]').attr('data-original') or 
                     item('img').attr('data-original') or 
                     self.extract(item.html(), 'data-original="', '"'))
            remarks = self.extract(item, '<div class="duration">', '</div>')
            print(f"Raw cover extracted in getlist: {cover}")
            if cover and not cover.startswith('http'):
                cover = f"https:{cover}"
            video = {
                'vod_id': vod_id,
                'vod_name': title,
                'vod_pic': cover if cover else '',
                'vod_remarks': remarks or '',
                'style': {"type": "rect", "ratio": 1.33}
            }
            videos.append(video)
        return videos

    def extract(self, data, start, end):
        try:
            text = data.html() if hasattr(data, 'html') else str(data)
            s = text.find(start)
            if s == -1:
                return ''
            s += len(start)
            e = text.find(end, s)
            if e == -1:
                return ''
            return text[s:e].strip()
        except:
            return ''

    def getpq(self, data):
        try:
            return pq(data.text)
        except:
            return pq(data.text.encode('utf-8'))

    def destroy(self):
        pass
