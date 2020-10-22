(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e30e21f2"],{"0d85":function(t,a,s){"use strict";var o=s("dd70"),n=s.n(o);n.a},"3c27":function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid vld-parent"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"background-color":"#555","is-full-page":!0},on:{"update:active":function(a){t.isLoading=a}}},[s("LoadEffect",{attrs:{slot:"default"},slot:"default"})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"dashboard"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("產品管理列表")]),s("button",{staticClass:"ml-4 pure-button pure-button-info",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.newHandler(a)}}},[t._v("新增產品")])]),s("main",{staticClass:"body"},[s("div",{staticClass:"table"},[s("div",{staticClass:"table-head"},[s("div",{staticClass:"tr"},[s("span",{staticClass:"th"},[t._v("分類")]),s("span",{staticClass:"th"},[t._v("產品名稱")]),s("span",{staticClass:"th"},[t._v("原價")]),s("span",{staticClass:"th"},[t._v("售價")]),s("span",{staticClass:"th"},[t._v("是否啟用")]),s("span",{staticClass:"th"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","user-cog"]}})],1)])]),s("div",{staticClass:"table-body"},t._l(t.products,(function(a){return s("item",{key:a.id,attrs:{prod:a},on:{edit:t.editHandler}})})),1)]),s("pagination",{attrs:{total_pages:t.total,page:t.page},on:{"update:page":function(a){t.page=a}}})],1)])])]),s("NewModal",{attrs:{show:t.showModal,mod:"XL",title:t.modalTitle},on:{"update:show":function(a){t.showModal=a},check:t.clickHandler}},[s("ProductsOption",{ref:"modalData"})],1)],1)},n=[],i=(s("d3b7"),s("5530")),e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tr vld-parent"},[s("loading",{attrs:{active:t.isLoading,color:"#218DFE","can-cancel":!0,loader:"dots","is-full-page":!1},on:{"update:active":function(a){t.isLoading=a}}}),s("span",{staticClass:"td"},[t._v(t._s(t.prod.category))]),s("span",{staticClass:"td"},[t._v(t._s(t.prod.title))]),s("span",{staticClass:"td"},[t._v(t._s(t._f("Dollar")(t._f("Currency")(t.prod.origin_price))))]),s("span",{staticClass:"td"},[t._v(t._s(t._f("Dollar")(t._f("Currency")(t.prod.price))))]),s("span",{staticClass:"td"},[s("toggle",{attrs:{prodId:t.prod.id.substr(0,5),disabled:!0,checked:t.prod.enabled}})],1),s("span",{staticClass:"td"},[s("button",{staticClass:"pure-button pure-button-info mr-1 button-small",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.editHandler(a)}}},[s("font-awesome-icon",{attrs:{icon:"marker"}})],1),s("button",{staticClass:"pure-button pure-button-danger button-small",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delHandler(a)}}},[s("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]),s("Dialog",{ref:"dialog",on:{dialog:t.confirm}},[t._v("刪除此產品?")])],1)},c=[],d=(s("99af"),{methods:{getProductList:function(t){var a=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/products?page=").concat(t,"&paged=10")).then((function(t){200===t.status&&(a.products=t.data.data,a.total=t.data.meta.pagination.total_pages,a.isLoading=!1)})).catch((function(t){a.isLoading=!1,a.$toast.error(t.response.data.message)}))},showProduct:function(t){var a=this;return this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/product/").concat(t)).then((function(t){return 200===t.status&&(a.isLoading=!1),t.data.data})).catch((function(t){a.isLoading=!1,a.$toast.error(t.response.data.message)}))},createProduct:function(t){var a=this;this.isLoading=!0,this.$http.post("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/product"),t).then((function(t){200===t.status&&(a.getProductList(),a.$toast.success("商品新增成功"))})).catch((function(t){a.isLoading=!1,a.$toast.error(t.response.data.message)}))},editProduct:function(t){var a=this;this.isLoading=!0,this.$http.patch("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/product/").concat(t.id),t).then((function(s){200===s.status&&(a.isLoading=!1,a.$parent.getProductList(a.page),a.$toast.success("".concat(t.title," 編輯成功")))})).catch((function(t){a.isLoading=!1,a.$toast.error(t.response.data.message)}))},destroyProduct:function(t){var a=this;this.isLoading=!0,this.$http.delete("".concat("https://course-ec-api.hexschool.io/api/").concat("99034dfb-2d10-45b5-8844-dd3e163815eb","/admin/ec/product/").concat(t)).then((function(t){200===t.status&&(a.isLoading=!1,a.$parent.getProductList(),a.$toast.success("商品刪除成功"))})).catch((function(t){a.isLoading=!1,a.$toast.error(t.response.data.message)}))}}}),r={name:"ProductItem",mixins:[d],components:{},props:{prod:{type:Object,required:!0}},data:function(){return{isLoading:!1,showModal:!1}},methods:{editHandler:function(){this.$emit("edit",this.prod.id)},delHandler:function(){this.$refs.dialog.isVisible=!0},confirm:function(){this.destroyProduct(this.prod.id)}}},u=r,l=(s("64f7"),s("2877")),p=Object(l["a"])(u,e,c,!1,null,"34e7bb27",null),h=p.exports,f={name:"Products",components:{item:h,NewModal:function(){return s.e("chunk-27d8197d").then(s.bind(null,"67cd"))},ProductsOption:function(){return Promise.all([s.e("chunk-59f7ead3"),s.e("chunk-11517168")]).then(s.bind(null,"c91e"))}},mixins:[d],created:function(){this.getProductList(this.page)},data:function(){return{isLoading:!1,page:1,total:1,products:[],showModal:!1,modalTitle:"新增產品"}},methods:{newHandler:function(){this.modalTitle="新增產品",this.showModal=!0},newProd:function(){var t=Object(i["a"])({},this.$refs.modalData.inputTemp);this.createProduct(t)},editHandler:function(t){var a=this;this.modalTitle="編輯產品",this.showProduct(t).then((function(t){a.showModal=!0,a.$refs.modalData.inputTemp=Object(i["a"])({},t)}))},updateProd:function(){var t=this.$refs.modalData.inputTemp;this.editProduct(t)},clickHandler:function(){"新增產品"===this.modalTitle&&this.newProd(),"編輯產品"===this.modalTitle&&this.updateProd()}},watch:{page:function(){this.getProductList(this.page)}}},g=f,b=(s("0d85"),Object(l["a"])(g,o,n,!1,null,"d0974f46",null));a["default"]=b.exports},"64f7":function(t,a,s){"use strict";var o=s("fc57"),n=s.n(o);n.a},dd70:function(t,a,s){},fc57:function(t,a,s){}}]);
//# sourceMappingURL=chunk-e30e21f2.3b7e49a7.js.map