#coding=utf-8
#!/usr/bin/python
import re
import json
import time

import requests
from lxml import etree
from base64 import b64decode
from urllib.parse import unquote

class SPORT():  # 元类 默认的元类 type
	def getInfo(self, params):
		if 'wd' in params and params['wd'] != '':
			return self.searchContent(params['wd'], params['pg'], params['quick'] if 'quick' in params else False)
		elif 't' in params and params['t'] != '':
			return self.categoryContent(params['t'], params['pg'], json.loads(b64decode(unquote(params['ext'])).decode()))
		elif 'ids' in params and params['ids'] != '':
			return self.detailContent(params['ids'])
		elif 'play' in params and params['play'] != '':
			return self.playerContent(params['flag'] if 'flag' in params else '', params['play'])
		else:
			return self.homeContent(params['filter'])

	def homeContent(self,filter):
		result = {}
		cateManual = {
			"体育直播": "全部"
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name': k,
				'type_id': cateManual[k]
			})
		result['class'] = classes
		if(filter):
			result['filters'] = self.config['filter']
		return result, 14400

	def categoryContent(self, tid, pg, ext):
		result = {}
		videos = []
		try:
			url = f'http://www.fifa2022.tv/{ext["cid"]}.html'
		except:
			url = 'http://www.fifa2022.tv/'
		r = requests.get(url, headers=self.header, timeout=10)
		root = etree.HTML(r.content.decode())
		dataList = root.xpath("//div[@class='data']/table/tbody/tr")
		date = ''
		for data in dataList:
			if data.attrib['class'] == 'head':
				continue
			elif data.attrib['class'] == 'date':
				match = re.search(r'\d+年(\d+)月(\d+)日', data.xpath('./td/text()')[0].split('\xa0')[0].strip())
				date = f'{match.group(1)}/{match.group(2)}'
				continue
			else:
				startTime = data.xpath("./td")[2].xpath("./text()")[0].strip()
				matchType = data.xpath("./td[@class='matcha']/a/text()")[0].strip()
				try:
					name = ' '.join(data.xpath("./td[@colspan='3']/text()")[0].split())
				except:
					hostTeam = data.xpath("./td[contains(@id,'team')]//text()")[0]
					guestTeam = data.xpath("./td[contains(@d,'team')]//text()")[0]
					name = f"{hostTeam} vs {guestTeam}"
			vidList = []
			for vid in data.xpath("./td[@class='live_link']/a"):
				url = vid.xpath("./@href")[0].strip()
				title = vid.xpath("./text()")[0].strip()
				if '更多' in title or '比分' in title or url == '':
					continue
				vidList.append({'name': name, 'title': title, 'url': url})
			if vidList == []:
				continue
			videos.append({
				"vod_id": json.dumps(vidList, ensure_ascii=False),
				"vod_name": name,
				"vod_remarks": f'{date}-{startTime}|{matchType}'
			})

		result['list'] = videos
		result['page'] = 1
		result['pagecount'] = 1
		result['limit'] = len(videos)
		result['total'] = len(videos)
		return result, 1

	def detailContent(self, ids):
		videoList = json.loads(ids)
		name = videoList[0]['name']
		vod = {
			"vod_id": ids,
			"vod_name": name
		}
		vodPlayUrl = ''
		vodPlayFrom = ''
		for video in videoList:
			vodPlayUrl += f'{video["name"]}${video["url"]}$$$'
			vodPlayFrom += f'{video["title"]}$$$'
		vod['vod_play_url'] = vodPlayUrl.strip('$$$')
		vod['vod_play_from'] = vodPlayFrom.strip('$$$')
		result = {
			'list': [
				vod
			]
		}
		return result, 14400

	def searchContent(self, key, pg, quick):
		result = {
			'list':[]
		}
		return result, 1

	def playerContent(self, flag, pid):
		result = {}
		parse = 0
		retry = 0
		url = pid
		header = self.header.copy()
		while retry < 10:
			retry += 1
			r = requests.get(url, headers=header, timeout=5)
			try:
				url = re.search(r'iframe src=\"(.*?)\"', r.text).group(1)
				if not url.startswith('http'):
					if url.startswith('/'):
						url = r.url[:r.url.index('/')] + url[url.index('/'):]
					else:
						url = r.url[:r.url.rindex('/')] + url[url.index('/'):]
				if '.m3u8' in url or '.flv' in url:
					url = re.search(r'id=(.*)&?', url).group(1)
					break
				else:
					time.sleep(0.1)
			except:
				if 'var a1 = 'in r.text:
					src = re.search(r'var a1 = (.*?);', r.text).group(1).replace('\'', '').replace('\"', '')
				elif 'var originalString = ' in r.text:
					header['Referer'] = url
					src = re.search(r'var originalString = (.*?);', r.text).group(1).replace('\'', '').replace('\"', '')
				elif 'video: {url: ' in r.text:
					src = ''
					header['Referer'] = url
					match = re.search(r'video: {url: \'(http.*?)\'|video: {url: \"(http.*?)\"', r.text)
					url = match.group(match.lastindex)
				else:
					src = ''
					parse = 1
				b64Retry = 0
				while not ':' in src and src != '' and b64Retry <= 10:
					try:
						src = b64decode(src).decode()
					except:
						if self.retry <= 10:
							self.playerContent('', url)
							self.retry += 1
							time.sleep(0.1)
					finally:
						b64Retry += 1
				if src != '':
					url = src
					patternDictList = [{"kkkk": "http", "wcj": "/", "cjw": "m3u8", "@": "?", "%": "-", "#": ".", "~": "="}, {"wsss": "http", "@1@": "/", "@2@": "m3u8", "@3@": "?", "###": "-", "@5@": ".", "@6@": "="}]
					for patternDict in patternDictList:
						for key in patternDict:
							url = url.replace(key, patternDict[key])
						if 'http' in url:
							break
				break
		result["parse"] = parse
		result["playUrl"] = ''
		result["url"] = url
		result["header"] = header
		return result, 14400

	retry = 0
	config = {
		"filter": {"全部": [{"key": "cid", "name": "分类", "value": [{"n": "NBA", "v": "nba"}, {"n": "CBA", "v": "cba"}, {"n": "联赛", "v": "5"}, {"n": "西甲", "v": "xijia"}, {"n": "意甲", "v": "yijia"}, {"n": "德甲", "v": "dejia"}, {"n": "法甲", "v": "fajia"}, {"n": "中超", "v": "zhongchao"}, {"n": "英超", "v": "yingchao"}, {"n": "世界杯", "v": "shijiebei"}, {"n": "亚冠杯", "v": "yaguan"}, {"n": "欧洲杯", "v": "ouzhou"}, {"n": "美洲杯", "v": "meizhou"}]}]}
	}
	header = {
		"Referer": "http://www.fifa2022.tv/",
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36"
	}
