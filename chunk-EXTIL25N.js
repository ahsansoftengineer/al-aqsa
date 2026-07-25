import {
  CtrlDDStatic,
  CtrlTxt,
  FormBasic,
  SharedModule
} from "./chunk-FVHHZZNG.js";
import {
  TblColTemplate
} from "./chunk-ZDXZVHP6.js";
import {
  RoutezFeatureModule
} from "./chunk-IMU3S4IQ.js";
import {
  BaseClassTemplate
} from "./chunk-5OZXRHGX.js";
import {
  FormBase,
  TMSubmit,
  TM_List,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-LLP7JRYF.js";
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1
} from "./chunk-HWCWTAOC.js";

// src/app/feature/edu-syllabus/book/book.ts
var Book = class _Book extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Book
    }, [
      { key: "subjectzId", name: "Subject" },
      { key: "instituteId", name: "Institute" },
      { key: "classId", name: "Class" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Book_BaseFactory;
    return function Book_Factory(__ngFactoryType__) {
      return (\u0275Book_BaseFactory || (\u0275Book_BaseFactory = \u0275\u0275getInheritedFactory(_Book)))(__ngFactoryType__ || _Book);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Book, selectors: [["aam-book"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Book_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Book, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-book", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Book, { className: "Book", filePath: "app/feature/edu-syllabus/book/book.ts", lineNumber: 18 });
})();

// src/app/feature/edu-syllabus/book/book-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    subjectzId: [d?.subjectId || 1],
    instituteId: [d?.instituteId || ""],
    classId: [d?.classId || ""],
    urlImage: [d?.urlImage || ""]
  }));
}

// src/app/feature/edu-syllabus/book/book-add/book-add.ts
var _c0 = () => ({ field: "subjectzId", lbl: "Subject", req: false });
var _c1 = (a0) => ({ listStatic: a0 });
var _c2 = () => ({ field: "instituteId", lbl: "Institute", req: false });
var _c3 = () => ({ field: "classId", lbl: "Class", req: false });
var _c4 = () => ({ field: "urlImage", lbl: "Book Image", req: false });
var BookAdd = class _BookAdd extends BaseClassTemplate {
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
      cntrl: URL_CONTRL.Edu.Book
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function BookAdd_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookAdd)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookAdd, selectors: [["aam-book-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 17, consts: [["moreInfo", ""], [3, "ctrl", "listz"], [3, "ctrl"]], template: function BookAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-static", 1)(3, "ctrl-dd-static", 1)(4, "ctrl-dd-static", 1)(5, "ctrl-txt", 2);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(7, _c0))("listz", \u0275\u0275pureFunction1(8, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(10, _c2))("listz", \u0275\u0275pureFunction1(11, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(13, _c3))("listz", \u0275\u0275pureFunction1(14, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(16, _c4));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDStatic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-book-add", template: `<form-basic>\r
   <ng-container moreInfo >\r
     <ctrl-dd-static [ctrl]="{ field: 'subjectzId', lbl: 'Subject', req: false }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
     <ctrl-dd-static [ctrl]="{ field: 'instituteId', lbl: 'Institute', req: false }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
     <ctrl-dd-static [ctrl]="{ field: 'classId', lbl: 'Class', req: false }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
     <ctrl-txt [ctrl]="{ field: 'urlImage', lbl: 'Book Image', req: false }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookAdd, { className: "BookAdd", filePath: "app/feature/edu-syllabus/book/book-add/book-add.ts", lineNumber: 18 });
})();

// src/app/feature/edu-syllabus/chapter/chapter.ts
var Chapter = class _Chapter extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Chapter
    }, [
      { key: "bookId", name: "Book" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Chapter_BaseFactory;
    return function Chapter_Factory(__ngFactoryType__) {
      return (\u0275Chapter_BaseFactory || (\u0275Chapter_BaseFactory = \u0275\u0275getInheritedFactory(_Chapter)))(__ngFactoryType__ || _Chapter);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Chapter, selectors: [["aam-chapter"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Chapter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chapter, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-chapter", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chapter, { className: "Chapter", filePath: "app/feature/edu-syllabus/chapter/chapter.ts", lineNumber: 18 });
})();

// src/app/feature/edu-syllabus/chapter/chapter-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    bookId: [d?.bookId || 1],
    urlImage: [d?.urlImage || ""]
  }));
}

