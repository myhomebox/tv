import base64
import sys
import time
import json
import requests
import hashlib
import logging
from datetime import datetime
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
sys.path.append('..')
from base.spider import Spider

# 日志配置
logging.basicConfig(level=logging.INFO)

# ----------- 从 app.py 移植的核心配置 -----------
id_mapping = {
    "4gtv-live007": ["fourgtv", "209"],#大爱电视
    "4gtv-live008": ["fourgtv", "210"],#人间卫视
    "4gtv-live010": ["fourgtv", "270"],#戏剧免费看1台
    "4gtv-live011": ["fourgtv", "274"],#fun探索娱乐台
    "4gtv-live012": ["fourgtv", "249"],#滚动力rollor
    "4gtv-live014": ["fourgtv", "273"],#原住民族电视台
    "4gtv-live017": ["fourgtv", "282"],#DreamWorks梦工厂动画
    "4gtv-live021": ["fourgtv", "201"],#经典电影台
    "4gtv-live022": ["fourgtv", "202"],#经典卡通台
    "4gtv-live024": ["fourgtv", "204"],#精选动漫台
    "4gtv-live025": ["fourgtv", "213"],#MTVLiveHD音乐频道-4GTV
    "4gtv-live026": ["fourgtv", "214"],#History历史频道
    "4gtv-live027": ["fourgtv", "215"],#CI罪案侦查频道
    "4gtv-live029": ["fourgtv", "217"],#Lifetime娱乐频道
    "4gtv-live030": ["fourgtv", "188"],#LiveABC互动英语频道
    "4gtv-live031": ["fourgtv", "218"],#电影原声台CMusic
    "4gtv-live032": ["fourgtv", "219"],#NickJr.儿童频道
    "4gtv-live046": ["fourgtv", "174"],#东森购物二台
    "4gtv-live047": ["fourgtv", "173"],#东森购物一台
    "4gtv-live048": ["fourgtv", "287"],#东森购物三台
    "4gtv-live049": ["fourgtv", "286"],#东森购物四台
    "4gtv-live050": ["fourgtv", "223"],#新唐人亚太台
    "4gtv-live059": ["fourgtv", "283"],#BloombergTV
    "4gtv-live060": ["fourgtv", "224"],#SBN全球财经台
    "4gtv-live069": ["fourgtv", "225"],#CinemaWorld
    "4gtv-live071": ["fourgtv", "226"],#DW德国之声
    "4gtv-live080": ["fourgtv", "275"],#ROCKEntertainment
    "4gtv-live087": ["fourgtv", "284"],#TVBS综艺台-4GTV
    "4gtv-live088": ["fourgtv", "285"],#TVBS台剧台
    "4gtv-live089": ["fourgtv", "229"],#三立新闻iNEWS-4GTV
    "4gtv-live096": ["fourgtv", "444"],#INULTRA--官网都是播寰宇新闻
    "4gtv-live105": ["fourgtv", "185"],#尼克儿童频道
    "4gtv-live106": ["fourgtv", "230"],#大爱二台
    "4gtv-live107": ["fourgtv", "231"],#MOMO亲子台
    "4gtv-live110": ["fourgtv", "182"],#PetClubTV
    "4gtv-live112": ["fourgtv", "252"],#GlobalTrekker
    "4gtv-live120": ["fourgtv", "237"],#爱尔达生活旅游台-4GTV
    "4gtv-live121": ["fourgtv", "175"],#LUXETVChannel
    "4gtv-live122": ["fourgtv", "178"],#TV5MONDESTYLEHD生活时尚
    "4gtv-live123": ["fourgtv", "450"],#MagellanTV频道(麦哲伦频道)
    "4gtv-live130": ["fourgtv", "235"],#CNBCAsia财经台
    "4gtv-live138": ["fourgtv", "180"],#ROCKAction
    "4gtv-live144": ["fourgtv", "236"],#金光布袋戏
    "4gtv-live145": ["fourgtv", "301"],#霹雳布袋戏
    "4gtv-live146": ["fourgtv", "316"],#FRANCE24英文台
    "4gtv-live157": ["fourgtv", "176"],#MyCinemaEuropeHD我的欧洲电影
    "4gtv-live201": ["fourgtv", "160"],#车迷TV
    "4gtv-live206": ["fourgtv", "168"],#幸福空间居家台
    "4gtv-live207": ["fourgtv", "169"],#三立综合台-4GTV
    "4gtv-live208": ["fourgtv", "139"],#LoveNature
    "4gtv-live620": ["fourgtv", "186"],
}

