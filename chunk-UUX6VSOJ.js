import {
  CtrlDDStatic,
  CtrlTxt,
  FormBasic,
  SharedModule
} from "./chunk-I63V5HJX.js";
import {
  TblColTemplate
} from "./chunk-2DCOEMMN.js";
import {
  RoutezFeatureModule
} from "./chunk-YKEEMS4B.js";
import {
  BaseClassTemplate
} from "./chunk-H74UE4AP.js";
import {
  FormBase,
  TMSubmit,
  TM_List,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-KUIYJW6G.js";
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
  ɵɵpureFunction1
} from "./chunk-IHXJMWXB.js";

// src/app/feature/edu-library/library/library-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu-library/library/library-add/library-add.ts
var LibraryAdd = class _LibraryAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Library
      // Library
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryAdd_BaseFactory;
    return function LibraryAdd_Factory(__ngFactoryType__) {
      return (\u0275LibraryAdd_BaseFactory || (\u0275LibraryAdd_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryAdd)))(__ngFactoryType__ || _LibraryAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryAdd, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function LibraryAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: '<form-basic [isMoreinfo]="false"></form-basic>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryAdd, { className: "LibraryAdd", filePath: "app/feature/edu-library/library/library-add/library-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-library/library/library.ts
var Library = class _Library extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Library
    }, []).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Library_BaseFactory;
    return function Library_Factory(__ngFactoryType__) {
      return (\u0275Library_BaseFactory || (\u0275Library_BaseFactory = \u0275\u0275getInheritedFactory(_Library)))(__ngFactoryType__ || _Library);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Library, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function Library_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Library, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Library, { className: "Library", filePath: "app/feature/edu-library/library/library.ts", lineNumber: 18 });
})();

// src/app/feature/edu-library/library-cabinet/library-cabinet.ts
var LibraryCabinet = class _LibraryCabinet extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryCabinet
    }, [
      { key: "libraryCabinet", name: "Library" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryCabinet_BaseFactory;
    return function LibraryCabinet_Factory(__ngFactoryType__) {
      return (\u0275LibraryCabinet_BaseFactory || (\u0275LibraryCabinet_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryCabinet)))(__ngFactoryType__ || _LibraryCabinet);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryCabinet, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function LibraryCabinet_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryCabinet, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryCabinet, { className: "LibraryCabinet", filePath: "app/feature/edu-library/library-cabinet/library-cabinet.ts", lineNumber: 18 });
})();

// src/app/feature/edu-library/library-cabinet/library-cabinet-add/form.ts
function MyForm2(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu-library/library-cabinet/library-cabinet-add/library-cabinet-add.ts
var LibraryCabinetAdd = class _LibraryCabinetAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm2(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryCabinet
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryCabinetAdd_BaseFactory;
    return function LibraryCabinetAdd_Factory(__ngFactoryType__) {
      return (\u0275LibraryCabinetAdd_BaseFactory || (\u0275LibraryCabinetAdd_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryCabinetAdd)))(__ngFactoryType__ || _LibraryCabinetAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryCabinetAdd, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function LibraryCabinetAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryCabinetAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: '<form-basic [isMoreinfo]="false"></form-basic>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryCabinetAdd, { className: "LibraryCabinetAdd", filePath: "app/feature/edu-library/library-cabinet/library-cabinet-add/library-cabinet-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-library/library-shelf/library-shelf.ts
var LibraryShelf = class _LibraryShelf extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryShelf
    }, []).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryShelf_BaseFactory;
    return function LibraryShelf_Factory(__ngFactoryType__) {
      return (\u0275LibraryShelf_BaseFactory || (\u0275LibraryShelf_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryShelf)))(__ngFactoryType__ || _LibraryShelf);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryShelf, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function LibraryShelf_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryShelf, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryShelf, { className: "LibraryShelf", filePath: "app/feature/edu-library/library-shelf/library-shelf.ts", lineNumber: 18 });
})();

