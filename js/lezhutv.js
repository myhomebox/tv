var rule = {
    title:'乐猪TV',
    host:'http://www.lezhutv.com',
    // homeUrl:'/',
    url:'/list/fyclassfyfilter.html',
    filterable:1,//是否启用分类筛选,
//filter_url:'{{fl.cateId}}_fypage_desc_{{fl.by}}_0_0___',
filter_url:'{{fl.cateId}}_fypage_desc_{{fl.by}}_{{fl.class}}_{{fl.year}}_{{fl.letter}}_{{fl.area}}_{{fl.lang}}',
"filter":{
    "1":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"5"},{"n":"喜劇片","v":"6"},{"n":"愛情片","v":"7"},{"n":"科幻片","v":"8"},{"n":"恐怖片","v":"9"},{"n":"劇情片","v":"10"},{"n":"戰爭片","v":"11"},{"n":"奇幻片","v":"16"},{"n":"驚悚片","v":"17"},{"n":"動畫片","v":"18"},{"n":"懸疑片","v":"19"},{"n":"犯罪片","v":"20"},{"n":"紀錄片","v":"21"},{"n":"音樂片","v":"22"}]},
           {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"马来西亚"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},
           {"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"泰語","v":"泰语"}]},
           {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},
           {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
    "2":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"大陸","v":"12"},{"n":"港劇","v":"13"},{"n":"韓劇","v":"14"},{"n":"美劇","v":"15"},{"n":"日劇","v":"24"},{"n":"台劇","v":"25"},{"n":"泰劇","v":"26"}]},
           {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"马来西亚"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},
           {"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"泰語","v":"泰语"}]},
           {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},
           {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
    "3":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"3"},{"n":"大陸綜藝","v":"28"},{"n":"港台綜藝","v":"29"},{"n":"日韓綜藝","v":"30"},{"n":"歐美綜藝","v":"31"}]},
           {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"马来西亚"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},
           {"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"泰語","v":"泰语"}]},
	   {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},
           {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
   "4":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"4"},{"n":"國產動漫","v":"32"},{"n":"日本動漫","v":"33"},{"n":"其他動漫","v":"35"}]},
           {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"中國大陸","v":"中国大陆"},{"n":"中國香港","v":"中国香港"},{"n":"中國臺灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"马来西亚"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},
           {"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"泰語","v":"泰语"}]},
	   {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},
           {"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]},
    // searchUrl:'/search-pg-fypage-wd-**.html',
    searchUrl:'/index.php?m=vod-search#wd=**&search=;post',
    searchable:2,
    quickSearch:0,
    headers:{
        // 'User-Agent':'UC_UA'
        'User-Agent':'MOBILE_UA',
        // 'Cookie':'test',
    },
    timeout:5000,
   class_name:'電影&電視劇&綜藝&動漫', 
   class_url:'1&2&3&4',
    // class_parse:'div.nav a;a&&Text;a&&href;/(\\d.+).html',
    //class_parse:'div.nav a;a&&Text;a&&href;/(\\d+)-1.html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.tbox2;*;*;*;*;*',
    double:true, // 推荐内容是否双层定位
    一级:'ul.tbox_m2 li;a&&title;a&&data-original;span&&Text;a&&href',
    二级:{"title":".data h4--i&&Text;.yac&&Text","img":".item-lazy&&data-original","desc":";;;.act&&Text;.dir&&Text","content":".tbox_js&&Text","tabs":"js:pdfa=jsp.pdfa;TABS=pdfa(html,'.tbox_t h3').map(function(it,idex){return '线路'+(idex+1)})","lists":"ul.list_block:eq(#id) li","tabs":".tbox_t h3"},
    搜索:'ul.tbox_m li;*;*;*;*',
	
}
