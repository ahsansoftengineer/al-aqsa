import {
  BaseClassTemplate
} from "./chunk-MEB3TIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IHXJMWXB.js";

// src/_core/_route/menu-simple-index/menu-simple-index.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item?.link;
function MenuSimpleIndex_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "theme-menu-index", 1);
    \u0275\u0275elementContainerStart(1, 2);
    \u0275\u0275elementStart(2, "mat-card-content", 3)(3, "p", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 5);
    \u0275\u0275element(7, "mat-card-actions", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("item", item_r1)("isModule", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, item_r1?.desc || "No description available"), " ");
  }
}
var MenuSimpleIndex = class _MenuSimpleIndex extends BaseClassTemplate {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuSimpleIndex_BaseFactory;
    return function MenuSimpleIndex_Factory(__ngFactoryType__) {
      return (\u0275MenuSimpleIndex_BaseFactory || (\u0275MenuSimpleIndex_BaseFactory = \u0275\u0275getInheritedFactory(_MenuSimpleIndex)))(__ngFactoryType__ || _MenuSimpleIndex);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuSimpleIndex, selectors: [["theme-menu-simple-index"]], hostAttrs: [1, "row", "mx-1"], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "row", "mx-1", "my-2"], [3, "item", "isModule"], ["contentz", ""], [1, "mt-5"], [1, "text-warning", "mb-5"], ["actionz", ""], ["align", "end", 2, "position", "absolute", "bottom", "5px", "right", "0px"]], template: function MenuSimpleIndex_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, MenuSimpleIndex_For_2_Template, 8, 5, "theme-menu-index", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._ss.activeSideBarParent?.submenu || \u0275\u0275pureFunction0(0, _c0));
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuSimpleIndex, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-simple-index", host: { class: "row mx-1" }, template: `<div class="row mx-1 my-2">\r
  @for (item of (_ss.activeSideBarParent?.submenu || []); track item?.link) {\r
  <theme-menu-index [item]="item" [isModule]="false">\r
    <ng-container contentz>\r
      <mat-card-content class="mt-5">\r
        <p class="text-warning mb-5">\r
          {{ (item?.desc || 'No description available') | translate }}\r
        </p>\r
      </mat-card-content>\r
    </ng-container>\r
    <ng-container actionz>\r
      <mat-card-actions align="end" style="position: absolute; bottom: 5px; right:0px;">\r
      </mat-card-actions>\r
    </ng-container>\r
  </theme-menu-index>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuSimpleIndex, { className: "MenuSimpleIndex", filePath: "_core/_route/menu-simple-index/menu-simple-index.ts", lineNumber: 14 });
})();

export {
  MenuSimpleIndex
};
//# sourceMappingURL=chunk-DEDXK7R5.js.map
