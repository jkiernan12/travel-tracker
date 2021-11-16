/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "tripRepo": () => (/* binding */ tripRepo),
/* harmony export */   "destinations": () => (/* binding */ destinations),
/* harmony export */   "initClasses": () => (/* binding */ initClasses),
/* harmony export */   "initAgentClasses": () => (/* binding */ initAgentClasses)
/* harmony export */ });
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _render_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _api_calls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _add_trip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _TripRepo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _Destinations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);










micromodal__WEBPACK_IMPORTED_MODULE_9__.default.init();

//Globals
let user, tripRepo, destinations, agent;

function initClasses(allData) {
  const userData = allData[0];
  tripRepo = new _TripRepo__WEBPACK_IMPORTED_MODULE_6__.default(allData[1].trips, allData[2].destinations);
  destinations = new _Destinations__WEBPACK_IMPORTED_MODULE_7__.default(allData[2].destinations);
  user = new _User__WEBPACK_IMPORTED_MODULE_5__.default(userData, tripRepo.getUserTrips(userData.id));
  (0,_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderUserPage)(user);
  (0,_add_trip_js__WEBPACK_IMPORTED_MODULE_3__.initializeForm)();
}

function initAgentClasses(allData) {
  tripRepo = new _TripRepo__WEBPACK_IMPORTED_MODULE_6__.default(allData[1].trips, allData[2].destinations);
  destinations = new _Destinations__WEBPACK_IMPORTED_MODULE_7__.default(allData[2].destinations);
  console.log(allData[0]);
  agent = new _Agent__WEBPACK_IMPORTED_MODULE_8__.default(tripRepo, allData[0].travelers);
  (0,_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderAgentPage)(agent);
}



