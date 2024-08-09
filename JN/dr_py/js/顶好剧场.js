var rule = {
  title: '顶好剧场',
  host: 'https://dinghjc.com',
  url: '/show/fyclass--------fypage---.html',
  searchUrl: '/vod/search.html?wd=**',
  class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?).html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
  limit: 6,
  double: true,
  推荐: '.cbox_list;*;*;*;*;*',
  一级: 'ul.vodlist li;a&&title;.vodlist_thumb&&style;.pic_text&&Text;a&&href',
  二级: {
    title: 'h2&&Text;.content_detail:eq(1)&&li&&a:eq(2)&&Text',
    img: '.vodlist_thumb&&style',
    desc: '.content_detail:eq(1)&&li:eq(1)&&Text;.content_detail:eq(1)&&li&&a&&Text;.content_detail:eq(1)&&li&&a:eq(1)&&Text;.content_detail:eq(1)&&li:eq(2)&&Text;.content_detail:eq(1)&&li:eq(3)&&Text',
    content: '.content_desc&&span&&Text',
    tabs: '.play_source_tab&&a',
    lists: '.content_playlist:eq(#id) li',
  },
  搜索: '.vodlist.clearfix li;a&&title;.vodlist_thumb&&style;.pic_text&&Text;a&&href',
}