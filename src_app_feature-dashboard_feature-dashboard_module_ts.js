"use strict";
(self["webpackChunkEdu_FE"] = self["webpackChunkEdu_FE"] || []).push([["src_app_feature-dashboard_feature-dashboard_module_ts"],{

/***/ 4223:
/*!************************************************************!*\
  !*** ./src/app/feature-dashboard/admin/admin.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["aam-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });
}


/***/ }),

/***/ 7735:
/*!********************************************************************!*\
  !*** ./src/app/feature-dashboard/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);











function DashboardComponent_mat_grid_tile_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 5)(1, "mat-card", 6)(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 8, 9)(10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 11)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const card_r1 = ctx.$implicit;

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
  }
}

class DashboardComponent {
  breakpointObserver;
  /** Based on the screen size, switch from standard to one column per row */

  cards;

  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
  }

  ngOnInit() {
    this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      matches
    }) => {
      if (matches) {
        return [{
          title: 'Card 1',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 2',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 3',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 4',
          cols: 1,
          rows: 1
        }];
      }

      return [{
        title: 'Card 1',
        cols: 2,
        rows: 1
      }, {
        title: 'Card 2',
        cols: 1,
        rows: 1
      }, {
        title: 'Card 3',
        cols: 1,
        rows: 2
      }, {
        title: 'Card 4',
        cols: 1,
        rows: 1
      }];
    }));
  }

  static ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["aam-dashboard"]],
    decls: 8,
    vars: 3,
    consts: [["cols", "1", "rowHeight", "50px"], ["colspan", "1", 1, "flex--start"], [1, "p-0"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0)(1, "mat-grid-tile", 1)(2, "section")(3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Actions Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_mat_grid_tile_6_Template, 17, 4, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.cards));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridTile, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: [".flex--start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.flex--end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex--start--top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.flex--start[_ngcontent-%COMP%]     .mat-grid-tile-content {\n  justify-content: flex-start;\n}\n.flex--end[_ngcontent-%COMP%]     .mat-grid-tile-content {\n  justify-content: flex-end;\n}\n.flex--start--top[_ngcontent-%COMP%]     .mat-grid-tile-content {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .flex--start[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl][_ngcontent-%COMP%]   .flex--end[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.parent-active[_ngcontent-%COMP%] {\n  background-color: rgb(185, 185, 185);\n}\n.child-active[_ngcontent-%COMP%] {\n  background-color: rgb(204, 203, 203);\n}\n\n.form-action-buttons[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mat-sort-header-container[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\ndi-tbl-txt[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border: 0px;\n  border-bottom: 2px solid #673ab7;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(10, 10, 10, 0.2549019608);\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #673ab7;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #673ab7;\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWUuY3VzdG9taXplLnNjc3MiLCJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozt1REFBQTtBQU1BLDZCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNERjtBREdBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDQUY7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTs7O3VEQUFBO0FBSUE7RUFDRSwyQkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTs7O3VEQUFBO0FBSUE7RUFDRSx5QkFBQTtBQ0NGO0FEQ0E7RUFDRSwyQkFBQTtBQ0VGO0FEQ0E7O3VEQUFBO0FBR0E7RUFDRSxvQ0FBQTtBQ0VGO0FEQUE7RUFDRSxvQ0FBQTtBQ0dGO0FEQUE7O3VEQUFBO0FBR0E7RUFDRSxpQkFBQTtBQ0dGO0FEQUE7Ozt1REFBQTtBQUlBOzs7RUFHRSxpQkFBQTtBQ0dGO0FEQUE7RUFDRSwyQkFBQTtBQ0dGO0FEREE7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUY7QURDQSw2Q0FBQTtBQUVBLDZDQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERUEsMkJBQUE7QUFDQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBLGlDQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQSxtQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNDRjtBQS9HQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtIRjtBQS9HQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFrSEY7QUEvR0E7RUFDRSxrQkFBQTtBQWtIRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBMYXlvdXQgVXRpbGl0aWVzXHJcbiAgIEhhbmRsZXMgTFRSL1JUTCBhdXRvbWF0aWNhbGx5XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cclxuLyogRmxleCBkaXJlY3Rpb24gdXRpbGl0aWVzICovXHJcbi5mbGV4LS1zdGFydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmZsZXgtLWVuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5mbGV4LS1zdGFydC0tdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQW5ndWxhciBNYXRlcmlhbCBHcmlkIE92ZXJyaWRlc1xyXG4gICBVc2luZyA6Om5nLWRlZXAgdG8gdGFyZ2V0IG1hdC1ncmlkLXRpbGUgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uZmxleC0tc3RhcnQgOjpuZy1kZWVwIC5tYXQtZ3JpZC10aWxlLWNvbnRlbnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZsZXgtLWVuZCA6Om5nLWRlZXAgLm1hdC1ncmlkLXRpbGUtY29udGVudCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtLXN0YXJ0LS10b3AgOjpuZy1kZWVwIC5tYXQtZ3JpZC10aWxlLWNvbnRlbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTFRSIC8gUlRMIE92ZXJyaWRlc1xyXG4gICBBdXRvbWF0aWNhbGx5IGZsaXBzIGZsZXggYWxpZ25tZW50IGJhc2VkIG9uIGRpclxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5bZGlyPVwicnRsXCJdIC5mbGV4LS1zdGFydCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5bZGlyPVwicnRsXCJdIC5mbGV4LS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQWN0aXZlIEl0ZW0gU3R5bGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYXJlbnQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XHJcbn1cclxuLmNoaWxkLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjAzLCAyMDMpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBGb3JtIEJ1dHRvbiBVdGlsaXRpZXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmZvcm0tYWN0aW9uLWJ1dHRvbnMge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBPcHRpb25hbDogR2xvYmFsIHJlc2V0cyBmb3IgTWF0ZXJpYWwgSW5wdXRzXHJcbiAgIEhlbHBzIFJUTCB0ZXh0IGFsaWdubWVudCBpbiBmb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5bZGlyPVwicnRsXCJdIGlucHV0LFxyXG5bZGlyPVwicnRsXCJdIHRleHRhcmVhLFxyXG5bZGlyPVwicnRsXCJdIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuZGktdGJsLXR4dCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY3M2FiNztcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG5cclxuLyogc3R5bGVzLnNjc3MgLSBBZGQgdGhpcyBhdCB0aGUgcm9vdCBsZXZlbCAqL1xyXG5cclxuLyogVGFyZ2V0IGFsbCBzY3JvbGxiYXJzIGluIHRoZSBhcHBsaWNhdGlvbiAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4vKiBUcmFjayAodGhlIGJhY2tncm91bmQpICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMwYTBhMGE0MTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaHVtYiAodGhlIGRyYWdnYWJsZSBoYW5kbGUpICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM2NzNhYjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogVGh1bWIgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzY3M2FiNztcclxufVxyXG4iLCJAaW1wb3J0ICcvc3JjL3N0eWxlcy90aGVtZS5jdXN0b21pemUnO1xyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
  });
}

