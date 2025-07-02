# -*- coding: utf-8 -*-
import json
import sys
sys.path.append('..')
from base.spider import Spider
import re

class Spider(Spider):
    def __init__(self):
        self.host = 'https://api.ubj83.com'
        self.UA = 'Mozilla/5.0 (Linux; Android 9; V2196A Build/PQ3A.190705.08211809; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36;webank/h5face;webank/1.0;netType:NETWORK_WIFI;appVersion:416;packageName:com.jp3.xg3'
        self.imghost = None
        self.headers = {
            'User-Agent': self.UA,
            'Referer': self.host
        }

    def getName(self):
        return "影视资源站"

    def init(self, extend=""):
        self.get_img_host()

    def get_img_host(self):
        response = self.fetch(f"{self.host}/api/appAuthConfig", headers=self.headers)
        data = json.loads(response.text)
        self.imghost = f"https://{data['data']['imgDomain']}"

    def homeContent(self, filter):
        classes = [
            {"type_id": "1", "type_name": "电影"},
            {"type_id": "2", "type_name": "电视剧"},
            {"type_id": "3", "type_name": "动漫"},
            {"type_id": "4", "type_name": "综艺"},
        ]

        filterObj = {
            "1": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},{"v": "2", "n": "爱情"},{"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},{"v": "5", "n": "战争"},{"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},{"v": "8", "n": "奇幻"},{"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},{"v": "11", "n": "科幻"},{"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},{"v": "14", "n": "家庭"},{"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},{"v": "18", "n": "惊悚"},{"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},{"v": "22", "n": "音乐"},{"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},{"v": "25", "n": "恐怖"}
                    ]
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},{"v": "3", "n": "香港"},{"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},{"v": "18", "n": "韩国"},{"v": "2", "n": "日本"}
                    ]
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},{"v": "119", "n": "2024"},{"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},{"v": "118", "n": "2021"},{"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},{"v": "2", "n": "2018"},{"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},{"v": "2015", "n": "2015以前"}
                    ]
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},{"v": "hot", "n": "最热"},{"v": "rating", "n": "评分"}
                    ]
                }
            ],
            "2": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},{"v": "2", "n": "爱情"},{"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},{"v": "5", "n": "战争"},{"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},{"v": "8", "n": "奇幻"},{"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},{"v": "11", "n": "科幻"},{"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},{"v": "14", "n": "家庭"},{"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},{"v": "18", "n": "惊悚"},{"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},{"v": "22", "n": "音乐"},{"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},{"v": "25", "n": "恐怖"}
                    ]
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},{"v": "3", "n": "香港"},{"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},{"v": "18", "n": "韩国"},{"v": "2", "n": "日本"}
                    ]
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},{"v": "119", "n": "2024"},{"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},{"v": "118", "n": "2021"},{"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},{"v": "2", "n": "2018"},{"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},{"v": "2015", "n": "2015以前"}
                    ]
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},{"v": "hot", "n": "最热"},{"v": "rating", "n": "评分"}
                    ]
                }
            ],
            "3": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},{"v": "2", "n": "爱情"},{"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},{"v": "5", "n": "战争"},{"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},{"v": "8", "n": "奇幻"},{"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},{"v": "11", "n": "科幻"},{"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},{"v": "14", "n": "家庭"},{"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},{"v": "18", "n": "惊悚"},{"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},{"v": "22", "n": "音乐"},{"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},{"v": "25", "n": "恐怖"}
                    ]
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},{"v": "3", "n": "香港"},{"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},{"v": "18", "n": "韩国"},{"v": "2", "n": "日本"}
                    ]
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},{"v": "119", "n": "2024"},{"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},{"v": "118", "n": "2021"},{"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},{"v": "2", "n": "2018"},{"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},{"v": "2015", "n": "2015以前"}
                    ]
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},{"v": "hot", "n": "最热"},{"v": "rating", "n": "评分"}
                    ]
                }
            ],
            "4": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},{"v": "2", "n": "爱情"},{"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},{"v": "5", "n": "战争"},{"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},{"v": "8", "n": "奇幻"},{"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},{"v": "11", "n": "科幻"},{"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},{"v": "14", "n": "家庭"},{"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},{"v": "18", "n": "惊悚"},{"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},{"v": "22", "n": "音乐"},{"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},{"v": "25", "n": "恐怖"}
                    ]
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},{"v": "3", "n": "香港"},{"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},{"v": "18", "n": "韩国"},{"v": "2", "n": "日本"}
                    ]
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},{"v": "119", "n": "2024"},{"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},{"v": "118", "n": "2021"},{"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},{"v": "2", "n": "2018"},{"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},{"v": "2015", "n": "2015以前"}
                    ]
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},{"v": "hot", "n": "最热"},{"v": "rating", "n": "评分"}
                    ]
                }
            ]
        }
        
        # 获取首页推荐视频
        home_vod = self.homeVodContent()
        
        return {
            'class': classes,
            'filters': filterObj,
            'list': home_vod['list']
        }

    def homeVodContent(self):
        response = self.fetch(f"{self.host}/api/slide/list?pos_id=88", headers=self.headers)
        res = json.loads(response.text)
        
        videos = []
        for item in res['data']:
            videos.append({
                "vod_id": item["jump_id"],
                "vod_name": item["title"],
                "vod_pic": f"{self.imghost}{item['thumbnail']}",
                "vod_remarks": "",
                "style": {"type": "rect", "ratio": 1.33}
            })
            
        return {'list': videos}

    def categoryContent(self, tid, pg, filter, extend):
        # 构建查询参数
        params = {
            "fcate_pid": tid,
            "category_id": "",
            "area": extend.get("area", ""),
            "year": extend.get("year", ""),
            "type": extend.get("cateId", ""),
            "sort": extend.get("sort", ""),
            "page": pg
        }
        
        # 发送请求
        url = f"{self.host}/api/crumb/list?fcate_pid={tid}&page={pg}"
        if extend.get("area"): url += f"&area={extend['area']}"
        if extend.get("year"): url += f"&year={extend['year']}"
        if extend.get("cateId"): url += f"&type={extend['cateId']}"
        if extend.get("sort"): url += f"&sort={extend['sort']}"
        
        response = self.fetch(url, headers=self.headers)
        res = json.loads(response.text)
        
        # 构建视频列表
        videos = []
        for item in res['data']:
            videos.append({
                "vod_id": item["id"],
                "vod_name": item["title"],
                "vod_pic": f"{self.imghost}{item['path']}",
                "vod_remarks": item["mask"],
                "vod_year": ""
            })
            
        return {
            "page": pg,
            "pagecount": 99999,
            "limit": 15,
            "total": 99999,
            "list": videos
        }

    def detailContent(self, ids):
        vid = ids[0]
        response = self.fetch(f"{self.host}/api/video/detailv2?id={vid}", headers=self.headers)
        res = json.loads(response.text)["data"]
        
        # 处理播放来源
        play_from = []
        for source in res["source_list_source"]:
            name = source["name"].replace("常规线路", "边下边播")
            play_from.append(name)
        
        # 处理播放列表
        play_url = []
        for source in res["source_list_source"]:
            parts = []
            for ep in source["source_list"]:
                parts.append(f"{ep['source_name']}${ep['url']}")
            play_url.append("#".join(parts))
        
        # 构建详情数据
        vod = {
            "vod_id": vid,
            "vod_name": res["title"],
            "vod_pic": f"{self.imghost}{res['path']}",
            "type_name": res["type"],
            "vod_year": res["year"],
            "vod_area": res["area"],
            "vod_remarks": res["mask"],
            "vod_actor": res.get("actor", ""),
            "vod_director": res.get("director", ""),
            "vod_content": res["description"],
            "vod_play_from": "$$$".join(play_from),
            "vod_play_url": "$$$".join(play_url)
        }
        
        return {"list": [vod]}

    def searchContent(self, key, quick, pg=1):
        url = f"{self.host}/api/v2/search/videoV2?key={key}&category_id=88&page={pg}&pageSize=20"
        response = self.fetch(url, headers=self.headers)
        res = json.loads(response.text)
        
        videos = []
        for item in res["data"]:
            videos.append({
                "vod_id": item["id"],
                "vod_name": item["title"],
                "vod_pic": f"{self.imghost}{item['thumbnail']}",
                "vod_remarks": item["mask"],
                "vod_year": ""
            })
            
        return {
            "list": videos,
            "page": pg,
            "pagecount": 9999,
            "limit": 20,
            "total": 999999
        }

    def playerContent(self, flag, id, vipFlags):
        if ".m3u8" in id:
            return {
                "parse": 0,
                "url": id,
                "header": {"User-Agent": self.UA}
            }
        else:
            return {
                "parse": 0,
                "url": f"tvbox-xg:{id}",
                "header": {"User-Agent": self.UA}
            }

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    def localProxy(self, param):
        pass
