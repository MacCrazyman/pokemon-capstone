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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n  --border-button-green: #097054;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n  font-family: 'Lato', sans-serif;\n}\n\nbody {\n  padding-top: 120px;\n  padding-bottom: 43px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\n#navbar {\n  justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n#navbar-ul {\n  gap: 20px;\n  padding-right: 60px;\n}\n\n.navbar-links {\n  color: var(--secondary-blue);\n}\n\n.navbar-links:hover {\n  font-size: 18px;\n  transition: font-size 0.3s;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 2%;\n  align-items: center;\n  justify-items: center;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#pokemons-counter {\n  display: flex;\n}\n\n#homepage-counter {\n  padding-left: 10px;\n  font-size: 15px;\n  align-self: center;\n}\n\n.pokemon-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 5px solid var(--secondary-blue);\n  border-radius: 10px;\n  background-color: rgba(0, 117, 190, 0.4);\n  width: 230px;\n  margin: 10px;\n  padding: 15px;\n}\n\n.pokemon-image {\n  width: 100%;\n}\n\nbutton {\n  width: 90px;\n  height: 25px;\n  border: 1px solid var(--border-button-green);\n  border-radius: 5px;\n}\n\n\nbutton:active {\n  border: 2px solid #000;\n}\n\n.pokemon-name {\n  margin-bottom: 5px;\n}\n\n.button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.like-button {\n  margin-bottom: 8px;\n  background-color: var(--primary-yellow);\n  color: #000;\n}\n\n.like-button:hover {\n  border: 2px solid var(--border-button-green);\n}\n\n.comment-button {\n  background-color: var(--primary-blue);\n  color: #fff;\n}\n\n.comment-button:hover {\n  border: 2px solid var(--primary-red);\n}\n\n/* Styling for the POP UP Window */\n\n#comments-popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup-container {\n  background: white;\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n}\n\n#popup-picture-container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup-picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#popup-close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup-details {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail-item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail-property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup-comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments-box {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#popup-add-comments {\n  text-align: center;\n}\n\n#add-comment-form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\n.detail-item > span {\n  margin-left: 5px;\n}\n\n#popup-close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  transform: translate(100%);\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,SAAS;EACT,uBAAuB;EACvB,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;AACT;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;;AAGA;EACE,aAAa;EACb,kCAAkC;EAClC,UAAU;EACV,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,OAAO;EACP,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,uCAAuC;EACvC,mBAAmB;EACnB,wCAAwC;EACxC,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,kBAAkB;AACpB;;;AAGA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,WAAW;AACb;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,qCAAqC;EACrC,WAAW;AACb;;AAEA;EACE,oCAAoC;AACtC;;AAEA,kCAAkC;;AAElC;EACE,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B;;4BAE0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;EACvC,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,mBAAmB;EACnB,uEAAkE;EAClE,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uCAAuC;EACvC,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":[":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n  --border-button-green: #097054;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n  font-family: 'Lato', sans-serif;\n}\n\nbody {\n  padding-top: 120px;\n  padding-bottom: 43px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\n#navbar {\n  justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n#navbar-ul {\n  gap: 20px;\n  padding-right: 60px;\n}\n\n.navbar-links {\n  color: var(--secondary-blue);\n}\n\n.navbar-links:hover {\n  font-size: 18px;\n  transition: font-size 0.3s;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 2%;\n  align-items: center;\n  justify-items: center;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#pokemons-counter {\n  display: flex;\n}\n\n#homepage-counter {\n  padding-left: 10px;\n  font-size: 15px;\n  align-self: center;\n}\n\n.pokemon-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 5px solid var(--secondary-blue);\n  border-radius: 10px;\n  background-color: rgba(0, 117, 190, 0.4);\n  width: 230px;\n  margin: 10px;\n  padding: 15px;\n}\n\n.pokemon-image {\n  width: 100%;\n}\n\nbutton {\n  width: 90px;\n  height: 25px;\n  border: 1px solid var(--border-button-green);\n  border-radius: 5px;\n}\n\n\nbutton:active {\n  border: 2px solid #000;\n}\n\n.pokemon-name {\n  margin-bottom: 5px;\n}\n\n.button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.like-button {\n  margin-bottom: 8px;\n  background-color: var(--primary-yellow);\n  color: #000;\n}\n\n.like-button:hover {\n  border: 2px solid var(--border-button-green);\n}\n\n.comment-button {\n  background-color: var(--primary-blue);\n  color: #fff;\n}\n\n.comment-button:hover {\n  border: 2px solid var(--primary-red);\n}\n\n/* Styling for the POP UP Window */\n\n#comments-popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup-container {\n  background: white;\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n}\n\n#popup-picture-container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup-picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(./img/Pokemon_placeholder.png), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#popup-close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup-details {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail-item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail-property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup-comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments-box {\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#popup-add-comments {\n  text-align: center;\n}\n\n#add-comment-form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\n.detail-item > span {\n  margin-left: 5px;\n}\n\n#popup-close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  transform: translate(100%);\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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
const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=18&offset=0/').then((response) => response.json());

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
const homepageCounter = (items) => items.length;

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
const commentsNumber = document.querySelector('#comments-number');

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
  const buttonContainer = document.createElement('div');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  const pokemonLikes = likesArray.filter((object) => object.item_id === name);
  li.classList.add('pokemon-card');
  imageDiv.classList.add('pokemon-image-container');
  pokemonImage.classList.add('pokemon-image');
  pokemonName.classList.add('pokemon-name');
  buttonContainer.classList.add('button-container');
  likeButton.classList.add('like-button');
  commentButton.classList.add('comment-button');

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

  likeButton.addEventListener('click', () => {
    const likeObject = {
      item_id: name,
    };
    (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.submitLikes)(likeObject).then(() => window.location.reload());
  });

  // APPEND ELEMENTS
  imageDiv.appendChild(pokemonImage);
  buttonContainer.append(likeButton, commentButton);
  li.appendChild(imageDiv);
  li.appendChild(pokemonName);
  li.appendChild(buttonContainer);
  return li;
};

