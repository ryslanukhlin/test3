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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2ZG0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./style/comment.module.scss
var comment_module = __webpack_require__("ihxU");
var comment_module_default = /*#__PURE__*/__webpack_require__.n(comment_module);

// CONCATENATED MODULE: ./component/CommentForm.tsx







const CommentForm = ({
  addComment
}) => {
  const [txt, setTxt] = external_react_default.a.useState('');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
      style: {
        marginTop: 15
      },
      value: txt,
      onChange: e => setTxt(e.target.value),
      label: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439...",
      fullWidth: true,
      multiline: true,
      rows: 4,
      variant: "outlined"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
      onClick: addComment.bind(null, txt),
      variant: "outlined",
      fullWidth: true,
      className: comment_module_default.a.commentBtn,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    })]
  });
};

/* harmony default export */ var component_CommentForm = (CommentForm);
// EXTERNAL MODULE: ./style/pizzaItem.module.scss
var pizzaItem_module = __webpack_require__("AMGP");
var pizzaItem_module_default = /*#__PURE__*/__webpack_require__.n(pizzaItem_module);

// EXTERNAL MODULE: ./hooks/useTypeSelector.ts
var useTypeSelector = __webpack_require__("d2Bm");

// EXTERNAL MODULE: ./hooks/useAction.ts
var useAction = __webpack_require__("DCK5");

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./component/ItemPizzaId.tsx







const {
  publicRuntimeConfig
} = config_default()();

const ItemPizzaId = ({
  data
}) => {
  const pizzaBasket = Object(useTypeSelector["a" /* useTypedSelector */])(state => state.basketReducer.basketPizza);
  const isAddBasket = pizzaBasket.filter(item => item._id === data._id).length === 0;
  const {
    addPizzaToBasket,
    removePizzaToBasket
  } = Object(useAction["a" /* useAction */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
    container: true,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      xs: 6,
      item: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: publicRuntimeConfig.backendUri + '/' + data.image,
        alt: "img"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
      xs: 6,
      item: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        variant: "h3",
        children: data.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
        variant: "h5",
        children: ["Price: ", data.price]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        paragraph: true,
        children: data.description
      }), isAddBasket ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
        onClick: addPizzaToBasket.bind(null, data),
        children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
        onClick: removePizzaToBasket.bind(null, data._id),
        children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
      })]
    })]
  });
};

/* harmony default export */ var component_ItemPizzaId = (ItemPizzaId);
// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");

// CONCATENATED MODULE: ./component/Comments.tsx






const {
  publicRuntimeConfig: Comments_publicRuntimeConfig
} = config_default()();

const Comments = ({
  comments
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["List"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
      className: comment_module_default.a.commentTitle,
      variant: "h6",
      children: [comments.length, " \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"]
    }), comments.map(comment => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemAvatar"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], {
          src: comment.userId.icon ? comment.userId.icon : "/dontIconUser.png"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
        primary: comment.userId.nicname,
        secondary: comment.text
      })]
    }, comment._id))]
  });
};

/* harmony default export */ var component_Comments = (Comments);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__("oF3+");

// CONCATENATED MODULE: ./pages/pizza/[id].tsx












const {
  publicRuntimeConfig: _id_publicRuntimeConfig
} = config_default()();

