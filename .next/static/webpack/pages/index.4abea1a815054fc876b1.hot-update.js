/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ \"./src/context/SpeakerFilterContext.js\");\n/* harmony import */ var _context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SpeakerContext */ \"./src/context/SpeakerContext.js\");\n/* harmony import */ var _SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDelete */ \"./src/components/SpeakerDelete.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/madalinaostan/Documents/Learn.Do.Grow/sillicon-valley-code-camp/src/components/Speaker.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$(),\n    _s6 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Session(_ref) {\n  var title = _ref.title,\n      room = _ref.room;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n    className: \"session w-100\",\n    children: [title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"strong\", {\n      children: [\"Room: \", room.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 15\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Session;\n\nfunction Sessions() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),\n      eventYear = _useContext.eventYear;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(speakerContext),\n      speaker = _useContext2.speaker;\n\n  var sessions = speaker.sessions;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"sessionBox card h-250\",\n    children: sessions.filter(function (session) {\n      return session.eventYear === eventYear;\n    }).map(function (session) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"session w-100\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, this)\n      }, session.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Sessions, \"Mbmdx4PcMD6cs0fOkUGItK70sHk=\");\n\n_c2 = Sessions;\n\nfunction ImageWithFallback(_ref2) {\n  _s2();\n\n  var src = _ref2.src,\n      props = (0,_Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, [\"src\"]);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(src),\n      imgSrc = _useState2[0],\n      setImgSrc = _useState2[1];\n\n  function onError() {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", _objectSpread(_objectSpread({\n    src: imgSrc\n  }, props), {}, {\n    onError: onError\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 10\n  }, this);\n}\n\n_s2(ImageWithFallback, \"R4UhDpTis3V59uQlUhTj6vAWrfc=\");\n\n_c3 = ImageWithFallback;\n\nfunction SpeakerImage() {\n  _s3();\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),\n      _useContext3$speaker = _useContext3.speaker,\n      id = _useContext3$speaker.id,\n      first = _useContext3$speaker.first,\n      last = _useContext3$speaker.last;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"speaker-img d-flex flex-row justify-content-center align-items-center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageWithFallback, {\n      className: \"contain-fit\",\n      src: \"/images/speaker-\".concat(id, \".jpg\"),\n      width: \"300\",\n      alt: \"\".concat(first, \" \").concat(last)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(SpeakerImage, \"ImMICHY1hf2KXS/7510itlV4fOY=\");\n\n_c4 = SpeakerImage;\n\nfunction SpeakerFavorite() {\n  _s4();\n\n  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),\n      speaker = _useContext4.speaker,\n      updateRecord = _useContext4.updateRecord;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      inTransition = _useState3[0],\n      setInTransition = _useState3[1];\n\n  function doneCallback() {\n    setInTransition(false);\n    console.log(\"In SpeakerFavorite:doneCallback \".concat(new Date().getMilliseconds()));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"action pad81\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      onClick: function onClick() {\n        setInTransition(true);\n        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {\n          favorite: !speaker.favorite\n        }), doneCallback);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n        className: speaker.favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), \" \", \"Favorite\", \" \", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"fas fa-circle-notch fa-spin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}\n\n_s4(SpeakerFavorite, \"7CNXp5ECDBwbRTSXihBnCfVs0tU=\");\n\n_c5 = SpeakerFavorite;\n\nfunction SpeakerDemographics() {\n  _s5();\n\n  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),\n      speaker = _useContext5.speaker;\n\n  var first = speaker.first,\n      last = speaker.last,\n      bio = speaker.bio,\n      company = speaker.company,\n      twitterHandle = speaker.twitterHandle,\n      favorite = speaker.favorite;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"speaker-info\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"d-flex justify-content-between mb-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"text-truncate w-200\",\n        children: [first, \" \", last]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: bio\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"social d-flex flex-row mt-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"company\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h5\", {\n            children: \"Company\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n            children: company\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"twitter\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h5\", {\n            children: \"Twitter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n            children: twitterHandle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, this);\n}\n\n_s5(SpeakerDemographics, \"+GLFQhMVC35zrtukZQzc41tR8Ok=\");\n\n_c6 = SpeakerDemographics;\n\nfunction Speaker(_ref3) {\n  _s6();\n\n  var speaker = _ref3.speaker,\n      updateRecord = _ref3.updateRecord,\n      insertRecord = _ref3.insertRecord,\n      deleteRecord = _ref3.deleteRecord;\n\n  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),\n      showSessions = _useContext6.showSessions;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {\n    speaker: speaker,\n    updateRecord: updateRecord,\n    insertRecord: insertRecord,\n    deleteRecord: deleteRecord,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"card card-height p-4 mt-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 7\n      }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sessions, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 32\n      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 129,\n    columnNumber: 5\n  }, this);\n}\n\n_s6(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n\n_c7 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c2, \"Sessions\");\n$RefreshReg$(_c3, \"ImageWithFallback\");\n$RefreshReg$(_c4, \"SpeakerImage\");\n$RefreshReg$(_c5, \"SpeakerFavorite\");\n$RefreshReg$(_c6, \"SpeakerDemographics\");\n$RefreshReg$(_c7, \"Speaker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz82NWFmIl0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwiU2Vzc2lvbnMiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJldmVudFllYXIiLCJzcGVha2VyQ29udGV4dCIsInNwZWFrZXIiLCJzZXNzaW9ucyIsImZpbHRlciIsInNlc3Npb24iLCJtYXAiLCJpZCIsIkltYWdlV2l0aEZhbGxiYWNrIiwic3JjIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJvbkVycm9yIiwiU3BlYWtlckltYWdlIiwiU3BlYWtlckNvbnRleHQiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1cGRhdGVSZWNvcmQiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiU3BlYWtlciIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInNob3dTZXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUFrQztBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNoQyxzQkFDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0dELEtBREgsb0JBQ1U7QUFBQSwyQkFBZUMsSUFBSSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDLDJEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUtHQyxZQUFZLEtBQUssSUFBakIsZ0JBQXdCLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF4QixHQUF1QyxJQUwxQyxlQU1FLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0lBcEJRSCxPOztNQUFBQSxPO0FBc0JULCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU3BlYWtlclByb3ZpZGVyLCBTcGVha2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9TcGVha2VyQ29udGV4dCc7XG5pbXBvcnQgU3BlYWtlckRlbGV0ZSBmcm9tIFwiLi9TcGVha2VyRGVsZXRlXCI7XG5cbmZ1bmN0aW9uIFNlc3Npb24oeyB0aXRsZSwgcm9vbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxuICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5mdW5jdGlvbiBTZXNzaW9ucygpIHtcbiAgY29uc3QgeyBldmVudFllYXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoc3BlYWtlckNvbnRleHQpO1xuICBjb25zdCBzZXNzaW9ucyA9IHNwZWFrZXIuc2Vzc2lvbnM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIHtzZXNzaW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cbiAgICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSW1hZ2VXaXRoRmFsbGJhY2soe3NyYywgLi4ucHJvcHN9KXtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSB1c2VTdGF0ZShzcmMpO1xuXG4gIGZ1bmN0aW9uIG9uRXJyb3IoKXt9XG4gIHJldHVybiA8aW1nIHNyYz17aW1nU3JjfSB7Li4ucHJvcHN9IG9uRXJyb3I9e29uRXJyb3J9Lz5cblxufVxuXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoKSB7XG5cbiAgY29uc3QgeyBzcGVha2VyOiB7aWQsIGZpcnN0LCBsYXN0fX0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxJbWFnZVdpdGhGYWxsYmFja1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKCkge1xuICBjb25zdCB7c3BlYWtlciwgdXBkYXRlUmVjb3JkfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWQ4MVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgICB1cGRhdGVSZWNvcmQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLnNwZWFrZXIsIGZhdm9yaXRlOiAhc3BlYWtlci5mYXZvcml0ZSxcbiAgICAgICAgICAgIH0sIGRvbmVDYWxsYmFja1xuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgc3BlYWtlci5mYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcygpIHtcbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3QgeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZX0gPSBzcGVha2VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZS8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQsIGluc2VydFJlY29yZCwgZGVsZXRlUmVjb3JkIH0pIHtcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFNwZWFrZXJQcm92aWRlciBcbiAgICBzcGVha2VyPXtzcGVha2VyfSBcbiAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cbiAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cbiAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cbiAgICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICA8U3BlYWtlckltYWdlIC8+XG4gICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgLz4gOiBudWxsfVxuICAgICAgPFNwZWFrZXJEZWxldGUgLz5cbiAgICA8L2Rpdj5cbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});