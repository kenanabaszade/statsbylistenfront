"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/dashboard/layout.tsx":
/*!**********************************!*\
  !*** ./app/dashboard/layout.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboard_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dashboard_components/sidebar/sidebar */ \"(app-pages-browser)/./components/dashboard_components/sidebar/sidebar.tsx\");\n/* harmony import */ var _components_dashboard_components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dashboard_components/header/header */ \"(app-pages-browser)/./components/dashboard_components/header/header.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction DashboardLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\dashboard\\\\layout.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"w-full flex-1 overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_components_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\dashboard\\\\layout.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\dashboard\\\\layout.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\dashboard\\\\layout.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\dashboard\\\\layout.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = DashboardLayout;\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWtEO0FBQ3NCO0FBQ0g7QUFFdEQsU0FBU0csZ0JBQWdCLEtBSXZDO1FBSnVDLEVBQ3RDQyxRQUFRLEVBR1QsR0FKdUM7SUFLdEMscUJBQ0UsOERBQUNKLDREQUFlQTtrQkFDZCw0RUFBQ0s7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNMLHdGQUFPQTs7Ozs7OEJBQ1IsOERBQUNNO29CQUFLRCxXQUFVOztzQ0FDZCw4REFBQ0osc0ZBQU1BOzs7Ozt3QkFDTkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBaEJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9sYXlvdXQudHN4PzcxZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIEVuc3VyZXMgdGhpcyBpcyBhIGNsaWVudC1zaWRlIGNvbXBvbmVudCBpZiByZXF1aXJlZFxyXG5cclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiQC9jb21wb25lbnRzL2Rhc2hib2FyZF9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvZGFzaGJvYXJkX2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkTGF5b3V0KHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleC0xIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJTaWRlYmFyIiwiSGVhZGVyIiwiRGFzaGJvYXJkTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/layout.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/dashboard_components/sidebar/sidebar.tsx":
