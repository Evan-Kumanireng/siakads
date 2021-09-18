(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{"1s47":function(t,e,r){"use strict";r.r(e);var s={data:function(){return{student_record:{},uuid:this.$route.params.uuid,record_id:this.$route.params.record_id,transfer_certificate_formats:[],transfer_certificate:{},transferCertificateForm:new Form({transfer_certificate_format:"",date_of_application:"",date_of_issue:"",number:"",book_number:"",prefix:"",variables:[],memo:""},!1)}},mounted:function(){helper.hasPermission("terminate-student")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/student/"+this.uuid+"/transfer-certificate/"+this.record_id).then((function(r){if(t.student_record=r.student_record,t.transfer_certificate_formats=r.transfer_certificate_formats,t.transferCertificateForm.prefix=helper.getConfig("transfer_certificate_prefix"),t.transfer_certificate=r.student_record.transfer_certificate,t.transfer_certificate){t.transferCertificateForm.date_of_application=t.transfer_certificate.date_of_application,t.transferCertificateForm.date_of_issue=t.transfer_certificate.date_of_issue,t.transferCertificateForm.prefix=t.transfer_certificate.prefix,t.transferCertificateForm.number=t.transfer_certificate.number,t.transferCertificateForm.book_number=t.transfer_certificate.options.hasOwnProperty("book_number")?t.transfer_certificate.options.book_number:"",t.transferCertificateForm.transfer_certificate_format=t.transfer_certificate.format;var s=t.transfer_certificate.format,i=t.transfer_certificate_formats.find((function(t){return t.id==s}));t.selected_transfer_certificate_format=i||null,t.transferCertificateForm.variables=[],t.transferCertificateForm.variables=t.transfer_certificate.options.transfer_certificate}e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getStudentName:function(t){return helper.getStudentName(t)},getAdmissionNumber:function(t){return helper.getAdmissionNumber(t.admission)},print:function(){var t=this.$loading.show();axios.post("/api/student/"+this.uuid+"/transfer-certificate/"+this.record_id+"/print").then((function(e){var r=window.open("/print");t.hide(),r.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},computed:{getTransferCertificateNumber:function(){return helper.getTransferCertificateNumber(this.transfer_certificate)},getTransferCertificateBookNumber:function(){return this.transferCertificateForm.book_number}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}}},i=r("KHd+"),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.view_transfer_certificate"))+"\n                        "),r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/student/termination")}}},[r("i",{staticClass:"fas fa-list"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("student.termination")))])])])])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body p-20"},[t.student_record.id?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("student.name"))+": "),r("strong",[t._v(t._s(t.getStudentName(t.student_record.student)))])])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("student.admission_number"))+": "),r("strong",[t._v(t._s(t.getAdmissionNumber(t.student_record)))])])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("academic.batch"))+": "),r("strong",[t._v(t._s(t.student_record.batch.course.name+" "+t.student_record.batch.name))])])])]):t._e(),t._v(" "),t.transfer_certificate?[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("academic.transfer_certificate_format"))+": "),r("strong",[t._v(t._s(t.transferCertificateForm.transfer_certificate_format))])])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("student.transfer_certificate_number"))+": "),r("strong",[t._v(t._s(t.getTransferCertificateNumber))])])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("student.transfer_certificate_book_number"))+": "),r("strong",[t._v(t._s(t.getTransferCertificateBookNumber))])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("student.date_of_application"))+": "),r("strong",[t._v(t._s(t._f("moment")(t.transferCertificateForm.date_of_application)))])])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("p",[t._v(t._s(t.trans("student.date_of_issue"))+": "),r("strong",[t._v(t._s(t._f("moment")(t.transferCertificateForm.date_of_issue)))])])])]),t._v(" "),r("div",{staticClass:"row"},[t._l(t.transferCertificateForm.variables,(function(e){return r("div",{key:e.name,staticClass:"col-12"},[r("p",[t._v(t._s(t.trans("student.tc_props."+e.name))+": "),r("strong",[t._v(t._s(e.value))])])])})),t._v(" "),r("div",{staticClass:"col-12"},[r("p",[t._v(t._s(t.trans("student.transfer_certificate_memo"))+": "),r("strong",[t._v(t._s(t.transferCertificateForm.memo))])])])],2)]:[r("p",{staticClass:"alert alert-danger"},[t._v(t._s(t.trans("student.no_tc_prepared")))])],t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-right"},[r("router-link",{staticClass:"btn btn-info waves-effect waves-light",attrs:{to:"/student/termination/"+t.uuid+"/"+t.record_id+"/edit"}},[t._v(t._s(t.trans("general.edit")))]),t._v(" "),r("button",{staticClass:"btn btn-success waves-effect waves-light",attrs:{type:"button"},on:{click:t.print}},[t._v(t._s(t.trans("general.print")))])],1)])],2)])])])}),[],!1,null,null,null);e.default=a.exports}}]);
//# sourceMappingURL=view.js.map?id=21754ffc6a4b96499853