import {
  CONTROL_HOST_CSS_CLASS,
  EP,
  StateService,
  TranslatePipe
} from "./chunk-KUIYJW6G.js";
import {
  MatCard,
  MatCardAvatar,
  MatCardHeader,
  MatCardTitle,
  MatIcon
} from "./chunk-VQZP2W2M.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  RouterLink,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IHXJMWXB.js";

// src/_core/_route/menu-feature-index/menu-feature-index.ts
var _c0 = () => [];
var _c1 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item?.link;
function MenuFeatureIndex_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "theme-menu-index", 1);
    \u0275\u0275elementContainerStart(1, 2);
    \u0275\u0275elementStart(2, "mat-card-content", 3)(3, "p", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 5);
    \u0275\u0275elementStart(7, "mat-card-actions", 6)(8, "a", 7);
    \u0275\u0275listener("click", function MenuFeatureIndex_For_2_Template_a_click_8_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 7);
    \u0275\u0275listener("click", function MenuFeatureIndex_For_2_Template_a_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("item", item_r1)("isModule", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, item_r1?.desc || "No description available"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, item_r1.link));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "List"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, item_r1.link + "-add"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 11, "Add"), " ");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuFeatureIndex, selectors: [["theme-menu-feature-index"]], hostAttrs: [1, "row", "mx-1"], standalone: false, decls: 3, vars: 1, consts: [[1, "row", "mx-1", "my-2"], [3, "item", "isModule"], ["contentz", ""], [1, "mt-5"], [1, "text-warning", "mb-5"], ["actionz", ""], ["align", "end", 2, "position", "absolute", "bottom", "5px", "right", "0px"], ["mat-button", "", "color", "primary", 3, "click", "routerLink"]], template: function MenuFeatureIndex_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, MenuFeatureIndex_For_2_Template, 18, 17, "theme-menu-index", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._ss.activeSideBarParent?.submenu || \u0275\u0275pureFunction0(0, _c0));
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuFeatureIndex, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-feature-index", host: { class: "row mx-1" }, template: `<div class="row mx-1 my-2">\r
  @for (item of (_ss.activeSideBarParent?.submenu || []); track item?.link) {\r
  <theme-menu-index [item]="item" [isModule]="false">\r
    <!-- <ng-container menuz>\r
      <button mat-icon-button [matMenuTriggerFor]="menu" type="button" (click)="$event.stopPropagation()"\r
        class="text-danger d-flex align-items-center ms-auto">\r
        <mat-icon>more_vert</mat-icon>\r
      </button>\r
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
    </ng-container> -->\r
    <ng-container contentz>\r
      <mat-card-content class="mt-5">\r
        <p class="text-warning mb-5">\r
          {{ (item?.desc || 'No description available') | translate }}\r
        </p>\r
      </mat-card-content>\r
    </ng-container>\r
    <ng-container actionz>\r
      <mat-card-actions align="end" style="position: absolute; bottom: 5px; right:0px;">\r
        <a mat-button color="primary" [routerLink]="[item.link]" (click)="$event.stopPropagation()">\r
          <mat-icon>list</mat-icon>\r
          {{ 'List' | translate }}\r
        </a>\r
\r
        <a mat-button color="primary" [routerLink]="[item.link + '-add']" (click)="$event.stopPropagation()">\r
          <mat-icon>add</mat-icon>\r
          {{ 'Add' | translate }}\r
        </a>\r
      </mat-card-actions>\r
    </ng-container>\r
  </theme-menu-index>\r
  }\r
</div>\r
` }]
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

// src/_core/_route/menu-index/menu-index.ts
var _c02 = ["*", "*"];
var _c12 = ["contentz", ""];
var _c2 = ["actionz", ""];
var MenuIndexComponent = class _MenuIndexComponent {
  item = {};
  isModule = true;
  constructor() {
  }
  static \u0275fac = function MenuIndexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuIndexComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuIndexComponent, selectors: [["theme-menu-index"]], hostAttrs: [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "px-1", "mb-2"], inputs: { item: "item", isModule: "isModule" }, standalone: false, ngContentSelectors: _c02, decls: 12, vars: 6, consts: [["appearance", "outlined", 1, "example-card", 2, "min-height", "100%", "max-width", "100%", "cursor", "pointer", 3, "routerLink"], [1, "d-flex", "align-items-center"], ["mat-card-avatar", "", 1, "text-primary", "m-0", "rounded-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "text-primary", "px-0", "fs-5"], [1, "menu-card-body", "text-primary", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100px", "font-size", "100px"], [2, "text-decoration", "none"]], template: function MenuIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-card-title", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275projection(10, 0, _c12);
      \u0275\u0275projection(11, 1, _c2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", ctx.item.link);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item.icon, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx.item?.title || "No Title Set"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.item.emoji, " ");
    }
  }, dependencies: [RouterLink, MatIcon, MatCard, MatCardAvatar, MatCardHeader, MatCardTitle, TranslatePipe], styles: ["/* src/_core/_route/menu-index/menu-index.scss */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.menu-card mat-card-header {\n  justify-content: space-between;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.menu-card-body {\n  height: 50px;\n}\n/*# sourceMappingURL=menu-index-IFQE6PBS.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuIndexComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "theme-menu-index", host: {
      class: CONTROL_HOST_CSS_CLASS + " mb-2"
    }, template: `<mat-card class="example-card" appearance="outlined" style="min-height: 100%; max-width: 100%; cursor: pointer;" [routerLink]="item.link">\r
  <mat-card-header class="d-flex align-items-center">\r
    <mat-icon mat-card-avatar class="text-primary m-0 rounded-0 d-flex align-items-center justify-content-center"\r
      style="width: 40px; height: 40px;">\r
      {{ item.icon }}\r
    </mat-icon>\r
    <mat-card-title class="text-primary px-0 fs-5">\r
      {{ (item?.title || 'No Title Set') | translate }}\r
    </mat-card-title>\r
    <!-- <ng-content menuz></ng-content> -->\r
  </mat-card-header>\r
  <div class="menu-card-body text-primary d-flex justify-content-center align-items-center"\r
    style="height: 100px; font-size: 100px;">\r
    <a  style="text-decoration: none;">\r
      {{ item.emoji }}\r
    </a>\r
  </div>\r
  <ng-content contentz></ng-content>\r
  <ng-content actionz></ng-content>\r
</mat-card>\r
`, styles: ["/* src/_core/_route/menu-index/menu-index.scss */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.menu-card mat-card-header {\n  justify-content: space-between;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.menu-card-body {\n  height: 50px;\n}\n/*# sourceMappingURL=menu-index-IFQE6PBS.css.map */\n"] }]
  }], () => [], { item: [{
    type: Input
  }], isModule: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuIndexComponent, { className: "MenuIndexComponent", filePath: "_core/_route/menu-index/menu-index.ts", lineNumber: 18 });
})();

export {
  MenuFeatureIndex,
  RoutezFeatureModule,
  MenuIndexComponent
};
//# sourceMappingURL=chunk-YKEEMS4B.js.map
