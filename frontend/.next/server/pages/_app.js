"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(906);
;// CONCATENATED MODULE: external "wagmi/connectors/injected"
const injected_namespaceObject = require("wagmi/connectors/injected");
;// CONCATENATED MODULE: external "wagmi/providers/jsonRpc"
const jsonRpc_namespaceObject = require("wagmi/providers/jsonRpc");
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./styles/globalCSS.js
const globalCSS = {
    styles: {
        global: {
            "html, body": {
                color: "white",
                background: "#211f24",
                padding: 0,
                margin: 0,
                fontFamily: "Calibre,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
            },
            a: {
                textDecoration: "none"
            },
            button: {
                fontWeight: "bold",
                border: "1px solid #2d2d2d",
                borderRadius: "23px",
                padding: "8px 22px"
            },
            "button:hover": {
                border: "1px solid white"
            },
            ".primary-button": {
                background: "#384aff"
            },
            ".primary-button:hover": {
                border: "1px solid #3546F2",
                background: "#3546F2"
            },
            ".css-192lbzy": {
                border: "1px solid white"
            },
            ".chakra-alert__title": {
                paddingRight: "16px"
            },
            ".error": {
                color: "red"
            }
        }
    }
};

;// CONCATENATED MODULE: ./pages/_app.js







const theme = (0,react_.extendTheme)(globalCSS);
const { provider , webSocketProvider  } = (0,external_wagmi_.configureChains)([
    external_wagmi_.chain.hardhat
], [
    (0,jsonRpc_namespaceObject.jsonRpcProvider)({
        rpc: ()=>({
                http: "http://127.0.0.1:8545/"
            })
    })
]);
const client = (0,external_wagmi_.createClient)({
    connectors: [
        new injected_namespaceObject.InjectedConnector({
            chains: [
                external_wagmi_.chain.hardhat
            ]
        })
    ],
    provider,
    webSocketProvider
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_wagmi_.WagmiConfig, {
            client: client,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(508));
module.exports = __webpack_exports__;

})();