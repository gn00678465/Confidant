(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8078942"],{"1a43":function(t,i,n){"use strict";var s=n("9136"),a=n.n(s);a.a},6836:function(t,i,n){},"69ae":function(t,i,n){"use strict";n.r(i);var s,a,e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"products vld-parent",style:t.rootStyle},[n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(i){t.isLoading=i}}},[n("LoadEffect",{attrs:{slot:"default"},slot:"default"})],1),n("img",{staticClass:"banner",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PLKhk6JeCtmopqGlcl7jphiYmfpXreT4aMUWjwNzF8prekNolukphssTKiRrLt2FGbCAhu5MJZ6plErksVT8ETngzFIOJEWk2hoI3m7dFAyxQWw1nWh43aidPsRcOt91.jpg"}}),n("div",{staticClass:"container my-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3"},[n("CategoryList",t._b({attrs:{list:t.categoryList}},"CategoryList",t.$attrs,!1))],1),n("div",{staticClass:"col-lg-9 mt-3 mt-md-0"},[n("section",[n("div",{staticClass:"row"},t._l(t.paginationProducts[t.page-1],(function(t,i){return n("div",{key:t.id.substring(0,5)+"_"+i,staticClass:"col-xl-4 col-md-6 col-12",attrs:{"data-index":i}},[n("ProdCard",{attrs:{data:t}})],1)})),0),t.paginationProducts.length>1?n("pagination",{attrs:{total_pages:t.paginationProducts.length,page:t.page},on:{"update:page":function(i){t.page=i}}}):t._e()],1)])])])],1)},r=[],o=(n("4de4"),n("4160"),n("c975"),n("159b"),n("d81d"),n("2909")),c={name:"CategoryList",props:{list:{type:Array,required:!0}},data:function(){return{current:"所有品項",isShow:!1}},methods:{menuShow:function(){this.isShow=!this.isShow},selectHandler:function(t){t.preventDefault();var i=t.currentTarget.dataset.category;this.$store.filter!==i&&i&&(this.isShow&&(this.isShow=!this.isShow),this.current=i,this.$mutation.setFilter(i))},classHandler:function(t){var i="";return i=t===this.current?"select item":"item",i}},computed:{lists:function(){var t=Object(o["a"])(this.list);return t.unshift("所有品項"),t},rootStyle:function(){return{"--nav-height":"".concat(this.$attrs.navHeight+15,"px")}}},render:function(){var t=this,i=arguments[0];return i("ul",{class:"menu mb-sm-2 ".concat(this.isShow?"show":"")},[i("span",{class:"mobile",on:{click:this.menuShow}},[i("font-awesome-icon",{class:"icon",attrs:{icon:"chevron-up"}})]),this.lists.map((function(n){return i("li",{class:t.classHandler(n),key:n},[i("a",{attrs:{href:"#","data-category":n},on:{click:t.selectHandler},class:"link"},[n])])}))])}},u=c,l=(n("1a43"),n("2877")),h=Object(l["a"])(u,s,a,!1,null,"14267900",null),d=h.exports,f=n("ea95"),p={name:"Products",components:{CategoryList:d},mixins:[f["a"]],data:function(){return{isLoading:!1,page:1,amount:9,products:[],velocityDelay:150}},created:function(){this.GetProductList()},methods:{dataHandler:function(){var t=this,i=[];return this.filterProduct.forEach((function(n,s){s%t.amount===0&&i.push([]);var a=parseInt(s/t.amount,10);i[a].push(n)})),i},ScrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$root.$el.scrollTo({top:t,behavior:"smooth"})}},computed:{paginationProducts:function(){return this.dataHandler()},categoryList:function(){var t=[];this.products.forEach((function(i){return t.push(i.options.type)}));var i=[];return t.forEach((function(t){-1===i.indexOf(t)&&i.push(t)})),i},filter:function(){return this.$store.filter},filterProduct:function(){var t=this;return"所有品項"!==this.filter?this.products.filter((function(i){return i.options.type===t.filter})):this.products},rootStyle:function(){return{"--nav-height":"".concat(this.$attrs.navHeight,"px")}}},watch:{filter:function(){"所有品項"!==this.filter&&(this.page=1)},page:function(){this.ScrollTo()}}},g=p,m=(n("f114"),Object(l["a"])(g,e,r,!1,null,"1b69cef8",null));i["default"]=m.exports},9136:function(t,i,n){},c975:function(t,i,n){"use strict";var s=n("23e7"),a=n("4d64").indexOf,e=n("a640"),r=n("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=e("indexOf"),l=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?o.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},f114:function(t,i,n){"use strict";var s=n("6836"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-e8078942.00927bd2.js.map