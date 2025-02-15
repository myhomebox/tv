#coding=utf-8
#!/usr/bin/python
import re
import json
import time
import requests
from sys import path
from math import ceil
from lxml import etree
from hashlib import md5
from random import random
from base64 import b64decode
from urllib.parse import unquote
from difflib import SequenceMatcher
from concurrent.futures import ThreadPoolExecutor, as_completed

path.append('..')
from units import cleanText, removeHtmlTags, setCache, getCache, delCache

class BOOKREADER():  # 元类 默认的元类 type
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

	def homeContent(self, filter):
		result = {}
		result['class'] = [{'type_id': '{"pf": "lyts", "id": "t1"}', 'type_name': '玄幻'}, {'type_id': '{"pf": "lyts", "id": "t2"}', 'type_name': '修真'}, {'type_id': '{"pf": "lyts", "id": "t3"}', 'type_name': '灵异'}, {'type_id': '{"pf": "lyts", "id": "t4"}', 'type_name': '言情'}, {'type_id': '{"pf": "lyts", "id": "t28"}', 'type_name': '都市'}, {'type_id': '{"pf": "lyts", "id": "t5"}', 'type_name': '穿越'}, {'type_id': '{"pf": "lyts", "id": "t6"}', 'type_name': '粤语'}, {'type_id': '{"pf": "lyts", "id": "t7"}', 'type_name': '网游'}, {'type_id': '{"pf": "lyts", "id": "t8"}', 'type_name': '评书'}, {'type_id': '{"pf": "lyts", "id": "t9"}', 'type_name': '相声'}, {'type_id': '{"pf": "lyts", "id": "t10"}', 'type_name': '讲坛'}, {'type_id': '{"pf": "lyts", "id": "t11"}', 'type_name': '通俗'}, {'type_id': '{"pf": "lyts", "id": "t12"}', 'type_name': '历史'}, {'type_id': '{"pf": "lyts", "id": "t13"}', 'type_name': '军事'}, {'type_id': '{"pf": "lyts", "id": "t14"}', 'type_name': '悬疑'}, {'type_id': '{"pf": "lyts", "id": "t15"}', 'type_name': '商战'}, {'type_id': '{"pf": "lyts", "id": "t16"}', 'type_name': '儿童'}, {'type_id': '{"pf": "lyts", "id": "t19"}', 'type_name': '商业'}, {'type_id': '{"pf": "lyts", "id": "t20"}', 'type_name': '生活'}, {'type_id': '{"pf": "lyts", "id": "t21"}', 'type_name': '教材'}, {'type_id': '{"pf": "lyts", "id": "t24"}', 'type_name': '戏曲'}, {'type_id': '{"pf": "lyts", "id": "t17"}', 'type_name': '广播剧'}, {'type_id': '{"pf": "lyts", "id": "t27"}', 'type_name': '脱口秀'}, {'type_id': '{"pf": "lyts", "id": "t22"}', 'type_name': '外文原版'}, {'type_id': '{"pf": "lyts", "id": "t23"}', 'type_name': '期刊杂志'}, {'type_id': '{"pf": "lyts", "id": "t18"}', 'type_name': 'EBC5系列'}]

		if filter:
			result['filters'] = {}
			for resultClass in result['class']:
				result['filters'].update({resultClass['type_id']: {'key': '排序', 'name': '排序', "value": [{"n": "默认", "v": ""}, {"n": "人气", "v": "o1"}, {"n": "时间", "v": "o2"}]}})
		return result, 1

	def categoryContent(self, tid, pg, ext):
		result = {}
		videos = []
		header = self.header.copy()
		params = json.loads(tid)
		cid = params['id']
		pf = params['pf']
		if pf == 'lyts':
			header['Referer'] = "http://m.6yueting.com/"
			url = 'http://m.6yueting.com/ys/{}'.format(cid)
			for key in ext:
				if ext[key] == '':
					continue
				url = url + '/' + ext[key]
			url = url + '/p{}'.format(pg)
			r = requests.get(url, headers=header, timeout=5)
			html = etree.HTML(cleanText(r.text))
			vodList = html.xpath("//div[contains(@class,'list-wrapper')]/ul/a")
			try:
				pagecount = int(html.xpath("//div[contains(@class,'pagination page-width')]/span/text()")[0].split('/')[1])
			except:
				pagecount = pg
			for vod in vodList:
				img = vod.xpath(".//img/@src")[0]
				vid = re.search(r'/list/(.*)', vod.xpath("./@href")[0]).group(1)
				title = vod.xpath(".//h2/text()")[0].strip()
				remark = vod.xpath(".//div[contains(@class,'broadcaster')]/span[contains(@style,'color')]/text()")[0].strip()
				videos.append({
					"vod_id": f'{{"pf": "lyts", "id": "{vid}"}}',
					"vod_name": title,
					"vod_pic": img + '@User-Agent=Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Edg/116.0.1938.76@Referer=http://m.6yueting.com/',
					"vod_remarks": remark
				})
		else:
			header['Referer'] = "https://m.ting13.com/"
			url = 'https://m.ting13.cc/youshengxiaoshuo/{}'.format(cid)
			r = requests.get(url, headers=header, timeout=5)
			html = etree.HTML(cleanText(r.text))
			img = html.xpath("//div[contains(@style,'margin-bottom')]/div/img/@src")[0]
			title = html.xpath("//div[contains(@style,'margin-bottom')]/div/img/@alt")[0].strip()
			remark = '更新时间：' + html.xpath("//div[contains(@class,'book-rand-a')]/text()")[-1].strip().split()[1]
			maxEpisodes = ceil(int(html.xpath("//span[contains(@class,'more fr')]/em/text()")[0].strip())/30) + 1
			pagecount = pg
			for episode in range(1, maxEpisodes):
				videos.append({
					"vod_id": f'{{"pf": "13ts", "id": "{cid}", "episode": "{episode}"}}',
					"vod_name": '{}|第{}-{}集'.format(title, (episode-1)*30+1, episode*30),
					"vod_pic": img,
					"vod_remarks": remark
				})
		lenvideos = len(videos)
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = pagecount
		result['limit'] = lenvideos
		result['total'] = lenvideos
		return result, 14400

	def detailContent(self, ids):
		params = json.loads(ids)
		pf = params['pf']
		header = self.header.copy()
		if pf == 'lyts':
			header['Referer'] = "http://m.6yueting.com/"
			r = requests.get(f'http://m.6yueting.com/list/{params["id"]}', headers=header, timeout=5)
			html = etree.HTML(cleanText(r.text))
			name = html.xpath(".//div[contains(@class,'desc')]/h2/text()")[0].strip()
			img = html.xpath(".//div[contains(@class,'book clearfix')]/img/@src")[0].strip() +'@User-Agent=Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Edg/116.0.1938.76@Referer=http://m.6yueting.com/'
			infos = html.xpath(".//div[contains(@class,'desc')]/div/span/text()")
			actor = infos[1].strip()
			director = infos[2].strip()
			content = html.xpath(".//div[contains(@class,'book-intro tab-cont')]/text()")[0].strip()
			episodesList = html.xpath(".//div[contains(@class,'book-list clearfix')]/a")
			playUrl = ''
			playFrom = '六月听书'
			for episode in episodesList:
				vid = episode.xpath(".//text()")[0].strip()
				playUrl += f'#{vid}${params["id"]}_{vid}'
		elif pf == '13ts':
			header['Referer'] = "https://m.ting13.cc/"
			url = f'https://m.ting13.cc/youshengxiaoshuo/{params["id"]}/?p={params["episode"]}'
			r = requests.get(url, headers=header, timeout=5)
			html = etree.HTML(cleanText(r.text))
			img = html.xpath("//div[contains(@style,'margin-bottom')]/div/img/@src")[0]
			name = html.xpath("//div[contains(@style,'margin-bottom')]/div/img/@alt")[0].strip()
			director = html.xpath("//div[contains(@class,'book-rand-a')]/a/text()")[1].strip()
			actor = html.xpath("//div[contains(@class,'book-rand-a')]/a/text()")[2].strip()
			content = html.xpath("//div[contains(@class,'book-des')]/text()")[0].strip()
			content = ''.join(content).replace('\u3000', '')
			episodesList = html.xpath(".//div[contains(@class,'play-list')]/ul/li")
			playUrl = ''
			playFrom = '13听书'
			for episode in episodesList:
				title = episode.xpath("./a/text()")[0]
				vid = re.search(r'/play/(.*?).html', episode.xpath("./a/@href")[0]).group(1)
				playUrl += f'#{title}${vid}'
		else:
			name = ''
			img = ''
			director = ''
			actor = ''
			content = ''
			playFrom = ''
			playUrl = ''
		vod = {
			"vod_id": ids,
			"vod_name": name,
			"vod_pic": img,
			"vod_director": director,
			"vod_actor": actor,
			"vod_content": content,
			"vod_play_from": playFrom,
			"vod_play_url": playUrl.strip('#')
		}
		result = {'list': [vod]}
		return result, 14400

	def searchContent(self, key, pg, quick):
		items = []
		keyword = re.sub(r'(\(.*?\)|\[.*?\]|\{.*?\}|（.*?）)', '', key)
		if pg == 1:
			siteList = ['lyts', '13ts']
		else:
			siteList = getCache('bookreadersiteList_{}_{}'.format(keyword, pg))
			delCache('bookreadersiteList_{}_{}'.format(keyword, pg))
			if not siteList:
				return {'list': items}, 600
		contents = []
		with ThreadPoolExecutor(max_workers=3) as executor:
			searchList = []
			try:
				for site in siteList:
					params = {'key': key, 'pg': pg, 'tag': site}
					future = executor.submit(self.runSearch, params)
					searchList.append(future)
				for future in as_completed(searchList, timeout=30):
					contents.append(future.result())
			except:
				executor.shutdown(wait=False)
		nextpageList = []
		for content in contents:
			if content is None:
				continue
			key = list(content.keys())[0]
			infos = content[key]
			items = items + content[key][0]
			nextpageList.append(infos[1])
			if not infos[1]:
				siteList.remove(key)
		setCache('bookreadersiteList_{}_{}'.format(keyword, pg+1), siteList)
		result = {
			'list': items
		}
		return result, 600

	def runSearch(self, params):
		tag = params['tag']
		try:
			funList = dir(BOOKREADER)
			defname = 'self.search' + tag
			if defname.replace('self.', '') in funList and tag != '':
				result = eval(defname)(params)
				return result
		except:
			return {tag: [[], False]}

	def searchlyts(self, params):
		items = []
		tag = params['tag']
		key = re.sub(r'\(.*?\)|（.*?）', '', params['key'])
		pg = params['pg']
		header = self.header.copy()
		header['Referer'] = "http://m.6yueting.com/"
		url = 'http://m.6yueting.com/search/index/search?content={}&type=1&pageNum={}&pageSize=10'.format(key, pg)
		r = requests.get(url, headers=header, timeout=15)
		data = r.json()
		vodList = data['data']['content']
		for vod in vodList:
			sid = vod['code']
			name = removeHtmlTags(vod['name'])
			if SequenceMatcher(None, name, key).ratio() < 0.6 and key not in name:
				continue
			img = 'http://img.6yueting.com:20001/{}'.format(vod['coverUrlLocal'])+'@User-Agent=Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Edg/116.0.1938.76@Referer=http://m.6yueting.com/'
			if vod['udate']:
				remark = '六月听书|' + vod['udate'].strip().split()[0].strip()
			else:
				remark = '六月听书|未知'
			items.append({
				"vod_id": f'{{"pf": "lyts", "id": "{sid}"}}',
				"vod_name": name,
				"vod_pic": img,
				"vod_remarks": remark
			})
		return {tag: [items, pg < data['data']['totalPages']]}

	def search13ts(self, params):
		items = []
		header = self.header.copy()
		tag = params['tag']
		key = re.sub(r'\(.*?\)|（.*?）', '', params['key'])
		pg = params['pg']
		header['Referer'] = "https://m.ting13.cc/"
		url = 'https://m.ting13.cc/api/ajax/solist?word={}&type=name&page={}&order=1'.format(key, pg)
		r = requests.get(url, headers=header, timeout=15)
		data = r.json()
		vodList = data['data']
		for vod in vodList:
			sid = re.search(r'/youshengxiaoshuo/(.*?)/', vod['novel']['url']).group(1)
			name = removeHtmlTags(vod['novel']['name'])
			if SequenceMatcher(None, name, key).ratio() < 0.6 and key not in name:
				continue
			img = vod['novel']['cover']
			if vod['novel']['lasttime']:
				remark = '13听书|' + vod['novel']['lasttime'].strip()
			else:
				remark = '13听书|未知'
			items.append({
				"vod_id": f'{{"pf": "13ts", "id": "{sid}"}}',
				"vod_name": name,
				"vod_pic": img,
				"vod_tag": 'folder',
				"vod_remarks": remark
			})
		return {tag: [items, pg * 10 < data['cnum']]}

	def playerContent(self, flag, pid):
		result = {}
		header = self.header.copy()
		if flag == '六月听书':
			pids = pid.split('_')
			code = pids[0]
			no = pids[1]
			r = requests.get('http://m.6yueting.com/play/{}/{}'.format(code, no), headers=header, timeout=5)
			come = re.search(r'data-come=\"(\d+)\"', r.text).group(1)
			if come == '100':
				header['Referer'] = "http://m.6yueting.com/"
			timestamp = int(time.time() * 1000)
			sign = md5((str(timestamp) + code + no + 'FRDSHFSKVKSKFKS').encode()).hexdigest()
			url = 'http://m.6yueting.com/web/index/video_new?code={}&no={}&type=0&timestamp={}&sign={}'.format(code, no, timestamp, sign)
			r = requests.get(url, headers=header, timeout=5)
			purl = r.json()['data']['videoUrl']
		elif flag == '13听书':
			header['Referer'] = "https://m.ting13.cc/"
			r = requests.get(f'https://m.ting13.cc/play/{pid}.html', headers=header, timeout=5)
			sc = re.search(r'meta .*?=\"_c\".*?=\"(.*?)\"', r.text).group(1)
			src = 'PXhw7U1B0a9kQDKZsTjIASmOeNzxYG4CHo1JyRfg2b8FLpEvr3FtVnlqMidu6c'
			sp = ''
			for pos in range(len(sc)):
				try:
					index = src.index(sc[pos])
					char = src[(index + 3) % 62]
				except:
					char = sc[pos]
				sp += src[int(random() * 62)] + char + src[int(random() * 62)]
			header['sc'] = sc
			header['sp'] = sp
			nid = pid.split('_')[0]
			cid = pid.split('_')[2]
			r = requests.post('https://m.ting13.cc/api/mapi/play', params={'nid': nid, 'cid': cid, 'sort': 'read'}, headers=header, cookies=r.cookies, timeout=5)
			purl = r.json()['url']
			del header['sc']
			del header['sp']
		else:
			purl = ''
		result["parse"] = 0
		result["header"] = header
		result["url"] = purl
		return result, 1800

	header = {
		"User-Agent":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Edg/116.0.1938.76"
	}