video_sound_mapping = {
    "4gtv-4gtv001": ["1", "6"],#民視台灣台
    "4gtv-4gtv002": ["1", "10"], # 民视
    "4gtv-4gtv003": ["1", "6"],#民視第一台
    "4gtv-4gtv004": ["1", "8"],#民視綜藝台
    "4gtv-4gtv006": ["1", "9"],#豬哥亮歌廳秀
    "4gtv-4gtv009": ["2", "7"],#中天新聞台
    "4gtv-4gtv010": ["1", "6"],#非凡新聞台
    "4gtv-4gtv011": ["1", "6"],#影迷數位電影台
    "4gtv-4gtv013": ["1", "6"],#視納華仁紀實頻道
    "4gtv-4gtv014": ["1", "5"],#時尚運動X
    "4gtv-4gtv018": ["1", "6"],#達文西頻道
    "4gtv-4gtv034": ["1", "6"],#八大精彩台
    "4gtv-4gtv039": ["1", "2"],#八大綜藝台
    "4gtv-4gtv040": ["1", "6"],#中視
    "4gtv-4gtv041": ["1", "6"],#華視
    "4gtv-4gtv042": ["1", "6"],#公視戲劇
    "4gtv-4gtv043": ["1", "6"],#客家電視台
    "4gtv-4gtv044": ["1", "6"],#靖天卡通台
    "4gtv-4gtv045": ["1", "6"],#靖洋戲劇台
    "4gtv-4gtv046": ["1", "8"],#靖天綜合台
    "4gtv-4gtv047": ["1", "8"],#靖天日本台
    "4gtv-4gtv048": ["1", "2"],#非凡商業台
    "4gtv-4gtv049": ["1", "8"],#采昌影劇台
    "4gtv-4gtv051": ["1", "2"],#台視新聞
    "4gtv-4gtv052": ["1", "2"],#華視新聞
    "4gtv-4gtv053": ["1", "8"],#GINX Esports TV
    "4gtv-4gtv054": ["1", "8"],#Nice TV 靖天歡樂台
    "4gtv-4gtv055": ["1", "8"],#靖天映畫
    "4gtv-4gtv056": ["1", "2"],#台視財經
    "4gtv-4gtv057": ["1", "8"],#靖洋卡通Nice Bingo
    "4gtv-4gtv058": ["1", "8"],#靖天戲劇台
    "4gtv-4gtv059": ["1", "6"],#CLASSICA 古典樂
    "4gtv-4gtv061": ["1", "7"],#靖天電影台
    "4gtv-4gtv062": ["1", "8"],#靖天育樂台
    "4gtv-4gtv063": ["1", "6"],#KLT-靖天國際台
    "4gtv-4gtv064": ["1", "8"],#中視菁采台
    "4gtv-4gtv065": ["1", "8"],#靖天資訊台
    "4gtv-4gtv066": ["1", "2"],#台視
    "4gtv-4gtv067": ["1", "8"],#TVBS精采台
    "4gtv-4gtv068": ["1", "7"],#TVBS歡樂台
    "4gtv-4gtv070": ["1", "7"],#愛爾達娛樂台
    "4gtv-4gtv072": ["1", "2"],#TVBS新聞
    "4gtv-4gtv073": ["1", "2"],#TVBS
    "4gtv-4gtv074": ["1", "2"],#中視新聞
    "4gtv-4gtv075": ["1", "2"],#鏡電視新聞台
    "4gtv-4gtv076": ["1", "2"],#亞洲旅遊台
    "4gtv-4gtv077": ["1", "2"],#TRACE Sport Stars
    "4gtv-4gtv079": ["1", "2"],#ARIRANG阿里郎頻道
    "4gtv-4gtv080": ["1", "2"],#中視經典台
    "4gtv-4gtv082": ["1", "6"],#TRACE Urban
    "4gtv-4gtv083": ["1", "5"],#Mezzo Live HD
    "4gtv-4gtv084": ["1", "6"],#國會頻道1
    "4gtv-4gtv085": ["1", "5"],#國會頻道2
    "4gtv-4gtv101": ["1", "5"],#智林體育台
    "4gtv-4gtv102": ["1", "6"],#東森購物1台
    "4gtv-4gtv103": ["1", "6"],#東森購物2台
    "4gtv-4gtv104": ["1", "6"],#第1商業台
    "4gtv-4gtv109": ["1", "6"],#中天亞洲台
    "4gtv-4gtv152": ["1", "6"],#東森新聞台
    "4gtv-4gtv153": ["1", "2"],#東森財經新聞台
    "4gtv-4gtv155": ["1", "6"],#民視
    "4gtv-4gtv156": ["1", "6"],#寰宇新聞台灣台
    "4gtv-4gtv158": ["1", "2"],#寰宇財經台
    "litv-ftv03": ["1", "6"],#VOA美國之音
    "litv-ftv07": ["1", "6"],#民視旅遊台
    "litv-ftv09": ["1", "2"],#民視影劇台
    "litv-ftv10": ["1", "6"],#半島國際新聞台
    "litv-ftv13": ["1", "6"],#民視新聞台
    "litv-ftv15": ["1", "6"],#影迷數位紀實台--旧ifun频道号
    "litv-ftv16": ["1", "2"],#好消息
    "litv-ftv17": ["1", "2"],#好消息2台
    "litv-longturn01": ["2", "4"],#龍華卡通台
    "litv-longturn02": ["2", "5"],#龍華洋片台
    "litv-longturn03": ["2", "5"],#龍華電影台
    "litv-longturn04": ["6", "5"],#博斯魅力台
    "litv-longturn05": ["2", "5"],#博斯高球台
    "litv-longturn06": ["2", "5"],#博斯高球二台
    "litv-longturn07": ["2", "5"],#博斯運動一台
    "litv-longturn08": ["2", "5"],#博斯運動二台
    "litv-longturn09": ["2", "5"],#博斯網球台
    "litv-longturn10": ["2", "5"],#博斯無限台
    "litv-longturn11": ["5", "2"],#龍華日韓台
    "litv-longturn12": ["5", "2"],#龍華偶像台
    "litv-longturn13": ["2", "4"],#博斯無限二台
    "litv-longturn14": ["1", "2"],#寰宇新聞台
    "litv-longturn18": ["5", "6"],#X龍華戲劇台
    "litv-longturn19": ["5", "6"],#Smart知識台
    "litv-longturn20": ["5", "6"],#ELTV生活英語台
    "litv-longturn21": ["5", "2"],#龍華經典台
    "litv-longturn22": ["2", "5"],#台灣戲劇台
}

