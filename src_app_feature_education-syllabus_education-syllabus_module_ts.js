"use strict";
(self["webpackChunkEdu_FE"] = self["webpackChunkEdu_FE"] || []).push([["src_app_feature_education-syllabus_education-syllabus_module_ts"],{

/***/ 3934:
/*!*************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/a-index/a-index.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AIndexComponent": () => (/* binding */ AIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_component_menu_index_menu_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/component/menu-index/menu-index.component */ 3810);


class AIndexComponent {
    basePath = 'feature/syllabus';
    menuItems = [
        { label: 'Book', icon: 'book', route: 'book', description: 'Manage books' },
        { label: 'Chapter', icon: 'layers', route: 'chapter', description: 'Manage chapters' },
        { label: 'Question', icon: 'help', route: 'question', description: 'Manage questions' },
        { label: 'Subject', icon: 'subject', route: 'subject', description: 'Manage subjects' },
    ];
    static ɵfac = function AIndexComponent_Factory(t) { return new (t || AIndexComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AIndexComponent, selectors: [["aam-a-index"]], decls: 1, vars: 2, consts: [[3, "menuItems", "basePath"]], template: function AIndexComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "aam-menu-index", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItems", ctx.menuItems)("basePath", ctx.basePath);
        } }, dependencies: [_shared_component_menu_index_menu_index_component__WEBPACK_IMPORTED_MODULE_0__.MenuIndexComponent], encapsulation: 2 });
}


/***/ }),

/***/ 2950:
/*!***************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/book-add/book-add.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookAddComponent": () => (/* binding */ BookAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/forms */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class BookAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormBook)(this);
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
            (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormBook)(this, data);
        });
    }
    static ɵfac = function BookAddComponent_Factory(t) { return new (t || BookAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BookAddComponent, selectors: [["aam-book-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row", "m-0"], ["field", "code", "lbl", "Book Code"], ["field", "title", "lbl", "Book Title"], ["field", "author", "lbl", "Author"], ["field", "isbn", "lbl", "ISBN"], ["field", "publisher", "lbl", "Publisher"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function BookAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BookAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6)(7, "di-txt", 7)(8, "di-txt", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 4636:
/*!*******************************************************************!*\
  !*** ./src/app/feature/education-syllabus/book/book.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookComponent": () => (/* binding */ BookComponent)
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











function BookComponent_div_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function BookComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r20 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function BookComponent_div_0_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function BookComponent_div_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.code, " ");
} }
function BookComponent_div_0_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function BookComponent_div_0_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r22 == null ? null : item_r22.title, " ");
} }
function BookComponent_div_0_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function BookComponent_div_0_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.author, " ");
} }
function BookComponent_div_0_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function BookComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.isbn, " ");
} }
function BookComponent_div_0_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function BookComponent_div_0_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.publisher, " ");
} }
function BookComponent_div_0_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function BookComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function BookComponent_div_0_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function BookComponent_div_0_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r27);
} }
function BookComponent_div_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 27);
} }
function BookComponent_div_0_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 28);
} }
function BookComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function BookComponent_div_0_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BookComponent_div_0_th_3_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BookComponent_div_0_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BookComponent_div_0_th_6_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BookComponent_div_0_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BookComponent_div_0_th_9_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BookComponent_div_0_td_10_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BookComponent_div_0_th_12_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, BookComponent_div_0_td_13_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, BookComponent_div_0_th_15_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, BookComponent_div_0_td_16_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, BookComponent_div_0_th_18_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, BookComponent_div_0_td_19_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, BookComponent_div_0_th_21_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, BookComponent_div_0_td_22_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, BookComponent_div_0_th_24_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, BookComponent_div_0_td_25_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, BookComponent_div_0_tr_26_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, BookComponent_div_0_tr_27_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class BookComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'code', 'title', 'author', 'isbn', 'publisher', 'status', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Book');
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵBookComponent_BaseFactory; return function BookComponent_Factory(t) { return (ɵBookComponent_BaseFactory || (ɵBookComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](BookComponent)))(t || BookComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["aam-book"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "title"], ["matColumnDef", "author"], ["matColumnDef", "isbn"], ["matColumnDef", "publisher"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "code", "lbl", "Code", 3, "group"], ["field", "title", "lbl", "Title", 3, "group"], ["field", "author", "lbl", "Author", 3, "group"], ["field", "isbn", "lbl", "ISBN", 3, "group"], ["field", "publisher", "lbl", "Publisher", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BookComponent_div_0_Template, 28, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
}


/***/ }),

