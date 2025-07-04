(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const He = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', Re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', Fe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
var h = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function We(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ue(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var _ = {}, B = {}, D = {};
Object.defineProperty(D, "__esModule", { value: !0 });
D.allInputsSelector = qe;
function qe() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = D;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(B);
var y = {}, H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.isNativeInput = ze;
function ze(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = H;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(y);
var be = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.append = Ge;
function Ge(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = R;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(be);
var F = {}, W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.blockElements = Ke;
function Ke() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = W;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(F);
var ye = {}, U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.calculateBaseline = Ve;
function Ve(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), l = parseFloat(t.borderTopWidth), s = parseFloat(t.marginTop), f = n * 0.8, p = (r - n) / 2, v = s + l + i + p + f;
  return v;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = U;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(ye);
var _e = {}, q = {}, z = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.isContentEditable = Xe;
function Xe(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = G;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(z);
Object.defineProperty(q, "__esModule", { value: !0 });
q.canSetCaret = Qe;
var Je = y, Ye = z;
function Qe(e) {
  var t = !0;
  if ((0, Je.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, Ye.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = q;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(_e);
var S = {}, K = {};
function Ze(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], l = `#${t}Cache`;
  if (n[r] = function(...s) {
    return this[l] === void 0 && (this[l] = i.apply(this, s)), this[l];
  }, r === "get" && n.set) {
    const s = n.set;
    n.set = function(f) {
      delete e[l], s.apply(this, f);
    };
  }
  return n;
}
function he() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function V(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function xe(e) {
  return !V(e);
}
const et = () => typeof window < "u" && window.navigator !== null && V(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function tt(e) {
  const t = he();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function nt(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function rt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function it(e, t, n) {
  let r;
  return (...i) => {
    const l = this, s = () => {
      r = void 0, n !== !0 && e.apply(l, i);
    }, f = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(s, t), f && e.apply(l, i);
  };
}
function m(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function at(e) {
  return m(e) === "boolean";
}
function Ee(e) {
  return m(e) === "function" || m(e) === "asyncfunction";
}
function lt(e) {
  return Ee(e) && /^\s*class\s+/.test(e.toString());
}
function ot(e) {
  return m(e) === "number";
}
function j(e) {
  return m(e) === "object";
}
function ut(e) {
  return Promise.resolve(e) === e;
}
function st(e) {
  return m(e) === "string";
}
function ct(e) {
  return m(e) === "undefined";
}
function $(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (j(e) && j(n))
    for (const r in n)
      j(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), $(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return $(e, ...t);
}
function ft(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function dt(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function pt(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const vt = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, gt = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class mt {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, r) => {
      this.completed = this.completed.then(t).then(n).catch(r);
    });
  }
}
function bt(e, t, n = void 0) {
  let r, i, l, s = null, f = 0;
  n || (n = {});
  const p = function() {
    f = n.leading === !1 ? 0 : Date.now(), s = null, l = e.apply(r, i), s === null && (r = i = null);
  };
  return function() {
    const v = Date.now();
    !f && n.leading === !1 && (f = v);
    const c = t - (v - f);
    return r = this, i = arguments, c <= 0 || c > t ? (s && (clearTimeout(s), s = null), f = v, l = e.apply(r, i), s === null && (r = i = null)) : !s && n.trailing !== !1 && (s = setTimeout(p, c)), l;
  };
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: mt,
  beautifyShortcut: tt,
  cacheable: Ze,
  capitalize: nt,
  copyTextToClipboard: rt,
  debounce: it,
  deepMerge: $,
  deprecationAssert: ft,
  getUserOS: he,
  getValidUrl: dt,
  isBoolean: at,
  isClass: lt,
  isEmpty: xe,
  isFunction: Ee,
  isIosDevice: et,
  isNumber: ot,
  isObject: j,
  isPrintableKey: pt,
  isPromise: ut,
  isString: st,
  isUndefined: ct,
  keyCodes: vt,
  mouseButtons: gt,
  notEmpty: V,
  throttle: bt,
  typeOf: m
}, Symbol.toStringTag, { value: "Module" })), X = /* @__PURE__ */ Ue(yt);
Object.defineProperty(K, "__esModule", { value: !0 });
K.containsOnlyInlineElements = Et;
var _t = X, ht = F;
function Et(e) {
  var t;
  (0, _t.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, ht.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = K;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(S);
var Oe = {}, J = {}, L = {}, Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.make = Ot;
function Ot(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var l = t.filter(function(f) {
      return f !== void 0;
    });
    (r = i.classList).add.apply(r, l);
  } else
    t !== null && i.classList.add(t);
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && (i[s] = n[s]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = Y;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(L);
Object.defineProperty(J, "__esModule", { value: !0 });
J.fragmentToString = Pt;
var Tt = L;
function Pt(e) {
  var t = (0, Tt.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = J;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(Oe);
var Te = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.getContentLength = Ct;
var jt = y;
function Ct(e) {
  var t, n;
  return (0, jt.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = Q;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(Te);
var Z = {}, x = {}, me = h && h.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, l; r < i; r++)
      (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), l[r] = t[r]);
  return e.concat(l || Array.prototype.slice.call(t));
};
Object.defineProperty(x, "__esModule", { value: !0 });
x.getDeepestBlockElements = Pe;
var St = S;
function Pe(e) {
  return (0, St.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return me(me([], t, !0), Pe(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = x;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(Z);
var je = {}, ee = {}, k = {}, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.isLineBreakTag = Lt;
function Lt(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = te;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(k);
var M = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.isSingleTag = kt;
function kt(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = ne;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(M);
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.getDeepestNode = Ce;
var Mt = y, Nt = k, wt = M;
function Ce(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, wt.isSingleTag)(i) && !(0, Mt.isNativeInput)(i) && !(0, Nt.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return Ce(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = ee;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(je);
var Se = {}, re = {}, P = h && h.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, l; r < i; r++)
      (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), l[r] = t[r]);
  return e.concat(l || Array.prototype.slice.call(t));
};
Object.defineProperty(re, "__esModule", { value: !0 });
re.findAllInputs = Dt;
var It = S, At = Z, $t = B, Bt = y;
function Dt(e) {
  return Array.from(e.querySelectorAll((0, $t.allInputsSelector)())).reduce(function(t, n) {
    return (0, Bt.isNativeInput)(n) || (0, It.containsOnlyInlineElements)(n) ? P(P([], t, !0), [n], !1) : P(P([], t, !0), (0, At.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = re;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(Se);
var Le = {}, ie = {};
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.isCollapsedWhitespaces = Ht;
function Ht(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = ie;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(Le);
var ae = {}, le = {};
Object.defineProperty(le, "__esModule", { value: !0 });
le.isElement = Ft;
var Rt = X;
function Ft(e) {
  return (0, Rt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = le;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(ae);
var ke = {}, oe = {}, ue = {}, se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.isLeaf = Wt;
function Wt(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = se;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(ue);
var ce = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.isNodeEmpty = Kt;
var Ut = k, qt = ae, zt = y, Gt = M;
function Kt(e, t) {
  var n = "";
  return (0, Gt.isSingleTag)(e) && !(0, Ut.isLineBreakTag)(e) ? !1 : ((0, qt.isElement)(e) && (0, zt.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = fe;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(ce);
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.isEmpty = Jt;
var Vt = ue, Xt = ce;
function Jt(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, Vt.isLeaf)(e) && !(0, Xt.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = oe;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(ke);
var Me = {}, de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.isFragment = Qt;
var Yt = X;
function Qt(e) {
  return (0, Yt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = de;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(Me);
var Ne = {}, pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.isHTMLString = xt;
var Zt = L;
function xt(e) {
  var t = (0, Zt.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = pe;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(Ne);
var we = {}, ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.offset = en;
function en(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, l = t.left + n;
  return {
    top: i,
    left: l,
    bottom: i + t.height,
    right: l + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = ve;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(we);
var Ie = {}, ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.prepend = tn;
function tn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = ge;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(Ie);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = B;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = y;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = be;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = F;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var l = ye;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return l.calculateBaseline;
  } });
  var s = _e;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return s.canSetCaret;
  } });
  var f = S;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return f.containsOnlyInlineElements;
  } });
  var p = Oe;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return p.fragmentToString;
  } });
  var v = Te;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return v.getContentLength;
  } });
  var c = Z;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return c.getDeepestBlockElements;
  } });
  var u = je;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return u.getDeepestNode;
  } });
  var o = Se;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return o.findAllInputs;
  } });
  var d = Le;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return d.isCollapsedWhitespaces;
  } });
  var a = z;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return a.isContentEditable;
  } });
  var g = ae;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return g.isElement;
  } });
  var E = ke;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return E.isEmpty;
  } });
  var N = Me;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return N.isFragment;
  } });
  var w = Ne;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return w.isHTMLString;
  } });
  var I = ue;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return I.isLeaf;
  } });
  var O = ce;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return O.isNodeEmpty;
  } });
  var A = k;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return A.isLineBreakTag;
  } });
  var b = M;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return b.isSingleTag;
  } });
  var T = L;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return T.make;
  } });
  var Be = we;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return Be.offset;
  } });
  var De = Ie;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return De.prepend;
  } });
})(_);
var Ae = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(h, function() {
    function n(u) {
      var o = u.tags, d = Object.keys(o), a = d.map(function(g) {
        return typeof o[g];
      }).every(function(g) {
        return g === "object" || g === "boolean" || g === "function";
      });
      if (!a)
        throw new Error("The configuration was invalid");
      this.config = u;
    }
    var r = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(u) {
      return r.indexOf(u.nodeName) !== -1;
    }
    var l = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function s(u) {
      return l.indexOf(u.nodeName) !== -1;
    }
    n.prototype.clean = function(u) {
      const o = document.implementation.createHTMLDocument(), d = o.createElement("div");
      return d.innerHTML = u, this._sanitize(o, d), d.innerHTML;
    }, n.prototype._sanitize = function(u, o) {
      var d = f(u, o), a = d.firstChild();
      if (a)
        do {
          if (a.nodeType === Node.TEXT_NODE)
            if (a.data.trim() === "" && (a.previousElementSibling && i(a.previousElementSibling) || a.nextElementSibling && i(a.nextElementSibling))) {
              o.removeChild(a), this._sanitize(u, o);
              break;
            } else
              continue;
          if (a.nodeType === Node.COMMENT_NODE) {
            o.removeChild(a), this._sanitize(u, o);
            break;
          }
          var g = s(a), E;
          g && (E = Array.prototype.some.call(a.childNodes, i));
          var N = !!o.parentNode, w = i(o) && i(a) && N, I = a.nodeName.toLowerCase(), O = p(this.config, I, a), A = g && E;
          if (A || v(a, O) || !this.config.keepNestedBlockElements && w) {
            if (!(a.nodeName === "SCRIPT" || a.nodeName === "STYLE"))
              for (; a.childNodes.length > 0; )
                o.insertBefore(a.childNodes[0], a);
            o.removeChild(a), this._sanitize(u, o);
            break;
          }
          for (var b = 0; b < a.attributes.length; b += 1) {
            var T = a.attributes[b];
            c(T, O, a) && (a.removeAttribute(T.name), b = b - 1);
          }
          this._sanitize(u, a);
        } while (a = d.nextSibling());
    };
    function f(u, o) {
      return u.createTreeWalker(
        o,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function p(u, o, d) {
      return typeof u.tags[o] == "function" ? u.tags[o](d) : u.tags[o];
    }
    function v(u, o) {
      return typeof o > "u" ? !0 : typeof o == "boolean" ? !o : !1;
    }
    function c(u, o, d) {
      var a = u.name.toLowerCase();
      return o === !0 ? !1 : typeof o[a] == "function" ? !o[a](u.value, d) : typeof o[a] > "u" || o[a] === !1 ? !0 : typeof o[a] == "string" ? o[a] !== u.value : !1;
    }
    return n;
  });
})(Ae);
var nn = Ae.exports;
const rn = /* @__PURE__ */ We(nn);
var $e = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))($e || {});
class C {
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - Quote Tool constructor params
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - editor.js api
   * @param params.readOnly - read only mode flag
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: l }) {
    console.log("Quote Artem Aleksashkin version 2");
    const { DEFAULT_ALIGNMENT: s } = C;
    this.api = r, this.readOnly = i, this.quotePlaceholder = r.i18n.t((n == null ? void 0 : n.quotePlaceholder) ?? C.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = r.i18n.t((n == null ? void 0 : n.captionPlaceholder) ?? C.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
      text: t.text || "",
      caption: t.caption || "",
      alignment: Object.values($e).includes(t.alignment) ? t.alignment : (n == null ? void 0 : n.defaultAlignment) ?? s
    }, this.css = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    }, this.block = l;
  }
  /**
   * Notify core that read-only mode is supported
   * @returns true
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   * @returns icon and title of the toolbox
   */
  static get toolbox() {
    return {
      icon: Fe,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   * @returns true
   */
  static get contentless() {
    return !0;
  }
  /**
   * Allow to press Enter inside the Quote
   * @returns true
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for quote text
   * @returns 'Enter a quote'
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   * @returns 'Enter a caption'
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Default quote alignment
   * @returns Alignment.Left
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  /**
   * Allow Quote to be converted to/from other blocks
   * @returns conversion config object
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       * @param quoteData - Quote data object
       * @returns string
       */
      export: function(t) {
        return t.caption ? `${t.text} — ${t.caption}` : t.text;
      }
    };
  }
  /**
   * Tool`s styles
   * @returns CSS classes names
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Tool`s settings properties
   * @returns settings properties
   */
  get settings() {
    return [
      {
        name: "left",
        icon: Re
      },
      {
        name: "center",
        icon: He
      }
    ];
  }
  /**
   * Create Quote Tool container with inputs
   * @returns blockquote DOM element - Quote Tool container
   */
  render() {
    this.element ? this.element.querySelectorAll("div").forEach((r) => {
      r.remove();
    }) : this.element = _.make("blockquote", [
      this.css.baseClass,
      this.css.wrapper
    ]);
    const t = _.make("div", [this.css.input, this.css.text], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.text
    }), n = _.make("div", [this.css.input, this.css.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption
    });
    return t.dataset.placeholder = this.quotePlaceholder, n.dataset.placeholder = this.captionPlaceholder, this.element.appendChild(t), this.element.appendChild(n), this.element;
  }
  /**
   * Extract Quote data from Quote Tool element
   * @param quoteElement - Quote DOM element to save
   * @returns Quote data object
   */
  save(t) {
    const n = t.querySelector(`.${this.css.text}`), r = t.querySelector(`.${this.css.caption}`);
    return Object.assign(this.data, {
      text: (n == null ? void 0 : n.innerHTML) ?? "",
      caption: (r == null ? void 0 : r.innerHTML) ?? ""
    });
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: [
        {
          blockquote: {}
        }
      ]
    };
  }
  static get blockConfig() {
    return {
      ignoreContainsAnotherToolTags: !0,
      skipSanitizer: !0
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(t) {
    switch (t.type) {
      case "tag":
        const n = t.detail.data, r = {
          tags: {
            p: {},
            a: {
              href: !0,
              target: "_blank",
              rel: "nofollow"
            },
            b: {},
            br: {},
            strong: {},
            i: {},
            em: {}
          }
        }, i = new rn(r), l = i.clean(n.innerHTML), s = _.make("DIV");
        s.innerHTML = l;
        const f = (p) => {
          if (!p)
            return;
          p.querySelectorAll("p").forEach((c) => {
            const u = [];
            for (c.previousSibling && c.innerHTML.trim() !== "" && u.push(document.createElement("br")); c.firstChild; )
              c.firstChild instanceof Element && f(c.firstChild), u.push(c.firstChild), c.removeChild(c.firstChild);
            c.parentNode && (u.forEach((o) => {
              c.parentNode.insertBefore(o, c);
            }), c.parentNode.removeChild(c));
          });
        };
        f(s), this.data.text = i.clean(s.innerHTML), this.render();
        break;
    }
  }
  /**
   * Sanitizer rules
   * @returns sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        p: !0,
        br: !0,
        div: !0
      },
      caption: {},
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   * @returns settings menu
   */
  renderSettings() {
    const t = (n) => n && n[0].toUpperCase() + n.slice(1);
    return this.settings.map((n) => ({
      icon: n.icon,
      label: this.api.i18n.t(`Align ${t(n.name)}`),
      onActivate: () => this._toggleTune(n.name),
      isActive: this.data.alignment === n.name,
      closeOnActivate: !0
    }));
  }
  /**
   * Toggle quote`s alignment
   * @param tune - alignment
   */
  _toggleTune(t) {
    this.data.alignment = t, this.block.dispatchChange();
  }
}
export {
  C as default
};