/***/ }),

/***/ 554:
/*!***********************************************************************!*\
  !*** ./src/app/feature-dashboard/feature-dashboard-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routez": () => (/* binding */ Routez)
/* harmony export */ });
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.component */ 4223);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7735);
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finance/finance.component */ 6428);
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent/parent.component */ 4679);
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ 6229);
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher/teacher.component */ 9231);






const Routez = [
    // ✅ THIS is the missing piece
    // {
    //   path: 'type',
    //   component: UserTypeComponent,
    //   data: {
    //     title: 'User Type',
    //     linkCreate: '/feature/user/type-add',
    //     permission: [URL_ACTION.VIEW],
    //     layer: ['User', 'User Type'],
    //   },
    // },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
        data: {}
    },
    {
        path: 'finance',
        component: _finance_finance_component__WEBPACK_IMPORTED_MODULE_2__.FinanceComponent,
        data: {}
    },
    {
        path: 'parent',
        component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_3__.ParentComponent,
        data: {}
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__.StudentComponent,
        data: {}
    },
    {
        path: 'teacher',
        component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_5__.TeacherComponent,
        data: {}
    },
    {
        path: 'main',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        data: {}
    },
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        data: {}
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];


/***/ }),

/***/ 680:
/*!***************************************************************!*\
  !*** ./src/app/feature-dashboard/feature-dashboard.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureDashboardModule": () => (/* binding */ FeatureDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _feature_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature-dashboard/dashboard/dashboard.component */ 7735);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _feature_dashboard_finance_finance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature-dashboard/finance/finance.component */ 6428);
/* harmony import */ var _feature_dashboard_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-dashboard/admin/admin.component */ 4223);
/* harmony import */ var _feature_dashboard_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feature-dashboard/teacher/teacher.component */ 9231);
/* harmony import */ var _feature_dashboard_parent_parent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feature-dashboard/parent/parent.component */ 4679);
/* harmony import */ var _feature_dashboard_student_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feature-dashboard/student/student.component */ 6229);
/* harmony import */ var _feature_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature-dashboard-routing.module */ 554);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);

















class FeatureDashboardModule {
    static ɵfac = function FeatureDashboardModule_Factory(t) { return new (t || FeatureDashboardModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: FeatureDashboardModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_feature_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__.Routez),
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FeatureDashboardModule, { declarations: [_feature_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        _feature_dashboard_finance_finance_component__WEBPACK_IMPORTED_MODULE_1__.FinanceComponent,
        _feature_dashboard_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__.AdminComponent,
        _feature_dashboard_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_3__.TeacherComponent,
        _feature_dashboard_parent_parent_component__WEBPACK_IMPORTED_MODULE_4__.ParentComponent,
        _feature_dashboard_student_student_component__WEBPACK_IMPORTED_MODULE_5__.StudentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule] }); })();


/***/ }),

/***/ 6428:
/*!****************************************************************!*\
  !*** ./src/app/feature-dashboard/finance/finance.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinanceComponent": () => (/* binding */ FinanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FinanceComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function FinanceComponent_Factory(t) { return new (t || FinanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinanceComponent, selectors: [["aam-finance"]], decls: 2, vars: 0, template: function FinanceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "finance works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ }),

/***/ 4679:
/*!**************************************************************!*\
  !*** ./src/app/feature-dashboard/parent/parent.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentComponent": () => (/* binding */ ParentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ParentComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["aam-parent"]], decls: 2, vars: 0, template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "parent works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
}


/***/ }),

/***/ 6229:
/*!****************************************************************!*\
  !*** ./src/app/feature-dashboard/student/student.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentComponent": () => (/* binding */ StudentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StudentComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["aam-student"]], decls: 2, vars: 0, template: function StudentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ }),

/***/ 9231:
/*!****************************************************************!*\
  !*** ./src/app/feature-dashboard/teacher/teacher.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherComponent": () => (/* binding */ TeacherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TeacherComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["aam-teacher"]], decls: 2, vars: 0, template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teacher works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
}


/***/ })

}]);
//# sourceMappingURL=src_app_feature-dashboard_feature-dashboard_module_ts.js.map