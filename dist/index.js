!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["numeric-input-component"]=t():e["numeric-input-component"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=function(e){var t=e.onClick,n=e.text;return o.a.createElement("div",{className:"button",role:"button",onClick:function(){t(n)}},o.a.createElement("p",null,n))},a=function(e){for(var t=e.onNumberClick,n=[],r=[1,2,3,4,5,6,7,8,9,e.leftKey,0,e.rightKey],a=0;a<r.length;a++)n.push(o.a.createElement(i,{text:r[a],onClick:t}));for(var c=[];n.length>0;)c.push(n.splice(0,3));return o.a.createElement("div",{className:"numerickeys"},o.a.createElement("div",{className:"numerickeys-row"},c[0]),o.a.createElement("div",{className:"numerickeys-row"},c[1]),o.a.createElement("div",{className:"numerickeys-row"},c[2]),o.a.createElement("div",{className:"numerickeys-row"},c[3]))},c=function(e){for(var t=e.onOperationClick,n=[],r=["+","*","-","/"],a=0;a<r.length;a++)n.push(o.a.createElement(i,{text:r[a],onClick:t}));for(var c=[];n.length>0;)c.push(n.splice(0,2));return o.a.createElement("div",{className:"numericops"},o.a.createElement("div",{className:"numericops-row"},c[0]),o.a.createElement("div",{className:"numericops-row"},c[1]))},s=function(e){var t=e.onComplete,n=e.confirmText;return o.a.createElement("div",{className:"confirmbutton",role:"button",onClick:function(){t("complete")}},o.a.createElement("p",null,n))},u=function(e){var t=e.text;return o.a.createElement("div",{className:"display"},o.a.createElement("p",null,t))};t.a=function(e){var t=e.close,n=e.displayValue,r=e.onChangeDisplay,i=e.onComplete;return o.a.createElement("div",{className:"calculator"},o.a.createElement("div",{className:"close",onClick:t},o.a.createElement("p",null,"X")),o.a.createElement("div",{className:"calculator-display"},o.a.createElement(u,{text:n})),o.a.createElement("div",{className:"calculator-keyboard"},o.a.createElement(a,{onNumberClick:function(e){r(e)},leftKey:".",rightKey:"<"}),o.a.createElement("div",{className:"calculator-right"},o.a.createElement(s,{confirmText:"OK",onComplete:i}),o.a.createElement(c,{onOperationClick:function(e){r(e)}}))))}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Calculator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_index_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_index_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var NumericInput=function(_Component){function NumericInput(_props){var _this;return _classCallCheck(this,NumericInput),_this=_possibleConstructorReturn(this,_getPrototypeOf(NumericInput).call(this,_props)),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"onFocus",function(){_this.setState({className:"dflex",inputValue:0,displayValue:"0"})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"onComplete",function(){var total=eval(_this.state.displayValue);_this.setState({className:"dnone",inputValue:total,displayValue:total.toString()},_this.proxyOnChangeOnRefWithValue(_this.inputRef,total))}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"onChangeDisplay",function(e){var t=_this.state.displayValue,n=e.toString();if("<"===e)return""==(n=t.slice(0,-1))&&(n="0"),void _this.setState({displayValue:n});var r=t.split(/\-|\+|\/|\*/).pop();if("."!==e||!r.includes(".")){"0"==t&&"."!=e||(n=""==t?"0".concat(e):"".concat(t).concat(e));var o=t.split("").pop();["+","-","*","/"].includes(o)&&["+","-","*","/"].includes(e)&&(n="".concat(t.slice(0,-1)).concat(e)),_this.setState({displayValue:n})}}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"handleChange",function(e){var t=parseInt(e.target.value,10),n=isNaN(t)?0:t,r=n.toString();_this.setState({inputValue:n,displayValue:r},_this.proxyOnChangeOnRefWithValue(_this.inputRef,n))}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"onBlur",function(){setTimeout(function(){var e=document.activeElement;e.classList.contains("calculator-wrapper")&&e.id!=_this.props.id||_this.setState({className:"dnone",inputValue:0,displayValue:"0"})},1)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"onClose",function(){_this.setState({className:"dnone"})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"proxyOnChangeOnRefWithValue",function(e,t){if("function"==typeof _this.props.onChange){var n=new Event("change",{bubbles:!0});Object.defineProperty(n,"target",{value:e.current,enumerable:!0,writable:!0}),n.target.value=t.toString(),_this.props.onChange(n)}}),_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"sanitizeRenderProps",function(e){return delete e.ref,delete e.type,delete e.onFocus,delete e.onChange,delete e.onBlur,e}),_this.state={className:"dnone",inputValue:0,displayValue:"0"},_this.inputRef=react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),_this}return _inherits(NumericInput,_Component),_createClass(NumericInput,[{key:"render",value:function(){var e=Object.assign({},this.props),t=this.sanitizeRenderProps(e),n=(t.label,_objectWithoutProperties(t,["label"]));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"numeric-input-component"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",_extends({ref:this.inputRef,id:e.id,className:e.className,type:"number",name:e.name,onFocus:this.onFocus,value:this.state.inputValue,onChange:this.handleChange,onBlur:this.onBlur},n)),e.label?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{htmlFor:e.id},e.label):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"calculator-wrapper "+this.state.className,tabIndex:"-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calculator__WEBPACK_IMPORTED_MODULE_1__.a,{onComplete:this.onComplete,displayValue:this.state.displayValue,onChangeDisplay:this.onChangeDisplay,close:this.onClose})))}}]),NumericInput}(react__WEBPACK_IMPORTED_MODULE_0__.Component);__webpack_exports__.default=NumericInput},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".numeric-input-component {\n  display: inline-block; }\n  .numeric-input-component #input {\n    font-size: 24px; }\n  .numeric-input-component .dnone {\n    display: none; }\n  .numeric-input-component .dflex {\n    display: flex; }\n  .numeric-input-component input::-webkit-inner-spin-button, .numeric-input-component input::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n    -moz-appearance: textfield; }\n  .numeric-input-component .calculator-wrapper {\n    position: absolute;\n    font-size: 30px;\n    z-index: 10; }\n  .numeric-input-component .calculator-wrapper:focus {\n    border: none;\n    outline: none; }\n  .numeric-input-component .calculator {\n    display: flex;\n    flex-direction: column;\n    background-color: #666;\n    width: 14.8em;\n    border-radius: 4px;\n    padding: 0.3em;\n    padding-top: 0.1em; }\n  .numeric-input-component .close {\n    margin-right: .3em; }\n  .numeric-input-component .close p {\n    text-align: right;\n    color: #eee;\n    font-family: sans-serif;\n    font-weight: bold;\n    margin-top: 0.3em;\n    margin-bottom: 0.1em;\n    float: right;\n    cursor: pointer;\n    width: 1em; }\n  .numeric-input-component .calculator-keyboard {\n    display: flex; }\n  .numeric-input-component .calculator-right {\n    margin-left: 1em;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    align-content: space-between; }\n  .numeric-input-component .calculator-operations {\n    flex: 1; }\n  .numeric-input-component .calculator-display .display {\n    border: .08em solid #666;\n    border-radius: 0;\n    height: 2em;\n    margin: 0.3em;\n    margin-bottom: 1em;\n    display: flex;\n    background-color: #eee;\n    overflow-x: auto;\n    /*\n    Overflow to left attempt\n    (flips math signs, so fix needed)\n    direction: rtl;\n    unicode-bidi: embed;\n    */\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .numeric-input-component .calculator-display .display p {\n    margin: auto;\n    margin-right: 0.5em;\n    text-align: right;\n    font-family: monospace;\n    color: #666; }\n  .numeric-input-component .numerickeys {\n    display: flex;\n    flex-direction: column; }\n  .numeric-input-component .numerickeys-row {\n    display: flex; }\n  .numeric-input-component .numericops {\n    display: flex;\n    flex-direction: column; }\n  .numeric-input-component .numericops-row {\n    display: flex; }\n  .numeric-input-component .numerickeys .button, .numeric-input-component .confirmbutton, .numeric-input-component .numericops .button {\n    border: .08em solid #666;\n    border-radius: 10px;\n    height: 2em;\n    width: 2em;\n    display: flex;\n    margin: .3em;\n    cursor: pointer;\n    background-color: #ccc; }\n  .numeric-input-component .numerickeys .button:active, .numeric-input-component .confirmbutton:active, .numeric-input-component .numericops .button:active {\n    background-color: #f1f1f1;\n    color: #5a5a5a; }\n  .numeric-input-component .numerickeys .button p, .numeric-input-component .confirmbutton p, .numeric-input-component .numericops .button p {\n    margin: auto;\n    font-family: monospace; }\n  .numeric-input-component .confirmbutton {\n    width: 4.76em;\n    margin-bottom: auto; }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,c=0,s=[],u=n(7);function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(h(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function f(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function d(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),_(t,e.attrs),f(e,t),t}function _(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=a||(a=d(t)),r=y.bind(null,n,s,!1),o=y.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(c=r[a.id]).refs--,o.push(c)}e&&l(p(e,t),t);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});