import {
  CtrlOptRadio,
  CtrlTimez,
  CtrlTxt,
  FormBasic,
  SharedModule
} from "./chunk-O2PI7P2R.js";
import {
  TblColTemplate
} from "./chunk-QH75GOSB.js";
import {
  RoutezFeatureModule
} from "./chunk-45RHQS2W.js";
import {
  BaseClassTemplate
} from "./chunk-6LK5L5F6.js";
import {
  FormBase,
  TMSubmit,
  TM_List,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-OBJUXFHJ.js";
import "./chunk-7CXVMO6G.js";
import "./chunk-DSAO3SWD.js";
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
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-HWCWTAOC.js";

// src/app/feature/education/attendance/attendance.component.ts
var AttendanceComponent = class _AttendanceComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AttendanceComponent_BaseFactory;
    return function AttendanceComponent_Factory(__ngFactoryType__) {
      return (\u0275AttendanceComponent_BaseFactory || (\u0275AttendanceComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AttendanceComponent)))(__ngFactoryType__ || _AttendanceComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceComponent, selectors: [["aam-attendance"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function AttendanceComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-attendance", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceComponent, { className: "AttendanceComponent", filePath: "app/feature/education/attendance/attendance.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/attendance/attendance-add/attendance-add.component.ts
var AttendanceAddComponent = class _AttendanceAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  static \u0275fac = function AttendanceAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceAddComponent, selectors: [["aam-attendance-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function AttendanceAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-attendance-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceAddComponent, { className: "AttendanceAddComponent", filePath: "app/feature/education/attendance/attendance-add/attendance-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education/class-routine/class-routine.component.ts
var ClassRoutineComponent = class _ClassRoutineComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClassRoutineComponent_BaseFactory;
    return function ClassRoutineComponent_Factory(__ngFactoryType__) {
      return (\u0275ClassRoutineComponent_BaseFactory || (\u0275ClassRoutineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ClassRoutineComponent)))(__ngFactoryType__ || _ClassRoutineComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassRoutineComponent, selectors: [["aam-class-routine"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ClassRoutineComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassRoutineComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-class-routine", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassRoutineComponent, { className: "ClassRoutineComponent", filePath: "app/feature/education/class-routine/class-routine.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/class-routine/class-routine-add/class-routine-add.component.ts
var ClassRoutineAddComponent = class _ClassRoutineAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  static \u0275fac = function ClassRoutineAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassRoutineAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassRoutineAddComponent, selectors: [["aam-class-routine-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ClassRoutineAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassRoutineAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-class-routine-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassRoutineAddComponent, { className: "ClassRoutineAddComponent", filePath: "app/feature/education/class-routine/class-routine-add/class-routine-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education/classz/classz.component.ts
var ClasszComponent = class _ClasszComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Classz
    }, []).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClasszComponent_BaseFactory;
    return function ClasszComponent_Factory(__ngFactoryType__) {
      return (\u0275ClasszComponent_BaseFactory || (\u0275ClasszComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ClasszComponent)))(__ngFactoryType__ || _ClasszComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClasszComponent, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function ClasszComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClasszComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClasszComponent, { className: "ClasszComponent", filePath: "app/feature/education/classz/classz.component.ts", lineNumber: 18 });
})();

// src/app/feature/education/classz/classz-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/education/classz/classz-add/classz-add.component.ts
var ClasszAdd = class _ClasszAdd extends BaseClassTemplate {
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
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Classz
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function ClasszAdd_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClasszAdd)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClasszAdd, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function ClasszAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClasszAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: '<form-basic [isMoreinfo]="false"></form-basic>\r\n' }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClasszAdd, { className: "ClasszAdd", filePath: "app/feature/education/classz/classz-add/classz-add.component.ts", lineNumber: 18 });
})();

// src/app/feature/education/institute/institute.component.ts
var InstituteComponent = class _InstituteComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Institute
    }, [
      { key: "branch", name: "Branch" },
      { key: "address", name: "Address" },
      { key: "nearby", name: "Near By Place" },
      { key: "loction", name: "Location" },
      { key: "image", name: "Image" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InstituteComponent_BaseFactory;
    return function InstituteComponent_Factory(__ngFactoryType__) {
      return (\u0275InstituteComponent_BaseFactory || (\u0275InstituteComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InstituteComponent)))(__ngFactoryType__ || _InstituteComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstituteComponent, selectors: [["aam-institute"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function InstituteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstituteComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-institute", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstituteComponent, { className: "InstituteComponent", filePath: "app/feature/education/institute/institute.component.ts", lineNumber: 18 });
})();

// src/app/feature/education/institute/institute-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    contact: [d?.contact || "", that._vs._val("Contact")],
    email: [d?.email || "", that._vs._val("", { maxChar: 50, email: 1, specialChar: 0 })],
    branch: [d?.branch || "", that._vs._val("Branch")],
    address: [d?.address || "", that._vs._val("Address")],
    location: [d?.location || ""],
    image: [d?.image || ""]
  }));
}

// src/app/feature/education/institute/institute-add/institute-add.component.ts
var _c0 = () => ({ field: "contact", lbl: "Contact" });
var _c1 = () => ({ field: "email", lbl: "Email", req: false });
var _c2 = () => ({ field: "branch", lbl: "Branch" });
var _c3 = () => ({ field: "address", lbl: "Address" });
var _c4 = () => ({ field: "location", lbl: "Location", req: false });
var InstituteAddComponent = class _InstituteAddComponent extends BaseClassTemplate {
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
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Institute
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function InstituteAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstituteAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstituteAddComponent, selectors: [["aam-institute-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 10, consts: [["moreInfo", ""], [3, "ctrl"]], template: function InstituteAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-txt", 1)(3, "ctrl-txt", 1)(4, "ctrl-txt", 1)(5, "ctrl-txt", 1)(6, "ctrl-txt", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(6, _c1));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(7, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(8, _c3));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(9, _c4));
    }
  }, dependencies: [FormBasic, CtrlTxt], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstituteAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-institute-add", template: `<form-basic>\r
  <ng-container moreInfo >\r
    <ctrl-txt [ctrl]="{ field: 'contact', lbl: 'Contact' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'email', lbl: 'Email', req:false }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'branch', lbl: 'Branch' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'address', lbl: 'Address' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'location', lbl: 'Location', req:false }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstituteAddComponent, { className: "InstituteAddComponent", filePath: "app/feature/education/institute/institute-add/institute-add.component.ts", lineNumber: 18 });
})();