/***/ 6602:
/*!*********************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/chapter-add/chapter-add.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChapterAddComponent": () => (/* binding */ ChapterAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/forms */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class ChapterAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormChapter)(this);
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
            (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormChapter)(this, data);
        });
    }
    static ɵfac = function ChapterAddComponent_Factory(t) { return new (t || ChapterAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChapterAddComponent, selectors: [["aam-chapter-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row", "m-0"], ["field", "code", "lbl", "Chapter Code"], ["field", "title", "lbl", "Chapter Title"], ["field", "bookTitle", "lbl", "Book Title"], ["field", "pageNumber", "lbl", "Page Number"], ["field", "content", "lbl", "Content"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function ChapterAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ChapterAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6)(7, "di-txt", 7)(8, "di-txt", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFwdGVyLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 8011:
/*!*************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/chapter/chapter.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChapterComponent": () => (/* binding */ ChapterComponent)
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











function ChapterComponent_div_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function ChapterComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r20 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function ChapterComponent_div_0_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function ChapterComponent_div_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.code, " ");
} }
function ChapterComponent_div_0_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function ChapterComponent_div_0_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r22 == null ? null : item_r22.title, " ");
} }
function ChapterComponent_div_0_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function ChapterComponent_div_0_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.bookTitle, " ");
} }
function ChapterComponent_div_0_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function ChapterComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.pageNumber, " ");
} }
function ChapterComponent_div_0_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function ChapterComponent_div_0_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.content, " ");
} }
function ChapterComponent_div_0_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function ChapterComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function ChapterComponent_div_0_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ChapterComponent_div_0_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r27);
} }
function ChapterComponent_div_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 27);
} }
function ChapterComponent_div_0_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 28);
} }
function ChapterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function ChapterComponent_div_0_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ChapterComponent_div_0_th_3_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ChapterComponent_div_0_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ChapterComponent_div_0_th_6_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ChapterComponent_div_0_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ChapterComponent_div_0_th_9_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ChapterComponent_div_0_td_10_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ChapterComponent_div_0_th_12_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ChapterComponent_div_0_td_13_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ChapterComponent_div_0_th_15_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ChapterComponent_div_0_td_16_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ChapterComponent_div_0_th_18_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ChapterComponent_div_0_td_19_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ChapterComponent_div_0_th_21_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ChapterComponent_div_0_td_22_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ChapterComponent_div_0_th_24_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ChapterComponent_div_0_td_25_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ChapterComponent_div_0_tr_26_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ChapterComponent_div_0_tr_27_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class ChapterComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'code', 'title', 'bookTitle', 'pageNumber', 'content', 'status', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Chapter');
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵChapterComponent_BaseFactory; return function ChapterComponent_Factory(t) { return (ɵChapterComponent_BaseFactory || (ɵChapterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](ChapterComponent)))(t || ChapterComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChapterComponent, selectors: [["aam-chapter"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "title"], ["matColumnDef", "bookTitle"], ["matColumnDef", "pageNumber"], ["matColumnDef", "content"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "code", "lbl", "Code", 3, "group"], ["field", "title", "lbl", "Title", 3, "group"], ["field", "bookTitle", "lbl", "Book Title", 3, "group"], ["field", "pageNumber", "lbl", "Page Number", 3, "group"], ["field", "content", "lbl", "Content", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function ChapterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ChapterComponent_div_0_Template, 28, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFwdGVyLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
}


/***/ }),

/***/ 3705:
/*!*********************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/education-syllabus-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routez": () => (/* binding */ Routez)
/* harmony export */ });
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book/book.component */ 4636);
/* harmony import */ var _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-add/book-add.component */ 2950);
/* harmony import */ var _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chapter/chapter.component */ 8011);
/* harmony import */ var _chapter_add_chapter_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chapter-add/chapter-add.component */ 6602);
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question/question.component */ 7680);
/* harmony import */ var _subjectz_subjectz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subjectz/subjectz.component */ 8340);
/* harmony import */ var _subjectz_add_subjectz_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subjectz-add/subjectz-add.component */ 5512);
/* harmony import */ var _a_index_a_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./a-index/a-index.component */ 3934);