const PagesPizza = ({
  data
}) => {
  const {
    user,
    isAuth
  } = Object(useTypeSelector["a" /* useTypedSelector */])(state => state.userReducer);
  const [pizza, setPizza] = external_react_default.a.useState(data);
  const socketRef = external_react_default.a.useRef();
  const {
    enqueueSnackbar
  } = Object(external_notistack_["useSnackbar"])();
  external_react_default.a.useEffect(() => {
    if (false) {}

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const addComment = (text, e) => {
    if (!isAuth) return enqueueSnackbar("Чтобы добавить кометарий вы должны войти", {
      variant: "error"
    });
    if (text === "") return enqueueSnackbar("Введите что-нибудь", {
      variant: "error"
    });
    socketRef.current.emit('COMMENT:ADD', {
      text,
      userId: user._id,
      productId: data._id
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Container"], {
    maxWidth: "lg",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(component_ItemPizzaId, {
      data: pizza
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: pizzaItem_module_default.a.customHr
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(component_CommentForm, {
      addComment: addComment
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(component_Comments, {
      comments: pizza.comments
    })]
  });
};

const getServerSideProps = async ({
  params
}) => {
  const response = await fetch(`${_id_publicRuntimeConfig.backendUri}/product/${params.id}`);
  if (response.status !== 200) return {
    notFound: true
  };
  const data = await response.json();
  return {
    props: {
      data
    }
  };
};
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (PagesPizza);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2ZG0");


/***/ }),

/***/ "AMGP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"customHr": "pizzaItem_customHr__3lWX6"
};


/***/ }),

/***/ "BAmO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ basketReducer; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ addPizzaToBasket; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ removePizzaToBasket; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ setAllPrice; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ setCountPrice; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ clearBasket; });

// CONCATENATED MODULE: ./types/reducer/baskeReducer.type.ts
let BasketActionEnum;

(function (BasketActionEnum) {
  BasketActionEnum["ADD_BASKET_ITEM"] = "ADD_BASKET_ITEM";
  BasketActionEnum["REMOVE_BASKET_ITEM"] = "REMOVE_BASKET_ITEM";
  BasketActionEnum["SET_ALLPRICE"] = "SET_ALLPRICE";
  BasketActionEnum["SET_COUNTPRICE"] = "SET_COUNTPRICE";
  BasketActionEnum["CLEAR_BASKET"] = "CLEAR_BASKET";
})(BasketActionEnum || (BasketActionEnum = {}));
// CONCATENATED MODULE: ./store/reducer/basketReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  basketPizza: [],
  allPrice: 0
};
const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BasketActionEnum.ADD_BASKET_ITEM:
      state = _objectSpread(_objectSpread({}, state), {}, {
        basketPizza: [...state.basketPizza, _objectSpread(_objectSpread({}, action.payload), {}, {
          count: 1,
          countPrice: action.payload.price
        })]
      });
      localStorage.setItem('pizzaBasket', JSON.stringify(state.basketPizza));
      return state;

    case BasketActionEnum.REMOVE_BASKET_ITEM:
      const newPizza = state.basketPizza.filter(pizza => pizza._id !== action.payload);
      state = _objectSpread(_objectSpread({}, state), {}, {
        basketPizza: newPizza
      });
      localStorage.setItem('pizzaBasket', JSON.stringify(state.basketPizza));
      return state;

    case BasketActionEnum.SET_ALLPRICE:
      const allPrice = state.basketPizza.reduce((prev, item) => prev += item.countPrice, 0);
      return _objectSpread(_objectSpread({}, state), {}, {
        allPrice
      });

    case BasketActionEnum.SET_COUNTPRICE:
      const newBasketPizza = state.basketPizza.map(item => {
        if (item._id === action.payload.id) {
          item.countPrice = action.payload.count * item.price;
          item.count = action.payload.count;
        }

        return item;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        basketPizza: newBasketPizza,
        allPrice: newBasketPizza.reduce((prev, item) => prev += item.countPrice, 0)
      });

    case BasketActionEnum.CLEAR_BASKET:
      localStorage.removeItem('pizzaBasket');
      return {
        basketPizza: [],
        allPrice: 0
      };

    default:
      return state;
  }
};
const addPizzaToBasket = payload => ({
  type: BasketActionEnum.ADD_BASKET_ITEM,
  payload
});
const removePizzaToBasket = payload => ({
  type: BasketActionEnum.REMOVE_BASKET_ITEM,
  payload
});
const setAllPrice = () => ({
  type: BasketActionEnum.SET_ALLPRICE
});
const setCountPrice = payload => ({
  type: BasketActionEnum.SET_COUNTPRICE,
  payload
});
const clearBasket = () => ({
  type: BasketActionEnum.CLEAR_BASKET
});

