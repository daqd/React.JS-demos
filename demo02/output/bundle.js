/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ComponentDiv = __webpack_require__(1);
	//引入less文件
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ComponentStyle.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Demo = React.createClass({
	  displayName: 'Demo',

	  render: function render() {
	    return React.createElement(ComponentDiv, null);
	  }
	});

	React.render(React.createElement(Demo, null), document.body);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var ComponentDiv = React.createClass({
		displayName: "ComponentDiv",

		render: function render() {
			return React.createElement("div", { "class": "ComponentDiv" }, "ComponentDiv");
		}
	});

	module.exports = ComponentDiv;

/***/ }
/******/ ]);