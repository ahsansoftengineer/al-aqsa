"use strict";
(self["webpackChunkEdu_FE"] = self["webpackChunkEdu_FE"] || []).push([["src_app_feature_userz_userz_module_ts"],{

/***/ 2390:
/*!***************************************!*\
  !*** ./src/app/core/data/generate.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_DUMMY": () => (/* binding */ DATA_DUMMY)
/* harmony export */ });
const DATA_DUMMY = (name, length) => {
    let data = [];
    for (let i = 0; i < length; i++) {
        const element = {
            id: i + 1,
            title: `${name} ${i} Title`,
            status: i % 2 == 0 ? 'active' : 'disable',
            desc: `${name} ${i} Desc`,
            createdAt: `2026-0${i}-0${i}T0${i}:00:00Z`,
            updatedAt: `2026-0${i + 1}-0${i + 1}T0${i + 1}:00:00Z`,
            // actions: '1',
        };
        data.push(element);
    }
    return data;
};


/***/ }),

/***/ 3825:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_DUMMY": () => (/* reexport safe */ _data_generate__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)
/* harmony export */ });
/* harmony import */ var _data_generate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/generate */ 2390);



/***/ }),

/***/ 7069:
/*!****************************************************************!*\
  !*** ./src/app/feature/userz/admin-add/admin-add.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddComponent": () => (/* binding */ AdminAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums/url.enum */ 3208);
/* harmony import */ var src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/forms/userz.form */ 6857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class AdminAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormAdmin)(this);
        if (this._id != "null" && Number(this._id) > 0) {
            this.onEdit();
        }
        else {
            this._fs._form.removeControl("id");
        }
    }
    onEdit() {
        this._http
            .get({ ...this.param, resource: this._id })
            .subscribe((res) => {
            let data = res.data.row;
            (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormAdmin)(this, data);
        });
    }
    static ɵfac = function AdminAddComponent_Factory(t) { return new (t || AdminAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminAddComponent, selectors: [["aam-admin-add"]], hostAttrs: [2, "width", "100% !important"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], ["field", "title", "lbl", "Name"], ["field", "gender", "lbl", "Gender"], ["field", "email", "lbl", "Email"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function AdminAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1hZGQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
}


/***/ }),

/***/ 2837:
/*!********************************************************!*\
  !*** ./src/app/feature/userz/admin/admin.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums_url_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums/url.enum */ 3208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/table/tbl-txt/tbl-txt.component */ 2270);
/* harmony import */ var _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/component/table/tbl-actions/tbl-actions.component */ 7756);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











function AdminComponent_div_0_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function AdminComponent_div_0_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r22 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function AdminComponent_div_0_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function AdminComponent_div_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.title, " ");
} }
function AdminComponent_div_0_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function AdminComponent_div_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.gender, " ");
} }
function AdminComponent_div_0_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function AdminComponent_div_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.email, " ");
} }
function AdminComponent_div_0_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function AdminComponent_div_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function AdminComponent_div_0_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function AdminComponent_div_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.desc, " ");
} }
function AdminComponent_div_0_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function AdminComponent_div_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r28 == null ? null : item_r28.createdAt, " ");
} }
function AdminComponent_div_0_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r15.lb.fh);
} }
function AdminComponent_div_0_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r29 == null ? null : item_r29.updatedAt, " ");
} }
function AdminComponent_div_0_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_0_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r30);
} }
function AdminComponent_div_0_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
} }
function AdminComponent_div_0_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 30);
} }
function AdminComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function AdminComponent_div_0_Template_table_matSortChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_0_th_4_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_0_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminComponent_div_0_th_7_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminComponent_div_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminComponent_div_0_th_10_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminComponent_div_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AdminComponent_div_0_th_13_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AdminComponent_div_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AdminComponent_div_0_th_16_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AdminComponent_div_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AdminComponent_div_0_th_19_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminComponent_div_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AdminComponent_div_0_th_22_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AdminComponent_div_0_td_23_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AdminComponent_div_0_th_25_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AdminComponent_div_0_td_26_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AdminComponent_div_0_th_28_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AdminComponent_div_0_td_29_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AdminComponent_div_0_tr_30_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AdminComponent_div_0_tr_31_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class AdminComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        console.log(this._activeRoute.snapshot.data);
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums_url_enum__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'title', 'gender', 'email', 'status', 'desc', 'createdAt', 'updatedAt', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Admin', 10);
            console.log(records);
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵAdminComponent_BaseFactory; return function AdminComponent_Factory(t) { return (ɵAdminComponent_BaseFactory || (ɵAdminComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](AdminComponent)))(t || AdminComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["aam-admin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "status"], ["matColumnDef", "desc"], ["matColumnDef", "createdAt"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "title", "lbl", "Name", 3, "group"], ["field", "gender", "lbl", "Gender", 3, "group"], ["field", "email", "lbl", "Email", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], ["field", "desc", "lbl", "Description", 3, "group"], ["field", "createdAt", "lbl", "Created At", 3, "group"], ["field", "updatedAt", "lbl", "Updated At", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminComponent_div_0_Template, 32, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
}


/***/ }),