/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This is an example of how to import a partial scss file*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background: white;\n  color: #2C2A4A;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.menu-item {\n  margin: 15px;\n  transition: 0.1s;\n  padding: 8px;\n}\n.menu-item:hover {\n  color: #595959;\n  cursor: pointer;\n}\n\nh1 {\n  color: #2C2A4A;\n  font-family: \"Pacifico\", serif;\n  font-size: 48px;\n  margin: 10px;\n  text-align: center;\n}\n\nh3 {\n  font-size: 36px;\n  margin: 20px;\n  font-family: \"Pacifico\", serif;\n}\n\n.account-info {\n  color: #2C2A4A;\n  margin: 15px;\n  padding: 25px;\n  border-radius: 6px;\n  border: 2px solid #2C2A4A;\n}\n.account-info h2 {\n  text-decoration: underline;\n}\n.account-info p, .account-info a {\n  font-size: 14px;\n}\n.account-info p {\n  line-height: 18px;\n  margin: 15px 0;\n}\n.account-info a {\n  cursor: pointer;\n  color: white;\n  border-radius: 15px;\n  background-color: #2C2A4A;\n  padding: 4px 10px;\n}\n\n.new-trip-form-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.new-trip-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  max-width: 850px;\n}\n.new-trip-form label {\n  text-align: left;\n  font-size: 14px;\n  color: #595959;\n  margin-left: 4px;\n}\n.new-trip-form p {\n  text-align: left;\n  color: #2C2A4A;\n  font-size: 14px;\n}\n.new-trip-form .cost {\n  margin-right: 10px;\n}\n.new-trip-form input, .new-trip-form select {\n  margin: 4px;\n  border-radius: 6px;\n  border: 1px solid #595959;\n}\n.new-trip-form button {\n  color: white;\n  background-color: #2C2A4A;\n  border: none;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n\nsection h3 {\n  text-align: center;\n}\nsection div {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 33%));\n}\nsection div img {\n  width: 100%;\n}\nsection div h4 {\n  text-align: center;\n}\nsection div article {\n  font-family: \"Roboto\", sans-serif;\n  margin: 20px;\n  border: 1px solid #595959;\n  border-radius: 2px;\n}\nsection div article .image-container {\n  height: 200px;\n}\nsection div article h4 {\n  font-size: 22px;\n  margin: 4px;\n  text-align: left;\n  font-weight: bold;\n}\nsection div article p {\n  margin: 4px;\n  font-size: 14px;\n}\nsection div article .region {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.login-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n}\n.login-page form div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n.login-error {\n  color: red;\n  font-size: 14px;\n}\n\n.error-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 10%;\n  z-index: 2;\n  background-color: white;\n  margin: 6px;\n  padding: 10px;\n  min-height: 40vh;\n  left: 75%;\n  margin-left: -37.5%;\n  border: 2px solid #595959;\n}\n.error-modal header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    font-size: 22px;\n  }\n\n  header {\n    flex-direction: column;\n  }\n  header nav {\n    flex-direction: column;\n  }\n  header nav ul {\n    text-align: center;\n  }\n\n  .new-trip-form {\n    flex-direction: column;\n    width: 90%;\n  }\n  .new-trip-form div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  section {\n    width: 100%;\n  }\n  section div {\n    grid-template-columns: 1fr;\n  }\n\n  article {\n    font-size: 36px;\n  }\n  article p {\n    font-size: 36px;\n  }\n\n  p, a {\n    font-size: 36px;\n  }\n\n  .form-container form label, .form-container form button, .form-container form input, .form-container form select {\n    font-size: 18px;\n  }\n  .form-container form button {\n    margin: 4px;\n  }\n\n  section div article {\n    margin: 8px;\n  }\n  section div article p, section div article a {\n    font-size: 18px;\n  }\n}\n.selected {\n  background-color: #2C2A4A;\n  border-radius: 15px;\n  color: white;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/reset.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_mixins.scss"],"names":[],"mappings":"AAAA,2DAAA;ACAA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ADED;;ACAA,gDAAA;AACA;;EAEC,cAAA;ADGD;;ACDA;EACC,cAAA;ADID;;ACFA;EACC,gBAAA;ADKD;;ACHA;EACC,YAAA;ADMD;;ACJA;;EAEC,WAAA;EACA,aAAA;ADOD;;ACLA;EACC,yBAAA;EACA,iBAAA;ADQD;;AA5CA;EACE,iBENgB;EFOhB,cENc;EFOd,iCAAA;EACA,eEJY;AFmDd;;AA5CA;EGXE,aAAA;EACA,mBHWqC;EGVrC,8BHUc;EGTd,mBHS6B;AAkD/B;;AA/CA;EGfE,aAAA;EACA,mBHeqC;EGdrC,8BHcc;EGbd,mBHa6B;AAqD/B;;AAlDA;EACE,YAAA;EACA,gBAAA;EACA,YAAA;AAqDF;AAnDE;EACE,cExBa;EFyBb,eAAA;AAqDJ;;AAjDA;EACE,cE/Bc;EFgCd,8BAAA;EACA,eE1Ba;EF2Bb,YAAA;EACA,kBAAA;AAoDF;;AAjDA;EACE,eEjCW;EFkCX,YAAA;EACA,8BAAA;AAoDF;;AAjDA;EACE,cE7Cc;EF8Cd,YAAA;EACA,aAAA;EACA,kBEtCY;EFuCZ,yBAAA;AAoDF;AAlDE;EACE,0BAAA;AAoDJ;AAjDE;EACE,eErDS;AFwGb;AAhDE;EACE,iBAAA;EACA,cAAA;AAkDJ;AA/CE;EACE,eAAA;EACA,YEnEc;EFoEd,mBExDW;EFyDX,yBEpEY;EFqEZ,iBAAA;AAiDJ;;AA7CA;EGzEE,aAAA;EACA,mBHyE8B;EGxE9B,uBHwEc;EGvEd,mBHuEsB;EACtB,WAAA;AAmDF;;AAhDA;EG9EE,aAAA;EACA,mBH8EoC;EG7EpC,6BH6Ec;EG5Ed,mBH4E4B;EAC5B,gBAAA;AAsDF;AApDE;EACE,gBAAA;EACA,eEjFS;EFkFT,cEpFa;EFqFb,gBAAA;AAsDJ;AAnDE;EACE,gBAAA;EACA,cE3FY;EF4FZ,eEzFS;AF8Ib;AAlDE;EACE,kBAAA;AAoDJ;AAjDE;EACE,WAAA;EACA,kBE3FU;EF4FV,yBAAA;AAmDJ;AAhDE;EACE,YE3Gc;EF4Gd,yBE3GY;EF4GZ,YAAA;EACA,iBAAA;EACA,kBEpGU;AFsJd;;AA5CE;EACE,kBAAA;AA+CJ;AA5CE;EACE,aAAA;EACA,2DAAA;AA8CJ;AA5CI;EACE,WAAA;AA8CN;AA3CI;EACE,kBAAA;AA6CN;AA1CI;EACE,iCAAA;EACA,YAAA;EACA,yBAAA;EACA,kBE/HU;AF2KhB;AA1CM;EACE,aAAA;AA4CR;AAzCM;EACE,eE1IY;EF2IZ,WAAA;EACA,gBAAA;EACA,iBAAA;AA2CR;AAxCM;EACE,WAAA;EACA,eEpJK;AF8Lb;AAvCM;EACE,eEvJM;EFwJN,iBAAA;AAyCR;;AAnCA;EGlKE,aAAA;EACA,mBHkK8B;EGjK9B,uBHiKc;EGhKd,mBHgKsB;EACtB,WAAA;EACA,aAAA;AAyCF;AAtCI;EGxKF,aAAA;EACA,sBHwKsC;EGvKtC,uBHuKkB;EGtKlB,uBHsK0B;EACtB,YAAA;AA2CN;;AAtCA;EACE,UAAA;EACA,eE9KW;AFuNb;;AAtCA;EGpLE,aAAA;EACA,sBHoL8B;EGnL9B,uBHmLc;EGlLd,mBHkLsB;EACtB,eAAA;EACA,QAAA;EACA,UAAA;EACA,uBE1LgB;EF2LhB,WAAA;EACA,aAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;EACA,yBAAA;AA4CF;AA1CE;EGjMA,aAAA;EACA,mBHiMuC;EGhMvC,8BHgMgB;EG/LhB,mBH+L+B;AA+CjC;;AA3CA;EGtME,aAAA;EACA,sBHsM8B;EGrM9B,uBHqMc;EGpMd,mBHoMsB;AAiDxB;;AA9CA;EACE;IACE,eEvMgB;EFwPlB;;EA9CA;IACE,sBAAA;EAiDF;EA/CE;IACE,sBAAA;EAiDJ;EA/CI;IACE,kBAAA;EAiDN;;EA5CA;IACE,sBAAA;IACA,UAAA;EA+CF;EA7CE;IACE,WAAA;IACA,aAAA;IACA,sBAAA;EA+CJ;;EA3CA;IACE,WAAA;EA8CF;EA7CE;IACE,0BAAA;EA+CJ;;EA3CA;IACE,eExOS;EFsRX;EA7CE;IACE,eE1OO;EFyRX;;EA3CA;IACE,eE/OS;EF6RX;;EAzCI;IACE,eEvPM;EFmSZ;EAzCI;IACE,WAAA;EA2CN;;EApCI;IACE,WAAA;EAuCN;EAtCM;IACE,eErQI;EF6SZ;AACF;AAlCA;EACE,yBEjRc;EFkRd,mBEvQa;EFwQb,YEpRgB;AFwTlB;;AAjCA;EACE,aAAA;AAoCF","sourcesContent":["/* This is an example of how to import a partial scss file*/\n@import '_variables';\n@import '_mixins';\n@import 'reset';\n\nbody {\n  background: $secondary-color;\n  color: $primary-color;\n  font-family: 'Roboto', sans-serif;\n  font-size: $medium-font;\n}\n\nheader {\n  @include flex(space-between, center, row);\n}\n\n.menu {\n  @include flex(space-between, center, row);\n}\n\n.menu-item {\n  margin: 15px;\n  transition: .1s;\n  padding: 8px;\n\n  &:hover {\n    color: $tertiary-color;\n    cursor: pointer;\n  }\n}\n\nh1 {\n  color: $primary-color;\n  font-family: 'Pacifico', serif;\n  font-size: $x-large-font;\n  margin: 10px;\n  text-align: center;\n}\n\nh3 {\n  font-size: $large-font;\n  margin: 20px;\n  font-family: 'Pacifico', serif;\n}\n\n.account-info {\n  color: $primary-color;\n  margin: 15px;\n  padding: 25px;\n  border-radius: $small-curve;\n  border: 2px solid $primary-color;\n\n  h2 {\n    text-decoration: underline;\n  }\n\n  p, a {\n    font-size: $small-font;\n  }\n\n  p {\n    line-height: 18px;\n    margin: 15px 0;\n  }\n\n  a {\n    cursor: pointer;\n    color: $secondary-color;\n    border-radius: $medium-curve;\n    background-color: $primary-color;\n    padding: 4px 10px;\n  }\n}\n\n.new-trip-form-container {\n  @include flex(center, center, row);\n  width: 100%;\n}\n\n.new-trip-form {\n  @include flex(space-evenly, center, row);\n  max-width: 850px;\n\n  label {\n    text-align: left;\n    font-size: $small-font;\n    color: $tertiary-color;\n    margin-left: 4px;\n  }\n\n  p {\n    text-align: left;\n    color: $primary-color;\n    font-size: $small-font;\n  }\n\n  .cost {\n    margin-right: 10px;\n  }\n\n  input, select {\n    margin: 4px;\n    border-radius: $small-curve;\n    border: 1px solid $tertiary-color;\n  }\n\n  button {\n    color: $secondary-color;\n    background-color: $primary-color;\n    border: none;\n    padding: 6px 10px;\n    border-radius: $small-curve;\n  }\n}\n\n\nsection {\n  h3 {\n    text-align: center;\n  }\n\n  div {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 33%));\n  \n    img { \n      width: 100%;\n    }\n  \n    h4 {\n      text-align: center;\n    }\n  \n    article {\n      font-family: 'Roboto', sans-serif;\n      margin: 20px;\n      border: 1px solid $tertiary-color;\n      border-radius: $x-small-curve;\n\n      .image-container {\n        height: 200px;\n      }\n\n      h4 {\n        font-size: $medium-large-font;\n        margin: 4px;\n        text-align: left;\n        font-weight: bold;\n      }\n\n      p {\n        margin: 4px;\n        font-size: $small-font;\n      }\n\n      .region {\n        font-size: $medium-font;\n        font-weight: bold;\n      }\n    }\n  }\n}\n\n.login-page {\n  @include flex(center, center, row);\n  width: 100%;\n  height: 100vh;\n\n  form {\n    div {\n      @include flex(center, flex-start, column);\n      margin: 10px;\n    }\n  }\n}\n\n.login-error {\n  color: red;\n  font-size: $small-font;\n}\n\n.error-modal {\n  @include flex(center, center, column);\n  position: fixed;\n  top: 10%;\n  z-index: 2;\n  background-color: $secondary-color;\n  margin: 6px;\n  padding: 10px;\n  min-height: 40vh;\n  left: 75%;\n  margin-left: -37.5%;\n  border: 2px solid $tertiary-color;\n  \n  header {\n    @include flex(space-between, center, row);\n  }\n}\n\n.login-page {\n  @include flex(center, center, column);\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    font-size: $medium-large-font;\n  }\n\n  header {\n    flex-direction: column;\n\n    nav {\n      flex-direction: column;\n\n      ul {\n        text-align: center\n      }\n    }\n  }\n\n  .new-trip-form {\n    flex-direction: column;\n    width: 90%;\n\n    div {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n  }\n\n  section {\n    width: 100%;\n    div {\n      grid-template-columns: 1fr;\n    }\n  }\n\n  article {\n    font-size: $large-font;\n    p {\n      font-size: $large-font;\n    }\n  }\n\n  p, a {\n    font-size: $large-font;\n  }\n\n  .form-container {\n    form {\n      label, button, input, select {\n        font-size: $medium-font;\n      }\n\n      button {\n        margin: 4px;\n      }\n    }\n  }\n\n  section {\n    div {\n      article {\n        margin: 8px;\n        p, a {\n          font-size: $medium-font;\n        }\n      }\n    }\n  }\n}\n\n.selected {\n  background-color: $primary-color;\n  border-radius: $medium-curve;\n  color: $secondary-color;\n}\n\n.hidden {\n  display: none;\n}","html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","$secondary-color: white;\n$primary-color: #2C2A4A;\n$tertiary-color: rgb(89, 89, 89);\n\n$small-font: 14px;\n$medium-font: 18px;\n$medium-large-font: 22px;\n$large-font: 36px;\n$x-large-font: 48px;\n\n$x-small-curve: 2px;\n$small-curve: 6px;\n$medium-curve: 15px;","@mixin flex($justify, $align, $direction) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderUserPage": () => (/* binding */ renderUserPage),
/* harmony export */   "renderAgentPage": () => (/* binding */ renderAgentPage),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "showElement": () => (/* binding */ showElement)
/* harmony export */ });
//User elements
const pendingSectionTrips = document.querySelector("#pendingSectionTrips");
const pastSectionTrips = document.querySelector("#pastSectionTrips");
const futureSectionTrips = document.querySelector("#futureSectionTrips");
const currentSectionTrips = document.querySelector("#currentSectionTrips");
const totalYearSpent = document.querySelector("#totalYearSpent");
const userGreeting = document.querySelector("#userName");
const navBar = document.querySelector("#navBar");
const menuItems = document.querySelectorAll("#navBar li");
const allSections = document.querySelectorAll("section");
//Agent elements
const agentTotalIncome = document.querySelector("#agentTotalIncome");
const agentCurrentTravelers = document.querySelector("#agentCurrentTravelers");
const agentPendingTrips = document.querySelector("#agentPendingSectionTrips");

