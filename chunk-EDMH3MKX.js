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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IHXJMWXB.js";

// src/_core/_route/menu-module-index/menu-module-index.ts
var _c0 = () => [];
var _c1 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item?.link;
var _forTrack1 = ($index, $item) => $item.link;
function MenuModuleIndex_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function MenuModuleIndex_For_2_For_4_Template_a_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4, " \xA0 ");
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, it_r1.link));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, it_r1.title || "No Title"), ",");
  }
}
function MenuModuleIndex_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "theme-menu-index", 1);
    \u0275\u0275elementContainerStart(1, 2);
    \u0275\u0275elementStart(2, "mat-card-content", 3);
    \u0275\u0275repeaterCreate(3, MenuModuleIndex_For_2_For_4_Template, 5, 6, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("item", item_r2)("isModule", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(item_r2?.submenu ?? \u0275\u0275pureFunction0(2, _c0));
  }
}
var MenuModuleIndex = class _MenuModuleIndex extends BaseClassTemplate {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuModuleIndex_BaseFactory;
    return function MenuModuleIndex_Factory(__ngFactoryType__) {
      return (\u0275MenuModuleIndex_BaseFactory || (\u0275MenuModuleIndex_BaseFactory = \u0275\u0275getInheritedFactory(_MenuModuleIndex)))(__ngFactoryType__ || _MenuModuleIndex);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuModuleIndex, selectors: [["theme-menu-module-index"]], hostAttrs: [1, "row", "mx-1"], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "row", "mx-0", "px-0", "my-2"], [3, "item", "isModule"], ["contentz", ""], [1, "mt-5"], [1, "me-1", "mb-1", 3, "click", "routerLink"], [2, "cursor", "pointer"]], template: function MenuModuleIndex_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, MenuModuleIndex_For_2_Template, 5, 3, "theme-menu-index", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._ss.sideBarMenus || \u0275\u0275pureFunction0(0, _c0));
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModuleIndex, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-module-index", host: { class: "row mx-1" }, template: `<div class="row mx-0 px-0 my-2">\r
  @for (item of (_ss.sideBarMenus || []); track item?.link) {\r
  <theme-menu-index [item]="item" [isModule]="true">\r
    <ng-container contentz>\r
      <mat-card-content class="mt-5">\r
          @for(it of (item?.submenu ?? []); track it.link){\r
          <a [routerLink]="[it.link]" (click)="$event.stopPropagation()" class="me-1 mb-1">\r
              <span style="cursor: pointer;">{{ (it.title || 'No Title') | translate }},</span>\r
          </a> &nbsp;\r
          }\r
        <!-- </mat-chip-set> -->\r
      </mat-card-content>\r
    </ng-container>\r
  </theme-menu-index>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuModuleIndex, { className: "MenuModuleIndex", filePath: "_core/_route/menu-module-index/menu-module-index.ts", lineNumber: 14 });
})();

export {
  MenuModuleIndex
};
//# sourceMappingURL=chunk-EDMH3MKX.js.map
