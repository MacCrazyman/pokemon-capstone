/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Pokemon_placeholder.png */ "./src/img/Pokemon_placeholder.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n}\n\nbody {\n  padding-top: 120px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n#navbar-ul {\n  gap: 20px;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* Styling for the POP UP Window */\n\n#comments-popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup-container {\n  background: white;\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n}\n\n#popup-picture-container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup-picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#popup-close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup-details {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail-item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail-property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup-comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments-box {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#popup-add-comments {\n  text-align: center;\n}\n\n#add-comment-form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\n.detail-item > span {\n  margin-left: 5px;\n}\n\n#popup-close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  transform: translate(100%);\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n\n#counter {\n  display: flex;\n}\n\n#homepage-counter {\n  padding-left: 10px;\n  font-size: 20px;\n  align-self: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;AACT;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,OAAO;EACP,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA,kCAAkC;;AAElC;EACE,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B;;4BAE0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;EACvC,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,mBAAmB;EACnB,uEAAkE;EAClE,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uCAAuC;EACvC,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB","sourcesContent":[":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n}\n\nbody {\n  padding-top: 120px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n#navbar-ul {\n  gap: 20px;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* Styling for the POP UP Window */\n\n#comments-popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup-container {\n  background: white;\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n}\n\n#popup-picture-container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup-picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(./img/Pokemon_placeholder.png), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#popup-close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup-details {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail-item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail-property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup-comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments-box {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#popup-add-comments {\n  text-align: center;\n}\n\n#add-comment-form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\n.detail-item > span {\n  margin-left: 5px;\n}\n\n#popup-close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  transform: translate(100%);\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n\n#counter {\n  display: flex;\n}\n\n#homepage-counter {\n  padding-left: 10px;\n  font-size: 20px;\n  align-self: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0/').then((response) => response.json());

const arrayPokemonLinks = async () => {
  const data = await getPokemon().then((response) => response.results);
  const urlArray = [];
  data.forEach((element) => {
    urlArray.push(element.url);
  });
  return urlArray;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPokemonLinks);


/***/ }),

/***/ "./src/homepageCounter.js":
/*!********************************!*\
  !*** ./src/homepageCounter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homepageCounter = items => items.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageCounter);


/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "submitLikes": () => (/* binding */ submitLikes),
/* harmony export */   "renderLikes": () => (/* binding */ renderLikes)
/* harmony export */ });
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2VoylRMjGXYqZZMlt91a';

const getLikes = () => fetch(`${involvementAPI}/likes`).then((response) => response.json());

const submitLikes = (newLike) => fetch(`${involvementAPI}/likes`, {
  method: 'POST',
  body: JSON.stringify(newLike),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
});

const renderLikes = async () => {
  const data = await getLikes();
  return data;
};




