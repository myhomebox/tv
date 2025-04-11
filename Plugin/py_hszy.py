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
        self.session = requests.Session()
        self.retries = Retry(total=3, backoff_factor=1, 
                           status_forcelist=[500, 502, 503, 504])
        self.session.mount('https://', HTTPAdapter(max_retries=self.retries))
        
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'Referer': self.base_url + '/',
            'X-Requested-With': 'XMLHttpRequest'
        }

        try:
            if extend:
                extend_data = json.loads(extend)
                self.base_url = extend_data.get('host', self.base_url).rstrip('/')
                self.session.proxies = extend_data.get('proxies', {})
        except Exception as e:
            print(f"擴展參數解析失敗: {e}")

    # ----------- 關鍵修覆部分 -----------
    def categoryContent(self, tid, pg, filter, extend):
        try:
            # 修正分類頁URL模式
            url = f"{self.base_url}/vod/show/{tid}/--------{pg}---.html"
            print(f"分類頁URL: {url}")  # 調試日志
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
            print(f"分類頁異常 [{tid}-{pg}]: {str(e)}")
            return {'list': []}

    def _parseVideoList(self, items):
        videos = []
        for item in items.items():
            try:
                href = item('a').attr('href')
                print(f"原始href: {href}")  # 調試日志
                
                # 增強ID提取
                vid = None
                patterns = [
                    r'xplay(\d+)\.html',
                    r'-(\d+)\.html',
                    r'/video/(\d+)/'
                ]
                for pattern in patterns:
                    if match := re.search(pattern, href):
                        vid = match.group(1)
                        break
                
                if not vid:
                    print(f"無法解析視頻ID: {href}")
                    continue
                
                # 封面處理
                img = item('img')
                cover = self._normalizeUrl(
                    img.attr('data-src') or 
                    img.attr('src') or 
                    img.attr('data-original')
                )
                
                videos.append({
                    'vod_id': vid,
                    'vod_name': item('.title').text().strip(),
                    'vod_pic': cover,
                    'vod_remarks': item('.duration').text()
                })
            except Exception as e:
                print(f"列表項解析失敗: {str(e)}")
        return videos

    def _parsePlayerUrl(self, html):
        """增強版播放地址解析"""
        # 模式1：JSON數據塊
        if match := re.search(r'var playerData = ({.*?});', html, re.DOTALL):
            try:
                data = json.loads(match.group(1))
                return data.get('url', '')
            except json.JSONDecodeError:
                pass
        
        # 模式2：iframe嵌套
        if iframe_src := re.search(r'<iframe[^>]+src="(https?://[^"]+)"', html):
            print(f"發現iframe: {iframe_src.group(1)}")
            iframe_html = self._fetchUrl(iframe_src.group(1))
            return self._parsePlayerUrl(iframe_html)  # 遞歸解析
        
        # 模式3：標準m3u8匹配
        if m3u8 := re.search(r'(https?://[^\s"\'<>]+?\.m3u8)', html):
            return m3u8.group(0)
        
        return ''

    # ----------------------------------
    # 其余保持原有代碼結構（homeContent/detailContent等）
    # ...

    def _fetchUrl(self, url, retry=2):
        """帶調試的請求方法"""
        print(f"🌀 請求: {url}")
        try:
            resp = self.session.get(url, headers=self.headers, timeout=15)
            print(f"響應狀態: {resp.status_code}")
            resp.raise_for_status()
            return resp.text
        except Exception as e:
            print(f"❌ 請求失敗 [{url}]: {str(e)}")
            if retry > 0:
                return self._fetchUrl(url, retry-1)
            return ""

if __name__ == '__main__':
    # 本地測試代碼
    spider = Spider()
    spider.init()
    
    # 測試首頁
    print("測試首頁:", spider.homeContent({}))
    
    # 測試分類頁
    print("測試分類:", spider.categoryContent("cn-jieshuoyuanpian", 1, {}, {}))
    
    # 測試詳情頁
    print("測試詳情:", spider.detailContent(["123"]))  # 替換實際ID
