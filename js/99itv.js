var rule={
    title:'99影院',
    host:'https://99itv.net',
    url:'/show/fyclass--------fypage---.html',
    searchUrl:'/search/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    //class_parse:'.myui-header__menu&&li;a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&电视剧&综艺&动漫&国产剧&香港剧&韩国剧&日本剧&欧美剧&泰国剧',
    class_url:'movie&drama&variety&anime&china&hkg&kr&jp&usa&tailan',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-tag.text-right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;a&&data-original;.text-right&&Text;a&&href',
    二级:{
    	"title":".myui-content__detail .title&&Text;p.data:eq(0)&&a:eq(0)&&Text",
    	"img":".myui-content__thumb .lazyload&&data-original",
    	"desc":"p.data:eq(1) a&&Text;p.data:eq(0)&&a:eq(2)&&Text;p.data:eq(0)&&a:eq(1)&&Text;.myui-content__detail p.data:eq(2)--span&&Text;.myui-content__detail p.data:eq(3)--span&&Text",
    	"content":".myui-panel_bd .content span&&Text",
    	"tabs":".nav-tabs:eq(0) li",
    	"lists":".myui-content__list:eq(#id) li"},
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