/***/ 1614:
/*!*******************************************************************!*\
  !*** ./src/app/feature/userz/parent-add/parents-add.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentAddComponent": () => (/* binding */ ParentAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/forms/userz.form */ 6857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class ParentAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormParent)(this);
        if (this._id != "null" && Number(this._id) > 0) {
            this.onEdit();
        }
        else {
            this._fs._form.removeControl("id");
        }
    }
    onEdit() {
        this._http
            .get({ ...this.param, resource: this._id })
            .subscribe((res) => {
            let data = res.data.row;
            (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormParent)(this, data);
        });
    }
    static ɵfac = function ParentAddComponent_Factory(t) { return new (t || ParentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ParentAddComponent, selectors: [["aam-parents-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], ["field", "title", "lbl", "Name"], ["field", "gender", "lbl", "Gender"], ["field", "email", "lbl", "Email"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function ParentAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ParentAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJlbnRzLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 8379:
/*!***********************************************************!*\
  !*** ./src/app/feature/userz/parent/parents.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentComponent": () => (/* binding */ ParentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/table/tbl-txt/tbl-txt.component */ 2270);
/* harmony import */ var _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/component/table/tbl-actions/tbl-actions.component */ 7756);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











function ParentComponent_div_0_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function ParentComponent_div_0_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r22 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function ParentComponent_div_0_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function ParentComponent_div_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.title, " ");
} }
function ParentComponent_div_0_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function ParentComponent_div_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.gender, " ");
} }
function ParentComponent_div_0_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function ParentComponent_div_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.email, " ");
} }
function ParentComponent_div_0_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function ParentComponent_div_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function ParentComponent_div_0_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function ParentComponent_div_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.desc, " ");
} }
function ParentComponent_div_0_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function ParentComponent_div_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r28 == null ? null : item_r28.createdAt, " ");
} }
function ParentComponent_div_0_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r15.lb.fh);
} }
function ParentComponent_div_0_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r29 == null ? null : item_r29.updatedAt, " ");
} }
function ParentComponent_div_0_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ParentComponent_div_0_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r30);
} }
function ParentComponent_div_0_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
} }
function ParentComponent_div_0_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 30);
} }
function ParentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function ParentComponent_div_0_Template_table_matSortChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ParentComponent_div_0_th_4_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ParentComponent_div_0_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ParentComponent_div_0_th_7_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ParentComponent_div_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ParentComponent_div_0_th_10_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ParentComponent_div_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ParentComponent_div_0_th_13_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ParentComponent_div_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ParentComponent_div_0_th_16_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ParentComponent_div_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ParentComponent_div_0_th_19_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ParentComponent_div_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ParentComponent_div_0_th_22_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ParentComponent_div_0_td_23_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ParentComponent_div_0_th_25_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ParentComponent_div_0_td_26_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ParentComponent_div_0_th_28_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ParentComponent_div_0_td_29_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ParentComponent_div_0_tr_30_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ParentComponent_div_0_tr_31_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class ParentComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        console.log(this._activeRoute.snapshot.data);
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'title', 'gender', 'email', 'status', 'desc', 'createdAt', 'updatedAt', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Admin', 10);
            console.log(records);
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵParentComponent_BaseFactory; return function ParentComponent_Factory(t) { return (ɵParentComponent_BaseFactory || (ɵParentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](ParentComponent)))(t || ParentComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["aam-parents"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "status"], ["matColumnDef", "desc"], ["matColumnDef", "createdAt"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "title", "lbl", "Name", 3, "group"], ["field", "gender", "lbl", "Gender", 3, "group"], ["field", "email", "lbl", "Email", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], ["field", "desc", "lbl", "Description", 3, "group"], ["field", "createdAt", "lbl", "Created At", 3, "group"], ["field", "updatedAt", "lbl", "Updated At", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ParentComponent_div_0_Template, 32, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], encapsulation: 2, changeDetection: 0 });
}


