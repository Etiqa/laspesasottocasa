(this.webpackJsonpsoldi=this.webpackJsonpsoldi||[]).push([[0],{25:function(e,n,t){e.exports=t(73)},30:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(2),o=t.n(l),c=(t(30),t(18)),i=t.n(c),u=t(5),m=t(6),s=t(1),d=t(23);function f(){var e=Object(m.a)(["\n  font-weight: 700;\n"]);return f=function(){return e},e}var h=s.default.div(f()),E=function(e){var n=e.shop;return r.a.createElement("div",null,r.a.createElement(h,null,n.urls?r.a.createElement(u.a,{href:n.urls[0]},n.name):n.name),r.a.createElement("div",null,n.address),r.a.createElement("div",null,n.email),r.a.createElement("div",null,n.phones?n.phones.join(", "):""),r.a.createElement("div",null,n.merce?n.merce.join(", "):""),r.a.createElement("hr",null))},p=function(e){return r.a.createElement("div",null,"City filter")};function v(){var e=Object(m.a)([""]);return v=function(){return e},e}var b=s.default.div(v()),w=function(e){return fetch(e).then((function(e){return e.json()}))},g=function(){var e=Object(d.a)("/laspesasottocasa/data/torino.json",w),n=e.data;return e.error?r.a.createElement(b,null,"failed to load"):n?r.a.createElement(b,null,r.a.createElement(p,{data:n}),n.map((function(e){return e.shops.map((function(e){return r.a.createElement(E,{key:e.name,shop:e})}))}))):r.a.createElement(b,null,"loading...")},j={"$btn-primary-bg":"blue","$btn-primary-color":"white"};var y=function(){return r.a.createElement(i.a,{theme:j},r.a.createElement(u.b,{className:"py-2"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.af5323b5.chunk.js.map