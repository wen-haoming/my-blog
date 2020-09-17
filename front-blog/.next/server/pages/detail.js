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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xj6D");


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

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "LFS0":
/***/ (function(module, exports) {



/***/ }),

/***/ "Nm2R":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xj6D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./static/style/global/comm.less
var comm = __webpack_require__("sG+I");

// EXTERNAL MODULE: ./static/style/pages/Home.less
var Home = __webpack_require__("EkE9");

// EXTERNAL MODULE: ./static/style/pages/Detail.less
var Detail = __webpack_require__("vYqY");

// EXTERNAL MODULE: ./node_modules/markdown-navbar/dist/navbar.css
var navbar = __webpack_require__("Nm2R");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");

// EXTERNAL MODULE: external "markdown-navbar"
var external_markdown_navbar_ = __webpack_require__("u2le");

// EXTERNAL MODULE: ./api/index.js + 1 modules
var api = __webpack_require__("bMwp");

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/monokai-sublime.css
var monokai_sublime = __webpack_require__("bi5S");

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__("b0oO");

// EXTERNAL MODULE: ./components/Author.js
var Author = __webpack_require__("Yo3B");

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./components/tocify.tsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Link
} = external_antd_["Anchor"];
// TOC目录树结
class tocify_Tocify {
  constructor() {
    _defineProperty(this, "tocItems", []);

    _defineProperty(this, "index", 0);

    _defineProperty(this, "reset", () => {
      this.tocItems = [];
      this.index = 0;
    });

    this.tocItems = [];
    this.index = 0;
  }

  add(text, level) {
    const anchor = `toc${level}${++this.index}`;
    const item = {
      anchor,
      level,
      text
    };
    const items = this.tocItems;

    if (items.length === 0) {
      // 第一个 item 直接 push
      items.push(item);
    } else {
      let lastItem = Object(external_lodash_["last"])(items); // 最后一个 item

      if (item.level > lastItem.level) {
        // item 是 lastItem 的 children
        for (let i = lastItem.level + 1; i <= 2; i++) {
          const {
            children
          } = lastItem;

          if (!children) {
            // 如果 children 不存在
            lastItem.children = [item];
            break;
          }

          lastItem = Object(external_lodash_["last"])(children); // 重置 lastItem 为 children 的最后一个 item

          if (item.level <= lastItem.level) {
            // item level 小于或等于 lastItem level 都视为与 children 同级
            children.push(item);
            break;
          }
        }
      } else {
        // 置于最顶级
        items.push(item);
      }
    }

    return anchor;
  }

  renderToc(items) {
    // 递归 render
    return items.map(item => __jsx(Link, {
      key: item.anchor,
      href: `#${item.anchor}`,
      title: item.text
    }, item.children && this.renderToc(item.children)));
  }

  render() {
    return __jsx(external_antd_["Anchor"], {
      affix: true,
      showInkInFixed: true
    }, this.renderToc(this.tocItems));
  }

}
// CONCATENATED MODULE: ./pages/detail.js
var detail_jsx = external_react_default.a.createElement;



















function detail({
  content
}) {
  const {
    markdownVal,
    tocify
  } = Object(external_react_["useMemo"])(() => {
    const renderer = new external_marked_default.a.Renderer();
    const tocify = new tocify_Tocify();
    console.log(renderer, 'renderer');

    renderer.heading = function (text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    external_marked_default.a.setOptions({
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return external_highlight_js_default.a.highlightAuto(code).value;
      }
    });
    let html = external_marked_default()(content.article_content || '');
    return {
      markdownVal: html,
      tocify
    };
  }, []);

  let header = detail_jsx("div", null, detail_jsx(external_antd_["Breadcrumb"], null, detail_jsx(external_antd_["Breadcrumb"].Item, null, detail_jsx("a", {
    href: "/"
  }, " ", detail_jsx("span", {
    className: "bread-txt"
  }, "\u9996\u9875"), " ")), detail_jsx(external_antd_["Breadcrumb"].Item, null, detail_jsx("a", {
    href: "/list"
  }, " ", detail_jsx("span", {
    className: "bread-txt"
  }, "\u89C6\u9891\u5217\u8868"), " ")), detail_jsx(external_antd_["Breadcrumb"].Item, null, detail_jsx("span", {
    className: "bread-txt"
  }, "xxx"))));

  return detail_jsx(external_react_default.a.Fragment, null, detail_jsx(head_default.a, null, detail_jsx("title", null, "Home"), detail_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1"
  })), detail_jsx(Header["a" /* default */], null), detail_jsx(external_antd_["Row"], {
    className: "home-main",
    type: "flex",
    justify: "center"
  }, detail_jsx(external_antd_["Col"], {
    className: "home-main-left",
    xs: 23,
    sm: 23,
    md: 16,
    lg: 16,
    xl: 16
  }, detail_jsx("div", {
    className: "detail-bread"
  }, header), detail_jsx("div", {
    className: "detail-title"
  }, content.title), detail_jsx("div", {
    className: "detail-sub-title"
  }, detail_jsx("div", {
    className: "list-sub-title"
  }, detail_jsx("div", {
    className: "sub-item"
  }, detail_jsx(icons_["CalendarOutlined"], null), detail_jsx("span", {
    className: "sub-txt"
  }, "2020/9/2")), detail_jsx("div", {
    className: "sub-item"
  }, detail_jsx(icons_["FolderOutlined"], null), detail_jsx("span", {
    className: "sub-txt"
  }, "2020/9/2")), detail_jsx("div", {
    className: "sub-item"
  }, detail_jsx(icons_["FireOutlined"], null), detail_jsx("span", {
    className: "sub-txt"
  }, "2020/9/2")))), detail_jsx("div", {
    className: "detail-content",
    dangerouslySetInnerHTML: {
      __html: markdownVal
    }
  })), detail_jsx(external_antd_["Col"], {
    className: "home-main-right",
    xs: 0,
    sm: 0,
    md: 5,
    lg: 5,
    xl: 5
  }, detail_jsx(Author["a" /* default */], null), detail_jsx(external_antd_["Affix"], {
    offsetTop: 10
  }, detail_jsx("div", {
    className: "detail-nav comm-box"
  }, detail_jsx("div", {
    className: "nav-title"
  }, "\u6587\u7AE0\u5217\u8868"), tocify && tocify.render && tocify.render())))), detail_jsx(Footer["a" /* default */], null));
}

detail.getInitialProps = async context => {
  const getDetail = async () => {
    return Object(api["a" /* getArticleById */])(context.query.id);
  };

  let res = await getDetail();
  return {
    content: res.data.data[0]
  };
};

/* harmony default export */ var pages_detail = __webpack_exports__["default"] = (detail);

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

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

/***/ "u2le":
/***/ (function(module, exports) {

module.exports = require("markdown-navbar");

/***/ }),

/***/ "vYqY":
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