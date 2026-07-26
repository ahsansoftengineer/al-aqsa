import {
  CtrlDDStatic,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IHXJMWXB.js";

// src/app/feature/edu-question/question-type/question-type.ts
var QuestionType = class _QuestionType extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.QuestionType
    }).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275QuestionType_BaseFactory;
    return function QuestionType_Factory(__ngFactoryType__) {
      return (\u0275QuestionType_BaseFactory || (\u0275QuestionType_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionType)))(__ngFactoryType__ || _QuestionType);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionType, selectors: [["aam-question-type"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function QuestionType_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionType, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-question-type", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionType, { className: "QuestionType", filePath: "app/feature/edu-question/question-type/question-type.ts", lineNumber: 19 });
})();

// src/app/feature/edu-question/question-type/question-type-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu-question/question-type/question-type-add/question-type-add.ts
var QuestionTypeAdd = class _QuestionTypeAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.QuestionType
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275QuestionTypeAdd_BaseFactory;
    return function QuestionTypeAdd_Factory(__ngFactoryType__) {
      return (\u0275QuestionTypeAdd_BaseFactory || (\u0275QuestionTypeAdd_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionTypeAdd)))(__ngFactoryType__ || _QuestionTypeAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionTypeAdd, selectors: [["aam-question-type-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function QuestionTypeAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionTypeAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-question-type-add", template: '<form-basic [isMoreinfo]="false"></form-basic>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionTypeAdd, { className: "QuestionTypeAdd", filePath: "app/feature/edu-question/question-type/question-type-add/question-type-add.ts", lineNumber: 18 });
})();

// src/app/feature/edu-question/question/question.ts
function Question_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 4);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r1?.option1 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1?.option2 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1?.option3 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1?.option4 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1?.option5 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1?.option6 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1?.answer || "-");
  }
}
var Question = class _Question extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(
      this,
      {
        srvc: URL_SRVC.Edu,
        cntrl: URL_CONTRL.Edu.Question
      },
      [
        { key: "questionTypeName", name: "Question Type" }
      ]
      // [
      //   { key: 'option1', name: 'Option 1'},
      //   { key: 'option2', name: 'Option 2'},
      //   { key: 'option3', name: 'Option 3'},
      //   { key: 'option4', name: 'Option 4'},
      //   { key: 'option5', name: 'Option 5'},
      //   { key: 'option6', name: 'Option 6'},
      //   { key: 'answer', name: 'Answer'},
      // ]
    ).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Question_BaseFactory;
    return function Question_Factory(__ngFactoryType__) {
      return (\u0275Question_BaseFactory || (\u0275Question_BaseFactory = \u0275\u0275getInheritedFactory(_Question)))(__ngFactoryType__ || _Question);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Question, selectors: [["aam-question"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["secondaryTpl", ""], [3, "lb", "secondaryTemplate"], [1, "col-12", "px-3"], [1, "row"], [1, "col-12", "col-md-6"], [1, "col-12", "bg-info"]], template: function Question_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Question_ng_template_0_Template, 16, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(2, "tbl-col-template", 1);
    }
    if (rf & 2) {
      const secondaryTpl_r2 = \u0275\u0275reference(1);
      \u0275\u0275advance(2);
      \u0275\u0275property("lb", ctx._template?.lb)("secondaryTemplate", secondaryTpl_r2);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Question, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-question", template: `<ng-template #secondaryTpl let-row="row">\r
  <div class="col-12 px-3">\r
    <div class="row">\r
      <div class="col-12 col-md-6">{{row?.option1 || '-'}}</div>\r
      <div class="col-12 col-md-6">{{row?.option2 || '-'}}</div>\r
      <div class="col-12 col-md-6">{{row?.option3 || '-'}}</div>\r
      <div class="col-12 col-md-6">{{row?.option4 || '-'}}</div>\r
      <div class="col-12 col-md-6">{{row?.option5 || '-'}}</div>\r
      <div class="col-12 col-md-6">{{row?.option6 || '-'}}</div>\r
      <div class="col-12 bg-info">{{row?.answer || '-'}}</div>\r
    </div>\r
  </div>\r
</ng-template>\r
<tbl-col-template [lb]="_template?.lb" [secondaryTemplate]="secondaryTpl"></tbl-col-template>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Question, { className: "Question", filePath: "app/feature/edu-question/question/question.ts", lineNumber: 19 });
})();

