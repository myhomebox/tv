#coding=utf-8
#!/usr/bin/python
#小司机奉献
import sys
sys.path.append('..') 
from base.spider import Spider
import json
import re
import base64
from urllib.parse import unquote

class Spider(Spider):  # 元类 默认的元类 type
	def getName(self):
		return "NO视频"
	def init(self,extend=""):
		print("============{0}============".format(extend))
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def reStr(self, src, reg, group=1):
		m = re.search(reg, src)
		src = ''
		if m:
			src = m.group(group)
		return src
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"电影":"movie",
			"剧集":"tv",
			"综艺":"shows",
			"动画":"anime",
			"音乐":"music",
			"短片":"short",
			"其他":"ohter"
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name':k,
				'type_id':cateManual[k]
			})
		result['class'] = classes
		return result
	def homeVideoContent(self):
		result = {
		    'list': []
		}
		return result
	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url = 'https://www.novipnoad.net/{0}/page/{1}/'.format(tid,pg)
		rsp = self.fetch(url, headers=self.header)
		root = self.html(self.cleanText(rsp.text))
		aList = root.xpath('//div[@class="video-listing-content   "]//div[@class="qv_tooltip"]')
		videos = []
		for a in aList:
			na = a.xpath("./@title")[0]
			rootb = self.html(na)
			name = rootb.xpath(".//a/@title")[0]
			if "(" in name:
				realname = self.reStr(name,"】(.*)\(")
			else:
				realname = self.reStr(name,"】(.*)")
			remark = self.reStr(name,"(【.*?】)")
			year = self.reStr(name,"\((.*?)\)")
			pic = a.xpath("./div/a/img/@data-original")[0]
			sid = a.xpath("./div/a/@href")[0]
			videos.append({
				"vod_id":sid,
				"vod_name":realname,
				"vod_pic":pic,
				"vod_remarks": remark,
				"vod_year": year
			})
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = 9999
		result['limit'] = 90
		result['total'] = 999999
		return result
	def detailContent(self,array):
		tid = array[0]
		vod = {
			"vod_id":tid,
			"vod_name":"",
			"vod_pic":"",
			"type_name":"",
			"vod_content": "🔥小司机出品,必属精品",
			"vod_play_from": "精彩线路",
			"vod_play_url": "播放$" + tid
		}
		result = {
			'list':[
				vod
			]
		}
		return result
	#未写搜索下面的可忽略
	def searchContent(self,key,quick):  
		url = ''.format(key)
		rsp = self.fetch(url)
		root = self.html(rsp.text)
		aList = root.xpath("//ul[@class='stui-vodlist__media col-pd clearfix']/li/div[1]/a")
		videos = []
		for a in aList:
			name = a.xpath('./@title')[0]
			pic = a.xpath('./@data-original')[0]
			mark = a.xpath("./span[@class='pic-text text-right']/text()")[0]
			sid = a.xpath("./@href")[0]
			sid = self.reStr(sid,"/detail/(\\S+).html")
			videos.append({
				"vod_id":sid,
				"vod_name":name,
				"vod_pic":pic,
				"vod_remarks":mark
			})

		result = {
			'list':videos
		}
		return result
	header = {
		"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36"
	}
	def playerContent(self,flag,id,vipFlags):
		result = {}
		result["parse"] = 1
		result["playUrl"] = ""
		result["url"] = id
		result["header"] = self.header
		result["click"] = "document.getElementById('player-embed').click()"
		return result
	def localProxy(self,param):
		return [200, "video/MP2T", action, ""]