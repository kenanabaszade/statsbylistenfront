"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/dashboard_components/dashboardtools/constants/data.ts":
/*!**************************************************************************!*\
  !*** ./components/dashboard_components/dashboardtools/constants/data.ts ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItems: function() { return /* binding */ navItems; },\n/* harmony export */   users: function() { return /* binding */ users; }\n/* harmony export */ });\nconst users = [\n    {\n        id: 1,\n        name: \"Candice Schiner\",\n        company: \"Dell\",\n        role: \"Frontend Developer\",\n        verified: false,\n        status: \"Active\"\n    },\n    {\n        id: 2,\n        name: \"John Doe\",\n        company: \"TechCorp\",\n        role: \"Backend Developer\",\n        verified: true,\n        status: \"Active\"\n    },\n    {\n        id: 3,\n        name: \"Alice Johnson\",\n        company: \"WebTech\",\n        role: \"UI Designer\",\n        verified: true,\n        status: \"Active\"\n    },\n    {\n        id: 4,\n        name: \"David Smith\",\n        company: \"Innovate Inc.\",\n        role: \"Fullstack Developer\",\n        verified: false,\n        status: \"Inactive\"\n    },\n    {\n        id: 5,\n        name: \"Emma Wilson\",\n        company: \"TechGuru\",\n        role: \"Product Manager\",\n        verified: true,\n        status: \"Active\"\n    },\n    {\n        id: 6,\n        name: \"James Brown\",\n        company: \"CodeGenius\",\n        role: \"QA Engineer\",\n        verified: false,\n        status: \"Active\"\n    },\n    {\n        id: 7,\n        name: \"Laura White\",\n        company: \"SoftWorks\",\n        role: \"UX Designer\",\n        verified: true,\n        status: \"Active\"\n    },\n    {\n        id: 8,\n        name: \"Michael Lee\",\n        company: \"DevCraft\",\n        role: \"DevOps Engineer\",\n        verified: false,\n        status: \"Active\"\n    },\n    {\n        id: 9,\n        name: \"Olivia Green\",\n        company: \"WebSolutions\",\n        role: \"Frontend Developer\",\n        verified: true,\n        status: \"Active\"\n    },\n    {\n        id: 10,\n        name: \"Robert Taylor\",\n        company: \"DataTech\",\n        role: \"Data Analyst\",\n        verified: false,\n        status: \"Active\"\n    }\n];\nconst navItems = [\n    {\n        title: \"Dashboard\",\n        href: \"/dashboard\",\n        icon: \"dashboard\",\n        label: \"Dashboard\"\n    },\n    {\n        title: \"Listen's cohorts\",\n        href: \"/dashboard/employee\",\n        icon: \"user\",\n        label: \"Listen's cohorts\"\n    },\n    {\n        title: \"Product\",\n        href: \"/dashboard/product\",\n        icon: \"product\",\n        label: \"product\"\n    },\n    {\n        title: \"Account\",\n        icon: \"user\",\n        label: \"account\",\n        children: [\n            {\n                title: \"Profile\",\n                href: \"/dashboard/profile\",\n                label: \"profile\"\n            },\n            {\n                title: \"Login\",\n                href: \"/\",\n                icon: \"login\",\n                label: \"login\"\n            }\n        ]\n    },\n    {\n        title: \"Kanban\",\n        href: \"/dashboard/kanban\",\n        icon: \"kanban\",\n        label: \"kanban\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkX2NvbXBvbmVudHMvZGFzaGJvYXJkdG9vbHMvY29uc3RhbnRzL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVTyxNQUFNQSxRQUFnQjtJQUMzQjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0NBQ0QsQ0FBQztBQWdDSyxNQUFNQyxXQUFzQjtJQUNqQztRQUNFQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxPQUFPO1FBQ1BFLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1lBQ1I7Z0JBQ0VKLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05FLE9BQU87WUFDVDtZQUNBO2dCQUNFSCxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxPQUFPO1lBQ1Q7U0FDRDtJQUNIO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztJQUNUO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZF9jb21wb25lbnRzL2Rhc2hib2FyZHRvb2xzL2NvbnN0YW50cy9kYXRhLnRzPzJmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9kYXNoYm9hcmRfY29tcG9uZW50cy9kYXNoYm9hcmR0b29scy90eXBlcy90eXBlJztcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjb21wYW55OiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgdmVyaWZpZWQ6IGJvb2xlYW47XG4gIHN0YXR1czogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCB1c2VyczogVXNlcltdID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0NhbmRpY2UgU2NoaW5lcicsXG4gICAgY29tcGFueTogJ0RlbGwnLFxuICAgIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInLFxuICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICBzdGF0dXM6ICdBY3RpdmUnXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnSm9obiBEb2UnLFxuICAgIGNvbXBhbnk6ICdUZWNoQ29ycCcsXG4gICAgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJyxcbiAgICB2ZXJpZmllZDogdHJ1ZSxcbiAgICBzdGF0dXM6ICdBY3RpdmUnXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnQWxpY2UgSm9obnNvbicsXG4gICAgY29tcGFueTogJ1dlYlRlY2gnLFxuICAgIHJvbGU6ICdVSSBEZXNpZ25lcicsXG4gICAgdmVyaWZpZWQ6IHRydWUsXG4gICAgc3RhdHVzOiAnQWN0aXZlJ1xuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ0RhdmlkIFNtaXRoJyxcbiAgICBjb21wYW55OiAnSW5ub3ZhdGUgSW5jLicsXG4gICAgcm9sZTogJ0Z1bGxzdGFjayBEZXZlbG9wZXInLFxuICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICBzdGF0dXM6ICdJbmFjdGl2ZSdcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6ICdFbW1hIFdpbHNvbicsXG4gICAgY29tcGFueTogJ1RlY2hHdXJ1JyxcbiAgICByb2xlOiAnUHJvZHVjdCBNYW5hZ2VyJyxcbiAgICB2ZXJpZmllZDogdHJ1ZSxcbiAgICBzdGF0dXM6ICdBY3RpdmUnXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiAnSmFtZXMgQnJvd24nLFxuICAgIGNvbXBhbnk6ICdDb2RlR2VuaXVzJyxcbiAgICByb2xlOiAnUUEgRW5naW5lZXInLFxuICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICBzdGF0dXM6ICdBY3RpdmUnXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiAnTGF1cmEgV2hpdGUnLFxuICAgIGNvbXBhbnk6ICdTb2Z0V29ya3MnLFxuICAgIHJvbGU6ICdVWCBEZXNpZ25lcicsXG4gICAgdmVyaWZpZWQ6IHRydWUsXG4gICAgc3RhdHVzOiAnQWN0aXZlJ1xuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgbmFtZTogJ01pY2hhZWwgTGVlJyxcbiAgICBjb21wYW55OiAnRGV2Q3JhZnQnLFxuICAgIHJvbGU6ICdEZXZPcHMgRW5naW5lZXInLFxuICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICBzdGF0dXM6ICdBY3RpdmUnXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiAnT2xpdmlhIEdyZWVuJyxcbiAgICBjb21wYW55OiAnV2ViU29sdXRpb25zJyxcbiAgICByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJyxcbiAgICB2ZXJpZmllZDogdHJ1ZSxcbiAgICBzdGF0dXM6ICdBY3RpdmUnXG4gIH0sXG4gIHtcbiAgICBpZDogMTAsXG4gICAgbmFtZTogJ1JvYmVydCBUYXlsb3InLFxuICAgIGNvbXBhbnk6ICdEYXRhVGVjaCcsXG4gICAgcm9sZTogJ0RhdGEgQW5hbHlzdCcsXG4gICAgdmVyaWZpZWQ6IGZhbHNlLFxuICAgIHN0YXR1czogJ0FjdGl2ZSdcbiAgfVxuXTtcblxuZXhwb3J0IHR5cGUgRW1wbG95ZWUgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0X25hbWU6IHN0cmluZztcbiAgbGFzdF9uYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBkYXRlX29mX2JpcnRoOiBzdHJpbmc7IC8vIENvbnNpZGVyIHVzaW5nIGEgcHJvcGVyIGRhdGUgdHlwZSBpZiBwb3NzaWJsZVxuICBzdHJlZXQ6IHN0cmluZztcbiAgY2l0eTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIHppcGNvZGU6IHN0cmluZztcbiAgbG9uZ2l0dWRlPzogbnVtYmVyOyAvLyBPcHRpb25hbCBmaWVsZFxuICBsYXRpdHVkZT86IG51bWJlcjsgLy8gT3B0aW9uYWwgZmllbGRcbiAgam9iOiBzdHJpbmc7XG4gIHByb2ZpbGVfcGljdHVyZT86IHN0cmluZyB8IG51bGw7IC8vIFByb2ZpbGUgcGljdHVyZSBjYW4gYmUgYSBzdHJpbmcgKFVSTCkgb3IgbnVsbCAoaWYgbm8gcGljdHVyZSlcbn07XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB7XG4gIHBob3RvX3VybDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgaWQ6IG51bWJlcjtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1zOiBOYXZJdGVtW10gPSBbXG4gIHtcbiAgICB0aXRsZTogJ0Rhc2hib2FyZCcsXG4gICAgaHJlZjogJy9kYXNoYm9hcmQnLFxuICAgIGljb246ICdkYXNoYm9hcmQnLFxuICAgIGxhYmVsOiAnRGFzaGJvYXJkJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGlzdGVuJ3MgY29ob3J0c1wiLFxuICAgIGhyZWY6ICcvZGFzaGJvYXJkL2VtcGxveWVlJyxcbiAgICBpY29uOiAndXNlcicsXG4gICAgbGFiZWw6IFwiTGlzdGVuJ3MgY29ob3J0c1wiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Byb2R1Y3QnLFxuICAgIGhyZWY6ICcvZGFzaGJvYXJkL3Byb2R1Y3QnLFxuICAgIGljb246ICdwcm9kdWN0JyxcbiAgICBsYWJlbDogJ3Byb2R1Y3QnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBsYWJlbDogJ2FjY291bnQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnUHJvZmlsZScsXG4gICAgICAgIGhyZWY6ICcvZGFzaGJvYXJkL3Byb2ZpbGUnLFxuICAgICAgICBsYWJlbDogJ3Byb2ZpbGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0xvZ2luJyxcbiAgICAgICAgaHJlZjogJy8nLFxuICAgICAgICBpY29uOiAnbG9naW4nLFxuICAgICAgICBsYWJlbDogJ2xvZ2luJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnS2FuYmFuJyxcbiAgICBocmVmOiAnL2Rhc2hib2FyZC9rYW5iYW4nLFxuICAgIGljb246ICdrYW5iYW4nLFxuICAgIGxhYmVsOiAna2FuYmFuJ1xuICB9XG5dO1xuIl0sIm5hbWVzIjpbInVzZXJzIiwiaWQiLCJuYW1lIiwiY29tcGFueSIsInJvbGUiLCJ2ZXJpZmllZCIsInN0YXR1cyIsIm5hdkl0ZW1zIiwidGl0bGUiLCJocmVmIiwiaWNvbiIsImxhYmVsIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard_components/dashboardtools/constants/data.ts\n"));

/***/ })

});