/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */
var rule = {
	title:'影視工廠',
	//host: 'https://www.ysgc.fun',
	host:'https://www.ysgcapp.cc',
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".section-row:eq(1)&&a&&href");print(src);HOST=src',
	url: '/vodshow/fyfilter.html',
	//headers: {'User-Agent': 'PC_UA',},
        searchUrl:'/vodsearch/**----------fypage---.html',
        searchable: 2,//是否启用全局搜索,
        quickSearch: 0,//是否启用快速搜索,
        filterable: 1,//是否启用分类筛选,
        filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
        filter: {
           "1":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"劇情","v":"剧情"},{"n":"戰爭","v":"战争"},{"n":"動畫","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武俠","v":"武侠"},{"n":"古裝","v":"古装"},{"n":"冒險","v":"冒险"},{"n":"歷史","v":"历史"},{"n":"歌舞","v":"歌舞"},{"n":"家庭","v":"家庭"},{"n":"網路","v":"网络"}]},
           	   {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"泰國","v":"泰国"},{"n":"美國","v":"美国"},{"n":"印度","v":"印度"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"德國","v":"德国"},{"n":"西班牙","v":"西班牙"},{"n":"義大利","v":"意大利"},{"n":"澳大利亞","v":"澳大利亚"},{"n":"荷蘭","v":"荷兰"}]},
           	   {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
           	   {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
           "2":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"劇情","v":"剧情"},{"n":"現代","v":"现代"},{"n":"都市","v":"都市"},{"n":"偶像","v":"偶像"},{"n":"農村","v":"农村"},{"n":"歷史","v":"历史"},{"n":"警匪","v":"警匪"},{"n":"家庭","v":"家庭"},{"n":"奇幻","v":"奇幻"},{"n":"武俠","v":"武侠"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"諜戰","v":"谍战"},{"n":"穿越","v":"穿越"},{"n":"宫廷","v":"宫廷"},{"n":"神話","v":"神话"},{"n":"網劇","v":"网剧"}]},
           	   {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"泰国","v":"泰国"},{"n":"美國","v":"美国"},{"n":"印度","v":"印度"},{"n":"德國","v":"德国"},{"n":"法國","v":"法国"}]},
           	   {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},
           	   {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
           "3":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"搞笑","v":"搞笑"},{"n":"真人秀","v":"真人秀"},{"n":"職場","v":"职场"},{"n":"競技","v":"竞技"},{"n":"婚戀","v":"婚恋"},{"n":"情感","v":"情感"},{"n":"旅遊","v":"旅游"},{"n":"生活","v":"生活"},{"n":"闖關","v":"闯关"},{"n":"遊戲","v":"游戏"},{"n":"紀實","v":"纪实"},{"n":"明星","v":"明星"},{"n":"訪談","v":"访谈"},{"n":"脫口秀","v":"脱口秀"}]},
           	   {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韓","v":"日韩"},{"n":"歐美","v":"欧美"}]},
           	   {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
           	   {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
          "4":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"熱血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"蘿莉","v":"萝莉"},{"n":"校園","v":"校园"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"原創","v":"原创"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其他","v":"其他"}]},
           	   {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"國產","v":"国产"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},
           	   {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
           	   {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]
           	   },
        filter_def:{1:{cateId:'1'},2:{cateId:'2'},3:{cateId:'3'},4:{cateId:'4'}},
        class_name: '電影&電視劇&綜藝&動漫',
        class_url: '1&2&3&4',
        play_parse: true,
        lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);log(html);var url=html.url;if(html.encrypt=='1'){url=unescape(url).split('&')[0]}else if(html.encrypt=='2'){url=unescape(base64Decode(url).split('&')[0])}if(/m3u8|mp4/.test(url)){input=url}else{input}",
        limit: 6,
	推荐:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		let html = request(input);
		let list = pdfa(html, "ul.myui-vodlist.clearfix li");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".pic-text&&Text"),
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
			list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".pic-text&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
				url: pd(it, "a&&href")
			})
		});
		} else {
			html = request(input);
			list = pdfa(html, "ul.myui-vodlist.clearfix li");
		list.forEach(it => {
			d.push({
				title: pdfh(it, "a&&title"),
				desc: pdfh(it, ".pic-text&&Text"),
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
			}).join(' ');
			return link
		}
		try {
			let html = request(input);
			let vod_actor = pdfh(html, ".myui-content__detail&&p.data:eq(2)--span&&Text").split(" ");
				log('vod_actor ===> ' + vod_actor);
			let vod_director = pdfh(html, ".myui-content__detail&&p.data:eq(0)--span&&Text").split(" ");
				log('vod_director ===> ' + vod_director);
			VOD = {
				vod_name: pdfh(html, ".myui-content__detail .title&&Text"),
				type_name: pdfh(html, ".myui-content__detail&&p.data:eq(3)--span&&Text"),
                               vod_area: pdfh(html, ".myui-content__detail&&p.data:eq(4)--span&&Text"),
                               vod_year: pdfh(html, "body&&span.year&&Text"),
				vod_pic: pd(html, ".lazyload&&data-original"),
				vod_remarks: pdfh(html, ".myui-content__detail&&p.otherbox&&Text"),
				vod_actor: pdfh(html, ".myui-content__detail&&p.data:eq(2)--span&&Text"),
				vod_director: pdfh(html, ".myui-content__detail&&p.data:eq(0)--span&&Text"),
				//vod_actor: getLink(vod_actor), // 影视TV click lick
				//vod_director: getLink(vod_director), // 影视TV click lick
				vod_content: pdfh(html, "span.data&&Text")
			};
			let playFrom = [];
			let vod_tab_list = [];
			let tabs = pdfa(html, "ul.nav-tabs:eq(0)&&li");
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
				desc: pdfh(it, ".pic-text&&Text"),
				pic_url: pd(it, ".lazyload&&data-original"),
				url: pd(it, "a&&href")
			})
		});
		setResult(d)
	`,
}