// src/app/feature/edu-syllabus/chapter/chapter-add/chapter-add.ts
var _c02 = () => ({ field: "bookId", lbl: "Book", req: false });
var _c12 = (a0) => ({ listStatic: a0 });
var _c22 = () => ({ field: "urlImage", lbl: "Chapter Image", req: false });
var ChapterAdd = class _ChapterAdd extends BaseClassTemplate {
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
      cntrl: URL_CONTRL.Edu.Chapter
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function ChapterAdd_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChapterAdd)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChapterAdd, selectors: [["aam-Chapter-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [["moreInfo", ""], [3, "ctrl", "listz"], [3, "ctrl"]], template: function ChapterAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainerStart(1, 0);
      \u0275\u0275element(2, "ctrl-dd-static", 1)(3, "ctrl-txt", 2);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(3, _c02))("listz", \u0275\u0275pureFunction1(4, _c12, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(6, _c22));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDStatic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChapterAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-Chapter-add", template: `<form-basic>\r
   <ng-container moreInfo >\r
     <ctrl-dd-static [ctrl]="{ field: 'bookId', lbl: 'Book', req: false }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
     <ctrl-txt [ctrl]="{ field: 'urlImage', lbl: 'Chapter Image', req: false }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChapterAdd, { className: "ChapterAdd", filePath: "app/feature/edu-syllabus/chapter/chapter-add/chapter-add.ts", lineNumber: 18 });
})();

// src/app/feature/edu-syllabus/subjectz/subjectz.ts
var Subjectz = class _Subjectz extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Subjectz
    }).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Subjectz_BaseFactory;
    return function Subjectz_Factory(__ngFactoryType__) {
      return (\u0275Subjectz_BaseFactory || (\u0275Subjectz_BaseFactory = \u0275\u0275getInheritedFactory(_Subjectz)))(__ngFactoryType__ || _Subjectz);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Subjectz, selectors: [["aam-subjectz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Subjectz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Subjectz, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-subjectz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Subjectz, { className: "Subjectz", filePath: "app/feature/edu-syllabus/subjectz/subjectz.ts", lineNumber: 18 });
})();

// src/app/feature/edu-syllabus/subjectz/subjectz-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu-syllabus/subjectz/subjectz-add/subjectz-add.ts
var SubjectzAdd = class _SubjectzAdd extends BaseClassTemplate {
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
      cntrl: URL_CONTRL.Edu.Subjectz
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = function SubjectzAdd_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubjectzAdd)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubjectzAdd, selectors: [["aam-subjectz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [["moreInfo", ""]], template: function SubjectzAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic");
      \u0275\u0275elementContainer(1, 0);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubjectzAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-subjectz-add", template: "<form-basic>\r\n  <ng-container moreInfo ></ng-container>\r\n</form-basic>\r\n" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubjectzAdd, { className: "SubjectzAdd", filePath: "app/feature/edu-syllabus/subjectz/subjectz-add/subjectz-add.ts", lineNumber: 18 });
})();

// src/app/feature/edu-syllabus/edu-syllabus-routing.module.ts
var Routez = new RoutezFeatureModule(["Syllabus"], "feature/syllabus").feature(Subjectz, SubjectzAdd, "subject", "Subject").feature(Book, BookAdd, "book", "Book").feature(Chapter, ChapterAdd, "chapter", "Chapter").build();

// src/app/feature/edu-syllabus/edu-syllabus.module.ts
var EduSyllabusModule = class _EduSyllabusModule {
  static \u0275fac = function EduSyllabusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EduSyllabusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EduSyllabusModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EduSyllabusModule, [{
    type: NgModule,
    args: [{
      declarations: [
        Subjectz,
        Book,
        Chapter,
        BookAdd,
        ChapterAdd,
        SubjectzAdd
      ],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  EduSyllabusModule
};
//# sourceMappingURL=chunk-EXTIL25N.js.map
