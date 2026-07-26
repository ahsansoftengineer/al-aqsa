import {
  CtrlDDAPI,
  CtrlDate,
  CtrlOptCheckbox,
  CtrlOptRadio,
  CtrlTxt,
  FormBasic,
  SharedModule,
  TblFilterTemplate
} from "./chunk-ZXLISP2X.js";
import {
  TblColTemplate
} from "./chunk-SLABOE5U.js";
import "./chunk-NUMUS44L.js";
import {
  RoutezFeatureModule
} from "./chunk-RTIPJY7N.js";
import "./chunk-GUYV56QE.js";
import "./chunk-76HBSMOK.js";
import "./chunk-MDVOS3SG.js";
import {
  BaseClassSrvc,
  BaseClassTemplate
} from "./chunk-4TLJ3PRD.js";
import {
  FormBase,
  TMSubmit,
  TM_List,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-EA5SXDL7.js";
import "./chunk-WM4BZMUA.js";
import "./chunk-4IXXCYRN.js";
import "./chunk-VQZP2W2M.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  RouterModule,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-IHXJMWXB.js";

// src/app/feature/userz/admin/admin.ts
var Admin = class _Admin extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzAdmin
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Admin_BaseFactory;
    return function Admin_Factory(__ngFactoryType__) {
      return (\u0275Admin_BaseFactory || (\u0275Admin_BaseFactory = \u0275\u0275getInheritedFactory(_Admin)))(__ngFactoryType__ || _Admin);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Admin, selectors: [["aam-admin"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Admin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Admin, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-admin", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Admin, { className: "Admin", filePath: "app/feature/userz/admin/admin.ts", lineNumber: 18 });
})();

// src/app/feature/userz/z-form-userz/userz.form.ts
function FormBaseUserz(that, d = {}) {
  return __spreadProps(__spreadValues({}, FormBase(that, d)), {
    gender: [d?.gender || "", that._vs._val("Gender")],
    phone: [d?.phone || "", that._vs._val("", { minChar: 11, maxChar: 11, num: 1 })],
    email: [d?.email || "", that._vs._val("Email", { maxChar: 50, email: 1, specialChar: 0 })],
    dob: [d?.dob || ""],
    urlImg: [d?.urlImg || ""],
    isVerifiedEmail: [d?.isVerifiedEmail || ""],
    isVerifiedPhone: [d?.isVerifiedPhone || ""],
    agreeToTermsCondition: [d?.agreeToTermsCondition || ""],
    agreeToPrivacyPolicy: [d?.agreeToPrivacyPolicy || ""]
  });
}

// src/app/feature/userz/admin/admin-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBaseUserz(that, d)));
}

// src/app/feature/userz/z-form-userz/form-userz.ts
var _c0 = ["*"];
var _c1 = ["studentSpecific", ""];
var _c2 = () => ({ field: "email", lbl: "Email" });
var _c3 = () => ({ field: "phone", lbl: "Phone", req: false });
var _c4 = () => ({ field: "dob", lbl: "Date of Birth", req: false });
var _c5 = () => ({ field: "gender", lbl: "Gender" });
var _c6 = () => ({ field: "isVerifiedEmail", lbl: "Email Verified", req: false });
var _c7 = () => ({ field: "isVerifiedPhone", lbl: "Phone Verified", req: false });
var _c8 = () => ({ field: "agreeToTermsCondition", lbl: "Agree Term Condition", req: false });
var _c9 = () => ({ field: "agreeToPrivacyPolicy", lbl: "Agree Privacy Policy", req: false });
var FormUserz = class _FormUserz extends BaseClassTemplate {
  ngOnInit() {
  }
  fileConfig = {
    field: "urlImg",
    lbl: "Profile Image"
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormUserz_BaseFactory;
    return function FormUserz_Factory(__ngFactoryType__) {
      return (\u0275FormUserz_BaseFactory || (\u0275FormUserz_BaseFactory = \u0275\u0275getInheritedFactory(_FormUserz)))(__ngFactoryType__ || _FormUserz);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormUserz, selectors: [["form-userz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c0, decls: 12, vars: 17, consts: [["moreInfo", ""], [3, "ctrl"], ["startView", "multi-year", 3, "ctrl"], [3, "ctrl", "listz"], [1, "col-12"]], template: function FormUserz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275projection(2, 0, _c1);
      \u0275\u0275element(3, "ctrl-txt", 1)(4, "ctrl-txt", 1)(5, "ctrl-date", 2)(6, "ctrl-opt-radio", 3)(7, "div", 4)(8, "ctrl-opt-checkbox", 1)(9, "ctrl-opt-checkbox", 1)(10, "ctrl-opt-checkbox", 1)(11, "ctrl-opt-checkbox", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(9, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(10, _c3));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(11, _c4));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(12, _c5))("listz", ctx._ss.GENDER);
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(13, _c6));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(14, _c7));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(15, _c8));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(16, _c9));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlOptRadio, CtrlOptCheckbox, CtrlDate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormUserz, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "form-userz", template: `<form-basic>\r
  <ng-container moreInfo>\r
    <ng-content studentSpecific></ng-content>\r
    <ctrl-txt [ctrl]="{ field: 'email', lbl: 'Email' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'phone', lbl: 'Phone', req: false }"></ctrl-txt>\r
    <ctrl-date [ctrl]="{ field: 'dob', lbl: 'Date of Birth', req: false }" startView="multi-year"></ctrl-date>\r
    <ctrl-opt-radio [ctrl]="{ field: 'gender', lbl: 'Gender' }" [listz]="_ss.GENDER"></ctrl-opt-radio>\r
    <div class="col-12"></div>\r
    <ctrl-opt-checkbox [ctrl]="{ field: 'isVerifiedEmail', lbl: 'Email Verified', req: false }"></ctrl-opt-checkbox>\r
    <ctrl-opt-checkbox [ctrl]="{ field: 'isVerifiedPhone', lbl: 'Phone Verified', req: false }"></ctrl-opt-checkbox>\r
    <ctrl-opt-checkbox [ctrl]="{ field: 'agreeToTermsCondition', lbl: 'Agree Term Condition', req: false }"></ctrl-opt-checkbox>\r
    <ctrl-opt-checkbox [ctrl]="{ field: 'agreeToPrivacyPolicy', lbl: 'Agree Privacy Policy', req: false }"></ctrl-opt-checkbox>\r
    <!-- <div class="col-12"></div>\r
    <ctrl-file-uploader [fileConfig]="fileConfig" [ctrl]="{ field: 'urlImg', lbl: 'Image', req: false }"></ctrl-file-uploader> -->\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormUserz, { className: "FormUserz", filePath: "app/feature/userz/z-form-userz/form-userz.ts", lineNumber: 14 });
})();

// src/app/feature/userz/admin/admin-add/admin-add.ts
var AdminAdd = class _AdminAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzAdmin
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AdminAdd_BaseFactory;
    return function AdminAdd_Factory(__ngFactoryType__) {
      return (\u0275AdminAdd_BaseFactory || (\u0275AdminAdd_BaseFactory = \u0275\u0275getInheritedFactory(_AdminAdd)))(__ngFactoryType__ || _AdminAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAdd, selectors: [["aam-admin-add"]], hostAttrs: [2, "width", "100% !important"], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function AdminAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-userz");
    }
  }, dependencies: [FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "width: 100% !important" }, selector: "aam-admin-add", template: "<form-userz></form-userz>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAdd, { className: "AdminAdd", filePath: "app/feature/userz/admin/admin-add/admin-add.ts", lineNumber: 17 });
})();

// src/app/feature/userz/student/student-filter/student-filter.ts
var _c02 = (a0) => ({ field: "gender", lbl: "Gender", group: a0 });
var _c12 = (a0) => ({ field: "email", lbl: "Email", req: false, group: a0 });
var _c22 = (a0) => ({ field: "phone", lbl: "Phone", req: false, group: a0 });
var StudentFilter = class _StudentFilter extends BaseClassSrvc {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StudentFilter_BaseFactory;
    return function StudentFilter_Factory(__ngFactoryType__) {
      return (\u0275StudentFilter_BaseFactory || (\u0275StudentFilter_BaseFactory = \u0275\u0275getInheritedFactory(_StudentFilter)))(__ngFactoryType__ || _StudentFilter);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentFilter, selectors: [["aam-student-filter"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 13, consts: [[3, "filterSystemShow", "filterDefaultShow", "filterAdvanceShow"], ["filterAdvance", ""], [1, "col-12", 3, "ctrl", "listz"], [1, "col-12", 3, "ctrl"]], template: function StudentFilter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "tbl-filter-template", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275element(3, "ctrl-opt-radio", 2)(4, "ctrl-txt", 3)(5, "ctrl-txt", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("filterSystemShow", true)("filterDefaultShow", true)("filterAdvanceShow", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction1(7, _c02, ctx._template.lb.filterAdvance))("listz", ctx._ss.GENDER);
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction1(9, _c12, ctx._template.lb.filterAdvance));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction1(11, _c22, ctx._template.lb.filterAdvance));
    }
  }, dependencies: [CtrlTxt, CtrlOptRadio, TblFilterTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentFilter, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-filter", template: `<tbl-filter-template [filterSystemShow]="true" [filterDefaultShow]="true" [filterAdvanceShow]="true">\r
  <ng-container filterAdvance>\r
    <div>\r
      <ctrl-opt-radio [ctrl]="{ field: 'gender', lbl: 'Gender', group: _template.lb.filterAdvance }" [listz]="_ss.GENDER" class="col-12" ></ctrl-opt-radio>\r
      <ctrl-txt [ctrl]="{ field: 'email', lbl: 'Email',  req:false , group: _template.lb.filterAdvance }" class="col-12"></ctrl-txt>\r
      <ctrl-txt [ctrl]="{ field: 'phone', lbl: 'Phone',  req:false , group: _template.lb.filterAdvance }" class="col-12"></ctrl-txt>\r
    </div>\r
  </ng-container>\r
</tbl-filter-template>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentFilter, { className: "StudentFilter", filePath: "app/feature/userz/student/student-filter/student-filter.ts", lineNumber: 12 });
})();