const Routez = [
    // ✅ THIS is the missing piece
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
    },
    {
        path: 'index',
        component: _a_index_a_index_component__WEBPACK_IMPORTED_MODULE_8__.AIndexComponent,
        data: {
            title: 'Syllabus',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus'],
        },
    },
    {
        path: 'subject',
        component: _subjectz_subjectz_component__WEBPACK_IMPORTED_MODULE_6__.SubjectzComponent,
        data: {
            title: 'Subject',
            linkList: '/feature/syllabus/subject-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Subject'],
        },
    },
    {
        path: 'subject-add',
        component: _subjectz_add_subjectz_add_component__WEBPACK_IMPORTED_MODULE_7__.SubjectzAddComponent,
        data: {
            title: 'Subject',
            linkList: '/feature/syllabus/subject',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Subject', 'Add | Edit'],
        },
    },
    {
        path: 'book',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_1__.BookComponent,
        data: {
            title: 'Book',
            linkCreate: '/feature/syllabus/book-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Book'],
        },
    },
    {
        path: 'book-add',
        component: _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_2__.BookAddComponent,
        data: {
            title: 'Book',
            linkList: '/feature/syllabus/book',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Book', 'Add | Edit'],
        },
    },
    {
        path: 'chapter',
        component: _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__.ChapterComponent,
        data: {
            title: 'Chapter',
            linkList: '/feature/syllabus/chapter-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Chapter'],
        },
    },
    {
        path: 'chapter-add',
        component: _chapter_add_chapter_add_component__WEBPACK_IMPORTED_MODULE_4__.ChapterAddComponent,
        data: {
            title: 'Chapter',
            linkList: '/feature/syllabus/chapter',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Chapter', 'Add | Edit'],
        },
    },
    {
        path: 'question',
        component: _question_question_component__WEBPACK_IMPORTED_MODULE_5__.QuestionComponent,
        data: {
            title: 'Question',
            linkList: '/feature/syllabus/question-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Question'],
        },
    },
    {
        path: 'question-add',
        component: _question_question_component__WEBPACK_IMPORTED_MODULE_5__.QuestionComponent,
        data: {
            title: 'Question',
            linkList: '/feature/syllabus/question',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Syllabus', 'Question', 'Add | Edit'],
        },
    },
];


/***/ }),

/***/ 6672:
/*!*************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/education-syllabus.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationSyllabusModule": () => (/* binding */ EducationSyllabusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _education_syllabus_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-syllabus-routing.module */ 3705);
/* harmony import */ var _a_index_a_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a-index/a-index.component */ 3934);
/* harmony import */ var _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-add/book-add.component */ 2950);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book/book.component */ 4636);
/* harmony import */ var _chapter_add_chapter_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chapter-add/chapter-add.component */ 6602);
/* harmony import */ var _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chapter/chapter.component */ 8011);
/* harmony import */ var _question_add_question_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-add/question-add.component */ 7135);
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question/question.component */ 7680);
/* harmony import */ var _subjectz_add_subjectz_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subjectz-add/subjectz-add.component */ 5512);
/* harmony import */ var _subjectz_subjectz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subjectz/subjectz.component */ 8340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);