// src/app/feature/edu-library/library-shelf/library-shelf-add/form.ts
function MyForm3(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/edu-library/library-shelf/library-shelf-add/library-shelf-add.ts
var LibraryShelfAdd = class _LibraryShelfAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm3(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryShelf
      // Library
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryShelfAdd_BaseFactory;
    return function LibraryShelfAdd_Factory(__ngFactoryType__) {
      return (\u0275LibraryShelfAdd_BaseFactory || (\u0275LibraryShelfAdd_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryShelfAdd)))(__ngFactoryType__ || _LibraryShelfAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryShelfAdd, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function LibraryShelfAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryShelfAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: '<form-basic [isMoreinfo]="false"></form-basic>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryShelfAdd, { className: "LibraryShelfAdd", filePath: "app/feature/edu-library/library-shelf/library-shelf-add/library-shelf-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-library/library-book/library-book.ts
var LibraryBook = class _LibraryBook extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryBook
    }, [
      { key: "libraryId", name: "Library" },
      { key: "cabinetId", name: "Cabinet" },
      { key: "shelfId", name: "Shelf" },
      { key: "publisher", name: "Publisher" },
      { key: "author", name: "Author" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryBook_BaseFactory;
    return function LibraryBook_Factory(__ngFactoryType__) {
      return (\u0275LibraryBook_BaseFactory || (\u0275LibraryBook_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryBook)))(__ngFactoryType__ || _LibraryBook);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryBook, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function LibraryBook_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryBook, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryBook, { className: "LibraryBook", filePath: "app/feature/edu-library/library-book/library-book.ts", lineNumber: 18 });
})();

// src/app/feature/edu-library/library-book/library-book-add/form.ts
function MyForm4(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    libraryId: [d?.libraryId || "", that._vs._val("Library")],
    cabinetId: [d?.cabinetId || "", that._vs._val("Cabinet")],
    shelfId: [d?.shelfId || "", that._vs._val("Shelf")],
    publisher: [d?.publisher || ""],
    author: [d?.author || ""]
  }));
}

