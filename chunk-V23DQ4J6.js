import {
  MatGridList,
  MatGridListModule,
  MatGridTile
} from "./chunk-JJM2TTAB.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-7CXVMO6G.js";
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-DSAO3SWD.js";
import {
  AngularzModule,
  AsyncPipe,
  ChangeDetectionStrategy,
  Component,
  NgForOf,
  NgModule,
  RouterModule,
  ViewEncapsulation,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HWCWTAOC.js";

// src/app/feature-dashboard/dashboard/dashboard.ts
function DashboardComponent_mat_grid_tile_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-grid-tile", 6)(1, "mat-card", 7)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 8)(6, "mat-icon");
    \u0275\u0275text(7, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-menu", 9, 0)(10, "button", 10);
    \u0275\u0275text(11, "Expand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275text(13, "Remove");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "mat-card-content", 11)(15, "div");
    \u0275\u0275text(16, "Card Content Here");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const menu_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("colspan", card_r1.cols)("rowspan", card_r1.rows);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", card_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r2);
  }
}
var DashboardComponent = class _DashboardComponent {
  breakpointObserver;
  /** Based on the screen size, switch from standard to one column per row */
  cards;
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
  }
  ngOnInit() {
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({ matches }) => {
      if (matches) {
        return [
          { title: "Card 1", cols: 1, rows: 1 },
          { title: "Card 2", cols: 1, rows: 1 },
          { title: "Card 3", cols: 1, rows: 1 },
          { title: "Card 4", cols: 1, rows: 1 }
        ];
      }
      return [
        { title: "Card 1", cols: 2, rows: 1 },
        { title: "Card 2", cols: 1, rows: 1 },
        { title: "Card 3", cols: 1, rows: 2 },
        { title: "Card 4", cols: 1, rows: 1 }
      ];
    }));
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(BreakpointObserver));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["aam-dashboard"]], standalone: false, decls: 8, vars: 3, consts: [["menu", "matMenu"], ["cols", "1", "rowHeight", "50px"], ["colspan", "1", 1, "flex--start"], [1, "p-0"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", ""], [1, "dashboard-card-content"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-grid-list", 1)(1, "mat-grid-tile", 2)(2, "section")(3, "h1", 3);
      \u0275\u0275text(4, "Actions Buttons");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(5, "mat-grid-list", 4);
      \u0275\u0275template(6, DashboardComponent_mat_grid_tile_6_Template, 17, 4, "mat-grid-tile", 5);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 1, ctx.cards));
    }
  }, dependencies: [NgForOf, MatGridList, MatGridTile, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatMenu, MatMenuItem, MatMenuTrigger, MatIcon, MatIconButton, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-dashboard", template: '<mat-grid-list cols="1" rowHeight="50px">\r\n  <mat-grid-tile colspan="1" class="flex--start">\r\n    <section>\r\n      <h1 class="p-0">Actions Buttons</h1>\r\n    </section>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n<mat-grid-list cols="2" rowHeight="350px">\r\n  <mat-grid-tile *ngFor="let card of cards | async"\r\n    [colspan]="card.cols"\r\n    [rowspan]="card.rows">\r\n    <mat-card class="dashboard-card">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          {{card.title}}\r\n          <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu="matMenu" xPosition="before">\r\n            <button mat-menu-item>Expand</button>\r\n            <button mat-menu-item>Remove</button>\r\n          </mat-menu>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content class="dashboard-card-content">\r\n        <div>Card Content Here</div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n' }]
  }], () => [{ type: BreakpointObserver }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/feature-dashboard/dashboard/dashboard.ts", lineNumber: 14 });
})();

// src/app/feature-dashboard/finance/finance.ts
var FinanceComponent = class _FinanceComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function FinanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceComponent, selectors: [["aam-finance"]], standalone: false, decls: 2, vars: 0, template: function FinanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "finance works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinanceComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-finance", template: "<p>finance works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceComponent, { className: "FinanceComponent", filePath: "app/feature-dashboard/finance/finance.ts", lineNumber: 12 });
})();

// src/app/feature-dashboard/admin/admin.ts
var Admin = class _Admin {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function Admin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Admin)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Admin, selectors: [["aam-admin"]], standalone: false, decls: 2, vars: 0, template: function Admin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "admin works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Admin, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-admin", template: "<p>admin works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Admin, { className: "Admin", filePath: "app/feature-dashboard/admin/admin.ts", lineNumber: 11 });
})();

// src/app/feature-dashboard/teacher/teacher.ts
var Teacher = class _Teacher {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function Teacher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Teacher)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Teacher, selectors: [["aam-teacher"]], standalone: false, decls: 2, vars: 0, template: function Teacher_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "teacher works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Teacher, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-teacher", template: "<p>teacher works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Teacher, { className: "Teacher", filePath: "app/feature-dashboard/teacher/teacher.ts", lineNumber: 12 });
})();

// src/app/feature-dashboard/parent/parent.ts
var Parent = class _Parent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function Parent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Parent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Parent, selectors: [["aam-parent"]], standalone: false, decls: 2, vars: 0, template: function Parent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "parent works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Parent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-parent", template: "<p>parent works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Parent, { className: "Parent", filePath: "app/feature-dashboard/parent/parent.ts", lineNumber: 13 });
})();

// src/app/feature-dashboard/student/student.ts
var Student = class _Student {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function Student_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Student)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Student, selectors: [["aam-student"]], standalone: false, decls: 2, vars: 0, template: function Student_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "student works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Student, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "aam-student", template: "<p>student works!</p>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Student, { className: "Student", filePath: "app/feature-dashboard/student/student.ts", lineNumber: 12 });
})();

// src/app/feature-dashboard/feature-dashboard-routing.module.ts
var Routez = [
  // ✅ THIS is the missing piece
  // {
  //   path: 'type',
  //   component: UserTypeComponent,
  //   data: {
  //     title: 'User Type',
  //     linkAdd: '/feature/user/type-add',
  //     permission: [EP.Get],
  //     layer: ['User', 'User Type'],
  //   },
  // },
  {
    path: "admin",
    component: Admin,
    data: {}
  },
  {
    path: "finance",
    component: FinanceComponent,
    data: {}
  },
  {
    path: "parent",
    component: Parent,
    data: {}
  },
  {
    path: "student",
    component: Student,
    data: {}
  },
  {
    path: "teacher",
    component: Teacher,
    data: {}
  },
  {
    path: "main",
    component: DashboardComponent,
    data: {}
  },
  {
    path: "",
    component: DashboardComponent,
    data: {}
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

// src/app/feature-dashboard/feature-dashboard.module.ts
var FeatureDashboardModule = class _FeatureDashboardModule {
  static \u0275fac = function FeatureDashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureDashboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeatureDashboardModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    AngularzModule,
    RouterModule.forChild(Routez),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureDashboardModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DashboardComponent,
        FinanceComponent,
        Admin,
        Teacher,
        Parent,
        Student
      ],
      imports: [
        AngularzModule,
        RouterModule.forChild(Routez),
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule
      ]
    }]
  }], null, null);
})();
export {
  FeatureDashboardModule
};
//# sourceMappingURL=chunk-V23DQ4J6.js.map
