(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3d27ce0"],{"02ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("transition",{attrs:{name:t.transitionName}},[a("router-view",{staticClass:"_router"})],1),a("cube-tab-bar",{staticClass:"my-tab-bar",attrs:{data:t.tabs},on:{change:t.changeHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}}),a("span",{staticClass:"boll"},[t._v(t._s(t.countSum))])],1)},c=[],o=a("5530"),l=a("2f62"),s={data:function(){return{selectedLabelDefault:"首页",tabs:[{label:"首页",icon:"cubeic-home"},{label:"分类",icon:"cubeic-tag"},{label:"搜索",icon:"cubeic-search"},{label:"购物车",icon:"cubeic-mall"},{label:"我的",icon:"cubeic-person"}],transitionName:"slider-right"}},computed:Object(o["a"])({},Object(l["b"])({countSum:"countSum"})),created:function(){this.changeSelectlable()},methods:{changeHandler:function(t){var e={"首页":"/bottom-nav/index","分类":"/bottom-nav/list","搜索":"/bottom-nav/search","购物车":"/bottom-nav/cart","我的":"/bottom-nav/mine"};this.$router.push(e[t])},changeSelectlable:function(){var t={"/bottom-nav/index":"首页","/bottom-nav/list":"分类","/bottom-nav/search":"搜索","/bottom-nav/cart":"购物车","/bottom-nav/mine":"我的"};this.selectedLabelDefault=t[this.$route.path]}}},i=s,b=(a("0811"),a("2877")),u=Object(b["a"])(i,n,c,!1,null,null,null);e["default"]=u.exports},"0811":function(t,e,a){"use strict";var n=a("a6fc"),c=a.n(n);c.a},a6fc:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d3d27ce0.e2341b11.js.map