navBar.addEventListener('click', switchSection);
navBar.addEventListener('keyup', checkEnterKey);

function checkEnterKey(e) {
  if (e.keyCode === 13) {
    switchSection(e);
  }
}

function switchSection(e) {
  const clickedSection = document.querySelector(`#${e.target.dataset.section}`);
  if (e.target.dataset.section) {
    toggleMenuItem(e.target);
    allSections.forEach(section => hideElement(section));
    showElement(clickedSection);
  }
}

function hideElement(element) {
  element.classList.add("hidden");
  element.ariaHidden = true;
}
function showElement(element) {
  element.classList.remove("hidden");
  element.ariaHidden = false;
}

function toggleMenuItem(element) {
  menuItems.forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
}

function renderAgentPage(agent) {
  agentTotalIncome.innerText = agent.getYearIncome();
  agent.getCurrentTravelers().forEach(traveler => {
    agentCurrentTravelers.innerText += traveler.id;
  });
  renderSection(agentPendingTrips, agent.getPending());
}

function renderUserPage(user) {
  totalYearSpent.innerHTML = "$" + user.lastYearCost();
  userGreeting.innerText = user.name;
  renderSection(pendingSectionTrips, user.getPending());
  renderSection(pastSectionTrips, user.getTripsByDate("past"));
  renderSection(futureSectionTrips, user.getTripsByDate("future"));
  renderSection(currentSectionTrips, user.getTripsByDate("current"));
}

