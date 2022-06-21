/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import {data} from '../../../SpeakerData';\n\n\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\n\nconst delay = ms => new Promise(resolve => {\n  setTimeout(resolve, ms);\n});\n\nasync function handler(req, res) {\n  //res.status(200).send(JSON.stringify(data, null, 2));\n  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n\n  try {\n    const readFileData = await readFile(jsonFile);\n    await delay(1000);\n    const speakers = JSON.parse(readFileData).speakers;\n\n    if (speakers) {\n      res.setHeader(\"Content-Type\", \"application/json\");\n      res.status(200).send(JSON.stringify(speakers, null, 2));\n      console.log(\"GET /api/speakers status: 200\");\n    }\n  } catch (e) {\n    console.log(\"/api/speakers error\", e);\n    res.status(404).send(\"File Not Found on server\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWxsaWNvbi12YWxsZXktY29kZS1jYW1wLy4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzPzc5YjkiXSwibmFtZXMiOlsicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25GaWxlIiwicGF0aCIsInJlYWRGaWxlRGF0YSIsInNwZWFrZXJzIiwiSlNPTiIsInBhcnNlIiwic2V0SGVhZGVyIiwic3RhdHVzIiwic2VuZCIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQUNBO0FBQUQsSUFBY0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUEzQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csb0RBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxFQUFELElBQVEsSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7QUFBQ0MsWUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBVjtBQUF3QixDQUFsRCxDQUF0Qjs7QUFFZSxlQUFlSSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUM7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLG1EQUFBLENBQWEsSUFBYixFQUFtQixTQUFuQixDQUFqQjs7QUFDQSxNQUFHO0FBQ0MsVUFBTUMsWUFBWSxHQUFJLE1BQU1aLFFBQVEsQ0FBQ1UsUUFBRCxDQUFwQztBQUNBLFVBQU1SLEtBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNVyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFYLEVBQXlCQyxRQUExQzs7QUFDQSxRQUFJQSxRQUFKLEVBQWE7QUFDVEosU0FBRyxDQUFDTyxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQVAsU0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLElBQUksQ0FBQ0ssU0FBTCxDQUFlTixRQUFmLEVBQXlCLElBQXpCLEVBQStCLENBQS9CLENBQXJCO0FBQ0FPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0g7QUFDSixHQVRELENBU0UsT0FBT0MsQ0FBUCxFQUFTO0FBQ1BGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DQyxDQUFuQztBQUNBYixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQiwwQkFBckI7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2RhdGF9IGZyb20gJy4uLy4uLy4uL1NwZWFrZXJEYXRhJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge3NldFRpbWVvdXQocmVzb2x2ZSwgbXMpfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICAgIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKFwiLi9cIiwgXCJkYi5qc29uXCIpO1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gIGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xuICAgICAgICBpZiAoc3BlYWtlcnMpe1xuICAgICAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShzcGVha2VycywgbnVsbCwgMikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgL2FwaS9zcGVha2VycyBzdGF0dXM6IDIwMFwiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIi9hcGkvc3BlYWtlcnMgZXJyb3JcIiwgZSk7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKFwiRmlsZSBOb3QgRm91bmQgb24gc2VydmVyXCIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/speakers/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();