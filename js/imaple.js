var rule={
    title:'楓林網',
    //host:'https://imaple.app',
    host:'https://imaple.co',
    url:'/show/fyfilter',
    class_name:'電影&電視劇&綜藝&動漫',
    class_url:'1&2&3&4',
    quickSearch:1,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.lang}}/page/fypage{{fl.year}}.html',
    filter: {
        "1":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"劇情片","v":"11"},{"n":"戰爭片","v":"12"},{"n":"紀錄片","v":"20"},{"n":"微電影","v":"21"},{"n":"動漫片","v":"22"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"義大利","v":"/area/意大利"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粤語","v":"/lang/粤語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "2":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"13"},{"n":"港劇","v":"14"},{"n":"台劇","v":"15"},{"n":"日劇","v":"16"},{"n":"韓劇","v":"23"},{"n":"美劇","v":"24"},{"n":"海外劇","v":"25"},{"n":"泰劇","v":"38"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"英國","v":"/area/英國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粤語","v":"/lang/粤語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "3":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"3"},{"n":"港台綜藝","v":"29"},{"n":"日韓綜藝","v":"30"},{"n":"大陸綜藝","v":"31"},{"n":"歐美綜藝","v":"32"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"韓國","v":"/area/韓國"},{"n":"臺灣","v":"/area/臺灣"},{"n":"香港","v":"/area/香港"},{"n":"美國","v":"/area/美國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英國"},{"n":"法國","v":"/area/法國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粤語","v":"/lang/粤語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "4":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"4"},{"n":"港台動漫","v":"33"},{"n":"日韓動漫","v":"34"},{"n":"大陸動漫","v":"35"},{"n":"歐美動漫","v":"36"},{"n":"海外動漫","v":"37"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"日本","v":"/area/日本"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/馬來西亞"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英國"},{"n":"法國","v":"/area/法國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄羅斯"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粤語","v":"/lang/粤語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
	},
        filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'}
    },
    //searchUrl:'/page/fypage/wd/**.html',
    //searchUrl:'/search/wd/**.html',
    searchUrl:'/search/page/fypage/wd/**.html',
    searchable:1,//是否启用全局搜索,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.myui-header__menu&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
    //cate_exclude: '专题',
    play_parse:true,
    lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else if (/\\/share/.test(url)) {
			url = getHome(url) + request(url).match(/main.*?"(.*?)"/)[1];
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
    limit:6,
    推荐:'ul.myui-vodlist;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'ul.myui-vodlist li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    二级:
       {
    	"title":"h1&&Text;.myui-content__detail a:eq(1)&&Text",
    	"img":".myui-content__thumb .lazyload&&data-original",
    	"desc":".myui-vodlist__thumb .pic-text.text-center&&Text;.myui-content__detail a:eq(3)&&Text;.myui-content__detail a:eq(2)&&Text;p.data:eq(2)--span&&Text;p.data:eq(3)--span&&Text",
    	"content":"p.data.hidden-xs:eq(0)--span&&Text",
    	"tabs":".nav-tabs:eq(0) li",
    	"lists":".myui-content__list:eq(#id) li"
    	},
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
}
