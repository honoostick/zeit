(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{"1r+E":function(e,t,a){e.exports={container:"antd-pro-pages-service-hall-style-container",banner:"antd-pro-pages-service-hall-style-banner",part1:"antd-pro-pages-service-hall-style-part1",tabs1:"antd-pro-pages-service-hall-style-tabs1","tab-with-line":"antd-pro-pages-service-hall-style-tab-with-line","tabs1-select":"antd-pro-pages-service-hall-style-tabs1-select","tabs1-tab":"antd-pro-pages-service-hall-style-tabs1-tab","tabs1-name":"antd-pro-pages-service-hall-style-tabs1-name","tabs1-split":"antd-pro-pages-service-hall-style-tabs1-split",line:"antd-pro-pages-service-hall-style-line",part2:"antd-pro-pages-service-hall-style-part2",title:"antd-pro-pages-service-hall-style-title","tabs2-dashed":"antd-pro-pages-service-hall-style-tabs2-dashed",tabs2:"antd-pro-pages-service-hall-style-tabs2","tabs2-title":"antd-pro-pages-service-hall-style-tabs2-title","tabs2-select":"antd-pro-pages-service-hall-style-tabs2-select","tabs2-tab":"antd-pro-pages-service-hall-style-tabs2-tab",list:"antd-pro-pages-service-hall-style-list",empty:"antd-pro-pages-service-hall-style-empty",content:"antd-pro-pages-service-hall-style-content","tabs-set":"antd-pro-pages-service-hall-style-tabs-set",card:"antd-pro-pages-service-hall-style-card","card-info":"antd-pro-pages-service-hall-style-card-info","card-info-title":"antd-pro-pages-service-hall-style-card-info-title","card-info-title1":"antd-pro-pages-service-hall-style-card-info-title1","card-info-title2":"antd-pro-pages-service-hall-style-card-info-title2","card-info-price":"antd-pro-pages-service-hall-style-card-info-price","card-info-btn":"antd-pro-pages-service-hall-style-card-info-btn","btn-row":"antd-pro-pages-service-hall-style-btn-row",pagination:"antd-pro-pages-service-hall-style-pagination"}},Y9ie:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DjyN");var n=l(a("NUBc"));a("Pwec");var c,d,r,i=l(a("CtXQ")),u=l(a("2Taf")),o=l(a("vZ4D")),f=l(a("l4Ni")),p=l(a("ujKo")),m=l(a("MhPg")),v=l(a("p0pE")),h=s(a("q1tI")),b=a("MuoO"),g=l(a("EcEN")),y=l(a("Mi/s")),E=l(a("1r+E")),N=l(a("Jdo2")),C=(c=(0,b.connect)(function(e){var t=e.successCase,a=e.user;return(0,v.default)({},t,{isLogin:a.currentUser.userId})}),c((r=function(e){function t(){var e,a;(0,u.default)(this,t);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=(0,f.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(s))),a.fetchList1=function(e,t,l,s){var n=a.props.dispatch;return n({type:"successCase/fetchDemandList",industryId:e,demandsType:t,status:l,pageIndex:s})},a.fetchList2=function(e,t){var l=a.props.dispatch;return l({type:"successCase/fetchProviderList",industryId:e,pageIndex:t})},a.onTabs11Click=function(e,t){var l=a.props,s=l.dispatch,n=l.select11,c=l.id12,d=l.id13;n!==e&&(s({type:"successCase/save",payload:{select11:e,id11:t,pageIndex1:1}}),a.fetchList1(t,c,d,1))},a.onTabs12Click=function(e,t){var l=a.props,s=l.dispatch,n=l.select12,c=l.id11,d=l.id13;n!==e&&(s({type:"successCase/save",payload:{select12:e,id12:t,pageIndex1:1}}),a.fetchList1(c,t,d,1))},a.onTabs13Click=function(e,t){var l=a.props,s=l.dispatch,n=l.select13,c=l.id11,d=l.id12;n!==e&&(s({type:"successCase/save",payload:{select13:e,id13:t,pageIndex1:1}}),a.fetchList1(c,d,t,1))},a.onTabs21Click=function(e,t){var l=a.props,s=l.dispatch,n=l.select21;n!==e&&(s({type:"successCase/save",payload:{select21:e,id21:t,pageIndex2:1}}),a.fetchList2(t,1))},a.onPageChange1=function(e){var t=a.props,l=t.dispatch,s=t.id11,n=t.id12,c=t.id13;l({type:"successCase/save",payload:{pageIndex1:e}}),a.fetchList1(s,n,c,e).then(function(e){var t=!1;(!e||e.length<5)&&(t=!0,document.documentElement.scrollTop=.4*document.documentElement.clientWidth+100,document.body.scrollTop=.4*document.documentElement.clientWidth+100),l({type:"successCase/save",payload:{isOneLine:t}})})},a.onPageChange2=function(e){var t=a.props,l=t.dispatch,s=t.id21,n=t.isOneLine;l({type:"successCase/save",payload:{pageIndex2:e}}),a.fetchList2(s,e).then(function(e){if(!e||e.length<5){var t=1.3*document.documentElement.clientWidth+100;n&&(t=.9*document.documentElement.clientWidth+100),document.documentElement.scrollTop=t,document.body.scrollTop=t}})},a.renderCard1=function(e){return h.default.createElement("div",{key:e.demandsId,className:E.default.card,onClick:function(){window.open("/demandDetail/".concat(e.demandsId))}},h.default.createElement("img",{src:e.img,alt:""}),h.default.createElement("div",{className:E.default["card-info"]},h.default.createElement("div",{className:E.default["card-info-title"]},e.title),h.default.createElement("div",{className:E.default["card-info-price"]},"\xa5",e.servicePrice),h.default.createElement("a",{className:E.default["card-info-btn"]},"\u67e5\u770b\u8be6\u60c5",h.default.createElement(i.default,{type:"caret-left",className:E.default["btn-row"]}))))},a.renderCard2=function(e){return h.default.createElement("div",{key:e.providerId,className:E.default.card,onClick:function(){window.open("/serviceDetail/".concat(e.providerId))}},h.default.createElement("img",{src:e.companyLogo,alt:""}),h.default.createElement("div",{className:E.default["card-info"]},h.default.createElement("div",{className:E.default["card-info-title1"]},e.providerName),h.default.createElement("div",{className:E.default["card-info-title2"]},e.profile),h.default.createElement("div",{className:E.default["card-info-btn"]},"\u67e5\u770b\u8be6\u60c5",h.default.createElement(i.default,{type:"caret-left",className:E.default["btn-row"]}))))},a.renderPart1=function(){var e=a.props,t=e.tabData,l=e.select11,s=e.select12,c=e.select13,d=e.pageSize,r=e.demandTypeList,i=e.orderStatusList,u=e.demandList,o=e.demandCount,f=e.pageIndex1,p=e.loading1,m=h.default.createElement("div",null,h.default.createElement(N.default,null));return p||(m=u&&0!==u.length?h.default.createElement("div",{className:E.default.list},u.map(function(e){return a.renderCard1(e)})):h.default.createElement("img",{className:E.default.empty,src:y.default,alt:""})),h.default.createElement("div",{className:E.default.part1},h.default.createElement("div",{className:E.default.tabs1},t&&t.map(function(e,t){return h.default.createElement("div",{className:"".concat(l===t?E.default["tabs1-select"]:E.default["tabs1-tab"],"\n                ").concat(0!==t&&E.default["tab-with-line"]),key:(0,g.default)(),onClick:function(){return a.onTabs11Click(t,e.dataId)}},h.default.createElement("div",{className:E.default["tabs1-name"]},e.dataName))})),h.default.createElement("div",{className:E.default.line}),h.default.createElement("div",{className:E.default.content},h.default.createElement("div",{className:E.default.title},"\u67e5\u627e\u9700\u6c42"),h.default.createElement("div",{className:E.default["tabs-set"]},h.default.createElement("div",{className:"".concat(E.default.tabs2," ").concat(E.default["tabs2-dashed"])},h.default.createElement("div",{className:E.default["tabs2-title"]},"\u9700\u6c42\u7c7b\u578b"),r&&r.map(function(e,t){return h.default.createElement("div",{key:e.value,className:"".concat(s===t?E.default["tabs2-select"]:E.default["tabs2-tab"]),onClick:function(){return a.onTabs12Click(t,e.value)}},e.name)})),h.default.createElement("div",{className:E.default.tabs2},h.default.createElement("div",{className:E.default["tabs2-title"]},"\u8ba2\u5355\u7c7b\u578b"),i&&i.map(function(e,t){return h.default.createElement("div",{key:e.value,className:"".concat(c===t?E.default["tabs2-select"]:E.default["tabs2-tab"]),onClick:function(){return a.onTabs13Click(t,e.value)}},e.name)}))),m,h.default.createElement("div",{className:E.default.pagination},h.default.createElement(n.default,{showQuickJumper:!0,current:f,total:o,pageSize:d,onChange:a.onPageChange1}))))},a.renderPart2=function(){var e=a.props,t=e.select21,l=e.pageSize,s=e.tabData2,c=e.providerList,d=e.providerCount,r=e.pageIndex2,i=e.loading2,u=h.default.createElement("div",null,h.default.createElement(N.default,null));return i||(u=c&&0!==c.length?h.default.createElement("div",{className:E.default.list},c.map(function(e){return a.renderCard2(e)})):h.default.createElement("img",{className:E.default.empty,src:y.default,alt:""})),h.default.createElement("div",{className:E.default.part2},h.default.createElement("div",{className:E.default.content},h.default.createElement("div",{className:E.default.title},"\u63a8\u8350\u4f18\u8d28\u670d\u52a1\u5546"),h.default.createElement("div",{className:E.default["tabs-set"]},h.default.createElement("div",{className:E.default.tabs2},h.default.createElement("div",{className:E.default["tabs2-title"]},"\u884c\u4e1a\u7c7b\u578b"),s&&s.map(function(e,l){return h.default.createElement("div",{key:(0,g.default)(),className:"".concat(t===l?E.default["tabs2-select"]:E.default["tabs2-tab"]),onClick:function(){return a.onTabs21Click(l,e.id)}},e.name)}))),u,h.default.createElement("div",{className:E.default.pagination},h.default.createElement(n.default,{showQuickJumper:!0,current:r,total:d,pageSize:l,onChange:a.onPageChange2}))))},a}return(0,m.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"successCase/fetch"})}},{key:"render",value:function(){var e=this.props.isLogin;return h.default.createElement("div",{className:E.default.container},h.default.createElement("div",{className:E.default.banner},h.default.createElement("div",{onClick:function(){e?window.open("/center/brandcenter/mutationDemand"):window.location.href="/login"}},"\u7acb\u5373\u53d1\u5e03")),this.renderPart1(),this.renderPart2())}}]),t}(h.Component),d=r))||d),k=C;t.default=k}}]);