# -*- coding: utf-8 -*-
import re
import time
import random
import json
import base64
from Crypto.Hash import MD5
from pyquery import PyQuery as pq
sys.path.append("..")
from base.spider import Spider

class Spider(Spider):
    def __init__(self):
        self.host = "https://25kkuu.vip"  # 目标站点域名
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': self.host + '/xjzy',
            'X-Requested-With': 'XMLHttpRequest'
        }

    # 首页分类+最新视频
    def homeContent(self, filter):
        try:
            html = self.fetch(f"{self.host}/xjzy", headers=self.headers).text
            doc = pq(html)
            result = {'class': [], 'list': []}

            # 分类解析（需根据实际导航栏结构调整选择器）
            for item in doc('.nav-container a[href*="/type/"]').items():
                result['class'].append({
                    'type_name': item.text().strip(),
                    'type_id': item.attr('href').split('/')[-1]
                })

            # 视频列表（需根据实际列表结构调整选择器）
            for item in doc('.video-list .video-item').items():
                result['list'].append({
                    'vod_id': item.attr('data-id'),
                    'vod_name': item.find('.title').text(),
                    'vod_pic': item.find('img').attr('data-src'),
                    'vod_remarks': item.find('.score').text()
                })
            return result
        except Exception as e:
            print(f"首页解析失败: {str(e)}")
            return {'class': [], 'list': []}

    # 分类页
    def categoryContent(self, tid, pg, filter, extend):
        try:
            # 需抓取真实分页接口（示例为模拟请求）
            params = {
                'type': tid,
                'page': pg,
                't': int(time.time() * 1000),
                'sign': self.generate_sign(tid, pg)  # 需逆向签名算法
            }
            api_url = f"{self.host}/api/vod_list"
            resp = self.post(api_url, headers=self.headers, data=params).json()
            
            return {
                'list': [{
                    'vod_id': item['id'],
                    'vod_name': item['title'],
                    'vod_pic': item['cover'],
                    'vod_remarks': f"评分：{item['score']}"
                } for item in resp['data']],
                'page': pg,
                'pagecount': resp['page_count'],
                'total': resp['total']
            }
        except Exception as e:
            print(f"分类页异常: {str(e)}")
            return {'list': [], 'page': 1, 'pagecount': 1, 'total': 0}

    # 详情页解析
    def detailContent(self, ids):
        try:
            detail_url = f"{self.host}/vod/{ids[0]}.html"
            html = self.fetch(detail_url, headers=self.headers).text
            doc = pq(html)
            
            # 基础信息（需调整选择器）
            info = {
                'vod_id': ids[0],
                'vod_name': doc('.video-title').text(),
                'vod_year': doc('.year').text().replace('年份：', ''),
                'vod_actor': ' '.join([i.text() for i in doc('.actors a').items()]),
                'vod_content': doc('.description').text().strip(),
                'vod_play_from': '$$$'.join([i.text() for i in doc('.play-source-tab a').items()]),
                'vod_play_url': self.parse_play_urls(doc)  # 解析分集
            }
            return {'list': [info]}
        except Exception as e:
            print(f"详情页解析失败: {str(e)}")
            return {'list': []}

    # 解析播放地址（需根据实际播放器结构修改）
    def parse_play_urls(self, doc):
        play_urls = []
        for source in doc('.play-list').items():
            episodes = []
            for ep in source.find('.ep-item a').items():
                episodes.append(f"{ep.text()}${ep.attr('href')}")
            play_urls.append('#'.join(episodes))
        return '$$$'.join(play_urls)

    # 搜索功能
    def searchContent(self, key, quick, pg=1):
        try:
            search_api = f"{self.host}/api/search?kw={key}&page={pg}"
            resp = self.get(search_api, headers=self.headers).json()
            return {
                'list': [{
                    'vod_id': item['id'],
                    'vod_name': item['title'],
                    'vod_pic': item['cover'],
                    'vod_remarks': item['type']
                } for item in resp['data']]
            }
        except Exception as e:
            print(f"搜索失败: {str(e)}")
            return {'list': []}

    # 播放地址解析（需适配目标站点的加密逻辑）
    def playerContent(self, flag, id, vipFlags):
        try:
            # 示例解密逻辑（需根据实际逆向）
            enc_data = re.search(r"var encData = '(.*?)'", html).group(1)
            decoded = base64.b64decode(enc_data[::-1]).decode()
            m3u8_url = json.loads(decoded)['url']
            
            return {
                "parse": 0,  # 0=直接播放，1=嗅探
                "url": m3u8_url,
                "header": self.headers
            }
        except Exception as e:
            print(f"播放地址解析失败: {str(e)}")
            return {"parse": 0, "url": ""}

    # 签名生成示例（需逆向目标站点算法）
    def generate_sign(self, tid, pg):
        raw_str = f"{tid}{pg}{int(time.time())}SALT_KEY"
        return MD5.new(raw_str.encode()).hexdigest()

    # 其他必要工具方法
    def isVideoFormat(self, url):
        return True if re.search(r'\.(m3u8|mp4|flv|avi)', url) else False

    def manualVideoCheck(self):
        pass

    def getName(self):
        return "25K影视"