class EducationSyllabusModule {
    static ɵfac = function EducationSyllabusModule_Factory(t) { return new (t || EducationSyllabusModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: EducationSyllabusModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_education_syllabus_routing_module__WEBPACK_IMPORTED_MODULE_1__.Routez)] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](EducationSyllabusModule, { declarations: [_a_index_a_index_component__WEBPACK_IMPORTED_MODULE_2__.AIndexComponent,
        _subjectz_subjectz_component__WEBPACK_IMPORTED_MODULE_10__.SubjectzComponent,
        _book_book_component__WEBPACK_IMPORTED_MODULE_4__.BookComponent,
        _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_6__.ChapterComponent,
        _question_question_component__WEBPACK_IMPORTED_MODULE_8__.QuestionComponent,
        _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_3__.BookAddComponent,
        _chapter_add_chapter_add_component__WEBPACK_IMPORTED_MODULE_5__.ChapterAddComponent,
        _question_add_question_add_component__WEBPACK_IMPORTED_MODULE_7__.QuestionAddComponent,
        _subjectz_add_subjectz_add_component__WEBPACK_IMPORTED_MODULE_9__.SubjectzAddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 7135:
/*!***********************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/question-add/question-add.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionAddComponent": () => (/* binding */ QuestionAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/forms */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class QuestionAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormQuestion)(this);
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
            (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormQuestion)(this, data);
        });
    }
    static ɵfac = function QuestionAddComponent_Factory(t) { return new (t || QuestionAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuestionAddComponent, selectors: [["aam-question-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row", "m-0"], ["field", "code", "lbl", "Question Code"], ["field", "question", "lbl", "Question"], ["field", "chapter", "lbl", "Chapter"], ["field", "difficulty", "lbl", "Difficulty"], ["field", "marks", "lbl", "Marks"], ["field", "answer", "lbl", "Answer"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Description", 3, "req"]], template: function QuestionAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function QuestionAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6)(7, "di-txt", 7)(8, "di-txt", 8)(9, "di-txt", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1hZGQuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ }),

/***/ 7680:
/*!***************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/question/question.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionComponent": () => (/* binding */ QuestionComponent)
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











function QuestionComponent_div_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function QuestionComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r20 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function QuestionComponent_div_0_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function QuestionComponent_div_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.code, " ");
} }
function QuestionComponent_div_0_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function QuestionComponent_div_0_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r22 == null ? null : item_r22.question, " ");
} }
function QuestionComponent_div_0_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function QuestionComponent_div_0_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23 == null ? null : item_r23.chapter, " ");
} }
function QuestionComponent_div_0_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function QuestionComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.difficulty, " ");
} }
function QuestionComponent_div_0_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r11.lb.fh);
} }
function QuestionComponent_div_0_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.marks, " ");
} }
function QuestionComponent_div_0_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r13.lb.fh);
} }
function QuestionComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.status, " ");
} }
function QuestionComponent_div_0_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function QuestionComponent_div_0_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r27);
} }
function QuestionComponent_div_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 27);
} }
function QuestionComponent_div_0_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 28);
} }
function QuestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function QuestionComponent_div_0_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QuestionComponent_div_0_th_3_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, QuestionComponent_div_0_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QuestionComponent_div_0_th_6_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, QuestionComponent_div_0_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, QuestionComponent_div_0_th_9_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, QuestionComponent_div_0_td_10_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, QuestionComponent_div_0_th_12_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QuestionComponent_div_0_td_13_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, QuestionComponent_div_0_th_15_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, QuestionComponent_div_0_td_16_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, QuestionComponent_div_0_th_18_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, QuestionComponent_div_0_td_19_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, QuestionComponent_div_0_th_21_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, QuestionComponent_div_0_td_22_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, QuestionComponent_div_0_th_24_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, QuestionComponent_div_0_td_25_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, QuestionComponent_div_0_tr_26_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, QuestionComponent_div_0_tr_27_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class QuestionComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'code', 'question', 'chapter', 'difficulty', 'marks', 'status', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Question');
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵQuestionComponent_BaseFactory; return function QuestionComponent_Factory(t) { return (ɵQuestionComponent_BaseFactory || (ɵQuestionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](QuestionComponent)))(t || QuestionComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["aam-question"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "question"], ["matColumnDef", "chapter"], ["matColumnDef", "difficulty"], ["matColumnDef", "marks"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "code", "lbl", "Code", 3, "group"], ["field", "question", "lbl", "Question", 3, "group"], ["field", "chapter", "lbl", "Chapter", 3, "group"], ["field", "difficulty", "lbl", "Difficulty", 3, "group"], ["field", "marks", "lbl", "Marks", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QuestionComponent_div_0_Template, 28, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
}


/***/ }),

/***/ 5512:
/*!***********************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/subjectz-add/subjectz-add.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectzAddComponent": () => (/* binding */ SubjectzAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/class */ 3538);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/forms */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/control/txt/txt.component */ 3588);







class SubjectzAddComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_0__.BaseClassTemplate {
    route;
    constructor(route) {
        super();
        this.route = route;
        this.param.ep = src_app_core_enums__WEBPACK_IMPORTED_MODULE_1__.URLz.NO_SET;
    }
    ngOnInit() {
        this._id = this.getQuery('id');
        (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormSubjectz)(this);
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
            (0,src_app_core_forms__WEBPACK_IMPORTED_MODULE_2__.FormSubjectz)(this, data);
        });
    }
    static ɵfac = function SubjectzAddComponent_Factory(t) { return new (t || SubjectzAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SubjectzAddComponent, selectors: [["aam-subjectz-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row", "m-0"], ["field", "code", "lbl", "Subject Code"], ["field", "name", "lbl", "Subject Name"], ["field", "description", "lbl", "Description"], ["field", "status", "lbl", "Status"], ["field", "desc", "lbl", "Additional Description", 3, "req"]], template: function SubjectzAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SubjectzAddComponent_Template_form_ngSubmit_0_listener() { return ctx._onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "di-txt", 2)(3, "di-txt", 3)(4, "di-txt", 4)(5, "di-txt", 5)(6, "di-txt", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("req", false);
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_component_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_3__.TxtComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0ei1hZGQuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ }),

/***/ 8340:
/*!***************************************************************************!*\
  !*** ./src/app/feature/education-syllabus/subjectz/subjectz.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectzComponent": () => (/* binding */ SubjectzComponent)
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











