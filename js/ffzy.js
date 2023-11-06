/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

var rule = {
	title:'非凡影视',
	host: 'http://www.dy1234.net',
	url:'/search.php?page=fypage&searchtype=5&tid=fyfilter',
        searchUrl:'/search.php?page=fypage&searchword=**&searchtype=',
        searchable: 2,//是否启用全局搜索,
        quickSearch: 0,//是否启用快速搜索,
        filterable: 1,//是否启用分类筛选,
        filter_url:'{{fl.cateId}}&order={{fl.by}}&area={{fl.area}}&jq={{fl.class}}&yuyan={{fl.lang}}&year={{fl.year}}',
        filter: {
            	"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"5"},{"n":"爱情片","v":"6"},{"n":"科幻片","v":"7"},{"n":"恐怖片","v":"8"},{"n":"战争片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"记录片","v":"11"},{"n":"剧情片","v":"12"}]},
            		{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"欧美","v":"欧美"},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"泰国","v":"泰国"},{"n":"越南","v":"越南"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"其他","v":"其他"}]},
            	        {"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},
            	        {"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"更早","v":"more"}]},
            		{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"commend"}]}],
            	"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"香港剧","v":"14"},{"n":"台湾剧","v":"15"},{"n":"韩国剧","v":"16"},{"n":"日本剧","v":"26"},{"n":"欧美剧","v":"27"},{"n":"海外剧","v":"28"},{"n":"泰国剧","v":"38"}]},
            		{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"欧美","v":"欧美"},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"泰国","v":"泰国"},{"n":"越南","v":"越南"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"其他","v":"其他"}]},
            	        {"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},
            	        {"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"更早","v":"more"}]},
            		{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"commend"}]}],
            	"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产动漫","v":"29"},{"n":"日韩动漫","v":"30"},{"n":"港台动漫","v":"31"},{"n":"欧美动漫","v":"32"},{"n":"海外动漫","v":"33"}]},
            		{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"欧美","v":"欧美"},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"泰国","v":"泰国"},{"n":"越南","v":"越南"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"其他","v":"其他"}]},
            	        {"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},
            	        {"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"更早","v":"more"}]},
            		{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"commend"}]}],
            	"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产综艺","v":"34"},{"n":"日韩综艺","v":"35"},{"n":"港台综艺","v":"36"},{"n":"欧美综艺","v":"37"}]},
            		{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"欧美","v":"欧美"},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"泰国","v":"泰国"},{"n":"越南","v":"越南"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"其他","v":"其他"}]},
            	        {"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},
            	        {"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"更早","v":"more"}]},
            		{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"commend"}]}]
	 },
	filter_def:{1:{cateId:'1'},2:{cateId:'2'},3:{cateId:'3'},4:{cateId:'4'}},
        class_name: '电影&电视剧&动漫&综艺',
        class_url: '1&2&3&4',
	//class_parse:'.nav-list li;a&&Text;a&&href;.*/(.*?).html',
	play_parse: true,
	lazy:`js:
		let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		let url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = {jx:0, url:url, parse:0}
		} else {
			input
		}
	`,
	limit: 6,
	推荐:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		let html = request(input);
		let list = pdfa(html, ".module-list .module-items .module-item:not(:contains(伦理片))");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".module-item-caption&&Text"),
				pic_url: pd(it, ".module-item-pic&&img&&data-src"),
				url: pd(it, "a&&href")
			})
		});
		setResult(d)
	`,
	一级:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		let html = '';
		let list = {};
		if (cateObj.tid.endsWith('_clicklink')) {
			let tid = cateObj.tid.split('_')[0];
			input = HOST + '/search.php?page=' + MY_PAGE + '&searchword=' + tid + '&searchtype=';
			html = request(input);
			list = pdfa(html, ".module-list .module-items&&.module-search-item:not(:contains(伦理片))");
			list.forEach(it => {
			d.push({
				title: pdfh(it, "a:eq(1)&&title"),
				desc: pdfh(it, ".tag-link:eq(0)&&Text") + '/' + pdfh(it, ".tag-link:eq(2)--span&&Text"),
				pic_url: pd(it, ".module-item-pic&&img&&data-src"),
				url: pd(it, "a:eq(1)&&href")
			})
		});
		} else {
			html = request(input);
			list = pdfa(html, ".module-items .module-item:not(:contains(伦理片))");
		
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".module-item-caption&&Text"),
				pic_url: pd(it, ".module-item-pic&&img&&data-src"),
				url: pd(it, "a&&href")
			})
		})};
		setResult(d)
	`,
	二级:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		function getLink(data) {
			let link = data.map(it => {
				return '[a=cr:' + JSON.stringify({'id':it+'_clicklink','name':it}) + '/]' + it + '[/a]'
			}).join('/');
			return link
		}
		try {
			let html = request(input);
			let vod_actor = pdfh(html, ".video-info-actor:eq(1)--span&&Text").split(' ');
				log('vod_actor ===> ' + vod_actor);
			let vod_director = pdfh(html, ".video-info-actor:eq(0)--span&&Text").split(' ');
				log('vod_director ===> ' + vod_director);
			VOD = {
				vod_name: pdfh(html, "h1&&Text"),
				type_name: pdfh(html, ".tag-link:eq(0)&&Text"),
				vod_year: pdfh(html, ".tag-link:eq(1)&&Text"),
                                vod_area: pdfh(html, ".tag-link:eq(2)&&Text"),
				vod_pic: pd(html, ".module-item-pic&&img&&data-src"),
				vod_remarks: pdfh(html, ".video-info-items:eq(2)&&Text"),
                                vod_lang: pdfh(html, ".video-info-item:eq(3)&&Text"),
				vod_actor: getLink(vod_actor), // 影视TV click lick
				//vod_director: pdfh(html, ".video-info-actor:eq(0)&&Text"),
				vod_director: getLink(vod_director), // 影视TV click lick
				vod_content: pdfh(html, ".video-info-content&&Text")
			};
			let playFrom = [];
			let vod_tab_list = [];
			let tabs = pdfa(html, ".module-tab-item");
			tabs.forEach((it) => {
				playFrom.push(pdfh(it, ".module-tab-item.tab-item&&Text"))
			});
			for (let i = 0; i < playFrom.length; i++) {
				let p1 = ".module-player-list:eq(#id)&&.scroll-content a".replaceAll("#id", i);
				let new_vod_list = [];
				let vodList = [];
				try {
					vodList = pdfa(html, p1)
				} catch (e) {}
				for (let i = 0; i < vodList.length; i++) {
					let it = vodList[i];
					new_vod_list.push(pdfh(it, "a&&Text").trim() + "$" + pd(it, "a&&href"))
				}
				let vlist = new_vod_list.join("#");
				vod_tab_list.push(vlist)
			}
			VOD.vod_play_from = playFrom.join("$$$");
			VOD.vod_play_url = vod_tab_list.join("$$$");
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message);
        }
	`,
	搜索:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		let html = request(input);
		let list = pdfa(html, ".module-items .module-search-item:not(:contains(伦理片))");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a:eq(1)&&title"),
				desc: pdfh(it, ".tag-link:eq(0)&&Text") + '/' + pdfh(it, ".tag-link:eq(2)--span&&Text"),
				pic_url: pd(it, ".module-item-pic&&img&&data-src"),
				url: pd(it, "a:eq(1)&&href")
			})
		});
		setResult(d)
	`,
}