/*!*************************************************************!*\
  !*** ./components/dashboard_components/sidebar/sidebar.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_dashboard_components_dashboardtools_dashboard_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dashboard_components/dashboardtools/dashboard-nav */ \"(app-pages-browser)/./components/dashboard_components/dashboardtools/dashboard-nav.tsx\");\n/* harmony import */ var _components_dashboard_components_dashboardtools_constants_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dashboard_components/dashboardtools/constants/data */ \"(app-pages-browser)/./components/dashboard_components/dashboardtools/constants/data.ts\");\n/* harmony import */ var _components_dashboard_components_dashboardtools_hooks_useSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dashboard_components/dashboardtools/hooks/useSidebar */ \"(app-pages-browser)/./components/dashboard_components/dashboardtools/hooks/useSidebar.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Sidebar(param) {\n    let { className } = param;\n    _s();\n    const { isMinimized, toggle } = (0,_components_dashboard_components_dashboardtools_hooks_useSidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebar)();\n    const handleToggle = ()=>{\n        toggle();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block\", !isMinimized ? \"w-72\" : \"w-[72px]\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden p-5 pt-10 lg:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    href: \"https://github.com/Kiranism/next-shadcn-dashboard-starter\",\n                    target: \"_blank\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 24 24\",\n                        fill: \"none\",\n                        stroke: \"currentColor\",\n                        strokeWidth: \"2\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        className: \"mr-2 h-6 w-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground\", isMinimized && \"rotate-180\"),\n                onClick: handleToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4 py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-3 py-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 space-y-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_components_dashboardtools_dashboard_nav__WEBPACK_IMPORTED_MODULE_1__.DashboardNav, {\n                            items: _components_dashboard_components_dashboardtools_constants_data__WEBPACK_IMPORTED_MODULE_2__.navItems\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\components\\\\dashboard_components\\\\sidebar\\\\sidebar.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"+prxiflwInXtvSQU01GMq20IGzg=\", false, function() {\n    return [\n        _components_dashboard_components_dashboardtools_hooks_useSidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebar\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkX2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhGO0FBQ0g7QUFDSTtBQUM5RDtBQUNVO0FBQ2Q7QUFNZCxTQUFTTSxRQUFRLEtBQTJCO1FBQTNCLEVBQUVDLFNBQVMsRUFBZ0IsR0FBM0I7O0lBQzlCLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsR0FBR1AsNEdBQVVBO0lBRTFDLE1BQU1RLGVBQWU7UUFDbkJEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFDQ0osV0FBV0osOENBQUVBLENBQ1YsaUdBQ0QsQ0FBQ0ssY0FBYyxTQUFTLFlBQ3hCRDs7MEJBR0YsOERBQUNLO2dCQUFJTCxXQUFVOzBCQUNiLDRFQUFDRixpREFBSUE7b0JBQ0hRLE1BQU07b0JBQ05DLFFBQU87OEJBRVAsNEVBQUNDO3dCQUNDQyxPQUFNO3dCQUNOQyxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxRQUFPO3dCQUNQQyxhQUFZO3dCQUNaQyxlQUFjO3dCQUNkQyxnQkFBZTt3QkFDZmYsV0FBVTtrQ0FFViw0RUFBQ2dCOzRCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNwQix1RkFBV0E7Z0JBQ1ZHLFdBQVdKLDhDQUFFQSxDQUNYLDRHQUNBSyxlQUFlO2dCQUVqQmlCLFNBQVNmOzs7Ozs7MEJBRVgsOERBQUNFO2dCQUFJTCxXQUFVOzBCQUNiLDRFQUFDSztvQkFBSUwsV0FBVTs4QkFDYiw0RUFBQ0s7d0JBQUlMLFdBQVU7a0NBQ2IsNEVBQUNQLHVHQUFZQTs0QkFBQzBCLE9BQU96QixvR0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQWxEd0JLOztRQUNVSix3R0FBVUE7OztLQURwQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmRfY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIudHN4PzMyMjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTmF2IH0gZnJvbSAnQC9jb21wb25lbnRzL2Rhc2hib2FyZF9jb21wb25lbnRzL2Rhc2hib2FyZHRvb2xzL2Rhc2hib2FyZC1uYXYnO1xuaW1wb3J0IHsgbmF2SXRlbXMgfSBmcm9tICdAL2NvbXBvbmVudHMvZGFzaGJvYXJkX2NvbXBvbmVudHMvZGFzaGJvYXJkdG9vbHMvY29uc3RhbnRzL2RhdGEnO1xuaW1wb3J0IHsgdXNlU2lkZWJhciB9IGZyb20gJ0AvY29tcG9uZW50cy9kYXNoYm9hcmRfY29tcG9uZW50cy9kYXNoYm9hcmR0b29scy9ob29rcy91c2VTaWRlYmFyJztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxudHlwZSBTaWRlYmFyUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoeyBjbGFzc05hbWUgfTogU2lkZWJhclByb3BzKSB7XG4gIGNvbnN0IHsgaXNNaW5pbWl6ZWQsIHRvZ2dsZSB9ID0gdXNlU2lkZWJhcigpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0b2dnbGUoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgYHJlbGF0aXZlICBoaWRkZW4gaC1zY3JlZW4gZmxleC1ub25lIGJvcmRlci1yIGJnLWNhcmQgdHJhbnNpdGlvbi1bd2lkdGhdIGR1cmF0aW9uLTUwMCBtZDpibG9ja2AsXG4gICAgICAgICFpc01pbmltaXplZCA/ICd3LTcyJyA6ICd3LVs3MnB4XScsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBwLTUgcHQtMTAgbGc6YmxvY2tcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL0tpcmFuaXNtL25leHQtc2hhZGNuLWRhc2hib2FyZC1zdGFydGVyJ31cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBoLTYgdy02XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE1IDZ2MTJhMyAzIDAgMSAwIDMtM0g2YTMgMyAwIDEgMCAzIDNWNmEzIDMgMCAxIDAtMyAzaDEyYTMgMyAwIDEgMC0zLTNcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDaGV2cm9uTGVmdFxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICdhYnNvbHV0ZSAtcmlnaHQtMyB0b3AtMTAgei01MCAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBiZy1iYWNrZ3JvdW5kIHRleHQtM3hsIHRleHQtZm9yZWdyb3VuZCcsXG4gICAgICAgICAgaXNNaW5pbWl6ZWQgJiYgJ3JvdGF0ZS0xODAnXG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBweS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgPERhc2hib2FyZE5hdiBpdGVtcz17bmF2SXRlbXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmROYXYiLCJuYXZJdGVtcyIsInVzZVNpZGViYXIiLCJjbiIsIkNoZXZyb25MZWZ0IiwiTGluayIsIlNpZGViYXIiLCJjbGFzc05hbWUiLCJpc01pbmltaXplZCIsInRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsImFzaWRlIiwiZGl2IiwiaHJlZiIsInRhcmdldCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBhdGgiLCJkIiwib25DbGljayIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard_components/sidebar/sidebar.tsx\n"));

/***/ })

});