var rule = {
	title:'kanav',
	host:'https://kanav.info',
	url:'/index.php/vod/show/id/fyfilter',
        searchable: 1,//是否启用全局搜索,
        quickSearch: 1,//是否启用快速搜索,
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.by}}/page/fypage.html',
	filter: {
		"1":[{"key":"by","name":"排序","value":[{"n":"全部","v":"1"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"2":[{"key":"by","name":"排序","value":[{"n":"全部","v":"2"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"3":[{"key":"by","name":"排序","value":[{"n":"全部","v":"3"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"4":[{"key":"by","name":"排序","value":[{"n":"全部","v":"4"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"20":[{"key":"by","name":"排序","value":[{"n":"全部","v":"20"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"22":[{"key":"by","name":"排序","value":[{"n":"全部","v":"22"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"25":[{"key":"by","name":"排序","value":[{"n":"全部","v":"25"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"26":[{"key":"by","name":"排序","value":[{"n":"全部","v":"26"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"27":[{"key":"by","name":"排序","value":[{"n":"全部","v":"27"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"28":[{"key":"by","name":"排序","value":[{"n":"全部","v":"28"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}],
		"29":[{"key":"by","name":"排序","value":[{"n":"全部","v":"29"},{"n":"最新发布","v":"/by/time_add"},{"n":"最多观看","v":"/by/hits"},{"n":"最热好评","v":"/by/up"}]}]
	          },
        filter_def:{1:{cateId:'1'},2:{cateId:'2'},3:{cateId:'3'},4:{cateId:'4'},20:{cateId:'20'},22:{cateId:'22'},25:{cateId:'25'},26:{cateId:'26'},27:{cateId:'27'},28:{cateId:'28'},29:{cateId:'29'}},
	searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
	headers:{//网站的请求头,完整支持所有的,常带ua和cookies
		'User-Agent':'MOBILE_UA',
	},
	class_name:'中文字幕&日韩有码&日韩无码&国产AV&流出自拍&动漫番剧&里番&泡面番&Motion Anime&3D动画&同人作品',
	class_url:'1&2&3&4&22&20&25&26&27&28&29',
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
	play_parse:true,
	limit:6,
	推荐:'.col-sm-6;.video-item;.lazy&&alt;.lazy&&data-original;.model-view&&Text;a&&href',
	double:true, // 推荐内容是否双层定位
	一级:'.col-sm-6 .video-item;.lazy&&alt;.lazy&&data-original;.model-view&&Text;a&&href',
	二级:'*',
	搜索:'.col-sm-6 .video-item;.lazy&&alt;.lazy&&data-original;.model-view&&Text;a&&href',
}