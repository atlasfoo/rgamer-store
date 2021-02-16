module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/*! exports provided: setToken, getToken, removeToken, hasExpiredToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeToken\", function() { return removeToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasExpiredToken\", function() { return hasExpiredToken; });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/consts */ \"./utils/consts.js\");\n\n\nfunction setToken(token) {\n  localStorage.setItem(_utils_consts__WEBPACK_IMPORTED_MODULE_1__[\"TOKEN\"], token);\n}\nfunction getToken() {\n  return localStorage.getItem(_utils_consts__WEBPACK_IMPORTED_MODULE_1__[\"TOKEN\"]);\n}\nfunction removeToken() {\n  return localStorage.removeItem(_utils_consts__WEBPACK_IMPORTED_MODULE_1__[\"TOKEN\"]);\n}\nfunction hasExpiredToken(token) {\n  const tokenDecoded = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);\n  const expireDate = (tokenDecoded === null || tokenDecoded === void 0 ? void 0 : tokenDecoded.exp) * 1000;\n  const currentDate = new Date().getTime();\n  return currentDate > expireDate;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdG9rZW4uanM/MzQxNiJdLCJuYW1lcyI6WyJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlRPS0VOIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmVJdGVtIiwiaGFzRXhwaXJlZFRva2VuIiwidG9rZW5EZWNvZGVkIiwiand0RGVjb2RlIiwiZXhwaXJlRGF0ZSIsImV4cCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFDN0JDLGNBQVksQ0FBQ0MsT0FBYixDQUFxQkMsbURBQXJCLEVBQTRCSCxLQUE1QjtBQUNEO0FBRU0sU0FBU0ksUUFBVCxHQUFtQjtBQUN4QixTQUFPSCxZQUFZLENBQUNJLE9BQWIsQ0FBcUJGLG1EQUFyQixDQUFQO0FBQ0Q7QUFFTSxTQUFTRyxXQUFULEdBQXNCO0FBQzNCLFNBQU9MLFlBQVksQ0FBQ00sVUFBYixDQUF3QkosbURBQXhCLENBQVA7QUFDRDtBQUVNLFNBQVNLLGVBQVQsQ0FBeUJSLEtBQXpCLEVBQWdDO0FBQ3JDLFFBQU1TLFlBQVksR0FBR0MsaURBQVMsQ0FBQ1YsS0FBRCxDQUE5QjtBQUNBLFFBQU1XLFVBQVUsR0FBRyxDQUFBRixZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLFlBQUFBLFlBQVksQ0FBRUcsR0FBZCxJQUFvQixJQUF2QztBQUNBLFFBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7QUFFQSxTQUFRRixXQUFXLEdBQUNGLFVBQXBCO0FBQ0QiLCJmaWxlIjoiLi9hcGkvdG9rZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gXCIuLi91dGlscy9jb25zdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuKHRva2VuKXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU4sIHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCl7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbigpe1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzRXhwaXJlZFRva2VuKHRva2VuKSB7XG4gIGNvbnN0IHRva2VuRGVjb2RlZCA9IGp3dERlY29kZSh0b2tlbik7XG4gIGNvbnN0IGV4cGlyZURhdGUgPSB0b2tlbkRlY29kZWQ/LmV4cCAqIDEwMDA7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgcmV0dXJuIChjdXJyZW50RGF0ZT5leHBpcmVEYXRlKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/token.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  session: {},\n  login: () => null,\n  logout: () => null,\n  setReloadUser: () => null\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRmNGQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic2Vzc2lvbiIsImxvZ2luIiwibG9nb3V0Iiwic2V0UmVsb2FkVXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDO0FBQ2hDQyxTQUFPLEVBQUUsRUFEdUI7QUFFaENDLE9BQUssRUFBRSxNQUFNLElBRm1CO0FBR2hDQyxRQUFNLEVBQUUsTUFBTSxJQUhrQjtBQUloQ0MsZUFBYSxFQUFFLE1BQU07QUFKVyxDQUFELENBQWpDO0FBT2VMLDBFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgc2Vzc2lvbjoge30sXG4gIGxvZ2luOiAoKSA9PiBudWxsLFxuICBsb2dvdXQ6ICgpID0+IG51bGwsXG4gIHNldFJlbG9hZFVzZXI6ICgpID0+IG51bGxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-toastify/dist/ReactToastify.css\n");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/semantic-ui-css/semantic.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/global.scss */ \"./scss/global.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/token */ \"./api/token.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _jsxFileName = \"/media/Data/Repos/rgamer-store/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: auth,\n    1: setAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])({});\n  const {\n    0: reloadUser,\n    1: setReloadUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(() => {\n    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_8__[\"getToken\"])();\n\n    if (token) {\n      var _jwtDecode;\n\n      setAuth({\n        token,\n        user_id: (_jwtDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(token)) === null || _jwtDecode === void 0 ? void 0 : _jwtDecode.id\n      });\n    } else {\n      setAuth(null);\n    }\n\n    setReloadUser(false);\n  }, [reloadUser]);\n\n  const login = token => {\n    var _jwtDecode2;\n\n    Object(_api_token__WEBPACK_IMPORTED_MODULE_8__[\"setToken\"])(token);\n    setAuth({\n      token,\n      user_id: (_jwtDecode2 = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(token)) === null || _jwtDecode2 === void 0 ? void 0 : _jwtDecode2.id\n    });\n  };\n\n  const logout = token => {\n    if (auth) {\n      Object(_api_token__WEBPACK_IMPORTED_MODULE_8__[\"removeToken\"])();\n      setAuth(null);\n      router.push(\"/\");\n    }\n  };\n\n  const authData = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useMemo\"])(() => ({\n    session: auth,\n    login,\n    logout,\n    setReloadUser\n  }), [auth]);\n  if (auth === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Provider, {\n    value: authData,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_toastify__WEBPACK_IMPORTED_MODULE_1__[\"ToastContainer\"], {\n      position: \"top-right\",\n      autoClose: 5000,\n      hideProgressBar: true,\n      newestOnTop: true,\n      closeOnClick: true,\n      rtl: false,\n      pauseOnFocusLoss: false,\n      draggable: true,\n      pauseOnHover: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRoIiwic2V0QXV0aCIsInVzZVN0YXRlIiwicmVsb2FkVXNlciIsInNldFJlbG9hZFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldFRva2VuIiwidXNlcl9pZCIsImp3dERlY29kZSIsImlkIiwibG9naW4iLCJzZXRUb2tlbiIsImxvZ291dCIsInJlbW92ZVRva2VuIiwicHVzaCIsImF1dGhEYXRhIiwidXNlTWVtbyIsInNlc3Npb24iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3RELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBR0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLEtBQUssR0FBR0MsMkRBQVEsRUFBdEI7O0FBQ0EsUUFBSUQsS0FBSixFQUFXO0FBQUE7O0FBQ1RQLGFBQU8sQ0FBQztBQUNOTyxhQURNO0FBRU5FLGVBQU8sZ0JBQUVDLGlEQUFTLENBQUNILEtBQUQsQ0FBWCwrQ0FBRSxXQUFrQkk7QUFGckIsT0FBRCxDQUFQO0FBSUQsS0FMRCxNQUtPO0FBQ0xYLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDs7QUFDREcsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxHQVhRLEVBV04sQ0FBQ0QsVUFBRCxDQVhNLENBQVQ7O0FBYUEsUUFBTVUsS0FBSyxHQUFJTCxLQUFELElBQVc7QUFBQTs7QUFDdkJNLCtEQUFRLENBQUNOLEtBQUQsQ0FBUjtBQUNBUCxXQUFPLENBQUM7QUFDTk8sV0FETTtBQUVORSxhQUFPLGlCQUFFQyxpREFBUyxDQUFDSCxLQUFELENBQVgsZ0RBQUUsWUFBa0JJO0FBRnJCLEtBQUQsQ0FBUDtBQUlELEdBTkQ7O0FBUUEsUUFBTUcsTUFBTSxHQUFJUCxLQUFELElBQVc7QUFDeEIsUUFBR1IsSUFBSCxFQUFTO0FBQ1BnQixvRUFBVztBQUNYZixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FJLFlBQU0sQ0FBQ1ksSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsUUFBTUMsUUFBUSxHQUFHQyxxREFBTyxDQUN0QixPQUFPO0FBQ0xDLFdBQU8sRUFBRXBCLElBREo7QUFFTGEsU0FGSztBQUdMRSxVQUhLO0FBSUxYO0FBSkssR0FBUCxDQURzQixFQU90QixDQUFDSixJQUFELENBUHNCLENBQXhCO0FBVUEsTUFBSUEsSUFBSSxLQUFLcUIsU0FBYixFQUF3QixPQUFPLElBQVA7QUFFeEIsc0JBQ0UscUVBQUMsNERBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUgsUUFBN0I7QUFBQSw0QkFDRSxxRUFBQyxTQUFELG9CQUFlbkIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUNFLGNBQVEsRUFBQyxXQURYO0FBRUUsZUFBUyxFQUFFLElBRmI7QUFHRSxxQkFBZSxNQUhqQjtBQUlFLGlCQUFXLE1BSmI7QUFLRSxrQkFBWSxNQUxkO0FBTUUsU0FBRyxFQUFFLEtBTlA7QUFPRSxzQkFBZ0IsRUFBRSxLQVBwQjtBQVFFLGVBQVMsTUFSWDtBQVNFLGtCQUFZO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCIuLi9zY3NzL2dsb2JhbC5zY3NzXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgeyBzZXRUb2tlbiwgZ2V0VG9rZW4sIHJlbW92ZVRva2VuIH0gZnJvbSBcIi4uL2FwaS90b2tlblwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3JlbG9hZFVzZXIsIHNldFJlbG9hZFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRBdXRoKHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHVzZXJfaWQ6IGp3dERlY29kZSh0b2tlbik/LmlkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEF1dGgobnVsbCk7XG4gICAgfVxuICAgIHNldFJlbG9hZFVzZXIoZmFsc2UpO1xuICB9LCBbcmVsb2FkVXNlcl0pO1xuXG4gIGNvbnN0IGxvZ2luID0gKHRva2VuKSA9PiB7XG4gICAgc2V0VG9rZW4odG9rZW4pO1xuICAgIHNldEF1dGgoe1xuICAgICAgdG9rZW4sXG4gICAgICB1c2VyX2lkOiBqd3REZWNvZGUodG9rZW4pPy5pZCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAodG9rZW4pID0+IHtcbiAgICBpZihhdXRoKSB7XG4gICAgICByZW1vdmVUb2tlbigpO1xuICAgICAgc2V0QXV0aChudWxsKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0gXG5cbiAgY29uc3QgYXV0aERhdGEgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBzZXNzaW9uOiBhdXRoLFxuICAgICAgbG9naW4sXG4gICAgICBsb2dvdXQsXG4gICAgICBzZXRSZWxvYWRVc2VyLFxuICAgIH0pLFxuICAgIFthdXRoXVxuICApO1xuXG4gIGlmIChhdXRoID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRoRGF0YX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgIGhpZGVQcm9ncmVzc0JhclxuICAgICAgICBuZXdlc3RPblRvcFxuICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgcGF1c2VPbkZvY3VzTG9zcz17ZmFsc2V9XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgIC8+XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./scss/global.scss":
/*!**************************!*\
  !*** ./scss/global.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Njc3MvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scss/global.scss\n");

/***/ }),

/***/ "./utils/consts.js":
/*!*************************!*\
  !*** ./utils/consts.js ***!
  \*************************/
/*! exports provided: BASE_PATH, TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_PATH\", function() { return BASE_PATH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN\", function() { return TOKEN; });\nconst BASE_PATH = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:1337';\nconst TOKEN = 'rgamer_login_token';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdHMuanM/MjIyZSJdLCJuYW1lcyI6WyJCQVNFX1BBVEgiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9VUkwiLCJUT0tFTiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQVosR0FBK0JGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBM0MsR0FBK0QsdUJBQWpGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLG9CQUFkIiwiZmlsZSI6Ii4vdXRpbHMvY29uc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBU0VfUEFUSCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfVVJMPyBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTCA6ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnO1xuZXhwb3J0IGNvbnN0IFRPS0VOID0gJ3JnYW1lcl9sb2dpbl90b2tlbic7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/consts.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-decode\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCI/M2U5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqd3QtZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jwt-decode\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiP2FlOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdG9hc3RpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toastify\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });