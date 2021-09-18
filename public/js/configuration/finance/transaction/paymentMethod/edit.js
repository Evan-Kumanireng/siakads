(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"/XWn":function(e,t,s){"use strict";var n={components:{},data:function(){return{paymentMethodForm:new Form({name:"",description:"",requires_instrument_number:!1,requires_instrument_date:!1,requires_instrument_clearing_date:!1,requires_instrument_bank_detail:!1,requires_reference_number:!1})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.paymentMethodForm.post("/api/finance/payment/method").then((function(s){toastr.success(s.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/finance/payment/method/"+this.id).then((function(s){e.paymentMethodForm.name=s.name,e.paymentMethodForm.description=s.description,e.paymentMethodForm.requires_instrument_number=s.options.requires_instrument_number,e.paymentMethodForm.requires_instrument_date=s.options.requires_instrument_date,e.paymentMethodForm.requires_instrument_clearing_date=s.options.requires_instrument_clearing_date,e.paymentMethodForm.requires_instrument_bank_detail=s.options.requires_instrument_bank_detail,e.paymentMethodForm.requires_reference_number=s.options.requires_reference_number,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/configuration/finance/payment/method")}))},update:function(){var e=this,t=this.$loading.show();this.paymentMethodForm.patch("/api/finance/payment/method/"+this.id).then((function(s){toastr.success(s.message),t.hide(),e.$router.push("/configuration/finance/payment/method")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}},r=s("KHd+"),a=Object(r.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.paymentMethodForm.errors.clear(t.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.payment_method_name")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.paymentMethodForm.name,expression:"paymentMethodForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("finance.payment_method_name")},domProps:{value:e.paymentMethodForm.name},on:{input:function(t){t.target.composing||e.$set(e.paymentMethodForm,"name",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.paymentMethodForm,"prop-name":"name"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.payment_method_description")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.paymentMethodForm.description,expression:"paymentMethodForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("finance.payment_method_description")},domProps:{value:e.paymentMethodForm.description},on:{input:function(t){t.target.composing||e.$set(e.paymentMethodForm,"description",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.paymentMethodForm,"prop-name":"description"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("finance.requires_instrument_number")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.paymentMethodForm.requires_instrument_number,callback:function(t){e.$set(e.paymentMethodForm,"requires_instrument_number",t)},expression:"paymentMethodForm.requires_instrument_number"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("finance.requires_instrument_date")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.paymentMethodForm.requires_instrument_date,callback:function(t){e.$set(e.paymentMethodForm,"requires_instrument_date",t)},expression:"paymentMethodForm.requires_instrument_date"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("finance.requires_instrument_bank_detail")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.paymentMethodForm.requires_instrument_bank_detail,callback:function(t){e.$set(e.paymentMethodForm,"requires_instrument_bank_detail",t)},expression:"paymentMethodForm.requires_instrument_bank_detail"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("finance.requires_instrument_clearing_date")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.paymentMethodForm.requires_instrument_clearing_date,callback:function(t){e.$set(e.paymentMethodForm,"requires_instrument_clearing_date",t)},expression:"paymentMethodForm.requires_instrument_clearing_date"}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("div",[e._v(e._s(e.trans("finance.requires_reference_number")))]),e._v(" "),s("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.paymentMethodForm.requires_reference_number,callback:function(t){e.$set(e.paymentMethodForm,"requires_reference_number",t)},expression:"paymentMethodForm.requires_reference_number"}})],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[e.id?e._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/finance/payment/method"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?s("span",[e._v(e._s(e.trans("general.update")))]):s("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=a.exports},"3NzM":function(e,t,s){"use strict";s.r(t);var n={components:{paymentMethodForm:s("/XWn").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},r=s("KHd+"),a=Object(r.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("finance.edit_payment_method")))])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/configuration/finance/payment/method")}}},[s("i",{staticClass:"fas fa-list"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("finance.payment_method")))])])])])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("payment-method-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);
//# sourceMappingURL=edit.js.map?id=555c84bffb2d409651e0