function renderWidget(trip) {
  const isPending = (trip.status === "pending") ? "<p>Status: Pending</p>" : ""
  const city = trip.destinationName.split(", ")[0];
  const region = trip.destinationName.split(", ")[1];
  return `<article>
    <h4>${city}</h4>
      <img src="${trip.img}" alt="${trip.alt}"/>
    <p class="region">${region}</p>
    <p>${trip.date}</p>
    <p>${trip.numTravelers} travelers</p>
    ${isPending}
    <p>Total Cost: $${trip.getTotalCost()}</p>
  </article>`
}

function renderSection(section, data) {
section.innerHTML = "";
data.forEach(trip => {
  section.innerHTML += renderWidget(trip);
})
}



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _render_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);




const errorModal = document.querySelector("#modal-1");
const errorExit = document.querySelector("#errorClose");
const errMessage = document.querySelector("#modal-1-content");

errorExit.addEventListener('click', hideErr);

function getData(userID, callback) {
  return Promise.all([
    fetch('http://localhost:3001/api/v1/travelers/' + userID),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
  ]).then((res) => {
      return Promise.all(res.map(res => res.json()));
  })
  .then(data => callback(data))
  .catch(err => console.log(err))
}

function postData(data) {
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON',
    },
    body: JSON.stringify(data),
  })
  .then(res => {
    if (res.ok) {
      getData(_scripts_js__WEBPACK_IMPORTED_MODULE_0__.user.id, _scripts_js__WEBPACK_IMPORTED_MODULE_0__.initClasses)
      return res.json()
    } else {
      throw new Error("Please make sure all inputs are complete.")
    }
  }).catch(err => handleErr(err))
}