/***/ }),

/***/ 2444:
/*!********************************************************************!*\
  !*** ./src/app/feature/userz/student-add/student-add.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentAddComponent": () => (/* binding */ StudentAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/forms/userz.form */ 6857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class StudentAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormStudent)(this);
        if (this._id != "null" && Number(this._id) > 0) {
            this.onEdit();
        }
        else {
            this._fs._form.removeControl("id");
        }
    }
    onEdit() {
        this._http
            .get({ ...this.param, resource: this._id })
            .subscribe((res) => {
            let data = res.data.row;
            (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormStudent)(this, data);
        });
    }
    static ɵfac = function StudentAddComponent_Factory(t) { return new (t || StudentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StudentAddComponent, selectors: [["aam-student-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], ["field", "code", "lbl", "Student Code"], ["field", "title", "lbl", "Name"], ["field", "fatherName", "lbl", "Father Name"], ["field", "className", "lbl", "Class"], ["field", "section", "lbl", "Section"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function StudentAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function StudentAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6)(7, "di-txt", 7)(8, "di-txt", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 9227:
/*!************************************************************!*\
  !*** ./src/app/feature/userz/student/student.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentComponent": () => (/* binding */ StudentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/table/tbl-txt/tbl-txt.component */ 2270);
/* harmony import */ var _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/component/table/tbl-actions/tbl-actions.component */ 7756);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











function StudentComponent_div_0_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function StudentComponent_div_0_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r18 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function StudentComponent_div_0_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function StudentComponent_div_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r19 == null ? null : item_r19.code, " ");
} }
function StudentComponent_div_0_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function StudentComponent_div_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r20 == null ? null : item_r20.name, " ");
} }
function StudentComponent_div_0_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function StudentComponent_div_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.className, " ");
} }
function StudentComponent_div_0_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function StudentComponent_div_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r22 == null ? null : item_r22.section, " ");
} }
function StudentComponent_div_0_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function StudentComponent_div_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.status, " ");
} }
function StudentComponent_div_0_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function StudentComponent_div_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r24);
} }
function StudentComponent_div_0_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 25);
} }
function StudentComponent_div_0_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 26);
} }
function StudentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function StudentComponent_div_0_Template_table_matSortChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, StudentComponent_div_0_th_4_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, StudentComponent_div_0_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, StudentComponent_div_0_th_7_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, StudentComponent_div_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, StudentComponent_div_0_th_10_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, StudentComponent_div_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, StudentComponent_div_0_th_13_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, StudentComponent_div_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, StudentComponent_div_0_th_16_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, StudentComponent_div_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, StudentComponent_div_0_th_19_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, StudentComponent_div_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, StudentComponent_div_0_th_22_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, StudentComponent_div_0_td_23_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, StudentComponent_div_0_tr_24_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, StudentComponent_div_0_tr_25_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class StudentComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        console.log(this._activeRoute.snapshot.data);
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'code', 'name', 'className', 'section', 'status', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Student', 10);
            console.log(records);
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵStudentComponent_BaseFactory; return function StudentComponent_Factory(t) { return (ɵStudentComponent_BaseFactory || (ɵStudentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](StudentComponent)))(t || StudentComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["aam-student"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "className"], ["matColumnDef", "section"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "code", "lbl", "Code", 3, "group"], ["field", "name", "lbl", "Name", 3, "group"], ["field", "className", "lbl", "Class", 3, "group"], ["field", "section", "lbl", "Section", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function StudentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, StudentComponent_div_0_Template, 26, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], encapsulation: 2, changeDetection: 0 });
}


/***/ }),

