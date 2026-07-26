import {
  CtrlOptRadio,
  CtrlTimez,
  CtrlTxt,
  FormBasic,
  SharedModule
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
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-IHXJMWXB.js";

// src/app/feature/edu/class-routine/class-routine.ts
var ClassRoutine = class _ClassRoutine extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClassRoutine_BaseFactory;
    return function ClassRoutine_Factory(__ngFactoryType__) {
      return (\u0275ClassRoutine_BaseFactory || (\u0275ClassRoutine_BaseFactory = \u0275\u0275getInheritedFactory(_ClassRoutine)))(__ngFactoryType__ || _ClassRoutine);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassRoutine, selectors: [["aam-class-routine"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ClassRoutine_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassRoutine, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-class-routine", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassRoutine, { className: "ClassRoutine", filePath: "app/feature/edu/class-routine/class-routine.ts", lineNumber: 12 });
})();

// src/app/feature/edu/class-routine/class-routine-add/class-routine-add.ts
var ClassRoutineAdd = class _ClassRoutineAdd extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClassRoutineAdd_BaseFactory;
    return function ClassRoutineAdd_Factory(__ngFactoryType__) {
      return (\u0275ClassRoutineAdd_BaseFactory || (\u0275ClassRoutineAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ClassRoutineAdd)))(__ngFactoryType__ || _ClassRoutineAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassRoutineAdd, selectors: [["aam-class-routine-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ClassRoutineAdd_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassRoutineAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-class-routine-add", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassRoutineAdd, { className: "ClassRoutineAdd", filePath: "app/feature/edu/class-routine/class-routine-add/class-routine-add.ts", lineNumber: 12 });
})();

// src/app/feature/edu/classz/classz.ts
var Classz = class _Classz extends BaseClassTemplate {
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
    let \u0275Classz_BaseFactory;
    return function Classz_Factory(__ngFactoryType__) {
      return (\u0275Classz_BaseFactory || (\u0275Classz_BaseFactory = \u0275\u0275getInheritedFactory(_Classz)))(__ngFactoryType__ || _Classz);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Classz, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Classz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Classz, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Classz, { className: "Classz", filePath: "app/feature/edu/classz/classz.ts", lineNumber: 18 });
})();

// src/app/feature/edu/classz/classz-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu/classz/classz-add/classz-add.ts
var ClasszAdd = class _ClasszAdd extends BaseClassTemplate {
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClasszAdd_BaseFactory;
    return function ClasszAdd_Factory(__ngFactoryType__) {
      return (\u0275ClasszAdd_BaseFactory || (\u0275ClasszAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ClasszAdd)))(__ngFactoryType__ || _ClasszAdd);
    };
  })();
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClasszAdd, { className: "ClasszAdd", filePath: "app/feature/edu/classz/classz-add/classz-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu/institute/institute.ts
var Institute = class _Institute extends BaseClassTemplate {
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
    let \u0275Institute_BaseFactory;
    return function Institute_Factory(__ngFactoryType__) {
      return (\u0275Institute_BaseFactory || (\u0275Institute_BaseFactory = \u0275\u0275getInheritedFactory(_Institute)))(__ngFactoryType__ || _Institute);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Institute, selectors: [["aam-institute"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Institute_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Institute, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-institute", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Institute, { className: "Institute", filePath: "app/feature/edu/institute/institute.ts", lineNumber: 18 });
})();

// src/app/feature/edu/institute/institute-add/form.ts
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

// src/app/feature/edu/institute/institute-add/institute-add.ts
var _c0 = () => ({ field: "contact", lbl: "Contact" });
var _c1 = () => ({ field: "email", lbl: "Email", req: false });
var _c2 = () => ({ field: "branch", lbl: "Branch" });
var _c3 = () => ({ field: "address", lbl: "Address" });
var _c4 = () => ({ field: "location", lbl: "Location", req: false });
var InstituteAdd = class _InstituteAdd extends BaseClassTemplate {
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InstituteAdd_BaseFactory;
    return function InstituteAdd_Factory(__ngFactoryType__) {
      return (\u0275InstituteAdd_BaseFactory || (\u0275InstituteAdd_BaseFactory = \u0275\u0275getInheritedFactory(_InstituteAdd)))(__ngFactoryType__ || _InstituteAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstituteAdd, selectors: [["aam-institute-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 10, consts: [["moreInfo", ""], [3, "ctrl"]], template: function InstituteAdd_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstituteAdd, [{
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstituteAdd, { className: "InstituteAdd", filePath: "app/feature/edu/institute/institute-add/institute-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu/student-promote/student-promote.ts
var StudentPromote = class _StudentPromote extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StudentPromote_BaseFactory;
    return function StudentPromote_Factory(__ngFactoryType__) {
      return (\u0275StudentPromote_BaseFactory || (\u0275StudentPromote_BaseFactory = \u0275\u0275getInheritedFactory(_StudentPromote)))(__ngFactoryType__ || _StudentPromote);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentPromote, selectors: [["aam-student-promote"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function StudentPromote_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentPromote, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-promote", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentPromote, { className: "StudentPromote", filePath: "app/feature/edu/student-promote/student-promote.ts", lineNumber: 12 });
})();

// src/app/feature/edu/student-promote/student-promote-add/student-promote-add.ts
var StudentPromoteAdd = class _StudentPromoteAdd extends BaseClassTemplate {
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StudentPromoteAdd_BaseFactory;
    return function StudentPromoteAdd_Factory(__ngFactoryType__) {
      return (\u0275StudentPromoteAdd_BaseFactory || (\u0275StudentPromoteAdd_BaseFactory = \u0275\u0275getInheritedFactory(_StudentPromoteAdd)))(__ngFactoryType__ || _StudentPromoteAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentPromoteAdd, selectors: [["aam-student-promote-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function StudentPromoteAdd_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentPromoteAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student-promote-add", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentPromoteAdd, { className: "StudentPromoteAdd", filePath: "app/feature/edu/student-promote/student-promote-add/student-promote-add.ts", lineNumber: 13 });
})();

// src/app/feature/edu/sectionz/sectionz.ts
var Sectionz = class _Sectionz extends BaseClassTemplate {
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
    let \u0275Sectionz_BaseFactory;
    return function Sectionz_Factory(__ngFactoryType__) {
      return (\u0275Sectionz_BaseFactory || (\u0275Sectionz_BaseFactory = \u0275\u0275getInheritedFactory(_Sectionz)))(__ngFactoryType__ || _Sectionz);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sectionz, selectors: [["aam-sectionz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Sectionz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sectionz, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-sectionz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sectionz, { className: "Sectionz", filePath: "app/feature/edu/sectionz/sectionz.ts", lineNumber: 18 });
})();

// src/app/feature/edu/sectionz/sectionz-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu/sectionz/sectionz-add/sectionz-add.ts
var SectionzAdd = class _SectionzAdd extends BaseClassTemplate {
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SectionzAdd_BaseFactory;
    return function SectionzAdd_Factory(__ngFactoryType__) {
      return (\u0275SectionzAdd_BaseFactory || (\u0275SectionzAdd_BaseFactory = \u0275\u0275getInheritedFactory(_SectionzAdd)))(__ngFactoryType__ || _SectionzAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionzAdd, selectors: [["aam-section-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function SectionzAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionzAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-section-add", template: '<form-basic [isMoreinfo]="false" ></form-basic>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionzAdd, { className: "SectionzAdd", filePath: "app/feature/edu/sectionz/sectionz-add/sectionz-add.ts", lineNumber: 16 });
})();

// src/app/feature/edu/class-section/class-section.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassSection, { className: "ClassSection", filePath: "app/feature/edu/class-section/class-section.ts", lineNumber: 18 });
})();

// src/app/feature/edu/class-section/class-section-add/form.ts
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

// src/app/feature/edu/class-section/class-section-add/class-section-add.ts
var _c02 = () => ({ field: "classId", lbl: "Class" });
var _c12 = () => ({ field: "sectionId", lbl: "Section" });
var _c22 = () => ({ field: "teacherId", lbl: "Teacher" });
var _c32 = () => ({ field: "gender", lbl: "Gender" });
var _c42 = () => ({ field: "timeFrom", lbl: "Time From" });
var _c5 = () => ({ field: "timeTo", lbl: "Time To" });
var ClassSectionAdd = class _ClassSectionAdd extends BaseClassTemplate {
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClassSectionAdd_BaseFactory;
    return function ClassSectionAdd_Factory(__ngFactoryType__) {
      return (\u0275ClassSectionAdd_BaseFactory || (\u0275ClassSectionAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ClassSectionAdd)))(__ngFactoryType__ || _ClassSectionAdd);
    };
  })();
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
  }, dependencies: [FormBasic, CtrlTxt, CtrlOptRadio, CtrlTimez], encapsulation: 2 });
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassSectionAdd, { className: "ClassSectionAdd", filePath: "app/feature/edu/class-section/class-section-add/class-section-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu/edu-routing.module.ts
var Routez = new RoutezFeatureModule(["Education", "Attendance"], "feature/edu").feature(Institute, InstituteAdd, "institute", "Institute").feature(Classz, ClasszAdd, "class", "Class").feature(Sectionz, SectionzAdd, "section", "Section").feature(ClassSection, ClassSectionAdd, "class-section", "Class Section").feature(ClassRoutine, ClassRoutineAdd, "class-routine", "Class Routine").feature(StudentPromote, StudentPromoteAdd, "student-promote", "Student Promote").build();

// src/app/feature/edu/edu.module.ts
var EduModule = class _EduModule {
  static \u0275fac = function EduModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EduModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EduModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EduModule, [{
    type: NgModule,
    args: [{
      declarations: [
        Institute,
        InstituteAdd,
        Classz,
        ClasszAdd,
        ClassRoutine,
        ClassRoutineAdd,
        StudentPromote,
        StudentPromoteAdd,
        Sectionz,
        SectionzAdd,
        ClassSection,
        ClassSectionAdd
      ],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  EduModule
};
//# sourceMappingURL=chunk-XLXJDJJX.js.map
