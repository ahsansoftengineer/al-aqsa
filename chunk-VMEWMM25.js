import {
  SharedModule
} from "./chunk-6SAPD2Q3.js";
import "./chunk-FB2EAZ4J.js";
import {
  RoutezFeatureModule
} from "./chunk-XDNOSMU5.js";
import {
  BaseClassTemplate
} from "./chunk-P2RKEVL2.js";
import "./chunk-CKWZC2YS.js";
import "./chunk-5EUKFK7D.js";
import "./chunk-ACFZPOBY.js";
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
} from "./chunk-PXBP2UP3.js";

// src/app/feature/education-syllabus/book/book.component.ts
var BookComponent = class _BookComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BookComponent_BaseFactory;
    return function BookComponent_Factory(__ngFactoryType__) {
      return (\u0275BookComponent_BaseFactory || (\u0275BookComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookComponent)))(__ngFactoryType__ || _BookComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookComponent, selectors: [["aam-book"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function BookComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-book", template: `<!-- <div class="mat_table" *ngIf="lb.ds">\r
  <table mat-table matSort [dataSource]="lb.ds" style="box-shadow: none;" (matSortChange)="lb.sort($event)">\r
    <ng-container matColumnDef="id">\r
      <th style="width: 40px" mat-header-cell *matHeaderCellDef>{{ 'S No' | translate }}</th>\r
      <td mat-cell *matCellDef="let item; let i = index"> {{i + (lb.tbl.index * lb.tbl.size) + 1}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="code">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <tbl-cntrl-txt field='code' lbl='Code' [group]='lb.fh'></tbl-cntrl-txt>\r
      </th>\r
      <td mat-cell *matCellDef="let item"> {{item?.code}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="title">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <tbl-cntrl-txt field='title' lbl='Title' [group]='lb.fh'></tbl-cntrl-txt>\r
      </th>\r
      <td mat-cell *matCellDef="let item"> {{item?.title}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="author">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <tbl-cntrl-txt field='author' lbl='Author' [group]='lb.fh'></tbl-cntrl-txt>\r
      </th>\r
      <td mat-cell *matCellDef="let item"> {{item?.author}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="isbn">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <tbl-cntrl-txt field='isbn' lbl='ISBN' [group]='lb.fh'></tbl-cntrl-txt>\r
      </th>\r
      <td mat-cell *matCellDef="let item"> {{item?.isbn}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="publisher">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <tbl-cntrl-txt field='publisher' lbl='Publisher' [group]='lb.fh'></tbl-cntrl-txt>\r
      </th>\r
      <td mat-cell *matCellDef="let item"> {{item?.publisher}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <tbl-cntrl-txt field='status' lbl='Status' [group]='lb.fh'></tbl-cntrl-txt>\r
      </th>\r
      <td mat-cell *matCellDef="let item"> {{item?.status}} </td>\r
    </ng-container>\r
\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
        <span style="font-size:16px; font-weight: 400;">Actions</span>\r
      </th>\r
      <td mat-cell *matCellDef="let item">\r
        <tbl-actions [record]="item"></tbl-actions>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="lb.cols; sticky:true"></tr>\r
    <tr mat-row *matRowDef="let row; columns: lb.cols;"></tr>\r
  </table>\r
</div> -->\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookComponent, { className: "BookComponent", filePath: "app/feature/education-syllabus/book/book.component.ts", lineNumber: 12 });
})();

// src/app/feature/education-syllabus/book/book-add/book-add.component.ts
var BookAddComponent = class _BookAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function BookAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookAddComponent, selectors: [["aam-book-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function BookAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-book-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookAddComponent, { className: "BookAddComponent", filePath: "app/feature/education-syllabus/book/book-add/book-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education-syllabus/chapter/chapter.component.ts
var ChapterComponent = class _ChapterComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChapterComponent_BaseFactory;
    return function ChapterComponent_Factory(__ngFactoryType__) {
      return (\u0275ChapterComponent_BaseFactory || (\u0275ChapterComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChapterComponent)))(__ngFactoryType__ || _ChapterComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChapterComponent, selectors: [["aam-chapter"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ChapterComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChapterComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-chapter", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChapterComponent, { className: "ChapterComponent", filePath: "app/feature/education-syllabus/chapter/chapter.component.ts", lineNumber: 12 });
})();

// src/app/feature/education-syllabus/chapter/chapter-add/chapter-add.component.ts
var ChapterAddComponent = class _ChapterAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function ChapterAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChapterAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChapterAddComponent, selectors: [["aam-chapter-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function ChapterAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChapterAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-chapter-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChapterAddComponent, { className: "ChapterAddComponent", filePath: "app/feature/education-syllabus/chapter/chapter-add/chapter-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education-syllabus/question/question.component.ts
var QuestionComponent = class _QuestionComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275QuestionComponent_BaseFactory;
    return function QuestionComponent_Factory(__ngFactoryType__) {
      return (\u0275QuestionComponent_BaseFactory || (\u0275QuestionComponent_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionComponent)))(__ngFactoryType__ || _QuestionComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionComponent, selectors: [["aam-question"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function QuestionComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-question", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionComponent, { className: "QuestionComponent", filePath: "app/feature/education-syllabus/question/question.component.ts", lineNumber: 12 });
})();

// src/app/feature/education-syllabus/subjectz/subjectz.component.ts
var SubjectzComponent = class _SubjectzComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SubjectzComponent_BaseFactory;
    return function SubjectzComponent_Factory(__ngFactoryType__) {
      return (\u0275SubjectzComponent_BaseFactory || (\u0275SubjectzComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SubjectzComponent)))(__ngFactoryType__ || _SubjectzComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubjectzComponent, selectors: [["aam-subjectz"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function SubjectzComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubjectzComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-subjectz", template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubjectzComponent, { className: "SubjectzComponent", filePath: "app/feature/education-syllabus/subjectz/subjectz.component.ts", lineNumber: 12 });
})();

// src/app/feature/education-syllabus/subjectz/subjectz-add/subjectz-add.component.ts
var SubjectzAddComponent = class _SubjectzAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function SubjectzAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubjectzAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubjectzAddComponent, selectors: [["aam-subjectz-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function SubjectzAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubjectzAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-subjectz-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubjectzAddComponent, { className: "SubjectzAddComponent", filePath: "app/feature/education-syllabus/subjectz/subjectz-add/subjectz-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education-syllabus/education-syllabus-routing.module.ts
var Routez = new RoutezFeatureModule(["Syllabus"], "feature/syllabus").feature(SubjectzComponent, SubjectzAddComponent, "subject", "Subject").feature(BookComponent, BookAddComponent, "book", "Book").feature(ChapterComponent, ChapterAddComponent, "chapter", "Chapter").feature(QuestionComponent, QuestionComponent, "question", "Question").build();

// src/app/feature/education-syllabus/question/question-add/question-add.component.ts
var QuestionAddComponent = class _QuestionAddComponent extends BaseClassTemplate {
  route;
  constructor(route) {
    super();
    this.route = route;
  }
  ngOnInit() {
  }
  onEdit() {
  }
  static \u0275fac = function QuestionAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionAddComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionAddComponent, selectors: [["aam-question-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function QuestionAddComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionAddComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-question-add", template: "" }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionAddComponent, { className: "QuestionAddComponent", filePath: "app/feature/education-syllabus/question/question-add/question-add.component.ts", lineNumber: 13 });
})();

// src/app/feature/education-syllabus/education-syllabus.module.ts
var EducationSyllabusModule = class _EducationSyllabusModule {
  static \u0275fac = function EducationSyllabusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationSyllabusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EducationSyllabusModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    SharedModule,
    RouterModule.forChild(Routez)
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducationSyllabusModule, [{
    type: NgModule,
    args: [{
      declarations: [
        SubjectzComponent,
        BookComponent,
        ChapterComponent,
        QuestionComponent,
        BookAddComponent,
        ChapterAddComponent,
        QuestionAddComponent,
        SubjectzAddComponent
      ],
      imports: [
        SharedModule,
        RouterModule.forChild(Routez)
      ]
    }]
  }], null, null);
})();
export {
  EducationSyllabusModule
};
//# sourceMappingURL=chunk-VMEWMM25.js.map
