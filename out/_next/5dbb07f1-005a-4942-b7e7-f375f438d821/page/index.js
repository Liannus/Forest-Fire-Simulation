module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([0],{100:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,a=r(208),l=Object.prototype.propertyIsEnumerable,c=!l.call({toString:null},"toString"),u=l.call(function(){},"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=function(e){var t=e.constructor;return t&&t.prototype===e},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{s(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),b=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),i=a(e),l=t&&"[object String]"===o.call(e),p=[];if(!t&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var b=u&&r;if(l&&e.length>0&&!n.call(e,0))for(var h=0;h<e.length;++h)p.push(String(h));if(i&&e.length>0)for(var d=0;d<e.length;++d)p.push(String(d));else for(var v in e)b&&"prototype"===v||!n.call(e,v)||p.push(String(v));if(c)for(var m=function(e){if("undefined"==typeof window||!y)return s(e);try{return s(e)}catch(e){return!1}}(e),g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(e,f[g])||p.push(f[g]);return p};b.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return a(t)?e(i.call(t)):e(t)}}}else Object.keys=b;return Object.keys||b},e.exports=b},101:function(e,t,r){"use strict";var n=r(100),o=r(102),i=r(211)(),a=Object,l=o.call(Function.call,Array.prototype.push),c=o.call(Function.call,Object.prototype.propertyIsEnumerable),u=i?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(r=e)||null===r)throw new TypeError("target must be an object");var r,o,f,s,p,y,b,h,d=a(e);for(o=1;o<arguments.length;++o){f=a(arguments[o]),p=n(f);var v=i&&(Object.getOwnPropertySymbols||u);if(v)for(y=v(f),s=0;s<y.length;++s)h=y[s],c(f,h)&&l(p,h);for(s=0;s<p.length;++s)b=f[h=p[s]],c(f,h)&&(d[h]=b)}return d}},102:function(e,t,r){"use strict";var n=r(210);e.exports=Function.prototype.bind||n},103:function(e,t,r){"use strict";var n=r(101);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r),i="";for(var a in o)i+=a;return e!==i}()?n:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?n:Object.assign:n}},200:function(e,t,r){e.exports=r(201)},201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=r.n(n),i=r(202),a=r.n(i),l={marginRight:15},c=function(){return o.a.createElement("div",null,o.a.createElement(a.a,{href:"/"},o.a.createElement("a",{style:l},"Home")),o.a.createElement(a.a,{href:"/about"},o.a.createElement("a",{style:l},"About")))},u={margin:20,padding:20,border:"1px solid #DDD"},f=function(e){return o.a.createElement("div",{style:u},o.a.createElement(c,null),e.children)};r(93);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={date:new Date},r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){console.log("hi"),this.setState({date:new date})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"hello, world ",this.state.date.toLocaleTimeString()),"\\",o.a.createElement("canvas",null))}}])&&p(r.prototype,n),i&&p(r,i),t}();t.default=function(){return o.a.createElement(f,null,o.a.createElement("p",null,"This is the about page"),o.a.createElement(b,null,o.a.createElement("canvas",{id:"myCanvas",width:"100%",height:"100"})))}},202:function(e,t,r){e.exports=r(203)},203:function(e,t,r){"use strict";var n=r(14),o=r(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(45)),a=o(r(204)),l=o(r(19)),c=o(r(6)),u=o(r(7)),f=o(r(20)),s=o(r(21)),p=o(r(71)),y=r(96),b=n(r(5)),h=o(r(35)),d=o(r(206)),v=n(r(44)),m=r(18),g=function(e){function t(e){var r,n;(0,c.default)(this,t);for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return(n=(0,f.default)(this,(r=t.__proto__||(0,l.default)(t)).call.apply(r,[this,e].concat(i)))).linkClicked=n.linkClicked.bind((0,p.default)(n)),n.formatUrls(e),n}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,n=this.href,o=this.as;if(function(e){var t=(0,y.parse)(e,!1,!0),r=(0,y.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var i=window.location.pathname;n=(0,y.resolve)(i,n),o=o?(0,y.resolve)(i,o):n,e.preventDefault();var a=this.props.scroll;null==a&&(a=o.indexOf("#")<0);var l=this.props.replace?"replace":"push";v.default[l](n,o,{shallow:r}).then(function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,y.resolve)(e,this.href);v.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,i.default)(e.href)?(0,y.format)(e.href):e.href,this.as=e.as&&"object"===(0,i.default)(e.as)?(0,y.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.href,n=this.as;"string"==typeof t&&(t=b.default.createElement("a",null,t));var o=b.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=n||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,v._rewriteUrlForNextExport)(i.href)),b.default.cloneElement(o,i)}}]),t}(b.Component);t.default=g,Object.defineProperty(g,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,d.default)({href:h.default.oneOfType([h.default.string,h.default.object]).isRequired,as:h.default.oneOfType([h.default.string,h.default.object]),prefetch:h.default.bool,replace:h.default.bool,shallow:h.default.bool,passHref:h.default.bool,scroll:h.default.bool,children:h.default.oneOfType([h.default.element,function(e,t){return"string"==typeof e[t]&&O("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var O=(0,m.execOnce)(m.warn)},204:function(e,t,r){e.exports=r(205)},205:function(e,t,r){var n=r(0),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},206:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,i.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,c)&&(t=e[c],!t||t[c]!==u))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,n.default)({},e,l({},c,(r=function(){return function(t,r,n){var i=Object.keys(t).filter(function(t){return!(0,o.default)(e,t)});if(i.length>0)return new TypeError(String(n)+": unknown props found: "+String(i.join(", ")));return null}}(),(0,n.default)(r,l({},c,u)))));var r};var n=a(r(207)),o=a(r(213)),i=a(r(214));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="prop-types-exact: ​",u={};e.exports=t.default},207:function(e,t,r){"use strict";var n=r(99),o=r(101),i=r(103),a=r(212),l=i();n(l,{getPolyfill:i,implementation:o,shim:a}),e.exports=l},208:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},209:function(e,t){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var a=0;a<i;a++)t.call(o,e[a],a,e);else for(var l in e)r.call(e,l)&&t.call(o,e[l],l,e)}},210:function(e,t,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,i=n.call(arguments,1),a=Math.max(0,t.length-i.length),l=[],c=0;c<a;c++)l.push("$"+c);if(r=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var o=t.apply(this,i.concat(n.call(arguments)));return Object(o)===o?o:this}return t.apply(e,i.concat(n.call(arguments)))}),t.prototype){var u=function(){};u.prototype=t.prototype,r.prototype=new u,u.prototype=null}return r}},211:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},212:function(e,t,r){"use strict";var n=r(99),o=r(103);e.exports=function(){var e=o();return n(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},213:function(e,t,r){"use strict";var n=r(102);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},214:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default},99:function(e,t,r){"use strict";var n=r(100),o=r(209),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),a=Object.prototype.toString,l=Object.defineProperty&&function(){var e={};try{for(var t in Object.defineProperty(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),c=function(e,t,r,n){var o;t in e&&("function"!=typeof(o=n)||"[object Function]"!==a.call(o)||!n())||(l?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},u=function(e,t){var r=arguments.length>2?arguments[2]:{},a=n(t);i&&(a=a.concat(Object.getOwnPropertySymbols(t))),o(a,function(n){c(e,n,t[n],r[n])})};u.supportsDescriptors=!!l,e.exports=u}},[200]).default}});