// src/app/feature/userz/student/student.ts
function Student_ng_template_0_Template(rf, ctx) {
}
var Student = class _Student extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzStudent
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
    this._template.lb.filterAdvance = this._fb.group({
      gender: [null],
      email: [null],
      phone: [null]
    });
    this._sideNav.showRight(StudentFilter);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Student_BaseFactory;
    return function Student_Factory(__ngFactoryType__) {
      return (\u0275Student_BaseFactory || (\u0275Student_BaseFactory = \u0275\u0275getInheritedFactory(_Student)))(__ngFactoryType__ || _Student);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Student, selectors: [["aam-student"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["secondaryTpl", ""], [3, "lb", "secondaryTemplate"]], template: function Student_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Student_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(2, "tbl-col-template", 1);
    }
    if (rf & 2) {
      const secondaryTpl_r1 = \u0275\u0275reference(1);
      \u0275\u0275advance(2);
      \u0275\u0275property("lb", ctx._template?.lb)("secondaryTemplate", secondaryTpl_r1);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Student, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student", template: '<ng-template #secondaryTpl let-row="row">\r\n  <!-- {{ row.name }} -->\r\n</ng-template>\r\n\r\n<tbl-col-template [lb]="_template?.lb" [secondaryTemplate]="secondaryTpl"></tbl-col-template>\r\n\r\n\r\n\r\n<!--\r\n<ng-template #secondaryTpl let-item>\r\n  <app-my-detail [item]="item"></app-my-detail>\r\n</ng-template>\r\n-->\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Student, { className: "Student", filePath: "app/feature/userz/student/student.ts", lineNumber: 15 });
})();

