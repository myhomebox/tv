# -*- coding: utf-8 -*-
import json
import re
import sys
import time
import requests
from pyquery import PyQuery as pq
from urllib.parse import urljoin
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

sys.path.append('..')
from base.spider import Spider

class Spider(Spider):
    name = "香蕉资源"
    base_url = "https://25kkuu.vip/xjzy"
    version = "2024.07.20"

    def init(self, extend=""):
        # 初始化会话配置
        self.session = requests.Session()
        self.retries = Retry(
            total=5,
            backoff_factor=0.5,
            status_forcelist=[500, 502, 503, 504, 520],
            allowed_methods=frozenset(['GET', 'POST'])
        )
        self.session.mount('https://', HTTPAdapter(max_retries=self.retries))
        
        # 请求头配置（模拟真实浏览器）
        self.headers = {
            'Authority': urlparse(self.base_url).netloc,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Referer': f'{self.base_url}/',
            'DNT': '1'
        }

        # 加载扩展配置
        try:
            if extend:
                config = json.loads(extend)
                self.base_url = config.get('host', self.base_url).rstrip('/')
                if 'cookies' in config:  # 支持手动添加cookies
                    self.session.cookies.update(config['cookies'])
                self.session.proxies = config.get('proxies', {})
        except Exception as e:
            print(f"配置加载失败: {e}")

    def getName(self):
        return self.name

    def homeContent(self, filter):
        try:
            html = self._fetchUrl(self.base_url)
            doc = pq(html)
            
            # 动态分类解析（应对分类菜单结构变化）
            classes = []
            for a in doc('div.nav-menu a[href*="/xjzy/"]').items():
                href = a.attr('href')
                tid = re.search(r'/([a-z-]+)\.html', href).group(1)
                classes.append({
                    'type_name': a.text().strip(),
                    'type_id': tid
                })
            
            # 智能列表解析（支持不同布局）
            video_list = []
            containers = [
                'div.list-videos',    # 常规列表
                'div.module-items',   # 新版列表
                'ul.video-list'       # 备用选择器
            ]
            for selector in containers:
                items = doc(selector).find('.item, .video-item')
                if items:
                    video_list = self._parseVideoList(items)
                    break
            
            return {
                'class': classes,
                'list': video_list
            }
        except Exception as e:
            print(f"首页解析失败: {str(e)}")
            return {'class': [], 'list': []}

    def categoryContent(self, tid, pg, filter, extend):
        try:
            # 动态URL生成（适配新旧版本路由）
            url_patterns = [
                f"{self.base_url}/vod/show/{tid}/--------{pg}---.html",  # 新版
                f"{self.base_url}/type/{tid}_{pg}.html",                 # 旧版
                f"{self.base_url}/list/{tid}/{pg}.html"                  # 备用
            ]
            
            for url in url_patterns:
                html = self._fetchUrl(url, retry=1)
                if html and not re.search(r'class="error-page"', html):
                    break
                time.sleep(1)
            
            doc = pq(html)
            return {
                'list': self._parseVideoList(doc('.item, .video-item')),
                'page': int(pg),
                'pagecount': 9999,
                'limit': 30,
                'total': 999999
            }
        except Exception as e:
            print(f"分类页异常 [{tid}-{pg}]: {str(e)}")
            return {'list': []}

    def detailContent(self, ids):
        try:
            vid = ids[0]
            # 多URL格式兼容
            url_patterns = [
                f"{self.base_url}/xplay{vid}.html",       # 常规格式
                f"{self.base_url}/video/{vid}.html",      # 备用格式
                f"{self.base_url}/detail/{vid}.html"      # 新版格式
            ]
            
            for url in url_patterns:
                html = self._fetchUrl(url, retry=1)
                if html and 'video-info' in html:
                    break
                time.sleep(1)
            
            doc = pq(html)
            
            # 增强元数据提取
            title = doc('h1.title, .video-title').text().strip()
            cover = self._parseCover(doc('.video-cover img, .video-poster img'))
            desc = doc('.video-info .content, .video-desc').text().strip()
            
            # 播放地址多源解析
            play_url = self._parsePlayerUrl(html) or url
            
            return {
                'list': [{
                    'vod_id': vid,
                    'vod_name': title,
                    'vod_pic': cover,
                    'vod_content': desc,
                    'vod_play_from': '香蕉资源',
                    'vod_play_url': f"第1集${play_url}"
                }]
            }
        except Exception as e:
            print(f"详情页解析失败 [{vid}]: {str(e)}")
            return {'list': []}

    def playerContent(self, flag, id, vipFlags):
        try:
            # 预处理播放地址
            if 'http' not in id:
                id = f"{self.base_url}{id}"
            
            # 多阶段解析
            m3u8_url = None
            for _ in range(2):  # 最多尝试两次解析
                html = self._fetchUrl(id)
                m3u8_url = self._parsePlayerUrl(html)
                if m3u8_url:
                    break
                # 尝试点击虚拟播放按钮
                if 'player-btn' in html:
                    fake_btn_url = re.search(r'player-btn[^>]+data-url="([^"]+)"', html).group(1)
                    id = urljoin(id, fake_btn_url)
            
            if m3u8_url:
                return {
                    'parse': 0,
                    'url': m3u8_url,
                    'header': {**self.headers, 'Referer': id}
                }
            return {'parse': 1, 'url': id}
        except Exception as e:
            print(f"播放解析失败: {str(e)}")
            return {'parse': 1, 'url': id}

    def searchContent(self, key, quick, pg=1):
        try:
            # 编码处理
            encoded_key = requests.utils.quote(key)
            url = f"{self.base_url}/vod/search/{encoded_key}----------{pg}---.html"
            
            html = self._fetchUrl(url)
            doc = pq(html)
            return {
                'list': self._parseVideoList(doc('.item, .video-item')),
                'pagecount': 9999
            }
        except Exception as e:
            print(f"搜索异常 [{key}]: {str(e)}")
            return {'list': []}

    # 工具方法 ==============================================
    def _fetchUrl(self, url, retry=3):
        """智能请求方法"""
        try:
            print(f"⇲ 请求: {url}")
            resp = self.session.get(
                url,
                headers=self.headers,
                timeout=20,
                allow_redirects=True,
                verify=False  # 某些情况下需要关闭SSL验证
            )
            resp.encoding = 'utf-8'
            
            # 内容有效性检查
            if len(resp.text) < 500 or '安全验证' in resp.text:
                raise Exception("反爬验证或空内容")
            
            return resp.text
        except Exception as e:
            print(f"❌ 请求失败 [{url}]: {str(e)}")
            if retry > 0:
                time.sleep(2)
                return self._fetchUrl(url, retry-1)
            return ""

    def _parseVideoList(self, items):
        """稳健列表解析"""
        videos = []
        for item in items.items():
            try:
                # 链接解析
                a_tag = item('a:first')
                href = a_tag.attr('href') or ''
                
                # 多模式ID提取
                vid = None
                patterns = [
                    r'xplay(\d+)\.html',      # 常规ID
                    r'-(\d+)\.html',          # 旧版ID
                    r'/video/(\d+)/',         # 新版ID
                    r'vid=(\d+)'              # 参数形式
                ]
                for pattern in patterns:
                    if match := re.search(pattern, href):
                        vid = match.group(1)
                        break
                
                if not vid:
                    print(f"⚠️ 无法解析视频ID: {href}")
                    continue
                
                # 封面处理
                img = item('img:first')
                cover = self._normalizeUrl(
                    img.attr('data-src') or
                    img.attr('data-original') or
                    img.attr('src')
                )
                
                # 标题处理
                title = item('.title, .name').text().strip()
                
                videos.append({
                    'vod_id': vid,
                    'vod_name': title,
                    'vod_pic': cover,
                    'vod_remarks': item('.duration, .time').text()
                })
            except Exception as e:
                print(f"列表项解析异常: {str(e)}")
        return videos

    def _parsePlayerUrl(self, html):
        """深度播放地址解析"""
        # 模式1：JSON数据块
        if match := re.search(r'var\s+player\s*=\s*({.*?});', html, re.DOTALL):
            try:
                player_data = json.loads(match.group(1))
                if url := player_data.get('url'):
                    return url.replace('\\/', '/')
            except json.JSONDecodeError:
                pass
        
        # 模式2：iframe嵌套
        if iframe_src := re.search(r'<iframe[^>]+src="([^"]+)"', html):
            iframe_url = urljoin(self.base_url, iframe_src.group(1))
            print(f"发现iframe: {iframe_url}")
            try:
                iframe_html = self._fetchUrl(iframe_url)
                return self._parsePlayerUrl(iframe_html)  # 递归解析
            except:
                pass
        
        # 模式3：m3u8直接匹配
        if m3u8 := re.search(r'(https?://[^\s"\'<>]+?\.m3u8[^"\']*)', html):
            return m3u8.group(0)
        
        # 模式4：base64编码
        if b64_match := re.search(r"url:\s*'([A-Za-z0-9+/=]+)'", html):
            from base64 import b64decode
            try:
                decoded = b64decode(b64_match.group(1)).decode('utf-8')
                if decoded.startswith('http'):
                    return decoded
            except:
                pass
        
        return ''

    def _normalizeUrl(self, url):
        """URL标准化处理"""
        if not url:
            return ''
        if url.startswith('//'):
            return f'https:{url}'
        if url.startswith('/'):
            return f'{self.base_url}{url}'
        if not url.startswith('http'):
            return f'https://{url}'
        return url

    def destroy(self):
        self.session.close()

# 本地测试入口
if __name__ == '__main__':
    spider = Spider()
    spider.init(json.dumps({
        "host": "https://25kkuu.vip/xjzy",
        # "proxies": {"http": "http://localhost:8080"},  # 调试时可启用代理
        # "cookies": {"key": "value"}                   # 需要时添加cookies
    }))
    
    # 测试分类页
    print("\n=== 测试分类页 ===")
    print(spider.categoryContent("cn-jieshuoyuanpian", 1, {}, {}))
    
    # 测试详情页
    print("\n=== 测试详情页 ===")
    print(spider.detailContent(["12345"]))  # 替换实际ID
    
    # 测试播放页
    print("\n=== 测试播放页 ===")
    print(spider.playerContent("", "https://25kkuu.vip/xjzy/xplay12345.html", {}))
