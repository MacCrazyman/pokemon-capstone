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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n}\n\nbody {\n  padding-top: 120px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n#navbar-ul {\n  gap: 20px;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* Styling for the POP UP Window */\n\n#comments_popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup_container {\n  background: white;\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n}\n\n#popup_picture_container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup_picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#popup_close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup_details {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail_item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail_property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup_comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments_box {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#popup_add_comments {\n  text-align: center;\n}\n\n#add_comment_form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\n.detail_item > span {\n  margin-left: 5px;\n}\n\n#popup_close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  transform: translate(100%);\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;AACT;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,OAAO;EACP,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA,kCAAkC;;AAElC;EACE,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B;;4BAE0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;EACvC,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,mBAAmB;EACnB,uEAAkE;EAClE,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uCAAuC;EACvC,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":[":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n}\n\nbody {\n  padding-top: 120px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n#navbar-ul {\n  gap: 20px;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* Styling for the POP UP Window */\n\n#comments_popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup_container {\n  background: white;\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n}\n\n#popup_picture_container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup_picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(./img/Pokemon_placeholder.png), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#popup_close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup_details {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail_item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail_property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup_comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments_box {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#popup_add_comments {\n  text-align: center;\n}\n\n#add_comment_form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\n.detail_item > span {\n  margin-left: 5px;\n}\n\n#popup_close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  transform: translate(100%);\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/fake_pokemon.js":
/*!*****************************!*\
  !*** ./src/fake_pokemon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pokemon": () => (/* binding */ pokemon)
/* harmony export */ });
/* eslint-disable */
const pokemon = {
  id: 35,
  name: 'clefairy',
  base_experience: 113,
  height: 6,
  is_default: true,
  order: 56,
  weight: 75,
  abilities: [
    {
      is_hidden: true,
      slot: 3,
      ability: {
        name: 'friend-guard',
        url: 'https://pokeapi.co/api/v2/ability/132/',
      },
    },
  ],
  forms: [
    {
      name: 'clefairy',
      url: 'https://pokeapi.co/api/v2/pokemon-form/35/',
    },
  ],
  game_indices: [
    {
      game_index: 35,
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
  ],
  held_items: [
    {
      item: {
        name: 'moon-stone',
        url: 'https://pokeapi.co/api/v2/item/81/',
      },
      version_details: [
        {
          rarity: 5,
          version: {
            name: 'ruby',
            url: 'https://pokeapi.co/api/v2/version/7/',
          },
        },
      ],
    },
  ],
  location_area_encounters: '/api/v2/pokemon/35/encounters',
  moves: [
    {
      move: {
        name: 'pound',
        url: 'https://pokeapi.co/api/v2/move/1/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
        },
      ],
    },
  ],
  species: {
    name: 'clefairy',
    url: 'https://pokeapi.co/api/v2/pokemon-species/35/',
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/35.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png',
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg',
        front_female: null,
      },
      home: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png',
        front_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png',
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/35.png',
          back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/35.png',
          front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/35.png',
        },
        yellow: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/35.png',
          back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/35.png',
          front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/35.png',
        },
      },
      'generation-ii': {
        crystal: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/35.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/35.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/35.png',
        },
        gold: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/35.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/35.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/35.png',
        },
        silver: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/35.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/35.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/35.png',
        },
      },
      'generation-iii': {
        emerald: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/35.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/35.png',
        },
        'firered-leafgreen': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/35.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/35.png',
        },
        'ruby-sapphire': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/35.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/35.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/35.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/35.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/35.png',
          back_female: null,
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/35.png',
          back_shiny_female: null,
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/35.png',
          front_shiny_female: null,
        },
        'heartgold-soulsilver': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/35.png',
          back_female: null,
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/35.png',
          back_shiny_female: null,
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/35.png',
          front_shiny_female: null,
        },
        platinum: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/35.png',
          back_female: null,
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/35.png',
          back_shiny_female: null,
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/35.png',
          front_shiny_female: null,
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/35.gif',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/35.gif',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/35.gif',
            front_shiny_female: null,
          },
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/35.png',
          back_female: null,
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/35.png',
          back_shiny_female: null,
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/35.png',
          front_shiny_female: null,
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/35.png',
          front_shiny_female: null,
        },
        'x-y': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/35.png',
          front_shiny_female: null,
        },
      },
      'generation-vii': {
        icons: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/35.png',
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/35.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/35.png',
          front_shiny_female: null,
        },
      },
      'generation-viii': {
        icons: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/35.png',
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'fairy',
        url: 'https://pokeapi.co/api/v2/type/18/',
      },
    },
  ],
  past_types: [
    {
      generation: {
        name: 'generation-v',
        url: 'https://pokeapi.co/api/v2/generation/5/',
      },
      types: [
        {
          slot: 1,
          type: {
            name: 'normal',
            url: 'https://pokeapi.co/api/v2/type/1/',
          },
        },
      ],
    },
  ],
};



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
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//   method: 'POST',
// })
// .then(response => console.log('Success:', response));

