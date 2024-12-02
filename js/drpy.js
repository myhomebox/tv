/**
 * 影视TV 超链接跳转支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

let siteUrl = "http://23dhpx.dsgirmcohen248.cc";
let siteKey = "abcdefghijklmnopqrstuvwxyz0123456789";
let siteType = [];
const UA = "webank/h5face;webank/1.0;netType:NETWORK_MOBILE;appVersion:369;packageName:com.jp3.xg3";

let imgDomain = req(siteUrl + "/api/appAuthConfig", {
    method: "get",
    headers: {
        "User-Agent": UA
    }
}).content;
/** 检查siteUrl是否可用 */
if (!imgDomain) {
    for (let i = 0; i < 6; i++) {
        siteType.push(siteKey.charAt(Math.floor(Math.random() * 36)));
    }
    siteType = siteType.join("");
    siteUrl = siteUrl.replace("23dhpx", siteType);
    imgDomain = req(siteUrl + "/api/appAuthConfig", {
        method: "get",
        headers: {
            "User-Agent": UA
        }
    }).content;
}
if (!imgDomain) {
    imgDomain = JSON.parse(req("https://dns.alidns.com/resolve?name=swrdsfeiujo25sw.cc&type=16", {
        method: "get",
        headers: {
            "User-Agent": UA,
            "Host": "dns.alidns.com"
        }
    }).content);
    siteUrl = [siteUrl, ...imgDomain.Answer[0].data.replace(/"/g,"").split(",")];
    for (let i = 1; i < siteUrl.length; i++) {
        imgDomain = req("http://" + siteType + "." + siteUrl[i] + "/api/appAuthConfig", {
            method: "get",
            headers: {
                "User-Agent": UA
            }
        }).content;
        if(imgDomain) {
            siteUrl = "http://" + siteType + "." + siteUrl[i];
            break;
        }
    };
}
imgDomain = "https://" + JSON.parse(imgDomain).data.imgDomain;

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}

async function home(filter) {
    let CLASS = [
        {"type_id":"1","type_name":"电影"},
        {"type_id":"2","type_name":"电视剧"},
        {"type_id":"3","type_name":"动漫"},
        {"type_id":"4","type_name":"综艺"}];
    let FILTERS = {};
    for (let i = 0; i < CLASS.length; i++) {
        let json = JSON.parse(await req(siteUrl + "/api/crumb/filterOptions?fcate_pid=" + CLASS[i].type_id, {
            method: "get"
        }).content.replace(/data/g, "value").replace(/name/g, "n").replace(/(?<!_)id/g, "v")).value;
        FILTERS[CLASS[i].type_id] = json;
    }
    return JSON.stringify({
        "class": CLASS,
        "filters": FILTERS
    });
}

async function homeVod() {
    let json = JSON.parse(await req(siteUrl + "/api/dyTag/list?category_id=88", {
        method: "get",
        headers: {
            "User-Agent": UA
        }
    }).content).data[0].dataList;
    let videos = [];
    for (let i = 0; i < json.length; i++) {
        videos.push({
            vod_id: json[i].id,
            vod_name: json[i].title,
            vod_pic: imgDomain + (json[i].path || json[i].tvimg),
            vod_remarks: json[i].mask + " ⭐" + json[i].score
        })
    }
    return JSON.stringify({
        list: videos
    });
}

async function category(tid, pg, filter, extend) {
    if(pg <= 0) pg = 1;
    let type = extend["type"]?extend["type"]:"";
    let area = extend["area"]?extend["area"]:"";
    let year = extend["year"]?extend["year"]:"";    
    let sort = extend["sort"]?extend["sort"]:"update";
    let category_id = extend["category_id"]?extend["category_id"]:"";

    let json = JSON.parse(await req(siteUrl + "/api/crumb/list?fcate_pid=" + tid + "&category_id=" + category_id + "&area=" + area + "&year=" + year + "&type=" + type + "&sort=" + sort + "&page=" + pg, {
        method: "get",
        headers: {
            "User-Agent": UA
        }
    }).content).data;
    let videos = [];
    for (let i=0; i < json.length; i++) {
        videos.push({
            vod_id: json[i].id,
            vod_name: json[i].title,
            vod_pic: imgDomain + (json[i].path || json[i].cover_image || json[i].thumbnail),
            vod_remarks: json[i].mask + (Boolean(Number(json[i].score)) ? " ⭐" + json[i].score : "")
        })
    }
    return JSON.stringify({
        page: pg,
        limit: json.length,
        list: videos
    });
}

async function detail(id) {
    let json = JSON.parse(await req(siteUrl + "/api/video/detailv2?id=" + id, {
        method: "get",
        headers: {
            "User-Agent": UA
        }
    }).content).data;
    let vod = {
        vod_name: json.title,
        vod_pic: imgDomain + json.thumbnail,
        vod_year: json.year,
        vod_area: json.area,
        vod_remarks: Boolean(Number(json.score)) ? json.score : "",
        vod_content: json.description,
        type_name: JSON.stringify(json.types).match(/[\u4e00-\u9fa5]+/g)?.join(", ") || "",
        vod_director: JSON.stringify(json.directors).match(/[\u4e00-\u9fa5]+/g)?.join(", ") || "",
        vod_actor: JSON.stringify(json.actors).match(/[\u4e00-\u9fa5]+/g)?.join(", ") || "",
        vod_play_from: [],
        vod_play_url: []
    };
    
    id = [];
    for(let i = 0; i < json.source_list_source.length; i++) {
        vod.vod_play_from.push(json.source_list_source[i].name);
        for(let j = 0; j < json.source_list_source[i].source_list.length; j++) {
            vod.vod_play_url.push(json.source_list_source[i].source_list[j].source_name
            + "$"
            + json.source_list_source[i].source_list[j].url);
        }
        id.push(vod.vod_play_url.join("#"));
    }
    vod.vod_play_from = vod.vod_play_from.join("$$$");
    vod.vod_play_url = id.join("$$$");
    return JSON.stringify({
        list: [vod]
    });
}

async function play(flag, id, flags) {
    return JSON.stringify({
        url: id,
        flag: flag,
        flags: flags
    });
}

async function search(wd, quick, pg) {
    let page = pg || 1;
    if (page == 0) page = 1;
    let json = JSON.parse(await req(siteUrl + "/api/search/video?key=" + wd + "&category_id=88&page=" + page, {
        method: "get",
        headers: {
            "User-Agent": UA
        }
    }).content).data;
    let videos = [];
    for (let i = 0; i < json.length; i++) {
        videos.push({
            vod_id: json[i].id,
            vod_name: json[i].title,
            vod_pic: imgDomain + (json[i].path||json[i].tvimg),
            vod_remarks: json[i].mask + (Boolean(Number(json[i].score)) ? " ⭐" + json[i].score : "")
        })
    }
    return JSON.stringify({
        page: page,
        quick: quick,
        list: videos
    });
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search
    };
}
