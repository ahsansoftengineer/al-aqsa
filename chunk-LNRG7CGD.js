import {
  MatzThemeModule
} from "./chunk-E7XMMLID.js";
import "./chunk-YP6VUGOR.js";
import {
  MatGridList,
  MatGridTile
} from "./chunk-ZXIHQBTG.js";
import {
  Btn,
  UtilModule
} from "./chunk-NUMUS44L.js";
import {
  MenuSimpleIndex
} from "./chunk-MDVOS3SG.js";
import {
  BaseClassTemplate
} from "./chunk-4TLJ3PRD.js";
import {
  TranslatePipe
} from "./chunk-EA5SXDL7.js";
import "./chunk-WM4BZMUA.js";
import "./chunk-4IXXCYRN.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent
} from "./chunk-VQZP2W2M.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  RouterModule,
  RouterOutlet,
  ViewEncapsulation,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IHXJMWXB.js";

// src/app/feature-print/z-template-feature-print/ztemplate-feature-print.ts
var ZTemplateFeaturePrint = class _ZTemplateFeaturePrint extends BaseClassTemplate {
  title = signal(
    0,
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    super();
    this._template.DATA.subscribe({
      next: (data) => {
        console.log({ DATA: this.DATA = data });
        setTimeout(() => {
          this.title.update((i) => data.title);
          this._template._cdr.detectChanges();
        }, 100);
      }
    });
  }
  ngOnInit() {
  }
  static \u0275fac = function ZTemplateFeaturePrint_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZTemplateFeaturePrint)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZTemplateFeaturePrint, selectors: [["aam-feature-print"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 6, consts: [[1, "dashboard-card", "p-0", "m-1"], [1, "dashboard-card-content", "p-1"], ["cols", "12", "rowHeight", "55px", 1, "mb-2"], [1, "flex--start", 3, "colspan"], [1, "m-0", "mt-1", "fs-5"], [1, "flex--end", 2, "overflow", "visible", 3, "colspan"], ["lbl", "Print", "icon", "printer", 3, "clickz"], ["cols", "1", 3, "rowHeight"], ["colspan", "1"], [1, "m-1", "mx-0", 2, "width", "100%", "height", "100%", "overflow-x", "auto"], ["cols", "1", "rowHeight", "60px", 1, "mt-2"], ["colspan", "1", 1, "flex--end"], ["align", "end", 1, "px-0"]], template: function ZTemplateFeaturePrint_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-content", 1)(2, "mat-grid-list", 2)(3, "mat-grid-tile", 3)(4, "section")(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "mat-grid-tile", 5)(9, "btn", 6);
      \u0275\u0275listener("clickz", function ZTemplateFeaturePrint_Template_btn_clickz_9_listener() {
        return null;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "mat-grid-list", 7)(11, "mat-grid-tile", 8)(12, "div", 9);
      \u0275\u0275element(13, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "mat-grid-list", 10)(15, "mat-grid-tile", 11);
      \u0275\u0275element(16, "mat-card-actions", 12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("colspan", 6);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, ctx._template?.title || "Title not Routing"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("colspan", 6);
      \u0275\u0275advance(2);
      \u0275\u0275property("rowHeight", ctx._template?.LG ? "76.5vh" : "73vh");
    }
  }, dependencies: [Btn, RouterOutlet, MatCard, MatCardActions, MatCardContent, MatGridList, MatGridTile, TranslatePipe], styles: ['@charset "UTF-8";\n\n/* src/app/feature-print/z-template-feature-print/ztemplate-feature-print.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n.mat-mdc-card-actions {\n  width: 100%;\n}\n/*# sourceMappingURL=ztemplate-feature-print-46BTJ4RT.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZTemplateFeaturePrint, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-feature-print", template: `<mat-card class="dashboard-card p-0 m-1">
  <mat-card-content class="dashboard-card-content p-1">
    <mat-grid-list class="mb-2" cols="12" rowHeight="55px">
      <mat-grid-tile [colspan]="6" class="flex--start">
        <section>
          <h1 class="m-0 mt-1 fs-5">
            {{ (_template?.title || 'Title not Routing') | translate }}
          </h1>
        </section>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="6" class="flex--end" style="overflow: visible;">
        <btn lbl="Print" icon="printer" (clickz)="null"></btn>
      </mat-grid-tile>
    </mat-grid-list>
    <mat-grid-list cols="1" [rowHeight]="_template?.LG ? '76.5vh' : '73vh'">
      <mat-grid-tile colspan="1">
        <div class="m-1 mx-0" style="width: 100%; height: 100%; overflow-x: auto;">
          <router-outlet></router-outlet>
        </div>
      </mat-grid-tile>
    </mat-grid-list>
    <mat-grid-list cols="1" rowHeight="60px" class="mt-2">
      <mat-grid-tile colspan="1" class="flex--end">
        <mat-card-actions align="end" class="px-0">
          <!-- <btn-link lbl="Cancel" icon="cancel" [link]="_template?.linkPaginate"></btn-link> -->
        </mat-card-actions>
      </mat-grid-tile>
    </mat-grid-list>
  </mat-card-content>
</mat-card>
`, styles: ['@charset "UTF-8";\n\n/* src/app/feature-print/z-template-feature-print/ztemplate-feature-print.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n.mat-mdc-card-actions {\n  width: 100%;\n}\n/*# sourceMappingURL=ztemplate-feature-print-46BTJ4RT.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZTemplateFeaturePrint, { className: "ZTemplateFeaturePrint", filePath: "app/feature-print/z-template-feature-print/ztemplate-feature-print.ts", lineNumber: 18 });
})();

// src/app/feature-print/form-admission/form-admission.ts
var FormAdmissionComponent = class _FormAdmissionComponent extends BaseClassTemplate {
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormAdmissionComponent_BaseFactory;
    return function FormAdmissionComponent_Factory(__ngFactoryType__) {
      return (\u0275FormAdmissionComponent_BaseFactory || (\u0275FormAdmissionComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FormAdmissionComponent)))(__ngFactoryType__ || _FormAdmissionComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormAdmissionComponent, selectors: [["aam-form-admission"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, template: function FormAdmissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "form-admission works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormAdmissionComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-form-admission", template: "<p>form-admission works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormAdmissionComponent, { className: "FormAdmissionComponent", filePath: "app/feature-print/form-admission/form-admission.ts", lineNumber: 13 });
})();

// src/app/feature-print/form-explanation/form-explanation.ts
var FormExplanationComponent = class _FormExplanationComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function FormExplanationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormExplanationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormExplanationComponent, selectors: [["aam-form-explanation"]], standalone: false, decls: 2, vars: 0, template: function FormExplanationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "form-explanation works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormExplanationComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-form-explanation", template: "<p>form-explanation works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormExplanationComponent, { className: "FormExplanationComponent", filePath: "app/feature-print/form-explanation/form-explanation.ts", lineNumber: 12 });
})();

// src/app/feature-print/form-leave/form-leave.ts
var FormLeaveComponent = class _FormLeaveComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function FormLeaveComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormLeaveComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormLeaveComponent, selectors: [["aam-form-leave"]], standalone: false, decls: 2, vars: 0, template: function FormLeaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "form-leave works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormLeaveComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-form-leave", template: "<p>form-leave works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormLeaveComponent, { className: "FormLeaveComponent", filePath: "app/feature-print/form-leave/form-leave.ts", lineNumber: 12 });
})();

// src/app/feature-print/report-attendance/report-attendance.ts
var ReportAttendance = class _ReportAttendance {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function ReportAttendance_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportAttendance)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportAttendance, selectors: [["aam-report-attendance"]], standalone: false, decls: 2, vars: 0, template: function ReportAttendance_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "report-attendance works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportAttendance, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-report-attendance", template: "<p>report-attendance works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportAttendance, { className: "ReportAttendance", filePath: "app/feature-print/report-attendance/report-attendance.ts", lineNumber: 12 });
})();

// src/app/feature-print/feature-print-routing.module.ts
var routes = [
  {
    path: "",
    component: ZTemplateFeaturePrint,
    children: [
      {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
      },
      {
        path: "index",
        component: MenuSimpleIndex,
        data: {
          title: "Feature Module"
        }
      },
      {
        path: "form-admission",
        component: FormAdmissionComponent,
        data: {
          title: "Form Admission"
        }
      },
      {
        path: "form-explanation",
        component: FormExplanationComponent,
        data: {
          title: "Form Explanation"
        }
      },
      {
        path: "form-leave",
        component: FormLeaveComponent,
        data: {
          title: "Form Leave"
        }
      },
      {
        path: "report-attendance",
        component: ReportAttendance,
        data: {
          title: "Report Attendace"
        }
      }
    ]
  }
];
var FeatureRoutingModule = class _FeatureRoutingModule {
  static \u0275fac = function FeatureRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeatureRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/feature-print/feature-print.module.ts
var FeaturePrintModule = class _FeaturePrintModule {
  static \u0275fac = function FeaturePrintModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturePrintModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeaturePrintModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [UtilModule, MatzThemeModule, FeatureRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturePrintModule, [{
    type: NgModule,
    args: [{
      declarations: [
        FormAdmissionComponent,
        ReportAttendance,
        FormLeaveComponent,
        FormExplanationComponent,
        ZTemplateFeaturePrint
      ],
      imports: [UtilModule, MatzThemeModule, FeatureRoutingModule]
    }]
  }], null, null);
})();
export {
  FeaturePrintModule
};
//# sourceMappingURL=chunk-LNRG7CGD.js.map
