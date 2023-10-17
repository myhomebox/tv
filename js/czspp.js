var rule={
    title:'厂长资源',
    host:'https://cz01.pw', 
    //host:'https://www.czzy.site',
    //hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,"h3&&a&&href")',
    url:'/fyclassfyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}{{fl.class}}{{fl.area}}/page/fypage',
    filter: {
    "movie_bt":[
{
"key":"area",
"name":"分類",
"value":[
{"n":"全部","v":""},
{"n":"站長推薦","v":"/movie_bt_series/zhanchangtuijian"},
{"n":"電影","v":"/movie_bt_series/dyy"},
{"n":"電視劇","v":"/movie_bt_series/dianshiju"},
{"n":"動畫","v":"/movie_bt_series/dohua"},
{"n":"國產劇","v":"/movie_bt_series/guochanju"},
{"n":"美劇","v":"/movie_bt_series/mj"},
{"n":"日劇","v":"/movie_bt_series/rj"},
{"n":"韓劇","v":"/movie_bt_series/hj"},
{"n":"海外劇（其他）","v":"/movie_bt_series/hwj"},
{"n":"華語電影","v":"/movie_bt_series/huayudianying"},
{"n":"歐美電影","v":"/movie_bt_series/meiguodianying"},
{"n":"日本電影","v":"/movie_bt_series/ribendianying"},
{"n":"韓國電影","v":"/movie_bt_series/hanguodianying"},
{"n":"英國電影","v":"/movie_bt_series/yingguodianying"},
{"n":"法國電影","v":"/movie_bt_series/faguodianying"},
{"n":"印度電影","v":"/movie_bt_series/yindudianying"},
{"n":"俄羅斯電影","v":"/movie_bt_series/eluosidianying"},
{"n":"加拿大電影","v":"/movie_bt_series/jianadadianying"},
{"n":"紀錄片","v":"/movie_bt_tags/jlpp'"},
{"n":"會員專區","v":"/movie_bt_series/huiyuanzhuanqu"}
]
},
{
"key":"class",
"name":"類型",
"value":[
{"n":"全部","v":""},
{"n":"傳記","v":"/movie_bt_tags/chuanji"},
{"n":"兒童","v":"/movie_bt_tags/etet"},
{"n":"冒險","v":"/movie_bt_tags/maoxian"},
{"n":"劇情","v":"/movie_bt_tags/juqing"},
{"n":"動作","v":"/movie_bt_tags/dozuo"},
{"n":"動漫","v":"/movie_bt_tags/doman"},
{"n":"動畫","v":"/movie_bt_tags/dhh"},
{"n":"歷史","v":"/movie_bt_tags/lishi"},
{"n":"古裝","v":"/movie_bt_tags/guzhuang"},
{"n":"同性","v":"/movie_bt_tags/tongxing"},
{"n":"喜劇","v":"/movie_bt_tags/xiju"},
{"n":"奇幻","v":"/movie_bt_tags/qihuan"},
{"n":"家庭","v":"/movie_bt_tags/jiating"},
{"n":"恐怖","v":"/movie_bt_tags/kubu"},
{"n":"懸疑","v":"/movie_bt_tags/xuanyi"},
{"n":"情色","v":"/movie_bt_tags/qingse"},
{"n":"驚悚","v":"/movie_bt_tags/kingsong"},
{"n":"戰爭","v":"/movie_bt_tags/zhanzhen"},
{"n":"歌舞","v":"/movie_bt_tags/gw"},
{"n":"武俠","v":"/movie_bt_tags/wuxia"},
{"n":"災難","v":"/movie_bt_tags/zainan"},
{"n":"愛情","v":"/movie_bt_tags/aiqing"},
{"n":"犯罪","v":"/movie_bt_tags/fanzui"},
{"n":"短片","v":"/movie_bt_tags/dp"},
{"n":"科幻","v":"/movie_bt_tags/kh"},
{"n":"紀錄片","v":"/movie_bt_tags/jlpp"},
{"n":"西部","v":"/movie_bt_tags/xb"},
{"n":"運動","v":"/movie_bt_tags/yd"},
{"n":"音樂","v":"/movie_bt_tags/yy"}
]
},
]
},
    searchUrl:'/page/fypage?s=**',
    searchable:2,
    filterable:0,
    headers:{
        'User-Agent': 'MOBILE_UA',
        'Cookie': 'esc_search_captcha=1'
    },
    class_name:'全部&豆瓣電影Top250&高分影視&最新電影&劇場版&熱映中&站長推薦',
    class_url:'movie_bt&dbtop250&gaofenyingshi&zuixindianying&dongmanjuchangban&reyingzhong&/movie_bt_series/zhanchangtuijian',
    // class_parse: '.navlist li:gt(0);a&&Text;a&&href;.*/(.*)',
    play_parse:true,
   // lazy代码:源于海阔香雅情大佬 / 小程序：香情影视 https://pastebin.com/L4tHdvFn
    lazy:`js:
        pdfh = jsp.pdfh;
        var html = request(input);
        var ohtml = pdfh(html, '.videoplay&&Html');
        var url = pdfh(ohtml, "body&&iframe&&src");
        if (/Cloud/.test(url)) {
            var ifrwy = request(url);
            let code = ifrwy.match(/var url = '(.*?)'/)[1].split('').reverse().join('');
            let temp = '';
            for (let i = 0x0; i < code.length; i = i + 0x2) {
                temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))
            }
            input = {
                jx: 0,
                url: temp.substring(0x0, (temp.length - 0x7) / 0x2) + temp.substring((temp.length - 0x7) / 0x2 + 0x7),
                parse: 0
            }
        } else if (/decrypted/.test(ohtml)) {
            var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");
            eval(getCryptoJS());
            var scrpt = phtml.match(/var.*?\\)\\);/g)[0];
            var data = [];
            eval(scrpt.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));
            input = {
                jx: 0,
                url: data.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1],
                parse: 0
            }
        } else {
            input
        }
	`,
    推荐:'.bt_img;ul&&li;*;*;*;*',
    double:true,
    一级:'.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级:{
        "title": "h1&&Text;.moviedteail_list li&&a&&Text",
        "img": "div.dyimg img&&src",
        "desc": ".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7)&&Text;.moviedteail_list li:eq(5)&&Text",
        "content": ".yp_context&&Text",
        "tabs": ".mi_paly_box span",
        "lists": ".paly_list_btn:eq(#id) a"
    },
    搜索:'.search_list&&ul&&li;*;*;*;*',
    // 预处理:'rule_fetch_params.headers.Cookie="68148872828e9f4d64e7a296f6c6b6d7=5429da9a54375db451f7f9e4f16ce0ea;esc_search_captcha=1";let new_host="https://czspp.com";let new_html=request(new_host);if(/正在进行人机识别/.test(new_html)){let new_src=pd(new_html,"script&&src",new_host);log(new_src);let hhtml=request(new_src,{withHeaders:true});let json=JSON.parse(hhtml);let html=json.body;let key=html.match(new RegExp(\'var key="(.*?)"\'))[1];let avalue=html.match(new RegExp(\'value="(.*?)"\'))[1];let c="";for(let i=0;i<avalue.length;i++){let a=avalue[i];let b=a.charCodeAt();c+=b}let value=md5(c);log(value);let yz_url="https://czspp.com/a20be899_96a6_40b2_88ba_32f1f75f1552_yanzheng_ip.php?type=96c4e20a0e951f471d32dae103e83881&key="+key+"&value="+value;log(yz_url);hhtml=request(yz_url,{withHeaders:true});json=JSON.parse(hhtml);let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");let cookie=setCk?json[setCk].split(";")[0]:"";log("cookie:"+cookie);rule_fetch_params.headers.Cookie=cookie;setItem(RULE_CK,cookie)}',
	}
