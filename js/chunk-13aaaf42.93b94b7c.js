(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13aaaf42"],{"6a7f":function(t,a,s){"use strict";var i=s("98f8"),e=s.n(i);e.a},"6b66":function(t,a,s){"use strict";var i=s("f9f2"),e=s.n(i);e.a},"98f8":function(t,a,s){},"9cfe":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid vld-parent"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":!1},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"dashboard"},[t._m(0),s("main",{staticClass:"body"},[s("div",{staticClass:"table"},[t._m(1),s("div",{directives:[{name:"scrollbar",rawName:"v-scrollbar"}],staticClass:"table-body"},t._l(t.OrderList,(function(t){return s("Item",{key:t.id,attrs:{order:t}})})),1)]),s("pagination",{attrs:{total_pages:t.total,page:t.page},on:{"update:page":function(a){t.page=a}}})],1)])])])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("訂單列表")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"table-head"},[s("div",{staticClass:"tr"},[s("span",{staticClass:"th"},[t._v("下單時間")]),s("span",{staticClass:"th"},[t._v("購買款項")]),s("span",{staticClass:"th"},[t._v("付款方式")]),s("span",{staticClass:"th"},[t._v("應付金額")]),s("span",{staticClass:"th"},[t._v("是否付款")])])])}],n=(s("99af"),{methods:{getOrderList:function(t){var a=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/orders?page=").concat(t,"&paged=10")).then((function(t){a.OrderList=t.data.data,a.total=t.data.meta.pagination.total_pages,a.isLoading=!1})).catch((function(t){a.$toast.error(t.response.data.message),a.isLoading=!1}))},SetOrderPaid:function(t){var a=this;return this.isLoading=!0,this.$http.patch("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/orders/").concat(t,"/paid")).then((function(t){200===t.status&&(a.isLoading=!1)})).catch((function(t){a.$toast.error(t.response.data.message),a.isLoading=!1}))},SetOrderUnpaid:function(t){var a=this;return this.isLoading=!0,this.$http.patch("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/orders/").concat(t,"/unpaid")).then((function(t){200===t.status&&(a.isLoading=!1)})).catch((function(t){a.$toast.error(t.response.data.message),a.isLoading=!1}))}}}),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tr vld-parent"},[s("loading",{attrs:{active:t.isLoading,color:"#218DFE","can-cancel":!0,loader:"dots","is-full-page":!1},on:{"update:active":function(a){t.isLoading=a}}}),s("span",{staticClass:"td"},[t._v(t._s(t.order.created.datetime))]),s("span",{staticClass:"td"},[s("ul",t._l(t.order.products,(function(a,i){return s("li",{key:i},[t._v(" "+t._s(a.product.title+" 數量："+a.quantity+" "+a.product.unit)+" ")])})),0)]),s("span",{staticClass:"td"},[t._v(t._s(t.order.payment))]),s("span",{staticClass:"td"},[t._v(t._s(t._f("Currency")(t._f("Dollar")(t.order.amount))))]),s("span",{staticClass:"td"},[s("toggle",{attrs:{prodId:t.order.id.substr(0,5),checked:t.order.paid},on:{input:t.edit}})],1),s("Dialog",{ref:"dialog",on:{dialog:t.confirm}},[t._v("變更付款狀態為 "+t._s(t.paid(!t.order.paid))+"?")])],1)},r=[],c={name:"OrderItem",mixins:[n],components:{},props:{order:{type:Object,required:!0}},data:function(){return{isLoading:!1}},methods:{paid:function(t){return t?"已付款":"未付款"},confirm:function(){},edit:function(){var t=this;this.order.paid?this.SetOrderUnpaid(this.order.id).then((function(){t.$toast.success("已變更付款狀態為".concat(t.paid(t.order.id)))})):this.SetOrderPaid(this.order.id).then((function(){t.$toast.success("已變更付款狀態為".concat(t.paid(t.order.id)))}))}},computed:{}},d=c,l=(s("6b66"),s("2877")),u=Object(l["a"])(d,o,r,!1,null,"3de20596",null),p=u.exports,f={mataInfo:{title:"-訂單管理"},name:"Orders",mixins:[n],components:{Item:p},data:function(){return{isLoading:!1,page:1,total:1,OrderList:[]}},created:function(){this.getData()},methods:{getData:function(){this.getOrderList(this.page)}},computed:{}},h=f,g=(s("6a7f"),Object(l["a"])(h,i,e,!1,null,"4aa68050",null));a["default"]=g.exports},f9f2:function(t,a,s){}}]);
//# sourceMappingURL=chunk-13aaaf42.93b94b7c.js.map