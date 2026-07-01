import {
  CtrlDDStatic,
  CtrlDate,
  CtrlFileUploader,
  CtrlOptCheckbox,
  CtrlOptRadio,
  CtrlTxt,
  FormBasic,
  SharedModule,
  TblColTemplate
} from "./chunk-JQYBJK2E.js";
import "./chunk-3FESV426.js";
import "./chunk-IA7JGOYU.js";
import {
  RoutezFeatureModule
} from "./chunk-SZA6OBKV.js";
import {
  BaseClassTemplate,
  FSB,
  FormBase,
  LB,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-R6H5ONSM.js";
import "./chunk-53M6QTZO.js";
import {
  ActivatedRoute,
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
  ɵɵdirectiveInject,
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
  ɵɵpureFunction1
} from "./chunk-PRTOJSNJ.js";

// src/app/feature/userz/admin/admin.component.ts
var AdminComponent = class _AdminComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new LB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzAdmin
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AdminComponent_BaseFactory;
    return function AdminComponent_Factory(__ngFactoryType__) {
      return (\u0275AdminComponent_BaseFactory || (\u0275AdminComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminComponent)))(__ngFactoryType__ || _AdminComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["aam-admin"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-admin", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app/feature/userz/admin/admin.component.ts", lineNumber: 18 });
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
var _c10 = () => ({ field: "urlImg", lbl: "Image", req: false });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormUserz, selectors: [["form-userz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c0, decls: 14, vars: 20, consts: [["moreInfo", ""], [3, "ctrl"], ["startView", "multi-year", 3, "ctrl"], [3, "ctrl", "listz"], [1, "col-12"], [3, "fileConfig", "ctrl"]], template: function FormUserz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275projection(2, 0, _c1);
      \u0275\u0275element(3, "ctrl-txt", 1)(4, "ctrl-txt", 1)(5, "ctrl-date", 2)(6, "ctrl-opt-radio", 3)(7, "div", 4)(8, "ctrl-opt-checkbox", 1)(9, "ctrl-opt-checkbox", 1)(10, "ctrl-opt-checkbox", 1)(11, "ctrl-opt-checkbox", 1)(12, "div", 4)(13, "ctrl-file-uploader", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(11, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(12, _c3));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(13, _c4));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(14, _c5))("listz", ctx._ss.GENDER);
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(15, _c6));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(16, _c7));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(17, _c8));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(18, _c9));
      \u0275\u0275advance(2);
      \u0275\u0275property("fileConfig", ctx.fileConfig)("ctrl", \u0275\u0275pureFunction0(19, _c10));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDate, CtrlOptRadio, CtrlOptCheckbox, CtrlFileUploader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormUserz, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "form-userz", template: `<form-basic>\r
  <ng-container moreInfo >\r
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
    <div class="col-12"></div>\r
    <ctrl-file-uploader [fileConfig]="fileConfig" [ctrl]="{ field: 'urlImg', lbl: 'Image', req: false }"></ctrl-file-uploader>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormUserz, { className: "FormUserz", filePath: "app/feature/userz/z-form-userz/form-userz.ts", lineNumber: 14 });
})();

// src/app/feature/userz/admin/admin-add/admin-add.component.ts
var AdminAddComponent = class _AdminAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.fsb = new FSB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzAdmin
    }, this._route).init();
    this._template.fsb.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function AdminAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddComponent, selectors: [["aam-admin-add"]], hostAttrs: [2, "width", "100% !important"], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function AdminAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-userz");
    }
  }, dependencies: [FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "width: 100% !important" }, selector: "aam-admin-add", template: "<form-userz></form-userz>\r\n" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddComponent, { className: "AdminAddComponent", filePath: "app/feature/userz/admin/admin-add/admin-add.component.ts", lineNumber: 18 });
})();

// src/app/feature/userz/student/student.component.ts
var StudentComponent = class _StudentComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new LB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzStudent
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StudentComponent_BaseFactory;
    return function StudentComponent_Factory(__ngFactoryType__) {
      return (\u0275StudentComponent_BaseFactory || (\u0275StudentComponent_BaseFactory = \u0275\u0275getInheritedFactory(_StudentComponent)))(__ngFactoryType__ || _StudentComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["aam-student"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function StudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "app/feature/userz/student/student.component.ts", lineNumber: 17 });
})();

// src/app/feature/userz/student/student-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBaseUserz(that, d)), {
    userzTeacherId: [d?.userzTeacherId || "", that._vs._val("Teacher")],
    userzParentId: [d?.userzParentId || "", that._vs._val("Parent")]
  }));
}

// src/app/feature/userz/student/student-add/student-add.component.ts
var _c02 = () => ({ field: "userzTeacherId", lbl: "Teacher" });
var _c12 = (a0) => ({ listStatic: a0 });
var _c22 = () => ({ field: "userzParentId", lbl: "Parent" });
var StudentAddComponent = class _StudentAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm2(this);
    this._template.fsb = new FSB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzStudent
    }, this._route).init();
    this._template.fsb.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function StudentAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentAddComponent, selectors: [["aam-student-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 10, consts: [["studentSpecific", ""], [3, "ctrl", "listz"]], template: function StudentAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-userz");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-static", 1)(3, "ctrl-dd-static", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(4, _c02))("listz", \u0275\u0275pureFunction1(5, _c12, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(7, _c22))("listz", \u0275\u0275pureFunction1(8, _c12, ctx._ss.STATUS));
    }
  }, dependencies: [CtrlDDStatic, FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-add", template: `<form-userz>\r
  <ng-container studentSpecific >\r
    <ctrl-dd-static [ctrl]="{ field: 'userzTeacherId', lbl: 'Teacher' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
    <ctrl-dd-static [ctrl]="{ field: 'userzParentId', lbl: 'Parent' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
  </ng-container>\r
