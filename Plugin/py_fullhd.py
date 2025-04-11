import requests
from bs4 import BeautifulSoup
import re
import sys
import json
import base64
import urllib.parse
from Crypto.Cipher import ARC4
from Crypto.Util.Padding import unpad
import binascii
from urllib.parse import urljoin
import warnings
from base.spider import Spider  # 假設這是框架基類

# 禁用SSL警告（僅測試環境使用）
warnings.filterwarnings('ignore', message='Unverified HTTPS request')

# 全局配置
xurl = "https://www.fullhd.xxx/zh/"
headerx = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': xurl  # 關鍵防盜鏈設置
}
pm = ''

class FullHDSpider(Spider):
    def __init__(self):
        super().__init__()
        self.xurl = xurl
        self.headerx = headerx

    def getName(self):
        return "FullHD蜘蛛"

    # 以下為框架要求必須實現的方法
    def init(self, extend):
        pass

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    # 核心方法：提取中間文本
    def extract_middle_text(self, text, start_str, end_str, pl, start_index1='', end_index2=''):
        try:
            if pl == 3:
                plx = []
                while True:
                    start_index = text.find(start_str)
                    if start_index == -1:
                        break
                    end_index = text.find(end_str, start_index + len(start_str))
                    if end_index == -1:
                        break
                    middle_text = text[start_index + len(start_str):end_index]
                    plx.append(middle_text)
                    text = text.replace(start_str + middle_text + end_str, '')
                if plx:
                    purl = ''
                    for item in plx:
                        matches = re.findall(start_index1, item)
                        output = ""
                        for match in matches:
                            match3 = re.search(r'(?:^|[^0-9])(\d+)(?:[^0-9]|$)', match[1])
                            number = match3.group(1) if match3 else '0'
                            url_part = urljoin(self.xurl, match[0]) if 'http' not in match[0] else match[0]
                            output += f"#{'📽️' + match[1]}${number}{url_part}"
                        purl += output[1:] + "$$$"
                    return purl[:-3]
                return ""
            else:
                start_index = text.find(start_str)
                if start_index == -1:
                    return ""
                end_index = text.find(end_str, start_index + len(start_str))
                if end_index == -1:
                    return ""
                middle_text = text[start_index + len(start_str):end_index]
                if pl == 0:
                    return middle_text.replace("\\", "")
                elif pl == 1:
                    matches = re.findall(start_index1, middle_text)
                    return ' '.join(matches) if matches else ''
                elif pl == 2:
                    matches = re.findall(start_index1, middle_text)
                    return '$$$'.join([f'✨{item}' for item in matches]) if matches else ''
        except Exception as e:
            print(f"[extract_middle_text ERROR] {str(e)}")
            return ""

    # 主頁分類
    def homeContent(self, filter):
        return {
            "class": [
                {"type_id": "latest-updates", "type_name": "最新视频🌠"},
                {"type_id": "top-rated", "type_name": "最佳视频🌠"},
                {"type_id": "most-popular", "type_name": "热门影片🌠"}
            ]
        }

    # 主頁視頻列表
    def homeVideoContent(self):
        try:
            response = requests.get(self.xurl, headers=self.headerx, verify=False, timeout=10)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "lxml")
            return self._parse_video_list(soup)
        except Exception as e:
            print(f"[homeVideoContent ERROR] {str(e)}")
            return {'list': []}

    # 分類頁面
    def categoryContent(self, cid, pg, filter, ext):
        try:
            page = int(pg) if pg else 1
            path = f"/{cid}/{page}/" if page > 1 else f"/{cid}/"
            url = urljoin(self.xurl, path)
            response = requests.get(url, headers=self.headerx, verify=False, timeout=10)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "lxml")
            result = self._parse_video_list(soup)
            result.update({
                'page': page,
                'pagecount': 9999,
                'limit': 90,
                'total': 999999
            })
            return result
        except Exception as e:
            print(f"[categoryContent ERROR] {str(e)}")
            return {'list': []}

    # 視頻詳情
    def detailContent(self, ids):
        try:
            did = ids[0]
            if not did.startswith('http'):
                did = urljoin(self.xurl, did)
            response = requests.get(did, headers=self.headerx, verify=False, timeout=10)
            response.raise_for_status()
            
            content = self.extract_middle_text(response.text, '<h1>', '</h1>', 0)
            yanuan = self.extract_middle_text(
                response.text, 
                '<span>Pornstars:</span>', 
                '</div>', 
                1, 
                'href=".*?">(.*?)</a>'
            )
            
            return {
                'list': [{
                    "vod_id": did,
                    "vod_actor": yanuan,
                    "vod_content": content,
                    "vod_play_from": '線路一',
                    "vod_play_url": did
                }]
            }
        except Exception as e:
            print(f"[detailContent ERROR] {str(e)}")
            return {'list': []}

    # 播放解析
    def playerContent(self, flag, id, vipFlags):
        try:
            if 'http' not in id:
                id = urljoin(self.xurl, id)
            
            response = requests.get(id, headers=self.headerx, verify=False, timeout=10)
            response.raise_for_status()
            
            video_tag = BeautifulSoup(response.text, "lxml").find('video')
            if not video_tag:
                raise ValueError("Video tag not found")
            
            source = video_tag.find('source')
            if not source:
                raise ValueError("Source tag not found")
                
            video_url = source.get('src')
            if not video_url:
                raise ValueError("Video URL not found")
            
            # 處理重定向
            for _ in range(2):  # 最多兩次重定向
                resp = requests.head(video_url, allow_redirects=False, timeout=10)
                if 300 <= resp.status_code < 400:
                    video_url = resp.headers['Location']
                else:
                    break
            
            return {
                "parse": 0,
                "playUrl": "",
                "url": video_url,
                "header": json.dumps(self.headerx)  # 序列化頭部
            }
        except Exception as e:
            print(f"[playerContent ERROR] {str(e)}")
            return {}

    # 搜索功能
    def searchContent(self, key, quick):
        return self.searchContentPage(key, quick, '1')

    def searchContentPage(self, key, quick, page):
        try:
            page = int(page) if page else 1
            path = f"/search/{key}/{page}/" if page > 1 else f"/search/{key}/"
            url = urljoin(self.xurl, path)
            response = requests.get(url, headers=self.headerx, verify=False, timeout=10)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "lxml")
            result = self._parse_video_list(soup)
            result.update({
                'page': page,
                'pagecount': 9999,
                'limit': 90,
                'total': 999999
            })
            return result
        except Exception as e:
            print(f"[searchContentPage ERROR] {str(e)}")
            return {'list': []}

    # 私有工具方法
    def _parse_video_list(self, soup):
        """統一解析視頻列表"""
        videos = []
        container = soup.find('div', class_="margin-fix")
        if not container:
            return {'list': []}
            
        for item in container.find_all('div', class_="item"):
            try:
                # 名稱與鏈接
                link_tag = item.find('a')
                name = link_tag.get('title', '未知標題')
                href = link_tag.get('href', '#')
                
                # 圖片處理
                img_tag = item.find('img', class_="lazyload")
                pic = self._process_image(img_tag)
                
                # 時長標註
                remark_tag = item.find('div', class_="img thumb__img")
                remark = remark_tag.text.strip() if remark_tag else ''
                
                videos.append({
                    "vod_id": href,
                    "vod_name": name,
                    "vod_pic": pic,
                    "vod_remarks": remark
                })
            except Exception as e:
                print(f"[_parse_video_list ITEM ERROR] {str(e)}")
                continue
                
        return {'list': videos}

    def _process_image(self, img_tag):
        """統一處理圖片標籤"""
        if not img_tag:
            return ''
        attrs_priority = ['data-src', 'data-original', 'src']
        for attr in attrs_priority:
            if img_tag.has_attr(attr):
                return urljoin(self.xurl, img_tag[attr])
        return ''

    # 代理方法（根據框架要求實現）
    def localProxy(self, params):
        if params['type'] == "m3u8":
            return self.proxyM3u8(params)
        elif params['type'] == "media":
            return self.proxyMedia(params)
        elif params['type'] == "ts":
            return self.proxyTs(params)
        return None

# 測試入口
if __name__ == '__main__':
    spider = FullHDSpider()
    
    # 測試主頁
    print("=== 主頁分類 ===")
    print(spider.homeContent({}))
    
    # 測試主頁視頻
    print("\n=== 主頁視頻 ===")
    print(json.dumps(spider.homeVideoContent(), ensure_ascii=False, indent=2))
    
    # 測試分類
    print("\n=== 分類內容 ===")
    print(json.dumps(spider.categoryContent("latest-updates", 1, {}, {}), ensure_ascii=False, indent=2))
    
    # 測試搜索
    print("\n=== 搜索結果 ===")
    print(json.dumps(spider.searchContent("test", False), ensure_ascii=False, indent=2))
