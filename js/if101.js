var rule={
	title:'if101[飞]',
	// host:'https://olevod.live',
	host:'https://olevod.io',
	homeUrl:'/index.php/label/rankweek.html', // 人气排行榜周榜
	url:'/index.php/vod/show/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: {
		"1":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"1"},{"n":"冒險","v":"6"},{"n":"劇情","v":"7"},{"n":"動作","v":"8"},{"n":"動畫電影","v":"9"},{"n":"同性","v":"10"},{"n":"喜劇","v":"11"},{"n":"奇幻","v":"12"},{"n":"恐怖","v":"20"},{"n":"懸疑","v":"21"},{"n":"驚悚","v":"22"},{"n":"戰爭","v":"23"},{"n":"歌舞","v":"24"},{"n":"災難","v":"25"},{"n":"愛情","v":"26"},{"n":"犯罪","v":"27"},{"n":"科幻","v":"28"},{"n":"經典","v":"29"},{"n":"網路電影","v":"30"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韓國","v":"/area/韩国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"2":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"2"},{"n":"歐美劇","v":"13"},{"n":"日劇","v":"14"},{"n":"韓劇","v":"15"},{"n":"國產劇","v":"16"},{"n":"泰劇","v":"31"},{"n":"港劇","v":"32"},{"n":"台劇","v":"33"},{"n":"新馬劇","v":"34"},{"n":"其它劇","v":"35"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"歐美","v":"/area/欧美"},{"n":"泰國","v":"/area/泰国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"3":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"3"},{"n":"歐美動漫","v":"36"},{"n":"日本動漫","v":"37"},{"n":"韓國動漫","v":"38"},{"n":"國產動漫","v":"39"},{"n":"新馬泰動漫","v":"40"},{"n":"港台動漫","v":"41"},{"n":"其他動漫","v":"42"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"歐美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"4":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"4"},{"n":"歐美綜藝","v":"43"},{"n":"日本綜藝","v":"44"},{"n":"韓國綜藝","v":"45"},{"n":"國產綜藝","v":"46"},{"n":"新馬泰綜藝","v":"47"},{"n":"港台綜藝","v":"48"},{"n":"其他綜藝","v":"49"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"歐美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"51":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"港台","v":"/area/港台"},{"n":"歐美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
	},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
	        51:{cateId:'51'}
	},
	searchable:2,//是否启用全局搜索,
	quickSearch:0,//是否启用快速搜索,
	headers:{
		'User-Agent':'MOBILE_UA',
	},
        class_name:'電影&電視劇&綜藝&動漫&紀錄片', // 分类筛选 /api.php/app/nav
        class_url:'1&2&4&3&51',
	//class_parse:'.conch-nav&&li:gt(1):lt(9);a&&Text;a&&href;.*/(.*?).html',
	cate_exclude:'直播',
	play_parse:true,
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		let play_Url = 'json:http://127.0.0.1:10079/parse/?thread=0&proxy=&url=';
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				playUrl: play_Url,
				parse: 1
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
	// double:true, // 推荐内容是否双层定位
	// 推荐:'body&&.hl-list-wrap;ul&&li;*;*;*;*',
	推荐:'.hl-rank-list&&.hl-list-item;*;.hl-lazy&&data-original;.hl-item-remarks--span&&Text;a&&href',
	一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
	二级:{
		"title":"h2&&Text;li.hl-col-xs-12--em:eq(6)&&Text",
		"img":".hl-lazy&&data-original",
		"desc":"li.hl-col-xs-12:eq(1)&&Text;li.hl-col-xs-12--em:eq(4)&&Text;li.hl-col-xs-12--em:eq(5)&&Text;li.hl-col-xs-12--em:eq(2)&&Text;li.hl-col-xs-12--em:eq(3)&&Text",
		"content":".hl-content-text&&Text",
		"tabs":".hl-from-list&&li",
		"lists":".hl-plays-list:eq(#id) li"
	},

	// searchUrl:'/index.php/vod/search.html?wd=**',
	searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
	detailUrl:'/index.php/vod/detail/id/fyid.html', //非必填,二级详情拼接链接
	// 搜索:'.hl-list-wrap&&.hl-item-pic;*;*;*;*',
	搜索:'ul.hl-one-list .hl-item-wrap.clearfix;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}
