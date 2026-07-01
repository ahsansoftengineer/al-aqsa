import {
  AngularzModule,
  ChangeDetectionStrategy,
  Component,
  NgModule,
  RouterModule,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-PRTOJSNJ.js";

// src/app/feature-auth/sign-in/sign-in.component.ts
var SignInComponent = class _SignInComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function SignInComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignInComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignInComponent, selectors: [["app-sign-in"]], standalone: false, decls: 2, vars: 0, template: function SignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "sign-in works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignInComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "app-sign-in", template: "<p>sign-in works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignInComponent, { className: "SignInComponent", filePath: "app/feature-auth/sign-in/sign-in.component.ts", lineNumber: 11 });
})();

// src/app/feature-auth/sign-up/sign-up.component.ts
var SignUpComponent = class _SignUpComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function SignUpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignUpComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignUpComponent, selectors: [["app-sign-up"]], standalone: false, decls: 2, vars: 0, template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "sign-up works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignUpComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "app-sign-up", template: "<p>sign-up works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignUpComponent, { className: "SignUpComponent", filePath: "app/feature-auth/sign-up/sign-up.component.ts", lineNumber: 11 });
})();

// src/app/feature-auth/forget-password/forget-password.component.ts
var ForgetPasswordComponent = class _ForgetPasswordComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function ForgetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgetPasswordComponent, selectors: [["app-forget-password"]], standalone: false, decls: 2, vars: 0, template: function ForgetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "forget-password works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgetPasswordComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "app-forget-password", template: "<p>forget-password works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgetPasswordComponent, { className: "ForgetPasswordComponent", filePath: "app/feature-auth/forget-password/forget-password.component.ts", lineNumber: 11 });
})();

// src/app/feature-auth/feature-auth-routing.module.ts
var Routez = [
  { path: "", component: SignInComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "**", component: SignInComponent }
];

// src/app/feature-auth/feature-auth.module.ts
var FeatureAuthModule = class _FeatureAuthModule {
  static \u0275fac = function FeatureAuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureAuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeatureAuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [AngularzModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureAuthModule, [{
    type: NgModule,
    args: [{
      declarations: [SignInComponent, SignUpComponent, ForgetPasswordComponent],
      imports: [AngularzModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  FeatureAuthModule
};
//# sourceMappingURL=chunk-KCXVICIB.js.map
