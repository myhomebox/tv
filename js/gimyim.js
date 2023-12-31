var rule = {
    title: '劇迷im',
    host: 'https://gimy.im',
    // url:'/vodshow/fyclass--------fypage---.html',
    url: '/show/fyfilter',
    filterable: 1, //是否启用分类筛选,
    filter_url: '{{fl.cateId}}{{fl.area}}{{fl.by}}/page/fypage{{fl.year}}',
    filter: {"1":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"23"},{"n":"科幻片","v":"8"},{"n":"恐怖片","v":"12"},{"n":"劇情片","v":"9"},{"n":"戰争片","v":"10"},{"n":"紀錄片","v":"11"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"美國","v":"/area/美國"},{"n":"英國","v":"/area/英國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"加拿大","v":"/area/加拿大"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"}]}],"2":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"13"},{"n":"港劇","v":"14"},{"n":"台劇","v":"15"},{"n":"美劇","v":"16"},{"n":"日劇","v":"20"},{"n":"韓劇","v":"21"},{"n":"海外劇","v":"22"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"美國","v":"/area/美國"},{"n":"英國","v":"/area/英國"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"}]}],"3":[{"key":"area","name":"地區","value":[{"n":"全部","v":"3"},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"美國","v":"/area/美國"},{"n":"英國","v":"/area/英國"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"}]}],"4":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韓國"},{"n":"美國","v":"/area/美國"},{"n":"歐美","v":"/area/歐美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"}]}]},
    filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
    searchUrl: '/search/page/fypage/?wd=**',
    searchable: 1,
    quickSearch: 1,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    //class_parse: '.navbar-left&&li;a&&Text;a&&href;/(\\d+).html',
    class_name: '電影&電視劇&綜藝&動漫',
    class_url: '1&2&3&4',
    play_parse: true,
    lazy: `js:
            var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
            var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,
    limit: 6,
    推荐: 'ul.col-md-8:eq(2);li;*;*;*;*',
    double: true, // 推荐内容是否双层定位
    一级: '#content&&li;a&&title;.video-pic&&data-original;.text-bg-r&&Text;a&&href',
    二级: {
        "title": "h1&&Text;li.col-xs-6:eq(0) a&&Text",
        "img": "a.video-pic&&data-original",
        "desc": "li.col-xs-12:eq(0)&&Text;li.col-xs-6:eq(2)--span&&Text;li.col-xs-4--span&&Text;li.col-md-12--span:eq(1)&&Text;li.col-md-6--span:eq(2)&&Text",
        "content": "li.col-sm-12--span&&Text",
        "tabs": "a.gico",
        "lists": "ul.fade:eq(#id)&&li"
    },
    搜索: '#content&&div.details-info-min;*;*;.hidden-lg&&Text;*',
}
