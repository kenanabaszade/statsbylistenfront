"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./css/globals.css":
/*!*************************!*\
  !*** ./css/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"65e1963c5ac2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2Nzcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL2dsb2JhbHMuY3NzPzgxMzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2NWUxOTYzYzVhYzJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./css/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Work_Sans_arguments_subsets_latin_display_swap_variable_font_space_display_variableName_displayFont___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app\\\\layout.tsx\",\"import\":\"Work_Sans\",\"arguments\":[{\"subsets\":[\"latin\"],\"display\":\"swap\",\"variable\":\"--font-space-display\"}],\"variableName\":\"displayFont\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Work_Sans\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\",\\\"variable\\\":\\\"--font-space-display\\\"}],\\\"variableName\\\":\\\"displayFont\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Work_Sans_arguments_subsets_latin_display_swap_variable_font_space_display_variableName_displayFont___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Work_Sans_arguments_subsets_latin_display_swap_variable_font_space_display_variableName_displayFont___WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Merriweather_arguments_subsets_latin_display_swap_variable_font_space_default_weight_400_700_variableName_baseFont___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app\\\\layout.tsx\",\"import\":\"Merriweather\",\"arguments\":[{\"subsets\":[\"latin\"],\"display\":\"swap\",\"variable\":\"--font-space-default\",\"weight\":[\"400\",\"700\"]}],\"variableName\":\"baseFont\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Merriweather\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\",\\\"variable\\\":\\\"--font-space-default\\\",\\\"weight\\\":[\\\"400\\\",\\\"700\\\"]}],\\\"variableName\\\":\\\"baseFont\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Merriweather_arguments_subsets_latin_display_swap_variable_font_space_default_weight_400_700_variableName_baseFont___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Merriweather_arguments_subsets_latin_display_swap_variable_font_space_default_weight_400_700_variableName_baseFont___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _data_config_site_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/config/site.settings */ \"(app-pages-browser)/./data/config/site.settings.js\");\n/* harmony import */ var _data_config_site_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_config_site_settings__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-providers */ \"(app-pages-browser)/./app/theme-providers.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _data_config_colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/config/colors.js */ \"(app-pages-browser)/./data/config/colors.js\");\n/* harmony import */ var _data_config_colors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_config_colors_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/css/globals.css */ \"(app-pages-browser)/./css/globals.css\");\n/* harmony import */ var _components_shared_SearchProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/shared/SearchProvider */ \"(app-pages-browser)/./components/shared/SearchProvider.tsx\");\n/* harmony import */ var _components_shared_Analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/shared/Analytics */ \"(app-pages-browser)/./components/shared/Analytics.tsx\");\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"(app-pages-browser)/./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst globalColors = _data_config_colors_js__WEBPACK_IMPORTED_MODULE_4__.colors;\nconst style = [];\nObject.keys(globalColors).forEach((variant)=>{\n    Object.keys(globalColors[variant]).forEach((color)=>{\n        const value = globalColors[variant][color];\n        style.push(\"--\".concat(variant, \"-\").concat(color, \": \").concat(value));\n    });\n});\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Condition for blank page (e.g., '/dashboard')\n    const isBlankPage = pathname === \"/dashboard\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_8__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: _data_config_site_settings__WEBPACK_IMPORTED_MODULE_1__.siteConfig.language,\n            className: \"\".concat((next_font_google_target_css_path_app_layout_tsx_import_Merriweather_arguments_subsets_latin_display_swap_variable_font_space_default_weight_400_700_variableName_baseFont___WEBPACK_IMPORTED_MODULE_9___default().variable), \" \").concat((next_font_google_target_css_path_app_layout_tsx_import_Work_Sans_arguments_subsets_latin_display_swap_variable_font_space_display_variableName_displayFont___WEBPACK_IMPORTED_MODULE_10___default().variable), \" scroll-smooth\"),\n            suppressHydrationWarning: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                            children: \"\\n            :root, :before, :after {\\n              \".concat(style.join(\";\"), \"\\n            }\\n          \")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"76x76\",\n                            href: \"/static/favicons/apple-touch-icon.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: \"/static/favicons/favicon-32x32.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: \"/static/favicons/favicon-16x16.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/static/favicons/manifest.webmanifest\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"mask-icon\",\n                            href: \"/static/favicons/safari-pinned-tab.svg\",\n                            color: \"#5bbad5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"generator\",\n                            content: \"Shipixen\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"msapplication-TileColor\",\n                            content: \"#000000\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            media: \"(prefers-color-scheme: light)\",\n                            content: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            media: \"(prefers-color-scheme: dark)\",\n                            content: \"#000\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"alternate\",\n                            type: \"application/rss+xml\",\n                            href: \"/feed.xml\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    className: \"flex flex-col bg-white text-black antialiased dark:bg-gray-950 dark:text-white min-h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_providers__WEBPACK_IMPORTED_MODULE_2__.ThemeProviders, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Analytics__WEBPACK_IMPORTED_MODULE_7__.AnalyticsWrapper, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex flex-col justify-between items-center font-sans\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_SearchProvider__WEBPACK_IMPORTED_MODULE_6__.SearchProvider, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                        className: \"w-full flex flex-col  mb-auto\",\n                                        children: children\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kenan\\\\Documents\\\\listenby\\\\frontend\\\\stats-by-listen-master\\\\app\\\\layout.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"0h+B63IiVHeDT9bDhB3JTwv8ebY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFNQTtBQU1BQztBQWZtRDtBQUNOO0FBQ007QUFDUjtBQUN0QjtBQUN5QztBQUNIO0FBQ0U7QUFlbkUsTUFBTVMsZUFBZUosMERBQU1BO0FBQzNCLE1BQU1LLFFBQWtCLEVBQUU7QUFFMUJDLE9BQU9DLElBQUksQ0FBQ0gsY0FBY0ksT0FBTyxDQUFDLENBQUNDO0lBQ2pDSCxPQUFPQyxJQUFJLENBQUNILFlBQVksQ0FBQ0ssUUFBUSxFQUFFRCxPQUFPLENBQUMsQ0FBQ0U7UUFDMUMsTUFBTUMsUUFBUVAsWUFBWSxDQUFDSyxRQUFRLENBQUNDLE1BQU07UUFDMUNMLE1BQU1PLElBQUksQ0FBQyxLQUFnQkYsT0FBWEQsU0FBUSxLQUFhRSxPQUFWRCxPQUFNLE1BQVUsT0FBTkM7SUFDdkM7QUFDRjtBQUVlLFNBQVNFLFdBQVcsS0FBNEM7UUFBNUMsRUFBRUMsUUFBUSxFQUFrQyxHQUE1Qzs7SUFDakMsTUFBTUMsV0FBV2pCLDREQUFXQTtJQUM1QixNQUFNa0IsU0FBU2pCLDBEQUFTQTtJQUV4QixnREFBZ0Q7SUFDaEQsTUFBTWtCLGNBQWNGLGFBQWE7SUFFakMscUJBQ0UsOERBQUNaLG9FQUFZQTtrQkFDWCw0RUFBQ2U7WUFDQ0MsTUFBTXZCLGtFQUFVQSxDQUFDd0IsUUFBUTtZQUN6QkMsV0FBVyxHQUF3QjNCLE9BQXJCQyw0TkFBaUIsRUFBQyxLQUF3QixPQUFyQkQsOE1BQW9CLEVBQUM7WUFDeEQ2Qix3QkFBd0I7OzhCQUV4Qiw4REFBQ0M7O3NDQUNDLDhEQUFDbkI7c0NBQ0UseURBRW1CLE9BQWhCQSxNQUFNb0IsSUFBSSxDQUFDLE1BQUs7Ozs7OztzQ0FLdEIsOERBQUNDOzRCQUNDQyxLQUFJOzRCQUNKQyxPQUFNOzRCQUNOQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNIOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMRixPQUFNOzRCQUNOQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNIOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMRixPQUFNOzRCQUNOQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNIOzRCQUFLQyxLQUFJOzRCQUFXRSxNQUFLOzs7Ozs7c0NBQzFCLDhEQUFDSDs0QkFDQ0MsS0FBSTs0QkFDSkUsTUFBSzs0QkFDTG5CLE9BQU07Ozs7OztzQ0FFUiw4REFBQ3FCOzRCQUFLQyxNQUFLOzRCQUFZQyxTQUFROzs7Ozs7c0NBQy9CLDhEQUFDRjs0QkFBS0MsTUFBSzs0QkFBMEJDLFNBQVE7Ozs7OztzQ0FDN0MsOERBQUNGOzRCQUNDQyxNQUFLOzRCQUNMRSxPQUFNOzRCQUNORCxTQUFROzs7Ozs7c0NBRVYsOERBQUNGOzRCQUNDQyxNQUFLOzRCQUNMRSxPQUFNOzRCQUNORCxTQUFROzs7Ozs7c0NBRVYsOERBQUNQOzRCQUFLQyxLQUFJOzRCQUFZRyxNQUFLOzRCQUFzQkQsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUd4RCw4REFBQ007b0JBQUtkLFdBQVU7OEJBQ2QsNEVBQUN4Qiw0REFBY0E7OzBDQUNiLDhEQUFDSywwRUFBZ0JBOzs7OzswQ0FFakIsOERBQUNrQztnQ0FBSWYsV0FBVTswQ0FDYiw0RUFBQ3BCLDZFQUFjQTs4Q0FDYiw0RUFBQ29DO3dDQUFLaEIsV0FBVTtrREFDYlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25CO0dBL0V3QkQ7O1FBQ0xmLHdEQUFXQTtRQUNiQyxzREFBU0E7OztLQUZGYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JzsgLy8gRm9yIGNsaWVudC1zaWRlIGNvZGVcblxuaW1wb3J0IHsgTWVycml3ZWF0aGVyLCBXb3JrX1NhbnMgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXInO1xuaW1wb3J0IHsgc2l0ZUNvbmZpZyB9IGZyb20gJ0AvZGF0YS9jb25maWcvc2l0ZS5zZXR0aW5ncyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVycyB9IGZyb20gJy4vdGhlbWUtcHJvdmlkZXJzJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQC9kYXRhL2NvbmZpZy9jb2xvcnMuanMnO1xuaW1wb3J0ICdAL2Nzcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBTZWFyY2hQcm92aWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9zaGFyZWQvU2VhcmNoUHJvdmlkZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzV3JhcHBlciB9IGZyb20gJ0AvY29tcG9uZW50cy9zaGFyZWQvQW5hbHl0aWNzJztcbmltcG9ydCB7IFVzZXJQcm92aWRlciwgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAvY2xpZW50JztcblxuY29uc3QgZGlzcGxheUZvbnQgPSBXb3JrX1NhbnMoe1xuICBzdWJzZXRzOiBbJ2xhdGluJ10sXG4gIGRpc3BsYXk6ICdzd2FwJyxcbiAgdmFyaWFibGU6ICctLWZvbnQtc3BhY2UtZGlzcGxheScsXG59KTtcblxuY29uc3QgYmFzZUZvbnQgPSBNZXJyaXdlYXRoZXIoe1xuICBzdWJzZXRzOiBbJ2xhdGluJ10sXG4gIGRpc3BsYXk6ICdzd2FwJyxcbiAgdmFyaWFibGU6ICctLWZvbnQtc3BhY2UtZGVmYXVsdCcsXG4gIHdlaWdodDogWyc0MDAnLCAnNzAwJ10sXG59KTtcblxuY29uc3QgZ2xvYmFsQ29sb3JzID0gY29sb3JzO1xuY29uc3Qgc3R5bGU6IHN0cmluZ1tdID0gW107XG5cbk9iamVjdC5rZXlzKGdsb2JhbENvbG9ycykuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xuICBPYmplY3Qua2V5cyhnbG9iYWxDb2xvcnNbdmFyaWFudF0pLmZvckVhY2goKGNvbG9yKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxDb2xvcnNbdmFyaWFudF1bY29sb3JdO1xuICAgIHN0eWxlLnB1c2goYC0tJHt2YXJpYW50fS0ke2NvbG9yfTogJHt2YWx1ZX1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTsgfSkge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7ICBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICAvLyBDb25kaXRpb24gZm9yIGJsYW5rIHBhZ2UgKGUuZy4sICcvZGFzaGJvYXJkJylcbiAgY29uc3QgaXNCbGFua1BhZ2UgPSBwYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQnOyAgXG5cbiAgcmV0dXJuIChcbiAgICA8VXNlclByb3ZpZGVyPlxuICAgICAgPGh0bWxcbiAgICAgICAgbGFuZz17c2l0ZUNvbmZpZy5sYW5ndWFnZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlRm9udC52YXJpYWJsZX0gJHtkaXNwbGF5Rm9udC52YXJpYWJsZX0gc2Nyb2xsLXNtb290aGB9XG4gICAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1xuICAgICAgPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgOnJvb3QsIDpiZWZvcmUsIDphZnRlciB7XG4gICAgICAgICAgICAgICR7c3R5bGUuam9pbignOycpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICAgIHNpemVzPVwiNzZ4NzZcIlxuICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb25zL21hbmlmZXN0LndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwibWFzay1pY29uXCJcbiAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiXG4gICAgICAgICAgICBjb2xvcj1cIiM1YmJhZDVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImdlbmVyYXRvclwiIGNvbnRlbnQ9XCJTaGlwaXhlblwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidGhlbWUtY29sb3JcIlxuICAgICAgICAgICAgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiXG4gICAgICAgICAgICBjb250ZW50PVwiI2ZmZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInRoZW1lLWNvbG9yXCJcbiAgICAgICAgICAgIG1lZGlhPVwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXG4gICAgICAgICAgICBjb250ZW50PVwiIzAwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiIGhyZWY9XCIvZmVlZC54bWxcIiAvPlxuICAgICAgICA8L2hlYWQ+XG5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy13aGl0ZSB0ZXh0LWJsYWNrIGFudGlhbGlhc2VkIGRhcms6YmctZ3JheS05NTAgZGFyazp0ZXh0LXdoaXRlIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVycz5cbiAgICAgICAgICAgIDxBbmFseXRpY3NXcmFwcGVyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sICBtYi1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICA8L1NlYXJjaFByb3ZpZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgICAgICB7LyogeyFpc0JsYW5rUGFnZSAmJiA8Rm9vdGVyIC8+fSAgICovfVxuICAgICAgICAgIDwvVGhlbWVQcm92aWRlcnM+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuXG4iXSwibmFtZXMiOlsiZGlzcGxheUZvbnQiLCJiYXNlRm9udCIsInNpdGVDb25maWciLCJUaGVtZVByb3ZpZGVycyIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiY29sb3JzIiwiU2VhcmNoUHJvdmlkZXIiLCJBbmFseXRpY3NXcmFwcGVyIiwiVXNlclByb3ZpZGVyIiwiZ2xvYmFsQ29sb3JzIiwic3R5bGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhcmlhbnQiLCJjb2xvciIsInZhbHVlIiwicHVzaCIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwicm91dGVyIiwiaXNCbGFua1BhZ2UiLCJodG1sIiwibGFuZyIsImxhbmd1YWdlIiwiY2xhc3NOYW1lIiwidmFyaWFibGUiLCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmciLCJoZWFkIiwiam9pbiIsImxpbmsiLCJyZWwiLCJzaXplcyIsImhyZWYiLCJ0eXBlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWVkaWEiLCJib2R5IiwiZGl2IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});