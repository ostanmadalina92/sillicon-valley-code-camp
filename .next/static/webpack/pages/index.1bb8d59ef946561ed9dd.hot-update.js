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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ \"./src/context/SpeakerFilterContext.js\");\n/* harmony import */ var _context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SpeakerContext */ \"./src/context/SpeakerContext.js\");\n/* harmony import */ var _SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDelete */ \"./src/components/SpeakerDelete.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/madalinaostan/Documents/Learn.Do.Grow/sillicon-valley-code-camp/src/components/Speaker.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$(),\n    _s6 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Session(_ref) {\n  var title = _ref.title,\n      room = _ref.room;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n    className: \"session w-100\",\n    children: [title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"strong\", {\n      children: [\"Room: \", room.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 15\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Session;\n\nfunction Sessions() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),\n      eventYear = _useContext.eventYear;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(speakerContext),\n      speaker = _useContext2.speaker;\n\n  var sessions = speaker.sessions;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"sessionBox card h-250\",\n    children: sessions.filter(function (session) {\n      return session.eventYear === eventYear;\n    }).map(function (session) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"session w-100\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, this)\n      }, session.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Sessions, \"Mbmdx4PcMD6cs0fOkUGItK70sHk=\");\n\n_c2 = Sessions;\n\nfunction ImageWithFallback(_ref2) {\n  _s2();\n\n  var src = _ref2.src,\n      props = (0,_Users_madalinaostan_Documents_Learn_Do_Grow_sillicon_valley_code_camp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, [\"src\"]);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(src),\n      imgSrc = _useState2[0],\n      setImgSrc = _useState2[1];\n\n  function onError() {\n    if (!error) {\n      setImgSrc(\"/images/speaker-99999.jpg\");\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", _objectSpread(_objectSpread({\n    src: imgSrc\n  }, props), {}, {\n    onError: onError\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 10\n  }, this);\n}\n\n_s2(ImageWithFallback, \"R4UhDpTis3V59uQlUhTj6vAWrfc=\");\n\n_c3 = ImageWithFallback;\n\nfunction SpeakerImage() {\n  _s3();\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),\n      _useContext3$speaker = _useContext3.speaker,\n      id = _useContext3$speaker.id,\n      first = _useContext3$speaker.first,\n      last = _useContext3$speaker.last;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"speaker-img d-flex flex-row justify-content-center align-items-center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageWithFallback, {\n      className: \"contain-fit\",\n      src: \"/images/speaker-\".concat(id, \".jpg\"),\n      width: \"300\",\n      alt: \"\".concat(first, \" \").concat(last)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(SpeakerImage, \"ImMICHY1hf2KXS/7510itlV4fOY=\");\n\n_c4 = SpeakerImage;\n\nfunction SpeakerFavorite() {\n  _s4();\n\n  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),\n      speaker = _useContext4.speaker,\n      updateRecord = _useContext4.updateRecord;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      inTransition = _useState3[0],\n      setInTransition = _useState3[1];\n\n  function doneCallback() {\n    setInTransition(false);\n    console.log(\"In SpeakerFavorite:doneCallback \".concat(new Date().getMilliseconds()));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"action pad81\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      onClick: function onClick() {\n        setInTransition(true);\n        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {\n          favorite: !speaker.favorite\n        }), doneCallback);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"i\", {\n        className: speaker.favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), \" \", \"Favorite\", \" \", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"fas fa-circle-notch fa-spin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n_s4(SpeakerFavorite, \"7CNXp5ECDBwbRTSXihBnCfVs0tU=\");\n\n_c5 = SpeakerFavorite;\n\nfunction SpeakerDemographics() {\n  _s5();\n\n  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerContext),\n      speaker = _useContext5.speaker;\n\n  var first = speaker.first,\n      last = speaker.last,\n      bio = speaker.bio,\n      company = speaker.company,\n      twitterHandle = speaker.twitterHandle,\n      favorite = speaker.favorite;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"speaker-info\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"d-flex justify-content-between mb-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"text-truncate w-200\",\n        children: [first, \" \", last]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: bio\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"social d-flex flex-row mt-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"company\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h5\", {\n            children: \"Company\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n            children: company\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"twitter\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h5\", {\n            children: \"Twitter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n            children: twitterHandle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 5\n  }, this);\n}\n\n_s5(SpeakerDemographics, \"+GLFQhMVC35zrtukZQzc41tR8Ok=\");\n\n_c6 = SpeakerDemographics;\n\nfunction Speaker(_ref3) {\n  _s6();\n\n  var speaker = _ref3.speaker,\n      updateRecord = _ref3.updateRecord,\n      insertRecord = _ref3.insertRecord,\n      deleteRecord = _ref3.deleteRecord;\n\n  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterContext),\n      showSessions = _useContext6.showSessions;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerProvider, {\n    speaker: speaker,\n    updateRecord: updateRecord,\n    insertRecord: insertRecord,\n    deleteRecord: deleteRecord,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"card card-height p-4 mt-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 7\n      }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sessions, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 32\n      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SpeakerDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, this);\n}\n\n_s6(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n\n_c7 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c2, \"Sessions\");\n$RefreshReg$(_c3, \"ImageWithFallback\");\n$RefreshReg$(_c4, \"SpeakerImage\");\n$RefreshReg$(_c5, \"SpeakerFavorite\");\n$RefreshReg$(_c6, \"SpeakerDemographics\");\n$RefreshReg$(_c7, \"Speaker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz82NWFmIl0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwiU2Vzc2lvbnMiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJldmVudFllYXIiLCJzcGVha2VyQ29udGV4dCIsInNwZWFrZXIiLCJzZXNzaW9ucyIsImZpbHRlciIsInNlc3Npb24iLCJtYXAiLCJpZCIsIkltYWdlV2l0aEZhbGxiYWNrIiwic3JjIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJvbkVycm9yIiwiU3BlYWtlckltYWdlIiwiU3BlYWtlckNvbnRleHQiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1cGRhdGVSZWNvcmQiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiU3BlYWtlciIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInNob3dTZXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUFrQztBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNoQyxzQkFDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0dELEtBREgsb0JBQ1U7QUFBQSwyQkFBZUMsSUFBSSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QVksRUFBRWMsWUFIZDtBQUlBLGdCQUFZLEVBQUVDLFlBSmQ7QUFBQSwyQkFNQTtBQUFLLGVBQVMsRUFBQywyREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLGdDQUNFLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFLR0MsWUFBWSxLQUFLLElBQWpCLGdCQUF3Qiw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBeEIsR0FBdUMsSUFMMUMsZUFNRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztJQXBCUUgsTzs7TUFBQUEsTztBQXNCVCwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IFNwZWFrZXJQcm92aWRlciwgU3BlYWtlckNvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvU3BlYWtlckNvbnRleHQnO1xuaW1wb3J0IFNwZWFrZXJEZWxldGUgZnJvbSBcIi4vU3BlYWtlckRlbGV0ZVwiO1xuXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoKSB7XG4gIGNvbnN0IHsgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KHNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3Qgc2Vzc2lvbnMgPSBzcGVha2VyLnNlc3Npb25zO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICB7c2Vzc2lvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiIGtleT17c2Vzc2lvbi5pZH0+XG4gICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEltYWdlV2l0aEZhbGxiYWNrKHtzcmMsIC4uLnByb3BzfSl7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcblxuICBmdW5jdGlvbiBvbkVycm9yKCl7XG4gICAgaWYgKCFlcnJvcil7XG4gICAgICBzZXRJbWdTcmMoXCIvaW1hZ2VzL3NwZWFrZXItOTk5OTkuanBnXCIpXG4gICAgfVxuICB9XG4gIHJldHVybiA8aW1nIHNyYz17aW1nU3JjfSB7Li4ucHJvcHN9IG9uRXJyb3I9e29uRXJyb3J9Lz5cblxufVxuXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoKSB7XG5cbiAgY29uc3QgeyBzcGVha2VyOiB7aWQsIGZpcnN0LCBsYXN0fX0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxJbWFnZVdpdGhGYWxsYmFja1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKCkge1xuICBjb25zdCB7c3BlYWtlciwgdXBkYXRlUmVjb3JkfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWQ4MVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgICB1cGRhdGVSZWNvcmQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLnNwZWFrZXIsIGZhdm9yaXRlOiAhc3BlYWtlci5mYXZvcml0ZSxcbiAgICAgICAgICAgIH0sIGRvbmVDYWxsYmFja1xuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgc3BlYWtlci5mYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcygpIHtcbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcbiAgY29uc3QgeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZX0gPSBzcGVha2VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZS8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQsIGluc2VydFJlY29yZCwgZGVsZXRlUmVjb3JkIH0pIHtcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPFNwZWFrZXJQcm92aWRlciBcbiAgICBzcGVha2VyPXtzcGVha2VyfSBcbiAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cbiAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cbiAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cbiAgICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICA8U3BlYWtlckltYWdlIC8+XG4gICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgLz4gOiBudWxsfVxuICAgICAgPFNwZWFrZXJEZWxldGUgLz5cbiAgICA8L2Rpdj5cbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});