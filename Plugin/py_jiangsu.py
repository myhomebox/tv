# -*- coding: utf-8 -*-
# @Author  : Doubebly
# @Time    : 2025/3/24 13:51
import json
import re
import sys
import time
import hashlib
sys.path.append('..')
from base.spider import Spider


class Spider(Spider):
    def getName(self):
        return "Jiangsu"

    def init(self, extend):
        pass

    def getDependence(self):
        return []

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass


    def liveContent(self, url):
        tv_list = ['#EXTM3U',
                   '#EXTINF:-1 tvg-id="江苏卫视" tvg-name="江苏卫视" tvg-logo="https://logo.doube.eu.org/江苏卫视.png" group-title="江蘇",江蘇衛視',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jsws_live',
                   '#EXTINF:-1 tvg-id="江苏城市频道" tvg-name="江苏城市频道" tvg-logo="https://logo.doube.eu.org/江苏城市.png" group-title="江蘇",江蘇城市',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jscs_live',
                   '#EXTINF:-1 tvg-id="江苏综艺频道" tvg-name="江苏综艺频道" tvg-logo="https://logo.doube.eu.org/江苏综艺.png" group-title="江蘇",江蘇綜藝',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jszy_live',
                   '#EXTINF:-1 tvg-id="江苏影视频道" tvg-name="江苏影视频道" tvg-logo="https://logo.doube.eu.org/江苏影视.png" group-title="江蘇",江蘇影視',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jsys_live',
                   '#EXTINF:-1 tvg-id="江苏公共新闻频道" tvg-name="江苏公共新闻频道" tvg-logo="https://logo.doube.eu.org/江苏公共新闻.png" group-title="江蘇",江蘇公共新聞',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jsxw_live',
                   '#EXTINF:-1 tvg-id="江苏体育休闲频道" tvg-name="江苏体育休闲频道" tvg-logo="https://logo.doube.eu.org/江苏体育休闲.png" group-title="江蘇",江蘇體育休閒',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jsxx_live',
                   '#EXTINF:-1 tvg-id="优漫卡通" tvg-name="优漫卡通" tvg-logo="https://logo.doube.eu.org/优漫卡通.png" group-title="江蘇",優漫卡通',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=ymkt_live',
                   '#EXTINF:-1 tvg-id="江苏国际频道" tvg-name="江苏国际频道" tvg-logo="https://logo.doube.eu.org/江苏国际.png" group-title="江蘇",江蘇國際',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jsgj_live',
                   '#EXTINF:-1 tvg-id="江苏教育频道" tvg-name="江苏教育频道" tvg-logo="https://logo.doube.eu.org/江苏教育.png" group-title="江蘇",江蘇教育',
                   'http://127.0.0.1:9978/proxy?do=py&type=abc&pid=jsjy_live']

        return '\n'.join(tv_list)

    def homeContent(self, filter):
        return {'liveList': self.liveContent('')}

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
        if params['type'] == "abc":
            return self.get_play_url(params)
        return None

    def get_play_url(self, params):
        pid = params['pid']
        txTime = hex(int(time.time()))[2:]
        txSecret = hashlib.md5(f'4hhrs7mm8h6X7CPGjZnK{pid}{txTime}'.encode('utf-8')).hexdigest()
        play_url = f'https://litchi-play-encrypted-site.jstv.com/live/{pid}.m3u8?txSecret={txSecret}&txTime={txTime}'
        return [302, "text/plain", None, {'Location': play_url}]

    def proxyM3u8(self, params):
        pass

    def destroy(self):

        return '正在Destroy'

if __name__ == '__main__':
    pass
