var rule = {
    title: '好色',
    host: 'https://hsex.men',
    url: '/fyclass-fypage.htm',
    searchable: 1,//是否启用全局搜索,
    quickSearch: 1,//是否启用快速搜索,
    searchUrl: '/search-fypage.htm?search=**',
    class_name: '視頻/Video list&週榜/Weekly top&月榜/Monthly top&5分鐘+/5min+&10分鐘+/10min+',
    class_url: 'list&top7_list&top_list&5min_list&long_list',
    lazy:'',
    limit: 6,
    推荐: '.col-xs-6;.thumbnail;h5&&Text;.image&&style;.duration&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    一级: '.col-xs-6 .thumbnail;h5&&Text;.image&&style;.duration&&Text;a&&href',
    二级:'*',
    detailUrl:'/fyid.htm', //非必填,二级详情拼接链接
    搜索: '.col-xs-6 .thumbnail;h5&&Text;.image&&style;.duration&&Text;a&&href',
}