// src/app/feature/education/student-promote/student-promote.component.ts
var StudentPromoteComponent = class _StudentPromoteComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StudentPromoteComponent_BaseFactory;
    return function StudentPromoteComponent_Factory(__ngFactoryType__) {
      return (\u0275StudentPromoteComponent_BaseFactory || (\u0275StudentPromoteComponent_BaseFactory = \u0275\u0275getInheritedFactory(_StudentPromoteComponent)))(__ngFactoryType__ || _StudentPromoteComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentPromoteComponent, selectors: [["aam-student-promote"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function StudentPromoteComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentPromoteComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-promote", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentPromoteComponent, { className: "StudentPromoteComponent", filePath: "app/feature/education/student-promote/student-promote.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/student-promote/student-promote-add/student-promote-add.component.ts
var StudentPromoteAddComponent = class _StudentPromoteAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function StudentPromoteAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentPromoteAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentPromoteAddComponent, selectors: [["aam-student-promote-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function StudentPromoteAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentPromoteAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-promote-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentPromoteAddComponent, { className: "StudentPromoteAddComponent", filePath: "app/feature/education/student-promote/student-promote-add/student-promote-add.component.ts", lineNumber: 14 });
})();

// src/app/feature/education/sectionz/sectionz.component.ts
var SectionzComponent = class _SectionzComponent extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Section
      // Sectionz,
    }, [
      { key: "teacher", name: "Teacher" },
      { key: "gender", name: "Gender" },
      { key: "timeFrom", name: "Time From" },
      { key: "timeTo", name: "Time To" },
      { key: "studentTotal", name: "Total Students" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SectionzComponent_BaseFactory;
    return function SectionzComponent_Factory(__ngFactoryType__) {
      return (\u0275SectionzComponent_BaseFactory || (\u0275SectionzComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SectionzComponent)))(__ngFactoryType__ || _SectionzComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionzComponent, selectors: [["aam-sectionz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function SectionzComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionzComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-sectionz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionzComponent, { className: "SectionzComponent", filePath: "app/feature/education/sectionz/sectionz.component.ts", lineNumber: 18 });
})();

// src/app/feature/education/sectionz/sectionz-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/education/sectionz/sectionz-add/sectionz-add.component.ts
var SectionzAddComponent = class _SectionzAddComponent extends BaseClassTemplate {
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
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Section
      //.Classz,
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function SectionzAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SectionzAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionzAddComponent, selectors: [["aam-section-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function SectionzAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionzAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-section-add", template: '<form-basic [isMoreinfo]="false" ></form-basic>\r\n' }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionzAddComponent, { className: "SectionzAddComponent", filePath: "app/feature/education/sectionz/sectionz-add/sectionz-add.component.ts", lineNumber: 18 });
})();

// src/app/feature/education/class-section/class-section.ts
var ClassSection = class _ClassSection extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Classz
      // Classz,
    }, [
      { key: "class", name: "Class" },
      { key: "section", name: "Section" },
      { key: "teacher", name: "Teacher" },
      { key: "gender", name: "Gender" },
      { key: "timeFrom", name: "Time From" },
      { key: "timeTo", name: "Time To" },
      { key: "studentTotal", name: "Total Students" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClassSection_BaseFactory;
    return function ClassSection_Factory(__ngFactoryType__) {
      return (\u0275ClassSection_BaseFactory || (\u0275ClassSection_BaseFactory = \u0275\u0275getInheritedFactory(_ClassSection)))(__ngFactoryType__ || _ClassSection);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassSection, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function ClassSection_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassSection, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassSection, { className: "ClassSection", filePath: "app/feature/education/class-section/class-section.ts", lineNumber: 18 });
})();

// src/app/feature/education/class-section/class-section-add/form.ts
function MyForm4(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    classId: [d?.classId || "", that._vs._val("Class")],
    sectionId: [d?.sectionId || "", that._vs._val("Section")],
    teacherId: [d?.teacherId || "", that._vs._val("Teacher")],
    gender: [d?.gender || "", that._vs._val("Gender")],
    timeFrom: [d?.timeFrom || "", that._vs._val("Time From", { specialChar: 0 })],
    timeTo: [d?.timeTo || "", that._vs._val("Time To", { specialChar: 0 })]
  }));
}

// src/app/feature/education/class-section/class-section-add/class-section-add.ts
var _c02 = () => ({ field: "classId", lbl: "Class" });
var _c12 = () => ({ field: "sectionId", lbl: "Section" });
var _c22 = () => ({ field: "teacherId", lbl: "Teacher" });
var _c32 = () => ({ field: "gender", lbl: "Gender" });
var _c42 = () => ({ field: "timeFrom", lbl: "Time From" });
var _c5 = () => ({ field: "timeTo", lbl: "Time To" });
var ClassSectionAdd = class _ClassSectionAdd extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm4(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.ClassSection
      //.Classz,
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function ClassSectionAdd_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassSectionAdd)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassSectionAdd, selectors: [["aam-classz-section-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 13, consts: [["moreInfo", ""], [3, "ctrl"], [3, "ctrl", "listz"]], template: function ClassSectionAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-txt", 1)(3, "ctrl-txt", 1)(4, "ctrl-txt", 1)(5, "ctrl-opt-radio", 2)(6, "ctrl-timez", 1)(7, "ctrl-timez", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(7, _c02));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(8, _c12));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(9, _c22));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(10, _c32))("listz", ctx._ss.GENDER);
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(11, _c42));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(12, _c5));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlTimez, CtrlOptRadio], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassSectionAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-section-add", template: `<form-basic>\r
  <ng-container moreInfo >\r
    <ctrl-txt [ctrl]="{ field: 'classId', lbl: 'Class' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'sectionId', lbl: 'Section' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'teacherId', lbl: 'Teacher' }"></ctrl-txt>\r
    <ctrl-opt-radio [ctrl]="{ field: 'gender', lbl: 'Gender' }" [listz]="_ss.GENDER"></ctrl-opt-radio>\r