/***/ 2352:
/*!********************************************************************!*\
  !*** ./src/app/feature/userz/teacher-add/teacher-add.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherAddComponent": () => (/* binding */ TeacherAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/forms/userz.form */ 6857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class TeacherAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormTeacher)(this);
        if (this._id != "null" && Number(this._id) > 0) {
            this.onEdit();
        }
        else {
            this._fs._form.removeControl("id");
        }
    }
    onEdit() {
        this._http
            .get({ ...this.param, resource: this._id })
            .subscribe((res) => {
            let data = res.data.row;
            (0,src_app_forms_userz_form__WEBPACK_IMPORTED_MODULE_2__.FormTeacher)(this, data);
        });
    }
    static ɵfac = function TeacherAddComponent_Factory(t) { return new (t || TeacherAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TeacherAddComponent, selectors: [["aam-teacher-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], ["field", "title", "lbl", "Name"], ["field", "gender", "lbl", "Gender"], ["field", "email", "lbl", "Email"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function TeacherAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function TeacherAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 9405:
/*!************************************************************!*\
  !*** ./src/app/feature/userz/teacher/teacher.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherComponent": () => (/* binding */ TeacherComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/table/tbl-txt/tbl-txt.component */ 2270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













function TeacherComponent_div_0_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function TeacherComponent_div_0_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r22 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function TeacherComponent_div_0_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function TeacherComponent_div_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.title, " ");
} }
function TeacherComponent_div_0_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function TeacherComponent_div_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.gender, " ");
} }
function TeacherComponent_div_0_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function TeacherComponent_div_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.email, " ");
} }
function TeacherComponent_div_0_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function TeacherComponent_div_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function TeacherComponent_div_0_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function TeacherComponent_div_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.desc, " ");
} }
function TeacherComponent_div_0_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function TeacherComponent_div_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r28 == null ? null : item_r28.createdAt, " ");
} }
function TeacherComponent_div_0_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r15.lb.fh);
} }
function TeacherComponent_div_0_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r29 == null ? null : item_r29.updatedAt, " ");
} }
function TeacherComponent_div_0_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function TeacherComponent_div_0_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18)(1, "button", 28)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", 29, 30)(6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeacherComponent_div_0_td_29_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const item_r30 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.lb._switch(item_r30 == null ? null : item_r30.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "toggle_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 32)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r31);
} }
function TeacherComponent_div_0_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 33);
} }
function TeacherComponent_div_0_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function TeacherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function TeacherComponent_div_0_Template_table_matSortChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TeacherComponent_div_0_th_4_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TeacherComponent_div_0_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TeacherComponent_div_0_th_7_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TeacherComponent_div_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TeacherComponent_div_0_th_10_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TeacherComponent_div_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](12, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TeacherComponent_div_0_th_13_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TeacherComponent_div_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TeacherComponent_div_0_th_16_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, TeacherComponent_div_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TeacherComponent_div_0_th_19_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TeacherComponent_div_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TeacherComponent_div_0_th_22_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TeacherComponent_div_0_td_23_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TeacherComponent_div_0_th_25_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, TeacherComponent_div_0_td_26_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TeacherComponent_div_0_th_28_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TeacherComponent_div_0_td_29_Template, 16, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TeacherComponent_div_0_tr_30_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, TeacherComponent_div_0_tr_31_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class TeacherComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    constructor() {
        super();
    }
    ngOnInit() {
        console.log(this._activeRoute.snapshot.data);
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'title', 'gender', 'email', 'status', 'desc', 'createdAt', 'updatedAt', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Teacher', 10);
            console.log(records);
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["aam-teacher"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "status"], ["matColumnDef", "desc"], ["matColumnDef", "createdAt"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "title", "lbl", "Name", 3, "group"], ["field", "gender", "lbl", "Gender", 3, "group"], ["field", "email", "lbl", "Email", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], ["field", "desc", "lbl", "Description", 3, "group"], ["field", "createdAt", "lbl", "Created At", 3, "group"], ["field", "updatedAt", "lbl", "Updated At", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["type", "button"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "type", "button"], ["mat-header-row", ""], ["mat-row", ""]], template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TeacherComponent_div_0_Template, 32, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], encapsulation: 2, changeDetection: 0 });
}


