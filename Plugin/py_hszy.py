# -*- coding: utf-8 -*-
import json
import re
import sys
import requests
from pyquery import PyQuery as pq
from urllib.parse import urlparse, urljoin
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

sys.path.append('..')
from base.spider import Spider

class Spider(Spider):
    name = "香蕉資源"
    base_url = "https://25kkuu.vip/xjzy"
    version = "2024.07.15"

    def init(self, extend=""):
        # 初始化會話配置
        self.session = requests.Session()
        self.retries = Retry(total=3, backoff_factor=1, 
                           status_forcelist=[500, 502, 503, 504])
        self.session.mount('https://', HTTPAdapter(max_retries=self.retries))
        
        # 配置擴展參數
        try:
            if extend:
                extend_data = json.loads(extend)
                self.base_url = extend_data.get('host', self.base_url).rstrip('/')
                self.session.proxies = extend_data.get('proxies', {})
        except Exception as e:
            print(f"擴展參數解析失敗: {e}")

        # 請求頭配置
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'Referer': self.base_url + '/',
            'X-Requested-With': 'XMLHttpRequest'
        }

    def getName(self):
        return self.name

    def homeContent(self, filter):
        try:
            html = self._fetchUrl(self.base_url)
            doc = pq(html)
            
            # 分類解析
            classes = []
            nav_items = doc('.nav-menu a[href*="/xjzy/"]')
            for item in nav_items.items():
                href = item.attr('href')
                if match := re.search(r'/xjzy/([a-z-]+)\.html', href):
                    classes.append({
                        'type_name': item.text().strip(),
                        'type_id': match.group(1)
                    })
            
            # 首頁視頻列表
            video_list = self._parseVideoList(doc('.list-videos .item'))
            
            return {
                'class': classes,
                'list': video_list
            }
        except Exception as e:
            print(f"首頁解析異常: {e}")
            return {'class': [], 'list': []}

    def categoryContent(self, tid, pg, filter, extend):
        try:
            url = f"{self.base_url}/{tid}/{pg}.html"
            html = self._fetchUrl(url)
            doc = pq(html)
            return {
                'list': self._parseVideoList(doc('.list-videos .item')),
                'page': int(pg),
                'pagecount': 9999,
                'limit': 30,
                'total': 999999
            }
        except Exception as e:
            print(f"分類頁異常 [{tid}-{pg}]: {e}")
            return {'list': []}

    def detailContent(self, ids):
        try:
            vid = ids[0]
            url = f"{self.base_url}/xplay{vid}.html"
            html = self._fetchUrl(url)
            doc = pq(html)
            
            # 基礎信息
            title = doc('h1.title').text().strip()
            cover = self._parseCover(doc('.video-cover img'))
            desc = doc('.video-info .content').text().strip()
            
            # 播放源解析
            play_url = self._parsePlayerUrl(html)
            
            return {
                'list': [{
                    'vod_id': vid,
                    'vod_name': title,
                    'vod_pic': cover,
                    'vod_content': desc,
                    'vod_play_from': '香蕉資源',
                    'vod_play_url': play_url
                }]
            }
        except Exception as e:
            print(f"詳情頁解析失敗 [{vid}]: {e}")
            return {'list': []}

    def playerContent(self, flag, id, vipFlags):
        try:
            # 直接播放地址
            if id.startswith('http'):
                return {'header': self.headers, 'url': id}
            
            # 頁面解析播放地址
            html = self._fetchUrl(id)
            m3u8_url = self._extractM3U8(html)
            
            if m3u8_url:
                return {
                    'parse': 0,
                    'url': m3u8_url,
                    'header': {**self.headers, 'Referer': id}
                }
            return {'parse': 1, 'url': id}
        except Exception as e:
            print(f"播放解析失敗: {e}")
            return {'parse': 1, 'url': id}

    def searchContent(self, key, quick, pg=1):
        try:
            url = f"{self.base_url}/vod/search/{key}-{pg}.html"
            html = self._fetchUrl(url)
            doc = pq(html)
            return {
                'list': self._parseVideoList(doc('.list-videos .item')),
                'pagecount': 9999
            }
        except Exception as e:
            print(f"搜索異常 [{key}]: {e}")
            return {'list': []}

    # 工具函數 --------------------------------------------------
    def _fetchUrl(self, url, retry=2):
        """帶重試的請求函數"""
        try:
            resp = self.session.get(url, 
                                  headers=self.headers,
                                  timeout=15,
                                  allow_redirects=True)
            resp.raise_for_status()
            resp.encoding = 'utf-8'
            return resp.text
        except Exception as e:
            if retry > 0:
                return self._fetchUrl(url, retry-1)
            raise Exception(f"請求失敗 [{url}]: {e}")

    def _parseVideoList(self, items):
        """解析視頻列表"""
        videos = []
        for item in items.items():
            try:
                # 視頻ID解析
                href = item('a').attr('href')
                vid = re.search(r'xplay(\d+)\.html', href).group(1)
                
                # 封面處理
                img = item('img')
                cover = img.attr('data-src') or img.attr('src')
                cover = self._normalizeUrl(cover)
                
                videos.append({
                    'vod_id': vid,
                    'vod_name': item('.title').text().strip(),
                    'vod_pic': cover,
                    'vod_remarks': item('.duration').text()
                })
            except Exception as e:
                print(f"列表項解析失敗: {e}")
        return videos

    def _parseCover(self, img_element):
        """解析封面圖"""
        img = pq(img_element)
        for attr in ['data-src', 'src', 'data-original']:
            if url := img.attr(attr):
                return self._normalizeUrl(url)
        return ''

    def _normalizeUrl(self, url):
        """URL標準化"""
        if not url:
            return ''
        if url.startswith('//'):
            return f'https:{url}'
        if url.startswith('/'):
            return f'{self.base_url}{url}'
        if not url.startswith('http'):
            return f'https://{url}'
        return url

    def _parsePlayerUrl(self, html):
        """解析播放地址"""
        # 優先從JS變量提取
        if match := re.search(r'"url"\s*:\s*"(https?://[^"]+)"', html):
            return match.group(1).replace('\\', '')
        
        # 從iframe嵌套頁面提取
        if iframe_src := re.search(r'<iframe[^>]+src="([^"]+)"', html):
            iframe_url = self._normalizeUrl(iframe_src.group(1))
            iframe_html = self._fetchUrl(iframe_url)
            if m3u8 := re.search(r'src:\s*"(https?://[^"]+\.m3u8)"', iframe_html):
                return m3u8.group(1)
        
        # 深度嗅探
        if m3u8 := re.search(r'(https?://[^\s"\'<>]+?\.m3u8)', html):
            return m3u8.group(0)
        
        return ''

    def destroy(self):
        self.session.close()
