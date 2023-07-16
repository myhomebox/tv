muban.首图2.二级.tabs = '.stui-pannel__head h3';
var rule = Object.assign(muban.首图2,{
    title:'人人影视',
    host:'https://www.rttks.com',
    url:'/rrtop/fyclass/page/fypage.html',
    searchUrl:'/rrso**/page/fypage.html',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    filterable: 1,//是否启用分类筛选,
    class_parse:'.stui-header__menu li;a&&Text;a&&href;.*/(.*?).html',
    // cate_exclude:'解说',
    play_parse:true,
    lazy:'',
});