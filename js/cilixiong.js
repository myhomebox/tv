var rule = {
	title:'磁力熊[磁]',
	host:'https://www.cilixiong.com',
	homeUrl:'/top250/index.html',
	// url: '/fyclass/index_(fypage-1).html',
	url: '/fyclassfyfilter-(fypage-1).html',
	filter_url:'-{{fl.class or "0"}}-{{fl.area or "0"}}',
	filter:{
		"1":[{"key":"class","name":"類型型","value":[{"n":"全部","v":"0"},{"n":"劇情","v":"1"},{"n":"喜劇","v":"2"},{"n":"驚悚","v":"3"},{"n":"動作","v":"4"},{"n":"愛情","v":"5"},{"n":"犯罪","v":"6"},{"n":"恐怖","v":"7"},{"n":"冒險","v":"8"},{"n":"懸疑","v":"9"},{"n":"科幻","v":"10"},{"n":"家庭","v":"11"},{"n":"奇幻","v":"12"},{"n":"動畫","v":"13"},{"n":"戰爭","v":"14"},{"n":"歷史","v":"15"},{"n":"傳記","v":"16"},{"n":"音樂","v":"17"},{"n":"歌舞","v":"18"},{"n":"運動","v":"19"},{"n":"西部","v":"20"},{"n":"災難","v":"21"},{"n":"古裝","v":"22"},{"n":"情色","v":"23"},{"n":"同性","v":"24"},{"n":"兒童","v":"25"},{"n":"紀錄片","v":"26"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":"0"},{"n":"大陸","v":"1"},{"n":"香港","v":"2"},{"n":"臺灣","v":"3"},{"n":"美國","v":"4"},{"n":"日本","v":"5"},{"n":"韓國","v":"6"},{"n":"英國","v":"7"},{"n":"法國","v":"8"},{"n":"德國","v":"9"},{"n":"印度","v":"10"},{"n":"泰國","v":"11"},{"n":"丹麥","v":"12"},{"n":"瑞典","v":"13"},{"n":"巴西","v":"14"},{"n":"加拿大","v":"15"},{"n":"俄羅斯","v":"16"},{"n":"義大利","v":"17"},{"n":"比利時","v":"18"},{"n":"愛爾蘭","v":"19"},{"n":"西班牙","v":"20"},{"n":"澳大利亞","v":"21"},{"n":"波蘭","v":"22"},{"n":"土耳其","v":"23"},{"n":"越南","v":"24"}]}],
		"1":[{"key":"class","name":"類型","value":[{"n":"全部","v":"0"},{"n":"劇情","v":"1"},{"n":"喜劇","v":"2"},{"n":"驚悚","v":"3"},{"n":"動作","v":"4"},{"n":"愛情","v":"5"},{"n":"犯罪","v":"6"},{"n":"恐怖","v":"7"},{"n":"冒險","v":"8"},{"n":"懸疑","v":"9"},{"n":"科幻","v":"10"},{"n":"家庭","v":"11"},{"n":"奇幻","v":"12"},{"n":"動畫","v":"13"},{"n":"戰爭","v":"14"},{"n":"歷史","v":"15"},{"n":"傳記","v":"16"},{"n":"音樂","v":"17"},{"n":"歌舞","v":"18"},{"n":"運動","v":"19"},{"n":"西部","v":"20"},{"n":"災難","v":"21"},{"n":"古裝","v":"22"},{"n":"情色","v":"23"},{"n":"同性","v":"24"},{"n":"兒童","v":"25"},{"n":"紀錄片","v":"26"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":"0"},{"n":"大陸","v":"1"},{"n":"香港","v":"2"},{"n":"臺灣","v":"3"},{"n":"美國","v":"4"},{"n":"日本","v":"5"},{"n":"韓國","v":"6"},{"n":"英國","v":"7"},{"n":"法國","v":"8"},{"n":"德國","v":"9"},{"n":"印度","v":"10"},{"n":"泰國","v":"11"},{"n":"丹麥","v":"12"},{"n":"瑞典","v":"13"},{"n":"巴西","v":"14"},{"n":"加拿大","v":"15"},{"n":"俄羅斯","v":"16"},{"n":"義大利","v":"17"},{"n":"比利時","v":"18"},{"n":"愛爾蘭","v":"19"},{"n":"西班牙","v":"20"},{"n":"澳大利亞","v":"21"},{"n":"波蘭","v":"22"},{"n":"土耳其","v":"23"},{"n":"越南","v":"24"}]}]
	},
	searchUrl: '/e/search/index.php#classid=1,2&show=title&tempid=1&keyboard=**;post',
	searchable:2,
	quickSearch:0,
	filterable:1,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,
	class_name:'電影&電視劇&豆瓣電影Top250&IMDB Top250&高分懸疑片&高分喜劇片&高分傳記片&高分愛情片&高分犯罪片&高分恐怖片&高分冒險片&高分武俠片&高分奇幻片&高分歷史片&高分戰爭片&高分歌舞片&高分災難片&高分情色片&高分西部片&高分音樂片&高分科幻片&高分動作片&高分動畫片&高分紀錄片&冷門佳片',
	class_url:'1&2&/top250/&/s/imdbtop250/&/s/suspense/&/s/comedy/&/s/biopic/&/s/romance/&/s/crime/&/s/horror/&/s/adventure/&/s/martial/&/s/fantasy/&/s/history/&/s/war/&/s/musical/&/s/disaster/&/s/erotic/&/s/west/&/s/music/&/s/sci-fi/&s/action/&/s/animation/&/s/documentary/&/s/unpopular/',
		play_parse:true,
	lazy:'',
	limit:6,
	推荐: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, 'body&&.col');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'h2&&Text'),
				desc: pdfh(it, '.me-auto&&Text') + '分 / ' + pdfh(it, '.small&&Text'),
				// pic_url: pd(it, '.card-img&&style'), // 只有 影视TV&爱佬版 有图片
				pic_url: /!'/.test(pd(it, '.card-img&&style'))?pd(it, '.card-img&&style'):pd(it, '.card-img&&style').replaceAll("'",""), // 兼容 影视TV&爱佬版 以外的其它壳子
				url: pd(it, 'a&&href')
			});
		})
		setResult(d);
	`,
	一级: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		if (MY_CATE !== '1' && MY_CATE !== '2') {
			let turl = (MY_PAGE === 1)? 'index' : 'index_'+ MY_PAGE;
			input = HOST + MY_CATE + turl + '.html';
		}
		var html = request(input);
		var list = pdfa(html, 'body&&.col');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'h2&&Text'),
				desc: pdfh(it, '.me-auto&&Text') + '分 / ' + pdfh(it, '.small&&Text'),
				// pic_url: pdfh(it, '.card-img&&style'), // 只有 影视TV&爱佬版 有图片
				pic_url: /!'/.test(pd(it, '.card-img&&style'))?pd(it, '.card-img&&style'):pd(it, '.card-img&&style').replaceAll("'",""), // 兼容 影视TV&爱佬版 以外的其它壳子
				url: pd(it, 'a&&href')
			});
		})
		setResult(d);
	`,
	二级:{
		title:'h1&&Text;p.mb-2:eq(4)&&Text',
		desc:'p.mb-2:eq(1)&&Text;;;p.mb-2:eq(7)&&Text;p.mb-2:eq(5)&&Text',
		img:'.rounded-2&&src',
		content:'.mv_card_box&&Text',
		// tabs:'js:TABS = ["道长磁力"]',
		// lists:'.mv_down:eq(#id)&&.border-bottom',
		// list_text:'a&&Text',
		// list_url:'a&&href',

		tabs:'js:TABS = ["道长磁力","道长在线预览"]',
		lists:`js:
		log(TABS);
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		LISTS = [];
		var dd=[];
		TABS.forEach(function(tab) {
			if (/道长磁力/.test(tab)) {
				var d = pdfa(html, '.mv_down&&.border-bottom');
				d = d.map(function(it) {
					var title = pdfh(it, 'a&&Text');
					log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
					var burl = pd(it, 'a&&href');
					log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
					return title + '$' + burl
				});
				LISTS.push(d)
			} else if (/道长在线预览/.test(tab)) {
				var d = pd(html, 'iframe&&src');
				if (d) {
					d=['第一集在线播放预览$' + d]
				} else {
					d=['没有预览不要点$http://www.sharenice.net/douyin/23852']
				}
				LISTS.push(d)
			}
		});
		`,
	},
	搜索:'.col;h2&&Text;.card-img&&style;.me-auto&&Text;a&&href',
}