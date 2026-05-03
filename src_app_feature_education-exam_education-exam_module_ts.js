"use strict";
(self["webpackChunkEdu_FE"] = self["webpackChunkEdu_FE"] || []).push([["src_app_feature_education-exam_education-exam_module_ts"],{

/***/ 7430:
/*!*************************************************************************!*\
  !*** ./src/app/feature/education-exam/education-exam-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routez": () => (/* binding */ Routez)
/* harmony export */ });
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-schedule/exam-schedule.component */ 6043);
/* harmony import */ var _exam_schedule_add_exam_schedule_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam-schedule-add/exam-schedule-add.component */ 6202);
/* harmony import */ var _exam_type_exam_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam-type/exam-type.component */ 5587);
/* harmony import */ var _exam_type_add_exam_type_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-type-add/exam-type-add.component */ 6852);
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grade/grade.component */ 1346);
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ 9791);
/* harmony import */ var _result_add_result_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result-add/result-add.component */ 8841);








const Routez = [
    // ✅ THIS is the missing piece
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'exam-schedule',
        component: _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_1__.ExamScheduleComponent,
        data: {
            title: 'Exam Schedule',
            linkCreate: '/feature/exam/schedule-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Exam Schedule'],
        },
    },
    {
        path: 'exam-schedule-add',
        component: _exam_schedule_add_exam_schedule_add_component__WEBPACK_IMPORTED_MODULE_2__.ExamScheduleAddComponent,
        data: {
            title: 'Exam Schedule',
            linkList: '/feature/exam/schedule',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Exam Schedule', 'Add | Edit'],
        },
    },
    {
        path: 'exam-type',
        component: _exam_type_exam_type_component__WEBPACK_IMPORTED_MODULE_3__.ExamTypeComponent,
        data: {
            title: 'Exam Type',
            linkCreate: '/feature/exam/type-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Exam Type'],
        },
    },
    {
        path: 'exam-type-add',
        component: _exam_type_add_exam_type_add_component__WEBPACK_IMPORTED_MODULE_4__.ExamTypeAddComponent,
        data: {
            title: 'Exam Type',
            linkList: '/feature/exam/type',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Exam Type', 'Add | Edit'],
        },
    },
    {
        path: 'grade',
        component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__.GradeComponent,
        data: {
            title: 'Grade',
            linkCreate: '/feature/exam/grade-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Grade'],
        },
    },
    {
        path: 'grade-add',
        component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__.GradeComponent,
        data: {
            title: 'Grade',
            linkList: '/feature/exam/grade',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Grade', 'Add | Edit'],
        },
    },
    {
        path: 'result',
        component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__.ResultComponent,
        data: {
            title: 'Result',
            linkCreate: '/feature/exam/result-add',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Result'],
        },
    },
    {
        path: 'result-add',
        component: _result_add_result_add_component__WEBPACK_IMPORTED_MODULE_7__.ResultAddComponent,
        data: {
            title: 'Result',
            linkList: '/feature/exam/result',
            permission: [src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.ADD, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.EDIT, src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.URL_ACTION.VIEW],
            layer: ['Exam', 'Result', 'Add | Edit'],
        },
    },
];


/***/ }),

/***/ 827:
/*!*****************************************************************!*\
  !*** ./src/app/feature/education-exam/education-exam.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationExamModule": () => (/* binding */ EducationExamModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _exam_type_exam_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-type/exam-type.component */ 5587);
/* harmony import */ var _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-schedule/exam-schedule.component */ 6043);
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grade/grade.component */ 1346);
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result/result.component */ 9791);
/* harmony import */ var _exam_type_add_exam_type_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-type-add/exam-type-add.component */ 6852);
/* harmony import */ var _exam_schedule_add_exam_schedule_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-schedule-add/exam-schedule-add.component */ 6202);
/* harmony import */ var _grade_add_grade_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grade-add/grade-add.component */ 6020);
/* harmony import */ var _result_add_result_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result-add/result-add.component */ 8841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _education_exam_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education-exam-routing.module */ 7430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);













