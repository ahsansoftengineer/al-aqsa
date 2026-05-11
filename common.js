"use strict";
(self["webpackChunkEdu_FE"] = self["webpackChunkEdu_FE"] || []).push([["common"],{

/***/ 2390:
/*!***************************************!*\
  !*** ./src/app/core/data/generate.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_DUMMY": () => (/* binding */ DATA_DUMMY)
/* harmony export */ });
const DATA_DUMMY = (name, length = 15) => {
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

/***/ 5951:
/*!************************************************!*\
  !*** ./src/app/core/forms/common/base.form.ts ***!
  \************************************************/
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

/***/ 5444:
/*!**********************************************!*\
  !*** ./src/app/core/forms/education.form.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAttendance": () => (/* binding */ FormAttendance),
/* harmony export */   "FormClassRoutine": () => (/* binding */ FormClassRoutine),
/* harmony export */   "FormClassz": () => (/* binding */ FormClassz),
/* harmony export */   "FormInstitute": () => (/* binding */ FormInstitute),
/* harmony export */   "FormLibrary": () => (/* binding */ FormLibrary),
/* harmony export */   "FormSectionz": () => (/* binding */ FormSectionz),
/* harmony export */   "FormStudentPromote": () => (/* binding */ FormStudentPromote)
/* harmony export */ });
/* harmony import */ var _common_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/base.form */ 5951);

function FormInstitute(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        address: [d?.address || '', that._vs._val('Address', { minChar: 5 })],
        phone: [d?.phone || '', that._vs._val('Phone', { minChar: 10 })],
        email: [d?.email || '', that._vs._val('Email', { minChar: 5, email: 1 })],
        principal: [d?.principal || '', that._vs._val('Principal Name', { minChar: 3, alpha: 1 })],
    });
}
function FormAttendance(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        studentName: [d?.studentName || '', that._vs._val('Student Name', { minChar: 3, alpha: 1 })],
        attendanceDate: [d?.attendanceDate || '', that._vs._val('Attendance Date', { minChar: 10 })],
        isPresent: [d?.isPresent || '', that._vs._val('Present/Absent', { minChar: 1 })],
    });
}
function FormClassz(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        level: [d?.level || '', that._vs._val('Class Level', { minChar: 1 })],
    });
}
function FormSectionz(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Section Code', { minChar: 2, alpha: 1 })],
        className: [d?.className || '', that._vs._val('Class Name', { minChar: 2, alpha: 1 })],
    });
}
function FormLibrary(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Book Code', { minChar: 3 })],
        author: [d?.author || '', that._vs._val('Author Name', { minChar: 3, alpha: 1 })],
        isbn: [d?.isbn || '', that._vs._val('ISBN', { minChar: 10 })],
        quantity: [d?.quantity || '', that._vs._val('Quantity', { minChar: 1 })],
    });
}
function FormClassRoutine(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Routine Code', { minChar: 3 })],
        className: [d?.className || '', that._vs._val('Class Name', { minChar: 2, alpha: 1 })],
        subject: [d?.subject || '', that._vs._val('Subject', { minChar: 3, alpha: 1 })],
        teacher: [d?.teacher || '', that._vs._val('Teacher Name', { minChar: 3, alpha: 1 })],
        timing: [d?.timing || '', that._vs._val('Timing', { minChar: 5 })],
    });
}
function FormStudentPromote(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Promotion Code', { minChar: 3 })],
        studentName: [d?.studentName || '', that._vs._val('Student Name', { minChar: 3, alpha: 1 })],
        currentClass: [d?.currentClass || '', that._vs._val('Current Class', { minChar: 1 })],
        newClass: [d?.newClass || '', that._vs._val('New Class', { minChar: 1 })],
        promoteDate: [d?.promoteDate || '', that._vs._val('Promotion Date', { minChar: 10 })],
    });
}


/***/ }),

/***/ 9531:
/*!*************************************!*\
  !*** ./src/app/core/forms/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAdmin": () => (/* reexport safe */ _userz_form__WEBPACK_IMPORTED_MODULE_1__.FormAdmin),
