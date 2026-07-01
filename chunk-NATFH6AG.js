import {
  SharedModule
} from "./chunk-JQYBJK2E.js";
import "./chunk-3FESV426.js";
import "./chunk-IA7JGOYU.js";
import {
  RoutezFeatureModule
} from "./chunk-SZA6OBKV.js";
import {
  BaseClassTemplate
} from "./chunk-R6H5ONSM.js";
import "./chunk-53M6QTZO.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  Component,
  NgModule,
  RouterModule,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory
} from "./chunk-PRTOJSNJ.js";

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
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClasszComponent_BaseFactory;
    return function ClasszComponent_Factory(__ngFactoryType__) {
      return (\u0275ClasszComponent_BaseFactory || (\u0275ClasszComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ClasszComponent)))(__ngFactoryType__ || _ClasszComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClasszComponent, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ClasszComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClasszComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClasszComponent, { className: "ClasszComponent", filePath: "app/feature/education/classz/classz.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/classz/classz-add/classz-add.component.ts
var ClasszAddComponent = class _ClasszAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function ClasszAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClasszAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClasszAddComponent, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ClasszAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClasszAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClasszAddComponent, { className: "ClasszAddComponent", filePath: "app/feature/education/classz/classz-add/classz-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education/institute/institute.component.ts
var InstituteComponent = class _InstituteComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InstituteComponent_BaseFactory;
    return function InstituteComponent_Factory(__ngFactoryType__) {
      return (\u0275InstituteComponent_BaseFactory || (\u0275InstituteComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InstituteComponent)))(__ngFactoryType__ || _InstituteComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstituteComponent, selectors: [["aam-institute"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function InstituteComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstituteComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-institute", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstituteComponent, { className: "InstituteComponent", filePath: "app/feature/education/institute/institute.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/institute/institute-add/institute-add.component.ts
var InstituteAddComponent = class _InstituteAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function InstituteAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstituteAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstituteAddComponent, selectors: [["aam-institute-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function InstituteAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstituteAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-institute-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstituteAddComponent, { className: "InstituteAddComponent", filePath: "app/feature/education/institute/institute-add/institute-add.component.ts", lineNumber: 14 });
})();

// src/app/feature/education/library/library.component.ts
var LibraryComponent = class _LibraryComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryComponent_BaseFactory;
    return function LibraryComponent_Factory(__ngFactoryType__) {
      return (\u0275LibraryComponent_BaseFactory || (\u0275LibraryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryComponent)))(__ngFactoryType__ || _LibraryComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryComponent, selectors: [["aam-library"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function LibraryComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-library", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryComponent, { className: "LibraryComponent", filePath: "app/feature/education/library/library.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/library/library-add/library-add.component.ts
var LibraryAddComponent = class _LibraryAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function LibraryAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibraryAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryAddComponent, selectors: [["aam-library-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function LibraryAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-library-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryAddComponent, { className: "LibraryAddComponent", filePath: "app/feature/education/library/library-add/library-add.component.ts", lineNumber: 14 });
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
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SectionzComponent_BaseFactory;
    return function SectionzComponent_Factory(__ngFactoryType__) {
      return (\u0275SectionzComponent_BaseFactory || (\u0275SectionzComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SectionzComponent)))(__ngFactoryType__ || _SectionzComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionzComponent, selectors: [["aam-sectionz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function SectionzComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionzComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-sectionz", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionzComponent, { className: "SectionzComponent", filePath: "app/feature/education/sectionz/sectionz.component.ts", lineNumber: 12 });
})();

// src/app/feature/education/sectionz/sectionz-add/sectionz-add.component.ts
var SectionzAddComponent = class _SectionzAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function SectionzAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SectionzAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionzAddComponent, selectors: [["aam-sectionz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function SectionzAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionzAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-sectionz-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionzAddComponent, { className: "SectionzAddComponent", filePath: "app/feature/education/sectionz/sectionz-add/sectionz-add.component.ts", lineNumber: 14 });
})();

// src/app/feature/education/education-routing.module.ts
var Routez = new RoutezFeatureModule(["Education", "Attendance"], "feature/education").feature(AttendanceComponent, AttendanceAddComponent, "attendance", "Attendance").feature(ClassRoutineComponent, ClassRoutineAddComponent, "class-routine", "Class Routine").feature(ClasszComponent, ClasszAddComponent, "classz", "Class").feature(InstituteComponent, InstituteAddComponent, "institute", "Institute").feature(LibraryComponent, LibraryAddComponent, "library", "Library").feature(SectionzComponent, SectionzAddComponent, "section", "Section").feature(StudentPromoteComponent, StudentPromoteAddComponent, "student-promote", "Student Promote").build();

// src/app/feature/education/education.module.ts
var EducationModule = class _EducationModule {
  static \u0275fac = function EducationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EducationModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    SharedModule,
    RouterModule.forChild(Routez)
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducationModule, [{
    type: NgModule,
    args: [{
      declarations: [
        InstituteComponent,
        ClasszComponent,
        LibraryComponent,
        ClassRoutineComponent,
        StudentPromoteComponent,
        AttendanceComponent,
        AttendanceAddComponent,
        ClassRoutineAddComponent,
        ClasszAddComponent,
        InstituteAddComponent,
        LibraryAddComponent,
        StudentPromoteAddComponent,
        SectionzComponent,
        SectionzAddComponent
      ],
      imports: [
        SharedModule,
        RouterModule.forChild(Routez)
      ]
    }]
  }], null, null);
})();
export {
  EducationModule
};
//# sourceMappingURL=chunk-NATFH6AG.js.map