/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillPopUp": () => (/* binding */ fillPopUp),
/* harmony export */   "submitComment": () => (/* binding */ submitComment),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "countComments": () => (/* binding */ countComments)
/* harmony export */ });
const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const appId = '2VoylRMjGXYqZZMlt91a';
const involvementAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}`;

const getComments = (pokemoName) => fetch(`${involvementAPI}/comments?item_id=${pokemoName}`).then((response) => response.text());

const submitComment = (newComment) => fetch(`${involvementAPI}/comments`, {
  method: 'POST',
  body: JSON.stringify(newComment),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
});

const fillPopUp = (selectedPokemon) => {
  const picture = document.querySelector('#popup-picture');
  const name = document.querySelector('#popup-title');
  const height = document.querySelector('#property-height');
  const weight = document.querySelector('#property-weight');
  const baseXp = document.querySelector('#property-baseXp');
  picture.src = selectedPokemon.sprites.other.dream_world.front_default;
  name.textContent = capitalizeString(selectedPokemon.name);
  height.textContent = selectedPokemon.height;
  weight.textContent = selectedPokemon.weight;
  baseXp.textContent = selectedPokemon.base_experience;
};

const countComments = (commentsArray) => commentsArray.length;




/***/ }),

/***/ "./src/img/Pokemon_placeholder.png":
/*!*****************************************!*\
  !*** ./src/img/Pokemon_placeholder.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0a4ef5fad4b08a8c934.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLi": () => (/* binding */ createLi),
/* harmony export */   "capitalizeString": () => (/* binding */ capitalizeString),
/* harmony export */   "pokemonContainer": () => (/* binding */ pokemonContainer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _apiFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions.js */ "./src/apiFunctions.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");
/* harmony import */ var _homepageCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepageCounter.js */ "./src/homepageCounter.js");
// IMPORTS






// ELEMENTS
const popUpWindow = document.querySelector('#comments-popup');
const pokemonContainer = document.querySelector('#pokemon-container');
const commentForm = document.querySelector('#add-comment-form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');
const commentTable = document.querySelector('#comments-table');
const closePopUp = document.querySelector('#popup-close');
const pokemonNumber = document.querySelector('#homepage-counter');

// FUNCTIONS
const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createComment = (commentObject) => {
  const commentRow = document.createElement('tr');
  const commentDate = document.createElement('td');
  const commentUser = document.createElement('td');
  const commentContent = document.createElement('td');
  commentDate.textContent = commentObject.creation_date;
  commentUser.textContent = commentObject.username;
  commentContent.textContent = commentObject.comment;
  commentRow.append(commentDate, commentUser, commentContent);
  commentTable.appendChild(commentRow);
};

const cleanForm = () => {
  userField.value = '';
  commentField.value = '';
};

const createLi = (name, image, pokemonInfo, likesArray) => {
  const li = document.createElement('li');
  const imageDiv = document.createElement('div');
  const pokemonImage = document.createElement('img');
  const pokemonName = document.createElement('p');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  const pokemonLikes = likesArray.filter((object) => object.item_id === name);

  // FUNCTIONS FOR EVENT LISTENERS
  const updateComments = () => {
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(pokemonInfo.name).then((response) => {
      commentsNumber.textContent = 'Be the first one to comment';
      if (JSON.parse(response).error) return;
      JSON.parse(response).forEach((element) => createComment(element));
      const commentsAmmount = (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.countComments)(JSON.parse(response));
      commentsNumber.textContent = ` (${commentsAmmount})`;
    });
  };
  const formEvent = (event) => {
    event.preventDefault();
    const commentItem = {
      item_id: pokemonInfo.name,
      username: userField.value,
      comment: commentField.value,
    };
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.submitComment)(commentItem).then(() => {
      commentTable.innerHTML = '';
      updateComments();
      cleanForm();
    });
  };

  // SET PROPERTIES OF ELEMENTS
  pokemonName.textContent = name;
  pokemonImage.src = image;
  if (pokemonLikes.length === 0) {
    likeButton.textContent = 'Like';
  } else {
    likeButton.textContent = `Like ${pokemonLikes[0].likes}`;
  }
  commentButton.textContent = 'Comment';

  // EVENT LISTENERS
  commentButton.addEventListener('click', () => {
    popUpWindow.classList.remove('hidden');
    popUpWindow.classList.add('show');
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.fillPopUp)(pokemonInfo);
    updateComments();
    commentForm.addEventListener('submit', formEvent);
  });
  closePopUp.addEventListener('click', () => {
    popUpWindow.classList.remove('show');
    popUpWindow.classList.add('hidden');
    commentTable.innerHTML = '';
    commentForm.removeEventListener('submit', formEvent);
    cleanForm();
  });

  // APPEND ELEMENTS
  likeButton.addEventListener('click', () => {
    const likeObject = {
      item_id: name,
    };
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.submitLikes)(likeObject).then(() => window.location.reload());
  });
  imageDiv.appendChild(pokemonImage);
  li.appendChild(imageDiv);
  li.appendChild(pokemonName);
  li.appendChild(likeButton);
  li.appendChild(commentButton);
  return li;
};

const getPokemonInfo = async (likes) => {
  const array = await (0,_apiFunctions_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const pokemonArray = [];
  array.forEach(async (url) => {
    const data = await fetch(url).then((response) => response.json());
    pokemonArray.push(data);
    const element = createLi(capitalizeString(data.name), data.sprites.front_shiny, data, likes);
    pokemonContainer.appendChild(element);
  });
  const pokemons = (0,_homepageCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(array);
  pokemonNumber.textContent = pokemons;
  return pokemonArray;
};

// CALL FUNCTIONS
(0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.renderLikes)().then((response) => getPokemonInfo(response));

// EXPORTS


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw0REFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQiwrREFBZTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBVzs7QUFFWDtBQUN3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvaG9tZXBhZ2VDb3VudGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL2xpa2VzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvUG9rZW1vbl9wbGFjZWhvbGRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYmx1ZTogIzAwNzViZTtcXG4gIC0tc2Vjb25kYXJ5LWJsdWU6ICMwYTI4NWY7XFxuICAtLXByaW1hcnktcmVkOiAjZmIxYjFiO1xcbiAgLS1wcmltYXJ5LXllbGxvdzogI2ZjMDtcXG4gIC0tZm9vdGVyLWJsdWU6ICMzMGE3ZDc7XFxufVxcblxcbioge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI25hdmJhci11bCB7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNoZWFkZXItbG9nbyB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNwb2tlbW9uLWxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwb2tlbW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jcG9rZWJhbGwtbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIFBPUCBVUCBXaW5kb3cgKi9cXG5cXG4jY29tbWVudHMtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHRyYW5zaXRpb246XFxuICAgIHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LFxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwb3B1cC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiNwb3B1cC1waWN0dXJlLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtcGljdHVyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHZhcigtLWZvb3Rlci1ibHVlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jcG9wdXAtY2xvc2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICByaWdodDogMWVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwb3B1cC1kZXRhaWxzIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWwtaXRlbSB7XFxuICB3aWR0aDogNDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWwtcHJvcGVydHkge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jcG9wdXAtY29tbWVudHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbW1lbnRzLWJveCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNwb3B1cC1hZGQtY29tbWVudHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWNvbW1lbnQtZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbC1pdGVtID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jcG9wdXAtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2NvdW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hvbWVwYWdlLWNvdW50ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsa0NBQWtDOztBQUVsQztFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQjs7NEJBRTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQix1RUFBa0U7RUFDbEUsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1ibHVlOiAjMDA3NWJlO1xcbiAgLS1zZWNvbmRhcnktYmx1ZTogIzBhMjg1ZjtcXG4gIC0tcHJpbWFyeS1yZWQ6ICNmYjFiMWI7XFxuICAtLXByaW1hcnkteWVsbG93OiAjZmMwO1xcbiAgLS1mb290ZXItYmx1ZTogIzMwYTdkNztcXG59XFxuXFxuKiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxubmF2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jbmF2YmFyLXVsIHtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2hlYWRlci1sb2dvIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Bva2Vtb24tbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Bva2Vtb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmx1ZSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZm9vdGVyLWxvZ28ge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbiNwb2tlYmFsbC1sb2dvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgUE9QIFVQIFdpbmRvdyAqL1xcblxcbiNjb21tZW50cy1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQsXFxuICAgIG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcHVwLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxuI3BvcHVwLXBpY3R1cmUtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwb3B1cC1waWN0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTBweCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1nL1Bva2Vtb25fcGxhY2Vob2xkZXIucG5nKSwgdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNwb3B1cC1jbG9zZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcHVwLWRldGFpbHMge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbC1pdGVtIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbC1wcm9wZXJ0eSB7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNwb3B1cC1jb21tZW50cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29tbWVudHMtYm94IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3BvcHVwLWFkZC1jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtY29tbWVudC1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW0gPiBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbiNwb3B1cC1jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jY291bnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaG9tZXBhZ2UtY291bnRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXRQb2tlbW9uID0gKCkgPT4gZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8/bGltaXQ9MjAmb2Zmc2V0PTAvJykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmNvbnN0IGFycmF5UG9rZW1vbkxpbmtzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9rZW1vbigpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5yZXN1bHRzKTtcbiAgY29uc3QgdXJsQXJyYXkgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdXJsQXJyYXkucHVzaChlbGVtZW50LnVybCk7XG4gIH0pO1xuICByZXR1cm4gdXJsQXJyYXk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheVBva2Vtb25MaW5rcztcbiIsImNvbnN0IGhvbWVwYWdlQ291bnRlciA9IGl0ZW1zID0+IGl0ZW1zLmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlQ291bnRlcjtcbiIsImNvbnN0IGludm9sdmVtZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzJWb3lsUk1qR1hZcVpaTWx0OTFhJztcblxuY29uc3QgZ2V0TGlrZXMgPSAoKSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudEFQSX0vbGlrZXNgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuY29uc3Qgc3VibWl0TGlrZXMgPSAobmV3TGlrZSkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEl9L2xpa2VzYCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TGlrZSksXG4gIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxufSk7XG5cbmNvbnN0IHJlbmRlckxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlcywgc3VibWl0TGlrZXMsIHJlbmRlckxpa2VzIH07XG4iLCJjb25zdCBjYXBpdGFsaXplU3RyaW5nID0gKHN0cmluZykgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuXG5jb25zdCBhcHBJZCA9ICcyVm95bFJNakdYWXFaWk1sdDkxYSc7XG5jb25zdCBpbnZvbHZlbWVudEFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfWA7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gKHBva2Vtb05hbWUpID0+IGZldGNoKGAke2ludm9sdmVtZW50QVBJfS9jb21tZW50cz9pdGVtX2lkPSR7cG9rZW1vTmFtZX1gKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKTtcblxuY29uc3Qgc3VibWl0Q29tbWVudCA9IChuZXdDb21tZW50KSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudEFQSX0vY29tbWVudHNgLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb21tZW50KSxcbiAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG59KTtcblxuY29uc3QgZmlsbFBvcFVwID0gKHNlbGVjdGVkUG9rZW1vbikgPT4ge1xuICBjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwLXBpY3R1cmUnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC10aXRsZScpO1xuICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvcGVydHktaGVpZ2h0Jyk7XG4gIGNvbnN0IHdlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9wZXJ0eS13ZWlnaHQnKTtcbiAgY29uc3QgYmFzZVhwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3BlcnR5LWJhc2VYcCcpO1xuICBwaWN0dXJlLnNyYyA9IHNlbGVjdGVkUG9rZW1vbi5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHQ7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplU3RyaW5nKHNlbGVjdGVkUG9rZW1vbi5uYW1lKTtcbiAgaGVpZ2h0LnRleHRDb250ZW50ID0gc2VsZWN0ZWRQb2tlbW9uLmhlaWdodDtcbiAgd2VpZ2h0LnRleHRDb250ZW50ID0gc2VsZWN0ZWRQb2tlbW9uLndlaWdodDtcbiAgYmFzZVhwLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQb2tlbW9uLmJhc2VfZXhwZXJpZW5jZTtcbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoY29tbWVudHNBcnJheSkgPT4gY29tbWVudHNBcnJheS5sZW5ndGg7XG5cbmV4cG9ydCB7IGZpbGxQb3BVcCwgc3VibWl0Q29tbWVudCwgZ2V0Q29tbWVudHMsIGNvdW50Q29tbWVudHMsIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBJTVBPUlRTXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhcnJheVBva2Vtb25MaW5rcyBmcm9tICcuL2FwaUZ1bmN0aW9ucy5qcyc7XG5pbXBvcnQge1xuICBmaWxsUG9wVXAsIHN1Ym1pdENvbW1lbnQsIGdldENvbW1lbnRzLCBjb3VudENvbW1lbnRzLFxufSBmcm9tICcuL3BvcHVwLmpzJztcbmltcG9ydCB7IHN1Ym1pdExpa2VzLCByZW5kZXJMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IGhvbWVwYWdlQ291bnRlciBmcm9tICcuL2hvbWVwYWdlQ291bnRlci5qcyc7XG5cbi8vIEVMRU1FTlRTXG5jb25zdCBwb3BVcFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1wb3B1cCcpO1xuY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlbW9uLWNvbnRhaW5lcicpO1xuY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNvbW1lbnQtZm9ybScpO1xuY29uc3QgdXNlckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyk7XG5jb25zdCBjb21tZW50RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpO1xuY29uc3QgY29tbWVudFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLXRhYmxlJyk7XG5jb25zdCBjbG9zZVBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwLWNsb3NlJyk7XG5jb25zdCBwb2tlbW9uTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlLWNvdW50ZXInKTtcblxuLy8gRlVOQ1RJT05TXG5jb25zdCBjYXBpdGFsaXplU3RyaW5nID0gKHN0cmluZykgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuXG5jb25zdCBjcmVhdGVDb21tZW50ID0gKGNvbW1lbnRPYmplY3QpID0+IHtcbiAgY29uc3QgY29tbWVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGNvbnN0IGNvbW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgY29tbWVudFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbW1lbnREYXRlLnRleHRDb250ZW50ID0gY29tbWVudE9iamVjdC5jcmVhdGlvbl9kYXRlO1xuICBjb21tZW50VXNlci50ZXh0Q29udGVudCA9IGNvbW1lbnRPYmplY3QudXNlcm5hbWU7XG4gIGNvbW1lbnRDb250ZW50LnRleHRDb250ZW50ID0gY29tbWVudE9iamVjdC5jb21tZW50O1xuICBjb21tZW50Um93LmFwcGVuZChjb21tZW50RGF0ZSwgY29tbWVudFVzZXIsIGNvbW1lbnRDb250ZW50KTtcbiAgY29tbWVudFRhYmxlLmFwcGVuZENoaWxkKGNvbW1lbnRSb3cpO1xufTtcblxuY29uc3QgY2xlYW5Gb3JtID0gKCkgPT4ge1xuICB1c2VyRmllbGQudmFsdWUgPSAnJztcbiAgY29tbWVudEZpZWxkLnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBjcmVhdGVMaSA9IChuYW1lLCBpbWFnZSwgcG9rZW1vbkluZm8sIGxpa2VzQXJyYXkpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwb2tlbW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgcG9rZW1vbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwb2tlbW9uTGlrZXMgPSBsaWtlc0FycmF5LmZpbHRlcigob2JqZWN0KSA9PiBvYmplY3QuaXRlbV9pZCA9PT0gbmFtZSk7XG5cbiAgLy8gRlVOQ1RJT05TIEZPUiBFVkVOVCBMSVNURU5FUlNcbiAgY29uc3QgdXBkYXRlQ29tbWVudHMgPSAoKSA9PiB7XG4gICAgZ2V0Q29tbWVudHMocG9rZW1vbkluZm8ubmFtZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbW1lbnRzTnVtYmVyLnRleHRDb250ZW50ID0gJ0JlIHRoZSBmaXJzdCBvbmUgdG8gY29tbWVudCc7XG4gICAgICBpZiAoSlNPTi5wYXJzZShyZXNwb25zZSkuZXJyb3IpIHJldHVybjtcbiAgICAgIEpTT04ucGFyc2UocmVzcG9uc2UpLmZvckVhY2goKGVsZW1lbnQpID0+IGNyZWF0ZUNvbW1lbnQoZWxlbWVudCkpO1xuICAgICAgY29uc3QgY29tbWVudHNBbW1vdW50ID0gY291bnRDb21tZW50cyhKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gICAgICBjb21tZW50c051bWJlci50ZXh0Q29udGVudCA9IGAgKCR7Y29tbWVudHNBbW1vdW50fSlgO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBmb3JtRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0ge1xuICAgICAgaXRlbV9pZDogcG9rZW1vbkluZm8ubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB1c2VyRmllbGQudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50RmllbGQudmFsdWUsXG4gICAgfTtcbiAgICBzdWJtaXRDb21tZW50KGNvbW1lbnRJdGVtKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbW1lbnRUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHVwZGF0ZUNvbW1lbnRzKCk7XG4gICAgICBjbGVhbkZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTRVQgUFJPUEVSVElFUyBPRiBFTEVNRU5UU1xuICBwb2tlbW9uTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHBva2Vtb25JbWFnZS5zcmMgPSBpbWFnZTtcbiAgaWYgKHBva2Vtb25MaWtlcy5sZW5ndGggPT09IDApIHtcbiAgICBsaWtlQnV0dG9uLnRleHRDb250ZW50ID0gJ0xpa2UnO1xuICB9IGVsc2Uge1xuICAgIGxpa2VCdXR0b24udGV4dENvbnRlbnQgPSBgTGlrZSAke3Bva2Vtb25MaWtlc1swXS5saWtlc31gO1xuICB9XG4gIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG5cbiAgLy8gRVZFTlQgTElTVEVORVJTXG4gIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIGZpbGxQb3BVcChwb2tlbW9uSW5mbyk7XG4gICAgdXBkYXRlQ29tbWVudHMoKTtcbiAgICBjb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtRXZlbnQpO1xuICB9KTtcbiAgY2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29tbWVudFRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbW1lbnRGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1FdmVudCk7XG4gICAgY2xlYW5Gb3JtKCk7XG4gIH0pO1xuXG4gIC8vIEFQUEVORCBFTEVNRU5UU1xuICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxpa2VPYmplY3QgPSB7XG4gICAgICBpdGVtX2lkOiBuYW1lLFxuICAgIH07XG4gICAgc3VibWl0TGlrZXMobGlrZU9iamVjdCkudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICB9KTtcbiAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQocG9rZW1vbkltYWdlKTtcbiAgbGkuYXBwZW5kQ2hpbGQoaW1hZ2VEaXYpO1xuICBsaS5hcHBlbmRDaGlsZChwb2tlbW9uTmFtZSk7XG4gIGxpLmFwcGVuZENoaWxkKGxpa2VCdXR0b24pO1xuICBsaS5hcHBlbmRDaGlsZChjb21tZW50QnV0dG9uKTtcbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgZ2V0UG9rZW1vbkluZm8gPSBhc3luYyAobGlrZXMpID0+IHtcbiAgY29uc3QgYXJyYXkgPSBhd2FpdCBhcnJheVBva2Vtb25MaW5rcygpO1xuICBjb25zdCBwb2tlbW9uQXJyYXkgPSBbXTtcbiAgYXJyYXkuZm9yRWFjaChhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcG9rZW1vbkFycmF5LnB1c2goZGF0YSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUxpKGNhcGl0YWxpemVTdHJpbmcoZGF0YS5uYW1lKSwgZGF0YS5zcHJpdGVzLmZyb250X3NoaW55LCBkYXRhLCBsaWtlcyk7XG4gICAgcG9rZW1vbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG4gIGNvbnN0IHBva2Vtb25zID0gaG9tZXBhZ2VDb3VudGVyKGFycmF5KTtcbiAgcG9rZW1vbk51bWJlci50ZXh0Q29udGVudCA9IHBva2Vtb25zO1xuICByZXR1cm4gcG9rZW1vbkFycmF5O1xufTtcblxuLy8gQ0FMTCBGVU5DVElPTlNcbnJlbmRlckxpa2VzKCkudGhlbigocmVzcG9uc2UpID0+IGdldFBva2Vtb25JbmZvKHJlc3BvbnNlKSk7XG5cbi8vIEVYUE9SVFNcbmV4cG9ydCB7IGNyZWF0ZUxpLCBjYXBpdGFsaXplU3RyaW5nLCBwb2tlbW9uQ29udGFpbmVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=