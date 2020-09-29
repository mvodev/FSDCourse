/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"hotel": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./layout.js","vendors~UIKit~hotel","UIKit~hotel"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layout.js":
/*!*******************!*\
  !*** ./layout.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_hotelStyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/hotelStyles.scss */ "./styles/hotelStyles.scss");
/* harmony import */ var _styles_hotelStyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_hotelStyles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css */ "../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css");
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/air-datepicker/dist/css/datepicker.min.css */ "../node_modules/air-datepicker/dist/css/datepicker.min.css");
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! air-datepicker/dist/js/datepicker */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_starRating_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/starRating.js */ "./scripts/starRating.js");
/* harmony import */ var _scripts_starRating_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_starRating_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_likeRating_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/likeRating.js */ "./scripts/likeRating.js");
/* harmony import */ var _scripts_likeRating_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_likeRating_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ion-rangeslider */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var _scripts_dropDownGuests_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/dropDownGuests.js */ "./scripts/dropDownGuests.js");
/* harmony import */ var _scripts_dropDownGuests_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropDownGuests_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_dropDownRoom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/dropDownRoom.js */ "./scripts/dropDownRoom.js");
/* harmony import */ var _scripts_dropDownRoom_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropDownRoom_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scripts_expandableCL_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/expandableCL.js */ "./scripts/expandableCL.js");
/* harmony import */ var _scripts_expandableCL_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_expandableCL_js__WEBPACK_IMPORTED_MODULE_10__);











// var cleave = new Cleave('.text-field_input-date', {
//   date: true,
//   delimiter: '.',
//   datePattern: ['d', 'm', 'Y']
// });
// $('.dropdown-input__date_input-field').datepicker({ todayButton: true, clearButton: true });
// $('.dropdown-input__filter_input-field').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
// $('.cards__right-column_datepicker').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
// $('.range-slider__input').ionRangeSlider({
//   type: "double",
//   min: 0,
//   max: 20000,
//   from: 5000,
//   to: 10000,
//   step: 1000,
//   onChange: function (data) {
//     let minValue = ''
//     let maxValue = ''
//     if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
//     else minValue = data.from;
//     if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
//     else maxValue = data.to;
//     $('.range-slider__label-wrapper p:nth-child(2)').
//       html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
//   },
//   onStart: function (data) {
//     let minValue = ''
//     let maxValue = ''
//     if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
//     else minValue = data.from;
//     if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
//     else maxValue = data.to;
//     $('.range-slider__label-wrapper p:nth-child(2)').
//       html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
//   }
// });

/***/ }),

/***/ "./styles/hotelStyles.scss":
/*!*********************************!*\
  !*** ./styles/hotelStyles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=hotel.34ffcb9b93727936a920.js.map