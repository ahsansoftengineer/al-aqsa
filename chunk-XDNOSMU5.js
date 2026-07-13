import {
  CONTROL_HOST_CSS_CLASS,
  EP,
  StateService,
  TranslatePipe
} from "./chunk-CKWZC2YS.js";
import {
  MatButton,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatIcon,
  MatIconButton,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger
} from "./chunk-ACFZPOBY.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  RouterLink,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PXBP2UP3.js";

// src/_core/_route/menu-feature-index/menu-feature-index.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item?.id ?? $index;
function MenuFeatureIndex_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "theme-menu-index", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("item", item_r1)("isModule", false);
  }
}
var MenuFeatureIndex = class _MenuFeatureIndex {
  _ss;
  constructor(_ss) {
    this._ss = _ss;
  }
  static \u0275fac = function MenuFeatureIndex_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuFeatureIndex)(\u0275\u0275directiveInject(StateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuFeatureIndex, selectors: [["theme-menu-feature-index"]], hostAttrs: [1, "row", "mx-1"], standalone: false, decls: 3, vars: 1, consts: [[1, "row", "mx-1", "my-2"], [3, "item", "isModule"]], template: function MenuFeatureIndex_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, MenuFeatureIndex_For_2_Template, 1, 2, "theme-menu-index", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._ss.activeSideBarParent?.submenu ?? \u0275\u0275pureFunction0(0, _c0));
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuFeatureIndex, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-feature-index", host: { class: "row mx-1" }, template: '<div class="row mx-1 my-2">\r\n  @for (item of (_ss.activeSideBarParent?.submenu ?? []); track item?.id ?? $index) {\r\n    <theme-menu-index [item]="item" [isModule]="false"></theme-menu-index>\r\n  }\r\n</div>\r\n' }]
  }], () => [{ type: StateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuFeatureIndex, { className: "MenuFeatureIndex", filePath: "_core/_route/menu-feature-index/menu-feature-index.ts", lineNumber: 13 });
})();

// src/_core/_route/feature-routes.ts
var RoutezFeatureModule = class {
  layer;
  routeModule;
  routes = [];
  constructor(layer, routeModule) {
    this.layer = layer;
    this.routeModule = routeModule;
    this.addIndexRoute();
  }
  addIndexRoute() {
    this.routes.push({
      path: "",
      redirectTo: "index",
      pathMatch: "full"
    }, {
      path: "index",
      component: MenuFeatureIndex,
      data: {
        title: this.layer[this.layer.length - 1],
        linkPaginate: ``,
        linkAdd: ``,
        linkUpdate: ``,
        permission: [EP.Add, EP.GetsPaginate],
        layer: this.layer
      }
    });
  }
  feature(listComponent, addComponent, path, title) {
    this.routes.push({
      path,
      component: listComponent,
      data: {
        title,
        linkPaginate: ``,
        linkAdd: `/${this.routeModule}/${path}-add`,
        linkUpdate: `/${this.routeModule}/${path}-edit/`,
        permission: [EP.GetsPaginate, EP.Add, EP.Update, EP.Delete],
        layer: [...this.layer]
      }
    }, {
      path: `${path}-add`,
      component: addComponent,
      data: {
        title,
        linkPaginate: `/${this.routeModule}/${path}`,
        linkAdd: ``,
        linkUpdate: ``,
        permission: [EP.Get, EP.Add],
        layer: [...this.layer]
      }
    }, {
      path: `${path}-edit/:id`,
      component: addComponent,
      data: {
        title,
        linkPaginate: `/${this.routeModule}/${path}`,
        linkAdd: ``,
        linkUpdate: ``,
        permission: [EP.Get, EP.Update],
        layer: [...this.layer]
      }
    });
    return this;
  }
  build() {
    return this.routes;
  }
};

