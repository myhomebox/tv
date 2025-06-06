import base64
import sys
import time
import json
import requests
sys.path.append('..')
from base.spider import Spider


class Spider(Spider):
    def getName(self):
        return "Litv"

    def init(self, extend):
        self.extend = extend
        try:
            self.extendDict = json.loads(extend)
        except:
            self.extendDict = {}

        proxy = self.extendDict.get('proxy', None)
        if proxy is not None:
            self.is_proxy = False
        else:
            self.proxy = proxy
            self.is_proxy = True
        pass

    def getDependence(self):
        return []

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass


    def liveContent(self, url):



        a = ['#EXTM3U x-tvg-url=""', '#EXTINF:-1 tvg-id="民視台灣台" tvg-name="民視台灣台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV3.png" group-title="綜合其他",民視台灣台 ',f'http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv001,1,6&data={self.extend}', '#EXTINF:-1 tvg-id="民視" tvg-name="民視" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV.png" group-title="綜合其他",民視HD ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv002,1,10', '#EXTINF:-1 tvg-id="民視第一台" tvg-name="民視第一台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV2.png" group-title="綜合其他",民視第一台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv003,1,6', '#EXTINF:-1 tvg-id="民視綜藝台" tvg-name="民視綜藝台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV6.png" group-title="音樂綜藝",民視綜藝 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv004,1,8', '#EXTINF:-1 tvg-id="豬哥亮歌廳秀" tvg-name="豬哥亮歌廳秀" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV7.png" group-title="音樂綜藝",豬哥亮歌廳秀 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv006,1,9', '#EXTINF:-1 tvg-id="中天新聞台" tvg-name="中天新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTI2.png"" group-title="新聞財經",中天新聞台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv009,2,7', '#EXTINF:-1 tvg-id="非凡新聞台" tvg-name="非凡新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Unique1.png"" group-title="新聞財經",非凡新聞 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv010,1,6', '#EXTINF:-1 tvg-id="影迷數位電影台" tvg-name="影迷數位電影台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FANS1.png" group-title="電影戲劇",影迷數位電影台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv011,1,6', '#EXTINF:-1 tvg-id="CNEX紀實頻道" tvg-name="CNEX紀實頻道" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/cnex.png" group-title="紀實探索",視納華仁紀實頻道 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv013,1,6', '#EXTINF:-1 tvg-id="時尚運動X" tvg-name="時尚運動X" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/ssydX.png" group-title="體育競技",時尚運動X ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv014,1,5', '#EXTINF:-1 tvg-id="韓國娛樂台 KMTV" tvg-name="韓國娛樂台 KMTV" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/hanguoyl.png" group-title="綜合其他",韓國娛樂台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv016,1,6', '#EXTINF:-1 tvg-id="amc電影台" tvg-name="amc電影台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/AMCMovies.png" group-title="電影戲劇",amc電影台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv017,1,6', '#EXTINF:-1 tvg-id="達文西頻道" tvg-name="達文西頻道" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/DaVinci.png" group-title="兒童卡通",達文西頻道 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv018,1,6', '#EXTINF:-1 tvg-id="八大精彩台" tvg-name="八大精彩台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GTV5.png" group-title="音樂綜藝",八大精彩台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv034,1,6', '#EXTINF:-1 tvg-id="八大綜藝台" tvg-name="八大綜藝台" tvg-logo="https://4gtvimg2.4gtv.tv/4gtv-Image/Channel/mobile/logo_4gtv_4gtv-4gtv039_mobile.png" group-title="音樂綜藝",八大綜藝 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv039,1,2', '#EXTINF:-1 tvg-name="中視" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTV.png" group-title="綜合其他",中視 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv040,1,6', '#EXTINF:-1 tvg-name="華視" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTS.png" group-title="綜合其他",華視 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv041,1,6', '#EXTINF:-1 tvg-name="公視戲劇" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/PTS3.png" group-title="電影戲劇",公視戲劇 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv042,1,6', '#EXTINF:-1 tvg-name="客家電視台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Hakka.png" group-title="綜合其他",客家電視台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv043,1,6', '#EXTINF:-1 tvg-name="靖天卡通台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV7.png" group-title="兒童卡通",靖天卡通台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv044,1,6', '#EXTINF:-1 tvg-name="靖洋戲劇台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/jy2.png" group-title="電影戲劇",靖洋戲劇台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv045,1,6', '#EXTINF:-1 tvg-name="靖天綜合台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV1.png" group-title="綜合其他",靖天綜合台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv046,1,8', '#EXTINF:-1 tvg-name="靖天日本台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV6.png" group-title="綜合其他",靖天日本台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv047,1,8', '#EXTINF:-1 tvg-name="非凡商業台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Unique2.png" group-title="新聞財經",非凡商業 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv048,1,2', '#EXTINF:-1 tvg-name="采昌影劇台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/caichang.png" group-title="電影戲劇",采昌影劇台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv049,1,8', '#EXTINF:-1 tvg-name="台視新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TTV2.png" group-title="新聞財經",台視新聞台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv051,1,2', '#EXTINF:-1 tvg-name="華視新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTS1.png" group-title="新聞財經",華視新聞台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv052,1,2', '#EXTINF:-1 tvg-name="GINX Esports TV" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GINXesport.png" group-title="體育競技",GINX Esports TV ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv053,1,8', '#EXTINF:-1 tvg-name="靖天歡樂台" tvg-logo="https://epg.pw/media/images/epg/2024/06/12/20240612111031068542_59.png" group-title="綜合其他",靖天歡樂台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv054,1,8', '#EXTINF:-1 tvg-name="靖天映畫" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV3.png" group-title="電影戲劇",靖天映畫 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv055,1,8', '#EXTINF:-1 tvg-id="台視財經台" tvg-name="台視財經台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TTV3.png" group-title="新聞財經",台視財經台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv056,1,2', '#EXTINF:-1 tvg-name="靖洋卡通NICEBINGO" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/jy1.png" group-title="兒童卡通",靖洋卡通 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv057,1,8', '#EXTINF:-1 tvg-name="靖天戲劇台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV8.png" group-title="電影戲劇",靖天戲劇 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv058,1,8', '#EXTINF:-1 tvg-name="CLASSICA古典樂" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/classical.png" group-title="音樂綜藝",CLASSICA 古典樂 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv059,1,6', '#EXTINF:-1 tvg-name="靖天電影台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV9.png" group-title="電影戲劇",靖天電影 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv061,1,7', '#EXTINF:-1 tvg-name="靖天育樂台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV5.png" group-title="綜合其他",靖天育樂 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv062,1,8', '#EXTINF:-1 tvg-name="KLT靖天國際台HD" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV10.png" group-title="綜合其他",靖天國際 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv063,1,6', '#EXTINF:-1 tvg-name="中視菁采台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTV3.png" group-title="綜合其他",中視菁采 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv064,1,8', '#EXTINF:-1 tvg-name="靖天資訊台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoldenTV2.png" group-title="綜合其他",靖天資訊 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv065,1,8', '#EXTINF:-1 tvg-name="台視" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TTV.png" group-title="綜合其他",台視HD ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv066,1,2', '#EXTINF:-1 tvg-name="TVBS精采台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TVBS3.png" group-title="音樂綜藝",TVBS精采台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv067,1,8', '#EXTINF:-1 tvg-name="TVBS歡樂台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TVBS2.png" group-title="音樂綜藝",TVBS歡樂台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv068,1,7', '#EXTINF:-1 tvg-id="愛爾達娛樂台" tvg-name="愛爾達娛樂台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/ELTA3.png" group-title="音樂綜藝",ELTA娛樂 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv070,1,7', '#EXTINF:-1 tvg-name="TVBS新聞" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TVBS1.png" group-title="新聞財經",TVBS新聞台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv072,1,2', '#EXTINF:-1 tvg-name="TVBS" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TVBS.png" group-title="綜合其他",TVBS HD ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv073,1,2', '#EXTINF:-1 tvg-name="中視新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTV1.png" group-title="新聞財經",中視新聞 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv074,1,2', '#EXTINF:-1 tvg-name="鏡電視新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Mnews.png" group-title="新聞財經",鏡電視新聞台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv075,1,2', '#EXTINF:-1 tvg-name="亞洲旅遊台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Asiatravel.png" group-title="生活旅遊",亞洲旅遊台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv076,1,2', '#EXTINF:-1 tvg-name="TRACESPORTSTARS" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TraceSport.png" group-title="體育競技",TRACE Sport Stars ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv077,1,2', '#EXTINF:-1 tvg-name="ARIRANG阿里郎頻道" tvg-logo="https://assets.livednow.com/logo/Arirang-TV.png" group-title="綜合其他",Arirang TV ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv079,1,2', '#EXTINF:-1 tvg-name="中視經典台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTV2.png" group-title="綜合其他",中視經典 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv080,1,2', '#EXTINF:-1 tvg-name="TRACE Urban" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TraceUrban.png" group-title="音樂綜藝",TRACE Urban ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv082,1,6', '#EXTINF:-1 tvg-name="MEZZO LIVE HD" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/mezzolive.png" group-title="音樂綜藝",MEZZO LIVE HD ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv083,1,5', '#EXTINF:-1 tvg-name="國會頻道1" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/guohui1.png" group-title="綜合其他",國會頻道1 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv084,1,6', '#EXTINF:-1 tvg-name="國會頻道2" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/guohui2.png" group-title="綜合其他",國會頻道2 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv085,1,5', '#EXTINF:-1 tvg-name="智林體育台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/TSL.png" group-title="體育競技",智林體育 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv101,1,5', '#EXTINF:-1 tvg-name="東森購物1台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/EBC11.png" group-title="綜合其他",東森購物一台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv102,1,6', '#EXTINF:-1 tvg-name="東森購物2台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/EBC11.png" group-title="綜合其他",東森購物二台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv103,1,6', '#EXTINF:-1 tvg-name="第1商業台" tvg-logo="https://p-cdnstatic.svc.litv.tv/pics/logo_litv_4gtv-4gtv104_tv.png" group-title="新聞財經",第1商業台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv104,1,6', '#EXTINF:-1 tvg-name="中天亞洲台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/CTI4.png" group-title="綜合其他",中天亞洲台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv109,1,6', '#EXTINF:-1 tvg-name="東森新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/EBC6.png" group-title="新聞財經",東森新聞 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv152,1,6', '#EXTINF:-1 tvg-name="東森財經新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/EBC7.png" group-title="新聞財經",東森財經新聞 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv153,1,2', '#EXTINF:-1 tvg-name="民視HD" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV.png" group-title="綜合其他",民視HD ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv155,1,6', '#EXTINF:-1 tvg-name="寰宇新聞台灣台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Global3.png" group-title="新聞財經",寰宇新聞台灣台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv156,1,6', '#EXTINF:-1 tvg-name="寰宇財經台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Global4.png" group-title="新聞財經",寰宇財經 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=4gtv-4gtv158,1,2', '#EXTINF:-1 tvg-name="VOA美國之音" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/VOATV.png" group-title="新聞財經",VOA 美國之音 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv03,1,6', '#EXTINF:-1 tvg-name="民視旅遊台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV5.png" group-title="生活旅遊",民視旅遊 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv07,1,6', '#EXTINF:-1 tvg-name="民視影劇台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV4.png" group-title="電影戲劇",民視影劇 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv09,1,2', '#EXTINF:-1 tvg-name="MYCINEMAEUROPEHD我的歐洲電影" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/MyCinema.png" group-title="電影戲劇",歐洲光影 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv10,1,6', '#EXTINF:-1 tvg-name="民視新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FTV1.png" group-title="新聞財經",民視新聞 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv13,1,6', '#EXTINF:-1 tvg-name="影迷數位紀實台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/FANS2.png" group-title="紀實探索",影迷數位紀實 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv15,1,6', '#EXTINF:-1 tvg-name="好消息" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoodTV1.png" group-title="綜合其他",好消息 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv16,1,2', '#EXTINF:-1 tvg-name="好消息2台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/GoodTV2.png" group-title="綜合其他",好消息2台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-ftv17,1,2', '#EXTINF:-1 tvg-name="龍華卡通台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV9.png" group-title="兒童卡通",龍華卡通台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn01,4,2', '#EXTINF:-1 tvg-name="龍華洋片台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV2.png" group-title="電影戲劇",龍華洋片台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn02,5,2', '#EXTINF:-1 tvg-name="龍華電影台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV1.png" group-title="電影戲劇",龍華電影台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn03,2,5', '#EXTINF:-1 tvg-name="博斯魅力網" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast6.png" group-title="體育競技",博斯魅力 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn04,5,6', '#EXTINF:-1 tvg-name="博斯高球一台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast3.png" group-title="體育競技",博斯高球I ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn05,5,2', '#EXTINF:-1 tvg-name="博斯高球二台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast4.png" group-title="體育競技",博斯高球II ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn06,5,2', '#EXTINF:-1 tvg-name="博斯運動一台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast1.png" group-title="體育競技",博斯運動I ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn07,5,2', '#EXTINF:-1 tvg-name="博斯運動二台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast2.png" group-title="體育競技",博斯運動II ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn08,5,2', '#EXTINF:-1 tvg-name="博斯網球台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast5.png" group-title="體育競技",博斯網球 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn09,5,2', '#EXTINF:-1 tvg-name="博斯無限台HD" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast7.png" group-title="體育競技",博斯無限I ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn10,5,2', '#EXTINF:-1 tvg-name="龍華日韓台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV5.png" group-title="電影戲劇",龍華日韓台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn11,5,2', '#EXTINF:-1 tvg-name="龍華偶像台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV6.png" group-title="電影戲劇",龍華偶像台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn12,5,2', '#EXTINF:-1 tvg-name="博斯無限二台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/sportcast8.png" group-title="體育競技",博斯無限II ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn13,4,2', '#EXTINF:-1 tvg-name="寰宇新聞台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Global2.png" group-title="新聞財經",寰宇新聞台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn14,1,2', '#EXTINF:-1 tvg-name="龍華戲劇台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV4.png" group-title="電影戲劇",龍華戲劇台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn18,5,6', '#EXTINF:-1 tvg-name="SMART知識台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/smarttv.png" group-title="生活旅遊",SMART知識台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn19,5,6', '#EXTINF:-1 tvg-name="ELTV生活英語台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/ELTA7.png" group-title="兒童卡通",ELTV生活英語 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn20,5,6', '#EXTINF:-1 tvg-name="龍華經典台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/LTV7.png" group-title="電影戲劇",龍華經典台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn21,5,2', '#EXTINF:-1 tvg-name="台灣戲劇台" tvg-logo="https://cdn.jsdelivr.net/gh/wanglindl/TVlogo@main/img/Taiwanxiju.png" group-title="電影戲劇",台灣戲劇台 ','http://127.0.0.1:9978/proxy?do=py&type=m3u8&pid=litv-longturn22,5,2']

        return '\n'.join(a)

    def homeContent(self, filter):
        return {}

    def homeVideoContent(self):
        return {}

    def categoryContent(self, cid, page, filter, ext):
        return {}

    def detailContent(self, did):
        return {}

    def searchContent(self, key, quick, page='1'):
        return {}

    def searchContentPage(self, keywords, quick, page):
        return {}

    def playerContent(self, flag, pid, vipFlags):
        return {}

    def localProxy(self, params):
        if params['type'] == "m3u8":
            return self.proxyM3u8(params)
        if params['type'] == "ts":
            return self.get_ts(params)
        return [302, "text/plain", None, {'Location': 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'}]
    def proxyM3u8(self, params):
        pid = params['pid']
        info = pid.split(',')
        a = info[0]
        b = info[1]
        c = info[2]
        timestamp = int(time.time() / 4 - 355017625)
        t = timestamp * 4
        m3u8_text = f'#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:4\n#EXT-X-MEDIA-SEQUENCE:{timestamp}\n'
        for i in range(10):
            url = f'https://ntd-tgc.cdn.hinet.net/live/pool/{a}/litv-pc/{a}-avc1_6000000={b}-mp4a_134000_zho={c}-begin={t}0000000-dur=40000000-seq={timestamp}.ts'
            if self.is_proxy:
                url = f'http://127.0.0.1:9978/proxy?do=py&type=ts&url={self.b64encode(url)}'

            m3u8_text += f'#EXTINF:4,\n{url}\n'
            timestamp += 1
            t += 4
        return [200, "application/vnd.apple.mpegurl", m3u8_text]

    def get_ts(self, params):
        url = self.b64decode(params['url'])
        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(url, headers=headers, stream=True, proxies=self.proxy)
        return [206, "application/octet-stream", response.content]

    def destroy(self):
        return '正在Destroy'

    def b64encode(self, data):
        return base64.b64encode(data.encode('utf-8')).decode('utf-8')

    def b64decode(self, data):
        return base64.b64decode(data.encode('utf-8')).decode('utf-8')


if __name__ == '__main__':
    pass
