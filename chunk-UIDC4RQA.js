import {
  AngularzModule,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-PRTOJSNJ.js";

// src/app/feature/notification/notification-routing.module.ts
var routes = [];
var NotificationRoutingModule = class _NotificationRoutingModule {
  static \u0275fac = function NotificationRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotificationRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/feature/notification/notification.module.ts
var NotificationModule = class _NotificationModule {
  static \u0275fac = function NotificationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotificationModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    AngularzModule,
    NotificationRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        AngularzModule,
        NotificationRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  NotificationModule
};
//# sourceMappingURL=chunk-UIDC4RQA.js.map
