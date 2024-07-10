var rule = {
    title: '539影视',
    模板: '首图2',
    host: 'https://539539.xyz',
    url: '/vodtype/fyclass/page/fypage.html',
    searchUrl: '/vodsearch/wd/**/page/fypage.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'IOS_UA',
    },
    class_parse: 'ul.stui-header__menu li:gt(0):lt(6);a&&Text;a&&href;.*/(\\d+).html',
    cate_exclude: '伦理',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double: true,
    一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级: {
        title: '.stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text',
        img: '.stui-content__thumb .lazyload&&data-original',
        desc: '.stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text',
        content: '.detail&&Text',
        tabs: '.dropdown-menu--i&&a',
        lists: '.stui-content__playlist:eq(#id) li',
    },
    搜索: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
}