function handleErr(err) {
  (0,_render_dom_js__WEBPACK_IMPORTED_MODULE_1__.showElement)(errorModal);
  errMessage.innerText = err.message;
}

function hideErr() {
  (0,_render_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideElement)(errorModal);
}





/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {

  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();
window.MicroModal = MicroModal;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MicroModal);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeForm": () => (/* binding */ initializeForm)
/* harmony export */ });
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _api_calls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);




//Query Selectors
const requestTripBtn = document.querySelector("#requestTripBtn");
const totalTripCost = document.querySelector('#totalTripCost');
//Form Elements
const newTripForm = document.querySelector("#newTripForm");
const newTripFormInputs = document.querySelectorAll("#newTripForm input, #newTripForm select")
const tripDurationInput = document.querySelector("#trip-duration-input");
const tripDateInput = document.querySelector("#trip-date-input");
const tripNumTravelersInput = document.querySelector("#trip-numTravelers-input");
const tripDestinationsInput = document.querySelector("#trip-destinations-input");

//Event listeners
requestTripBtn.addEventListener("click", postNewTrip)
newTripForm.addEventListener("change", checkPrice);

//Functions
function checkPrice() {
  if (checkInputs()) {
    let newTrip = instantiateNewTrip();
    totalTripCost.innerText = newTrip.getTotalCost();
  }
}

function postNewTrip(e) {
  e.preventDefault();
  (0,_api_calls_js__WEBPACK_IMPORTED_MODULE_2__.postData)(instantiateTripData());
  newTripForm.reset();
}

function instantiateNewTrip() {
  const currentDestID = Number(tripDestinationsInput.value);
  const currentDest = _scripts_js__WEBPACK_IMPORTED_MODULE_1__.destinations.getByID(currentDestID);
  return new _Trip__WEBPACK_IMPORTED_MODULE_0__.default(instantiateTripData(), currentDest);
}

function instantiateTripData() {
  const currentDate = tripDateInput.value.replaceAll("-", "/");
  return { 
    id: _scripts_js__WEBPACK_IMPORTED_MODULE_1__.tripRepo.allTrips.length + 1,
    userID: _scripts_js__WEBPACK_IMPORTED_MODULE_1__.user.id,
    destinationID: Number(tripDestinationsInput.value),
    travelers: Number(tripNumTravelersInput.value),
    date: currentDate,
    duration: Number(tripDurationInput.value),
    status: "pending",
    suggestedActivities: []
  }
}

function checkInputs() {
  return Array.from(newTripFormInputs).every(input => input.value);
}

function initializeForm() {
  renderSelectList(_scripts_js__WEBPACK_IMPORTED_MODULE_1__.destinations.getAllNames());
  setMinCalendarDate();
}

function setMinCalendarDate() {
  tripDateInput.min = new Date().toISOString().split("T")[0]
}

function renderSelectList(names) {
  tripDestinationsInput.innerHTML = `<option class="default-select" value="">Choose a destination</option>`;
  names.forEach(name => {
    tripDestinationsInput.innerHTML += `<option value="${name.id}">${name.name}</option>`
  });
}



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Trip {
  constructor(tripData, destinationData) {
    this.userID = tripData.userID;
    this.numTravelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.destinationName = destinationData.destination;
    this.lodgingPerDay = destinationData.estimatedLodgingCostPerDay;
    this.flightCost = destinationData.estimatedFlightCostPerPerson;
    this.img = destinationData.image;
    this.alt = destinationData.alt;
  }

  getTotalCost() {
    const totalFlights = this.numTravelers * this.flightCost;
    const totalAccomodations = this.duration * this.lodgingPerDay;
    return totalFlights + totalAccomodations;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLoginInputs": () => (/* binding */ checkLoginInputs)
/* harmony export */ });
/* harmony import */ var _api_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);



const loginPage = document.querySelector("#loginPage");
const mainPage = document.querySelector("#mainPage");
const agentPage = document.querySelector("#agentPage");
const loginUsername = document.querySelector("#login-username-input");
const loginPassword = document.querySelector("#login-password-input");
const loginButton = document.querySelector("#login-button-input");
const logoutButton = document.querySelector("#logout-button");
const loginError = document.querySelector("#loginErrorMessage")

loginButton.addEventListener("click", checkLoginInputs);
logoutButton.addEventListener("click", logout);

// getData(22, initClasses);
// switchPages(loginPage, mainPage);

function checkLoginInputs(e) {
  e.preventDefault();
  if (loginUsername.value === "agent") {
    checkAgentLogin();
  } else {
    checkTravelerLogin();
  }
}

