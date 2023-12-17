"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dao",{

/***/ "./constant.js":
/*!*********************!*\
  !*** ./constant.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CHAIN_ID: function() { return /* binding */ CHAIN_ID; },\n/* harmony export */   CONSTANT_DICT: function() { return /* binding */ CONSTANT_DICT; },\n/* harmony export */   DAO_ADDRESS: function() { return /* binding */ DAO_ADDRESS; },\n/* harmony export */   DAO_JSON: function() { return /* binding */ DAO_JSON; },\n/* harmony export */   FACTORY_JSON: function() { return /* binding */ FACTORY_JSON; },\n/* harmony export */   LINE_COUNT: function() { return /* binding */ LINE_COUNT; },\n/* harmony export */   RPC: function() { return /* binding */ RPC; },\n/* harmony export */   SUB_DAOS: function() { return /* binding */ SUB_DAOS; },\n/* harmony export */   TOKEN_JSON: function() { return /* binding */ TOKEN_JSON; },\n/* harmony export */   TOP_DAO: function() { return /* binding */ TOP_DAO; },\n/* harmony export */   params: function() { return /* binding */ params; }\n/* harmony export */ });\nconst DAO_ADDRESS = \"0x32659e469f74e65A7C3fcAea1fcA56042Cedff44\";\nconst FACTORY_JSON = __webpack_require__(/*! ./blockchain1/build/contracts/DAOFactory.json */ \"./blockchain1/build/contracts/DAOFactory.json\");\nconst DAO_JSON = __webpack_require__(/*! ./blockchain1/build/contracts/MyDAO.json */ \"./blockchain1/build/contracts/MyDAO.json\");\nconst TOKEN_JSON = __webpack_require__(/*! ./blockchain1/build/contracts/SUToken.json */ \"./blockchain1/build/contracts/SUToken.json\");\nconst LINE_COUNT = 4;\nconst RPC = \"https://polygon-mumbai.g.alchemy.com/v2/qk87xs0xeViFziM8xyAckMpVat-e_32T\";\nconst TOP_DAO = \"0x40C8d672d954263c2Af729D2803c34DB8d83210C\";\nconst SUB_DAOS = [];\nconst params = [\n    {\n        chainName: \"Mumbai Testnet\",\n        chainId: \"0x13881\",\n        nativeCurrency: {\n            name: \"MATIC\",\n            decimals: 18,\n            symbol: \"MATIC\"\n        },\n        rpcUrls: [\n            \"https://polygon-mumbai.g.alchemy.com/v2/qk87xs0xeViFziM8xyAckMpVat-e_32T\"\n        ],\n        blockExplorerUrls: [\n            \"https://mumbai.polygonscan.com/\"\n        ]\n    }\n];\nconst CHAIN_ID = 8001;\nconst CONSTANT_DICT = {\n    DAO_ADDRESS: DAO_ADDRESS,\n    FACTORY_JSON: FACTORY_JSON,\n    DAO_JSON: DAO_JSON,\n    TOKEN_JSON: TOKEN_JSON,\n    LINE_COUNT: LINE_COUNT,\n    RPC: RPC,\n    TOP_DAO: TOP_DAO,\n    SUB_DAOS: SUB_DAOS,\n    params: params,\n    CHAIN_ID: CHAIN_ID\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGNBQWMsNkNBQTZDO0FBQ2pFLE1BQU1DLGVBQWVDLG1CQUFPQSxDQUFDLG9HQUErQyxFQUFFO0FBQzlFLE1BQU1DLFdBQVdELG1CQUFPQSxDQUFDLDBGQUEwQyxFQUFFO0FBQ3JFLE1BQU1FLGFBQWFGLG1CQUFPQSxDQUFDLDhGQUE0QyxFQUFFO0FBQ3pFLE1BQU1HLGFBQWEsRUFBRTtBQUNyQixNQUFNQyxNQUNYLDJFQUEyRTtBQUN0RSxNQUFNQyxVQUFVLDZDQUE2QztBQUM3RCxNQUFNQyxXQUFXLEVBQUUsQ0FBQztBQUNwQixNQUFNQyxTQUFTO0lBQ3BCO1FBQ0VDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxnQkFBZ0I7WUFBRUMsTUFBTTtZQUFTQyxVQUFVO1lBQUlDLFFBQVE7UUFBUTtRQUMvREMsU0FBUztZQUNQO1NBQ0Q7UUFDREMsbUJBQW1CO1lBQUM7U0FBa0M7SUFDeEQ7Q0FDRCxDQUFDO0FBQ0ssTUFBTUMsV0FBVyxLQUFLO0FBQ3RCLE1BQU1DLGdCQUFnQjtJQUMzQm5CLGFBQWFBO0lBQ2JDLGNBQWNBO0lBQ2RFLFVBQVVBO0lBQ1ZDLFlBQVlBO0lBQ1pDLFlBQVlBO0lBQ1pDLEtBQUtBO0lBQ0xDLFNBQVNBO0lBQ1RDLFVBQVVBO0lBQ1ZDLFFBQVFBO0lBQ1JTLFVBQVVBO0FBQ1osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudC5qcz83MWMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBEQU9fQUREUkVTUyA9IFwiMHgzMjY1OWU0NjlmNzRlNjVBN0MzZmNBZWExZmNBNTYwNDJDZWRmZjQ0XCI7XG5leHBvcnQgY29uc3QgRkFDVE9SWV9KU09OID0gcmVxdWlyZShcIi4vYmxvY2tjaGFpbjEvYnVpbGQvY29udHJhY3RzL0RBT0ZhY3RvcnkuanNvblwiKTtcbmV4cG9ydCBjb25zdCBEQU9fSlNPTiA9IHJlcXVpcmUoXCIuL2Jsb2NrY2hhaW4xL2J1aWxkL2NvbnRyYWN0cy9NeURBTy5qc29uXCIpO1xuZXhwb3J0IGNvbnN0IFRPS0VOX0pTT04gPSByZXF1aXJlKFwiLi9ibG9ja2NoYWluMS9idWlsZC9jb250cmFjdHMvU1VUb2tlbi5qc29uXCIpO1xuZXhwb3J0IGNvbnN0IExJTkVfQ09VTlQgPSA0O1xuZXhwb3J0IGNvbnN0IFJQQyA9XG4gIFwiaHR0cHM6Ly9wb2x5Z29uLW11bWJhaS5nLmFsY2hlbXkuY29tL3YyL3FrODd4czB4ZVZpRnppTTh4eUFja01wVmF0LWVfMzJUXCI7XG5leHBvcnQgY29uc3QgVE9QX0RBTyA9IFwiMHg0MEM4ZDY3MmQ5NTQyNjNjMkFmNzI5RDI4MDNjMzREQjhkODMyMTBDXCI7XG5leHBvcnQgY29uc3QgU1VCX0RBT1MgPSBbXTtcbmV4cG9ydCBjb25zdCBwYXJhbXMgPSBbXG4gIHtcbiAgICBjaGFpbk5hbWU6IFwiTXVtYmFpIFRlc3RuZXRcIixcbiAgICBjaGFpbklkOiBcIjB4MTM4ODFcIixcbiAgICBuYXRpdmVDdXJyZW5jeTogeyBuYW1lOiBcIk1BVElDXCIsIGRlY2ltYWxzOiAxOCwgc3ltYm9sOiBcIk1BVElDXCIgfSxcbiAgICBycGNVcmxzOiBbXG4gICAgICBcImh0dHBzOi8vcG9seWdvbi1tdW1iYWkuZy5hbGNoZW15LmNvbS92Mi9xazg3eHMweGVWaUZ6aU04eHlBY2tNcFZhdC1lXzMyVFwiLFxuICAgIF0sXG4gICAgYmxvY2tFeHBsb3JlclVybHM6IFtcImh0dHBzOi8vbXVtYmFpLnBvbHlnb25zY2FuLmNvbS9cIl0sXG4gIH0sXG5dO1xuZXhwb3J0IGNvbnN0IENIQUlOX0lEID0gODAwMTtcbmV4cG9ydCBjb25zdCBDT05TVEFOVF9ESUNUID0ge1xuICBEQU9fQUREUkVTUzogREFPX0FERFJFU1MsXG4gIEZBQ1RPUllfSlNPTjogRkFDVE9SWV9KU09OLFxuICBEQU9fSlNPTjogREFPX0pTT04sXG4gIFRPS0VOX0pTT046IFRPS0VOX0pTT04sXG4gIExJTkVfQ09VTlQ6IExJTkVfQ09VTlQsXG4gIFJQQzogUlBDLFxuICBUT1BfREFPOiBUT1BfREFPLFxuICBTVUJfREFPUzogU1VCX0RBT1MsXG4gIHBhcmFtczogcGFyYW1zLFxuICBDSEFJTl9JRDogQ0hBSU5fSUQsXG59O1xuIl0sIm5hbWVzIjpbIkRBT19BRERSRVNTIiwiRkFDVE9SWV9KU09OIiwicmVxdWlyZSIsIkRBT19KU09OIiwiVE9LRU5fSlNPTiIsIkxJTkVfQ09VTlQiLCJSUEMiLCJUT1BfREFPIiwiU1VCX0RBT1MiLCJwYXJhbXMiLCJjaGFpbk5hbWUiLCJjaGFpbklkIiwibmF0aXZlQ3VycmVuY3kiLCJuYW1lIiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJycGNVcmxzIiwiYmxvY2tFeHBsb3JlclVybHMiLCJDSEFJTl9JRCIsIkNPTlNUQU5UX0RJQ1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constant.js\n"));

/***/ })

});