webpackJsonp([12],{127:function(t,e,r){"use strict";var n={i18n:{messages:{en:{"tab.first":"Get products","tab.second":"Create product"},de:{"tab.first":"Hole Produkte","tab.second":"Erstelle Produkt"}}}};e.a=n},232:function(t,e,r){var n=r(5)(r(233),r(245),null,null);t.exports=n.exports},233:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(127);e.default={mixins:[n.a],components:{ProductCreate:function(){return r.e(14).then(r.bind(null,234))},ProductsGet:function(){return r.e(5).then(r.bind(null,237))}},data:function(){return{currentTab:"getProducts"}}}},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mt-navbar",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[r("mt-tab-item",{attrs:{id:"getProducts"}},[t._v(t._s(t.$t("tab.first")))]),t._v(" "),r("mt-tab-item",{attrs:{id:"createProducts"}},[t._v(t._s(t.$t("tab.second")))])],1),t._v(" "),r("mt-tab-container",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[r("mt-tab-container-item",{attrs:{id:"getProducts"}},[r("products-get")],1),t._v(" "),r("mt-tab-container-item",{attrs:{id:"createProducts"}},[r("product-create")],1)],1)],1)},staticRenderFns:[]}}});