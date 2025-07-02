import json
import aiohttp
import re

class Drpy:
    def __init__(self):
        self.cfg = {"skey": "", "stype": "3"}
        self.host = "https://api.ubj83.com"
        self.UA = "Mozilla/5.0 (Linux; Android 9; V2196A Build/PQ3A.190705.08211809; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36;webank/h5face;webank/1.0;netType:NETWORK_WIFI;appVersion:416;packageName:com.jp3.xg3"
        self.imghost = None

    async def init(self, cfg=None):
        if cfg is not None:
            self.cfg = cfg
        self.cfg["skey"] = ""
        self.cfg["stype"] = "3"

    async def req(self, url, headers=None, method="GET"):
        if headers is None:
            headers = {"User-Agent": self.UA, "Referer": self.host}
        
        async with aiohttp.ClientSession() as session:
            async with session.request(method, url, headers=headers) as response:
                content = await response.text()
                return {"content": content}

    async def home(self, filter=None):
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
                        {"v": "1", "n": "剧情"},
                        {"v": "2", "n": "爱情"},
                        {"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},
                        {"v": "5", "n": "战争"},
                        {"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},
                        {"v": "8", "n": "奇幻"},
                        {"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},
                        {"v": "11", "n": "科幻"},
                        {"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},
                        {"v": "14", "n": "家庭"},
                        {"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},
                        {"v": "18", "n": "惊悚"},
                        {"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},
                        {"v": "22", "n": "音乐"},
                        {"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},
                        {"v": "25", "n": "恐怖"},
                    ],
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},
                        {"v": "3", "n": "香港"},
                        {"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},
                        {"v": "18", "n": "韩国"},
                        {"v": "2", "n": "日本"},
                    ],
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},
                        {"v": "119", "n": "2024"},
                        {"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},
                        {"v": "118", "n": "2021"},
                        {"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},
                        {"v": "2", "n": "2018"},
                        {"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},
                        {"v": "2015", "n": "2015以前"},
                    ],
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},
                        {"v": "hot", "n": "最热"},
                        {"v": "rating", "n": "评分"},
                    ],
                },
            ],
            "2": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},
                        {"v": "2", "n": "爱情"},
                        {"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},
                        {"v": "5", "n": "战争"},
                        {"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},
                        {"v": "8", "n": "奇幻"},
                        {"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},
                        {"v": "11", "n": "科幻"},
                        {"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},
                        {"v": "14", "n": "家庭"},
                        {"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},
                        {"v": "18", "n": "惊悚"},
                        {"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},
                        {"v": "22", "n": "音乐"},
                        {"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},
                        {"v": "25", "n": "恐怖"},
                    ],
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},
                        {"v": "3", "n": "香港"},
                        {"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},
                        {"v": "18", "n": "韩国"},
                        {"v": "2", "n": "日本"},
                    ],
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},
                        {"v": "119", "n": "2024"},
                        {"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},
                        {"v": "118", "n": "2021"},
                        {"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},
                        {"v": "2", "n": "2018"},
                        {"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},
                        {"v": "2015", "n": "2015以前"},
                    ],
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},
                        {"v": "hot", "n": "最热"},
                        {"v": "rating", "n": "评分"},
                    ],
                },
            ],
            "3": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},
                        {"v": "2", "n": "爱情"},
                        {"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},
                        {"v": "5", "n": "战争"},
                        {"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},
                        {"v": "8", "n": "奇幻"},
                        {"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},
                        {"v": "11", "n": "科幻"},
                        {"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},
                        {"v": "14", "n": "家庭"},
                        {"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},
                        {"v": "18", "n": "惊悚"},
                        {"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},
                        {"v": "22", "n": "音乐"},
                        {"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},
                        {"v": "25", "n": "恐怖"},
                    ],
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},
                        {"v": "3", "n": "香港"},
                        {"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},
                        {"v": "18", "n": "韩国"},
                        {"v": "2", "n": "日本"},
                    ],
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},
                        {"v": "119", "n": "2024"},
                        {"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},
                        {"v": "118", "n": "2021"},
                        {"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},
                        {"v": "2", "n": "2018"},
                        {"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},
                        {"v": "2015", "n": "2015以前"},
                    ],
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},
                        {"v": "hot", "n": "最热"},
                        {"v": "rating", "n": "评分"},
                    ],
                },
            ],
            "4": [
                {
                    "key": "cateId",
                    "name": "分类",
                    "value": [
                        {"v": "1", "n": "剧情"},
                        {"v": "2", "n": "爱情"},
                        {"v": "3", "n": "动画"},
                        {"v": "4", "n": "喜剧"},
                        {"v": "5", "n": "战争"},
                        {"v": "6", "n": "歌舞"},
                        {"v": "7", "n": "古装"},
                        {"v": "8", "n": "奇幻"},
                        {"v": "9", "n": "冒险"},
                        {"v": "10", "n": "动作"},
                        {"v": "11", "n": "科幻"},
                        {"v": "12", "n": "悬疑"},
                        {"v": "13", "n": "犯罪"},
                        {"v": "14", "n": "家庭"},
                        {"v": "15", "n": "传记"},
                        {"v": "16", "n": "运动"},
                        {"v": "18", "n": "惊悚"},
                        {"v": "20", "n": "短片"},
                        {"v": "21", "n": "历史"},
                        {"v": "22", "n": "音乐"},
                        {"v": "23", "n": "西部"},
                        {"v": "24", "n": "武侠"},
                        {"v": "25", "n": "恐怖"},
                    ],
                },
                {
                    "key": "area",
                    "name": "地區",
                    "value": [
                        {"v": "1", "n": "国产"},
                        {"v": "3", "n": "香港"},
                        {"v": "6", "n": "台湾"},
                        {"v": "5", "n": "美国"},
                        {"v": "18", "n": "韩国"},
                        {"v": "2", "n": "日本"},
                    ],
                },
                {
                    "key": "year",
                    "name": "年代",
                    "value": [
                        {"v": "107", "n": "2025"},
                        {"v": "119", "n": "2024"},
                        {"v": "153", "n": "2023"},
                        {"v": "101", "n": "2022"},
                        {"v": "118", "n": "2021"},
                        {"v": "16", "n": "2020"},
                        {"v": "7", "n": "2019"},
                        {"v": "2", "n": "2018"},
                        {"v": "3", "n": "2017"},
                        {"v": "22", "n": "2016"},
                        {"v": "2015", "n": "2015以前"},
                    ],
                },
                {
                    "key": "sort",
                    "name": "排序",
                    "value": [
                        {"v": "update", "n": "最新"},
                        {"v": "hot", "n": "最热"},
                        {"v": "rating", "n": "评分"},
                    ],
                },
            ]
        }

        return json.dumps({"class": classes, "filters": filterObj})

    async def homeVod(self):
        if not self.imghost:
            await self.get_img_host()
            
        url = f"{self.host}/api/slide/list?pos_id=88"
        html = await self.req(url)
        res = json.loads(html["content"])
        
        videos = []
        for item in res["data"]:
            videos.append({
                "vod_id": item["jump_id"],
                "vod_name": item["title"],
                "vod_pic": f"{self.imghost}{item['thumbnail']}",
                "vod_remarks": "",
                "style": {"type": "rect", "ratio": 1.33}
            })
            
        return json.dumps({"list": videos})

    async def get_img_host(self):
        url = f"{self.host}/api/appAuthConfig"
        response = await self.req(url)
        data = json.loads(response["content"])
        self.imghost = f"https://{data['data']['imgDomain']}"

    async def category(self, tid, pg, filter=None, extend=None):
        if extend is None:
            extend = {}
            
        params = {
            "fcate_pid": tid,
            "category_id": "",
            "area": extend.get("area", ""),
            "year": extend.get("year", ""),
            "type": extend.get("cateId", ""),
            "sort": extend.get("sort", ""),
            "page": pg
        }
        
        query = "&".join([f"{k}={v}" for k, v in params.items() if v])
        url = f"{self.host}/api/crumb/list?{query}"
        html = await self.req(url)
        res = json.loads(html["content"])
        
        videos = []
        for item in res["data"]:
            videos.append({
                "vod_id": item["id"],
                "vod_name": item["title"],
                "vod_pic": f"{self.imghost}{item['path']}",
                "vod_remarks": item["mask"],
                "vod_year": ""
            })
            
        return json.dumps({
            "page": pg,
            "pagecount": 99999,
            "limit": 15,
            "total": 99999,
            "list": videos
        })

    async def detail(self, id):
        url = f"{self.host}/api/video/detailv2?id={id}"
        html = await self.req(url)
        res = json.loads(html["content"])["data"]
        
        play_from = []
        play_url = []
        
        for source in res["source_list_source"]:
            play_from.append(source["name"].replace("常规线路", "边下边播"))
            parts = []
            for ep in source["source_list"]:
                parts.append(f"{ep['source_name']}${ep['url']}")
            play_url.append("#".join(parts))
            
        vod = {
            "type_name": "",
            "vod_year": res["year"],
            "vod_area": res["area"],
            "vod_remarks": res["mask"],
            "vod_content": res["description"],
            "vod_play_from": "$$$".join(play_from),
            "vod_play_url": "$$$".join(play_url)
        }
        
        return json.dumps({"list": [vod]})

    async def play(self, flag, id, flags=None):
        if ".m3u8" in id:
            return json.dumps({"parse": 0, "url": id})
        else:
            return json.dumps({"parse": 0, "url": f"tvbox-xg:{id}"})

    async def search(self, wd, quick=None):
        url = f"{self.host}/api/v2/search/videoV2?key={wd}&category_id=88&page=1&pageSize=20"
        html = await self.req(url)
        res = json.loads(html["content"])
        
        videos = []
        for item in res["data"]:
            videos.append({
                "vod_id": item["id"],
                "vod_name": item["title"],
                "vod_pic": f"{self.imghost}{item['thumbnail']}",
                "vod_remarks": item["mask"],
                "vod_year": ""
            })
            
        return json.dumps({"limit": 20, "list": videos})
