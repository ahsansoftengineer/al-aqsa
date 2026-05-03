"use strict";
(self["webpackChunkEdu_FE"] = self["webpackChunkEdu_FE"] || []).push([["src_app_feature_feature_module_ts"],{

/***/ 6362:
/*!***************************************************!*\
  !*** ./src/app/feature/feature-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureRoutingModule": () => (/* binding */ FeatureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.component */ 3249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _feature_component__WEBPACK_IMPORTED_MODULE_0__.FeatureComponent,
        children: [
            {
                path: '',
                redirectTo: 'user',
                pathMatch: 'full',
            },
            {
                path: 'user',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_userz_userz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./userz/userz.module */ 6848)).then((m) => m.UserzModule),
            },
            {
                path: 'account-in',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_account-in_account-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account-in/account-in.module */ 538)).then((m) => m.AccountInModule),
            },
            {
                path: 'account-out',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_account-out_account-out_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account-out/account-out.module */ 6521)).then((m) => m.AccountOutModule),
            },
            {
                path: 'education',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_education_education_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./education/education.module */ 5455)).then((m) => m.EducationModule),
            },
            {
                path: 'exam',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_education-exam_education-exam_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./education-exam/education-exam.module */ 827)).then((m) => m.EducationExamModule),
            },
            {
                path: 'syllabus',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_education-syllabus_education-syllabus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./education-syllabus/education-syllabus.module */ 6672)).then((m) => m.EducationSyllabusModule),
            },
            {
                path: 'file-upload',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_file-upload_file-upload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./file-upload/file-upload.module */ 5081)).then((m) => m.FileUploadModule),
            },
            {
                path: 'notification',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 576)).then((m) => m.NotificationModule),
            },
        ],
    },
];
class FeatureRoutingModule {
    static ɵfac = function FeatureRoutingModule_Factory(t) { return new (t || FeatureRoutingModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatureRoutingModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3249:
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureComponent": () => (/* binding */ FeatureComponent)
/* harmony export */ });
/* harmony import */ var _core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/class */ 3538);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_component_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/component/table/di-paginator/di-paginator.component */ 5221);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













function FeatureComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0._template == null ? null : ctx_r0._template.title));
} }
function FeatureComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", l_r5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", i_r6 == 0 ? "" : " / ", " ", l_r5, "");
} }
function FeatureComponent_mat_grid_tile_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Add"));
} }
function FeatureComponent_mat_grid_tile_8_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Reset Filter"));
} }
function FeatureComponent_mat_grid_tile_8_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Refresh"));
} }
function FeatureComponent_mat_grid_tile_8_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Print"));
} }
const _c0 = function (a0) { return { "me-2": a0 }; };
function FeatureComponent_mat_grid_tile_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 16)(1, "a", 17)(2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "local_hospital");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FeatureComponent_mat_grid_tile_8_span_4_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeatureComponent_mat_grid_tile_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11._template.ActionListReset()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "filter_alt_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FeatureComponent_mat_grid_tile_8_span_8_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeatureComponent_mat_grid_tile_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13._template.ActionListRefresh()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FeatureComponent_mat_grid_tile_8_span_12_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeatureComponent_mat_grid_tile_8_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14._template.ActionListPrint()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FeatureComponent_mat_grid_tile_8_span_16_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", ctx_r2.SM ? 12 : 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r2._template.linkCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r2.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.LG);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx_r2.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.LG);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx_r2.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.LG);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx_r2.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.LG);
} }
function FeatureComponent_mat_card_actions_15_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Reset"));
} }
function FeatureComponent_mat_card_actions_15_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Save"));
} }
function FeatureComponent_mat_card_actions_15_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Cancel"));
} }
function FeatureComponent_mat_card_actions_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions", 22)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeatureComponent_mat_card_actions_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18._template.ActionFormReset()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FeatureComponent_mat_card_actions_15_span_4_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeatureComponent_mat_card_actions_15_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20._template.ActionFormSave()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FeatureComponent_mat_card_actions_15_span_8_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 24)(10, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FeatureComponent_mat_card_actions_15_span_12_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx_r3.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.LG);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx_r3.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.LG);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r3._template == null ? null : ctx_r3._template.linkList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx_r3.LG));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.LG);
} }
function FeatureComponent_mat_card_actions_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "di-paginator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function () { return []; };
class FeatureComponent extends _core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    cdr;
    bpo;
    constructor(cdr, bpo) {
        super();
        this.cdr = cdr;
        this.bpo = bpo;
        this._cdr = cdr;
        this._template.DATA.subscribe({
            next: (data) => {
                console.log({ DATA: (this.DATA = data) });
                setTimeout(() => {
                    this._cdr.detectChanges();
                }, 100);
            },
        });
    }
    ngOnInit() {
        this.bpoInit();
        // inorder to refresh / reset the list
        // (click)="lb.reset(); lb.refresh()"
        // (click)="lb.refresh()"
    }
    cols;
    SM = false;
    MD = false;
    LG = false;
    bpoInit() {
        this.bpo
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.XLarge])
            .subscribe((result) => {
            const bp = result.breakpoints;
            this.SM = this.MD = this.LG = false;
            if (bp[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.XSmall] || bp[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Small])
                this.SM = true;
            else if (bp[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Medium])
                this.MD = true;
            else
                this.LG = true;
            this.cdr.detectChanges();
        });
    }
    static ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FeatureComponent, selectors: [["aam-feature"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 8, consts: [[1, "dashboard-card", "p-lg-2", "p-1", "m-1", "mb-0"], [1, "dashboard-card-content"], ["cols", "12", "rowHeight", "50px"], [1, "flex--start", 3, "colspan"], ["class", "m-0 mt-2", 4, "ngIf"], [3, "href", 4, "ngFor", "ngForOf"], ["class", "m-1", "class", "flex--end", 3, "colspan", 4, "ngIf"], ["cols", "1", 3, "rowHeight"], ["colspan", "1"], [1, "m-1", 2, "width", "100%", "height", "100%", "overflow-x", "auto"], ["cols", "1", "rowHeight", "50px"], ["colspan", "1", 1, "flex--end"], ["align", "end", "class", "m-2", 4, "ngIf"], ["align", "end", "class", "mt-3", 4, "ngIf"], [1, "m-0", "mt-2"], [3, "href"], [1, "flex--end", 3, "colspan"], ["mat-raised-button", "", "color", "primary", 1, "me-1", 3, "routerLink"], [3, "ngClass"], [4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "primary", 1, "me-1", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click"], ["align", "end", 1, "m-2"], ["mat-raised-button", "", "type", "button", "color", "primary", 1, "mx-1", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["align", "end", 1, "mt-3"]], template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content", 1)(2, "mat-grid-list", 2)(3, "mat-grid-tile", 3)(4, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FeatureComponent_h1_5_Template, 3, 3, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FeatureComponent_a_7_Template, 2, 3, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FeatureComponent_mat_grid_tile_8_Template, 17, 18, "mat-grid-tile", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-grid-list", 7)(10, "mat-grid-tile", 8)(11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-grid-list", 10)(14, "mat-grid-tile", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FeatureComponent_mat_card_actions_15_Template, 13, 13, "mat-card-actions", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FeatureComponent_mat_card_actions_16_Template, 2, 0, "mat-card-actions", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", ctx.SM || ctx._template.linkList ? 12 : 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._template == null ? null : ctx._template.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (ctx._template == null ? null : ctx._template.layer) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._template == null ? null : ctx._template.linkCreate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowHeight", ctx.LG ? "76.5vh" : "72.5vh");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._template == null ? null : ctx._template.linkList);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._template.linkCreate);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridTile, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_component_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_1__.DiPaginatorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".flex--start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.flex--start[_ngcontent-%COMP%]     .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end[_ngcontent-%COMP%]     .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top[_ngcontent-%COMP%]     .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .flex--start[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl][_ngcontent-%COMP%]   .flex--end[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.parent-active[_ngcontent-%COMP%] {\n  background-color: rgb(185, 185, 185);\n}\n.child-active[_ngcontent-%COMP%] {\n  background-color: rgb(204, 203, 203);\n}\n\n.form-action-buttons[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mat-sort-header-container[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\ndi-tbl-txt[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border: 0px;\n  border-bottom: 2px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type, th.mat-header-cell[_ngcontent-%COMP%]:last-of-type, td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type {\n  padding: 2px 0px !important;\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #673ab7;\n}\n.form-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 191, 191, 0.582);\n}\n.form-body[_ngcontent-%COMP%] {\n  background-color: rgba(242, 255, 0, 0.316);\n}\n.form-footer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 255, 191, 0.316);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n@media (min-width: 768px) {\n  .left[_ngcontent-%COMP%] {\n    flex: 0 0 60%;\n  }\n  .right[_ngcontent-%COMP%] {\n    flex: 0 0 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzXFx0aGVtZS5jdXN0b21pemUuc2NzcyIsImZlYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozt1REFBQTtBQUtBLDZCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNBRjtBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDRUY7QURDQTs7O3VEQUFBO0FBSUE7RUFDRSwyQkFBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtBQ0VGO0FEQ0E7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FDRUY7QURDQTs7O3VEQUFBO0FBSUE7RUFDRSx5QkFBQTtBQ0VGO0FEQUE7RUFDRSwyQkFBQTtBQ0dGO0FEQUE7O3VEQUFBO0FBR0E7RUFDRSxvQ0FBQTtBQ0dGO0FEREE7RUFDRSxvQ0FBQTtBQ0lGO0FEREE7O3VEQUFBO0FBR0E7RUFDRSxpQkFBQTtBQ0lGO0FEREE7Ozt1REFBQTtBQUlBOzs7RUFHRSxpQkFBQTtBQ0lGO0FEREE7RUFDRSwyQkFBQTtBQ0lGO0FERkE7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDS0Y7QURGQTs7RUFFRSwyQkFBQTtBQ0tGO0FEREEsNkNBQUE7QUFFQSw2Q0FBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNHRjtBREFBLDJCQUFBO0FBQ0E7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FDR0Y7QURBQSxpQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0dGO0FEQUEsbUJBQUE7QUFDQTtFQUNFLG1CQUFBO0FDR0Y7QUFuSEE7RUFDRSwwQ0FBQTtBQXNIRjtBQW5IQTtFQUNFLDBDQUFBO0FBc0hGO0FBbkhBO0VBRUUsMENBQUE7QUFxSEY7QUFsSEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBcUhGO0FBbEhBO0VBQ0UsY0FBQTtBQXFIRjtBQWxIQTtFQUNFO0lBQVEsYUFBQTtFQXNIUjtFQXJIQTtJQUFTLGFBQUE7RUF3SFQ7QUFDRiIsImZpbGUiOiJmZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTGF5b3V0IFV0aWxpdGllc1xyXG4gICBIYW5kbGVzIExUUi9SVEwgYXV0b21hdGljYWxseVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogRmxleCBkaXJlY3Rpb24gdXRpbGl0aWVzICovXHJcbi5mbGV4LS1zdGFydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmZsZXgtLWVuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5mbGV4LS1zdGFydC0tdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQW5ndWxhciBNYXRlcmlhbCBHcmlkIE92ZXJyaWRlc1xyXG4gICBVc2luZyA6Om5nLWRlZXAgdG8gdGFyZ2V0IG1hdC1ncmlkLXRpbGUgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uZmxleC0tc3RhcnQgOjpuZy1kZWVwIC5tYXQtZ3JpZC10aWxlLWNvbnRlbnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZsZXgtLWVuZCA6Om5nLWRlZXAgLm1hdC1ncmlkLXRpbGUtY29udGVudCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtLXN0YXJ0LS10b3AgOjpuZy1kZWVwIC5tYXQtZ3JpZC10aWxlLWNvbnRlbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTFRSIC8gUlRMIE92ZXJyaWRlc1xyXG4gICBBdXRvbWF0aWNhbGx5IGZsaXBzIGZsZXggYWxpZ25tZW50IGJhc2VkIG9uIGRpclxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5bZGlyPVwicnRsXCJdIC5mbGV4LS1zdGFydCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5bZGlyPVwicnRsXCJdIC5mbGV4LS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQWN0aXZlIEl0ZW0gU3R5bGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYXJlbnQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XHJcbn1cclxuLmNoaWxkLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjAzLCAyMDMpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBGb3JtIEJ1dHRvbiBVdGlsaXRpZXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmZvcm0tYWN0aW9uLWJ1dHRvbnMge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBPcHRpb25hbDogR2xvYmFsIHJlc2V0cyBmb3IgTWF0ZXJpYWwgSW5wdXRzXHJcbiAgIEhlbHBzIFJUTCB0ZXh0IGFsaWdubWVudCBpbiBmb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5bZGlyPVwicnRsXCJdIGlucHV0LFxyXG5bZGlyPVwicnRsXCJdIHRleHRhcmVhLFxyXG5bZGlyPVwicnRsXCJdIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuZGktdGJsLXR4dCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY3M2FiNztcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nOiAycHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBzdHlsZXMuc2NzcyAtIEFkZCB0aGlzIGF0IHRoZSByb290IGxldmVsICovXHJcblxyXG4vKiBUYXJnZXQgYWxsIHNjcm9sbGJhcnMgaW4gdGhlIGFwcGxpY2F0aW9uICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICh0aGUgYmFja2dyb3VuZCkgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogIzBhMGEwYTQxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRodW1iICh0aGUgZHJhZ2dhYmxlIGhhbmRsZSkgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzY3M2FiNztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaHVtYiBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjczYWI3O1xyXG59XHJcbiIsIkBpbXBvcnQgJy9zcmMvc3R5bGVzL3RoZW1lLmN1c3RvbWl6ZS5zY3NzJztcclxuXHJcbi5mb3JtLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE5MSwgMTkxLCAwLjU4Mik7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xyXG59XHJcbi5mb3JtLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI1NSwgMCwgMC4zMTYpO1xyXG4gIC8vIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLmZvcm0tZm9vdGVye1xyXG4gIC8vIGJveC1zaGFkb3c6IDEwcHggMTVweCAwcHggLTE1cHggIzExMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMTkxLCAwLjMxNik7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmxlZnQsIC5yaWdodCB7XHJcbiAgZmxleDogMSAxIDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5sZWZ0IHsgZmxleDogMCAwIDYwJTsgfVxyXG4gIC5yaWdodCB7IGZsZXg6IDAgMCA0MCU7IH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });
}


