import {
  MatzThemeModule
} from "./chunk-QJZZQSG3.js";
import {
  MatGridList,
  MatGridTile
} from "./chunk-KBGALCVX.js";
import {
  MatTooltipModule,
  TableModule,
  TblPaginatorComponent
} from "./chunk-U25YIAVP.js";
import {
  NGX_NGB_Other_Module
} from "./chunk-53CSVDUX.js";
import {
  BaseClassSrvc,
  BaseClassTemplate,
  TranslateModule,
  TranslatePipe
} from "./chunk-GE5DPNEV.js";
import "./chunk-ZOTFYO6X.js";
import {
  A11yModule,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatIcon,
  MatIconModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatMiniFabButton
} from "./chunk-KZ5STYMK.js";
import {
  AngularzModule,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
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
  ɵɵgetInheritedFactory,
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
} from "./chunk-Z5FAQA5I.js";

// src/_shared/utils/btn/btn.ts
function Btn_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function Btn_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickz.emit(ctx_r1.value));
    });
    \u0275\u0275elementStart(1, "mat-icon", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r1.lbl));
  }
}
function Btn_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function Btn_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickz.emit(ctx_r1.value));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.icon);
  }
}
var Btn = class _Btn extends BaseClassSrvc {
  icon = "icon";
  lbl = "Button";
  value = "value";
  clickz = new EventEmitter();
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Btn_BaseFactory;
    return function Btn_Factory(__ngFactoryType__) {
      return (\u0275Btn_BaseFactory || (\u0275Btn_BaseFactory = \u0275\u0275getInheritedFactory(_Btn)))(__ngFactoryType__ || _Btn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Btn, selectors: [["btn"]], inputs: { icon: "icon", lbl: "lbl", value: "value" }, outputs: { clickz: "clickz" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["mat-raised-button", "", "type", "button", "color", "primary", 1, "me-2"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "me-2"], ["mat-raised-button", "", "type", "button", "color", "primary", 1, "me-2", 3, "click"], [1, "me-2"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "me-2", 3, "click"]], template: function Btn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Btn_Conditional_0_Template, 6, 4, "button", 0)(1, Btn_Conditional_1_Template, 3, 1, "button", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx._template?.LG ? 0 : 1);
    }
  }, dependencies: [MatButton, MatMiniFabButton, MatIcon, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Btn, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "btn", template: '@if (_template?.LG) {\r\n<button mat-raised-button type="button" color="primary" class="me-2" (click)="clickz.emit(value)">\r\n  <mat-icon class="me-2">{{ icon }}</mat-icon>\r\n  <span>{{ lbl | translate }}</span>\r\n</button>\r\n}\r\n@else {\r\n<button mat-mini-fab color="primary" class="me-2" type="button" (click)="clickz.emit(value)">\r\n  <mat-icon>{{icon}}</mat-icon>\r\n</button>\r\n}\r\n' }]
  }], null, { icon: [{
    type: Input
  }], lbl: [{
    type: Input
  }], value: [{
    type: Input
  }], clickz: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Btn, { className: "Btn", filePath: "_shared/utils/btn/btn.ts", lineNumber: 12 });
})();

// src/_shared/utils/btn-link/btn-link.ts
function BtnLink_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "mat-icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r0.lbl));
  }
}
function BtnLink_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.icon);
  }
}
var BtnLink = class _BtnLink extends BaseClassSrvc {
  icon = "icon";
  lbl = "Button";
  value = "value";
  link = "link";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BtnLink_BaseFactory;
    return function BtnLink_Factory(__ngFactoryType__) {
      return (\u0275BtnLink_BaseFactory || (\u0275BtnLink_BaseFactory = \u0275\u0275getInheritedFactory(_BtnLink)))(__ngFactoryType__ || _BtnLink);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BtnLink, selectors: [["btn-link"]], inputs: { icon: "icon", lbl: "lbl", value: "value", link: "link" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["mat-raised-button", "", "color", "primary", 1, "me-2", 3, "routerLink"], ["mat-mini-fab", "", "color", "primary", 1, "me-2", 3, "routerLink"], [1, "me-2"]], template: function BtnLink_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BtnLink_Conditional_0_Template, 6, 5, "a", 0)(1, BtnLink_Conditional_1_Template, 3, 2, "a", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx._template?.LG ? 0 : 1);
    }
  }, dependencies: [RouterLink, MatButton, MatMiniFabButton, MatIcon, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BtnLink, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "btn-link", template: '@if (_template?.LG) {\r\n<a mat-raised-button color="primary" class="me-2" [routerLink]="link">\r\n  <mat-icon class="me-2">{{ icon }}</mat-icon>\r\n  <span>{{ lbl | translate }}</span>\r\n</a>\r\n} @else {\r\n<a mat-mini-fab color="primary" class="me-2" [routerLink]="link">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</a>\r\n}\r\n' }]
  }], null, { icon: [{
    type: Input
  }], lbl: [{
    type: Input
  }], value: [{
    type: Input
  }], link: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BtnLink, { className: "BtnLink", filePath: "_shared/utils/btn-link/btn-link.ts", lineNumber: 12 });
})();