</form-userz>\r
` }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentAddComponent, { className: "StudentAddComponent", filePath: "app/feature/userz/student/student-add/student-add.component.ts", lineNumber: 18 });
})();

// src/app/feature/userz/teacher/teacher.component.ts
var TeacherComponent = class _TeacherComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new LB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzTeacher
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TeacherComponent_BaseFactory;
    return function TeacherComponent_Factory(__ngFactoryType__) {
      return (\u0275TeacherComponent_BaseFactory || (\u0275TeacherComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TeacherComponent)))(__ngFactoryType__ || _TeacherComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherComponent, selectors: [["aam-teacher"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function TeacherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-teacher", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherComponent, { className: "TeacherComponent", filePath: "app/feature/userz/teacher/teacher.component.ts", lineNumber: 15 });
})();

// src/app/feature/userz/teacher/teacher-add/teacher-add.component.ts
var TeacherAddComponent = class _TeacherAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.fsb = new FSB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzTeacher
    }, this._route).init();
    this._template.fsb.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function TeacherAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherAddComponent, selectors: [["aam-teacher-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function TeacherAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-userz");
    }
  }, dependencies: [FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-teacher-add", template: "<form-userz></form-userz>\r\n" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherAddComponent, { className: "TeacherAddComponent", filePath: "app/feature/userz/teacher/teacher-add/teacher-add.component.ts", lineNumber: 17 });
})();

// src/app/feature/userz/parent/parents.component.ts
var ParentComponent = class _ParentComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new LB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzParent
    }, [
      { key: "gender", name: "Gender" },
      { key: "email", name: "Email" },
      { key: "phone", name: "Phone" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ParentComponent_BaseFactory;
    return function ParentComponent_Factory(__ngFactoryType__) {
      return (\u0275ParentComponent_BaseFactory || (\u0275ParentComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParentComponent)))(__ngFactoryType__ || _ParentComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentComponent, selectors: [["aam-parents"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function ParentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-parents", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentComponent, { className: "ParentComponent", filePath: "app/feature/userz/parent/parents.component.ts", lineNumber: 15 });
})();

// src/app/feature/userz/parent/parent-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBaseUserz(that, d)));
}

// src/app/feature/userz/parent/parent-add/parents-add.component.ts
var ParentAddComponent = class _ParentAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm3(this);
    this._template.fsb = new FSB({
      srvc: URL_SRVC.Userz,
      cntrl: URL_CONTRL.Userz.UserzParent
    }, this._route).init();
    this._template.fsb.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function ParentAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentAddComponent, selectors: [["aam-parents-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function ParentAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-userz");
    }
  }, dependencies: [FormUserz], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-parents-add", template: "<form-userz></form-userz>\r\n" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentAddComponent, { className: "ParentAddComponent", filePath: "app/feature/userz/parent/parent-add/parents-add.component.ts", lineNumber: 17 });
})();

// src/app/feature/userz/userz-routing.module.ts
var Routez = new RoutezFeatureModule(["User"], "feature/user").feature(AdminComponent, AdminAddComponent, "admin", "Admin").feature(TeacherComponent, TeacherAddComponent, "teacher", "Teacher").feature(ParentComponent, ParentAddComponent, "parent", "Parent").feature(StudentComponent, StudentAddComponent, "student", "Student Profile").build();

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
        AdminAddComponent,
        AdminComponent,
        StudentComponent,
        StudentAddComponent,
        TeacherComponent,
        TeacherAddComponent,
        ParentComponent,
        ParentAddComponent
      ],
      imports: [RouterModule.forChild(Routez), SharedModule]
    }]
  }], null, null);
})();
export {
  UserzModule
};
//# sourceMappingURL=chunk-PVJV45NQ.js.map
