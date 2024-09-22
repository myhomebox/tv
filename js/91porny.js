var rule = {
    title: '91porny',
    host: 'https://91porny.com',
    url: '/fyclass/fyfilter',
    searchable: 1,//是否启用全局搜索,
    quickSearch: 1,//是否启用快速搜索,
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.class}}/fypage.html',
    filter: {
    	        "video":[{"key":"class","name":"類型","value":[{"n":"最近更新","v":"/category/latest"},{"n":"最近加精","v":"/category/recent-favorite"},{"n":"目前最熱","v":"/category/hot-list"},{"n":"最近得分","v":"/category/recent-rating"},{"n":"非付費","v":"/category/nonpaid"},{"n":"91原創","v":"/category/ori"},{"n":"10分鐘以上","v":"/category/long-list"},{"n":"20分鐘以上","v":"/category/longer-list"},{"n":"本月討論","v":"/category/month-discuss"},{"n":"本月收藏","v":"/category/top-favorite"},{"n":"收藏最多","v":"/category/most-favorite"},{"n":"本月最熱","v":"/category/top-list"},{"n":"上月最熱","v":"/category/top-last"}]}],
    	        "videos":[{"key":"class","name":"類型","value":[{"n":"最近更新","v":"/latest-updates"},{"n":"最高評分","v":"/top-rated"},{"n":"最受歡迎","v":"/most-popular"},{"n":"歐美","v":"/categories/europe-america"},{"n":"國產","v":"/categories/chinese"},{"n":"亂倫","v":"/categories/fornication"},{"n":"日韓","v":"/categories/japan-korea"},{"n":"動漫","v":"/categories/anime"},{"n":"同性","v":"/categories/homosexual"},{"n":"高清AV","v":"/categories/hd"},{"n":"SM專區","v":"/categories/sm"},{"n":"片商集錦","v":"/categories/jijin"},{"n":"果凍傳媒","v":"/categories/guodong"},{"n":"星空傳媒","v":"/categories/xingkong"},{"n":"麻豆傳媒","v":"/categories/madou"},{"n":"天美傳媒","v":"/categories/tianmei"},{"n":"精東影業","v":"/categories/jingdong"},{"n":"台灣SWAG","v":"/categories/swag"},{"n":"兔子先生","v":"/categories/tuzi"},{"n":"蜜桃傳媒","v":"/categories/mitao"},{"n":"皇家華人","v":"/categories/huangjia"}]}]
    	       },
    filter_def: {
       video:{cateId:'video',class:'/category/latest'},
       videos:{cateId:'videos',class:'/latest-updates'}
    },
    searchUrl: '/search?keywords=**&page=fypage',
    class_name: '視頻&蝌蚪',
    class_url: 'video&videos',
    lazy:'',
    limit: 6,
    推荐: '.colVideoList;.video-elem;.text-sub-title&&Text;.img&&style;.layer&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    一级: '.colVideoList .video-elem;.text-sub-title&&Text;.img&&style;.layer&&Text;a&&href',
    二级:'*',
    detailUrl:'/videos/view/fyid.html', //非必填,二级详情拼接链接
    搜索: '.colVideoList .video-elem;.text-sub-title&&Text;.img&&style;.layer&&Text;a&&href',
}