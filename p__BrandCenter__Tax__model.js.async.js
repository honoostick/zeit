(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{FakH:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getData=i;var r=n(a("t3Un"));function i(e){return r.default.post("/pay/taxRefund/list/1.2",{data:e})}},K50I:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),i=n(a("d6i3"));a("miYZ");var u=n(a("tsqr")),o=a("FakH"),s={data:[],pagination:{total:0,current:1,pageSize:10}},p={namespace:"financeTax",state:s,effects:{getList:i.default.mark(function e(t,a){var n,r,s,p,d,c,f,l,g,v;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.payload,r=a.call,s=a.put,p=a.select,!n){e.next=5;break}return e.next=5,s({type:"setPagination",payload:n});case 5:return e.next=7,p(function(e){return e.financeTax});case 7:return d=e.sent,c={pageSize:d.pagination.pageSize,pageIndex:d.pagination.current},e.next=11,r(o.getData,c);case 11:if(f=e.sent,l=f.data,g=f.ok,v=f.msg,g){e.next=18;break}return u.default.error(v),e.abrupt("return");case 18:return e.next=20,s({type:"saveList",payload:{data:l}});case 20:case"end":return e.stop()}},e)})},reducers:{saveList:function(e,t){var a=t.payload,n=(0,r.default)({},a),i=n.data;return(0,r.default)({},e,{data:i.list,pagination:(0,r.default)({},e.pagination,{total:i.resultCount})})},setPagination:function(e,t){var a=t.payload;return(0,r.default)({},e,{pagination:(0,r.default)({},e.pagination,{current:a.current,pageSize:a.pageSize})})},destory:function(){return s}}};t.default=p}}]);