import {
  AngularzModule,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-PRTOJSNJ.js";

// src/app/feature/account-in/account-in-routing.module.ts
var routes = [];
var AccountInRoutingModule = class _AccountInRoutingModule {
  static \u0275fac = function AccountInRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountInRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountInRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountInRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/feature/account-in/account-in.module.ts
var AccountInModule = class _AccountInModule {
  static \u0275fac = function AccountInModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountInModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountInModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    AngularzModule,
    AccountInRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountInModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        AngularzModule,
        AccountInRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AccountInModule
};
//# sourceMappingURL=chunk-LIK2GFB3.js.map
