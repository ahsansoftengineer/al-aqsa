import {
  SharedModule,
  TableModule,
  TblPaginatorComponent,
  UtilsModule
} from "./chunk-JQYBJK2E.js";
import "./chunk-3FESV426.js";
import {
  MatGridList,
  MatGridTile
} from "./chunk-IA7JGOYU.js";
import {
  BaseClassTemplate,
  TranslateModule,
  TranslatePipe
} from "./chunk-R6H5ONSM.js";
import {
  A11yModule,
  MatButton,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatIcon,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatMiniFabButton
} from "./chunk-53M6QTZO.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  RouterLink,
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
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PRTOJSNJ.js";

// src/app/feature/z-feature/feature.component.ts
var _c0 = () => [];
function FeatureComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 5);
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
function FeatureComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const \u0275$index_18_r3 = ctx.$index;
    \u0275\u0275property("href", l_r2, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275$index_18_r3 === 0 ? "" : " / ", " ", l_r2, " ");
  }
}
function FeatureComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19)(1, "mat-icon", 20);
    \u0275\u0275text(2, "local_hospital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_9_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.lb.refresh());
    });
    \u0275\u0275elementStart(7, "mat-icon", 20);
    \u0275\u0275text(8, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 21);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_9_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.lb.filterDefaultShow = !ctx_r0._template.lb.filterDefaultShow);
    });
    \u0275\u0275elementStart(13, "mat-icon", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 22)(19, "mat-icon");
    \u0275\u0275text(20, "more_vert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r6 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0._template.linkAdd);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "Add"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "Refresh"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0._template?.lb?.filterDefaultShow ? "filter_alt" : "filter_alt_off");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "Filter"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 13, "More"));
  }
}
function FeatureComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23)(1, "mat-icon");
    \u0275\u0275text(2, "local_hospital");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_9_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.lb.refresh());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_9_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.lb.filterDefaultShow = !ctx_r0._template.lb.filterDefaultShow);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 25)(10, "mat-icon");
    \u0275\u0275text(11, "more_vert");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r6 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0._template.linkAdd);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0._template?.lb?.filterDefaultShow ? "filter_alt" : "filter_alt_off");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
  }
}
function FeatureComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-grid-tile", 7);
    \u0275\u0275conditionalCreate(1, FeatureComponent_Conditional_9_Conditional_1_Template, 24, 15)(2, FeatureComponent_Conditional_9_Conditional_2_Template, 12, 3);
    \u0275\u0275elementStart(3, "mat-menu", 15, 0)(5, "button", 16);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.exportListToCSV());
    });
    \u0275\u0275elementStart(6, "mat-icon", 17);
    \u0275\u0275text(7, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "Download CSV");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.printList());
    });
    \u0275\u0275elementStart(11, "mat-icon", 17);
    \u0275\u0275text(12, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 18);
    \u0275\u0275text(14, "Print");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("colspan", ctx_r0._template.SM ? 12 : 7);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0._template?.LG ? 1 : !ctx_r0._template?.LG ? 2 : -1);
  }
}
function FeatureComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_16_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.fsb.resetForm());
    });
    \u0275\u0275elementStart(1, "mat-icon", 20);
    \u0275\u0275text(2, "cached");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_16_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.fsb.submit());
    });
    \u0275\u0275elementStart(7, "mat-icon", 20);
    \u0275\u0275text(8, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 19)(13, "mat-icon", 20);
    \u0275\u0275text(14, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "Reset"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "Save"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0._template?.linkPaginate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, "Cancel"));
  }
}
function FeatureComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_16_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.fsb.resetForm());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cached");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function FeatureComponent_Conditional_16_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.fsb.submit());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 23)(7, "mat-icon");
    \u0275\u0275text(8, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0._template?.linkPaginate);
  }
}
function FeatureComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-actions", 13);
    \u0275\u0275conditionalCreate(1, FeatureComponent_Conditional_16_Conditional_1_Template, 18, 10);
    \u0275\u0275conditionalCreate(2, FeatureComponent_Conditional_16_Conditional_2_Template, 9, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0._template?.LG && ctx_r0._template.fsb ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0._template?.LG && ctx_r0._template.fsb ? 2 : -1);
  }
}
function FeatureComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-actions", 14);
    \u0275\u0275element(1, "tbl-paginator", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("lb", ctx_r0._template.lb);
  }
}
var FeatureComponent = class _FeatureComponent extends BaseClassTemplate {
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
  static \u0275fac = function FeatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeatureComponent, selectors: [["aam-feature"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 7, consts: [["menu", "matMenu"], [1, "dashboard-card", "p-0", "m-0", "p-_template?.lg-2"], [1, "dashboard-card-content", "p-1"], ["cols", "12", "rowHeight", "55px", 1, ""], [1, "flex--start", 3, "colspan"], [1, "m-0", "mt-2", "fs-5"], [3, "href"], [1, "flex--end", "m-1", 3, "colspan"], ["cols", "1", 3, "rowHeight"], ["colspan", "1"], [1, "m-1", 2, "width", "100%", "height", "100%", "overflow-x", "auto"], ["cols", "1", "rowHeight", "60px"], ["colspan", "1", 1, "flex--end"], ["align", "end", 1, "m-2"], ["align", "end", 1, "mt-3"], ["type", "button"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "me-2", "text-secondary"], [1, "text-secondary"], ["mat-raised-button", "", "color", "primary", 1, "me-2", 3, "routerLink"], [1, "me-2"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "me-2", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", "type", "button", 1, "me-2", 3, "matMenuTriggerFor"], ["mat-mini-fab", "", "color", "primary", 1, "me-2", 3, "routerLink"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "me-2", 3, "click"], ["mat-mini-fab", "", "type", "button", 1, "me-2", 3, "matMenuTriggerFor"], ["mat-raised-button", "", "type", "button", "color", "primary", 1, "me-2", 3, "click"], [3, "lb"]], template: function FeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-card-content", 2)(2, "mat-grid-list", 3)(3, "mat-grid-tile", 4)(4, "section");
      \u0275\u0275conditionalCreate(5, FeatureComponent_Conditional_5_Template, 3, 3, "h1", 5);
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275repeaterCreate(7, FeatureComponent_For_8_Template, 2, 3, "a", 6, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, FeatureComponent_Conditional_9_Template, 15, 2, "mat-grid-tile", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-grid-list", 8)(11, "mat-grid-tile", 9)(12, "div", 10);
      \u0275\u0275element(13, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "mat-grid-list", 11)(15, "mat-grid-tile", 12);
      \u0275\u0275conditionalCreate(16, FeatureComponent_Conditional_16_Template, 3, 2, "mat-card-actions", 13);
      \u0275\u0275conditionalCreate(17, FeatureComponent_Conditional_17_Template, 2, 1, "mat-card-actions", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("colspan", ctx._template.SM || ctx._template.linkPaginate ? 12 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._template?.title ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._template?.layer || \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._template?.linkAdd && ctx._template?.lb ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("rowHeight", ctx._template?.LG ? "76.5vh" : "72vh");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx._template?.linkPaginate ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._template.linkAdd ? 17 : -1);
    }
  }, dependencies: [RouterOutlet, RouterLink, MatCard, MatCardActions, MatCardContent, MatGridList, MatGridTile, MatMenu, MatMenuItem, MatMenuTrigger, MatIcon, MatButton, MatMiniFabButton, TblPaginatorComponent, TranslatePipe], styles: ['@charset "UTF-8";\n\n/* src/app/feature/z-feature/feature.component.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n/*# sourceMappingURL=feature.component.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-feature", template: `<mat-card class="dashboard-card  p-0 m-0 p-_template?.lg-2">\r
  <mat-card-content class="dashboard-card-content p-1">\r
    <mat-grid-list class="" cols="12" rowHeight="55px">\r
      <mat-grid-tile [colspan]="_template.SM || _template.linkPaginate ? 12 : 5" class="flex--start">\r
        <section>\r
          @if (_template?.title) {\r
          <h1 class="m-0 mt-2 fs-5">\r
            {{ _template?.title | translate }}\r
          </h1>\r
          }\r
          <p>\r
            @for (l of (_template?.layer || []); track $index; let i = $index) {\r
            <a [href]="l">\r
              {{ i === 0 ? '' : ' / ' }} {{ l }}\r
            </a>\r
            }\r
          </p>\r
        </section>\r
      </mat-grid-tile>\r
      @if (_template?.linkAdd && _template?.lb) {\r
      <mat-grid-tile [colspan]="_template.SM ? 12 : 7" class="flex--end m-1">\r
        @if (_template?.LG) {\r
        <a mat-raised-button color="primary" class="me-2" [routerLink]="_template.linkAdd">\r
          <mat-icon class="me-2">local_hospital</mat-icon>\r
          <span>{{ 'Add' | translate }}</span>\r
        </a>\r
        <button mat-raised-button color="primary" class="me-2" type="button" (click)="_template.lb.refresh()">\r
          <mat-icon class="me-2">autorenew</mat-icon>\r
          <span>{{ 'Refresh' | translate }}</span>\r
        </button>\r
        <button mat-raised-button color="primary" class="me-2" type="button"\r
          (click)="_template.lb.filterDefaultShow = !_template.lb.filterDefaultShow">\r
          <mat-icon class="me-2">{{_template?.lb?.filterDefaultShow ? 'filter_alt' : 'filter_alt_off'}}</mat-icon>\r
          <span>{{ 'Filter' | translate }}</span>\r
        </button>\r
        <button mat-raised-button color="primary" class="me-2" type="button" [matMenuTriggerFor]="menu" type="button">\r
          <mat-icon>more_vert</mat-icon>\r
          <span>{{ 'More' | translate }}</span>\r
        </button>\r
        }\r
        @else if (!_template?.LG) {\r
        <a mat-mini-fab color="primary" class="me-2" [routerLink]="_template.linkAdd">\r
          <mat-icon>local_hospital</mat-icon>\r
        </a>\r
        <!-- <button mat-mini-fab color="primary" class="me-2" type="button" (click)="_template.lb.fresh()">\r
          <mat-icon>search</mat-icon>\r
        </button> -->\r
        <button mat-mini-fab color="primary" class="me-2" type="button" (click)="_template.lb.refresh()">\r
          <mat-icon>autorenew</mat-icon>\r
        </button>\r
        <button mat-mini-fab color="primary" class="me-2" type="button"\r
          (click)="_template.lb.filterDefaultShow = !_template.lb.filterDefaultShow">\r
          <mat-icon>{{_template?.lb?.filterDefaultShow ? 'filter_alt' : 'filter_alt_off'}}</mat-icon>\r
        </button>\r
        <button mat-mini-fab [matMenuTriggerFor]="menu" type="button" class="me-2">\r
          <mat-icon>more_vert</mat-icon>\r
        </button>\r
\r
        }\r
        <mat-menu #menu="matMenu" type="button">\r
          <!-- <a mat-menu-item  color="primary" class="me-1 text-primary" [routerLink]="[_template.linkAdd]" [queryParams]="{id: record?.id}">\r
            <mat-icon class="me-2 text-primary">edit</mat-icon>\r
            <span>{{'Edit' | translate}}</span>\r
          </a> -->\r
          <button mat-menu-item type="button" (click)="_template.lb.exportListToCSV()">\r
            <mat-icon class="me-2 text-secondary">download</mat-icon>\r
            <span class="text-secondary">Download CSV</span>\r
          </button>\r
          <button mat-menu-item type="button" (click)="_template.lb.printList()">\r
            <mat-icon class="me-2 text-secondary">print</mat-icon>\r
            <span class="text-secondary">Print</span>\r
          </button>\r
        </mat-menu>\r
      </mat-grid-tile>\r
      }\r
    </mat-grid-list>\r
    <mat-grid-list cols="1" [rowHeight]="_template?.LG ? '76.5vh' : '72vh'">\r
      <mat-grid-tile colspan="1">\r
        <div class="m-1" style="width: 100%; height: 100%; overflow-x: auto;">\r
          <router-outlet></router-outlet>\r
        </div>\r
      </mat-grid-tile>\r
    </mat-grid-list>\r
    <mat-grid-list cols="1" rowHeight="60px">\r
      <mat-grid-tile colspan="1" class="flex--end">\r
        @if (_template?.linkPaginate) {\r
        <mat-card-actions align="end" class="m-2">\r
\r
          @if (_template?.LG && _template.fsb) {\r
          <button mat-raised-button type="button" color="primary" class="me-2" (click)="_template.fsb.resetForm()">\r
            <mat-icon class="me-2">cached</mat-icon>\r
            <span>{{ 'Reset' | translate }}</span>\r
          </button>\r
\r
          <button mat-raised-button type="button" color="primary" class="me-2" (click)="_template.fsb.submit()">\r
            <mat-icon class="me-2">save</mat-icon>\r
            <span>{{ 'Save' | translate }}</span>\r
          </button>\r
\r
          <a mat-raised-button color="primary" class="me-2" [routerLink]="_template?.linkPaginate">\r
            <mat-icon class="me-2">cancel</mat-icon>\r
            <span>{{ 'Cancel' | translate }}</span>\r
          </a>\r
          }\r
\r
          @if (!_template?.LG && _template.fsb) {\r
          <button mat-mini-fab color="primary" class="me-2" type="button" (click)="_template.fsb.resetForm()">\r
            <mat-icon>cached</mat-icon>\r
          </button>\r
\r
        <button mat-mini-fab color="primary" class="me-2" type="button" (click)="_template.fsb.submit()">\r
            <mat-icon>save</mat-icon>\r
          </button>\r
\r
          <a mat-mini-fab color="primary" class="me-2" [routerLink]="_template?.linkPaginate">\r
            <mat-icon>cancel</mat-icon>\r
          </a>\r
          }\r
\r
        </mat-card-actions>\r
        }\r
\r
        @if (_template.linkAdd) {\r
        <mat-card-actions align="end" class="mt-3">\r
          <tbl-paginator [lb]="_template.lb"></tbl-paginator>\r
        </mat-card-actions>\r
        }\r
\r
      </mat-grid-tile>\r
    </mat-grid-list>\r
\r
  </mat-card-content>\r
</mat-card>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/feature/z-feature/feature.component.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n/*# sourceMappingURL=feature.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureComponent, { className: "FeatureComponent", filePath: "app/feature/z-feature/feature.component.ts", lineNumber: 18 });
})();

// src/app/feature/feature-routing.module.ts
var routes = [
  {
    path: "",
    component: FeatureComponent,
    children: [
      {
        path: "",
        redirectTo: "user",
        pathMatch: "full"
      },
      {
        path: "user",
        loadChildren: () => import("./chunk-PVJV45NQ.js").then((m) => m.UserzModule)
      },
      {
        path: "account-in",
        loadChildren: () => import("./chunk-LIK2GFB3.js").then((m) => m.AccountInModule)
      },
      {
        path: "account-out",
        loadChildren: () => import("./chunk-NME7VB4E.js").then((m) => m.AccountOutModule)
      },
      {
        path: "education",
        loadChildren: () => import("./chunk-NATFH6AG.js").then((m) => m.EducationModule)
      },
      {
        path: "exam",
        loadChildren: () => import("./chunk-4PVZ2EJN.js").then((m) => m.EducationExamModule)
      },
      {
        path: "syllabus",
        loadChildren: () => import("./chunk-FB5OBCSF.js").then((m) => m.EducationSyllabusModule)
      },
      {
        path: "file-upload",
        loadChildren: () => import("./chunk-QATPQEXG.js").then((m) => m.FileUploadModule)
      },
      {
        path: "notification",
        loadChildren: () => import("./chunk-UIDC4RQA.js").then((m) => m.NotificationModule)
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
    SharedModule,
    UtilsModule,
    TranslateModule,
    TableModule,
    FeatureRoutingModule,
    A11yModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureModule, [{
    type: NgModule,
    args: [{
      declarations: [
        FeatureComponent
      ],
      imports: [
        SharedModule,
        UtilsModule,
        TranslateModule,
        TableModule,
        FeatureRoutingModule,
        A11yModule
      ]
    }]
  }], null, null);
})();
export {
  FeatureModule
};
//# sourceMappingURL=chunk-5EVLQ5IG.js.map
