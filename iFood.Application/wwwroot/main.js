(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\victor.souza\source\repos\iFood\iFood.UI\src\main.ts */"zUnb");


/***/ }),

/***/ "3+Lc":
/*!******************************************************!*\
  !*** ./src/app/modules/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _form_product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/product.form.component */ "G/xC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/product.service */ "aiL1");
/* harmony import */ var src_app_shared_services_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notifier.service */ "4syv");
/* harmony import */ var ngx_notification_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-notification-bar */ "ECRL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");














function ProductComponent_mat_card_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sem imagem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_mat_card_22_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_mat_card_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_mat_card_22_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const product_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onOpenForm(product_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_mat_card_22_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductComponent_mat_card_22_img_3_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r4.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r4.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, product_r4.value, "BRL"));
} }
function ProductComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onPaginate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ver mais produtos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "find_in_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ops! Nenhum produto cadastrado ainda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Para come\u00E7ar, clique no bot\u00E3o \"Cadastrar Produto\" ou no \"+\", no canto superior direito da tela");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_27_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onOpenForm(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cadastrar Produto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductComponent {
    constructor(router, dialog, service, notifier) {
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.notifier = notifier;
        this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.hasMore$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentPage = 0;
    }
    ngOnInit() {
        this.fetchProducts();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    fetchProducts(textSearch = '', debonceTime = 0, page = 0, concat = false) {
        this.service.get(textSearch, page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(debonceTime))
            .subscribe((result) => {
            if (concat) {
                this.products$.next(this.products$.value.concat(result.data));
            }
            else {
                this.products$.next(result.data);
                this.currentPage = 0;
            }
            this.hasMore$.next(result.hasMore);
        });
    }
    onLogoff() {
        localStorage.removeItem('ifood.islogged');
        this.router.navigateByUrl('/');
    }
    onOpenForm(product) {
        this.dialog.open(_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__["ProductFormComponent"], {
            width: '100%',
            panelClass: 'fullscreen',
            data: product
        })
            .afterClosed()
            .subscribe(result => {
            if (result.success) {
                this.fetchProducts();
                this.notifier.success(result.message);
            }
        });
    }
    onPaginate() {
        this.currentPage += 1;
        this.fetchProducts(this.searchText$.value, 0, this.currentPage, true);
    }
    onSearch(evt) {
        this.searchText$.next(evt.target.value);
        this.fetchProducts(this.searchText$.value, 1000);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_notifier_service__WEBPACK_IMPORTED_MODULE_7__["NotifierService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 29, vars: 12, consts: [[1, "product-component"], [1, "header-wrapper"], [1, "logo"], ["src", "assets/img/logo.svg", "alt", "iFood - Logo"], [1, "search-bar-wrapper"], [1, "search-bar"], ["type", "text", "placeholder", "Pesquisar", 3, "value", "keyup"], ["search", ""], ["mat-button", "", "aria-label", "Sair da aplica\u00E7\u00E3o", 3, "click"], ["mat-fab", "", "color", "primary", "aria-label", "Criar um novo produto", 1, "create-button", 3, "click"], [1, "product-wrapper"], [1, "card-wrapper"], [3, "click", 4, "ngFor", "ngForOf"], [1, "button-wrapper"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "no-product", 4, "ngIf"], [3, "click"], [1, "image-content"], ["class", "no-image", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "info-content"], [1, "product-name"], [1, "product-price"], [1, "no-image"], [3, "src"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "no-product"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "notification-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProductComponent_Template_input_keyup_10_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_13_listener() { return ctx.onLogoff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_17_listener() { return ctx.onOpenForm(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductComponent_mat_card_22_Template, 10, 7, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductComponent_button_25_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductComponent_div_27_Template, 9, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx.searchText$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 6, ctx.products$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 8, ctx.hasMore$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 10, ctx.products$)) == null ? null : tmp_3_0.length) === 0);
    } }, directives: [ngx_notification_bar__WEBPACK_IMPORTED_MODULE_8__["NotificationBarComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]], styles: ["[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%] {\n  background-color: #fdedee;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  top: 0;\n  height: 80px;\n  background-color: #FFF;\n  box-shadow: 0 3px 2px -2px #dcdcdc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%] {\n  max-width: 1366px !important;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   div.search-bar-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   div.search-bar-wrapper[_ngcontent-%COMP%]   div.search-bar[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  display: flex;\n  border: 1px solid #fdedee;\n  border-radius: 5px;\n  padding: 10px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   div.search-bar-wrapper[_ngcontent-%COMP%]   div.search-bar[_ngcontent-%COMP%]:hover {\n  border-color: #ddd;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   div.search-bar-wrapper[_ngcontent-%COMP%]   div.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 300px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   button.create-button[_ngcontent-%COMP%] {\n  top: 40px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%] {\n  max-width: 1366px !important;\n  width: 100%;\n  margin: auto;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  padding: 2px 0;\n  display: grid;\n  gap: 32px;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  overflow-x: auto;\n  max-height: calc(100vh - 210px);\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100px;\n  cursor: pointer;\n  padding: 15px 25px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.image-content[_ngcontent-%COMP%]   div.no-image[_ngcontent-%COMP%] {\n  background-color: #ea1d2c;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #fff;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.image-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 3px solid #ea1d2c;\n  background-color: #fff;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.info-content[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.info-content[_ngcontent-%COMP%]   div.product-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  padding-bottom: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 250px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.info-content[_ngcontent-%COMP%]   div.product-price[_ngcontent-%COMP%] {\n  color: #717171;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.card-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.no-product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: calc(100vh - 360px);\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.no-product[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  font-size: 120px;\n  color: #ea1d2c;\n  margin-bottom: 25px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.no-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.button-wrapper[_ngcontent-%COMP%] {\n  max-width: 1366px !important;\n  width: 100%;\n  margin: auto;\n}\n[_nghost-%COMP%]   div.product-component[_ngcontent-%COMP%]   div.product-wrapper[_ngcontent-%COMP%]   div.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRko7QUFJSTtFQUNFLE1BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSE47QUFLTTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7RUFDRSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxZQUFBO0FBRlo7QUFNUTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUpWO0FBTVU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSlo7QUFNWTtFQUNFLGtCQUFBO0FBSmQ7QUFPWTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUxkO0FBVVE7RUFDRSxTQUFBO0FBUlY7QUFhSTtFQUNFLE9BQUE7QUFYTjtBQWFNO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLFNBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFaUjtBQWNRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWlY7QUFlWTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWJkO0FBZ0JZO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFkZDtBQWtCVTtFQUNFLGtCQUFBO0FBaEJaO0FBa0JZO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWpCZDtBQW9CWTtFQUNFLGNBQUE7QUFsQmQ7QUFzQlU7RUFDRSxzQkFBQTtBQXBCWjtBQXlCTTtFQUVFLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUFxQix1QkFBQTtFQUF5QiwyQkFBQTtBQXBCN0Y7QUFzQlE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBcEJWO0FBdUJRO0VBQ0UsWUFBQTtBQXJCVjtBQXlCTTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2QlI7QUF5QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXZCViIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICBkaXYucHJvZHVjdC1jb21wb25lbnQge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGVkZWU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7ICAgICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggI2RjZGNkYztcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgZGl2LmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzNjZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgZGl2LmxvZ28ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnNlYXJjaC1iYXItd3JhcHBlciB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgZGl2LnNlYXJjaC1iYXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZkZWRlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5jcmVhdGUtYnV0dG9uIHtcclxuICAgICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXYucHJvZHVjdC13cmFwcGVyIHtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgIGRpdi5jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTM2NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBnYXA6IDMycHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzYwcHgsIDFmcikpO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcclxuXHJcbiAgICAgICAgbWF0LWNhcmQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgICAgICAgICAgXHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICAgXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4OyAgICAgICAgICBcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBcclxuICAgICAgICAgIGRpdi5pbWFnZS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGl2Lm5vLWltYWdlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWExZDJjO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWExZDJjO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRpdi5pbmZvLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgXHJcbiAgICAgICAgICAgIGRpdi5wcm9kdWN0LW5hbWUgeyBcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGRpdi5wcm9kdWN0LXByaWNlIHsgXHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdi5uby1wcm9kdWN0IFxyXG4gICAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGhlaWdodDogY2FsYygxMDB2aCAtIDM2MHB4KTtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2VhMWQyYztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgIG1heC13aWR0aDogMTM2NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: src_app_shared_services_notifier_service__WEBPACK_IMPORTED_MODULE_7__["NotifierService"] }]; }, null); })();


/***/ }),

/***/ "4syv":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/notifier.service.ts ***!
  \*****************************************************/
/*! exports provided: NotifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony import */ var ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-notification-bar */ "ECRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class NotifierService {
    constructor(notifier) {
        this.notifier = notifier;
    }
    success(message) {
        this.notifier.create(this.buildNotification(message, ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].Success));
    }
    info(message) {
        this.notifier.create(this.buildNotification(message, ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].Info));
    }
    error(message) {
        const notification = this.buildNotification(message, ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].Error);
        notification.hideDelay = 4000;
        this.notifier.create(notification);
    }
    warning(message) {
        this.notifier.create(this.buildNotification(message, ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].Warning));
    }
    buildNotification(message, type) {
        return {
            message,
            type,
            hideDelay: 1000,
            autoHide: true,
            allowClose: false,
            hideOnHover: true
        };
    }
}
NotifierService.ɵfac = function NotifierService_Factory(t) { return new (t || NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__["NotificationBarService"])); };
NotifierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotifierService, factory: NotifierService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotifierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ngx_notification_bar__WEBPACK_IMPORTED_MODULE_0__["NotificationBarService"] }]; }, null); })();


