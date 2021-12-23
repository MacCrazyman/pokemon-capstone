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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n  --border-button-green: #097054;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n  font-family: 'Lato', sans-serif;\n}\n\nbody {\n  padding-top: 120px;\n  padding-bottom: 43px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\n#navbar {\n  justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n#navbar-ul {\n  gap: 20px;\n  padding-right: 60px;\n}\n\n.navbar-links {\n  color: var(--secondary-blue);\n}\n\n.navbar-links:hover {\n  font-size: 18px;\n  transition: font-size 0.3s;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 2%;\n  align-items: center;\n  justify-items: center;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\n#pokemons-counter {\n  display: flex;\n}\n\n#homepage-counter {\n  padding-left: 10px;\n  font-size: 15px;\n  align-self: center;\n}\n\n.pokemon-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 5px solid var(--secondary-blue);\n  border-radius: 10px;\n  background-color: rgba(0, 117, 190, 0.4);\n  width: 230px;\n  margin: 10px;\n  padding: 15px;\n}\n\n.pokemon-image {\n  width: 100%;\n}\n\nbutton {\n  width: 90px;\n  height: 25px;\n  border: 1px solid var(--border-button-green);\n  border-radius: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n  border: 2px solid var(--border-button-green);\n}\n\nbutton:active {\n  border: 2px solid #000;\n}\n\n.pokemon-name {\n  margin-bottom: 5px;\n}\n\n.button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.like-button {\n  margin-bottom: 8px;\n  background-color: var(--primary-yellow);\n  color: #000;\n}\n\n.like-button:hover {\n  border: 2px solid var(--border-button-green);\n}\n\n.comment-button {\n  background-color: var(--primary-blue);\n  color: #fff;\n}\n\n#submit-comment {\n  padding: 0.5rem;\n  font-weight: bold;\n  width: fit-content;\n  height: auto;\n}\n\n.comment-button:hover {\n  border: 2px solid var(--primary-red);\n}\n\n/* Styling for the POP UP Window */\n\n#comments-popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  height: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup-container {\n  background: var(--primary-yellow);\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n  gap: 0.5em;\n}\n\n#popup-picture-container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup-picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  margin: 0.5rem;\n}\n\n#popup-close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup-details {\n  background: white;\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail-item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail-property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup-comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments-box {\n  background: white;\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#comments-table {\n  width: 100%;\n}\n\ntr:nth-last-child(even) {\n  background: lightblue;\n}\n\n#comments-table tr {\n  display: flex;\n  gap: 1rem;\n  width: 100%;\n}\n\ntd {\n  flex: 1 1;\n  text-align: left;\n}\n\ntd:last-child {\n  flex-grow: 2;\n}\n\n#popup-add-comments {\n  text-align: center;\n}\n\n#popup-add-comments h3 {\n  margin-bottom: 1rem;\n}\n\nlabel {\n  font-weight: bold;\n}\n\n#add-comment-form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  resize: none;\n}\n\ntextarea::-webkit-resizer {\n  display: none;\n}\n\n.form-input:focus-visible {\n  background: var(--footer-blue);\n  outline: 3px dashed  red;\n}\n\n.form-input:focus-visible::placeholder {\n  color: #000;\n}\n\n.detail-item > span {\n  margin-left: 5px;\n}\n\n#popup-close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.show {\n  transform: translate(-100%);\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-blue: #0075be;\n  --secondary-blue: #0a285f;\n  --primary-red: #fb1b1b;\n  --primary-yellow: #fc0;\n  --footer-blue: #30a7d7;\n  --border-button-green: #097054;\n}\n\n* {\n  list-style-type: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding-inline-start: 0;\n  font-family: 'Lato', sans-serif;\n}\n\nbody {\n  padding-top: 120px;\n  padding-bottom: 43px;\n}\n\nheader {\n  background-color: var(--primary-red);\n  padding: 1rem;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\nnav {\n  align-items: center;\n}\n\n#navbar {\n  justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n#navbar-ul {\n  gap: 20px;\n  padding-right: 60px;\n}\n\n.navbar-links {\n  color: var(--secondary-blue);\n}\n\n.navbar-links:hover {\n  font-size: 18px;\n  transition: font-size 0.3s;\n}\n\n#header-logo {\n  width: 150px;\n}\n\n#pokemon-logo {\n  width: 100%;\n}\n\n.flex {\n  display: flex;\n}\n\n#pokemon-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 2%;\n  align-items: center;\n  justify-items: center;\n}\n\nfooter {\n  background-color: var(--footer-blue);\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n#footer-logo {\n  width: 40px;\n}\n\n#pokeball-logo {\n  width: 100%;\n  padding: 5px;\n}\n\n#pokemons-counter {\n  display: flex;\n}\n\n#homepage-counter {\n  padding-left: 10px;\n  font-size: 15px;\n  align-self: center;\n}\n\n.pokemon-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 5px solid var(--secondary-blue);\n  border-radius: 10px;\n  background-color: rgba(0, 117, 190, 0.4);\n  width: 230px;\n  margin: 10px;\n  padding: 15px;\n}\n\n.pokemon-image {\n  width: 100%;\n}\n\nbutton {\n  width: 90px;\n  height: 25px;\n  border: 1px solid var(--border-button-green);\n  border-radius: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n  border: 2px solid var(--border-button-green);\n}\n\nbutton:active {\n  border: 2px solid #000;\n}\n\n.pokemon-name {\n  margin-bottom: 5px;\n}\n\n.button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.like-button {\n  margin-bottom: 8px;\n  background-color: var(--primary-yellow);\n  color: #000;\n}\n\n.like-button:hover {\n  border: 2px solid var(--border-button-green);\n}\n\n.comment-button {\n  background-color: var(--primary-blue);\n  color: #fff;\n}\n\n#submit-comment {\n  padding: 0.5rem;\n  font-weight: bold;\n  width: fit-content;\n  height: auto;\n}\n\n.comment-button:hover {\n  border: 2px solid var(--primary-red);\n}\n\n/* Styling for the POP UP Window */\n\n#comments-popup {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  height: 100%;\n  padding: 2em;\n  backdrop-filter: blur(5px);\n  transition:\n    transform 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n}\n\n#popup-container {\n  background: var(--primary-yellow);\n  border: 5px solid var(--secondary-blue);\n  padding: 1em;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-y: auto;\n  height: 90vh;\n  gap: 0.5em;\n}\n\n#popup-picture-container {\n  max-width: 300px;\n  text-align: center;\n}\n\n#popup-picture {\n  width: 100%;\n  box-shadow: 0 0 0 10px var(--secondary-blue);\n  border-radius: 10px;\n  background: url(./img/Pokemon_placeholder.png), var(--footer-blue);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  margin: 0.5rem;\n}\n\n#popup-close {\n  width: 40px;\n  padding: 4px;\n  text-align: center;\n  font-size: 1.5em;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  transition: transform 0.3s ease-in-out;\n}\n\n#popup-details {\n  background: white;\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.detail-item {\n  width: 40%;\n  justify-content: center;\n}\n\n.detail-property {\n  width: 40%;\n  text-align: right;\n}\n\n#popup-comments {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#comments-box {\n  background: white;\n  width: 50%;\n  height: 150px;\n  border: 2px solid var(--secondary-blue);\n  overflow-y: auto;\n}\n\n#comments-table {\n  width: 100%;\n}\n\ntr:nth-last-child(even) {\n  background: lightblue;\n}\n\n#comments-table tr {\n  display: flex;\n  gap: 1rem;\n  width: 100%;\n}\n\ntd {\n  flex: 1 1;\n  text-align: left;\n}\n\ntd:last-child {\n  flex-grow: 2;\n}\n\n#popup-add-comments {\n  text-align: center;\n}\n\n#popup-add-comments h3 {\n  margin-bottom: 1rem;\n}\n\nlabel {\n  font-weight: bold;\n}\n\n#add-comment-form {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  resize: none;\n}\n\ntextarea::-webkit-resizer {\n  display: none;\n}\n\n.form-input:focus-visible {\n  background: var(--footer-blue);\n  outline: 3px dashed  red;\n}\n\n.form-input:focus-visible::placeholder {\n  color: #000;\n}\n\n.detail-item > span {\n  margin-left: 5px;\n}\n\n#popup-close:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.show {\n  transform: translate(-100%);\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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