// src/app/feature/userz/student/student-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBaseUserz(that, d)), {
    userzTeacherId: [d?.userzTeacherId || "", that._vs._val("Teacher")],
    userzParentId: [d?.userzParentId || "", that._vs._val("Parent")]
  }));
}

// src/app/feature/userz/student/student-add/student-add.ts
var _c03 = () => ({ field: "userzTeacherId", lbl: "Teacher" });
var _c13 = () => ({ pageSize: 30 });
var _c23 = (a0, a1, a2) => ({ srvc: a0, cntrl: a1, body: a2 });
var _c32 = () => ({ field: "userzParentId", lbl: "Parent" });
var _c42 = (a0, a1) => ({ srvc: a0, cntrl: a1 });
var StudentAdd = class _StudentAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm2(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzStudent
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StudentAdd_BaseFactory;
    return function StudentAdd_Factory(__ngFactoryType__) {
      return (\u0275StudentAdd_BaseFactory || (\u0275StudentAdd_BaseFactory = \u0275\u0275getInheritedFactory(_StudentAdd)))(__ngFactoryType__ || _StudentAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentAdd, selectors: [["aam-student-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 14, consts: [["studentSpecific", ""], [3, "ctrl", "req"]], template: function StudentAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-userz");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-api", 1)(3, "ctrl-dd-api", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(4, _c03))("req", \u0275\u0275pureFunction3(6, _c23, ctx.URL_SRVC.Userz, ctx.URL_CONTRL.Userz.UserzTeacher, \u0275\u0275pureFunction0(5, _c13)));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(10, _c32))("req", \u0275\u0275pureFunction2(11, _c42, ctx.URL_SRVC.Userz, ctx.URL_CONTRL.Userz.UserzParent));
    }
  }, dependencies: [CtrlDDAPI, FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-add", template: `<form-userz>\r
  <ng-container studentSpecific >\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'userzTeacherId', lbl: 'Teacher' }"\r
      [req]="{\r
        srvc: URL_SRVC.Userz,\r
        cntrl: URL_CONTRL.Userz.UserzTeacher,\r
        body: { pageSize : 30 }\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'userzParentId', lbl: 'Parent' }"\r
      [req]="{\r
        srvc: URL_SRVC.Userz,\r
        cntrl: URL_CONTRL.Userz.UserzParent,\r
      }">\r
    </ctrl-dd-api>\r
  </ng-container>\r
