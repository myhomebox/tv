/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

var rule = {
	title:'量子影视',
	host: 'http://www.lzizy9.com',
	url:'/index.php/vod/show/id/fyfilter.html',
        searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
        headers: {'User-Agent':'MOBILE_UA'},
        searchable: 2,//是否启用全局搜索,
        quickSearch: 0,//是否启用快速搜索,
        filterable: 1,//是否启用分类筛选,
        filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
        filter: {"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"6"},{"n":"喜剧片","v":"7"},{"n":"科幻片","v":"8"},{"n":"恐怖片","v":"9"},{"n":"爱情片","v":"10"},{"n":"剧情片","v":"11"},{"n":"战争片","v":"12"},{"n":"记录片","v":"20"},{"n":"🔞伦理片","v":"21"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"动画","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武侠","v":"/class/武侠"},{"n":"冒险","v":"/class/冒险"},{"n":"枪战","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"经典","v":"/class/经典"},{"n":"青春","v":"/class/青春"},{"n":"文艺","v":"/class/文艺"},{"n":"微电影","v":"/class/微电影"},{"n":"古装","v":"/class/古装"},{"n":"历史","v":"/class/历史"},{"n":"运动","v":"/class/运动"},{"n":"农村","v":"/class/农村"},{"n":"儿童","v":"/class/儿童"},{"n":"网络电影","v":"/class/网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"欧美剧","v":"14"},{"n":"香港剧","v":"15"},{"n":"韩国剧","v":"16"},{"n":"日本剧","v":"23"},{"n":"台湾剧","v":"22"},{"n":"泰国剧","v":"25"},{"n":"海外剧","v":"24"},{"n":"短剧","v":"38"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"/class/古装"},{"n":"战争","v":"/class/战争"},{"n":"青春偶像","v":"/class/青春偶像"},{"n":"喜剧","v":"/class/喜剧"},{"n":"家庭","v":"/class/家庭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"动作","v":"/class/动作"},{"n":"奇幻","v":"/class/奇幻"},{"n":"剧情","v":"/class/剧情"},{"n":"历史","v":"/class/历史"},{"n":"经典","v":"/class/经典"},{"n":"乡村","v":"/class/乡村"},{"n":"情景","v":"/class/情景"},{"n":"商战","v":"/class/商战"},{"n":"网剧","v":"/class/网剧"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"泰国","v":"/area/泰国"},{"n":"英国","v":"/area/英国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"国产动漫","v":"26"},{"n":"日韩动漫","v":"27"},{"n":"欧美动漫","v":"28"},{"n":"港台动漫","v":"29"},{"n":"海外动漫","v":"30"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"选秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"访谈","v":"/class/访谈"},{"n":"播报","v":"/class/播报"},{"n":"旅游","v":"/class/旅游"},{"n":"音乐","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"纪实","v":"/class/纪实"},{"n":"曲艺","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"游戏互动","v":"/class/游戏互动"},{"n":"财经","v":"/class/财经"},{"n":"求职","v":"/class/求职"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"港台","v":"/area/港台"},{"n":"日韩","v":"/area/日韩"},{"n":"欧美","v":"/area/欧美"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"大陆综艺","v":"31"},{"n":"日韩综艺","v":"33"},{"n":"欧美综艺","v":"34"},{"n":"港台综艺","v":"32"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"情感","v":"/class/情感"},{"n":"科幻","v":"/class/科幻"},{"n":"热血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒险","v":"/class/冒险"},{"n":"萝莉","v":"/class/萝莉"},{"n":"校园","v":"/class/校园"},{"n":"动作","v":"/class/动作"},{"n":"机战","v":"/class/机战"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社会","v":"/class/社会"},{"n":"原创","v":"/class/原创"},{"n":"亲子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"励志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"/area/国产"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"其他","v":"/area/其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]},
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
		if (/m3u8|mp4|flv/.test(url)) {
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
				desc: pdfh(it, ".video-class&&Text") + '/' + pdfh(it, ".module-item-text&&Text"),
				pic_url: pd(it, "img&&data-src"),
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
			input = HOST + '/index.php/vod/search/actor/' + tid + '/page/' + MY_PAGE + '.html';
			html = request(input);
			list = pdfa(html, ".module-list .module-items&&.module-search-item:not(:contains(伦理片))");
			list.forEach(it => {
			d.push({
				title: pdfh(it, "a:eq(1)&&title"),
				desc: pdfh(it, ".video-tag-icon&&Text") + '/' + pdfh(it, ".video-serial&&Text"),
				pic_url: pd(it, "img&&data-src"),
				url: pd(it, "a:eq(1)&&href")
			})
		});
		} else {
			html = request(input);
			list = pdfa(html, ".module-items .module-item:not(:contains(伦理片))");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".video-class&&Text") + '/' + pdfh(it, ".module-item-text&&Text"),
				pic_url: pd(it, "img&&data-src"),
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
			}).join(' ');
			return link
		}
		try {
			let html = request(input);
			let vod_actor = pdfh(html, ".video-info-actor:eq(1)&&Text").split("/");
				log('vod_actor ===> ' + vod_actor);
			let vod_director = pdfh(html, ".video-info-actor:eq(0)&&Text").split("/");
				log('vod_director ===> ' + vod_director);
			VOD = {
				vod_name: pdfh(html, "h1&&Text"),
				type_name: pdfh(html, ".tag-link&&Text"),
                               vod_area: pdfh(html, ".tag-link:eq(3)&&Text"),
                               vod_year: pdfh(html, ".tag-link:eq(2)&&Text"),
				vod_pic: pd(html, ".module-item-pic&&img&&data-src"),
				vod_remarks: pdfh(html, ".video-info-item:eq(3)&&Text"),
				vod_actor: getLink(vod_actor), // 影视TV click lick
				vod_director: pdfh(html, ".video-info-actor:eq(0)--span&&Text"),
				//vod_director: getLink(vod_director), // 影视TV click lick
				vod_content: pdfh(html, ".vod_content&&Text")
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
				title: pdfh(it, ".video-serial&&title"),
				desc: pdfh(it, ".video-tag-icon&&Text") + '/' + pdfh(it, ".video-serial&&Text"),
				pic_url: pd(it, "img&&data-src"),
				url: pd(it, "a:eq(1)&&href")
			})
		});
		setResult(d)
	`,
}
