/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

var rule = {
	title:'映迷影院',
	host:'https://www.inmi.app',
	url: '/show/fyclass/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url: '{{fl.year}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage',
	filter: {
                            "uCCCCS-":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"愛情","v":"/class/爱情"},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"戰爭","v":"/class/战争"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"武俠","v":"/class/武侠"},{"n":"冒險","v":"/class/冒险"},{"n":"槍戰","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"微電影","v":"/class/微电影"},{"n":"其它","v":"/class/其它"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台灣"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/馬來西亞"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英國"},{"n":"法國","v":"/area/法國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄羅斯"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"泰語","v":"/lang/泰語"},{"n":"俄語","v":"/lang/俄語"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
                            "0CCCCS-":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"愛情","v":"/class/爱情"},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"戰爭","v":"/class/战争"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"武俠","v":"/class/武侠"},{"n":"冒險","v":"/class/冒险"},{"n":"槍戰","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"微電影","v":"/class/微电影"},{"n":"其它","v":"/class/其它"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台灣"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/馬來西亞"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英國"},{"n":"法國","v":"/area/法國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄羅斯"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"泰語","v":"/lang/泰語"},{"n":"俄語","v":"/lang/俄語"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
                            "PCCCCS-":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"愛情","v":"/class/爱情"},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"戰爭","v":"/class/战争"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"武俠","v":"/class/武侠"},{"n":"冒險","v":"/class/冒险"},{"n":"槍戰","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"微電影","v":"/class/微电影"},{"n":"其它","v":"/class/其它"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台灣"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/馬來西亞"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英國"},{"n":"法國","v":"/area/法國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄羅斯"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"泰語","v":"/lang/泰語"},{"n":"俄語","v":"/lang/俄語"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
                            "HCCCCS-":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"愛情","v":"/class/爱情"},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"戰爭","v":"/class/战争"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"武俠","v":"/class/武侠"},{"n":"冒險","v":"/class/冒险"},{"n":"槍戰","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"微電影","v":"/class/微电影"},{"n":"其它","v":"/class/其它"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台灣"},{"n":"美國","v":"/area/美國"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/馬來西亞"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英國"},{"n":"法國","v":"/area/法國"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄羅斯"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"泰語","v":"/lang/泰語"},{"n":"俄語","v":"/lang/俄語"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
                           },
                class_name: '電影&電視劇&綜藝&動漫',
                class_url: 'uCCCCS-&0CCCCS-&PCCCCS-&HCCCCS-',
	searchUrl: '/search/**----------fypage---.html',
	searchable: 2,
	play_parse: true,
	lazy:`js:
		let play_Url = '';
		if (/\\.m3u8|\\.mp4/.test(input)) {
			input = {
				jx: 0,
				url: input,
				parse: 0
			}
		} else if (/,/.test(input) && /url=/.test(input)) {
			input = input.split('url=');
			play_Url = input[0].split(',')[0];
			input = {
				jx: 0,
				url: input[1],
				playUrl: play_Url,
				parse: 1
			}
		                } else if (/url=|id=/.test(input)) {
			input = {
				jx: 0,
				url: JSON.parse(request(input)).url,
				parse: 0
			}
        } else if (/youku|iqiyi|v\\.qq\\.com|pptv|sohu|le\\.com|1905\\.com|mgtv|bilibili|ixigua/.test(input)) {
			play_Url = /bilibili/.test(input) ? 'https://jx.xmflv.com/?url=' : 'https://jx.777jiexi.com/player/?url='; // type0的parse
			// play_Url = /bilibili/.test(input) ? 'https://jx.xmflv.com/?url=' : 'json:http://pandown.pro/app/kkdy.php?url='; // type1的parse可加'json:'直接解析url (除了蜂蜜的'影视TV'，其它的壳皆可用)
			input = {
				jx: 0,
				url: input,
				playUrl: play_Url,
				parse: 1,
				header: JSON.stringify({
					'user-agent': 'Mozilla/5.0',
				}),
			}
		} else {
			input
		}
                `,
	limit: 6,
	推荐:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		let html = request(input);
		let list = pdfa(html, ".tab-list.active a.module-poster-item.module-item");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".module-item-note&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
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
			input = HOST + '/search/-' + tid + '---------' + MY_PAGE + '---.html';
			html = request(input);
			list = pdfa(html, "body .module-item");
			list.forEach(it => {
			d.push({
				title: pdfh(it, ".module-card-item-title&&Text"),
				desc: pdfh(it, ".module-item-note&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
				url: pd(it, "a&&href")
			})
		});
		} else {
			html = request(input);
			list = pdfa(html, "body a.module-poster-item.module-item");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".module-item-note&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
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
			let vod_actor = pdfh(html, ".module-info-item-content:eq(1)&&Text").split("/");
				log('vod_actor ===> ' + vod_actor);
			let vod_director = pdfh(html, ".module-info-item-content:eq(0)&&Text").split("/");
				log('vod_director ===> ' + vod_director);
			VOD = {
				vod_name: pdfh(html, "h1&&Text"),
				type_name: pdfh(html, ".module-info-main&&.module-info-tag-link:eq(2)&&Text"),
                                                               vod_area: pdfh(html, ".module-info-main&&.module-info-tag-link:eq(1)&&Text"),
                                                               vod_year: pdfh(html, ".module-info-main&&.module-info-tag-link:eq(0)&&Text"),
				vod_pic: pd(html, ".lazyload&&data-original"),
				vod_remarks: pdfh(html, ".module-info-item:eq(4)&&Text"),
				vod_actor: getLink(vod_actor), // 影视TV click lick
                                                               vod_director: pdfh(html, ".module-info-item-content:eq(0)&&Text"),
				//vod_director: getLink(vod_director), // 影视TV click lick
				vod_content: pdfh(html, ".module-info-introduction&&Text")
			};
			let playFrom = [];
			let vod_tab_list = [];
			let tabs = pdfa(html, ".module-tab-items-box .module-tab-item");
			tabs.forEach((it) => {
				playFrom.push(pdfh(it, ".module-tab-item.tab-item&&Text"))
			});
			for (let i = 0; i < playFrom.length; i++) {
				let p1 = ".module-play-list:eq(#id) a".replaceAll("#id", i);
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
		let list = pdfa(html, "body .module-item");
		list.forEach(it => {
			d.push({
				title: pdfh(it, ".module-card-item-title&&Text"),
				desc: pdfh(it, ".module-item-note&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
				url: pd(it, "a&&href")
			})
		});
		setResult(d)
	`,
}