/***/ }),

/***/ 3461:
/*!************************************************************************!*\
  !*** ./src/app/feature/userz/user-type-add/user-type-add.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTypeAddComponent": () => (/* binding */ UserTypeAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums/url.enum */ 3208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);






class UserTypeAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        this.initform();
        if (this._id != "null" && Number(this._id) > 0) {
            this.onEdit();
        }
        else {
            this._fs._form.removeControl("id");
        }
    }
    initform(d = {}) {
        this._fs._form = this._fb.group({
            id: [d?.id || ''],
            title: [d?.title || '', this._vs._val('Name', { minChar: 4, alpha: 1 })],
            desc: [d?.title || '', this._vs._val('', { maxChar: 255, specialChar: 1 })],
        });
    }
    onEdit() {
        this._http
            .get({ ...this.param, resource: this._id })
            .subscribe((res) => {
            let data = res.data.row;
            this.initform(data);
        });
    }
    static ɵfac = function UserTypeAddComponent_Factory(t) { return new (t || UserTypeAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserTypeAddComponent, selectors: [["aam-user-type-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], ["field", "title", "lbl", "User Type"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function UserTypeAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserTypeAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_2__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXR5cGUtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ }),

/***/ 5912:
/*!****************************************************************!*\
  !*** ./src/app/feature/userz/user-type/user-type.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTypeComponent": () => (/* binding */ UserTypeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/table/tbl-txt/tbl-txt.component */ 2270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













function UserTypeComponent_div_0_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function UserTypeComponent_div_0_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r22 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function UserTypeComponent_div_0_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function UserTypeComponent_div_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.title, " ");
} }
function UserTypeComponent_div_0_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function UserTypeComponent_div_0_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.gender, " ");
} }
function UserTypeComponent_div_0_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function UserTypeComponent_div_0_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.email, " ");
} }
function UserTypeComponent_div_0_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function UserTypeComponent_div_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function UserTypeComponent_div_0_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function UserTypeComponent_div_0_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.desc, " ");
} }
function UserTypeComponent_div_0_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function UserTypeComponent_div_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r28 == null ? null : item_r28.createdAt, " ");
} }
function UserTypeComponent_div_0_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "di-tbl-txt", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", ctx_r15.lb.fh);
} }
function UserTypeComponent_div_0_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r29 == null ? null : item_r29.updatedAt, " ");
} }
function UserTypeComponent_div_0_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UserTypeComponent_div_0_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 18)(1, "button", 28)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", 29, 30)(6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserTypeComponent_div_0_td_29_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const item_r30 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.lb._switch(item_r30 == null ? null : item_r30.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "toggle_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 32)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r31);
} }
function UserTypeComponent_div_0_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 33);
} }
function UserTypeComponent_div_0_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function UserTypeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function UserTypeComponent_div_0_Template_table_matSortChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserTypeComponent_div_0_th_4_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, UserTypeComponent_div_0_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UserTypeComponent_div_0_th_7_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UserTypeComponent_div_0_td_8_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, UserTypeComponent_div_0_th_10_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UserTypeComponent_div_0_td_11_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](12, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UserTypeComponent_div_0_th_13_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UserTypeComponent_div_0_td_14_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, UserTypeComponent_div_0_th_16_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, UserTypeComponent_div_0_td_17_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, UserTypeComponent_div_0_th_19_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UserTypeComponent_div_0_td_20_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, UserTypeComponent_div_0_th_22_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UserTypeComponent_div_0_td_23_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UserTypeComponent_div_0_th_25_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, UserTypeComponent_div_0_td_26_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, UserTypeComponent_div_0_th_28_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, UserTypeComponent_div_0_td_29_Template, 16, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, UserTypeComponent_div_0_tr_30_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, UserTypeComponent_div_0_tr_31_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class UserTypeComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'title', 'status', 'desc', 'createdAt', 'updatedAt', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('User Type', 10);
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵUserTypeComponent_BaseFactory; return function UserTypeComponent_Factory(t) { return (ɵUserTypeComponent_BaseFactory || (ɵUserTypeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](UserTypeComponent)))(t || UserTypeComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserTypeComponent, selectors: [["aam-user-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "status"], ["matColumnDef", "desc"], ["matColumnDef", "createdAt"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "title", "lbl", "Name", 3, "group"], ["field", "gender", "lbl", "Gender", 3, "group"], ["field", "email", "lbl", "Email", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], ["field", "desc", "lbl", "Description", 3, "group"], ["field", "createdAt", "lbl", "Created At", 3, "group"], ["field", "updatedAt", "lbl", "Updated At", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["type", "button"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "type", "button"], ["mat-header-row", ""], ["mat-row", ""]], template: function UserTypeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UserTypeComponent_div_0_Template, 32, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ }),

/***/ 7865:
/*!*******************************************************!*\
  !*** ./src/app/feature/userz/userz-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserzRoutingModule": () => (/* binding */ UserzRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _userz_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userz.routes */ 1175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class UserzRoutingModule {
    static ɵfac = function UserzRoutingModule_Factory(t) { return new (t || UserzRoutingModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserzRoutingModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(_userz_routes__WEBPACK_IMPORTED_MODULE_0__.Routez), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserzRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8679:
/*!***********************************************!*\
  !*** ./src/app/feature/userz/userz.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserzModule": () => (/* binding */ UserzModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _userz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userz-routing.module */ 7865);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-add/admin-add.component */ 7069);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ 2837);
/* harmony import */ var _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-type/user-type.component */ 5912);
/* harmony import */ var _user_type_add_user_type_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-type-add/user-type-add.component */ 3461);
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/student.component */ 9227);
/* harmony import */ var _student_add_student_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-add/student-add.component */ 2444);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher/teacher.component */ 9405);
/* harmony import */ var _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher-add/teacher-add.component */ 2352);
/* harmony import */ var _parent_parents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parent/parents.component */ 8379);
/* harmony import */ var _parent_add_parents_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parent-add/parents-add.component */ 1614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
















