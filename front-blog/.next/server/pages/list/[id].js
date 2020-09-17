module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FGQr");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_Footer_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rCmJ");
/* harmony import */ var _static_style_components_Footer_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_Footer_less__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "footer"
  }, __jsx("div", null, "\u7CFB\u7EDF\u662F\u7531React+Node+ Ant Design"), __jsx("div", null, "whm.zone"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "EkE9":
/***/ (function(module, exports) {



/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FGQr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_global_comm_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sG+I");
/* harmony import */ var _static_style_global_comm_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_global_comm_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_style_pages_Home_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EkE9");
/* harmony import */ var _static_style_pages_Home_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_style_pages_Home_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_style_components_md_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("I6F5");
/* harmony import */ var _static_style_components_md_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_md_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bMwp");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("HWFp");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("9Oib");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("bi5S");
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("b0oO");
/* harmony import */ var _components_Author_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Yo3B");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("8lYe");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function ContentList({
  listContent
}) {
  const {
    0: mylist,
    1: setMylist
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(listContent);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setMylist(listContent);
  }, [listContent]);
  const renderer = new marked__WEBPACK_IMPORTED_MODULE_9___default.a.Renderer();
  marked__WEBPACK_IMPORTED_MODULE_9___default.a.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return highlight_js__WEBPACK_IMPORTED_MODULE_10___default.a.highlightAuto(code).value;
    }
  });

  let header = __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"].Item, {
    onClick: () => router.push('/')
  }, __jsx("a", null, "\u9996\u9875")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"].Item, null, "\u89C6\u9891\u5217\u8868")), __jsx("span", null, "\u6700\u65B0\u65E5\u5FD7"));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "Home"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1"
  })), __jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "home-main",
    type: "flex",
    justify: "center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "home-main-left",
    xs: 23,
    sm: 23,
    md: 16,
    lg: 16,
    xl: 16
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["List"], {
    dataSource: mylist,
    itemLayout: "vertical",
    header: header,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["List"].Item, null, __jsx("a", {
      className: "list-title"
    }, item.title), __jsx("div", {
      className: "list-sub-title"
    }, __jsx("div", {
      className: "sub-item"
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CalendarOutlined"], null), __jsx("span", {
      className: "sub-txt"
    }, item.addTime)), __jsx("div", {
      className: "sub-item"
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["FolderOutlined"], null), __jsx("span", {
      className: "sub-txt"
    }, item.typeName)), __jsx("div", {
      className: "sub-item"
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["FireOutlined"], null), __jsx("span", {
      className: "sub-txt"
    }, item.view_count))), __jsx("div", {
      className: "list-context",
      dangerouslySetInnerHTML: {
        __html: marked__WEBPACK_IMPORTED_MODULE_9___default()(item.introduce)
      }
    }))
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "home-main-right",
    xs: 0,
    sm: 0,
    md: 5,
    lg: 5,
    xl: 5
  }, __jsx(_components_Author_js__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null))), __jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null));
}

ContentList.getInitialProps = async context => {
  let id = context.query.id;
  let res = await Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[/* getArticleList */ "b"])(id);
  return {
    listContent: res.data.data || []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ContentList);

/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "I6F5":
/***/ (function(module, exports) {



/***/ }),

/***/ "LFS0":
/***/ (function(module, exports) {



/***/ }),

/***/ "Yo3B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_style_components_Author_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zMww");
/* harmony import */ var _static_style_components_Author_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_Author_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Author = () => {
  return __jsx("div", {
    className: "author-div comm-box"
  }, __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 80,
    src: "https://avatars3.githubusercontent.com/u/42735363?s=460&u=048ca9b722ac4e123dec854a332bcc3c461419d8&v=4"
  })), __jsx("div", {
    className: "author-introduction"
  }, "Hi,my name is wenhaoming", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null, "\u793E\u4EA4\u8D26\u53F7"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["GithubOutlined"], null),
    className: "account"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["QqOutlined"], null),
    className: "account"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["WechatOutlined"], null),
    className: "account"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Author);

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_header_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LFS0");
/* harmony import */ var _static_style_components_header_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_header_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bMwp");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import 'static/style/components/header.less'







function useProxy(initialState) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  let proxyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let proxyState = new Proxy(initialState, {
      set(target, name, value, property) {
        setState({});
        return Reflect.set(target, name, value, property);
      },

      get(target, name, property) {
        return Reflect.get(target, name, property);
      }

    });
    return proxyState;
  }, []);
  return [proxyState, state];
}

const Header = () => {
  const {
    0: types,
    1: setTypes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  let [proxyState, state] = useProxy({
    count: 0
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getTypeInfoFn = async () => {
      return await Object(_api_index__WEBPACK_IMPORTED_MODULE_4__[/* getTypeInfo */ "c"])();
    };

    getTypeInfoFn().then(res => {
      console.log(res.data);
      setTypes(res.data);
    });
  }, []);

  function getIcon(key) {
    switch (key) {
      case 1:
        return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["VideoCameraOutlined"], null);

      case 2:
        return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CoffeeOutlined"], null);

      case 3:
        return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SmileTwoTone"], null);

      default:
        return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["VideoCameraOutlined"], null);
    }
  }

  return __jsx("div", {
    className: "header"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    offset: 0.5,
    xs: 17,
    sm: 17,
    md: 14,
    lg: 14,
    xl: 14
  }, __jsx("span", {
    className: "header-logo"
  }, "\u5C0F\u660E"), __jsx("span", {
    className: "header-txt"
  }, "\u4E13\u6CE8\u524D\u7AEF")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 5,
    sm: 5,
    md: 7,
    lg: 7,
    xl: 7
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "horizontal"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "/",
    onClick: () => router.push('/')
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HomeOutlined"], null), "\u9996\u9875"), types.map(item => {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      key: item.orderNum,
      onClick: () => router.push('/list/[id]', `/list/${item.orderNum}`)
    }, getIcon(item.orderNum), item.typeName);
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "bMwp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getArticleList; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getArticleById; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getTypeInfo; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./api/instance.js
 // import axios from "axios";

console.log(process.env, '======');
const config = {};

if (true) {
  //服务器
  config.baseURL = "http://127.0.0.1:7002/";
} else {}

const instance = external_axios_default.a.create(config);
/* harmony default export */ var api_instance = (instance);
// CONCATENATED MODULE: ./api/index.js

const getArticleList = async (id = '') => {
  return api_instance.get('getArticleList/' + id);
};
const getArticleById = id => {
  return api_instance.get('/getArticleById/' + id);
};
const getTypeInfo = () => {
  return api_instance.get('/getTypeInfo');
};

/***/ }),

/***/ "bi5S":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "rCmJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "sG+I":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zMww":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });