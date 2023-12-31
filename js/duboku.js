/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

var rule = {
	title:'独播库[飞]',
	host:'https://www.duboku.tv',
	// host:'https://u.duboku.io',
	url: '/vodshow/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
	filter:{
		"2":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"13"},{"n":"日韓劇","v":"15"},{"n":"短劇","v":"21"},{"n":"台泰劇","v":"14"},{"n":"港劇","v":"20"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"悬疑"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"鄉村","v":"乡村"},{"n":"年代","v":"年代"},{"n":"警匪","v":"警匪"},{"n":"諜戰","v":"谍战"},{"n":"冒險","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宮廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"英國","v":"英国"},{"n":"巴西","v":"巴西"},{"n":"泰國","v":"泰国"},{"n":"法國","v":"法国"},{"n":"日本","v":"日本"},{"n":"荷蘭","v":"荷兰"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"韓語","v":"韩语"},{"n":"泰語","v":"泰语"},{"n":"法語","v":"法语"},{"n":"日語","v":"日语"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"3":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"真人秀","v":"真人秀"},{"n":"選秀","v":"选秀"},{"n":"競演","v":"竞演"},{"n":"情感","v":"情感"},{"n":"訪談","v":"访谈"},{"n":"播報","v":"播报"},{"n":"旅遊","v":"旅游"},{"n":"音樂","v":"音乐"},{"n":"美食","v":"美食"},{"n":"紀實","v":"纪实"},{"n":"曲藝","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"遊戲互動","v":"游戏互动"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"韓國","v":"韩国"},{"n":"美國","v":"美国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"4":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"玄幻","v":"玄幻"},{"n":"武俠","v":"武侠"},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"熱血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"蘿莉","v":"萝莉"},{"n":"校園","v":"校园"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"國產","v":"国产"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"法國","v":"法国"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"13":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"悬疑"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"鄉村","v":"乡村"},{"n":"年代","v":"年代"},{"n":"警匪","v":"警匪"},{"n":"諜戰","v":"谍战"},{"n":"冒險","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宮廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"15":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"悬疑"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"鄉村","v":"乡村"},{"n":"年代","v":"年代"},{"n":"警匪","v":"警匪"},{"n":"諜戰","v":"谍战"},{"n":"冒險","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宮廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"韓國","v":"韩国"},{"n":"日本","v":"日本"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"21":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"悬疑"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"鄉村","v":"乡村"},{"n":"年代","v":"年代"},{"n":"警匪","v":"警匪"},{"n":"諜戰","v":"谍战"},{"n":"冒險","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宮廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"14":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"悬疑"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"鄉村","v":"乡村"},{"n":"年代","v":"年代"},{"n":"警匪","v":"警匪"},{"n":"諜戰","v":"谍战"},{"n":"冒險","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宮廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"臺灣","v":"台湾"},{"n":"泰國","v":"泰国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"20":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"懸疑","v":"悬疑"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"都市","v":"都市"},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"鄉村","v":"乡村"},{"n":"年代","v":"年代"},{"n":"警匪","v":"警匪"},{"n":"諜戰","v":"谍战"},{"n":"冒險","v":"冒险"},{"n":"罪案","v":"罪案"},{"n":"宮廷","v":"宫廷"},{"n":"BL","v":"BL"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]
	},
	filter_def:{
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		13:{cateId:'13'},
		15:{cateId:'15'},
		21:{cateId:'21'},
		14:{cateId:'14'},
		20:{cateId:'20'}
	},
	searchUrl:'/vodsearch/**----------fypage---.html',
	searchable: 2,
	class_parse:'.nav-list li;a&&Text;a&&href;.*/(.*?).html',
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
			input = {
				jx: 0,
				url: url,
				parse: 0,
				header: JSON.stringify({
					'referer': HOST + "/static/player/vidjs.html",
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
		let list = pdfa(html, "ul.myui-vodlist li");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".pic-text&&Text") + ' ⭐' + pdfh(it, ".tag&&Text"),
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
			input = HOST + '/vodsearch/' + tid + '----------' + MY_PAGE + '---.html';
			html = request(input);
			list = pdfa(html, "#searchList&&li");
		} else {
			html = request(input);
			list = pdfa(html, "ul.myui-vodlist&&li");
		}
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".pic-text&&Text") + ' ⭐' + pdfh(it, ".tag&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
				url: pd(it, "a&&href")
			})
		});
		setResult(d)
	`,
	二级:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		function getLink(data) {
			let link = data.map(it => {
				return '[a=cr:' + JSON.stringify({'id':it+'_clicklink','name':it}) + '/]' + it + '[/a]'
			}).join(', ');
			return link
		}
		try {
			let html = request(input);
			let vod_actor = pdfh(html, "p.data--span:eq(2)&&Text").split(' ');
				log('vod_actor ===> ' + vod_actor);
			let vod_director = pdfh(html, "p.data--span:eq(3)&&Text").split(' ');
				log('vod_director ===> ' + vod_director);
			VOD = {
				vod_name: pdfh(html, "h1&&Text"),
				type_name: pdfh(html, "p.data:eq(0)&&a:eq(0)&&Text"),
                                vod_area: pdfh(html, "p.data:eq(0)&&a:eq(1)&&Text"),    
                                vod_year: pdfh(html, "p.data:eq(0)&&a:eq(2)&&Text"),
				vod_pic: pd(html, ".lazyload&&data-original"),
				vod_remarks: pdfh(html, "p.data:eq(1)&&Text"),
				vod_actor: getLink(vod_actor), // 影视TV click lick
				vod_director: getLink(vod_director), // 影视TV click lick
				vod_content: pdfh(html, "span.data&&Text")
			};
			let playFrom = [];
			let vod_tab_list = [];
			let tabs = pdfa(html, "body .nav-tabs");
			tabs.forEach((it) => {
				playFrom.push(pdfh(it, "a&&Text"))
			});
			for (let i = 0; i < playFrom.length; i++) {
				let p1 = ".myui-content__list:eq(#id)&&li".replaceAll("#id", i);
				let new_vod_list = [];
				let vodList = [];
				try {
					vodList = pdfa(html, p1)
				} catch (e) {}
				for (let i = 0; i < vodList.length; i++) {
					let it = vodList[i];
					new_vod_list.push(pdfh(it, "body&&Text").trim() + "$" + pd(it, "a&&href"))
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
		let list = pdfa(html, "#searchList&&li");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".pic-text&&Text") + ' ⭐' + pdfh(it, ".tag&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
				url: pd(it, "a&&href")
			})
		});
		setResult(d)
	`,
}