/***/ }),

/***/ "5dmV":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "AI+7":
/*!********************************************!*\
  !*** ./src/app/core/guards/route.guard.ts ***!
  \********************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RouteGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const isLogged = localStorage.getItem('ifood.islogged') === 'true';
        if (!isLogged) {
            this.router.navigateByUrl('/');
        }
        return isLogged;
    }
}
RouteGuard.ɵfac = function RouteGuard_Factory(t) { return new (t || RouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RouteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteGuard, factory: RouteGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:44362/api/',
    loginUrl: 'https://dev.sitemercado.com.br/api/login'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G/xC":
/*!****************************************************************!*\
  !*** ./src/app/modules/product/form/product.form.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ "o9EK");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/product.service */ "aiL1");
/* harmony import */ var src_app_shared_services_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notifier.service */ "4syv");
/* harmony import */ var ngx_notification_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-notification-bar */ "ECRL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
















function ProductFormComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add_a_photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductFormComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.form.controls.image.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductFormComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFormComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deletar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductFormComponent {
    constructor(formBuilder, currencyPipe, service, notifier, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.currencyPipe = currencyPipe;
        this.service = service;
        this.notifier = notifier;
        this.dialogRef = dialogRef;
        this.data = data;
        this.$updateMode = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.form = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: null,
        });
    }
    ngOnInit() {
        if (this.data) {
            this.$updateMode.next(true);
            this.form.setValue({
                name: this.data.name,
                value: this.data.value,
                image: this.data.image
            });
        }
    }
    onClose() {
        this.dialogRef.close(false);
    }
    onSave() {
        if (this.$updateMode.value) {
            const updateCommand = {
                id: this.data.id,
                name: this.form.controls.name.value,
                value: this.form.controls.value.value,
                image: this.form.controls.image.value,
            };
            this.service
                .put(updateCommand)
                .subscribe(() => this.dialogRef.close({ success: true, message: 'Produto atualizado com sucesso' }), (err) => this.notifier.error(err.error));
        }
        else {
            const createCommand = {
                id: angular2_uuid__WEBPACK_IMPORTED_MODULE_3__["UUID"].UUID(),
                name: this.form.controls.name.value,
                value: this.form.controls.value.value,
                image: this.form.controls.image.value,
            };
            this.service
                .post(createCommand)
                .subscribe(() => this.dialogRef.close({ success: true, message: 'Produto criado com sucesso' }), (err) => this.notifier.error(err.error));
        }
    }
    onDelete() {
        this.service
            .delete(this.data.id)
            .subscribe(() => this.dialogRef.close({ success: true, message: 'Produto excluído com sucesso' }), (err) => this.notifier.error(err.error));
    }
    onSelectFile(files) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            this.form.controls.image.setValue(reader.result);
        };
    }
}
ProductFormComponent.ɵfac = function ProductFormComponent_Factory(t) { return new (t || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_notifier_service__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
ProductFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductFormComponent, selectors: [["app-product-form"]], decls: 28, vars: 10, consts: [[1, "product-form-component"], [1, "header-wrapper"], ["mat-button", "", "aria-label", "Sair do formul\u00E1rio", 3, "click"], [1, "content"], [1, "upload-image-wrapper"], [1, "upload-image", 3, "click"], [4, "ngIf"], [3, "src", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["file", ""], [3, "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Nome", "formControlName", "name", "maxlength", "256"], ["matInput", "", "type", "number", "placeholder", "Valor", "formControlName", "value"], [1, "button-wrapper"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], [3, "src"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function ProductFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "notification-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFormComponent_Template_button_click_7_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFormComponent_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductFormComponent_mat_icon_14_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductFormComponent_img_15_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductFormComponent_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.onSelectFile(_r2.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFormComponent_Template_button_click_24_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductFormComponent_button_26_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.$updateMode) ? "Atualizar produto" : "Cadastrar novo produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.form.controls.image.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.image.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 8, ctx.$updateMode));
    } }, directives: [ngx_notification_bar__WEBPACK_IMPORTED_MODULE_8__["NotificationBarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  top: 0;\n  height: 80px;\n  background-color: #FFF;\n  box-shadow: 0 3px 2px -2px #dcdcdc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%] {\n  max-width: 1366px !important;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-left: 20px;\n  flex: 1;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div.header-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 40px;\n  max-width: 1366px !important;\n  width: 100%;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.upload-image-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.upload-image-wrapper[_ngcontent-%COMP%]   div.upload-image[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #ea1d2c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.upload-image-wrapper[_ngcontent-%COMP%]   div.upload-image[_ngcontent-%COMP%]:hover {\n  background-color: #ff5f56;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.upload-image-wrapper[_ngcontent-%COMP%]   div.upload-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 70px;\n  height: 70px;\n  width: 70px;\n  color: #fff;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.upload-image-wrapper[_ngcontent-%COMP%]   div.upload-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 5px solid #ea1d2c;\n  background-color: #fff;\n  border-radius: 50%;\n  width: 180px;\n  height: 180px;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n[_nghost-%COMP%]   div.product-form-component[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 50px;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC5mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FBRko7QUFJSTtFQUNFLE1BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSE47QUFLTTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFIUjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUFIVjtBQU1RO0VBQ0UsWUFBQTtBQUpWO0FBU0k7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFSTjtBQVVNO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVRSO0FBV1E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFUVjtBQVdVO0VBQ0UseUJBQUE7QUFUWjtBQVlVO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVZaO0FBYVU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVhaO0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBZFI7QUFnQlE7RUFDRSxhQUFBO0FBZFY7QUFpQlE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtBQWI5QztBQWNVO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBWloiLCJmaWxlIjoicHJvZHVjdC5mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICBkaXYucHJvZHVjdC1mb3JtLWNvbXBvbmVudCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7ICAgICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggI2RjZGNkYztcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgZGl2LmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzNjZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmNvbnRlbnQge1xyXG5cclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEzNjZweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGRpdi51cGxvYWQtaW1hZ2Utd3JhcHBlciB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICBkaXYudXBsb2FkLWltYWdlIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWExZDJjO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZjU2O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZWExZDJjO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5idXR0b24td3JhcHBlcntcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-form',
                templateUrl: './product.form.component.html',
                styleUrls: ['./product.form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"] }, { type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: src_app_shared_services_notifier_service__WEBPACK_IMPORTED_MODULE_7__["NotifierService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/login/login.component */ "ZpOo");
/* harmony import */ var _modules_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/product/product.component */ "3+Lc");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material.module */ "5dmV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/product/form/product.form.component */ "G/xC");
/* harmony import */ var ngx_notification_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-notification-bar */ "ECRL");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt-BR'
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_notification_bar__WEBPACK_IMPORTED_MODULE_13__["NotificationBarModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _modules_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
        _modules_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_12__["ProductFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ngx_notification_bar__WEBPACK_IMPORTED_MODULE_13__["NotificationBarModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _modules_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                    _modules_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_12__["ProductFormComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    ngx_notification_bar__WEBPACK_IMPORTED_MODULE_13__["NotificationBarModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
                ],
                entryComponents: [
                    _modules_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_12__["ProductFormComponent"]
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                        useValue: 'pt-BR'
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZpOo":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/login.service */ "twzC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












class LoginComponent {
    constructor(loginService, router, route, formBuilder) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            user: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.$invalidMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.$loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        if (localStorage.getItem('ifood.islogged') === 'true') {
            this.redirectToProducts();
        }
    }
    onSubmit() {
        this.$loading.next(true);
        this.loginService
            .login(this.form.controls.user.value, this.form.controls.password.value)
            .subscribe((res) => {
            if (!res.success) {
                this.$invalidMessage.next(res.error);
            }
            else {
                localStorage.setItem('ifood.islogged', 'true');
                this.redirectToProducts();
            }
            this.$loading.next(false);
        }, () => this.$loading.next(false));
    }
    redirectToProducts() {
        this.router.navigate(['product'], {
            relativeTo: this.route
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 7, consts: [[1, "login-component"], [1, "left"], [1, "brand-images"], [1, "logo"], ["src", "assets/img/logo.svg", "alt", "iFood - Logo", 2, "height", "45px"], [1, "people-buying"], ["src", "assets/img/people-buying.svg", "alt", "iFood - People Buying"], [1, "right"], [1, "login-wrapper"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Usu\u00E1rio", "formControlName", "user"], ["matInput", "", "type", "password", "placeholder", "Senha", "formControlName", "password"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Falta pouco para entrar no iFood!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Informe o usu\u00E1rio e senha para entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 3, ctx.$invalidMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 5, ctx.$loading));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   div.brand-images[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 50px 120px;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   div.brand-images[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  flex: none;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   div.brand-images[_ngcontent-%COMP%]   div.people-buying[_ngcontent-%COMP%] {\n  flex: 1;\n  align-items: center;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   div.brand-images[_ngcontent-%COMP%]   div.people-buying[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   div.brand-images[_ngcontent-%COMP%]   div.people-buying[_ngcontent-%COMP%]::before {\n  content: \"\";\n  right: 0;\n  bottom: unset;\n  left: auto;\n  width: 80vw;\n  height: 80vw;\n  transform: translate(-35vw, -10%);\n  z-index: -1;\n  position: absolute;\n  background-color: #fdedee;\n  border-radius: 0 100% 100% 0;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 30px;\n}\n@media (min-width: 960px) {\n  [_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  [_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 0px;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 70px;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  line-height: 50px;\n  text-align: center;\n  padding: 0 30px;\n  margin-bottom: 30px;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 40px;\n  text-align: center;\n  color: #717171;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  text-align: center;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   div.login-component[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  height: 50px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjtBQUdJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBSVE7RUFFRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIVjtBQUtVO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFIWjtBQU1VO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFKWjtBQU1ZO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpkO0FBUVU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFOWjtBQVVRO0VBekNGO0lBMkNJLGFBQUE7RUFSUjtBQUNGO0FBV007RUFFRSxzQkFBQTtBQVZSO0FBYVE7RUFMRjtJQU9JLG1CQUFBO0VBWFI7QUFDRjtBQWFRO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFYVjtBQWNRO0VBZkY7SUFpQkksdUJBQUE7RUFaUjtFQWFRO0lBQ0UsYUFBQTtFQVhWO0FBQ0Y7QUFjUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBWlY7QUFjVTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFiWjtBQWVZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFiZDtBQWdCWTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFkZDtBQWlCWTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZmQ7QUFrQlk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBaEJkO0FBa0JjO0VBQ0UsV0FBQTtBQWhCaEI7QUFtQmM7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFqQmhCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIFxyXG4gIGRpdi5sb2dpbi1jb21wb25lbnQgeyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgJi5sZWZ0IHtcclxuICAgICAgICBkaXYuYnJhbmQtaW1hZ2VzIHtcclxuXHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEyMHB4O1xyXG5cclxuICAgICAgICAgIGRpdi5sb2dvIHtcclxuICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXYucGVvcGxlLWJ1eWluZyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGl2LnBlb3BsZS1idXlpbmc6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IHVuc2V0O1xyXG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHZ3O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzV2dywgLTEwJSk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGVkZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTAwJSAxMDAlIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo5NjBweClcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnJpZ2h0IHtcclxuXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6OTYwcHgpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICBkaXYubG9nbyB7XHJcbiAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk2MHB4KVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGRpdi5sb2dvIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBtYXQtY2FyZCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgICAgZGl2LmxvZ2luLXdyYXBwZXIge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luOiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "aiL1":
/*!**************************************************!*\
  !*** ./src/app/core/services/product.service.ts ***!
  \**************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ProductService {
    constructor(http) {
        this.http = http;
        this.resource = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}product`;
        this.get = (textSearch, page) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('textSearch', textSearch)
                .set('page', page.toString());
            return this.http.get(this.resource, { params });
        };
        this.post = (command) => this.http.post(this.resource, command);
        this.put = (command) => this.http.put(this.resource, command);
        this.delete = (id) => this.http.delete(`${this.resource}/${id}`);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "twzC":
/*!************************************************!*\
  !*** ./src/app/core/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class LoginService {
    constructor(http) {
        this.http = http;
        this.login = (username, password) => {
            const basicAuth = `${username}:${password}`;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers = headers.append('Authorization', 'Basic ' + btoa(basicAuth));
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].loginUrl, null, { headers });
        };
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guards_route_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/route.guard */ "AI+7");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/login/login.component */ "ZpOo");
/* harmony import */ var _modules_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/product/product.component */ "3+Lc");







const routes = [
    { path: '', component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], pathMatch: 'full' },
    { path: 'product', component: _modules_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], canActivate: [_core_guards_route_guard__WEBPACK_IMPORTED_MODULE_2__["RouteGuard"]] },
    { path: '**', component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map