// src/app/feature/edu-library/library-book/library-book-add/library-book-add.ts
var _c0 = () => ({ field: "libraryId", lbl: "Library" });
var _c1 = (a0) => ({ listStatic: a0 });
var _c2 = () => ({ field: "cabinetId", lbl: "Cabinet" });
var _c3 = () => ({ field: "shelfId", lbl: "Shelf" });
var _c4 = () => ({ field: "publisher", lbl: "Publisher" });
var _c5 = () => ({ field: "author", lbl: "Author" });
var LibraryBookAdd = class _LibraryBookAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm4(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryBook
      // Library
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275LibraryBookAdd_BaseFactory;
    return function LibraryBookAdd_Factory(__ngFactoryType__) {
      return (\u0275LibraryBookAdd_BaseFactory || (\u0275LibraryBookAdd_BaseFactory = \u0275\u0275getInheritedFactory(_LibraryBookAdd)))(__ngFactoryType__ || _LibraryBookAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryBookAdd, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 20, consts: [[3, "isMoreinfo"], ["moreInfo", ""], [3, "ctrl", "listz"], [3, "ctrl"]], template: function LibraryBookAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275element(2, "ctrl-dd-static", 2)(3, "ctrl-dd-static", 2)(4, "ctrl-dd-static", 2)(5, "ctrl-txt", 3)(6, "ctrl-txt", 3);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(9, _c0))("listz", \u0275\u0275pureFunction1(10, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(12, _c2))("listz", \u0275\u0275pureFunction1(13, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(15, _c3))("listz", \u0275\u0275pureFunction1(16, _c1, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(18, _c4));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(19, _c5));
    }
  }, dependencies: [FormBasic, CtrlTxt, CtrlDDStatic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryBookAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: `<form-basic [isMoreinfo]="true">\r
  <ng-container moreInfo>\r
    <ctrl-dd-static [ctrl]="{ field: 'libraryId', lbl: 'Library' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
    <ctrl-dd-static [ctrl]="{ field: 'cabinetId', lbl: 'Cabinet' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
    <ctrl-dd-static [ctrl]="{ field: 'shelfId', lbl: 'Shelf' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
    <ctrl-txt [ctrl]="{ field: 'publisher', lbl: 'Publisher' }"></ctrl-txt>\r
    <ctrl-txt [ctrl]="{ field: 'author', lbl: 'Author' }"></ctrl-txt>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryBookAdd, { className: "LibraryBookAdd", filePath: "app/feature/edu-library/library-book/library-book-add/library-book-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-library/book-issue/book-issue.ts
var BookIssue = class _BookIssue extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryBook
    }, [
      { key: "student", name: "Student" },
      { key: "libraryBook", name: "Book" },
      { key: "libraryAttendant", name: "Attendant" }
    ]).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BookIssue_BaseFactory;
    return function BookIssue_Factory(__ngFactoryType__) {
      return (\u0275BookIssue_BaseFactory || (\u0275BookIssue_BaseFactory = \u0275\u0275getInheritedFactory(_BookIssue)))(__ngFactoryType__ || _BookIssue);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookIssue, selectors: [["aam-classz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "lb"]], template: function BookIssue_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookIssue, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz", template: '<tbl-col-template [lb]="_template?.lb"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookIssue, { className: "BookIssue", filePath: "app/feature/edu-library/book-issue/book-issue.ts", lineNumber: 18 });
})();

// src/app/feature/edu-library/book-issue/book-issue-add/form.ts
function MyForm5(that, d = {}) {
  that._fs._form = that._fb.group(__spreadProps(__spreadValues({}, FormBase(that, d)), {
    studentId: [d?.studentId || "", that._vs._val("Student")],
    libraryBookId: [d?.libraryBookId || "", that._vs._val("Book")],
    attendantId: [d?.attendantId || "", that._vs._val("Attendant")]
  }));
}

// src/app/feature/edu-library/book-issue/book-issue-add/book-issue-add.ts
var _c02 = () => ({ field: "libraryBookId", lbl: "Book" });
var _c12 = (a0) => ({ listStatic: a0 });
var _c22 = () => ({ field: "studentId", lbl: "Student" });
var _c32 = () => ({ field: "attendantId", lbl: "Attendant" });
var BookIssueAdd = class _BookIssueAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm5(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.LibraryBook
      // Library
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BookIssueAdd_BaseFactory;
    return function BookIssueAdd_Factory(__ngFactoryType__) {
      return (\u0275BookIssueAdd_BaseFactory || (\u0275BookIssueAdd_BaseFactory = \u0275\u0275getInheritedFactory(_BookIssueAdd)))(__ngFactoryType__ || _BookIssueAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookIssueAdd, selectors: [["aam-classz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 16, consts: [[3, "isMoreinfo"], ["moreInfo", ""], [3, "ctrl", "listz"]], template: function BookIssueAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form-basic", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275element(2, "ctrl-dd-static", 2)(3, "ctrl-dd-static", 2)(4, "ctrl-dd-static", 2);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(7, _c02))("listz", \u0275\u0275pureFunction1(8, _c12, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(10, _c22))("listz", \u0275\u0275pureFunction1(11, _c12, ctx._ss.STATUS));
      \u0275\u0275advance();
      \u0275\u0275property("ctrl", \u0275\u0275pureFunction0(13, _c32))("listz", \u0275\u0275pureFunction1(14, _c12, ctx._ss.STATUS));
    }
  }, dependencies: [FormBasic, CtrlDDStatic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookIssueAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-classz-add", template: `<form-basic [isMoreinfo]="true">\r
  <ng-container moreInfo>\r
    <ctrl-dd-static [ctrl]="{ field: 'libraryBookId', lbl: 'Book' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
    <ctrl-dd-static [ctrl]="{ field: 'studentId', lbl: 'Student' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
    <ctrl-dd-static [ctrl]="{ field: 'attendantId', lbl: 'Attendant' }" [listz]="{ listStatic: _ss.STATUS }"></ctrl-dd-static>\r
  </ng-container>\r
</form-basic>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookIssueAdd, { className: "BookIssueAdd", filePath: "app/feature/edu-library/book-issue/book-issue-add/book-issue-add.ts", lineNumber: 17 });
})();

// src/app/feature/edu-library/edu-library-routing-module.ts
var Routez = new RoutezFeatureModule(["Libarary", "Attendance"], "feature/library").feature(Library, LibraryAdd, "library", "Library").feature(LibraryCabinet, LibraryCabinetAdd, "library-cabinet", "Library Cabinet").feature(LibraryShelf, LibraryShelfAdd, "library-shelf", "Library Shelf").feature(LibraryBook, LibraryBookAdd, "library-book", "Library Book").feature(BookIssue, BookIssueAdd, "book-issue", "Book Issue").build();

// src/app/feature/edu-library/edu-library-module.ts
var EduLibraryModule = class _EduLibraryModule {
  static \u0275fac = function EduLibraryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EduLibraryModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EduLibraryModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EduLibraryModule, [{
    type: NgModule,
    args: [{
      declarations: [
        Library,
        LibraryAdd,
        LibraryCabinet,
        LibraryCabinetAdd,
        LibraryShelf,
        LibraryShelfAdd,
        LibraryBook,
        LibraryBookAdd,
        BookIssue,
        BookIssueAdd
      ],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  EduLibraryModule
};
//# sourceMappingURL=chunk-UUX6VSOJ.js.map