function SubjectzComponent_div_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function SubjectzComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r16 + ctx_r2.lb.tbl.index * ctx_r2.lb.tbl.size + 1, " ");
} }
function SubjectzComponent_div_0_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r3.lb.fh);
} }
function SubjectzComponent_div_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.code, " ");
} }
function SubjectzComponent_div_0_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5.lb.fh);
} }
function SubjectzComponent_div_0_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r18 == null ? null : item_r18.name, " ");
} }
function SubjectzComponent_div_0_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7.lb.fh);
} }
function SubjectzComponent_div_0_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r19 == null ? null : item_r19.description, " ");
} }
function SubjectzComponent_div_0_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-txt", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9.lb.fh);
} }
function SubjectzComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r20 == null ? null : item_r20.status, " ");
} }
function SubjectzComponent_div_0_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function SubjectzComponent_div_0_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "aam-tbl-actions", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("record", item_r21);
} }
function SubjectzComponent_div_0_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 23);
} }
function SubjectzComponent_div_0_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 24);
} }
function SubjectzComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function SubjectzComponent_div_0_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.lb.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SubjectzComponent_div_0_th_3_Template, 3, 3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SubjectzComponent_div_0_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SubjectzComponent_div_0_th_6_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SubjectzComponent_div_0_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SubjectzComponent_div_0_th_9_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SubjectzComponent_div_0_td_10_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SubjectzComponent_div_0_th_12_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SubjectzComponent_div_0_td_13_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SubjectzComponent_div_0_th_15_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SubjectzComponent_div_0_td_16_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SubjectzComponent_div_0_th_18_Template, 3, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SubjectzComponent_div_0_td_19_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, SubjectzComponent_div_0_tr_20_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, SubjectzComponent_div_0_tr_21_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.lb.ds);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.lb.cols)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.lb.cols);
} }
class SubjectzComponent extends src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.BaseClassTemplate {
    ngOnInit() {
        this.initTables();
    }
    initTables() {
        this.lb = new src_app_core_class__WEBPACK_IMPORTED_MODULE_1__.LB({
            isDummy: true,
            ep: src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.URLz.$,
            query: this._fb.group({ 'is_advance': ['1'] }).value,
        }, ['id', 'code', 'name', 'description', 'status', 'actions']);
        this.lb.beforeHit = () => {
            let records = (0,src_app_core__WEBPACK_IMPORTED_MODULE_0__.DATA_DUMMY)('Subjectz');
            this.lb.ds.data = records;
            this.lb.tbl.length = records.length;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.lb);
        };
        this.lb.init();
        this.lb.refresh();
        this.lb.reset();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵSubjectzComponent_BaseFactory; return function SubjectzComponent_Factory(t) { return (ɵSubjectzComponent_BaseFactory || (ɵSubjectzComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](SubjectzComponent)))(t || SubjectzComponent); }; }();
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SubjectzComponent, selectors: [["aam-subjectz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat_table", 4, "ngIf"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after"], ["field", "code", "lbl", "Code", 3, "group"], ["field", "name", "lbl", "Subject Name", 3, "group"], ["field", "description", "lbl", "Description", 3, "group"], ["field", "status", "lbl", "Status", 3, "group"], [2, "font-size", "16px", "font-weight", "400"], [3, "record"], ["mat-header-row", ""], ["mat-row", ""]], template: function SubjectzComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SubjectzComponent_div_0_Template, 22, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lb.ds);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_component_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_3__.TblTxtComponent, _shared_component_table_tbl_actions_tbl_actions_component__WEBPACK_IMPORTED_MODULE_4__.TblActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0ei5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
}


/***/ })

}]);
//# sourceMappingURL=src_app_feature_education-syllabus_education-syllabus_module_ts.js.map