import {
  CONTROL_HOST_CSS_CLASS,
  EP,
  StateService,
  TranslatePipe
} from "./chunk-R6H5ONSM.js";
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
} from "./chunk-53M6QTZO.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
} from "./chunk-PRTOJSNJ.js";

// src/_core/_route/menu-index/menu-index.component.ts
var _c0 = () => [];
var _c1 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item?.id ?? $index;
function MenuIndexComponent_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", item_r1.emoji, " ");
  }
}
function MenuIndexComponent_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.icon, " ");
  }
}
function MenuIndexComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "mat-card-header", 4)(3, "mat-icon", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-title", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function MenuIndexComponent_For_2_Template_button_click_8_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275conditionalCreate(12, MenuIndexComponent_For_2_Conditional_12_Template, 1, 1)(13, MenuIndexComponent_For_2_Conditional_13_Template, 2, 1, "mat-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-card-content")(15, "p", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-card-actions", 11)(19, "a", 12)(20, "mat-icon");
    \u0275\u0275text(21, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 12)(25, "mat-icon");
    \u0275\u0275text(26, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "mat-menu", 13, 0)(31, "a", 14)(32, "mat-icon");
    \u0275\u0275text(33, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "a", 14)(38, "mat-icon");
    \u0275\u0275text(39, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const menu_r2 = \u0275\u0275reference(30);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r1.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, item_r1?.title || "No Title Set"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(item_r1.emoji ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, item_r1?.desc || "No description available"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c1, item_r1.link));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 17, "List"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c1, item_r1.link + "-add"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 19, "Add"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c1, item_r1.link));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 21, "List"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(31, _c1, item_r1.link + "-add"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 23, "Add"));
  }
}
var MenuIndexComponent = class _MenuIndexComponent {
  _ss;
  cONTROL_HOST_CSS_CLASS = CONTROL_HOST_CSS_CLASS;
  constructor(_ss) {
    this._ss = _ss;
  }
  static \u0275fac = function MenuIndexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuIndexComponent)(\u0275\u0275directiveInject(StateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuIndexComponent, selectors: [["theme-menu-index"]], standalone: false, decls: 3, vars: 1, consts: [["menu", "matMenu"], [1, "row", "mx-1"], [1, "col-6", "col-md-4", "col-lg-3", "p-1", "mb-2"], ["appearance", "outlined", 1, "example-card"], [1, "d-flex", "align-items-center"], ["mat-card-avatar", "", 1, "text-primary", "m-0", "rounded-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "text-primary", "px-0", "fs-5"], ["mat-icon-button", "", "type", "button", 1, "text-danger", "d-flex", "align-items-center", "ms-auto", 3, "click", "matMenuTriggerFor"], [1, "menu-card-body", "text-primary", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100px", "font-size", "100px"], [2, "font-size", "48px", "width", "48px", "height", "48px"], [1, "text-warning", "mt-5"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["xPosition", "before"], ["mat-menu-item", "", 3, "routerLink"]], template: function MenuIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275repeaterCreate(1, MenuIndexComponent_For_2_Template, 43, 33, "div", 2, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._ss.activeSideBarParent?.submenu ?? \u0275\u0275pureFunction0(0, _c0));
    }
  }, dependencies: [RouterLink, MatButton, MatIconButton, MatIcon, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle, MatMenu, MatMenuItem, MatMenuTrigger, TranslatePipe], styles: ["/* src/_core/_route/menu-index/menu-index.component.scss */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.menu-card mat-card-header {\n  justify-content: space-between;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.menu-card-body {\n  height: 50px;\n}\n/*# sourceMappingURL=menu-index.component.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuIndexComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-index", template: `<div class="row mx-1">\r
  @for (item of (_ss.activeSideBarParent?.submenu ?? []); track item?.id ?? $index) {\r
  <div class="col-6 col-md-4 col-lg-3 p-1 mb-2">\r
    <mat-card class="example-card" appearance="outlined">\r
\r
      <mat-card-header class="d-flex align-items-center">\r
        <mat-icon mat-card-avatar class="text-primary m-0 rounded-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">\r
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
\r
        <button mat-icon-button [matMenuTriggerFor]="menu" type="button" (click)="$event.stopPropagation()"\r
          class="text-danger d-flex align-items-center ms-auto" >\r
          <mat-icon>more_vert</mat-icon>\r
        </button>\r
      </mat-card-header>\r
\r
      <div class="menu-card-body text-primary d-flex justify-content-center align-items-center" style="height: 100px; font-size: 100px;">\r
        @if(item.emoji){\r
          {{ item.emoji }}\r
        } @else {\r
          <mat-icon style="font-size: 48px; width: 48px; height: 48px;">\r
            {{ item.icon }}\r
          </mat-icon>\r
        }\r
      </div>\r
\r
      <mat-card-content>\r
        <p class="text-warning mt-5">\r
          {{ (item?.desc || 'No description available') | translate }}\r
        </p>\r
      </mat-card-content>\r
\r
      <mat-card-actions align="end">\r
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
  </div>\r
  }\r
</div>\r
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
`, styles: ["/* src/_core/_route/menu-index/menu-index.component.scss */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.menu-card mat-card-header {\n  justify-content: space-between;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.menu-card-body {\n  height: 50px;\n}\n/*# sourceMappingURL=menu-index.component.css.map */\n"] }]
  }], () => [{ type: StateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuIndexComponent, { className: "MenuIndexComponent", filePath: "_core/_route/menu-index/menu-index.component.ts", lineNumber: 14 });
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
      component: MenuIndexComponent,
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
        layer: [...this.layer, "| List"]
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
        layer: [...this.layer, "| Add"]
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
        layer: [...this.layer, "| Edit"]
      }
    });
    return this;
  }
  build() {
    return this.routes;
  }
};

export {
  MenuIndexComponent,
  RoutezFeatureModule
};
//# sourceMappingURL=chunk-SZA6OBKV.js.map
