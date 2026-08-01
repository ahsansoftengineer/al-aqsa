import {
  CtrlDDAPI,
  CtrlTxt,
  FormBasic,
  SharedModule
} from "./chunk-EXM2U3OE.js";
import {
  TblColTemplate
} from "./chunk-N6SWRWLE.js";
import "./chunk-O5RQATW2.js";
import {
  RoutezFeatureModule
} from "./chunk-7KTWZOBT.js";
import "./chunk-GUYV56QE.js";
import "./chunk-EDMH3MKX.js";
import "./chunk-DEDXK7R5.js";
import "./chunk-TTTRAK6O.js";
import {
  BaseClassTemplate,
  FormBase,
  FormDesc,
  FormId,
  TMSubmit,
  TM_List,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-MEB3TIJQ.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction2
} from "./chunk-IHXJMWXB.js";

// src/app/feature/edu-exam/exam-type/exam-type.ts
var ExamType = class _ExamType extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.ExamType
    }, [
      { key: "order", name: "Order" },
      { key: "emoji", name: "Emoji" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExamType_BaseFactory;
    return function ExamType_Factory(__ngFactoryType__) {
      return (\u0275ExamType_BaseFactory || (\u0275ExamType_BaseFactory = \u0275\u0275getInheritedFactory(_ExamType)))(__ngFactoryType__ || _ExamType);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamType, selectors: [["aam-exam-type"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function ExamType_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamType, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-exam-type", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamType, { className: "ExamType", filePath: "app/feature/edu-exam/exam-type/exam-type.ts", lineNumber: 18 });
})();

// src/app/feature/edu-exam/exam-type/exam-type-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    order: [d?.order || ""],
    emoji: [d?.emoji || ""]
  }));
}

// src/app/feature/edu-exam/exam-type/exam-type-add/exam-type-add.ts
var _c0 = () => ({ field: "order", lbl: "Order", type: "number", req: false });
var _c1 = () => ({ field: "emoji", lbl: "Emoji", req: false });
var ExamTypeAdd = class _ExamTypeAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.ExamType
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExamTypeAdd_BaseFactory;
    return function ExamTypeAdd_Factory(__ngFactoryType__) {
      return (\u0275ExamTypeAdd_BaseFactory || (\u0275ExamTypeAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ExamTypeAdd)))(__ngFactoryType__ || _ExamTypeAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamTypeAdd, selectors: [["aam-exam-type-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [["moreInfo", ""], [3, "ctrl"]], template: function ExamTypeAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-txt", 1)(3, "ctrl-txt", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(3, _c1));
    }
  }, dependencies: [FormBasic, CtrlTxt], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamTypeAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-exam-type-add", template: `<form-basic>\r
  <ng-container moreInfo>\r
    <ctrl-txt [ctrl]="{ field: 'order', lbl: 'Order', type: 'number', req: false }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'emoji', lbl: 'Emoji', req: false }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamTypeAdd, { className: "ExamTypeAdd", filePath: "app/feature/edu-exam/exam-type/exam-type-add/exam-type-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-exam/grade/grade.ts
var Grade = class _Grade extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.ExamType
    }, [
      { key: "order", name: "Order" },
      { key: "emoji", name: "Emoji" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Grade_BaseFactory;
    return function Grade_Factory(__ngFactoryType__) {
      return (\u0275Grade_BaseFactory || (\u0275Grade_BaseFactory = \u0275\u0275getInheritedFactory(_Grade)))(__ngFactoryType__ || _Grade);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Grade, selectors: [["aam-grade"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Grade_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Grade, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-grade", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Grade, { className: "Grade", filePath: "app/feature/edu-exam/grade/grade.ts", lineNumber: 18 });
})();

// src/app/feature/edu-exam/grade/grade-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    order: [d?.order || ""],
    emoji: [d?.emoji || ""]
  }));
}

// src/app/feature/edu-exam/grade/grade-add/grade-add.ts
var _c02 = () => ({ field: "order", lbl: "Order", req: false });
var _c12 = () => ({ field: "emoji", lbl: "Emoji", req: false });
var GradeAdd = class _GradeAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm2(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Grade
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GradeAdd_BaseFactory;
    return function GradeAdd_Factory(__ngFactoryType__) {
      return (\u0275GradeAdd_BaseFactory || (\u0275GradeAdd_BaseFactory = \u0275\u0275getInheritedFactory(_GradeAdd)))(__ngFactoryType__ || _GradeAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradeAdd, selectors: [["aam-grade-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [["moreInfo", ""], [1, "col-md-6", "px-1", 3, "ctrl"]], template: function GradeAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-txt", 1)(3, "ctrl-txt", 1);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(2, _c02));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(3, _c12));
    }
  }, dependencies: [FormBasic, CtrlTxt], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GradeAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-grade-add", template: `<form-basic>\r
  <ng-container moreInfo>\r
    <ctrl-txt [ctrl]="{ field: 'order', lbl: 'Order', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'emoji', lbl: 'Emoji', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradeAdd, { className: "GradeAdd", filePath: "app/feature/edu-exam/grade/grade-add/grade-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-exam/result/result.ts