// src/_core/_route/menu-index/menu-index.component.ts
var _c02 = (a0) => [a0];
var _c1 = () => [];
function _forTrack02($index, $item) {
  return this.item?.id ?? $index;
}
function MenuIndexComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function MenuIndexComponent_Conditional_7_Template_button_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const menu_r1 = \u0275\u0275reference(17);
    \u0275\u0275property("matMenuTriggerFor", menu_r1);
  }
}
function MenuIndexComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.item?.desc || "No description available"), " ");
  }
}
function MenuIndexComponent_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4, " \xA0 ");
  }
  if (rf & 2) {
    const it_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c02, it_r3.link));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, it_r3.title || "No Title"), ",");
  }
}
function MenuIndexComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MenuIndexComponent_Conditional_14_For_1_Template, 5, 6, null, null, _forTrack02, true);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.item?.submenu ?? \u0275\u0275pureFunction0(0, _c1));
  }
}
function MenuIndexComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-actions", 10)(1, "a", 15)(2, "mat-icon");
    \u0275\u0275text(3, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 15)(7, "mat-icon");
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c02, ctx_r1.item.link));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "List"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c02, ctx_r1.item.link + "-add"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "Add"), " ");
  }
}
var MenuIndexComponent = class _MenuIndexComponent {
  item = {};
  isModule = true;
  constructor() {
  }
  static \u0275fac = function MenuIndexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuIndexComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuIndexComponent, selectors: [["theme-menu-index"]], hostAttrs: [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "px-1", "mb-2"], inputs: { item: "item", isModule: "isModule" }, standalone: false, decls: 30, vars: 23, consts: [["menu", "matMenu"], ["appearance", "outlined", 1, "example-card", 2, "min-height", "100%", "max-width", "100%"], [1, "d-flex", "align-items-center"], ["mat-card-avatar", "", 1, "text-primary", "m-0", "rounded-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "text-primary", "px-0", "fs-5"], ["mat-icon-button", "", "type", "button", 1, "text-danger", "d-flex", "align-items-center", "ms-auto", 3, "matMenuTriggerFor"], [1, "menu-card-body", "text-primary", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100px", "font-size", "100px"], [2, "text-decoration", "none", 3, "routerLink"], [1, "mt-5"], [1, "text-warning", "mb-5"], ["align", "end", 2, "position", "absolute", "bottom", "5px", "right", "0px"], ["xPosition", "before"], ["mat-menu-item", "", 3, "routerLink"], ["mat-icon-button", "", "type", "button", 1, "text-danger", "d-flex", "align-items-center", "ms-auto", 3, "click", "matMenuTriggerFor"], [3, "routerLink"], ["mat-button", "", "color", "primary", 3, "routerLink"]], template: function MenuIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-card-header", 2)(2, "mat-icon", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-card-title", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, MenuIndexComponent_Conditional_7_Template, 3, 1, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " \xA0 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-card-content", 8);
      \u0275\u0275conditionalCreate(13, MenuIndexComponent_Conditional_13_Template, 3, 3, "p", 9)(14, MenuIndexComponent_Conditional_14_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, MenuIndexComponent_Conditional_15_Template, 11, 12, "mat-card-actions", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-menu", 11, 0)(18, "a", 12)(19, "mat-icon");
      \u0275\u0275text(20, "list");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "a", 12)(25, "mat-icon");
      \u0275\u0275text(26, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item.icon, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, ctx.item?.title || "No Title Set"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isModule ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c02, ctx.item.link));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item.emoji, " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isModule ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isModule ? 15 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c02, ctx.item.link));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 13, "List"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c02, ctx.item.link + "-add"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 15, "Add"));
    }
  }, dependencies: [RouterLink, MatButton, MatIconButton, MatIcon, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle, MatMenu, MatMenuItem, MatMenuTrigger, TranslatePipe], styles: ["/* src/_core/_route/menu-index/menu-index.component.scss */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.menu-card mat-card-header {\n  justify-content: space-between;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.menu-card-body {\n  height: 50px;\n}\n/*# sourceMappingURL=menu-index.component-C2Y7EN3W.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuIndexComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-index", host: {
      class: CONTROL_HOST_CSS_CLASS + " mb-2"
    }, template: `<mat-card class="example-card" appearance="outlined" style="min-height: 100%; max-width: 100%;">\r
  <mat-card-header class="d-flex align-items-center">\r
    <mat-icon mat-card-avatar class="text-primary m-0 rounded-0 d-flex align-items-center justify-content-center"\r
      style="width: 40px; height: 40px;">\r
      {{ item.icon }}\r
    </mat-icon>\r
\r
    <mat-card-title class="text-primary px-0 fs-5">\r
      {{ (item?.title || 'No Title Set') | translate }}\r
    </mat-card-title>\r
\r
    <!-- <mat-card-subtitle>\r
          {{ (item?.desc || 'No description available') | translate }}\r
        </mat-card-subtitle> -->\r
    @if(!isModule){\r
    <button mat-icon-button [matMenuTriggerFor]="menu" type="button" (click)="$event.stopPropagation()"\r
      class="text-danger d-flex align-items-center ms-auto">\r
      <mat-icon>more_vert</mat-icon>\r
    </button>\r
    }\r
  </mat-card-header>\r
  <div class="menu-card-body text-primary d-flex justify-content-center align-items-center" style="height: 100px; font-size: 100px;">\r
      <a [routerLink]="[item.link]" style="text-decoration: none;">\r
        {{ item.emoji }}\r
      </a> &nbsp;\r
  </div>\r
\r
  <mat-card-content class="mt-5">\r
    @if(!isModule){\r
    <p class="text-warning mb-5">\r
      {{ (item?.desc || 'No description available') | translate }}\r
    </p>\r
    } @else {\r
      @for(it of (item?.submenu ?? []); track item?.id ?? $index){\r
        <a [routerLink]="[it.link]">\r
          <!-- <mat-icon>{{it.icon}}</mat-icon> -->\r
          <span>{{ (it.title || 'No Title') | translate }},</span>\r
        </a> &nbsp;\r
      }\r
    }\r
\r
  </mat-card-content>\r
  @if(!isModule){\r
  <mat-card-actions align="end" style="position: absolute; bottom: 5px; right:0px;">\r
    <a mat-button color="primary" [routerLink]="[item.link]">\r
      <mat-icon>list</mat-icon>\r
      {{ 'List' | translate }}\r
    </a>\r
\r
    <a mat-button color="primary" [routerLink]="[item.link + '-add']">\r
      <mat-icon>add</mat-icon>\r
      {{ 'Add' | translate }}\r
    </a>\r
  </mat-card-actions>\r
  }\r
\r
\r
</mat-card>\r
\r
<mat-menu #menu="matMenu" xPosition="before">\r
  <a mat-menu-item [routerLink]="[item.link]">\r
    <mat-icon>list</mat-icon>\r
    <span>{{ 'List' | translate }}</span>\r
  </a>\r
\r
  <a mat-menu-item [routerLink]="[item.link + '-add']">\r
    <mat-icon>add</mat-icon>\r
    <span>{{ 'Add' | translate }}</span>\r
  </a>\r
</mat-menu>\r
\r
\r
<!-- <mat-card class="p-2">\r
        <div class="d-flex justify-content-between align-items-center">\r
          <div>\r
            {{ (item?.title || 'No Title Set') | translate }}\r
          </div>\r
\r
          <div>\r
            <button\r
              mat-icon-button\r
              class="more-button text-primary"\r
              [matMenuTriggerFor]="menu"\r
              type="button"\r
              (click)="$event.stopPropagation()"\r
              style="height: 35px; overflow: visible; display: flex; align-items: center;"\r
            >\r
              <mat-icon>more_vert</mat-icon>\r
            </button>\r
\r
            <mat-menu #menu="matMenu" xPosition="before">\r
              <a\r
                mat-menu-item\r
                class="me-1 text-info"\r
                [routerLink]="[item.link]"\r
              >\r
                <mat-icon class="me-2 text-info">list</mat-icon>\r
                <span>{{ 'List' | translate }}</span>\r
              </a>\r
\r
              <a\r
                mat-menu-item\r
                class="me-1 text-primary"\r
                [routerLink]="[item.link + '-add']"\r
              >\r
                <mat-icon class="me-2 text-primary">add</mat-icon>\r
                <span>{{ 'Add' | translate }}</span>\r
              </a>\r
            </mat-menu>\r
          </div>\r
        </div>\r
\r
        <div\r
          class="menu-card-body text-primary d-flex justify-content-center align-items-center"\r
          style="height: 100px;"\r
        >\r
          <mat-icon>{{ item.icon }}</mat-icon>\r
        </div>\r
\r
        <mat-card-content>\r
          <p class="text-success">\r
            {{ (item?.desc || 'No description available') | translate }}\r
          </p>\r
        </mat-card-content>\r
      </mat-card> -->\r
`, styles: ["/* src/_core/_route/menu-index/menu-index.component.scss */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.menu-card mat-card-header {\n  justify-content: space-between;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.menu-card-body {\n  height: 50px;\n}\n/*# sourceMappingURL=menu-index.component-C2Y7EN3W.css.map */\n"] }]
  }], () => [], { item: [{
    type: Input
  }], isModule: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuIndexComponent, { className: "MenuIndexComponent", filePath: "_core/_route/menu-index/menu-index.component.ts", lineNumber: 18 });
})();

export {
  MenuFeatureIndex,
  RoutezFeatureModule,
  MenuIndexComponent
};
//# sourceMappingURL=chunk-XDNOSMU5.js.map