</form-userz>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentAdd, { className: "StudentAdd", filePath: "app/feature/userz/student/student-add/student-add.ts", lineNumber: 17 });
})();

// src/app/feature/userz/teacher/teacher-filter/teacher-filter.ts
var _c04 = (a0) => ({ field: "gender", lbl: "Gender", group: a0 });
var _c14 = (a0) => ({ field: "email", lbl: "Email", req: false, group: a0 });
var TeacherFilter = class _TeacherFilter extends BaseClassSrvc {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TeacherFilter_BaseFactory;
    return function TeacherFilter_Factory(__ngFactoryType__) {
      return (\u0275TeacherFilter_BaseFactory || (\u0275TeacherFilter_BaseFactory = \u0275\u0275getInheritedFactory(_TeacherFilter)))(__ngFactoryType__ || _TeacherFilter);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherFilter, selectors: [["aam-teacher-filter"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 10, consts: [[3, "filterSystemShow", "filterDefaultShow", "filterAdvanceShow"], ["filterAdvance", ""], [1, "col-12", 3, "ctrl", "listz"], [1, "col-12", 3, "ctrl"]], template: function TeacherFilter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "tbl-filter-template", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275element(3, "ctrl-opt-radio", 2)(4, "ctrl-txt", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("filterSystemShow", true)("filterDefaultShow", true)("filterAdvanceShow", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction1(6, _c04, ctx._template.lb.filterAdvance))("listz", ctx._ss.GENDER);
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction1(8, _c14, ctx._template.lb.filterAdvance));
    }
  }, dependencies: [CtrlTxt, CtrlOptRadio, TblFilterTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherFilter, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-teacher-filter", template: `<tbl-filter-template [filterSystemShow]="true" [filterDefaultShow]="true" [filterAdvanceShow]="true">\r
  <ng-container filterAdvance>\r
    <div>\r
      <ctrl-opt-radio [ctrl]="{ field: 'gender', lbl: 'Gender', group: _template.lb.filterAdvance }" [listz]="_ss.GENDER" class="col-12" ></ctrl-opt-radio>\r
      <ctrl-txt [ctrl]="{ field: 'email', lbl: 'Email',  req:false , group: _template.lb.filterAdvance }" class="col-12"></ctrl-txt>\r
      <!-- <ctrl-txt [ctrl]="{ field: 'phone', lbl: 'Phone',  req:false , group: _template.lb.filterAdvance }" class="col-12"></ctrl-txt> -->\r
    </div>\r
  </ng-container>\r
</tbl-filter-template>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherFilter, { className: "TeacherFilter", filePath: "app/feature/userz/teacher/teacher-filter/teacher-filter.ts", lineNumber: 12 });
})();

// src/app/feature/userz/teacher/teacher.ts
var Teacher = class _Teacher extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzTeacher
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
    this._template.lb.filterAdvance = this._fb.group({
      gender: [null],
      email: [null],
      phone: [null]
    });
    this._sideNav.showRight(TeacherFilter);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Teacher_BaseFactory;
    return function Teacher_Factory(__ngFactoryType__) {
      return (\u0275Teacher_BaseFactory || (\u0275Teacher_BaseFactory = \u0275\u0275getInheritedFactory(_Teacher)))(__ngFactoryType__ || _Teacher);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Teacher, selectors: [["aam-teacher"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Teacher_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Teacher, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-teacher", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Teacher, { className: "Teacher", filePath: "app/feature/userz/teacher/teacher.ts", lineNumber: 17 });
})();

// src/app/feature/userz/teacher/teacher-add/teacher-add.ts
var TeacherAdd = class _TeacherAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzTeacher
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TeacherAdd_BaseFactory;
    return function TeacherAdd_Factory(__ngFactoryType__) {
      return (\u0275TeacherAdd_BaseFactory || (\u0275TeacherAdd_BaseFactory = \u0275\u0275getInheritedFactory(_TeacherAdd)))(__ngFactoryType__ || _TeacherAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherAdd, selectors: [["aam-teacher-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function TeacherAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-userz");
    }
  }, dependencies: [FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-teacher-add", template: "<form-userz></form-userz>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherAdd, { className: "TeacherAdd", filePath: "app/feature/userz/teacher/teacher-add/teacher-add.ts", lineNumber: 16 });
})();

// src/app/feature/userz/parent/parents.ts
var Parent = class _Parent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzParent
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Parent_BaseFactory;
    return function Parent_Factory(__ngFactoryType__) {
      return (\u0275Parent_BaseFactory || (\u0275Parent_BaseFactory = \u0275\u0275getInheritedFactory(_Parent)))(__ngFactoryType__ || _Parent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Parent, selectors: [["aam-parents"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Parent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Parent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-parents", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Parent, { className: "Parent", filePath: "app/feature/userz/parent/parents.ts", lineNumber: 15 });
})();

// src/app/feature/userz/parent/parent-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBaseUserz(that, d)));
}

// src/app/feature/userz/parent/parent-add/parents-add.ts
var ParentAdd = class _ParentAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm3(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzParent
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ParentAdd_BaseFactory;
    return function ParentAdd_Factory(__ngFactoryType__) {
      return (\u0275ParentAdd_BaseFactory || (\u0275ParentAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ParentAdd)))(__ngFactoryType__ || _ParentAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentAdd, selectors: [["aam-parents-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function ParentAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-userz");
    }
  }, dependencies: [FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-parents-add", template: "<form-userz></form-userz>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentAdd, { className: "ParentAdd", filePath: "app/feature/userz/parent/parent-add/parents-add.ts", lineNumber: 16 });
})();

// src/app/feature/userz/userz-routing.module.ts
var Routez = new RoutezFeatureModule(["User"], "feature/user").feature(Admin, AdminAdd, "admin", "Admin").feature(Teacher, TeacherAdd, "teacher", "Teacher").feature(Parent, ParentAdd, "parent", "Parent").feature(Student, StudentAdd, "student", "Student Profile").build();

// src/app/feature/userz/userz.module.ts
var UserzModule = class _UserzModule {
  static \u0275fac = function UserzModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserzModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UserzModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(Routez), SharedModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserzModule, [{
    type: NgModule,
    args: [{
      declarations: [
        FormUserz,
        AdminAdd,
        Admin,
        Student,
        StudentAdd,
        StudentFilter,
        Teacher,
        TeacherAdd,
        TeacherFilter,
        Parent,
        ParentAdd
      ],
      imports: [RouterModule.forChild(Routez), SharedModule]
    }]
  }], null, null);
})();
export {
  UserzModule
};
//# sourceMappingURL=chunk-CT37OE3M.js.map