module.exports = __webpack_require__.p + "519bed8bbf161acf3493.png";

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
      commentsNumber.textContent = ' Be the first one to comment';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdEQUFhO0FBQzNDLHdDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDREQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsK0RBQWU7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQVc7O0FBRVg7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvLi9zcmMvaG9tZXBhZ2VDb3VudGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL2xpa2VzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvUG9rZW1vbl9wbGFjZWhvbGRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYmx1ZTogIzAwNzViZTtcXG4gIC0tc2Vjb25kYXJ5LWJsdWU6ICMwYTI4NWY7XFxuICAtLXByaW1hcnktcmVkOiAjZmIxYjFiO1xcbiAgLS1wcmltYXJ5LXllbGxvdzogI2ZjMDtcXG4gIC0tZm9vdGVyLWJsdWU6ICMzMGE3ZDc7XFxuICAtLWJvcmRlci1idXR0b24tZ3JlZW46ICMwOTcwNTQ7XFxufVxcblxcbioge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNDNweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuI25hdmJhci11bCB7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubmF2YmFyLWxpbmtzIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxufVxcblxcbi5uYXZiYXItbGlua3M6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XFxufVxcblxcbiNoZWFkZXItbG9nbyB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNwb2tlbW9uLWxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwb2tlbW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIG1hcmdpbjogMiU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jcG9rZWJhbGwtbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Bva2Vtb25zLWNvdW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hvbWVwYWdlLWNvdW50ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucG9rZW1vbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTE3LCAxOTAsIDAuNCk7XFxuICB3aWR0aDogMjMwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ucG9rZW1vbi1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJ1dHRvbi1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItYnV0dG9uLWdyZWVuKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4ucG9rZW1vbi1uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5saWtlLWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXllbGxvdyk7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmxpa2UtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1idXR0b24tZ3JlZW4pO1xcbn1cXG5cXG4uY29tbWVudC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXJlZCk7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBQT1AgVVAgV2luZG93ICovXFxuXFxuI2NvbW1lbnRzLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB0cmFuc2l0aW9uOlxcbiAgICB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCxcXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcG9wdXAtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkteWVsbG93KTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbiNwb3B1cC1waWN0dXJlLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtcGljdHVyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHZhcigtLWZvb3Rlci1ibHVlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbiNwb3B1cC1jbG9zZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcHVwLWRldGFpbHMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW0ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLXByb3BlcnR5IHtcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI3BvcHVwLWNvbW1lbnRzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb21tZW50cy1ib3gge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNjb21tZW50cy10YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudHI6bnRoLWxhc3QtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbn1cXG5cXG4jY29tbWVudHMtdGFibGUgdHIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZCB7XFxuICBmbGV4OiAxIDE7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG50ZDpsYXN0LWNoaWxkIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG59XFxuXFxuI3BvcHVwLWFkZC1jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwb3B1cC1hZGQtY29tbWVudHMgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhZGQtY29tbWVudC1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTo6LXdlYmtpdC1yZXNpemVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgb3V0bGluZTogM3B4IGRhc2hlZCAgcmVkO1xcbn1cXG5cXG4uZm9ybS1pbnB1dDpmb2N1cy12aXNpYmxlOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRldGFpbC1pdGVtID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jcG9wdXAtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaG93IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLGtDQUFrQzs7QUFFbEM7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCOzs0QkFFMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQix1RUFBa0U7RUFDbEUsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYmx1ZTogIzAwNzViZTtcXG4gIC0tc2Vjb25kYXJ5LWJsdWU6ICMwYTI4NWY7XFxuICAtLXByaW1hcnktcmVkOiAjZmIxYjFiO1xcbiAgLS1wcmltYXJ5LXllbGxvdzogI2ZjMDtcXG4gIC0tZm9vdGVyLWJsdWU6ICMzMGE3ZDc7XFxuICAtLWJvcmRlci1idXR0b24tZ3JlZW46ICMwOTcwNTQ7XFxufVxcblxcbioge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNDNweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuI25hdmJhci11bCB7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubmF2YmFyLWxpbmtzIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmx1ZSk7XFxufVxcblxcbi5uYXZiYXItbGlua3M6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XFxufVxcblxcbiNoZWFkZXItbG9nbyB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNwb2tlbW9uLWxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwb2tlbW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIG1hcmdpbjogMiU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4jcG9rZWJhbGwtbG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Bva2Vtb25zLWNvdW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hvbWVwYWdlLWNvdW50ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucG9rZW1vbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTE3LCAxOTAsIDAuNCk7XFxuICB3aWR0aDogMjMwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ucG9rZW1vbi1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJ1dHRvbi1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItYnV0dG9uLWdyZWVuKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4ucG9rZW1vbi1uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5saWtlLWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXllbGxvdyk7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmxpa2UtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1idXR0b24tZ3JlZW4pO1xcbn1cXG5cXG4uY29tbWVudC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ibHVlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc3VibWl0LWNvbW1lbnQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXJlZCk7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBQT1AgVVAgV2luZG93ICovXFxuXFxuI2NvbW1lbnRzLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB0cmFuc2l0aW9uOlxcbiAgICB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCxcXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcG9wdXAtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkteWVsbG93KTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbiNwb3B1cC1waWN0dXJlLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtcGljdHVyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggdmFyKC0tc2Vjb25kYXJ5LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltZy9Qb2tlbW9uX3BsYWNlaG9sZGVyLnBuZyksIHZhcigtLWZvb3Rlci1ibHVlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbiNwb3B1cC1jbG9zZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcHVwLWRldGFpbHMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW0ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLXByb3BlcnR5IHtcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI3BvcHVwLWNvbW1lbnRzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb21tZW50cy1ib3gge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ibHVlKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNjb21tZW50cy10YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudHI6bnRoLWxhc3QtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbn1cXG5cXG4jY29tbWVudHMtdGFibGUgdHIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZCB7XFxuICBmbGV4OiAxIDE7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG50ZDpsYXN0LWNoaWxkIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG59XFxuXFxuI3BvcHVwLWFkZC1jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwb3B1cC1hZGQtY29tbWVudHMgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhZGQtY29tbWVudC1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTo6LXdlYmtpdC1yZXNpemVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJsdWUpO1xcbiAgb3V0bGluZTogM3B4IGRhc2hlZCAgcmVkO1xcbn1cXG5cXG4uZm9ybS1pbnB1dDpmb2N1cy12aXNpYmxlOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRldGFpbC1pdGVtID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jcG9wdXAtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaG93IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXRQb2tlbW9uID0gKCkgPT4gZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8/bGltaXQ9MTgmb2Zmc2V0PTAvJykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmNvbnN0IGFycmF5UG9rZW1vbkxpbmtzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9rZW1vbigpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5yZXN1bHRzKTtcbiAgY29uc3QgdXJsQXJyYXkgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdXJsQXJyYXkucHVzaChlbGVtZW50LnVybCk7XG4gIH0pO1xuICByZXR1cm4gdXJsQXJyYXk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheVBva2Vtb25MaW5rcztcbiIsImNvbnN0IGhvbWVwYWdlQ291bnRlciA9IChpdGVtcykgPT4gaXRlbXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZUNvdW50ZXI7XG4iLCJjb25zdCBpbnZvbHZlbWVudEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8yVm95bFJNakdYWXFaWk1sdDkxYSc7XG5cbmNvbnN0IGdldExpa2VzID0gKCkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEl9L2xpa2VzYCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmNvbnN0IHN1Ym1pdExpa2VzID0gKG5ld0xpa2UpID0+IGZldGNoKGAke2ludm9sdmVtZW50QVBJfS9saWtlc2AsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0xpa2UpLFxuICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbn0pO1xuXG5jb25zdCByZW5kZXJMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXMsIHN1Ym1pdExpa2VzLCByZW5kZXJMaWtlcyB9O1xuIiwiY29uc3QgY2FwaXRhbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblxuY29uc3QgYXBwSWQgPSAnMlZveWxSTWpHWFlxWlpNbHQ5MWEnO1xuY29uc3QgaW52b2x2ZW1lbnRBUEkgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH1gO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IChwb2tlbW9OYW1lKSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudEFQSX0vY29tbWVudHM/aXRlbV9pZD0ke3Bva2Vtb05hbWV9YCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSk7XG5cbmNvbnN0IHN1Ym1pdENvbW1lbnQgPSAobmV3Q29tbWVudCkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEl9L2NvbW1lbnRzYCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Q29tbWVudCksXG4gIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxufSk7XG5cbmNvbnN0IGZpbGxQb3BVcCA9IChzZWxlY3RlZFBva2Vtb24pID0+IHtcbiAgY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1waWN0dXJlJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtdGl0bGUnKTtcbiAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3BlcnR5LWhlaWdodCcpO1xuICBjb25zdCB3ZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvcGVydHktd2VpZ2h0Jyk7XG4gIGNvbnN0IGJhc2VYcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9wZXJ0eS1iYXNlWHAnKTtcbiAgcGljdHVyZS5zcmMgPSBzZWxlY3RlZFBva2Vtb24uc3ByaXRlcy5vdGhlci5kcmVhbV93b3JsZC5mcm9udF9kZWZhdWx0O1xuICBuYW1lLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZVN0cmluZyhzZWxlY3RlZFBva2Vtb24ubmFtZSk7XG4gIGhlaWdodC50ZXh0Q29udGVudCA9IHNlbGVjdGVkUG9rZW1vbi5oZWlnaHQ7XG4gIHdlaWdodC50ZXh0Q29udGVudCA9IHNlbGVjdGVkUG9rZW1vbi53ZWlnaHQ7XG4gIGJhc2VYcC50ZXh0Q29udGVudCA9IHNlbGVjdGVkUG9rZW1vbi5iYXNlX2V4cGVyaWVuY2U7XG59O1xuXG5jb25zdCBjb3VudENvbW1lbnRzID0gKGNvbW1lbnRzQXJyYXkpID0+IGNvbW1lbnRzQXJyYXkubGVuZ3RoO1xuXG5leHBvcnQge1xuICBmaWxsUG9wVXAsIHN1Ym1pdENvbW1lbnQsIGdldENvbW1lbnRzLCBjb3VudENvbW1lbnRzLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIElNUE9SVFNcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGFycmF5UG9rZW1vbkxpbmtzIGZyb20gJy4vYXBpRnVuY3Rpb25zLmpzJztcbmltcG9ydCB7XG4gIGZpbGxQb3BVcCwgc3VibWl0Q29tbWVudCwgZ2V0Q29tbWVudHMsIGNvdW50Q29tbWVudHMsXG59IGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IHsgc3VibWl0TGlrZXMsIHJlbmRlckxpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgaG9tZXBhZ2VDb3VudGVyIGZyb20gJy4vaG9tZXBhZ2VDb3VudGVyLmpzJztcblxuLy8gRUxFTUVOVFNcbmNvbnN0IHBvcFVwV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLXBvcHVwJyk7XG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bva2Vtb24tY29udGFpbmVyJyk7XG5jb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY29tbWVudC1mb3JtJyk7XG5jb25zdCB1c2VyRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKTtcbmNvbnN0IGNvbW1lbnRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50Jyk7XG5jb25zdCBjb21tZW50VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtdGFibGUnKTtcbmNvbnN0IGNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtY2xvc2UnKTtcbmNvbnN0IHBva2Vtb25OdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZXBhZ2UtY291bnRlcicpO1xuY29uc3QgY29tbWVudHNOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtbnVtYmVyJyk7XG5cbi8vIEZVTkNUSU9OU1xuY29uc3QgY2FwaXRhbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IChjb21tZW50T2JqZWN0KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCBjb21tZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IGNvbW1lbnRVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgY29tbWVudENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb21tZW50RGF0ZS50ZXh0Q29udGVudCA9IGNvbW1lbnRPYmplY3QuY3JlYXRpb25fZGF0ZTtcbiAgY29tbWVudFVzZXIudGV4dENvbnRlbnQgPSBjb21tZW50T2JqZWN0LnVzZXJuYW1lO1xuICBjb21tZW50Q29udGVudC50ZXh0Q29udGVudCA9IGNvbW1lbnRPYmplY3QuY29tbWVudDtcbiAgY29tbWVudFJvdy5hcHBlbmQoY29tbWVudERhdGUsIGNvbW1lbnRVc2VyLCBjb21tZW50Q29udGVudCk7XG4gIGNvbW1lbnRUYWJsZS5hcHBlbmRDaGlsZChjb21tZW50Um93KTtcbn07XG5cbmNvbnN0IGNsZWFuRm9ybSA9ICgpID0+IHtcbiAgdXNlckZpZWxkLnZhbHVlID0gJyc7XG4gIGNvbW1lbnRGaWVsZC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgY3JlYXRlTGkgPSAobmFtZSwgaW1hZ2UsIHBva2Vtb25JbmZvLCBsaWtlc0FycmF5KSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcG9rZW1vbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHBva2Vtb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGlrZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBva2Vtb25MaWtlcyA9IGxpa2VzQXJyYXkuZmlsdGVyKChvYmplY3QpID0+IG9iamVjdC5pdGVtX2lkID09PSBuYW1lKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgncG9rZW1vbi1jYXJkJyk7XG4gIGltYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24taW1hZ2UtY29udGFpbmVyJyk7XG4gIHBva2Vtb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uLWltYWdlJyk7XG4gIHBva2Vtb25OYW1lLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24tbmFtZScpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2UtYnV0dG9uJyk7XG4gIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idXR0b24nKTtcblxuICAvLyBGVU5DVElPTlMgRk9SIEVWRU5UIExJU1RFTkVSU1xuICBjb25zdCB1cGRhdGVDb21tZW50cyA9ICgpID0+IHtcbiAgICBnZXRDb21tZW50cyhwb2tlbW9uSW5mby5uYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29tbWVudHNOdW1iZXIudGV4dENvbnRlbnQgPSAnIEJlIHRoZSBmaXJzdCBvbmUgdG8gY29tbWVudCc7XG4gICAgICBpZiAoSlNPTi5wYXJzZShyZXNwb25zZSkuZXJyb3IpIHJldHVybjtcbiAgICAgIEpTT04ucGFyc2UocmVzcG9uc2UpLmZvckVhY2goKGVsZW1lbnQpID0+IGNyZWF0ZUNvbW1lbnQoZWxlbWVudCkpO1xuICAgICAgY29uc3QgY29tbWVudHNBbW1vdW50ID0gY291bnRDb21tZW50cyhKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gICAgICBjb21tZW50c051bWJlci50ZXh0Q29udGVudCA9IGAgKCR7Y29tbWVudHNBbW1vdW50fSlgO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBmb3JtRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0ge1xuICAgICAgaXRlbV9pZDogcG9rZW1vbkluZm8ubmFtZSxcbiAgICAgIHVzZXJuYW1lOiB1c2VyRmllbGQudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50RmllbGQudmFsdWUsXG4gICAgfTtcbiAgICBzdWJtaXRDb21tZW50KGNvbW1lbnRJdGVtKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbW1lbnRUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHVwZGF0ZUNvbW1lbnRzKCk7XG4gICAgICBjbGVhbkZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTRVQgUFJPUEVSVElFUyBPRiBFTEVNRU5UU1xuICBwb2tlbW9uTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHBva2Vtb25JbWFnZS5zcmMgPSBpbWFnZTtcbiAgaWYgKHBva2Vtb25MaWtlcy5sZW5ndGggPT09IDApIHtcbiAgICBsaWtlQnV0dG9uLnRleHRDb250ZW50ID0gJ0xpa2UnO1xuICB9IGVsc2Uge1xuICAgIGxpa2VCdXR0b24udGV4dENvbnRlbnQgPSBgTGlrZSAke3Bva2Vtb25MaWtlc1swXS5saWtlc31gO1xuICB9XG4gIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG5cbiAgLy8gRVZFTlQgTElTVEVORVJTXG4gIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIGZpbGxQb3BVcChwb2tlbW9uSW5mbyk7XG4gICAgdXBkYXRlQ29tbWVudHMoKTtcbiAgICBjb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtRXZlbnQpO1xuICB9KTtcbiAgY2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29tbWVudFRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbW1lbnRGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1FdmVudCk7XG4gICAgY2xlYW5Gb3JtKCk7XG4gIH0pO1xuXG4gIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbGlrZU9iamVjdCA9IHtcbiAgICAgIGl0ZW1faWQ6IG5hbWUsXG4gICAgfTtcbiAgICBzdWJtaXRMaWtlcyhsaWtlT2JqZWN0KS50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gIH0pO1xuXG4gIC8vIEFQUEVORCBFTEVNRU5UU1xuICBpbWFnZURpdi5hcHBlbmRDaGlsZChwb2tlbW9uSW1hZ2UpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kKGxpa2VCdXR0b24sIGNvbW1lbnRCdXR0b24pO1xuICBsaS5hcHBlbmRDaGlsZChpbWFnZURpdik7XG4gIGxpLmFwcGVuZENoaWxkKHBva2Vtb25OYW1lKTtcbiAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgZ2V0UG9rZW1vbkluZm8gPSBhc3luYyAobGlrZXMpID0+IHtcbiAgY29uc3QgYXJyYXkgPSBhd2FpdCBhcnJheVBva2Vtb25MaW5rcygpO1xuICBjb25zdCBwb2tlbW9uQXJyYXkgPSBbXTtcbiAgYXJyYXkuZm9yRWFjaChhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcG9rZW1vbkFycmF5LnB1c2goZGF0YSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUxpKGNhcGl0YWxpemVTdHJpbmcoZGF0YS5uYW1lKSxcbiAgICAgIGRhdGEuc3ByaXRlcy5vdGhlci5ob21lLmZyb250X2RlZmF1bHQsIGRhdGEsIGxpa2VzKTtcbiAgICBwb2tlbW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbiAgY29uc3QgcG9rZW1vbnMgPSBob21lcGFnZUNvdW50ZXIoYXJyYXkpO1xuICBwb2tlbW9uTnVtYmVyLnRleHRDb250ZW50ID0gcG9rZW1vbnM7XG4gIHJldHVybiBwb2tlbW9uQXJyYXk7XG59O1xuXG4vLyBDQUxMIEZVTkNUSU9OU1xucmVuZGVyTGlrZXMoKS50aGVuKChyZXNwb25zZSkgPT4gZ2V0UG9rZW1vbkluZm8ocmVzcG9uc2UpKTtcblxuLy8gRVhQT1JUU1xuZXhwb3J0IHtcbiAgY3JlYXRlTGksIGNhcGl0YWxpemVTdHJpbmcsIHBva2Vtb25Db250YWluZXIsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9