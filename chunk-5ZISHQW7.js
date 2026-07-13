import {
  AngularzModule,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-PXBP2UP3.js";

// src/app/feature/account-out/account-out-routing.module.ts
var routes = [];
var AccountOutRoutingModule = class _AccountOutRoutingModule {
  static \u0275fac = function AccountOutRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountOutRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountOutRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountOutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/feature/account-out/account-out.module.ts
var AccountOutModule = class _AccountOutModule {
  static \u0275fac = function AccountOutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountOutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountOutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    AngularzModule,
    AccountOutRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountOutModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        AngularzModule,
        AccountOutRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AccountOutModule
};
//# sourceMappingURL=chunk-5ZISHQW7.js.map