\r
    <ctrl-timez [ctrl]="{ field: 'timeFrom', lbl: 'Time From' }"></ctrl-timez>\r
    <ctrl-timez [ctrl]="{ field: 'timeTo', lbl: 'Time To' }"></ctrl-timez>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassSectionAdd, { className: "ClassSectionAdd", filePath: "app/feature/education/class-section/class-section-add/class-section-add.ts", lineNumber: 18 });
})();

// src/app/feature/education/education-routing.module.ts
var Routez = new RoutezFeatureModule(["Education", "Attendance"], "feature/education").feature(InstituteComponent, InstituteAddComponent, "institute", "Institute").feature(AttendanceComponent, AttendanceAddComponent, "attendance", "Attendance").feature(ClasszComponent, ClasszAdd, "class", "Class").feature(SectionzComponent, SectionzAddComponent, "section", "Section").feature(ClassSection, ClassSectionAdd, "class-section", "Class Section").feature(ClassRoutineComponent, ClassRoutineAddComponent, "class-routine", "Class Routine").feature(StudentPromoteComponent, StudentPromoteAddComponent, "student-promote", "Student Promote").build();

// src/app/feature/education/education.module.ts
var EducationModule = class _EducationModule {
  static \u0275fac = function EducationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EducationModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducationModule, [{
    type: NgModule,
    args: [{
      declarations: [
        InstituteComponent,
        ClasszComponent,
        ClassRoutineComponent,
        StudentPromoteComponent,
        AttendanceComponent,
        AttendanceAddComponent,
        ClassRoutineAddComponent,
        ClasszAdd,
        InstituteAddComponent,
        StudentPromoteAddComponent,
        SectionzComponent,
        SectionzAddComponent,
        ClassSection,
        ClassSectionAdd
      ],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  EducationModule
};
//# sourceMappingURL=chunk-6MVDQDWF.js.map
