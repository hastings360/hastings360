webpackJsonp([1,4],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(682),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/about.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngAfterViewInit = function () {
        var display = '0';
        //Adds and sorts values to the display variable
        function addToDisplay(x) {
            if (display === '0') {
                display = x;
            }
            else if ((display + x).match(/[*\/\+-][*\/\+-]/)) {
                return;
            }
            else {
                display = display + x;
            }
            ;
            var y = document.getElementById('calc-window');
            y.innerHTML = display;
        }
        ;
        //Computes variables in display using the 'math' package
        function equalCompute() {
            if ((display.slice(-1)).match(/[*\/\+-]/)) {
                display = display.slice(0, -1);
            }
            ;
            var x = math.eval(display);
            document.getElementById('calc-window').innerHTML = math.round(x, 2); //*displays result
            x = math.round(x, 2);
            display = x;
        }
        ;
        //Clears the window and sets the display variable to 0
        function clearCompute() {
            document.getElementById('calc-window').innerHTML = '0';
            display = '0';
        }
        ;
        //Button click handlers
        document.getElementById('one').onclick = function () { addToDisplay('1'); };
        document.getElementById('two').onclick = function () { addToDisplay('2'); };
        document.getElementById('three').onclick = function () { addToDisplay('3'); };
        document.getElementById('four').onclick = function () { addToDisplay('4'); };
        document.getElementById('five').onclick = function () { addToDisplay('5'); };
        document.getElementById('six').onclick = function () { addToDisplay('6'); };
        document.getElementById('seven').onclick = function () { addToDisplay('7'); };
        document.getElementById('eight').onclick = function () { addToDisplay('8'); };
        document.getElementById('nine').onclick = function () { addToDisplay('9'); };
        document.getElementById('zero').onclick = function () { addToDisplay('0'); };
        document.getElementById('decimal').onclick = function () { addToDisplay('.'); };
        document.getElementById('clear').onclick = function () { clearCompute(); };
        document.getElementById('multiplication').onclick = function () { addToDisplay('*'); };
        document.getElementById('divide').onclick = function () { addToDisplay('/'); };
        document.getElementById('plus').onclick = function () { addToDisplay('+'); };
        document.getElementById('minus').onclick = function () { addToDisplay('-'); };
        document.getElementById('equals').onclick = function () { equalCompute(); };
        document.getElementById('calc-window').innerHTML = display; //Initially sets window to display variable '0'
    };
    CalculatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-calculator',
            template: __webpack_require__(684),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/calculator.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChecklistComponent = (function () {
    function ChecklistComponent() {
    }
    ChecklistComponent.prototype.ngAfterViewInit = function () {
        var main = function () {
            /*To clear '.input' upon reload*/
            $('.input').val('');
            /*To disable '.btn' upon load/reload*/
            $('.btn').addClass('disabled');
            $('.btn').click(function () {
                var input = $('.input').val();
                if (input.length > 0 && input.length < 41) {
                    $('<li>').text(input).appendTo('.checklist-items');
                    $('.input').val('');
                    $('.limit').text('40');
                    $('.btn').addClass('disabled');
                }
                else {
                    return;
                }
            });
            $('.input').keyup(function () {
                var limitUse = $(this).val().length;
                var limitCount = 40 - limitUse;
                $('.limit').text(limitCount);
                if (limitCount == 40 || limitCount < 0) {
                    $('.btn').addClass('disabled');
                }
                else {
                    $('.btn').removeClass('disabled');
                }
                ;
            });
            $('ul').on('dblclick', 'li', function () {
                $(this).remove();
            });
        };
        $(document).ready(main);
    };
    ChecklistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-checklist',
            template: __webpack_require__(685),
            styles: [__webpack_require__(672)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ChecklistComponent);
    return ChecklistComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/checklist.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.contactForm = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/\w+@\w+/)])],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/[[\D]?\d[\D]?/)])],
            'message': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10)])],
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (x) {
        var formFilled = x;
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(686),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/contact.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(690),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/home.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__(692),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/portfolio.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelaxWorkspaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelaxWorkspaceComponent = (function () {
    function RelaxWorkspaceComponent() {
    }
    RelaxWorkspaceComponent.prototype.ngOnInit = function () {
    };
    RelaxWorkspaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-relax-workspace',
            template: __webpack_require__(693),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], RelaxWorkspaceComponent);
    return RelaxWorkspaceComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/relax-workspace.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist_checklist_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculator_calculator_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__relax_workspace_relax_workspace_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], data: { title: 'Larry Hastings' } },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */], data: { title: 'Contact' } },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */], data: { title: 'Portfolio' } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */], data: { title: 'About' } },
    { path: 'relax-workspace', component: __WEBPACK_IMPORTED_MODULE_7__relax_workspace_relax_workspace_component__["a" /* RelaxWorkspaceComponent */], data: { title: 'Relax and Work' } },
    { path: 'calculator', component: __WEBPACK_IMPORTED_MODULE_3__calculator_calculator_component__["a" /* CalculatorComponent */] },
    { path: 'checklist', component: __WEBPACK_IMPORTED_MODULE_2__checklist_checklist_component__["a" /* ChecklistComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/app-routing.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(683),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__portfolio_portfolio_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_small_header_small_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__relax_workspace_relax_workspace_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calculator_calculator_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__checklist_checklist_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__music_music_component__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_small_header_small_component__["a" /* HeaderSmallComponent */],
                __WEBPACK_IMPORTED_MODULE_13__relax_workspace_relax_workspace_component__["a" /* RelaxWorkspaceComponent */],
                __WEBPACK_IMPORTED_MODULE_14__calculator_calculator_component__["a" /* CalculatorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__checklist_checklist_component__["a" /* ChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__music_music_component__["a" /* MusicComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(687),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/footer.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSmallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderSmallComponent = (function () {
    function HeaderSmallComponent() {
    }
    HeaderSmallComponent.prototype.ngAfterViewInit = function () {
        $('#menu-button').click(function () {
            $('#nav-list').toggleClass('hide');
            $('#nav-pop').toggleClass('nav-pop-out');
        });
    };
    HeaderSmallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-header-small',
            template: __webpack_require__(688),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderSmallComponent);
    return HeaderSmallComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/header-small.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(689),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/header.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngAfterViewInit = function () {
        $('.music').click(function () {
            $('#pop-iframe').toggleClass('hide');
        });
    };
    MusicComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-music',
            template: __webpack_require__(691),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], MusicComponent);
    return MusicComponent;
}());
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/music.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/hastingsl/Documents/Web_Sites/hastings360/angular2Dev/my-site/src/environment.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*\"About page\" styling*/\n#about-pic{\n\tbackground: #f9f2ec url(" + __webpack_require__(716) + ") no-repeat;\n\tbackground-position: center left;\n\theight: 960px;\n\tpadding-top: 80px;\n}\n#about-info h1{\n\tfont-weight: bold;\n\ttext-align: center;\n\tcolor: #99badd;\n\ttext-shadow: 1px 1px 0 white,\n\t\t\t\t-1px -1px 0 white,\n\t\t\t\t1px -1px 0 white,\n\t\t\t\t-1px 1px 0 white,\n\t\t\t\t0px 1px 0 white,\n\t\t\t\t1px 0px 0 white,\n\t\t\t\t0px -1px 0 white,\n\t\t\t\t-1px 0px 0 white;\n}\n#about-info p{\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n#about-info p:first-letter{\n\tfont-size: 30px;\n}\n@media screen and (max-width: 991px){\n\t#about-info{\n\t\tbackground-color: rgb(60, 60, 60);\n    \tbackground: rgba(60, 60, 60, 0.7);\n\t\tborder-radius: 50px 50px;\n\t}\n\t#about-info p{\n\t\tcolor: white;\n\t}\n}\n@media screen and (max-width: 1103px){\n\t#about-info p{\n\t\tfont-size: 16px;\n\t}\n}\n@media screen and (max-width: 416px){\n\t#about-info p{\n\t\tfont-size: 15px;\n\t}\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".container-fluid{\n    padding: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*\"Calculator page\" styling*/\n#calc{\n\tborder: solid;\n\tborder-color: #99badd;\n\theight: 293px;\n\twidth: 268px;\n\tborder-radius: 10px;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n\n#calc-window{\n\tborder-radius: 5px 5px 0 0;\n\tmargin: 5px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n\tcolor: white;\n\theight: 50px;\n\tfont-size: 30px;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\ttext-align: right;\n}\n\n#calc-operators{\n\tfloat: right;\n\twidth: 30%;\n\theight: 230px;\n\tborder: solid;\n\tborder-width: 1px;\n\tborder-color: #99badd;\n\tborder-radius: 0 0 10px 0;\n\ttext-align: center;\n}\n\n.operator-button{\n\tmargin: 12%;\n\tborder: solid;\n\tborder-color: white;\n\twidth: 40px;\n\theight: 24px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.operator-button:active{\n\tbox-shadow: 0 0 0 2px #99badd inset;\n}\n.operator-button p{\n\tmargin: auto;\n\tpadding-top: 2%;\n\tpadding-bottom: 2%;\n\tcolor: white;\n}\n.operator-button p:active{\n\tcolor: red;\n}\n#calc-numbers{\n\twidth: 70%;\n\ttext-align: center;\n\tcolor: white;\n}\n\n.number-button{\n\tmargin: 5%;\n\tborder: solid;\n\tborder-color: white;\n\twidth: 38px;\n\theight: 38px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.number-button:active{\n\tbox-shadow: 0 0 0 2px #99badd inset;\n}\n\n.number-button p{\n\tmargin: auto;\n\tpadding-top: 35%;\n\tpadding-bottom: 35%;\n}\n.number-button p:hover{\n\tcolor: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".checklist-container{\n\twidth: 100%;\n\tmargin: 20px auto auto auto;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.checklist{\n\tmargin: 0;\n\tpadding: 10px;\n\twidth: 100%;\n\theight: auto;\n\ttext-align: center;\n\tborder-style: solid;\n\tborder-radius: 15px;\n\tbox-shadow: -5px -5px 5px #99badd;\n}\n\n.instruction{\n\ttext-align: left;\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n\tpadding: 0;\n\tcolor: #99badd;\n}\n\n.checklist-items{\n\tmargin-top: 40px;\n\ttext-align: left;\n\twidth: 90%;\n\tlist-style-type: none;\n\tpadding-left: 0;\n\tfont-size: 20px;\n\tcolor: white;\n\tcursor: pointer;\n}\n.checklist-items li:before{\n\tmargin-right: 20px;\n\tcontent: url(" + __webpack_require__(711) + ");\n\theight: 10px;\n}\n\n.limit-text{\n\tcolor: #99badd;\n\tfont-size: 11px;\n}\n\n.limit{\n\tcolor: white;\n}\n\n.input{\n\twidth: 80%;\n}\n.add{\n\twidth: 17%;\n\theight: 27px;\n\tpadding-top: 2px; \n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*Need a background pic for page and possibly one for message*/\n#contact-message{\n    font-size: 25px;\n    border: thin solid black;\n    border-radius: 40px;\n    margin-top: 100px;\n    margin-bottom: 20px;\n    padding: 20px;\n    box-shadow: 6px 6px 5px #99badd;\n}\n@media screen and (max-width: 767px){\n    #contact-message{\n        font-size: 16px;\n    }\n}\n#contact-bg{\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 63%, 92% 70%, 70% 70%, 82% 91%, 57% 70%, 8% 70%, 0 63%);\n            clip-path: polygon(0 0, 100% 0, 100% 63%, 92% 70%, 70% 70%, 82% 91%, 57% 70%, 8% 70%, 0 63%);\n    border-radius: 10px 10px;\n    background-image: url(" + __webpack_require__(720) + ");\n    background-position: top;\n    background-color: #99badd;\n    position: absolute;\n    left: 50%;\n    width: 50%;\n    margin-left: -25%;\n    height: 650px;\n    z-index: -1;\n}\n@media screen and (max-width: 768px){\n    #contact-bg{\n        left: 50%;\n        width: 90%;\n        margin-left: -45%;\n    }\n}\n#contact-form{\n    margin-bottom: 250px;\n    margin-top: 10px;\n}\n#contact-submit{\n    background: none;\n    border: 2px #99badd solid;\n    position: absolute;\n    width: 80px;\n    left: 50%;\n    margin-left: -40px;\n    outline: none;\n}\n#contact-submit:hover{\n    border-color: white;\n}\n#contact-submit:active{\n    box-shadow: 0 0 2px 4px #99badd;\n}\ntextarea{\n    resize: none;\n}\n.error-message{\n    color: maroon;\n    font-size: 14px;\n}\n.error{\n    border-color: maroon !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*#push{\n\tclear: both;\n\theight: 100px;\n}*/\n\n.footer-top-line{\n\tborder-top-style: groove;\n\tmargin-right: 20%;\n\tmargin-left: 20%;\n\tmargin-bottom: 10px;\n}\n\nfooter{\n\tclear: both;\n\tfont-size: 25px;\n\ttext-align: center;\n}\n\nfooter p{\n\tmargin-top: 10px;\n\tfont-size: 12px;\n\tcolor: black;\n}\n/* main navigation links*/\n.main-nav a{\n\tdisplay: inline-block;\n\ttext-align: center;\n\twidth: 125px;\n\tfont-size: 25px;\n\tcolor: #99badd;\n}\n.main-nav a:hover{\n\ttext-decoration: none;\n\tcolor: red;\n}\n@media only screen and (max-width: 650px){\n\t.main-nav a{\n\t\twidth: 85px;\n\t\tfont-size: 18px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "header{\n    position: absolute;\n    z-index: 1;\n}\nnav{\n    margin: 10px 0 0 30px;\n    padding: 10px 5px 0 5px;\n}\n.nav-pop-out{\n    border: thin solid black;\n    border-radius: 20px;\n}\nbutton:active{\n    background-color: white;\n}\n#menu-button{\n    width: 60px;\n    height: 60px;\n    border-radius: 100%;\n    background-color: #99badd;\n    outline: none;\n    padding: 3px;\n    margin: 0 15px 0 15px;\n    z-index: 2;\n}\n#menu-button:active{\n    background-color: white;\n}\n#inner-button{\n    width: 50px;\n    height: 50px;\n    border-radius: 100%;\n    border-style: solid #99badd;\n    background-color: white;\n    padding-top: 15px;\n    text-align: center;\n}\n#nav-list{\n    list-style: none;\n    text-align: center;\n    padding: 0;\n    margin-top: 5px;\n}\n#nav-list a{\n    color: #99badd;\n    font-size: 20px;\n    text-decoration: none;\n}\n#nav-list a:hover{\n    color: red;\n}\n#nav-list button{\n    width: 90px;\n    margin-bottom: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*contains header, name, and contact-resume*/\n.strap{\n\tbackground-image: url(" + __webpack_require__(721) + ");\n\tbackground-position: bottom;\n\tbackground-color: gray;\n\tbackground-repeat: no-repeat;\n\tpadding-top: 10px;\n\tpadding-bottom: 120px;\n\tbackground-size: cover;\n\ttext-align: center;\n\tcolor: #99badd;\n\tborder-radius: 0 !important;\n}\n.strap a{\n\tcolor: #99badd;\n}\n.strap a:hover{\n\ttext-decoration: none;\n\tcolor: red;\n}\n\n/* main navigation links*/\n.main-nav a{\n\tdisplay: inline-block;\n\ttext-align: center;\n\twidth: 125px;\n\tfont-size: 25px;\n\tcolor: #99badd;\n}\n\n/*description, name, etc..*/\n#my-info{\n\ttext-align: center;\n\tmargin-top: 60px;\n}\n\n#my-job{\n\tfont-size: 25px;\n}\n\n#my-name{\n\tfont-size: 60px;\n}\n\n/*contact*/\n#my-contact-link{\n\tfont-size: 25px;\n\tborder: solid;\n\tborder-color: #99badd;\n\tborder-radius: 15px 50px 15px 50px;\n\tmargin-right: 40%;\n\tmargin-left: 40%;\n}\n@media only screen and (max-width: 650px){\n\t.main-nav a{\n\t\twidth: 85px;\n\t\tfont-size: 18px;\n\t}\n\t#my-job{\n\t\tfont-size: 20px;\n\t}\n\t#my-name{\n\t\tfont-size: 50px;\n\t}\n\t#my-contact-link{\n\t\tmargin: 0 30% 0 30%;\n\t}\n\t.strap{\n\t\theight: 280px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*Blog styling*/\naside{\n    background-color: #99badd;\n    text-align: center;\n    border-radius: 25px;\n    padding-bottom: 13px;\n    color: white;\n}\niframe{\n    width: 97%;\n    height: 500px;\n}\n.floating-words{\n    text-align: center;\n}\n.floating-words button{\n    display: inline-block;\n    border: 1px black solid;\n    border-radius: 5px 5px 5px 5px;\n    box-shadow: 0px 0px 10px #aaff6d;\n    margin: 10px 8px 8px 10px;\n    padding: 4px;\n    background: none;\n    font-size: 24px;\n    outline: none;\n}\n.floating-words button:active{\n    box-shadow: 0px 0px 20px #aaff6d inset;\n}\n@media only screen and (max-width: 991px){\n    .floating-words button{\n        font-size: 20px;\n    }\n}\n@media only screen and (max-width: 650px){\n    .floating-words button{\n        font-size: 14px;\n        margin: 5px 3px 5px 3px;\n        padding: 2px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".music{\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    margin: 10px 10px 0 0;\n    cursor: pointer;\n}\n.music p{\n    text-align: right;\n    color: white;\n    font-size: 20px;\n}\n.music p:hover{\n    color: red;\n}\n#pop-iframe{\n    width: 688px;\n    height: 500px;\n    resize: both;\n    overflow: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".items{\n    padding-top: 100px;\n}\n.item{\n    height: 200px;\n    text-align: center;\n    margin-bottom: 50px;\n}\n.item a{\n    height: 100%;\n    width: 100%;\n    display: block;\n    border: thin #99badd solid;\n    padding-top: 70px;\n    opacity: 1;\n}\n.link-words{\n    color: black;\n    background: transparent;\n    padding: 1px;\n    border: thin gray solid;\n    outline: none;\n    font-size: 18px;\n}\n.link-words:hover{\n    color: white;\n    border-color: lightgray;\n}\n.link-words:active{\n    box-shadow: 0 0 0 1px white inset;\n    outline: none;\n}\n@media screen and (max-width: 575px){\n    .link-words{\n        font-size: 12px;\n    }\n}\n.circle-btn{\n    border-radius: 100%;\n    padding: 25px 2px 25px 2px;\n}\n.square-btn{\n    border-radius: 0;\n    padding: 25px 2px 25px 2px;\n}\n.semi-btn{\n    border-radius: 0 0 100% 100%;\n    padding: 25px 2px 25px 2px;\n}\n.circle{\n    border-radius: 100%;\n}\n.semi{\n    border-radius: 0 0 100% 100%;\n}\n#one{\n    background-image: url(" + __webpack_require__(713) + ");\n}\n#two{\n    background-image: url(" + __webpack_require__(710) + ");\n}\n#three{\n    background-image: url(" + __webpack_require__(712) + ");\n}\n#four{\n    background-image: url(" + __webpack_require__(715) + ");\n}\n#five{\n    background-image: url(" + __webpack_require__(714) + ");\n}\n#six{\n    background-image: url(" + __webpack_require__(717) + ");\n}\n#seven{\n    background-image: url(" + __webpack_require__(719) + ");\n    background-repeat: no-repeat;\n}\n#eight{\n    background-image: url(" + __webpack_require__(722) + ");\n}\n#nine{\n    background-image: url(" + __webpack_require__(718) + ");\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".background{\n    background: #ffffe6 url(" + __webpack_require__(723) + ") no-repeat center;\n    background-size: cover;\n    height: 100vh;\n    width: 100%;\n    position: relative;\n}\n.gadget-container{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding-bottom: 20px;\n}\n.left-gadget{\n    max-height: 300px;\n    overflow-y: scroll;\n    margin-bottom: 20px;\n}\n::-webkit-scrollbar{\n    width: 0px;\n}\n@media screen and (max-width: 480px){\n    .gadget-container{\n        margin-top: 100px;\n        bottom: auto;\n    }\n    .background{\n        height: 150vh;\n    }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<title>About</title>\n<app-header-small></app-header-small>\n\n<div class='clearfix about-container'>\n\t<div id=\"about-pic\" class='col-md-6 col-sm-12'>\n\t\t<div class='col-md-12 col-md-offset-12 col-xs-12'>\n\t\t\t<section id=\"about-info\" class=\"col-md-12 col-xs-12\">\n\t\t\t\t<h1>About Me</h1>\n\t\t\t\t<p>My name is Larry.  I have worked in numerous technology related jobs thoughout my\n\t\t\t\t\tlife.  Through various experience and education, I have gained a good understanding\n\t\t\t\t\tof how websites function including the underlying infrastructure.  I will be \n\t\t\t\t\tcompleting my masters at East Carolina University in May 2016, majoring in network technology.  \n\t\t\t\t\tWhile doing so, I find myself working for the local school system here in Wilmington, NC\n\t\t\t\t\tproviding end-user support and overseeing the organization's webiste.</p>\n\t\t\t\t<p>In the meantime, I am really trying to focus on the LAMP stack, which involves me setting up\n\t\t\t\t\ta Linux machine in the cloud to host the apache server that this website runs atop. \n\t\t\t\t\tI feel this gives me full exposure to the underpinnings of what makes a website tick by\n\t\t\t\t\tbuilding it from the ground up, while also letting me work with MySQL and a scripting \n\t\t\t\t\tlanguage.</p>  \n\t\t\t\t<p>If you found this page in search of a web service, please know that I will help you in\n\t\t\t\t\tany way I can, but if I feel your needs are out of the scope of my abilities, or if you have \n\t\t\t\t\ta strict deadline that cannot be met, I will let you know.</p>\n\t\t\t\t<p>Thanks for visiting!</p>\n\t\t\t</section>\n\t\t</div>\n\t</div>\n</div>\n\n\t\t\t\n\t\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<!--Routed Views-->\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n<div class=\"container-fluid\">\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<section id='calc'>\n\t\t\t\n\t\t\t<div id='calc-window'></div>\n\t\t\t\n\t\t\t<div><!-- Calculator button container -->\n\t\t\t\t<div id='calc-operators'>\n\t\t\t\t\t<div id='multiplication' class='operator-button'><p>X</p></div>\n\t\t\t\t\t<div id='divide' class='operator-button'><p>/</p></div>\n\t\t\t\t\t<div id='plus' class='operator-button'><p>+</p></div>\n\t\t\t\t\t<div id='minus' class='operator-button'><p>-</p></div>\n\t\t\t\t\t<div id='equals' class='operator-button'><p>=</p></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div id='calc-numbers'>\n\t\t\t\t\t<div id='one' class='number-button'><p>1</p></div>\n\t\t\t\t\t<div id='two' class='number-button'><p>2</p></div>\n\t\t\t\t\t<div id='three' class='number-button'><p>3</p></div>\n\t\t\t\t\t<div id='four' class='number-button'><p>4</p></div>\n\t\t\t\t\t<div id='five' class='number-button'><p>5</p></div>\n\t\t\t\t\t<div id='six' class='number-button'><p>6</p></div>\n\t\t\t\t\t<div id='seven' class='number-button'><p>7</p></div>\n\t\t\t\t\t<div id='eight' class='number-button'><p>8</p></div>\n\t\t\t\t\t<div id='nine' class='number-button'><p>9</p></div>\n\t\t\t\t\t<div id='clear' class='number-button'><p>C</p></div>\n\t\t\t\t\t<div id='zero' class='number-button'><p>0</p></div>\n\t\t\t\t\t<div id='decimal' class='number-button'><p>.</p></div>\n\t\t\t\t</div>\n\t\t\t</div>\n</section><!-- end mid-container -->\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<section class='checklist-container'>\n\t<form class='checklist'>\n\t\t\n\t\t<div>\n\t\t<p class='limit-text'>Character Count Limit: <span class='limit'>40</span></p>\n\t\t<input class='input' placeholder=\"Add checklist items here!\" cols='100'>\n\t\t<input class='btn btn-primary add' type=\"button\" value=\"Add\">\n\t\t</div>\n\t\t\n\t\t<p class='instruction'>Double-Click to Clear Item</p>\n\t\t\n\t\t<ul class='checklist-items'>\n\t\t</ul>\n\t\t\n\t</form>\n\t\n</section>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<title>Contact</title>\n<app-header-small></app-header-small>\n  <section class=\"clearfix\">\n    <div id=\"contact-message\" class=\"col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n      <p>Hello, thank you for visiting my site.  Please use the contact form below to get in touch with me.  Be assured, if you are legitimate in your inquiry, I will promptly make contact with you using the supplied email.  Have a wonderful day!</p>\n    </div>\n  </section>\n  <section class=\"clearfix\">\n    <div id=\"contact-bg\"></div>\n    <form id=\"contact-form\" class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\" \n          [formGroup]=\"contactForm\" \n          (ngSubmit)=\"onSubmit(contactForm.value)\"\n          \n          >\n        <div class=\"form-group\">    \n          <label for=\"name-input\">Name:</label>\n          <input type=\"text\" class=\"form-control\" [formControl]=\"contactForm.controls['name']\" [class.error]=\"!contactForm.controls['name'].valid\">\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['name'].valid\">Please type your full name</div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email-input\">Email:</label>\n          <input type=\"email\" class=\"form-control\" [formControl]=\"contactForm.controls['email']\" [class.error]=\"!contactForm.controls['email'].valid\">\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['email'].valid\">Please provide a valid email (email@something.com)</div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone-input\">Phone:</label>\n          <input type=\"tel\" class=\"form-control\" [formControl]=\"contactForm.controls['phone']\" [class.error]=\"!contactForm.controls['phone'].valid\">\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['phone'].valid\">Please provide a valid phone number (111-222-3333)\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"message\">Message:</label>\n          <textarea type=\"text\" class=\"form-control\" rows=\"2\" cols=\"50\" [formControl]=\"contactForm.controls['message']\" [class.error]=\"!contactForm.controls['message'].valid\"></textarea>\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['message'].valid\">Tell me what you need</div>\n        </div>\n\n        <button type=\"submit\" id=\"contact-submit\" class=\"btn\" *ngIf=\"contactForm.valid\"><strong>Send</strong></button>\n    </form>\n    \n  </section>\n\n\n\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\n<footer>\n    <hr class=\"footer-top-line\">\n    <nav class='main-nav'>\n        <a href='/home'>Home</a>\n        <a href='/about'>About</a>\n        <a href='/portfolio'>Portfolio</a>\n        <a href='../assets/docs/IT_Resume(NHCS).pdf' target='_blank'>Resume</a>\t\n    </nav>\n    <p>Larry Hastings</p>\n</footer>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <header>\n    <nav id='nav-pop' class=''>\n      <button id='menu-button'><div id='inner-button'>Menu</div></button>\n      <ul id='nav-list' class='hide'>\n        <li><button><a href='/home'>Home</a></button></li>\n        <li><button><a href='/about'>About</a></button></li>\n        <li><button><a href='/portfolio'>Portfolio</a></button></li>\n        <li><button><a href='../assets/docs/IT_Resume(NHCS).pdf'>Resume</a></button></li>\t\n        <li><button><a href='/contact'>Contact</a></button></li>\n      </ul>\n    </nav>\n  </header>\n</div>\n\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<!-- header, contains nav bar and contact info -->\n<header class='jumbotron strap'>\n\t<nav class='main-nav'>\n\t\t<a href='/home'>Home</a>\n\t\t<a href='/about'>About</a>\n\t\t<a href='/portfolio'>Portfolio</a>\n\t\t<a href='../assets/docs/IT_Resume(NHCS).pdf' target='_blank'>Resume</a>\t\n\t</nav>\n\t<!-- contact info -->\n\t<div id='my-info'>\n\t\t<p id='my-job'>Website Design and Development</p>\n\t\t<p id='my-name'>Larry Hastings</p>\n\t\t<nav id='my-contact-link'>\n\t\t\t<a href='/contact'>Contact</a>\n\t\t</nav>\n\t</div>\n</header>\n\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<title>Larry Hastings</title>\n<app-header></app-header>\n\t<section class=\"left-home col-md-8 col-md-offset-0 col-xs-12\">\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button>Performance Optimaization</button><button>User Interaction</button><button>Browser Compatability</button><button>Mobile Friendly</button>\n\t\t</div>\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button>User Interface</button><button>Web Governance</button><button>Analytics</button>\n\t\t</div>\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button>SEO</button><button>Database</button>\n\t\t</div>\n\t\t<div class=\"clearfix\">\n\t\t\t<div align=\"center\" id=\"hand\"><img src=\"../../assets/imgs/hand.jpg\" alt=\"hand holding web ideas\"></div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12\"><!-- side content on right side -->\t\n\t\t<aside  class=\"col-md-12\">\n\t\t\t<h1>Blog</h1>\n\t\t\t<iframe src=\"https://hastingslweb2.wordpress.com/\"></iframe>\n\t\t</aside>\n\t</section> <!-- end home-aside -->\n\n\n\t\t\t\t\t<!--<section id=\"home-left-container\" class=\"col-md-8  col-xs-12\">\n\t\t\t\t\t\t<div class=\"col-md-4  col-xs-12\">\t\t\n\t\t\t\t\t\t\t<h1>Web Design</h1>\n\t\t\t\t\t\t\t<p>The visual layout and style of your website is important.  There are many\n\t\t\t\t\t\t\t\taspects that must be thought about during the planning phase such as branding,\n\t\t\t\t\t\t\t\tstrategy, and appealing content, but a website also needs to serve as a business\n\t\t\t\t\t\t\t\tfunction because it is ultimately where potential customers, partners, employees, \n\t\t\t\t\t\t\t\tor investors get their initial impression.  That impression may either keep them \n\t\t\t\t\t\t\t\tcoming back or turn them away for good.  I believe a website should be simple and \n\t\t\t\t\t\t\t\tpleasing to look at while serving its purpose with a layout that makes it easy for\n\t\t\t\t\t\t\t\tthe end-user to find necessary information, interact with business resources, and, \n\t\t\t\t\t\t\t\tultimately, promote the interests of the owning organization.</p>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div> \n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-md-4  col-xs-12\">\n\t\t\t\t\t\t\t<h1>Web Deployment</h1>\n\t\t\t\t\t\t\t<p>Where or how will you host your website?  There are many options, but it comes \n\t\t\t\t\t\t\t\tdown your needs and requirements.  I can advise and provide options for\n\t\t\t\t\t\t\t\tyour unique situation.  Below are some general options for website \n\t\t\t\t\t\t\t\tdeployments, but there are many different and detailed solutions \n\t\t\t\t\t\t\t\tfrom different vendors including various operating systems and hardware \n\t\t\t\t\t\t\t\tto host your website.</p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Managed In-House Server</li>\n\t\t\t\t\t\t\t\t<li>Managed Cloud Server</li>\n\t\t\t\t\t\t\t\t<li>Non-managed Cloud Provider</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t<div class=\"col-md-4  col-xs-12\">\n\t\t\t\t\t\t\t<h1>Web Optimization</h1>\n\t\t\t\t\t\t\t<p>Using good practices and anlytics to increase traffic to your website is the \n\t\t\t\t\t\t\t\tbest way to spread your message and introduce new users to your products.  \n\t\t\t\t\t\t\t\tAnalytics are important becuase one can view statistical reports, analyze \n\t\t\t\t\t\t\t\tactivity, and find mistakes, which ultimately lead to product enhancements.  \n\t\t\t\t\t\t\t\tBelow are some common technical terms used in website optimization.</p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Search Engine Optimization (SEO)</li>\n\t\t\t\t\t\t\t\t<li>User Experience (UX)</li>\n\t\t\t\t\t\t\t\t<li>User Interface (UI)</li>\n\t\t\t\t\t\t\t\t<li>Web Analytics</li>\n\t\t\t\t\t\t\t\t<li>Web Governance</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t-->\n\n\n\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class='music'><p>pandora</p><iframe id='pop-iframe' class='hide' src='https://www.pandora.com'></iframe></div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<title>Portfolio</title>\n<app-header-small></app-header-small>\n<section class='clearfix'>\n  <div class='items col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"one\" class=\"circle\" href='/relax-workspace'><button type=\"button\" class='circle-btn link-words btn'>Relaxing Workspace</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"two\" href=''><button type=\"button\" class='square-btn link-words btn'>Test Test</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"three\" class=\"semi\" href=''><button type=\"button\" class='semi-btn link-words btn'>Test Test Test</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"four\" class=\"semi\" href=''><button type=\"button\" class='semi-btn link-words btn'>A</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"five\" class=\"circle\" href=''><button type=\"button\" class='circle-btn link-words btn'>A</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"six\" href=''><button type=\"button\" class='square-btn link-words btn'>A</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"seven\" href=''><button type=\"button\" class='square-btn link-words btn'>A</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"eight\" class=\"semi\" href=''><button type=\"button\" class='semi-btn link-words btn'>A</button></a></div>\n      <div class='col-md-4 col-sm-6 col-xs-6 item'><a id=\"nine\" class=\"circle\" href=''><button type=\"button\" class='circle-btn link-words btn'>A</button></a></div>\n  </div>\n</section>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<title>Relax and Work</title>\n<app-header-small></app-header-small>\n<div class=\"background container-fluid\">\n    <app-music></app-music>\n        <section class=\"gadget-container row\">\n            <div class='col-sm-6'>\n                <div class=\"left-gadget col-md-10 col-md-offset-0 col-xs-10 col-xs-offset-1\"><app-checklist></app-checklist></div>\n            </div>\n            <div class='col-sm-6'>\n                <div class=\"right-gadget col-lg-3 col-lg-offset-6 col-md-4 col-md-offset-5 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\"><app-calculator></app-calculator></div>\n            </div>\n        </section>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "brazil_favela.598e8f1ff6fd17f572da.jpg";

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AcNFiQ5LJwDgwAABphJREFUWMPFWFtvFdcZXWvPzBmbgx0IAVNwsUtIEzAIaJwap3ZwMMWSi92EkoQ0D41UKaqUKlKk9qfkJU+RCi1JUEXBBduAbFPLTYwdJ2m5xCRGLbek+EJ8wT6emb36MOPDIRQawTE5LzPae87eS99a3/q+vYnv8Bds3fqQHKeUxqyUMUsEpCVFkK643wWgK9XVBcsLC1cEZBXILTBmg4BSAA8TuAag7YEAe6mhAe+2tQEAhmtrCxamUhtDshlko8jHQRYKACSQHKL02QMB9m7Oe7HvV8qYX1pgF8nFJFMAQAkChmTt8Wh2tn3egWnnTrClBVNPP21SqdQaSzYDqCdZAjL5SEooPALpyNdnzlww8w2MLS0AgJTnlcrzmkHWg3wUJJjQJ2kMUoeRDkXT0wPfGx62D4TKTG1tSeS6tSR3gVwL0smZngQwYKPoPT+T6fV6eqZQUYF5idiRurqYoTffxMj69b71/So4zm4BT4IsJLIMWgADkA5gauo4u7u/BgCcPj0/wD5Lnvv27jXpkpItJHeRrKMxHgEkGRhBOkdr/+pHUau/evXELRKYN9Fv3uyGxcWP2lTqNyKbmKMrAdZae9lY+wdKB1InTgxk/9fQALa1Yd7EHyxatEKe1yCynmRZNgNjCq9COmasPRRcv34mO/7qq2Did3kD9vumpuy7ralZFDnOFhnzPMg1IN0cXY1D6nWk99xM5uN0f3+m4rHHYvreeSe7Rl6yUq+/Dr711py+nMDzfkzy5yKrDenrpq5CSP3G2sPeyMhJDAxkAOD0+fO3rZlXu1BdnTtt7To5ThPJWgF+Dn2zBD6ndNgLgk4ODEzfba28UDkXLWvMMieV+hmN2Qry+0x0xXijK7D2IKOonV1dF3LFnndgPy0tvamr+vpHQsepgTE7E13FG8fR+lJSF6Lo4Mj4+OcAYHfujEEnYs8bMO3Zg2OXLgEAviwr8wJys8jnAGwEWZhDYUZSr42iv4QzM58u7+vLAIBJSlXeqeT+/fHGr7zCR8rL1wLYAfJZkAU5vjBL6SMjtfjT010LVq3KfNv171v80dDQ4jCdboAx2wgsz+kYooTCw8baLtPTM4qenm+97j1F7KXm5njvZ54pDtPprTCmkXFxzpYSAdcgtSmKWj++eHEo10TzAkwvv3x743foEP4GOBnXfRzGNIGsmNNVIvZJSL1G+rMThoNVg4MhiopuM9G7SuWbA5Pr1jkFS5eaYGYmKvzwQ5s75y9YgMyNGwCA6bq6crju8zTmtyBXMXF3K1lIf4e0zw+CfejsHL+XgmwAoGvDBqq21lNNTYm7bNla63mbkE6Xafv29C19VQJqorLScz2v0hizHUAZyTmthpQuGWvbvTA8wQTUnbzq/4r/R0uXPpwhf2KM2Upgk8iFBE5lpP0Aum+htr7ejaRNIdBIsopzTV/ciY4DOEqydX1Hx/n7SSo3s21bGYzZAWP2CHhC5BICArmUwEXV1X3Bzs6rWSOVltlY7FUAluSsNUHpFKw96Fp77iwgpNNAKnVHE707lcasFrkDZDWMWUHSB1lAshzkk3KcCpWVMYnW4tCYapE7SP4gsQZBAqSzkI56s7N97OgYBwBMTQFjY/cUMUOyCMByAX6uSEUS5BMhWWlLSxf+AkBArlN8FlyfdXdJkP4N6aSCoB2joyMAcP2FF+7LH11IEyS/AhDkdgNJ6q+yZGVYUPDDP23bFoCsS9x9gW5+NkPgJKxtTXV1nZ0bXPT++/cJzNphkUMkMyD9uZ6cJEA+RGkjpBdljA/yKQLlmGsbpBuQ/qEoakllMgP5bKFcWDsMx/kCwISkouymc0ZHrrTGvAjSI1AMxh/EDOo/jtTuRNEpdneP5hOY0cTEGKUhAFcBZCThG3QWwphykCtBFvGmu49B6kUUtRK4DAB9u3fnD5jf3z9jpMuSzgOY5B3KQ04NjFtkoF/S0ekbNz5hZ2cGACoPHMgfsMRlR2DtPymNgncvIJICSheMdIxh2FH8wQdTAKDXXsvrKSsu4q47CfJTxdkJ3r2oTgBoo3SioLPzX/N1/IuB+f6MiaKzlAYhjep/RSoO1wSkPhtFLW4QDM7N/a6yEnz77fxexmQ3rqgomF2x4tcgfwXyqdsojbOwT9JeE4Z/9Ds6rs3nRYzBG2/ECE+fnqG1pwj0QPoK0jSAAMBs0l+dg3TChGFbauHCYQBQY+P8XV/dEpSGhrSiqCoAnoMxaxSXq5DSGKztNVF03Ovo6HsQV1f/BQ1cHilWnoepAAAAAElFTkSuQmCC"

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "corn_island_boat.f6314945b0b1773a511a.jpg";

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "curacao_beach.49402ddd532f25f0335f.jpg";

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "japanese_egret.f4290f13656f797bddd3.jpg";

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kirkenes_city_sign.7c9556a4d00adfa7ff3b.jpg";

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lh.ef0e13ed860950a9e4aa.jpg";

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "norwegian_fall.600bb701540a867f65b8.jpg";

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "oregon_flower.f7a1559ea403694cab9f.jpg";

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "oregon_garden.8b22760e443e9918ab6e.jpg";

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "oregon_waves.769e130328b8162b553f.jpg";

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "strap_pic.5c9a73dc755b29e9b923.jpg";

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "thermometer.58432d29bd44757a700e.jpg";

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "woodBeach.34904fd879ec0a241fda.jpg";

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ })

},[725]);
//# sourceMappingURL=main.bundle.js.map