/***/ }),

/***/ 828:
/*!*******************************************!*\
  !*** ./src/app/feature/feature.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureModule": () => (/* binding */ FeatureModule)
/* harmony export */ });
/* harmony import */ var _shared_modules_angularz_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/modules/angularz.module */ 2180);
/* harmony import */ var _shared_modules_matz_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/modules/matz.module */ 5892);
/* harmony import */ var _shared_component_utils_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/component/utils/utils.module */ 7289);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _feature_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-routing.module */ 6362);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature.component */ 3249);
/* harmony import */ var _shared_component_table_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/component/table/table.module */ 9857);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class FeatureModule {
    static ɵfac = function FeatureModule_Factory(t) { return new (t || FeatureModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FeatureModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_shared_modules_angularz_module__WEBPACK_IMPORTED_MODULE_0__.AngularzModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBarModule,
            _shared_modules_matz_module__WEBPACK_IMPORTED_MODULE_1__.MatzModule,
            _shared_component_utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _shared_component_table_table_module__WEBPACK_IMPORTED_MODULE_5__.TableModule,
            _feature_routing_module__WEBPACK_IMPORTED_MODULE_3__.FeatureRoutingModule] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FeatureModule, { declarations: [_feature_component__WEBPACK_IMPORTED_MODULE_4__.FeatureComponent], imports: [_shared_modules_angularz_module__WEBPACK_IMPORTED_MODULE_0__.AngularzModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBarModule,
        _shared_modules_matz_module__WEBPACK_IMPORTED_MODULE_1__.MatzModule,
        _shared_component_utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _shared_component_table_table_module__WEBPACK_IMPORTED_MODULE_5__.TableModule,
        _feature_routing_module__WEBPACK_IMPORTED_MODULE_3__.FeatureRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_feature_feature_module_ts.js.map