/***/ }),

/***/ "DCK5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAction; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_reducer_basketReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BAmO");
/* harmony import */ var _store_reducer_userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ibvp");




const actionCreater = {
  addPizzaToBasket: _store_reducer_basketReducer__WEBPACK_IMPORTED_MODULE_2__[/* addPizzaToBasket */ "a"],
  removePizzaToBasket: _store_reducer_basketReducer__WEBPACK_IMPORTED_MODULE_2__[/* removePizzaToBasket */ "d"],
  setAllPrice: _store_reducer_basketReducer__WEBPACK_IMPORTED_MODULE_2__[/* setAllPrice */ "e"],
  setCountPrice: _store_reducer_basketReducer__WEBPACK_IMPORTED_MODULE_2__[/* setCountPrice */ "f"],
  clearBasket: _store_reducer_basketReducer__WEBPACK_IMPORTED_MODULE_2__[/* clearBasket */ "c"],
  LoginLocal: _store_reducer_userReducer__WEBPACK_IMPORTED_MODULE_3__[/* LoginLocal */ "b"],
  LoginGoogle: _store_reducer_userReducer__WEBPACK_IMPORTED_MODULE_3__[/* LoginGoogle */ "a"],
  setUserLocal: _store_reducer_userReducer__WEBPACK_IMPORTED_MODULE_3__[/* setUserLocal */ "d"],
  Logout: _store_reducer_userReducer__WEBPACK_IMPORTED_MODULE_3__[/* Logout */ "c"]
};
const useAction = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(actionCreater, dispatch);
};

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d2Bm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTypedSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ibvp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ userReducer; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ LoginLocal; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LoginGoogle; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ setUserLocal; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ Logout; });

// CONCATENATED MODULE: ./types/reducer/userReducer.type.ts
let EnumLoginType;

(function (EnumLoginType) {
  EnumLoginType["GOOGLE"] = "GOOGLE";
  EnumLoginType["LOCAL"] = "LOCAL";
})(EnumLoginType || (EnumLoginType = {}));

let UserActionEnum;

(function (UserActionEnum) {
  UserActionEnum["LOGIN_LOCAL"] = "LOGIN_LOCAL";
  UserActionEnum["LOGOUT"] = "LOGOUT";
  UserActionEnum["LOGIN_GOOGLE"] = "LOGIN_GOOGLE";
  UserActionEnum["SET_USER_LOCAL"] = "SET_USER_LOCAL";
})(UserActionEnum || (UserActionEnum = {}));
// CONCATENATED MODULE: ./store/reducer/userReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  typeLogin: EnumLoginType.LOCAL,
  isAuth: false,
  token: null,
  user: null
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UserActionEnum.LOGIN_LOCAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload,
        isAuth: true,
        typeLogin: EnumLoginType.LOCAL
      });

    case UserActionEnum.LOGIN_GOOGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload,
        isAuth: true,
        typeLogin: EnumLoginType.GOOGLE
      });

    case UserActionEnum.LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: null,
        isAuth: false
      });

    case UserActionEnum.SET_USER_LOCAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    default:
      return state;
  }
};
const LoginLocal = token => ({
  type: UserActionEnum.LOGIN_LOCAL,
  payload: token
});
const LoginGoogle = user => ({
  type: UserActionEnum.LOGIN_GOOGLE,
  payload: user
});
const setUserLocal = user => ({
  type: UserActionEnum.SET_USER_LOCAL,
  payload: user
});
const Logout = () => ({
  type: UserActionEnum.LOGOUT
});

/***/ }),

/***/ "ihxU":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentTitle": "comment_commentTitle__37ezg",
	"commentBtn": "comment_commentBtn__2LDs9"
};


/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });