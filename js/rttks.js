var rule={
            title: '人人影视',
            host: 'https://www.rttks.com',
            url: '/rrtop/fyfilter',
            //url: '/rrtop/fyclass/page/fypage.html',
            searchUrl: '/rrcz**/page/fypage.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}{{fl.area}}{{fl.class}}/page/fypage{{fl.year}}',
            filter: {"dianying":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"dianying"},{"n":"動作片","v":"dzp"},{"n":"喜劇片","v":"xjp"},{"n":"愛情片","v":"aqp"},{"n":"科幻片","v":"khp"},{"n":"恐怖片","v":"kbp"},{"n":"劇情片","v":"jqp"},{"n":"戰爭","v":"zzp"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亞","v":"/area/澳大利亚"},{"n":"巴西","v":"/area/巴西"},{"n":"俄羅斯","v":"/area/俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"dianshiju":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"dianshiju"},{"n":"國產劇","v":"gcj"},{"n":"港台劇","v":"gtj"},{"n":"日韓劇","v":"rhj"},{"n":"海外劇","v":"hwj"},{"n":"日劇","v":"ribenju"},{"n":"歐美劇","v":"oumeiju"},{"n":"東南亞","v":"dongnanya"},{"n":"其他","v":"qitaju"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亞","v":"/area/澳大利亚"},{"n":"巴西","v":"/area/巴西"},{"n":"俄羅斯","v":"/area/俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"zongyi":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亞","v":"/area/澳大利亚"},{"n":"巴西","v":"/area/巴西"},{"n":"俄羅斯","v":"/area/俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"dongmna":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亞","v":"/area/澳大利亚"},{"n":"巴西","v":"/area/巴西"},{"n":"俄羅斯","v":"/area/俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"jilupian":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亞","v":"/area/澳大利亚"},{"n":"巴西","v":"/area/巴西"},{"n":"俄羅斯","v":"/area/俄罗斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}]},
            filter_def:{
		dianying:{cateId:'dianying'},
		dianshiju:{cateId:'dianshiju'},
		zongyi:{cateId:'zongyi'},
	        dongmna:{cateId:'dongmna'},
	        jilupian:{cateId:'jilupian'}
	     },
            headers: {
                'User-Agent': 'Dart/2.14 (dart:io)',
                // "Cookie": ""
            },
            class_name:'電影&電視劇&綜藝&動漫&紀錄片',
            class_url:'dianying&dianshiju&zongyi&dongmna&jilupian',
            //class_parse:'.stui-header__menu li;a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
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
        } else {
            input
        }
    `,
            limit: 6,
            推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": "a&&title;p.data:eq(2)--span&&Text",
                "img": ".lazyload&&data-original",
                "desc": ";;;p.data:eq(0)--span&&Text;p.data:eq(1)--span&&Text",
                "content": ".detail-content&&Text",
                "tabs": ".stui-pannel__head h3",
                "lists": ".stui-content__playlist:eq(#id) li"
            },
            搜索: 'ul.stui-vodlist__media:eq(0) li.active.clearfix;a&&title;.lazyload&&data-original;.pic-text.text-right&&Text;a&&href',
        }
