/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Autocomplete @ Version 0.2.1,
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue2Autocomplete"] = factory();
	else
		root["Vue2Autocomplete"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_autocomplete_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e47ae2be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_autocomplete_vue__ = __webpack_require__(4);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_autocomplete_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e47ae2be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_autocomplete_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/vue-autocomplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue-autocomplete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e47ae2be", Component.options)
  } else {
    hotAPI.reload("data-v-e47ae2be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Vue 2 Autocomplete @ Version 0.0.1
*
*/

/* harmony default export */ __webpack_exports__["a"] = ({

  props: {
    id: String,
    name: String,
    className: String,
    classes: {
      type: Object,
      default: function _default() {
        return {
          wrapper: false,
          input: false,
          list: false,
          item: false
        };
      }
    },
    placeholder: String,
    required: Boolean,

    // Intial Value
    initValue: {
      type: String,
      default: ""
    },

    // Manual List
    options: Array,

    // Filter After Get the data
    filterByAnchor: {
      type: Boolean,
      default: true
    },

    // Anchor of list
    anchor: {
      type: String,
      required: true
    },

    // Label of list
    label: String,

    // Debounce time
    debounce: Number,

    // ajax URL will be fetched
    url: {
      type: String,
      required: true
    },

    // query param
    param: {
      type: String,
      default: 'q'
    },

    encodeParams: {
      type: Boolean,
      default: true
    },

    // Custom Params
    customParams: Object,

    // Custom Headers
    customHeaders: Object,

    // minimum length
    min: {
      type: Number,
      default: 0
    },

    // Create a custom template from data.
    onShouldRenderChild: Function,

    // Process the result before retrieveng the result array.
    process: Function,

    // Callback
    onInput: Function,
    onShow: Function,
    onBlur: Function,
    onHide: Function,
    onFocus: Function,
    onSelect: Function,
    onBeforeAjax: Function,
    onAjaxProgress: Function,
    onAjaxLoaded: Function,
    onShouldGetData: Function
  },

  data: function data() {
    return {
      showList: false,
      type: "",
      json: [],
      focusList: "",
      debounceTask: undefined
    };
  },


  watch: {
    options: function options(newVal, oldVal) {
      if (this.filterByAnchor) {
        var type = this.type,
            anchor = this.anchor;

        var regex = new RegExp("" + type, 'i');
        var filtered = newVal.filter(function (item) {
          var found = item[anchor].search(regex) !== -1;
          return found;
        });
        this.json = filtered;
      } else {
        this.json = newVal;
      }
    }
  },

  methods: {
    getClassName: function getClassName(part) {
      var classes = this.classes,
          className = this.className;

      if (classes[part]) return "" + classes[part];
      return className ? className + "-" + part : '';
    },


    // Netralize Autocomplete
    clearInput: function clearInput() {
      this.showList = false;
      this.type = "";
      this.json = [];
      this.focusList = "";
    },


    // Get the original data
    cleanUp: function cleanUp(data) {
      return JSON.parse(JSON.stringify(data));
    },


    /*==============================
      INPUT EVENTS
    =============================*/
    handleInput: function handleInput(e) {
      var _this = this;

      var value = e.target.value;

      this.showList = true;
      // Callback Event
      if (this.onInput) this.onInput(value);
      // If Debounce
      if (this.debounce) {
        if (this.debounceTask !== undefined) clearTimeout(this.debounceTask);
        this.debounceTask = setTimeout(function () {
          return _this.getData(value);
        }, this.debounce);
      } else {
        return this.getData(value);
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      var key = e.keyCode;

      // Disable when list isn't showing up
      if (!this.showList) return;

      // Key List
      var DOWN = 40;
      var UP = 38;
      var ENTER = 13;
      var ESC = 27;

      // Prevent Default for Prevent Cursor Move & Form Submit
      switch (key) {
        case DOWN:
          e.preventDefault();
          this.focusList++;
          break;
        case UP:
          e.preventDefault();
          this.focusList--;
          break;
        case ENTER:
          e.preventDefault();
          this.selectList(this.json[this.focusList]);
          this.showList = false;
          break;
        case ESC:
          this.showList = false;
          break;
      }

      var listLength = this.json.length - 1;
      var outOfRangeBottom = this.focusList > listLength;
      var outOfRangeTop = this.focusList < 0;
      var topItemIndex = 0;
      var bottomItemIndex = listLength;

      var nextFocusList = this.focusList;
      if (outOfRangeBottom) nextFocusList = topItemIndex;
      if (outOfRangeTop) nextFocusList = bottomItemIndex;
      this.focusList = nextFocusList;
    },
    setValue: function setValue(val) {
      this.type = val;
    },


    /*==============================
      LIST EVENTS
    =============================*/

    handleDoubleClick: function handleDoubleClick() {
      this.json = [];
      this.getData("");
      // Callback Event
      this.onShow ? this.onShow() : null;
      this.showList = true;
    },
    handleBlur: function handleBlur(e) {
      var _this2 = this;

      // Callback Event
      this.onBlur ? this.onBlur(e) : null;
      setTimeout(function () {
        // Callback Event
        _this2.onHide ? _this2.onHide() : null;
        _this2.showList = false;
      }, 250);
    },
    handleFocus: function handleFocus(e) {
      this.focusList = 0;
      // Callback Event
      this.onFocus ? this.onFocus(e) : null;
    },
    mousemove: function mousemove(i) {
      this.focusList = i;
    },
    activeClass: function activeClass(i) {
      var focusClass = i === this.focusList ? 'focus-list' : '';
      return "" + focusClass;
    },
    selectList: function selectList(data) {
      // Deep clone of the original object
      var clean = this.cleanUp(data);
      // Put the selected data to type (model)
      this.type = clean[this.anchor];
      // Hide List
      this.showList = false;
      // Callback Event
      this.onSelect ? this.onSelect(clean) : null;
    },
    deepValue: function deepValue(obj, path) {
      var arrayPath = path.split('.');
      for (var i = 0; i < arrayPath.length; i++) {
        obj = obj[arrayPath[i]];
      }
      return obj;
    },


    /*==============================
      AJAX EVENTS
    =============================*/

    composeParams: function composeParams(val) {
      var _this3 = this;

      var encode = function encode(val) {
        return _this3.encodeParams ? encodeURIComponent(val) : val;
      };
      var params = this.param + "=" + encode(val);
      if (this.customParams) {
        Object.keys(this.customParams).forEach(function (key) {
          params += "&" + key + "=" + encode(_this3.customParams[key]);
        });
      }
      return params;
    },
    composeHeader: function composeHeader(ajax) {
      var _this4 = this;

      if (this.customHeaders) {
        Object.keys(this.customHeaders).forEach(function (key) {
          ajax.setRequestHeader(key, _this4.customHeaders[key]);
        });
      }
    },
    doAjax: function doAjax(val) {
      var _this5 = this;

      // Callback Event
      this.onBeforeAjax ? this.onBeforeAjax(val) : null;
      // Compose Params
      var params = this.composeParams(val);
      // Init Ajax
      var ajax = new XMLHttpRequest();
      ajax.open('GET', this.url + "?" + params, true);
      this.composeHeader(ajax);
      // Callback Event
      ajax.addEventListener('progress', function (data) {
        if (data.lengthComputable && _this5.onAjaxProgress) _this5.onAjaxProgress(data);
      });
      // On Done
      ajax.addEventListener('loadend', function (e) {
        var responseText = e.target.responseText;

        var json = JSON.parse(responseText);
        // Callback Event
        _this5.onAjaxLoaded ? _this5.onAjaxLoaded(json) : null;
        _this5.json = _this5.process ? _this5.process(json) : json;
      });
      // Send Ajax
      ajax.send();
    },
    getData: function getData(value) {
      if (value.length < this.min || !this.url) return;
      if (this.onShouldGetData) this.manualGetData(value);else this.doAjax(value);
    },


    // Do Ajax Manually, so user can do whatever he want
    manualGetData: function manualGetData(val) {
      var _this6 = this;

      var task = this.onShouldGetData(val);
      if (task && task.then) {
        return task.then(function (options) {
          _this6.json = options;
        });
      }
    }
  },

  created: function created() {
    // Sync parent model with initValue Props
    this.type = this.initValue ? this.initValue : null;
  },
  mounted: function mounted() {
    if (this.required) this.$refs.input.setAttribute("required", this.required);
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_autocomplete_vue__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_vue_autocomplete_vue__["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ((_vm.getClassName('wrapper')) + " autocomplete-wrapper")
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.type),
      expression: "type"
    }],
    ref: "input",
    class: ((_vm.getClassName('input')) + " autocomplete-input"),
    attrs: {
      "type": "text",
      "id": _vm.id,
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.type)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.type = $event.target.value
      }, _vm.handleInput],
      "dblclick": _vm.handleDoubleClick,
      "blur": _vm.handleBlur,
      "keydown": _vm.handleKeyDown,
      "focus": _vm.handleFocus
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showList && _vm.json.length),
      expression: "showList && json.length"
    }],
    class: ((_vm.getClassName('list')) + " autocomplete autocomplete-list")
  }, [_c('ul', _vm._l((_vm.json), function(data, i) {
    return _c('li', {
      class: _vm.activeClass(i)
    }, [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.selectList(data)
        },
        "mousemove": function($event) {
          _vm.mousemove(i)
        }
      }
    }, [(_vm.onShouldRenderChild) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.onShouldRenderChild(data))
      }
    }) : _vm._e(), _vm._v(" "), (!_vm.onShouldRenderChild) ? _c('div', [_c('b', {
      staticClass: "autocomplete-anchor-text"
    }, [_vm._v(_vm._s(_vm.deepValue(data, _vm.anchor)))]), _vm._v(" "), _c('span', {
      staticClass: "autocomplete-anchor-label"
    }, [_vm._v(_vm._s(_vm.deepValue(data, _vm.label)))])]) : _vm._e()])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e47ae2be", esExports)
  }
}

/***/ })
/******/ ]);
});