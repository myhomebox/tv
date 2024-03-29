// 新视觉影院新发布页： https://www.5280.fun
var rule = {
	title: '新视觉影视',
	// host:'https://www.6080dy4.com',
	host: 'https://www.5280.fun',
	hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".go:eq(0)&&a&&href");print(src);HOST=src',
	// url:'/vodshow/fyclass--------fypage---.html',
	url: '/vodshow/fyfilter.html',
	searchable: 2, //是否启用全局搜索,
	quickSearch: 0, //是否启用快速搜索,
	filterable: 1, //是否启用分类筛选,
	filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
	filter: {
    	            "1":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"動作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"劇情","v":"剧情"},{"n":"戰爭","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"動畫","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武俠","v":"武侠"},{"n":"冒險","v":"冒险"},{"n":"槍戰","v":"枪战"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"經典","v":"经典"},{"n":"青春","v":"青春"},{"n":"文藝","v":"文艺"},{"n":"微電影","v":"微电影"},{"n":"古裝","v":"古装"},{"n":"歷史","v":"历史"},{"n":"運動","v":"运动"},{"n":"農村","v":"农村"},{"n":"兒童","v":"儿童"},{"n":"網路電影","v":"网络电影"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
    	            "2":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"古装","v":"古裝"},{"n":"戰爭","v":"战争"},{"n":"青春偶像","v":"青春偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"動作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"歷史","v":"历史"},{"n":"經典","v":"经典"},{"n":"鄉村","v":"乡村"},{"n":"情景","v":"情景"},{"n":"商戰","v":"商战"},{"n":"網劇","v":"网剧"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"中国香港"},{"n":"台灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"泰國","v":"泰国"},{"n":"英國","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
    	            "3":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"選秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"訪談","v":"访谈"},{"n":"播報","v":"播报"},{"n":"旅遊","v":"旅游"},{"n":"音樂","v":"音乐"},{"n":"美食","v":"美食"},{"n":"紀實","v":"纪实"},{"n":"曲藝","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"遊戲","v":"游戏"},{"n":"財經","v":"財經"},{"n":"求職","v":"求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"港台","v":"港台"},{"n":"韓國","v":"韩国"},{"n":"歐美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
    	            "4":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"科幻","v":"科幻"},{"n":"奇幻","v":"奇幻"},{"n":"熱血","v":"热血"},{"n":"動畫","v":"动画"},{"n":"劇情","v":"剧情"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"懸疑","v":"悬疑"},{"n":"戀愛","v":"恋爱"},{"n":"治愈","v":"治愈"},{"n":"魔幻","v":"魔幻"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"競技","v":"竞技"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"原創","v":"原创"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其它","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"歐美","v":"欧美"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
    	            "63":[{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]
    		},
        filter_def:{1:{cateId:'1'},2:{cateId:'2'},3:{cateId:'3'},4:{cateId:'4'},63:{cateId:'63'}},
        searchUrl: '/vod-s/**----------fypage---.html',
	// class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
	class_name: '電影&電視劇&綜藝&動漫&紀錄片',
	class_url: '1&2&3&4&63',
	tab_remove: ['夸克4K'],
	//class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(\\d).html',
	play_parse: true,
	lazy: `js:
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
		} else {
			input
		}
	`,
	limit: 6,
	推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
	double: true, // 推荐内容是否双层定位
	一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
	二级: {
		"title": "h1&&Text;.tag-link:eq(1)&&Text",
		"img": ".module-item-pic&&img&&data-src",
		"desc": ".video-info-items:eq(3)&&Text;.tag-link:eq(2)&&Text;.tag-link:eq(3)&&Text;.video-info-actor:eq(1)--span&&Text;.video-info-actor:eq(0)--span&&Text",
		"content": ".vod_content&&Text",
		"tabs": ".module-tab-item",
		"lists": ".module-player-list:eq(#id)&&.scroll-content&&a"
	},
	搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
