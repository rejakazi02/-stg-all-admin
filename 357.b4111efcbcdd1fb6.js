"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[357],{2025:(O,h,i)=>{i.d(h,{j:()=>c});var g=i(4650),C=i(529),p=i(9039);let t=" https://api.omegaitsys.com/api/v1/institute/",c=(()=>{class r{constructor(n,a){this.http=n,this.tokenService=a}classPost(n){return this.http.post(t+"classes",n)}classtList(){return this.http.get(t+"classes")}classData(){return this.http.get(" https://api.omegaitsys.com/api/v1/all-classes")}deleteClassData(n){return this.http.delete(t+"classes/"+n)}sectionPost(n){return this.http.post(t+"sections",n)}sectionData(){return this.http.get(t+"sections")}sectionList(n){return this.http.get(t+"sections?class_id="+n)}SubSectData(n,a){return this.http.get(t+"sections?class_id="+a,n)}SubSectDat(n){return this.http.get(t+"sections?class_id="+n)}deleteSectionData(n,a){return this.http.delete(t+"sections/"+n+"?class_id="+a)}classRoomPost(n){return this.http.post(t+"rooms",n)}classRoomList(){return this.http.get(t+"rooms")}deleteSclassRoomData(n){return this.http.delete(t+"rooms/"+n)}subjectPost(n){return this.http.post(t+"subjects",n)}subjectList(){return this.http.get(t+"subjects")}subjectListbyClass(n,a){return this.http.get(t+"subjects?class_id="+a,n)}subjectListData(n){return this.http.get(t+"subjects?class_id="+n)}deleteSubjectData(n){return this.http.delete(t+"subjects/"+n)}teaSectionPost(n){return this.http.post(t+"section-sessions",n)}routinePost(n){return this.http.post(t+"class-routines",n)}classRoutinesList(){return this.http.get(t+"class-routines")}classRoutinesSearch(n,a,d){return this.http.get(t+"class-routines?class_id="+n+"&section_id="+a+"&weekday="+d)}getRoutineDataById(n){return this.http.get(t+"class-routines/"+n)}routineDataUpdate(n,a){return this.http.put(t+"class-routines/"+a,n)}deleteClassRoutineData(n){return this.http.delete(t+"class-routines/"+n)}examPost(n){return this.http.post(t+"exams",n)}examList(){return this.http.get(t+"exams")}getExamDataById(n){return this.http.get(t+"exams/"+n)}examDataUpdate(n,a){return this.http.put(t+"exams/"+a,n)}deleteExamData(n){return this.http.delete(t+"exams/"+n)}examRoutinePost(n){return this.http.post(t+"exam-routines",n)}examRoutinesList(){return this.http.get(t+"exam-routines")}examRoutinesSearch(n,a,d,u){return this.http.get(t+"exam-routines?class_id="+n+"&section_id="+a+"&exam_id="+d+"&subject_id="+u)}getExamRoutineDataById(n){return this.http.get(t+"exam-routines/"+n)}examRoutineDataUpdate(n,a){return this.http.put(t+"exam-routines/"+a,n)}deleteExamRoutineData(n){return this.http.delete(t+"exam-routines/"+n)}examResultPost(n){return this.http.post(t+"exam-marks",n)}examResultSearch(n,a,d,u){return this.http.get(t+"exam-marks?class_id="+n+"&section_id="+a+"&exam_id="+d+"&subject_id="+u)}getExamResultDataById(n){return this.http.get(t+"exam-marks/"+n)}examResultDataUpdate(n,a){return this.http.put(t+"exam-marks/"+a,n)}deleteExamResultData(n){return this.http.delete(t+"exam-marks/"+n)}admissionDataList(){return this.http.get(t+"admission-forms")}admissionDataSearch(n,a){return this.http.get(t+"admission-forms?class="+n+"&name="+a)}deleteAdmissiontData(n){return this.http.delete(t+"admission-forms/"+n)}IsLoggedIn(){return null!=localStorage.getItem("token")}}return r.\u0275fac=function(n){return new(n||r)(g.LFG(C.eN),g.LFG(p.B))},r.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5357:(O,h,i)=>{i.r(h),i.d(h,{AdmissionModule:()=>Z});var g=i(6895),C=i(5226),p=i.n(C),t=i(4650),M=i(2025),c=i(2554),r=i(4006),m=i(1561);function n(o,l){if(1&o&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.numeric," ")}}function a(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",15)(1,"div",21),t._uU(2),t.qZA(),t.TgZ(3,"div",21),t._uU(4),t.qZA(),t.TgZ(5,"div",21),t._uU(6),t.qZA(),t.TgZ(7,"div",21),t._uU(8),t.qZA(),t.TgZ(9,"div",21),t._uU(10),t.qZA(),t.TgZ(11,"div",21),t._uU(12),t.qZA(),t.TgZ(13,"div",21)(14,"button",22)(15,"span",23),t._uU(16," more_vert "),t.qZA()(),t.TgZ(17,"mat-menu",null,24)(19,"button",25),t.NdJ("click",function(){const x=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.confirmBox(x.uid))}),t.TgZ(20,"span",23),t._uU(21," delete"),t.qZA(),t.TgZ(22,"span"),t._uU(23,"Delete"),t.qZA()()()()()}if(2&o){const e=l.$implicit,s=t.MAs(18);t.xp6(2),t.Oqu(null==e?null:e.uid),t.xp6(2),t.Oqu(null==e?null:e.student_name),t.xp6(2),t.Oqu(null==e?null:e.class_id),t.xp6(2),t.Oqu(null==e?null:e.father_name),t.xp6(2),t.Oqu(null==e?null:e.student_phone),t.xp6(2),t.Oqu(null==e?null:e.admission_date),t.xp6(2),t.Q6J("matMenuTriggerFor",s)}}let d=(()=>{class o{constructor(e){this.classService=e}ngOnInit(){this.classData(),this.admissionDataList()}classData(){this.classService.classData().subscribe(e=>{this.classDatas=e})}getSection(e){this.classService.SubSectDat(e).subscribe(s=>{this.classSectionData=s,console.log("sec",this.classSectionData)}),this.classService.subjectListData(e).subscribe(s=>{this.subjectData=s})}search(e,s){this.classService.admissionDataSearch(e,s).subscribe(b=>{this.admiData=b,console.log("admiData",this.admiData)})}confirmBox(e){p().fire({title:"Are you sure want to remove?",text:"You will not be able to recover this file!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(s=>{s.value?(p().fire("Deleted!","Your imaginary file has been deleted.","success"),this.classService.deleteAdmissiontData(e).subscribe(b=>{this.admissionDataList()})):s.dismiss===p().DismissReason.cancel&&p().fire("Cancelled","Your imaginary file is safe :)","error")})}admissionDataList(){this.classService.admissionDataList().subscribe(e=>{this.admiData=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(M.j))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admission-list"]],decls:44,vars:2,consts:[[1,"table-main-area"],[1,"header-div"],[1,"add-btn-div"],[1,"search-main-div"],[1,"class-search-main-div"],["for",""],["cSelect","","id","inputState11",1,"searchSelect",3,"change"],["classsId","","select",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text",1,"searchSelect","nameFiled"],["nameId",""],["type","submit",3,"click"],[1,"table"],[1,"table-thead"],[1,"table-row"],[1,"table-heading"],[1,"tbody"],["class","table-row",4,"ngFor","ngForOf"],[1,"pagination-div"],[3,"value"],[1,"table-data"],["mat-button","","aria-label","Example icon-button with a menu",1,"action-Btn",3,"matMenuTriggerFor"],[1,"material-symbols-outlined"],["menu","matMenu"],["mat-menu-item","",1,"deleteBtn",3,"click"]],template:function(e,s){if(1&e){const b=t.EpF();t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h1"),t._uU(4,"Admission List"),t.qZA(),t._UZ(5,"div",2),t.qZA(),t.TgZ(6,"div",3)(7,"div",4)(8,"label",5),t._uU(9,"Class"),t.qZA(),t.TgZ(10,"select",6,7),t.NdJ("change",function(){t.CHM(b);const _=t.MAs(12);return t.KtG(s.getSection(_.value))}),t.TgZ(13,"option",8),t._uU(14,"Choose..."),t.qZA(),t.YNc(15,n,2,2,"option",9),t.qZA()(),t.TgZ(16,"div",4)(17,"label",5),t._uU(18,"Name"),t.qZA(),t._UZ(19,"input",10,11),t.qZA(),t.TgZ(21,"div",4)(22,"button",12),t.NdJ("click",function(){t.CHM(b);const _=t.MAs(11),T=t.MAs(20);return t.KtG(s.search(_.value,T.value))}),t._uU(23,"Search"),t.qZA()()(),t.TgZ(24,"div",13)(25,"div",14)(26,"div",15)(27,"div",16),t._uU(28," Id"),t.qZA(),t.TgZ(29,"div",16),t._uU(30," Student"),t.qZA(),t.TgZ(31,"div",16),t._uU(32," Class"),t.qZA(),t.TgZ(33,"div",16),t._uU(34,"Father"),t.qZA(),t.TgZ(35,"div",16),t._uU(36," Phone "),t.qZA(),t.TgZ(37,"div",16),t._uU(38," Admission Date"),t.qZA(),t.TgZ(39,"div",16),t._uU(40,"ACTION"),t.qZA()()(),t.TgZ(41,"div",17),t.YNc(42,a,24,7,"div",18),t.qZA()(),t._UZ(43,"div",19),t.qZA()()}2&e&&(t.xp6(15),t.Q6J("ngForOf",s.classDatas),t.xp6(27),t.Q6J("ngForOf",null==s.admiData||null==s.admiData.forms?null:s.admiData.forms.data))},dependencies:[g.sg,c.nqR,r.YN,r.Kr,m.VK,m.OP,m.p6],styles:[".add-btn-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500;box-shadow:0 4px 4px #00000040;display:flex;align-items:center;gap:5px}.add-btn-div[_ngcontent-%COMP%]   .AdddeBtnn[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500;box-shadow:0 4px 4px #00000040;display:flex;align-items:center;gap:5px;border:none}.table-main-area[_ngcontent-%COMP%]{background-color:#fff;padding:30px 20px;border-radius:5px;margin:30px 0;box-shadow:0 4px 4px #00000040}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]{background-color:#0f94c9;color:#fff}@media (min-width: 300px) and (max-width: 400px){.add-btn-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.add-btn-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500}.table-main-area[_ngcontent-%COMP%]{background-color:#fff;padding:30px 20px;border-radius:5px;margin:30px 0}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]{background-color:#0f94c9;color:#fff}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-heading[_ngcontent-%COMP%]{width:100%;font-weight:500;font-size:16px}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(112,111,110)}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]{width:100%}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#fff}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .action-Btn[_ngcontent-%COMP%]{font-size:16px;font-weight:500;padding:9px 33px;border-radius:5px}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .deleteBtn[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:10px}.table-main-area[_ngcontent-%COMP%]   .pagination-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-decoration:none}.button-atag[_ngcontent-%COMP%]{text-decoration:none}.deleteBtn[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:10px}}.add-btn-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.add-btn-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500}.add-btn-div[_ngcontent-%COMP%]   .AdddeBtnn[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500;box-shadow:0 4px 4px #00000040;display:flex;align-items:center;gap:5px;border:none;width:170px}.table-main-area[_ngcontent-%COMP%]{background-color:#fff;padding:30px 20px;border-radius:5px;margin:30px 0}.table-main-area[_ngcontent-%COMP%]   .header-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.table-main-area[_ngcontent-%COMP%]   .header-div[_ngcontent-%COMP%]   .add-btn-div[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:16px}.table-main-area[_ngcontent-%COMP%]   .header-div[_ngcontent-%COMP%]   .add-btn-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500}.table-main-area[_ngcontent-%COMP%]   .header-div[_ngcontent-%COMP%]   .add-btn-div[_ngcontent-%COMP%]   .AdddeBtnn[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:14px 20px;text-decoration:none;border-radius:5px;font-size:17px;font-weight:500;box-shadow:0 4px 4px #00000040;display:flex;align-items:center;gap:5px;border:none;width:170px}.table-main-area[_ngcontent-%COMP%]   .search-main-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:39px 0;gap:22px}.table-main-area[_ngcontent-%COMP%]   .search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px}.table-main-area[_ngcontent-%COMP%]   .search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:20px}.table-main-area[_ngcontent-%COMP%]   .search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:216px;height:44px;background-color:#3c4b64;color:#fff;padding:0 10px;font-size:22px;border-radius:6px;border:none}.table-main-area[_ngcontent-%COMP%]   .search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ffae01;width:116px;height:44px;padding:0 10px;font-size:22px;border-radius:6px;border:none;margin-top:30px;color:#fff}.table-main-area[_ngcontent-%COMP%]   .search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3c4b64;color:#fff}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]{background-color:#3c4b64;color:#fff;text-align:center}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-heading[_ngcontent-%COMP%]{width:100%;font-weight:500;font-size:16px}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]{text-align:center}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(112,111,110)}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]{width:100%}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#fff}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .action-Btn[_ngcontent-%COMP%]{font-size:16px;font-weight:500;padding:9px 33px;border-radius:5px}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .deleteBtn[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:10px}.table-main-area[_ngcontent-%COMP%]   .pagination-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-decoration:none}.button-atag[_ngcontent-%COMP%]{text-decoration:none}.deleteBtn[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:10px}.no-Data-img[_ngcontent-%COMP%]{width:40%;padding:8% 0;margin:0 30%}@media (min-width: 300px) and (max-width: 400px){.table-main-area[_ngcontent-%COMP%]{background-color:#fff;padding:30px 20px;border-radius:5px;margin:30px 0}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{overflow-x:scroll;width:100%}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]{background-color:#0f94c9;color:#fff;width:200vw;text-align:center}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-thead[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-heading[_ngcontent-%COMP%]{width:100%;font-weight:500;font-size:16px}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]{width:203vw;text-align:center}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(112,111,110);width:100%}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]{width:100%}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#fff}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .action-Btn[_ngcontent-%COMP%]{font-size:16px;font-weight:500;padding:9px 33px;border-radius:5px}.table-main-area[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .deleteBtn[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:10px}.table-main-area[_ngcontent-%COMP%]   .pagination-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-decoration:none}.no-Data-img[_ngcontent-%COMP%]{width:61%;padding:41% 0;margin:0 23%}}.search-main-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:39px 0;gap:22px}.search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px}.search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:20px}.search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:216px;height:36px!important;background-color:#3c4b64;color:#fff;padding:0 10px;font-size:18px!important;border-radius:6px;border:none}.search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ffae01;width:116px;height:36px!important;padding:0 10px;font-size:18px!important;border-radius:6px;border:none;margin-top:30px;color:#fff}.search-main-div[_ngcontent-%COMP%]   .class-search-main-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3c4b64;color:#fff}.searchSelect[_ngcontent-%COMP%]{width:125px!important;height:36px;background-color:#3c4b64;color:#fff;padding:0 10px;font-size:18px;border-radius:6px;border:none}.nameFiled[_ngcontent-%COMP%]{width:190px!important}"]}),o})();var u=i(9299);const P=[{path:"",data:{title:"Admission "},children:[{path:"",pathMatch:"full",redirectTo:"admissionList"},{path:"admissionList",component:d,data:{title:"Admission List"}}]}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(P),u.Bz]}),o})();var v=i(7642),y=i(4381),w=i(7392),A=i(4385),D=i(7185);let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,f,y.O,v.E,c.dTQ,c.ejP,c.zE6,c.hJ1,r.u5,r.UX,c.ejP,c.hJ1,c.ga2,c.kWm,c.m81,c.Xo8,w.Ps,m.Tx,A.LD,D.Rh]}),o})()}}]);