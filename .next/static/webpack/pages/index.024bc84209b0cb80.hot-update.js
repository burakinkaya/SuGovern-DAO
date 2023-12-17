"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_UserHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/UserHelper */ \"./src/helpers/UserHelper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Popup */ \"./src/components/Popup.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constant */ \"./constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        text: \"\",\n        title: \"\"\n    }); //this is used inside Popup component, to pass a message to the inside of the popup when an error occurs, or a transaction is successful, or in a case of warning\n    const [popupTrigger, setPopupTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); //this is used inside Popup component, to trigger the popup to show up\n    const [daoFactoryContract, setDaoFactoryContract] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined); //to store the DAOFactory contract instance\n    const [all_daos, setall_daos] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); //to store all the DAOs created by the DAOFactory contract\n    const [topDAOAddress, setTopDAOAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"); //to store the address of the top DAO\n    const [isCorrect, setIsCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); //this is used to change between the tabs, we will set it when a user clicks on the buttons on the sidebar, in default it is set to 10, which is the view proposals tab\n    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); //to check if the page is loaded, i.e. all the DAOs are fetched from the blockchain\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!loaded) {\n            (0,_helpers_UserHelper__WEBPACK_IMPORTED_MODULE_3__.WalletConnect)().then((res)=>{\n                setAccount(res);\n                console.log(\"account is \", res);\n            });\n            setLoaded(true);\n        // if (!daoFactoryContract) {\n        //   setDaoFactoryContract(BindContract(FACTORY_JSON[\"abi\"], DAO_ADDRESS))\n        // } else {\n        //   let res\n        //   if (all_daos.length === 0) {\n        //     console.log(daoFactoryContract)\n        //     fetchAllDaos(daoFactoryContract).then((result) => setall_daos(result))\n        //   } else {\n        //\n        //   }\n        // }\n        }\n    }, [\n        daoFactoryContract,\n        all_daos,\n        loaded\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(e.target[0].value);\n        setInp(e.target[0].value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"SU Govern\"\n                    }, void 0, false, {\n                        fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A blockchain dao app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                logged: account\n            }, void 0, false, {\n                fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"index-page\",\n                children: !loaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, {}, void 0, false, {\n                    fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"top-dao\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"top-dao-card\",\n                                address: _constant__WEBPACK_IMPORTED_MODULE_9__.TOP_DAO\n                            }, void 0, false, {\n                                fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sub-dao\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.SimpleGrid, {\n                                columns: _constant__WEBPACK_IMPORTED_MODULE_9__.LINE_COUNT,\n                                spacing: 10,\n                                children: _constant__WEBPACK_IMPORTED_MODULE_9__.SUB_DAOS.map((dao, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        address: dao\n                                    }, index, false, {\n                                        fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                trigger: popupTrigger,\n                setTrigger: setPopupTrigger,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"h2 text-black\",\n                        children: alertMessage.title\n                    }, void 0, false, {\n                        fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: alertMessage.text\n                    }, void 0, false, {\n                        fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/burakinkaya/Documents/GitHub/SuGovern-DAO/src/pages/index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qJOJgRdDIav5B6GzEpUSiK/eN88=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7XG4gIEJpbmRDb250cmFjdCxcbiAgV2FsbGV0Q29ubmVjdCxcbiAgRGFvSXNFeGlzdCxcbiAgZmV0Y2hOZXh0RGFvSWQsXG4gIGZldGNoQWxsRGFvcyxcbiAgTmV0d29ya0NvbnRyb2wsXG59IGZyb20gXCJAL2hlbHBlcnMvVXNlckhlbHBlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyBTaW1wbGVHcmlkLCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiQC9jb21wb25lbnRzL1BvcHVwXCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHtcbiAgREFPX0FERFJFU1MsXG4gIERBT19KU09OLFxuICBGQUNUT1JZX0pTT04sXG4gIENIQUlOX0lELFxuICBUT0tFTl9BRERSRVNTLFxuICBUT1BfREFPLFxuICBTVUJfREFPUyxcbiAgTElORV9DT1VOVCxcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWxlcnRNZXNzYWdlLCBzZXRBbGVydE1lc3NhZ2VdID0gdXNlU3RhdGUoeyB0ZXh0OiBcIlwiLCB0aXRsZTogXCJcIiB9KTsgLy90aGlzIGlzIHVzZWQgaW5zaWRlIFBvcHVwIGNvbXBvbmVudCwgdG8gcGFzcyBhIG1lc3NhZ2UgdG8gdGhlIGluc2lkZSBvZiB0aGUgcG9wdXAgd2hlbiBhbiBlcnJvciBvY2N1cnMsIG9yIGEgdHJhbnNhY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgb3IgaW4gYSBjYXNlIG9mIHdhcm5pbmdcbiAgY29uc3QgW3BvcHVwVHJpZ2dlciwgc2V0UG9wdXBUcmlnZ2VyXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy90aGlzIGlzIHVzZWQgaW5zaWRlIFBvcHVwIGNvbXBvbmVudCwgdG8gdHJpZ2dlciB0aGUgcG9wdXAgdG8gc2hvdyB1cFxuICBjb25zdCBbZGFvRmFjdG9yeUNvbnRyYWN0LCBzZXREYW9GYWN0b3J5Q29udHJhY3RdID0gdXNlU3RhdGUodW5kZWZpbmVkKTsgLy90byBzdG9yZSB0aGUgREFPRmFjdG9yeSBjb250cmFjdCBpbnN0YW5jZVxuICBjb25zdCBbYWxsX2Rhb3MsIHNldGFsbF9kYW9zXSA9IHVzZVN0YXRlKFtdKTsgLy90byBzdG9yZSBhbGwgdGhlIERBT3MgY3JlYXRlZCBieSB0aGUgREFPRmFjdG9yeSBjb250cmFjdFxuICBjb25zdCBbdG9wREFPQWRkcmVzcywgc2V0VG9wREFPQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTsgLy90byBzdG9yZSB0aGUgYWRkcmVzcyBvZiB0aGUgdG9wIERBT1xuICBjb25zdCBbaXNDb3JyZWN0LCBzZXRJc0NvcnJlY3RdID0gdXNlU3RhdGUoZmFsc2UpOyAvL3RoaXMgaXMgdXNlZCB0byBjaGFuZ2UgYmV0d2VlbiB0aGUgdGFicywgd2Ugd2lsbCBzZXQgaXQgd2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b25zIG9uIHRoZSBzaWRlYmFyLCBpbiBkZWZhdWx0IGl0IGlzIHNldCB0byAxMCwgd2hpY2ggaXMgdGhlIHZpZXcgcHJvcG9zYWxzIHRhYlxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvL3RvIGNoZWNrIGlmIHRoZSBwYWdlIGlzIGxvYWRlZCwgaS5lLiBhbGwgdGhlIERBT3MgYXJlIGZldGNoZWQgZnJvbSB0aGUgYmxvY2tjaGFpblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgIFdhbGxldENvbm5lY3QoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0QWNjb3VudChyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnQgaXMgXCIsIHJlcyk7XG4gICAgICB9KTtcbiAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgIC8vIGlmICghZGFvRmFjdG9yeUNvbnRyYWN0KSB7XG4gICAgICAvLyAgIHNldERhb0ZhY3RvcnlDb250cmFjdChCaW5kQ29udHJhY3QoRkFDVE9SWV9KU09OW1wiYWJpXCJdLCBEQU9fQUREUkVTUykpXG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBsZXQgcmVzXG4gICAgICAvLyAgIGlmIChhbGxfZGFvcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYW9GYWN0b3J5Q29udHJhY3QpXG4gICAgICAvLyAgICAgZmV0Y2hBbGxEYW9zKGRhb0ZhY3RvcnlDb250cmFjdCkudGhlbigocmVzdWx0KSA9PiBzZXRhbGxfZGFvcyhyZXN1bHQpKVxuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy9cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cbiAgfSwgW2Rhb0ZhY3RvcnlDb250cmFjdCwgYWxsX2Rhb3MsIGxvYWRlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0WzBdLnZhbHVlKTtcbiAgICBzZXRJbnAoZS50YXJnZXRbMF0udmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U1UgR292ZXJuPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgYmxvY2tjaGFpbiBkYW8gYXBwXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgbG9nZ2VkPXthY2NvdW50fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1wYWdlXCI+XG4gICAgICAgIHshbG9hZGVkID8gKFxuICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widG9wLWRhb1wifT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidG9wLWRhby1jYXJkXCIgYWRkcmVzcz17VE9QX0RBT30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3ViLWRhb1wifT5cbiAgICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17TElORV9DT1VOVH0gc3BhY2luZz17MTB9PlxuICAgICAgICAgICAgICAgIHtTVUJfREFPUy5tYXAoKGRhbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IGFkZHJlc3M9e2Rhb30gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQb3B1cCB0cmlnZ2VyPXtwb3B1cFRyaWdnZXJ9IHNldFRyaWdnZXI9e3NldFBvcHVwVHJpZ2dlcn0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMiB0ZXh0LWJsYWNrXCI+e2FsZXJ0TWVzc2FnZS50aXRsZX08L2gyPlxuICAgICAgICA8cD57YWxlcnRNZXNzYWdlLnRleHR9PC9wPlxuICAgICAgPC9Qb3B1cD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJCaW5kQ29udHJhY3QiLCJXYWxsZXRDb25uZWN0IiwiRGFvSXNFeGlzdCIsImZldGNoTmV4dERhb0lkIiwiZmV0Y2hBbGxEYW9zIiwiTmV0d29ya0NvbnRyb2wiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkNhcmQiLCJTaW1wbGVHcmlkIiwiU3Bpbm5lciIsIlBvcHVwIiwiV2ViMyIsIkRBT19BRERSRVNTIiwiREFPX0pTT04iLCJGQUNUT1JZX0pTT04iLCJDSEFJTl9JRCIsIlRPS0VOX0FERFJFU1MiLCJUT1BfREFPIiwiU1VCX0RBT1MiLCJMSU5FX0NPVU5UIiwiSG9tZSIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYWxlcnRNZXNzYWdlIiwic2V0QWxlcnRNZXNzYWdlIiwidGV4dCIsInRpdGxlIiwicG9wdXBUcmlnZ2VyIiwic2V0UG9wdXBUcmlnZ2VyIiwiZGFvRmFjdG9yeUNvbnRyYWN0Iiwic2V0RGFvRmFjdG9yeUNvbnRyYWN0IiwidW5kZWZpbmVkIiwiYWxsX2Rhb3MiLCJzZXRhbGxfZGFvcyIsInRvcERBT0FkZHJlc3MiLCJzZXRUb3BEQU9BZGRyZXNzIiwiaXNDb3JyZWN0Iiwic2V0SXNDb3JyZWN0IiwibG9hZGVkIiwic2V0TG9hZGVkIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldElucCIsImRpdiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxvZ2dlZCIsImNsYXNzTmFtZSIsImFkZHJlc3MiLCJjb2x1bW5zIiwic3BhY2luZyIsIm1hcCIsImRhbyIsImluZGV4IiwidHJpZ2dlciIsInNldFRyaWdnZXIiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});