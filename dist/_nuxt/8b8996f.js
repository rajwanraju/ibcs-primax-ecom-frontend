(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{763:function(t,e,d){var content=d(818);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(12).default)("e658f632",content,!0,{sourceMap:!1})},817:function(t,e,d){"use strict";d(763)},818:function(t,e,d){var n=d(11)((function(i){return i[1]}));n.push([t.i,".product-approval[data-v-1d3feb2d]{display:flex;justify-content:flex-end}.unapproved-product[data-v-1d3feb2d]{position:relative}.unapproved-product>.tag[data-v-1d3feb2d]{position:absolute;top:0;left:-10px;z-index:9999;background:#ff5f5f;color:#fff;width:25px;height:25px;font-size:11px;text-align:center;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700}.dashboard-cards[data-v-1d3feb2d]{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:50px}.dashboard-cards .card[data-v-1d3feb2d]{width:300px;text-align:center;padding:20px 0;border-radius:10px;border:1px solid rgba(0,0,0,.5);background:#eee;margin-right:20px;margin-bottom:20px}.dashboard-cards .card .count[data-v-1d3feb2d]{font-size:30px;font-weight:700;margin:0}.dashboard-cards .card .count-title[data-v-1d3feb2d]{margin:0;text-transform:uppercase;font-weight:500}",""]),n.locals={},t.exports=n},900:function(t,e,d){"use strict";d.r(e);var n={middleware:"AdminGaurd",data:function(){return{isAdmin:!1,admin:null}},mounted:function(){localStorage.isAdmin&&(this.isAdmin=localStorage.isAdmin,this.admin=JSON.parse(localStorage.admin),this.ctoken=localStorage.token)},methods:{getDashboardData:function(){var t=this;this.$axios.$get("/admin/dashboard").then((function(e){t.dashboardData=e.data,console.log(t.dashboardData)}))}}},o=(d(817),d(23)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"1d3feb2d",null);e.default=component.exports}}]);