function checkTravelerLogin() {
  const userIDNumber = Number(loginUsername.value.split("traveler")[1]);
  if (loginPassword.value === "travel" && Number.isInteger(userIDNumber) && userIDNumber > 0 && userIDNumber <= 50) {
    (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__.getData)(userIDNumber, _scripts__WEBPACK_IMPORTED_MODULE_1__.initClasses);
    switchPages(loginPage, mainPage);
  } else {
    loginError.innerText = "Check username or password";
  }
}

function checkAgentLogin() {
  if (loginPassword.value === "travel") {
    (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__.getData)("", _scripts__WEBPACK_IMPORTED_MODULE_1__.initAgentClasses);
    switchPages(loginPage, agentPage);
  } else {
    loginError.innerText = "Check username or password";
  }
}

function logout() {
  switchPages(mainPage, loginPage);
}

function switchPages(hide, show) {
  hide.classList.add("hidden");
  show.classList.remove("hidden");
}



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User {
  constructor(userData, userTrips) {
    this.id = userData.id;
    this.name = userData.name;
    this.allTrips = userTrips;
  }

  getTripsByDate(timeframe) {
    const currentDate = new Date();
    return this.allTrips.filter(trip => {
      let tripEnd = this.getEndDate(trip.date, trip.duration);
      let tripStart = new Date(trip.date);

      if (timeframe === "past") {
        return (tripEnd < currentDate);
      } else if (timeframe === "future") {
        return (tripStart > currentDate);
      } else {
        return (tripStart <= currentDate && tripEnd >= currentDate);
      }
    });
  }

  getEndDate(date, duration) {
    const startDate = new Date(date);
    return new Date(startDate.setDate(startDate.getDate() + duration));
  }

  lastYearCost() {
    const pastYearDate = new Date().setFullYear(new Date().getFullYear() - 1);

    return this.getTripsByDate("past")
    .filter(trip => {
      return (Date.parse(trip.date) > pastYearDate)
    })
    .reduce((total, trip) => {
      return total += trip.getTotalCost();
    }, 0)
  }

  getPending() {
    return this.getTripsByDate("future").filter(trip => trip.status === "pending")
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


class TripRepo {
  constructor(allTrips, allDestinations) {
    this.allDestinations = allDestinations;
    this.allTrips = this.createAllTrips(allTrips);
  }

  createAllTrips(allTripData) {
    return allTripData.map(trip => {
      const currentDestination = this.allDestinations.find(destination => destination.id === trip.destinationID);
      return new _Trip_js__WEBPACK_IMPORTED_MODULE_0__.default(trip, currentDestination);
    });
  }

  getUserTrips(currentUserID) {
    return this.allTrips.filter(trip => trip.userID === currentUserID);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TripRepo);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Destinations {
  constructor(allDestinations) {
    this.allDestinations = allDestinations;
  }

  getAllNames() {
    return this.allDestinations.sort((a, b) => {
       if (b.destination < a.destination) {
         return 1;
       } else if (b.destination > a.destination) {
         return -1;
       } else {
         return 0;
       }
    })
    .map(destination => { 
      return { name: destination.destination, id: destination.id }
    });
  }

  getByID(id) {
    return this.allDestinations.find(destination => destination.id === id);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Destinations);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _TripRepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



class Agent {
  constructor(allTrips, allUsers) {
    this.allTrips = allTrips;
    this.allUsers = this.createAllUsers(allUsers);
  }

  createAllUsers(data) {
    return data.map((user) => {
      return new _User__WEBPACK_IMPORTED_MODULE_0__.default(user, this.allTrips.getUserTrips(user.id))
    })
  }

  getPending() {
    return this.allTrips.allTrips.filter(trip => {
      return trip.status === 'pending';
    });
  }

  getYearIncome() {
    const pastYearDate = new Date().setFullYear(new Date().getFullYear() - 1);
    return this.allTrips.allTrips.filter(trip => {
      const tripDate = Date.parse(trip.date);
      return (tripDate > pastYearDate && tripDate < new Date())
    })
    .reduce((total, trip) => {
      return total += trip.getTotalCost();
    }, 0);
  }
  
  getCurrentTravelers() {
    return this.allUsers.filter(user => {
      return user.getTripsByDate("current")[0];
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agent);

/***/ })
/******/ 	]);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map