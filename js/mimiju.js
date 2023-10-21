var rule = {
    title: '迷迷劇',
    host: 'https://mimiju.com/',
    url: '/vodshow/fyfilter.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 1, //是否启用全局搜索,
    quickSearch: 1, //是否启用快速搜索,
    filterable: 1, //是否启用分类筛选,
    filter_url: '{{fl.cateId}}--{{by}}------fypage---.html',
    filter: {
    	"20":[{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
        "21":[{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
        "22":[{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
        "23":[{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
        "24":[{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}]
    },
    headers: { //网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent': 'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    filter_def: {
        20: {cateId: '20'},
        21:{cateId:'21'},
	22:{cateId:'22'},
	23:{cateId:'23'},
        24:{cateId:'24'}
    },
    class_name: '短劇&電視劇&電影&動漫&綜藝',
    class_url: '20&21&22&23&24',
    play_parse: true,
   lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,
    limit: 6,
    推荐: 'ul.hl-vod-list;li.hl-list-item;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    一级: 'ul.hl-vod-list li.hl-list-item;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级: {
        "title":"h2&&Text;li.hl-col-xs-12:eq(6)--em&&Text",
        "img":".hl-lazy&&data-original",
        "desc":"li.hl-col-xs-12:eq(1)--em&&Text;li.hl-col-xs-12:eq(4)--em&&Text;li.hl-col-xs-12:eq(5)--em&&Text;li.hl-col-xs-12:eq(2)--em&&Text;li.hl-col-xs-12:eq(3)--em&&Text",
        "content":"li.hl-col-xs-12:eq(11)--em&&Text",
        "tabs":".hl-from-list li",
        "lists":"#hl-plays-list:eq(#id) li"
    },
    搜索: 'body .hl-one-list&&.hl-list-item;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}
