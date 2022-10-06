self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/price/price-slice.js":
/*!************************************!*\
  !*** ./redux/price/price-slice.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "priceSlice": function() { return /* binding */ priceSlice; }
/* harmony export */ });
/* harmony import */ var C_projects_project_one_bitcoin_task_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _price_operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price-operation */ "./redux/price/price-operation.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var initialState = {
  currency: [],
  time: null
};
var priceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
  name: 'price',
  initialState: initialState,
  extraReducers: (0,C_projects_project_one_bitcoin_task_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, _price_operation__WEBPACK_IMPORTED_MODULE_1__.default.fulfilled, function (state, action) {
    state.time = action.payload.data.time.updated;
    state.currency = Object.values(action.payload.data.bpi);
  })
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcHJpY2UvcHJpY2Utc2xpY2UuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVuY3kiLCJ0aW1lIiwicHJpY2VTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImV4dHJhUmVkdWNlcnMiLCJnZXRQcmljZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImRhdGEiLCJ1cGRhdGVkIiwiT2JqZWN0IiwidmFsdWVzIiwiYnBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxVQUFRLEVBQUUsRUFEUztBQUVuQkMsTUFBSSxFQUFFO0FBRmEsQ0FBckI7QUFLTyxJQUFNQyxVQUFVLEdBQUdDLDZEQUFXLENBQUM7QUFDcENDLE1BQUksRUFBRSxPQUQ4QjtBQUVwQ0wsY0FBWSxFQUFaQSxZQUZvQztBQUdwQ00sZUFBYSxFQUFFLHVJQUNaQywrREFEVSxZQUNVQyxLQURWLEVBQ2lCQyxNQURqQixFQUN5QjtBQUNsQ0QsU0FBSyxDQUFDTixJQUFOLEdBQWFPLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CVCxJQUFwQixDQUF5QlUsT0FBdEM7QUFDQUosU0FBSyxDQUFDUCxRQUFOLEdBQWlCWSxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsTUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JJLEdBQWxDLENBQWpCO0FBQ0QsR0FKVTtBQUh1QixDQUFELENBQTlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTBjMTFmZWNhZGE1MWY4NTdkYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBnZXRQcmljZSBmcm9tICcuL3ByaWNlLW9wZXJhdGlvbic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVuY3k6IFtdLFxyXG4gIHRpbWU6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpY2VTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncHJpY2UnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbZ2V0UHJpY2UuZnVsZmlsbGVkXShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLnRpbWUgPSBhY3Rpb24ucGF5bG9hZC5kYXRhLnRpbWUudXBkYXRlZDtcclxuICAgICAgc3RhdGUuY3VycmVuY3kgPSBPYmplY3QudmFsdWVzKGFjdGlvbi5wYXlsb2FkLmRhdGEuYnBpKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=