const getPokemonInfo = async (likes) => {
  const array = await (0,_apiFunctions_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const pokemonArray = [];
  array.forEach(async (url) => {
    const data = await fetch(url).then((response) => response.json());
    pokemonArray.push(data);
    const element = createLi(capitalizeString(data.name),
      data.sprites.other.home.front_default, data, likes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QUFDeEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDREQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsK0RBQWU7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQVc7O0FBRVg7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvaG9tZXBhZ2VDb3VudGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL2xpa2VzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvUG9rZW1vbl9wbGFjZWhvbGRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYmx1ZTogIzAwNzViZTtcXG4gIC0tc2Vjb25kYXJ5LWJsdWU6ICMwYTI4NWY7XFxuICAtLXByaW1hcnktcmVkOiAjZmIxYjFiO1xcbiAgLS1wcmltYXJ5LXllbGxvdzogI2ZjMDtcXG4gIC0tZm9vdGVyLWJsdWU6ICMzMGE3ZDc7XFxuICAtLWJvcmRlci1idXR0b24tZ3JlZW46ICMwOTcwNTQ7XFxufVxcblxcbioge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNDNweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuI25hdmJhci11bCB7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubmF2YmFyLWxpbmtzIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxufVxcblxcbi5uYXZiYXItbGlua3M6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XFxufVxcblxcbiNoZWFkZXItbG9nbyB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNwb2tlbW9uLWxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiNwb2tlbW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIG1hcmdpbjogMiU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jcG9rZWJhbGwtbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Bva2Vtb25zLWNvdW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hvbWVwYWdlLWNvdW50ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucG9rZW1vbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTE3LCAxOTAsIDAuNCk7XFxuICB3aWR0aDogMjMwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ucG9rZW1vbi1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJ1dHRvbi1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuLnBva2Vtb24tbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ubGlrZS1idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS15ZWxsb3cpO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5saWtlLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItYnV0dG9uLWdyZWVuKTtcXG59XFxuXFxuLmNvbW1lbnQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmx1ZSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktcmVkKTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIFBPUCBVUCBXaW5kb3cgKi9cXG5cXG4jY29tbWVudHMtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHRyYW5zaXRpb246XFxuICAgIHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LFxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwb3B1cC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiNwb3B1cC1waWN0dXJlLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtcGljdHVyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHZhcigtLWZvb3Rlci1ibHVlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jcG9wdXAtY2xvc2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICByaWdodDogMWVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwb3B1cC1kZXRhaWxzIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWwtaXRlbSB7XFxuICB3aWR0aDogNDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWwtcHJvcGVydHkge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jcG9wdXAtY29tbWVudHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbW1lbnRzLWJveCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNwb3B1cC1hZGQtY29tbWVudHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWNvbW1lbnQtZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbC1pdGVtID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jcG9wdXAtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsV0FBVztBQUNiOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxrQ0FBa0M7O0FBRWxDO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCOzs0QkFFMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLHVFQUFrRTtFQUNsRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1ibHVlOiAjMDA3NWJlO1xcbiAgLS1zZWNvbmRhcnktYmx1ZTogIzBhMjg1ZjtcXG4gIC0tcHJpbWFyeS1yZWQ6ICNmYjFiMWI7XFxuICAtLXByaW1hcnkteWVsbG93OiAjZmMwO1xcbiAgLS1mb290ZXItYmx1ZTogIzMwYTdkNztcXG4gIC0tYm9yZGVyLWJ1dHRvbi1ncmVlbjogIzA5NzA1NDtcXG59XFxuXFxuKiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxubmF2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXZiYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4jbmF2YmFyLXVsIHtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxufVxcblxcbi5uYXZiYXItbGlua3Mge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG59XFxuXFxuLm5hdmJhci1saW5rczpob3ZlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcztcXG59XFxuXFxuI2hlYWRlci1sb2dvIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Bva2Vtb24tbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3Bva2Vtb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgbWFyZ2luOiAyJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmx1ZSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZm9vdGVyLWxvZ28ge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbiNwb2tlYmFsbC1sb2dvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcG9rZW1vbnMtY291bnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaG9tZXBhZ2UtY291bnRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wb2tlbW9uLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTcsIDE5MCwgMC40KTtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5wb2tlbW9uLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItYnV0dG9uLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4ucG9rZW1vbi1uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5saWtlLWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXllbGxvdyk7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmxpa2UtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1idXR0b24tZ3JlZW4pO1xcbn1cXG5cXG4uY29tbWVudC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29tbWVudC1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1yZWQpO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgUE9QIFVQIFdpbmRvdyAqL1xcblxcbiNjb21tZW50cy1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQsXFxuICAgIG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcHVwLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxuI3BvcHVwLXBpY3R1cmUtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwb3B1cC1waWN0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTBweCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1nL1Bva2Vtb25fcGxhY2Vob2xkZXIucG5nKSwgdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNwb3B1cC1jbG9zZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcHVwLWRldGFpbHMge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbC1pdGVtIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbC1wcm9wZXJ0eSB7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNwb3B1cC1jb21tZW50cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29tbWVudHMtYm94IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3BvcHVwLWFkZC1jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtY29tbWVudC1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW0gPiBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbiNwb3B1cC1jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2V0UG9rZW1vbiA9ICgpID0+IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vP2xpbWl0PTE4Jm9mZnNldD0wLycpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5jb25zdCBhcnJheVBva2Vtb25MaW5rcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBva2Vtb24oKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UucmVzdWx0cyk7XG4gIGNvbnN0IHVybEFycmF5ID0gW107XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHVybEFycmF5LnB1c2goZWxlbWVudC51cmwpO1xuICB9KTtcbiAgcmV0dXJuIHVybEFycmF5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlQb2tlbW9uTGlua3M7XG4iLCJjb25zdCBob21lcGFnZUNvdW50ZXIgPSAoaXRlbXMpID0+IGl0ZW1zLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2VDb3VudGVyO1xuIiwiY29uc3QgaW52b2x2ZW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMlZveWxSTWpHWFlxWlpNbHQ5MWEnO1xuXG5jb25zdCBnZXRMaWtlcyA9ICgpID0+IGZldGNoKGAke2ludm9sdmVtZW50QVBJfS9saWtlc2ApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5jb25zdCBzdWJtaXRMaWtlcyA9IChuZXdMaWtlKSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudEFQSX0vbGlrZXNgLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdMaWtlKSxcbiAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG59KTtcblxuY29uc3QgcmVuZGVyTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRMaWtlcygpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGdldExpa2VzLCBzdWJtaXRMaWtlcywgcmVuZGVyTGlrZXMgfTtcbiIsImNvbnN0IGNhcGl0YWxpemVTdHJpbmcgPSAoc3RyaW5nKSA9PiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG5cbmNvbnN0IGFwcElkID0gJzJWb3lsUk1qR1hZcVpaTWx0OTFhJztcbmNvbnN0IGludm9sdmVtZW50QVBJID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9YDtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSAocG9rZW1vTmFtZSkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEl9L2NvbW1lbnRzP2l0ZW1faWQ9JHtwb2tlbW9OYW1lfWApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpO1xuXG5jb25zdCBzdWJtaXRDb21tZW50ID0gKG5ld0NvbW1lbnQpID0+IGZldGNoKGAke2ludm9sdmVtZW50QVBJfS9jb21tZW50c2AsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0NvbW1lbnQpLFxuICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbn0pO1xuXG5jb25zdCBmaWxsUG9wVXAgPSAoc2VsZWN0ZWRQb2tlbW9uKSA9PiB7XG4gIGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtcGljdHVyZScpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwLXRpdGxlJyk7XG4gIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9wZXJ0eS1oZWlnaHQnKTtcbiAgY29uc3Qgd2VpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3BlcnR5LXdlaWdodCcpO1xuICBjb25zdCBiYXNlWHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvcGVydHktYmFzZVhwJyk7XG4gIHBpY3R1cmUuc3JjID0gc2VsZWN0ZWRQb2tlbW9uLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdDtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVTdHJpbmcoc2VsZWN0ZWRQb2tlbW9uLm5hbWUpO1xuICBoZWlnaHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZFBva2Vtb24uaGVpZ2h0O1xuICB3ZWlnaHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZFBva2Vtb24ud2VpZ2h0O1xuICBiYXNlWHAudGV4dENvbnRlbnQgPSBzZWxlY3RlZFBva2Vtb24uYmFzZV9leHBlcmllbmNlO1xufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9IChjb21tZW50c0FycmF5KSA9PiBjb21tZW50c0FycmF5Lmxlbmd0aDtcblxuZXhwb3J0IHtcbiAgZmlsbFBvcFVwLCBzdWJtaXRDb21tZW50LCBnZXRDb21tZW50cywgY291bnRDb21tZW50cyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBJTVBPUlRTXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhcnJheVBva2Vtb25MaW5rcyBmcm9tICcuL2FwaUZ1bmN0aW9ucy5qcyc7XG5pbXBvcnQge1xuICBmaWxsUG9wVXAsIHN1Ym1pdENvbW1lbnQsIGdldENvbW1lbnRzLCBjb3VudENvbW1lbnRzLFxufSBmcm9tICcuL3BvcHVwLmpzJztcbmltcG9ydCB7IHN1Ym1pdExpa2VzLCByZW5kZXJMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IGhvbWVwYWdlQ291bnRlciBmcm9tICcuL2hvbWVwYWdlQ291bnRlci5qcyc7XG5cbi8vIEVMRU1FTlRTXG5jb25zdCBwb3BVcFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1wb3B1cCcpO1xuY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlbW9uLWNvbnRhaW5lcicpO1xuY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNvbW1lbnQtZm9ybScpO1xuY29uc3QgdXNlckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyk7XG5jb25zdCBjb21tZW50RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpO1xuY29uc3QgY29tbWVudFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLXRhYmxlJyk7XG5jb25zdCBjbG9zZVBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwLWNsb3NlJyk7XG5jb25zdCBwb2tlbW9uTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlLWNvdW50ZXInKTtcbmNvbnN0IGNvbW1lbnRzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLW51bWJlcicpO1xuXG4vLyBGVU5DVElPTlNcbmNvbnN0IGNhcGl0YWxpemVTdHJpbmcgPSAoc3RyaW5nKSA9PiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSAoY29tbWVudE9iamVjdCkgPT4ge1xuICBjb25zdCBjb21tZW50Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgY29tbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBjb21tZW50VXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29tbWVudERhdGUudGV4dENvbnRlbnQgPSBjb21tZW50T2JqZWN0LmNyZWF0aW9uX2RhdGU7XG4gIGNvbW1lbnRVc2VyLnRleHRDb250ZW50ID0gY29tbWVudE9iamVjdC51c2VybmFtZTtcbiAgY29tbWVudENvbnRlbnQudGV4dENvbnRlbnQgPSBjb21tZW50T2JqZWN0LmNvbW1lbnQ7XG4gIGNvbW1lbnRSb3cuYXBwZW5kKGNvbW1lbnREYXRlLCBjb21tZW50VXNlciwgY29tbWVudENvbnRlbnQpO1xuICBjb21tZW50VGFibGUuYXBwZW5kQ2hpbGQoY29tbWVudFJvdyk7XG59O1xuXG5jb25zdCBjbGVhbkZvcm0gPSAoKSA9PiB7XG4gIHVzZXJGaWVsZC52YWx1ZSA9ICcnO1xuICBjb21tZW50RmllbGQudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IGNyZWF0ZUxpID0gKG5hbWUsIGltYWdlLCBwb2tlbW9uSW5mbywgbGlrZXNBcnJheSkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBva2Vtb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBwb2tlbW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwb2tlbW9uTGlrZXMgPSBsaWtlc0FycmF5LmZpbHRlcigob2JqZWN0KSA9PiBvYmplY3QuaXRlbV9pZCA9PT0gbmFtZSk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24tY2FyZCcpO1xuICBpbWFnZURpdi5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uLWltYWdlLWNvbnRhaW5lcicpO1xuICBwb2tlbW9uSW1hZ2UuY2xhc3NMaXN0LmFkZCgncG9rZW1vbi1pbWFnZScpO1xuICBwb2tlbW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uLW5hbWUnKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKTtcbiAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlLWJ1dHRvbicpO1xuICBjb21tZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYnV0dG9uJyk7XG5cbiAgLy8gRlVOQ1RJT05TIEZPUiBFVkVOVCBMSVNURU5FUlNcbiAgY29uc3QgdXBkYXRlQ29tbWVudHMgPSAoKSA9PiB7XG4gICAgZ2V0Q29tbWVudHMocG9rZW1vbkluZm8ubmFtZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbW1lbnRzTnVtYmVyLnRleHRDb250ZW50ID0gJ0JlIHRoZSBmaXJzdCBvbmUgdG8gY29tbWVudCc7XG4gICAgICBpZiAoSlNPTi5wYXJzZShyZXNwb25zZSkuZXJyb3IpIHJldHVybjtcbiAgICAgIEpTT04ucGFyc2UocmVzcG9uc2UpLmZvckVhY2goKGVsZW1lbnQpID0+IGNyZWF0ZUNvbW1lbnQoZWxlbWVudCkpO1xuICAgICAgY29uc3QgY29tbWVudHNBbW1vdW50ID0gY291bnRDb21tZW50cyhKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gICAgICBjb21tZW50c051bWJlci50ZXh0Q29udGVudCA9IGAgKCR7Y29tbWVudHNBbW1vdW50fSlgO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBmb3JtRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0ge1xuICAgICAgaXRlbV9pZDogcG9rZW1vbkluZm8ubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB1c2VyRmllbGQudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50RmllbGQudmFsdWUsXG4gICAgfTtcbiAgICBzdWJtaXRDb21tZW50KGNvbW1lbnRJdGVtKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbW1lbnRUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHVwZGF0ZUNvbW1lbnRzKCk7XG4gICAgICBjbGVhbkZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTRVQgUFJPUEVSVElFUyBPRiBFTEVNRU5UU1xuICBwb2tlbW9uTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHBva2Vtb25JbWFnZS5zcmMgPSBpbWFnZTtcbiAgaWYgKHBva2Vtb25MaWtlcy5sZW5ndGggPT09IDApIHtcbiAgICBsaWtlQnV0dG9uLnRleHRDb250ZW50ID0gJ0xpa2UnO1xuICB9IGVsc2Uge1xuICAgIGxpa2VCdXR0b24udGV4dENvbnRlbnQgPSBgTGlrZSAke3Bva2Vtb25MaWtlc1swXS5saWtlc31gO1xuICB9XG4gIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG5cbiAgLy8gRVZFTlQgTElTVEVORVJTXG4gIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIGZpbGxQb3BVcChwb2tlbW9uSW5mbyk7XG4gICAgdXBkYXRlQ29tbWVudHMoKTtcbiAgICBjb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtRXZlbnQpO1xuICB9KTtcbiAgY2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29tbWVudFRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbW1lbnRGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1FdmVudCk7XG4gICAgY2xlYW5Gb3JtKCk7XG4gIH0pO1xuXG4gIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbGlrZU9iamVjdCA9IHtcbiAgICAgIGl0ZW1faWQ6IG5hbWUsXG4gICAgfTtcbiAgICBzdWJtaXRMaWtlcyhsaWtlT2JqZWN0KS50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gIH0pO1xuXG4gIC8vIEFQUEVORCBFTEVNRU5UU1xuICBpbWFnZURpdi5hcHBlbmRDaGlsZChwb2tlbW9uSW1hZ2UpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kKGxpa2VCdXR0b24sIGNvbW1lbnRCdXR0b24pO1xuICBsaS5hcHBlbmRDaGlsZChpbWFnZURpdik7XG4gIGxpLmFwcGVuZENoaWxkKHBva2Vtb25OYW1lKTtcbiAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgZ2V0UG9rZW1vbkluZm8gPSBhc3luYyAobGlrZXMpID0+IHtcbiAgY29uc3QgYXJyYXkgPSBhd2FpdCBhcnJheVBva2Vtb25MaW5rcygpO1xuICBjb25zdCBwb2tlbW9uQXJyYXkgPSBbXTtcbiAgYXJyYXkuZm9yRWFjaChhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcG9rZW1vbkFycmF5LnB1c2goZGF0YSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUxpKGNhcGl0YWxpemVTdHJpbmcoZGF0YS5uYW1lKSxcbiAgICAgIGRhdGEuc3ByaXRlcy5vdGhlci5ob21lLmZyb250X2RlZmF1bHQsIGRhdGEsIGxpa2VzKTtcbiAgICBwb2tlbW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbiAgY29uc3QgcG9rZW1vbnMgPSBob21lcGFnZUNvdW50ZXIoYXJyYXkpO1xuICBwb2tlbW9uTnVtYmVyLnRleHRDb250ZW50ID0gcG9rZW1vbnM7XG4gIHJldHVybiBwb2tlbW9uQXJyYXk7XG59O1xuXG4vLyBDQUxMIEZVTkNUSU9OU1xucmVuZGVyTGlrZXMoKS50aGVuKChyZXNwb25zZSkgPT4gZ2V0UG9rZW1vbkluZm8ocmVzcG9uc2UpKTtcblxuLy8gRVhQT1JUU1xuZXhwb3J0IHtcbiAgY3JlYXRlTGksIGNhcGl0YWxpemVTdHJpbmcsIHBva2Vtb25Db250YWluZXIsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9