class EducationExamModule {
    static ɵfac = function EducationExamModule_Factory(t) { return new (t || EducationExamModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EducationExamModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_education_exam_routing_module__WEBPACK_IMPORTED_MODULE_8__.Routez)] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EducationExamModule, { declarations: [_exam_type_exam_type_component__WEBPACK_IMPORTED_MODULE_0__.ExamTypeComponent,
        _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_1__.ExamScheduleComponent,
        _grade_grade_component__WEBPACK_IMPORTED_MODULE_2__.GradeComponent,
        _result_result_component__WEBPACK_IMPORTED_MODULE_3__.ResultComponent,
        _exam_type_add_exam_type_add_component__WEBPACK_IMPORTED_MODULE_4__.ExamTypeAddComponent,
        _exam_schedule_add_exam_schedule_add_component__WEBPACK_IMPORTED_MODULE_5__.ExamScheduleAddComponent,
        _grade_add_grade_add_component__WEBPACK_IMPORTED_MODULE_6__.GradeAddComponent,
        _result_add_result_add_component__WEBPACK_IMPORTED_MODULE_7__.ResultAddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 6202:
/*!*****************************************************************************************!*\
  !*** ./src/app/feature/education-exam/exam-schedule-add/exam-schedule-add.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamScheduleAddComponent": () => (/* binding */ ExamScheduleAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExamScheduleAddComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ExamScheduleAddComponent_Factory(t) { return new (t || ExamScheduleAddComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamScheduleAddComponent, selectors: [["aam-exam-schedule-add"]], decls: 2, vars: 0, template: function ExamScheduleAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "exam-schedule-add works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXNjaGVkdWxlLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 6043:
/*!*********************************************************************************!*\
  !*** ./src/app/feature/education-exam/exam-schedule/exam-schedule.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamScheduleComponent": () => (/* binding */ ExamScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExamScheduleComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ExamScheduleComponent_Factory(t) { return new (t || ExamScheduleComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamScheduleComponent, selectors: [["aam-exam-schedule"]], decls: 2, vars: 0, template: function ExamScheduleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "exam-schedule works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ }),

/***/ 6852:
/*!*********************************************************************************!*\
  !*** ./src/app/feature/education-exam/exam-type-add/exam-type-add.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTypeAddComponent": () => (/* binding */ ExamTypeAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExamTypeAddComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ExamTypeAddComponent_Factory(t) { return new (t || ExamTypeAddComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamTypeAddComponent, selectors: [["aam-exam-type-add"]], decls: 2, vars: 0, template: function ExamTypeAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "exam-type-add works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXR5cGUtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ }),

/***/ 5587:
/*!*************************************************************************!*\
  !*** ./src/app/feature/education-exam/exam-type/exam-type.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTypeComponent": () => (/* binding */ ExamTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExamTypeComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ExamTypeComponent_Factory(t) { return new (t || ExamTypeComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamTypeComponent, selectors: [["aam-exam-type"]], decls: 2, vars: 0, template: function ExamTypeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "exam-type works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ }),

/***/ 6020:
/*!*************************************************************************!*\
  !*** ./src/app/feature/education-exam/grade-add/grade-add.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeAddComponent": () => (/* binding */ GradeAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GradeAddComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function GradeAddComponent_Factory(t) { return new (t || GradeAddComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeAddComponent, selectors: [["aam-grade-add"]], decls: 2, vars: 0, template: function GradeAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grade-add works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS1hZGQuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ }),

/***/ 1346:
/*!*****************************************************************!*\
  !*** ./src/app/feature/education-exam/grade/grade.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeComponent": () => (/* binding */ GradeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GradeComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function GradeComponent_Factory(t) { return new (t || GradeComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeComponent, selectors: [["aam-grade"]], decls: 2, vars: 0, template: function GradeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grade works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 8841:
/*!***************************************************************************!*\
  !*** ./src/app/feature/education-exam/result-add/result-add.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultAddComponent": () => (/* binding */ ResultAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ResultAddComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ResultAddComponent_Factory(t) { return new (t || ResultAddComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultAddComponent, selectors: [["aam-result-add"]], decls: 2, vars: 0, template: function ResultAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "result-add works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ }),

/***/ 9791:
/*!*******************************************************************!*\
  !*** ./src/app/feature/education-exam/result/result.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultComponent": () => (/* binding */ ResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ResultComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["aam-result"]], decls: 2, vars: 0, template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "result works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ })

}]);
//# sourceMappingURL=src_app_feature_education-exam_education-exam_module_ts.js.map