// src/app/feature/z-template-feature/ztemplate-feature.ts
var _c0 = () => [];
function ZTemplateFeature_Conditional_5_Template(rf, ctx) {
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
function ZTemplateFeature_For_8_Template(rf, ctx) {
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
function ZTemplateFeature_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 18)(1, "mat-icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r5 = \u0275\u0275reference(7);
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "More"));
  }
}
function ZTemplateFeature_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 19)(1, "mat-icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r5 = \u0275\u0275reference(7);
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
  }
}
function ZTemplateFeature_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-grid-tile", 7);
    \u0275\u0275element(1, "btn-link", 15);
    \u0275\u0275elementStart(2, "btn", 16);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_9_Template_btn_clickz_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.refresh());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "btn", 17);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_9_Template_btn_clickz_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.filterShow());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ZTemplateFeature_Conditional_9_Conditional_4_Template, 6, 4, "button", 18)(5, ZTemplateFeature_Conditional_9_Conditional_5_Template, 3, 1, "button", 19);
    \u0275\u0275elementStart(6, "mat-menu", 20, 0)(8, "button", 21);
    \u0275\u0275listener("click", function ZTemplateFeature_Conditional_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.exportListToCSV(ctx_r0._template?.title));
    });
    \u0275\u0275elementStart(9, "mat-icon", 22);
    \u0275\u0275text(10, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Download CSV");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function ZTemplateFeature_Conditional_9_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.exportListToJSON(ctx_r0._template?.title));
    });
    \u0275\u0275elementStart(14, "mat-icon", 22);
    \u0275\u0275text(15, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Download JSON");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 21);
    \u0275\u0275listener("click", function ZTemplateFeature_Conditional_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.copyListJSON());
    });
    \u0275\u0275elementStart(19, "mat-icon", 22);
    \u0275\u0275text(20, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Copy JSON");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275listener("click", function ZTemplateFeature_Conditional_9_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._template.lb.printList());
    });
    \u0275\u0275elementStart(24, "mat-icon", 22);
    \u0275\u0275text(25, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Print");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("colspan", ctx_r0._template.SM ? 12 : 7);
    \u0275\u0275advance();
    \u0275\u0275property("link", ctx_r0._template.linkAdd);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0._template?.lb?.filterDefaultShow ? "filter_alt" : "filter_alt_off");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0._template?.LG ? 4 : !ctx_r0._template?.LG ? 5 : -1);
  }
}
function ZTemplateFeature_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "btn", 23);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_16_Conditional_1_Template_btn_clickz_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.fsb.resetForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "btn", 24);
    \u0275\u0275listener("clickz", function ZTemplateFeature_Conditional_16_Conditional_1_Template_btn_clickz_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._template.fsb.submit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "btn-link", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("link", ctx_r0._template?.linkPaginate);
  }
}
function ZTemplateFeature_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-actions", 13);
    \u0275\u0275conditionalCreate(1, ZTemplateFeature_Conditional_16_Conditional_1_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0._template.fsb ? 1 : -1);
  }
}
function ZTemplateFeature_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-actions", 14);
    \u0275\u0275element(1, "tbl-paginator", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZTemplateFeature, selectors: [["aam-feature"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 6, consts: [["menu", "matMenu"], [1, "dashboard-card", "p-0", "m-0", "p-_template?.lg-2"], [1, "dashboard-card-content", "p-1"], ["cols", "12", "rowHeight", "55px", 1, ""], [1, "flex--start", 3, "colspan"], [1, "m-0", "mt-2", "fs-5"], [3, "href"], [1, "flex--end", "m-1", 3, "colspan"], ["cols", "1", 3, "rowHeight"], ["colspan", "1"], [1, "m-1", 2, "width", "100%", "height", "100%", "overflow-x", "auto"], ["cols", "1", "rowHeight", "60px"], ["colspan", "1", 1, "flex--end"], ["align", "end", 1, "m-2"], ["align", "end", 1, "mt-3"], ["lbl", "Add", "icon", "local_hospital", 3, "link"], ["lbl", "Refresh", "icon", "autorenew", 3, "clickz"], ["lbl", "Filter", 3, "clickz", "icon"], ["mat-raised-button", "", "color", "primary", "type", "button", "type", "button", 1, "me-2", 3, "matMenuTriggerFor"], ["mat-mini-fab", "", "type", "button", 1, "me-2", 3, "matMenuTriggerFor"], ["type", "button"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "me-2"], ["lbl", "Reset", "icon", "cached", 3, "clickz"], ["lbl", "Save", "icon", "save", 3, "clickz"], ["lbl", "Cancel", "icon", "cancel", 3, "link"], [3, "lb"]], template: function ZTemplateFeature_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-card-content", 2)(2, "mat-grid-list", 3)(3, "mat-grid-tile", 4)(4, "section");
      \u0275\u0275conditionalCreate(5, ZTemplateFeature_Conditional_5_Template, 3, 3, "h1", 5);
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275repeaterCreate(7, ZTemplateFeature_For_8_Template, 2, 3, "a", 6, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, ZTemplateFeature_Conditional_9_Template, 28, 4, "mat-grid-tile", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-grid-list", 8)(11, "mat-grid-tile", 9)(12, "div", 10);
      \u0275\u0275element(13, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "mat-grid-list", 11)(15, "mat-grid-tile", 12);
      \u0275\u0275conditionalCreate(16, ZTemplateFeature_Conditional_16_Template, 2, 1, "mat-card-actions", 13)(17, ZTemplateFeature_Conditional_17_Template, 2, 1, "mat-card-actions", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("colspan", ctx._template.SM || ctx._template.linkPaginate ? 12 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._template?.title ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._template?.layer || \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._template?.linkAdd && ctx._template?.lb ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("rowHeight", ctx._template?.LG ? "76.5vh" : "72vh");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx._template?.linkPaginate ? 16 : ctx._template.linkAdd ? 17 : -1);
    }
  }, dependencies: [MatCard, MatCardActions, MatCardContent, MatGridList, MatGridTile, MatMenu, MatMenuItem, MatMenuTrigger, MatIcon, MatButton, MatMiniFabButton, TblPaginatorComponent, RouterOutlet, Btn, BtnLink, TranslatePipe], styles: ['@charset "UTF-8";\n\n/* src/app/feature/z-template-feature/ztemplate-feature.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n/*# sourceMappingURL=ztemplate-feature-WWE6LKCM.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZTemplateFeature, [{
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
        <btn-link lbl="Add" icon="local_hospital" [link]="_template.linkAdd"></btn-link>\r
        <btn lbl="Refresh" icon="autorenew" (clickz)="_template.lb.refresh()"></btn>\r
        <btn lbl="Filter" [icon]="_template?.lb?.filterDefaultShow ? 'filter_alt' : 'filter_alt_off'" (clickz)="_template.lb.filterShow()"></btn>\r
        <!-- <btn lbl="More" icon="more_vert" [matMenuTriggerFor]="menu"></btn> -->\r
        @if (_template?.LG) {\r
        <button mat-raised-button color="primary" class="me-2" type="button" [matMenuTriggerFor]="menu" type="button">\r
          <mat-icon>more_vert</mat-icon>\r
          <span>{{ 'More' | translate }}</span>\r
        </button>\r
        }\r
        @else if (!_template?.LG) {\r
        <button mat-mini-fab [matMenuTriggerFor]="menu" type="button" class="me-2">\r
          <mat-icon>more_vert</mat-icon>\r
        </button>\r
        }\r
        <mat-menu #menu="matMenu" type="button">\r
          <!-- <a mat-menu-item  color="primary" class="me-1 text-primary" [routerLink]="[_template.linkAdd]" [queryParams]="{id: record?.id}">\r
            <mat-icon class="me-2 text-primary">edit</mat-icon>\r
            <span>{{'Edit' | translate}}</span>\r
          </a> -->\r
          <button mat-menu-item type="button" (click)="_template.lb.exportListToCSV(_template?.title)">\r
            <mat-icon class="me-2">download</mat-icon>\r
            <span>Download CSV</span>\r
          </button>\r
          <button mat-menu-item type="button" (click)="_template.lb.exportListToJSON(_template?.title)">\r
            <mat-icon class="me-2">download</mat-icon>\r
            <span>Download JSON</span>\r
          </button>\r
          <button mat-menu-item type="button" (click)="_template.lb.copyListJSON()">\r
            <mat-icon class="me-2">content_copy</mat-icon>\r
            <span>Copy JSON</span>\r
          </button>\r
          <button mat-menu-item type="button" (click)="_template.lb.printList()">\r
            <mat-icon class="me-2">print</mat-icon>\r
            <span>Print</span>\r
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
          @if (_template.fsb) {\r
          <btn lbl="Reset" icon="cached" (clickz)="_template.fsb.resetForm()"></btn>\r
          <btn lbl="Save" icon="save" (clickz)="_template.fsb.submit()"></btn>\r
          <btn-link lbl="Cancel" icon="cancel" [link]="_template?.linkPaginate"></btn-link>\r
          }\r
        </mat-card-actions>\r
        }@else if (_template.linkAdd) {\r
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
`, styles: ['@charset "UTF-8";\n\n/* src/app/feature/z-template-feature/ztemplate-feature.scss */\n.flex--start {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.flex--start .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[dir=rtl] .flex--start {\n  justify-content: flex-end;\n}\n[dir=rtl] .flex--end {\n  justify-content: flex-start;\n}\n[dir=rtl] .mat-sort-header-container {\n  justify-content: flex-end;\n}\n.parent-active {\n  background-color: rgb(185, 185, 185);\n}\n.child-active {\n  background-color: rgb(204, 203, 203);\n}\n.form-action-buttons {\n  margin-right: 5px;\n}\n[dir=rtl] input,\n[dir=rtl] textarea,\n[dir=rtl] .mat-input-element {\n  text-align: right;\n}\n.mat-sort-header-container {\n  justify-content: flex-start;\n}\ntbl-cntrl-txt input[type=text] {\n  border: 0;\n  border-bottom: 1px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #5a2ea6;\n}\n.form-header {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left,\n.right {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left {\n    flex: 0 0 60%;\n  }\n  .right {\n    flex: 0 0 40%;\n  }\n}\n/*# sourceMappingURL=ztemplate-feature-WWE6LKCM.css.map */\n'] }]
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
        redirectTo: "user",
        pathMatch: "full"
      },
      {
        path: "user",
        loadChildren: () => import("./chunk-TBPCKURY.js").then((m) => m.UserzModule)
      },
      {
        path: "account-in",
        loadChildren: () => import("./chunk-P5H6T4RD.js").then((m) => m.AccountInModule)
      },
      {
        path: "account-out",
        loadChildren: () => import("./chunk-G2ZNVSLM.js").then((m) => m.AccountOutModule)
      },
      {
        path: "education",
        loadChildren: () => import("./chunk-UNK6RJ7F.js").then((m) => m.EducationModule)
      },
      {
        path: "library",
        loadChildren: () => import("./chunk-UAYUVWYX.js").then((m) => m.EducationLibraryModule)
      },
      {
        path: "exam",
        loadChildren: () => import("./chunk-EVJKSHZG.js").then((m) => m.EducationExamModule)
      },
      {
        path: "syllabus",
        loadChildren: () => import("./chunk-PRA2B2XX.js").then((m) => m.EducationSyllabusModule)
      },
      {
        path: "file-upload",
        loadChildren: () => import("./chunk-FYAEN232.js").then((m) => m.FileUploadModule)
      },
      {
        path: "notification",
        loadChildren: () => import("./chunk-AN4HFGOZ.js").then((m) => m.NotificationModule)
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

// src/_shared/utils/util.module.ts
var component = [Btn, BtnLink];
var modules = [
  AngularzModule,
  NGX_NGB_Other_Module,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
];
var UtilModule = class _UtilModule {
  static \u0275fac = function UtilModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UtilModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    modules,
    AngularzModule,
    NGX_NGB_Other_Module,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilModule, [{
    type: NgModule,
    args: [{
      imports: [modules],
      exports: [component, modules],
      declarations: component
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
    UtilModule,
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
        UtilModule,
        TranslateModule,
        FeatureRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  FeatureModule
};
//# sourceMappingURL=chunk-FJOBV3BA.js.map
