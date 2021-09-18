(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"30Qh":function(t,s,e){"use strict";e.r(s);var o={components:{courseGroupForm:e("8o/A").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},r=e("KHd+"),a=Object(r.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("academic.edit_course_group")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/configuration/academic/course/group")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("academic.course_group")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("course-group-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);s.default=a.exports},"8o/A":function(t,s,e){"use strict";var o={components:{},data:function(){return{courseGroupForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,s=this.$loading.show();this.courseGroupForm.post("/api/academic/course/group").then((function(e){toastr.success(e.message),t.$emit("completed"),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,s=this.$loading.show();axios.get("/api/academic/course/group/"+this.id).then((function(e){t.courseGroupForm.name=e.name,t.courseGroupForm.description=e.description,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e),t.$router.push("/configuration/academic/course/group")}))},update:function(){var t=this,s=this.$loading.show();this.courseGroupForm.patch("/api/academic/course/group/"+this.id).then((function(e){toastr.success(e.message),s.hide(),t.$router.push("/configuration/academic/course/group")})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}}},r=e("KHd+"),a=Object(r.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{on:{submit:function(s){return s.preventDefault(),t.proceed(s)},keydown:function(s){return t.courseGroupForm.errors.clear(s.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.course_group_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.courseGroupForm.name,expression:"courseGroupForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("academic.course_group_name")},domProps:{value:t.courseGroupForm.name},on:{input:function(s){s.target.composing||t.$set(t.courseGroupForm,"name",s.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.courseGroupForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.course_group_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.courseGroupForm.description,expression:"courseGroupForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("academic.course_group_description")},domProps:{value:t.courseGroupForm.description},on:{input:function(s){s.target.composing||t.$set(t.courseGroupForm,"description",s.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.courseGroupForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/academic/course/group"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);s.a=a.exports}}]);
//# sourceMappingURL=edit.js.map?id=1afff7fd7e45985226da