# ----------- 解密相关函数 -----------
def decrypt_key(encoded_key, key, iv):
    """解密 Base64 编码的密钥"""
    try:
        decoded_key = base64.b64decode(encoded_key)
        cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, iv.encode('utf-8'))
        decrypted = cipher.decrypt(decoded_key)
        decrypted = unpad(decrypted, AES.block_size)
        return decrypted.decode('utf-8')
    except Exception as e:
        logging.error(f"解密失败：{e}")
        return None

def calculate_hash(input_str):
    """计算字符串的 SHA-512 哈希并进行 Base64 编码"""
    digest = hashlib.sha512(input_str.encode('utf-8')).digest()
    return base64.b64encode(digest).decode('utf-8')

class Spider(Spider):
    def getName(self):
        return "Litv"

    def init(self, extend):
        self.extend = extend
        try:
            self.extendDict = json.loads(extend)
        except:
            self.extendDict = {}
        self.proxy = self.extendDict.get('proxy', None)
        self.is_proxy = self.proxy is not None

    def getDependence(self):
        return []

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    # ----------- 动态生成直播列表 -----------
    def liveContent(self, url):
        m3u8_header = '#EXTM3U x-tvg-url="https://epg.iill.top/epg"\n'
        channel_lines = []
        
        # 所有频道映射
        for channel_id, (provider, _) in id_mapping.items():
            if channel_id in video_sound_mapping:
                vs = video_sound_mapping[channel_id]
                # 构造代理URL（格式：http://代理地址?pid=频道ID,视频参数,音频参数）
                proxy_url = f'http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid={channel_id},{vs[0]},{vs[1]}'
                # 构造频道信息
                channel_info = (
                    f'#EXTINF:-1 tvg-id="{channel_id}" tvg-name="{channel_id}" '
                    f'group-title="{provider}",{channel_id}\n{proxy_url}'
                )
                channel_lines.append(channel_info)
        
        return m3u8_header + '\n'.join(channel_lines)

    # ----------- M3U8代理生成逻辑 -----------
    def proxyM3u8(self, params):
        pid = params['pid']
        parts = pid.split(',')
        channel_id, video_param, audio_param = parts[0], parts[1], parts[2]
        
        # 判断是否为4gtv频道
        if "4gtv" in channel_id:
            return self._handle_4gtv_m3u8(channel_id, video_param, audio_param)
        else:
            return self._handle_litv_m3u8(channel_id, video_param, audio_param)

    def _handle_4gtv_m3u8(self, channel_id, video_param, audio_param):
        """处理4gtv频道的授权逻辑"""
        # 解密密钥
        head_key = "PyPJU25iI2IQCMWq7kblwh9sGCypqsxMp4sKjJo95SK43h08ff+j1nbWliTySSB+N67BnXrYv9DfwK+ue5wWkg=="
        key = "ilyB29ZdruuQjC45JhBBR7o2Z8WJ26Vg"
        iv = "JUMxvVMmszqUTeKn"
        decrypted_key = decrypt_key(head_key, key, iv)
        if not decrypted_key:
            return [500, "text/plain", "解密失败"]
        
        # 计算授权哈希
        format_date = datetime.utcnow().strftime("%Y%m%d")
        auth_key = calculate_hash(format_date + decrypted_key)
        
        # 获取播放URL
        play_url = self._get_4gtv_play_url(channel_id, auth_key)
        if not play_url:
            return [500, "text/plain", "无法获取播放地址"]
        
        # 获取并处理M3U8内容
        headers = {'User-Agent': 'okhttp/3.12.11'}
        response = requests.get(play_url, headers=headers)
        if response.status_code != 200:
            return [502, "text/plain", "M3U8请求失败"]
        
        m3u8_content = self._process_4gtv_m3u8(response.text, play_url)
        return [200, "application/vnd.apple.mpegurl", m3u8_content]

    def _get_4gtv_play_url(self, channel_id, auth_key):
        """get_channel逻辑获取播放地址"""
        # 此处需实现完整的API请求逻辑，此处简化为示例
        return f"https://4gtvfree-cds.cdn.hinet.net/{channel_id}/1080.m3u8"

    def _process_4gtv_m3u8(self, raw_content, base_url):
        """处理4gtv的M3U8文件"""
        lines = []
        for line in raw_content.split('\n'):
            if line.endswith('.ts'):
                line = f"{base_url.rsplit('/', 1)[0]}/{line}"
            lines.append(line)
        return '\n'.join(lines)

    def _handle_litv_m3u8(self, channel_id, video_param, audio_param):
        """处理litv的标准逻辑"""
        timestamp = int(time.time() / 4 - 355017625)
        t = timestamp * 4
        m3u8_content = [
            '#EXTM3U',
            '#EXT-X-VERSION:3',
            '#EXT-X-TARGETDURATION:4',
            f'#EXT-X-MEDIA-SEQUENCE:{timestamp}'
        ]
        
        for _ in range(10):
            ts_url = (
                f"https://ntd-tgc.cdn.hinet.net/live/pool/{channel_id}/litv-pc/"
                f"{channel_id}-avc1_6000000={video_param}-mp4a_134000_zho={audio_param}-"
                f"begin={t}0000000-dur=40000000-seq={timestamp}.ts"
            )
            if self.is_proxy:
                ts_url = f'http://127.0.0.1:9978/proxy?do=py&type=ts&url={self.b64encode(ts_url)}'
            m3u8_content.append('#EXTINF:4,')
            m3u8_content.append(ts_url)
            timestamp += 1
            t += 4
        
        return [200, "application/vnd.apple.mpegurl", '\n'.join(m3u8_content)]

    # ----------- TS代理逻辑 -----------
    def get_ts(self, params):
        url = self.b64decode(params['url'])
        headers = {'User-Agent': 'okhttp/3.12.11'}
        response = requests.get(url, headers=headers, stream=True, proxies={'http': self.proxy, 'https': self.proxy})
        return [206, "video/MP2T", response.content]

    # ----------- 工具函数 -----------
    def b64encode(self, data):
        return base64.b64encode(data.encode('utf-8')).decode('utf-8')

    def b64decode(self, data):
        return base64.b64decode(data.encode('utf-8')).decode('utf-8')

    # ----------- 其他必要方法（保持空实现） -----------
    def homeContent(self, filter): return {}
    def homeVideoContent(self): return {}
    def categoryContent(self, cid, page, filter, ext): return {}
    def detailContent(self, did): return {}
    def searchContent(self, key, quick, page='1'): return {}
    def playerContent(self, flag, pid, vipFlags): return {}
    def destroy(self): pass

if __name__ == '__main__':
    pass