/* harmony export */   "FormAttendance": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormAttendance),
/* harmony export */   "FormBase": () => (/* reexport safe */ _common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase),
/* harmony export */   "FormBaseUserz": () => (/* reexport safe */ _userz_form__WEBPACK_IMPORTED_MODULE_1__.FormBaseUserz),
/* harmony export */   "FormBook": () => (/* reexport safe */ _syllabus_form__WEBPACK_IMPORTED_MODULE_3__.FormBook),
/* harmony export */   "FormChapter": () => (/* reexport safe */ _syllabus_form__WEBPACK_IMPORTED_MODULE_3__.FormChapter),
/* harmony export */   "FormClassRoutine": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormClassRoutine),
/* harmony export */   "FormClassz": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormClassz),
/* harmony export */   "FormInstitute": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormInstitute),
/* harmony export */   "FormLibrary": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormLibrary),
/* harmony export */   "FormParent": () => (/* reexport safe */ _userz_form__WEBPACK_IMPORTED_MODULE_1__.FormParent),
/* harmony export */   "FormQuestion": () => (/* reexport safe */ _syllabus_form__WEBPACK_IMPORTED_MODULE_3__.FormQuestion),
/* harmony export */   "FormSectionz": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormSectionz),
/* harmony export */   "FormStudent": () => (/* reexport safe */ _userz_form__WEBPACK_IMPORTED_MODULE_1__.FormStudent),
/* harmony export */   "FormStudentPromote": () => (/* reexport safe */ _education_form__WEBPACK_IMPORTED_MODULE_2__.FormStudentPromote),
/* harmony export */   "FormSubjectz": () => (/* reexport safe */ _syllabus_form__WEBPACK_IMPORTED_MODULE_3__.FormSubjectz),
/* harmony export */   "FormTeacher": () => (/* reexport safe */ _userz_form__WEBPACK_IMPORTED_MODULE_1__.FormTeacher)
/* harmony export */ });
/* harmony import */ var _common_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/base.form */ 5951);
/* harmony import */ var _userz_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userz.form */ 9460);
/* harmony import */ var _education_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education.form */ 5444);
/* harmony import */ var _syllabus_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syllabus.form */ 6337);






/***/ }),

/***/ 6337:
/*!*********************************************!*\
  !*** ./src/app/core/forms/syllabus.form.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBook": () => (/* binding */ FormBook),
/* harmony export */   "FormChapter": () => (/* binding */ FormChapter),
/* harmony export */   "FormQuestion": () => (/* binding */ FormQuestion),
/* harmony export */   "FormSubjectz": () => (/* binding */ FormSubjectz)
/* harmony export */ });
/* harmony import */ var _common_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/base.form */ 5951);

function FormBook(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Book Code', { minChar: 3 })],
        author: [d?.author || '', that._vs._val('Author', { minChar: 3, alpha: 1 })],
        isbn: [d?.isbn || '', that._vs._val('ISBN', { minChar: 10 })],
        publisher: [d?.publisher || '', that._vs._val('Publisher', { minChar: 3, alpha: 1 })],
    });
}
function FormChapter(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Chapter Code', { minChar: 3 })],
        bookTitle: [d?.bookTitle || '', that._vs._val('Book Title', { minChar: 3, alpha: 1 })],
        pageNumber: [d?.pageNumber || '', that._vs._val('Page Number', { minChar: 1 })],
        content: [d?.content || '', that._vs._val('Content', { minChar: 5 })],
    });
}
function FormQuestion(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Question Code', { minChar: 3 })],
        question: [d?.question || '', that._vs._val('Question', { minChar: 5 })],
        chapter: [d?.chapter || '', that._vs._val('Chapter', { minChar: 3, alpha: 1 })],
        difficulty: [d?.difficulty || '', that._vs._val('Difficulty', { minChar: 1 })],
        marks: [d?.marks || '', that._vs._val('Marks', { minChar: 1 })],
        answer: [d?.answer || '', that._vs._val('Answer', { minChar: 3 })],
    });
}
function FormSubjectz(that, d = {}) {
    that._fs._form = that._fb.group({
        ...(0,_common_base_form__WEBPACK_IMPORTED_MODULE_0__.FormBase)(that, d),
        code: [d?.code || '', that._vs._val('Subject Code', { minChar: 3 })],
    });
}


/***/ }),

/***/ 9460:
/*!******************************************!*\
  !*** ./src/app/core/forms/userz.form.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAdmin": () => (/* binding */ FormAdmin),
/* harmony export */   "FormBaseUserz": () => (/* binding */ FormBaseUserz),
/* harmony export */   "FormParent": () => (/* binding */ FormParent),
/* harmony export */   "FormStudent": () => (/* binding */ FormStudent),
/* harmony export */   "FormTeacher": () => (/* binding */ FormTeacher)
/* harmony export */ });
/* harmony import */ var _common_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/base.form */ 5951);

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
    });
}


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



/***/ })

}]);
//# sourceMappingURL=common.js.map