class UserzModule {
    static ɵfac = function UserzModule_Factory(t) { return new (t || UserzModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: UserzModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _userz_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserzRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](UserzModule, { declarations: [_admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_2__.AdminAddComponent,
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent,
        _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_4__.UserTypeComponent,
        _user_type_add_user_type_add_component__WEBPACK_IMPORTED_MODULE_5__.UserTypeAddComponent,
        _student_student_component__WEBPACK_IMPORTED_MODULE_6__.StudentComponent,
        _student_add_student_add_component__WEBPACK_IMPORTED_MODULE_7__.StudentAddComponent,
        _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__.TeacherComponent,
        _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_9__.TeacherAddComponent,
        _parent_parents_component__WEBPACK_IMPORTED_MODULE_10__.ParentComponent,
        _parent_add_parents_add_component__WEBPACK_IMPORTED_MODULE_11__.ParentAddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _userz_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserzRoutingModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule] }); })();


/***/ }),

/***/ 1175:
/*!***********************************************!*\
  !*** ./src/app/feature/userz/userz.routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routez": () => (/* binding */ Routez)
/* harmony export */ });
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-add/admin-add.component */ 7069);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ 2837);
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student/student.component */ 9227);
/* harmony import */ var _student_add_student_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-add/student-add.component */ 2444);
/* harmony import */ var _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher-add/teacher-add.component */ 2352);
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ 9405);
/* harmony import */ var _user_type_add_user_type_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-type-add/user-type-add.component */ 3461);
/* harmony import */ var _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-type/user-type.component */ 5912);
/* harmony import */ var _parent_parents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parent/parents.component */ 8379);
/* harmony import */ var _parent_add_parents_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parent-add/parents-add.component */ 1614);











