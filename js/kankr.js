var rule={
            title:'看韩剧',
            host:'https://cc.kan.cc',
            url:'/search.html?page=fypage&searchtype=5&tid=fyclassfyfilter',
            searchUrl:'/search.html?page=fypage&searchword=**&submit=submit',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable:1,//是否启用分类筛选,
            filter_url:'&order={{fl.by or "time"}}&year={{fl.year}}',
            filter:{
                       "1":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"more","v":"more"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hit"},{"n":"評分","v":"commend"}]}],
                       "2":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"more","v":"more"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hit"},{"n":"評分","v":"commend"}]}],
                       "3":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"more","v":"more"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hit"},{"n":"評分","v":"commend"}]}]
                    },
           headers:{
                             "User-Agent":"MOBILE_UA",
                             "Cookie":"_funcdn_token=15ecdee338f7976141723bc370d27780861128baf03c8ad523ee358d77eb6848;Hm_lvt_193d42d6df9341f3a303004df15e3f0d=1666062561;_clck=jtnlof|1|f5t|0;_clsk=1qend98|1666062751559|7|1|h.clarity.ms/collect;Hm_lpvt_193d42d6df9341f3a303004df15e3f0d=1666062756"
                            },
            class_name:'最新韓國電視劇&最新韓國電影&最新韓國綜藝', 
            class_url:'1&2&3',
            //class_parse: '.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy:`js:
        pd = jsp.pd;
        var html = pd(request(input), 'iframe&&src');
        try {
            var url = request(html).match(/r url = '(.*?)'/)[1];
        } catch (e) {
            var url = pd(request(html), 'iframe&&src');
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else if (/share/.test(url)) {
            var purl = JSON.parse(request(url).match(/playlist = '\\[(.*?)\\]'/)[1]).url;
            input = urljoin2(url, purl)
        } else {
            input
        }
    `, 
            limit: 6,
            推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.data--span:eq(5)&&Text",
                "img": ".myui-content__thumb .lazyload&&data-original",
                "desc": ".data:eq(4)&&Text;;;.data--span:eq(3)&&Text;.data--span:eq(2)&&Text",
                "content": ".content&&Text",
                "tabs": ".nav-tabs:eq(0) li",
                "lists": ".myui-content__list:eq(#id) li"
            },
            搜索: '.myui-vodlist__media.clearfix li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.text-muted:eq(-1)&&Text',
        }