(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{sidM:function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("gWZ8")),u=n(a("p0pE")),s=n(a("d6i3"));a("miYZ");var i=n(a("tsqr")),o=a("sot2"),c={data:[],pagination:{total:0,pageIndex:1,pageSize:12},status:null,tabsList:[{title:"\u5168\u90e8\u8ba2\u5355",status:null,count:null},{title:"\u5df2\u6295\u6807",status:20,count:null},{title:"\u670d\u52a1\u4e2d",status:30,count:null},{title:"\u5df2\u5b8c\u6210",status:40,count:null}]},d={namespace:"centerService",state:c,effects:{getServiceList:s.default.mark(function t(e,a){var n,r,u,c,d,l,p,f,g,v;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.payload,r=a.call,u=a.put,c=a.select,!n){t.next=5;break}return t.next=5,u({type:"setPagination",payload:n});case 5:return t.next=7,c(function(t){return t.centerService});case 7:return d=t.sent,l={status:d.status,pageIndex:d.pagination.pageIndex,pageSize:d.pagination.pageSize},t.next=11,r(o.getServiceList,l);case 11:if(p=t.sent,f=p.data,g=p.ok,v=p.msg,!g){t.next=20;break}return t.next=18,u({type:"save",payload:{data:f}});case 18:t.next=21;break;case 20:i.default.error(v);case 21:case"end":return t.stop()}},t)}),getServiceCount:s.default.mark(function t(e,a){var n,r,u,c,d,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=a.put,r=a.call,t.next=3,r(o.getServiceCount);case 3:if(u=t.sent,c=u.data,d=u.ok,l=u.msg,!d){t.next=12;break}return t.next=10,n({type:"updateTabList",payload:{data:c}});case 10:t.next=13;break;case 12:i.default.error(l);case 13:case"end":return t.stop()}},t)})},reducers:{setPagination:function(t,e){var a=e.payload;return(0,u.default)({},t,{pagination:(0,u.default)({},t.pagination,{pageIndex:a.pageIndex,pageSize:a.pageSize})})},updateTabList:function(t,e){var a=e.payload.data,n=(0,r.default)(t.tabsList),s=a;return n.forEach(function(t){s.forEach(function(e){t.status===e.status&&(t.count=e.count)})}),(0,u.default)({},t,{tabsList:n})},updateState:function(t,e){var a=e.payload;return(0,u.default)({},t,a)},save:function(t,e){var a=e.payload;return(0,u.default)({},t,{data:a.data.resultList,pagination:(0,u.default)({},t.pagination,{total:a.data.resultCount})})},destory:function(){return c}}};e.default=d},sot2:function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.getServiceCount=s,e.getServiceList=i,e.ServiceType=void 0;var r=n(a("t3Un")),u={get UnSign(){return 20},get Sign(){return 30},get Success(){return 40}};function s(){return(0,r.default)("/mms/demands/count/1.3",{method:"GET"})}function i(t){return(0,r.default)("/mms/demands/serviceList/1.3",{method:"post",data:t})}e.ServiceType=u}}]);