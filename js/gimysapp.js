var rule = {
            title:'劇迷',
            host:'https://gimys.app/',
            url:'/show/vod/fyfilter',
            searchUrl:'/search/vod/**----------fypage---',
            filterable: 1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}---------{{fl.year}}',
            filter: {
            "1":[
            	{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"劇情片","v":"juqingpian"},{"n":"動作片","v":"dongzuopian"},{"n":"科幻片","v":"kehuanpian"},{"n":"喜劇片","v":"xijupian"},{"n":"愛情片","v":"aiqingpian"},{"n":"戰爭片","v":"zhanzhengpian"},{"n":"恐怖片","v":"kongbupian"}]},
            	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其它","v":"其它"}]},
            	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
            	{"key":"by","name":"排序","value":[{"n":"按更新","v":"time"},{"n":"週人氣","v":"hits_week"},{"n":"月人氣","v":"hits_month"}]}],
	     "2":[
            	{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"guochanju"},{"n":"韓劇","v":"hanguoju"},{"n":"歐美劇","v":"oumeiju"},{"n":"日劇","v":"ribenju"},{"n":"台劇","v":"taiwanju"},{"n":"港劇","v":"xianggangju"},{"n":"泰劇","v":"taiguoju"},{"n":"海外劇","v":"haiwaiju"}]},
            	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其它","v":"其它"}]},
            	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
            	{"key":"by","name":"排序","value":[{"n":"按更新","v":"time"},{"n":"週人氣","v":"hits_week"},{"n":"月人氣","v":"hits_month"}]}],
            "3":[
            	{"key":"cateId","name":"類型","value":[{"n":"全部","v":"3"},{"n":"大陸綜藝","v":"daluzongyi"},{"n":"日韓綜藝","v":"rihanzongyi"},{"n":"歐美綜藝","v":"oumeizongyi"},{"n":"港台綜藝","v":"gangtaizongyi"}]},
            	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其它","v":"其它"}]},
            	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
            	{"key":"by","name":"排序","value":[{"n":"按更新","v":"time"},{"n":"週人氣","v":"hits_week"},{"n":"月人氣","v":"hits_month"}]}],
            "4":[
            	{"key":"cateId","name":"類型","value":[{"n":"全部","v":"4"},{"n":"國產動漫","v":"guochandongman"},{"n":"日韓動漫","v":"rihandongman"},{"n":"歐美動漫","v":"oumeidongman"},{"n":"港台動漫","v":"gangtaidongman"},{"n":"海外動漫","v":"haiwaidongman"}]},
            	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其它","v":"其它"}]},
            	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},
            	{"key":"by","name":"排序","value":[{"n":"按更新","v":"time"},{"n":"週人氣","v":"hits_week"},{"n":"月人氣","v":"hits_month"}]}]
            	},
            filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
	        4:{cateId:'4'}
	},
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_name:'電影&電視劇&綜藝&動漫', 
            class_url:'1&2&3&4',
            //class_parse: 'ul.myui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": "h1&&Text;p.data&&a:eq(0)&&Text",
                "img": ".myui-content__thumb .lazyload&&data-original",
                "desc": "p.data.hidden-sm&&Text;p.data&&a:eq(2)&&Text;p.data&&a:eq(1)&&Text;p.data--span:eq(2)&&Text;p.data--span:eq(3)&&Text",
                "content": ".content span.data&&Text",
                "tabs": ".myui-panel__head.bottom-line h3",
                "lists": ".myui-content__list:eq(#id) li"
            },
            搜索: '#searchList li;a&&title;.lazyload&&data-original;.pic-text.text-right&&Text;a&&href',
        }
