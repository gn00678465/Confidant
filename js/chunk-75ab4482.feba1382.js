(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ab4482"],{"017a":function(t,e,a){},"13d5":function(t,e,a){"use strict";var s=a("23e7"),i=a("d58f").left,n=a("a640"),r=a("ae40"),o=n("reduce"),l=r("reduce",{1:0});s({target:"Array",proto:!0,forced:!o||!l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},3246:function(t,e,a){"use strict";var s=a("d198"),i=a.n(s);i.a},5063:function(t,e,a){"use strict";var s=a("017a"),i=a.n(s);i.a},"567f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("validation-observer",{staticClass:"container",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitHandler(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}},[a("LoadEffect",{attrs:{slot:"default"},slot:"default"})],1),t.isEmpty?a("div",{staticClass:"emptyShow"},[a("h4",{staticClass:"h4"},[t._v("目前購物車內無品項，請到所有商品選購。")]),a("button",{staticClass:"pure-button pure-button-primary mt-3",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goProducts(e)}}},[t._v(" 回到產品列表 ")])]):a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-7 detail mb-3"},[a("Detail",{ref:"detial"}),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col"},[a("button",{staticClass:"pure-button pure-button-outline-secondary\n          w-100 checkout__btn-mobile",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goProducts(e)}}},[t._v(" 繼續購物")])]),a("div",{staticClass:"col"},[a("button",{staticClass:"pure-button pure-button-success w-100 checkout__btn-mobile",attrs:{type:"submit",disabled:s||t.isEmpty}},[t._v("結帳去 "),s||t.isEmpty?t._e():a("font-awesome-icon",{staticClass:"ml-2",class:[t.AnimateClass,t.AnimateRight],attrs:{icon:"chevron-right"}})],1)])])],1),a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 list"},[a("List"),a("Summary",{on:{coupon:t.addCoupon},scopedSlots:t._u([{key:"button",fn:function(){return[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col"},[a("button",{staticClass:"pure-button pure-button-outline-secondary\n                      w-100 checkout__btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goProducts(e)}}},[t._v(" 繼續購物")])]),a("div",{staticClass:"col"},[a("button",{staticClass:"pure-button pure-button-success\n                    w-100 checkout__btn",attrs:{type:"submit",disabled:s||t.isEmpty}},[t._v(" 結帳去 "),s||t.isEmpty?t._e():a("font-awesome-icon",{staticClass:"ml-2",class:[t.AnimateClass,t.AnimateRight],attrs:{icon:"chevron-right"}})],1)])])]},proxy:!0}],null,!0)})],1)])])])]}}])})},i=[],n=a("5530"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h4",{staticClass:"h4"},[t._v("輸入訂購人資料")]),a("InputSlot",{attrs:{rules:"required|is_not:0"},scopedSlots:t._u([{key:"label",fn:function(){return[a("label",{attrs:{for:"payment"}},[t._v("付款方式"),a("small",{staticClass:"required"},[t._v("*")])])]},proxy:!0},{key:"input",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control custom-select",attrs:{id:"payment"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",disabled:"",value:"0"}},[t._v("請選擇付款方式")]),t._l(t.payments,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2)]},proxy:!0}])}),a("validation-provider",{staticClass:"form-group",attrs:{tag:"div",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,i=e.classes;return[a("label",{attrs:{for:"name"}},[t._v("姓名"),a("small",{staticClass:"required"},[t._v("*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:i,attrs:{type:"text",name:"付款人姓名",id:"name",placeholder:"付款人姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}])}),a("validation-provider",{staticClass:"form-group",attrs:{tag:"div",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,i=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("信箱"),a("small",{staticClass:"required"},[t._v("*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:i,attrs:{type:"email",name:"付款人信箱",id:"email",placeholder:"HexSchool@example.com",inputmode:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}])}),a("validation-provider",{staticClass:"form-group",attrs:{tag:"div",rules:"required|integer|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,i=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話"),a("small",{staticClass:"required"},[t._v("*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:i,attrs:{type:"tel",name:"付款人電話",id:"tel",placeholder:"付款人電話"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}])}),a("validation-provider",{staticClass:"form-group",attrs:{tag:"div",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,i=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址"),a("small",{staticClass:"required"},[t._v("*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:i,attrs:{type:"text",name:"付款人地址",id:"address",placeholder:"付款人地址"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}])}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",rows:"3",placeholder:"輸入你的留言"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])],1)])},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("validation-provider",{staticClass:"form-group",attrs:{tag:"div",rules:t.rules},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;e.classes;return[t._t("label"),t._t("input"),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})},c=[],u={name:"InputSlot",props:{rules:{type:String}}},d=u,m=a("2877"),p=Object(m["a"])(d,l,c,!1,null,"f3ab7054",null),f=p.exports,v={name:"Detail",components:{InputSlot:f},data:function(){return{payments:["WebATM","ATM","Barcode","Credit","ApplePay","GooglePay"],form:{name:null,email:null,tel:null,address:null,payment:0,message:null}}},methods:{},computed:{}},_=v,C=(a("7b83"),Object(m["a"])(_,r,o,!1,null,"11e8a737",null)),h=C.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title"},[a("h4",{staticClass:"text-bold"},[t._v("購物車清單")]),a("font-awesome-icon",{staticClass:"mobile-arrow",class:{rotate:t.isShow},attrs:{icon:"chevron-up"},on:{click:function(e){e.preventDefault(),t.isShow=!t.isShow}}})],1),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"items"},t._l(t.CartDatas,(function(t){return a("Item",{key:t.product.id,attrs:{data:t}})})),1)])],1)},b=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"CartCard vld-parent"},[a("loading",{attrs:{active:t.isLoading,loader:"dots","is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"CartCard__main"},[a("div",{staticClass:"CartCard__img"},[a("img",{attrs:{src:t.data.product.imageUrl[0],alt:""}})]),a("div",{staticClass:"CartCard__content"},[a("div",{staticClass:"CartCard__title"},[a("h5",{staticClass:"h5"},[t._v(" "+t._s(t.data.product.title)+" ")]),a("font-awesome-icon",{staticClass:"CartCard__trash",attrs:{icon:"trash-alt"},on:{click:function(e){return e.preventDefault(),t.DelProduct(e)}}})],1),a("div",{staticClass:"CartCard__edit"},[a("Increment",{attrs:{count:t.quantity,value:t.data.quantity,size:1.3,styled:"simple"},on:{"update:count":function(e){t.quantity=e}},scopedSlots:t._u([{key:"plus",fn:function(){return[a("font-awesome-icon",{attrs:{icon:"plus"}})]},proxy:!0},{key:"minus",fn:function(){return[a("font-awesome-icon",{attrs:{icon:"minus"}})]},proxy:!0}])}),a("p",{staticClass:"CartCard__price"},[t._v(" NT"+t._s(t._f("Currency")(t._f("Dollar")(t.data.product.price)))+" ")])],1)])])],1)},w=[],x=a("7c4d"),S=a("6df9"),k={name:"CartCard",mixins:[S["a"]],components:{Increment:x["a"]},props:{data:{type:Object,requested:!0}},data:function(){return{isLoading:!1,quantity:this.data.quantity}},methods:{DelProduct:function(){this.DestroyCart(this.data.product.id)}},watch:{quantity:function(){this.EditCart(this.data.product.id,this.quantity)}}},P=k,$=(a("5063"),Object(m["a"])(P,y,w,!1,null,"2c960310",null)),D=$.exports,q={name:"List",components:{Item:D},data:function(){return{isShow:!1,index:null}},methods:{updatedHandler:function(t,e){e&&this.index!==t&&(this.index=t),e||this.index!==t||(this.index=null)},goProducts:function(){this.$router.push({name:"products"})}},computed:{CartDatas:function(){return this.$store.cartList}}},L=q,E=(a("a71b"),Object(m["a"])(L,g,b,!1,null,"3653841e",null)),O=E.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary mb-lg-3"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item summary__item border-bottom"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.coupon,expression:"coupon",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入優惠卷"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"input-group-text",attrs:{type:"button",disabled:t.isSearch},on:{click:function(e){return e.preventDefault(),t.applycoupon(e)}}},[t.isSearch?a("font-awesome-icon",{attrs:{icon:"spinner",pulse:""}}):a("span",[t._v("套用")])],1)])])]),a("li",{staticClass:"list-group-item summary__item"},[a("p",{staticClass:"label"},[t._v("小計：")]),a("AnimatedIngeter",{staticClass:"value",attrs:{value:t.OriginTotalPrice}},[t._v("元")])],1),a("li",{staticClass:"list-group-item summary__item"},[a("p",{staticClass:"label"},[t._v("運費：")]),a("p",{staticClass:"value",class:{through:0===t.Shipping}},[t._v(t._s(t._f("Dollar")(t.Shipping))+"元")])]),a("li",{staticClass:"list-group-item summary__item",class:0!==t.DisCount?"applyDiscount":"noDiscount"},[a("p",{staticClass:"label"},[t._v("折扣：")]),a("AnimatedIngeter",{staticClass:"value",attrs:{value:t.DisCount}},[t._v("元")])],1),a("li",{staticClass:"list-group-item total summary__item"},[a("p",{staticClass:"label"},[t._v("總金額：")]),a("AnimatedIngeter",{staticClass:"value",attrs:{value:t.TotalPrice}},[t._v("元")])],1)]),t._t("button")],2)},T=[],I=(a("d81d"),a("13d5"),{name:"Summary",mixins:[S["a"]],data:function(){return{coupon:"",percent:100,isSearch:!1}},methods:{applycoupon:function(){var t=this;""!==this.coupon?(this.isSearch=!0,this.SearchCoupon(this.coupon).then((function(e){t.percent=e.data.percent,t.$emit("coupon",e.data.code),t.isSearch=!1,t.$toast.success("已套用優惠碼")})),this.coupon=""):this.$toast.error("請輸入優惠碼!")}},computed:{CartList:function(){return this.$store.cartList},OriginTotalPrice:function(){return this.CartList.map((function(t){return t.quantity*t.product.price})).reduce((function(t,e){return t+e}),0)*(this.percent/100)},Shipping:function(){return this.OriginTotalPrice>1e3?0:200},DisCount:function(){return this.OriginTotalPrice*((100-this.percent)/100)},TotalPrice:function(){return this.OriginTotalPrice+this.Shipping}}}),N=I,j=(a("3246"),Object(m["a"])(N,A,T,!1,null,"378b0d3c",null)),R=j.exports,H={name:"CheckoutPage",mixins:[S["a"]],components:{Detail:h,List:O,Summary:R},data:function(){return{isLoading:!1,AnimateClass:["animate__animated","animate__fast","animate__infinite"],AnimateRight:"animate__slideOutRight",coupon:""}},methods:{submitHandler:function(t){if(13!==t.keyCode){var e=Object(n["a"])({},this.$refs.detial.form);e.coupon=this.coupon||"";var a=this;this.isLoading=!0,this.CreateOrder(e).then((function(){a.isLoading=!1,a.$emit("nextStep")}))}},goProducts:function(){this.$router.push({name:"products"})},addCoupon:function(t){this.coupon=t}},computed:{isEmpty:function(){return 0===this.$store.cartList.length}}},J=H,M=(a("e0f9"),Object(m["a"])(J,s,i,!1,null,"61f575d2",null));e["default"]=M.exports},"72c4":function(t,e,a){},"7b83":function(t,e,a){"use strict";var s=a("f2f8"),i=a.n(s);i.a},a71b:function(t,e,a){"use strict";var s=a("ff16"),i=a.n(s);i.a},d198:function(t,e,a){},d58f:function(t,e,a){var s=a("1c0b"),i=a("7b0b"),n=a("44ad"),r=a("50c4"),o=function(t){return function(e,a,o,l){s(a);var c=i(e),u=n(c),d=r(c.length),m=t?d-1:0,p=t?-1:1;if(o<2)while(1){if(m in u){l=u[m],m+=p;break}if(m+=p,t?m<0:d<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:d>m;m+=p)m in u&&(l=a(l,u[m],m,c));return l}};t.exports={left:o(!1),right:o(!0)}},e0f9:function(t,e,a){"use strict";var s=a("72c4"),i=a.n(s);i.a},f2f8:function(t,e,a){},ff16:function(t,e,a){}}]);
//# sourceMappingURL=chunk-75ab4482.feba1382.js.map