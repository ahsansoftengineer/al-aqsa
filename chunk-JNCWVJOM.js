import {
  MatzThemeModule
} from "./chunk-E7XMMLID.js";
import "./chunk-YP6VUGOR.js";
import {
  MatGridList,
  MatGridTile
} from "./chunk-ZXIHQBTG.js";
import {
  TableModule,
  TblActions,
  TblPaginatorComponent
} from "./chunk-SLABOE5U.js";
import {
  Btn,
  BtnLink
} from "./chunk-NUMUS44L.js";
import "./chunk-GUYV56QE.js";
import {
  MenuModuleIndex
} from "./chunk-76HBSMOK.js";
import {
  BaseClassTemplate
} from "./chunk-4TLJ3PRD.js";
import {
  EP,
  TranslateModule,
  TranslatePipe
} from "./chunk-EA5SXDL7.js";
import "./chunk-WM4BZMUA.js";
import "./chunk-4IXXCYRN.js";
import {
  A11yModule,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IHXJMWXB.js";

// src/app/feature/z-template-feature/ztemplate-feature.ts
function ZTemplateFeature_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0._template?.title), " ");
  }
}
function ZTemplateFeature_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-grid-tile", 5);
    \u0275\u0275element(1, "btn-link", 13);
    \u0275\u0275elementStart(2, "btn", 14);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_6_Template_btn_clickz_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.refresh());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "btn", 15);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_6_Template_btn_clickz_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.filterShow());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "tbl-actions");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("colspan", 6);
    \u0275\u0275advance();
    \u0275\u0275property("link", ctx_r0._template.linkAdd);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0._template?.lb?.filterDefaultShow ? "filter_alt" : "filter_alt_off");
  }
}
function ZTemplateFeature_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "btn", 16);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_14_Template_btn_clickz_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.tmSubmit.resetForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "btn", 17);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_14_Template_btn_clickz_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.tmSubmit.submit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "btn-link", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("link", ctx_r0._template?.linkPaginate);
  }
}
function ZTemplateFeature_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tbl-paginator", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("lb", ctx_r0._template.lb);
  }
}
var ZTemplateFeature = class _ZTemplateFeature extends BaseClassTemplate {
  constructor() {
    super();
    this._template.DATA.subscribe({
      next: (data) => {
        console.log({ DATA: this.DATA = data });
        setTimeout(() => {
          this._template._cdr.detectChanges();
        }, 100);
      }
    });
  }
  ngOnInit() {
  }
  step = signal(
    0,
    ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setStep(index) {
    this.step.set(index);
  }
  nextStep() {
    this.step.update((i) => i + 1);
  }
  prevStep() {
    this.step.update((i) => i - 1);
  }
  static \u0275fac = function ZTemplateFeature_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZTemplateFeature)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZTemplateFeature, selectors: [["aam-feature"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 5, consts: [[1, "dashboard-card", "p-0", "m-1"], [1, "dashboard-card-content", "p-1"], ["cols", "12", "rowHeight", "55px", 1, "mb-2"], [1, "flex--start", 3, "colspan"], [1, "m-0", "mt-1", "fs-5"], [1, "flex--end", 2, "overflow", "visible", 3, "colspan"], ["cols", "1", 3, "rowHeight"], ["colspan", "1"], [1, "m-1", "mx-0", 2, "width", "100%", "height", "100%", "overflow-x", "auto"], ["cols", "1", "rowHeight", "60px", 1, "mt-2"], ["colspan", "1", 1, "flex--end"], ["align", "end", 1, "px-0"], [3, "lb"], ["lbl", "Add", "icon", "local_hospital", 3, "link"], ["lbl", "Refresh", "icon", "autorenew", 3, "clickz"], ["lbl", "Filter", 3, "clickz", "icon"], ["lbl", "Reset", "icon", "cached", 3, "clickz"], ["lbl", "Save", "icon", "save", 3, "clickz"], ["lbl", "Cancel", "icon", "cancel", 3, "link"]], template: function ZTemplateFeature_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-content", 1)(2, "mat-grid-list", 2)(3, "mat-grid-tile", 3)(4, "section");
      \u0275\u0275conditionalCreate(5, ZTemplateFeature_Conditional_5_Template, 3, 3, "h1", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ZTemplateFeature_Conditional_6_Template, 5, 3, "mat-grid-tile", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-grid-list", 6)(8, "mat-grid-tile", 7)(9, "div", 8);
      \u0275\u0275element(10, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "mat-grid-list", 9)(12, "mat-grid-tile", 10)(13, "mat-card-actions", 11);
      \u0275\u0275conditionalCreate(14, ZTemplateFeature_Conditional_14_Template, 3, 1)(15, ZTemplateFeature_Conditional_15_Template, 1, 1, "tbl-paginator", 12);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("colspan", 6);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._template?.title ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._template?.linkAdd && ctx._template?.lb ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("rowHeight", ctx._template?.LG ? "76.5vh" : "73vh");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx._template?.linkPaginate && ctx._template.tmSubmit ? 14 : ctx._template.linkAdd && ctx._template.lb ? 15 : -1);
    }
  }, dependencies: [MatCard, MatCardActions, MatCardContent, MatGridList, MatGridTile, TblActions, TblPaginatorComponent, Btn, BtnLink, RouterOutlet, TranslatePipe], styles: ['@charset "UTF-8";\n\n/* src/app/feature/z-template-feature/ztemplate-feature.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n.mat-mdc-card-actions {\n  width: 100%;\n}\n/*# sourceMappingURL=ztemplate-feature-Q447ZZ7Y.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZTemplateFeature, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-feature", template: `<mat-card class="dashboard-card p-0 m-1">\r
  <mat-card-content class="dashboard-card-content p-1">\r
    <mat-grid-list class="mb-2" cols="12" rowHeight="55px">\r
      <mat-grid-tile [colspan]="6" class="flex--start">\r
        <section>\r
          @if (_template?.title) {\r
          <h1 class="m-0 mt-1 fs-5">\r
            {{ _template?.title | translate }}\r
          </h1>\r
          }\r
          <!-- <p>\r
            @for (l of (_template?.layer || []); track $index; let i = $index) {\r
            <a [href]="l">\r
              {{ i === 0 ? '' : ' / ' }} {{ l }}\r
            </a>\r
            }\r
          </p> -->\r
        </section>\r
      </mat-grid-tile>\r
      @if (_template?.linkAdd && _template?.lb) {\r
      <mat-grid-tile [colspan]="6" class="flex--end" style="overflow: visible;">\r
        <btn-link lbl="Add" icon="local_hospital" [link]="_template.linkAdd"></btn-link>\r
        <btn lbl="Refresh" icon="autorenew" (clickz)="_template.lb.refresh()"></btn>\r
        <btn lbl="Filter" [icon]="_template?.lb?.filterDefaultShow ? 'filter_alt' : 'filter_alt_off'" (clickz)="_template.lb.filterShow()"></btn>\r
        <!-- <btn lbl="More" icon="more_vert" [matMenuTriggerFor]="menu"></btn> -->\r
        <tbl-actions></tbl-actions>\r
\r
      </mat-grid-tile>\r
      }\r
    </mat-grid-list>\r
    <mat-grid-list cols="1" [rowHeight]="_template?.LG ? '76.5vh' : '73vh'">\r
      <mat-grid-tile colspan="1">\r
        <div class="m-1 mx-0" style="width: 100%; height: 100%; overflow-x: auto;">\r
          <router-outlet></router-outlet>\r
        </div>\r
      </mat-grid-tile>\r
    </mat-grid-list>\r
    <mat-grid-list cols="1" rowHeight="60px" class="mt-2">\r
\r
      <mat-grid-tile colspan="1" class="flex--end">\r
        <mat-card-actions align="end" class="px-0">\r
        @if (_template?.linkPaginate && _template.tmSubmit) {\r
          <btn lbl="Reset" icon="cached" (clickz)="_template.tmSubmit.resetForm()"></btn>\r
          <btn lbl="Save" icon="save" (clickz)="_template.tmSubmit.submit()"></btn>\r
          <btn-link lbl="Cancel" icon="cancel" [link]="_template?.linkPaginate"></btn-link>\r
        }@else if (_template.linkAdd && _template.lb) {\r
        <tbl-paginator [lb]="_template.lb"></tbl-paginator>\r
        }\r
      </mat-card-actions>\r
      </mat-grid-tile>\r
    </mat-grid-list>\r
\r
  </mat-card-content>\r
</mat-card>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/feature/z-template-feature/ztemplate-feature.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n.mat-mdc-card-actions {\n  width: 100%;\n}\n/*# sourceMappingURL=ztemplate-feature-Q447ZZ7Y.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZTemplateFeature, { className: "ZTemplateFeature", filePath: "app/feature/z-template-feature/ztemplate-feature.ts", lineNumber: 18 });
})();

// src/app/feature/feature-routing.module.ts
var routes = [
  {
    path: "",
    component: ZTemplateFeature,
    children: [
      {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
      },
      {
        path: "index",
        component: MenuModuleIndex,
        data: {
          title: "Feature Module",
          linkPaginate: ``,
          linkAdd: ``,
          linkUpdate: ``,
          permission: [EP.Gets],
          layer: ["Module", "Feature"]
        }
      },
      {
        path: "user",
        loadChildren: () => import("./chunk-CT37OE3M.js").then((m) => m.UserzModule)
      },
      {
        path: "account-in",
        loadChildren: () => import("./chunk-QDHKZNIE.js").then((m) => m.AccountInModule)
      },
      {
        path: "account-out",
        loadChildren: () => import("./chunk-DNJW5GNX.js").then((m) => m.AccountOutModule)
      },
      {
        path: "edu",
        loadChildren: () => import("./chunk-XLXJDJJX.js").then((m) => m.EduModule)
      },
      {
        path: "library",
        loadChildren: () => import("./chunk-Q4C3S3SN.js").then((m) => m.EduLibraryModule)
      },
      {
        path: "exam",
        loadChildren: () => import("./chunk-GHLALDCN.js").then((m) => m.EduExamModule)
      },
      {
        path: "syllabus",
        loadChildren: () => import("./chunk-KOCPY5WX.js").then((m) => m.EduSyllabusModule)
      },
      {
        path: "question-bank",
        loadChildren: () => import("./chunk-YINOFRQX.js").then((m) => m.EduQuestionModule)
      },
      {
        path: "file-upload",
        loadChildren: () => import("./chunk-AHCS5LCG.js").then((m) => m.FileUploadModule)
      },
      {
        path: "notification",
        loadChildren: () => import("./chunk-HCJAMCUC.js").then((m) => m.NotificationModule)
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

// src/app/feature/feature.module.ts
var FeatureModule = class _FeatureModule {
  static \u0275fac = function FeatureModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeatureModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    A11yModule,
    MatzThemeModule,
    TableModule,
    TranslateModule,
    FeatureRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureModule, [{
    type: NgModule,
    args: [{
      declarations: [ZTemplateFeature],
      imports: [
        A11yModule,
        MatzThemeModule,
        TableModule,
        TranslateModule,
        FeatureRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  FeatureModule
};
//# sourceMappingURL=chunk-JNCWVJOM.js.map