// src/app/feature/edu-question/question/question-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    chapterId: [d?.chapterId || ""],
    questionTypeId: [d?.questionTypeId || ""],
    option1: [d?.option1 || ""],
    option2: [d?.option2 || ""],
    option3: [d?.option3 || ""],
    option4: [d?.option4 || ""],
    option5: [d?.option5 || ""],
    option6: [d?.option6 || ""],
    answer: [d?.answer || ""]
  }));
}

// src/app/feature/edu-question/question/question-add/question-add.ts
var _c0 = () => ({ field: "chapterId", lbl: "Chapter", req: false });
var _c1 = (a0) => ({ listStatic: a0 });
var _c2 = () => ({ field: "questionTypeId", lbl: "Question Type", req: false });
var _c3 = () => ({ field: "option1", lbl: "Option 1", req: false });
var _c4 = () => ({ field: "option2", lbl: "Option 2", req: false });
var _c5 = () => ({ field: "option3", lbl: "Option 3", req: false });
var _c6 = () => ({ field: "option4", lbl: "Option 4", req: false });
var _c7 = () => ({ field: "option5", lbl: "Option 5", req: false });
var _c8 = () => ({ field: "option6", lbl: "Option 6", req: false });
var _c9 = () => ({ field: "answer", lbl: "Answer", req: false });
var QuestionAdd = class _QuestionAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm2(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Question
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275QuestionAdd_BaseFactory;
    return function QuestionAdd_Factory(__ngFactoryType__) {
      return (\u0275QuestionAdd_BaseFactory || (\u0275QuestionAdd_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionAdd)))(__ngFactoryType__ || _QuestionAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionAdd, selectors: [["aam-question-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 24, consts: [["moreInfo", ""], [3, "ctrl", "listz"], [1, "col-12"], [1, "col-md-6", "px-1", 3, "ctrl"], [1, "col-12", "px-1", 3, "ctrl"]], template: function QuestionAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-static", 1)(3, "ctrl-dd-static", 1)(4, "div", 2)(5, "ctrl-txt", 3)(6, "ctrl-txt", 3)(7, "ctrl-txt", 3)(8, "ctrl-txt", 3)(9, "ctrl-txt", 3)(10, "ctrl-txt", 3)(11, "div", 2)(12, "ctrl-txt", 4);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(11, _c0))("listz", \u0275\u0275pureFunction1(12, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(14, _c2))("listz", \u0275\u0275pureFunction1(15, _c1, ctx._ss.STATUS));
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(17, _c3));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(18, _c4));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(19, _c5));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(20, _c6));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(21, _c7));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(22, _c8));
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(23, _c9));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDStatic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-question-add", template: `<form-basic>\r
   <ng-container moreInfo >\r
     <ctrl-dd-static [ctrl]="{ field: 'chapterId', lbl: 'Chapter', req: false }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
     <ctrl-dd-static [ctrl]="{ field: 'questionTypeId', lbl: 'Question Type', req: false }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
     <div class="col-12"></div>\r
     <ctrl-txt [ctrl]="{ field: 'option1', lbl: 'Option 1', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
     <ctrl-txt [ctrl]="{ field: 'option2', lbl: 'Option 2', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
     <ctrl-txt [ctrl]="{ field: 'option3', lbl: 'Option 3', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
     <ctrl-txt [ctrl]="{ field: 'option4', lbl: 'Option 4', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
     <ctrl-txt [ctrl]="{ field: 'option5', lbl: 'Option 5', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
     <ctrl-txt [ctrl]="{ field: 'option6', lbl: 'Option 6', req: false }" class="col-md-6 px-1"></ctrl-txt>\r
     <div class="col-12"></div>\r
     <ctrl-txt [ctrl]="{ field: 'answer', lbl: 'Answer', req: false }" class="col-12 px-1"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionAdd, { className: "QuestionAdd", filePath: "app/feature/edu-question/question/question-add/question-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-question/edu-question-routing-module.ts
var Routez = new RoutezFeatureModule(["Question"], "feature/question-bank").feature(QuestionType, QuestionTypeAdd, "question-type", "Question Type").feature(Question, QuestionAdd, "question", "Question").build();

// src/app/feature/edu-question/edu-question-module.ts
var EduQuestionModule = class _EduQuestionModule {
  static \u0275fac = function EduQuestionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EduQuestionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EduQuestionModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EduQuestionModule, [{
    type: NgModule,
    args: [{
      declarations: [
        Question,
        QuestionAdd,
        QuestionType,
        QuestionTypeAdd
      ],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  EduQuestionModule
};
//# sourceMappingURL=chunk-YINOFRQX.js.map