const Routez = [
    // ✅ THIS is the missing piece
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'type',
        component: _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_8__.UserTypeComponent,
        data: {
            title: 'User Type',
            linkCreate: '/feature/user/type-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'User Type'],
        },
    },
    {
        path: 'type-add',
        component: _user_type_add_user_type_add_component__WEBPACK_IMPORTED_MODULE_7__.UserTypeAddComponent,
        data: {
            title: 'User Type',
            linkList: '/feature/user/type',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'User Type', 'Add | Edit'],
        },
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__.AdminComponent,
        data: {
            title: 'Admin',
            linkCreate: '/feature/user/admin-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'Admin'],
        },
    },
    {
        path: 'admin-add',
        component: _admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_1__.AdminAddComponent,
        data: {
            title: 'Admin',
            linkList: '/feature/user/admin',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT],
            layer: ['User', 'Admin', 'Add | Edit'],
        },
    },
    {
        path: 'teacher',
        component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__.TeacherComponent,
        data: {
            title: 'Teacher',
            linkCreate: '/feature/user/teacher-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'Teacher'],
        },
    },
    {
        path: 'teacher-add',
        component: _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_5__.TeacherAddComponent,
        data: {
            title: 'Teacher',
            linkList: '/feature/user/teacher',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT],
            layer: ['User', 'Teacher', 'Add | Edit'],
        },
    },
    {
        path: 'parent',
        component: _parent_parents_component__WEBPACK_IMPORTED_MODULE_9__.ParentComponent,
        data: {
            title: 'Parent',
            linkCreate: '/feature/user/parent-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'Parent'],
        },
    },
    {
        path: 'parent-add',
        component: _parent_add_parents_add_component__WEBPACK_IMPORTED_MODULE_10__.ParentAddComponent,
        data: {
            title: 'Parent',
            linkList: '/feature/user/parent',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT],
            layer: ['User', 'Parent', 'Add | Edit'],
        },
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_3__.StudentComponent,
        data: {
            title: 'Student Profile',
            linkCreate: '/feature/user/student-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'Student'],
        },
    },
    {
        path: 'student-add',
        component: _student_add_student_add_component__WEBPACK_IMPORTED_MODULE_4__.StudentAddComponent,
        data: {
            title: 'Student Admission',
            linkList: '/feature/user/student',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['User', 'Student', 'Add | Edit'],
        },
    },
];


/***/ }),

/***/ 6420:
/*!*******************************************!*\
  !*** ./src/app/forms/common/base.form.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBase": () => (/* binding */ FormBase)
/* harmony export */ });
function FormBase(that, d = {}) {
    return {
        id: [d?.id || ''],
        title: [d?.title || '', that._vs._val('Name', { minChar: 4, alpha: 1 })],
        status: [d?.status || '', that._vs._val('Status', { maxChar: 10, alpha: 1 })],
        desc: [d?.desc || '', that._vs._val('', { maxChar: 255, specialChar: 1 })],
    };
}


/***/ }),

/***/ 6857:
/*!*************************************!*\
  !*** ./src/app/forms/userz.form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAdmin": () => (/* binding */ FormAdmin),
/* harmony export */   "FormBaseUserz": () => (/* binding */ FormBaseUserz),
/* harmony export */   "FormParent": () => (/* binding */ FormParent),
/* harmony export */   "FormStudent": () => (/* binding */ FormStudent),
/* harmony export */   "FormTeacher": () => (/* binding */ FormTeacher)
/* harmony export */ });
/* harmony import */ var _common_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/base.form */ 6420);

function FormBaseUserz(that, d = {}) {
    return {
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        gender: [d?.gender || '', that._vs._val('Gender', { minChar: 5, alpha: 1 })],
        dob: [d?.dob || '', that._vs._val('Date of Birth', { minChar: 10, alpha: 1 })],
        email: [d?.email || '', that._vs._val('Email', { minChar: 25, email: 1 })],
    };
}
function FormAdmin(that, d = {}) {
    that._fs._form = that._fb.group({
        ...FormBaseUserz(that, d),
    });
}
function FormTeacher(that, d = {}) {
    that._fs._form = that._fb.group({
        ...FormBaseUserz(that, d)
    });
}
function FormParent(that, d = {}) {
    that._fs._form = that._fb.group({
        ...FormBaseUserz(that, d)
    });
}
function FormStudent(that, d = {}) {
    that._fs._form = that._fb.group({
        ...FormBaseUserz(that, d),
        fatherName: [d?.fatherName || '', that._vs._val('Father Name', { minChar: 3, alpha: 1 })],
        className: [d?.className || '', that._vs._val('Class', { minChar: 1 })],
        section: [d?.section || '', that._vs._val('Section', { minChar: 1 })],
        status: [d?.status || 'Active'],
        desc: [d?.desc || ''],
    });
}


/***/ })

}]);
//# sourceMappingURL=src_app_feature_userz_userz_module_ts.js.map