var Result = class _Result extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Result
    }, [
      { key: "userStudentId", name: "Student" },
      { key: "examSubjectzId", name: "Exam Subject" },
      { key: "obtainMarks", name: "Marks" },
      { key: "grade", name: "Grade" },
      { key: "remarks", name: "Remarks" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Result_BaseFactory;
    return function Result_Factory(__ngFactoryType__) {
      return (\u0275Result_BaseFactory || (\u0275Result_BaseFactory = \u0275\u0275getInheritedFactory(_Result)))(__ngFactoryType__ || _Result);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Result, selectors: [["aam-result"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Result_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Result, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-result", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Result, { className: "Result", filePath: "app/feature/edu-exam/result/result.ts", lineNumber: 18 });
})();

// src/app/feature/edu-exam/result/result-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues(__spreadValues({}, FormId(that, d)), FormDesc(that, d)), {
    userStudentId: [d?.userStudentId || "", that._vs._val("Student")],
    examSubjectzId: [d?.examSubjectzId || "", that._vs._val("Exam Subject")],
    grade: [d?.grade || ""],
    marksObtain: [d?.marksObtain || "", that._vs._val("Obtain Marks")]
  }));
}

// src/app/feature/edu-exam/result/result-add/result-add.ts
var _c03 = () => ({ field: "userStudentId", lbl: "Student", req: false });
var _c13 = (a0, a1) => ({ srvc: a0, cntrl: a1 });
var _c2 = () => ({ field: "examSubjectzId", lbl: "Exam Subject", req: false });
var _c3 = () => ({ field: "marksObtain", lbl: "Obtain Marks", type: "number" });
var _c4 = () => ({ field: "grade", lbl: "Grade" });
var ResultAdd = class _ResultAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm3(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Result
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ResultAdd_BaseFactory;
    return function ResultAdd_Factory(__ngFactoryType__) {
      return (\u0275ResultAdd_BaseFactory || (\u0275ResultAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ResultAdd)))(__ngFactoryType__ || _ResultAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultAdd, selectors: [["aam-result-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 17, consts: [[3, "isMoreinfo"], ["moreInfo", ""], [3, "ctrl", "req"], [3, "ctrl"]], template: function ResultAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275element(2, "ctrl-dd-api", 2)(3, "ctrl-dd-api", 2)(4, "ctrl-txt", 3)(5, "ctrl-txt", 3);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(7, _c03))("req", \u0275\u0275pureFunction2(8, _c13, ctx.URL_SRVC.Userz, ctx.URL_CONTRL.Userz.UserzStudent));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(11, _c2))("req", \u0275\u0275pureFunction2(12, _c13, ctx.URL_SRVC.Edu, ctx.URL_CONTRL.Edu.ExamSubjectz));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(15, _c3));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(16, _c4));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDAPI], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-result-add", template: `<form-basic [isMoreinfo]="true">\r
  <ng-container moreInfo>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'userStudentId', lbl: 'Student', req:false }"\r
      [req]="{\r
        srvc: URL_SRVC.Userz,\r
        cntrl: URL_CONTRL.Userz.UserzStudent,\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'examSubjectzId', lbl: 'Exam Subject', req:false }"\r
      [req]="{\r
        srvc: URL_SRVC.Edu,\r
        cntrl: URL_CONTRL.Edu.ExamSubjectz,\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-txt [ctrl]="{ field: 'marksObtain', lbl: 'Obtain Marks', type: 'number' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'grade', lbl: 'Grade' }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultAdd, { className: "ResultAdd", filePath: "app/feature/edu-exam/result/result-add/result-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-exam/exam/exam.ts
var Exam = class _Exam extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Exam
    }, [
      { key: "examTypeId", name: "Exam Type" },
      { key: "termId", name: "Term" },
      { key: "startDate", name: "Start Date" },
      { key: "endDate", name: "End Date" },
      { key: "totalMarks", name: "Total Marks" },
      { key: "passingMarks", name: "Passing Marks" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Exam_BaseFactory;
    return function Exam_Factory(__ngFactoryType__) {
      return (\u0275Exam_BaseFactory || (\u0275Exam_BaseFactory = \u0275\u0275getInheritedFactory(_Exam)))(__ngFactoryType__ || _Exam);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Exam, selectors: [["aam-exam"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Exam_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Exam, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-exam", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Exam, { className: "Exam", filePath: "app/feature/edu-exam/exam/exam.ts", lineNumber: 18 });
})();

// src/app/feature/edu-exam/exam/exam-add/form.ts
function MyForm4(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    examTypeId: [d?.examTypeId || ""],
    termId: [d?.termId || ""],
    startDate: [d?.startDate || ""],
    endDate: [d?.endDate || ""],
    marksTotal: [d?.marksTotal || ""],
    marksPassing: [d?.marksPassing || ""]
  }));
}

// src/app/feature/edu-exam/exam/exam-add/exam-add.ts
var _c04 = () => ({ field: "examTypeId", lbl: "Exam Type" });
var _c14 = (a0, a1) => ({ srvc: a0, cntrl: a1 });
var _c22 = () => ({ field: "termId", lbl: "Terms & Condition", req: false });
var _c32 = () => ({ field: "marksTotal", lbl: "Total Marks", type: "number" });
var _c42 = () => ({ field: "marksPassing", lbl: "Passing Marks", type: "number" });
var ExamAdd = class _ExamAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm4(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Exam
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExamAdd_BaseFactory;
    return function ExamAdd_Factory(__ngFactoryType__) {
      return (\u0275ExamAdd_BaseFactory || (\u0275ExamAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ExamAdd)))(__ngFactoryType__ || _ExamAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamAdd, selectors: [["aam-exam-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 16, consts: [["moreInfo", ""], [3, "ctrl", "req"], [3, "ctrl"]], template: function ExamAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-api", 1)(3, "ctrl-dd-api", 1)(4, "ctrl-txt", 2)(5, "ctrl-txt", 2);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(6, _c04))("req", \u0275\u0275pureFunction2(7, _c14, ctx.URL_SRVC.Edu, ctx.URL_CONTRL.Edu.ExamType));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(10, _c22))("req", \u0275\u0275pureFunction2(11, _c14, ctx.URL_SRVC.Edu, ctx.URL_CONTRL.Edu.Term));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(14, _c32));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(15, _c42));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDAPI], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-exam-add", template: `<form-basic >\r
  <ng-container moreInfo>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'examTypeId', lbl: 'Exam Type' }"\r
      [req]="{\r
        srvc: URL_SRVC.Edu,\r
        cntrl: URL_CONTRL.Edu.ExamType\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'termId', lbl: 'Terms & Condition', req: false }"\r
      [req]="{\r
        srvc: URL_SRVC.Edu,\r
        cntrl: URL_CONTRL.Edu.Term\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-txt [ctrl]="{ field: 'marksTotal', lbl: 'Total Marks', type: 'number',  }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'marksPassing', lbl: 'Passing Marks', type: 'number' }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamAdd, { className: "ExamAdd", filePath: "app/feature/edu-exam/exam/exam-add/exam-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-exam/exam-subjectz/exam-subjectz.ts
var ExamSubjectz = class _ExamSubjectz extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.ExamSubjectz
    }, [
      { key: "examId", name: "Exam" },
      { key: "subjectzId", name: "Subject" },
      { key: "marksTotal", name: "Total Marks" },
      { key: "marksPassing", name: "Passing Marks" },
      { key: "dateExam", name: "Exam Date" },
      { key: "timeStart", name: "Start Time" },
      { key: "timeEnd", name: "End Time" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExamSubjectz_BaseFactory;
    return function ExamSubjectz_Factory(__ngFactoryType__) {
      return (\u0275ExamSubjectz_BaseFactory || (\u0275ExamSubjectz_BaseFactory = \u0275\u0275getInheritedFactory(_ExamSubjectz)))(__ngFactoryType__ || _ExamSubjectz);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamSubjectz, selectors: [["aam-exam-subjectz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function ExamSubjectz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamSubjectz, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-exam-subjectz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamSubjectz, { className: "ExamSubjectz", filePath: "app/feature/edu-exam/exam-subjectz/exam-subjectz.ts", lineNumber: 18 });
})();

// src/app/feature/edu-exam/exam-subjectz/exam-subjectz-add/form.ts
function MyForm5(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    examId: [d?.examId || ""],
    subjectzId: [d?.subjectzId || ""],
    marksTotal: [d?.marksTotal || ""],
    marksPassing: [d?.marksPassing || ""],
    dateExam: [d?.dateExam || ""],
    timeStart: [d?.timeStart || ""],
    timeEnd: [d?.timeEnd || ""]
  }));
}

// src/app/feature/edu-exam/exam-subjectz/exam-subjectz-add/exam-subjectz-add.ts
var _c05 = () => ({ field: "examId", lbl: "Exam" });
var _c15 = (a0, a1) => ({ srvc: a0, cntrl: a1 });
var _c23 = () => ({ field: "subjectzId", lbl: "Subject" });
var _c33 = () => ({ field: "marksTotal", lbl: "Total Marks", type: "number" });
var _c43 = () => ({ field: "marksPassing", lbl: "Passing Marks", type: "number" });
var _c5 = () => ({ field: "dateExam", lbl: "Exam Date", type: "number" });
var _c6 = () => ({ field: "timeStart", lbl: "Start Time", type: "number" });
var _c7 = () => ({ field: "timeEnd", lbl: "End Time", type: "number" });
var ExamSubjectzAdd = class _ExamSubjectzAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm5(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.ExamSubjectz
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExamSubjectzAdd_BaseFactory;
    return function ExamSubjectzAdd_Factory(__ngFactoryType__) {
      return (\u0275ExamSubjectzAdd_BaseFactory || (\u0275ExamSubjectzAdd_BaseFactory = \u0275\u0275getInheritedFactory(_ExamSubjectzAdd)))(__ngFactoryType__ || _ExamSubjectzAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamSubjectzAdd, selectors: [["aam-exam-subjectz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 22, consts: [["moreInfo", ""], [3, "ctrl", "req"], [3, "ctrl"]], template: function ExamSubjectzAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-api", 1)(3, "ctrl-dd-api", 1)(4, "ctrl-txt", 2)(5, "ctrl-txt", 2)(6, "ctrl-txt", 2)(7, "ctrl-txt", 2)(8, "ctrl-txt", 2);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(9, _c05))("req", \u0275\u0275pureFunction2(10, _c15, ctx.URL_SRVC.Edu, ctx.URL_CONTRL.Edu.Exam));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(13, _c23))("req", \u0275\u0275pureFunction2(14, _c15, ctx.URL_SRVC.Edu, ctx.URL_CONTRL.Edu.Subjectz));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(17, _c33));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(18, _c43));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(19, _c5));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(20, _c6));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(21, _c7));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDAPI], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamSubjectzAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-exam-subjectz-add", template: `<form-basic >\r
  <ng-container moreInfo>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'examId', lbl: 'Exam' }"\r
      [req]="{\r
        srvc: URL_SRVC.Edu,\r
        cntrl: URL_CONTRL.Edu.Exam\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-dd-api\r
      [ctrl]="{ field: 'subjectzId', lbl: 'Subject' }"\r
      [req]="{\r
        srvc: URL_SRVC.Edu,\r
        cntrl: URL_CONTRL.Edu.Subjectz\r
      }">\r
    </ctrl-dd-api>\r
    <ctrl-txt [ctrl]="{ field: 'marksTotal', lbl: 'Total Marks', type: 'number',  }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'marksPassing', lbl: 'Passing Marks', type: 'number' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'dateExam', lbl: 'Exam Date', type: 'number' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'timeStart', lbl: 'Start Time', type: 'number' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'timeEnd', lbl: 'End Time', type: 'number' }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamSubjectzAdd, { className: "ExamSubjectzAdd", filePath: "app/feature/edu-exam/exam-subjectz/exam-subjectz-add/exam-subjectz-add.ts", lineNumber: 16 });
})();

// src/app/feature/edu-exam/edu-exam-routing.module.ts
var Routez = new RoutezFeatureModule("Exam", "feature/exam").feature(ExamType, ExamTypeAdd, "exam-type", "Exam Type").feature(Exam, ExamAdd, "exam", "Exam").feature(ExamSubjectz, ExamSubjectzAdd, "exam-subject", "Exam Subject").feature(Grade, GradeAdd, "grade", "Grade").feature(Result, ResultAdd, "result", "Result").build();

// src/app/feature/edu-exam/edu-exam.module.ts
var EduExamModule = class _EduExamModule {
  static \u0275fac = function EduExamModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EduExamModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EduExamModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EduExamModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ExamType,
        ExamTypeAdd,
        Exam,
        ExamAdd,
        ExamSubjectz,
        ExamSubjectzAdd,
        Grade,
        GradeAdd,
        Result,
        ResultAdd
      ],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  EduExamModule
};
//# sourceMappingURL=chunk-CDY3JCB5.js.map
