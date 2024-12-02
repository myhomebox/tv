/**
 * 影视TV 超链接跳转支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

let siteUrl = 'http://api2.rinhome.com';
let siteKey,siteType;
const UA = 'jianpian-android/365';
const JPAUTH = '078oBH8k3a9wPDaS2e04bOslDUir8USNWmCQTb4rU3LE';
const Referer = 'www.jianpianapp.com';

let httpStatusCode = req(siteUrl,{
    method: 'get',
    headers: {
        'User-Agent': UA,
        'JPAUTH': JPAUTH
    }
}).code;
if(httpStatusCode!=200) {
    let json = JSON.parse(req('https://dns.alidns.com/resolve?name=jpmobile.jianpiandns.com&type=TXT',{
        method: 'get',
        headers: {
            'User-Agent': UA,
            'JPAUTH': JPAUTH,
            'Host': 'dns.alidns.com'
        }
    }).content);
    siteUrl = [siteUrl, ...json.Answer[0].data.replace(/"/g,'').split(',')];
    for(let i=1;i<siteUrl.length;i++) {
        let httpStatusCode = req(siteUrl[i],{
            method: 'get',
            headers: {
                'User-Agent': UA,
                'JPAUTH': JPAUTH
            }
        }).code;
        if(httpStatusCode==200) {
            siteUrl = siteUrl[i];
            break;
        }
    };
};

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}

async function home(filter) {
    return JSON.stringify({
        'class': [{'type_id':'0','type_name':'全部'},{'type_id':'1','type_name':'电影'},{'type_id':'2','type_name':'电视剧'},{'type_id':'3','type_name':'动漫'},{'type_id':'4','type_name':'综艺'}],
        'filters': {
            "0":[{"key":"area","name":"area","value":[{"n":"全部","v":"0"},{"n":"国产","v":"1"},{"n":"中国香港","v":"3"},{"n":"中国台湾","v":"6"},{"n":"美国","v":"5"},{"n":"韩国","v":"18"},{"n":"日本","v":"2"}]},{"key":"year","name":"year","value":[{"n":"全部","v":"0"},{"n":"2024","v":"119"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"type","name":"type","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"爱情","v":"2"},{"n":"动画","v":"3"},{"n":"喜剧","v":"4"},{"n":"战争","v":"5"},{"n":"歌舞","v":"6"},{"n":"古装","v":"7"},{"n":"奇幻","v":"8"},{"n":"冒险","v":"9"},{"n":"动作","v":"10"},{"n":"科幻","v":"11"},{"n":"悬疑","v":"12"},{"n":"犯罪","v":"13"},{"n":"家庭","v":"14"},{"n":"传记","v":"15"},{"n":"运动","v":"16"},{"n":"同性","v":"17"},{"n":"惊悚","v":"18"},{"n":"短片","v":"20"},{"n":"历史","v":"21"},{"n":"音乐","v":"22"},{"n":"西部","v":"23"},{"n":"武侠","v":"24"},{"n":"恐怖","v":"25"}]},{"key":"sort","name":"sort","value":[{"n":"热门","v":"hot"},{"n":"更新","v":"update"},{"n":"评分","v":"rating"}]}],
            "1":[{"key":"area","name":"area","value":[{"n":"全部","v":"0"},{"n":"国产","v":"1"},{"n":"中国香港","v":"3"},{"n":"中国台湾","v":"6"},{"n":"美国","v":"5"},{"n":"韩国","v":"18"},{"n":"日本","v":"2"}]},{"key":"year","name":"year","value":[{"n":"全部","v":"0"},{"n":"2024","v":"119"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"type","name":"type","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"爱情","v":"2"},{"n":"动画","v":"3"},{"n":"喜剧","v":"4"},{"n":"战争","v":"5"},{"n":"歌舞","v":"6"},{"n":"古装","v":"7"},{"n":"奇幻","v":"8"},{"n":"冒险","v":"9"},{"n":"动作","v":"10"},{"n":"科幻","v":"11"},{"n":"悬疑","v":"12"},{"n":"犯罪","v":"13"},{"n":"家庭","v":"14"},{"n":"传记","v":"15"},{"n":"运动","v":"16"},{"n":"同性","v":"17"},{"n":"惊悚","v":"18"},{"n":"短片","v":"20"},{"n":"历史","v":"21"},{"n":"音乐","v":"22"},{"n":"西部","v":"23"},{"n":"武侠","v":"24"},{"n":"恐怖","v":"25"}]},{"key":"sort","name":"sort","value":[{"n":"热门","v":"hot"},{"n":"更新","v":"update"},{"n":"评分","v":"rating"}]}],
            "2":[{"key":"area","name":"area","value":[{"n":"全部","v":"0"},{"n":"国产","v":"1"},{"n":"中国香港","v":"3"},{"n":"中国台湾","v":"6"},{"n":"美国","v":"5"},{"n":"韩国","v":"18"},{"n":"日本","v":"2"}]},{"key":"year","name":"year","value":[{"n":"全部","v":"0"},{"n":"2024","v":"119"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"type","name":"type","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"爱情","v":"2"},{"n":"动画","v":"3"},{"n":"喜剧","v":"4"},{"n":"战争","v":"5"},{"n":"歌舞","v":"6"},{"n":"古装","v":"7"},{"n":"奇幻","v":"8"},{"n":"冒险","v":"9"},{"n":"动作","v":"10"},{"n":"科幻","v":"11"},{"n":"悬疑","v":"12"},{"n":"犯罪","v":"13"},{"n":"家庭","v":"14"},{"n":"传记","v":"15"},{"n":"运动","v":"16"},{"n":"同性","v":"17"},{"n":"惊悚","v":"18"},{"n":"短片","v":"20"},{"n":"历史","v":"21"},{"n":"音乐","v":"22"},{"n":"西部","v":"23"},{"n":"武侠","v":"24"},{"n":"恐怖","v":"25"}]},{"key":"sort","name":"sort","value":[{"n":"热门","v":"hot"},{"n":"更新","v":"update"},{"n":"评分","v":"rating"}]}],
            "3":[{"key":"area","name":"area","value":[{"n":"全部","v":"0"},{"n":"国产","v":"1"},{"n":"中国香港","v":"3"},{"n":"中国台湾","v":"6"},{"n":"美国","v":"5"},{"n":"韩国","v":"18"},{"n":"日本","v":"2"}]},{"key":"year","name":"year","value":[{"n":"全部","v":"0"},{"n":"2024","v":"119"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"type","name":"type","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"爱情","v":"2"},{"n":"动画","v":"3"},{"n":"喜剧","v":"4"},{"n":"战争","v":"5"},{"n":"歌舞","v":"6"},{"n":"古装","v":"7"},{"n":"奇幻","v":"8"},{"n":"冒险","v":"9"},{"n":"动作","v":"10"},{"n":"科幻","v":"11"},{"n":"悬疑","v":"12"},{"n":"犯罪","v":"13"},{"n":"家庭","v":"14"},{"n":"传记","v":"15"},{"n":"运动","v":"16"},{"n":"同性","v":"17"},{"n":"惊悚","v":"18"},{"n":"短片","v":"20"},{"n":"历史","v":"21"},{"n":"音乐","v":"22"},{"n":"西部","v":"23"},{"n":"武侠","v":"24"},{"n":"恐怖","v":"25"}]},{"key":"sort","name":"sort","value":[{"n":"热门","v":"hot"},{"n":"更新","v":"update"},{"n":"评分","v":"rating"}]}],
            "4":[{"key":"area","name":"area","value":[{"n":"全部","v":"0"},{"n":"国产","v":"1"},{"n":"中国香港","v":"3"},{"n":"中国台湾","v":"6"},{"n":"美国","v":"5"},{"n":"韩国","v":"18"},{"n":"日本","v":"2"}]},{"key":"year","name":"year","value":[{"n":"全部","v":"0"},{"n":"2024","v":"119"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"type","name":"type","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"爱情","v":"2"},{"n":"动画","v":"3"},{"n":"喜剧","v":"4"},{"n":"战争","v":"5"},{"n":"歌舞","v":"6"},{"n":"古装","v":"7"},{"n":"奇幻","v":"8"},{"n":"冒险","v":"9"},{"n":"动作","v":"10"},{"n":"科幻","v":"11"},{"n":"悬疑","v":"12"},{"n":"犯罪","v":"13"},{"n":"家庭","v":"14"},{"n":"传记","v":"15"},{"n":"运动","v":"16"},{"n":"同性","v":"17"},{"n":"惊悚","v":"18"},{"n":"短片","v":"20"},{"n":"历史","v":"21"},{"n":"音乐","v":"22"},{"n":"西部","v":"23"},{"n":"武侠","v":"24"},{"n":"恐怖","v":"25"}]},{"key":"sort","name":"sort","value":[{"n":"热门","v":"hot"},{"n":"更新","v":"update"},{"n":"评分","v":"rating"}]}]
        },
    });
}

async function homeVod() {
    try {
        let json = JSON.parse(await req(siteUrl+'/api/tag/hand?code=unknownc917981c147a134e&channel=wandoujia',{
            method: 'get',
            headers: {
                'JPAUTH': JPAUTH,
                'User-Agent': UA
            }
        }).content).data[0].video;
        let videos = [];
        for(let i=0;i<json.length;i++) {
            videos.push({
                vod_id: json[i].id,
                vod_name: json[i].title,
                vod_pic: (json[i].thumbnail||json[i].path)+'@Referer='+Referer+'@User-Agent='+UA,
                vod_remarks: (json[i].mask||json[i].playlist.title)+' ⭐'+json[i].score
            })
        }
        return JSON.stringify({
            list: videos,
        });
    } catch (error) {
        //console.log('error', error);
    }
}

async function category(tid, pg, filter, extend) {
    if(pg <= 0) pg = 1;
    let area = extend['area']?extend['area']:'0';
    let year = extend['year']?extend['year']:'0';
    let type = extend['type']?extend['type']:'0';
    let sort = extend['sort']?extend['sort']:'update';
    
    let url = siteUrl+'/api/crumb/list?area='+area+'&code=unknownc917981c147a134e&category_id='+tid+'&year='+year+'&limit=24&channel=wandoujia&page='+pg+'&sort='+sort+'&type='+type;
    if (tid.endsWith('_clicklink')) {
        tid = tid.split('_')[0];
        url = siteUrl+'/api/video/search?key='+tid+'&page='+pg;
    }
    let json = JSON.parse(await req(url,{
        method: 'get',
        headers: {
            'User-Agent': UA,
            'JPAUTH': JPAUTH
        }
    }).content).data;
    let videos = [];
    for(let i=0;i<json.length;i++) {
        videos.push({
            vod_id: json[i].id,
            vod_name: json[i].title,
            vod_pic: (json[i].thumbnail||json[i].path)+'@Referer='+Referer+'@User-Agent='+UA,
            vod_remarks: (json[i].mask||json[i].playlist.title)+' ⭐'+json[i].score
        })
    }
    return JSON.stringify({
        page: pg,
        limit: json.length,
        list: videos
    });
}

async function detail(id) {
    let json = JSON.parse(await req(siteUrl+'/api/node/detail?channel=wandoujia&id='+id,{
        method: 'get',
        headers: {
            'User-Agent': UA,
            'JPAUTH': JPAUTH
        }
    }).content).data;
    let vod = {
        vod_name: json.title,
        vod_pic: json.thumbnail+'@Referer='+Referer+'@User-Agent='+UA,
        vod_year: json.year.title,
        vod_area: json.area.title,
        vod_remarks: json.score,
        vod_content: json.description
    };
    vod.type_name = [];
    for(let i=0;i<json.types.length;i++) {
        vod.type_name.push(json.types[i].name);
    }
    vod.type_name = vod.type_name.join(', ');
    function getLink(data) {
        id = [];
        for(let i=0;i<data.length;i++) {
            id.push('[a=cr:'+JSON.stringify({'id':data[i].name+'_clicklink','name':data[i].name})+'/]'+data[i].name+'[/a]')
        }
        return id.join(', ');
    }
    vod.vod_actor = getLink(json.actors);
    vod.vod_director = getLink(json.directors);
    if(json.have_ftp_ur == 1) {
        vod.vod_play_from = '边下边播超清版';
        vod.vod_play_url = [];
        for(let i=0;i<json.btbo_downlist.length;i++) {
            vod.vod_play_url.push(json.btbo_downlist[i].val.replace('$','$tvbox-xg:'));
        }
        vod.vod_play_url = vod.vod_play_url.join('#');
    }
    return JSON.stringify({
        list: [vod]
    });
}

async function play(flag, id, flags) {
    return JSON.stringify({
        url:id,
        flag:flag,
        flags:flags
    });
}

async function search(wd, quick, pg) {
    let page = pg || 1;
    if (page == 0) page = 1;
    let json = JSON.parse(await req(siteUrl+'/api/video/search?key='+wd+'&page='+page,{
        method: 'get',
        headers: {
            'User-Agent': UA,
            'JPAUTH': JPAUTH
        }
    }).content).data;
    let videos = [];
    for(let i=0;i<json.length;i++) {
        videos.push({
            vod_id: json[i].id,
            vod_name: json[i].title,
            vod_pic: json[i].thumbnail+'@Referer='+Referer+'@User-Agent='+UA,
            vod_remarks: json[i].mask+' ⭐'+json[i].score
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