const appId = '2VoylRMjGXYqZZMlt91a';
const involvementAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}`;

const getComments = (pokemoName) => fetch(`${involvementAPI}/comments?item_id=${pokemoName}`).then((response) => response.text());

const submitComment = (newComment) => fetch(`${involvementAPI}/comments`, {
  method: 'POST',
  body: JSON.stringify(newComment),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
});

const fillPopUp = (selectedPokemon) => {
  const picture = document.querySelector('#popup_picture');
  const name = document.querySelector('#popup_title');
  const height = document.querySelector('#property_height');
  const weight = document.querySelector('#property_weight');
  const baseXp = document.querySelector('#property_baseXp');
  picture.src = selectedPokemon.sprites.other.dream_world.front_default;
  name.textContent = selectedPokemon.name;
  height.textContent = selectedPokemon.height;
  weight.textContent = selectedPokemon.weight;
  baseXp.textContent = selectedPokemon.base_experience;
};



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
/* harmony import */ var _fake_pokemon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake_pokemon.js */ "./src/fake_pokemon.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");
// IMPORTS






// ELEMENTS
const popUpWindow = document.querySelector('#comments_popup');
const pokemonContainer = document.querySelector('#pokemon-container');
const commentForm = document.querySelector('#add_comment_form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');
const commentTable = document.querySelector('#comments_table');
const closePopUp = document.querySelector('#popup_close');

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

const createLi = (name, image, pokemonInfo, likesArray) => {
  const li = document.createElement('li');
  const imageDiv = document.createElement('div');
  const pokemonImage = document.createElement('img');
  const pokemonName = document.createElement('p');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  const pokemonLikes = likesArray.filter((object) => object.item_id === name);
  pokemonName.textContent = name;
  pokemonImage.src = image;
  if (pokemonLikes.length === 0) {
    likeButton.textContent = 'Like';
  } else {
    likeButton.textContent = `Like ${pokemonLikes[0].likes}`;
  }
  commentButton.textContent = 'Comment';
  commentButton.addEventListener('click', () => {
    popUpWindow.classList.remove('hidden');
    popUpWindow.classList.add('show');
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.fillPopUp)(pokemonInfo);
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(pokemonInfo.name).then((response) => {
      if (JSON.parse(response).error) return;
      JSON.parse(response).forEach((element) => createComment(element));
    });
  });
  likeButton.addEventListener('click', () => {
    const likeObject = {
      item_id: name,
    };
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_4__.submitLikes)(likeObject).then(() => window.location.reload());
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
  return pokemonArray;
};
// EVENT LISTENERS
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentItem = {
    item_id: _fake_pokemon_js__WEBPACK_IMPORTED_MODULE_3__.pokemon.name,
    username: userField.value,
    comment: commentField.value,
  };
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.submitComment)(commentItem);
});

closePopUp.addEventListener('click', () => {
  popUpWindow.classList.remove('show');
  popUpWindow.classList.add('hidden');
  commentTable.innerHTML = '';
});
// CALL FUNCTIONS
(0,_likes_js__WEBPACK_IMPORTED_MODULE_4__.renderLikes)().then((response) => getPokemonInfo(response));

// getPokemonInfo();

// EXPORTS


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWGpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UkE7O0FBRUEsZ0NBQWdDLGVBQWU7O0FBRS9DLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQyxnQkFBZ0I7QUFDaEUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFOEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjlDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSxrR0FBa0csTUFBTTs7QUFFeEcsNkNBQTZDLGVBQWUsb0JBQW9CLFdBQVc7O0FBRTNGLCtDQUErQyxlQUFlO0FBQzlEO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQyxnQkFBZ0I7QUFDaEUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ3FCO0FBQzZCO0FBQ2lCO0FBQ3ZCO0FBQ1U7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsSUFBSSxzREFBVztBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVztBQUNmLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw0REFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBYTtBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxzREFBVzs7QUFFWDs7QUFFQTtBQUN3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvZmFrZV9wb2tlbW9uLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL2xpa2VzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvUG9rZW1vbl9wbGFjZWhvbGRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYmx1ZTogIzAwNzViZTtcXG4gIC0tc2Vjb25kYXJ5LWJsdWU6ICMwYTI4NWY7XFxuICAtLXByaW1hcnktcmVkOiAjZmIxYjFiO1xcbiAgLS1wcmltYXJ5LXllbGxvdzogI2ZjMDtcXG4gIC0tZm9vdGVyLWJsdWU6ICMzMGE3ZDc7XFxufVxcblxcbioge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI25hdmJhci11bCB7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNoZWFkZXItbG9nbyB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNwb2tlbW9uLWxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwb2tlbW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jcG9rZWJhbGwtbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIFBPUCBVUCBXaW5kb3cgKi9cXG5cXG4jY29tbWVudHNfcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHRyYW5zaXRpb246XFxuICAgIHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LFxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwb3B1cF9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiNwb3B1cF9waWN0dXJlX2NvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXBfcGljdHVyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHZhcigtLWZvb3Rlci1ibHVlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jcG9wdXBfY2xvc2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICByaWdodDogMWVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwb3B1cF9kZXRhaWxzIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxfaXRlbSB7XFxuICB3aWR0aDogNDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxfcHJvcGVydHkge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jcG9wdXBfY29tbWVudHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbW1lbnRzX2JveCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNwb3B1cF9hZGRfY29tbWVudHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkX2NvbW1lbnRfZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbF9pdGVtID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jcG9wdXBfY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGtDQUFrQzs7QUFFbEM7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUI7OzRCQUUwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsdUVBQWtFO0VBQ2xFLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWJsdWU6ICMwMDc1YmU7XFxuICAtLXNlY29uZGFyeS1ibHVlOiAjMGEyODVmO1xcbiAgLS1wcmltYXJ5LXJlZDogI2ZiMWIxYjtcXG4gIC0tcHJpbWFyeS15ZWxsb3c6ICNmYzA7XFxuICAtLWZvb3Rlci1ibHVlOiAjMzBhN2Q3O1xcbn1cXG5cXG4qIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5uYXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNuYXZiYXItdWwge1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaGVhZGVyLWxvZ28ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jcG9rZW1vbi1sb2dvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcG9rZW1vbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1ibHVlKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNmb290ZXItbG9nbyB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuI3Bva2ViYWxsLWxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBQT1AgVVAgV2luZG93ICovXFxuXFxuI2NvbW1lbnRzX3BvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB0cmFuc2l0aW9uOlxcbiAgICB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCxcXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcG9wdXBfY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jcG9wdXBfcGljdHVyZV9jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BvcHVwX3BpY3R1cmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvUG9rZW1vbl9wbGFjZWhvbGRlci5wbmcpLCB2YXIoLS1mb290ZXItYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI3BvcHVwX2Nsb3NlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMWVtO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcG9wdXBfZGV0YWlscyB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsX2l0ZW0ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsX3Byb3BlcnR5IHtcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI3BvcHVwX2NvbW1lbnRzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb21tZW50c19ib3gge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jcG9wdXBfYWRkX2NvbW1lbnRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZF9jb21tZW50X2Zvcm0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5kZXRhaWxfaXRlbSA+IHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuI3BvcHVwX2Nsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXRQb2tlbW9uID0gKCkgPT4gZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8/bGltaXQ9MjAmb2Zmc2V0PTAvJykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmNvbnN0IGFycmF5UG9rZW1vbkxpbmtzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9rZW1vbigpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5yZXN1bHRzKTtcbiAgY29uc3QgdXJsQXJyYXkgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdXJsQXJyYXkucHVzaChlbGVtZW50LnVybCk7XG4gIH0pO1xuICByZXR1cm4gdXJsQXJyYXk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheVBva2Vtb25MaW5rcztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBwb2tlbW9uID0ge1xuICBpZDogMzUsXG4gIG5hbWU6ICdjbGVmYWlyeScsXG4gIGJhc2VfZXhwZXJpZW5jZTogMTEzLFxuICBoZWlnaHQ6IDYsXG4gIGlzX2RlZmF1bHQ6IHRydWUsXG4gIG9yZGVyOiA1NixcbiAgd2VpZ2h0OiA3NSxcbiAgYWJpbGl0aWVzOiBbXG4gICAge1xuICAgICAgaXNfaGlkZGVuOiB0cnVlLFxuICAgICAgc2xvdDogMyxcbiAgICAgIGFiaWxpdHk6IHtcbiAgICAgICAgbmFtZTogJ2ZyaWVuZC1ndWFyZCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvYWJpbGl0eS8xMzIvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgZm9ybXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnY2xlZmFpcnknLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLWZvcm0vMzUvJyxcbiAgICB9LFxuICBdLFxuICBnYW1lX2luZGljZXM6IFtcbiAgICB7XG4gICAgICBnYW1lX2luZGV4OiAzNSxcbiAgICAgIHZlcnNpb246IHtcbiAgICAgICAgbmFtZTogJ3doaXRlLTInLFxuICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3ZlcnNpb24vMjIvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgaGVsZF9pdGVtczogW1xuICAgIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgbmFtZTogJ21vb24tc3RvbmUnLFxuICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0vODEvJyxcbiAgICAgIH0sXG4gICAgICB2ZXJzaW9uX2RldGFpbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJhcml0eTogNSxcbiAgICAgICAgICB2ZXJzaW9uOiB7XG4gICAgICAgICAgICBuYW1lOiAncnVieScsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3ZlcnNpb24vNy8nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGxvY2F0aW9uX2FyZWFfZW5jb3VudGVyczogJy9hcGkvdjIvcG9rZW1vbi8zNS9lbmNvdW50ZXJzJyxcbiAgbW92ZXM6IFtcbiAgICB7XG4gICAgICBtb3ZlOiB7XG4gICAgICAgIG5hbWU6ICdwb3VuZCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbW92ZS8xLycsXG4gICAgICB9LFxuICAgICAgdmVyc2lvbl9ncm91cF9kZXRhaWxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsZXZlbF9sZWFybmVkX2F0OiAxLFxuICAgICAgICAgIHZlcnNpb25fZ3JvdXA6IHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWQtYmx1ZScsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3ZlcnNpb24tZ3JvdXAvMS8nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW92ZV9sZWFybl9tZXRob2Q6IHtcbiAgICAgICAgICAgIG5hbWU6ICdsZXZlbC11cCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL21vdmUtbGVhcm4tbWV0aG9kLzEvJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBzcGVjaWVzOiB7XG4gICAgbmFtZTogJ2NsZWZhaXJ5JyxcbiAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc3BlY2llcy8zNS8nLFxuICB9LFxuICBzcHJpdGVzOiB7XG4gICAgYmFja19kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL2JhY2svMzUucG5nJyxcbiAgICBiYWNrX2ZlbWFsZTogbnVsbCxcbiAgICBiYWNrX3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICBiYWNrX3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzM1LnBuZycsXG4gICAgZnJvbnRfZmVtYWxlOiBudWxsLFxuICAgIGZyb250X3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3NoaW55LzM1LnBuZycsXG4gICAgZnJvbnRfc2hpbnlfZmVtYWxlOiBudWxsLFxuICAgIG90aGVyOiB7XG4gICAgICBkcmVhbV93b3JsZDoge1xuICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL290aGVyL2RyZWFtLXdvcmxkLzM1LnN2ZycsXG4gICAgICAgIGZyb250X2ZlbWFsZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBob21lOiB7XG4gICAgICAgIGZyb250X2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vb3RoZXIvaG9tZS8zNS5wbmcnLFxuICAgICAgICBmcm9udF9mZW1hbGU6IG51bGwsXG4gICAgICAgIGZyb250X3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL290aGVyL2hvbWUvc2hpbnkvMzUucG5nJyxcbiAgICAgICAgZnJvbnRfc2hpbnlfZmVtYWxlOiBudWxsLFxuICAgICAgfSxcbiAgICAgICdvZmZpY2lhbC1hcnR3b3JrJzoge1xuICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL290aGVyL29mZmljaWFsLWFydHdvcmsvMzUucG5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB2ZXJzaW9uczoge1xuICAgICAgJ2dlbmVyYXRpb24taSc6IHtcbiAgICAgICAgJ3JlZC1ibHVlJzoge1xuICAgICAgICAgIGJhY2tfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWkvcmVkLWJsdWUvYmFjay8zNS5wbmcnLFxuICAgICAgICAgIGJhY2tfZ3JheTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWkvcmVkLWJsdWUvYmFjay9ncmF5LzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWkvcmVkLWJsdWUvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9ncmF5OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taS9yZWQtYmx1ZS9ncmF5LzM1LnBuZycsXG4gICAgICAgIH0sXG4gICAgICAgIHllbGxvdzoge1xuICAgICAgICAgIGJhY2tfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWkveWVsbG93L2JhY2svMzUucG5nJyxcbiAgICAgICAgICBiYWNrX2dyYXk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1pL3llbGxvdy9iYWNrL2dyYXkvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taS95ZWxsb3cvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9ncmF5OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taS95ZWxsb3cvZ3JheS8zNS5wbmcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdnZW5lcmF0aW9uLWlpJzoge1xuICAgICAgICBjcnlzdGFsOiB7XG4gICAgICAgICAgYmFja19kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWkvY3J5c3RhbC9iYWNrLzM1LnBuZycsXG4gICAgICAgICAgYmFja19zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpL2NyeXN0YWwvYmFjay9zaGlueS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paS9jcnlzdGFsLzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paS9jcnlzdGFsL3NoaW55LzM1LnBuZycsXG4gICAgICAgIH0sXG4gICAgICAgIGdvbGQ6IHtcbiAgICAgICAgICBiYWNrX2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paS9nb2xkL2JhY2svMzUucG5nJyxcbiAgICAgICAgICBiYWNrX3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWkvZ29sZC9iYWNrL3NoaW55LzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpL2dvbGQvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpL2dvbGQvc2hpbnkvMzUucG5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2lsdmVyOiB7XG4gICAgICAgICAgYmFja19kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWkvc2lsdmVyL2JhY2svMzUucG5nJyxcbiAgICAgICAgICBiYWNrX3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWkvc2lsdmVyL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWkvc2lsdmVyLzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paS9zaWx2ZXIvc2hpbnkvMzUucG5nJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZ2VuZXJhdGlvbi1paWknOiB7XG4gICAgICAgIGVtZXJhbGQ6IHtcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWlpL2VtZXJhbGQvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpaS9lbWVyYWxkL3NoaW55LzM1LnBuZycsXG4gICAgICAgIH0sXG4gICAgICAgICdmaXJlcmVkLWxlYWZncmVlbic6IHtcbiAgICAgICAgICBiYWNrX2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paWkvZmlyZXJlZC1sZWFmZ3JlZW4vYmFjay8zNS5wbmcnLFxuICAgICAgICAgIGJhY2tfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paWkvZmlyZXJlZC1sZWFmZ3JlZW4vYmFjay9zaGlueS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paWkvZmlyZXJlZC1sZWFmZ3JlZW4vMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpaS9maXJlcmVkLWxlYWZncmVlbi9zaGlueS8zNS5wbmcnLFxuICAgICAgICB9LFxuICAgICAgICAncnVieS1zYXBwaGlyZSc6IHtcbiAgICAgICAgICBiYWNrX2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1paWkvcnVieS1zYXBwaGlyZS9iYWNrLzM1LnBuZycsXG4gICAgICAgICAgYmFja19zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpaS9ydWJ5LXNhcHBoaXJlL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taWlpL3J1Ynktc2FwcGhpcmUvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWlpaS9ydWJ5LXNhcHBoaXJlL3NoaW55LzM1LnBuZycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ2dlbmVyYXRpb24taXYnOiB7XG4gICAgICAgICdkaWFtb25kLXBlYXJsJzoge1xuICAgICAgICAgIGJhY2tfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWl2L2RpYW1vbmQtcGVhcmwvYmFjay8zNS5wbmcnLFxuICAgICAgICAgIGJhY2tfZmVtYWxlOiBudWxsLFxuICAgICAgICAgIGJhY2tfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1pdi9kaWFtb25kLXBlYXJsL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBiYWNrX3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taXYvZGlhbW9uZC1wZWFybC8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWl2L2RpYW1vbmQtcGVhcmwvc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9zaGlueV9mZW1hbGU6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgICdoZWFydGdvbGQtc291bHNpbHZlcic6IHtcbiAgICAgICAgICBiYWNrX2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1pdi9oZWFydGdvbGQtc291bHNpbHZlci9iYWNrLzM1LnBuZycsXG4gICAgICAgICAgYmFja19mZW1hbGU6IG51bGwsXG4gICAgICAgICAgYmFja19zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWl2L2hlYXJ0Z29sZC1zb3Vsc2lsdmVyL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBiYWNrX3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taXYvaGVhcnRnb2xkLXNvdWxzaWx2ZXIvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9mZW1hbGU6IG51bGwsXG4gICAgICAgICAgZnJvbnRfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1pdi9oZWFydGdvbGQtc291bHNpbHZlci9zaGlueS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhdGludW06IHtcbiAgICAgICAgICBiYWNrX2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1pdi9wbGF0aW51bS9iYWNrLzM1LnBuZycsXG4gICAgICAgICAgYmFja19mZW1hbGU6IG51bGwsXG4gICAgICAgICAgYmFja19zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLWl2L3BsYXRpbnVtL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBiYWNrX3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24taXYvcGxhdGludW0vMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9mZW1hbGU6IG51bGwsXG4gICAgICAgICAgZnJvbnRfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi1pdi9wbGF0aW51bS9zaGlueS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZ2VuZXJhdGlvbi12Jzoge1xuICAgICAgICAnYmxhY2std2hpdGUnOiB7XG4gICAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICAgIGJhY2tfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXYvYmxhY2std2hpdGUvYW5pbWF0ZWQvYmFjay8zNS5naWYnLFxuICAgICAgICAgICAgYmFja19mZW1hbGU6IG51bGwsXG4gICAgICAgICAgICBiYWNrX3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdi9ibGFjay13aGl0ZS9hbmltYXRlZC9iYWNrL3NoaW55LzM1LmdpZicsXG4gICAgICAgICAgICBiYWNrX3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICAgIGZyb250X2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi12L2JsYWNrLXdoaXRlL2FuaW1hdGVkLzM1LmdpZicsXG4gICAgICAgICAgICBmcm9udF9mZW1hbGU6IG51bGwsXG4gICAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXYvYmxhY2std2hpdGUvYW5pbWF0ZWQvc2hpbnkvMzUuZ2lmJyxcbiAgICAgICAgICAgIGZyb250X3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhY2tfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXYvYmxhY2std2hpdGUvYmFjay8zNS5wbmcnLFxuICAgICAgICAgIGJhY2tfZmVtYWxlOiBudWxsLFxuICAgICAgICAgIGJhY2tfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi12L2JsYWNrLXdoaXRlL2JhY2svc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBiYWNrX3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdi9ibGFjay13aGl0ZS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXYvYmxhY2std2hpdGUvc2hpbnkvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9zaGlueV9mZW1hbGU6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ2dlbmVyYXRpb24tdmknOiB7XG4gICAgICAgICdvbWVnYXJ1YnktYWxwaGFzYXBwaGlyZSc6IHtcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdmkvb21lZ2FydWJ5LWFscGhhc2FwcGhpcmUvMzUucG5nJyxcbiAgICAgICAgICBmcm9udF9mZW1hbGU6IG51bGwsXG4gICAgICAgICAgZnJvbnRfc2hpbnk6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi12aS9vbWVnYXJ1YnktYWxwaGFzYXBwaGlyZS9zaGlueS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgJ3gteSc6IHtcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdmkveC15LzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfZmVtYWxlOiBudWxsLFxuICAgICAgICAgIGZyb250X3NoaW55OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdmkveC15L3NoaW55LzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfc2hpbnlfZmVtYWxlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdnZW5lcmF0aW9uLXZpaSc6IHtcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICBmcm9udF9kZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdmlpL2ljb25zLzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfZmVtYWxlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAndWx0cmEtc3VuLXVsdHJhLW1vb24nOiB7XG4gICAgICAgICAgZnJvbnRfZGVmYXVsdDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXZpaS91bHRyYS1zdW4tdWx0cmEtbW9vbi8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgICBmcm9udF9zaGlueTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXZpaS91bHRyYS1zdW4tdWx0cmEtbW9vbi9zaGlueS8zNS5wbmcnLFxuICAgICAgICAgIGZyb250X3NoaW55X2ZlbWFsZTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZ2VuZXJhdGlvbi12aWlpJzoge1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIGZyb250X2RlZmF1bHQ6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi12aWlpL2ljb25zLzM1LnBuZycsXG4gICAgICAgICAgZnJvbnRfZmVtYWxlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzdGF0czogW1xuICAgIHtcbiAgICAgIGJhc2Vfc3RhdDogMzUsXG4gICAgICBlZmZvcnQ6IDAsXG4gICAgICBzdGF0OiB7XG4gICAgICAgIG5hbWU6ICdzcGVlZCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvc3RhdC82LycsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIHR5cGVzOiBbXG4gICAge1xuICAgICAgc2xvdDogMSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgbmFtZTogJ2ZhaXJ5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi90eXBlLzE4LycsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIHBhc3RfdHlwZXM6IFtcbiAgICB7XG4gICAgICBnZW5lcmF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdnZW5lcmF0aW9uLXYnLFxuICAgICAgICB1cmw6ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2dlbmVyYXRpb24vNS8nLFxuICAgICAgfSxcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzbG90OiAxLFxuICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIG5hbWU6ICdub3JtYWwnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi90eXBlLzEvJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IHsgcG9rZW1vbiB9OyIsImNvbnN0IGludm9sdmVtZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzJWb3lsUk1qR1hZcVpaTWx0OTFhJztcblxuY29uc3QgZ2V0TGlrZXMgPSAoKSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudEFQSX0vbGlrZXNgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuY29uc3Qgc3VibWl0TGlrZXMgPSAobmV3TGlrZSkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEl9L2xpa2VzYCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TGlrZSksXG4gIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxufSk7XG5cbmNvbnN0IHJlbmRlckxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlcywgc3VibWl0TGlrZXMsIHJlbmRlckxpa2VzIH07XG4iLCIvLyBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJywge1xuLy8gICBtZXRob2Q6ICdQT1NUJyxcbi8vIH0pXG4vLyAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnU3VjY2VzczonLCByZXNwb25zZSkpO1xuXG5jb25zdCBhcHBJZCA9ICcyVm95bFJNakdYWXFaWk1sdDkxYSc7XG5jb25zdCBpbnZvbHZlbWVudEFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfWA7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gKHBva2Vtb05hbWUpID0+IGZldGNoKGAke2ludm9sdmVtZW50QVBJfS9jb21tZW50cz9pdGVtX2lkPSR7cG9rZW1vTmFtZX1gKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKTtcblxuY29uc3Qgc3VibWl0Q29tbWVudCA9IChuZXdDb21tZW50KSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudEFQSX0vY29tbWVudHNgLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb21tZW50KSxcbiAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG59KTtcblxuY29uc3QgZmlsbFBvcFVwID0gKHNlbGVjdGVkUG9rZW1vbikgPT4ge1xuICBjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX3BpY3R1cmUnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cF90aXRsZScpO1xuICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvcGVydHlfaGVpZ2h0Jyk7XG4gIGNvbnN0IHdlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9wZXJ0eV93ZWlnaHQnKTtcbiAgY29uc3QgYmFzZVhwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3BlcnR5X2Jhc2VYcCcpO1xuICBwaWN0dXJlLnNyYyA9IHNlbGVjdGVkUG9rZW1vbi5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHQ7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFBva2Vtb24ubmFtZTtcbiAgaGVpZ2h0LnRleHRDb250ZW50ID0gc2VsZWN0ZWRQb2tlbW9uLmhlaWdodDtcbiAgd2VpZ2h0LnRleHRDb250ZW50ID0gc2VsZWN0ZWRQb2tlbW9uLndlaWdodDtcbiAgYmFzZVhwLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQb2tlbW9uLmJhc2VfZXhwZXJpZW5jZTtcbn07XG5cbmV4cG9ydCB7IGZpbGxQb3BVcCwgc3VibWl0Q29tbWVudCwgZ2V0Q29tbWVudHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBJTVBPUlRTXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhcnJheVBva2Vtb25MaW5rcyBmcm9tICcuL2FwaUZ1bmN0aW9ucy5qcyc7XG5pbXBvcnQgeyBmaWxsUG9wVXAsIHN1Ym1pdENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9wb3B1cC5qcyc7XG5pbXBvcnQgeyBwb2tlbW9uIH0gZnJvbSAnLi9mYWtlX3Bva2Vtb24uanMnO1xuaW1wb3J0IHsgc3VibWl0TGlrZXMsIHJlbmRlckxpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5cbi8vIEVMRU1FTlRTXG5jb25zdCBwb3BVcFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50c19wb3B1cCcpO1xuY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlbW9uLWNvbnRhaW5lcicpO1xuY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkX2NvbW1lbnRfZm9ybScpO1xuY29uc3QgdXNlckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyk7XG5jb25zdCBjb21tZW50RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpO1xuY29uc3QgY29tbWVudFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzX3RhYmxlJyk7XG5jb25zdCBjbG9zZVBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX2Nsb3NlJyk7XG5cbi8vIEZVTkNUSU9OU1xuY29uc3QgY2FwaXRhbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IChjb21tZW50T2JqZWN0KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCBjb21tZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IGNvbW1lbnRVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgY29tbWVudENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb21tZW50RGF0ZS50ZXh0Q29udGVudCA9IGNvbW1lbnRPYmplY3QuY3JlYXRpb25fZGF0ZTtcbiAgY29tbWVudFVzZXIudGV4dENvbnRlbnQgPSBjb21tZW50T2JqZWN0LnVzZXJuYW1lO1xuICBjb21tZW50Q29udGVudC50ZXh0Q29udGVudCA9IGNvbW1lbnRPYmplY3QuY29tbWVudDtcbiAgY29tbWVudFJvdy5hcHBlbmQoY29tbWVudERhdGUsIGNvbW1lbnRVc2VyLCBjb21tZW50Q29udGVudCk7XG4gIGNvbW1lbnRUYWJsZS5hcHBlbmRDaGlsZChjb21tZW50Um93KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpID0gKG5hbWUsIGltYWdlLCBwb2tlbW9uSW5mbywgbGlrZXNBcnJheSkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBva2Vtb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBwb2tlbW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGlrZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBva2Vtb25MaWtlcyA9IGxpa2VzQXJyYXkuZmlsdGVyKChvYmplY3QpID0+IG9iamVjdC5pdGVtX2lkID09PSBuYW1lKTtcbiAgcG9rZW1vbk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwb2tlbW9uSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGlmIChwb2tlbW9uTGlrZXMubGVuZ3RoID09PSAwKSB7XG4gICAgbGlrZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMaWtlJztcbiAgfSBlbHNlIHtcbiAgICBsaWtlQnV0dG9uLnRleHRDb250ZW50ID0gYExpa2UgJHtwb2tlbW9uTGlrZXNbMF0ubGlrZXN9YDtcbiAgfVxuICBjb21tZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnQnO1xuICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcFVwV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHBvcFVwV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBmaWxsUG9wVXAocG9rZW1vbkluZm8pO1xuICAgIGdldENvbW1lbnRzKHBva2Vtb25JbmZvLm5hbWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoSlNPTi5wYXJzZShyZXNwb25zZSkuZXJyb3IpIHJldHVybjtcbiAgICAgIEpTT04ucGFyc2UocmVzcG9uc2UpLmZvckVhY2goKGVsZW1lbnQpID0+IGNyZWF0ZUNvbW1lbnQoZWxlbWVudCkpO1xuICAgIH0pO1xuICB9KTtcbiAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBsaWtlT2JqZWN0ID0ge1xuICAgICAgaXRlbV9pZDogbmFtZSxcbiAgICB9O1xuICAgIHN1Ym1pdExpa2VzKGxpa2VPYmplY3QpLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgfSk7XG4gIGltYWdlRGl2LmFwcGVuZENoaWxkKHBva2Vtb25JbWFnZSk7XG4gIGxpLmFwcGVuZENoaWxkKGltYWdlRGl2KTtcbiAgbGkuYXBwZW5kQ2hpbGQocG9rZW1vbk5hbWUpO1xuICBsaS5hcHBlbmRDaGlsZChsaWtlQnV0dG9uKTtcbiAgbGkuYXBwZW5kQ2hpbGQoY29tbWVudEJ1dHRvbik7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGdldFBva2Vtb25JbmZvID0gYXN5bmMgKGxpa2VzKSA9PiB7XG4gIGNvbnN0IGFycmF5ID0gYXdhaXQgYXJyYXlQb2tlbW9uTGlua3MoKTtcbiAgY29uc3QgcG9rZW1vbkFycmF5ID0gW107XG4gIGFycmF5LmZvckVhY2goYXN5bmMgKHVybCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIHBva2Vtb25BcnJheS5wdXNoKGRhdGEpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVMaShjYXBpdGFsaXplU3RyaW5nKGRhdGEubmFtZSksIGRhdGEuc3ByaXRlcy5mcm9udF9zaGlueSwgZGF0YSwgbGlrZXMpO1xuICAgIHBva2Vtb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuICByZXR1cm4gcG9rZW1vbkFycmF5O1xufTtcbi8vIEVWRU5UIExJU1RFTkVSU1xuY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGNvbW1lbnRJdGVtID0ge1xuICAgIGl0ZW1faWQ6IHBva2Vtb24ubmFtZSxcbiAgICB1c2VybmFtZTogdXNlckZpZWxkLnZhbHVlLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnRGaWVsZC52YWx1ZSxcbiAgfTtcbiAgc3VibWl0Q29tbWVudChjb21tZW50SXRlbSk7XG59KTtcblxuY2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBwb3BVcFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY29tbWVudFRhYmxlLmlubmVySFRNTCA9ICcnO1xufSk7XG4vLyBDQUxMIEZVTkNUSU9OU1xucmVuZGVyTGlrZXMoKS50aGVuKChyZXNwb25zZSkgPT4gZ2V0UG9rZW1vbkluZm8ocmVzcG9uc2UpKTtcblxuLy8gZ2V0UG9rZW1vbkluZm8oKTtcblxuLy8gRVhQT1JUU1xuZXhwb3J0IHsgY3JlYXRlTGksIGNhcGl0YWxpemVTdHJpbmcsIHBva2Vtb25Db250YWluZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==