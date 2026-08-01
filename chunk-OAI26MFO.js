import {
  FormBasic,
  SharedModule
} from "./chunk-EXM2U3OE.js";
import {
  TblColTemplate
} from "./chunk-N6SWRWLE.js";
import "./chunk-O5RQATW2.js";
import {
  RoutezFeatureModule
} from "./chunk-7KTWZOBT.js";
import "./chunk-GUYV56QE.js";
import "./chunk-EDMH3MKX.js";
import "./chunk-DEDXK7R5.js";
import "./chunk-TTTRAK6O.js";
import {
  BaseClassTemplate,
  FormBase,
  TMSubmit,
  TM_List,
  URL_CONTRL,
  URL_SRVC
} from "./chunk-MEB3TIJQ.js";
import "./chunk-WM4BZMUA.js";
import "./chunk-4IXXCYRN.js";
import "./chunk-VQZP2W2M.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  RouterModule,
  ViewEncapsulation,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵproperty
} from "./chunk-IHXJMWXB.js";

// src/app/feature/attendance/check-in/check-in.ts
var CheckIn = class _CheckIn extends BaseClassTemplate {
  ngOnInit() {
    this.initTables();
  }
  initTables() {
    this._template.lb = new TM_List(this, {
      srvc: URL_SRVC.Attendance,
      cntrl: URL_CONTRL.Attendance.CheckIn
    }, []).init();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIn_BaseFactory;
    return function CheckIn_Factory(__ngFactoryType__) {
      return (\u0275CheckIn_BaseFactory || (\u0275CheckIn_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIn)))(__ngFactoryType__ || _CheckIn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckIn, selectors: [["aam-check-in"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 4, consts: [[3, "lb", "showCheckbox", "showID", "showSNo"]], template: function CheckIn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "tbl-col-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("lb", ctx._template?.lb)("showCheckbox", true)("showID", true)("showSNo", true);
    }
  }, dependencies: [TblColTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIn, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-check-in", template: '<tbl-col-template [lb]="_template?.lb" [showCheckbox]="true" [showID]="true" [showSNo]="true"></tbl-col-template>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckIn, { className: "CheckIn", filePath: "app/feature/attendance/check-in/check-in.ts", lineNumber: 18 });
})();

// src/app/feature/attendance/check-in/check-in-add/form.ts
function MyForm(that, d = {}) {
  that._fs._form = that._fb.group(__spreadValues({}, FormBase(that, d)));
}

// src/app/feature/attendance/check-in/check-in-add/check-in-add.ts
var CheckInAdd = class _CheckInAdd extends BaseClassTemplate {
  ngOnInit() {
    this.InitForm();
  }
  InitForm() {
    MyForm(this);
    this._template.tmSubmit = new TMSubmit(this, {
      srvc: URL_SRVC.Edu,
      cntrl: URL_CONTRL.Edu.Classz
    }).init();
    this._template.tmSubmit.httpResSingle.subscribe({
      next: (d) => this._fs._form.patchValue(d)
    });
  }
  onEdit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckInAdd_BaseFactory;
    return function CheckInAdd_Factory(__ngFactoryType__) {
      return (\u0275CheckInAdd_BaseFactory || (\u0275CheckInAdd_BaseFactory = \u0275\u0275getInheritedFactory(_CheckInAdd)))(__ngFactoryType__ || _CheckInAdd);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckInAdd, selectors: [["aam-check-in-add"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "isMoreinfo"]], template: function CheckInAdd_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "form-basic", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("isMoreinfo", false);
    }
  }, dependencies: [FormBasic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckInAdd, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-check-in-add", template: '<form-basic [isMoreinfo]="false"></form-basic>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckInAdd, { className: "CheckInAdd", filePath: "app/feature/attendance/check-in/check-in-add/check-in-add.ts", lineNumber: 17 });
})();

// src/app/feature/attendance/attendance-routing.module.ts
var Routez = new RoutezFeatureModule("Attendance", "feature/attendance").feature(CheckIn, CheckInAdd, "check-in", "Check In").build();

// src/app/feature/attendance/attendance.module.ts
var AttendanceModule = class _AttendanceModule {
  static \u0275fac = function AttendanceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AttendanceModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(Routez)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckIn, CheckInAdd],
      imports: [SharedModule, RouterModule.forChild(Routez)]
    }]
  }], null, null);
})();
export {
  AttendanceModule
};
//# sourceMappingURL=chunk-OAI26MFO.js.map
