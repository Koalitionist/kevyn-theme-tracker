(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b4) => {
    for (var prop in b4 ||= {})
      if (__hasOwnProp.call(b4, prop))
        __defNormalProp(a4, prop, b4[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b4)) {
        if (__propIsEnum.call(b4, prop))
          __defNormalProp(a4, prop, b4[prop]);
      }
    return a4;
  };
  var __spreadProps = (a4, b4) => __defProps(a4, __getOwnPropDescs(b4));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __require = /* @__PURE__ */ ((x5) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x5, {
    get: (a4, b4) => (typeof require !== "undefined" ? require : a4)[b4]
  }) : x5)(function(x5) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x5 + '" is not supported');
  });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var step = (x5) => x5.done ? resolve(x5.value) : Promise.resolve(x5.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js
  function h(n3, l4) {
    for (var u4 in l4)
      n3[u4] = l4[u4];
    return n3;
  }
  function v(n3) {
    var l4 = n3.parentNode;
    l4 && l4.removeChild(n3);
  }
  function y(l4, u4, i4) {
    var t4, r5, o5, f4 = {};
    for (o5 in u4)
      "key" == o5 ? t4 = u4[o5] : "ref" == o5 ? r5 = u4[o5] : f4[o5] = u4[o5];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), "function" == typeof l4 && null != l4.defaultProps)
      for (o5 in l4.defaultProps)
        void 0 === f4[o5] && (f4[o5] = l4.defaultProps[o5]);
    return p(l4, f4, t4, r5, null);
  }
  function p(n3, i4, t4, r5, o5) {
    var f4 = { type: n3, props: i4, key: t4, ref: r5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o5 ? ++u : o5 };
    return null == o5 && null != l.vnode && l.vnode(f4), f4;
  }
  function d() {
    return { current: null };
  }
  function _(n3) {
    return n3.children;
  }
  function k(n3, l4) {
    this.props = n3, this.context = l4;
  }
  function b(n3, l4) {
    if (null == l4)
      return n3.__ ? b(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u4; l4 < n3.__k.length; l4++)
      if (null != (u4 = n3.__k[l4]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n3.type ? b(n3) : null;
  }
  function g(n3) {
    var l4, u4;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++)
        if (null != (u4 = n3.__k[l4]) && null != u4.__e) {
          n3.__e = n3.__c.base = u4.__e;
          break;
        }
      return g(n3);
    }
  }
  function m(n3) {
    (!n3.__d && (n3.__d = true) && t.push(n3) && !w.__r++ || r2 !== l.debounceRendering) && ((r2 = l.debounceRendering) || o)(w);
  }
  function w() {
    var n3, l4, u4, i4, r5, o5, e3, c4;
    for (t.sort(f); n3 = t.shift(); )
      n3.__d && (l4 = t.length, i4 = void 0, r5 = void 0, e3 = (o5 = (u4 = n3).__v).__e, (c4 = u4.__P) && (i4 = [], (r5 = h({}, o5)).__v = o5.__v + 1, L(c4, o5, r5, u4.__n, void 0 !== c4.ownerSVGElement, null != o5.__h ? [e3] : null, i4, null == e3 ? b(o5) : e3, o5.__h), M(i4, o5), o5.__e != e3 && g(o5)), t.length > l4 && t.sort(f));
    w.__r = 0;
  }
  function x(n3, l4, u4, i4, t4, r5, o5, f4, e3, a4) {
    var h4, v4, y4, d4, k5, g5, m3, w5 = i4 && i4.__k || s, x5 = w5.length;
    for (u4.__k = [], h4 = 0; h4 < l4.length; h4++)
      if (null != (d4 = u4.__k[h4] = null == (d4 = l4[h4]) || "boolean" == typeof d4 || "function" == typeof d4 ? null : "string" == typeof d4 || "number" == typeof d4 || "bigint" == typeof d4 ? p(null, d4, null, null, d4) : Array.isArray(d4) ? p(_, { children: d4 }, null, null, null) : d4.__b > 0 ? p(d4.type, d4.props, d4.key, d4.ref ? d4.ref : null, d4.__v) : d4)) {
        if (d4.__ = u4, d4.__b = u4.__b + 1, null === (y4 = w5[h4]) || y4 && d4.key == y4.key && d4.type === y4.type)
          w5[h4] = void 0;
        else
          for (v4 = 0; v4 < x5; v4++) {
            if ((y4 = w5[v4]) && d4.key == y4.key && d4.type === y4.type) {
              w5[v4] = void 0;
              break;
            }
            y4 = null;
          }
        L(n3, d4, y4 = y4 || c, t4, r5, o5, f4, e3, a4), k5 = d4.__e, (v4 = d4.ref) && y4.ref != v4 && (m3 || (m3 = []), y4.ref && m3.push(y4.ref, null, d4), m3.push(v4, d4.__c || k5, d4)), null != k5 ? (null == g5 && (g5 = k5), "function" == typeof d4.type && d4.__k === y4.__k ? d4.__d = e3 = A(d4, e3, n3) : e3 = C(n3, d4, y4, w5, k5, e3), "function" == typeof u4.type && (u4.__d = e3)) : e3 && y4.__e == e3 && e3.parentNode != n3 && (e3 = b(y4));
      }
    for (u4.__e = g5, h4 = x5; h4--; )
      null != w5[h4] && ("function" == typeof u4.type && null != w5[h4].__e && w5[h4].__e == u4.__d && (u4.__d = $(i4).nextSibling), S(w5[h4], w5[h4]));
    if (m3)
      for (h4 = 0; h4 < m3.length; h4++)
        O(m3[h4], m3[++h4], m3[++h4]);
  }
  function A(n3, l4, u4) {
    for (var i4, t4 = n3.__k, r5 = 0; t4 && r5 < t4.length; r5++)
      (i4 = t4[r5]) && (i4.__ = n3, l4 = "function" == typeof i4.type ? A(i4, l4, u4) : C(u4, i4, i4, t4, i4.__e, l4));
    return l4;
  }
  function P(n3, l4) {
    return l4 = l4 || [], null == n3 || "boolean" == typeof n3 || (Array.isArray(n3) ? n3.some(function(n4) {
      P(n4, l4);
    }) : l4.push(n3)), l4;
  }
  function C(n3, l4, u4, i4, t4, r5) {
    var o5, f4, e3;
    if (void 0 !== l4.__d)
      o5 = l4.__d, l4.__d = void 0;
    else if (null == u4 || t4 != r5 || null == t4.parentNode)
      n:
        if (null == r5 || r5.parentNode !== n3)
          n3.appendChild(t4), o5 = null;
        else {
          for (f4 = r5, e3 = 0; (f4 = f4.nextSibling) && e3 < i4.length; e3 += 1)
            if (f4 == t4)
              break n;
          n3.insertBefore(t4, r5), o5 = r5;
        }
    return void 0 !== o5 ? o5 : t4.nextSibling;
  }
  function $(n3) {
    var l4, u4, i4;
    if (null == n3.type || "string" == typeof n3.type)
      return n3.__e;
    if (n3.__k) {
      for (l4 = n3.__k.length - 1; l4 >= 0; l4--)
        if ((u4 = n3.__k[l4]) && (i4 = $(u4)))
          return i4;
    }
    return null;
  }
  function H(n3, l4, u4, i4, t4) {
    var r5;
    for (r5 in u4)
      "children" === r5 || "key" === r5 || r5 in l4 || T(n3, r5, null, u4[r5], i4);
    for (r5 in l4)
      t4 && "function" != typeof l4[r5] || "children" === r5 || "key" === r5 || "value" === r5 || "checked" === r5 || u4[r5] === l4[r5] || T(n3, r5, l4[r5], u4[r5], i4);
  }
  function I(n3, l4, u4) {
    "-" === l4[0] ? n3.setProperty(l4, null == u4 ? "" : u4) : n3[l4] = null == u4 ? "" : "number" != typeof u4 || a.test(l4) ? u4 : u4 + "px";
  }
  function T(n3, l4, u4, i4, t4) {
    var r5;
    n:
      if ("style" === l4)
        if ("string" == typeof u4)
          n3.style.cssText = u4;
        else {
          if ("string" == typeof i4 && (n3.style.cssText = i4 = ""), i4)
            for (l4 in i4)
              u4 && l4 in u4 || I(n3.style, l4, "");
          if (u4)
            for (l4 in u4)
              i4 && u4[l4] === i4[l4] || I(n3.style, l4, u4[l4]);
        }
      else if ("o" === l4[0] && "n" === l4[1])
        r5 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n3 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + r5] = u4, u4 ? i4 || n3.addEventListener(l4, r5 ? z : j, r5) : n3.removeEventListener(l4, r5 ? z : j, r5);
      else if ("dangerouslySetInnerHTML" !== l4) {
        if (t4)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l4 && "height" !== l4 && "href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n3)
          try {
            n3[l4] = null == u4 ? "" : u4;
            break n;
          } catch (n4) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, u4));
      }
  }
  function j(n3) {
    return this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function z(n3) {
    return this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function L(n3, u4, i4, t4, r5, o5, f4, e3, c4) {
    var s4, a4, v4, y4, p4, d4, b4, g5, m3, w5, A5, P5, C3, $3, H4, I4 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    null != i4.__h && (c4 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, o5 = [e3]), (s4 = l.__b) && s4(u4);
    try {
      n:
        if ("function" == typeof I4) {
          if (g5 = u4.props, m3 = (s4 = I4.contextType) && t4[s4.__c], w5 = s4 ? m3 ? m3.props.value : s4.__ : t4, i4.__c ? b4 = (a4 = u4.__c = i4.__c).__ = a4.__E : ("prototype" in I4 && I4.prototype.render ? u4.__c = a4 = new I4(g5, w5) : (u4.__c = a4 = new k(g5, w5), a4.constructor = I4, a4.render = q), m3 && m3.sub(a4), a4.props = g5, a4.state || (a4.state = {}), a4.context = w5, a4.__n = t4, v4 = a4.__d = true, a4.__h = [], a4._sb = []), null == a4.__s && (a4.__s = a4.state), null != I4.getDerivedStateFromProps && (a4.__s == a4.state && (a4.__s = h({}, a4.__s)), h(a4.__s, I4.getDerivedStateFromProps(g5, a4.__s))), y4 = a4.props, p4 = a4.state, a4.__v = u4, v4)
            null == I4.getDerivedStateFromProps && null != a4.componentWillMount && a4.componentWillMount(), null != a4.componentDidMount && a4.__h.push(a4.componentDidMount);
          else {
            if (null == I4.getDerivedStateFromProps && g5 !== y4 && null != a4.componentWillReceiveProps && a4.componentWillReceiveProps(g5, w5), !a4.__e && null != a4.shouldComponentUpdate && false === a4.shouldComponentUpdate(g5, a4.__s, w5) || u4.__v === i4.__v) {
              for (u4.__v !== i4.__v && (a4.props = g5, a4.state = a4.__s, a4.__d = false), a4.__e = false, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n4) {
                n4 && (n4.__ = u4);
              }), A5 = 0; A5 < a4._sb.length; A5++)
                a4.__h.push(a4._sb[A5]);
              a4._sb = [], a4.__h.length && f4.push(a4);
              break n;
            }
            null != a4.componentWillUpdate && a4.componentWillUpdate(g5, a4.__s, w5), null != a4.componentDidUpdate && a4.__h.push(function() {
              a4.componentDidUpdate(y4, p4, d4);
            });
          }
          if (a4.context = w5, a4.props = g5, a4.__P = n3, P5 = l.__r, C3 = 0, "prototype" in I4 && I4.prototype.render) {
            for (a4.state = a4.__s, a4.__d = false, P5 && P5(u4), s4 = a4.render(a4.props, a4.state, a4.context), $3 = 0; $3 < a4._sb.length; $3++)
              a4.__h.push(a4._sb[$3]);
            a4._sb = [];
          } else
            do {
              a4.__d = false, P5 && P5(u4), s4 = a4.render(a4.props, a4.state, a4.context), a4.state = a4.__s;
            } while (a4.__d && ++C3 < 25);
          a4.state = a4.__s, null != a4.getChildContext && (t4 = h(h({}, t4), a4.getChildContext())), v4 || null == a4.getSnapshotBeforeUpdate || (d4 = a4.getSnapshotBeforeUpdate(y4, p4)), H4 = null != s4 && s4.type === _ && null == s4.key ? s4.props.children : s4, x(n3, Array.isArray(H4) ? H4 : [H4], u4, i4, t4, r5, o5, f4, e3, c4), a4.base = u4.__e, u4.__h = null, a4.__h.length && f4.push(a4), b4 && (a4.__E = a4.__ = null), a4.__e = false;
        } else
          null == o5 && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = N(i4.__e, u4, i4, t4, r5, o5, f4, c4);
      (s4 = l.diffed) && s4(u4);
    } catch (n4) {
      u4.__v = null, (c4 || null != o5) && (u4.__e = e3, u4.__h = !!c4, o5[o5.indexOf(e3)] = null), l.__e(n4, u4, i4);
    }
  }
  function M(n3, u4) {
    l.__c && l.__c(u4, n3), n3.some(function(u5) {
      try {
        n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
          n4.call(u5);
        });
      } catch (n4) {
        l.__e(n4, u5.__v);
      }
    });
  }
  function N(l4, u4, i4, t4, r5, o5, f4, e3) {
    var s4, a4, h4, y4 = i4.props, p4 = u4.props, d4 = u4.type, _5 = 0;
    if ("svg" === d4 && (r5 = true), null != o5) {
      for (; _5 < o5.length; _5++)
        if ((s4 = o5[_5]) && "setAttribute" in s4 == !!d4 && (d4 ? s4.localName === d4 : 3 === s4.nodeType)) {
          l4 = s4, o5[_5] = null;
          break;
        }
    }
    if (null == l4) {
      if (null === d4)
        return document.createTextNode(p4);
      l4 = r5 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p4.is && p4), o5 = null, e3 = false;
    }
    if (null === d4)
      y4 === p4 || e3 && l4.data === p4 || (l4.data = p4);
    else {
      if (o5 = o5 && n.call(l4.childNodes), a4 = (y4 = i4.props || c).dangerouslySetInnerHTML, h4 = p4.dangerouslySetInnerHTML, !e3) {
        if (null != o5)
          for (y4 = {}, _5 = 0; _5 < l4.attributes.length; _5++)
            y4[l4.attributes[_5].name] = l4.attributes[_5].value;
        (h4 || a4) && (h4 && (a4 && h4.__html == a4.__html || h4.__html === l4.innerHTML) || (l4.innerHTML = h4 && h4.__html || ""));
      }
      if (H(l4, p4, y4, r5, e3), h4)
        u4.__k = [];
      else if (_5 = u4.props.children, x(l4, Array.isArray(_5) ? _5 : [_5], u4, i4, t4, r5 && "foreignObject" !== d4, o5, f4, o5 ? o5[0] : i4.__k && b(i4, 0), e3), null != o5)
        for (_5 = o5.length; _5--; )
          null != o5[_5] && v(o5[_5]);
      e3 || ("value" in p4 && void 0 !== (_5 = p4.value) && (_5 !== l4.value || "progress" === d4 && !_5 || "option" === d4 && _5 !== y4.value) && T(l4, "value", _5, y4.value, false), "checked" in p4 && void 0 !== (_5 = p4.checked) && _5 !== l4.checked && T(l4, "checked", _5, y4.checked, false));
    }
    return l4;
  }
  function O(n3, u4, i4) {
    try {
      "function" == typeof n3 ? n3(u4) : n3.current = u4;
    } catch (n4) {
      l.__e(n4, i4);
    }
  }
  function S(n3, u4, i4) {
    var t4, r5;
    if (l.unmount && l.unmount(n3), (t4 = n3.ref) && (t4.current && t4.current !== n3.__e || O(t4, null, u4)), null != (t4 = n3.__c)) {
      if (t4.componentWillUnmount)
        try {
          t4.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u4);
        }
      t4.base = t4.__P = null, n3.__c = void 0;
    }
    if (t4 = n3.__k)
      for (r5 = 0; r5 < t4.length; r5++)
        t4[r5] && S(t4[r5], u4, i4 || "function" != typeof n3.type);
    i4 || null == n3.__e || v(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function q(n3, l4, u4) {
    return this.constructor(n3, u4);
  }
  function B(u4, i4, t4) {
    var r5, o5, f4;
    l.__ && l.__(u4, i4), o5 = (r5 = "function" == typeof t4) ? null : t4 && t4.__k || i4.__k, f4 = [], L(i4, u4 = (!r5 && t4 || i4).__k = y(_, null, [u4]), o5 || c, c, void 0 !== i4.ownerSVGElement, !r5 && t4 ? [t4] : o5 ? null : i4.firstChild ? n.call(i4.childNodes) : null, f4, !r5 && t4 ? t4 : o5 ? o5.__e : i4.firstChild, r5), M(f4, u4);
  }
  function D(n3, l4) {
    B(n3, l4, D);
  }
  function E(l4, u4, i4) {
    var t4, r5, o5, f4 = h({}, l4.props);
    for (o5 in u4)
      "key" == o5 ? t4 = u4[o5] : "ref" == o5 ? r5 = u4[o5] : f4[o5] = u4[o5];
    return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), p(l4.type, f4, t4 || l4.key, r5 || l4.ref, null);
  }
  function F(n3, l4) {
    var u4 = { __c: l4 = "__cC" + e++, __: n3, Consumer: function(n4, l5) {
      return n4.children(l5);
    }, Provider: function(n4) {
      var u5, i4;
      return this.getChildContext || (u5 = [], (i4 = {})[l4] = this, this.getChildContext = function() {
        return i4;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u5.some(function(n6) {
          n6.__e = true, m(n6);
        });
      }, this.sub = function(n5) {
        u5.push(n5);
        var l5 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n5), 1), l5 && l5.call(n5);
        };
      }), n4.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  var n, l, u, i, t, r2, o, f, e, c, s, a;
  var init_preact_module = __esm({
    "../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      __name(h, "h");
      __name(v, "v");
      __name(y, "y");
      __name(p, "p");
      __name(d, "d");
      __name(_, "_");
      __name(k, "k");
      __name(b, "b");
      __name(g, "g");
      __name(m, "m");
      __name(w, "w");
      __name(x, "x");
      __name(A, "A");
      __name(P, "P");
      __name(C, "C");
      __name($, "$");
      __name(H, "H");
      __name(I, "I");
      __name(T, "T");
      __name(j, "j");
      __name(z, "z");
      __name(L, "L");
      __name(M, "M");
      __name(N, "N");
      __name(O, "O");
      __name(S, "S");
      __name(q, "q");
      __name(B, "B");
      __name(D, "D");
      __name(E, "E");
      __name(F, "F");
      n = s.slice, l = { __e: function(n3, l4, u4, i4) {
        for (var t4, r5, o5; l4 = l4.__; )
          if ((t4 = l4.__c) && !t4.__)
            try {
              if ((r5 = t4.constructor) && null != r5.getDerivedStateFromError && (t4.setState(r5.getDerivedStateFromError(n3)), o5 = t4.__d), null != t4.componentDidCatch && (t4.componentDidCatch(n3, i4 || {}), o5 = t4.__d), o5)
                return t4.__E = t4;
            } catch (l5) {
              n3 = l5;
            }
        throw n3;
      } }, u = 0, i = /* @__PURE__ */ __name(function(n3) {
        return null != n3 && void 0 === n3.constructor;
      }, "i"), k.prototype.setState = function(n3, l4) {
        var u4;
        u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n3 && (n3 = n3(h({}, u4), this.props)), n3 && h(u4, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), m(this));
      }, k.prototype.forceUpdate = function(n3) {
        this.__v && (this.__e = true, n3 && this.__h.push(n3), m(this));
      }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = /* @__PURE__ */ __name(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }, "f"), w.__r = 0, e = 0;
    }
  });

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  function d2(t4, u4) {
    l.__h && l.__h(r3, t4, o2 || u4), o2 = 0;
    var i4 = r3.__H || (r3.__H = { __: [], __h: [] });
    return t4 >= i4.__.length && i4.__.push({ __V: c2 }), i4.__[t4];
  }
  function h2(n3) {
    return o2 = 1, s2(B2, n3);
  }
  function s2(n3, u4, i4) {
    var o5 = d2(t2++, 2);
    if (o5.t = n3, !o5.__c && (o5.__ = [i4 ? i4(u4) : B2(void 0, u4), function(n4) {
      var t4 = o5.__N ? o5.__N[0] : o5.__[0], r5 = o5.t(t4, n4);
      t4 !== r5 && (o5.__N = [r5, o5.__[1]], o5.__c.setState({}));
    }], o5.__c = r3, !r3.u)) {
      var f4 = /* @__PURE__ */ __name(function(n4, t4, r5) {
        if (!o5.__c.__H)
          return true;
        var u5 = o5.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u5.every(function(n5) {
          return !n5.__N;
        }))
          return !c4 || c4.call(this, n4, t4, r5);
        var i5 = false;
        return u5.forEach(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i5 = true);
          }
        }), !(!i5 && o5.__c.props === n4) && (!c4 || c4.call(this, n4, t4, r5));
      }, "f");
      r3.u = true;
      var c4 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
      r3.componentWillUpdate = function(n4, t4, r5) {
        if (this.__e) {
          var u5 = c4;
          c4 = void 0, f4(n4, t4, r5), c4 = u5;
        }
        e3 && e3.call(this, n4, t4, r5);
      }, r3.shouldComponentUpdate = f4;
    }
    return o5.__N || o5.__;
  }
  function p2(u4, i4) {
    var o5 = d2(t2++, 3);
    !l.__s && z2(o5.__H, i4) && (o5.__ = u4, o5.i = i4, r3.__H.__h.push(o5));
  }
  function y2(u4, i4) {
    var o5 = d2(t2++, 4);
    !l.__s && z2(o5.__H, i4) && (o5.__ = u4, o5.i = i4, r3.__h.push(o5));
  }
  function _2(n3) {
    return o2 = 5, F2(function() {
      return { current: n3 };
    }, []);
  }
  function A2(n3, t4, r5) {
    o2 = 6, y2(function() {
      return "function" == typeof n3 ? (n3(t4()), function() {
        return n3(null);
      }) : n3 ? (n3.current = t4(), function() {
        return n3.current = null;
      }) : void 0;
    }, null == r5 ? r5 : r5.concat(n3));
  }
  function F2(n3, r5) {
    var u4 = d2(t2++, 7);
    return z2(u4.__H, r5) ? (u4.__V = n3(), u4.i = r5, u4.__h = n3, u4.__V) : u4.__;
  }
  function T2(n3, t4) {
    return o2 = 8, F2(function() {
      return n3;
    }, t4);
  }
  function q2(n3) {
    var u4 = r3.context[n3.__c], i4 = d2(t2++, 9);
    return i4.c = n3, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r3)), u4.props.value) : n3.__;
  }
  function x2(t4, r5) {
    l.useDebugValue && l.useDebugValue(r5 ? r5(t4) : t4);
  }
  function P2(n3) {
    var u4 = d2(t2++, 10), i4 = h2();
    return u4.__ = n3, r3.componentDidCatch || (r3.componentDidCatch = function(n4, t4) {
      u4.__ && u4.__(n4, t4), i4[1](n4);
    }), [i4[0], function() {
      i4[1](void 0);
    }];
  }
  function V() {
    var n3 = d2(t2++, 11);
    if (!n3.__) {
      for (var u4 = r3.__v; null !== u4 && !u4.__m && null !== u4.__; )
        u4 = u4.__;
      var i4 = u4.__m || (u4.__m = [0, 0]);
      n3.__ = "P" + i4[0] + "-" + i4[1]++;
    }
    return n3.__;
  }
  function b2() {
    for (var t4; t4 = f2.shift(); )
      if (t4.__P && t4.__H)
        try {
          t4.__H.__h.forEach(k2), t4.__H.__h.forEach(w2), t4.__H.__h = [];
        } catch (r5) {
          t4.__H.__h = [], l.__e(r5, t4.__v);
        }
  }
  function j2(n3) {
    var t4, r5 = /* @__PURE__ */ __name(function() {
      clearTimeout(u4), g2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, "r"), u4 = setTimeout(r5, 100);
    g2 && (t4 = requestAnimationFrame(r5));
  }
  function k2(n3) {
    var t4 = r3, u4 = n3.__c;
    "function" == typeof u4 && (n3.__c = void 0, u4()), r3 = t4;
  }
  function w2(n3) {
    var t4 = r3;
    n3.__c = n3.__(), r3 = t4;
  }
  function z2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r5) {
      return t5 !== n3[r5];
    });
  }
  function B2(n3, t4) {
    return "function" == typeof t4 ? t4(n3) : t4;
  }
  var t2, r3, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      __name(d2, "d");
      __name(h2, "h");
      __name(s2, "s");
      __name(p2, "p");
      __name(y2, "y");
      __name(_2, "_");
      __name(A2, "A");
      __name(F2, "F");
      __name(T2, "T");
      __name(q2, "q");
      __name(x2, "x");
      __name(P2, "P");
      __name(V, "V");
      __name(b2, "b");
      l.__b = function(n3) {
        r3 = null, e2 && e2(n3);
      }, l.__r = function(n3) {
        a2 && a2(n3), t2 = 0;
        var i4 = (r3 = n3.__c).__H;
        i4 && (u2 === r3 ? (i4.__h = [], r3.__h = [], i4.__.forEach(function(n4) {
          n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
        })) : (i4.__h.forEach(k2), i4.__h.forEach(w2), i4.__h = [])), u2 = r3;
      }, l.diffed = function(t4) {
        v2 && v2(t4);
        var o5 = t4.__c;
        o5 && o5.__H && (o5.__H.__h.length && (1 !== f2.push(o5) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o5.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
        })), u2 = r3 = null;
      }, l.__c = function(t4, r5) {
        r5.some(function(t5) {
          try {
            t5.__h.forEach(k2), t5.__h = t5.__h.filter(function(n3) {
              return !n3.__ || w2(n3);
            });
          } catch (u4) {
            r5.some(function(n3) {
              n3.__h && (n3.__h = []);
            }), r5 = [], l.__e(u4, t5.__v);
          }
        }), l2 && l2(t4, r5);
      }, l.unmount = function(t4) {
        m2 && m2(t4);
        var r5, u4 = t4.__c;
        u4 && u4.__H && (u4.__H.__.forEach(function(n3) {
          try {
            k2(n3);
          } catch (n4) {
            r5 = n4;
          }
        }), u4.__H = void 0, r5 && l.__e(r5, u4.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
      __name(j2, "j");
      __name(k2, "k");
      __name(w2, "w");
      __name(z2, "z");
      __name(B2, "B");
    }
  });

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function g3(n3, t4) {
    for (var e3 in t4)
      n3[e3] = t4[e3];
    return n3;
  }
  function C2(n3, t4) {
    for (var e3 in n3)
      if ("__source" !== e3 && !(e3 in t4))
        return true;
    for (var r5 in t4)
      if ("__source" !== r5 && n3[r5] !== t4[r5])
        return true;
    return false;
  }
  function E2(n3, t4) {
    return n3 === t4 && (0 !== n3 || 1 / n3 == 1 / t4) || n3 != n3 && t4 != t4;
  }
  function w3(n3) {
    this.props = n3;
  }
  function x3(n3, e3) {
    function r5(n4) {
      var t4 = this.props.ref, r6 = t4 == n4.ref;
      return !r6 && t4 && (t4.call ? t4(null) : t4.current = null), e3 ? !e3(this.props, n4) || !r6 : C2(this.props, n4);
    }
    __name(r5, "r");
    function u4(e4) {
      return this.shouldComponentUpdate = r5, y(n3, e4);
    }
    __name(u4, "u");
    return u4.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
  }
  function k3(n3) {
    function t4(t5) {
      var e3 = g3({}, t5);
      return delete e3.ref, n3(e3, t5.ref || null);
    }
    __name(t4, "t");
    return t4.$$typeof = N2, t4.render = t4, t4.prototype.isReactComponent = t4.__f = true, t4.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t4;
  }
  function L2(n3, t4, e3) {
    return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
      "function" == typeof n4.__c && n4.__c();
    }), n3.__c.__H = null), null != (n3 = g3({}, n3)).__c && (n3.__c.__P === e3 && (n3.__c.__P = t4), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
      return L2(n4, t4, e3);
    })), n3;
  }
  function U(n3, t4, e3) {
    return n3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
      return U(n4, t4, e3);
    }), n3.__c && n3.__c.__P === t4 && (n3.__e && e3.insertBefore(n3.__e, n3.__d), n3.__c.__e = true, n3.__c.__P = e3)), n3;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n3) {
    var t4 = n3.__.__c;
    return t4 && t4.__a && t4.__a(n3);
  }
  function M2(n3) {
    var e3, r5, u4;
    function o5(o6) {
      if (e3 || (e3 = n3()).then(function(n4) {
        r5 = n4.default || n4;
      }, function(n4) {
        u4 = n4;
      }), u4)
        throw u4;
      if (!r5)
        throw e3;
      return y(r5, o6);
    }
    __name(o5, "o");
    return o5.displayName = "Lazy", o5.__f = true, o5;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  function P3(n3) {
    return this.getChildContext = function() {
      return n3.context;
    }, n3.children;
  }
  function j3(n3) {
    var e3 = this, r5 = n3.i;
    e3.componentWillUnmount = function() {
      B(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r5 && e3.componentWillUnmount(), n3.__v ? (e3.l || (e3.i = r5, e3.l = { nodeType: 1, parentNode: r5, childNodes: [], appendChild: function(n4) {
      this.childNodes.push(n4), e3.i.appendChild(n4);
    }, insertBefore: function(n4, t4) {
      this.childNodes.push(n4), e3.i.appendChild(n4);
    }, removeChild: function(n4) {
      this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e3.i.removeChild(n4);
    } }), B(y(P3, { context: e3.context }, n3.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function z3(n3, e3) {
    var r5 = y(j3, { __v: n3, i: e3 });
    return r5.containerInfo = e3, r5;
  }
  function G(n3, t4, e3) {
    return null == t4.__k && (t4.textContent = ""), B(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
  }
  function J(n3, t4, e3) {
    return D(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
  }
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  function fn(n3) {
    return y.bind(null, n3);
  }
  function an(n3) {
    return !!n3 && n3.$$typeof === B3;
  }
  function sn(n3) {
    return an(n3) ? E.apply(null, arguments) : n3;
  }
  function hn(n3) {
    return !!n3.__k && (B(null, n3), true);
  }
  function vn(n3) {
    return n3 && (n3.base || 1 === n3.nodeType && n3) || null;
  }
  function yn(n3) {
    n3();
  }
  function _n(n3) {
    return n3;
  }
  function bn() {
    return [false, yn];
  }
  function gn(n3, t4) {
    var e3 = t4(), r5 = h2({ h: { __: e3, v: t4 } }), u4 = r5[0].h, o5 = r5[1];
    return y2(function() {
      u4.__ = e3, u4.v = t4, E2(u4.__, t4()) || o5({ h: u4 });
    }, [n3, e3, t4]), p2(function() {
      return E2(u4.__, u4.v()) || o5({ h: u4 }), n3(function() {
        E2(u4.__, u4.v()) || o5({ h: u4 });
      });
    }, [n3]), e3;
  }
  var R, N2, A3, O2, T3, I2, W, B3, H2, Z, Y, $2, q3, K, tn, en, rn, un, on, ln, cn, dn, pn, mn, Sn, Cn;
  var init_compat_module = __esm({
    "../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      __name(g3, "g");
      __name(C2, "C");
      __name(E2, "E");
      __name(w3, "w");
      __name(x3, "x");
      (w3.prototype = new k()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n3, t4) {
        return C2(this.props, n3) || C2(this.state, t4);
      };
      R = l.__b;
      l.__b = function(n3) {
        n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), R && R(n3);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      __name(k3, "k");
      A3 = /* @__PURE__ */ __name(function(n3, t4) {
        return null == n3 ? null : P(P(n3).map(t4));
      }, "A");
      O2 = { map: A3, forEach: A3, count: function(n3) {
        return n3 ? P(n3).length : 0;
      }, only: function(n3) {
        var t4 = P(n3);
        if (1 !== t4.length)
          throw "Children.only";
        return t4[0];
      }, toArray: P };
      T3 = l.__e;
      l.__e = function(n3, t4, e3, r5) {
        if (n3.then) {
          for (var u4, o5 = t4; o5 = o5.__; )
            if ((u4 = o5.__c) && u4.__c)
              return null == t4.__e && (t4.__e = e3.__e, t4.__k = e3.__k), u4.__c(n3, t4);
        }
        T3(n3, t4, e3, r5);
      };
      I2 = l.unmount;
      __name(L2, "L");
      __name(U, "U");
      __name(D2, "D");
      __name(F3, "F");
      __name(M2, "M");
      __name(V2, "V");
      l.unmount = function(n3) {
        var t4 = n3.__c;
        t4 && t4.__R && t4.__R(), t4 && true === n3.__h && (n3.type = null), I2 && I2(n3);
      }, (D2.prototype = new k()).__c = function(n3, t4) {
        var e3 = t4.__c, r5 = this;
        null == r5.t && (r5.t = []), r5.t.push(e3);
        var u4 = F3(r5.__v), o5 = false, i4 = /* @__PURE__ */ __name(function() {
          o5 || (o5 = true, e3.__R = null, u4 ? u4(l4) : l4());
        }, "i");
        e3.__R = i4;
        var l4 = /* @__PURE__ */ __name(function() {
          if (!--r5.__u) {
            if (r5.state.__a) {
              var n4 = r5.state.__a;
              r5.__v.__k[0] = U(n4, n4.__c.__P, n4.__c.__O);
            }
            var t5;
            for (r5.setState({ __a: r5.__b = null }); t5 = r5.t.pop(); )
              t5.forceUpdate();
          }
        }, "l"), c4 = true === t4.__h;
        r5.__u++ || c4 || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), n3.then(i4, i4);
      }, D2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D2.prototype.render = function(n3, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r5 = document.createElement("div"), o5 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r5, o5.__O = o5.__P);
          }
          this.__b = null;
        }
        var i4 = e3.__a && y(_, null, n3.fallback);
        return i4 && (i4.__h = null), [y(_, null, e3.__a ? null : n3.children), i4];
      };
      W = /* @__PURE__ */ __name(function(n3, t4, e3) {
        if (++e3[1] === e3[0] && n3.o.delete(t4), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.o.size))
          for (e3 = n3.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n3.u = e3 = e3[2];
          }
      }, "W");
      __name(P3, "P");
      __name(j3, "j");
      __name(z3, "z");
      (V2.prototype = new k()).__a = function(n3) {
        var t4 = this, e3 = F3(t4.__v), r5 = t4.o.get(n3);
        return r5[0]++, function(u4) {
          var o5 = /* @__PURE__ */ __name(function() {
            t4.props.revealOrder ? (r5.push(u4), W(t4, n3, r5)) : u4();
          }, "o");
          e3 ? e3(o5) : o5();
        };
      }, V2.prototype.render = function(n3) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t4 = P(n3.children);
        n3.revealOrder && "b" === n3.revealOrder[0] && t4.reverse();
        for (var e3 = t4.length; e3--; )
          this.o.set(t4[e3], this.u = [1, 0, this.u]);
        return n3.children;
      }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
        var n3 = this;
        this.o.forEach(function(t4, e3) {
          W(n3, e3, t4);
        });
      };
      B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Y = /[A-Z0-9]/g;
      $2 = "undefined" != typeof document;
      q3 = /* @__PURE__ */ __name(function(n3) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n3);
      }, "q");
      __name(G, "G");
      __name(J, "J");
      k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t4) {
        Object.defineProperty(k.prototype, t4, { configurable: true, get: function() {
          return this["UNSAFE_" + t4];
        }, set: function(n3) {
          Object.defineProperty(this, t4, { configurable: true, writable: true, value: n3 });
        } });
      });
      K = l.event;
      __name(Q, "Q");
      __name(X, "X");
      __name(nn, "nn");
      l.event = function(n3) {
        return K && (n3 = K(n3)), n3.persist = Q, n3.isPropagationStopped = X, n3.isDefaultPrevented = nn, n3.nativeEvent = n3;
      };
      en = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      rn = l.vnode;
      l.vnode = function(n3) {
        "string" == typeof n3.type && function(n4) {
          var t4 = n4.props, e3 = n4.type, u4 = {};
          for (var o5 in t4) {
            var i4 = t4[o5];
            if (!("value" === o5 && "defaultValue" in t4 && null == i4 || $2 && "children" === o5 && "noscript" === e3 || "class" === o5 || "className" === o5)) {
              var l4 = o5.toLowerCase();
              "defaultValue" === o5 && "value" in t4 && null == t4.value ? o5 = "value" : "download" === o5 && true === i4 ? i4 = "" : "ondoubleclick" === l4 ? o5 = "ondblclick" : "onchange" !== l4 || "input" !== e3 && "textarea" !== e3 || q3(t4.type) ? "onfocus" === l4 ? o5 = "onfocusin" : "onblur" === l4 ? o5 = "onfocusout" : Z.test(o5) ? o5 = l4 : -1 === e3.indexOf("-") && H2.test(o5) ? o5 = o5.replace(Y, "-$&").toLowerCase() : null === i4 && (i4 = void 0) : l4 = o5 = "oninput", "oninput" === l4 && u4[o5 = l4] && (o5 = "oninputCapture"), u4[o5] = i4;
            }
          }
          "select" == e3 && u4.multiple && Array.isArray(u4.value) && (u4.value = P(t4.children).forEach(function(n5) {
            n5.props.selected = -1 != u4.value.indexOf(n5.props.value);
          })), "select" == e3 && null != u4.defaultValue && (u4.value = P(t4.children).forEach(function(n5) {
            n5.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n5.props.value) : u4.defaultValue == n5.props.value;
          })), t4.class && !t4.className ? (u4.class = t4.class, Object.defineProperty(u4, "className", en)) : (t4.className && !t4.class || t4.class && t4.className) && (u4.class = u4.className = t4.className), n4.props = u4;
        }(n3), n3.$$typeof = B3, rn && rn(n3);
      };
      un = l.__r;
      l.__r = function(n3) {
        un && un(n3), tn = n3.__c;
      };
      on = l.diffed;
      l.diffed = function(n3) {
        on && on(n3);
        var t4 = n3.props, e3 = n3.__e;
        null != e3 && "textarea" === n3.type && "value" in t4 && t4.value !== e3.value && (e3.value = null == t4.value ? "" : t4.value), tn = null;
      };
      ln = { ReactCurrentDispatcher: { current: { readContext: function(n3) {
        return tn.__n[n3.__c].props.value;
      } } } };
      cn = "17.0.2";
      __name(fn, "fn");
      __name(an, "an");
      __name(sn, "sn");
      __name(hn, "hn");
      __name(vn, "vn");
      dn = /* @__PURE__ */ __name(function(n3, t4) {
        return n3(t4);
      }, "dn");
      pn = /* @__PURE__ */ __name(function(n3, t4) {
        return n3(t4);
      }, "pn");
      mn = _;
      __name(yn, "yn");
      __name(_n, "_n");
      __name(bn, "bn");
      Sn = y2;
      __name(gn, "gn");
      Cn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _2, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G, hydrate: J, unmountComponentAtNode: hn, createPortal: z3, createElement: y, createContext: F, createFactory: fn, cloneElement: sn, createRef: d, Fragment: _, isValidElement: an, findDOMNode: vn, Component: k, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D2, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
    }
  });

  // ../node_modules/.pnpm/localforage@1.10.0/node_modules/localforage/dist/localforage.js
  var require_localforage = __commonJS({
    "../node_modules/.pnpm/localforage@1.10.0/node_modules/localforage/dist/localforage.js"(exports, module) {
      (function(f4) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f4();
        } else if (typeof define === "function" && define.amd) {
          define([], f4);
        } else {
          var g5;
          if (typeof window !== "undefined") {
            g5 = window;
          } else if (typeof global !== "undefined") {
            g5 = global;
          } else if (typeof self !== "undefined") {
            g5 = self;
          } else {
            g5 = this;
          }
          g5.localforage = f4();
        }
      })(function() {
        var define2, module2, exports2;
        return (/* @__PURE__ */ __name(function e3(t4, n3, r5) {
          function s4(o6, u4) {
            if (!n3[o6]) {
              if (!t4[o6]) {
                var a4 = typeof __require == "function" && __require;
                if (!u4 && a4)
                  return a4(o6, true);
                if (i4)
                  return i4(o6, true);
                var f4 = new Error("Cannot find module '" + o6 + "'");
                throw f4.code = "MODULE_NOT_FOUND", f4;
              }
              var l4 = n3[o6] = { exports: {} };
              t4[o6][0].call(l4.exports, function(e4) {
                var n4 = t4[o6][1][e4];
                return s4(n4 ? n4 : e4);
              }, l4, l4.exports, e3, t4, n3, r5);
            }
            return n3[o6].exports;
          }
          __name(s4, "s");
          var i4 = typeof __require == "function" && __require;
          for (var o5 = 0; o5 < r5.length; o5++)
            s4(r5[o5]);
          return s4;
        }, "e"))({ 1: [function(_dereq_, module3, exports3) {
          (function(global2) {
            "use strict";
            var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
            var scheduleDrain;
            {
              if (Mutation) {
                var called = 0;
                var observer = new Mutation(nextTick);
                var element = global2.document.createTextNode("");
                observer.observe(element, {
                  characterData: true
                });
                scheduleDrain = /* @__PURE__ */ __name(function() {
                  element.data = called = ++called % 2;
                }, "scheduleDrain");
              } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
                var channel = new global2.MessageChannel();
                channel.port1.onmessage = nextTick;
                scheduleDrain = /* @__PURE__ */ __name(function() {
                  channel.port2.postMessage(0);
                }, "scheduleDrain");
              } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
                scheduleDrain = /* @__PURE__ */ __name(function() {
                  var scriptEl = global2.document.createElement("script");
                  scriptEl.onreadystatechange = function() {
                    nextTick();
                    scriptEl.onreadystatechange = null;
                    scriptEl.parentNode.removeChild(scriptEl);
                    scriptEl = null;
                  };
                  global2.document.documentElement.appendChild(scriptEl);
                }, "scheduleDrain");
              } else {
                scheduleDrain = /* @__PURE__ */ __name(function() {
                  setTimeout(nextTick, 0);
                }, "scheduleDrain");
              }
            }
            var draining;
            var queue = [];
            function nextTick() {
              draining = true;
              var i4, oldQueue;
              var len = queue.length;
              while (len) {
                oldQueue = queue;
                queue = [];
                i4 = -1;
                while (++i4 < len) {
                  oldQueue[i4]();
                }
                len = queue.length;
              }
              draining = false;
            }
            __name(nextTick, "nextTick");
            module3.exports = immediate;
            function immediate(task) {
              if (queue.push(task) === 1 && !draining) {
                scheduleDrain();
              }
            }
            __name(immediate, "immediate");
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 2: [function(_dereq_, module3, exports3) {
          "use strict";
          var immediate = _dereq_(1);
          function INTERNAL() {
          }
          __name(INTERNAL, "INTERNAL");
          var handlers = {};
          var REJECTED = ["REJECTED"];
          var FULFILLED = ["FULFILLED"];
          var PENDING = ["PENDING"];
          module3.exports = Promise2;
          function Promise2(resolver) {
            if (typeof resolver !== "function") {
              throw new TypeError("resolver must be a function");
            }
            this.state = PENDING;
            this.queue = [];
            this.outcome = void 0;
            if (resolver !== INTERNAL) {
              safelyResolveThenable(this, resolver);
            }
          }
          __name(Promise2, "Promise");
          Promise2.prototype["catch"] = function(onRejected) {
            return this.then(null, onRejected);
          };
          Promise2.prototype.then = function(onFulfilled, onRejected) {
            if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
              return this;
            }
            var promise = new this.constructor(INTERNAL);
            if (this.state !== PENDING) {
              var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
              unwrap(promise, resolver, this.outcome);
            } else {
              this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
            }
            return promise;
          };
          function QueueItem(promise, onFulfilled, onRejected) {
            this.promise = promise;
            if (typeof onFulfilled === "function") {
              this.onFulfilled = onFulfilled;
              this.callFulfilled = this.otherCallFulfilled;
            }
            if (typeof onRejected === "function") {
              this.onRejected = onRejected;
              this.callRejected = this.otherCallRejected;
            }
          }
          __name(QueueItem, "QueueItem");
          QueueItem.prototype.callFulfilled = function(value) {
            handlers.resolve(this.promise, value);
          };
          QueueItem.prototype.otherCallFulfilled = function(value) {
            unwrap(this.promise, this.onFulfilled, value);
          };
          QueueItem.prototype.callRejected = function(value) {
            handlers.reject(this.promise, value);
          };
          QueueItem.prototype.otherCallRejected = function(value) {
            unwrap(this.promise, this.onRejected, value);
          };
          function unwrap(promise, func, value) {
            immediate(function() {
              var returnValue;
              try {
                returnValue = func(value);
              } catch (e3) {
                return handlers.reject(promise, e3);
              }
              if (returnValue === promise) {
                handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
              } else {
                handlers.resolve(promise, returnValue);
              }
            });
          }
          __name(unwrap, "unwrap");
          handlers.resolve = function(self2, value) {
            var result = tryCatch(getThen, value);
            if (result.status === "error") {
              return handlers.reject(self2, result.value);
            }
            var thenable = result.value;
            if (thenable) {
              safelyResolveThenable(self2, thenable);
            } else {
              self2.state = FULFILLED;
              self2.outcome = value;
              var i4 = -1;
              var len = self2.queue.length;
              while (++i4 < len) {
                self2.queue[i4].callFulfilled(value);
              }
            }
            return self2;
          };
          handlers.reject = function(self2, error) {
            self2.state = REJECTED;
            self2.outcome = error;
            var i4 = -1;
            var len = self2.queue.length;
            while (++i4 < len) {
              self2.queue[i4].callRejected(error);
            }
            return self2;
          };
          function getThen(obj) {
            var then = obj && obj.then;
            if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
              return /* @__PURE__ */ __name(function appyThen() {
                then.apply(obj, arguments);
              }, "appyThen");
            }
          }
          __name(getThen, "getThen");
          function safelyResolveThenable(self2, thenable) {
            var called = false;
            function onError(value) {
              if (called) {
                return;
              }
              called = true;
              handlers.reject(self2, value);
            }
            __name(onError, "onError");
            function onSuccess(value) {
              if (called) {
                return;
              }
              called = true;
              handlers.resolve(self2, value);
            }
            __name(onSuccess, "onSuccess");
            function tryToUnwrap() {
              thenable(onSuccess, onError);
            }
            __name(tryToUnwrap, "tryToUnwrap");
            var result = tryCatch(tryToUnwrap);
            if (result.status === "error") {
              onError(result.value);
            }
          }
          __name(safelyResolveThenable, "safelyResolveThenable");
          function tryCatch(func, value) {
            var out = {};
            try {
              out.value = func(value);
              out.status = "success";
            } catch (e3) {
              out.status = "error";
              out.value = e3;
            }
            return out;
          }
          __name(tryCatch, "tryCatch");
          Promise2.resolve = resolve;
          function resolve(value) {
            if (value instanceof this) {
              return value;
            }
            return handlers.resolve(new this(INTERNAL), value);
          }
          __name(resolve, "resolve");
          Promise2.reject = reject;
          function reject(reason) {
            var promise = new this(INTERNAL);
            return handlers.reject(promise, reason);
          }
          __name(reject, "reject");
          Promise2.all = all;
          function all(iterable) {
            var self2 = this;
            if (Object.prototype.toString.call(iterable) !== "[object Array]") {
              return this.reject(new TypeError("must be an array"));
            }
            var len = iterable.length;
            var called = false;
            if (!len) {
              return this.resolve([]);
            }
            var values = new Array(len);
            var resolved = 0;
            var i4 = -1;
            var promise = new this(INTERNAL);
            while (++i4 < len) {
              allResolver(iterable[i4], i4);
            }
            return promise;
            function allResolver(value, i5) {
              self2.resolve(value).then(resolveFromAll, function(error) {
                if (!called) {
                  called = true;
                  handlers.reject(promise, error);
                }
              });
              function resolveFromAll(outValue) {
                values[i5] = outValue;
                if (++resolved === len && !called) {
                  called = true;
                  handlers.resolve(promise, values);
                }
              }
              __name(resolveFromAll, "resolveFromAll");
            }
            __name(allResolver, "allResolver");
          }
          __name(all, "all");
          Promise2.race = race;
          function race(iterable) {
            var self2 = this;
            if (Object.prototype.toString.call(iterable) !== "[object Array]") {
              return this.reject(new TypeError("must be an array"));
            }
            var len = iterable.length;
            var called = false;
            if (!len) {
              return this.resolve([]);
            }
            var i4 = -1;
            var promise = new this(INTERNAL);
            while (++i4 < len) {
              resolver(iterable[i4]);
            }
            return promise;
            function resolver(value) {
              self2.resolve(value).then(function(response) {
                if (!called) {
                  called = true;
                  handlers.resolve(promise, response);
                }
              }, function(error) {
                if (!called) {
                  called = true;
                  handlers.reject(promise, error);
                }
              });
            }
            __name(resolver, "resolver");
          }
          __name(race, "race");
        }, { "1": 1 }], 3: [function(_dereq_, module3, exports3) {
          (function(global2) {
            "use strict";
            if (typeof global2.Promise !== "function") {
              global2.Promise = _dereq_(2);
            }
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, { "2": 2 }], 4: [function(_dereq_, module3, exports3) {
          "use strict";
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          __name(_classCallCheck, "_classCallCheck");
          function getIDB() {
            try {
              if (typeof indexedDB !== "undefined") {
                return indexedDB;
              }
              if (typeof webkitIndexedDB !== "undefined") {
                return webkitIndexedDB;
              }
              if (typeof mozIndexedDB !== "undefined") {
                return mozIndexedDB;
              }
              if (typeof OIndexedDB !== "undefined") {
                return OIndexedDB;
              }
              if (typeof msIndexedDB !== "undefined") {
                return msIndexedDB;
              }
            } catch (e3) {
              return;
            }
          }
          __name(getIDB, "getIDB");
          var idb = getIDB();
          function isIndexedDBValid() {
            try {
              if (!idb || !idb.open) {
                return false;
              }
              var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
              var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
              return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && // some outdated implementations of IDB that appear on Samsung
              // and HTC Android devices <4.4 are missing IDBKeyRange
              // See: https://github.com/mozilla/localForage/issues/128
              // See: https://github.com/mozilla/localForage/issues/272
              typeof IDBKeyRange !== "undefined";
            } catch (e3) {
              return false;
            }
          }
          __name(isIndexedDBValid, "isIndexedDBValid");
          function createBlob(parts, properties) {
            parts = parts || [];
            properties = properties || {};
            try {
              return new Blob(parts, properties);
            } catch (e3) {
              if (e3.name !== "TypeError") {
                throw e3;
              }
              var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
              var builder = new Builder();
              for (var i4 = 0; i4 < parts.length; i4 += 1) {
                builder.append(parts[i4]);
              }
              return builder.getBlob(properties.type);
            }
          }
          __name(createBlob, "createBlob");
          if (typeof Promise === "undefined") {
            _dereq_(3);
          }
          var Promise$1 = Promise;
          function executeCallback(promise, callback) {
            if (callback) {
              promise.then(function(result) {
                callback(null, result);
              }, function(error) {
                callback(error);
              });
            }
          }
          __name(executeCallback, "executeCallback");
          function executeTwoCallbacks(promise, callback, errorCallback) {
            if (typeof callback === "function") {
              promise.then(callback);
            }
            if (typeof errorCallback === "function") {
              promise["catch"](errorCallback);
            }
          }
          __name(executeTwoCallbacks, "executeTwoCallbacks");
          function normalizeKey(key2) {
            if (typeof key2 !== "string") {
              console.warn(key2 + " used as a key, but it is not a string.");
              key2 = String(key2);
            }
            return key2;
          }
          __name(normalizeKey, "normalizeKey");
          function getCallback() {
            if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
              return arguments[arguments.length - 1];
            }
          }
          __name(getCallback, "getCallback");
          var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
          var supportsBlobs = void 0;
          var dbContexts = {};
          var toString = Object.prototype.toString;
          var READ_ONLY = "readonly";
          var READ_WRITE = "readwrite";
          function _binStringToArrayBuffer(bin) {
            var length2 = bin.length;
            var buf = new ArrayBuffer(length2);
            var arr = new Uint8Array(buf);
            for (var i4 = 0; i4 < length2; i4++) {
              arr[i4] = bin.charCodeAt(i4);
            }
            return buf;
          }
          __name(_binStringToArrayBuffer, "_binStringToArrayBuffer");
          function _checkBlobSupportWithoutCaching(idb2) {
            return new Promise$1(function(resolve) {
              var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
              var blob = createBlob([""]);
              txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
              txn.onabort = function(e3) {
                e3.preventDefault();
                e3.stopPropagation();
                resolve(false);
              };
              txn.oncomplete = function() {
                var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                var matchedEdge = navigator.userAgent.match(/Edge\//);
                resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
              };
            })["catch"](function() {
              return false;
            });
          }
          __name(_checkBlobSupportWithoutCaching, "_checkBlobSupportWithoutCaching");
          function _checkBlobSupport(idb2) {
            if (typeof supportsBlobs === "boolean") {
              return Promise$1.resolve(supportsBlobs);
            }
            return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
              supportsBlobs = value;
              return supportsBlobs;
            });
          }
          __name(_checkBlobSupport, "_checkBlobSupport");
          function _deferReadiness(dbInfo) {
            var dbContext = dbContexts[dbInfo.name];
            var deferredOperation = {};
            deferredOperation.promise = new Promise$1(function(resolve, reject) {
              deferredOperation.resolve = resolve;
              deferredOperation.reject = reject;
            });
            dbContext.deferredOperations.push(deferredOperation);
            if (!dbContext.dbReady) {
              dbContext.dbReady = deferredOperation.promise;
            } else {
              dbContext.dbReady = dbContext.dbReady.then(function() {
                return deferredOperation.promise;
              });
            }
          }
          __name(_deferReadiness, "_deferReadiness");
          function _advanceReadiness(dbInfo) {
            var dbContext = dbContexts[dbInfo.name];
            var deferredOperation = dbContext.deferredOperations.pop();
            if (deferredOperation) {
              deferredOperation.resolve();
              return deferredOperation.promise;
            }
          }
          __name(_advanceReadiness, "_advanceReadiness");
          function _rejectReadiness(dbInfo, err) {
            var dbContext = dbContexts[dbInfo.name];
            var deferredOperation = dbContext.deferredOperations.pop();
            if (deferredOperation) {
              deferredOperation.reject(err);
              return deferredOperation.promise;
            }
          }
          __name(_rejectReadiness, "_rejectReadiness");
          function _getConnection(dbInfo, upgradeNeeded) {
            return new Promise$1(function(resolve, reject) {
              dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
              if (dbInfo.db) {
                if (upgradeNeeded) {
                  _deferReadiness(dbInfo);
                  dbInfo.db.close();
                } else {
                  return resolve(dbInfo.db);
                }
              }
              var dbArgs = [dbInfo.name];
              if (upgradeNeeded) {
                dbArgs.push(dbInfo.version);
              }
              var openreq = idb.open.apply(idb, dbArgs);
              if (upgradeNeeded) {
                openreq.onupgradeneeded = function(e3) {
                  var db = openreq.result;
                  try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e3.oldVersion <= 1) {
                      db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                  } catch (ex) {
                    if (ex.name === "ConstraintError") {
                      console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e3.oldVersion + " to version " + e3.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                      throw ex;
                    }
                  }
                };
              }
              openreq.onerror = function(e3) {
                e3.preventDefault();
                reject(openreq.error);
              };
              openreq.onsuccess = function() {
                var db = openreq.result;
                db.onversionchange = function(e3) {
                  e3.target.close();
                };
                resolve(db);
                _advanceReadiness(dbInfo);
              };
            });
          }
          __name(_getConnection, "_getConnection");
          function _getOriginalConnection(dbInfo) {
            return _getConnection(dbInfo, false);
          }
          __name(_getOriginalConnection, "_getOriginalConnection");
          function _getUpgradedConnection(dbInfo) {
            return _getConnection(dbInfo, true);
          }
          __name(_getUpgradedConnection, "_getUpgradedConnection");
          function _isUpgradeNeeded(dbInfo, defaultVersion) {
            if (!dbInfo.db) {
              return true;
            }
            var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
            var isDowngrade = dbInfo.version < dbInfo.db.version;
            var isUpgrade = dbInfo.version > dbInfo.db.version;
            if (isDowngrade) {
              if (dbInfo.version !== defaultVersion) {
                console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
              }
              dbInfo.version = dbInfo.db.version;
            }
            if (isUpgrade || isNewStore) {
              if (isNewStore) {
                var incVersion = dbInfo.db.version + 1;
                if (incVersion > dbInfo.version) {
                  dbInfo.version = incVersion;
                }
              }
              return true;
            }
            return false;
          }
          __name(_isUpgradeNeeded, "_isUpgradeNeeded");
          function _encodeBlob(blob) {
            return new Promise$1(function(resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;
              reader.onloadend = function(e3) {
                var base64 = btoa(e3.target.result || "");
                resolve({
                  __local_forage_encoded_blob: true,
                  data: base64,
                  type: blob.type
                });
              };
              reader.readAsBinaryString(blob);
            });
          }
          __name(_encodeBlob, "_encodeBlob");
          function _decodeBlob(encodedBlob) {
            var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
            return createBlob([arrayBuff], { type: encodedBlob.type });
          }
          __name(_decodeBlob, "_decodeBlob");
          function _isEncodedBlob(value) {
            return value && value.__local_forage_encoded_blob;
          }
          __name(_isEncodedBlob, "_isEncodedBlob");
          function _fullyReady(callback) {
            var self2 = this;
            var promise = self2._initReady().then(function() {
              var dbContext = dbContexts[self2._dbInfo.name];
              if (dbContext && dbContext.dbReady) {
                return dbContext.dbReady;
              }
            });
            executeTwoCallbacks(promise, callback, callback);
            return promise;
          }
          __name(_fullyReady, "_fullyReady");
          function _tryReconnect(dbInfo) {
            _deferReadiness(dbInfo);
            var dbContext = dbContexts[dbInfo.name];
            var forages = dbContext.forages;
            for (var i4 = 0; i4 < forages.length; i4++) {
              var forage = forages[i4];
              if (forage._dbInfo.db) {
                forage._dbInfo.db.close();
                forage._dbInfo.db = null;
              }
            }
            dbInfo.db = null;
            return _getOriginalConnection(dbInfo).then(function(db) {
              dbInfo.db = db;
              if (_isUpgradeNeeded(dbInfo)) {
                return _getUpgradedConnection(dbInfo);
              }
              return db;
            }).then(function(db) {
              dbInfo.db = dbContext.db = db;
              for (var i5 = 0; i5 < forages.length; i5++) {
                forages[i5]._dbInfo.db = db;
              }
            })["catch"](function(err) {
              _rejectReadiness(dbInfo, err);
              throw err;
            });
          }
          __name(_tryReconnect, "_tryReconnect");
          function createTransaction(dbInfo, mode, callback, retries) {
            if (retries === void 0) {
              retries = 1;
            }
            try {
              var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
              callback(null, tx);
            } catch (err) {
              if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
                return Promise$1.resolve().then(function() {
                  if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    if (dbInfo.db) {
                      dbInfo.version = dbInfo.db.version + 1;
                    }
                    return _getUpgradedConnection(dbInfo);
                  }
                }).then(function() {
                  return _tryReconnect(dbInfo).then(function() {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                  });
                })["catch"](callback);
              }
              callback(err);
            }
          }
          __name(createTransaction, "createTransaction");
          function createDbContext() {
            return {
              // Running localForages sharing a database.
              forages: [],
              // Shared database.
              db: null,
              // Database readiness (promise).
              dbReady: null,
              // Deferred operations on the database.
              deferredOperations: []
            };
          }
          __name(createDbContext, "createDbContext");
          function _initStorage(options) {
            var self2 = this;
            var dbInfo = {
              db: null
            };
            if (options) {
              for (var i4 in options) {
                dbInfo[i4] = options[i4];
              }
            }
            var dbContext = dbContexts[dbInfo.name];
            if (!dbContext) {
              dbContext = createDbContext();
              dbContexts[dbInfo.name] = dbContext;
            }
            dbContext.forages.push(self2);
            if (!self2._initReady) {
              self2._initReady = self2.ready;
              self2.ready = _fullyReady;
            }
            var initPromises = [];
            function ignoreErrors() {
              return Promise$1.resolve();
            }
            __name(ignoreErrors, "ignoreErrors");
            for (var j5 = 0; j5 < dbContext.forages.length; j5++) {
              var forage = dbContext.forages[j5];
              if (forage !== self2) {
                initPromises.push(forage._initReady()["catch"](ignoreErrors));
              }
            }
            var forages = dbContext.forages.slice(0);
            return Promise$1.all(initPromises).then(function() {
              dbInfo.db = dbContext.db;
              return _getOriginalConnection(dbInfo);
            }).then(function(db) {
              dbInfo.db = db;
              if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
                return _getUpgradedConnection(dbInfo);
              }
              return db;
            }).then(function(db) {
              dbInfo.db = dbContext.db = db;
              self2._dbInfo = dbInfo;
              for (var k5 = 0; k5 < forages.length; k5++) {
                var forage2 = forages[k5];
                if (forage2 !== self2) {
                  forage2._dbInfo.db = dbInfo.db;
                  forage2._dbInfo.version = dbInfo.version;
                }
              }
            });
          }
          __name(_initStorage, "_initStorage");
          function getItem(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.get(key2);
                    req.onsuccess = function() {
                      var value = req.result;
                      if (value === void 0) {
                        value = null;
                      }
                      if (_isEncodedBlob(value)) {
                        value = _decodeBlob(value);
                      }
                      resolve(value);
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(getItem, "getItem");
          function iterate(iterator, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;
                    req.onsuccess = function() {
                      var cursor = req.result;
                      if (cursor) {
                        var value = cursor.value;
                        if (_isEncodedBlob(value)) {
                          value = _decodeBlob(value);
                        }
                        var result = iterator(value, cursor.key, iterationNumber++);
                        if (result !== void 0) {
                          resolve(result);
                        } else {
                          cursor["continue"]();
                        }
                      } else {
                        resolve();
                      }
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(iterate, "iterate");
          function setItem(key2, value, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              var dbInfo;
              self2.ready().then(function() {
                dbInfo = self2._dbInfo;
                if (toString.call(value) === "[object Blob]") {
                  return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                    if (blobSupport) {
                      return value;
                    }
                    return _encodeBlob(value);
                  });
                }
                return value;
              }).then(function(value2) {
                createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    if (value2 === null) {
                      value2 = void 0;
                    }
                    var req = store.put(value2, key2);
                    transaction.oncomplete = function() {
                      if (value2 === void 0) {
                        value2 = null;
                      }
                      resolve(value2);
                    };
                    transaction.onabort = transaction.onerror = function() {
                      var err2 = req.error ? req.error : req.transaction.error;
                      reject(err2);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(setItem, "setItem");
          function removeItem(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store["delete"](key2);
                    transaction.oncomplete = function() {
                      resolve();
                    };
                    transaction.onerror = function() {
                      reject(req.error);
                    };
                    transaction.onabort = function() {
                      var err2 = req.error ? req.error : req.transaction.error;
                      reject(err2);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(removeItem, "removeItem");
          function clear(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.clear();
                    transaction.oncomplete = function() {
                      resolve();
                    };
                    transaction.onabort = transaction.onerror = function() {
                      var err2 = req.error ? req.error : req.transaction.error;
                      reject(err2);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(clear, "clear");
          function length(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.count();
                    req.onsuccess = function() {
                      resolve(req.result);
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(length, "length");
          function key(n3, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              if (n3 < 0) {
                resolve(null);
                return;
              }
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();
                    req.onsuccess = function() {
                      var cursor = req.result;
                      if (!cursor) {
                        resolve(null);
                        return;
                      }
                      if (n3 === 0) {
                        resolve(cursor.key);
                      } else {
                        if (!advanced) {
                          advanced = true;
                          cursor.advance(n3);
                        } else {
                          resolve(cursor.key);
                        }
                      }
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(key, "key");
          function keys(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys2 = [];
                    req.onsuccess = function() {
                      var cursor = req.result;
                      if (!cursor) {
                        resolve(keys2);
                        return;
                      }
                      keys2.push(cursor.key);
                      cursor["continue"]();
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e3) {
                    reject(e3);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(keys, "keys");
          function dropInstance(options, callback) {
            callback = getCallback.apply(this, arguments);
            var currentConfig = this.config();
            options = typeof options !== "function" && options || {};
            if (!options.name) {
              options.name = options.name || currentConfig.name;
              options.storeName = options.storeName || currentConfig.storeName;
            }
            var self2 = this;
            var promise;
            if (!options.name) {
              promise = Promise$1.reject("Invalid arguments");
            } else {
              var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
              var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;
                dbContext.db = db;
                for (var i4 = 0; i4 < forages.length; i4++) {
                  forages[i4]._dbInfo.db = db;
                }
                return db;
              });
              if (!options.storeName) {
                promise = dbPromise.then(function(db) {
                  _deferReadiness(options);
                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;
                  db.close();
                  for (var i4 = 0; i4 < forages.length; i4++) {
                    var forage = forages[i4];
                    forage._dbInfo.db = null;
                  }
                  var dropDBPromise = new Promise$1(function(resolve, reject) {
                    var req = idb.deleteDatabase(options.name);
                    req.onerror = function() {
                      var db2 = req.result;
                      if (db2) {
                        db2.close();
                      }
                      reject(req.error);
                    };
                    req.onblocked = function() {
                      console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };
                    req.onsuccess = function() {
                      var db2 = req.result;
                      if (db2) {
                        db2.close();
                      }
                      resolve(db2);
                    };
                  });
                  return dropDBPromise.then(function(db2) {
                    dbContext.db = db2;
                    for (var i5 = 0; i5 < forages.length; i5++) {
                      var _forage = forages[i5];
                      _advanceReadiness(_forage._dbInfo);
                    }
                  })["catch"](function(err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                    });
                    throw err;
                  });
                });
              } else {
                promise = dbPromise.then(function(db) {
                  if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                  }
                  var newVersion = db.version + 1;
                  _deferReadiness(options);
                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;
                  db.close();
                  for (var i4 = 0; i4 < forages.length; i4++) {
                    var forage = forages[i4];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                  }
                  var dropObjectPromise = new Promise$1(function(resolve, reject) {
                    var req = idb.open(options.name, newVersion);
                    req.onerror = function(err) {
                      var db2 = req.result;
                      db2.close();
                      reject(err);
                    };
                    req.onupgradeneeded = function() {
                      var db2 = req.result;
                      db2.deleteObjectStore(options.storeName);
                    };
                    req.onsuccess = function() {
                      var db2 = req.result;
                      db2.close();
                      resolve(db2);
                    };
                  });
                  return dropObjectPromise.then(function(db2) {
                    dbContext.db = db2;
                    for (var j5 = 0; j5 < forages.length; j5++) {
                      var _forage2 = forages[j5];
                      _forage2._dbInfo.db = db2;
                      _advanceReadiness(_forage2._dbInfo);
                    }
                  })["catch"](function(err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                    });
                    throw err;
                  });
                });
              }
            }
            executeCallback(promise, callback);
            return promise;
          }
          __name(dropInstance, "dropInstance");
          var asyncStorage = {
            _driver: "asyncStorage",
            _initStorage,
            _support: isIndexedDBValid(),
            iterate,
            getItem,
            setItem,
            removeItem,
            clear,
            length,
            key,
            keys,
            dropInstance
          };
          function isWebSQLValid() {
            return typeof openDatabase === "function";
          }
          __name(isWebSQLValid, "isWebSQLValid");
          var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var BLOB_TYPE_PREFIX = "~~local_forage_type~";
          var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
          var SERIALIZED_MARKER = "__lfsc__:";
          var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
          var TYPE_ARRAYBUFFER = "arbf";
          var TYPE_BLOB = "blob";
          var TYPE_INT8ARRAY = "si08";
          var TYPE_UINT8ARRAY = "ui08";
          var TYPE_UINT8CLAMPEDARRAY = "uic8";
          var TYPE_INT16ARRAY = "si16";
          var TYPE_INT32ARRAY = "si32";
          var TYPE_UINT16ARRAY = "ur16";
          var TYPE_UINT32ARRAY = "ui32";
          var TYPE_FLOAT32ARRAY = "fl32";
          var TYPE_FLOAT64ARRAY = "fl64";
          var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
          var toString$1 = Object.prototype.toString;
          function stringToBuffer(serializedString) {
            var bufferLength = serializedString.length * 0.75;
            var len = serializedString.length;
            var i4;
            var p4 = 0;
            var encoded1, encoded2, encoded3, encoded4;
            if (serializedString[serializedString.length - 1] === "=") {
              bufferLength--;
              if (serializedString[serializedString.length - 2] === "=") {
                bufferLength--;
              }
            }
            var buffer = new ArrayBuffer(bufferLength);
            var bytes = new Uint8Array(buffer);
            for (i4 = 0; i4 < len; i4 += 4) {
              encoded1 = BASE_CHARS.indexOf(serializedString[i4]);
              encoded2 = BASE_CHARS.indexOf(serializedString[i4 + 1]);
              encoded3 = BASE_CHARS.indexOf(serializedString[i4 + 2]);
              encoded4 = BASE_CHARS.indexOf(serializedString[i4 + 3]);
              bytes[p4++] = encoded1 << 2 | encoded2 >> 4;
              bytes[p4++] = (encoded2 & 15) << 4 | encoded3 >> 2;
              bytes[p4++] = (encoded3 & 3) << 6 | encoded4 & 63;
            }
            return buffer;
          }
          __name(stringToBuffer, "stringToBuffer");
          function bufferToString(buffer) {
            var bytes = new Uint8Array(buffer);
            var base64String = "";
            var i4;
            for (i4 = 0; i4 < bytes.length; i4 += 3) {
              base64String += BASE_CHARS[bytes[i4] >> 2];
              base64String += BASE_CHARS[(bytes[i4] & 3) << 4 | bytes[i4 + 1] >> 4];
              base64String += BASE_CHARS[(bytes[i4 + 1] & 15) << 2 | bytes[i4 + 2] >> 6];
              base64String += BASE_CHARS[bytes[i4 + 2] & 63];
            }
            if (bytes.length % 3 === 2) {
              base64String = base64String.substring(0, base64String.length - 1) + "=";
            } else if (bytes.length % 3 === 1) {
              base64String = base64String.substring(0, base64String.length - 2) + "==";
            }
            return base64String;
          }
          __name(bufferToString, "bufferToString");
          function serialize(value, callback) {
            var valueType = "";
            if (value) {
              valueType = toString$1.call(value);
            }
            if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
              var buffer;
              var marker = SERIALIZED_MARKER;
              if (value instanceof ArrayBuffer) {
                buffer = value;
                marker += TYPE_ARRAYBUFFER;
              } else {
                buffer = value.buffer;
                if (valueType === "[object Int8Array]") {
                  marker += TYPE_INT8ARRAY;
                } else if (valueType === "[object Uint8Array]") {
                  marker += TYPE_UINT8ARRAY;
                } else if (valueType === "[object Uint8ClampedArray]") {
                  marker += TYPE_UINT8CLAMPEDARRAY;
                } else if (valueType === "[object Int16Array]") {
                  marker += TYPE_INT16ARRAY;
                } else if (valueType === "[object Uint16Array]") {
                  marker += TYPE_UINT16ARRAY;
                } else if (valueType === "[object Int32Array]") {
                  marker += TYPE_INT32ARRAY;
                } else if (valueType === "[object Uint32Array]") {
                  marker += TYPE_UINT32ARRAY;
                } else if (valueType === "[object Float32Array]") {
                  marker += TYPE_FLOAT32ARRAY;
                } else if (valueType === "[object Float64Array]") {
                  marker += TYPE_FLOAT64ARRAY;
                } else {
                  callback(new Error("Failed to get type for BinaryArray"));
                }
              }
              callback(marker + bufferToString(buffer));
            } else if (valueType === "[object Blob]") {
              var fileReader = new FileReader();
              fileReader.onload = function() {
                var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
                callback(SERIALIZED_MARKER + TYPE_BLOB + str);
              };
              fileReader.readAsArrayBuffer(value);
            } else {
              try {
                callback(JSON.stringify(value));
              } catch (e3) {
                console.error("Couldn't convert value into a JSON string: ", value);
                callback(null, e3);
              }
            }
          }
          __name(serialize, "serialize");
          function deserialize(value) {
            if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
              return JSON.parse(value);
            }
            var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
            var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
            var blobType;
            if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
              var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
              blobType = matcher[1];
              serializedString = serializedString.substring(matcher[0].length);
            }
            var buffer = stringToBuffer(serializedString);
            switch (type) {
              case TYPE_ARRAYBUFFER:
                return buffer;
              case TYPE_BLOB:
                return createBlob([buffer], { type: blobType });
              case TYPE_INT8ARRAY:
                return new Int8Array(buffer);
              case TYPE_UINT8ARRAY:
                return new Uint8Array(buffer);
              case TYPE_UINT8CLAMPEDARRAY:
                return new Uint8ClampedArray(buffer);
              case TYPE_INT16ARRAY:
                return new Int16Array(buffer);
              case TYPE_UINT16ARRAY:
                return new Uint16Array(buffer);
              case TYPE_INT32ARRAY:
                return new Int32Array(buffer);
              case TYPE_UINT32ARRAY:
                return new Uint32Array(buffer);
              case TYPE_FLOAT32ARRAY:
                return new Float32Array(buffer);
              case TYPE_FLOAT64ARRAY:
                return new Float64Array(buffer);
              default:
                throw new Error("Unkown type: " + type);
            }
          }
          __name(deserialize, "deserialize");
          var localforageSerializer = {
            serialize,
            deserialize,
            stringToBuffer,
            bufferToString
          };
          function createDbTable(t4, dbInfo, callback, errorCallback) {
            t4.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
          }
          __name(createDbTable, "createDbTable");
          function _initStorage$1(options) {
            var self2 = this;
            var dbInfo = {
              db: null
            };
            if (options) {
              for (var i4 in options) {
                dbInfo[i4] = typeof options[i4] !== "string" ? options[i4].toString() : options[i4];
              }
            }
            var dbInfoPromise = new Promise$1(function(resolve, reject) {
              try {
                dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
              } catch (e3) {
                return reject(e3);
              }
              dbInfo.db.transaction(function(t4) {
                createDbTable(t4, dbInfo, function() {
                  self2._dbInfo = dbInfo;
                  resolve();
                }, function(t5, error) {
                  reject(error);
                });
              }, reject);
            });
            dbInfo.serializer = localforageSerializer;
            return dbInfoPromise;
          }
          __name(_initStorage$1, "_initStorage$1");
          function tryExecuteSql(t4, dbInfo, sqlStatement, args, callback, errorCallback) {
            t4.executeSql(sqlStatement, args, callback, function(t5, error) {
              if (error.code === error.SYNTAX_ERR) {
                t5.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t6, results) {
                  if (!results.rows.length) {
                    createDbTable(t6, dbInfo, function() {
                      t6.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                  } else {
                    errorCallback(t6, error);
                  }
                }, errorCallback);
              } else {
                errorCallback(t5, error);
              }
            }, errorCallback);
          }
          __name(tryExecuteSql, "tryExecuteSql");
          function getItem$1(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t5, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;
                    if (result) {
                      result = dbInfo.serializer.deserialize(result);
                    }
                    resolve(result);
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(getItem$1, "getItem$1");
          function iterate$1(iterator, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t5, results) {
                    var rows = results.rows;
                    var length2 = rows.length;
                    for (var i4 = 0; i4 < length2; i4++) {
                      var item = rows.item(i4);
                      var result = item.value;
                      if (result) {
                        result = dbInfo.serializer.deserialize(result);
                      }
                      result = iterator(result, item.key, i4 + 1);
                      if (result !== void 0) {
                        resolve(result);
                        return;
                      }
                    }
                    resolve();
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(iterate$1, "iterate$1");
          function _setItem(key2, value, callback, retriesLeft) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                if (value === void 0) {
                  value = null;
                }
                var originalValue = value;
                var dbInfo = self2._dbInfo;
                dbInfo.serializer.serialize(value, function(value2, error) {
                  if (error) {
                    reject(error);
                  } else {
                    dbInfo.db.transaction(function(t4) {
                      tryExecuteSql(t4, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                        resolve(originalValue);
                      }, function(t5, error2) {
                        reject(error2);
                      });
                    }, function(sqlError) {
                      if (sqlError.code === sqlError.QUOTA_ERR) {
                        if (retriesLeft > 0) {
                          resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                          return;
                        }
                        reject(sqlError);
                      }
                    });
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(_setItem, "_setItem");
          function setItem$1(key2, value, callback) {
            return _setItem.apply(this, [key2, value, callback, 1]);
          }
          __name(setItem$1, "setItem$1");
          function removeItem$1(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                    resolve();
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(removeItem$1, "removeItem$1");
          function clear$1(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                    resolve();
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(clear$1, "clear$1");
          function length$1(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t5, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(length$1, "length$1");
          function key$1(n3, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n3 + 1], function(t5, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(key$1, "key$1");
          function keys$1(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t4) {
                  tryExecuteSql(t4, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t5, results) {
                    var keys2 = [];
                    for (var i4 = 0; i4 < results.rows.length; i4++) {
                      keys2.push(results.rows.item(i4).key);
                    }
                    resolve(keys2);
                  }, function(t5, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(keys$1, "keys$1");
          function getAllStoreNames(db) {
            return new Promise$1(function(resolve, reject) {
              db.transaction(function(t4) {
                t4.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t5, results) {
                  var storeNames = [];
                  for (var i4 = 0; i4 < results.rows.length; i4++) {
                    storeNames.push(results.rows.item(i4).name);
                  }
                  resolve({
                    db,
                    storeNames
                  });
                }, function(t5, error) {
                  reject(error);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          }
          __name(getAllStoreNames, "getAllStoreNames");
          function dropInstance$1(options, callback) {
            callback = getCallback.apply(this, arguments);
            var currentConfig = this.config();
            options = typeof options !== "function" && options || {};
            if (!options.name) {
              options.name = options.name || currentConfig.name;
              options.storeName = options.storeName || currentConfig.storeName;
            }
            var self2 = this;
            var promise;
            if (!options.name) {
              promise = Promise$1.reject("Invalid arguments");
            } else {
              promise = new Promise$1(function(resolve) {
                var db;
                if (options.name === currentConfig.name) {
                  db = self2._dbInfo.db;
                } else {
                  db = openDatabase(options.name, "", "", 0);
                }
                if (!options.storeName) {
                  resolve(getAllStoreNames(db));
                } else {
                  resolve({
                    db,
                    storeNames: [options.storeName]
                  });
                }
              }).then(function(operationInfo) {
                return new Promise$1(function(resolve, reject) {
                  operationInfo.db.transaction(function(t4) {
                    function dropTable(storeName) {
                      return new Promise$1(function(resolve2, reject2) {
                        t4.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                          resolve2();
                        }, function(t5, error) {
                          reject2(error);
                        });
                      });
                    }
                    __name(dropTable, "dropTable");
                    var operations = [];
                    for (var i4 = 0, len = operationInfo.storeNames.length; i4 < len; i4++) {
                      operations.push(dropTable(operationInfo.storeNames[i4]));
                    }
                    Promise$1.all(operations).then(function() {
                      resolve();
                    })["catch"](function(e3) {
                      reject(e3);
                    });
                  }, function(sqlError) {
                    reject(sqlError);
                  });
                });
              });
            }
            executeCallback(promise, callback);
            return promise;
          }
          __name(dropInstance$1, "dropInstance$1");
          var webSQLStorage = {
            _driver: "webSQLStorage",
            _initStorage: _initStorage$1,
            _support: isWebSQLValid(),
            iterate: iterate$1,
            getItem: getItem$1,
            setItem: setItem$1,
            removeItem: removeItem$1,
            clear: clear$1,
            length: length$1,
            key: key$1,
            keys: keys$1,
            dropInstance: dropInstance$1
          };
          function isLocalStorageValid() {
            try {
              return typeof localStorage !== "undefined" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
              !!localStorage.setItem;
            } catch (e3) {
              return false;
            }
          }
          __name(isLocalStorageValid, "isLocalStorageValid");
          function _getKeyPrefix(options, defaultConfig) {
            var keyPrefix = options.name + "/";
            if (options.storeName !== defaultConfig.storeName) {
              keyPrefix += options.storeName + "/";
            }
            return keyPrefix;
          }
          __name(_getKeyPrefix, "_getKeyPrefix");
          function checkIfLocalStorageThrows() {
            var localStorageTestKey = "_localforage_support_test";
            try {
              localStorage.setItem(localStorageTestKey, true);
              localStorage.removeItem(localStorageTestKey);
              return false;
            } catch (e3) {
              return true;
            }
          }
          __name(checkIfLocalStorageThrows, "checkIfLocalStorageThrows");
          function _isLocalStorageUsable() {
            return !checkIfLocalStorageThrows() || localStorage.length > 0;
          }
          __name(_isLocalStorageUsable, "_isLocalStorageUsable");
          function _initStorage$2(options) {
            var self2 = this;
            var dbInfo = {};
            if (options) {
              for (var i4 in options) {
                dbInfo[i4] = options[i4];
              }
            }
            dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
            if (!_isLocalStorageUsable()) {
              return Promise$1.reject();
            }
            self2._dbInfo = dbInfo;
            dbInfo.serializer = localforageSerializer;
            return Promise$1.resolve();
          }
          __name(_initStorage$2, "_initStorage$2");
          function clear$2(callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var keyPrefix = self2._dbInfo.keyPrefix;
              for (var i4 = localStorage.length - 1; i4 >= 0; i4--) {
                var key2 = localStorage.key(i4);
                if (key2.indexOf(keyPrefix) === 0) {
                  localStorage.removeItem(key2);
                }
              }
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(clear$2, "clear$2");
          function getItem$2(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var result = localStorage.getItem(dbInfo.keyPrefix + key2);
              if (result) {
                result = dbInfo.serializer.deserialize(result);
              }
              return result;
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(getItem$2, "getItem$2");
          function iterate$2(iterator, callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var keyPrefix = dbInfo.keyPrefix;
              var keyPrefixLength = keyPrefix.length;
              var length2 = localStorage.length;
              var iterationNumber = 1;
              for (var i4 = 0; i4 < length2; i4++) {
                var key2 = localStorage.key(i4);
                if (key2.indexOf(keyPrefix) !== 0) {
                  continue;
                }
                var value = localStorage.getItem(key2);
                if (value) {
                  value = dbInfo.serializer.deserialize(value);
                }
                value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
                if (value !== void 0) {
                  return value;
                }
              }
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(iterate$2, "iterate$2");
          function key$2(n3, callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var result;
              try {
                result = localStorage.key(n3);
              } catch (error) {
                result = null;
              }
              if (result) {
                result = result.substring(dbInfo.keyPrefix.length);
              }
              return result;
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(key$2, "key$2");
          function keys$2(callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var length2 = localStorage.length;
              var keys2 = [];
              for (var i4 = 0; i4 < length2; i4++) {
                var itemKey = localStorage.key(i4);
                if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                  keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
                }
              }
              return keys2;
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(keys$2, "keys$2");
          function length$2(callback) {
            var self2 = this;
            var promise = self2.keys().then(function(keys2) {
              return keys2.length;
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(length$2, "length$2");
          function removeItem$2(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              localStorage.removeItem(dbInfo.keyPrefix + key2);
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(removeItem$2, "removeItem$2");
          function setItem$2(key2, value, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = self2.ready().then(function() {
              if (value === void 0) {
                value = null;
              }
              var originalValue = value;
              return new Promise$1(function(resolve, reject) {
                var dbInfo = self2._dbInfo;
                dbInfo.serializer.serialize(value, function(value2, error) {
                  if (error) {
                    reject(error);
                  } else {
                    try {
                      localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                      resolve(originalValue);
                    } catch (e3) {
                      if (e3.name === "QuotaExceededError" || e3.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                        reject(e3);
                      }
                      reject(e3);
                    }
                  }
                });
              });
            });
            executeCallback(promise, callback);
            return promise;
          }
          __name(setItem$2, "setItem$2");
          function dropInstance$2(options, callback) {
            callback = getCallback.apply(this, arguments);
            options = typeof options !== "function" && options || {};
            if (!options.name) {
              var currentConfig = this.config();
              options.name = options.name || currentConfig.name;
              options.storeName = options.storeName || currentConfig.storeName;
            }
            var self2 = this;
            var promise;
            if (!options.name) {
              promise = Promise$1.reject("Invalid arguments");
            } else {
              promise = new Promise$1(function(resolve) {
                if (!options.storeName) {
                  resolve(options.name + "/");
                } else {
                  resolve(_getKeyPrefix(options, self2._defaultConfig));
                }
              }).then(function(keyPrefix) {
                for (var i4 = localStorage.length - 1; i4 >= 0; i4--) {
                  var key2 = localStorage.key(i4);
                  if (key2.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key2);
                  }
                }
              });
            }
            executeCallback(promise, callback);
            return promise;
          }
          __name(dropInstance$2, "dropInstance$2");
          var localStorageWrapper = {
            _driver: "localStorageWrapper",
            _initStorage: _initStorage$2,
            _support: isLocalStorageValid(),
            iterate: iterate$2,
            getItem: getItem$2,
            setItem: setItem$2,
            removeItem: removeItem$2,
            clear: clear$2,
            length: length$2,
            key: key$2,
            keys: keys$2,
            dropInstance: dropInstance$2
          };
          var sameValue = /* @__PURE__ */ __name(function sameValue2(x5, y4) {
            return x5 === y4 || typeof x5 === "number" && typeof y4 === "number" && isNaN(x5) && isNaN(y4);
          }, "sameValue");
          var includes = /* @__PURE__ */ __name(function includes2(array, searchElement) {
            var len = array.length;
            var i4 = 0;
            while (i4 < len) {
              if (sameValue(array[i4], searchElement)) {
                return true;
              }
              i4++;
            }
            return false;
          }, "includes");
          var isArray = Array.isArray || function(arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
          };
          var DefinedDrivers = {};
          var DriverSupport = {};
          var DefaultDrivers = {
            INDEXEDDB: asyncStorage,
            WEBSQL: webSQLStorage,
            LOCALSTORAGE: localStorageWrapper
          };
          var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
          var OptionalDriverMethods = ["dropInstance"];
          var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
          var DefaultConfig = {
            description: "",
            driver: DefaultDriverOrder.slice(),
            name: "localforage",
            // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
            // we can use without a prompt.
            size: 4980736,
            storeName: "keyvaluepairs",
            version: 1
          };
          function callWhenReady(localForageInstance, libraryMethod) {
            localForageInstance[libraryMethod] = function() {
              var _args = arguments;
              return localForageInstance.ready().then(function() {
                return localForageInstance[libraryMethod].apply(localForageInstance, _args);
              });
            };
          }
          __name(callWhenReady, "callWhenReady");
          function extend() {
            for (var i4 = 1; i4 < arguments.length; i4++) {
              var arg = arguments[i4];
              if (arg) {
                for (var _key in arg) {
                  if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                      arguments[0][_key] = arg[_key].slice();
                    } else {
                      arguments[0][_key] = arg[_key];
                    }
                  }
                }
              }
            }
            return arguments[0];
          }
          __name(extend, "extend");
          var LocalForage = function() {
            function LocalForage2(options) {
              _classCallCheck(this, LocalForage2);
              for (var driverTypeKey in DefaultDrivers) {
                if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                  var driver = DefaultDrivers[driverTypeKey];
                  var driverName = driver._driver;
                  this[driverTypeKey] = driverName;
                  if (!DefinedDrivers[driverName]) {
                    this.defineDriver(driver);
                  }
                }
              }
              this._defaultConfig = extend({}, DefaultConfig);
              this._config = extend({}, this._defaultConfig, options);
              this._driverSet = null;
              this._initDriver = null;
              this._ready = false;
              this._dbInfo = null;
              this._wrapLibraryMethodsWithReady();
              this.setDriver(this._config.driver)["catch"](function() {
              });
            }
            __name(LocalForage2, "LocalForage");
            LocalForage2.prototype.config = /* @__PURE__ */ __name(function config(options) {
              if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                if (this._ready) {
                  return new Error("Can't call config() after localforage has been used.");
                }
                for (var i4 in options) {
                  if (i4 === "storeName") {
                    options[i4] = options[i4].replace(/\W/g, "_");
                  }
                  if (i4 === "version" && typeof options[i4] !== "number") {
                    return new Error("Database version must be a number.");
                  }
                  this._config[i4] = options[i4];
                }
                if ("driver" in options && options.driver) {
                  return this.setDriver(this._config.driver);
                }
                return true;
              } else if (typeof options === "string") {
                return this._config[options];
              } else {
                return this._config;
              }
            }, "config");
            LocalForage2.prototype.defineDriver = /* @__PURE__ */ __name(function defineDriver(driverObject, callback, errorCallback) {
              var promise = new Promise$1(function(resolve, reject) {
                try {
                  var driverName = driverObject._driver;
                  var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                  if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                  }
                  var driverMethods = LibraryMethods.concat("_initStorage");
                  for (var i4 = 0, len = driverMethods.length; i4 < len; i4++) {
                    var driverMethodName = driverMethods[i4];
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                      reject(complianceError);
                      return;
                    }
                  }
                  var configureMissingMethods = /* @__PURE__ */ __name(function configureMissingMethods2() {
                    var methodNotImplementedFactory = /* @__PURE__ */ __name(function methodNotImplementedFactory2(methodName) {
                      return function() {
                        var error = new Error("Method " + methodName + " is not implemented by the current driver");
                        var promise2 = Promise$1.reject(error);
                        executeCallback(promise2, arguments[arguments.length - 1]);
                        return promise2;
                      };
                    }, "methodNotImplementedFactory");
                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                      var optionalDriverMethod = OptionalDriverMethods[_i];
                      if (!driverObject[optionalDriverMethod]) {
                        driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                      }
                    }
                  }, "configureMissingMethods");
                  configureMissingMethods();
                  var setDriverSupport = /* @__PURE__ */ __name(function setDriverSupport2(support) {
                    if (DefinedDrivers[driverName]) {
                      console.info("Redefining LocalForage driver: " + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    resolve();
                  }, "setDriverSupport");
                  if ("_support" in driverObject) {
                    if (driverObject._support && typeof driverObject._support === "function") {
                      driverObject._support().then(setDriverSupport, reject);
                    } else {
                      setDriverSupport(!!driverObject._support);
                    }
                  } else {
                    setDriverSupport(true);
                  }
                } catch (e3) {
                  reject(e3);
                }
              });
              executeTwoCallbacks(promise, callback, errorCallback);
              return promise;
            }, "defineDriver");
            LocalForage2.prototype.driver = /* @__PURE__ */ __name(function driver() {
              return this._driver || null;
            }, "driver");
            LocalForage2.prototype.getDriver = /* @__PURE__ */ __name(function getDriver(driverName, callback, errorCallback) {
              var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
              executeTwoCallbacks(getDriverPromise, callback, errorCallback);
              return getDriverPromise;
            }, "getDriver");
            LocalForage2.prototype.getSerializer = /* @__PURE__ */ __name(function getSerializer(callback) {
              var serializerPromise = Promise$1.resolve(localforageSerializer);
              executeTwoCallbacks(serializerPromise, callback);
              return serializerPromise;
            }, "getSerializer");
            LocalForage2.prototype.ready = /* @__PURE__ */ __name(function ready(callback) {
              var self2 = this;
              var promise = self2._driverSet.then(function() {
                if (self2._ready === null) {
                  self2._ready = self2._initDriver();
                }
                return self2._ready;
              });
              executeTwoCallbacks(promise, callback, callback);
              return promise;
            }, "ready");
            LocalForage2.prototype.setDriver = /* @__PURE__ */ __name(function setDriver(drivers, callback, errorCallback) {
              var self2 = this;
              if (!isArray(drivers)) {
                drivers = [drivers];
              }
              var supportedDrivers = this._getSupportedDrivers(drivers);
              function setDriverToConfig() {
                self2._config.driver = self2.driver();
              }
              __name(setDriverToConfig, "setDriverToConfig");
              function extendSelfWithDriver(driver) {
                self2._extend(driver);
                setDriverToConfig();
                self2._ready = self2._initStorage(self2._config);
                return self2._ready;
              }
              __name(extendSelfWithDriver, "extendSelfWithDriver");
              function initDriver(supportedDrivers2) {
                return function() {
                  var currentDriverIndex = 0;
                  function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers2.length) {
                      var driverName = supportedDrivers2[currentDriverIndex];
                      currentDriverIndex++;
                      self2._dbInfo = null;
                      self2._ready = null;
                      return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }
                    setDriverToConfig();
                    var error = new Error("No available storage method found.");
                    self2._driverSet = Promise$1.reject(error);
                    return self2._driverSet;
                  }
                  __name(driverPromiseLoop, "driverPromiseLoop");
                  return driverPromiseLoop();
                };
              }
              __name(initDriver, "initDriver");
              var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
                return Promise$1.resolve();
              }) : Promise$1.resolve();
              this._driverSet = oldDriverSetDone.then(function() {
                var driverName = supportedDrivers[0];
                self2._dbInfo = null;
                self2._ready = null;
                return self2.getDriver(driverName).then(function(driver) {
                  self2._driver = driver._driver;
                  setDriverToConfig();
                  self2._wrapLibraryMethodsWithReady();
                  self2._initDriver = initDriver(supportedDrivers);
                });
              })["catch"](function() {
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              });
              executeTwoCallbacks(this._driverSet, callback, errorCallback);
              return this._driverSet;
            }, "setDriver");
            LocalForage2.prototype.supports = /* @__PURE__ */ __name(function supports(driverName) {
              return !!DriverSupport[driverName];
            }, "supports");
            LocalForage2.prototype._extend = /* @__PURE__ */ __name(function _extend(libraryMethodsAndProperties) {
              extend(this, libraryMethodsAndProperties);
            }, "_extend");
            LocalForage2.prototype._getSupportedDrivers = /* @__PURE__ */ __name(function _getSupportedDrivers(drivers) {
              var supportedDrivers = [];
              for (var i4 = 0, len = drivers.length; i4 < len; i4++) {
                var driverName = drivers[i4];
                if (this.supports(driverName)) {
                  supportedDrivers.push(driverName);
                }
              }
              return supportedDrivers;
            }, "_getSupportedDrivers");
            LocalForage2.prototype._wrapLibraryMethodsWithReady = /* @__PURE__ */ __name(function _wrapLibraryMethodsWithReady() {
              for (var i4 = 0, len = LibraryMethods.length; i4 < len; i4++) {
                callWhenReady(this, LibraryMethods[i4]);
              }
            }, "_wrapLibraryMethodsWithReady");
            LocalForage2.prototype.createInstance = /* @__PURE__ */ __name(function createInstance(options) {
              return new LocalForage2(options);
            }, "createInstance");
            return LocalForage2;
          }();
          var localforage_js = new LocalForage();
          module3.exports = localforage_js;
        }, { "3": 3 }] }, {}, [4])(4);
      });
    }
  });

  // ../node_modules/.pnpm/@preact+compat@17.1.2_preact@10.13.2/node_modules/@preact/compat/index.mjs
  var compat_exports = {};
  __export(compat_exports, {
    Children: () => O2,
    Component: () => k,
    Fragment: () => _,
    PureComponent: () => w3,
    StrictMode: () => mn,
    Suspense: () => D2,
    SuspenseList: () => V2,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ln,
    cloneElement: () => sn,
    createContext: () => F,
    createElement: () => y,
    createFactory: () => fn,
    createPortal: () => z3,
    createRef: () => d,
    default: () => Cn,
    findDOMNode: () => vn,
    flushSync: () => pn,
    forwardRef: () => k3,
    hydrate: () => J,
    isValidElement: () => an,
    lazy: () => M2,
    memo: () => x3,
    render: () => G,
    startTransition: () => yn,
    unmountComponentAtNode: () => hn,
    unstable_batchedUpdates: () => dn,
    useCallback: () => T2,
    useContext: () => q2,
    useDebugValue: () => x2,
    useDeferredValue: () => _n,
    useEffect: () => p2,
    useErrorBoundary: () => P2,
    useId: () => V,
    useImperativeHandle: () => A2,
    useInsertionEffect: () => Sn,
    useLayoutEffect: () => y2,
    useMemo: () => F2,
    useReducer: () => s2,
    useRef: () => _2,
    useState: () => h2,
    useSyncExternalStore: () => gn,
    useTransition: () => bn,
    version: () => cn
  });
  var init_compat = __esm({
    "../node_modules/.pnpm/@preact+compat@17.1.2_preact@10.13.2/node_modules/@preact/compat/index.mjs"() {
      init_compat_module();
      init_compat_module();
    }
  });

  // ../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
  var require_use_sync_external_store_shim_development = __commonJS({
    "../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var React15 = (init_compat(), __toCommonJS(compat_exports));
          var ReactSharedInternals = React15.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          __name(error, "error");
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          __name(printWarning, "printWarning");
          function is(x5, y4) {
            return x5 === y4 && (x5 !== 0 || 1 / x5 === 1 / y4) || x5 !== x5 && y4 !== y4;
          }
          __name(is, "is");
          var objectIs = typeof Object.is === "function" ? Object.is : is;
          var useState = React15.useState, useEffect = React15.useEffect, useLayoutEffect = React15.useLayoutEffect, useDebugValue = React15.useDebugValue;
          var didWarnOld18Alpha = false;
          var didWarnUncachedGetSnapshot = false;
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            {
              if (!didWarnOld18Alpha) {
                if (React15.startTransition !== void 0) {
                  didWarnOld18Alpha = true;
                  error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
                }
              }
            }
            var value = getSnapshot();
            {
              if (!didWarnUncachedGetSnapshot) {
                var cachedValue = getSnapshot();
                if (!objectIs(value, cachedValue)) {
                  error("The result of getSnapshot should be cached to avoid an infinite loop");
                  didWarnUncachedGetSnapshot = true;
                }
              }
            }
            var _useState = useState({
              inst: {
                value,
                getSnapshot
              }
            }), inst = _useState[0].inst, forceUpdate = _useState[1];
            useLayoutEffect(function() {
              inst.value = value;
              inst.getSnapshot = getSnapshot;
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            }, [subscribe, value, getSnapshot]);
            useEffect(function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
              var handleStoreChange = /* @__PURE__ */ __name(function() {
                if (checkIfSnapshotChanged(inst)) {
                  forceUpdate({
                    inst
                  });
                }
              }, "handleStoreChange");
              return subscribe(handleStoreChange);
            }, [subscribe]);
            useDebugValue(value);
            return value;
          }
          __name(useSyncExternalStore, "useSyncExternalStore");
          function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
              var nextValue = latestGetSnapshot();
              return !objectIs(prevValue, nextValue);
            } catch (error2) {
              return true;
            }
          }
          __name(checkIfSnapshotChanged, "checkIfSnapshotChanged");
          function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
            return getSnapshot();
          }
          __name(useSyncExternalStore$1, "useSyncExternalStore$1");
          var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
          var isServerEnvironment = !canUseDOM;
          var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
          var useSyncExternalStore$2 = React15.useSyncExternalStore !== void 0 ? React15.useSyncExternalStore : shim;
          exports.useSyncExternalStore = useSyncExternalStore$2;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // ../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_shim_development();
      }
    }
  });

  // ../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
  var require_with_selector_development = __commonJS({
    "../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var React15 = (init_compat(), __toCommonJS(compat_exports));
          var shim = require_shim();
          function is(x5, y4) {
            return x5 === y4 && (x5 !== 0 || 1 / x5 === 1 / y4) || x5 !== x5 && y4 !== y4;
          }
          __name(is, "is");
          var objectIs = typeof Object.is === "function" ? Object.is : is;
          var useSyncExternalStore = shim.useSyncExternalStore;
          var useRef = React15.useRef, useEffect = React15.useEffect, useMemo3 = React15.useMemo, useDebugValue = React15.useDebugValue;
          function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
            var instRef = useRef(null);
            var inst;
            if (instRef.current === null) {
              inst = {
                hasValue: false,
                value: null
              };
              instRef.current = inst;
            } else {
              inst = instRef.current;
            }
            var _useMemo = useMemo3(function() {
              var hasMemo = false;
              var memoizedSnapshot;
              var memoizedSelection;
              var memoizedSelector = /* @__PURE__ */ __name(function(nextSnapshot) {
                if (!hasMemo) {
                  hasMemo = true;
                  memoizedSnapshot = nextSnapshot;
                  var _nextSelection = selector(nextSnapshot);
                  if (isEqual !== void 0) {
                    if (inst.hasValue) {
                      var currentSelection = inst.value;
                      if (isEqual(currentSelection, _nextSelection)) {
                        memoizedSelection = currentSelection;
                        return currentSelection;
                      }
                    }
                  }
                  memoizedSelection = _nextSelection;
                  return _nextSelection;
                }
                var prevSnapshot = memoizedSnapshot;
                var prevSelection = memoizedSelection;
                if (objectIs(prevSnapshot, nextSnapshot)) {
                  return prevSelection;
                }
                var nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                  return prevSelection;
                }
                memoizedSnapshot = nextSnapshot;
                memoizedSelection = nextSelection;
                return nextSelection;
              }, "memoizedSelector");
              var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
              var getSnapshotWithSelector = /* @__PURE__ */ __name(function() {
                return memoizedSelector(getSnapshot());
              }, "getSnapshotWithSelector");
              var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              };
              return [getSnapshotWithSelector, getServerSnapshotWithSelector];
            }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
            useEffect(function() {
              inst.hasValue = true;
              inst.value = value;
            }, [value]);
            useDebugValue(value);
            return value;
          }
          __name(useSyncExternalStoreWithSelector2, "useSyncExternalStoreWithSelector");
          exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // ../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/with-selector.js
  var require_with_selector = __commonJS({
    "../node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_with_selector_development();
      }
    }
  });

  // ../node_modules/.pnpm/uri-js@4.4.1/node_modules/uri-js/dist/es5/uri.all.js
  var require_uri_all = __commonJS({
    "../node_modules/.pnpm/uri-js@4.4.1/node_modules/uri-js/dist/es5/uri.all.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2.URI = global2.URI || {});
      })(exports, function(exports2) {
        "use strict";
        function merge() {
          for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
            sets[_key] = arguments[_key];
          }
          if (sets.length > 1) {
            sets[0] = sets[0].slice(0, -1);
            var xl = sets.length - 1;
            for (var x5 = 1; x5 < xl; ++x5) {
              sets[x5] = sets[x5].slice(1, -1);
            }
            sets[xl] = sets[xl].slice(1);
            return sets.join("");
          } else {
            return sets[0];
          }
        }
        __name(merge, "merge");
        function subexp(str) {
          return "(?:" + str + ")";
        }
        __name(subexp, "subexp");
        function typeOf(o5) {
          return o5 === void 0 ? "undefined" : o5 === null ? "null" : Object.prototype.toString.call(o5).split(" ").pop().split("]").shift().toLowerCase();
        }
        __name(typeOf, "typeOf");
        function toUpperCase(str) {
          return str.toUpperCase();
        }
        __name(toUpperCase, "toUpperCase");
        function toArray(obj) {
          return obj !== void 0 && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
        }
        __name(toArray, "toArray");
        function assign(target, source) {
          var obj = target;
          if (source) {
            for (var key in source) {
              obj[key] = source[key];
            }
          }
          return obj;
        }
        __name(assign, "assign");
        function buildExps(isIRI2) {
          var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$2 = merge(DIGIT$$, "[A-Fa-f]"), LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$2 = subexp(subexp("%[EFef]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%" + HEXDIG$$2 + HEXDIG$$2)), GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI2 ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", IPRIVATE$$ = isIRI2 ? "[\\uE000-\\uF8FF]" : "[]", UNRESERVED$$2 = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$2 + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$2 + "|" + PCT_ENCODED$2) + "+"), IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + ZONEID$), IPVFUTURE$ = subexp("[vV]" + HEXDIG$$2 + "+\\." + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), REG_NAME$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
          return {
            NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
            NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(merge("[^]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            UNRESERVED: new RegExp(UNRESERVED$$2, "g"),
            OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$2, RESERVED$$), "g"),
            PCT_ENCODED: new RegExp(PCT_ENCODED$2, "g"),
            IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$")
            //RFC 6874, with relaxed parsing rules
          };
        }
        __name(buildExps, "buildExps");
        var URI_PROTOCOL = buildExps(false);
        var IRI_PROTOCOL = buildExps(true);
        var slicedToArray = function() {
          function sliceIterator(arr, i4) {
            var _arr = [];
            var _n2 = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n2 = (_s = _i.next()).done); _n2 = true) {
                _arr.push(_s.value);
                if (i4 && _arr.length === i4)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n2 && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          __name(sliceIterator, "sliceIterator");
          return function(arr, i4) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i4);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var toConsumableArray = /* @__PURE__ */ __name(function(arr) {
          if (Array.isArray(arr)) {
            for (var i4 = 0, arr2 = Array(arr.length); i4 < arr.length; i4++)
              arr2[i4] = arr[i4];
            return arr2;
          } else {
            return Array.from(arr);
          }
        }, "toConsumableArray");
        var maxInt = 2147483647;
        var base = 36;
        var tMin = 1;
        var tMax = 26;
        var skew = 38;
        var damp = 700;
        var initialBias = 72;
        var initialN = 128;
        var delimiter = "-";
        var regexPunycode = /^xn--/;
        var regexNonASCII = /[^\0-\x7E]/;
        var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
        var errors = {
          "overflow": "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        };
        var baseMinusTMin = base - tMin;
        var floor = Math.floor;
        var stringFromCharCode = String.fromCharCode;
        function error$1(type) {
          throw new RangeError(errors[type]);
        }
        __name(error$1, "error$1");
        function map(array, fn3) {
          var result = [];
          var length = array.length;
          while (length--) {
            result[length] = fn3(array[length]);
          }
          return result;
        }
        __name(map, "map");
        function mapDomain(string, fn3) {
          var parts = string.split("@");
          var result = "";
          if (parts.length > 1) {
            result = parts[0] + "@";
            string = parts[1];
          }
          string = string.replace(regexSeparators, ".");
          var labels = string.split(".");
          var encoded = map(labels, fn3).join(".");
          return result + encoded;
        }
        __name(mapDomain, "mapDomain");
        function ucs2decode(string) {
          var output = [];
          var counter = 0;
          var length = string.length;
          while (counter < length) {
            var value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
              var extra = string.charCodeAt(counter++);
              if ((extra & 64512) == 56320) {
                output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }
          return output;
        }
        __name(ucs2decode, "ucs2decode");
        var ucs2encode = /* @__PURE__ */ __name(function ucs2encode2(array) {
          return String.fromCodePoint.apply(String, toConsumableArray(array));
        }, "ucs2encode");
        var basicToDigit = /* @__PURE__ */ __name(function basicToDigit2(codePoint) {
          if (codePoint - 48 < 10) {
            return codePoint - 22;
          }
          if (codePoint - 65 < 26) {
            return codePoint - 65;
          }
          if (codePoint - 97 < 26) {
            return codePoint - 97;
          }
          return base;
        }, "basicToDigit");
        var digitToBasic = /* @__PURE__ */ __name(function digitToBasic2(digit, flag) {
          return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        }, "digitToBasic");
        var adapt = /* @__PURE__ */ __name(function adapt2(delta, numPoints, firstTime) {
          var k5 = 0;
          delta = firstTime ? floor(delta / damp) : delta >> 1;
          delta += floor(delta / numPoints);
          for (
            ;
            /* no initialization */
            delta > baseMinusTMin * tMax >> 1;
            k5 += base
          ) {
            delta = floor(delta / baseMinusTMin);
          }
          return floor(k5 + (baseMinusTMin + 1) * delta / (delta + skew));
        }, "adapt");
        var decode = /* @__PURE__ */ __name(function decode2(input) {
          var output = [];
          var inputLength = input.length;
          var i4 = 0;
          var n3 = initialN;
          var bias = initialBias;
          var basic = input.lastIndexOf(delimiter);
          if (basic < 0) {
            basic = 0;
          }
          for (var j5 = 0; j5 < basic; ++j5) {
            if (input.charCodeAt(j5) >= 128) {
              error$1("not-basic");
            }
            output.push(input.charCodeAt(j5));
          }
          for (var index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
            var oldi = i4;
            for (
              var w5 = 1, k5 = base;
              ;
              /* no condition */
              k5 += base
            ) {
              if (index >= inputLength) {
                error$1("invalid-input");
              }
              var digit = basicToDigit(input.charCodeAt(index++));
              if (digit >= base || digit > floor((maxInt - i4) / w5)) {
                error$1("overflow");
              }
              i4 += digit * w5;
              var t4 = k5 <= bias ? tMin : k5 >= bias + tMax ? tMax : k5 - bias;
              if (digit < t4) {
                break;
              }
              var baseMinusT = base - t4;
              if (w5 > floor(maxInt / baseMinusT)) {
                error$1("overflow");
              }
              w5 *= baseMinusT;
            }
            var out = output.length + 1;
            bias = adapt(i4 - oldi, out, oldi == 0);
            if (floor(i4 / out) > maxInt - n3) {
              error$1("overflow");
            }
            n3 += floor(i4 / out);
            i4 %= out;
            output.splice(i4++, 0, n3);
          }
          return String.fromCodePoint.apply(String, output);
        }, "decode");
        var encode = /* @__PURE__ */ __name(function encode2(input) {
          var output = [];
          input = ucs2decode(input);
          var inputLength = input.length;
          var n3 = initialN;
          var delta = 0;
          var bias = initialBias;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _currentValue2 = _step.value;
              if (_currentValue2 < 128) {
                output.push(stringFromCharCode(_currentValue2));
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
          var basicLength = output.length;
          var handledCPCount = basicLength;
          if (basicLength) {
            output.push(delimiter);
          }
          while (handledCPCount < inputLength) {
            var m3 = maxInt;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = void 0;
            try {
              for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var currentValue = _step2.value;
                if (currentValue >= n3 && currentValue < m3) {
                  m3 = currentValue;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
            var handledCPCountPlusOne = handledCPCount + 1;
            if (m3 - n3 > floor((maxInt - delta) / handledCPCountPlusOne)) {
              error$1("overflow");
            }
            delta += (m3 - n3) * handledCPCountPlusOne;
            n3 = m3;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = void 0;
            try {
              for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _currentValue = _step3.value;
                if (_currentValue < n3 && ++delta > maxInt) {
                  error$1("overflow");
                }
                if (_currentValue == n3) {
                  var q5 = delta;
                  for (
                    var k5 = base;
                    ;
                    /* no condition */
                    k5 += base
                  ) {
                    var t4 = k5 <= bias ? tMin : k5 >= bias + tMax ? tMax : k5 - bias;
                    if (q5 < t4) {
                      break;
                    }
                    var qMinusT = q5 - t4;
                    var baseMinusT = base - t4;
                    output.push(stringFromCharCode(digitToBasic(t4 + qMinusT % baseMinusT, 0)));
                    q5 = floor(qMinusT / baseMinusT);
                  }
                  output.push(stringFromCharCode(digitToBasic(q5, 0)));
                  bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                  delta = 0;
                  ++handledCPCount;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
            ++delta;
            ++n3;
          }
          return output.join("");
        }, "encode");
        var toUnicode = /* @__PURE__ */ __name(function toUnicode2(input) {
          return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
          });
        }, "toUnicode");
        var toASCII = /* @__PURE__ */ __name(function toASCII2(input) {
          return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
          });
        }, "toASCII");
        var punycode = {
          /**
           * A string representing the current Punycode.js version number.
           * @memberOf punycode
           * @type String
           */
          "version": "2.1.0",
          /**
           * An object of methods to convert from JavaScript's internal character
           * representation (UCS-2) to Unicode code points, and back.
           * @see <https://mathiasbynens.be/notes/javascript-encoding>
           * @memberOf punycode
           * @type Object
           */
          "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
          },
          "decode": decode,
          "encode": encode,
          "toASCII": toASCII,
          "toUnicode": toUnicode
        };
        var SCHEMES = {};
        function pctEncChar(chr) {
          var c4 = chr.charCodeAt(0);
          var e3 = void 0;
          if (c4 < 16)
            e3 = "%0" + c4.toString(16).toUpperCase();
          else if (c4 < 128)
            e3 = "%" + c4.toString(16).toUpperCase();
          else if (c4 < 2048)
            e3 = "%" + (c4 >> 6 | 192).toString(16).toUpperCase() + "%" + (c4 & 63 | 128).toString(16).toUpperCase();
          else
            e3 = "%" + (c4 >> 12 | 224).toString(16).toUpperCase() + "%" + (c4 >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c4 & 63 | 128).toString(16).toUpperCase();
          return e3;
        }
        __name(pctEncChar, "pctEncChar");
        function pctDecChars(str) {
          var newStr = "";
          var i4 = 0;
          var il = str.length;
          while (i4 < il) {
            var c4 = parseInt(str.substr(i4 + 1, 2), 16);
            if (c4 < 128) {
              newStr += String.fromCharCode(c4);
              i4 += 3;
            } else if (c4 >= 194 && c4 < 224) {
              if (il - i4 >= 6) {
                var c22 = parseInt(str.substr(i4 + 4, 2), 16);
                newStr += String.fromCharCode((c4 & 31) << 6 | c22 & 63);
              } else {
                newStr += str.substr(i4, 6);
              }
              i4 += 6;
            } else if (c4 >= 224) {
              if (il - i4 >= 9) {
                var _c = parseInt(str.substr(i4 + 4, 2), 16);
                var c32 = parseInt(str.substr(i4 + 7, 2), 16);
                newStr += String.fromCharCode((c4 & 15) << 12 | (_c & 63) << 6 | c32 & 63);
              } else {
                newStr += str.substr(i4, 9);
              }
              i4 += 9;
            } else {
              newStr += str.substr(i4, 3);
              i4 += 3;
            }
          }
          return newStr;
        }
        __name(pctDecChars, "pctDecChars");
        function _normalizeComponentEncoding(components, protocol) {
          function decodeUnreserved2(str) {
            var decStr = pctDecChars(str);
            return !decStr.match(protocol.UNRESERVED) ? str : decStr;
          }
          __name(decodeUnreserved2, "decodeUnreserved");
          if (components.scheme)
            components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_SCHEME, "");
          if (components.userinfo !== void 0)
            components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.host !== void 0)
            components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.path !== void 0)
            components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.query !== void 0)
            components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.fragment !== void 0)
            components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          return components;
        }
        __name(_normalizeComponentEncoding, "_normalizeComponentEncoding");
        function _stripLeadingZeros(str) {
          return str.replace(/^0*(.*)/, "$1") || "0";
        }
        __name(_stripLeadingZeros, "_stripLeadingZeros");
        function _normalizeIPv4(host, protocol) {
          var matches = host.match(protocol.IPV4ADDRESS) || [];
          var _matches = slicedToArray(matches, 2), address = _matches[1];
          if (address) {
            return address.split(".").map(_stripLeadingZeros).join(".");
          } else {
            return host;
          }
        }
        __name(_normalizeIPv4, "_normalizeIPv4");
        function _normalizeIPv6(host, protocol) {
          var matches = host.match(protocol.IPV6ADDRESS) || [];
          var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
          if (address) {
            var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
            var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
            var lastFields = last.split(":").map(_stripLeadingZeros);
            var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
            var fieldCount = isLastFieldIPv4Address ? 7 : 8;
            var lastFieldsStart = lastFields.length - fieldCount;
            var fields = Array(fieldCount);
            for (var x5 = 0; x5 < fieldCount; ++x5) {
              fields[x5] = firstFields[x5] || lastFields[lastFieldsStart + x5] || "";
            }
            if (isLastFieldIPv4Address) {
              fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
            }
            var allZeroFields = fields.reduce(function(acc, field, index) {
              if (!field || field === "0") {
                var lastLongest = acc[acc.length - 1];
                if (lastLongest && lastLongest.index + lastLongest.length === index) {
                  lastLongest.length++;
                } else {
                  acc.push({ index, length: 1 });
                }
              }
              return acc;
            }, []);
            var longestZeroFields = allZeroFields.sort(function(a4, b4) {
              return b4.length - a4.length;
            })[0];
            var newHost = void 0;
            if (longestZeroFields && longestZeroFields.length > 1) {
              var newFirst = fields.slice(0, longestZeroFields.index);
              var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
              newHost = newFirst.join(":") + "::" + newLast.join(":");
            } else {
              newHost = fields.join(":");
            }
            if (zone) {
              newHost += "%" + zone;
            }
            return newHost;
          } else {
            return host;
          }
        }
        __name(_normalizeIPv6, "_normalizeIPv6");
        var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
        var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === void 0;
        function parse(uriString) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var components = {};
          var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
          if (options.reference === "suffix")
            uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
          var matches = uriString.match(URI_PARSE);
          if (matches) {
            if (NO_MATCH_IS_UNDEFINED) {
              components.scheme = matches[1];
              components.userinfo = matches[3];
              components.host = matches[4];
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = matches[7];
              components.fragment = matches[8];
              if (isNaN(components.port)) {
                components.port = matches[5];
              }
            } else {
              components.scheme = matches[1] || void 0;
              components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : void 0;
              components.host = uriString.indexOf("//") !== -1 ? matches[4] : void 0;
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = uriString.indexOf("?") !== -1 ? matches[7] : void 0;
              components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : void 0;
              if (isNaN(components.port)) {
                components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : void 0;
              }
            }
            if (components.host) {
              components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
            }
            if (components.scheme === void 0 && components.userinfo === void 0 && components.host === void 0 && components.port === void 0 && !components.path && components.query === void 0) {
              components.reference = "same-document";
            } else if (components.scheme === void 0) {
              components.reference = "relative";
            } else if (components.fragment === void 0) {
              components.reference = "absolute";
            } else {
              components.reference = "uri";
            }
            if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
              components.error = components.error || "URI is not a " + options.reference + " reference.";
            }
            var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
            if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
              if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                try {
                  components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                } catch (e3) {
                  components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e3;
                }
              }
              _normalizeComponentEncoding(components, URI_PROTOCOL);
            } else {
              _normalizeComponentEncoding(components, protocol);
            }
            if (schemeHandler && schemeHandler.parse) {
              schemeHandler.parse(components, options);
            }
          } else {
            components.error = components.error || "URI can not be parsed.";
          }
          return components;
        }
        __name(parse, "parse");
        function _recomposeAuthority(components, options) {
          var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
          var uriTokens = [];
          if (components.userinfo !== void 0) {
            uriTokens.push(components.userinfo);
            uriTokens.push("@");
          }
          if (components.host !== void 0) {
            uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_5, $1, $22) {
              return "[" + $1 + ($22 ? "%25" + $22 : "") + "]";
            }));
          }
          if (typeof components.port === "number" || typeof components.port === "string") {
            uriTokens.push(":");
            uriTokens.push(String(components.port));
          }
          return uriTokens.length ? uriTokens.join("") : void 0;
        }
        __name(_recomposeAuthority, "_recomposeAuthority");
        var RDS1 = /^\.\.?\//;
        var RDS2 = /^\/\.(\/|$)/;
        var RDS3 = /^\/\.\.(\/|$)/;
        var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
        function removeDotSegments(input) {
          var output = [];
          while (input.length) {
            if (input.match(RDS1)) {
              input = input.replace(RDS1, "");
            } else if (input.match(RDS2)) {
              input = input.replace(RDS2, "/");
            } else if (input.match(RDS3)) {
              input = input.replace(RDS3, "/");
              output.pop();
            } else if (input === "." || input === "..") {
              input = "";
            } else {
              var im = input.match(RDS5);
              if (im) {
                var s4 = im[0];
                input = input.slice(s4.length);
                output.push(s4);
              } else {
                throw new Error("Unexpected dot segment condition");
              }
            }
          }
          return output.join("");
        }
        __name(removeDotSegments, "removeDotSegments");
        function serialize(components) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
          var uriTokens = [];
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          if (schemeHandler && schemeHandler.serialize)
            schemeHandler.serialize(components, options);
          if (components.host) {
            if (protocol.IPV6ADDRESS.test(components.host)) {
            } else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
              try {
                components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
              } catch (e3) {
                components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e3;
              }
            }
          }
          _normalizeComponentEncoding(components, protocol);
          if (options.reference !== "suffix" && components.scheme) {
            uriTokens.push(components.scheme);
            uriTokens.push(":");
          }
          var authority = _recomposeAuthority(components, options);
          if (authority !== void 0) {
            if (options.reference !== "suffix") {
              uriTokens.push("//");
            }
            uriTokens.push(authority);
            if (components.path && components.path.charAt(0) !== "/") {
              uriTokens.push("/");
            }
          }
          if (components.path !== void 0) {
            var s4 = components.path;
            if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
              s4 = removeDotSegments(s4);
            }
            if (authority === void 0) {
              s4 = s4.replace(/^\/\//, "/%2F");
            }
            uriTokens.push(s4);
          }
          if (components.query !== void 0) {
            uriTokens.push("?");
            uriTokens.push(components.query);
          }
          if (components.fragment !== void 0) {
            uriTokens.push("#");
            uriTokens.push(components.fragment);
          }
          return uriTokens.join("");
        }
        __name(serialize, "serialize");
        function resolveComponents(base2, relative) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var skipNormalization = arguments[3];
          var target = {};
          if (!skipNormalization) {
            base2 = parse(serialize(base2, options), options);
            relative = parse(serialize(relative, options), options);
          }
          options = options || {};
          if (!options.tolerant && relative.scheme) {
            target.scheme = relative.scheme;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0) {
              target.userinfo = relative.userinfo;
              target.host = relative.host;
              target.port = relative.port;
              target.path = removeDotSegments(relative.path || "");
              target.query = relative.query;
            } else {
              if (!relative.path) {
                target.path = base2.path;
                if (relative.query !== void 0) {
                  target.query = relative.query;
                } else {
                  target.query = base2.query;
                }
              } else {
                if (relative.path.charAt(0) === "/") {
                  target.path = removeDotSegments(relative.path);
                } else {
                  if ((base2.userinfo !== void 0 || base2.host !== void 0 || base2.port !== void 0) && !base2.path) {
                    target.path = "/" + relative.path;
                  } else if (!base2.path) {
                    target.path = relative.path;
                  } else {
                    target.path = base2.path.slice(0, base2.path.lastIndexOf("/") + 1) + relative.path;
                  }
                  target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
              }
              target.userinfo = base2.userinfo;
              target.host = base2.host;
              target.port = base2.port;
            }
            target.scheme = base2.scheme;
          }
          target.fragment = relative.fragment;
          return target;
        }
        __name(resolveComponents, "resolveComponents");
        function resolve(baseURI, relativeURI, options) {
          var schemelessOptions = assign({ scheme: "null" }, options);
          return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
        }
        __name(resolve, "resolve");
        function normalize(uri, options) {
          if (typeof uri === "string") {
            uri = serialize(parse(uri, options), options);
          } else if (typeOf(uri) === "object") {
            uri = parse(serialize(uri, options), options);
          }
          return uri;
        }
        __name(normalize, "normalize");
        function equal2(uriA, uriB, options) {
          if (typeof uriA === "string") {
            uriA = serialize(parse(uriA, options), options);
          } else if (typeOf(uriA) === "object") {
            uriA = serialize(uriA, options);
          }
          if (typeof uriB === "string") {
            uriB = serialize(parse(uriB, options), options);
          } else if (typeOf(uriB) === "object") {
            uriB = serialize(uriB, options);
          }
          return uriA === uriB;
        }
        __name(equal2, "equal");
        function escapeComponent4(str, options) {
          return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
        }
        __name(escapeComponent4, "escapeComponent");
        function unescapeComponent(str, options) {
          return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
        }
        __name(unescapeComponent, "unescapeComponent");
        var handler = {
          scheme: "http",
          domainHost: true,
          parse: /* @__PURE__ */ __name(function parse2(components, options) {
            if (!components.host) {
              components.error = components.error || "HTTP URIs must have a host.";
            }
            return components;
          }, "parse"),
          serialize: /* @__PURE__ */ __name(function serialize2(components, options) {
            var secure = String(components.scheme).toLowerCase() === "https";
            if (components.port === (secure ? 443 : 80) || components.port === "") {
              components.port = void 0;
            }
            if (!components.path) {
              components.path = "/";
            }
            return components;
          }, "serialize")
        };
        var handler$1 = {
          scheme: "https",
          domainHost: handler.domainHost,
          parse: handler.parse,
          serialize: handler.serialize
        };
        function isSecure(wsComponents) {
          return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
        }
        __name(isSecure, "isSecure");
        var handler$2 = {
          scheme: "ws",
          domainHost: true,
          parse: /* @__PURE__ */ __name(function parse2(components, options) {
            var wsComponents = components;
            wsComponents.secure = isSecure(wsComponents);
            wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
            wsComponents.path = void 0;
            wsComponents.query = void 0;
            return wsComponents;
          }, "parse"),
          serialize: /* @__PURE__ */ __name(function serialize2(wsComponents, options) {
            if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
              wsComponents.port = void 0;
            }
            if (typeof wsComponents.secure === "boolean") {
              wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
              wsComponents.secure = void 0;
            }
            if (wsComponents.resourceName) {
              var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
              wsComponents.path = path && path !== "/" ? path : void 0;
              wsComponents.query = query;
              wsComponents.resourceName = void 0;
            }
            wsComponents.fragment = void 0;
            return wsComponents;
          }, "serialize")
        };
        var handler$3 = {
          scheme: "wss",
          domainHost: handler$2.domainHost,
          parse: handler$2.parse,
          serialize: handler$2.serialize
        };
        var O4 = {};
        var isIRI = true;
        var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
        var HEXDIG$$ = "[0-9A-Fa-f]";
        var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$));
        var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
        var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
        var VCHAR$$ = merge(QTEXT$$, '[\\"\\\\]');
        var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
        var UNRESERVED = new RegExp(UNRESERVED$$, "g");
        var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
        var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
        var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
        var NOT_HFVALUE = NOT_HFNAME;
        function decodeUnreserved(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(UNRESERVED) ? str : decStr;
        }
        __name(decodeUnreserved, "decodeUnreserved");
        var handler$4 = {
          scheme: "mailto",
          parse: /* @__PURE__ */ __name(function parse$$1(components, options) {
            var mailtoComponents = components;
            var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
            mailtoComponents.path = void 0;
            if (mailtoComponents.query) {
              var unknownHeaders = false;
              var headers = {};
              var hfields = mailtoComponents.query.split("&");
              for (var x5 = 0, xl = hfields.length; x5 < xl; ++x5) {
                var hfield = hfields[x5].split("=");
                switch (hfield[0]) {
                  case "to":
                    var toAddrs = hfield[1].split(",");
                    for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                      to.push(toAddrs[_x]);
                    }
                    break;
                  case "subject":
                    mailtoComponents.subject = unescapeComponent(hfield[1], options);
                    break;
                  case "body":
                    mailtoComponents.body = unescapeComponent(hfield[1], options);
                    break;
                  default:
                    unknownHeaders = true;
                    headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                    break;
                }
              }
              if (unknownHeaders)
                mailtoComponents.headers = headers;
            }
            mailtoComponents.query = void 0;
            for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
              var addr = to[_x2].split("@");
              addr[0] = unescapeComponent(addr[0]);
              if (!options.unicodeSupport) {
                try {
                  addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                } catch (e3) {
                  mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e3;
                }
              } else {
                addr[1] = unescapeComponent(addr[1], options).toLowerCase();
              }
              to[_x2] = addr.join("@");
            }
            return mailtoComponents;
          }, "parse$$1"),
          serialize: /* @__PURE__ */ __name(function serialize$$1(mailtoComponents, options) {
            var components = mailtoComponents;
            var to = toArray(mailtoComponents.to);
            if (to) {
              for (var x5 = 0, xl = to.length; x5 < xl; ++x5) {
                var toAddr = String(to[x5]);
                var atIdx = toAddr.lastIndexOf("@");
                var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                var domain = toAddr.slice(atIdx + 1);
                try {
                  domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                } catch (e3) {
                  components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e3;
                }
                to[x5] = localPart + "@" + domain;
              }
              components.path = to.join(",");
            }
            var headers = mailtoComponents.headers = mailtoComponents.headers || {};
            if (mailtoComponents.subject)
              headers["subject"] = mailtoComponents.subject;
            if (mailtoComponents.body)
              headers["body"] = mailtoComponents.body;
            var fields = [];
            for (var name in headers) {
              if (headers[name] !== O4[name]) {
                fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
              }
            }
            if (fields.length) {
              components.query = fields.join("&");
            }
            return components;
          }, "serialize$$1")
        };
        var URN_PARSE = /^([^\:]+)\:(.*)/;
        var handler$5 = {
          scheme: "urn",
          parse: /* @__PURE__ */ __name(function parse$$1(components, options) {
            var matches = components.path && components.path.match(URN_PARSE);
            var urnComponents = components;
            if (matches) {
              var scheme = options.scheme || urnComponents.scheme || "urn";
              var nid = matches[1].toLowerCase();
              var nss = matches[2];
              var urnScheme = scheme + ":" + (options.nid || nid);
              var schemeHandler = SCHEMES[urnScheme];
              urnComponents.nid = nid;
              urnComponents.nss = nss;
              urnComponents.path = void 0;
              if (schemeHandler) {
                urnComponents = schemeHandler.parse(urnComponents, options);
              }
            } else {
              urnComponents.error = urnComponents.error || "URN can not be parsed.";
            }
            return urnComponents;
          }, "parse$$1"),
          serialize: /* @__PURE__ */ __name(function serialize$$1(urnComponents, options) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = urnComponents.nid;
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            if (schemeHandler) {
              urnComponents = schemeHandler.serialize(urnComponents, options);
            }
            var uriComponents = urnComponents;
            var nss = urnComponents.nss;
            uriComponents.path = (nid || options.nid) + ":" + nss;
            return uriComponents;
          }, "serialize$$1")
        };
        var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
        var handler$6 = {
          scheme: "urn:uuid",
          parse: /* @__PURE__ */ __name(function parse2(urnComponents, options) {
            var uuidComponents = urnComponents;
            uuidComponents.uuid = uuidComponents.nss;
            uuidComponents.nss = void 0;
            if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
              uuidComponents.error = uuidComponents.error || "UUID is not valid.";
            }
            return uuidComponents;
          }, "parse"),
          serialize: /* @__PURE__ */ __name(function serialize2(uuidComponents, options) {
            var urnComponents = uuidComponents;
            urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
            return urnComponents;
          }, "serialize")
        };
        SCHEMES[handler.scheme] = handler;
        SCHEMES[handler$1.scheme] = handler$1;
        SCHEMES[handler$2.scheme] = handler$2;
        SCHEMES[handler$3.scheme] = handler$3;
        SCHEMES[handler$4.scheme] = handler$4;
        SCHEMES[handler$5.scheme] = handler$5;
        SCHEMES[handler$6.scheme] = handler$6;
        exports2.SCHEMES = SCHEMES;
        exports2.pctEncChar = pctEncChar;
        exports2.pctDecChars = pctDecChars;
        exports2.parse = parse;
        exports2.removeDotSegments = removeDotSegments;
        exports2.serialize = serialize;
        exports2.resolveComponents = resolveComponents;
        exports2.resolve = resolve;
        exports2.normalize = normalize;
        exports2.equal = equal2;
        exports2.escapeComponent = escapeComponent4;
        exports2.unescapeComponent = unescapeComponent;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
  var require_fast_deep_equal = __commonJS({
    "../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
      "use strict";
      module.exports = /* @__PURE__ */ __name(function equal2(a4, b4) {
        if (a4 === b4)
          return true;
        if (a4 && b4 && typeof a4 == "object" && typeof b4 == "object") {
          if (a4.constructor !== b4.constructor)
            return false;
          var length, i4, keys;
          if (Array.isArray(a4)) {
            length = a4.length;
            if (length != b4.length)
              return false;
            for (i4 = length; i4-- !== 0; )
              if (!equal2(a4[i4], b4[i4]))
                return false;
            return true;
          }
          if (a4.constructor === RegExp)
            return a4.source === b4.source && a4.flags === b4.flags;
          if (a4.valueOf !== Object.prototype.valueOf)
            return a4.valueOf() === b4.valueOf();
          if (a4.toString !== Object.prototype.toString)
            return a4.toString() === b4.toString();
          keys = Object.keys(a4);
          length = keys.length;
          if (length !== Object.keys(b4).length)
            return false;
          for (i4 = length; i4-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(b4, keys[i4]))
              return false;
          for (i4 = length; i4-- !== 0; ) {
            var key = keys[i4];
            if (!equal2(a4[key], b4[key]))
              return false;
          }
          return true;
        }
        return a4 !== a4 && b4 !== b4;
      }, "equal");
    }
  });

  // cart-drawer.gift-message.tsx
  var initCartDrawerGiftMessage = /* @__PURE__ */ __name(() => {
    document.querySelectorAll("[data-cart-gift-checkbox]").forEach((checkbox, index, arr) => {
      var _a5;
      if (((_a5 = window.cartData) == null ? void 0 : _a5.attributes["This is a gift"]) === "Yes") {
        arr.forEach((element) => element.checked = true);
      }
      checkbox.addEventListener("change", (e3) => {
        var _a6;
        (_a6 = window.cartData) == null ? void 0 : _a6.note;
        arr.forEach((element) => element.checked = checkbox.checked);
      });
    });
    document.querySelectorAll("[data-cart-note-textarea]").forEach((textarea, index, arr) => {
      var _a5;
      if ((_a5 = window.cartData) == null ? void 0 : _a5.note) {
        arr.forEach((element) => {
          var _a6;
          return element.value = (_a6 = window.cartData) == null ? void 0 : _a6.note;
        });
      }
      textarea.addEventListener("input", (e3) => {
        arr.forEach((element) => element.value = textarea.value);
      });
    });
  }, "initCartDrawerGiftMessage");

  // utils.tsx
  function at(n3) {
    n3 = Math.trunc(n3) || 0;
    if (n3 < 0)
      n3 += this.length;
    if (n3 < 0 || n3 >= this.length)
      return void 0;
    return this[n3];
  }
  __name(at, "at");
  var TypedArray = Reflect.getPrototypeOf(Int8Array);
  for (const C3 of [Array, String, TypedArray]) {
    if ("prototype" in C3) {
      Object.defineProperty(C3.prototype, "at", {
        value: at,
        writable: true,
        enumerable: false,
        configurable: true
      });
    }
  }
  var easeInOutQuad = /* @__PURE__ */ __name(({ currentTime, start, change, duration }) => {
    let newCurrentTime = currentTime;
    newCurrentTime /= duration / 2;
    if (newCurrentTime < 1) {
      return change / 2 * newCurrentTime * newCurrentTime + start;
    }
    newCurrentTime -= 1;
    return -change / 2 * (newCurrentTime * (newCurrentTime - 2) - 1) + start;
  }, "easeInOutQuad");
  var scrollToY = /* @__PURE__ */ __name((duration, to, container = window, callback = () => {
  }) => {
    const start = container instanceof HTMLElement ? container.scrollTop : container.scrollY;
    const change = to - start;
    const startDate = (/* @__PURE__ */ new Date()).getTime();
    const animateScroll = /* @__PURE__ */ __name(() => {
      const currentDate = (/* @__PURE__ */ new Date()).getTime();
      const currentTime = currentDate - startDate;
      container.scrollTo(
        0,
        easeInOutQuad({
          currentTime,
          start,
          change,
          duration
        })
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        container.scrollTo(0, to);
        callback();
      }
    }, "animateScroll");
    animateScroll();
  }, "scrollToY");
  var scrollToX = /* @__PURE__ */ __name((duration, to, container = window, callback = () => {
  }) => {
    const start = container instanceof HTMLElement ? container.scrollLeft : container.scrollX;
    const change = to - start;
    const startDate = (/* @__PURE__ */ new Date()).getTime();
    const animateScroll = /* @__PURE__ */ __name(() => {
      const currentDate = (/* @__PURE__ */ new Date()).getTime();
      const currentTime = currentDate - startDate;
      container.scrollTo(
        easeInOutQuad({
          currentTime,
          start,
          change,
          duration
        }),
        0
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        container.scrollTo(to, 0);
        callback();
      }
    }, "animateScroll");
    animateScroll();
  }, "scrollToX");
  var scrollToXY = /* @__PURE__ */ __name((duration, x5, y4, container = window, callback = () => {
  }) => {
    const startX = container instanceof HTMLElement ? container.scrollLeft : container.scrollX;
    const startY = container instanceof HTMLElement ? container.scrollTop : container.scrollY;
    const changeX = x5 - startX;
    const changeY = y4 - startY;
    const startDate = Date.now();
    const animateScroll = /* @__PURE__ */ __name(() => {
      const currentDate = Date.now();
      const currentTime = currentDate - startDate;
      container.scrollTo(
        easeInOutQuad({
          currentTime,
          start: startX,
          change: changeX,
          duration
        }),
        easeInOutQuad({
          currentTime,
          start: startY,
          change: changeY,
          duration
        })
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        container.scrollTo(x5, y4);
        callback();
      }
    }, "animateScroll");
    animateScroll();
  }, "scrollToXY");
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  __name(delay, "delay");
  var debounce = /* @__PURE__ */ __name((callback, wait = 1) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(
        () => {
          callback(...args);
        },
        wait
      );
    };
  }, "debounce");
  window.trapFocusElement = null;
  window.focusEls = null;
  var selectorString = `:not(.placeholder) a[href]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) button:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) textarea:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) input[type="text"]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) input[type="radio"]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) input[type="checkbox"]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) select:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder, [tabindex="-1"]) [tabindex]:not(:where([disabled],[tabindex="-1"])`;
  var handleTrapFocusKeyboardEvents = /* @__PURE__ */ __name((e3) => {
    var _a5;
    const isTabPressed = e3.key === "Tab";
    if (!isTabPressed) {
      return;
    }
    window.focusEls = (_a5 = window.trapFocusElement) == null ? void 0 : _a5.querySelectorAll(selectorString);
    const elArr = [...window.focusEls];
    const index = elArr.findIndex((item) => item === document.activeElement);
    if (e3.shiftKey) {
      for (let nextIndex = index - 1; nextIndex >= -(elArr.length - index); nextIndex--) {
        if (isVisible(elArr.at(nextIndex))) {
          elArr.at(nextIndex).focus();
          e3.preventDefault();
          break;
        }
      }
    }
    if (!e3.shiftKey) {
      for (let i4 = index - elArr.length + 1; i4 <= elArr.length - index; i4++) {
        if (isVisible(elArr.at(i4))) {
          elArr.at(i4).focus();
          e3.preventDefault();
          break;
        }
      }
    }
  }, "handleTrapFocusKeyboardEvents");
  var trapFocus = /* @__PURE__ */ __name((element) => {
    if (window.trapFocusElement) {
      window.trapFocusElement.removeEventListener("keydown", handleTrapFocusKeyboardEvents);
    }
    window.trapFocusElement = element;
    window.trapFocusElement.addEventListener("keydown", handleTrapFocusKeyboardEvents);
  }, "trapFocus");
  var isVisible = /* @__PURE__ */ __name((elem, isParent = false) => {
    if (!(elem instanceof Element)) {
      return false;
    }
    const style = getComputedStyle(elem);
    if (style.display === "none")
      return false;
    if (!isParent && style.pointerEvents === "none")
      return false;
    if (style.visibility !== "visible")
      return false;
    if (+style.opacity < 0.1)
      return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height + elem.getBoundingClientRect().width === 0) {
      return false;
    }
    if (elem.parentElement) {
      return isVisible(elem.parentElement, true);
    }
    return true;
  }, "isVisible");
  var formatMoney = /* @__PURE__ */ __name((cents, money_format) => {
    function n3(t4, e3) {
      return void 0 === t4 ? e3 : t4;
    }
    __name(n3, "n");
    function o5(t4, e3, o6, i5) {
      if (e3 = n3(e3, 2), o6 = n3(o6, ","), i5 = n3(i5, "."), isNaN(t4) || null === t4)
        return 0;
      const r6 = (t4 = (t4 / 100).toFixed(e3)).split(".");
      return r6[0].replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, `$1${o6}`) + (r6[1] ? i5 + r6[1] : "");
    }
    __name(o5, "o");
    "string" === typeof cents && (cents = cents.replace(".", ""));
    let i4 = "";
    const r5 = /{{\s*(\w+)\s*}}/;
    const a4 = money_format || window.shop.money_format || `\${{amount}}`;
    switch (a4.match(r5)[1]) {
      case "amount":
        i4 = o5(cents, 2);
        break;
      case "amount_no_decimals":
        i4 = o5(cents, 0);
        break;
      case "amount_with_comma_separator":
        i4 = o5(cents, 2, ".", ",");
        break;
      case "amount_with_space_separator":
        i4 = o5(cents, 2, " ", ",");
        break;
      case "amount_with_period_and_space_separator":
        i4 = o5(cents, 2, " ", ".");
        break;
      case "amount_no_decimals_with_comma_separator":
        i4 = o5(cents, 0, ".", ",");
        break;
      case "amount_no_decimals_with_space_separator":
        i4 = o5(cents, 0, " ");
        break;
      case "amount_with_apostrophe_separator":
        i4 = o5(cents, 2, "'", ".");
    }
    return a4.replace(r5, i4);
  }, "formatMoney");
  window["formatMoney"] = formatMoney;
  var toKebabCase = /* @__PURE__ */ __name((str) => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x5) => x5.toLowerCase()).join("-"), "toKebabCase");
  function isObject(x5) {
    return x5 !== null && typeof x5 === "object";
  }
  __name(isObject, "isObject");
  var capitalize = /* @__PURE__ */ __name((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }, "capitalize");
  var JSONParse = /* @__PURE__ */ __name((object, origin = "") => {
    try {
      return JSON.parse(object);
    } catch (err) {
      return null;
    }
  }, "JSONParse");
  var serializeFormWithGroups = /* @__PURE__ */ __name((formElement) => {
    const obj = {};
    const formData = new FormData(formElement);
    for (const key of formData.keys()) {
      obj[key] = formData.getAll(key);
    }
    return obj;
  }, "serializeFormWithGroups");
  var serializeForm = /* @__PURE__ */ __name((formElement) => {
    const obj = {};
    const formData = new FormData(formElement);
    for (const key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return obj;
  }, "serializeForm");
  var shortUUID = /* @__PURE__ */ __name(() => {
    let firstPart = Math.random() * 46656 | 0;
    let secondPart = Math.random() * 46656 | 0;
    firstPart = `000${firstPart.toString(36)}`.slice(-3);
    secondPart = `000${secondPart.toString(36)}`.slice(-3);
    return firstPart + secondPart;
  }, "shortUUID");
  function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    const body = document.body;
    const docEl = document.documentElement;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;
    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
  }
  __name(getCoords, "getCoords");

  // product-add-to-cart-bar-links.tsx
  var initProductAddToCartBarLinks = /* @__PURE__ */ __name(() => {
    const targets = [];
    document.querySelectorAll("[data-product-add-to-cart-bar-link]").forEach((linkElement) => {
      var _a5, _b5, _c, _d;
      const id = (_d = (_c = (_b5 = (_a5 = linkElement.href) == null ? void 0 : _a5.split("#")) == null ? void 0 : _b5.at(1)) == null ? void 0 : _c.split(/[?&]/)) == null ? void 0 : _d.at(0);
      const target = document.getElementById(id);
      targets.push(target);
    });
    document.querySelectorAll("[data-product-add-to-cart-bar-link]").forEach((linkElement) => {
      var _a5, _b5, _c, _d;
      const id = (_d = (_c = (_b5 = (_a5 = linkElement.href) == null ? void 0 : _a5.split("#")) == null ? void 0 : _b5.at(1)) == null ? void 0 : _c.split(/[?&]/)) == null ? void 0 : _d.at(0);
      const target = document.getElementById(id);
      if (!target || !id)
        return;
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries, observer2) => __async(void 0, null, function* () {
            for (let i4 = 0; i4 < entries.length; i4++) {
              const entry = entries[i4];
              if (entry.target !== target)
                return;
              const activeTarget = targets.find((t4) => {
                if (t4) {
                  const { top, bottom } = t4.getBoundingClientRect();
                  return top < window.innerHeight && bottom > 200;
                }
                return false;
              });
              targets == null ? void 0 : targets.forEach((target2) => {
                const link = document.querySelector(
                  `[data-product-add-to-cart-bar-link][href*="#${target2 == null ? void 0 : target2.id}"]`
                );
                if (!link)
                  return;
                if (activeTarget === target2) {
                  link.classList.add("active");
                  return;
                }
                link.classList.remove("active");
              });
            }
          }),
          {
            rootMargin: "0px",
            threshold: 0.1
          }
        );
        observer.observe(target);
        linkElement.addEventListener("click", (e3) => {
          e3.preventDefault();
          scrollToY(300, getCoords(target).top - 68);
        });
      }
    });
  }, "initProductAddToCartBarLinks");

  // ../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
  function r(e3) {
    var t4, f4, n3 = "";
    if ("string" == typeof e3 || "number" == typeof e3)
      n3 += e3;
    else if ("object" == typeof e3)
      if (Array.isArray(e3))
        for (t4 = 0; t4 < e3.length; t4++)
          e3[t4] && (f4 = r(e3[t4])) && (n3 && (n3 += " "), n3 += f4);
      else
        for (t4 in e3)
          e3[t4] && (n3 && (n3 += " "), n3 += t4);
    return n3;
  }
  __name(r, "r");
  function clsx() {
    for (var e3, t4, f4 = 0, n3 = ""; f4 < arguments.length; )
      (e3 = arguments[f4++]) && (t4 = r(e3)) && (n3 && (n3 += " "), n3 += t4);
    return n3;
  }
  __name(clsx, "clsx");
  var clsx_m_default = clsx;

  // accordion.tsx
  init_preact_module();
  init_compat_module();

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var _3 = 0;
  function o3(o5, e3, n3, t4, f4, l4) {
    var s4, u4, a4 = {};
    for (u4 in e3)
      "ref" == u4 ? s4 = e3[u4] : a4[u4] = e3[u4];
    var i4 = { type: o5, props: a4, key: n3, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f4, __self: l4 };
    if ("function" == typeof o5 && (s4 = o5.defaultProps))
      for (u4 in s4)
        void 0 === a4[u4] && (a4[u4] = s4[u4]);
    return l.vnode && l.vnode(i4), i4;
  }
  __name(o3, "o");

  // accordion.tsx
  var Accordion = /* @__PURE__ */ __name(({ title, content, blockId, initOpen = false }) => {
    const [open, setOpen] = h2(false);
    const [maxHeight, setMaxHeight] = h2(0);
    const heightElementRef = _2(null);
    const timeoutRef = _2(null);
    const contentRef = _2(content);
    const titleRef = _2(title);
    const handleClick = T2((e3) => {
      e3.preventDefault();
      setMaxHeight(open ? 0 : heightElementRef.current.scrollHeight || 9999);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (!open) {
        setOpen(true);
      }
      if (open) {
        timeoutRef.current = setTimeout(
          () => {
            setOpen(false);
          },
          220
        );
      }
      setTimeout(
        () => {
          setMaxHeight(open ? 0 : heightElementRef.current.scrollHeight || 9999);
        },
        20
      );
    }, [open]);
    const handleShopifyBlockSelect = T2((e3) => {
      var _a5;
      if (((_a5 = e3 == null ? void 0 : e3.detail) == null ? void 0 : _a5.blockId) === blockId) {
        setMaxHeight(heightElementRef.current.scrollHeight || 9999);
        setOpen(true);
      }
    }, [blockId]);
    const handleShopifyBlockDeselect = T2((e3) => {
      var _a5;
      if (((_a5 = e3 == null ? void 0 : e3.detail) == null ? void 0 : _a5.blockId) === blockId) {
        setMaxHeight(0);
        timeoutRef.current = setTimeout(
          () => {
            setOpen(false);
          },
          155
        );
      }
    }, [blockId]);
    p2(() => {
      if (blockId) {
        document.addEventListener("shopify:block:select", handleShopifyBlockSelect);
        document.addEventListener("shopify:block:deselect", handleShopifyBlockDeselect);
        return () => {
          document.removeEventListener("shopify:block:select", handleShopifyBlockSelect);
          document.removeEventListener("shopify:block:deselect", handleShopifyBlockDeselect);
        };
      }
      return () => {
      };
    }, [blockId, handleShopifyBlockDeselect, handleShopifyBlockSelect]);
    p2(() => {
      if (initOpen) {
        setOpen((current) => {
          if (!current) {
            setMaxHeight(!initOpen ? 0 : heightElementRef.current.scrollHeight || 9999);
            return initOpen;
          }
          return current;
        });
      }
    }, [initOpen]);
    p2(() => {
      if (title !== titleRef.current || content !== contentRef.current) {
        setMaxHeight(!initOpen ? 0 : heightElementRef.current.scrollHeight || 9999);
        setOpen(initOpen);
        titleRef.current = title;
        contentRef.current = content;
      }
    }, [content, initOpen, title]);
    return o3("details", { className: "group flex appearance-none", open, children: [
      o3("summary", { className: "cursor-pointer select-none py-2.5", onClick: handleClick, tabIndex: 0, children: o3("span", { className: "flex items-center justify-between", children: [
        o3("h2", { className: "text-sm font-semibold", dangerouslySetInnerHTML: { __html: title } }),
        o3("div", { className: "relative flex h-2.5 w-2.5 items-center justify-center ", children: [
          o3(
            "div",
            {
              className: clsx_m_default(
                "absolute h-0.5 w-2.5 rounded-full bg-current transition-all duration-200",
                maxHeight ? "rotate-0" : "-rotate-180"
              )
            }
          ),
          o3(
            "div",
            {
              className: clsx_m_default(
                "absolute h-0.5 w-2.5 origin-center rounded-full bg-current transition-all",
                maxHeight ? "rotate-0" : "-rotate-90"
              )
            }
          )
        ] })
      ] }) }),
      o3(
        "div",
        {
          className: "overflow-hidden transition-all duration-150 ease-linear",
          style: {
            maxHeight: `${maxHeight > 0 ? Math.max(heightElementRef.current.scrollHeight || 9999, maxHeight + 60) : 0}px`
          },
          ref: heightElementRef,
          children: o3(
            "div",
            {
              className: "prose prose-sm prose-theme max-w-none pb-2 [&_>_*]:max-w-none",
              dangerouslySetInnerHTML: { __html: content }
            }
          )
        }
      )
    ] });
  }, "Accordion");
  var initCollapsible = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-collapsible]").forEach((item) => {
      const blockId = item.dataset.blockId;
      const title = item.querySelector("[data-collapsible-title]").innerHTML;
      const content = item.querySelector("[data-collapsible-content]").innerHTML;
      B(
        o3(Accordion, { title, content, blockId, initOpen: !!item.open }),
        item.parentElement
      );
    });
    const MutationObserver2 = window.MutationObserver || window["WebKitMutationObserver"];
    const mutationObserver = new MutationObserver2((e3) => {
      e3 == null ? void 0 : e3.forEach(
        (record) => record.addedNodes.forEach((node) => __async(void 0, null, function* () {
          var _a5;
          if ((_a5 = node == null ? void 0 : node.dataset) == null ? void 0 : _a5.collapsible) {
            const item = node;
            const title = item.querySelector("[data-collapsible-title]").innerHTML;
            const content = item.querySelector("[data-collapsible-content]").innerHTML;
            B(
              o3(Accordion, { title, content, initOpen: !!item.open }),
              item.parentElement
            );
          }
        }))
      );
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }), "initCollapsible");

  // cart.tsx
  var cart = {
    open: () => __async(void 0, null, function* () {
      const data = yield (yield fetch("/cart.js")).json();
      const cartEvent = new CustomEvent("cart:update", { detail: data });
      document.dispatchEvent(cartEvent);
      window.cartData = data;
      document.dispatchEvent(new CustomEvent("cart:open"));
      return data;
    }),
    get: () => __async(void 0, null, function* () {
      const data = yield (yield fetch("/cart.js")).json();
      window.cartData = data;
      const cartEvent = new CustomEvent("cart:update", { detail: data });
      document.dispatchEvent(cartEvent);
      return data;
    }),
    add: (cartItems, open = false) => __async(void 0, null, function* () {
      var _a5;
      const data = yield (yield fetch("/cart/add.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItems)
      })).json();
      window.lastCartItems = data == null ? void 0 : data.items;
      document.dispatchEvent(new CustomEvent("cart:add", { detail: data }));
      if (open) {
        document.querySelectorAll("[data-drawer]").forEach((otherRoot) => {
          if (otherRoot.classList.contains("active")) {
            const otherName = otherRoot.dataset.drawer;
            otherRoot.classList.add("hidden");
            document.dispatchEvent(new Event(`${otherName}:close`));
          }
        });
        const addedCartItems = document.querySelector('[data-drawer="cart-added-modal"]');
        (_a5 = addedCartItems == null ? void 0 : addedCartItems.classList) == null ? void 0 : _a5.remove("hidden");
        setTimeout(
          () => {
            var _a6;
            (_a6 = addedCartItems == null ? void 0 : addedCartItems.classList) == null ? void 0 : _a6.add("active");
          },
          50
        );
        yield cart.open();
        return data;
      }
      cart.get();
      return data;
    }),
    update: (updates) => __async(void 0, null, function* () {
      const data = yield (yield fetch("/cart/update.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
      })).json();
      window.cartData = data;
      const cartEvent = new CustomEvent("cart:update", { detail: data });
      document.dispatchEvent(cartEvent);
      cart.get();
      return data;
    }),
    change: (cartItem) => __async(void 0, null, function* () {
      const data = yield (yield fetch("/cart/change.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })).json();
      cart.get();
      window.cartData = data;
      const cartEvent = new CustomEvent("cart:change", { detail: data });
      document.dispatchEvent(cartEvent);
      return data;
    }),
    clear: () => __async(void 0, null, function* () {
      const data = yield (yield fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })).json();
      cart.get();
      window.cartData = data;
      const cartEvent = new CustomEvent("cart:clear", { detail: data });
      document.dispatchEvent(cartEvent);
      return data;
    })
  };
  window["cart"] = cart;

  // account-orders.tsx
  var initAccountOrders = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-order-link]").forEach((link) => {
      const href = link.dataset.orderLink;
      link.addEventListener("click", () => {
        window.location.href = href;
      });
    });
    document.querySelectorAll("[data-order-reorder]").forEach((reorderButton) => {
      const lineItems = JSON.parse(
        reorderButton.querySelector(`script[type="application/json"]`).innerText
      );
      reorderButton.addEventListener("click", (e3) => __async(void 0, null, function* () {
        var _a5, _b5;
        e3.preventDefault();
        e3.stopPropagation();
        reorderButton.classList.add("active");
        const cartItems = yield cart.add({ items: lineItems });
        if ((_a5 = cartItems == null ? void 0 : cartItems.items) == null ? void 0 : _a5.length) {
          yield delay(800);
          cart.open();
        }
        if ((lineItems == null ? void 0 : lineItems.length) > 1) {
          const successItems = [];
          for (let i4 = 0; i4 < (lineItems == null ? void 0 : lineItems.length); i4++) {
            successItems == null ? void 0 : successItems.push(yield cart.add({ items: [lineItems[i4]] }));
          }
          if (successItems == null ? void 0 : successItems.some((item) => {
            var _a6;
            return (_a6 = item.items) == null ? void 0 : _a6.length;
          })) {
            yield delay(800);
            cart.open();
          } else {
            alert((_b5 = successItems == null ? void 0 : successItems.find((item) => {
              var _a6;
              return !((_a6 = item.items) == null ? void 0 : _a6.length);
            })) == null ? void 0 : _b5.description);
          }
        }
        reorderButton.classList.remove("active");
      }));
    });
  }), "initAccountOrders");

  // animation-slide.tsx
  var initAnimationSlide = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    window.addEventListener("resize", handleResize);
    handleResize();
  }), "initAnimationSlide");
  var handleResize = /* @__PURE__ */ __name(() => {
    var _a5;
    const containerWidth = (_a5 = document.querySelector("[data-animation-slide-width]")) == null ? void 0 : _a5.clientWidth;
    const slideContainer = document.querySelector("[data-animation-slide-container]");
    document.querySelectorAll("[data-animation-slide]").forEach((slide) => {
      const content = [...slide.querySelectorAll("[data-animation-slide-content]")];
      if ((content == null ? void 0 : content[0]) && (content == null ? void 0 : content[0].clientWidth) > containerWidth && content.length === 1) {
        slide.classList.add("animate-slide");
        const duplicateContent = content == null ? void 0 : content[0].cloneNode(true);
        slide.appendChild(duplicateContent);
        slideContainer.style.alignItems = "unset";
        slideContainer.style.justifyContent = "unset";
        slideContainer.style.flexDirection = "row";
      }
      if ((content == null ? void 0 : content[0]) && (content == null ? void 0 : content[0].clientWidth) <= containerWidth && content.length > 1) {
        slide.classList.remove("animate-slide");
        slide.removeChild(content == null ? void 0 : content[1]);
        slideContainer.style.alignItems = "";
        slideContainer.style.justifyContent = "";
        slideContainer.style.flexDirection = "";
      }
    });
  }, "handleResize");

  // global-stores.tsx
  var import_localforage = __toESM(require_localforage());

  // ../node_modules/.pnpm/zustand@4.3.7_@preact+compat@17.1.2_immer@9.0.21/node_modules/zustand/esm/vanilla.mjs
  var import_meta = {};
  var createStoreImpl = /* @__PURE__ */ __name((createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = /* @__PURE__ */ __name((partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    }, "setState");
    const getState = /* @__PURE__ */ __name(() => state, "getState");
    const subscribe = /* @__PURE__ */ __name((listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }, "subscribe");
    const destroy = /* @__PURE__ */ __name(() => {
      if ((import_meta.env && import_meta.env.MODE) !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
        );
      }
      listeners.clear();
    }, "destroy");
    const api = { setState, getState, subscribe, destroy };
    state = createState(setState, getState, api);
    return api;
  }, "createStoreImpl");
  var createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");
  var vanilla = /* @__PURE__ */ __name((createState) => {
    if ((import_meta.env && import_meta.env.MODE) !== "production") {
      console.warn(
        "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
      );
    }
    return createStore(createState);
  }, "vanilla");

  // ../node_modules/.pnpm/zustand@4.3.7_@preact+compat@17.1.2_immer@9.0.21/node_modules/zustand/esm/index.mjs
  init_compat();
  var import_with_selector = __toESM(require_with_selector(), 1);
  var import_meta2 = {};
  var { useSyncExternalStoreWithSelector } = import_with_selector.default;
  function useStore(api, selector = api.getState, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getState,
      selector,
      equalityFn
    );
    x2(slice);
    return slice;
  }
  __name(useStore, "useStore");
  var createImpl = /* @__PURE__ */ __name((createState) => {
    if ((import_meta2.env && import_meta2.env.MODE) !== "production" && typeof createState !== "function") {
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    }
    const api = typeof createState === "function" ? createStore(createState) : createState;
    const useBoundStore = /* @__PURE__ */ __name((selector, equalityFn) => useStore(api, selector, equalityFn), "useBoundStore");
    Object.assign(useBoundStore, api);
    return useBoundStore;
  }, "createImpl");
  var create = /* @__PURE__ */ __name((createState) => createState ? createImpl(createState) : createImpl, "create");

  // ../node_modules/.pnpm/zustand@4.3.7_@preact+compat@17.1.2_immer@9.0.21/node_modules/zustand/esm/middleware.mjs
  var import_meta3 = {};
  function createJSONStorage(getStorage) {
    let storage;
    try {
      storage = getStorage();
    } catch (e3) {
      return;
    }
    const persistStorage = {
      getItem: (name) => {
        var _a5;
        const parse = /* @__PURE__ */ __name((str2) => {
          if (str2 === null) {
            return null;
          }
          return JSON.parse(str2);
        }, "parse");
        const str = (_a5 = storage.getItem(name)) != null ? _a5 : null;
        if (str instanceof Promise) {
          return str.then(parse);
        }
        return parse(str);
      },
      setItem: (name, newValue) => storage.setItem(name, JSON.stringify(newValue)),
      removeItem: (name) => storage.removeItem(name)
    };
    return persistStorage;
  }
  __name(createJSONStorage, "createJSONStorage");
  var toThenable = /* @__PURE__ */ __name((fn3) => (input) => {
    try {
      const result = fn3(input);
      if (result instanceof Promise) {
        return result;
      }
      return {
        then(onFulfilled) {
          return toThenable(onFulfilled)(result);
        },
        catch(_onRejected) {
          return this;
        }
      };
    } catch (e3) {
      return {
        then(_onFulfilled) {
          return this;
        },
        catch(onRejected) {
          return toThenable(onRejected)(e3);
        }
      };
    }
  }, "toThenable");
  var oldImpl = /* @__PURE__ */ __name((config, baseOptions) => (set, get, api) => {
    let options = {
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: (state) => state,
      version: 0,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState
      }),
      ...baseOptions
    };
    let hasHydrated = false;
    const hydrationListeners = /* @__PURE__ */ new Set();
    const finishHydrationListeners = /* @__PURE__ */ new Set();
    let storage;
    try {
      storage = options.getStorage();
    } catch (e3) {
    }
    if (!storage) {
      return config(
        (...args) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
          );
          set(...args);
        },
        get,
        api
      );
    }
    const thenableSerialize = toThenable(options.serialize);
    const setItem = /* @__PURE__ */ __name(() => {
      const state = options.partialize({ ...get() });
      let errorInSync;
      const thenable = thenableSerialize({ state, version: options.version }).then(
        (serializedValue) => storage.setItem(options.name, serializedValue)
      ).catch((e3) => {
        errorInSync = e3;
      });
      if (errorInSync) {
        throw errorInSync;
      }
      return thenable;
    }, "setItem");
    const savedSetState = api.setState;
    api.setState = (state, replace) => {
      savedSetState(state, replace);
      void setItem();
    };
    const configResult = config(
      (...args) => {
        set(...args);
        void setItem();
      },
      get,
      api
    );
    let stateFromStorage;
    const hydrate = /* @__PURE__ */ __name(() => {
      var _a5;
      if (!storage)
        return;
      hasHydrated = false;
      hydrationListeners.forEach((cb) => cb(get()));
      const postRehydrationCallback = ((_a5 = options.onRehydrateStorage) == null ? void 0 : _a5.call(options, get())) || void 0;
      return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
        if (storageValue) {
          return options.deserialize(storageValue);
        }
      }).then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              );
            }
            console.error(
              `State loaded from storage couldn't be migrated since no migrate function was provided`
            );
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then((migratedState) => {
        var _a22;
        stateFromStorage = options.merge(
          migratedState,
          (_a22 = get()) != null ? _a22 : configResult
        );
        set(stateFromStorage, true);
        return setItem();
      }).then(() => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
        hasHydrated = true;
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
      }).catch((e3) => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e3);
      });
    }, "hydrate");
    api.persist = {
      setOptions: (newOptions) => {
        options = {
          ...options,
          ...newOptions
        };
        if (newOptions.getStorage) {
          storage = newOptions.getStorage();
        }
      },
      clearStorage: () => {
        storage == null ? void 0 : storage.removeItem(options.name);
      },
      getOptions: () => options,
      rehydrate: () => hydrate(),
      hasHydrated: () => hasHydrated,
      onHydrate: (cb) => {
        hydrationListeners.add(cb);
        return () => {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: (cb) => {
        finishHydrationListeners.add(cb);
        return () => {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    hydrate();
    return stateFromStorage || configResult;
  }, "oldImpl");
  var newImpl = /* @__PURE__ */ __name((config, baseOptions) => (set, get, api) => {
    let options = {
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => state,
      version: 0,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState
      }),
      ...baseOptions
    };
    let hasHydrated = false;
    const hydrationListeners = /* @__PURE__ */ new Set();
    const finishHydrationListeners = /* @__PURE__ */ new Set();
    let storage = options.storage;
    if (!storage) {
      return config(
        (...args) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
          );
          set(...args);
        },
        get,
        api
      );
    }
    const setItem = /* @__PURE__ */ __name(() => {
      const state = options.partialize({ ...get() });
      return storage.setItem(options.name, {
        state,
        version: options.version
      });
    }, "setItem");
    const savedSetState = api.setState;
    api.setState = (state, replace) => {
      savedSetState(state, replace);
      void setItem();
    };
    const configResult = config(
      (...args) => {
        set(...args);
        void setItem();
      },
      get,
      api
    );
    let stateFromStorage;
    const hydrate = /* @__PURE__ */ __name(() => {
      var _a5, _b5;
      if (!storage)
        return;
      hasHydrated = false;
      hydrationListeners.forEach((cb) => {
        var _a22;
        return cb((_a22 = get()) != null ? _a22 : configResult);
      });
      const postRehydrationCallback = ((_b5 = options.onRehydrateStorage) == null ? void 0 : _b5.call(options, (_a5 = get()) != null ? _a5 : configResult)) || void 0;
      return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              );
            }
            console.error(
              `State loaded from storage couldn't be migrated since no migrate function was provided`
            );
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then((migratedState) => {
        var _a22;
        stateFromStorage = options.merge(
          migratedState,
          (_a22 = get()) != null ? _a22 : configResult
        );
        set(stateFromStorage, true);
        return setItem();
      }).then(() => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
        stateFromStorage = get();
        hasHydrated = true;
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
      }).catch((e3) => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e3);
      });
    }, "hydrate");
    api.persist = {
      setOptions: (newOptions) => {
        options = {
          ...options,
          ...newOptions
        };
        if (newOptions.storage) {
          storage = newOptions.storage;
        }
      },
      clearStorage: () => {
        storage == null ? void 0 : storage.removeItem(options.name);
      },
      getOptions: () => options,
      rehydrate: () => hydrate(),
      hasHydrated: () => hasHydrated,
      onHydrate: (cb) => {
        hydrationListeners.add(cb);
        return () => {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: (cb) => {
        finishHydrationListeners.add(cb);
        return () => {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    if (!options.skipHydration) {
      hydrate();
    }
    return stateFromStorage || configResult;
  }, "newImpl");
  var persistImpl = /* @__PURE__ */ __name((config, baseOptions) => {
    if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
      if ((import_meta3.env && import_meta3.env.MODE) !== "production") {
        console.warn(
          "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
        );
      }
      return oldImpl(config, baseOptions);
    }
    return newImpl(config, baseOptions);
  }, "persistImpl");
  var persist = persistImpl;

  // ../node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/immer.esm.mjs
  function n2(n3) {
    for (var r5 = arguments.length, t4 = Array(r5 > 1 ? r5 - 1 : 0), e3 = 1; e3 < r5; e3++)
      t4[e3 - 1] = arguments[e3];
    if (true) {
      var i4 = Y2[n3], o5 = i4 ? "function" == typeof i4 ? i4.apply(null, t4) : i4 : "unknown error nr: " + n3;
      throw Error("[Immer] " + o5);
    }
    throw Error("[Immer] minified error nr: " + n3 + (t4.length ? " " + t4.map(function(n4) {
      return "'" + n4 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  __name(n2, "n");
  function r4(n3) {
    return !!n3 && !!n3[Q2];
  }
  __name(r4, "r");
  function t3(n3) {
    var r5;
    return !!n3 && (function(n4) {
      if (!n4 || "object" != typeof n4)
        return false;
      var r6 = Object.getPrototypeOf(n4);
      if (null === r6)
        return true;
      var t4 = Object.hasOwnProperty.call(r6, "constructor") && r6.constructor;
      return t4 === Object || "function" == typeof t4 && Function.toString.call(t4) === Z2;
    }(n3) || Array.isArray(n3) || !!n3[L3] || !!(null === (r5 = n3.constructor) || void 0 === r5 ? void 0 : r5[L3]) || s3(n3) || v3(n3));
  }
  __name(t3, "t");
  function i3(n3, r5, t4) {
    void 0 === t4 && (t4 = false), 0 === o4(n3) ? (t4 ? Object.keys : nn2)(n3).forEach(function(e3) {
      t4 && "symbol" == typeof e3 || r5(e3, n3[e3], n3);
    }) : n3.forEach(function(t5, e3) {
      return r5(e3, t5, n3);
    });
  }
  __name(i3, "i");
  function o4(n3) {
    var r5 = n3[Q2];
    return r5 ? r5.i > 3 ? r5.i - 4 : r5.i : Array.isArray(n3) ? 1 : s3(n3) ? 2 : v3(n3) ? 3 : 0;
  }
  __name(o4, "o");
  function u3(n3, r5) {
    return 2 === o4(n3) ? n3.has(r5) : Object.prototype.hasOwnProperty.call(n3, r5);
  }
  __name(u3, "u");
  function a3(n3, r5) {
    return 2 === o4(n3) ? n3.get(r5) : n3[r5];
  }
  __name(a3, "a");
  function f3(n3, r5, t4) {
    var e3 = o4(n3);
    2 === e3 ? n3.set(r5, t4) : 3 === e3 ? n3.add(t4) : n3[r5] = t4;
  }
  __name(f3, "f");
  function c3(n3, r5) {
    return n3 === r5 ? 0 !== n3 || 1 / n3 == 1 / r5 : n3 != n3 && r5 != r5;
  }
  __name(c3, "c");
  function s3(n3) {
    return X2 && n3 instanceof Map;
  }
  __name(s3, "s");
  function v3(n3) {
    return q4 && n3 instanceof Set;
  }
  __name(v3, "v");
  function p3(n3) {
    return n3.o || n3.t;
  }
  __name(p3, "p");
  function l3(n3) {
    if (Array.isArray(n3))
      return Array.prototype.slice.call(n3);
    var r5 = rn2(n3);
    delete r5[Q2];
    for (var t4 = nn2(r5), e3 = 0; e3 < t4.length; e3++) {
      var i4 = t4[e3], o5 = r5[i4];
      false === o5.writable && (o5.writable = true, o5.configurable = true), (o5.get || o5.set) && (r5[i4] = { configurable: true, writable: true, enumerable: o5.enumerable, value: n3[i4] });
    }
    return Object.create(Object.getPrototypeOf(n3), r5);
  }
  __name(l3, "l");
  function d3(n3, e3) {
    return void 0 === e3 && (e3 = false), y3(n3) || r4(n3) || !t3(n3) || (o4(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = h3), Object.freeze(n3), e3 && i3(n3, function(n4, r5) {
      return d3(r5, true);
    }, true)), n3;
  }
  __name(d3, "d");
  function h3() {
    n2(2);
  }
  __name(h3, "h");
  function y3(n3) {
    return null == n3 || "object" != typeof n3 || Object.isFrozen(n3);
  }
  __name(y3, "y");
  function b3(r5) {
    var t4 = tn2[r5];
    return t4 || n2(18, r5), t4;
  }
  __name(b3, "b");
  function _4() {
    return U2 || n2(0), U2;
  }
  __name(_4, "_");
  function j4(n3, r5) {
    r5 && (b3("Patches"), n3.u = [], n3.s = [], n3.v = r5);
  }
  __name(j4, "j");
  function g4(n3) {
    O3(n3), n3.p.forEach(S2), n3.p = null;
  }
  __name(g4, "g");
  function O3(n3) {
    n3 === U2 && (U2 = n3.l);
  }
  __name(O3, "O");
  function w4(n3) {
    return U2 = { p: [], l: U2, h: n3, m: true, _: 0 };
  }
  __name(w4, "w");
  function S2(n3) {
    var r5 = n3[Q2];
    0 === r5.i || 1 === r5.i ? r5.j() : r5.g = true;
  }
  __name(S2, "S");
  function P4(r5, e3) {
    e3._ = e3.p.length;
    var i4 = e3.p[0], o5 = void 0 !== r5 && r5 !== i4;
    return e3.h.O || b3("ES5").S(e3, r5, o5), o5 ? (i4[Q2].P && (g4(e3), n2(4)), t3(r5) && (r5 = M3(e3, r5), e3.l || x4(e3, r5)), e3.u && b3("Patches").M(i4[Q2].t, r5, e3.u, e3.s)) : r5 = M3(e3, i4, []), g4(e3), e3.u && e3.v(e3.u, e3.s), r5 !== H3 ? r5 : void 0;
  }
  __name(P4, "P");
  function M3(n3, r5, t4) {
    if (y3(r5))
      return r5;
    var e3 = r5[Q2];
    if (!e3)
      return i3(r5, function(i4, o6) {
        return A4(n3, e3, r5, i4, o6, t4);
      }, true), r5;
    if (e3.A !== n3)
      return r5;
    if (!e3.P)
      return x4(n3, e3.t, true), e3.t;
    if (!e3.I) {
      e3.I = true, e3.A._--;
      var o5 = 4 === e3.i || 5 === e3.i ? e3.o = l3(e3.k) : e3.o, u4 = o5, a4 = false;
      3 === e3.i && (u4 = new Set(o5), o5.clear(), a4 = true), i3(u4, function(r6, i4) {
        return A4(n3, e3, o5, r6, i4, t4, a4);
      }), x4(n3, o5, false), t4 && n3.u && b3("Patches").N(e3, t4, n3.u, n3.s);
    }
    return e3.o;
  }
  __name(M3, "M");
  function A4(e3, i4, o5, a4, c4, s4, v4) {
    if (c4 === o5 && n2(5), r4(c4)) {
      var p4 = M3(e3, c4, s4 && i4 && 3 !== i4.i && !u3(i4.R, a4) ? s4.concat(a4) : void 0);
      if (f3(o5, a4, p4), !r4(p4))
        return;
      e3.m = false;
    } else
      v4 && o5.add(c4);
    if (t3(c4) && !y3(c4)) {
      if (!e3.h.D && e3._ < 1)
        return;
      M3(e3, c4), i4 && i4.A.l || x4(e3, c4);
    }
  }
  __name(A4, "A");
  function x4(n3, r5, t4) {
    void 0 === t4 && (t4 = false), !n3.l && n3.h.D && n3.m && d3(r5, t4);
  }
  __name(x4, "x");
  function z4(n3, r5) {
    var t4 = n3[Q2];
    return (t4 ? p3(t4) : n3)[r5];
  }
  __name(z4, "z");
  function I3(n3, r5) {
    if (r5 in n3)
      for (var t4 = Object.getPrototypeOf(n3); t4; ) {
        var e3 = Object.getOwnPropertyDescriptor(t4, r5);
        if (e3)
          return e3;
        t4 = Object.getPrototypeOf(t4);
      }
  }
  __name(I3, "I");
  function k4(n3) {
    n3.P || (n3.P = true, n3.l && k4(n3.l));
  }
  __name(k4, "k");
  function E3(n3) {
    n3.o || (n3.o = l3(n3.t));
  }
  __name(E3, "E");
  function N3(n3, r5, t4) {
    var e3 = s3(r5) ? b3("MapSet").F(r5, t4) : v3(r5) ? b3("MapSet").T(r5, t4) : n3.O ? function(n4, r6) {
      var t5 = Array.isArray(n4), e4 = { i: t5 ? 1 : 0, A: r6 ? r6.A : _4(), P: false, I: false, R: {}, l: r6, t: n4, k: null, o: null, j: null, C: false }, i4 = e4, o5 = en2;
      t5 && (i4 = [e4], o5 = on2);
      var u4 = Proxy.revocable(i4, o5), a4 = u4.revoke, f4 = u4.proxy;
      return e4.k = f4, e4.j = a4, f4;
    }(r5, t4) : b3("ES5").J(r5, t4);
    return (t4 ? t4.A : _4()).p.push(e3), e3;
  }
  __name(N3, "N");
  function R2(e3) {
    return r4(e3) || n2(22, e3), (/* @__PURE__ */ __name(function n3(r5) {
      if (!t3(r5))
        return r5;
      var e4, u4 = r5[Q2], c4 = o4(r5);
      if (u4) {
        if (!u4.P && (u4.i < 4 || !b3("ES5").K(u4)))
          return u4.t;
        u4.I = true, e4 = D3(r5, c4), u4.I = false;
      } else
        e4 = D3(r5, c4);
      return i3(e4, function(r6, t4) {
        u4 && a3(u4.t, r6) === t4 || f3(e4, r6, n3(t4));
      }), 3 === c4 ? new Set(e4) : e4;
    }, "n"))(e3);
  }
  __name(R2, "R");
  function D3(n3, r5) {
    switch (r5) {
      case 2:
        return new Map(n3);
      case 3:
        return Array.from(n3);
    }
    return l3(n3);
  }
  __name(D3, "D");
  var G2;
  var U2;
  var W2 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
  var X2 = "undefined" != typeof Map;
  var q4 = "undefined" != typeof Set;
  var B4 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
  var H3 = W2 ? Symbol.for("immer-nothing") : ((G2 = {})["immer-nothing"] = true, G2);
  var L3 = W2 ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q2 = W2 ? Symbol.for("immer-state") : "__$immer_state";
  var Y2 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n3) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n3;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n3) {
    return "Cannot apply patch, path doesn't resolve: " + n3;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(n3) {
    return "Unsupported patch operation: " + n3;
  }, 18: function(n3) {
    return "The plugin for '" + n3 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n3 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n3) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n3 + "'";
  }, 22: function(n3) {
    return "'current' expects a draft, got: " + n3;
  }, 23: function(n3) {
    return "'original' expects a draft, got: " + n3;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
  var Z2 = "" + Object.prototype.constructor;
  var nn2 = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n3) {
    return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
  } : Object.getOwnPropertyNames;
  var rn2 = Object.getOwnPropertyDescriptors || function(n3) {
    var r5 = {};
    return nn2(n3).forEach(function(t4) {
      r5[t4] = Object.getOwnPropertyDescriptor(n3, t4);
    }), r5;
  };
  var tn2 = {};
  var en2 = { get: function(n3, r5) {
    if (r5 === Q2)
      return n3;
    var e3 = p3(n3);
    if (!u3(e3, r5))
      return function(n4, r6, t4) {
        var e4, i5 = I3(r6, t4);
        return i5 ? "value" in i5 ? i5.value : null === (e4 = i5.get) || void 0 === e4 ? void 0 : e4.call(n4.k) : void 0;
      }(n3, e3, r5);
    var i4 = e3[r5];
    return n3.I || !t3(i4) ? i4 : i4 === z4(n3.t, r5) ? (E3(n3), n3.o[r5] = N3(n3.A.h, i4, n3)) : i4;
  }, has: function(n3, r5) {
    return r5 in p3(n3);
  }, ownKeys: function(n3) {
    return Reflect.ownKeys(p3(n3));
  }, set: function(n3, r5, t4) {
    var e3 = I3(p3(n3), r5);
    if (null == e3 ? void 0 : e3.set)
      return e3.set.call(n3.k, t4), true;
    if (!n3.P) {
      var i4 = z4(p3(n3), r5), o5 = null == i4 ? void 0 : i4[Q2];
      if (o5 && o5.t === t4)
        return n3.o[r5] = t4, n3.R[r5] = false, true;
      if (c3(t4, i4) && (void 0 !== t4 || u3(n3.t, r5)))
        return true;
      E3(n3), k4(n3);
    }
    return n3.o[r5] === t4 && (void 0 !== t4 || r5 in n3.o) || Number.isNaN(t4) && Number.isNaN(n3.o[r5]) || (n3.o[r5] = t4, n3.R[r5] = true), true;
  }, deleteProperty: function(n3, r5) {
    return void 0 !== z4(n3.t, r5) || r5 in n3.t ? (n3.R[r5] = false, E3(n3), k4(n3)) : delete n3.R[r5], n3.o && delete n3.o[r5], true;
  }, getOwnPropertyDescriptor: function(n3, r5) {
    var t4 = p3(n3), e3 = Reflect.getOwnPropertyDescriptor(t4, r5);
    return e3 ? { writable: true, configurable: 1 !== n3.i || "length" !== r5, enumerable: e3.enumerable, value: t4[r5] } : e3;
  }, defineProperty: function() {
    n2(11);
  }, getPrototypeOf: function(n3) {
    return Object.getPrototypeOf(n3.t);
  }, setPrototypeOf: function() {
    n2(12);
  } };
  var on2 = {};
  i3(en2, function(n3, r5) {
    on2[n3] = function() {
      return arguments[0] = arguments[0][0], r5.apply(this, arguments);
    };
  }), on2.deleteProperty = function(r5, t4) {
    return isNaN(parseInt(t4)) && n2(13), on2.set.call(this, r5, t4, void 0);
  }, on2.set = function(r5, t4, e3) {
    return "length" !== t4 && isNaN(parseInt(t4)) && n2(14), en2.set.call(this, r5[0], t4, e3, r5[0]);
  };
  var un2 = function() {
    function e3(r5) {
      var e4 = this;
      this.O = B4, this.D = true, this.produce = function(r6, i5, o5) {
        if ("function" == typeof r6 && "function" != typeof i5) {
          var u4 = i5;
          i5 = r6;
          var a4 = e4;
          return function(n3) {
            var r7 = this;
            void 0 === n3 && (n3 = u4);
            for (var t4 = arguments.length, e5 = Array(t4 > 1 ? t4 - 1 : 0), o6 = 1; o6 < t4; o6++)
              e5[o6 - 1] = arguments[o6];
            return a4.produce(n3, function(n4) {
              var t5;
              return (t5 = i5).call.apply(t5, [r7, n4].concat(e5));
            });
          };
        }
        var f4;
        if ("function" != typeof i5 && n2(6), void 0 !== o5 && "function" != typeof o5 && n2(7), t3(r6)) {
          var c4 = w4(e4), s4 = N3(e4, r6, void 0), v4 = true;
          try {
            f4 = i5(s4), v4 = false;
          } finally {
            v4 ? g4(c4) : O3(c4);
          }
          return "undefined" != typeof Promise && f4 instanceof Promise ? f4.then(function(n3) {
            return j4(c4, o5), P4(n3, c4);
          }, function(n3) {
            throw g4(c4), n3;
          }) : (j4(c4, o5), P4(f4, c4));
        }
        if (!r6 || "object" != typeof r6) {
          if (void 0 === (f4 = i5(r6)) && (f4 = r6), f4 === H3 && (f4 = void 0), e4.D && d3(f4, true), o5) {
            var p4 = [], l4 = [];
            b3("Patches").M(r6, f4, p4, l4), o5(p4, l4);
          }
          return f4;
        }
        n2(21, r6);
      }, this.produceWithPatches = function(n3, r6) {
        if ("function" == typeof n3)
          return function(r7) {
            for (var t5 = arguments.length, i6 = Array(t5 > 1 ? t5 - 1 : 0), o6 = 1; o6 < t5; o6++)
              i6[o6 - 1] = arguments[o6];
            return e4.produceWithPatches(r7, function(r8) {
              return n3.apply(void 0, [r8].concat(i6));
            });
          };
        var t4, i5, o5 = e4.produce(n3, r6, function(n4, r7) {
          t4 = n4, i5 = r7;
        });
        return "undefined" != typeof Promise && o5 instanceof Promise ? o5.then(function(n4) {
          return [n4, t4, i5];
        }) : [o5, t4, i5];
      }, "boolean" == typeof (null == r5 ? void 0 : r5.useProxies) && this.setUseProxies(r5.useProxies), "boolean" == typeof (null == r5 ? void 0 : r5.autoFreeze) && this.setAutoFreeze(r5.autoFreeze);
    }
    __name(e3, "e");
    var i4 = e3.prototype;
    return i4.createDraft = function(e4) {
      t3(e4) || n2(8), r4(e4) && (e4 = R2(e4));
      var i5 = w4(this), o5 = N3(this, e4, void 0);
      return o5[Q2].C = true, O3(i5), o5;
    }, i4.finishDraft = function(r5, t4) {
      var e4 = r5 && r5[Q2];
      e4 && e4.C || n2(9), e4.I && n2(10);
      var i5 = e4.A;
      return j4(i5, t4), P4(void 0, i5);
    }, i4.setAutoFreeze = function(n3) {
      this.D = n3;
    }, i4.setUseProxies = function(r5) {
      r5 && !B4 && n2(20), this.O = r5;
    }, i4.applyPatches = function(n3, t4) {
      var e4;
      for (e4 = t4.length - 1; e4 >= 0; e4--) {
        var i5 = t4[e4];
        if (0 === i5.path.length && "replace" === i5.op) {
          n3 = i5.value;
          break;
        }
      }
      e4 > -1 && (t4 = t4.slice(e4 + 1));
      var o5 = b3("Patches").$;
      return r4(n3) ? o5(n3, t4) : this.produce(n3, function(n4) {
        return o5(n4, t4);
      });
    }, e3;
  }();
  var an2 = new un2();
  var fn2 = an2.produce;
  var cn2 = an2.produceWithPatches.bind(an2);
  var sn2 = an2.setAutoFreeze.bind(an2);
  var vn2 = an2.setUseProxies.bind(an2);
  var pn2 = an2.applyPatches.bind(an2);
  var ln2 = an2.createDraft.bind(an2);
  var dn2 = an2.finishDraft.bind(an2);

  // ../node_modules/.pnpm/zustand@4.3.7_@preact+compat@17.1.2_immer@9.0.21/node_modules/zustand/esm/middleware/immer.mjs
  var immerImpl = /* @__PURE__ */ __name((initializer) => (set, get, store) => {
    store.setState = (updater, replace, ...a4) => {
      const nextState = typeof updater === "function" ? fn2(updater) : updater;
      return set(nextState, replace, ...a4);
    };
    return initializer(store.setState, get, store);
  }, "immerImpl");
  var immer = immerImpl;

  // global-stores.tsx
  var globalSettings = createStore((set, get) => {
    return __spreadValues({}, window.theme_settings);
  });
  var useGlobalSettings = create(globalSettings);
  var fetching = {
    current: {}
  };
  var globalProducts = createStore(
    persist(
      immer((set, get) => {
        var _a5, _b5, _c;
        return {
          hydrated: false,
          products: {},
          recentlyViewed: [],
          currentProductHandle: (_c = (_b5 = (_a5 = document.querySelector("[data-product-handle]")) == null ? void 0 : _a5.dataset) == null ? void 0 : _b5.productHandle) != null ? _c : null,
          setProduct: (product) => {
            set((state) => {
              state.products = __spreadProps(__spreadValues({}, state.products), {
                [product.handle]: __spreadProps(__spreadValues({}, product), {
                  timestamp: Date.now()
                })
              });
            });
          },
          setProducts: (products) => {
            set((state) => {
              const timestamp = Date.now();
              products.forEach((product) => {
                state.products[product.handle] = __spreadProps(__spreadValues({}, product), {
                  timestamp
                });
              });
            });
          },
          getAsyncProduct: (handle) => __async(void 0, null, function* () {
            var _a6, _b6;
            const timestamp = Date.now();
            const product = get().products[handle];
            if (product && (product == null ? void 0 : product.timestamp) && timestamp - (product == null ? void 0 : product.timestamp) < 1e3 * 60 * 15) {
              return window.transformProducts(product);
            }
            const localProduct = JSONParse(
              (_a6 = document.querySelector(`[data-product-json="${handle}"]`)) == null ? void 0 : _a6.innerHTML
            );
            if (localProduct) {
              set((state) => {
                state.products = __spreadProps(__spreadValues({}, state.products), {
                  [localProduct.handle]: __spreadProps(__spreadValues({}, localProduct), {
                    timestamp
                  })
                });
              });
              return __spreadProps(__spreadValues({}, window.transformProducts(localProduct)), {
                timestamp
              });
            }
            if (!(handle in fetching.current)) {
              fetching.current[handle] = fetch(
                `${window.Shopify.routes.root}products/${handle.replace(/\/products\//gi, "").replace(/^\//gi, "")}?sections=product-data`
              ).then((data) => data.json());
            }
            try {
              const content = __spreadValues({}, yield fetching.current[handle]);
              delete fetching.current[handle];
              const dataElement = document.createElement("div");
              dataElement.innerHTML = content["product-data"];
              const productData = JSONParse(
                (_b6 = dataElement.querySelector("script")) == null ? void 0 : _b6.innerHTML
              );
              set((state) => {
                if (productData) {
                  state.products = __spreadProps(__spreadValues({}, state.products), {
                    [productData.handle]: __spreadProps(__spreadValues({}, productData), {
                      timestamp
                    })
                  });
                }
                if (!productData) {
                  delete state.products[handle];
                }
              });
              return __spreadProps(__spreadValues({}, window.transformProducts(productData)), {
                timestamp
              });
            } catch (err) {
              delete fetching.current[handle];
              return null;
            }
          }),
          getUntransformedAsyncProduct: (handle) => __async(void 0, null, function* () {
            var _a6, _b6;
            const timestamp = Date.now();
            const product = get().products[handle];
            if (product && (product == null ? void 0 : product.timestamp) && timestamp - (product == null ? void 0 : product.timestamp) < 1e3 * 60 * 15) {
              return product;
            }
            const localProduct = JSONParse(
              (_a6 = document.querySelector(`[data-product-json="${handle}"]`)) == null ? void 0 : _a6.innerHTML
            );
            if (localProduct) {
              set((state) => {
                state.products = __spreadProps(__spreadValues({}, state.products), {
                  [localProduct.handle]: __spreadProps(__spreadValues({}, localProduct), {
                    timestamp
                  })
                });
              });
              return __spreadProps(__spreadValues({}, localProduct), {
                timestamp
              });
            }
            if (!(handle in fetching.current)) {
              fetching.current[handle] = fetch(
                `${window.Shopify.routes.root}products/${handle.replace(/\/products\//gi, "").replace(/^\//gi, "")}?sections=product-data`
              ).then((data) => data.json());
            }
            try {
              const content = __spreadValues({}, yield fetching.current[handle]);
              delete fetching.current[handle];
              const dataElement = document.createElement("div");
              dataElement.innerHTML = content["product-data"];
              const productData = JSONParse(
                (_b6 = dataElement.querySelector("script")) == null ? void 0 : _b6.innerHTML
              );
              set((state) => {
                if (productData) {
                  state.products = __spreadProps(__spreadValues({}, state.products), {
                    [productData.handle]: __spreadProps(__spreadValues({}, productData), {
                      timestamp
                    })
                  });
                }
                if (!productData) {
                  delete state.products[handle];
                }
              });
              return __spreadProps(__spreadValues({}, productData), {
                timestamp
              });
            } catch (err) {
              delete fetching.current[handle];
              return null;
            }
          }),
          getProduct: (handle) => {
            var _a6;
            const timestamp = Date.now();
            const localProduct = JSONParse(
              (_a6 = document.querySelector(`[data-product-json="${handle}"]`)) == null ? void 0 : _a6.innerHTML
            );
            if (localProduct) {
              set((state) => {
                state.products = __spreadProps(__spreadValues({}, state.products), {
                  [localProduct.handle]: __spreadProps(__spreadValues({}, localProduct), {
                    timestamp: Date.now()
                  })
                });
              });
              return __spreadProps(__spreadValues({}, window.transformProducts(localProduct)), {
                timestamp
              });
            }
            const product = get().products[handle];
            if (product) {
              if (product && (product == null ? void 0 : product.timestamp) && timestamp - (product == null ? void 0 : product.timestamp) > 1e3 * 60 * 15) {
                get().getAsyncProduct(handle);
              }
              return window.transformProducts(product);
            }
            return null;
          },
          getUntransformedProduct: (handle) => {
            var _a6;
            const localProduct = JSONParse(
              (_a6 = document.querySelector(`[data-product-json="${handle}"]`)) == null ? void 0 : _a6.innerHTML
            );
            if (localProduct) {
              set((state) => {
                state.products = __spreadProps(__spreadValues({}, state.products), {
                  [localProduct.handle]: __spreadProps(__spreadValues({}, localProduct), {
                    timestamp: Date.now()
                  })
                });
              });
              return __spreadProps(__spreadValues({}, localProduct), {
                timestamp: Date.now()
              });
            }
            const product = get().products[handle];
            if (product) {
              return product;
            }
            return null;
          }
        };
      }),
      {
        name: `${window.Shopify.shop}-accelerate-products`,
        version: 5,
        storage: createJSONStorage(() => import_localforage.default),
        onRehydrateStorage: (state) => {
          return (state2, error) => {
            var _a5, _b5, _c;
            if (error) {
              console.log(error);
            } else {
              const handle = window.location.pathname.split("?")[0].replace(/.*\/products\/([^?]*)/gi, "$1").toLowerCase();
              if (handle) {
                const product = Object.values(state2.products).find((p4) => p4.handle === handle);
                if (product) {
                  const recentlyViewed = [
                    .../* @__PURE__ */ new Set([product.handle, ...state2.recentlyViewed])
                  ].slice(0, 50);
                  globalProducts.setState({
                    recentlyViewed
                  });
                }
              }
              globalProducts.setState({
                hydrated: true,
                currentProductHandle: (_c = (_b5 = (_a5 = document.querySelector("[data-product-handle]")) == null ? void 0 : _a5.dataset) == null ? void 0 : _b5.productHandle) != null ? _c : null
              });
            }
          };
        }
        // getStorage: () => customStorage as unknown as StateStorage,
      }
    )
  );
  var useGlobalProducts = create(globalProducts);
  var cartDrawer = createStore((set, get) => {
    const cartData = window.cartData;
    const routeProtectionProducts = [];
    document.querySelectorAll("[data-route-protection]").forEach((element) => {
      const settings = JSONParse(
        element.dataset.routeProtectionSettings
      );
      routeProtectionProducts.push(settings);
    });
    return {
      loading: true,
      cartData,
      routeProtectionProducts,
      updates: null,
      initCart: () => __async(void 0, null, function* () {
        set({ loading: true });
        set({ cartData: yield cart.get(), loading: false });
      }),
      adjustItem: (lineItem, quantity, index) => {
        const newQuantity = Math.max(0, lineItem.quantity + quantity);
        set(({ cartData: cartData2, updates }) => {
          var _a5, _b5;
          const newItemCount = (cartData2 == null ? void 0 : cartData2.item_count) - lineItem.quantity + newQuantity;
          const newFinalLinePrice = lineItem.final_price * newQuantity;
          const newOriginalLinePrice = lineItem.original_price * newQuantity;
          return {
            loading: true,
            cartData: __spreadProps(__spreadValues({}, cartData2), {
              item_count: newItemCount,
              total_price: (cartData2 == null ? void 0 : cartData2.total_price) - lineItem.final_line_price + newFinalLinePrice,
              items: (_a5 = cartData2 == null ? void 0 : cartData2.items) == null ? void 0 : _a5.map((line_item, i4) => {
                if (lineItem.key !== line_item.key || index !== i4) {
                  return line_item;
                }
                return __spreadProps(__spreadValues({}, line_item), {
                  quantity: newQuantity,
                  final_line_price: newFinalLinePrice,
                  original_line_price: newOriginalLinePrice
                });
              })
            }),
            updates: (_b5 = cartData2 == null ? void 0 : cartData2.items) == null ? void 0 : _b5.map((item, i4) => {
              if (index === i4) {
                return newQuantity;
              }
              return item.quantity;
            })
          };
        });
      },
      fetchUpdates: () => __async(void 0, null, function* () {
        const data = yield cart.update({
          updates: get().updates
        });
        set({ cartData: data, loading: false, updates: null });
      }),
      addItem: (variant, quantity) => __async(void 0, null, function* () {
      })
    };
  });
  var useCartDrawer = create(cartDrawer);

  // image.tsx
  var Image2 = /* @__PURE__ */ __name((_a5) => {
    var _b5 = _a5, {
      src,
      alt,
      className,
      width,
      height,
      aspectRatio,
      screenPercentage = 100,
      maxWidth,
      loading,
      srcSet
    } = _b5, imageProps = __objRest(_b5, [
      "src",
      "alt",
      "className",
      "width",
      "height",
      "aspectRatio",
      "screenPercentage",
      "maxWidth",
      "loading",
      "srcSet"
    ]);
    if (!src) {
      return null;
    }
    src = src.replace(/&v=\d+(&)/gi, "$1").replace(/\?v=\d+(&)/gi, "?").replace(/\?v=\d+$/gi, "");
    return (
      // @ts-ignore
      o3(
        "img",
        __spreadValues({
          src: width ? src.includes("?") ? `${src}&width=${Math.round(width)}` : `${src}?width=${Math.round(width)}` : maxWidth ? src.includes("?") ? `${src}&width=${Math.round(maxWidth)}` : `${src}?width=${Math.round(maxWidth)}` : src,
          alt,
          width,
          height,
          "data-image": loading ? "eager" : "lazy",
          loading,
          className
        }, imageProps)
      )
    );
  }, "Image");

  // product-card.tsx
  init_preact_module();

  // icons.tsx
  var CloseIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: o3(
      "path",
      {
        d: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
        fill: "currentColor"
      }
    ) });
  }, "CloseIcon");
  var PlusIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { className, viewBox: "0 0 12 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: o3(
      "path",
      {
        d: "M6.00019 1.83331V11.1666M1.3335 6.49998H10.6668",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    ) });
  }, "PlusIcon");
  var MinusIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { viewBox: "0 0 12 3", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: o3(
      "path",
      {
        d: "M1.3335 1.5H10.6668",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    ) });
  }, "MinusIcon");
  var ChevronUpDownIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3(
      "svg",
      {
        className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: o3(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
            clipRule: "evenodd"
          }
        )
      }
    );
  }, "ChevronUpDownIcon");
  var FacebookIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        role: "img",
        viewBox: "0 0 24 24",
        className,
        xmlns: "http://www.w3.org/2000/svg",
        children: o3("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
      }
    );
  }, "FacebookIcon");
  var PinterestIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        role: "img",
        viewBox: "0 0 24 24",
        className,
        xmlns: "http://www.w3.org/2000/svg",
        children: o3("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
      }
    );
  }, "PinterestIcon");
  var TwitterIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        role: "img",
        viewBox: "0 0 24 24",
        className,
        xmlns: "http://www.w3.org/2000/svg",
        children: o3("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
      }
    );
  }, "TwitterIcon");
  var EmailIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3(
      "svg",
      {
        className,
        viewBox: "0 0 22 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        strokeWidth: "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: o3("path", { d: "M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z" })
      }
    );
  }, "EmailIcon");
  var ChevronRightIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { className, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: o3(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M5.52858 3.52864C5.78892 3.26829 6.21103 3.26829 6.47138 3.52864L10.4714 7.52864C10.7317 7.78899 10.7317 8.2111 10.4714 8.47145L6.47138 12.4714C6.21103 12.7318 5.78892 12.7318 5.52858 12.4714C5.26823 12.2111 5.26823 11.789 5.52858 11.5286L9.05717 8.00004L5.52858 4.47145C5.26823 4.2111 5.26823 3.78899 5.52858 3.52864Z",
        fill: "currentColor"
      }
    ) });
  }, "ChevronRightIcon");
  var ChevronLeftIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { className, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: o3(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M10.4714 3.52864C10.7317 3.78899 10.7317 4.2111 10.4714 4.47145L6.9428 8.00004L10.4714 11.5286C10.7317 11.789 10.7317 12.2111 10.4714 12.4714C10.2111 12.7318 9.78894 12.7318 9.52859 12.4714L5.52859 8.47145C5.26824 8.2111 5.26824 7.78899 5.52859 7.52864L9.52859 3.52864C9.78894 3.26829 10.2111 3.26829 10.4714 3.52864Z",
        fill: "currentColor"
      }
    ) });
  }, "ChevronLeftIcon");
  var TimerIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3(
      "svg",
      {
        className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        children: o3(
          "path",
          {
            "fill-rule": "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
            "clip-rule": "evenodd"
          }
        )
      }
    );
  }, "TimerIcon");
  var SearchIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { className, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: o3(
      "path",
      {
        d: "M19 19L13.0001 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    ) });
  }, "SearchIcon");
  var CheckMarkIcon = /* @__PURE__ */ __name(({ className }) => {
    return o3("svg", { className, viewBox: "0 0 27 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: o3(
      "path",
      {
        d: "M8.49999 16.255L2.24499 10L0.11499 12.115L8.49999 20.5L26.5 2.50001L24.385 0.38501L8.49999 16.255Z",
        fill: "currentColor"
      }
    ) });
  }, "CheckMarkIcon");

  // scrollbar.tsx
  init_compat_module();
  var useWindowSize = /* @__PURE__ */ __name(() => {
    const [width, setWidth] = h2(window.innerWidth);
    const [height, setHeight] = h2(window.innerWidth);
    p2(() => {
      const handleResize2 = /* @__PURE__ */ __name(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, "handleResize");
      window.addEventListener("resize", handleResize2);
      return () => {
        window.removeEventListener("resize", handleResize2);
      };
    }, []);
    return { width, height };
  }, "useWindowSize");
  var ScrollBar = /* @__PURE__ */ __name(({
    itemCount,
    showCount,
    className
  }) => {
    var _a5, _b5;
    const [showScrollbar, setShowScrollbar] = h2(true);
    const scrollbarRef = _2(null);
    const [pointerPosition, setPointerPosition] = h2({ startX: null, startLeft: 0 });
    const [scrollbarProps, setScrollbarProps] = h2({ width: 0, left: 0 });
    const { width } = useWindowSize();
    const handleScrollEvent = T2(() => {
      const scrollbarElement = scrollbarRef.current;
      if (!scrollbarElement)
        return;
      const scrollContainer = scrollbarElement.parentElement;
      const containerWidth = scrollbarElement.offsetWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX === null && width) {
        setScrollbarProps({
          width: scrollContainer.offsetWidth / scrollWidth,
          left: scrollLeft / scrollWidth * containerWidth
        });
      }
    }, [pointerPosition.startX, width]);
    const handlePointerDown = T2((e3) => {
      if (pointerPosition.startX === null) {
        e3.preventDefault();
        e3.stopPropagation();
        setPointerPosition({ startX: e3.clientX, startLeft: scrollbarProps.left });
        document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
        const scrollContainer = scrollbarRef.current.parentElement;
        scrollContainer.classList.remove("snap-mandatory", "snap-x");
      }
    }, [pointerPosition.startX, scrollbarProps.left]);
    const handlePointerMove = T2((e3) => {
      var _a6;
      e3.preventDefault();
      e3.stopPropagation();
      const scrollContainer = scrollbarRef.current.parentElement;
      const containerWidth = scrollbarRef.current.offsetWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX !== null) {
        const innerWidth = scrollContainer.offsetWidth - +getComputedStyle(scrollContainer, null).paddingLeft.replace("px", "") - +getComputedStyle(scrollContainer, null).paddingRight.replace("px", "");
        const left = Math.min(
          Math.max(0, ((_a6 = pointerPosition.startLeft) != null ? _a6 : 0) + e3.clientX - pointerPosition.startX),
          containerWidth - innerWidth / scrollWidth * containerWidth
        );
        scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
        setScrollbarProps({
          width: scrollContainer.offsetWidth / scrollWidth,
          left: scrollLeft / scrollWidth * containerWidth
        });
      }
    }, [pointerPosition]);
    const handlePointerUp = T2((e3) => {
      if (pointerPosition.startX !== null) {
        e3.preventDefault();
        e3.stopPropagation();
        setPointerPosition({ startX: null, startLeft: scrollbarProps.left });
        document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
        const scrollContainer = scrollbarRef.current.parentElement;
        scrollContainer.classList.add("snap-mandatory", "snap-x");
      }
    }, [pointerPosition.startX, scrollbarProps.left]);
    const handleClick = T2((e3) => __async(void 0, null, function* () {
      if (pointerPosition.startX === null) {
        const scrollContainer = scrollbarRef.current.parentElement;
        const containerWidth = scrollbarRef.current.offsetWidth;
        const { scrollWidth } = scrollContainer;
        const thumbWidth = containerWidth / scrollWidth;
        const clickPosition = e3.clientX - scrollbarRef.current.getBoundingClientRect().left;
        const positionPercentage = clickPosition / containerWidth;
        const left = Math.min(
          Math.max(
            0,
            containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
          ),
          containerWidth - containerWidth / scrollWidth * containerWidth
        );
        scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
      }
    }), [pointerPosition.startX]);
    p2(() => {
      const scrollContainer = scrollbarRef.current.parentElement;
      scrollContainer.addEventListener("scroll", handleScrollEvent);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScrollEvent);
      };
    }, [handleScrollEvent]);
    p2(() => {
      handleScrollEvent();
    }, [handleScrollEvent, itemCount]);
    p2(() => {
      const scrollContainer = scrollbarRef.current.parentElement;
      scrollToX(220, 0, scrollContainer);
    }, [itemCount]);
    p2(() => {
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
      };
    }, [handlePointerMove, handlePointerUp]);
    p2(() => {
      if (pointerPosition.startX !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
        };
      }
      return () => {
      };
    }, [handlePointerMove, pointerPosition.startX]);
    p2(() => {
      const scrollContainer = scrollbarRef.current.parentElement;
      if (width) {
        setShowScrollbar(scrollContainer.scrollWidth > scrollContainer.offsetWidth);
      }
    }, [width, itemCount]);
    const currentImageCount = Math.round(
      scrollbarProps.left / (((_a5 = scrollbarRef.current) == null ? void 0 : _a5.offsetWidth) - ((_b5 = scrollbarRef.current) == null ? void 0 : _b5.offsetWidth) * scrollbarProps.width) * (itemCount - 1)
    ) + 1;
    return o3(_, { children: [
      o3(
        "div",
        {
          ref: scrollbarRef,
          className: clsx_m_default(
            "group absolute flex h-4 cursor-pointer touch-none items-center",
            showCount ? "w-[calc(100%-80px)]" : "w-full",
            !showScrollbar && "hidden",
            className ? className : "top-full"
          ),
          onClick: handleClick,
          children: o3("div", { className: "relative h-0.5 w-full bg-gray-200 transition-all group-hover:h-0.5", children: o3(
            "button",
            {
              type: "button",
              className: "absolute top-1/2 flex min-h-full cursor-grab items-center justify-center py-2 will-change-transform active:cursor-grabbing [&:active_div]:!h-0.5",
              style: {
                transform: `translateY(-50%) translateX(${scrollbarProps.left}px)`,
                width: `${scrollbarProps.width * 100}%`
              },
              onPointerDown: handlePointerDown,
              onClick: (e3) => e3.stopPropagation(),
              "aria-label": "Scrollbar Thumb",
              children: o3("div", { className: "h-0.5 w-full bg-gray-900 transition-all group-hover:h-0.5" })
            }
          ) })
        }
      ),
      showCount && itemCount && currentImageCount ? o3(
        "div",
        {
          className: clsx_m_default(
            "absolute right-0 flex h-4 w-[86px] items-center justify-end gap-2 font-bold",
            className ? className : "top-full"
          ),
          children: [
            o3("span", { children: [
              scrollbarRef.current && showScrollbar ? currentImageCount : null,
              " ",
              o3("br", {})
            ] }),
            " ",
            "of ",
            o3("span", { children: itemCount })
          ]
        }
      ) : null
    ] });
  }, "ScrollBar");
  var ScrollBarButtonsNew = /* @__PURE__ */ __name(({
    itemCount,
    className = "-bottom-8 md:-bottom-8"
  }) => {
    const sliderNavRef = _2(null);
    const [showPrevButton, setShowPrevButton] = h2(false);
    const [showNextButton, setShowNextButton] = h2(false);
    const { width } = useWindowSize();
    const handleScroll = T2(() => {
      const scrollContainer = sliderNavRef.current.parentElement;
      const { scrollWidth, scrollLeft, offsetWidth } = scrollContainer;
      setShowPrevButton(scrollLeft !== 0);
      setShowNextButton(scrollWidth !== offsetWidth && scrollLeft + offsetWidth <= scrollWidth - 5);
    }, []);
    const handleClickPrev = T2((e3) => {
      const scrollContainer = sliderNavRef.current.parentElement;
      const { scrollWidth, scrollLeft } = scrollContainer;
      const itemWidth = scrollWidth / itemCount;
      const currentScrollIndex = Math.round(scrollLeft / itemWidth);
      scrollContainer.classList.remove("snap-x");
      scrollToX(220, Math.max(itemWidth * (currentScrollIndex - 1), 0), scrollContainer, () => {
        scrollContainer.scrollLeft = Math.max(itemWidth * (currentScrollIndex - 1), 0);
        scrollContainer.classList.add("snap-x");
      });
    }, [itemCount]);
    const handleClickNext = T2((e3) => {
      const scrollContainer = sliderNavRef.current.parentElement;
      const { scrollWidth, scrollLeft, offsetWidth } = scrollContainer;
      const itemWidth = scrollWidth / itemCount;
      const currentScrollIndex = Math.round(scrollLeft / itemWidth);
      scrollContainer.classList.remove("snap-x");
      scrollToX(
        220,
        Math.min(itemWidth * (currentScrollIndex + 1), scrollWidth - offsetWidth),
        scrollContainer,
        () => {
          scrollContainer.scrollLeft = Math.min(
            itemWidth * (currentScrollIndex + 1),
            scrollWidth - offsetWidth
          );
          scrollContainer.classList.add("snap-x");
        }
      );
    }, [itemCount]);
    p2(() => {
      const scrollContainer = sliderNavRef.current.parentElement;
      handleScroll();
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll, width]);
    return o3(
      "div",
      {
        ref: sliderNavRef,
        className: clsx_m_default("pointer-events-none absolute z-20 w-full max-md:px-4", className),
        children: o3("div", { className: "relative", children: [
          o3(
            "button",
            {
              className: "group absolute -bottom-10 left-0 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg text-gray-400 shadow transition-all ease-in-out hf:text-gray-900",
              onClick: handleClickPrev,
              style: {
                opacity: showPrevButton ? "100" : "0",
                pointerEvents: showPrevButton ? "auto" : "none"
              },
              children: [
                o3("span", { className: "sr-only", children: "Show Previous Item" }),
                o3(ChevronLeftIcon, { className: "h-4 w-4" })
              ]
            }
          ),
          o3(
            "button",
            {
              className: "group absolute -bottom-10 right-0 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg text-gray-400 shadow transition-all ease-in-out hf:text-gray-900",
              onClick: handleClickNext,
              style: {
                opacity: showNextButton ? "100" : "0",
                pointerEvents: showNextButton ? "auto" : "none"
              },
              children: [
                o3("span", { className: "sr-only", children: "Show Next Item" }),
                o3(ChevronRightIcon, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      }
    );
  }, "ScrollBarButtonsNew");
  var ScrollBarNew = /* @__PURE__ */ __name(({
    itemCount,
    showCount,
    className = "-bottom-7 md:-bottom-8"
  }) => {
    var _a5, _b5;
    const [showScrollbar, setShowScrollbar] = h2(true);
    const scrollbarRef = _2(null);
    const [pointerPosition, setPointerPosition] = h2({ startX: null, startLeft: 0 });
    const [scrollbarProps, setScrollbarProps] = h2({ width: 0, left: 0 });
    const { width } = useWindowSize();
    const handleScrollEvent = T2(() => {
      const scrollbarElement = scrollbarRef.current;
      if (!scrollbarElement)
        return;
      const scrollContainer = scrollbarElement.parentElement;
      const containerWidth = scrollbarElement.offsetWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX === null && width) {
        setScrollbarProps({
          width: scrollContainer.offsetWidth / scrollWidth,
          left: scrollLeft / scrollWidth * containerWidth
        });
      }
    }, [pointerPosition.startX, width]);
    const handlePointerDown = T2((e3) => {
      if (pointerPosition.startX === null) {
        e3.preventDefault();
        e3.stopPropagation();
        setPointerPosition({ startX: e3.clientX, startLeft: scrollbarProps.left });
        document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
        const scrollContainer = scrollbarRef.current.parentElement;
        scrollContainer.classList.remove("snap-mandatory", "snap-x");
      }
    }, [pointerPosition.startX, scrollbarProps.left]);
    const handlePointerMove = T2((e3) => {
      var _a6;
      e3.preventDefault();
      e3.stopPropagation();
      const scrollContainer = scrollbarRef.current.parentElement;
      const containerWidth = scrollbarRef.current.offsetWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX !== null) {
        const innerWidth = scrollContainer.offsetWidth - +getComputedStyle(scrollContainer, null).paddingLeft.replace("px", "") - +getComputedStyle(scrollContainer, null).paddingRight.replace("px", "");
        const left = Math.min(
          Math.max(0, ((_a6 = pointerPosition.startLeft) != null ? _a6 : 0) + e3.clientX - pointerPosition.startX),
          containerWidth - innerWidth / scrollWidth * containerWidth
        );
        scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
        setScrollbarProps({
          width: scrollContainer.offsetWidth / scrollWidth,
          left: scrollLeft / scrollWidth * containerWidth
        });
      }
    }, [pointerPosition]);
    const handlePointerUp = T2((e3) => {
      if (pointerPosition.startX !== null) {
        e3.preventDefault();
        e3.stopPropagation();
        setPointerPosition({ startX: null, startLeft: scrollbarProps.left });
        document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
        const scrollContainer = scrollbarRef.current.parentElement;
        scrollContainer.classList.add("snap-mandatory", "snap-x");
      }
    }, [pointerPosition.startX, scrollbarProps.left]);
    const handleClick = T2((e3) => __async(void 0, null, function* () {
      if (pointerPosition.startX === null) {
        const scrollContainer = scrollbarRef.current.parentElement;
        const containerWidth = scrollbarRef.current.offsetWidth;
        const { scrollWidth } = scrollContainer;
        const thumbWidth = containerWidth / scrollWidth;
        const clickPosition = e3.clientX - scrollbarRef.current.getBoundingClientRect().left;
        const positionPercentage = clickPosition / containerWidth;
        const left = Math.min(
          Math.max(
            0,
            containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
          ),
          containerWidth - containerWidth / scrollWidth * containerWidth
        );
        scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
      }
    }), [pointerPosition.startX]);
    p2(() => {
      const scrollContainer = scrollbarRef.current.parentElement;
      scrollContainer.addEventListener("scroll", handleScrollEvent);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScrollEvent);
      };
    }, [handleScrollEvent]);
    p2(() => {
      handleScrollEvent();
    }, [handleScrollEvent, itemCount]);
    p2(() => {
      const scrollContainer = scrollbarRef.current.parentElement;
      scrollToX(220, 0, scrollContainer);
    }, [itemCount]);
    p2(() => {
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
      };
    }, [handlePointerMove, handlePointerUp]);
    p2(() => {
      if (pointerPosition.startX !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
        };
      }
      return () => {
      };
    }, [handlePointerMove, pointerPosition.startX]);
    p2(() => {
      const scrollContainer = scrollbarRef.current.parentElement;
      if (width) {
        setShowScrollbar(scrollContainer.scrollWidth > scrollContainer.offsetWidth);
      }
    }, [width, itemCount]);
    const currentImageCount = Math.round(
      scrollbarProps.left / (((_a5 = scrollbarRef.current) == null ? void 0 : _a5.offsetWidth) - ((_b5 = scrollbarRef.current) == null ? void 0 : _b5.offsetWidth) * scrollbarProps.width) * (itemCount - 1)
    ) + 1;
    return o3(_, { children: o3(
      "div",
      {
        ref: scrollbarRef,
        className: clsx_m_default(
          "group absolute flex h-4 cursor-pointer touch-none items-center max-md:left-4 max-md:right-4 md:w-full",
          !showScrollbar && "hidden",
          className
        ),
        onClick: handleClick,
        children: [
          o3("div", { className: "relative h-0.5 w-full bg-gray-200 transition-all group-hover:h-0.5", children: o3(
            "button",
            {
              type: "button",
              className: "absolute top-1/2 flex min-h-full cursor-grab items-center justify-center py-2 will-change-transform active:cursor-grabbing [&:active_div]:!h-0.5",
              style: {
                transform: `translateY(-50%) translateX(${scrollbarProps.left}px)`,
                width: `${scrollbarProps.width * 100}%`
              },
              onPointerDown: handlePointerDown,
              onClick: (e3) => e3.stopPropagation(),
              "aria-label": "Scrollbar Thumb",
              children: o3("div", { className: "h-0.5 w-full bg-gray-900 transition-all group-hover:h-0.5" })
            }
          ) }),
          showCount && itemCount && currentImageCount ? o3(
            "div",
            {
              className: clsx_m_default(
                "absolute left-1/2 flex h-4 w-[86px] -translate-x-1/2 items-center justify-center gap-2 font-bold",
                "-bottom-7"
              ),
              children: [
                o3("span", { children: [
                  scrollbarRef.current && showScrollbar ? currentImageCount : null,
                  " ",
                  o3("br", {})
                ] }),
                " ",
                "of ",
                o3("span", { children: itemCount })
              ]
            }
          ) : null
        ]
      }
    ) });
  }, "ScrollBarNew");

  // product-quick-view.image_gallery.tsx
  init_compat_module();
  var ProductQuickViewImageGallery = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p;
    const { product, selectedVariant } = useProduct(({ product: product2, selectedVariant: selectedVariant2 }) => ({
      product: product2,
      selectedVariant: selectedVariant2
    }));
    const variantRef = _2(selectedVariant == null ? void 0 : selectedVariant.id);
    const productRef = _2(0);
    const timeoutRef = _2();
    const { width } = useWindowSize();
    const [showScroll, setShowScroll] = h2(false);
    const scrollContainer = _2(null);
    p2(() => {
      if (variantRef.current !== (selectedVariant == null ? void 0 : selectedVariant.id)) {
        variantRef.current = selectedVariant.id;
        scrollToX(0, 0, scrollContainer.current);
      }
    }, [selectedVariant, width]);
    p2(() => {
      setTimeout(
        () => {
          var _a6;
          const overlay = document.querySelector("[data-product-loading-screen]");
          (_a6 = overlay == null ? void 0 : overlay.classList) == null ? void 0 : _a6.add("opacity-0", "pointer-events-none");
        },
        10
      );
    }, []);
    p2(() => {
      if (productRef.current !== (product == null ? void 0 : product.id) && showScroll) {
        productRef.current = product == null ? void 0 : product.id;
        setShowScroll((prev) => false);
        timeoutRef.current = setTimeout(
          () => {
            setShowScroll((prev) => true);
          },
          50
        );
      }
      if (productRef.current !== (product == null ? void 0 : product.id) && !showScroll) {
        productRef.current = product == null ? void 0 : product.id;
        timeoutRef.current = setTimeout(
          () => {
            setShowScroll((prev) => true);
          },
          50
        );
      }
    }, [product == null ? void 0 : product.id, showScroll]);
    p2(() => {
      const handleQuickViewOpened = /* @__PURE__ */ __name((e3) => {
        if (showScroll) {
          setShowScroll((prev) => false);
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(
            () => {
              setShowScroll((prev) => true);
            },
            50
          );
        }
      }, "handleQuickViewOpened");
      document.addEventListener("product-quick-view:opened", handleQuickViewOpened);
      return () => {
        document.removeEventListener("product-quick-view:opened", handleQuickViewOpened);
      };
    }, [showScroll]);
    const scrollToMedia = T2((mediaId) => {
      const scrollTarget = scrollContainer.current.querySelector(
        `[data-media-id="${mediaId}"]`
      );
      if (scrollTarget) {
        const { offsetTop, offsetLeft } = scrollTarget;
        scrollToXY(200, offsetLeft, offsetTop, scrollContainer.current);
      }
    }, []);
    if (!product.handle || !selectedVariant) {
      return null;
    }
    let mediaItems = [selectedVariant == null ? void 0 : selectedVariant.featured_media];
    if (settings.variants_multi_images === "via_metafield") {
      const [namespace, key] = (_c = (_b5 = (_a5 = settings.variants_image_metafield) == null ? void 0 : _a5.trim()) == null ? void 0 : _b5.split(".")) != null ? _c : [
        "smart",
        "images"
      ];
      (_f = (_e = (_d = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _d[namespace]) == null ? void 0 : _e[key]) == null ? void 0 : _f.forEach((url) => {
        mediaItems.push({
          aspect_ratio: 1,
          height: 1,
          id: shortUUID(),
          media_type: "image",
          position: -1,
          preview_image: {
            aspect_ratio: 1,
            height: 1,
            src: url,
            width: 1
          },
          src: url,
          width: 1
        });
      });
    }
    if (settings.variants_multi_images === "via_image_order") {
      const positions = [...new Set(product == null ? void 0 : product.variants.map((v4) => {
        var _a6;
        return (_a6 = v4.featured_media) == null ? void 0 : _a6.position;
      }))].sort(
        (a4, b4) => a4 - b4
      );
      const from = (_g = selectedVariant.featured_media) == null ? void 0 : _g.position;
      const to = (_h = positions[positions.findIndex((position) => position === from) + 1]) != null ? _h : 9999;
      product == null ? void 0 : product.media.forEach((media) => {
        if ((media == null ? void 0 : media.position) > from && (media == null ? void 0 : media.position) < to) {
          mediaItems.push(media);
        }
      });
    }
    mediaItems = (_n2 = (_m = [
      ...mediaItems,
      ...(_l = !settings.hide_not_selected_variant_images || !((_i = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _i.src) ? (_k = (_j = product == null ? void 0 : product.media) == null ? void 0 : _j.filter((media) => {
        var _a6;
        return (media == null ? void 0 : media.id) !== ((_a6 = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _a6.id);
      })) != null ? _k : [] : []) != null ? _l : []
    ]) == null ? void 0 : _m.filter((media) => media)) != null ? _n2 : [];
    const variantsWithImage = (_o = product == null ? void 0 : product.variants) == null ? void 0 : _o.filter(
      (v1, i4, a4) => v1.featured_media && a4.findIndex((v22) => {
        var _a6, _b6;
        return ((_a6 = v1 == null ? void 0 : v1.featured_media) == null ? void 0 : _a6.id) === ((_b6 = v22 == null ? void 0 : v22.featured_media) == null ? void 0 : _b6.id);
      }) === i4
    );
    return o3(_, { children: o3("main", { className: "scroll-container grid h-full md:absolute md:inset-0", children: o3(
      "div",
      {
        className: "scrollbar-none md:min-h-56 grid max-w-full flex-1 snap-x snap-mandatory auto-cols-[40%] grid-flow-col-dense overflow-x-auto md:auto-cols-[100%] md:gap-8",
        ref: scrollContainer,
        children: [
          (_p = mediaItems == null ? void 0 : mediaItems.filter((m3) => (m3 == null ? void 0 : m3.alt) !== "hide-image")) == null ? void 0 : _p.map((media) => {
            var _a6, _b6, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
            return o3(
              "figure",
              {
                "data-media-id": media.id,
                className: "image-test relative grid aspect-1 h-full w-full snap-start snap-always overflow-hidden transition-all ease-in-out",
                children: {
                  image: o3(
                    Image2,
                    {
                      src: `${media.src}`,
                      maxWidth: settings.gallery__zoom ? 1200 : 640,
                      alt: (_a6 = media.alt) != null ? _a6 : product == null ? void 0 : product.title,
                      className: "absolute left-0 top-0 h-full w-full bg-inherit object-contain object-center",
                      screenPercentage: 70,
                      onMouseMove: settings.gallery__zoom && width > 768 ? (e3) => {
                        const { left, top, width: width2, height } = e3.currentTarget.parentElement.getBoundingClientRect();
                        const maxPercentage = 50 - 50 / (+settings.gallery__zoom_scale / 100);
                        const leftPercentage = ((e3.clientX - left) / width2 * 100 - 50) * 2 / 100 * maxPercentage;
                        const topPercentage = ((e3.clientY - top) / height * 100 - 50) * 2 / 100 * maxPercentage;
                        e3.currentTarget.style.transform = `scale(${+settings.gallery__zoom_scale / 100}) translate(${-leftPercentage}%, ${-topPercentage}%)`;
                      } : void 0,
                      onMouseLeave: settings.gallery__zoom && width > 768 ? (e3) => {
                        e3.currentTarget.style.transform = ``;
                      } : void 0
                    }
                  ),
                  video: o3(
                    "video",
                    {
                      playsInline: true,
                      controls: true,
                      autoPlay: true,
                      loop: settings.gallery__loop_videos,
                      preload: "none",
                      className: "absolute left-0 top-0 h-full w-full bg-inherit object-contain",
                      muted: true,
                      "aria-label": (_b6 = media.alt) != null ? _b6 : product == null ? void 0 : product.title,
                      poster: media.preview_image.src,
                      children: [
                        o3(
                          "source",
                          {
                            src: (_d2 = (_c2 = media == null ? void 0 : media.sources) == null ? void 0 : _c2.find(
                              (src) => src.format === "mp4" && src.width <= 852
                            )) == null ? void 0 : _d2.url,
                            type: "video/mp4"
                          }
                        ),
                        o3(
                          Image2,
                          {
                            src: media.preview_image.src,
                            alt: (_e2 = media.alt) != null ? _e2 : product == null ? void 0 : product.title,
                            screenPercentage: 60
                          }
                        )
                      ]
                    }
                  ),
                  external_video: o3(
                    "iframe",
                    {
                      frameBorder: "0",
                      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: true,
                      className: "js-youtube absolute left-0 top-0 h-full w-full border-0 bg-inherit object-contain",
                      loading: "lazy",
                      src: media.host === "youtube" ? `https://www.youtube.com/embed/${media.external_id}?autoplay=0&controls=1&muted=1&enablejsapi=1&loop=${settings.gallery__loop_videos ? 1 : 0}&modestbranding=1&playsinline=1&rel=0` : `https://player.vimeo.com/video/${media.external_id}`,
                      title: (_f2 = media.alt) != null ? _f2 : product == null ? void 0 : product.title
                    }
                  ),
                  model: o3(_, { children: [
                    o3(
                      "span",
                      {
                        className: "relative left-0 top-0 block h-full w-full",
                        style: {
                          // paddingBottom: `calc(100% * ${media.preview_image.aspect_ratio})`,
                          width: `Min(calc(460px * ${media.preview_image.aspect_ratio}), 85vw)`,
                          height: `Min(calc(460px / ${media.preview_image.aspect_ratio}), calc(85vw / ${media.preview_image.aspect_ratio})`
                        }
                      }
                    ),
                    o3("span", { className: "absolute left-0 top-0 block h-full w-full pb-[100%]", children: o3(
                      "model-viewer",
                      {
                        className: "h-full w-full bg-inherit object-contain",
                        style: "--poster-color: transparent; position: absolute;",
                        src: (_h2 = (_g2 = media.sources) == null ? void 0 : _g2.find((source) => source.format === "glb")) == null ? void 0 : _h2.url,
                        "camera-controls": "true",
                        "data-shopify-feature": "1.12",
                        alt: (_i2 = media.alt) != null ? _i2 : product == null ? void 0 : product.title,
                        poster: media.preview_image.src,
                        "data-js-focus-visible": "",
                        "ar-status": "not-presenting"
                      }
                    ) })
                  ] })
                }[media.media_type]
              },
              `media-${media.id}`
            );
          }),
          showScroll ? o3(_, { children: [
            o3(ScrollBarButtonsNew, { itemCount: mediaItems == null ? void 0 : mediaItems.length }),
            o3(ScrollBarNew, { itemCount: mediaItems == null ? void 0 : mediaItems.length, showCount: true })
          ] }) : null
        ]
      }
    ) }) });
  }, "ProductQuickViewImageGallery");

  // product-quick-view.tsx
  init_preact_module();
  init_compat_module();

  // product.tsx
  init_preact_module();

  // product-add-to-cart-bar.tsx
  init_compat_module();

  // loading-spinner.tsx
  var LoadingSpinner = /* @__PURE__ */ __name(({
    className = "",
    loading
  }) => {
    return o3(
      "div",
      {
        className: clsx_m_default(
          "pointer-events-none absolute z-50 h-full w-full transition-all duration-75",
          !loading && "opacity-0",
          className.includes("bg-") ? className : `${className} bg-inherit`
        ),
        children: o3(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 2",
            preserveAspectRatio: "xMidYMid",
            className: "absolute left-1/2 top-1/2 h-full w-14 -translate-x-1/2 -translate-y-1/2 ",
            children: [
              o3("g", { transform: "translate(20 1)", children: o3("circle", { cx: "0", cy: "0", r: "6", fill: "currentColor", children: o3(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "scale",
                  begin: "-0.375s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite"
                }
              ) }) }),
              o3("g", { transform: "translate(40 1)", children: o3("circle", { cx: "0", cy: "0", r: "6", fill: "currentColor", children: o3(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "scale",
                  begin: "-0.25s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite"
                }
              ) }) }),
              o3("g", { transform: "translate(60 1)", children: o3("circle", { cx: "0", cy: "0", r: "6", fill: "currentColor", children: o3(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "scale",
                  begin: "-0.125s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite"
                }
              ) }) }),
              o3("g", { transform: "translate(80 1)", children: o3("circle", { cx: "0", cy: "0", r: "6", fill: "currentColor", children: o3(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "scale",
                  begin: "0s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite"
                }
              ) }) })
            ]
          }
        )
      }
    );
  }, "LoadingSpinner");

  // product.buy_buttons.tsx
  init_compat_module();
  var ProductBuyButtons = /* @__PURE__ */ __name(({ useProduct, settings }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
    const { product, selectedVariant, quantity, formId: formId3, selectedSellingPlan } = useProduct(
      ({ product: product2, selectedVariant: selectedVariant2, quantity: quantity2, formId: formId4, selectedSellingPlan: selectedSellingPlan2 }) => ({
        product: product2,
        selectedVariant: selectedVariant2,
        quantity: quantity2,
        formId: formId4,
        selectedSellingPlan: selectedSellingPlan2
      })
    );
    const { cartData, routeProtectionProducts } = useCartDrawer(
      ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 }) => ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 })
    );
    const { product_data__preorder_cta } = useGlobalSettings();
    const inCartItem = (_a5 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a5.find(
      (line_item) => line_item.variant_id === selectedVariant.id
    );
    const routeProtection = inCartItem ? routeProtectionProducts.find((block) => {
      var _a6, _b6;
      return ((_b6 = (_a6 = block == null ? void 0 : block.products) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.handle) === (inCartItem == null ? void 0 : inCartItem.handle);
    }) : null;
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    const [loading, setLoading] = h2(false);
    const pre_order = (_c = (_b5 = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _b5.smart) == null ? void 0 : _c.pre_order;
    const pre_order_date = (_e = (_d = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _d.smart) == null ? void 0 : _e.pre_order_date;
    const handleSubmit = T2(
      (e3) => __async(void 0, null, function* () {
        var _a6, _b6, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n3, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
        console.log(e3, serializeForm(e3.target));
        e3.preventDefault();
        e3.stopPropagation();
        setLoading(true);
        if (
          // @ts-ignore
          ((_d2 = (_c2 = (_b6 = (_a6 = window == null ? void 0 : window.Shoppad) == null ? void 0 : _a6.apps) == null ? void 0 : _b6.infiniteoptions) == null ? void 0 : _c2.priceMod) == null ? void 0 : _d2.addToCart) && // @ts-ignore
          ((_i2 = (_h2 = (_g2 = (_f2 = (_e2 = window == null ? void 0 : window.Shoppad) == null ? void 0 : _e2.apps) == null ? void 0 : _f2.infiniteoptions) == null ? void 0 : _g2.priceMod) == null ? void 0 : _h2.getVariantSubmissions()) == null ? void 0 : _i2.length)
        ) {
          (_m2 = (_l2 = (_k2 = (_j2 = window == null ? void 0 : window.Shoppad) == null ? void 0 : _j2.apps) == null ? void 0 : _k2.infiniteoptions) == null ? void 0 : _l2.priceMod) == null ? void 0 : _m2.addToCart(e3);
          yield delay(500);
        }
        const properties = {};
        (_n3 = Object.entries(serializeForm(e3.target))) == null ? void 0 : _n3.forEach(([key, value]) => {
          if (key.includes("properties[")) {
            properties[key.replace(/^properties\[(.*)]$/gi, "$1")] = value;
          }
        });
        if (pre_order && (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) < quantity) {
          const now_date = Date.now();
          let label = "On Preorder";
          let timeOfMonth = "early ";
          if (pre_order_date) {
            const target_date = new Date(pre_order_date).getTime();
            const target_day = +new Date(pre_order_date).toLocaleString("en", {
              day: "2-digit"
            });
            const target_month = new Date(pre_order_date).toLocaleString("en", {
              month: "long"
            });
            const difference = Math.round((target_date - now_date) / 1e3 / 60 / 60 / 24);
            if (target_day > 7) {
              timeOfMonth = "mid ";
            }
            if (target_day > 20) {
              timeOfMonth = "end of ";
            }
            label = "Preorder Shipping this week";
            if (difference > 7) {
              label = "Preorder Shipping next week";
            }
            if (difference > 15) {
              label = "Preorder Shipping end of the month";
            }
            if (difference > 31) {
              label = "Preorder Shipping early next month";
            }
            if (difference > 45) {
              label = `Preorder Shipping ${timeOfMonth} ${target_month}`;
            }
          }
          if ((selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) > 0) {
            yield cart.add(
              {
                items: [
                  {
                    id: selectedVariant == null ? void 0 : selectedVariant.id,
                    quantity: selectedVariant == null ? void 0 : selectedVariant.inventory_quantity,
                    selling_plan: selectedSellingPlan ? +selectedSellingPlan : (product == null ? void 0 : product.requires_selling_plan) ? (_r = (_q = (_p = (_o = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _o[0]) == null ? void 0 : _p.selling_plans) == null ? void 0 : _q[0]) == null ? void 0 : _r.id : void 0,
                    properties
                  },
                  {
                    id: selectedVariant == null ? void 0 : selectedVariant.id,
                    quantity: quantity - (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity),
                    selling_plan: selectedSellingPlan ? +selectedSellingPlan : (product == null ? void 0 : product.requires_selling_plan) ? (_v = (_u = (_t = (_s = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _s[0]) == null ? void 0 : _t.selling_plans) == null ? void 0 : _u[0]) == null ? void 0 : _v.id : void 0,
                    properties: __spreadProps(__spreadValues({}, properties), {
                      preorder: label
                    })
                  }
                ]
              },
              product == null ? void 0 : product.openCartAfterAdd
            );
          }
          if ((selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) <= 0) {
            yield cart.add(
              {
                items: [
                  {
                    id: selectedVariant == null ? void 0 : selectedVariant.id,
                    quantity,
                    selling_plan: selectedSellingPlan ? +selectedSellingPlan : (product == null ? void 0 : product.requires_selling_plan) ? (_z = (_y = (_x = (_w = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _w[0]) == null ? void 0 : _x.selling_plans) == null ? void 0 : _y[0]) == null ? void 0 : _z.id : void 0,
                    properties: __spreadProps(__spreadValues({}, properties), {
                      preorder: label
                    })
                  }
                ]
              },
              product == null ? void 0 : product.openCartAfterAdd
            );
          }
          if (!(product == null ? void 0 : product.openCartAfterAdd)) {
            document.dispatchEvent(new Event(`product:close`));
          }
        }
        if (!pre_order || (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) >= quantity) {
          yield cart.add(
            {
              items: [
                {
                  id: selectedVariant == null ? void 0 : selectedVariant.id,
                  quantity,
                  selling_plan: selectedSellingPlan ? +selectedSellingPlan : (product == null ? void 0 : product.requires_selling_plan) ? (_D = (_C = (_B = (_A = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _A[0]) == null ? void 0 : _B.selling_plans) == null ? void 0 : _C[0]) == null ? void 0 : _D.id : void 0,
                  properties
                }
              ]
            },
            product == null ? void 0 : product.openCartAfterAdd
          );
          if (!(product == null ? void 0 : product.openCartAfterAdd)) {
            document.dispatchEvent(new Event(`product-quick-view:close`));
          }
        }
        setLoading(false);
      }),
      [
        pre_order,
        pre_order_date,
        product == null ? void 0 : product.openCartAfterAdd,
        product == null ? void 0 : product.requires_selling_plan,
        product == null ? void 0 : product.selling_plan_groups,
        quantity,
        selectedSellingPlan,
        selectedVariant == null ? void 0 : selectedVariant.id,
        selectedVariant == null ? void 0 : selectedVariant.inventory_quantity
      ]
    );
    if (!product) {
      return null;
    }
    return o3(
      "form",
      {
        method: "post",
        action: "/cart/add",
        id: formId3,
        acceptCharset: "UTF-8",
        encType: "multipart/form-data",
        noValidate: true,
        onSubmit: handleSubmit,
        children: [
          o3("input", { type: "hidden", name: "form_type", value: "product" }),
          o3("input", { type: "hidden", name: "utf8", value: "\u2713" }),
          o3("input", { type: "hidden", name: "id", value: selectedVariant == null ? void 0 : selectedVariant.id }),
          o3(
            "input",
            {
              type: "hidden",
              name: "selling_plan",
              "data-selling-plan-output": true,
              value: selectedSellingPlan,
              disabled: !selectedSellingPlan
            }
          ),
          o3(
            "button",
            {
              type: "submit",
              name: "add",
              disabled: !(selectedVariant == null ? void 0 : selectedVariant.available) || isSingleQuantityRouteProtectionItem,
              className: clsx_m_default("w-full", (_f = settings == null ? void 0 : settings.button__style) != null ? _f : "button-primary"),
              children: [
                o3("span", { children: !selectedVariant ? (_h = (_g = window.theme_content) == null ? void 0 : _g.product) == null ? void 0 : _h.unavailable : (selectedVariant == null ? void 0 : selectedVariant.available) ? pre_order && product_data__preorder_cta && (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) <= 0 ? (_j = (_i = window.theme_content) == null ? void 0 : _i.product) == null ? void 0 : _j.pre_order : (_l = (_k = window.theme_content) == null ? void 0 : _k.product) == null ? void 0 : _l.add_to : (_n2 = (_m = window.theme_content) == null ? void 0 : _m.product) == null ? void 0 : _n2.sold_out }),
                o3(LoadingSpinner, { loading })
              ]
            }
          )
        ]
      }
    );
  }, "ProductBuyButtons");

  // product-add-to-cart-bar.tsx
  var ProductAddToCartBar = /* @__PURE__ */ __name(({ useProduct, upsellProductHandle }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const { selectedVariant, product } = useProduct(({ selectedVariant: selectedVariant2, product: product2 }) => ({
      selectedVariant: selectedVariant2,
      product: product2
    }));
    const [upsellProduct, setUpsellProduct] = h2(null);
    const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2 }) => ({ getAsyncProduct: getAsyncProduct2 }));
    const { updateProduct } = useProductQuickView(({ updateProduct: updateProduct2 }) => ({ updateProduct: updateProduct2 }));
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const handleClick = T2((e3) => {
      const productElement = document.querySelector(
        `[data-product-handle="${product == null ? void 0 : product.handle}"]`
      );
      const headerElement = document.querySelector(`.header-position`);
      if (productElement) {
        scrollToY(500, productElement.offsetTop - headerElement.clientHeight);
      }
    }, [product == null ? void 0 : product.handle]);
    p2(() => {
      if (!upsellProduct && upsellProductHandle) {
        getAsyncProduct(upsellProductHandle).then((p4) => setUpsellProduct(p4));
      }
    }, [upsellProduct, upsellProductHandle]);
    const handleUpsellProductClick = T2((e3) => {
      updateProduct(upsellProduct);
      setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
    }, [updateProduct, upsellProduct]);
    if ((_a5 = cartData.items) == null ? void 0 : _a5.some((item) => item.variant_id === (selectedVariant == null ? void 0 : selectedVariant.id))) {
      if (!upsellProduct) {
        return o3(_, {});
      }
      return o3(_, { children: [
        o3("picture", { className: "relative block h-[50px] w-[50px] overflow-hidden rounded-theme-sm max-sm:hidden", children: o3(
          Image2,
          {
            src: (_e = (_c = (_b5 = upsellProduct == null ? void 0 : upsellProduct.selected_or_first_available_variant) == null ? void 0 : _b5.featured_media) == null ? void 0 : _c.src) != null ? _e : (_d = upsellProduct == null ? void 0 : upsellProduct.featured_media) == null ? void 0 : _d.src,
            alt: upsellProduct == null ? void 0 : upsellProduct.title,
            width: 50,
            className: "inset-0 block h-full w-full object-cover object-center"
          }
        ) }),
        o3(
          "a",
          {
            className: "flex flex-col justify-center overflow-hidden whitespace-nowrap max-sm:hidden",
            href: (_f = upsellProduct == null ? void 0 : upsellProduct.url.split("?")) == null ? void 0 : _f[0],
            children: [
              o3("span", { className: "max-w-[100px] truncate text-sm font-semibold tracking-tight sm:max-w-[300px]", children: upsellProduct == null ? void 0 : upsellProduct.title }),
              (upsellProduct == null ? void 0 : upsellProduct.variants.length) > 1 ? o3("span", { className: "max-w-[100px] truncate text-xs tracking-tight sm:max-w-[300px]", children: (_g = upsellProduct == null ? void 0 : upsellProduct.selected_or_first_available_variant) == null ? void 0 : _g.title }) : null
            ]
          }
        ),
        window.product_drawer ? o3(
          "button",
          {
            type: "button",
            className: "button-primary flex w-full",
            onClick: handleUpsellProductClick,
            children: "Add to Cart"
          }
        ) : o3(ProductBuyButtons, { useProduct })
      ] });
    }
    return o3(_, { children: [
      o3("picture", { className: "relative block h-[50px] w-[50px] overflow-hidden rounded-theme-sm max-sm:hidden", children: o3(
        Image2,
        {
          src: (_k = (_h = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _h.src) != null ? _k : (_j = (_i = product == null ? void 0 : product.featured_media) == null ? void 0 : _i.preview_image) == null ? void 0 : _j.src,
          alt: (_m = (_l = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _l.alt) != null ? _m : product == null ? void 0 : product.title,
          width: 50,
          className: "inset-0 block h-full w-full object-cover object-center"
        }
      ) }),
      o3(
        "button",
        {
          className: "flex flex-col justify-center overflow-hidden whitespace-nowrap max-sm:hidden",
          type: "button",
          onClick: handleClick,
          children: [
            o3("span", { className: "max-w-[100px] truncate text-sm font-semibold tracking-tight sm:max-w-[300px]", children: product == null ? void 0 : product.title }),
            (product == null ? void 0 : product.variants.length) > 1 ? o3("span", { className: "max-w-[100px] truncate text-xs tracking-tight sm:max-w-[300px]", children: selectedVariant == null ? void 0 : selectedVariant.title }) : null
          ]
        }
      ),
      o3(ProductBuyButtons, { useProduct })
    ] });
  }, "ProductAddToCartBar");

  // product-card-flat.tsx
  init_compat_module();
  var ProductCardFlat = /* @__PURE__ */ __name(({
    product,
    disableCartOpen = false
  }) => {
    var _a5, _b5, _c, _d;
    const settings = useGlobalSettings();
    const [loading, setLoading] = h2(false);
    const { updateProduct } = useProductQuickView(({ updateProduct: updateProduct2 }) => ({
      updateProduct: updateProduct2
    }));
    const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2 }) => ({
      getAsyncProduct: getAsyncProduct2
    }));
    const { cartData, routeProtectionProducts } = useCartDrawer(
      ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 }) => ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 })
    );
    const inCartItem = (_a5 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a5.find(
      (line_item) => product.variants.some((variant) => line_item.variant_id === variant.id)
    );
    const routeProtection = inCartItem ? routeProtectionProducts.find((block) => {
      var _a6, _b6;
      return ((_b6 = (_a6 = block == null ? void 0 : block.products) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.handle) === (inCartItem == null ? void 0 : inCartItem.handle);
    }) : null;
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    const handleViewComplementaryProduct = T2((e3, upsellProduct) => __async(void 0, null, function* () {
      if (updateProduct && !isSingleQuantityRouteProtectionItem) {
        e3.preventDefault();
        setLoading(true);
        getAsyncProduct(upsellProduct == null ? void 0 : upsellProduct.handle).then((p4) => __async(void 0, null, function* () {
          var _a6, _b6, _c2, _d2;
          if (p4.variants.length > 1) {
            updateProduct(p4, !disableCartOpen);
            setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
          }
          if (p4.variants.length <= 1) {
            yield cart.add(
              {
                items: [
                  {
                    id: p4.selected_or_first_available_variant.id,
                    quantity: 1,
                    selling_plan: (p4 == null ? void 0 : p4.requires_selling_plan) ? (_d2 = (_c2 = (_b6 = (_a6 = p4 == null ? void 0 : p4.selling_plan_groups) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.selling_plans) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.id : void 0
                  }
                ]
              },
              true
            );
          }
          setLoading(false);
        }));
      }
    }), [disableCartOpen, updateProduct]);
    if (!product)
      return null;
    return o3("article", { className: "relative flex flex-col items-stretch space-y-1 rounded-theme-sm border border-gray-400 p-4", children: [
      o3("div", { className: "flex items-center", children: [
        o3(
          "picture",
          {
            className: clsx_m_default(
              "relative mr-2 h-16 w-16 overflow-hidden",
              !((_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.src) && !(product == null ? void 0 : product.featured_image) && "opacity-0"
            ),
            style: { background: "transparent" },
            children: o3(
              Image2,
              {
                src: `${((_d = (_c = product == null ? void 0 : product.featured_media) == null ? void 0 : _c.preview_image) == null ? void 0 : _d.src) || (product == null ? void 0 : product.featured_image)}`,
                alt: product == null ? void 0 : product.title,
                width: 128,
                height: 128,
                className: "h-full w-full object-cover "
              }
            )
          }
        ),
        o3("h1", { className: "product-card-title--small inline-flex", children: o3(
          "a",
          {
            className: "outline-none hf:underline hf:outline-none",
            href: `/products/${product == null ? void 0 : product.handle}`,
            children: product == null ? void 0 : product.title
          }
        ) })
      ] }),
      o3("div", { className: "mt-auto flex w-full flex-1 flex-col justify-end self-end text-center", children: o3(
        "a",
        {
          className: "button-primary--outline mt-2 flex w-full items-center justify-between px-3 py-2 text-sm outline-none hf:outline-none",
          href: `/products/${product == null ? void 0 : product.handle}`,
          onClick: (e3) => handleViewComplementaryProduct(e3, product),
          children: [
            isSingleQuantityRouteProtectionItem ? o3("span", { className: "whitespace-nowrap", children: "Already Added" }) : (product == null ? void 0 : product.available) ? o3("span", { className: "whitespace-nowrap", children: "Add" }) : o3("span", { className: "", children: "Sold Out" }),
            o3("div", { "data-card-price": "", children: o3("div", { className: "grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap", children: [
              (product == null ? void 0 : product.price_varies) && (product == null ? void 0 : product.compare_at_price_min) < (product == null ? void 0 : product.price_min) ? o3("span", { className: "text-xs font-normal", children: "On Sale from:" }) : (product == null ? void 0 : product.price_varies) ? o3("span", { className: "text-xs font-normal", children: "From:" }) : null,
              o3(
                "span",
                {
                  className: "",
                  dangerouslySetInnerHTML: { __html: window.formatMoney(product == null ? void 0 : product.price_min) }
                }
              ),
              (product == null ? void 0 : product.compare_at_price) > (product == null ? void 0 : product.price) ? o3(
                "span",
                {
                  className: "text-xs text-theme-text/50 line-through",
                  dangerouslySetInnerHTML: {
                    __html: window.formatMoney(product == null ? void 0 : product.compare_at_price)
                  }
                }
              ) : null
            ] }) }),
            o3(LoadingSpinner, { loading })
          ]
        }
      ) })
    ] });
  }, "ProductCardFlat");

  // product-card-small.tsx
  init_compat_module();
  var ProductCardSmall = /* @__PURE__ */ __name(({
    product,
    disableCartOpen = false
  }) => {
    var _a5, _b5, _c, _d, _e, _f;
    const [loading, setLoading] = h2(false);
    const { updateProduct } = useProductQuickView(({ updateProduct: updateProduct2 }) => ({
      updateProduct: updateProduct2
    }));
    const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2 }) => ({
      getAsyncProduct: getAsyncProduct2
    }));
    const handleViewComplementaryProduct = T2((e3, upsellProduct) => __async(void 0, null, function* () {
      if (updateProduct) {
        e3.preventDefault();
        setLoading(true);
        getAsyncProduct(upsellProduct == null ? void 0 : upsellProduct.handle).then((p4) => {
          if (p4) {
            updateProduct(p4, !disableCartOpen);
            setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
          }
          setLoading(false);
        });
      }
    }), [disableCartOpen, updateProduct]);
    if (!product)
      return null;
    return o3("article", { className: "relative flex flex-col items-stretch space-y-1", children: [
      o3(
        "a",
        {
          className: "relative grid h-0 w-full pb-[100%] outline-none hf:outline-none",
          href: `/products/${product == null ? void 0 : product.handle}`,
          children: [
            o3(
              "div",
              {
                className: clsx_m_default(
                  "absolute inset-0 h-full w-full overflow-hidden",
                  !((_a5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _a5.src) && !(product == null ? void 0 : product.featured_image) && "opacity-0"
                ),
                style: { background: "transparent" },
                children: o3(
                  Image2,
                  {
                    src: `${((_c = (_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.preview_image) == null ? void 0 : _c.src) || (product == null ? void 0 : product.featured_image)}&width=200`,
                    alt: product == null ? void 0 : product.title,
                    width: 170,
                    height: 334,
                    className: "inset-0 h-full w-full object-cover "
                  }
                )
              }
            ),
            ((_d = product == null ? void 0 : product.images) == null ? void 0 : _d[1]) ? o3("div", { className: "absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100", children: o3(
              Image2,
              {
                src: `${product == null ? void 0 : product.images[1]}&width=200`,
                alt: product == null ? void 0 : product.title,
                width: 170,
                height: 334,
                className: "inset-0 h-full w-full object-cover "
              }
            ) }) : null,
            ((_e = product == null ? void 0 : product.variants) == null ? void 0 : _e.length) > 1 ? o3("div", { className: "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs tracking-wide text-theme-bg drop-shadow-[1px_1px_1px_black] [text-shadow:1px_1px_1px_black]", children: [
              "Available in ",
              (_f = product == null ? void 0 : product.variants) == null ? void 0 : _f.length,
              " variations"
            ] }) : null
          ]
        }
      ),
      o3("h1", { className: " inline-flex pt-2 text-sm font-semibold leading-[1.2] tracking-tight", children: o3(
        "a",
        {
          className: "outline-none hf:underline hf:outline-none",
          href: `/products/${product == null ? void 0 : product.handle}`,
          children: product == null ? void 0 : product.title
        }
      ) }),
      o3("div", { className: "", "data-card-price": "", children: o3("div", { className: " product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap", children: [
        (product == null ? void 0 : product.price_varies) && (product == null ? void 0 : product.compare_at_price_min) < (product == null ? void 0 : product.price_min) ? o3("span", { className: "text-xs font-normal", children: "On Sale from:" }) : (product == null ? void 0 : product.price_varies) ? o3("span", { className: "text-xs font-normal", children: "From:" }) : null,
        o3(
          "span",
          {
            className: "",
            dangerouslySetInnerHTML: { __html: window.formatMoney(product == null ? void 0 : product.price_min) }
          }
        ),
        (product == null ? void 0 : product.compare_at_price) > (product == null ? void 0 : product.price) ? o3(
          "span",
          {
            className: "text-xs text-theme-text/50 line-through",
            dangerouslySetInnerHTML: { __html: window.formatMoney(product == null ? void 0 : product.compare_at_price) }
          }
        ) : null
      ] }) }),
      o3("div", { className: "mt-auto flex w-full flex-1 flex-col justify-end self-end text-center", children: o3(
        "a",
        {
          className: "button-primary mt-2 w-full px-3 py-1 text-sm outline-none hf:outline-none",
          href: `/products/${product == null ? void 0 : product.handle}`,
          onClick: (e3) => handleViewComplementaryProduct(e3, product),
          children: [
            (product == null ? void 0 : product.available) ? o3("span", { className: "whitespace-nowrap", children: "View" }) : o3("span", { className: "", children: "Sold Out" }),
            o3(LoadingSpinner, { loading })
          ]
        }
      ) })
    ] });
  }, "ProductCardSmall");

  // typography.tsx
  init_compat_module();
  var Typography = /* @__PURE__ */ __name((_a5) => {
    var _b5 = _a5, { fontType, children, className, heading } = _b5, props = __objRest(_b5, ["fontType", "children", "className", "heading"]);
    var _a6;
    const settings = useGlobalSettings();
    const headingClass = `_${heading != null ? heading : "p"}`;
    const headingTag = (_a6 = settings[`typography_${fontType}_${heading}_tag`]) != null ? _a6 : "";
    const processedChildren = Cn.Children.toArray(children).map((child, index) => {
      if (typeof child === "string" || typeof child === "number") {
        switch (headingTag) {
          case "p":
            return o3("p", { className: headingClass, children: child });
          case "h1":
            return o3("h1", { className: headingClass, children: child });
          case "h2":
            return o3("h2", { className: headingClass, children: child });
          case "h3":
            return o3("h3", { className: headingClass, children: child });
          case "h4":
            return o3("h4", { className: headingClass, children: child });
          case "h5":
            return o3("h5", { className: headingClass, children: child });
          case "h6":
            return o3("h6", { className: headingClass, children: child });
          case "blockquote":
            return o3("blockquote", { className: headingClass, children: child });
          case "div":
            return o3("div", { className: headingClass, children: child });
        }
        return `${child}`.split("</").map((item, index2, arr) => {
          if (index2 !== 0) {
            item = `</${item}`;
          }
          return item.replace(/<(h1|h2|h3|h4|h5|h6|p)>/gi, (match, group, ...rest) => {
            return `<${settings[`typography_${fontType}_${group}_tag`]} class="_${group}">`;
          }).replace(/<\/(h1|h2|h3|h4|h5|h6|p)>/gi, (match, group, ...rest) => {
            return `</${settings[`typography_${fontType}_${group}_tag`]}>`;
          });
        }).join("");
      }
      if (isObject(child) && "type" in child && typeof child.type === "string") {
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(child.type)) {
          const headingClass2 = `_${heading != null ? heading : child.type}`;
          const headingTag2 = settings[`typography_${fontType}_${child.type}_tag`];
          switch (headingTag2) {
            case "p":
              return o3("p", { className: headingClass2, children: child.props.children });
            case "h1":
              return o3("h1", { className: headingClass2, children: child.props.children });
            case "h2":
              return o3("h2", { className: headingClass2, children: child.props.children });
            case "h3":
              return o3("h3", { className: headingClass2, children: child.props.children });
            case "h4":
              return o3("h4", { className: headingClass2, children: child.props.children });
            case "h5":
              return o3("h5", { className: headingClass2, children: child.props.children });
            case "h6":
              return o3("h6", { className: headingClass2, children: child.props.children });
            case "blockquote":
              return o3("blockquote", { className: headingClass2, children: child.props.children });
            case "div":
              return o3("div", { className: headingClass2, children: child.props.children });
          }
        }
      }
      return null;
    });
    return processedChildren.some((child) => typeof child === "string") ? o3(
      "div",
      {
        className: clsx_m_default(`font-group-${fontType}`, className),
        dangerouslySetInnerHTML: { __html: processedChildren.join("") },
        children: processedChildren
      }
    ) : o3("div", { className: clsx_m_default(`font-group-${fontType}`, className), children: processedChildren });
  }, "Typography");

  // product.complementary.tsx
  init_compat_module();
  var ProductComplementaryItems = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    const { product } = useProduct(({ product: product2 }) => ({ product: product2 }));
    const { getUntransformedAsyncProduct, hydrated } = useGlobalProducts(
      ({ getUntransformedAsyncProduct: getUntransformedAsyncProduct2, hydrated: hydrated2 }) => ({
        getUntransformedAsyncProduct: getUntransformedAsyncProduct2,
        hydrated: hydrated2
      })
    );
    const [products, setProducts] = h2([]);
    const loadComplementaryProducts = T2(() => __async(void 0, null, function* () {
      var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      let complementaryProducts = settings.source === "complementary" ? (_c = (_b5 = (_a5 = product == null ? void 0 : product.metafields) == null ? void 0 : _a5["shopify--discovery--product_recommendation"]) == null ? void 0 : _b5.complementary_products) != null ? _c : [] : (_f = (_e = (_d = product == null ? void 0 : product.metafields) == null ? void 0 : _d["shopify--discovery--product_recommendation"]) == null ? void 0 : _e.related_products) != null ? _f : [];
      if (!settings.hide_upsell_products || complementaryProducts.length === 0) {
        complementaryProducts = [...complementaryProducts, ...settings.products];
      }
      const finalProducts = yield Promise.all(
        (_j = (_i = (_h = (_g = complementaryProducts == null ? void 0 : complementaryProducts.filter((p4) => p4.id !== (product == null ? void 0 : product.id))) == null ? void 0 : _g.map((product2) => window.transformProducts(product2))) == null ? void 0 : _h.filter((product2) => !(product2 == null ? void 0 : product2.hidden))) == null ? void 0 : _i.slice(0, 5)) == null ? void 0 : _j.map((p4) => getUntransformedAsyncProduct(p4.handle))
      );
      setProducts(
        (_k = finalProducts == null ? void 0 : finalProducts.map((product2) => window.transformProducts(product2))) == null ? void 0 : _k.filter((product2) => !(product2 == null ? void 0 : product2.hidden))
      );
    }), [product == null ? void 0 : product.id, product == null ? void 0 : product.metafields, settings.products]);
    p2(() => {
      if (hydrated) {
        loadComplementaryProducts();
      }
    }, [loadComplementaryProducts, hydrated]);
    return o3("div", { className: "pb-4", children: products.length > 0 ? o3(_, { children: [
      o3(Typography, { fontType: settings.title_font, children: settings.title }),
      o3("main", { className: "relative py-2", children: products.length === 1 && settings.style === "small" ? o3("div", { children: products == null ? void 0 : products.map(
        (upsellProduct) => settings.style === "small" ? o3(ProductCardFlat, { product: upsellProduct }, upsellProduct.id) : o3(ProductCardContainer, { product: upsellProduct }, upsellProduct.id)
      ) }) : o3(
        "div",
        {
          className: clsx_m_default(
            "scrollbar-none -my-8 grid snap-x snap-mandatory scroll-pl-8 grid-flow-col-dense gap-4 overflow-x-auto py-8 "
          ),
          style: {
            gridAutoColumns: settings.style === "small" ? "170px" : "calc(50% - 8px)"
          },
          children: [
            products == null ? void 0 : products.map(
              (upsellProduct) => settings.style === "small" ? o3(ProductCardSmall, { product: upsellProduct }, upsellProduct.id) : o3(ProductCardContainer, { product: upsellProduct }, upsellProduct.id)
            ),
            o3(ScrollBar, { itemCount: products.length })
          ]
        }
      ) })
    ] }) : null });
  }, "ProductComplementaryItems");

  // product.description.tsx
  init_compat_module();
  var ProductDescription = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j;
    const { product } = useProduct(({ product: product2 }) => ({ product: product2 }));
    const [activeTabIndex, setActiveTabIndex] = h2(0);
    const div = document.createElement("div");
    div.innerHTML = product.description;
    const content = div.textContent;
    const customTitles = settings.custom_tag_overrides.split(",").map((c4) => c4.trim());
    return o3("div", { className: "grid gap-3", children: {
      plain: o3(
        "div",
        {
          className: "prose prose-theme",
          dangerouslySetInnerHTML: { __html: product.description }
        }
      ),
      accordion: o3("div", { className: "grid gap-3 border-b border-b-theme-text/50", children: o3(
        Accordion,
        {
          title: "Description",
          content: product.description,
          initOpen: !!settings.uncollapse
        }
      ) }),
      accordion_style_h1: (_b5 = (_a5 = product == null ? void 0 : product.description) == null ? void 0 : _a5.split("<h1")) == null ? void 0 : _b5.map((headingBlock, index) => {
        if (!headingBlock.includes("</h1>")) {
          div.innerHTML = headingBlock;
          const content2 = div.innerHTML;
          return o3("div", { className: "grid gap-3 border-b border-b-theme-text/50", children: o3(
            Accordion,
            {
              title: "Description",
              content: content2,
              initOpen: settings.uncollapse && index === 0
            }
          ) }, index);
        }
        if (headingBlock.includes("</h1>")) {
          const [rawTitle, rawContent] = headingBlock.split("</h1>");
          div.innerHTML = `<h1${rawTitle}</h1>`;
          const title = div.textContent;
          div.innerHTML = rawContent;
          const content2 = div.innerHTML;
          return o3("div", { className: "grid gap-3 border-b border-b-theme-text/50", children: o3(
            Accordion,
            {
              title,
              content: content2,
              initOpen: settings.uncollapse && index === 0
            }
          ) }, index);
        }
        return null;
      }),
      tabs_style_h1: (_d = (_c = product == null ? void 0 : product.description) == null ? void 0 : _c.split("<h1")) == null ? void 0 : _d.map((_5, _index, arr) => {
        if (_index > 0)
          return null;
        return o3("section", { "data-tabs": "", className: "col-span-12", children: [
          o3("header", { className: "mb-6 grid auto-cols-min grid-flow-col-dense gap-3", children: arr.map((headingBlock, index) => {
            if (!headingBlock.includes("</h1>")) {
              return o3(
                "button",
                {
                  type: "button",
                  className: clsx_m_default(
                    "label-item ac:label--primary label--primary--outline",
                    activeTabIndex === index && "active"
                  ),
                  onClick: () => {
                    setActiveTabIndex(index);
                  },
                  children: "Description"
                },
                "Description"
              );
            }
            if (headingBlock.includes("</h1>")) {
              const [rawTitle, rawContent] = headingBlock.split("</h1>");
              div.innerHTML = `<h1${rawTitle}</h1>`;
              const title = div.textContent;
              return o3(
                "button",
                {
                  type: "button",
                  className: clsx_m_default(
                    "label-item ac:label--primary label--primary--outline",
                    activeTabIndex === index && "active"
                  ),
                  onClick: () => {
                    setActiveTabIndex(index);
                  },
                  children: title
                },
                title
              );
            }
            return null;
          }) }),
          o3("main", { className: "relative", children: arr.map((headingBlock, index) => {
            if (!headingBlock.includes("</h1>")) {
              div.innerHTML = headingBlock;
              const content2 = div.innerHTML;
              return o3(
                "section",
                {
                  className: clsx_m_default(
                    "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                    activeTabIndex === index && "active"
                  ),
                  children: o3("div", { className: "_p", dangerouslySetInnerHTML: { __html: content2 } })
                },
                "Description_tab"
              );
            }
            if (headingBlock.includes("</h1>")) {
              const [rawTitle, rawContent] = headingBlock.split("</h1>");
              div.innerHTML = `<h1${rawTitle}</h1>`;
              const title = div.textContent;
              div.innerHTML = rawContent;
              const content2 = div.innerHTML;
              return o3(
                "section",
                {
                  className: clsx_m_default(
                    "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                    activeTabIndex === index && "active"
                  ),
                  children: o3("div", { className: "_p ", dangerouslySetInnerHTML: { __html: content2 } })
                },
                title
              );
            }
            return null;
          }) })
        ] }, "Not-needed");
      }),
      accordion_custom_tags: (_g = (_f = (_e = product == null ? void 0 : product.description) == null ? void 0 : _e.replace(/\[([^/]*)]/gi, "|--|$1|-|-|")) == null ? void 0 : _f.split("|--|")) == null ? void 0 : _g.map((string, index) => {
        const [key, content2] = string.split("|-|-|");
        if (!content2) {
          return o3("div", { className: "grid gap-3 border-b border-b-theme-text/50", children: o3(
            Accordion,
            {
              title: customTitles[index] || "Description",
              content: key,
              initOpen: settings.uncollapse && index === 0
            }
          ) }, index);
        }
        div.innerHTML = content2.split(`[/${key}]`)[0];
        const finalContent = div.innerHTML;
        return o3("div", { className: "grid gap-3 border-b border-b-theme-text/50", children: o3(
          Accordion,
          {
            title: customTitles[index] ? customTitles[index] : key,
            content: finalContent,
            initOpen: settings.uncollapse && index === 0
          }
        ) }, index);
      }),
      tabs_custom_tags: (_j = (_i = (_h = product == null ? void 0 : product.description) == null ? void 0 : _h.replace(/\[([^/]*)]/gi, "|--|$1|-|-|")) == null ? void 0 : _i.split("|--|")) == null ? void 0 : _j.map((_5, _index, arr) => {
        if (_index > 0)
          return null;
        return o3("section", { "data-tabs": "", className: "col-span-12", children: [
          o3("header", { className: "mb-6 grid auto-cols-min grid-flow-col-dense gap-3", children: arr.map((string, index) => {
            const [key, content2] = string.split("|-|-|");
            if (!content2) {
              return o3(
                "button",
                {
                  type: "button",
                  className: clsx_m_default(
                    "label-item ac:label--primary label--primary--outline",
                    activeTabIndex === index && "active"
                  ),
                  onClick: () => {
                    setActiveTabIndex(index);
                  },
                  children: customTitles[index] ? customTitles[index] : "Description"
                },
                "Description"
              );
            }
            div.innerHTML = content2.split(`[/${key}]`)[0];
            return o3(
              "button",
              {
                type: "button",
                className: clsx_m_default(
                  "label-item ac:label--primary label--primary--outline",
                  activeTabIndex === index && "active"
                ),
                onClick: () => {
                  setActiveTabIndex(index);
                },
                children: customTitles[index] ? customTitles[index] : key
              },
              "Description"
            );
          }) }),
          o3("main", { className: "relative", children: arr.map((string, index) => {
            const [key, content2] = string.split("|-|-|");
            if (!content2) {
              return o3(
                "section",
                {
                  className: clsx_m_default(
                    "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                    activeTabIndex === index && "active"
                  ),
                  children: o3("div", { className: "_p ", dangerouslySetInnerHTML: { __html: key } })
                },
                "Description_tab"
              );
            }
            div.innerHTML = content2.split(`[/${key}]`)[0];
            const finalContent = div.innerHTML;
            return o3(
              "section",
              {
                className: clsx_m_default(
                  "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                  activeTabIndex === index && "active"
                ),
                children: o3(
                  "div",
                  {
                    className: "_p ",
                    dangerouslySetInnerHTML: { __html: finalContent }
                  }
                )
              },
              customTitles[index] ? customTitles[index] : key
            );
          }) })
        ] }, "Not-needed");
      })
    }[settings.style] });
  }, "ProductDescription");

  // product.dynamic_buy_buttons.tsx
  init_compat_module();
  var DynamicProductBuyButtons = /* @__PURE__ */ __name(({ useProduct, settings, container }) => {
    const { selectedVariant, selectedSellingPlan } = useProduct(
      ({ selectedVariant: selectedVariant2, selectedSellingPlan: selectedSellingPlan2 }) => ({
        selectedVariant: selectedVariant2,
        selectedSellingPlan: selectedSellingPlan2
      })
    );
    p2(() => {
      const button = container.querySelector(".shopify-payment-button__button");
      const variantInput = container.querySelector("[data-product-form-variant]");
      if (button) {
        button.disabled = !(selectedVariant == null ? void 0 : selectedVariant.available);
      }
      if (variantInput) {
        variantInput.value = `${selectedVariant == null ? void 0 : selectedVariant.id}`;
      }
      const selling_planInput = container.querySelector(
        "[data-product-form-selling-plan-variant]"
      );
      if (selling_planInput) {
        selling_planInput.disabled = !selectedSellingPlan;
        selling_planInput.value = `${selectedSellingPlan}`;
      }
    }, [container, selectedSellingPlan, selectedVariant == null ? void 0 : selectedVariant.available, selectedVariant == null ? void 0 : selectedVariant.id]);
    return null;
  }, "DynamicProductBuyButtons");

  // product.gallery.tsx
  init_compat_module();
  var ProductGalleryHorizontal = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const { product, setSelectedVariant, selectedVariant } = useProduct(
      ({ product: product2, setSelectedVariant: setSelectedVariant2, selectedVariant: selectedVariant2 }) => ({
        product: product2,
        setSelectedVariant: setSelectedVariant2,
        selectedVariant: selectedVariant2
      })
    );
    const variantRef = _2(selectedVariant == null ? void 0 : selectedVariant.id);
    const { width } = useWindowSize();
    const scrollContainer = _2(null);
    p2(() => {
      if (width > 1024 && settings.gallery__layout !== "horizontal") {
        return null;
      }
      if (!(window == null ? void 0 : window.Shopify.designMode) && variantRef.current !== (selectedVariant == null ? void 0 : selectedVariant.id)) {
        variantRef.current = selectedVariant == null ? void 0 : selectedVariant.id;
        scrollToX(0, 0, scrollContainer.current);
      }
    }, [selectedVariant, settings.gallery__layout, width]);
    p2(() => {
      setTimeout(
        () => {
          var _a6;
          const overlay = document.querySelector("[data-product-loading-screen]");
          (_a6 = overlay == null ? void 0 : overlay.classList) == null ? void 0 : _a6.add("opacity-0", "pointer-events-none");
        },
        10
      );
    }, []);
    const scrollToMedia = T2((mediaId) => {
      const scrollTarget = scrollContainer.current.querySelector(
        `[data-media-id="${mediaId}"]`
      );
      if (scrollTarget) {
        const { offsetTop, offsetLeft } = scrollTarget;
        scrollToXY(200, offsetLeft, offsetTop, scrollContainer.current);
      }
    }, []);
    if (width > 1024 && settings.gallery__layout !== "horizontal") {
      return null;
    }
    let mediaItems = [selectedVariant == null ? void 0 : selectedVariant.featured_media];
    if (settings.variants_multi_images === "via_metafield") {
      const [namespace, key] = (_c = (_b5 = (_a5 = settings.variants_image_metafield) == null ? void 0 : _a5.trim()) == null ? void 0 : _b5.split(".")) != null ? _c : [
        "smart",
        "images"
      ];
      (_f = (_e = (_d = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _d[namespace]) == null ? void 0 : _e[key]) == null ? void 0 : _f.forEach((url) => {
        if (typeof url !== "string" && typeof url === "object" && "src" in url) {
          url = url["src"];
        }
        mediaItems.push({
          aspect_ratio: 1,
          height: 1,
          id: shortUUID(),
          media_type: "image",
          position: -1,
          preview_image: {
            aspect_ratio: 1,
            height: 1,
            src: url,
            width: 1
          },
          src: url,
          width: 1
        });
      });
    }
    if (settings.variants_multi_images === "via_image_order") {
      const positions = [...new Set(product.variants.map((v4) => {
        var _a6;
        return (_a6 = v4.featured_media) == null ? void 0 : _a6.position;
      }))].sort(
        (a4, b4) => a4 - b4
      );
      const from = (_g = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _g.position;
      const to = (_h = positions[positions.findIndex((position) => position === from) + 1]) != null ? _h : 9999;
      product.media.forEach((media) => {
        if ((media == null ? void 0 : media.position) > from && (media == null ? void 0 : media.position) < to) {
          mediaItems.push(media);
        }
      });
    }
    mediaItems = [
      ...mediaItems,
      ...!settings.hide_not_selected_variant_images || !((_i = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _i.src) ? (_k = (_j = product == null ? void 0 : product.media) == null ? void 0 : _j.filter((media) => {
        var _a6;
        return media.id !== ((_a6 = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _a6.id);
      })) != null ? _k : [] : []
    ].filter((media) => media);
    mediaItems = mediaItems.filter(
      (media, i4, arr) => arr.findIndex((m3) => m3.src === media.src) === i4
    );
    const variantsWithImage = (_l = product == null ? void 0 : product.variants) == null ? void 0 : _l.filter(
      (v1, i4, a4) => v1.featured_media && a4.findIndex((v22) => {
        var _a6, _b6;
        return ((_a6 = v1 == null ? void 0 : v1.featured_media) == null ? void 0 : _a6.id) === ((_b6 = v22 == null ? void 0 : v22.featured_media) == null ? void 0 : _b6.id);
      }) === i4
    );
    return o3(_, { children: [
      o3("main", { className: "scroll-container relative grid", children: o3(
        "div",
        {
          className: clsx_m_default(
            "scrollbar-none md:min-h-56 grid max-w-full flex-1 snap-x snap-mandatory auto-cols-min grid-flow-col-dense gap-4 overflow-x-auto md:gap-8",
            (mediaItems == null ? void 0 : mediaItems.filter((m3) => (m3 == null ? void 0 : m3.alt) !== "hide-image").length) > 1 ? "pb-12" : "pb-6"
          ),
          ref: scrollContainer,
          children: [
            (_m = mediaItems == null ? void 0 : mediaItems.filter((m3) => (m3 == null ? void 0 : m3.alt) !== "hide-image")) == null ? void 0 : _m.map((media) => {
              var _a6, _b6, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2;
              return o3(
                "figure",
                {
                  "data-media-id": media.id,
                  className: "image-test relative grid max-h-[680px] w-screen max-w-[min(85vw,_calc(680px*var(--image-aspect-ratio)))] snap-start snap-always overflow-hidden transition-all ease-in-out max-lg:max-h-[460px] max-lg:max-w-[min(85vw,_calc(460px*var(--image-aspect-ratio)))] md:aspect-[unset]",
                  style: {
                    aspectRatio: (_a6 = media == null ? void 0 : media.aspect_ratio) == null ? void 0 : _a6.toFixed(3),
                    "--image-aspect-ratio": (_b6 = media == null ? void 0 : media.aspect_ratio) == null ? void 0 : _b6.toFixed(3)
                  },
                  children: {
                    image: o3(
                      Image2,
                      {
                        src: `${media.src}`,
                        maxWidth: 1200,
                        alt: (_c2 = media.alt) != null ? _c2 : product == null ? void 0 : product.title,
                        className: "absolute left-0 top-0 h-full w-full bg-inherit object-contain object-center",
                        screenPercentage: 70,
                        onMouseMove: settings.gallery__zoom && width > 768 ? (e3) => {
                          const { left, top, width: width2, height } = e3.currentTarget.parentElement.getBoundingClientRect();
                          const maxPercentage = 50 - 50 / (+settings.gallery__zoom_scale / 100);
                          const leftPercentage = ((e3.clientX - left) / width2 * 100 - 50) * 2 / 100 * maxPercentage;
                          const topPercentage = ((e3.clientY - top) / height * 100 - 50) * 2 / 100 * maxPercentage;
                          e3.currentTarget.style.transform = `scale(${+settings.gallery__zoom_scale / 100}) translate(${-leftPercentage}%, ${-topPercentage}%)`;
                        } : void 0,
                        onMouseLeave: settings.gallery__zoom && width > 768 ? (e3) => {
                          e3.currentTarget.style.transform = ``;
                        } : void 0
                      }
                    ),
                    video: o3(
                      "video",
                      {
                        playsInline: true,
                        controls: true,
                        autoPlay: true,
                        loop: settings.gallery__loop_videos,
                        preload: "none",
                        className: "absolute left-0 top-0 h-full w-full bg-inherit object-contain",
                        muted: true,
                        "aria-label": (_d2 = media.alt) != null ? _d2 : product == null ? void 0 : product.title,
                        poster: media.preview_image.src,
                        children: [
                          o3(
                            "source",
                            {
                              src: (_f2 = (_e2 = media == null ? void 0 : media.sources) == null ? void 0 : _e2.find(
                                (src) => src.format === "mp4" && src.width <= 852
                              )) == null ? void 0 : _f2.url,
                              type: "video/mp4"
                            }
                          ),
                          o3(
                            Image2,
                            {
                              src: media.preview_image.src,
                              alt: (_g2 = media.alt) != null ? _g2 : product == null ? void 0 : product.title,
                              screenPercentage: 60
                            }
                          )
                        ]
                      }
                    ),
                    external_video: o3(
                      "iframe",
                      {
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true,
                        className: "js-youtube absolute left-0 top-0 h-full w-full border-0 bg-inherit object-contain",
                        loading: "lazy",
                        src: media.host === "youtube" ? `https://www.youtube.com/embed/${media.external_id}?autoplay=0&controls=1&muted=1&enablejsapi=1&loop=${settings.gallery__loop_videos ? 1 : 0}&modestbranding=1&playsinline=1&rel=0` : `https://player.vimeo.com/video/${media.external_id}`,
                        title: (_h2 = media.alt) != null ? _h2 : product == null ? void 0 : product.title
                      }
                    ),
                    model: o3(_, { children: [
                      o3(
                        "span",
                        {
                          className: "relative left-0 top-0 block h-full w-full",
                          style: {
                            // paddingBottom: `calc(100% * ${media.preview_image.aspect_ratio})`,
                            width: `Min(calc(460px * ${media.preview_image.aspect_ratio}), 85vw)`,
                            height: `Min(calc(460px / ${media.preview_image.aspect_ratio}), calc(85vw / ${media.preview_image.aspect_ratio})`
                          }
                        }
                      ),
                      o3("span", { className: "absolute left-0 top-0 block h-full w-full pb-[100%]", children: o3(
                        "model-viewer",
                        {
                          className: "h-full w-full bg-inherit object-contain",
                          style: "--poster-color: transparent; position: absolute;",
                          src: (_j2 = (_i2 = media.sources) == null ? void 0 : _i2.find((source) => source.format === "glb")) == null ? void 0 : _j2.url,
                          "camera-controls": "true",
                          "data-shopify-feature": "1.12",
                          alt: (_k2 = media.alt) != null ? _k2 : product == null ? void 0 : product.title,
                          poster: media.preview_image.src,
                          "data-js-focus-visible": "",
                          "ar-status": "not-presenting"
                        }
                      ) })
                    ] })
                  }[media.media_type]
                },
                `media-${media.id}`
              );
            }),
            o3(ScrollBarButtonsNew, { itemCount: mediaItems == null ? void 0 : mediaItems.length, className: "bottom-8" }),
            o3(ScrollBarNew, { itemCount: mediaItems == null ? void 0 : mediaItems.length, showCount: true, className: "bottom-8" })
          ]
        }
      ) }),
      settings.gallery__show_thumbnails !== "hidden" ? o3(
        "footer",
        {
          className: clsx_m_default(
            "scrollbar-x-slim relative mt-12 flex min-h-[100px] flex-1 gap-1 overflow-x-auto pb-2",
            settings.gallery__show_thumbnails
          ),
          children: (variantsWithImage == null ? void 0 : variantsWithImage.length) !== -1 ? mediaItems == null ? void 0 : mediaItems.filter((m3) => (m3 == null ? void 0 : m3.alt) !== "hide-image").map((media) => {
            var _a6, _b6;
            return o3(
              "button",
              {
                className: "relative block h-[100px] shrink-0 border border-gray-200",
                onClick: () => scrollToMedia(media.id),
                children: o3(
                  Image2,
                  {
                    src: `${(_a6 = media == null ? void 0 : media.preview_image) == null ? void 0 : _a6.src}`,
                    alt: (_b6 = media == null ? void 0 : media.alt) != null ? _b6 : product == null ? void 0 : product.title,
                    width: Math.round(media.aspect_ratio * 100),
                    height: 100,
                    className: "h-full w-full object-contain",
                    screenPercentage: 10
                  }
                )
              },
              `thumbnail-${media.id}`
            );
          }) : null
        }
      ) : null
    ] });
  }, "ProductGalleryHorizontal");
  var ProductGalleryVertical = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q;
    const { product, setSelectedVariant, selectedVariant } = useProduct(
      ({ product: product2, setSelectedVariant: setSelectedVariant2, selectedVariant: selectedVariant2 }) => ({
        product: product2,
        setSelectedVariant: setSelectedVariant2,
        selectedVariant: selectedVariant2
      })
    );
    const lastVariantId = _2(selectedVariant == null ? void 0 : selectedVariant.id);
    const { width } = useWindowSize();
    const scrollContainer = _2(null);
    const [currentMediaId, setCurrentMediaId] = h2(
      (_c = (_a5 = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _a5.id) != null ? _c : (_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.id
    );
    p2(() => {
      var _a6, _b6, _c2;
      if (lastVariantId.current !== (selectedVariant == null ? void 0 : selectedVariant.id)) {
        lastVariantId.current = selectedVariant == null ? void 0 : selectedVariant.id;
        setCurrentMediaId((_c2 = (_a6 = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _a6.id) != null ? _c2 : (_b6 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b6.id);
        if (width >= 1024) {
          scrollToY(100, scrollContainer.current.offsetTop);
        }
      }
    }, [(_d = product == null ? void 0 : product.featured_media) == null ? void 0 : _d.id, selectedVariant, width]);
    p2(() => {
      setTimeout(
        () => {
          var _a6;
          const overlay = document.querySelector("[data-product-loading-screen]");
          (_a6 = overlay == null ? void 0 : overlay.classList) == null ? void 0 : _a6.add("opacity-0", "pointer-events-none");
        },
        10
      );
    }, []);
    const scrollToMedia = T2((mediaId) => {
      if (settings.gallery__layout === "standard") {
        const selectedMediaItem = scrollContainer.current.querySelector(
          `[data-media-id="${mediaId}"]`
        );
        scrollContainer.current.querySelectorAll("figure").forEach((mediaItem) => {
          mediaItem.classList.add("hidden");
        });
        selectedMediaItem.classList.remove("hidden");
        return;
      }
      const scrollTarget = scrollContainer.current.querySelector(
        `[data-media-id="${mediaId}"]`
      );
      if (scrollTarget) {
        const { offsetTop, offsetLeft } = scrollTarget;
        scrollToXY(200, offsetLeft, offsetTop);
      }
    }, [settings.gallery__layout]);
    if (width <= 1024) {
      return null;
    }
    let mediaItems = [selectedVariant == null ? void 0 : selectedVariant.featured_media];
    if (settings.variants_multi_images === "via_metafield") {
      const [namespace, key] = (_g = (_f = (_e = settings.variants_image_metafield) == null ? void 0 : _e.trim()) == null ? void 0 : _f.split(".")) != null ? _g : [
        "smart",
        "images"
      ];
      (_j = (_i = (_h = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _h[namespace]) == null ? void 0 : _i[key]) == null ? void 0 : _j.forEach((url) => {
        if (typeof url !== "string" && typeof url === "object" && "src" in url) {
          url = url["src"];
        }
        mediaItems.push({
          aspect_ratio: 1,
          height: 1,
          id: shortUUID(),
          media_type: "image",
          position: -1,
          preview_image: {
            aspect_ratio: 1,
            height: 1,
            src: url,
            width: 1
          },
          src: url,
          width: 1
        });
      });
    }
    if (settings.variants_multi_images === "via_image_order") {
      const positions = [...new Set(product.variants.map((v4) => {
        var _a6;
        return (_a6 = v4.featured_media) == null ? void 0 : _a6.position;
      }))].sort(
        (a4, b4) => a4 - b4
      );
      const from = (_k = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _k.position;
      const to = (_l = positions[positions.findIndex((position) => position === from) + 1]) != null ? _l : 9999;
      product.media.forEach((media) => {
        if ((media == null ? void 0 : media.position) > from && (media == null ? void 0 : media.position) < to) {
          mediaItems.push(media);
        }
      });
    }
    mediaItems = [
      ...mediaItems,
      ...!settings.hide_not_selected_variant_images || !((_m = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _m.src) ? (_o = (_n2 = product == null ? void 0 : product.media) == null ? void 0 : _n2.filter((media) => {
        var _a6;
        return media.id !== ((_a6 = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _a6.id);
      })) != null ? _o : [] : []
    ].filter((media) => media);
    let imageOdd = 0;
    const variantsWithImage = (_p = product == null ? void 0 : product.variants) == null ? void 0 : _p.filter(
      (v1, i4, a4) => v1.featured_media && a4.findIndex((v22) => {
        var _a6, _b6;
        return ((_a6 = v1 == null ? void 0 : v1.featured_media) == null ? void 0 : _a6.id) === ((_b6 = v22 == null ? void 0 : v22.featured_media) == null ? void 0 : _b6.id);
      }) === i4
    );
    mediaItems = mediaItems.filter(
      (media, i4, arr) => arr.findIndex((m3) => m3.src === media.src) === i4
    );
    console.log({ mediaItems });
    return o3(_, { children: [
      settings.gallery__show_thumbnails === "responsive" || settings.gallery__show_thumbnails === "max-md:hidden" ? o3(
        "aside",
        {
          className: "scrollbar-none sticky grid h-min max-h-[calc(100vh-var(--top-bar-spacing))] gap-1 overflow-y-auto pr-1 transition-all ease-linear top-spacing-8",
          "data-product-sticky-content": true,
          children: (variantsWithImage == null ? void 0 : variantsWithImage.length) !== -1 ? mediaItems == null ? void 0 : mediaItems.filter((m3) => (m3 == null ? void 0 : m3.alt) !== "hide-image").map((media) => {
            var _a6, _b6;
            return o3(
              "button",
              {
                className: "relative grid h-full w-full border border-gray-200",
                onClick: () => {
                  scrollToMedia(media.id);
                },
                children: o3(
                  Image2,
                  {
                    src: `${(_a6 = media == null ? void 0 : media.preview_image) == null ? void 0 : _a6.src}`,
                    alt: (_b6 = media == null ? void 0 : media.alt) != null ? _b6 : product == null ? void 0 : product.title,
                    width: 100,
                    height: Math.round(1 / media.aspect_ratio * 100),
                    className: "h-full w-full object-contain",
                    screenPercentage: 10
                  }
                )
              },
              `thumbnail-${media.id}`
            );
          }) : null
        }
      ) : null,
      o3(
        "main",
        {
          ref: scrollContainer,
          "data-gallery__layout": settings.gallery__layout,
          "data-currentmedia": currentMediaId,
          className: clsx_m_default(
            "grid h-min",
            settings.gallery__layout === "vertical" ? "gap-6" : settings.gallery__layout === "standard" ? "" : "grid-cols-2 gap-3"
          ),
          children: (_q = mediaItems == null ? void 0 : mediaItems.filter((m3) => (m3 == null ? void 0 : m3.alt) !== "hide-image")) == null ? void 0 : _q.map((media, index, arr) => {
            var _a6, _b6, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
            const count = index + 1;
            let order = count * 100;
            const isGrid = settings.gallery__layout === "grid";
            let gridClasses = "";
            if (settings.gallery__layout === "standard") {
              gridClasses = media.id !== currentMediaId ? "hidden" : "";
            }
            if (isGrid && (media.aspect_ratio > 1.75 || settings.gallery__first_image_full && index === 0)) {
              gridClasses = "col-span-2";
              if (count % 2 === imageOdd) {
                order = order + 150;
              }
              imageOdd = imageOdd ? 0 : 1;
            }
            if (arr.length === 1) {
              gridClasses = "col-span-2";
            }
            return o3(
              "figure",
              {
                "data-media-id": media.id,
                className: clsx_m_default(
                  "relative grid h-full w-full overflow-hidden rounded-theme-sm transition-all ease-in-out ac:ring ac:ring-primary-outline",
                  gridClasses,
                  settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2" && "overflow-hidden"
                ),
                style: {
                  order: `${order}`,
                  aspectRatio: settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2" ? settings.gallery__aspect_ratio : void 0
                },
                children: {
                  image: o3(
                    Image2,
                    {
                      src: `${media.src}`,
                      maxWidth: 1200,
                      alt: (_a6 = media.alt) != null ? _a6 : product == null ? void 0 : product.title,
                      className: clsx_m_default(
                        "h-full w-full bg-inherit ",
                        settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2" ? "object-cover object-center" : "object-contain"
                      ),
                      onMouseMove: settings.gallery__zoom ? (e3) => {
                        const { left, top, width: width2, height } = e3.currentTarget.parentElement.getBoundingClientRect();
                        const maxPercentage = 50 - 50 / (+settings.gallery__zoom_scale / 100);
                        const leftPercentage = ((e3.clientX - left) / width2 * 100 - 50) * 2 / 100 * maxPercentage;
                        const topPercentage = ((e3.clientY - top) / height * 100 - 50) * 2 / 100 * maxPercentage;
                        e3.currentTarget.style.transform = `scale(${+settings.gallery__zoom_scale / 100}) translate(${-leftPercentage}%, ${-topPercentage}%)`;
                      } : void 0,
                      onMouseLeave: settings.gallery__zoom ? (e3) => {
                        e3.currentTarget.style.transform = ``;
                      } : void 0,
                      screenPercentage: 70
                    }
                  ),
                  video: o3(
                    "video",
                    {
                      playsInline: true,
                      controls: true,
                      autoPlay: true,
                      loop: settings.gallery__loop_videos,
                      preload: "none",
                      className: clsx_m_default(
                        "h-full w-full bg-inherit ",
                        settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2" ? "object-cover object-center" : "object-contain"
                      ),
                      muted: true,
                      "aria-label": (_b6 = media.alt) != null ? _b6 : product == null ? void 0 : product.title,
                      poster: media.preview_image.src,
                      children: [
                        o3(
                          "source",
                          {
                            src: (_d2 = (_c2 = media == null ? void 0 : media.sources) == null ? void 0 : _c2.find((src) => src.format === "mp4" && src.width <= 852)) == null ? void 0 : _d2.url,
                            type: "video/mp4"
                          }
                        ),
                        o3(
                          Image2,
                          {
                            src: media.preview_image.src,
                            alt: (_e2 = media.alt) != null ? _e2 : product == null ? void 0 : product.title,
                            screenPercentage: 60
                          }
                        )
                      ]
                    }
                  ),
                  external_video: o3(
                    "iframe",
                    {
                      frameBorder: "0",
                      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: true,
                      className: clsx_m_default(
                        "h-full w-full bg-inherit ",
                        settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2" ? "object-cover object-center" : "object-contain",
                        media.host === "youtube" ? "js-youtube" : "js-vimeo"
                      ),
                      loading: "lazy",
                      src: media.host === "youtube" ? `https://www.youtube.com/embed/${media.external_id}?autoplay=0&controls=1&muted=1&enablejsapi=1&loop=${settings.gallery__loop_videos ? 1 : 0}&modestbranding=1&playsinline=1&rel=0` : `https://player.vimeo.com/video/${media.external_id}`,
                      title: (_f2 = media.alt) != null ? _f2 : product == null ? void 0 : product.title
                    }
                  ),
                  model: o3(_, { children: [
                    o3(
                      "span",
                      {
                        className: "relative left-0 top-0 block h-full w-full",
                        style: {
                          paddingBottom: `calc(100% * ${media.preview_image.aspect_ratio})`
                        }
                      }
                    ),
                    o3("span", { className: "absolute left-0 top-0 block h-full w-full pb-[100%]", children: o3(
                      "model-viewer",
                      {
                        className: "h-full w-full bg-inherit object-contain",
                        style: "--poster-color: transparent; position: absolute;",
                        src: (_h2 = (_g2 = media.sources) == null ? void 0 : _g2.find((source) => source.format === "glb")) == null ? void 0 : _h2.url,
                        "camera-controls": "true",
                        "data-shopify-feature": "1.12",
                        alt: (_i2 = media.alt) != null ? _i2 : product == null ? void 0 : product.title,
                        poster: media.preview_image.src,
                        "data-js-focus-visible": "",
                        "ar-status": "not-presenting"
                      }
                    ) })
                  ] })
                }[media.media_type]
              },
              media.id
            );
          })
        }
      )
    ] });
  }, "ProductGalleryVertical");

  // product.image.tsx
  init_compat_module();
  var ProductImage = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p;
    const { product, selectedVariant } = useProduct(({ product: product2, selectedVariant: selectedVariant2 }) => ({
      product: product2,
      selectedVariant: selectedVariant2
    }));
    const preloadedImages = _2([]);
    p2(() => {
      var _a6;
      (_a6 = product == null ? void 0 : product.variants) == null ? void 0 : _a6.forEach((variant) => {
        var _a7, _b6, _c2, _d2, _e2;
        if (((_a7 = variant == null ? void 0 : variant.featured_media) == null ? void 0 : _a7.id) && !preloadedImages.current.includes((_b6 = variant == null ? void 0 : variant.featured_media) == null ? void 0 : _b6.id)) {
          preloadedImages.current.push((_c2 = variant == null ? void 0 : variant.featured_media) == null ? void 0 : _c2.id);
          new Image().src = `${(_e2 = (_d2 = variant == null ? void 0 : variant.featured_media) == null ? void 0 : _d2.preview_image) == null ? void 0 : _e2.src}&width=180`;
        }
      });
    }, [product == null ? void 0 : product.variants]);
    return o3(_, { children: ((_b5 = (_a5 = window == null ? void 0 : window.location) == null ? void 0 : _a5.pathname) == null ? void 0 : _b5.includes(product == null ? void 0 : product.url)) ? o3(
      "figure",
      {
        className: clsx_m_default(
          "relative grid h-0 w-full outline-none hf:outline-none",
          settings.image__ratio
        ),
        children: o3(
          "div",
          {
            className: "absolute inset-0 h-full w-full overflow-hidden rounded-theme shadow-md",
            style: { background: settings.image__background },
            children: (product == null ? void 0 : product.featured_media) || ((_d = (_c = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _c.preview_image) == null ? void 0 : _d.src) ? o3(
              "img",
              {
                src: `${((_f = (_e = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _e.preview_image) == null ? void 0 : _f.src) || ((_g = product == null ? void 0 : product.featured_media) == null ? void 0 : _g.preview_image.src)}&width=180`,
                alt: (_i = (_h = product == null ? void 0 : product.featured_media) == null ? void 0 : _h.alt) != null ? _i : product == null ? void 0 : product.title,
                className: clsx_m_default(
                  "inset-0 h-full w-full object-cover",
                  settings.image__drop_shadow && "drop-shadow-product"
                )
              }
            ) : null
          }
        )
      }
    ) : o3("a", { href: product == null ? void 0 : product.url, className: "hf:underline", children: o3(
      "figure",
      {
        className: clsx_m_default(
          "relative grid h-0 w-full outline-none hf:outline-none",
          settings.image__ratio
        ),
        children: o3(
          "div",
          {
            className: "absolute inset-0 h-full w-full overflow-hidden rounded-theme shadow-md",
            style: { background: settings.image__background },
            children: (product == null ? void 0 : product.featured_media) || ((_k = (_j = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _j.preview_image) == null ? void 0 : _k.src) ? o3(
              "img",
              {
                src: `${((_m = (_l = selectedVariant == null ? void 0 : selectedVariant.featured_media) == null ? void 0 : _l.preview_image) == null ? void 0 : _m.src) || ((_n2 = product == null ? void 0 : product.featured_media) == null ? void 0 : _n2.preview_image.src)}&width=180`,
                alt: (_p = (_o = product == null ? void 0 : product.featured_media) == null ? void 0 : _o.alt) != null ? _p : product == null ? void 0 : product.title,
                className: clsx_m_default(
                  "inset-0 h-full w-full object-cover",
                  settings.image__drop_shadow && "drop-shadow-product"
                )
              }
            ) : null
          }
        )
      }
    ) }) });
  }, "ProductImage");

  // product.inventory.tsx
  var ProductInventorySlider = /* @__PURE__ */ __name(({ settings: { threshold }, useProduct }) => {
    var _a5, _b5, _c, _d, _e, _f;
    const variant = useProduct(({ selectedVariant }) => selectedVariant);
    const sellPast = (variant == null ? void 0 : variant.inventory_policy) === "continue";
    const trackInventory = (variant == null ? void 0 : variant.inventory_management) === "shopify";
    const quantity = (_a5 = variant == null ? void 0 : variant.inventory_quantity) != null ? _a5 : 0;
    const hasInventory = quantity > 0;
    const pre_order = (_c = (_b5 = variant == null ? void 0 : variant.metafields) == null ? void 0 : _b5.smart) == null ? void 0 : _c.pre_order;
    const pre_order_limit = +((_f = (_e = (_d = variant == null ? void 0 : variant.metafields) == null ? void 0 : _d.smart) == null ? void 0 : _e.pre_order_limit) != null ? _f : 0);
    const available = variant == null ? void 0 : variant.available;
    const percentage = pre_order && pre_order_limit ? (quantity + pre_order_limit) / threshold * 100 : (variant == null ? void 0 : variant.inventory_management) !== "shopify" || (variant == null ? void 0 : variant.inventory_policy) === "continue" ? 100 : !(variant == null ? void 0 : variant.available) ? 0 : quantity / threshold * 100;
    const color = percentage < 33 ? "error" : percentage >= 66 ? "success" : "warning";
    const description = pre_order && !hasInventory && available && (!pre_order_limit || quantity + pre_order_limit > threshold) ? "On Preorder" : pre_order && !hasInventory && available && pre_order_limit && quantity + pre_order_limit > 0 ? `${quantity + pre_order_limit} items on Preorder` : !trackInventory || sellPast || quantity >= threshold ? "Available" : !available ? "Sold out" : (variant == null ? void 0 : variant.inventory_quantity) === 1 ? "Last item" : `${variant == null ? void 0 : variant.inventory_quantity} items left`;
    return o3(_, { children: [
      o3("div", { className: "flex h-2 w-full max-w-xl overflow-hidden rounded-full bg-gray-300", children: o3("div", { className: "relative h-full flex-1", children: o3(
        "div",
        {
          className: "h-full transition-all duration-500 ease-in-out data-[color=error]:bg-error data-[color=success]:bg-success data-[color=warning]:bg-warning",
          style: { width: `Max(0%, Min(100%, ${percentage}%))` },
          "data-color": color
        }
      ) }) }),
      o3("span", { className: "text-right text-xs font-medium", children: description })
    ] });
  }, "ProductInventorySlider");

  // product.pre_order.tsx
  var ProductPreOrder = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5, _c, _d;
    const { selectedVariant, formId: formId3 } = useProduct(({ selectedVariant: selectedVariant2, formId: formId4 }) => ({
      selectedVariant: selectedVariant2,
      formId: formId4
    }));
    const pre_order = (_b5 = (_a5 = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _a5.smart) == null ? void 0 : _b5.pre_order;
    const pre_order_date = (_d = (_c = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _c.smart) == null ? void 0 : _d.pre_order_date;
    if (!pre_order || (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) > 0 || !selectedVariant.available) {
      return o3("div", {});
    }
    const now_date = Date.now();
    let label = "Preorder Shipping this week";
    let timeOfMonth = "early ";
    if (pre_order_date) {
      const target_date = new Date(pre_order_date).getTime();
      const target_day = +new Date(pre_order_date).toLocaleString("en", { day: "2-digit" });
      const target_month = new Date(pre_order_date).toLocaleString("en", {
        month: "long"
      });
      const difference = Math.round((target_date - now_date) / 1e3 / 60 / 60 / 24);
      if (target_day > 7) {
        timeOfMonth = "mid ";
      }
      if (target_day > 20) {
        timeOfMonth = "end of ";
      }
      if (difference > 7) {
        label = "Preorder Shipping next week";
      }
      if (difference > 15) {
        label = "Preorder Shipping end of the month";
      }
      if (difference > 31) {
        label = "Preorder Shipping early next month";
      }
      if (difference > 45) {
        label = `Preorder Shipping ${timeOfMonth} ${target_month}`;
      }
    }
    switch (settings.preorder_date) {
      case "estimate":
        return o3(_, { children: [
          o3("span", { className: "font-bold text-primary-bg", children: pre_order_date ? label : "On Preorder" }),
          o3(
            "input",
            {
              type: "hidden",
              name: "properties[preorder]",
              value: pre_order_date ? label : "On Preorder",
              form: `${formId3}-dynamic`
            }
          )
        ] });
      case "precise":
        return o3(_, { children: [
          o3("span", { className: "font-bold text-primary-bg", children: pre_order_date ? `Preorder shipping on ${new Date(pre_order_date).toLocaleDateString(
            window.Shopify.locale,
            { month: "short", year: "numeric", day: "2-digit" }
          )}` : "On Preorder" }),
          o3(
            "input",
            {
              type: "hidden",
              name: "properties[preorder]",
              value: pre_order_date ? `Preorder shipping on ${new Date(pre_order_date).toLocaleDateString(
                window.Shopify.locale,
                { month: "short", year: "numeric", day: "2-digit" }
              )}` : "On Preorder",
              form: `${formId3}-dynamic`
            }
          )
        ] });
      case "none":
        return o3(_, { children: [
          o3("span", { className: "font-bold text-primary-bg", children: "On Preorder" }),
          o3(
            "input",
            {
              type: "hidden",
              name: "properties[preorder]",
              value: "On Preorder",
              form: `${formId3}-dynamic`
            }
          )
        ] });
    }
  }, "ProductPreOrder");

  // product.price.tsx
  init_compat_module();
  var ProductPrice = /* @__PURE__ */ __name(({
    useProduct
  }) => {
    const { selectedVariant } = useProduct(({ selectedVariant: selectedVariant2 }) => ({
      selectedVariant: selectedVariant2
    }));
    const [customDiscount, setCustomDiscount] = h2(0);
    const [hasDiscountCustomer, setHasDiscountCustomer] = h2(false);
    const [customDiscountedPrice, setCustomDiscountedPrice] = h2(0);
    const [customCompareAtPrice, setCustomCompareAtPrice] = h2(0);
    p2(() => {
      const price = selectedVariant == null ? void 0 : selectedVariant.price;
      const tags = window.product.tags;
      if (tags.indexOf("no-discount") !== -1) {
        return;
      }
      const customerTags = window.customerTags || [];
      let discount = 0;
      if (customerTags.indexOf("Pro") !== -1) {
        discount = window.proDiscount;
        const discount_percentage = discount / 100;
        const discountedPrice = price - price * discount_percentage;
        setCustomDiscount(discount_percentage);
        setHasDiscountCustomer(true);
        setCustomCompareAtPrice(price);
        setCustomDiscountedPrice(discountedPrice);
      }
    }, [selectedVariant]);
    return o3("div", { className: "product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap", children: [
      o3(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: window.formatMoney(
              hasDiscountCustomer && customDiscount ? customDiscountedPrice : selectedVariant == null ? void 0 : selectedVariant.price
            )
          }
        }
      ),
      hasDiscountCustomer && customDiscount ? o3(
        "span",
        {
          className: "text-xs text-theme-text/50 line-through",
          dangerouslySetInnerHTML: {
            __html: window.formatMoney(customCompareAtPrice)
          }
        }
      ) : (selectedVariant == null ? void 0 : selectedVariant.compare_at_price) > (selectedVariant == null ? void 0 : selectedVariant.price) ? o3(
        "span",
        {
          className: "text-xs text-theme-text/50 line-through",
          dangerouslySetInnerHTML: {
            __html: window.formatMoney(selectedVariant == null ? void 0 : selectedVariant.compare_at_price)
          }
        }
      ) : null
    ] });
  }, "ProductPrice");

  // product.product_sibling.tsx
  init_compat_module();
  var ProductSibling = /* @__PURE__ */ __name(({ useProduct, settings }) => {
    const { getProduct, hydrated, getAsyncProduct } = useGlobalProducts(
      ({ getProduct: getProduct2, hydrated: hydrated2, getAsyncProduct: getAsyncProduct2 }) => ({
        getProduct: getProduct2,
        getAsyncProduct: getAsyncProduct2,
        hydrated: hydrated2
      })
    );
    const { product, productSiblings, setSiblingProduct } = useProduct(
      ({ product: product2, productSiblings: productSiblings2, setSiblingProduct: setSiblingProduct2 }) => ({
        product: product2,
        productSiblings: productSiblings2,
        setSiblingProduct: setSiblingProduct2
      })
    );
    const [siblingProducts, setSiblingProducts] = h2([]);
    const siblingGroup = F2(() => {
      return productSiblings == null ? void 0 : productSiblings.find((group) => group.products.some((p4) => p4.id === product.id));
    }, [product.id, productSiblings]);
    const loadSiblingProducts = T2(() => __async(void 0, null, function* () {
      var _a5;
      if (!siblingGroup) {
        setSiblingProducts([]);
        return;
      }
      const productsWithData = yield Promise.all(
        (_a5 = siblingGroup.products) == null ? void 0 : _a5.map((product2) => getAsyncProduct(product2.handle))
      );
      setSiblingProducts(
        (current) => current.length !== productsWithData.length ? productsWithData : current
      );
    }), [siblingGroup]);
    p2(() => {
      if (hydrated && siblingGroup) {
        loadSiblingProducts();
      }
    }, [hydrated, siblingGroup]);
    if (!siblingGroup) {
      return o3(_, {});
    }
    const options = siblingGroup.options.split(",").map((option) => option.trim());
    switch (settings.selector) {
      case "image":
        return o3("div", { children: [
          o3("h3", { className: "text-sm font-semibold", children: [
            siblingGroup.title,
            ":"
          ] }),
          o3("div", { className: "relative pt-6", children: o3("fieldset", { className: "group grid grid-cols-[repeat(auto-fill,3.5rem)] gap-1", children: siblingGroup.products.map((sibling, index) => {
            return o3("label", { className: "cursor-pointer", children: [
              o3(
                "input",
                {
                  type: "radio",
                  name: "product-sibling-selector",
                  value: sibling.id,
                  checked: sibling.id === product.id,
                  className: "peer absolute appearance-none outline-none hfa:outline-none",
                  onChange: () => {
                    const siblingProduct = getProduct(sibling.handle);
                    if (!siblingProduct) {
                      return null;
                    }
                    setSiblingProduct(siblingProduct);
                  }
                }
              ),
              o3(
                "picture",
                {
                  "data-product-sibling-title": siblingGroup.title_type === "metafield" ? sibling.option : options[index],
                  className: "flex h-14 w-14 overflow-hidden rounded-theme-md border-2 border-transparent bg-theme-bg before:absolute peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-theme-text/60 peer-disabled:hf:opacity-70 b:pointer-events-none b:left-0 b:top-0 b:text-xs b:text-theme-text/80 b:opacity-0 b:content-[attr(data-product-sibling-title)] peer-checked:b:opacity-100 hf:b:!opacity-100 group-hfa:b:opacity-0 peer-hfwa:border-primary-outline",
                  children: o3(
                    Image2,
                    {
                      src: `${sibling.image}&width=60&height=60`,
                      alt: siblingGroup.title_type === "metafield" ? sibling.option : options[index],
                      className: "pointer-events-none h-full w-full object-cover object-center"
                    }
                  )
                }
              )
            ] }, sibling.id);
          }) }) })
        ] });
      case "color":
        return o3("div", { children: [
          o3("h3", { className: "text-sm font-semibold", children: [
            siblingGroup.title,
            ":"
          ] }),
          o3("fieldset", { className: "group mt-2 flex flex-wrap gap-2", children: siblingGroup.products.map((sibling, index) => {
            return o3(
              "label",
              {
                className: "cursor-pointer rounded-full border border-theme-text/50",
                title: siblingGroup.title_type === "metafield" ? sibling.option : options[index],
                children: [
                  o3(
                    "input",
                    {
                      type: "radio",
                      name: "product-sibling-selector",
                      className: "peer absolute appearance-none outline-none hfa:outline-none",
                      value: siblingGroup.title_type === "metafield" ? sibling.option : options[index],
                      onChange: () => {
                        const siblingProduct = getProduct(sibling.handle);
                        if (!siblingProduct) {
                          return null;
                        }
                        setSiblingProduct(siblingProduct);
                      },
                      checked: sibling.id === product.id
                    }
                  ),
                  o3(
                    "span",
                    {
                      className: "flex h-6 w-6 items-center justify-center overflow-hidden rounded-full ring-2 ring-transparent ring-offset-1 peer-checked:ring-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 hf:ring-primary-outline peer-disabled:hf:opacity-70 md:h-8 md:w-8",
                      style: {
                        background: `var(--color-swatch--${toKebabCase(
                          siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                        )}, ${siblingGroup.title_type === "metafield" ? sibling.option : options[index]})`
                      }
                    }
                  )
                ]
              },
              siblingGroup.title_type === "metafield" ? sibling.option : options[index]
            );
          }) })
        ] });
      case "radio":
        return o3("div", { children: [
          o3("h3", { className: "text-sm font-semibold", children: [
            siblingGroup.title,
            ":"
          ] }),
          o3("fieldset", { className: "group mt-2 flex flex-wrap gap-2", children: siblingGroup.products.map((sibling, index) => {
            return o3(
              "label",
              {
                className: "cursor-pointer select-none",
                title: siblingGroup.title_type === "metafield" ? sibling.option : options[index],
                children: [
                  o3(
                    "input",
                    {
                      type: "radio",
                      name: "product-sibling-selector",
                      className: "peer absolute appearance-none outline-none hfa:outline-none",
                      value: siblingGroup.title_type === "metafield" ? sibling.option : options[index],
                      onChange: () => {
                        const siblingProduct = getProduct(sibling.handle);
                        if (!siblingProduct) {
                          return null;
                        }
                        setSiblingProduct(siblingProduct);
                      },
                      checked: sibling.id === product.id
                    }
                  ),
                  o3("span", { className: "label--primary--outline peer-checked:label--primary min-w-[34px] truncate whitespace-nowrap peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-primary-outline peer-disabled:hf:opacity-70", children: siblingGroup.title_type === "metafield" ? sibling.option : options[index] })
                ]
              },
              siblingGroup.title_type === "metafield" ? sibling.option : options[index]
            );
          }) })
        ] });
      case "select":
        return o3("label", { className: "relative", children: [
          o3("span", { className: "text-sm font-semibold", children: [
            siblingGroup.title,
            ":"
          ] }),
          o3(
            "select",
            {
              className: "input--primary--outline relative isolate grid w-full appearance-none pr-6 accent-primary-bg",
              onChange: (e3) => {
                const sibling = getProduct(`${e3.currentTarget.value}`);
                if (!sibling) {
                  return null;
                }
                setSiblingProduct(sibling);
              },
              children: siblingGroup.products.map((sibling, index) => {
                return o3(
                  "option",
                  {
                    value: sibling.id,
                    className: "disabled:text-theme-text/50",
                    selected: sibling.id === product.id,
                    children: siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                  },
                  siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                );
              })
            }
          ),
          o3(ChevronUpDownIcon, { className: "pointer-events-none absolute bottom-0 right-2 z-10 my-2.5 h-5 w-5 text-theme-text/70" })
        ] });
    }
  }, "ProductSibling");

  // product.quantity_selector.tsx
  var ProductQuantitySelector = /* @__PURE__ */ __name(({ useProduct }) => {
    var _a5, _b5, _c, _d;
    const { setQuantity, quantity, formId: formId3, selectedVariant } = useProduct(
      ({ setQuantity: setQuantity2, quantity: quantity2, formId: formId4, selectedVariant: selectedVariant2 }) => ({
        setQuantity: setQuantity2,
        quantity: quantity2,
        formId: formId4,
        selectedVariant: selectedVariant2
      })
    );
    const { routeProtectionProducts } = useCartDrawer(({ routeProtectionProducts: routeProtectionProducts2 }) => ({
      routeProtectionProducts: routeProtectionProducts2
    }));
    const routeProtection = routeProtectionProducts.find(
      (block) => +(block == null ? void 0 : block.variant_id) === +selectedVariant.id
    );
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    const sellPast = (selectedVariant == null ? void 0 : selectedVariant.inventory_policy) === "continue";
    const trackInventory = (selectedVariant == null ? void 0 : selectedVariant.inventory_management) === "shopify";
    const inventory_quantity = (_a5 = selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) != null ? _a5 : 0;
    const hasInventory = inventory_quantity > 0;
    const pre_order = (_b5 = selectedVariant == null ? void 0 : selectedVariant.metafields.smart) == null ? void 0 : _b5.pre_order;
    const pre_order_limit = +((_d = (_c = selectedVariant == null ? void 0 : selectedVariant.metafields.smart) == null ? void 0 : _c.pre_order_limit) != null ? _d : 0);
    if (isSingleQuantityRouteProtectionItem) {
      if (quantity !== 1) {
        setQuantity(1);
      }
      return null;
    }
    return o3("label", { className: "input--primary--outline input-element flex select-none", children: [
      o3("span", { className: "flex-1", children: "Quantity" }),
      o3(
        "button",
        {
          type: "button",
          className: "flex items-center justify-center px-1.5 py-1 text-theme-text hf:text-theme-text/80",
          onClick: () => {
            setQuantity(
              Math.max(
                1,
                sellPast && pre_order && pre_order_limit ? Math.min(quantity - 1, inventory_quantity + pre_order_limit) : sellPast || !trackInventory ? quantity - 1 : Math.min(quantity - 1, inventory_quantity)
              )
            );
          },
          children: [
            o3("span", { className: "sr-only", children: "Decrease quantity by 1" }),
            o3(MinusIcon, { className: "h-2.5 w-2.5" })
          ]
        }
      ),
      o3(
        "input",
        {
          className: "w-8 appearance-none text-center outline-none",
          type: "number",
          name: "quantity",
          min: "1",
          value: quantity,
          form: formId3,
          onChange: (e3) => {
            setQuantity(
              Math.max(
                1,
                sellPast && pre_order && pre_order_limit ? Math.min(+e3.currentTarget.value, inventory_quantity + pre_order_limit) : sellPast || !trackInventory ? +e3.currentTarget.value : Math.min(+e3.currentTarget.value, inventory_quantity)
              )
            );
          }
        }
      ),
      o3(
        "button",
        {
          type: "button",
          className: "flex items-center justify-center px-1.5 py-1 text-theme-text hf:text-theme-text/80",
          onClick: () => {
            setQuantity(
              Math.max(
                1,
                sellPast && pre_order && pre_order_limit ? Math.min(quantity + 1, inventory_quantity + pre_order_limit) : sellPast || !trackInventory ? quantity + 1 : Math.min(quantity + 1, inventory_quantity)
              )
            );
          },
          children: [
            o3("span", { className: "sr-only", children: "Increase quantity by 1" }),
            o3(PlusIcon, { className: "h-2.5 w-2.5" })
          ]
        }
      )
    ] });
  }, "ProductQuantitySelector");

  // product.rating.tsx
  var useProductRatings = /* @__PURE__ */ __name((product) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
    const {
      product_data__metafield_rating_average,
      product_data__metafield_rating,
      product_data__metafield_reviews_count,
      product_data__show_review_count: show_count,
      product_data__show_0_reviews: show_0_reviews,
      product_data__type
    } = useGlobalSettings();
    const [countNS, countMF] = product_data__metafield_reviews_count.split(".");
    const [ratingNS, ratingMF] = product_data__metafield_rating.split(".");
    const [ratingStrNS, ratingstrMF] = product_data__metafield_rating_average.split(".");
    switch (product_data__type) {
      case "shopify": {
        const rating = +((_d = (_c = (_b5 = (_a5 = product == null ? void 0 : product.metafields) == null ? void 0 : _a5.reviews) == null ? void 0 : _b5.rating) == null ? void 0 : _c.rating) != null ? _d : 0);
        const star_floor = Math.floor(rating);
        const star_ceil = Math.ceil(rating);
        const scale_max = +((_h = (_g = (_f = (_e = product == null ? void 0 : product.metafields) == null ? void 0 : _e.reviews) == null ? void 0 : _f.rating) == null ? void 0 : _g.scale_max) != null ? _h : 5);
        const scale_min = +((_l = (_k = (_j = (_i = product == null ? void 0 : product.metafields) == null ? void 0 : _i.reviews) == null ? void 0 : _j.rating) == null ? void 0 : _k.scale_min) != null ? _l : 1);
        const rating_count = +((_o = (_n2 = (_m = product == null ? void 0 : product.metafields) == null ? void 0 : _m.reviews) == null ? void 0 : _n2.rating_count) != null ? _o : 0);
        return {
          rating,
          star_floor,
          star_ceil,
          scale_max,
          scale_min,
          rating_count,
          show_count,
          show_0_reviews
        };
      }
      case "rating": {
        const rating = +((_s = (_r = (_q = (_p = product == null ? void 0 : product.metafields) == null ? void 0 : _p[ratingNS]) == null ? void 0 : _q[ratingMF]) == null ? void 0 : _r.rating) != null ? _s : 0);
        const star_floor = Math.floor(rating);
        const star_ceil = Math.ceil(rating);
        const scale_max = +((_w = (_v = (_u = (_t = product == null ? void 0 : product.metafields) == null ? void 0 : _t[ratingNS]) == null ? void 0 : _u[ratingMF]) == null ? void 0 : _v.scale_max) != null ? _w : 5);
        const scale_min = +((_A = (_z = (_y = (_x = product == null ? void 0 : product.metafields) == null ? void 0 : _x[ratingNS]) == null ? void 0 : _y[ratingMF]) == null ? void 0 : _z.scale_min) != null ? _A : 1);
        const rating_count = +((_D = (_C = (_B = product == null ? void 0 : product.metafields) == null ? void 0 : _B[countNS]) == null ? void 0 : _C[countMF]) != null ? _D : 0);
        return {
          rating,
          star_floor,
          star_ceil,
          scale_max,
          scale_min,
          rating_count,
          show_count,
          show_0_reviews
        };
      }
      case "reviews_rating": {
        const rating = +((_G = (_F = (_E = product == null ? void 0 : product.metafields) == null ? void 0 : _E[ratingStrNS]) == null ? void 0 : _F[ratingstrMF]) != null ? _G : 0);
        const star_floor = Math.floor(rating);
        const star_ceil = Math.ceil(rating);
        const scale_max = 5;
        const scale_min = 1;
        const rating_count = +((_J = (_I = (_H = product == null ? void 0 : product.metafields) == null ? void 0 : _H[countNS]) == null ? void 0 : _I[countMF]) != null ? _J : 0);
        return {
          rating,
          star_floor,
          star_ceil,
          scale_max,
          scale_min,
          rating_count,
          show_count,
          show_0_reviews
        };
      }
    }
  }, "useProductRatings");
  var ProductRatingWithProduct = /* @__PURE__ */ __name((_a5) => {
    var _b5 = _a5, { product, className } = _b5, props = __objRest(_b5, ["product", "className"]);
    const id = shortUUID();
    const {
      rating,
      star_floor,
      star_ceil,
      scale_max,
      scale_min,
      rating_count,
      show_count,
      show_0_reviews
    } = useProductRatings(product);
    console.log("rating-------", rating);
    console.log("show_count----------", show_count);
    return o3("figure", __spreadProps(__spreadValues({ className: clsx_m_default("inline-flex items-center", className) }, props), { children: [
      o3("div", { className: "relative flex h-5 items-center", children: rating ? o3(_, { children: [...new Array(scale_max - scale_min + 1)].map((_5, index) => {
        const lineIndex = index + scale_min - 1;
        return o3(
          "svg",
          {
            className: "h-full w-auto",
            fill: `url(#${product.id}_${id}_${lineIndex})`,
            viewBox: "0 0 15 15",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              o3("path", { d: "M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" }),
              o3("linearGradient", { id: `${product.id}_${id}_${lineIndex}`, children: [
                o3("stop", { offset: "0%", stopColor: "var(--color-review-stars--hex)" }),
                o3(
                  "stop",
                  {
                    offset: `${lineIndex < star_floor ? 100 : lineIndex >= star_floor && lineIndex < star_ceil ? (rating - star_floor) * 100 : 0}%`,
                    stopColor: "var(--color-review-stars--hex)"
                  }
                ),
                o3(
                  "stop",
                  {
                    offset: `${lineIndex < star_floor ? 100 : lineIndex >= star_floor && lineIndex < star_ceil ? (rating - star_floor) * 100 : 0}%`,
                    stopColor: "rgb(var(--color-gray-400))"
                  }
                ),
                o3("stop", { offset: "100%", stopColor: "rgb(var(--color-gray-400))" })
              ] })
            ]
          },
          lineIndex
        );
      }) }) : "No ratings" }),
      show_count && (show_0_reviews || rating_count > 0) ? o3("figcaption", { className: clsx_m_default("text-xs text-theme-text/70", rating && "ml-2"), children: [
        rating_count != null ? rating_count : "No",
        " reviews"
      ] }) : null
    ] }));
  }, "ProductRatingWithProduct");
  var ProductRating = /* @__PURE__ */ __name(({ useProduct }) => {
    const { product } = useProduct(({ product: product2 }) => ({ product: product2 }));
    return o3(ProductRatingWithProduct, { product });
  }, "ProductRating");

  // product.share.tsx
  var import_uri_js = __toESM(require_uri_all());
  var ProductShare = /* @__PURE__ */ __name(({
    useProduct
  }) => {
    var _a5;
    const { product } = useProduct(({ product: product2 }) => ({ product: product2 }));
    const div = document.createElement("div");
    div.innerHTML = product.description;
    const description = div.textContent.split(" ").slice(0, 20).join(" ");
    const share_url = window.shop.url + product.url;
    const twitter_text = encodeURIComponent(product.title);
    const pinterest_description = encodeURIComponent(description);
    const pinterest_image = `https:${(_a5 = product.featured_media) == null ? void 0 : _a5.src}&width=1024`;
    div.remove();
    return o3("div", { className: "grid auto-cols-min grid-flow-col-dense gap-2", role: "list", children: [
      o3(
        "a",
        {
          "data-share": "facebook",
          className: "text-theme-text/70 hf:text-theme-text",
          title: "Share on Facebook",
          role: "listitem",
          href: `https://www.facebook.com/sharer.php?u=${share_url}`,
          target: "_blank",
          rel: "noopener noreferrer",
          children: o3(FacebookIcon, { className: "h-4 w-4" })
        }
      ),
      o3(
        "a",
        {
          "data-share": "pinterest",
          className: "text-theme-text/70 hf:text-theme-text",
          title: "Share on Pinterest",
          role: "listitem",
          href: `https://pinterest.com/pin/create/button/?url=${share_url}&media=${pinterest_image}&description=${pinterest_description}`,
          target: "_blank",
          rel: "noopener noreferrer",
          children: o3(PinterestIcon, { className: "h-4 w-4" })
        }
      ),
      o3(
        "a",
        {
          "data-share": "twitter",
          className: "text-theme-text/70 hf:text-theme-text",
          title: "Share on Twitter",
          role: "listitem",
          href: `https://twitter.com/share?text=${twitter_text}&url=${share_url}`,
          target: "_blank",
          rel: "noopener noreferrer",
          children: o3(TwitterIcon, { className: "h-4 w-4" })
        }
      ),
      o3(
        "a",
        {
          "data-share": "email",
          className: "text-theme-text/70 hf:text-theme-text",
          title: "Share via Email",
          role: "listitem",
          href: `mailto:?&subject=${(0, import_uri_js.escapeComponent)(product.title)}&body=${share_url}`,
          children: o3(EmailIcon, { className: "h-4 w-4" })
        }
      )
    ] });
  }, "ProductShare");

  // product.side-effects.tsx
  init_compat_module();
  var import_fast_deep_equal = __toESM(require_fast_deep_equal());
  var ProductSideEffects = /* @__PURE__ */ __name(({ useProduct, productSection: productSection3, cartDrawer: cartDrawer2 }) => {
    var _a5;
    const cartItemRef = _2([]);
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const [tryAgainCount, setTryAgainCount] = h2(0);
    const { updateProduct, selectedVariant, product, setSelectedSellingPlan, selectedSellingPlan } = useProduct(
      ({
        updateProduct: updateProduct2,
        selectedVariant: selectedVariant2,
        product: product2,
        setSelectedSellingPlan: setSelectedSellingPlan2,
        selectedSellingPlan: selectedSellingPlan2
      }) => ({
        updateProduct: updateProduct2,
        selectedVariant: selectedVariant2,
        product: product2,
        setSelectedSellingPlan: setSelectedSellingPlan2,
        selectedSellingPlan: selectedSellingPlan2
      })
    );
    const productData = _2(
      window.transformProducts(
        JSONParse(
          ((_a5 = document.querySelector(`[data-product-json="${product == null ? void 0 : product.handle}"]`)) != null ? _a5 : document.querySelector(`[data-product-json]`)).innerHTML
        )
      )
    );
    p2(() => {
      var _a6;
      const product2 = productData.current;
      if (!window.Shopify.designMode && !(0, import_fast_deep_equal.default)(cartData.items, cartItemRef.current)) {
        cartItemRef.current = cartData.items;
        if (!cartDrawer2) {
          updateProduct(__spreadProps(__spreadValues({}, product2), {
            variants: (_a6 = product2 == null ? void 0 : product2.variants) == null ? void 0 : _a6.map((variant) => {
              var _a7;
              const lineItemQuantity = (_a7 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a7.reduce(
                (acc, lineItem) => {
                  if (lineItem.variant_id === variant.id) {
                    acc += lineItem.quantity;
                  }
                  return acc;
                },
                0
              );
              if (lineItemQuantity === 0)
                return variant;
              const inventory_quantity = variant.inventory_quantity - lineItemQuantity;
              return __spreadProps(__spreadValues({}, variant), {
                available: inventory_quantity > 0 || variant.inventory_policy === "continue" || variant.inventory_management !== "shopify",
                inventory_quantity
              });
            })
          }));
        }
      }
    }, [cartData.items, cartDrawer2, updateProduct]);
    p2(() => {
      var _a6, _b5, _c;
      if ((_c = (_a6 = window == null ? void 0 : window.location) == null ? void 0 : _a6.pathname) == null ? void 0 : _c.includes(`/products/${(_b5 = product == null ? void 0 : product.handle) != null ? _b5 : shortUUID()}`)) {
        const otherQueryParams = window.location.search.split(/[?&]/gi).filter((param) => param && !/^variant=/gi.test(param));
        window.history.replaceState(
          null,
          null,
          `?variant=${selectedVariant == null ? void 0 : selectedVariant.id}${otherQueryParams.map((param) => `&${param}`).join("")}`
        );
      }
    }, [product == null ? void 0 : product.handle, selectedVariant == null ? void 0 : selectedVariant.id]);
    const handleHashChange = T2(() => {
      setTimeout(
        () => {
          var _a6, _b5, _c, _d, _e;
          const selling_plan = (_e = (_d = (_c = (_b5 = (_a6 = window.location.search) == null ? void 0 : _a6.split(/[?&]/gi)) == null ? void 0 : _b5.filter((param) => param && /^selling_plan=/gi.test(param))) == null ? void 0 : _c.map((searchParams) => {
            var _a7;
            return (_a7 = searchParams.split("=")) == null ? void 0 : _a7.at(-1);
          })) == null ? void 0 : _d[0]) != null ? _e : "";
          setSelectedSellingPlan(selling_plan);
        },
        100
      );
    }, [setSelectedSellingPlan]);
    p2(() => {
      handleHashChange();
      setTimeout(
        () => {
          handleHashChange();
        },
        1e3
      );
      setTimeout(
        () => {
          handleHashChange();
        },
        4e3
      );
    }, [handleHashChange]);
    p2(() => {
      document.addEventListener("change", handleHashChange);
      return () => {
        document.removeEventListener("change", handleHashChange);
      };
    }, [handleHashChange]);
    p2(() => {
      const mutationObserver = new MutationObserver((e3) => {
        e3 == null ? void 0 : e3.forEach((record) => {
          var _a6;
          const value = record.target.value;
          if (!value)
            return;
          const sellingPlan = value ? `&selling_plan=${value}` : "";
          setSelectedSellingPlan(value);
          if (window.location.pathname.includes(`/products/${(_a6 = product == null ? void 0 : product.handle) != null ? _a6 : shortUUID()}`)) {
            const otherQueryParams = window.location.search.split(/[?&]/gi).filter((param) => param && !/^variant=/gi.test(param)).filter((param) => param && !/^selling_plan=/gi.test(param));
            window.history.replaceState(
              null,
              null,
              `?variant=${selectedVariant == null ? void 0 : selectedVariant.id}${sellingPlan}${otherQueryParams.map((param) => `&${param}`).join("")}`
            );
          }
        });
      });
      const sellingPlans = [
        ...productSection3.querySelectorAll(
          'input[name="selling_plan"]:not([data-selling-plan-output])'
        )
      ];
      sellingPlans.forEach((appInput) => {
        mutationObserver.observe(appInput, {
          attributes: true
        });
      });
      return () => {
        mutationObserver.disconnect();
      };
    }, [product == null ? void 0 : product.handle, productSection3, selectedVariant == null ? void 0 : selectedVariant.id, setSelectedSellingPlan, tryAgainCount]);
    p2(() => {
      const mutationObserver = new MutationObserver((e3) => {
        e3 == null ? void 0 : e3.forEach((record) => {
          record.addedNodes.forEach((node) => {
            var _a6;
            if ((_a6 = node == null ? void 0 : node.parentElement) == null ? void 0 : _a6.querySelectorAll(
              'input[name="selling_plan"]:not([data-selling-plan-output])'
            )) {
              setTryAgainCount((prev) => prev += 1);
            }
          });
        });
      });
      mutationObserver.observe(productSection3, {
        subtree: true,
        childList: true
      });
      return () => {
        mutationObserver.disconnect();
      };
    }, [productSection3]);
    p2(() => {
      const blocks = productSection3.querySelector("[data-product-blocks]");
      blocks == null ? void 0 : blocks.setAttribute("data-product-blocks", product.handle);
    }, [product.handle, productSection3]);
    p2(() => {
      if (selectedVariant == null ? void 0 : selectedVariant.available) {
        productSection3.style.removeProperty("--display-variant-available");
        productSection3.style.setProperty("--display-variant-unavailable", "none");
      } else {
        productSection3.style.removeProperty("--display-variant-unavailable");
        productSection3.style.setProperty("--display-variant-available", "none");
      }
    }, [productSection3.style, selectedVariant == null ? void 0 : selectedVariant.available]);
    return null;
  }, "ProductSideEffects");

  // product.sku.tsx
  var ProductSku = /* @__PURE__ */ __name(({
    useProduct
  }) => {
    const variant = useProduct(({ selectedVariant }) => selectedVariant);
    return o3("div", { className: "flex text-sm text-theme-text/80", title: "SKU", children: variant == null ? void 0 : variant.sku });
  }, "ProductSku");

  // product.title.tsx
  var ProductTitle = /* @__PURE__ */ __name(({ useProduct, settings }) => {
    var _a5, _b5;
    const { product } = useProduct(({ product: product2 }) => ({ product: product2 }));
    return o3("div", { children: ((_b5 = (_a5 = window == null ? void 0 : window.location) == null ? void 0 : _a5.pathname) == null ? void 0 : _b5.includes(product == null ? void 0 : product.url)) ? o3(Typography, { fontType: settings.title_font, children: settings.title.replace("[title]", product == null ? void 0 : product.title) }) : o3("a", { href: product == null ? void 0 : product.url, className: "hf:underline", children: o3(Typography, { fontType: settings.title_font, children: settings.title.replace("[title]", product == null ? void 0 : product.title) }) }) });
  }, "ProductTitle");

  // product.variant_selector.tsx
  init_compat_module();
  var ProductVariantSelector = /* @__PURE__ */ __name(({ settings, useProduct, upsellSettings }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
    const { product, selectedVariant, formId: formId3, setSelectedVariant, options, setOptionsVariant } = useProduct(
      ({ product: product2, selectedVariant: selectedVariant2, formId: formId4, setSelectedVariant: setSelectedVariant2, options: options2, setOptionsVariant: setOptionsVariant2 }) => ({
        product: product2,
        selectedVariant: selectedVariant2,
        formId: formId4,
        setSelectedVariant: setSelectedVariant2,
        options: options2,
        setOptionsVariant: setOptionsVariant2
      })
    );
    const { product_data__hide_oos_variants, product_data__variants_color_swatches } = useGlobalSettings();
    const getColorSwatch = T2((value, optionIndex) => {
      var _a6, _b6, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
      const variantWithImage = product == null ? void 0 : product.variants.find(
        (variant) => {
          var _a7;
          return variant.options[optionIndex] === value && ((_a7 = variant.featured_media) == null ? void 0 : _a7.src);
        }
      );
      const [namespace, key] = product_data__variants_color_swatches.trim().split(".");
      const variantWithMetafield = product == null ? void 0 : product.variants.find(
        (variant) => {
          var _a7, _b7;
          return variant.options[optionIndex] === value && ((_b7 = (_a7 = variant == null ? void 0 : variant.metafields) == null ? void 0 : _a7[namespace]) == null ? void 0 : _b7[key]);
        }
      );
      switch (settings.color_selector__source) {
        case "via_option": {
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_option_then_image": {
          if (variantWithImage) {
            return `var(--color-swatch--${toKebabCase(value)}, url("${(_a6 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _a6.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size}"))`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_image": {
          if (variantWithImage) {
            return `url(${(_b6 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _b6.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size})`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_metafield": {
          if (variantWithMetafield) {
            return `${(_d2 = (_c2 = variantWithMetafield == null ? void 0 : variantWithMetafield.metafields) == null ? void 0 : _c2[namespace]) == null ? void 0 : _d2[key]}`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_image_then_metafield": {
          if (variantWithImage) {
            return `url(${(_e2 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _e2.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size})`;
          }
          if (variantWithMetafield) {
            return `${(_g2 = (_f2 = variantWithMetafield == null ? void 0 : variantWithMetafield.metafields) == null ? void 0 : _f2[namespace]) == null ? void 0 : _g2[key]}`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_metafield_then_image": {
          if (variantWithMetafield) {
            return `${(_i2 = (_h2 = variantWithMetafield == null ? void 0 : variantWithMetafield.metafields) == null ? void 0 : _h2[namespace]) == null ? void 0 : _i2[key]}`;
          }
          if (variantWithImage) {
            return `url(${(_j2 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _j2.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size})`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
      }
    }, [product == null ? void 0 : product.variants, product_data__variants_color_swatches, settings.color_selector__source, settings.color_selector_size]);
    if ((settings == null ? void 0 : settings.image_selector) && ((_a5 = product == null ? void 0 : product.variants) == null ? void 0 : _a5.length) <= 18 && ((_b5 = product == null ? void 0 : product.variants) == null ? void 0 : _b5.every((v4) => {
      var _a6;
      return (_a6 = v4.featured_media) == null ? void 0 : _a6.preview_image;
    })) && ((_d = (_c = product == null ? void 0 : product.variants) == null ? void 0 : _c.filter((variant) => !product_data__hide_oos_variants || variant.available)) == null ? void 0 : _d.length) > 0) {
      if ((product == null ? void 0 : product.variants.length) === 1 && ((_f = (_e = product == null ? void 0 : product.variants) == null ? void 0 : _e[0]) == null ? void 0 : _f.option1) === "Default Title") {
        return null;
      }
      return o3("div", { children: [
        o3("h3", { className: "text-sm font-semibold", children: [
          product == null ? void 0 : product.options.join(" / "),
          ":"
        ] }),
        o3("div", { className: "relative pt-6", children: o3("fieldset", { className: "group grid grid-cols-[repeat(auto-fill,3.5rem)] gap-1", children: (_h = (_g = product == null ? void 0 : product.variants) == null ? void 0 : _g.filter((variant) => !product_data__hide_oos_variants || variant.available)) == null ? void 0 : _h.map((variant) => {
          var _a6, _b6, _c2, _d2;
          return o3("label", { className: "cursor-pointer", children: [
            o3(
              "input",
              {
                type: "radio",
                name: "variant-image-selector",
                value: variant.id,
                form: formId3,
                checked: variant.id === (selectedVariant == null ? void 0 : selectedVariant.id),
                className: "peer absolute appearance-none outline-none hfa:outline-none",
                onChange: () => {
                  setSelectedVariant(variant.id);
                },
                disabled: settings.disable_unavailable && !variant.available
              }
            ),
            o3(
              "picture",
              {
                "data-product-vs-variant-title": variant.title,
                className: "flex h-14 w-14 overflow-hidden rounded-theme-md border-2 border-transparent bg-theme-bg before:absolute peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-theme-text/60 peer-disabled:hf:opacity-70 b:pointer-events-none b:left-0 b:top-0 b:text-xs b:text-theme-text/80 b:opacity-0 b:content-[attr(data-product-vs-variant-title)] peer-checked:b:opacity-100 hf:b:!opacity-100 group-hfa:b:opacity-0 peer-hfwa:border-primary-outline",
                children: o3(
                  Image2,
                  {
                    src: `${(_b6 = (_a6 = variant.featured_media) == null ? void 0 : _a6.preview_image) == null ? void 0 : _b6.src}&width=60&height=60`,
                    alt: (_d2 = (_c2 = variant.featured_media) == null ? void 0 : _c2.alt) != null ? _d2 : variant.title,
                    className: "pointer-events-none h-full w-full object-cover object-center"
                  }
                )
              }
            )
          ] }, variant.id);
        }) }) })
      ] });
    }
    return o3("div", { className: "grid gap-2", children: ((_j = (_i = product == null ? void 0 : product.variants) == null ? void 0 : _i.filter((variant) => !product_data__hide_oos_variants || variant.available)) == null ? void 0 : _j.length) <= 0 || ((_k = product == null ? void 0 : product.variants) == null ? void 0 : _k.length) === 1 && ((_m = (_l = product == null ? void 0 : product.variants) == null ? void 0 : _l[0]) == null ? void 0 : _m.option1) === "Default Title" ? null : o3(_, { children: (_n2 = product == null ? void 0 : product.options_with_values) == null ? void 0 : _n2.map(({ name, position, values }) => {
      const index = position - 1;
      const isColorSelector = (settings == null ? void 0 : settings.color_selector) && (settings == null ? void 0 : settings.color_list.split(",").map((color) => color.trim().toLowerCase()).includes(name.toLowerCase()));
      const isUpsellCheckbox = upsellSettings && (upsellSettings == null ? void 0 : upsellSettings.option_name) === name;
      if (isUpsellCheckbox) {
        return null;
      }
      if (isColorSelector) {
        return o3("div", { className: "relative order-first", children: [
          o3("h3", { className: "text-sm font-semibold", children: name }),
          o3("fieldset", { className: "group mt-2 flex flex-wrap gap-2", children: values.map((value) => {
            var _a6, _b6;
            const notAvailable = !((_a6 = product == null ? void 0 : product.variants) == null ? void 0 : _a6.some((variant) => {
              switch (index) {
                case 0: {
                  return variant.options[index] === value && variant.available;
                }
                case 1: {
                  return variant.options[0] === options[0] && variant.options[index] === value && variant.available;
                }
                case 2: {
                  return variant.options[0] === options[0] && variant.options[1] === options[1] && variant.options[index] === value && variant.available;
                }
              }
              return false;
            }));
            const unavailable = !((_b6 = product == null ? void 0 : product.variants) == null ? void 0 : _b6.some(
              (variant) => variant.options[index] === value && variant.available
            ));
            if (product_data__hide_oos_variants && unavailable) {
              return null;
            }
            return o3(
              "label",
              {
                className: "relative cursor-pointer",
                style: {
                  borderRadius: settings.color_selector_radius >= 0 ? `${settings.color_selector_radius}px` : `9999px`
                },
                "data-tooltip": value,
                title: value,
                children: [
                  o3(
                    "input",
                    {
                      type: "radio",
                      name: `variant-selector-${product == null ? void 0 : product.id}-${name}`,
                      className: "peer absolute hidden appearance-none outline-none hfa:outline-none",
                      value,
                      onChange: () => {
                        setOptionsVariant(index, value);
                      },
                      checked: options[index] === value,
                      disabled: (settings == null ? void 0 : settings.disable_unavailable) && notAvailable
                    }
                  ),
                  o3(
                    "span",
                    {
                      className: clsx_m_default(
                        "flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-gray-300 ring-2 ring-transparent ring-offset-1 peer-checked:ring-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 hf:ring-primary-outline peer-disabled:hf:opacity-70 md:h-8 md:w-8",
                        notAvailable && "variant-not-available"
                      ),
                      style: {
                        borderRadius: settings.color_selector_radius >= 0 ? `${settings.color_selector_radius}px` : `9999px`,
                        width: `${settings.color_selector_size}px`,
                        height: `${settings.color_selector_size}px`,
                        background: getColorSwatch(value, index)
                        /*    settings.color_selector_via_variant_image
                        
                                                          ? `url(${
                                                              product?.variants.find(
                                                                (variant) => variant.options[index] === value
                                                              )?.featured_media?.src
                                                            }&width=${settings.color_selector_size}&height=${
                                                              settings.color_selector_size
                                                            })`
                                                          : product_data__variants_color_swatches
                                                          ? (product?.variants?.find((v) => v.options[index] === value)
                                                              ?.metafields[
                                                              product_data__variants_color_swatches?.split(".")?.[0]
                                                            ][
                                                              product_data__variants_color_swatches?.split(".")?.[1]
                                                            ] as string) ??
                                                            `var(--color-swatch--${toKebabCase(value)}, ${value})`
                                                          : `var(--color-swatch--${toKebabCase(value)}, ${value})`,*/
                      }
                    }
                  )
                ]
              },
              value
            );
          }) })
        ] }, name);
      }
      if (settings.default_type === "radio") {
        return o3("div", { className: "relative", children: [
          o3("h3", { className: "text-sm font-semibold", children: name }),
          o3("fieldset", { className: "group flex flex-wrap gap-1.5", children: values.map((value) => {
            var _a6, _b6;
            const notAvailable = !((_a6 = product == null ? void 0 : product.variants) == null ? void 0 : _a6.some((variant) => {
              switch (index) {
                case 0: {
                  return variant.options[index] === value && variant.available;
                }
                case 1: {
                  return variant.options[0] === options[0] && variant.options[index] === value && variant.available;
                }
                case 2: {
                  return variant.options[0] === options[0] && variant.options[1] === options[1] && variant.options[index] === value && variant.available;
                }
              }
              return false;
            }));
            const unavailable = !((_b6 = product == null ? void 0 : product.variants) == null ? void 0 : _b6.some(
              (variant) => variant.options[index] === value && variant.available
            ));
            if (product_data__hide_oos_variants && unavailable) {
              return null;
            }
            return o3("label", { className: "cursor-pointer select-none", children: [
              o3(
                "input",
                {
                  type: "radio",
                  name: `variant-selector-${product == null ? void 0 : product.id}-${name}`,
                  value,
                  onChange: () => {
                    setOptionsVariant(index, value);
                  },
                  checked: options[index] === value,
                  disabled: settings.disable_unavailable && notAvailable,
                  className: "peer absolute appearance-none outline-none hfa:outline-none"
                }
              ),
              o3(
                "span",
                {
                  className: clsx_m_default(
                    "label--primary--outline peer-checked:label--primary label-item min-w-[34px] truncate whitespace-nowrap peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-primary-outline peer-disabled:hf:opacity-70",
                    notAvailable && "variant-not-available"
                  ),
                  children: value
                }
              )
            ] }, value);
          }) })
        ] }, name);
      }
      return o3("label", { className: "relative", children: [
        o3("span", { className: "text-sm font-semibold", children: name }),
        o3("div", { className: "relative w-full p-0", children: [
          o3(
            "select",
            {
              className: "input--primary--outline input-element grid w-full appearance-none pr-6 font-button",
              onChange: (e3) => {
                var _a6;
                setOptionsVariant(index, (_a6 = e3.target) == null ? void 0 : _a6.value);
              },
              value: options[index],
              children: values.map((value) => {
                var _a6, _b6;
                const notAvailable = !((_a6 = product == null ? void 0 : product.variants) == null ? void 0 : _a6.some((variant) => {
                  switch (index) {
                    case 0: {
                      return variant.options[index] === value && variant.available;
                    }
                    case 1: {
                      return variant.options[0] === options[0] && variant.options[index] === value && variant.available;
                    }
                    case 2: {
                      return variant.options[0] === options[0] && variant.options[1] === options[1] && variant.options[index] === value && variant.available;
                    }
                  }
                  return false;
                }));
                const unavailable = !((_b6 = product == null ? void 0 : product.variants) == null ? void 0 : _b6.some(
                  (variant) => variant.options[index] === value && variant.available
                ));
                if (product_data__hide_oos_variants && unavailable) {
                  return null;
                }
                return o3(
                  "option",
                  {
                    value,
                    className: "disabled:text-theme-text/50",
                    selected: options[index] === value,
                    disabled: settings.disable_unavailable && notAvailable,
                    children: value
                  },
                  value
                );
              })
            }
          ),
          o3("div", { className: "pointer-events-none absolute right-2 top-0 flex h-full items-center justify-center", children: o3(ChevronUpDownIcon, { className: "h-5 w-5" }) })
        ] })
      ] }, name);
    }) }) });
  }, "ProductVariantSelector");

  // product.variant_upsell.tsx
  var ProductVariantUpsell = /* @__PURE__ */ __name(({ settings, useProduct }) => {
    var _a5, _b5;
    const { product, selectedVariant, getOptionsVariant, setOptionsVariant } = useProduct(
      ({ product: product2, selectedVariant: selectedVariant2, setOptionsVariant: setOptionsVariant2, getOptionsVariant: getOptionsVariant2 }) => ({
        product: product2,
        selectedVariant: selectedVariant2,
        setOptionsVariant: setOptionsVariant2,
        getOptionsVariant: getOptionsVariant2
      })
    );
    return o3("div", { className: "grid gap-2", children: ((_a5 = product == null ? void 0 : product.variants) == null ? void 0 : _a5.length) === 1 ? null : (_b5 = product == null ? void 0 : product.options_with_values) == null ? void 0 : _b5.map(({ name, position, values }) => {
      const index = position - 1;
      const isUpsellCheckbox = (settings == null ? void 0 : settings.option_name) === name;
      if (!isUpsellCheckbox)
        return null;
      if (!values.some((value) => value === settings.value_name))
        return null;
      const noUpsellVariantValue = values.find((value) => value !== settings.value_name);
      const upsellVariant = selectedVariant.options[index] === settings.value_name ? selectedVariant : getOptionsVariant(index, settings.value_name);
      const downsellVariant = selectedVariant.options[index] !== settings.value_name ? selectedVariant : getOptionsVariant(index, noUpsellVariantValue);
      if (!upsellVariant || !noUpsellVariantValue)
        return null;
      const difference = (upsellVariant == null ? void 0 : upsellVariant.price) - selectedVariant.price;
      const downsellDifference = selectedVariant.price - (downsellVariant == null ? void 0 : downsellVariant.price);
      return o3(
        "article",
        {
          className: "relative flex flex-col items-stretch space-y-1 rounded-theme-sm border border-gray-400 p-4",
          children: [
            o3("div", { className: "relative flex items-center", children: [
              o3(
                "picture",
                {
                  className: clsx_m_default(
                    "relative mr-2 h-16 w-16 overflow-hidden",
                    !settings.image && "opacity-0"
                  ),
                  style: { background: "transparent" },
                  children: o3(
                    Image2,
                    {
                      src: `${settings.image}`,
                      alt: settings == null ? void 0 : settings.value_label,
                      width: 128,
                      height: 128,
                      className: "h-full w-full object-cover "
                    }
                  )
                }
              ),
              o3("h1", { className: "product-card-title--small inline-flex", children: settings == null ? void 0 : settings.value_label }),
              upsellVariant.id === selectedVariant.id ? o3("div", { className: "absolute right-4 top-4", children: o3(CheckMarkIcon, { className: "h-6 w-6 text-success" }) }) : null
            ] }),
            o3("div", { className: "mt-auto flex w-full flex-1 flex-col justify-end self-end text-center", children: o3(
              "button",
              {
                className: "button-primary--outline group mt-2 flex w-full items-center justify-between px-3 py-2 text-sm outline-none disabled:opacity-50 hf:outline-none",
                type: "button",
                disabled: !(upsellVariant == null ? void 0 : upsellVariant.available),
                onClick: (e3) => {
                  setOptionsVariant(
                    index,
                    upsellVariant.id === selectedVariant.id ? noUpsellVariantValue : settings.value_name
                  );
                },
                children: [
                  !(upsellVariant == null ? void 0 : upsellVariant.available) ? o3("span", { className: "whitespace-nowrap", children: "Not Available" }) : upsellVariant.id !== selectedVariant.id ? o3("span", { className: "whitespace-nowrap", children: "Add" }) : o3(_, { children: [
                    o3("span", { className: "group-hover:hidden", children: "Added" }),
                    o3("span", { className: "hidden group-hover:inline-block", children: "Remove" })
                  ] }),
                  o3("div", { className: "text-xl", "data-card-price": "", children: o3("div", { className: "product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap", children: upsellVariant.id !== selectedVariant.id ? o3(_, { children: [
                    "+",
                    o3(
                      "span",
                      {
                        dangerouslySetInnerHTML: {
                          __html: window.formatMoney(difference)
                        }
                      }
                    )
                  ] }) : o3(_, { children: [
                    o3("span", { className: "inline-grid auto-cols-min grid-flow-col-dense items-baseline gap-2 group-hover:hidden", children: [
                      "+",
                      o3(
                        "span",
                        {
                          dangerouslySetInnerHTML: {
                            __html: window.formatMoney(difference)
                          }
                        }
                      )
                    ] }),
                    o3("span", { className: "hidden auto-cols-min grid-flow-col-dense items-baseline gap-2 group-hover:inline-grid", children: [
                      "-",
                      o3(
                        "span",
                        {
                          dangerouslySetInnerHTML: {
                            __html: window.formatMoney(downsellDifference)
                          }
                        }
                      )
                    ] })
                  ] }) }) })
                ]
              }
            ) })
          ]
        },
        name
      );
    }) });
  }, "ProductVariantUpsell");

  // product.vendor.tsx
  var import_uri_js2 = __toESM(require_uri_all());
  var ProductVendor = /* @__PURE__ */ __name(({
    useProduct
  }) => {
    var _a5;
    const { product } = useProduct(({ product: product2 }) => ({ product: product2 }));
    return o3(
      "a",
      {
        href: `${(_a5 = window == null ? void 0 : window.routes) == null ? void 0 : _a5.collections_url}/vendors?q=${(0, import_uri_js2.escapeComponent)(product == null ? void 0 : product.vendor)}`,
        className: "flex text-sm opacity-60 hf:underline",
        title: product == null ? void 0 : product.vendor,
        children: product == null ? void 0 : product.vendor
      }
    );
  }, "ProductVendor");

  // product.tsx
  var initProductStore = /* @__PURE__ */ __name((productSection3, productHandle3, formId3, providedProduct) => {
    var _a5, _b5, _c, _d, _e, _f;
    const getProduct = globalProducts.getState().getProduct;
    const product = providedProduct != null ? providedProduct : getProduct(productHandle3);
    const productSiblings = JSONParse(
      (_a5 = document.querySelector("[data-product-siblings]")) == null ? void 0 : _a5.innerHTML
    );
    if (!product) {
      return null;
    }
    window.product = product;
    let selling_plan = (_f = (_e = (_d = (_c = (_b5 = window.location.search) == null ? void 0 : _b5.split(/[?&]/gi)) == null ? void 0 : _c.filter((param) => param && /^selling_plan=/gi.test(param))) == null ? void 0 : _d.map((searchParams) => {
      var _a6;
      return (_a6 = searchParams.split("=")) == null ? void 0 : _a6.at(-1);
    })) == null ? void 0 : _e[0]) != null ? _f : "";
    const selling_plan_groups = (product == null ? void 0 : product.selling_plan_groups) || [];
    if (selling_plan && !(selling_plan_groups == null ? void 0 : selling_plan_groups.some(
      (group) => {
        var _a6;
        return (_a6 = group == null ? void 0 : group.selling_plans) == null ? void 0 : _a6.some((plan) => `${plan.id}` === `${selling_plan}`);
      }
    ))) {
      selling_plan = null;
    }
    return (set, get) => {
      var _a6, _b6;
      return {
        product: __spreadProps(__spreadValues({}, product), { openCartAfterAdd: true }),
        productSiblings,
        formId: formId3,
        selectedVariant: product == null ? void 0 : product.selected_or_first_available_variant,
        selectedSellingPlan: selling_plan,
        options: [...(_b6 = (_a6 = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _a6.options) != null ? _b6 : []],
        quantity: 1,
        setQuantity: (quantity) => set({ quantity }),
        setSelectedSellingPlan: (selling_plan_id) => {
          var _a7, _b7, _c2, _d2, _e2, _f2, _g;
          const sellingPlanGroups = ((_a7 = get().product) == null ? void 0 : _a7.selling_plan_groups) || [];
          if (sellingPlanGroups == null ? void 0 : sellingPlanGroups.some(
            (group) => {
              var _a8;
              return (_a8 = group == null ? void 0 : group.selling_plans) == null ? void 0 : _a8.some((plan) => `${plan.id}` === `${selling_plan_id}`);
            }
          )) {
            set({ selectedSellingPlan: selling_plan_id });
            return;
          }
          if ((_c2 = (_b7 = get().product) == null ? void 0 : _b7.product) == null ? void 0 : _c2.requires_selling_plan) {
            set({ selectedSellingPlan: (_g = (_f2 = (_e2 = (_d2 = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _d2[0]) == null ? void 0 : _e2.selling_plans) == null ? void 0 : _f2[0]) == null ? void 0 : _g.id });
            return;
          }
          set({ selectedSellingPlan: null });
        },
        setSelectedVariant: (variantId) => {
          var _a7;
          const selectedVariant = get().product.variants.find((variant) => variant.id === variantId);
          set({
            selectedVariant,
            options: [...(_a7 = selectedVariant == null ? void 0 : selectedVariant.options) != null ? _a7 : []],
            quantity: 1
          });
        },
        setOptionsVariant: (optionIndex, value) => {
          var _a7, _b7, _c2, _d2, _e2;
          let options = get().options;
          options[optionIndex] = value;
          const variants = get().product.variants;
          const selectedVariant = (_d2 = (_c2 = (_b7 = (_a7 = variants.find(
            (v4) => v4.options.every((option, index) => option === options[index]) && v4.available
          )) != null ? _a7 : variants.find((v4) => v4.options.every((option, index) => option === options[index]))) != null ? _b7 : variants.find((variant) => variant.options[optionIndex] === value && variant.available)) != null ? _c2 : variants.find((variant) => variant.available)) != null ? _d2 : variants.find((variant) => variant);
          options = [...(_e2 = selectedVariant == null ? void 0 : selectedVariant.options) != null ? _e2 : []];
          set({
            options,
            selectedVariant,
            quantity: 1
          });
        },
        getOptionsVariant: (optionIndex, value) => {
          const options = structuredClone(get().options);
          options[optionIndex] = value;
          return get().product.variants.find(
            (v4) => v4.options.every((option, index) => option === options[index])
          );
        },
        updateProduct: (product2, openCartAfterAdd = true) => {
          var _a7, _b7, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k;
          const selectedVariant = (_d2 = (_b7 = (_a7 = product2 == null ? void 0 : product2.variants) == null ? void 0 : _a7.find((variant) => {
            var _a8;
            return variant.id === ((_a8 = get().selectedVariant) == null ? void 0 : _a8.id);
          })) != null ? _b7 : product2 == null ? void 0 : product2.selected_or_first_available_variant) != null ? _d2 : (_c2 = product2 == null ? void 0 : product2.variants) == null ? void 0 : _c2[0];
          let selectedSellingPlan = get().selectedSellingPlan;
          if (selectedSellingPlan && !((_f2 = (_e2 = product2 == null ? void 0 : product2.selling_plan_groups) != null ? _e2 : []) == null ? void 0 : _f2.some(
            (group) => {
              var _a8;
              return (_a8 = group == null ? void 0 : group.selling_plans) == null ? void 0 : _a8.some((plan) => `${plan.id}` === `${selectedSellingPlan}`);
            }
          ))) {
            selectedSellingPlan = null;
          }
          if (product2.requires_selling_plan && !selectedSellingPlan) {
            selectedSellingPlan = (_j = (_i = (_h = (_g = product2 == null ? void 0 : product2.selling_plan_groups) == null ? void 0 : _g[0]) == null ? void 0 : _h.selling_plans) == null ? void 0 : _i[0]) == null ? void 0 : _j.id;
          }
          set({
            options: [...(_k = selectedVariant == null ? void 0 : selectedVariant.options) != null ? _k : []],
            product: __spreadProps(__spreadValues({}, product2), { openCartAfterAdd }),
            selectedVariant,
            selectedSellingPlan,
            quantity: 1
          });
        },
        setSiblingProduct: (product2) => {
          var _a7, _b7, _c2;
          const selectedVariant = (_b7 = (_a7 = product2.variants.find((variant) => {
            var _a8;
            return variant.id === ((_a8 = get().selectedVariant) == null ? void 0 : _a8.id);
          })) != null ? _a7 : product2.selected_or_first_available_variant) != null ? _b7 : product2.variants[0];
          const otherQueryParams = window.location.search.split(/[?&]/gi).filter((param) => !/^variant=/gi.test(param));
          window.history.replaceState(
            null,
            product2.title,
            `${product2.handle}?variant=${selectedVariant == null ? void 0 : selectedVariant.id}${otherQueryParams.map((param) => `&${param}`).join("")}`
          );
          set({
            options: [...(_c2 = selectedVariant == null ? void 0 : selectedVariant.options) != null ? _c2 : []],
            product: window.structuredClone(product2),
            selectedVariant,
            quantity: 1
          });
        }
      };
    };
  }, "initProductStore");
  var initProducts = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-product-handle]").forEach((productSection3) => {
      initProduct(productSection3);
    });
  }), "initProducts");
  var initProduct = /* @__PURE__ */ __name((productSection3) => {
    var _a5, _b5, _c, _d;
    const productHandle3 = (_a5 = productSection3.dataset) == null ? void 0 : _a5.productHandle;
    const formId3 = productSection3.dataset.productFormId;
    const localProduct = JSONParse(
      (_b5 = document.querySelector(`[data-product-json="${productHandle3}"]`)) == null ? void 0 : _b5.innerHTML
    );
    const useProduct = create(
      initProductStore(productSection3, productHandle3, formId3, window.transformProducts(localProduct))
    );
    const sectionSettings = JSONParse(
      (_c = productSection3.querySelector(`[data-section-settings]`)) == null ? void 0 : _c.innerHTML
    );
    productSection3.querySelectorAll(`[data-product-block]`).forEach((block) => {
      var _a6;
      const type = block.dataset.productBlock;
      const settings = block.dataset.blockSettings ? JSONParse(block.dataset.blockSettings) : null;
      const variantUpsell = productSection3.querySelector(
        '[data-product-block="variant_upsell"]'
      );
      const variantUpsellSettings = variantUpsell ? JSONParse((_a6 = variantUpsell.dataset) == null ? void 0 : _a6.blockSettings) : null;
      switch (type) {
        case "payment_terms":
          return;
        case "popup":
          return;
        case "@app":
          return;
        case "text":
          return;
        case "title":
          B(
            o3(
              ProductTitle,
              {
                useProduct,
                settings
              }
            ),
            block
          );
          return;
        case "vendor":
          B(o3(ProductVendor, { useProduct }), block);
          return;
        case "description":
          B(
            o3(
              ProductDescription,
              {
                settings,
                useProduct
              }
            ),
            block
          );
          return;
        case "share":
          B(o3(ProductShare, { useProduct }), block);
          return;
        case "custom_liquid":
          return;
        case "collapsible_tab":
          return;
        case "rating":
          B(o3(ProductRating, { useProduct }), block);
          return;
        case "complementary":
          B(
            o3(
              ProductComplementaryItems,
              {
                settings,
                useProduct
              }
            ),
            block
          );
          return;
        case "icon_with_text":
          return;
        case "price": {
          B(o3(ProductPrice, { useProduct }), block);
          return;
        }
        case "variant_selector": {
          B(
            o3(
              ProductVariantSelector,
              {
                useProduct,
                settings,
                upsellSettings: variantUpsellSettings
              }
            ),
            block
          );
          return;
        }
        case "variant_upsell": {
          B(
            o3(
              ProductVariantUpsell,
              {
                useProduct,
                settings
              }
            ),
            block
          );
          return;
        }
        case "product_sibling": {
          B(
            o3(
              ProductSibling,
              {
                useProduct,
                settings
              }
            ),
            block
          );
          return;
        }
        case "sku": {
          B(o3(ProductSku, { useProduct }), block);
          return;
        }
        case "quantity_selector": {
          block.innerHTML = "";
          B(o3(ProductQuantitySelector, { useProduct }), block);
          return;
        }
        case "buy_buttons": {
          B(
            o3(
              ProductBuyButtons,
              {
                useProduct,
                settings
              }
            ),
            block
          );
          return;
        }
        case "dynamic_buy_buttons": {
          const eventBlock = block.querySelector("[data-product-block-dynamic-button-events]");
          B(
            o3(
              DynamicProductBuyButtons,
              {
                container: block,
                useProduct,
                settings
              }
            ),
            eventBlock
          );
          return;
        }
        case "inventory": {
          B(
            o3(
              ProductInventorySlider,
              {
                settings,
                useProduct
              }
            ),
            block
          );
          return;
        }
        case "image": {
          B(
            o3(
              ProductImage,
              {
                settings,
                useProduct
              }
            ),
            block
          );
          return;
        }
        case "pre_order": {
          block.innerHTML = "";
          B(
            o3(
              ProductPreOrder,
              {
                settings,
                useProduct
              }
            ),
            block
          );
          return;
        }
        case "side_effects": {
          B(
            o3(ProductSideEffects, { useProduct, productSection: productSection3 }),
            block
          );
          return;
        }
      }
    });
    productSection3.querySelectorAll(`[data-product-media-gallery]`).forEach((galleryElement) => {
      const type = galleryElement.dataset.productMediaGallery;
      switch (type) {
        case "horizontal":
          B(
            o3(ProductGalleryHorizontal, { settings: sectionSettings, useProduct }),
            galleryElement
          );
          return;
        case "vertical":
          B(
            o3(ProductGalleryVertical, { settings: sectionSettings, useProduct }),
            galleryElement
          );
          return;
      }
    });
    const root = document.querySelector("[data-product-add-to-cart-bar]");
    const productAddToCartBarUpsellProduct = (_d = root == null ? void 0 : root.dataset) == null ? void 0 : _d.productAddToCartBarUpsellProduct;
    if (root) {
      root.innerHTML = "";
      B(
        o3(
          ProductAddToCartBar,
          {
            useProduct,
            upsellProductHandle: productAddToCartBarUpsellProduct
          }
        ),
        root
      );
    }
  }, "initProduct");

  // product.payment_terms.tsx
  init_compat_module();
  var PaymentTerms = /* @__PURE__ */ __name(({ useProduct, settings, container }) => {
    const { selectedVariant, selectedSellingPlan } = useProduct(
      ({ selectedVariant: selectedVariant2, selectedSellingPlan: selectedSellingPlan2 }) => ({
        selectedVariant: selectedVariant2,
        selectedSellingPlan: selectedSellingPlan2
      })
    );
    p2(() => {
      const variantInput = container.querySelector("[data-product-form-variant]");
      variantInput.value = `${selectedVariant == null ? void 0 : selectedVariant.id}`;
    }, [container, selectedVariant == null ? void 0 : selectedVariant.available, selectedVariant == null ? void 0 : selectedVariant.id]);
    p2(() => {
      const variantInput = container.querySelector("[data-product-form-variant]");
      variantInput.value = `${selectedVariant == null ? void 0 : selectedVariant.id}`;
      const selling_planInput = container.querySelector(
        "[data-product-form-selling-plan-variant]"
      );
      selling_planInput.disabled = !selectedSellingPlan;
      selling_planInput.value = `${selectedSellingPlan}`;
    }, [container, selectedSellingPlan, selectedVariant == null ? void 0 : selectedVariant.available, selectedVariant == null ? void 0 : selectedVariant.id]);
    return null;
  }, "PaymentTerms");

  // product-quick-view.tsx
  var productSection = document.querySelector(
    "[data-product-quick-view-product-handle]"
  );
  var _a, _b;
  var productHandle = (_b = (_a = productSection == null ? void 0 : productSection.dataset) == null ? void 0 : _a.productQuickViewProductHandle) != null ? _b : "";
  var _a2, _b2;
  var formId = (_b2 = (_a2 = productSection == null ? void 0 : productSection.dataset) == null ? void 0 : _a2.productQuickViewFormId) != null ? _b2 : "";
  var useProductQuickView = create(initProductStore(productSection, productHandle, formId));
  if (productSection) {
    initProductQuickView();
  }
  function ProductQuickViewPreloadEvents({
    useProduct
  }) {
    const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2, hydrated: hydrated2 }) => ({
      getAsyncProduct: getAsyncProduct2,
      hydrated: hydrated2
    }));
    const settings = useGlobalSettings();
    const productImagesLoaded = _2([]);
    const updateProduct = useProduct((state) => state == null ? void 0 : state.updateProduct);
    p2(() => {
      if (hydrated) {
        document.querySelectorAll("[data-quick-view-product]").forEach((productElement) => {
          const productHandle3 = productElement.dataset.quickViewProduct;
          const button = productElement.querySelector(
            "[data-product-quick-view-add-button]"
          );
          if (!button || (button == null ? void 0 : button.disabled))
            return;
          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries, observer2) => __async(this, null, function* () {
              var _a5, _b5;
              for (let i4 = 0; i4 < entries.length; i4++) {
                const entry = entries[i4];
                if (!entry.isIntersecting)
                  return;
                observer2.unobserve(entry.target);
                const product = yield getAsyncProduct(productHandle3);
                const withImage = (_a5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _a5.src;
                if (withImage && !productImagesLoaded.current.includes(productHandle3)) {
                  productImagesLoaded.current.push(productHandle3);
                  const image = document.createElement("img");
                  image.src = `${(_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.src}&width=180`;
                }
              }
            }));
            observer.observe(productElement);
          }
        });
      }
    }, [hydrated]);
    const handleClick = T2((e3) => {
      var _a5, _b5, _c, _d, _e;
      const disableCartOpen = (_b5 = (_a5 = e3.target.closest("[data-quick-view-product]")) == null ? void 0 : _a5.dataset) == null ? void 0 : _b5.productCardNoAutoCart;
      const spinner = e3.currentTarget.querySelector("[data-loading-spinner]");
      (_c = spinner == null ? void 0 : spinner.classList) == null ? void 0 : _c.remove("opacity-0");
      const productHandle3 = (_e = (_d = e3.target.closest("[data-product-quick-view-add-button]")) == null ? void 0 : _d.dataset) == null ? void 0 : _e.productQuickViewAddButton;
      e3.preventDefault();
      getAsyncProduct(productHandle3).then((p4) => __async(this, null, function* () {
        var _a6;
        if (p4) {
          if (p4.variants.length > 1 || !settings.product_card__button_single_variant_add_to_cart) {
            updateProduct(p4, !disableCartOpen);
            setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
          }
          if (p4.variants.length <= 1 && settings.product_card__button_single_variant_add_to_cart) {
            yield cart.add(
              {
                items: [
                  {
                    id: p4.selected_or_first_available_variant.id,
                    quantity: 1
                  }
                ]
              },
              true
            );
          }
        }
        (_a6 = spinner == null ? void 0 : spinner.classList) == null ? void 0 : _a6.add("opacity-0");
      })).catch((e4) => {
        var _a6;
        (_a6 = spinner == null ? void 0 : spinner.classList) == null ? void 0 : _a6.add("opacity-0");
      });
    }, [getAsyncProduct, updateProduct]);
    p2(() => {
      document.querySelectorAll("[data-product-quick-view-add-button]").forEach((productDrawerButton) => {
        productDrawerButton.addEventListener("click", handleClick);
      });
      return () => {
        document.querySelectorAll("[data-product-quick-view-add-button]").forEach((productDrawerButton) => {
          productDrawerButton.removeEventListener("click", handleClick);
        });
      };
    }, [handleClick]);
    p2(() => {
      const MutationObserver2 = window.MutationObserver || window["WebKitMutationObserver"];
      const mutationObserver = new MutationObserver2((e3) => {
        e3 == null ? void 0 : e3.forEach(
          (record) => record.addedNodes.forEach((node) => __async(this, null, function* () {
            var _a5, _b5, _c;
            if ((_a5 = node == null ? void 0 : node.dataset) == null ? void 0 : _a5.quickViewProduct) {
              const productElement = node;
              const productHandle3 = productElement.dataset.quickViewProduct;
              const button = productElement.querySelector(
                "[data-product-quick-view-add-button]"
              );
              if (!button || (button == null ? void 0 : button.disabled))
                return;
              const product = yield getAsyncProduct(productHandle3);
              const withImage = (_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.src;
              if (withImage && !productImagesLoaded.current.includes(productHandle3)) {
                productImagesLoaded.current.push(productHandle3);
                const image = document.createElement("img");
                image.src = `${(_c = product == null ? void 0 : product.featured_media) == null ? void 0 : _c.src}&width=180`;
              }
              button.addEventListener("click", handleClick);
            }
          }))
        );
      });
      if (hydrated) {
        mutationObserver.observe(document.body, { childList: true, subtree: true });
      }
      return () => {
        mutationObserver.disconnect();
      };
    }, [handleClick, hydrated]);
    return null;
  }
  __name(ProductQuickViewPreloadEvents, "ProductQuickViewPreloadEvents");
  function initProductQuickView() {
    productSection.querySelectorAll(`[data-product-block]`).forEach((block) => {
      const type = block.dataset.productBlock;
      const settings = block.dataset.blockSettings ? JSONParse(block.dataset.blockSettings) : null;
      switch (type) {
        case "image_gallery": {
          block.innerHTML = "";
          B(
            o3(
              ProductQuickViewImageGallery,
              {
                useProduct: useProductQuickView,
                settings
              }
            ),
            block
          );
          return;
        }
        case "payment_terms": {
          const eventBlock = block.querySelector("[data-product-block-payment-terms-events]");
          B(
            o3(
              PaymentTerms,
              {
                container: block,
                useProduct: useProductQuickView,
                settings
              }
            ),
            eventBlock
          );
          return;
        }
        case "text":
          return;
        case "title":
          block.innerHTML = "";
          B(
            o3(
              ProductTitle,
              {
                useProduct: useProductQuickView,
                settings
              }
            ),
            block
          );
          return;
        case "vendor":
          B(o3(ProductVendor, { useProduct: useProductQuickView }), block);
          return;
        case "description":
          B(
            o3(
              ProductDescription,
              {
                settings,
                useProduct: useProductQuickView
              }
            ),
            block
          );
          return;
        case "share":
          B(o3(ProductShare, { useProduct: useProductQuickView }), block);
          return;
        case "custom_liquid":
          return;
        case "collapsible_tab":
          return;
        case "rating":
          B(o3(ProductRating, { useProduct: useProductQuickView }), block);
          return;
        case "complementary":
          B(
            o3(
              ProductComplementaryItems,
              {
                settings,
                useProduct: useProductQuickView
              }
            ),
            block
          );
          return;
        case "icon_with_text":
          return;
        case "price": {
          block.innerHTML = "";
          B(o3(ProductPrice, { useProduct: useProductQuickView }), block);
          return;
        }
        case "variant_selector": {
          block.innerHTML = "";
          B(
            o3(
              ProductVariantSelector,
              {
                useProduct: useProductQuickView,
                settings
              }
            ),
            block
          );
          return;
        }
        case "sku": {
          block.innerHTML = "";
          B(o3(ProductSku, { useProduct: useProductQuickView }), block);
          return;
        }
        case "quantity_selector": {
          block.innerHTML = "";
          B(o3(ProductQuantitySelector, { useProduct: useProductQuickView }), block);
          return;
        }
        case "buy_buttons": {
          block.innerHTML = "";
          B(
            o3(
              ProductBuyButtons,
              {
                useProduct: useProductQuickView,
                settings
              }
            ),
            block
          );
          return;
        }
        case "dynamic_buy_buttons": {
          const eventBlock = block.querySelector("[data-product-block-dynamic-button-events]");
          B(
            o3(
              DynamicProductBuyButtons,
              {
                container: block,
                useProduct: useProductQuickView,
                settings
              }
            ),
            eventBlock
          );
          return;
        }
        case "inventory": {
          block.innerHTML = "";
          B(
            o3(
              ProductInventorySlider,
              {
                settings,
                useProduct: useProductQuickView
              }
            ),
            block
          );
          return;
        }
        case "side_effects": {
          block.innerHTML = "";
          B(
            o3(
              ProductSideEffects,
              {
                useProduct: useProductQuickView,
                productSection,
                cartDrawer: true
              }
            ),
            block
          );
          return;
        }
        case "preload_products": {
          block.innerHTML = "";
          B(o3(ProductQuickViewPreloadEvents, { useProduct: useProductQuickView }), block);
          return;
        }
        case "pre_order": {
          block.innerHTML = "";
          B(
            o3(
              ProductPreOrder,
              {
                settings,
                useProduct: useProductQuickView
              }
            ),
            block
          );
          return;
        }
      }
    });
  }
  __name(initProductQuickView, "initProductQuickView");

  // product-card.tsx
  init_compat_module();
  var import_uri_js3 = __toESM(require_uri_all());
  var initProductCards = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const routeProtectionProducts = [];
    document.querySelectorAll("[data-route-protection]").forEach((element) => {
      const settings = JSONParse(
        element.dataset.routeProtectionSettings
      );
      routeProtectionProducts.push(settings);
    });
    document.querySelectorAll("[data-product-card]").forEach((productCardContainer) => {
      var _a5, _b5, _c;
      const collectionUrl = productCardContainer.dataset.productCardCollectionUrl;
      const productHandle3 = productCardContainer.dataset.quickViewProduct;
      const filterColor = (_a5 = productCardContainer.closest(".shopify-section").querySelector(`[data-collection-color-filter-active]`)) == null ? void 0 : _a5.dataset.collectionColorFilterActive;
      const isLimitedRouteProtectionProduct = !!((_b5 = routeProtectionProducts.find(
        (block) => {
          var _a6, _b6;
          return ((_b6 = (_a6 = block == null ? void 0 : block.products) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.handle) === productHandle3;
        }
      )) == null ? void 0 : _b5.limit_quantity);
      if (!isLimitedRouteProtectionProduct && !productCardContainer.querySelector("[data-product-card-variant-selector]") && !((_c = window == null ? void 0 : window.Shopify) == null ? void 0 : _c.designMode)) {
        return;
      }
      const productData = globalProducts.getState().getProduct(productHandle3);
      if (!productData) {
        const subscription = globalProducts.subscribe((state) => {
          const product = state.getProduct(productHandle3);
          if (product) {
            subscription();
            productCardContainer.innerHTML = "";
            B(
              o3(
                ProductCardInner,
                {
                  filterColor,
                  product,
                  collectionUrl,
                  productCardContainer
                }
              ),
              productCardContainer
            );
          }
        });
      } else {
        productCardContainer.innerHTML = "";
        B(
          o3(
            ProductCardInner,
            {
              filterColor,
              product: productData,
              collectionUrl,
              productCardContainer
            }
          ),
          productCardContainer
        );
      }
    });
  }), "initProductCards");
  var ProductCardInner = /* @__PURE__ */ __name((_a5) => {
    var _b5 = _a5, { product, collectionUrl, className, productCardContainer, filterColor } = _b5, props = __objRest(_b5, ["product", "collectionUrl", "className", "productCardContainer", "filterColor"]);
    var _a6, _b6, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H;
    const { product_data__preorder_cta } = useGlobalSettings();
    const containerRef = _2(null);
    const { width } = useWindowSize();
    const [containerWidth, setContainerWidth] = h2(400);
    const [customDiscount, setCustomDiscount] = h2(0);
    const [hasDiscountCustomer, setHasDiscountCustomer] = h2(false);
    const [customDiscountedPrice, setCustomDiscountedPrice] = h2(0);
    const [customCompareAtPrice, setCustomCompareAtPrice] = h2(0);
    const updateProduct = useProductQuickView((state) => state.updateProduct);
    const settings = useGlobalSettings();
    const colorOption = F2(() => {
      var _a7, _b7, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n3, _o2;
      let options = (_a7 = product == null ? void 0 : product.options_with_values) == null ? void 0 : _a7.find(
        (option) => settings == null ? void 0 : settings.product_card__variant_selector__color_list.split(",").map((c4) => c4.trim().toLowerCase()).includes(option.name.trim().toLowerCase())
      );
      const availableValues = (_b7 = options == null ? void 0 : options.values) == null ? void 0 : _b7.filter((value2) => {
        var _a8;
        const index = options.position - 1;
        const notAvailable = !((_a8 = product == null ? void 0 : product.variants) == null ? void 0 : _a8.some(
          (variant) => variant.options[index] === value2 && variant.available
        ));
        return !(settings.product_data__hide_oos_variants && notAvailable);
      });
      const value = settings.collection__filter_variant_select ? (_h2 = (_f2 = (_e2 = (_d2 = (_c2 = product == null ? void 0 : product.variants) == null ? void 0 : _c2.find((v4) => {
        var _a8, _b8, _c3, _d3, _e3, _f3, _g3;
        if (((_b8 = (_a8 = v4 == null ? void 0 : v4.options) == null ? void 0 : _a8[(options == null ? void 0 : options.position) - 1]) == null ? void 0 : _b8.toLowerCase()) === (filterColor == null ? void 0 : filterColor.toLowerCase())) {
          return true;
        }
        const [namespace, key] = ((_c3 = settings == null ? void 0 : settings.collection__filter_variant_color_metafield) != null ? _c3 : "").split(".");
        if (namespace && key) {
          return ((_g3 = (_f3 = (_e3 = (_d3 = v4.metafields) == null ? void 0 : _d3[namespace]) == null ? void 0 : _e3[key]) != null ? _f3 : "") == null ? void 0 : _g3.toLowerCase()) === (filterColor == null ? void 0 : filterColor.toLowerCase());
        }
        return false;
      })) == null ? void 0 : _d2.options) == null ? void 0 : _e2[(options == null ? void 0 : options.position) - 1]) != null ? _f2 : availableValues == null ? void 0 : availableValues[0]) != null ? _h2 : (_g2 = options == null ? void 0 : options.values) == null ? void 0 : _g2[0] : (_j2 = availableValues == null ? void 0 : availableValues[0]) != null ? _j2 : (_i2 = options == null ? void 0 : options.values) == null ? void 0 : _i2[0];
      options = __spreadProps(__spreadValues({}, options), {
        values: [
          options == null ? void 0 : options.values.find((val) => val === value),
          ...(_l2 = (_k2 = options == null ? void 0 : options.values) == null ? void 0 : _k2.filter((val) => val !== value)) != null ? _l2 : []
        ]
      });
      const mediaIds = [];
      const variantWithPrimaryImage = (_m2 = product == null ? void 0 : product.variants) == null ? void 0 : _m2.find((v4) => {
        var _a8, _b8;
        if (v4.options[(options == null ? void 0 : options.position) - 1] === value && v4.featured_media && !mediaIds.includes((_a8 = v4.featured_media) == null ? void 0 : _a8.id)) {
          mediaIds.push((_b8 = v4.featured_media) == null ? void 0 : _b8.id);
          return true;
        }
        return false;
      });
      const variantWithSecondaryImage = (_n3 = product == null ? void 0 : product.variants) == null ? void 0 : _n3.find((v4) => {
        var _a8, _b8;
        if (v4.options[(options == null ? void 0 : options.position) - 1] === value && v4.featured_media && !mediaIds.includes((_a8 = v4.featured_media) == null ? void 0 : _a8.id)) {
          mediaIds.push((_b8 = v4.featured_media) == null ? void 0 : _b8.id);
          return true;
        }
        return false;
      });
      return __spreadProps(__spreadValues({}, options), {
        values: (_o2 = options == null ? void 0 : options.values) == null ? void 0 : _o2.map((value2) => {
          var _a8;
          const index = options.position - 1;
          const notAvailable = !((_a8 = product == null ? void 0 : product.variants) == null ? void 0 : _a8.some(
            (variant) => variant.options[index] === value2 && variant.available
          ));
          return {
            value: value2,
            available: !notAvailable
          };
        }),
        value,
        variantWithPrimaryImage,
        variantWithSecondaryImage
      });
    }, [
      filterColor,
      product == null ? void 0 : product.options_with_values,
      product.variants,
      settings == null ? void 0 : settings.collection__filter_variant_color_metafield,
      settings.collection__filter_variant_select,
      settings == null ? void 0 : settings.product_card__variant_selector__color_list,
      settings.product_data__hide_oos_variants
    ]);
    const { cartData, routeProtectionProducts } = useCartDrawer(
      ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 }) => ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 })
    );
    const inCartItem = (_a6 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a6.find(
      (line_item) => product.variants.some((variant) => line_item.variant_id === variant.id)
    );
    const routeProtection = inCartItem ? routeProtectionProducts.find((block) => {
      var _a7, _b7;
      return ((_b7 = (_a7 = block == null ? void 0 : block.products) == null ? void 0 : _a7[0]) == null ? void 0 : _b7.handle) === (inCartItem == null ? void 0 : inCartItem.handle);
    }) : null;
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    const [selectedColor, setSelectedColor] = h2(colorOption == null ? void 0 : colorOption.value);
    const [primaryImage, setPrimaryImage] = h2(
      settings.product_card__image__default_source === "variant_image" ? (_e = (_c = (_b6 = colorOption == null ? void 0 : colorOption.variantWithPrimaryImage) == null ? void 0 : _b6.featured_media) == null ? void 0 : _c.preview_image) != null ? _e : (_d = product == null ? void 0 : product.featured_media) == null ? void 0 : _d.preview_image : (_f = product == null ? void 0 : product.featured_media) == null ? void 0 : _f.preview_image
    );
    const [secondaryImage, setSecondaryImage] = h2(() => {
      var _a7, _b7, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n3;
      const value = selectedColor;
      const mediaIds = [];
      const variantWithPrimaryImage = (_a7 = product == null ? void 0 : product.variants) == null ? void 0 : _a7.find((v4) => {
        var _a8, _b8;
        if (v4.options[(colorOption == null ? void 0 : colorOption.position) - 1] === value && v4.featured_media && !mediaIds.includes((_a8 = v4.featured_media) == null ? void 0 : _a8.id)) {
          mediaIds.push((_b8 = v4.featured_media) == null ? void 0 : _b8.id);
          return true;
        }
        return false;
      });
      if (variantWithPrimaryImage && settings.product_card__image__default_source === "variant_image") {
        setPrimaryImage((_b7 = variantWithPrimaryImage.featured_media) == null ? void 0 : _b7.preview_image);
      }
      switch (settings.product_card__image__secondary_source) {
        case "product": {
          return (_d2 = (_c2 = product == null ? void 0 : product.media) == null ? void 0 : _c2[1]) == null ? void 0 : _d2.preview_image;
        }
        case "variant": {
          const nextImagePosition = (_e2 = product.media.find(
            (m3) => m3.position > variantWithPrimaryImage.featured_media.position && product.variants.some((v4) => {
              var _a8;
              return ((_a8 = v4.featured_media) == null ? void 0 : _a8.id) === m3.id;
            })
          )) == null ? void 0 : _e2.position;
          const availableImage = (_g2 = (_f2 = product.media.slice(
            variantWithPrimaryImage.featured_media.position,
            nextImagePosition ? nextImagePosition - 1 : nextImagePosition
          )) == null ? void 0 : _f2.at(1)) != null ? _g2 : variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.featured_media;
          return availableImage;
        }
        case "metafield": {
          const [namespace, key] = settings.product_card__image__secondary_source_metafield.trim().split(".");
          const image = Array.isArray((_i2 = (_h2 = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.metafields) == null ? void 0 : _h2[namespace]) == null ? void 0 : _i2[key]) ? (_l2 = (_k2 = (_j2 = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.metafields) == null ? void 0 : _j2[namespace]) == null ? void 0 : _k2[key]) == null ? void 0 : _l2[0] : (_n3 = (_m2 = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.metafields) == null ? void 0 : _m2[namespace]) == null ? void 0 : _n3[key];
          return image ? { aspect_ratio: 1, height: 500, src: image, width: 500 } : variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.featured_media;
        }
      }
    });
    const handleClick = T2(
      (preview = false) => __async(void 0, null, function* () {
        var _a7, _b7, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n3, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2, _A2;
        if (isSingleQuantityRouteProtectionItem) {
          return;
        }
        if ((product.variants.length > 1 || !settings.product_card__button_single_variant_add_to_cart) && !settings.product_card__button_color_variant_add_to_cart || product.options.filter(Boolean).length > 1 || preview) {
          const disableCartOpen = (_a7 = productCardContainer == null ? void 0 : productCardContainer.dataset) == null ? void 0 : _a7.productCardNoAutoCart;
          updateProduct(product, !disableCartOpen);
          setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
        }
        if (!preview && (product.variants.length <= 1 && settings.product_card__button_single_variant_add_to_cart || product.options.filter(Boolean).length <= 1 && settings.product_card__button_color_variant_add_to_cart)) {
          const selectedVariant = (colorOption == null ? void 0 : colorOption.value) ? product.variants.find((v4) => v4.option1 === selectedColor) : (_b7 = product == null ? void 0 : product.variants) == null ? void 0 : _b7[0];
          const pre_order = (_d2 = (_c2 = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _c2.smart) == null ? void 0 : _d2.pre_order;
          const pre_order_date = (_f2 = (_e2 = selectedVariant == null ? void 0 : selectedVariant.metafields) == null ? void 0 : _e2.smart) == null ? void 0 : _f2.pre_order_date;
          if (pre_order && (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) < 1) {
            const now_date = Date.now();
            let label = "On Preorder";
            let timeOfMonth = "early ";
            if (pre_order_date) {
              const target_date = new Date(pre_order_date).getTime();
              const target_day = +new Date(pre_order_date).toLocaleString("en", {
                day: "2-digit"
              });
              const target_month = new Date(pre_order_date).toLocaleString("en", {
                month: "long"
              });
              const difference = Math.round((target_date - now_date) / 1e3 / 60 / 60 / 24);
              if (target_day > 7) {
                timeOfMonth = "mid ";
              }
              if (target_day > 20) {
                timeOfMonth = "end of ";
              }
              label = "Preorder Shipping this week";
              if (difference > 7) {
                label = "Preorder Shipping next week";
              }
              if (difference > 15) {
                label = "Preorder Shipping end of the month";
              }
              if (difference > 31) {
                label = "Preorder Shipping early next month";
              }
              if (difference > 45) {
                label = `Preorder Shipping ${timeOfMonth} ${target_month}`;
              }
            }
            if ((selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) > 0) {
              yield cart.add(
                {
                  items: [
                    {
                      id: selectedVariant == null ? void 0 : selectedVariant.id,
                      quantity: selectedVariant == null ? void 0 : selectedVariant.inventory_quantity,
                      selling_plan: (product == null ? void 0 : product.requires_selling_plan) ? (_j2 = (_i2 = (_h2 = (_g2 = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _g2[0]) == null ? void 0 : _h2.selling_plans) == null ? void 0 : _i2[0]) == null ? void 0 : _j2.id : void 0
                    },
                    {
                      id: selectedVariant == null ? void 0 : selectedVariant.id,
                      quantity: 1 - (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity),
                      properties: {
                        preorder: label
                      },
                      selling_plan: (product == null ? void 0 : product.requires_selling_plan) ? (_n3 = (_m2 = (_l2 = (_k2 = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _k2[0]) == null ? void 0 : _l2.selling_plans) == null ? void 0 : _m2[0]) == null ? void 0 : _n3.id : void 0
                    }
                  ]
                },
                true
              );
            }
            if ((selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) <= 0) {
              yield cart.add(
                {
                  items: [
                    {
                      id: selectedVariant == null ? void 0 : selectedVariant.id,
                      quantity: 1,
                      properties: {
                        preorder: label
                      },
                      selling_plan: (product == null ? void 0 : product.requires_selling_plan) ? (_r2 = (_q2 = (_p2 = (_o2 = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _o2[0]) == null ? void 0 : _p2.selling_plans) == null ? void 0 : _q2[0]) == null ? void 0 : _r2.id : void 0
                    }
                  ]
                },
                true
              );
            }
            return;
          }
          if (!pre_order || (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) >= 1) {
            yield cart.add(
              {
                items: [
                  {
                    id: selectedVariant == null ? void 0 : selectedVariant.id,
                    quantity: 1,
                    selling_plan: (product == null ? void 0 : product.requires_selling_plan) ? (_v2 = (_u2 = (_t2 = (_s2 = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _s2[0]) == null ? void 0 : _t2.selling_plans) == null ? void 0 : _u2[0]) == null ? void 0 : _v2.id : void 0
                  }
                ]
              },
              true
            );
            return;
          }
          yield cart.add(
            {
              items: [
                {
                  id: (_w2 = product == null ? void 0 : product.variants) == null ? void 0 : _w2[0].id,
                  quantity: 1,
                  selling_plan: (product == null ? void 0 : product.requires_selling_plan) ? (_A2 = (_z2 = (_y2 = (_x2 = product == null ? void 0 : product.selling_plan_groups) == null ? void 0 : _x2[0]) == null ? void 0 : _y2.selling_plans) == null ? void 0 : _z2[0]) == null ? void 0 : _A2.id : void 0
                }
              ]
            },
            true
          );
        }
      }),
      [
        isSingleQuantityRouteProtectionItem,
        product,
        (_g = productCardContainer == null ? void 0 : productCardContainer.dataset) == null ? void 0 : _g.productCardNoAutoCart,
        settings.product_card__button_single_variant_add_to_cart,
        updateProduct,
        selectedColor
      ]
    );
    const handleColorSelect = T2((value) => {
      var _a7, _b7, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2;
      setSelectedColor(value);
      const mediaIds = [];
      const variantWithPrimaryImage = product.variants.find((v4) => {
        var _a8, _b8;
        if (v4.options[(colorOption == null ? void 0 : colorOption.position) - 1] === value && v4.featured_media && !mediaIds.includes((_a8 = v4.featured_media) == null ? void 0 : _a8.id)) {
          mediaIds.push((_b8 = v4.featured_media) == null ? void 0 : _b8.id);
          return true;
        }
        return false;
      });
      if (variantWithPrimaryImage) {
        setPrimaryImage((_a7 = variantWithPrimaryImage.featured_media) == null ? void 0 : _a7.preview_image);
      }
      switch (settings.product_card__image__secondary_source) {
        case "product": {
          setSecondaryImage((_c2 = (_b7 = product == null ? void 0 : product.media) == null ? void 0 : _b7[1]) == null ? void 0 : _c2.preview_image);
          break;
        }
        case "variant": {
          const nextImagePosition = (_d2 = product.media.find(
            (m3) => m3.position > variantWithPrimaryImage.featured_media.position && product.variants.some((v4) => {
              var _a8;
              return ((_a8 = v4.featured_media) == null ? void 0 : _a8.id) === m3.id;
            })
          )) == null ? void 0 : _d2.position;
          const availableImage = (_f2 = (_e2 = product.media.slice(
            variantWithPrimaryImage.featured_media.position,
            nextImagePosition ? nextImagePosition - 1 : nextImagePosition
          )) == null ? void 0 : _e2.at(1)) != null ? _f2 : variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.featured_media;
          setSecondaryImage(availableImage);
          break;
        }
        case "metafield": {
          const [namespace, key] = settings.product_card__image__secondary_source_metafield.trim().split(".");
          const image = Array.isArray((_h2 = (_g2 = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.metafields) == null ? void 0 : _g2[namespace]) == null ? void 0 : _h2[key]) ? (_k2 = (_j2 = (_i2 = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.metafields) == null ? void 0 : _i2[namespace]) == null ? void 0 : _j2[key]) == null ? void 0 : _k2[0] : (_m2 = (_l2 = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.metafields) == null ? void 0 : _l2[namespace]) == null ? void 0 : _m2[key];
          setSecondaryImage(
            image ? { aspect_ratio: 1, height: 500, src: image, width: 500 } : variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.featured_media
          );
          break;
        }
      }
    }, [colorOption == null ? void 0 : colorOption.position, settings.product_card__image__secondary_source, product, settings.product_card__image__secondary_source_metafield]);
    const handlePreloadImage = T2((value) => {
      const mediaIds = [];
      const variantWithPrimaryImage = product.variants.find((v4) => {
        var _a7, _b7;
        if (v4.options[(colorOption == null ? void 0 : colorOption.position) - 1] === value && v4.featured_media && !mediaIds.includes((_a7 = v4.featured_media) == null ? void 0 : _a7.id)) {
          mediaIds.push((_b7 = v4.featured_media) == null ? void 0 : _b7.id);
          return true;
        }
        return false;
      });
      const variantWithSecondaryImage = product.variants.find((v4) => {
        var _a7, _b7;
        if (v4.options[(colorOption == null ? void 0 : colorOption.position) - 1] === value && v4.featured_media && !mediaIds.includes((_a7 = v4.featured_media) == null ? void 0 : _a7.id)) {
          mediaIds.push((_b7 = v4.featured_media) == null ? void 0 : _b7.id);
          return true;
        }
        return false;
      });
      if (variantWithPrimaryImage) {
        const imgEl = document.createElement("img");
        const src = variantWithPrimaryImage == null ? void 0 : variantWithPrimaryImage.featured_media.preview_image.src.replace(/&v=\d+(&)/gi, "$1").replace(/\?v=\d+(&)/gi, "?").replace(/\?v=\d+$/gi, "");
        imgEl.src = `${src}&width=500`;
        imgEl.onload = () => imgEl.remove();
      }
      if (variantWithSecondaryImage) {
        const imgEl = document.createElement("img");
        const src = variantWithSecondaryImage == null ? void 0 : variantWithSecondaryImage.featured_media.preview_image.src.replace(/&v=\d+(&)/gi, "$1").replace(/\?v=\d+(&)/gi, "?").replace(/\?v=\d+$/gi, "");
        imgEl.src = `${src}&width=500`;
        imgEl.onload = () => imgEl.remove();
      }
    }, [colorOption == null ? void 0 : colorOption.position, product.variants]);
    const getColorSwatch = T2(
      (value) => {
        var _a7, _b7, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
        const variantWithImage = product.variants.find(
          (variant) => {
            var _a8;
            return variant.options[colorOption.position - 1] === value && ((_a8 = variant.featured_media) == null ? void 0 : _a8.src);
          }
        );
        const [namespace, key] = settings.product_data__variants_color_swatches.trim().split(".");
        const variantWithMetafield = product.variants.find(
          (variant) => {
            var _a8, _b8;
            return variant.options[colorOption.position - 1] === value && ((_b8 = (_a8 = variant == null ? void 0 : variant.metafields) == null ? void 0 : _a8[namespace]) == null ? void 0 : _b8[key]);
          }
        );
        switch (settings.product_card__color_selector) {
          case "via_option": {
            return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
          }
          case "via_option_then_image": {
            if (variantWithImage) {
              return `var(--color-swatch--${toKebabCase(value)}, url("${(_a7 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _a7.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size}"))`;
            }
            return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
          }
          case "via_image": {
            if (variantWithImage) {
              return `url(${(_b7 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _b7.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size})`;
            }
            return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
          }
          case "via_metafield": {
            if (variantWithMetafield) {
              return `${(_d2 = (_c2 = variantWithMetafield == null ? void 0 : variantWithMetafield.metafields) == null ? void 0 : _c2[namespace]) == null ? void 0 : _d2[key]}`;
            }
            return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
          }
          case "via_image_then_metafield": {
            if (variantWithImage) {
              return `url(${(_e2 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _e2.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size})`;
            }
            if (variantWithMetafield) {
              return `${(_g2 = (_f2 = variantWithMetafield == null ? void 0 : variantWithMetafield.metafields) == null ? void 0 : _f2[namespace]) == null ? void 0 : _g2[key]}`;
            }
            return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
          }
          case "via_metafield_then_image": {
            if (variantWithMetafield) {
              return `${(_i2 = (_h2 = variantWithMetafield == null ? void 0 : variantWithMetafield.metafields) == null ? void 0 : _h2[namespace]) == null ? void 0 : _i2[key]}`;
            }
            if (variantWithImage) {
              return `url(${(_j2 = variantWithImage == null ? void 0 : variantWithImage.featured_media) == null ? void 0 : _j2.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size})`;
            }
            return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
          }
        }
      },
      [
        colorOption.position,
        product.variants,
        settings.product_card__color_selector,
        settings.product_card__color_selector_size,
        settings.product_data__variants_color_swatches
      ]
    );
    p2(() => {
      var _a7, _b7;
      if ((_a7 = containerRef.current) == null ? void 0 : _a7.clientWidth) {
        setContainerWidth((_b7 = containerRef.current) == null ? void 0 : _b7.clientWidth);
      }
    }, [width]);
    p2(() => {
      const price = product.price_min;
      const tags = product.tags;
      if (tags.indexOf("no-discount") !== -1) {
        return;
      }
      const customerTags = window.customerTags || [];
      let discount = 0;
      if (customerTags.indexOf("Pro") !== -1) {
        discount = window.proDiscount;
        const discount_percentage = discount / 100;
        const discountedPrice = price - price * discount_percentage;
        setCustomDiscount(discount_percentage);
        setHasDiscountCustomer(true);
        setCustomCompareAtPrice(price);
        setCustomDiscountedPrice(discountedPrice);
      }
    }, [product]);
    return o3(_, { children: [
      o3(
        "a",
        {
          ref: containerRef,
          className: clsx_m_default(
            "product-card__image group relative grid h-0 outline-none hf:outline-none ",
            settings.product_card__image__ratio
          ),
          href: collectionUrl ? collectionUrl + product.url : product.url,
          "aria-label": product.title,
          style: { marginBottom: `${settings.product_card__image__margin_bottom}px` },
          children: [
            o3(
              "div",
              {
                className: clsx_m_default("absolute inset-0 h-full w-full overflow-hidden"),
                style: { background: settings.product_card__image__background },
                children: o3(
                  Image2,
                  {
                    src: primaryImage == null ? void 0 : primaryImage.src,
                    width: 500,
                    height: (primaryImage == null ? void 0 : primaryImage.aspect_ratio) * 500,
                    maxWidth: 640,
                    alt: (_i = (_h = product == null ? void 0 : product.featured_media) == null ? void 0 : _h.alt) != null ? _i : product.title,
                    className: clsx_m_default(
                      "inset-0 h-full w-full select-none object-cover",
                      settings.product_card__image__drop_shadow && "drop-shadow-product"
                    )
                  }
                )
              }
            ),
            settings.product_card__image__show_secondary && (secondaryImage == null ? void 0 : secondaryImage.src) ? o3(
              "div",
              {
                className: "absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100",
                style: { background: settings.product_card__background_color },
                children: [
                  o3(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: { background: settings.product_card__image__background }
                    }
                  ),
                  o3(
                    Image2,
                    {
                      src: secondaryImage == null ? void 0 : secondaryImage.src,
                      width: 500,
                      height: (secondaryImage == null ? void 0 : secondaryImage.aspect_ratio) * 500,
                      maxWidth: 640,
                      alt: product.title,
                      className: clsx_m_default(
                        "relative inset-0 h-full w-full select-none object-cover",
                        settings.product_card__image__drop_shadow && "drop-shadow-product"
                      )
                    }
                  )
                ]
              }
            ) : null,
            settings.product_card__variant_count__show && ((_j = product == null ? void 0 : product.variants) == null ? void 0 : _j.length) > 1 ? o3(
              "div",
              {
                className: clsx_m_default(
                  "pointer-events-none absolute bottom-2 left-1/2 w-[calc(100%-16px)] -translate-x-1/2 rounded-sm bg-white/80 px-2 py-2 text-center text-[11px] font-semibold transition-all duration-75 md:bottom-3 md:w-[calc(100%-24px)] md:text-xs",
                  settings.product_card__variant_count__show_hover && "opacity-0 group-hf:opacity-100",
                  settings.product_card__variant_count__responsive_visibility
                ),
                children: [
                  "Available in ",
                  (_k = product == null ? void 0 : product.variants) == null ? void 0 : _k.length,
                  " variations"
                ]
              }
            ) : null,
            settings.product_card__labels__show ? o3(
              "div",
              {
                className: clsx_m_default(
                  "absolute right-3 top-3 -m-0.5 flex max-w-[65%] flex-wrap justify-end",
                  settings.product_card__labels__responsive_visibility
                ),
                children: [
                  Array.isArray((_m = (_l = product.metafields) == null ? void 0 : _l.smart) == null ? void 0 : _m.product_labels) ? (_p = (_o = (_n2 = product.metafields) == null ? void 0 : _n2.smart) == null ? void 0 : _o.product_labels) == null ? void 0 : _p.map((label) => {
                    return o3("div", { className: "label m-0.5", children: label }, label);
                  }) : null,
                  Array.isArray((_r = (_q = product.metafields) == null ? void 0 : _q.smart) == null ? void 0 : _r.labels) ? (_u = (_t = (_s = product.metafields) == null ? void 0 : _s.smart) == null ? void 0 : _t.labels) == null ? void 0 : _u.map((label) => {
                    return o3(
                      "div",
                      {
                        className: "label m-0.5",
                        style: { color: label == null ? void 0 : label.color, background: label == null ? void 0 : label.background_color },
                        children: label == null ? void 0 : label.label_text
                      },
                      label
                    );
                  }) : null,
                  (product.price < product.compare_at_price || hasDiscountCustomer && customDiscount > 0) && product.available ? o3("div", { className: "label-item label--primary m-0.5", children: {
                    sale: o3(_, { children: "On Sale" }),
                    percentage: product.price === 0 ? "FREE" : o3(_, { children: [
                      hasDiscountCustomer ? customDiscount * 100 : Math.round(
                        (product.compare_at_price - product.price) * 100 / product.compare_at_price
                      ),
                      "% Off"
                    ] }),
                    value: product.price === 0 ? "FREE" : o3(
                      "span",
                      {
                        dangerouslySetInnerHTML: {
                          __html: `Save ${window.formatMoney(
                            product.compare_at_price - product.price
                          )}`
                        }
                      }
                    )
                  }[settings.product_card__labels__discount] }) : null,
                  !product.available ? o3("div", { className: "label-theme-inverted m-0.5", children: "Sold out" }) : null
                ]
              }
            ) : null
          ]
        }
      ),
      o3("div", { className: "product-card__title relative flex flex-1 flex-col items-stretch space-y-1 px-3 pb-3", children: [
        o3("div", { style: { marginBottom: `${settings.product_card__title__margin_bottom}px` }, children: o3(
          "a",
          {
            className: "product-card-title outline-none hf:underline hf:outline-none",
            href: collectionUrl ? collectionUrl + product.url : product.url,
            children: product.title
          }
        ) }),
        settings.product_card__rating__show ? o3(
          ProductRatingWithProduct,
          {
            product,
            className: clsx_m_default(
              settings.product_card__rating__responsive_visibility,
              "product-card__reviews"
            ),
            style: { marginBottom: `${settings.product_card__rating__margin_bottom}px` }
          }
        ) : null,
        settings.product_card__vendor__show && product.vendor ? o3(
          "h2",
          {
            className: clsx_m_default(
              "product-card__vendor inline-flex text-sm text-theme-text/60",
              settings.product_card__vendor__responsive_visibility
            ),
            style: { marginBottom: `${settings.product_card__vendor__margin_bottom}px` },
            children: o3(
              "a",
              {
                href: `/collections/vendors?q=${(0, import_uri_js3.escapeComponent)(product.vendor)}`,
                className: "hf:underline",
                title: product.vendor,
                children: product.vendor
              }
            )
          }
        ) : null,
        settings.product_card__price__show ? o3(
          "div",
          {
            className: clsx_m_default(
              "product-card__price",
              settings.product_card__price__responsive_visibility
            ),
            style: { marginBottom: `${settings.product_card__price__margin_bottom}px` },
            children: o3("div", { className: "product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap", children: [
              o3(
                "span",
                {
                  "data-product-price-from-regular": "",
                  className: clsx_m_default(
                    "text-xs font-normal",
                    product.price_varies && !product.compare_at_price_varies ? "" : "hidden"
                  ),
                  children: "From:"
                }
              ),
              o3(
                "span",
                {
                  "data-product-price-from-compare": "",
                  className: clsx_m_default(
                    "text-xs font-normal",
                    product.compare_at_price_varies ? "" : "hidden"
                  ),
                  children: "On Sale from:"
                }
              ),
              o3(
                "span",
                {
                  "data-product-price-regular": "",
                  dangerouslySetInnerHTML: {
                    __html: `${window.formatMoney(
                      hasDiscountCustomer ? customDiscountedPrice : product.price_min
                    )}`
                  }
                }
              ),
              o3(
                "span",
                {
                  "data-product-price-compare": "",
                  className: clsx_m_default(
                    "text-xs text-theme-text/50 line-through",
                    hasDiscountCustomer ? "" : product.compare_at_price_min > product.price_min ? "" : "hidden"
                  ),
                  dangerouslySetInnerHTML: {
                    __html: `${window.formatMoney(
                      hasDiscountCustomer ? customCompareAtPrice : product.compare_at_price_min
                    )}`
                  }
                }
              )
            ] })
          }
        ) : null,
        settings.product_card__variant_selector__show && ((_v = colorOption == null ? void 0 : colorOption.values) == null ? void 0 : _v.length) > 1 ? o3("div", { className: "product-card__variant-selector relative", children: o3("fieldset", { className: "group mt-2 flex gap-1", children: [
          (_w = colorOption == null ? void 0 : colorOption.values) == null ? void 0 : _w.slice(
            0,
            Math.floor(
              (containerWidth - 70) / (settings.product_card__color_selector_size + 10)
            ) - 1
          ).map(({ value, available }) => {
            return o3(
              "label",
              {
                className: clsx_m_default(
                  "flex cursor-pointer items-center justify-center border p-[2px]",
                  value === selectedColor ? "border-black" : "border-[#DEDEDE] hf:border-[#b3b3b3]",
                  !available && "variant-not-available"
                ),
                style: {
                  borderRadius: settings.product_card__color_selector_radius >= 0 ? `${settings.product_card__color_selector_radius}px` : `9999px`
                },
                "data-tooltip": available ? value : `Sold out: ${value}`,
                title: value,
                children: [
                  o3(
                    "input",
                    {
                      type: "radio",
                      name: `variant-selector-${product.id}-${colorOption == null ? void 0 : colorOption.name}`,
                      className: "peer absolute !block appearance-none outline-none hfa:outline-none",
                      value,
                      onChange: () => handleColorSelect(value),
                      onMouseOver: () => handlePreloadImage(value),
                      onPointerOver: () => handlePreloadImage(value),
                      checked: value === selectedColor
                    }
                  ),
                  o3(
                    "span",
                    {
                      className: "flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full !bg-contain !bg-center peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 peer-disabled:hf:opacity-70",
                      style: {
                        borderRadius: settings.product_card__color_selector_radius >= 0 ? `${settings.product_card__color_selector_radius}px` : `9999px`,
                        width: `${settings.product_card__color_selector_size}px`,
                        height: `${settings.product_card__color_selector_size}px`,
                        background: getColorSwatch(value)
                      }
                    }
                  )
                ]
              },
              value
            );
          }),
          ((_x = colorOption == null ? void 0 : colorOption.values) == null ? void 0 : _x.length) > Math.floor(
            (containerWidth - 70) / (settings.product_card__color_selector_size + 10)
          ) - 1 ? o3(_, { children: o3(
            "button",
            {
              className: "h-7 cursor-pointer items-center gap-1 whitespace-nowrap text-sm",
              type: "button",
              title: "View More",
              "data-product-quick-view-add-button": product.handle,
              onClick: () => handleClick(true),
              style: { display: "var(--product-quick-view-on-display, flex)" },
              children: o3("span", { children: [
                "+",
                ((_y = colorOption == null ? void 0 : colorOption.values) == null ? void 0 : _y.length) - (Math.floor(
                  (containerWidth - 70) / (settings.product_card__color_selector_size + 10)
                ) - 1),
                " ",
                "Colors"
              ] })
            }
          ) }) : null
        ] }) }) : null,
        o3(
          "div",
          {
            className: clsx_m_default(
              "mt-auto w-full flex-1 flex-col justify-end self-end text-center",
              (productCardContainer == null ? void 0 : productCardContainer.getAttribute("data-product-card-hide-button")) ? "hidden" : "flex"
            ),
            children: product.available ? (product.variants.length > 1 || !settings.product_card__button_single_variant_add_to_cart) && !settings.product_card__button_color_variant_add_to_cart || product.options.filter(Boolean).length > 1 ? o3(_, { children: [
              o3(
                "a",
                {
                  className: clsx_m_default("mt-2 w-full", settings.product_card__button__style),
                  style: { display: "var(--product-quick-view-off-display, flex)" },
                  href: collectionUrl ? collectionUrl + product.url : product.url,
                  children: (_A = (_z = window.theme_content) == null ? void 0 : _z.product_card) == null ? void 0 : _A.view_product
                }
              ),
              o3(
                "button",
                {
                  className: clsx_m_default("mt-2 w-full", settings.product_card__button__style),
                  onClick: () => handleClick(),
                  style: { display: "var(--product-quick-view-on-display, flex)" },
                  children: (_C = (_B = window.theme_content) == null ? void 0 : _B.product_card) == null ? void 0 : _C.choose_an
                }
              )
            ] }) : o3(
              "button",
              {
                className: clsx_m_default("mt-2 w-full", settings.product_card__button__style),
                onClick: () => handleClick(),
                disabled: !product.variants[0].available || isSingleQuantityRouteProtectionItem,
                children: isSingleQuantityRouteProtectionItem ? o3("span", { children: "Already Added" }) : ((_G = (_F = (_E = (_D = product.variants) == null ? void 0 : _D[0]) == null ? void 0 : _E.metafields) == null ? void 0 : _F.smart) == null ? void 0 : _G.pre_order) && product_data__preorder_cta && ((_H = product.variants) == null ? void 0 : _H[0].inventory_quantity) <= 0 ? o3("span", { children: "Add on Pre-Order" }) : o3("span", { children: "Add to Cart" })
              }
            ) : o3(
              "a",
              {
                className: clsx_m_default("mt-2 w-full", settings.product_card__button__style),
                "aria-disabled": "true",
                children: "Sold Out"
              }
            )
          }
        )
      ] })
    ] });
  }, "ProductCardInner");
  var ProductCardContainer = /* @__PURE__ */ __name((_a5) => {
    var _b5 = _a5, { handle, collectionUrl, className, product } = _b5, props = __objRest(_b5, ["handle", "collectionUrl", "className", "product"]);
    const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2, hydrated: hydrated2 }) => ({
      getAsyncProduct: getAsyncProduct2,
      hydrated: hydrated2
    }));
    const [currentProduct, setCurrentProduct] = h2(product);
    const settings = useGlobalSettings();
    const productCardContainer = _2();
    p2(() => {
      if (hydrated && !currentProduct) {
        getAsyncProduct(handle).then((p4) => {
          if (p4) {
            setCurrentProduct(p4);
          }
        });
      }
    }, [hydrated, currentProduct, handle]);
    if (!currentProduct) {
      return null;
    }
    return o3(
      "article",
      __spreadProps(__spreadValues({
        ref: productCardContainer,
        className: clsx_m_default(
          "product-card relative flex flex-col items-stretch space-y-1 overflow-hidden rounded-theme-sm",
          className
        ),
        style: { background: settings.product_card__background_color }
      }, props), {
        children: o3(
          ProductCardInner,
          {
            product: currentProduct,
            collectionUrl,
            productCardContainer: productCardContainer.current
          }
        )
      })
    );
  }, "ProductCardContainer");

  // placeholder-image.tsx
  var placeHolderImageURL = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z"/><path d="M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z"/><path d="M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z"/><path d="M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z"/></svg>`;

  // scroll-container.tsx
  init_compat_module();
  var ScrollContainer = /* @__PURE__ */ __name(({ children, count, containerOverflow = true, centerItems = false }) => {
    var _a5, _b5, _c, _d;
    const [showScrollbar, setShowScrollbar] = h2(true);
    const scrollContainerRef = _2(null);
    const scrollbarRef = _2(null);
    const [pointerPosition, setPointerPosition] = h2({ startX: null, startLeft: 0 });
    const [scrollbarProps, setScrollbarProps] = h2({ width: 0, left: 0 });
    const { width } = useWindowSize();
    const manualScrolling = _2(false);
    const handleScrollEvent = T2(() => {
      var _a6;
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer)
        return;
      const containerWidth = scrollContainer == null ? void 0 : scrollContainer.clientWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX === null && width) {
        setScrollbarProps({
          width: containerWidth / scrollWidth,
          left: scrollLeft / scrollWidth * ((_a6 = scrollbarRef.current) == null ? void 0 : _a6.clientWidth)
        });
      }
    }, [pointerPosition.startX, width]);
    const handlePointerDown = T2((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      if (pointerPosition.startX === null) {
        e3.preventDefault();
        e3.stopPropagation();
        setPointerPosition({ startX: e3.clientX, startLeft: scrollbarProps.left });
        document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
      }
    }, [pointerPosition.startX, scrollbarProps.left]);
    const handlePointerMove = T2((e3) => {
      var _a6, _b6;
      e3.preventDefault();
      e3.stopPropagation();
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer)
        return;
      const containerWidth = scrollContainer == null ? void 0 : scrollContainer.clientWidth;
      const { scrollWidth } = scrollContainer;
      const scrollBarWidth = (_a6 = scrollbarRef.current) == null ? void 0 : _a6.clientWidth;
      if (pointerPosition.startX !== null) {
        const left = Math.min(
          Math.max(0, ((_b6 = pointerPosition.startLeft) != null ? _b6 : 0) + e3.clientX - pointerPosition.startX),
          scrollBarWidth - containerWidth / scrollWidth * scrollBarWidth
        );
        scrollContainer == null ? void 0 : scrollContainer.scrollTo({
          left: left / scrollBarWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
        setScrollbarProps({
          width: containerWidth / scrollWidth,
          left
        });
      }
    }, [pointerPosition]);
    const handlePointerUp = T2((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      if (pointerPosition.startX !== null) {
        e3.preventDefault();
        e3.stopPropagation();
        setPointerPosition({ startX: null, startLeft: scrollbarProps.left });
        document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
      }
    }, [pointerPosition.startX, scrollbarProps.left]);
    const scrollToIndex = T2((index) => {
      if (manualScrolling.current)
        return;
      manualScrolling.current = true;
      const { left: containerLeft } = scrollContainerRef.current.getBoundingClientRect();
      const { paddingLeft } = getComputedStyle(scrollContainerRef.current);
      const basePosition = +paddingLeft.replace("px", "");
      const scrollItems = [...scrollContainerRef.current.children];
      const currentItemIndex = [...scrollItems].findIndex((element) => {
        const { left, width: width2 } = element.getBoundingClientRect();
        const itemLeft = left - containerLeft - 5;
        const itemRight = itemLeft + width2 + 5;
        return itemLeft <= basePosition && itemRight >= basePosition;
      });
      scrollContainerRef.current.classList.remove("snap-x");
      const { offsetLeft } = [...scrollItems][Math.min(Math.max(currentItemIndex + index, 0), count)];
      scrollToX(200, offsetLeft - basePosition, scrollContainerRef.current, () => {
        scrollContainerRef.current.classList.add("snap-x");
        manualScrolling.current = false;
      });
    }, [count]);
    const handleClick = T2((e3) => __async(void 0, null, function* () {
      e3.preventDefault();
      e3.stopPropagation();
      if (pointerPosition.startX === null) {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer)
          return;
        const containerWidth = scrollContainer == null ? void 0 : scrollContainer.clientWidth;
        const { scrollWidth } = scrollContainer;
        const thumbWidth = containerWidth / scrollWidth;
        const clickPosition = e3.clientX - (scrollContainer == null ? void 0 : scrollContainer.getBoundingClientRect().left);
        const positionPercentage = clickPosition / (scrollContainer == null ? void 0 : scrollContainer.clientWidth);
        const left = Math.min(
          Math.max(
            0,
            containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
          ),
          containerWidth - containerWidth / scrollWidth * containerWidth
        );
        scrollContainer == null ? void 0 : scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
      }
    }), [pointerPosition.startX]);
    p2(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer)
        return () => {
        };
      scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", handleScrollEvent);
      return () => {
        scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", handleScrollEvent);
      };
    }, [handleScrollEvent]);
    p2(() => {
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
      };
    }, [handlePointerMove, handlePointerUp]);
    p2(() => {
      if (pointerPosition.startX !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
        };
      }
      return () => {
      };
    }, [handlePointerMove, pointerPosition.startX]);
    p2(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer)
        return;
      if (width || count) {
        setShowScrollbar((scrollContainer == null ? void 0 : scrollContainer.scrollWidth) > (scrollContainer == null ? void 0 : scrollContainer.clientWidth));
      }
      handleScrollEvent();
      setTimeout(
        () => {
          handleScrollEvent();
          setShowScrollbar((scrollContainer == null ? void 0 : scrollContainer.scrollWidth) > (scrollContainer == null ? void 0 : scrollContainer.clientWidth));
        },
        10
      );
      setTimeout(
        () => {
          handleScrollEvent();
          setShowScrollbar((scrollContainer == null ? void 0 : scrollContainer.scrollWidth) > (scrollContainer == null ? void 0 : scrollContainer.clientWidth));
        },
        500
      );
      setTimeout(
        () => {
          handleScrollEvent();
          setShowScrollbar((scrollContainer == null ? void 0 : scrollContainer.scrollWidth) > (scrollContainer == null ? void 0 : scrollContainer.clientWidth));
        },
        1e3
      );
    }, [width, count, handleScrollEvent]);
    return o3("section", { className: "relative mb-8 block", children: [
      o3(
        "main",
        {
          className: clsx_m_default(!containerOverflow && "container", centerItems && "flex justify-center"),
          children: o3(
            "div",
            {
              className: clsx_m_default(
                "scrollbar-none grid w-min max-w-full snap-x snap-mandatory auto-cols-auto grid-flow-col-dense gap-6 overflow-x-auto pb-8",
                containerOverflow && "scroll-pl-4 px-4 md:scroll-pl-[max(2rem,calc((100%-var(--layout-page-width)+4rem)/2))] md:px-[max(2rem,calc((100%-var(--layout-page-width)+4rem)/2))]"
              ),
              ref: scrollContainerRef,
              children
            }
          )
        }
      ),
      o3("footer", { className: clsx_m_default("container relative select-none", !showScrollbar && "hidden"), children: [
        o3("div", { className: "relative", children: o3(
          "div",
          {
            className: "group/scrollbar absolute top-full flex h-4 w-full cursor-pointer touch-none items-center",
            ref: scrollbarRef,
            onClick: handleClick,
            children: o3("div", { className: "relative h-0.5 w-full bg-gray-200 transition-all group-hover:h-0.5", children: o3(
              "button",
              {
                type: "button",
                className: "absolute top-1/2 flex min-h-full cursor-grab items-center justify-center py-2 will-change-transform active:cursor-grabbing [&:active_div]:!h-0.5",
                style: {
                  transform: `translateY(-50%) translateX(${scrollbarProps.left}px)`,
                  width: `${scrollbarProps.width * 100}%`
                },
                onPointerDown: handlePointerDown,
                onClick: (e3) => e3.stopPropagation(),
                "aria-label": "Scrollbar Thumb",
                children: o3("div", { className: "h-0.5 w-full bg-gray-900 transition-all group-hover:h-0.5" })
              }
            ) })
          }
        ) }),
        o3(
          "button",
          {
            className: "group absolute right-14 top-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg stroke-2 text-gray-400 shadow transition-all ease-in-out hf:text-gray-900",
            onClick: () => {
              scrollToIndex(-1);
            },
            style: {
              opacity: scrollbarProps.left > 0 ? "100" : "0",
              pointerEvents: scrollbarProps.left > 0 ? "auto" : "none"
            },
            children: [
              o3("span", { className: "sr-only", children: "Show Previous Item" }),
              o3(
                "svg",
                {
                  className: "mr-1 h-3 w-3 rotate-180 stroke-2",
                  fill: "none",
                  viewBox: "0 0 10 10",
                  "aria-hidden": "true",
                  stroke: "currentColor",
                  children: [
                    o3("path", { className: "opacity-0 transition group-hover:opacity-100", d: "M0 5h7" }),
                    o3("path", { className: "transition group-hover:translate-x-[3px]", d: "M1 1l4 4-4 4" })
                  ]
                }
              )
            ]
          }
        ),
        o3(
          "button",
          {
            className: "group absolute right-5 top-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg stroke-2 text-gray-400 shadow transition-all ease-in-out hf:text-gray-900",
            onClick: () => {
              scrollToIndex(1);
            },
            style: {
              opacity: scrollbarProps.left + ((_a5 = scrollbarRef.current) == null ? void 0 : _a5.clientWidth) * scrollbarProps.width + 1 <= ((_b5 = scrollbarRef.current) == null ? void 0 : _b5.clientWidth) ? "100" : "0",
              pointerEvents: scrollbarProps.left + ((_c = scrollbarRef.current) == null ? void 0 : _c.clientWidth) * scrollbarProps.width + 1 <= ((_d = scrollbarRef.current) == null ? void 0 : _d.clientWidth) ? "auto" : "none"
            },
            children: [
              o3("span", { className: "sr-only", children: "Show Next Item" }),
              o3(
                "svg",
                {
                  className: "ml-1 h-3 w-3 stroke-2",
                  fill: "none",
                  viewBox: "0 0 10 10",
                  "aria-hidden": "true",
                  stroke: "currentColor",
                  children: [
                    o3("path", { className: "opacity-0 transition group-hover:opacity-100", d: "M0 5h7" }),
                    o3("path", { className: "transition group-hover:translate-x-[3px]", d: "M1 1l4 4-4 4" })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] });
  }, "ScrollContainer");

  // bundle.tsx
  init_compat_module();
  init_compat_module();
  var initBundles = /* @__PURE__ */ __name(() => {
    document.querySelectorAll("[data-bundle-section]").forEach((sectionElement) => {
      const settings = JSONParse(sectionElement.dataset.bundleSection);
      const bundleBarRoot = sectionElement.querySelector("[data-bundle-bar]");
      const previewRoot = sectionElement.querySelector("[data-bundle-preview-items]");
      const drawerRoot = document.querySelector(
        `[data-drawer="bundle--${settings.section_id}"] [data-bundle-drawer]`
      );
      if (bundleBarRoot) {
        G(o3(BundleBar, { settings }), bundleBarRoot);
      }
      if (previewRoot) {
        G(o3(BundlePreview, { settings }), previewRoot);
      }
      if (drawerRoot) {
        G(o3(BundleDrawer, { settings }), drawerRoot);
      }
    });
  }, "initBundles");
  var BundleBar = /* @__PURE__ */ __name((props) => {
    var _a5;
    const [settings, setSettings] = h2(props.settings);
    const [width, setWidth] = h2(0);
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const sortedBlocks = (_a5 = settings.blocks) == null ? void 0 : _a5.sort((a4, b4) => a4.target - b4.target);
    const { getProduct } = useGlobalProducts(({ getProduct: getProduct2 }) => ({
      getProduct: getProduct2
    }));
    p2(() => {
      const targetItems = [
        ...cartData.items.map((item, index) => __spreadProps(__spreadValues({}, item), { cartIndex: index })).filter((item) => {
          var _a6, _b5, _c, _d;
          if (item.quantity <= 0) {
            return false;
          }
          if (props.settings.target_products.includes(item.handle)) {
            return true;
          }
          const cHandles = (_c = window.cartProductCollections[item.handle]) != null ? _c : (_b5 = (_a6 = getProduct(item.handle)) == null ? void 0 : _a6.collections) == null ? void 0 : _b5.map((c4) => c4.handle);
          return cHandles && ((_d = props.settings.target_collections) == null ? void 0 : _d.some((handle) => cHandles.includes(handle)));
        })
      ].reverse();
      if (targetItems.length) {
        const target = targetItems == null ? void 0 : targetItems.reduce(
          (acc, item) => {
            if (settings.discount_target === "amount") {
              acc += item.original_line_price;
              return acc;
            }
            acc += item.quantity;
            return acc;
          },
          0
        );
        let width2 = 0;
        setSettings((current) => __spreadProps(__spreadValues({}, current), {
          blocks: current.blocks.map((block, index, arr) => {
            var _a6;
            if (target >= block.target) {
              width2 += 100 / arr.length;
            }
            if (target < block.target && arr[index - 1] && target >= ((_a6 = arr[index - 1]) == null ? void 0 : _a6.target)) {
              const prevBlock = arr[index - 1];
              width2 += 100 / arr.length * ((target - prevBlock.target) / (block.target - prevBlock.target));
            }
            if (target < block.target && !arr[index - 1]) {
              width2 += 100 / arr.length * target / block.target;
            }
            return __spreadProps(__spreadValues({}, block), { completed: target >= block.target });
          })
        }));
        setWidth(Math.max(0, Math.min(width2, 100)));
      }
      if (targetItems.length === 0) {
        setSettings(props.settings);
        setWidth(0);
      }
    }, [cartData.items, getProduct, props.settings]);
    const actionBlock = F2(() => {
      return props.settings.discount_type === "specific_product" ? sortedBlocks == null ? void 0 : sortedBlocks.find((block) => {
        var _a6;
        if (!block.completed || !(block == null ? void 0 : block.receives_quantity))
          return false;
        const inCartQuantity = (_a6 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a6.reduce(
          (acc, item) => {
            var _a7;
            if (item.total_discount > 0 && ((_a7 = block == null ? void 0 : block.receives_products) == null ? void 0 : _a7.includes(item.handle)) && item.line_level_discount_allocations.some(
              (disc) => disc.discount_application.value.includes(`${block == null ? void 0 : block.receives_discount}`)
            )) {
              acc += item.quantity;
            }
            return acc;
          },
          0
        );
        return inCartQuantity < (block == null ? void 0 : block.receives_quantity);
      }) : null;
    }, [cartData.items, props.settings.discount_type, sortedBlocks]);
    return o3("div", { className: "relative grid items-center gap-16 pt-1 max-md:gap-20 md:grid-cols-[1fr_260px]", children: [
      o3("div", { className: "relative flex items-center justify-between gap-2", children: [
        o3("div", { className: "5 absolute left-0 top-1/2 isolate h-1.5 w-[calc(100%-2px)] -translate-y-1/2 overflow-hidden rounded-full bg-theme-bg shadow shadow-theme-bg/50", children: o3(
          "div",
          {
            className: "absolute left-0 h-full bg-theme-text/90 transition-all duration-500 ease-linear",
            style: { width: `${width}%` }
          }
        ) }),
        o3("div", { className: "relative order-first h-12 w-6 rounded-full", children: o3("h4", { className: "absolute left-0 top-[calc(100%+0.5rem)] text-xs text-white sm:text-sm sm:font-semibold md:whitespace-nowrap", children: "Unlock:" }) }),
        sortedBlocks.map((block, index, arr) => {
          return o3(
            "div",
            {
              className: clsx_m_default(
                "relative flex h-12 w-12 items-center justify-center rounded-full transition-all",
                block.completed ? "bg-primary-text" : "bg-theme-bg"
              ),
              children: [
                o3(
                  CheckMarkIcon,
                  {
                    className: clsx_m_default(
                      "absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary-bg transition-all",
                      block.completed ? "" : "pointer-events-none opacity-0"
                    )
                  }
                ),
                o3(
                  "div",
                  {
                    className: clsx_m_default(
                      "whitespace-nowrap text-center text-sm font-semibold text-primary-bg",
                      !block.completed ? "" : "pointer-events-none opacity-0"
                    ),
                    dangerouslySetInnerHTML: {
                      __html: settings.discount_target === "amount" ? window.formatMoney(
                        block.target,
                        window.shop.money_format.replace("amount", "amount_no_decimals")
                      ) : `${block.target}x`
                    }
                  }
                ),
                o3("h4", { className: "absolute left-1/2 top-[calc(100%+0.5rem)] -translate-x-1/2 text-center text-xs text-white sm:text-sm sm:font-semibold md:whitespace-nowrap", children: block.type === "free_shipping" ? o3(_, { children: "Free Shipping" }) : {
                  specific_product: block.receives_quantity <= 1 ? (block == null ? void 0 : block.receives_discount) === 100 ? "Free Product" : "Discounted Product" : (block == null ? void 0 : block.receives_discount) === 100 ? "Free Products" : "Discounted Products",
                  product_percentage: `${block == null ? void 0 : block.receives_discount}% Off each`,
                  product_amount: o3(
                    "span",
                    {
                      dangerouslySetInnerHTML: {
                        __html: `${window.formatMoney(
                          block == null ? void 0 : block.receives_discount,
                          window.shop.money_format.replace("amount", "amount_no_decimals")
                        )} Off each`
                      }
                    }
                  )
                }[settings.discount_type] })
              ]
            },
            block.id
          );
        })
      ] }),
      o3("form", { action: window.routes.cart_url, method: "post", className: "grid w-full", children: actionBlock ? o3(
        "button",
        {
          type: "button",
          className: "button-base flex items-center justify-center bg-theme-bg text-primary-bg",
          onClick: (e3) => {
            e3.preventDefault();
            setTimeout(
              () => {
                document.dispatchEvent(new Event(`bundle--${settings.section_id}:open`));
              },
              1
            );
          },
          children: [
            "Select your ",
            (actionBlock == null ? void 0 : actionBlock.receives_discount) === 100 ? "Free" : "Discounted",
            " ",
            actionBlock.receives_quantity > 1 ? "Products" : "Product"
          ]
        }
      ) : o3(
        "button",
        {
          type: "submit",
          name: "checkout",
          className: "button-base flex items-center justify-between whitespace-nowrap bg-theme-bg text-primary-bg",
          children: [
            o3("span", { className: "font-medium", children: "Checkout" }),
            o3("span", { className: "ml-3 flex items-center justify-center", children: cartData.total_discount > 0 ? o3(_, { children: [
              o3(
                "span",
                {
                  className: "line-through opacity-80 grayscale",
                  dangerouslySetInnerHTML: {
                    __html: window.formatMoney(cartData.original_total_price)
                  }
                }
              ),
              o3(
                "span",
                {
                  className: "ml-2",
                  dangerouslySetInnerHTML: {
                    __html: window.formatMoney(cartData.total_price)
                  }
                }
              )
            ] }) : o3(
              "span",
              {
                dangerouslySetInnerHTML: { __html: window.formatMoney(cartData.total_price) }
              }
            ) })
          ]
        }
      ) })
    ] });
  }, "BundleBar");
  var BundlePreview = /* @__PURE__ */ __name(({ settings }) => {
    const [targetItems, setTargetItems] = h2(
      []
    );
    const { cartData, adjustItem, loading } = useCartDrawer(({ cartData: cartData2, adjustItem: adjustItem2, loading: loading2 }) => ({
      cartData: cartData2,
      adjustItem: adjustItem2,
      loading: loading2
    }));
    const { getProduct } = useGlobalProducts(({ getProduct: getProduct2 }) => ({
      getProduct: getProduct2
    }));
    p2(() => {
      const initialItems = [
        ...cartData.items.map((item, index) => __spreadProps(__spreadValues({}, item), { cartIndex: index })).filter((item) => {
          var _a5, _b5, _c, _d;
          if (item.quantity <= 0) {
            return false;
          }
          if (settings.target_products.includes(item.handle)) {
            return true;
          }
          const cHandles = (_c = window.cartProductCollections[item.handle]) != null ? _c : (_b5 = (_a5 = getProduct(item.handle)) == null ? void 0 : _a5.collections) == null ? void 0 : _b5.map((c4) => c4.handle);
          return cHandles && ((_d = settings.target_collections) == null ? void 0 : _d.some((handle) => cHandles.includes(handle)));
        })
      ].reverse();
      setTargetItems(initialItems);
    }, [cartData.items, settings.target_collections, settings.target_products]);
    return o3(_, { children: [
      o3("main", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-4 xl:gap-6 max-md:sm:[&>div:empty:nth-last-child(-n+3)]:hidden max-sm:[&>div:empty:nth-last-child(-n+4)]:hidden", children: [...new Array(Math.max(6, Math.ceil(targetItems.length / 6) * 6, targetItems.length))].map(
        (_5, index) => {
          const item = targetItems[index];
          return o3(
            "div",
            {
              className: "relative border border-dashed border-theme-bg/80 pb-[100%]",
              children: item ? o3("figure", { className: "group absolute h-full w-full bg-gradient-to-b from-gray-900/10 to-gray-900/20", children: [
                o3(
                  Image2,
                  {
                    src: item.featured_image.url ? `${item.featured_image.url}&width=200` : placeHolderImageURL,
                    alt: item.title,
                    className: "h-full w-full object-cover"
                  }
                ),
                o3(
                  "button",
                  {
                    type: "button",
                    className: "absolute left-2 top-2 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-gray-600 opacity-0 shadow-lg transition-opacity hf:text-gray-900 hf:shadow-sm group-hf:opacity-100",
                    onClick: () => {
                      adjustItem(item, -item.quantity, item.cartIndex);
                    },
                    children: [
                      o3(CloseIcon, { className: "h-4 w-4" }),
                      o3("span", { className: "sr-only", children: "Remove From Cart" })
                    ]
                  }
                ),
                item.total_discount > 0 ? o3("div", { className: "absolute right-2 top-2 flex h-7 items-center justify-center overflow-hidden rounded-theme-sm bg-primary-bg px-1.5 text-sm font-medium text-theme-bg shadow-lg", children: [
                  item.final_price === 0 ? "FREE" : settings.discount_type === "product_amount" ? o3(
                    "span",
                    {
                      dangerouslySetInnerHTML: {
                        __html: `save ${window.formatMoney(
                          item.total_discount,
                          window.shop.money_format.replace(
                            "amount",
                            "amount_no_decimals"
                          )
                        )}`
                      }
                    }
                  ) : `${item.total_discount / item.original_line_price * 100}% off`,
                  o3(LoadingSpinner, { loading })
                ] }) : null,
                o3("div", { className: "absolute bottom-2 left-2 flex flex-col text-xs text-theme-bg drop-shadow-[1px_1px_1px_black] [text-shadow:1px_1px_1px_black]", children: [
                  o3("span", { className: "mb-0.5 font-semibold", children: item.product_title }),
                  o3("span", { children: item.variant_title })
                ] }),
                o3("div", { className: "absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-theme-sm bg-primary-bg text-sm font-medium text-theme-bg shadow-lg", children: item.quantity })
              ] }) : null
            },
            index
          );
        }
      ) }),
      o3("footer", { className: "mt-4 flex flex-col items-center justify-center text-center text-theme-bg", children: o3("div", { children: "Begin adding items below to create your bundle" }) })
    ] });
  }, "BundlePreview");
  var BundleDrawer = /* @__PURE__ */ __name((props) => {
    var _a5, _b5, _c;
    const [settings, setSettings] = h2(props.settings);
    const [products, setProducts] = h2([]);
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const sortedBlocks = (_a5 = settings.blocks) == null ? void 0 : _a5.sort((a4, b4) => a4.target - b4.target);
    const { getProduct, hydrated, getAsyncProduct } = useGlobalProducts(
      ({ getProduct: getProduct2, hydrated: hydrated2, getAsyncProduct: getAsyncProduct2 }) => ({
        getProduct: getProduct2,
        getAsyncProduct: getAsyncProduct2,
        hydrated: hydrated2
      })
    );
    p2(() => {
      const targetItems = [
        ...cartData.items.map((item, index) => __spreadProps(__spreadValues({}, item), { cartIndex: index })).filter((item) => {
          var _a6, _b6, _c2, _d;
          if (item.quantity <= 0) {
            return false;
          }
          if (props.settings.target_products.includes(item.handle)) {
            return true;
          }
          const cHandles = (_c2 = window.cartProductCollections[item.handle]) != null ? _c2 : (_b6 = (_a6 = getProduct(item.handle)) == null ? void 0 : _a6.collections) == null ? void 0 : _b6.map((c4) => c4.handle);
          return cHandles && ((_d = props.settings.target_collections) == null ? void 0 : _d.some((handle) => cHandles.includes(handle)));
        })
      ].reverse();
      if (targetItems.length) {
        const target = targetItems == null ? void 0 : targetItems.reduce(
          (acc, item) => {
            if (props.settings.discount_target === "amount") {
              acc += item.original_line_price;
              return acc;
            }
            acc += item.quantity;
            return acc;
          },
          0
        );
        setSettings((current) => __spreadProps(__spreadValues({}, current), {
          blocks: current.blocks.map((block) => {
            return __spreadProps(__spreadValues({}, block), { completed: target >= block.target });
          })
        }));
      }
      if (targetItems.length === 0) {
        setSettings(props.settings);
      }
    }, [cartData.items, getProduct, props.settings]);
    const actionBlock = F2(() => {
      return props.settings.discount_type === "specific_product" ? sortedBlocks == null ? void 0 : sortedBlocks.find((block) => {
        var _a6;
        if (!block.completed || !(block == null ? void 0 : block.receives_quantity))
          return false;
        const inCartQuantity = (_a6 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a6.reduce(
          (acc, item) => {
            var _a7;
            if (item.total_discount > 0 && ((_a7 = block == null ? void 0 : block.receives_products) == null ? void 0 : _a7.includes(item.handle)) && item.line_level_discount_allocations.some(
              (disc) => disc.discount_application.value.includes(`${block == null ? void 0 : block.receives_discount}`)
            )) {
              acc += item.quantity;
            }
            return acc;
          },
          0
        );
        return inCartQuantity < (block == null ? void 0 : block.receives_quantity);
      }) : null;
    }, [cartData.items, props.settings.discount_type, sortedBlocks]);
    const loadBundleItems = T2(() => __async(void 0, null, function* () {
      var _a6;
      if (!actionBlock) {
        setProducts([]);
        return;
      }
      const productsWithData = yield Promise.all(
        (_a6 = actionBlock == null ? void 0 : actionBlock.receives_products) == null ? void 0 : _a6.map((handle) => getAsyncProduct(handle))
      );
      setProducts(
        (current) => current.length !== productsWithData.length ? productsWithData : current
      );
    }), [actionBlock == null ? void 0 : actionBlock.receives_products]);
    p2(() => {
      if (hydrated) {
        loadBundleItems();
      }
    }, [loadBundleItems, hydrated, actionBlock]);
    if (products.length === 0) {
      return null;
    }
    return o3("div", { className: "pointer-events-none relative inset-x-0 bottom-0 w-full translate-y-[105%] bg-white pb-4 pt-10 opacity-0 shadow-invert-md transition-all ease-linear group-ac:pointer-events-auto group-ac:translate-y-0 group-ac:opacity-100", children: [
      o3("header", { className: "container", children: o3("h3", { className: "h3 mb-3 text-center", children: [
        "Select your ",
        (actionBlock == null ? void 0 : actionBlock.receives_discount) === 100 ? "Free" : "Discounted",
        " ",
        (actionBlock == null ? void 0 : actionBlock.receives_quantity) > 1 ? "Products" : "Product"
      ] }) }),
      o3(
        ScrollContainer,
        {
          count: (_c = Math.min((_b5 = actionBlock == null ? void 0 : actionBlock.receives_products) == null ? void 0 : _b5.length, 18)) != null ? _c : 0,
          containerOverflow: true,
          centerItems: true,
          children: products == null ? void 0 : products.map((productData) => {
            var _a6, _b6, _c2, _d;
            const discount = actionBlock == null ? void 0 : actionBlock.receives_discount;
            const product = __spreadValues({}, productData);
            product.variants = (_a6 = product == null ? void 0 : product.variants) == null ? void 0 : _a6.map((v4) => __spreadProps(__spreadValues({}, v4), {
              compare_at_price: v4.price,
              price: v4.price - v4.price * (discount / 100)
            }));
            product.selected_or_first_available_variant = __spreadProps(__spreadValues({}, product == null ? void 0 : product.selected_or_first_available_variant), {
              compare_at_price: (_b6 = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _b6.price,
              price: ((_c2 = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _c2.price) - ((_d = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _d.price) * (discount / 100)
            });
            product.compare_at_price = product == null ? void 0 : product.price;
            product.compare_at_price_min = product == null ? void 0 : product.price_min;
            product.price = (product == null ? void 0 : product.price) - (product == null ? void 0 : product.price) * (discount / 100);
            product.price_min = (product == null ? void 0 : product.price_min) - (product == null ? void 0 : product.price_min) * (discount / 100);
            return o3(
              ProductCardContainer,
              {
                product,
                className: "w-[calc(100vw/4)] min-w-[180px] md:w-[calc(var(--layout-page-width)/6)]",
                "data-product-card-no-auto-cart": "true"
              },
              product.handle
            );
          })
        }
      )
    ] });
  }, "BundleDrawer");

  // cart-drawer.tsx
  init_preact_module();
  init_compat_module();

  // product-card-flat-wide.tsx
  init_compat_module();
  var ProductCardFlatWide = /* @__PURE__ */ __name(({
    product,
    disableCartOpen = false
  }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
    const { small_product_card__variant_selector__show, product_data__hide_oos_variants } = useGlobalSettings();
    const [loading, setLoading] = h2(false);
    const { updateProduct } = useProductQuickView(({ updateProduct: updateProduct2 }) => ({
      updateProduct: updateProduct2
    }));
    const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2 }) => ({
      getAsyncProduct: getAsyncProduct2
    }));
    const [selectedVariant, setSelectedVariant] = h2(
      (_b5 = (_a5 = product.variants) == null ? void 0 : _a5.find((variant) => variant.available)) == null ? void 0 : _b5.id
    );
    const { cartData, routeProtectionProducts } = useCartDrawer(
      ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 }) => ({ cartData: cartData2, routeProtectionProducts: routeProtectionProducts2 })
    );
    const inCartItem = (_c = cartData == null ? void 0 : cartData.items) == null ? void 0 : _c.find(
      (line_item) => product.variants.some((variant) => line_item.variant_id === variant.id)
    );
    const routeProtection = inCartItem ? routeProtectionProducts.find((block) => {
      var _a6, _b6;
      return ((_b6 = (_a6 = block == null ? void 0 : block.products) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.handle) === (inCartItem == null ? void 0 : inCartItem.handle);
    }) : null;
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    const handleClickCTA = T2((e3, upsellProduct) => __async(void 0, null, function* () {
      if (small_product_card__variant_selector__show && selectedVariant && !isSingleQuantityRouteProtectionItem) {
        e3.preventDefault();
        setLoading(true);
        yield cart.add({ items: [{ id: selectedVariant, quantity: 1 }] }, true);
        setLoading(false);
        return;
      }
      if (updateProduct && !isSingleQuantityRouteProtectionItem) {
        e3.preventDefault();
        setLoading(true);
        getAsyncProduct(upsellProduct == null ? void 0 : upsellProduct.handle).then((p4) => __async(void 0, null, function* () {
          var _a6, _b6, _c2, _d2;
          if (p4.variants.length > 1) {
            updateProduct(p4);
            setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
          }
          if (p4.variants.length <= 1) {
            yield cart.add(
              {
                items: [
                  {
                    id: p4.selected_or_first_available_variant.id,
                    quantity: 1,
                    selling_plan: (p4 == null ? void 0 : p4.requires_selling_plan) ? (_d2 = (_c2 = (_b6 = (_a6 = p4 == null ? void 0 : p4.selling_plan_groups) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.selling_plans) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.id : void 0
                  }
                ]
              },
              !disableCartOpen
            );
          }
          setLoading(false);
        }));
      }
    }), [disableCartOpen, selectedVariant, small_product_card__variant_selector__show, updateProduct]);
    if (!product)
      return null;
    return o3("article", { className: "relative flex flex-col items-stretch space-y-1", children: [
      o3("div", { className: "flex items-center", children: [
        o3(
          "picture",
          {
            className: clsx_m_default(
              "relative mr-2 h-16 w-16 min-w-[64px] overflow-hidden",
              !((_d = product == null ? void 0 : product.featured_media) == null ? void 0 : _d.src) && !(product == null ? void 0 : product.featured_image) && "opacity-0"
            ),
            style: { background: "transparent" },
            children: small_product_card__variant_selector__show && ((_g = (_f = (_e = product == null ? void 0 : product.variants) == null ? void 0 : _e.find((variant) => variant.id === selectedVariant)) == null ? void 0 : _f.featured_media) == null ? void 0 : _g.src) ? o3(
              Image2,
              {
                src: `${((_i = (_h = product.variants.find((variant) => variant.id === selectedVariant)) == null ? void 0 : _h.featured_media) == null ? void 0 : _i.src) || (product == null ? void 0 : product.featured_image)}`,
                alt: product == null ? void 0 : product.title,
                width: 90,
                height: 90,
                className: "h-full w-full object-cover"
              }
            ) : o3(
              Image2,
              {
                src: `${((_k = (_j = product == null ? void 0 : product.featured_media) == null ? void 0 : _j.preview_image) == null ? void 0 : _k.src) || (product == null ? void 0 : product.featured_image)}`,
                alt: product == null ? void 0 : product.title,
                width: 90,
                height: 90,
                className: "h-full w-full object-cover"
              }
            )
          }
        ),
        o3("div", { className: "flex min-h-full flex-1 py-1 pl-1", children: [
          o3("div", { className: "flex-1", children: [
            o3("h1", { className: "product-card-title--small inline-flex", children: o3(
              "a",
              {
                className: "outline-none hf:underline hf:outline-none",
                href: `/products/${product == null ? void 0 : product.handle}`,
                children: product == null ? void 0 : product.title
              }
            ) }),
            o3("div", { "data-card-price": "", children: o3("div", { className: "whitespace-nowrapfont-semibold grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap text-xs", children: [
              (product == null ? void 0 : product.price_varies) && (product == null ? void 0 : product.compare_at_price_min) < (product == null ? void 0 : product.price_min) ? o3("span", { className: "font-normal", children: "On Sale from:" }) : (product == null ? void 0 : product.price_varies) ? o3("span", { className: "font-normal", children: "From:" }) : null,
              o3(
                "span",
                {
                  className: "",
                  dangerouslySetInnerHTML: { __html: window.formatMoney(product == null ? void 0 : product.price_min) }
                }
              ),
              (product == null ? void 0 : product.compare_at_price) > (product == null ? void 0 : product.price) ? o3(
                "span",
                {
                  className: "text-theme-text/50 line-through",
                  dangerouslySetInnerHTML: {
                    __html: window.formatMoney(product == null ? void 0 : product.compare_at_price)
                  }
                }
              ) : null
            ] }) })
          ] }),
          o3("div", { className: "ml-3 flex min-w-[90px] justify-between gap-1 text-center", children: o3(
            "a",
            {
              className: "button-theme--outline flex h-min w-full items-center px-3 py-2 text-sm outline-none hf:outline-none",
              href: `/products/${product == null ? void 0 : product.handle}`,
              onClick: (e3) => handleClickCTA(e3, product),
              children: [
                (product == null ? void 0 : product.available) ? o3("span", { className: "whitespace-nowrap", children: ((_l = product == null ? void 0 : product.variants) == null ? void 0 : _l.length) > 1 ? "View" : "Add" }) : o3("span", { className: "", children: "Sold Out" }),
                o3(LoadingSpinner, { loading, className: "bg-primary-bg" })
              ]
            }
          ) })
        ] })
      ] }),
      small_product_card__variant_selector__show ? o3("div", { className: "w-full flex-1", children: ((_m = product.variants) == null ? void 0 : _m.filter(
        (variant) => !product_data__hide_oos_variants || variant.available
      ).length) > 1 ? o3("label", { className: "relative flex", children: [
        o3(
          "select",
          {
            className: "input-element input--primary--outline flex w-full appearance-none truncate py-1 pl-4 pr-8",
            onChange: (e3) => {
              var _a6;
              setSelectedVariant(+((_a6 = e3 == null ? void 0 : e3.currentTarget) == null ? void 0 : _a6.value));
            },
            children: (_n2 = product.variants) == null ? void 0 : _n2.filter((variant) => !product_data__hide_oos_variants || variant.available).map((variant) => {
              return o3(
                "option",
                {
                  className: "truncate",
                  disabled: !variant.available,
                  selected: variant.id === selectedVariant,
                  value: variant.id,
                  children: [
                    variant.title,
                    " -",
                    " ",
                    o3(
                      "span",
                      {
                        className: "ml-auto inline-flex",
                        dangerouslySetInnerHTML: {
                          __html: window.formatMoney(variant.price)
                        }
                      }
                    ),
                    !variant.available ? o3(_, { children: "- Sold Out" }) : null
                  ]
                },
                variant.id
              );
            })
          }
        ),
        o3(ChevronUpDownIcon, { className: "absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2" })
      ] }) : null }) : null
    ] });
  }, "ProductCardFlatWide");

  // cart-drawer.promotional-items.tsx
  init_compat_module();
  function PromotionalItems({ settings }) {
    var _a5, _b5, _c;
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const { getUntransformedAsyncProduct, hydrated } = useGlobalProducts(
      ({ getUntransformedAsyncProduct: getUntransformedAsyncProduct2, hydrated: hydrated2 }) => ({
        getUntransformedAsyncProduct: getUntransformedAsyncProduct2,
        hydrated: hydrated2
      })
    );
    const [products, setProducts] = h2([
      ...settings.cart__recommended_products.map((product) => window.transformProducts(product)).filter((product) => !product.hidden).sort((a4, b4) => a4.price_min - b4.price_min)
    ]);
    const loadPromotionalItems = T2(() => __async(this, null, function* () {
      var _a6, _b6, _c2, _d, _e, _f;
      const productsWithData = yield Promise.all(
        [...((_a6 = cartData.items) != null ? _a6 : []).slice(0).reverse()].map(
          (p4) => getUntransformedAsyncProduct(p4.handle)
        )
      );
      let productsToLoad = [];
      productsWithData.forEach((product) => {
        var _a7, _b7, _c3, _d2, _e2, _f2;
        console.log(product);
        const complementaryProducts = settings.cart__recommended_products_source === "complementary" ? (_c3 = (_b7 = (_a7 = product.metafields) == null ? void 0 : _a7["shopify--discovery--product_recommendation"]) == null ? void 0 : _b7.complementary_products) != null ? _c3 : [] : (_f2 = (_e2 = (_d2 = product.metafields) == null ? void 0 : _d2["shopify--discovery--product_recommendation"]) == null ? void 0 : _e2.related_products) != null ? _f2 : [];
        productsToLoad = [...productsToLoad, ...complementaryProducts];
      });
      if (!settings.cart__recommended_products_hide_upsell_products || productsToLoad.length === 0) {
        productsToLoad = [...productsToLoad, ...settings.cart__recommended_products];
      }
      const finalProducts = yield Promise.all(
        (_f = (_e = (_d = (_c2 = (_b6 = productsToLoad == null ? void 0 : productsToLoad.filter((p4) => !cartData.items.some((item) => +item.product_id === +p4.id))) == null ? void 0 : _b6.map((product) => window.transformProducts(product))) == null ? void 0 : _c2.filter((product) => !product.hidden)) == null ? void 0 : _d.filter((p4, index, arr) => arr.findIndex((p22) => p22.id === p4.id) === index)) == null ? void 0 : _e.slice(0, settings.cart__recommended_products_quantity)) == null ? void 0 : _f.map((p4) => getUntransformedAsyncProduct(p4.handle))
      );
      setProducts(
        finalProducts.map((product) => window.transformProducts(product)).filter((product) => !product.hidden)
      );
    }), [
      cartData.items,
      settings.cart__recommended_products,
      settings.cart__recommended_products_hide_upsell_products,
      settings.cart__recommended_products_quantity,
      settings.cart__recommended_products_source
    ]);
    p2(() => {
      if (hydrated) {
        loadPromotionalItems();
      }
    }, [loadPromotionalItems, hydrated]);
    return o3(_, { children: products.length ? o3(_, { children: [
      o3("div", { className: "cart-title pt-4 sm:mx-4", children: "You may also like" }),
      o3("main", { className: "relative py-4 sm:mx-4", children: o3("div", { className: "grid gap-6 ", children: (_c = (_b5 = (_a5 = products == null ? void 0 : products.filter((product) => product.available)) == null ? void 0 : _a5.slice(0, settings.cart__recommended_products_quantity)) == null ? void 0 : _b5.sort((a4, b4) => a4.price_min - b4.price_min)) == null ? void 0 : _c.map((upsellProduct) => {
        return o3("div", { className: "border-b border-b-gray-300 pb-6", children: o3(ProductCardFlatWide, { product: upsellProduct, disableCartOpen: true }) }, upsellProduct.id);
      }) }) })
    ] }) : null });
  }
  __name(PromotionalItems, "PromotionalItems");

  // cart-drawer.route-protection.tsx
  init_compat_module();
  init_compat_module();
  var RouteProtection = /* @__PURE__ */ __name(({ settings }) => {
    var _a5;
    const { lineItems, adjustItem, loading } = useCartDrawer((state) => ({
      lineItems: state.cartData.items,
      adjustItem: state.adjustItem,
      loading: state.loading
    }));
    const [autoLoading, setAutoLoading] = h2(true);
    const [added, setAdded] = h2(
      lineItems.some((item) => item.variant_id === +settings.variant_id)
    );
    const loadingRef = _2(null);
    const product = settings.products[0];
    const variant = (_a5 = product == null ? void 0 : product.variants) == null ? void 0 : _a5.find((variant2) => variant2.id === +settings.variant_id);
    const lineItemTotal = lineItems.reduce(
      (acc, item) => item.variant_id === +settings.variant_id ? acc : acc + item.final_line_price,
      0
    );
    const price = !settings.use_advanced_pricing ? variant.price : lineItemTotal > +settings.percentage_threshold ? lineItemTotal * (+settings.percentage / 100) : settings.price;
    const handleToggle = T2(() => {
      const variantLineItemIndex = lineItems.findIndex(
        (item) => item.variant_id === +settings.variant_id
      );
      const variantLineItem = lineItems[variantLineItemIndex];
      if (added && variantLineItem) {
        setAdded(false);
        adjustItem(variantLineItem, -variantLineItem.quantity, variantLineItemIndex);
        return;
      }
      setAdded(true);
      cart.add(
        {
          items: [
            {
              id: +settings.variant_id,
              quantity: 1
            }
          ]
        },
        false
      );
      return;
    }, [added, adjustItem, lineItems, settings.variant_id]);
    p2(() => {
      const isLineItem = lineItems.some((item) => item.variant_id === +settings.variant_id);
      setAutoLoading(added && !isLineItem || !added && isLineItem);
      if (!loading) {
        loadingRef.current = setTimeout(
          () => {
            if (!loading && added && !isLineItem) {
              setAdded(false);
            }
            if (!loading && !added && isLineItem) {
              setAdded(true);
            }
          },
          1e3
        );
      }
      if (loading && loadingRef.current) {
        clearTimeout(loadingRef.current);
      }
    }, [added, lineItems, loading, settings.variant_id]);
    if (lineItems.length === 0 && !settings.empty_cart_show) {
      return null;
    }
    if (!settings.content__show) {
      return null;
    }
    return o3("div", { className: "mt-4 grid grid-cols-[32px_1fr_auto] items-center gap-2", children: [
      o3("picture", { className: "relative h-8 w-8", children: (product == null ? void 0 : product.featured_image) ? o3(
        Image2,
        {
          alt: settings.title || (product == null ? void 0 : product.title),
          src: product == null ? void 0 : product.featured_image,
          width: 60,
          className: "h-full w-full object-cover"
        }
      ) : null }),
      o3("div", { className: "ml-2", children: [
        o3("h4", { className: "text-[13px] font-semibold", children: settings.title || product.title }),
        o3("p", { className: "mt-1 text-[11px] leading-[1.7]", children: settings.description })
      ] }),
      o3("div", { className: "ml-2 grid gap-1.5 text-right", children: [
        o3(
          "span",
          {
            className: "mr-2 text-xs font-bold",
            dangerouslySetInnerHTML: { __html: window.formatMoney(price) }
          }
        ),
        o3(
          "button",
          {
            disabled: autoLoading,
            type: "button",
            className: "group relative ml-auto inline-flex h-4 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-1 focus:ring-primary-bg/80 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60",
            role: "switch",
            "aria-checked": "false",
            onClick: handleToggle,
            children: [
              o3("span", { className: "sr-only", children: "Use setting" }),
              o3(
                "span",
                {
                  "aria-hidden": "true",
                  className: "pointer-events-none absolute h-full w-full rounded-md bg-white"
                }
              ),
              o3(
                "span",
                {
                  "aria-hidden": "true",
                  className: clsx_m_default(
                    " pointer-events-none absolute mx-auto h-3 w-7 rounded-full transition-colors duration-200 ease-in-out",
                    added ? "bg-primary-bg" : "bg-theme-text/10"
                  )
                }
              ),
              o3(
                "span",
                {
                  "aria-hidden": "true",
                  className: clsx_m_default(
                    " pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out",
                    added ? "translate-x-[18px]" : "translate-x-0"
                  )
                }
              )
            ]
          }
        )
      ] })
    ] });
  }, "RouteProtection");
  var initRouteProtectionItems = /* @__PURE__ */ __name(() => {
    const cartPageRouteProtection = document.querySelector("[data-cart-page-route-protection]");
    document.querySelectorAll("[data-route-protection]").forEach((element) => {
      var _a5, _b5, _c;
      const settings = JSONParse(
        element.dataset.routeProtectionSettings
      );
      if (!((_c = (_b5 = (_a5 = settings == null ? void 0 : settings.products) == null ? void 0 : _a5[0]) == null ? void 0 : _b5.variants) == null ? void 0 : _c.length)) {
        return;
      }
      G(o3(RouteProtection, { settings }), element);
      if (cartPageRouteProtection) {
        G(o3(RouteProtection, { settings }), cartPageRouteProtection);
      }
    });
  }, "initRouteProtectionItems");

  // use-debounce-effect.tsx
  init_compat_module();
  var useDebouncedEffect = /* @__PURE__ */ __name((effect, delay2, deps) => {
    p2(() => {
      const handler = setTimeout(() => effect(), delay2);
      return () => clearTimeout(handler);
    }, [...deps || [], delay2]);
  }, "useDebouncedEffect");

  // cart-drawer.side-effects.tsx
  init_compat_module();
  function useUpdateLoadingState() {
    const cartCountItems = document.querySelectorAll("[data-cart-item-count]");
    const loadingSpinner = document.querySelectorAll(
      `[data-drawer="cart"] [data-loading-spinner], [data-cart-content] [data-loading-spinner], [data-cart-loading-spinner]`
    );
    const cartTotals = document.querySelectorAll("[data-cart-total]");
    const { cartData, loading, routeProtectionProducts } = useCartDrawer(
      ({ cartData: cartData2, loading: loading2, routeProtectionProducts: routeProtectionProducts2 }) => ({
        cartData: cartData2,
        loading: loading2,
        routeProtectionProducts: routeProtectionProducts2
      })
    );
    p2(() => {
      cartTotals.forEach((cartTotal) => {
        if (cartData.total_discount > 0) {
          cartTotal.innerHTML = `<span class="inline-flex items-center">
                  <span class="line-through opacity-50 grayscale">${window.formatMoney(
            cartData.original_total_price
          )}</span>
                  <span class="ml-2">${window.formatMoney(cartData.total_price)}</span>
                </span>`;
        } else {
          cartTotal.innerHTML = window.formatMoney(cartData.total_price);
        }
      });
      if (loading) {
        loadingSpinner.forEach((spinner) => spinner.classList.remove("opacity-0"));
      }
      if (!loading) {
        loadingSpinner.forEach((spinner) => spinner.classList.add("opacity-0"));
      }
      cartCountItems.forEach((cartCounter) => {
        cartCounter.innerHTML = `${cartData.item_count}`;
      });
      const routeProtectionOnlyInCart = cartData.items.every((line_item) => {
        const routeProtection = routeProtectionProducts == null ? void 0 : routeProtectionProducts.find(
          (block) => {
            var _a5, _b5;
            return ((_b5 = (_a5 = block == null ? void 0 : block.products) == null ? void 0 : _a5[0]) == null ? void 0 : _b5.handle) === (line_item == null ? void 0 : line_item.handle);
          }
        );
        return !!(routeProtection == null ? void 0 : routeProtection.checkout_disabled);
      });
      document.querySelectorAll("[data-cart-checkout-button]").forEach((buttonElement) => {
        buttonElement.disabled = cartData.item_count <= 0 || routeProtectionOnlyInCart;
      });
    }, [loading, cartData, cartTotals, loadingSpinner, cartCountItems, routeProtectionProducts]);
  }
  __name(useUpdateLoadingState, "useUpdateLoadingState");
  function useHandleCartUpdates() {
    const { updates, fetchUpdates } = useCartDrawer(({ updates: updates2, fetchUpdates: fetchUpdates2 }) => ({
      updates: updates2,
      fetchUpdates: fetchUpdates2
    }));
    useDebouncedEffect(
      () => {
        if (updates !== null) {
          fetchUpdates();
        }
      },
      800,
      [updates]
    );
  }
  __name(useHandleCartUpdates, "useHandleCartUpdates");
  function useInitCart() {
    const updateCartState = useCartDrawer((state) => state.initCart);
    p2(() => {
      document.addEventListener("cart:add", initCart);
      document.addEventListener("_cart-update", updateCartState);
      return () => {
        document.removeEventListener("cart:add", initCart);
        document.removeEventListener("_cart-update", updateCartState);
      };
    }, [updateCartState]);
  }
  __name(useInitCart, "useInitCart");
  function usePreloadCartProducts() {
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({
      cartData: cartData2
    }));
    const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2, hydrated: hydrated2 }) => ({
      getAsyncProduct: getAsyncProduct2,
      hydrated: hydrated2
    }));
    p2(() => {
      var _a5;
      if (hydrated) {
        (_a5 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a5.forEach((item) => {
          getAsyncProduct(item.handle);
        });
      }
    }, [cartData.items, hydrated]);
  }
  __name(usePreloadCartProducts, "usePreloadCartProducts");
  function useEmptyCartDrawer() {
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({
      cartData: cartData2
    }));
    p2(() => {
      const cartDrawerFooterEmpty = document.querySelector("[data-cart-drawer-empty-footer]");
      const cartDrawerFooter = document.querySelector("[data-cart-checkout-form]");
      const cartDrawerContentEmpty = document.querySelector("[data-cart-drawer-empty-content]");
      const cartDrawerContent = document.querySelector("[data-cart-drawer-content]");
      if (!cartDrawerFooterEmpty || !cartDrawerFooter || !cartDrawerContentEmpty || !cartDrawerContent) {
        return;
      }
      if (cartData.item_count === 0 && cartDrawerFooterEmpty.children.length) {
        cartDrawerFooterEmpty.classList.remove("hidden");
        cartDrawerFooter.classList.add("hidden");
      } else {
        cartDrawerFooterEmpty.classList.add("hidden");
        cartDrawerFooter.classList.remove("hidden");
      }
      if (cartData.item_count === 0 && cartDrawerContentEmpty.children.length) {
        cartDrawerContentEmpty.classList.remove("hidden");
        cartDrawerContent.classList.add("hidden");
      } else {
        cartDrawerContentEmpty.classList.add("hidden");
        cartDrawerContent.classList.remove("hidden");
      }
    }, [cartData.item_count]);
  }
  __name(useEmptyCartDrawer, "useEmptyCartDrawer");
  var CartSideEffects = /* @__PURE__ */ __name(() => {
    useInitCart();
    useUpdateLoadingState();
    useHandleCartUpdates();
    usePreloadCartProducts();
    useEmptyCartDrawer();
    return null;
  }, "CartSideEffects");

  // gift-with-purchase.tsx
  init_compat_module();
  init_compat_module();
  var GiftItems = /* @__PURE__ */ __name(() => {
    const giftItemsRoot = document.querySelector("[data-gift-with-purchase]");
    const { settings, blocks: giftItemBlocks } = JSONParse(giftItemsRoot == null ? void 0 : giftItemsRoot.innerHTML);
    const [showGiftSection, setShowGiftSection] = h2(true);
    const giftItemLengthRef = _2(0);
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const { updateProduct } = useProductQuickView(({ updateProduct: updateProduct2 }) => ({ updateProduct: updateProduct2 }));
    const { getAsyncProduct, hydrated, getProduct } = useGlobalProducts(
      ({ getAsyncProduct: getAsyncProduct2, hydrated: hydrated2, getProduct: getProduct2 }) => ({
        getAsyncProduct: getAsyncProduct2,
        hydrated: hydrated2,
        getProduct: getProduct2
      })
    );
    const [discountProducts, setDiscountProducts] = h2([]);
    console.log(giftItemBlocks);
    const getGiftItems = T2(() => __async(void 0, null, function* () {
      var _a5, _b5;
      let giftItems = [];
      for (let i4 = 0; i4 < giftItemBlocks.length; i4++) {
        const {
          type,
          target,
          target_collection,
          target_products,
          receives_discount_percentage,
          receives_products,
          receives_quantity
        } = giftItemBlocks[i4];
        let targetValue = 0;
        let receivedQuantity = 0;
        for (let j5 = 0; j5 < (cartData == null ? void 0 : cartData.items.length); j5++) {
          const lineItem = cartData == null ? void 0 : cartData.items[j5];
          if (receives_products == null ? void 0 : receives_products.includes(lineItem.handle)) {
            receivedQuantity += lineItem.quantity;
          }
          if (target_products == null ? void 0 : target_products.includes(lineItem.handle)) {
            targetValue += type === "price" ? lineItem == null ? void 0 : lineItem.final_line_price : lineItem == null ? void 0 : lineItem.quantity;
            continue;
          }
          const product = yield getAsyncProduct(lineItem.handle);
          if ((_a5 = product == null ? void 0 : product.collections) == null ? void 0 : _a5.some((c4) => (c4 == null ? void 0 : c4.handle) === target_collection)) {
            targetValue += type === "price" ? lineItem == null ? void 0 : lineItem.final_line_price : lineItem == null ? void 0 : lineItem.quantity;
          }
        }
        const targetReached = targetValue >= target;
        const receivedReached = receivedQuantity >= receives_quantity;
        if (targetReached && !receivedReached) {
          const blockDiscountProducts = (_b5 = yield Promise.all(receives_products == null ? void 0 : receives_products.map((handle) => getAsyncProduct(handle)))) == null ? void 0 : _b5.map((product) => __spreadProps(__spreadValues({}, product), {
            discount: receives_discount_percentage
          }));
          giftItems = [...giftItems, ...blockDiscountProducts];
        }
        console.log(giftItems);
        setDiscountProducts((current) => current.length !== giftItems.length ? giftItems : current);
      }
    }), [cartData == null ? void 0 : cartData.items, giftItemBlocks]);
    p2(() => {
      if (hydrated && (giftItemBlocks == null ? void 0 : giftItemBlocks.length) > 0 && cartData.item_count > 0) {
        getGiftItems();
      }
    }, [hydrated, giftItemBlocks == null ? void 0 : giftItemBlocks.length, cartData.item_count]);
    const handleViewProduct = T2((e3, adjustedProduct) => __async(void 0, null, function* () {
      if (updateProduct) {
        e3.preventDefault();
        updateProduct(adjustedProduct);
        setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
      }
    }), [updateProduct]);
    return o3(_, { children: (discountProducts == null ? void 0 : discountProducts.length) ? o3(_, { children: [
      o3("div", { className: "h-4" }),
      o3("div", { className: clsx_m_default("-m-4 bg-[#F5E8FF] p-4", showGiftSection && ""), children: o3("div", { className: "relative", children: [
        o3("header", { className: "flex items-baseline justify-between text-lg font-semibold", children: [
          o3("div", { children: settings.title }),
          o3(
            "button",
            {
              className: "flex items-center gap-1 p-1",
              type: "button",
              onClick: (e3) => {
                setShowGiftSection((current) => !current);
              },
              children: o3(
                ChevronLeftIcon,
                {
                  className: clsx_m_default(
                    "h-5 w-5 transition-all ease-linear",
                    showGiftSection ? "rotate-90" : "-rotate-90"
                  )
                }
              )
            }
          )
        ] }),
        showGiftSection ? o3("div", { className: "grid gap-6 pb-2 pt-3", children: [
          discountProducts.map((_a5) => {
            var _b5 = _a5, { discount } = _b5, product = __objRest(_b5, ["discount"]);
            var _a6, _b6, _c, _d, _e;
            if (!(product == null ? void 0 : product.available))
              return null;
            product.variants = (_a6 = product == null ? void 0 : product.variants) == null ? void 0 : _a6.map((v4) => __spreadProps(__spreadValues({}, v4), {
              compare_at_price: v4.compare_at_price || v4.price,
              price: v4.price - v4.price * (discount / 100)
            }));
            product.selected_or_first_available_variant = __spreadProps(__spreadValues({}, product == null ? void 0 : product.selected_or_first_available_variant), {
              compare_at_price: ((_b6 = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _b6.compare_at_price) || ((_c = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _c.price),
              price: ((_d = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _d.price) - ((_e = product == null ? void 0 : product.selected_or_first_available_variant) == null ? void 0 : _e.price) * (discount / 100)
            });
            product.compare_at_price = (product == null ? void 0 : product.compare_at_price) || (product == null ? void 0 : product.price);
            product.compare_at_price_min = product.compare_at_price_min || (product == null ? void 0 : product.price_min);
            product.price = (product == null ? void 0 : product.price) - (product == null ? void 0 : product.price) * (discount / 100);
            product.price_min = (product == null ? void 0 : product.price_min) - (product == null ? void 0 : product.price_min) * (discount / 100);
            return o3("div", { className: "border-b-300 border-b pb-6", children: o3(ProductCardFlatWide, { product, disableCartOpen: true }) }, product == null ? void 0 : product.id);
          }),
          o3(ScrollBar, { itemCount: discountProducts == null ? void 0 : discountProducts.length })
        ] }) : null
      ] }) })
    ] }) : null });
  }, "GiftItems");
  function initGiftDiscounts() {
    const giftItemsRoot = document.querySelector("[data-cart-drawer-gifts]");
    if (giftItemsRoot) {
      giftItemsRoot.innerHTML = "";
      G(o3(GiftItems, {}), giftItemsRoot);
    }
  }
  __name(initGiftDiscounts, "initGiftDiscounts");

  // main-cart.tsx
  init_compat_module();
  var CartLineItems = /* @__PURE__ */ __name(() => {
    var _a5, _b5;
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    return o3(_, { children: cartData && ((_a5 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _a5.length) ? o3(_, { children: (_b5 = cartData == null ? void 0 : cartData.items) == null ? void 0 : _b5.map((line_item, index, line_items) => {
      if ((line_item == null ? void 0 : line_item.quantity) === 0)
        return null;
      return o3(
        CartLineItem,
        {
          line_item,
          index,
          line_items
        },
        line_item == null ? void 0 : line_item.key
      );
    }) }) : null });
  }, "CartLineItems");
  var CartLineItem = /* @__PURE__ */ __name(({ line_items, line_item, index }) => {
    var _a5, _b5, _c, _d, _e, _f, _g;
    const { adjustItem, routeProtectionProducts } = useCartDrawer(
      ({ adjustItem: adjustItem2, routeProtectionProducts: routeProtectionProducts2 }) => ({ adjustItem: adjustItem2, routeProtectionProducts: routeProtectionProducts2 })
    );
    const [variant, setVariant] = h2(null);
    const { hydrated, getAsyncProduct } = useGlobalProducts(({ hydrated: hydrated2, getAsyncProduct: getAsyncProduct2 }) => ({
      hydrated: hydrated2,
      getAsyncProduct: getAsyncProduct2
    }));
    const disableIncreaseQuantity = F2(() => {
      var _a6, _b6, _c2, _d2, _e2;
      if (!variant)
        return false;
      const { inventory_management, inventory_policy, inventory_quantity } = variant;
      const quantityInCart = line_items == null ? void 0 : line_items.reduce(
        (acc, item) => {
          if (item.variant_id === (line_item == null ? void 0 : line_item.variant_id)) {
            acc += item.quantity;
          }
          return acc;
        },
        0
      );
      const continueSelling = inventory_policy === "continue" || inventory_management !== "shopify";
      if (!continueSelling && quantityInCart >= inventory_quantity) {
        return true;
      }
      if (continueSelling) {
        const pre_order = (_b6 = (_a6 = variant.metafields) == null ? void 0 : _a6.smart) == null ? void 0 : _b6.pre_order;
        const pre_order_limit = +((_e2 = (_d2 = (_c2 = variant.metafields) == null ? void 0 : _c2.smart) == null ? void 0 : _d2.pre_order_limit) != null ? _e2 : 0);
        if (pre_order && quantityInCart >= pre_order_limit + inventory_quantity) {
          return true;
        }
      }
      return false;
    }, [line_item == null ? void 0 : line_item.variant_id, line_items, variant]);
    const routeProtection = routeProtectionProducts.find(
      (block) => {
        var _a6, _b6;
        return ((_b6 = (_a6 = block == null ? void 0 : block.products) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.handle) === (line_item == null ? void 0 : line_item.handle);
      }
    );
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    p2(() => {
      if (!variant && hydrated) {
        getAsyncProduct(line_item == null ? void 0 : line_item.handle).then((p4) => {
          var _a6;
          setVariant((_a6 = p4 == null ? void 0 : p4.variants) == null ? void 0 : _a6.find(({ id }) => id === (line_item == null ? void 0 : line_item.variant_id)));
        });
      }
    }, [hydrated, line_item == null ? void 0 : line_item.handle, line_item == null ? void 0 : line_item.variant_id, variant]);
    return o3("tr", { className: "group hf:bg-gray-50", children: [
      o3("td", { className: "py-4 pl-4 pr-3 text-sm sm:pl-6", children: o3("div", { className: "grid w-full items-center gap-4 sm:grid-cols-[100px_1fr]", children: [
        o3(
          Image2,
          {
            src: `${line_item == null ? void 0 : line_item.image}&crop=center&height=100&width=100`,
            alt: (_b5 = (_a5 = line_item == null ? void 0 : line_item.featured_image) == null ? void 0 : _a5.alt) != null ? _b5 : line_item == null ? void 0 : line_item.title,
            width: 100,
            height: 100,
            className: clsx_m_default(
              "w-[100px]",
              !(line_item == null ? void 0 : line_item.image) && "pointer-events-none hidden overflow-hidden opacity-0"
            )
          }
        ),
        o3("a", { className: "block flex-1", href: line_item == null ? void 0 : line_item.url, children: [
          o3("h3", { className: "font-semibold group-hf:underline", children: line_item == null ? void 0 : line_item.product_title }),
          o3("h4", { className: "text-xs uppercase tracking-wide text-gray-500", children: line_item == null ? void 0 : line_item.variant_title }),
          (_e = (_d = Object.entries((_c = line_item == null ? void 0 : line_item.properties) != null ? _c : {})) == null ? void 0 : _d.filter(([key]) => !/^_/gi.test(key))) == null ? void 0 : _e.map(([key, value]) => {
            if (key === "preorder") {
              return o3("p", { className: "mt-1 flex text-xs text-gray-600 opacity-70", children: [
                o3(TimerIcon, { className: "mr-2 h-4 w-4" }),
                " ",
                o3("span", { children: value })
              ] }, key);
            }
            return o3("p", { className: "text-xs text-gray-600", children: [
              capitalize(key),
              ": ",
              value
            ] }, key);
          }),
          o3("div", { className: "mt-1 text-sm font-medium", children: [
            o3(
              "span",
              {
                className: clsx_m_default(
                  "text-theme-text/50 line-through",
                  (line_item == null ? void 0 : line_item.original_price) === (line_item == null ? void 0 : line_item.discounted_price) && "pointer-events-none hidden overflow-hidden opacity-0"
                ),
                dangerouslySetInnerHTML: {
                  __html: `${window.formatMoney(line_item == null ? void 0 : line_item.original_price)} `
                }
              }
            ),
            o3(
              "span",
              {
                className: "font-bold text-primary-outline",
                dangerouslySetInnerHTML: { __html: window.formatMoney(line_item == null ? void 0 : line_item.final_price) }
              }
            )
          ] }),
          ((_f = line_item == null ? void 0 : line_item.discounts) == null ? void 0 : _f.length) ? o3("div", { className: "text-xs font-medium opacity-50", children: (_g = line_item == null ? void 0 : line_item.discounts) == null ? void 0 : _g.map((discount) => o3("div", { children: [
            "Discount: ",
            discount.title
          ] }, discount.title)) }) : null
        ] })
      ] }) }),
      o3("td", { className: "whitespace-nowrap px-4 py-2 text-sm text-gray-500 max-md:hidden sm:px-6", children: line_item == null ? void 0 : line_item.sku }),
      o3("td", { className: "whitespace-nowrap px-4 py-2 text-right text-sm text-gray-500 max-sm:hidden sm:px-6", children: isSingleQuantityRouteProtectionItem ? null : o3("div", { className: "relative flex", children: [
        o3("div", { className: "mr-auto mt-2 flex select-none items-center space-x-2.5 rounded-theme border border-gray-300 px-1.5 py-0.5 text-[13px] font-semibold", children: [
          o3(
            "button",
            {
              type: "button",
              className: "flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900",
              onClick: () => adjustItem(line_item, -1, index),
              children: [
                o3("span", { className: "sr-only", children: "Decrease quantity by 1" }),
                o3(MinusIcon, { className: "h-2.5 w-2.5" })
              ]
            }
          ),
          o3("span", { className: "text-gray-800", children: line_item == null ? void 0 : line_item.quantity }),
          o3(
            "button",
            {
              type: "button",
              onClick: () => adjustItem(line_item, 1, index),
              className: "flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900",
              disabled: disableIncreaseQuantity || isSingleQuantityRouteProtectionItem,
              children: [
                o3("span", { className: "sr-only", children: "Increase quantity by 1" }),
                o3(PlusIcon, { className: "h-2.5 w-2.5" })
              ]
            }
          )
        ] }),
        o3("span", { className: "absolute left-0 top-full mt-0.5 block w-full text-center text-xs", children: o3(
          "button",
          {
            className: "text-gray-400 hf:text-gray-500 hf:underline",
            onClick: () => adjustItem(line_item, -(line_item == null ? void 0 : line_item.quantity), index),
            children: "Remove"
          }
        ) })
      ] }) }),
      o3("td", { className: "whitespace-nowrap px-4 py-2 text-right text-sm font-medium text-gray-700 sm:px-6", children: [
        o3(
          "span",
          {
            dangerouslySetInnerHTML: { __html: window.formatMoney(line_item == null ? void 0 : line_item.final_line_price) }
          }
        ),
        o3("div", { className: "mb-auto mt-4 sm:hidden", children: isSingleQuantityRouteProtectionItem ? null : o3("div", { className: "relative flex", children: [
          o3("div", { className: "mr-auto mt-2 flex select-none items-center space-x-2.5 rounded-theme border border-gray-300 px-1.5 py-0.5 text-[13px] font-semibold", children: [
            o3(
              "button",
              {
                type: "button",
                className: "flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900",
                onClick: () => adjustItem(line_item, -1, index),
                children: [
                  o3("span", { className: "sr-only", children: "Decrease quantity by 1" }),
                  o3(MinusIcon, { className: "h-2.5 w-2.5" })
                ]
              }
            ),
            o3("span", { className: "text-gray-800", children: line_item == null ? void 0 : line_item.quantity }),
            o3(
              "button",
              {
                type: "button",
                onClick: () => adjustItem(line_item, 1, index),
                className: "flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900",
                disabled: disableIncreaseQuantity || isSingleQuantityRouteProtectionItem,
                children: [
                  o3("span", { className: "sr-only", children: "Increase quantity by 1" }),
                  o3(PlusIcon, { className: "h-2.5 w-2.5" })
                ]
              }
            )
          ] }),
          o3("span", { className: "absolute left-0 top-full mt-0.5 block w-full text-center text-xs", children: o3(
            "button",
            {
              className: "text-gray-400 hf:text-gray-500 hf:underline",
              onClick: () => adjustItem(line_item, -(line_item == null ? void 0 : line_item.quantity), index),
              children: "Remove"
            }
          ) })
        ] }) })
      ] })
    ] });
  }, "CartLineItem");

  // cart-drawer.tsx
  var CartDrawerLineItems = /* @__PURE__ */ __name(() => {
    var _a5;
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    return o3(_, { children: cartData && ((_a5 = cartData.items) == null ? void 0 : _a5.length) ? o3(_, { children: cartData.items.map((line_item, index, line_items) => {
      if ((line_item == null ? void 0 : line_item.quantity) === 0)
        return null;
      return o3(
        CartDrawerLineItem,
        {
          line_item,
          index,
          line_items
        },
        line_item == null ? void 0 : line_item.key
      );
    }) }) : "" });
  }, "CartDrawerLineItems");
  var CartLastAddedItems = /* @__PURE__ */ __name(() => {
    var _a5;
    const { cartData } = useCartDrawer(({ cartData: cartData2 }) => ({ cartData: cartData2 }));
    const [lastCartItems, setLastCartItems] = h2([]);
    const timeout2 = _2(null);
    p2(() => {
      var _a6;
      if (!(lastCartItems == null ? void 0 : lastCartItems.length) && ((_a6 = window == null ? void 0 : window.lastCartItems) == null ? void 0 : _a6.length)) {
        setLastCartItems(window.lastCartItems);
      }
      if (timeout2.current) {
        clearTimeout(timeout2.current);
      }
      timeout2.current = setTimeout(
        () => {
          document.dispatchEvent(new CustomEvent("cart-added-modal:close"));
          setLastCartItems([]);
        },
        3e3
      );
    }, [cartData.item_count, lastCartItems.length]);
    return o3("div", { children: (_a5 = window.lastCartItems) == null ? void 0 : _a5.map((item) => {
      var _a6, _b5, _c;
      return o3("div", { className: "grid gap-4", children: [
        o3(
          Image2,
          {
            src: (_a6 = item == null ? void 0 : item.featured_image) == null ? void 0 : _a6.url,
            width: 50,
            height: 50,
            alt: (_c = (_b5 = item == null ? void 0 : item.featured_image) == null ? void 0 : _b5.alt) != null ? _c : item.title
          }
        ),
        o3("div", { className: "product-card-title", children: item.title })
      ] }, item.key);
    }) });
  }, "CartLastAddedItems");
  var CartDrawerLineItem = /* @__PURE__ */ __name(({ line_items, line_item, index }) => {
    var _a5, _b5, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const { adjustItem, routeProtectionProducts } = useCartDrawer(
      ({ adjustItem: adjustItem2, routeProtectionProducts: routeProtectionProducts2 }) => ({ adjustItem: adjustItem2, routeProtectionProducts: routeProtectionProducts2 })
    );
    const [variant, setVariant] = h2(null);
    const { hydrated, getAsyncProduct } = useGlobalProducts(({ hydrated: hydrated2, getAsyncProduct: getAsyncProduct2 }) => ({
      hydrated: hydrated2,
      getAsyncProduct: getAsyncProduct2
    }));
    const routeProtection = routeProtectionProducts.find(
      (block) => {
        var _a6, _b6;
        return ((_b6 = (_a6 = block == null ? void 0 : block.products) == null ? void 0 : _a6[0]) == null ? void 0 : _b6.handle) === (line_item == null ? void 0 : line_item.handle);
      }
    );
    const isSingleQuantityRouteProtectionItem = !!(routeProtection == null ? void 0 : routeProtection.limit_quantity);
    const disableIncreaseQuantity = F2(() => {
      var _a6, _b6, _c2, _d2, _e2;
      if (!variant)
        return false;
      const { inventory_management, inventory_policy, inventory_quantity } = variant;
      const quantityInCart = line_items == null ? void 0 : line_items.reduce(
        (acc, item) => {
          if (item.variant_id === (line_item == null ? void 0 : line_item.variant_id)) {
            acc += item.quantity;
          }
          return acc;
        },
        0
      );
      const continueSelling = inventory_policy === "continue" || inventory_management !== "shopify";
      if (!continueSelling && quantityInCart >= inventory_quantity) {
        return true;
      }
      if (continueSelling) {
        const pre_order = (_b6 = (_a6 = variant.metafields) == null ? void 0 : _a6.smart) == null ? void 0 : _b6.pre_order;
        const pre_order_limit = +((_e2 = (_d2 = (_c2 = variant.metafields) == null ? void 0 : _c2.smart) == null ? void 0 : _d2.pre_order_limit) != null ? _e2 : 0);
        if (pre_order && quantityInCart >= pre_order_limit + inventory_quantity) {
          return true;
        }
      }
      return false;
    }, [line_item == null ? void 0 : line_item.variant_id, line_items, variant]);
    p2(() => {
      if (!variant && hydrated) {
        getAsyncProduct(line_item == null ? void 0 : line_item.handle).then((p4) => {
          var _a6;
          setVariant((_a6 = p4 == null ? void 0 : p4.variants) == null ? void 0 : _a6.find(({ id }) => id === (line_item == null ? void 0 : line_item.variant_id)));
        });
      }
    }, [hydrated, line_item == null ? void 0 : line_item.handle, line_item == null ? void 0 : line_item.variant_id, variant]);
    return o3("article", { className: "flex items-start space-x-5 border-b border-gray-200 py-6 sm:mx-4", children: [
      o3(
        "a",
        {
          className: clsx_m_default(
            "relative block self-center rounded-theme-sm",
            isSingleQuantityRouteProtectionItem ? "h-10 w-24" : "h-24 w-24"
          ),
          href: line_item == null ? void 0 : line_item.url,
          children: o3(
            Image2,
            {
              src: `${line_item == null ? void 0 : line_item.image}&crop=center&height=100&width=100`,
              width: 100,
              height: 100,
              className: clsx_m_default(
                "h-full w-full object-contain",
                !(line_item == null ? void 0 : line_item.image) && "pointer-events-none hidden overflow-hidden opacity-0"
              ),
              alt: (_b5 = (_a5 = line_item == null ? void 0 : line_item.featured_image) == null ? void 0 : _a5.alt) != null ? _b5 : line_item == null ? void 0 : line_item.title
            }
          )
        }
      ),
      o3("main", { className: "flex flex-1 flex-col", children: [
        o3("a", { className: "product-card-title--small hf:underline", href: line_item == null ? void 0 : line_item.url, children: line_item == null ? void 0 : line_item.product_title }),
        isSingleQuantityRouteProtectionItem ? null : o3("h4", { className: "text-xs text-gray-500 ", children: line_item == null ? void 0 : line_item.variant_title }),
        (_e = (_d = Object.entries((_c = line_item == null ? void 0 : line_item.properties) != null ? _c : {})) == null ? void 0 : _d.filter(([key]) => !/^_/gi.test(key))) == null ? void 0 : _e.map(([key, value]) => {
          if (key === "preorder") {
            return o3("p", { className: "mt-1 flex text-xs text-gray-600 opacity-70", children: [
              o3(TimerIcon, { className: "mr-2 h-4 w-4" }),
              " ",
              o3("span", { children: value })
            ] }, key);
          }
          return o3("p", { className: "text-xs text-gray-600", children: [
            capitalize(key),
            ": ",
            value
          ] }, key);
        }),
        ((_g = (_f = line_item == null ? void 0 : line_item.selling_plan_allocation) == null ? void 0 : _f.selling_plan) == null ? void 0 : _g.name) ? o3("p", { className: "text-xs text-gray-600", children: (_i = (_h = line_item == null ? void 0 : line_item.selling_plan_allocation) == null ? void 0 : _h.selling_plan) == null ? void 0 : _i.name }) : null,
        o3("div", { className: "mt-1 text-sm font-medium", children: [
          isSingleQuantityRouteProtectionItem ? null : o3(
            "span",
            {
              className: clsx_m_default(
                "text-theme-text/50 line-through",
                (line_item == null ? void 0 : line_item.original_price) === (line_item == null ? void 0 : line_item.discounted_price) && "pointer-events-none hidden overflow-hidden opacity-0"
              ),
              dangerouslySetInnerHTML: {
                __html: `${window.formatMoney(line_item == null ? void 0 : line_item.original_price)} `
              }
            }
          ),
          o3(
            "span",
            {
              className: "font-bold text-primary-outline",
              dangerouslySetInnerHTML: { __html: window.formatMoney(line_item == null ? void 0 : line_item.final_price) }
            }
          )
        ] }),
        isSingleQuantityRouteProtectionItem ? null : ((_j = line_item == null ? void 0 : line_item.discounts) == null ? void 0 : _j.length) ? o3("div", { className: "text-xs font-medium opacity-50", children: (_k = line_item == null ? void 0 : line_item.discounts) == null ? void 0 : _k.map((discount) => o3("div", { children: [
          "Discount: ",
          discount.title
        ] }, discount.title)) }) : null,
        isSingleQuantityRouteProtectionItem ? null : o3("div", { className: "mr-auto mt-2 flex select-none items-center space-x-2.5 rounded-theme border border-gray-300 px-1.5 py-0.5 text-[13px] font-semibold", children: [
          o3(
            "button",
            {
              type: "button",
              className: "flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900",
              onClick: () => adjustItem(line_item, -1, index),
              children: [
                o3("span", { className: "sr-only", children: "Decrease quantity by 1" }),
                o3(MinusIcon, { className: "h-2.5 w-2.5" })
              ]
            }
          ),
          o3("span", { className: "text-gray-800", children: line_item == null ? void 0 : line_item.quantity }),
          o3(
            "button",
            {
              type: "button",
              onClick: () => adjustItem(line_item, 1, index),
              className: "flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900",
              disabled: disableIncreaseQuantity,
              children: [
                o3("span", { className: "sr-only", children: "Increase quantity by 1" }),
                o3(PlusIcon, { className: "h-2.5 w-2.5" })
              ]
            }
          )
        ] })
      ] }),
      o3(
        "button",
        {
          type: "button",
          className: "hf:text-theme-text/ ml-auto flex rounded-theme p-1 text-theme-text/90 transition-all ",
          onClick: () => adjustItem(line_item, -(line_item == null ? void 0 : line_item.quantity), index),
          children: [
            o3("span", { className: "sr-only", children: "Remove item from Cart" }),
            o3(CloseIcon, { className: "h-6 w-6" })
          ]
        }
      )
    ] });
  }, "CartDrawerLineItem");
  var initLineItems = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const cartDrawerLineItems = document.querySelector("[data-cart-drawer-line-items]");
    const cartLineItems = document.querySelector("[data-cart-line-items]");
    const cartSideEffects = document.querySelector("[data-cart-side-effects]");
    yield cartDrawer.getState().initCart();
    if (cartDrawerLineItems) {
      cartDrawerLineItems.innerHTML = "";
      B(o3(CartDrawerLineItems, {}), cartDrawerLineItems);
    }
    if (cartLineItems) {
      B(o3(CartLineItems, {}), cartLineItems);
    }
    if (cartSideEffects) {
      B(o3(CartSideEffects, {}), cartSideEffects);
    }
  }), "initLineItems");
  var initNonDrawerModal = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const drawerAddedItems = document.querySelector("[data-drawer-added-items]");
    if (drawerAddedItems) {
      B(o3(CartLastAddedItems, {}), drawerAddedItems);
    }
  }), "initNonDrawerModal");
  var initCart = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    initAnnouncementBars();
    initFreeShippingBar();
    initLineItems();
    initNonDrawerModal();
    initPromotionalItems();
    initRouteProtectionItems();
    initGiftDiscounts();
  }), "initCart");
  function initAnnouncementBars() {
    const announcementBars = document.querySelectorAll(
      "[data-announcement-bar]:not([data-initiated])"
    );
    announcementBars.forEach((announcementBar) => {
      announcementBar.setAttribute("data-initiated", "");
      let activeIndex = 0;
      displayAnnouncements();
      function displayAnnouncements() {
        [...announcementBar.querySelectorAll("[data-announcement-index]")].forEach(
          (announcement, i4, arr) => {
            const index = +announcement.dataset.announcementIndex;
            const duration = +announcement.dataset.announcementDuration;
            const textColor = announcement.dataset.announcementText;
            const bgColor = announcement.dataset.announcementBg;
            if (arr.length === 1) {
              announcementBar.style.setProperty("--color-bg-hex", bgColor);
              announcementBar.style.setProperty("--color-text-hex", textColor);
              announcement.style.opacity = "1";
              announcement.style.pointerEvents = "auto";
              return;
            }
            if (activeIndex === index) {
              announcementBar.style.setProperty("--color-bg-hex", bgColor);
              announcementBar.style.setProperty("--color-text-hex", textColor);
              announcement.style.opacity = "1";
              announcement.style.pointerEvents = "auto";
              setTimeout(
                () => {
                  activeIndex = activeIndex + 1 === arr.length ? 0 : activeIndex + 1;
                  displayAnnouncements();
                },
                duration * 1e3
              );
            }
            if (activeIndex !== index) {
              announcement.style.opacity = "0";
              announcement.style.pointerEvents = "none";
              announcement.tabIndex = -1;
            }
          }
        );
      }
      __name(displayAnnouncements, "displayAnnouncements");
    });
  }
  __name(initAnnouncementBars, "initAnnouncementBars");
  function initFreeShippingBar() {
    document.querySelectorAll("[data-free-shipping-bar-target]:not([data-initiated])").forEach((shippingBar) => {
      shippingBar.setAttribute("data-initiated", "");
      const target = +shippingBar.dataset.freeShippingBarTarget;
      const type = shippingBar.dataset.freeShippingBarType;
      const content = shippingBar.querySelector("[data-free-shipping-bar-content]");
      const message = content.dataset.freeShippingBarMessage;
      const messageSuccess = content.dataset.freeShippingBarMessageSuccess;
      const percentageSlider = shippingBar.querySelector(
        "[data-free-shipping-bar-percentage]"
      );
      document.addEventListener("cart:update", (event) => {
        const current = event.detail[type];
        const difference = Math.max(target - current, 0);
        const percentage = Math.min(current / target * 100, 100);
        percentageSlider.style.width = `${percentage}%`;
        if (percentage === 100) {
          content.innerHTML = messageSuccess.replace(/\[remaining]/gi, `${difference}`);
        }
        if (percentage < 100 && type === "item_count") {
          content.innerHTML = message.replace(/\[remaining]/gi, `${difference}`);
        }
        if (percentage < 100 && type === "total_price") {
          content.innerHTML = message.replace(/\[remaining]/gi, window.formatMoney(difference));
        }
      });
    });
  }
  __name(initFreeShippingBar, "initFreeShippingBar");
  function initPromotionalItems() {
    var _a5;
    const promotionalItems = document.querySelector(
      "[data-cart-drawer-promotion-items]"
    );
    if (!promotionalItems)
      return;
    const settings = JSONParse((_a5 = promotionalItems.querySelector("[data-section-settings]")) == null ? void 0 : _a5.innerHTML);
    if (settings) {
      B(
        o3(PromotionalItems, { settings }),
        promotionalItems
      );
    }
  }
  __name(initPromotionalItems, "initPromotionalItems");

  // collection.tsx
  var initCollectionGridWithFiltersDropdown = /* @__PURE__ */ __name(() => {
    const filterGrid = document.querySelector(
      "[data-collection-grid-with-filters]"
    );
    const toggleButton = document.querySelector(
      "[data-collection-grid-filters-toggle-button]"
    );
    const sortButton = document.querySelector("[data-collection-sort-button]");
    const sortContainer = document.querySelector("[data-collection-sort-container]");
    if (!sortContainer)
      return;
    toggleButton == null ? void 0 : toggleButton.addEventListener("click", () => {
      filterGrid == null ? void 0 : filterGrid.classList.toggle("active");
    });
    let showSort = false;
    const toggleSort = /* @__PURE__ */ __name(() => {
      if (showSort) {
        showSort = false;
        sortContainer.style.maxHeight = `${0}px`;
        sortContainer.style.opacity = "0";
      } else {
        showSort = true;
        sortContainer.style.maxHeight = `${(sortContainer == null ? void 0 : sortContainer.scrollHeight) || 2e3}px`;
        sortContainer.style.opacity = "100";
      }
    }, "toggleSort");
    sortButton.addEventListener("click", toggleSort);
    document.querySelectorAll("[data-collection-grid-filters-sidebar]").forEach((sidebar) => {
      sidebar == null ? void 0 : sidebar.querySelectorAll("[data-collection-grid-filter-item]").forEach((filter, index) => {
        const toggle = filter == null ? void 0 : filter.querySelector("[data-collection-filter-toggle]");
        const dropdown = filter == null ? void 0 : filter.querySelector("[data-collection-filter-container]");
        let show = index < 4;
        const toggleFilter = /* @__PURE__ */ __name(() => {
          if (show) {
            dropdown.style.maxHeight = `${0}px`;
            dropdown.style.opacity = "0";
          } else {
            dropdown.style.maxHeight = `${dropdown.scrollHeight || 2e3}px`;
            dropdown.style.opacity = "100";
          }
          show = !show;
        }, "toggleFilter");
        toggleFilter();
        toggleFilter();
        toggle.addEventListener("click", toggleFilter);
      });
    });
  }, "initCollectionGridWithFiltersDropdown");
  var initFiltersAutoApply = /* @__PURE__ */ __name(() => {
    document.querySelectorAll("[data-filter-auto-apply]").forEach((form) => {
      const eventHandler = debounce((e3) => form.submit(), 750);
      form.addEventListener("change", eventHandler);
    });
  }, "initFiltersAutoApply");
  var initCollection = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll('[data-collection-filter-type="price_range"]').forEach((priceFilter) => {
      initPriceFilter(priceFilter);
    });
    document.querySelectorAll(
      '[data-collection-filter-type="boolean"], [data-collection-filter-type="list"]'
    ).forEach((filter) => initFilter(filter));
    initFiltersDropdown();
    initCollectionGridWithFiltersDropdown();
    initFiltersAutoApply();
  }), "initCollection");
  var initFiltersDropdown = /* @__PURE__ */ __name(() => {
    const button = document.querySelector("[data-collection-filters-button]");
    const dropdown = document.querySelector("[data-collection-filters-dropdown]");
    if (!button || !dropdown)
      return;
    const toggles = dropdown == null ? void 0 : dropdown.querySelectorAll("[data-collection-filter-toggle]");
    const dropdowns = dropdown == null ? void 0 : dropdown.querySelectorAll("[data-collection-filter-container]");
    let dropdownMaxHeight = 32 + 50;
    let tallestDropdown = 0;
    toggles.forEach((el) => {
      dropdownMaxHeight += el.clientHeight;
    });
    dropdowns.forEach((el) => {
      tallestDropdown = tallestDropdown >= el.scrollHeight ? tallestDropdown : el.scrollHeight;
    });
    dropdownMaxHeight += tallestDropdown;
    let show = false;
    const handleClickOutside = /* @__PURE__ */ __name((e3) => {
      if (!dropdown.contains(e3.target) && !button.contains(e3.target) && button !== e3.target && document.body !== e3.target) {
        show = !show;
        dropdown.style.maxHeight = show ? `${dropdownMaxHeight}px` : "0";
        dropdown.style.opacity = show ? `1` : "0";
        document.removeEventListener("click", handleClickOutside);
      }
    }, "handleClickOutside");
    button.addEventListener("click", (e3) => {
      show = !show;
      dropdown.style.maxHeight = show ? `${dropdownMaxHeight}px` : "0";
      dropdown.style.opacity = show ? `1` : "0";
      if (show) {
        setTimeout(
          () => {
            document.addEventListener("click", handleClickOutside);
          },
          1
        );
      }
    });
  }, "initFiltersDropdown");
  var initFilter = /* @__PURE__ */ __name((filterForm) => {
    var _a5;
    const store = vanilla(
      immer(() => {
        const el = filterForm;
        const filterContainer = el.querySelector("[data-collection-filter-container]");
        return {
          showFilter: false,
          filterHeight: filterContainer.scrollHeight,
          filterContainer,
          toggleButton: el.querySelector("[data-collection-filter-toggle]"),
          setShowFilter: (show) => {
            setState((state) => {
              var _a6, _b5;
              if (((_b5 = (_a6 = state.filterContainer) == null ? void 0 : _a6.dataset) == null ? void 0 : _b5.collectionFilterContainer) !== "no-toggle") {
                state.filterContainer.style.maxHeight = show ? `${state.filterHeight}px` : "0";
                state.filterContainer.style.opacity = show ? `1` : "0";
                state.showFilter = show;
              }
            });
            if (show) {
              setTimeout(
                () => {
                  document.addEventListener("click", handleCloseFilterToggle);
                },
                1
              );
            }
            if (!show) {
              document.removeEventListener("click", handleCloseFilterToggle);
            }
          },
          submitForm: (event) => {
          }
        };
      })
    );
    const { getState, setState, subscribe, destroy } = store;
    const handleCloseFilterToggle = /* @__PURE__ */ __name((e3) => {
      if (!getState().filterContainer.contains(e3.target)) {
        getState().setShowFilter(false);
      }
    }, "handleCloseFilterToggle");
    const handleFilterToggle = /* @__PURE__ */ __name((e3) => {
      getState().setShowFilter(!getState().showFilter);
    }, "handleFilterToggle");
    (_a5 = getState().toggleButton) == null ? void 0 : _a5.addEventListener("click", handleFilterToggle);
  }, "initFilter");
  var initPriceFilter = /* @__PURE__ */ __name((priceFilterForm) => {
    var _a5, _b5, _c, _d, _e, _f;
    const store = vanilla(
      immer(() => {
        const el = priceFilterForm;
        const form = el.closest("form");
        const filterContainer = el.querySelector("[data-collection-filter-container]");
        const fromPriceElement = el.querySelector("[data-collection-filter-price-from]");
        const fromPriceInput = el.querySelector(
          "[data-collection-filter-price-from-input]"
        );
        const toPriceElement = el.querySelector("[data-collection-filter-price-to]");
        const toPriceInput = el.querySelector(
          "[data-collection-filter-price-to-input]"
        );
        const priceRange = {
          from: +fromPriceElement.dataset.collectionFilterPriceFrom,
          to: +toPriceElement.dataset.collectionFilterPriceTo
        };
        const minPrice = +fromPriceElement.dataset.collectionFilterPriceMin;
        const maxPrice = +toPriceElement.dataset.collectionFilterPriceMax;
        const eventHandler = debounce((e3) => form.submit(), 1500);
        return {
          priceFilterForm,
          maxPrice,
          minPrice,
          minMaxDifference: maxPrice - minPrice,
          priceRange,
          fromPriceElement,
          toPriceElement,
          fromPriceInput,
          toPriceInput,
          sliderDrag: null,
          showFilter: false,
          filterHeight: filterContainer.scrollHeight,
          filterContainer,
          toggleButton: el.querySelector("[data-collection-filter-toggle]"),
          slider: el.querySelector("[data-collection-filter-price-slider]"),
          sliderBar: el.querySelector("[data-collection-filter-price-slider-bar]"),
          sliderFromThumb: el.querySelector(
            "[data-collection-filter-price-slider-from-thumb]"
          ),
          sliderToThumb: el.querySelector(
            "[data-collection-filter-price-slider-to-thumb]"
          ),
          submitButton: el.querySelector(
            "[data-collection-filter-price-slider-to-thumb]"
          ),
          setSliderDrag: (input) => {
            setState((state) => {
              state.sliderDrag = input;
            });
          },
          setPriceRange: ({ from, to }) => {
            setState((state) => {
              state.priceRange = { from, to };
            });
          },
          updatePriceSlider: (state, submitForm = false) => {
            var _a6;
            const {
              priceRange: priceRange2,
              minPrice: minPrice2,
              minMaxDifference,
              sliderDrag,
              sliderFromThumb,
              sliderToThumb,
              sliderBar,
              fromPriceElement: fromPriceElement2,
              toPriceElement: toPriceElement2
            } = state;
            if (sliderDrag === null) {
              sliderFromThumb.classList.remove("scale-150", "text-primary-outline");
              sliderToThumb.classList.remove("scale-150", "text-primary-outline");
            }
            if (sliderDrag === "from") {
              sliderFromThumb.classList.add("scale-150", "text-primary-outline");
            }
            if (sliderDrag === "to") {
              sliderToThumb.classList.add("scale-150", "text-primary-outline");
            }
            fromPriceElement2.innerHTML = window.formatMoney(priceRange2.from);
            fromPriceInput.value = `${priceRange2.from / 100}`;
            toPriceElement2.innerHTML = window.formatMoney(priceRange2.to);
            toPriceInput.value = `${priceRange2.to / 100}`;
            sliderBar.style.left = `${(priceRange2.from - minPrice2) / minMaxDifference * 100}%`;
            sliderBar.style.width = `${(priceRange2.to - minPrice2) / minMaxDifference * 100 - (priceRange2.from - minPrice2) / minMaxDifference * 100}%`;
            sliderFromThumb.style.left = `${(priceRange2.from - minPrice2) / minMaxDifference * 100}%`;
            sliderToThumb.style.left = `calc(${(priceRange2.to - minPrice2) / minMaxDifference * 100}% - 0.75rem)`;
            if (submitForm && ((_a6 = form == null ? void 0 : form.dataset) == null ? void 0 : _a6.filterAutoApply)) {
              eventHandler();
            }
          },
          setShowFilter: (show) => {
            setState((state) => {
              state.filterContainer.style.maxHeight = show ? `${state.filterHeight}px` : "0";
              state.filterContainer.style.opacity = show ? `1` : "0";
              state.showFilter = show;
            });
            if (show) {
              setTimeout(
                () => {
                  document.addEventListener("click", handleCloseFilterToggle);
                },
                1
              );
            }
            if (!show) {
              document.removeEventListener("click", handleCloseFilterToggle);
            }
          },
          submitForm: (event) => {
          }
        };
      })
    );
    const { getState, setState, subscribe, destroy } = store;
    subscribe((state) => {
      getState().updatePriceSlider(state, true);
    });
    getState().updatePriceSlider(getState());
    const handleSliderClick = /* @__PURE__ */ __name((e3) => {
      if (getState().sliderDrag !== null)
        return;
      const width = getState().slider.offsetWidth;
      const left = e3.clientX - getState().slider.getBoundingClientRect().left;
      const fromLeft = getState().sliderFromThumb.offsetLeft;
      const toLeft = getState().sliderToThumb.offsetLeft;
      if (Math.abs(left - fromLeft) <= Math.abs(left - toLeft)) {
        const newFrom = Math.max(
          (left - 1) / width * getState().minMaxDifference + getState().minPrice,
          getState().minPrice
        );
        getState().setPriceRange({
          from: newFrom * 0.99 < getState().minPrice ? getState().minPrice : Math.round(newFrom / 1e3) * 1e3,
          to: getState().priceRange.to
        });
      }
      if (Math.abs(left - fromLeft) > Math.abs(left - toLeft)) {
        const newTo = Math.min(
          (left + 1) / width * getState().minMaxDifference + getState().minPrice,
          getState().maxPrice
        );
        getState().setPriceRange({
          to: newTo * 1.01 > getState().maxPrice ? getState().maxPrice : Math.round(newTo / 1e3) * 1e3,
          from: getState().priceRange.from
        });
      }
    }, "handleSliderClick");
    const handleSlideFromStart = /* @__PURE__ */ __name((e3) => {
      e3.stopPropagation();
      e3.preventDefault();
      getState().setSliderDrag("from");
      document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
      document.addEventListener("pointermove", handleSlideDrag);
      document.addEventListener("pointerup", handleSlideEnd);
    }, "handleSlideFromStart");
    const handleSlideToStart = /* @__PURE__ */ __name((e3) => {
      e3.stopPropagation();
      e3.preventDefault();
      getState().setSliderDrag("to");
      document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
      document.addEventListener("pointermove", handleSlideDrag);
      document.addEventListener("pointerup", handleSlideEnd);
    }, "handleSlideToStart");
    const handleSlideEnd = /* @__PURE__ */ __name((e3) => {
      e3.stopPropagation();
      e3.preventDefault();
      setTimeout(() => getState().setSliderDrag(null), 1);
      document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
      document.removeEventListener("pointermove", handleSlideDrag);
      document.removeEventListener("pointerup", handleSlideEnd);
    }, "handleSlideEnd");
    const handleSlideDrag = /* @__PURE__ */ __name((e3) => {
      e3.stopPropagation();
      e3.preventDefault();
      const width = getState().slider.offsetWidth;
      const left = e3.clientX - getState().slider.getBoundingClientRect().left;
      const newFrom = Math.min(
        Math.max(
          (left - 1) / width * getState().minMaxDifference + getState().minPrice,
          getState().minPrice
        ),
        getState().priceRange.to - 0.09 * getState().minMaxDifference
      );
      const newTo = Math.min(
        Math.max(
          (left + 1) / width * getState().minMaxDifference + getState().minPrice,
          getState().priceRange.from + 0.09 * getState().minMaxDifference
        ),
        getState().maxPrice
      );
      getState().setPriceRange({
        from: getState().sliderDrag === "from" ? newFrom * 0.99 < getState().minPrice ? getState().minPrice : Math.round(newFrom / 1e3) * 1e3 : getState().priceRange.from,
        to: getState().sliderDrag === "to" ? newTo * 1.01 > getState().maxPrice ? getState().maxPrice : Math.round(newTo / 1e3) * 1e3 : getState().priceRange.to
      });
    }, "handleSlideDrag");
    const handleSliderFromKeydown = /* @__PURE__ */ __name((e3) => {
      if (e3.key === "ArrowRight") {
        const newFrom = Math.min(
          getState().priceRange.from + getState().minMaxDifference / 40,
          getState().priceRange.to - 0.09 * getState().minMaxDifference
        );
        getState().setPriceRange({
          from: newFrom * 0.99 < getState().minPrice ? getState().minPrice : Math.round(newFrom / 1e3) * 1e3,
          to: getState().priceRange.to
        });
      }
      if (e3.key === "ArrowLeft") {
        const newFrom = Math.max(
          getState().priceRange.from - getState().minMaxDifference / 40,
          getState().minPrice
        );
        getState().setPriceRange({
          from: newFrom * 0.99 < getState().minPrice ? getState().minPrice : Math.round(newFrom / 1e3) * 1e3,
          to: getState().priceRange.to
        });
      }
    }, "handleSliderFromKeydown");
    const handleSliderToKeydown = /* @__PURE__ */ __name((e3) => {
      if (e3.key === "ArrowRight") {
        const newTo = Math.min(
          getState().priceRange.to + getState().minMaxDifference / 40,
          getState().maxPrice
        );
        getState().setPriceRange({
          to: newTo * 1.01 > getState().maxPrice ? getState().maxPrice : Math.round(newTo / 1e3) * 1e3,
          from: getState().priceRange.from
        });
      }
      if (e3.key === "ArrowLeft") {
        const newTo = Math.max(
          getState().priceRange.to - getState().minMaxDifference / 40,
          getState().priceRange.from + 0.09 * getState().minMaxDifference
        );
        getState().setPriceRange({
          to: newTo * 1.01 > getState().maxPrice ? getState().maxPrice : Math.round(newTo / 1e3) * 1e3,
          from: getState().priceRange.from
        });
      }
    }, "handleSliderToKeydown");
    const handleCloseFilterToggle = /* @__PURE__ */ __name((e3) => {
      if (!getState().filterContainer.contains(e3.target) && e3.target !== document.body) {
        getState().setShowFilter(false);
      }
    }, "handleCloseFilterToggle");
    const handleFilterToggle = /* @__PURE__ */ __name((e3) => {
      getState().setShowFilter(!getState().showFilter);
    }, "handleFilterToggle");
    (_a5 = getState().slider) == null ? void 0 : _a5.addEventListener("click", handleSliderClick);
    (_b5 = getState().sliderFromThumb) == null ? void 0 : _b5.addEventListener("pointerdown", handleSlideFromStart);
    (_c = getState().sliderFromThumb) == null ? void 0 : _c.addEventListener("keydown", handleSliderFromKeydown);
    (_d = getState().sliderToThumb) == null ? void 0 : _d.addEventListener("pointerdown", handleSlideToStart);
    (_e = getState().sliderToThumb) == null ? void 0 : _e.addEventListener("keydown", handleSliderToKeydown);
    (_f = getState().toggleButton) == null ? void 0 : _f.addEventListener("click", handleFilterToggle);
  }, "initPriceFilter");

  // color-swatches.tsx
  var initColorSwatches = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    var _a5, _b5;
    const colors = (_b5 = JSONParse((_a5 = document.querySelector("[data-color-swatches]")) == null ? void 0 : _a5.innerHTML)) != null ? _b5 : {};
    const swatchStyles = document.createElement("style");
    document.head.append(swatchStyles);
    if (typeof colors === "object" && colors !== null) {
      swatchStyles.innerHTML = `
  :root {
  ${Object.entries(colors).map(([key, value]) => {
        const variable = toKebabCase(key);
        if (/\./gi.test(value) && !/^url\(/gi.test(value)) {
          value = `url(${value})`;
        }
        const color = value.replace(/.([^?.]+)\)$/gi, ".$1?width=32&height=32&crop=center)");
        return `  --color-swatch--${variable}: ${color};`;
      }).join("\n")}
  }`;
    }
    fetch(`${window.routes.asset_url}swatches.json?v=${(/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)}`).then((data) => data.text()).then((data) => {
      var _a6;
      const oldColors = (_a6 = JSONParse(data)) != null ? _a6 : {};
      if (oldColors && typeof oldColors === "object" && "colors" in oldColors && Array.isArray(oldColors.colors)) {
        oldColors.colors.forEach((color) => {
          if (typeof color === "object" && color !== null) {
            Object.entries(color).forEach(([key, value]) => {
              if (typeof value === "string") {
                colors[key] = value;
              }
            });
          }
        });
      }
      if (typeof colors === "object" && colors !== null) {
        swatchStyles.innerHTML = `
:root {
${Object.entries(colors).map(([key, value]) => {
          const variable = toKebabCase(key);
          if (/\./gi.test(value) && !/^url\(/gi.test(value)) {
            if (!/[/\\]/gi.test(value)) {
              value = window.routes.file_url + value;
            }
            value = `url(${value})`;
          }
          const color = value.replace(/.([^?.]+)\)$/gi, ".$1?width=32&height=32&crop=center)");
          return `  --color-swatch--${variable}: ${color};`;
        }).join("\n")}
}`;
      }
    }).catch((e3) => {
      console.log(e3);
    });
  }), "initColorSwatches");

  // drawer-menu.tsx
  var initDrawerMenu = /* @__PURE__ */ __name(() => {
    document.querySelectorAll("[data-drawer-menu]").forEach((blockElement) => {
      blockElement.querySelectorAll("[data-drawer-menu-handle]").forEach((dropdownMenu) => {
        var _a5;
        const handle = dropdownMenu.dataset.drawerMenuHandle;
        const url = dropdownMenu.dataset.drawerMenuUrl;
        const hasLinks = dropdownMenu.dataset.drawerMenuHasLinks === "true";
        const toggle = dropdownMenu.querySelector(`[data-drawer-menu-toggle]`);
        const content = dropdownMenu == null ? void 0 : dropdownMenu.querySelector("[data-drawer-menu-dropdown]");
        const icon = dropdownMenu == null ? void 0 : dropdownMenu.querySelector("[data-drawer-menu-dropdown-icon]");
        const megaMenu = document.querySelector(
          `[data-header-link-megamenu="${handle}"]`
        );
        const megamenuSections = document == null ? void 0 : document.querySelectorAll(
          `[data-megamenu-handle="${handle}"] > section`
        );
        if (megaMenu && ((_a5 = megaMenu == null ? void 0 : megaMenu.dataset) == null ? void 0 : _a5.headerMegamenuVisibility) === "max-md:hidden") {
          return;
        }
        if (!hasLinks && !megamenuSections.length) {
          return;
        }
        if (blockElement.classList.contains("grid-cols-2")) {
          dropdownMenu.classList.add("col-span-2", "order-first");
        }
        if (!handle || !toggle || !content)
          return;
        icon.classList.remove("hidden");
        let neverOpened = true;
        if (megamenuSections.length) {
          let megamenuContent = "";
          megamenuSections.forEach((megamenuSection) => {
            megamenuContent = megamenuContent + megamenuSection.innerHTML;
          });
          content.firstElementChild.innerHTML = megamenuContent;
        }
        toggle.addEventListener("click", (e3) => {
          var _a6;
          if ((_a6 = e3.target) == null ? void 0 : _a6.hasAttribute("data-drawer-menu-view-all")) {
            return;
          }
          e3.preventDefault();
          e3.stopPropagation();
          if (toggle.classList.contains("active")) {
            content.style.maxHeight = "0px";
            toggle.classList.remove("active");
            return;
          }
          if (neverOpened) {
            content.style.maxHeight = `${9999999}px`;
            toggle.classList.add("active");
            neverOpened = false;
            return;
          }
          content.style.maxHeight = `${content.scrollHeight}px`;
          toggle.classList.add("active");
        });
      });
    });
  }, "initDrawerMenu");

  // featured-objects.tsx
  var initFeaturedObjects = /* @__PURE__ */ __name(() => {
    document.querySelectorAll("[data-featured-objects-section]").forEach((section) => {
      const activeTab = { current: 0 };
      const tabButtons = section.querySelectorAll(
        "[data-featured-objects-tab-button]"
      );
      const tabContainer = section.querySelector(
        "[data-featured-objects-tab-container]"
      );
      const grids = section.querySelectorAll("[data-featured-objects-grid]");
      const tabContent = [
        ...section.querySelectorAll("[data-featured-objects-tab-content]")
      ];
      tabButtons.forEach((tabButton) => {
        tabButton.addEventListener("click", () => {
          var _a5, _b5;
          const tabIndex = +tabButton.dataset.featuredObjectsTabButton;
          activeTab.current = tabIndex;
          tabButtons.forEach((tabButton2) => {
            tabButton2.classList.remove("active");
          });
          tabButton.classList.add("active");
          tabContainer.scrollTo((_b5 = (_a5 = tabContent[tabIndex]) == null ? void 0 : _a5.offsetLeft) != null ? _b5 : 0, 0);
        });
      });
      grids.forEach((grid) => {
        const toggleButton = grid.querySelector(
          "[data-featured-objects-show-more-button]"
        );
        if (toggleButton) {
          toggleButton.addEventListener("click", () => {
            grid.classList.toggle("active");
          });
        }
      });
      window.addEventListener("resize", () => {
        var _a5, _b5;
        tabContainer.scrollTo((_b5 = (_a5 = tabContent[activeTab.current]) == null ? void 0 : _a5.offsetLeft) != null ? _b5 : 0, 0);
      });
    });
  }, "initFeaturedObjects");

  // forms.tsx
  var initForms = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-form-type]").forEach((form) => {
      form.addEventListener("submit", (e3) => {
        if (!e3.defaultPrevented) {
          form.classList.add("active");
        }
      });
    });
    document.querySelectorAll("[data-address-select-country]").forEach((select) => {
      const selectId = select.dataset.addressSelectCountry;
      const selectProvince = document.querySelector(
        `[data-address-select-province="${selectId}"]`
      );
      const defaultProvince = selectProvince.dataset.selectValue;
      select.value = select.dataset.selectValue || select.value;
      if (!selectProvince)
        return;
      const handleChange = /* @__PURE__ */ __name(() => {
        var _a5;
        const value = select.value;
        const option = select.querySelector(`option[value="${value}"]`);
        const provinces = JSONParse((_a5 = option == null ? void 0 : option.dataset) == null ? void 0 : _a5.provinces);
        selectProvince.innerHTML = "";
        if (provinces.length) {
          provinces.forEach(([value2, name]) => {
            const option2 = document.createElement("option");
            option2.value = value2;
            option2.innerHTML = name;
            option2.selected = defaultProvince === value2;
            selectProvince.appendChild(option2);
          });
          if (defaultProvince) {
            selectProvince.value = defaultProvince;
          }
          selectProvince.parentElement.classList.remove("hidden");
        }
        if (!provinces.length) {
          selectProvince.parentElement.classList.add("hidden");
        }
      }, "handleChange");
      handleChange();
      select.addEventListener("change", handleChange);
    });
  }), "initForms");

  // use-image-effects.tsx
  init_compat_module();
  function getParentWidth(parent, position) {
    if (position === "absolute") {
      return parent.clientWidth || getParentWidth(parent.parentElement, getComputedStyle(parent).position);
    }
    return parent.clientWidth;
  }
  __name(getParentWidth, "getParentWidth");
  var loaded = [];
  var isOnScreen = /* @__PURE__ */ __name((elem, isParent = false) => {
    if (!(elem instanceof Element)) {
      return false;
    }
    const style = getComputedStyle(elem);
    if (style.display === "none")
      return false;
    if (style.visibility !== "visible")
      return false;
    if (+style.opacity < 0.1)
      return false;
    const { top, height, left, width } = elem.getBoundingClientRect();
    if (top + height < 0 || top > (window.innerHeight || document.documentElement.clientHeight)) {
      return false;
    }
    if (left + width < 0 || left > (window.innerWidth || document.documentElement.clientWidth)) {
      return false;
    }
    if (elem.parentElement) {
      return isOnScreen(elem.parentElement, true);
    }
    return true;
  }, "isOnScreen");
  var useImageEffects = /* @__PURE__ */ __name(() => {
    const [hydrated, setHydrated] = h2(false);
    const loadImages = T2(() => {
      document.querySelectorAll("[data-image]").forEach((imageElement) => {
        const isVisible2 = isOnScreen(imageElement);
        if (isVisible2) {
          loaded.push(imageElement);
          return;
        }
        const loading = imageElement.dataset.image || imageElement.getAttribute("loading");
        if (loading === "eager")
          return;
        const src = imageElement.src.split("&")[0];
        if (!src.includes("shopify.com"))
          return;
        imageElement.removeAttribute("data-image");
        const parent = imageElement.parentElement;
        let width = imageElement.clientWidth;
        if (!width) {
          const position = getComputedStyle(imageElement).position;
          const parentWidth = getParentWidth(parent, position);
          if (parentWidth) {
            width = parentWidth;
          }
        }
        setTimeout(
          () => {
            if (!loaded.includes(imageElement) && !isOnScreen(imageElement)) {
              if (loading === "eager")
                return;
              parent.classList.add("image-parent");
              imageElement.classList.add("image-loading", "image-unloading");
            }
          },
          150
        );
        if ("IntersectionObserver" in window) {
          const observer = new IntersectionObserver((entries, observer2) => __async(void 0, null, function* () {
            for (let i4 = 0; i4 < entries.length; i4++) {
              const entry = entries[i4];
              if (!entry.isIntersecting)
                return;
              observer2.unobserve(imageElement);
              loaded.push(imageElement);
              imageElement.classList.remove("image-loading");
              setTimeout(
                () => {
                  parent.classList.remove("image-parent");
                  imageElement.classList.remove("image-unloading");
                },
                380
              );
            }
          }));
          observer.observe(imageElement);
        }
      });
    }, []);
    p2(() => {
      if (!hydrated) {
        setHydrated(true);
        loadImages();
        setTimeout(loadImages, 800);
        setTimeout(loadImages, 1600);
      }
    }, [hydrated, loadImages]);
  }, "useImageEffects");

  // global-effects.tsx
  init_compat_module();
  init_compat_module();
  var initGlobalEffects = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const root = document.querySelector("[data-global-effects]");
    G(o3(GlobalEffects, {}), root);
  }), "initGlobalEffects");
  var GlobalEffects = /* @__PURE__ */ __name(() => {
    useHeaderScrollEffect();
    useProductStickyScroll();
    useImageEffects();
    return null;
  }, "GlobalEffects");
  function useHeaderScrollEffect() {
    const announcementHeight = _2(document.body.style.getPropertyValue("--announcement-height"));
    const fsBarHeight = _2(document.body.style.getPropertyValue("--free-shipping-bar-height"));
    const handleWindowScroll = T2((e3) => {
      if (window.scrollY > 60) {
        document.body.style.setProperty("--announcement-height", "0px");
        document.body.style.setProperty("--free-shipping-bar-height", "0px");
        document.body.style.setProperty(
          "--top-bar-spacing",
          "calc((var(--header-height, 0px) + var(--announcement-height, 0px) + var(--free-shipping-bar-height, 0px)) * var(--top-bar-spacing-multiplier))"
        );
      }
      if (window.scrollY <= 0) {
        document.body.style.setProperty("--announcement-height", announcementHeight.current);
        document.body.style.setProperty("--free-shipping-bar-height", fsBarHeight.current);
        document.body.style.setProperty(
          "--top-bar-spacing",
          "calc((var(--header-height, 0px) + var(--announcement-height, 0px) + var(--free-shipping-bar-height, 0px)) * var(--top-bar-spacing-multiplier))"
        );
      }
    }, []);
    p2(() => {
      window.addEventListener("scroll", handleWindowScroll);
      return () => {
        window.removeEventListener("scroll", handleWindowScroll);
      };
    }, [handleWindowScroll]);
    return null;
  }
  __name(useHeaderScrollEffect, "useHeaderScrollEffect");
  function useProductStickyScroll() {
    const handleProductStickyScroll = T2((e3) => {
      const gallery = document.querySelector(`[data-product-media-gallery="vertical"]`);
      document.querySelectorAll(`[data-product-sticky-content]`).forEach((stickySide) => {
        if (stickySide && gallery) {
          if (gallery.getBoundingClientRect().bottom - 96 < stickySide.scrollHeight - stickySide.scrollTop) {
            stickySide.style.maxHeight = "unset";
          } else {
            stickySide.style.maxHeight = "";
          }
        }
      });
    }, []);
    p2(() => {
      window.addEventListener("scroll", handleProductStickyScroll);
      return () => {
        window.removeEventListener("scroll", handleProductStickyScroll);
      };
    }, [handleProductStickyScroll]);
    return null;
  }
  __name(useProductStickyScroll, "useProductStickyScroll");

  // header.tsx
  var initHeaderMenu = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const header = document.querySelector(`[data-section="header"]:not([data-initiated])`);
    if (header) {
      initDesktopNav();
      initMobileNav();
    }
  }), "initHeaderMenu");
  function initMobileNav() {
    const mobileNav = document.querySelector("[data-mobile-nav]");
    const menuLinklist = document.querySelectorAll("[data-mobile-menu-dropdown]");
    const menuLinks = document.querySelectorAll("[data-mobile-menu-link]");
    const menuBackButton = document.querySelectorAll("[data-mobile-menu-back]");
    document.addEventListener("nav:closed", () => {
      menuLinklist.forEach((linklist) => {
        const dropdownLevel = +linklist.dataset.mobileMenuLevel;
        linklist.classList.remove("-translate-x-full", "opacity-0");
        if (dropdownLevel > 1) {
          linklist.classList.add("translate-x-full", "opacity-0");
        }
      });
    });
    const handleMenuLinkClick = /* @__PURE__ */ __name((e3) => {
      const handle = e3.currentTarget.dataset.mobileMenuLink;
      const currentHandle = e3.currentTarget.dataset.mobileMenuCurrentDropdown;
      const currentDropdown = mobileNav.querySelector(
        `[data-mobile-menu-dropdown="${currentHandle}"]`
      );
      const dropdown = mobileNav.querySelector(`[data-mobile-menu-dropdown="${handle}"]`);
      if (!dropdown) {
        document.dispatchEvent(new Event("nav:close"));
        return;
      }
      currentDropdown.classList.add("-translate-x-full", "opacity-0");
      dropdown.classList.remove("translate-x-full", "opacity-0");
      e3.preventDefault();
    }, "handleMenuLinkClick");
    const handleMenuBackClick = /* @__PURE__ */ __name((e3) => {
      const prevHandle = e3.currentTarget.dataset.mobileMenuPrevDropdown;
      const currentHandle = e3.currentTarget.dataset.mobileMenuBack;
      const prevMenu = mobileNav.querySelector(`[data-mobile-menu-dropdown="${prevHandle}"]`);
      const currentMenu = mobileNav.querySelector(`[data-mobile-menu-dropdown="${currentHandle}"]`);
      currentMenu.classList.add("translate-x-full", "opacity-0");
      prevMenu.classList.remove("-translate-x-full", "opacity-0");
      e3.preventDefault();
    }, "handleMenuBackClick");
    menuLinks.forEach((link) => {
      link.addEventListener("click", handleMenuLinkClick);
    });
    menuBackButton.forEach((link) => {
      link.addEventListener("click", handleMenuBackClick);
    });
    document.addEventListener("shopify:block:select", (e3) => {
      const megaMenu = e3.target;
      const handle = megaMenu.dataset.mobileMenuDropdown;
      if (handle) {
        const link = document.querySelector(`[data-header-link="${handle}"]`);
        if (!link) {
          megaMenu.classList.remove("translate-x-full", "opacity-0");
          document.dispatchEvent(new Event("nav:open"));
          return;
        }
      }
    });
    document.addEventListener("shopify:block:deselect", (e3) => {
      const megaMenu = e3.target;
      const handle = megaMenu.dataset.mobileMenuDropdown;
      if (handle) {
        const link = document.querySelector(`[data-header-link="${handle}"]`);
        if (!link) {
          document.dispatchEvent(new Event("nav:open"));
          return;
        }
      }
    });
  }
  __name(initMobileNav, "initMobileNav");
  function initDesktopNav() {
    const primaryLinks = document.querySelectorAll("[data-header-link]");
    let navActive = false;
    primaryLinks.forEach((link) => {
      initMenuLink(link);
    });
    function initMenuLink(link) {
      var _a5, _b5;
      const handle = link.dataset.headerLink;
      const dropdownMenu = document.querySelector(
        `[data-header-link-dropdown="${handle}"]`
      );
      const megaMenu = document.querySelector(`[data-header-link-megamenu="${handle}"]`);
      if (dropdownMenu && (!megaMenu || ((_a5 = megaMenu == null ? void 0 : megaMenu.dataset) == null ? void 0 : _a5.headerMegamenuVisibility) === "md:hidden")) {
        initDropdownMenu({ link, dropdownMenu });
      }
      if (megaMenu && ((_b5 = megaMenu == null ? void 0 : megaMenu.dataset) == null ? void 0 : _b5.headerMegamenuVisibility) !== "md:hidden") {
        initMegamenu({ link, megaMenu });
      }
    }
    __name(initMenuLink, "initMenuLink");
    function initDropdownMenu({
      link,
      dropdownMenu
    }) {
      const header = document.querySelector("[data-global-header]");
      let menuOpen = false;
      let menuCloseTimeout = null;
      const handleExit = /* @__PURE__ */ __name((e3) => {
        clearTimeout(menuCloseTimeout);
        navActive = false;
        menuCloseTimeout = setTimeout(
          () => {
            menuOpen = false;
            if (!navActive) {
              header.style.zIndex = "";
            }
            link.removeEventListener("mouseleave", handleExit);
            link.classList.remove("active");
            dropdownMenu.style.opacity = "0";
            dropdownMenu.style.pointerEvents = "none";
            dropdownMenu.removeEventListener("mouseover", handleHover);
            dropdownMenu.removeEventListener("mouseleave", handleExit);
          },
          20
        );
      }, "handleExit");
      const handleHover = /* @__PURE__ */ __name((e3) => __async(this, null, function* () {
        clearTimeout(menuCloseTimeout);
        yield delay(2);
        if (!menuOpen) {
          menuOpen = true;
          navActive = true;
          header.style.zIndex = "1000";
          e3.preventDefault();
          e3.stopPropagation();
          link.classList.add("active");
          dropdownMenu.style.left = `${link.getBoundingClientRect().left}px`;
          dropdownMenu.style.opacity = "1";
          dropdownMenu.style.pointerEvents = "auto";
          link.addEventListener("mouseleave", handleExit);
          dropdownMenu.addEventListener("mouseover", handleHover);
          dropdownMenu.addEventListener("mouseleave", handleExit);
        }
      }), "handleHover");
      link.addEventListener("mouseover", handleHover);
      const handleDocumentClick = /* @__PURE__ */ __name((e3) => {
        if (!menuOpen) {
          document.removeEventListener("click", handleDocumentClick, true);
          dropdownMenu.style.opacity = "0";
          dropdownMenu.style.pointerEvents = "none";
        }
        const outsideClick = !link.contains(e3.target) && !dropdownMenu.contains(e3.target);
        if (outsideClick) {
          e3.preventDefault();
          e3.stopPropagation();
          menuOpen = false;
          navActive = false;
          header.style.zIndex = "";
          document.removeEventListener("click", handleDocumentClick, true);
          dropdownMenu.style.opacity = "0";
          dropdownMenu.style.pointerEvents = "none";
        }
      }, "handleDocumentClick");
      const handleClick = /* @__PURE__ */ __name((e3) => {
        if (!menuOpen && e3.pointerType === "touch") {
          e3.stopPropagation();
          e3.preventDefault();
          menuOpen = true;
          navActive = true;
          header.style.zIndex = "1000";
          link.classList.add("active");
          dropdownMenu.style.left = `${link.getBoundingClientRect().left}px`;
          dropdownMenu.style.opacity = "1";
          dropdownMenu.style.pointerEvents = "auto";
          document.addEventListener("click", handleDocumentClick, true);
        }
      }, "handleClick");
      link.addEventListener("click", handleClick, true);
    }
    __name(initDropdownMenu, "initDropdownMenu");
    function initMegamenu({ link, megaMenu }) {
      const header = document.querySelector("[data-global-header]");
      let menuOpen = false;
      const handle = megaMenu.dataset.headerLinkMegamenu;
      let menuCloseTimeout = null;
      const handleMouseLeave = /* @__PURE__ */ __name((e3) => {
        clearTimeout(menuCloseTimeout);
        navActive = false;
        menuCloseTimeout = setTimeout(
          () => {
            menuOpen = false;
            if (!navActive) {
              header.style.zIndex = "";
            }
            link.classList.remove("active");
            megaMenu.style.opacity = "0";
            megaMenu.style.pointerEvents = "none";
            setTimeout(
              () => {
                megaMenu.style.display = "hidden";
              },
              1
            );
            link.removeEventListener("mouseleave", handleMouseLeave);
            megaMenu.removeEventListener("mouseover", handleMouseOver);
            megaMenu.removeEventListener("mouseleave", handleMouseLeave);
          },
          20
        );
      }, "handleMouseLeave");
      const handleMouseOver = /* @__PURE__ */ __name((e3) => __async(this, null, function* () {
        clearTimeout(menuCloseTimeout);
        yield delay(2);
        if (!menuOpen) {
          menuOpen = true;
          navActive = true;
          e3.preventDefault();
          e3.stopPropagation();
          header.style.zIndex = "1000";
          megaMenu.style.display = "";
          setTimeout(
            () => {
              menuOpen = true;
              navActive = true;
              link.classList.add("active");
              megaMenu.style.opacity = "1";
              megaMenu.style.pointerEvents = "auto";
              link.addEventListener("mouseleave", handleMouseLeave);
              megaMenu.addEventListener("mouseover", handleMouseOver);
              megaMenu.addEventListener("mouseleave", handleMouseLeave);
            },
            1
          );
        }
      }), "handleMouseOver");
      link.addEventListener("mouseover", handleMouseOver);
      const handleDocumentClick = /* @__PURE__ */ __name((e3) => {
        if (!menuOpen) {
          document.removeEventListener("click", handleDocumentClick, true);
          megaMenu.style.opacity = "0";
          megaMenu.style.pointerEvents = "none";
        }
        const outsideClick = !link.contains(e3.target) && !megaMenu.contains(e3.target);
        if (outsideClick) {
          e3.preventDefault();
          e3.stopPropagation();
          menuOpen = false;
          navActive = false;
          header.style.zIndex = "";
          document.removeEventListener("click", handleDocumentClick, true);
          megaMenu.style.opacity = "0";
          megaMenu.style.pointerEvents = "none";
          setTimeout(
            () => {
              megaMenu.style.display = "hidden";
            },
            1
          );
        }
      }, "handleDocumentClick");
      const handleClick = /* @__PURE__ */ __name((e3) => {
        if (!menuOpen && e3.pointerType === "touch") {
          e3.stopPropagation();
          e3.preventDefault();
          menuOpen = true;
          navActive = true;
          header.style.zIndex = "1000";
          link.classList.add("active");
          megaMenu.style.display = "";
          megaMenu.style.opacity = "1";
          megaMenu.style.pointerEvents = "auto";
          document.addEventListener("click", handleDocumentClick, true);
        }
      }, "handleClick");
      document.addEventListener(`megamenu:${handle}:open`, handleMouseOver);
      document.addEventListener(`megamenu:${handle}:close`, handleMouseLeave);
      link.addEventListener("click", handleClick, true);
    }
    __name(initMegamenu, "initMegamenu");
  }
  __name(initDesktopNav, "initDesktopNav");

  // password-input.tsx
  var initPasswordInput = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-password]").forEach((label) => {
      const input = label.querySelector("[data-password-input]");
      const toggle = label.querySelector("[data-password-toggle]");
      toggle.addEventListener("click", (e3) => {
        e3.preventDefault();
        e3.stopPropagation();
        if (input.type === "text") {
          input.type = "password";
        } else {
          input.type = "text";
        }
        toggle.classList.toggle("active");
      });
    });
  }), "initPasswordInput");

  // product-drawer.tsx
  init_preact_module();
  init_compat_module();
  var productSection2 = document.querySelector("[data-product-drawer-product-handle]");
  var _a3, _b3;
  var productHandle2 = (_b3 = (_a3 = productSection2 == null ? void 0 : productSection2.dataset) == null ? void 0 : _a3.productDrawerProductHandle) != null ? _b3 : "";
  var _a4, _b4;
  var formId2 = (_b4 = (_a4 = productSection2 == null ? void 0 : productSection2.dataset) == null ? void 0 : _a4.productDrawerFormId) != null ? _b4 : "";
  var useProductDrawer = create(initProductStore(productSection2, productHandle2, formId2));
  if (productSection2) {
    initProductDrawer();
  }
  function ProductDrawerPreloadEvents({
    useProduct
  }) {
    const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct: getAsyncProduct2, hydrated: hydrated2 }) => ({
      getAsyncProduct: getAsyncProduct2,
      hydrated: hydrated2
    }));
    const productImagesLoaded = _2([]);
    const updateProduct = useProduct((state) => state == null ? void 0 : state.updateProduct);
    p2(() => {
      if (hydrated) {
        document.querySelectorAll("[data-drawer-product]").forEach((productElement) => {
          const productHandle3 = productElement.dataset.drawerProduct;
          const button = productElement.querySelector(
            "[data-product-drawer-add-button]"
          );
          if (!button || (button == null ? void 0 : button.disabled))
            return;
          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries, observer2) => __async(this, null, function* () {
              var _a5, _b5;
              for (let i4 = 0; i4 < entries.length; i4++) {
                const entry = entries[i4];
                if (!entry.isIntersecting)
                  return;
                observer2.unobserve(entry.target);
                const product = yield getAsyncProduct(productHandle3);
                const withImage = (_a5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _a5.src;
                if (withImage && !productImagesLoaded.current.includes(productHandle3)) {
                  productImagesLoaded.current.push(productHandle3);
                  const image = document.createElement("img");
                  image.src = `${(_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.src}&width=180`;
                }
              }
            }));
            observer.observe(productElement);
          }
        });
      }
    }, [hydrated]);
    const handleClick = T2((e3) => {
      var _a5, _b5, _c, _d;
      const disableCartOpen = (_b5 = (_a5 = e3.target.closest("[data-drawer-product]")) == null ? void 0 : _a5.dataset) == null ? void 0 : _b5.productCardNoAutoCart;
      const spinner = e3.currentTarget.querySelector("[data-loading-spinner]");
      spinner.classList.remove("opacity-0");
      const productHandle3 = (_d = (_c = e3.target.closest("[data-product-drawer-add-button]")) == null ? void 0 : _c.dataset) == null ? void 0 : _d.productQuickViewAddButton;
      e3.preventDefault();
      getAsyncProduct(productHandle3).then((p4) => __async(this, null, function* () {
        if (p4) {
          if (p4.variants.length > 1) {
            updateProduct(p4, !disableCartOpen);
            setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
          }
          if (p4.variants.length <= 1) {
            yield cart.add(
              {
                items: [
                  {
                    id: p4.selected_or_first_available_variant.id,
                    quantity: 1
                  }
                ]
              },
              true
            );
          }
        }
        spinner.classList.add("opacity-0");
      })).catch((e4) => {
        spinner.classList.add("opacity-0");
      });
    }, [getAsyncProduct, updateProduct]);
    p2(() => {
      document.querySelectorAll("[data-product-drawer-add-button]").forEach((productDrawerButton) => {
        productDrawerButton.addEventListener("click", handleClick);
      });
      return () => {
        document.querySelectorAll("[data-product-drawer-add-button]").forEach((productDrawerButton) => {
          productDrawerButton.removeEventListener("click", handleClick);
        });
      };
    }, [handleClick]);
    p2(() => {
      const MutationObserver2 = window.MutationObserver || window["WebKitMutationObserver"];
      const mutationObserver = new MutationObserver2((e3) => {
        e3 == null ? void 0 : e3.forEach(
          (record) => record.addedNodes.forEach((node) => __async(this, null, function* () {
            var _a5, _b5, _c;
            if ((_a5 = node == null ? void 0 : node.dataset) == null ? void 0 : _a5.drawerProduct) {
              const productElement = node;
              const productHandle3 = productElement.dataset.drawerProduct;
              const button = productElement.querySelector(
                "[data-product-drawer-add-button]"
              );
              if (!button || (button == null ? void 0 : button.disabled))
                return;
              const product = yield getAsyncProduct(productHandle3);
              const withImage = (_b5 = product == null ? void 0 : product.featured_media) == null ? void 0 : _b5.src;
              if (withImage && !productImagesLoaded.current.includes(productHandle3)) {
                productImagesLoaded.current.push(productHandle3);
                const image = document.createElement("img");
                image.src = `${(_c = product == null ? void 0 : product.featured_media) == null ? void 0 : _c.src}&width=180`;
              }
              button.addEventListener("click", handleClick);
            }
          }))
        );
      });
      if (hydrated) {
        mutationObserver.observe(document.body, { childList: true, subtree: true });
      }
      return () => {
        mutationObserver.disconnect();
      };
    }, [handleClick, hydrated]);
    return null;
  }
  __name(ProductDrawerPreloadEvents, "ProductDrawerPreloadEvents");
  function initProductDrawer() {
    productSection2.querySelectorAll(`[data-product-block]`).forEach((block) => {
      const type = block.dataset.productBlock;
      const settings = block.dataset.blockSettings ? JSONParse(block.dataset.blockSettings) : null;
      switch (type) {
        case "payment_terms": {
          const eventBlock = block.querySelector("[data-product-block-payment-terms-events]");
          B(
            o3(
              PaymentTerms,
              {
                container: block,
                useProduct: useProductDrawer,
                settings
              }
            ),
            eventBlock
          );
          return;
        }
        case "product_sibling":
          return;
        case "popup":
          return;
        case "@app":
          return;
        case "text":
          return;
        case "title":
          block.innerHTML = "";
          B(
            o3(
              ProductTitle,
              {
                useProduct: useProductDrawer,
                settings
              }
            ),
            block
          );
          return;
        case "vendor":
          B(o3(ProductVendor, { useProduct: useProductDrawer }), block);
          return;
        case "description":
          B(
            o3(
              ProductDescription,
              {
                settings,
                useProduct: useProductDrawer
              }
            ),
            block
          );
          return;
        case "share":
          B(o3(ProductShare, { useProduct: useProductDrawer }), block);
          return;
        case "custom_liquid":
          return;
        case "collapsible_tab":
          return;
        case "rating":
          B(o3(ProductRating, { useProduct: useProductDrawer }), block);
          return;
        case "complementary":
          B(
            o3(
              ProductComplementaryItems,
              {
                settings,
                useProduct: useProductDrawer
              }
            ),
            block
          );
          return;
        case "icon_with_text":
          return;
        case "price": {
          block.innerHTML = "";
          B(o3(ProductPrice, { useProduct: useProductDrawer }), block);
          return;
        }
        case "variant_selector": {
          block.innerHTML = "";
          B(
            o3(
              ProductVariantSelector,
              {
                useProduct: useProductDrawer,
                settings
              }
            ),
            block
          );
          return;
        }
        case "sku": {
          block.innerHTML = "";
          B(o3(ProductSku, { useProduct: useProductDrawer }), block);
          return;
        }
        case "quantity_selector": {
          block.innerHTML = "";
          B(o3(ProductQuantitySelector, { useProduct: useProductDrawer }), block);
          return;
        }
        case "buy_buttons": {
          block.innerHTML = "";
          B(
            o3(
              ProductBuyButtons,
              {
                useProduct: useProductDrawer,
                settings
              }
            ),
            block
          );
          return;
        }
        case "dynamic_buy_buttons": {
          const eventBlock = block.querySelector("[data-product-block-dynamic-button-events]");
          B(
            o3(
              DynamicProductBuyButtons,
              {
                container: block,
                useProduct: useProductDrawer,
                settings
              }
            ),
            eventBlock
          );
          return;
        }
        case "inventory": {
          block.innerHTML = "";
          B(
            o3(
              ProductInventorySlider,
              {
                settings,
                useProduct: useProductDrawer
              }
            ),
            block
          );
          return;
        }
        case "image": {
          block.innerHTML = "";
          B(
            o3(
              ProductImage,
              {
                settings,
                useProduct: useProductDrawer
              }
            ),
            block
          );
          return;
        }
        case "side_effects": {
          block.innerHTML = "";
          B(
            o3(
              ProductSideEffects,
              {
                useProduct: useProductDrawer,
                productSection: productSection2,
                cartDrawer: true
              }
            ),
            block
          );
          return;
        }
        case "preload_products": {
          block.innerHTML = "";
          B(o3(ProductDrawerPreloadEvents, { useProduct: useProductDrawer }), block);
          return;
        }
        case "pre_order": {
          block.innerHTML = "";
          B(
            o3(
              ProductPreOrder,
              {
                settings,
                useProduct: useProductDrawer
              }
            ),
            block
          );
          return;
        }
      }
    });
  }
  __name(initProductDrawer, "initProductDrawer");

  // products-scrollable.tsx
  init_compat_module();
  init_compat_module();
  var ProductsScrollableRecentlyViewed = /* @__PURE__ */ __name(({ shopifySection, settings }) => {
    var _a5;
    const [recentlyViewedProducts, setRecentlyViewedProducts] = h2([]);
    const { recentlyViewed, hydrated, currentProductHandle, getProduct } = useGlobalProducts(
      ({ recentlyViewed: recentlyViewed2, hydrated: hydrated2, currentProductHandle: currentProductHandle2, getProduct: getProduct2 }) => ({
        recentlyViewed: recentlyViewed2,
        hydrated: hydrated2,
        currentProductHandle: currentProductHandle2,
        getProduct: getProduct2
      })
    );
    const getRecentlyViewedProducts = T2(() => {
      const currentProducts = recentlyViewed == null ? void 0 : recentlyViewed.filter((handle) => {
        const product = getProduct(handle);
        if (!product || product.hidden) {
          return false;
        }
        if (settings.hide_out_of_stock) {
          return `${handle}` !== `${currentProductHandle}` && product.available;
        }
        return `${handle}` !== `${currentProductHandle}`;
      }).map((handle) => getProduct(handle)).slice(0, +settings.product_limit);
      setRecentlyViewedProducts(currentProducts);
      if (currentProducts.length) {
        shopifySection.style.setProperty("--scrollable-display", "block");
      } else {
        shopifySection.style.setProperty("--scrollable-display", "none");
      }
    }, [currentProductHandle, recentlyViewed, settings.hide_out_of_stock, settings.product_limit]);
    p2(() => {
      if (hydrated && recentlyViewed.length) {
        getRecentlyViewedProducts();
      }
    }, [getRecentlyViewedProducts, hydrated, recentlyViewed.length]);
    return o3(_, { children: recentlyViewedProducts.length ? o3(
      ScrollContainer,
      {
        count: (_a5 = recentlyViewedProducts == null ? void 0 : recentlyViewedProducts.length) != null ? _a5 : 0,
        containerOverflow: settings.container_overflow,
        centerItems: settings.center_products,
        children: recentlyViewedProducts.map((product) => {
          return o3(
            ProductCardContainer,
            {
              product,
              className: "w-[calc(100vw/2)] min-w-[180px] md:w-[calc(var(--layout-page-width)/4)]"
            },
            product.id
          );
        })
      }
    ) : null });
  }, "ProductsScrollableRecentlyViewed");
  var ProductsScrollableRecommended = /* @__PURE__ */ __name(({ shopifySection, settings, productId }) => {
    var _a5;
    const [relatedProducts, setRelatedProducts] = h2([]);
    const { setProducts } = useGlobalProducts(({ setProducts: setProducts2 }) => ({ setProducts: setProducts2 }));
    const getRelatedProducts = T2(() => __async(void 0, null, function* () {
      const products = yield fetch(
        `${window.Shopify.routes.root}recommendations/products?product_id=${productId}&section_id=product-recommendations&limit=6&intent=${settings.product_source}`
      ).then((content) => content.text()).then((htmlString) => {
        var _a6, _b5, _c;
        const dataElement = document.createElement("div");
        dataElement.innerHTML = htmlString;
        return (_c = (_b5 = JSONParse(
          (_a6 = dataElement.querySelector("script")) == null ? void 0 : _a6.innerHTML
        )) == null ? void 0 : _b5.products) != null ? _c : [];
      });
      setProducts(products);
      setRelatedProducts(
        products.map((product) => window.transformProducts(product)).filter((product) => !product.hidden)
      );
    }), [productId, settings.product_source]);
    p2(() => {
      if (!relatedProducts.length) {
        getRelatedProducts();
      }
    }, [getRelatedProducts, relatedProducts.length]);
    p2(() => {
      if (relatedProducts.length) {
        shopifySection.style.setProperty("--scrollable-display", "block");
      }
    }, [relatedProducts.length, shopifySection.style]);
    return o3(_, { children: relatedProducts.length ? o3(
      ScrollContainer,
      {
        count: (_a5 = relatedProducts == null ? void 0 : relatedProducts.length) != null ? _a5 : 0,
        containerOverflow: settings.container_overflow,
        centerItems: settings.center_products,
        children: relatedProducts.slice(0, settings.product_limit).map((product) => {
          return o3(
            ProductCardContainer,
            {
              product: window.transformProducts(product),
              className: "w-[calc(100vw/2)] min-w-[180px] md:w-[calc(var(--layout-page-width)/4)]"
            },
            product.id
          );
        })
      }
    ) : null });
  }, "ProductsScrollableRecommended");
  var initProductsScrollable = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-products-scrollable-recently-viewed]").forEach((container) => {
      const settings = JSONParse(
        container.dataset.productsScrollableRecentlyViewed
      );
      G(
        o3(
          ProductsScrollableRecentlyViewed,
          {
            shopifySection: container.closest(".shopify-section"),
            settings
          }
        ),
        container
      );
    });
    document.querySelectorAll("[data-products-scrollable-recommended]").forEach((container) => {
      const settings = JSONParse(
        container.dataset.productsScrollableRecommended
      );
      const productId = container.dataset.productsScrollableProductId;
      G(
        o3(
          ProductsScrollableRecommended,
          {
            shopifySection: container.closest(".shopify-section"),
            settings,
            productId
          }
        ),
        container
      );
    });
  }), "initProductsScrollable");

  // scroll-slider.tsx
  var initScrollSlider = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const sliders = document.querySelectorAll(
      "[data-scroll-slider]:not([data-initiated])"
    );
    sliders.forEach((slider) => {
      slider.setAttribute("data-initiated", "");
      initSlider(slider);
    });
  }), "initScrollSlider");
  function initSlider(slider, reset = false) {
    const scrollContainer = slider.querySelector("[data-scroll-container]");
    const scrollItems = slider.querySelectorAll("[data-scroll-item]");
    const scrollControls = slider.querySelector("[data-scroll-controls]");
    const prevButton = slider.querySelector("[data-scroll-prev]");
    const nextButton = slider.querySelector("[data-scroll-next]");
    const scrollBar = slider.querySelector("[data-scroll-bar]");
    const scrollBarThumb = slider.querySelector("[data-scroll-bar-thumb]");
    const scrollBarCountCurrent = slider.querySelector(
      "[data-scroll-count-current]"
    );
    const scrollBarCountTotal = slider.querySelector("[data-scroll-count-total]");
    const scrollTabButtons = slider.querySelectorAll("[data-scroll-tab-button]");
    let manualScroll = false;
    if (!scrollContainer || scrollItems.length === 0)
      return;
    const updateNavButtons = /* @__PURE__ */ __name(() => {
      if (prevButton && nextButton) {
        const { clientWidth, scrollWidth, scrollLeft } = scrollContainer;
        prevButton.style.opacity = scrollLeft > 0 ? "1" : "0";
        prevButton.style.pointerEvents = scrollLeft > 0 ? "inherit" : "none";
        nextButton.style.opacity = scrollLeft < scrollWidth - clientWidth - 1 ? "1" : "0";
        nextButton.style.pointerEvents = scrollLeft < scrollWidth - clientWidth - 1 ? "inherit" : "none";
      }
    }, "updateNavButtons");
    const updateTabButtons = /* @__PURE__ */ __name(() => {
      scrollTabButtons.forEach((button) => {
        const { left: containerLeft } = scrollContainer.getBoundingClientRect();
        const { paddingLeft } = getComputedStyle(scrollContainer);
        const basePosition = +paddingLeft.replace("px", "");
        const currentItemIndex = [...scrollItems].findIndex((element) => {
          const { left, width } = element.getBoundingClientRect();
          const itemLeft = left - containerLeft - 5;
          const itemRight = itemLeft + width + 5;
          return itemLeft <= basePosition && itemRight >= basePosition;
        });
        const buttonIndex = +button.dataset.scrollTabButton;
        if (currentItemIndex === buttonIndex) {
          button.classList.add("active");
        }
        if (currentItemIndex !== buttonIndex) {
          button.classList.remove("active");
        }
      });
    }, "updateTabButtons");
    const scrollToIndex = /* @__PURE__ */ __name((index) => {
      if (manualScroll)
        return;
      const { left: containerLeft } = scrollContainer.getBoundingClientRect();
      const { paddingLeft } = getComputedStyle(scrollContainer);
      const basePosition = +paddingLeft.replace("px", "");
      const currentItemIndex = [...scrollItems].findIndex((element) => {
        const { left, width } = element.getBoundingClientRect();
        const itemLeft = left - containerLeft - 5;
        const itemRight = itemLeft + width + 5;
        return itemLeft <= basePosition && itemRight >= basePosition;
      });
      scrollContainer.classList.remove("snap-x");
      manualScroll = true;
      const { offsetLeft } = [...scrollItems][Math.min(Math.max(currentItemIndex + index, 0), scrollItems.length)];
      scrollToX(200, offsetLeft - basePosition, scrollContainer, () => {
        scrollContainer.classList.add("snap-x");
        manualScroll = false;
        updateNavButtons();
        updateTabButtons();
      });
    }, "scrollToIndex");
    const scrollToFixedIndex = /* @__PURE__ */ __name((index) => {
      if (manualScroll)
        return;
      const { left: containerLeft } = scrollContainer.getBoundingClientRect();
      const { paddingLeft } = getComputedStyle(scrollContainer);
      const basePosition = +paddingLeft.replace("px", "");
      scrollContainer.classList.remove("snap-x", "snap-mandatory");
      manualScroll = true;
      const { offsetLeft } = [...scrollItems][Math.min(Math.max(index, 0), scrollItems.length)];
      scrollToX(200, offsetLeft - basePosition, scrollContainer, () => {
        scrollContainer.classList.add("snap-x", "snap-mandatory");
        manualScroll = false;
        updateNavButtons();
        updateTabButtons();
      });
    }, "scrollToFixedIndex");
    const handleClickPrev = /* @__PURE__ */ __name((e3) => {
      scrollToIndex(-1);
    }, "handleClickPrev");
    const handleClickNext = /* @__PURE__ */ __name((e3) => {
      scrollToIndex(1);
    }, "handleClickNext");
    const handleClickTabButton = /* @__PURE__ */ __name((e3) => {
      const scrollIndex = +e3.currentTarget.dataset.scrollTabButton;
      scrollToFixedIndex(scrollIndex);
    }, "handleClickTabButton");
    const handleScroll = /* @__PURE__ */ __name((e3) => {
      if (manualScroll)
        return;
      updateNavButtons();
      updateTabButtons();
    }, "handleScroll");
    let pointerPosition = { startX: null, startLeft: 0 };
    let scrollbarProps = { width: 0, left: 0 };
    const handleScrollBarScrollEvent = /* @__PURE__ */ __name(() => {
      const scrollbarElement = scrollBar;
      if (!scrollbarElement)
        return;
      const containerWidth = scrollbarElement.offsetWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX === null && window.innerWidth) {
        scrollbarProps = {
          width: scrollContainer.offsetWidth / scrollWidth,
          left: scrollLeft / scrollWidth * containerWidth
        };
        if (scrollBarThumb) {
          scrollBarThumb.style.width = `${scrollContainer.offsetWidth / scrollWidth * 100}%`;
          scrollBarThumb.style.transform = `translateY(-50%) translateX(${scrollLeft / scrollWidth * containerWidth}px)`;
        }
        const thumbWidth = scrollBar.offsetWidth * (scrollContainer.offsetWidth / scrollWidth);
        const scrollPercentage = scrollLeft / scrollWidth * containerWidth / (scrollBar.offsetWidth - thumbWidth);
        const scrollCount = Math.max(1, Math.floor(1 + (scrollPercentage * scrollItems.length - 0.05))) || 1;
        if (scrollBarCountCurrent && scrollBarCountTotal) {
          scrollBarCountCurrent.innerHTML = `${scrollCount}`;
          scrollBarCountTotal.innerHTML = `${scrollItems.length}`;
        }
      }
    }, "handleScrollBarScrollEvent");
    const handleScrollBarPointerDown = /* @__PURE__ */ __name((e3) => {
      if (pointerPosition.startX === null) {
        e3.preventDefault();
        e3.stopPropagation();
        pointerPosition = { startX: e3.clientX, startLeft: scrollbarProps.left };
        document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
        scrollContainer.classList.remove("snap-mandatory", "snap-x");
        document.addEventListener("pointerup", handleScrollBarPointerUp);
        document.addEventListener("pointermove", handleScrollBarPointerMove);
      }
    }, "handleScrollBarPointerDown");
    const handleScrollBarPointerMove = /* @__PURE__ */ __name((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      const containerWidth = scrollBar.offsetWidth;
      const { scrollWidth, scrollLeft } = scrollContainer;
      if (pointerPosition.startX !== null) {
        const innerWidth = scrollContainer.offsetWidth - +getComputedStyle(scrollContainer, null).paddingLeft.replace("px", "") - +getComputedStyle(scrollContainer, null).paddingRight.replace("px", "");
        const left = Math.min(
          Math.max(0, pointerPosition.startLeft + e3.clientX - pointerPosition.startX),
          containerWidth - innerWidth / scrollWidth * containerWidth
        );
        scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
        scrollbarProps = {
          width: scrollContainer.offsetWidth / scrollWidth,
          left: scrollLeft / scrollWidth * containerWidth
        };
        if (scrollBarThumb) {
          scrollBarThumb.style.width = `${scrollContainer.offsetWidth / scrollWidth * 100}%`;
          scrollBarThumb.style.transform = `translateY(-50%) translateX(${scrollLeft / scrollWidth * containerWidth}px)`;
        }
        const thumbWidth = scrollBar.offsetWidth * (scrollContainer.offsetWidth / scrollWidth);
        const scrollPercentage = scrollLeft / scrollWidth * containerWidth / (scrollBar.offsetWidth - thumbWidth);
        const scrollCount = Math.max(1, Math.floor(1 + (scrollPercentage * scrollItems.length - 0.05))) || 1;
        if (scrollBarCountCurrent && scrollBarCountTotal) {
          scrollBarCountCurrent.innerHTML = `${scrollCount}`;
          scrollBarCountTotal.innerHTML = `${scrollItems.length}`;
        }
      }
    }, "handleScrollBarPointerMove");
    const handleScrollBarPointerUp = /* @__PURE__ */ __name((e3) => {
      if (pointerPosition.startX !== null) {
        e3.preventDefault();
        e3.stopPropagation();
        pointerPosition = { startX: null, startLeft: scrollbarProps.left };
        document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
        scrollContainer.classList.add("snap-mandatory", "snap-x");
        document.removeEventListener("pointerup", handleScrollBarPointerUp);
        document.removeEventListener("pointermove", handleScrollBarPointerMove);
      }
    }, "handleScrollBarPointerUp");
    const handleScrollBarClick = /* @__PURE__ */ __name((e3) => {
      if (pointerPosition.startX === null) {
        const containerWidth = scrollBar.offsetWidth;
        const { scrollWidth } = scrollContainer;
        const thumbWidth = containerWidth / scrollWidth;
        const clickPosition = e3.clientX - scrollBar.getBoundingClientRect().left;
        const positionPercentage = clickPosition / containerWidth;
        const left = Math.min(
          Math.max(
            0,
            containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
          ),
          containerWidth - containerWidth / scrollWidth * containerWidth
        );
        scrollContainer.scrollTo({
          left: left / containerWidth * scrollWidth,
          // @ts-ignore
          behavior: "instant"
        });
      }
    }, "handleScrollBarClick");
    const stopPropagation = /* @__PURE__ */ __name((e3) => e3.stopPropagation(), "stopPropagation");
    const handleResize2 = /* @__PURE__ */ __name((e3, unmount = false) => __async(this, null, function* () {
      const { clientWidth, scrollWidth, scrollLeft } = scrollContainer;
      const sliderId = slider.dataset.scrollSlider;
      const removeEventListeners = /* @__PURE__ */ __name(() => {
        scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", handleScrollBarScrollEvent);
        scrollBarThumb == null ? void 0 : scrollBarThumb.removeEventListener("pointerdown", handleScrollBarPointerDown);
        scrollBarThumb == null ? void 0 : scrollBarThumb.removeEventListener("click", stopPropagation);
        scrollBar == null ? void 0 : scrollBar.removeEventListener("click", handleScrollBarClick);
        prevButton == null ? void 0 : prevButton.removeEventListener("click", handleClickPrev);
        nextButton == null ? void 0 : nextButton.removeEventListener("click", handleClickNext);
        scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", handleScroll);
        scrollTabButtons.forEach((button) => {
          button == null ? void 0 : button.removeEventListener("click", handleClickTabButton);
        });
        document.removeEventListener(`${sliderId}:unmount`, removeEventListeners);
      }, "removeEventListeners");
      if (sliderId) {
        document.addEventListener(`${sliderId}:unmount`, removeEventListeners);
      }
      if (scrollWidth <= clientWidth) {
        if (scrollControls) {
          scrollControls.classList.add("hidden");
          scrollContainer.classList.remove("scrollbar-none");
        }
      }
      if (scrollWidth > clientWidth && scrollBar && scrollBarThumb) {
        scrollContainer.addEventListener("scroll", handleScrollBarScrollEvent);
        scrollBarThumb.addEventListener("pointerdown", handleScrollBarPointerDown);
        scrollBarThumb.addEventListener("click", stopPropagation);
        scrollBar.addEventListener("click", handleScrollBarClick);
        handleScrollBarScrollEvent();
      }
      if (scrollWidth > clientWidth) {
        if (scrollControls) {
          scrollControls.classList.remove("hidden");
          scrollContainer.classList.add("scrollbar-none");
        }
        slider.classList.add("relative");
        scrollContainer.classList.add("relative");
        updateNavButtons();
        updateTabButtons();
        if (prevButton && nextButton) {
          prevButton.addEventListener("click", handleClickPrev);
          nextButton.addEventListener("click", handleClickNext);
        }
        scrollTabButtons.forEach((button) => {
          button.addEventListener("click", handleClickTabButton);
        });
        scrollContainer.addEventListener("scroll", handleScroll);
      }
    }), "handleResize");
    window.addEventListener("resize", handleResize2);
    handleResize2();
  }
  __name(initSlider, "initSlider");

  // search.tsx
  init_compat_module();
  init_preact_module();
  var initSearch = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const searchContent = document.querySelector(
      '[data-drawer="search"] [data-search-root]'
    );
    const settings = JSONParse(searchContent.dataset.searchRoot);
    const blocks = JSONParse(
      searchContent.dataset.searchBlocks
    );
    const searchTerms = JSONParse(searchContent.dataset.searchDefaultValue);
    if (settings) {
      B(o3(Search, { settings, searchTerms, blocks }), searchContent);
    }
    const pageForm = document.querySelector("[data-search-types-form]");
    pageForm == null ? void 0 : pageForm.addEventListener("submit", (e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      window.location.href = `${window.location.href.split("?")[0]}?${new URLSearchParams(
        Object.entries(serializeFormWithGroups(pageForm)).map(([key, value]) => [
          key,
          value.join(",")
        ])
      ).toString()}`;
    });
  }), "initSearch");
  var Search = /* @__PURE__ */ __name(({ blocks, settings, searchTerms }) => {
    const [upsellProducts, setUpsellProducts] = h2([]);
    const [searchInput, setSearchInput] = h2(searchTerms != null ? searchTerms : "");
    const [searchResults, setSearchResults] = h2({
      loading: false,
      showResults: false,
      count: 0,
      products: [],
      collections: [],
      articles: [],
      pages: [],
      types: [],
      terms: searchTerms
    });
    const { getProduct, hydrated, getAsyncProduct } = useGlobalProducts(
      ({ getProduct: getProduct2, hydrated: hydrated2, getAsyncProduct: getAsyncProduct2 }) => ({
        getProduct: getProduct2,
        getAsyncProduct: getAsyncProduct2,
        hydrated: hydrated2
      })
    );
    const handleClose = T2(() => {
      document.dispatchEvent(new Event("search:close"));
    }, []);
    const handleChange = T2((e3) => {
      e3.stopPropagation();
      e3.preventDefault();
      setSearchInput(e3.target.value);
      console.log(window.location.href);
      const otherQueryParams = window.location.search.split(/[?&]/gi).filter((param) => param && !/^q=/gi.test(param));
      window.history.replaceState(
        null,
        null,
        `?q=${e3.target.value}${otherQueryParams.map((param) => `&${param}`).join("")}`
      );
      setSearchResults((current) => __spreadProps(__spreadValues({}, current), { loading: true }));
    }, []);
    const searchTypes = [
      settings.search_products ? "product" : null,
      settings.search_articles ? "article" : null,
      settings.search_pages ? "page" : null
    ].filter(Boolean).join(",");
    const preloadSearch = T2(() => __async(void 0, null, function* () {
      var _a5;
      if (searchInput) {
        const data = yield fetch(
          `${window.Shopify.routes.root}search/suggest?q=${searchInput}&resources[type]=product&resources[limit]=${5}&section_id=predictive-search`
        );
        const content = yield data.text();
        const dataElement = document.createElement("div");
        dataElement.innerHTML = content;
        const searchData = JSONParse((_a5 = dataElement == null ? void 0 : dataElement.querySelector("script")) == null ? void 0 : _a5.innerHTML);
        if (searchData) {
          setSearchResults(__spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, searchData), {
            products: searchData.products.map((product) => window.transformProducts(product)).filter((product) => !product.hidden)
          })), {
            showResults: true,
            loading: false
          }));
        }
      }
      setSearchResults((current) => __spreadProps(__spreadValues({}, current), { loading: false }));
      if (!searchInput) {
        setSearchResults((current) => __spreadProps(__spreadValues({}, current), { products: [], loading: false }));
      }
    }), [searchInput]);
    p2(() => {
      const productBlock = blocks.find(
        (block) => "products" in block && (block == null ? void 0 : block.products.length)
      );
      if (hydrated && productBlock && upsellProducts.filter(Boolean).length < (productBlock == null ? void 0 : productBlock.products.length)) {
        productBlock == null ? void 0 : productBlock.products.forEach((handle, index) => {
          getAsyncProduct(handle).then(
            (product) => setUpsellProducts((prev) => {
              prev[index] = product;
              return [...prev];
            })
          );
        });
      }
    }, [blocks, upsellProducts, hydrated]);
    useDebouncedEffect(
      () => {
        preloadSearch();
      },
      900,
      [searchInput]
    );
    const handleSubmit = T2((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      window.location.href = `/search?q=${searchInput}&type=${searchTypes}`;
      setSearchResults((current) => __spreadProps(__spreadValues({}, current), { loading: true }));
    }, [searchInput, searchTypes]);
    return o3("div", { className: "relative bg-theme-bg group-ac:pointer-events-auto", children: [
      o3("header", { className: "container-bg-full relative z-10 flex h-[--header-height] min-h-[80px] items-center justify-between gap-4 bg-theme-bg py-2 text-theme-text", children: [
        o3(
          "form",
          {
            method: "get",
            className: "flex-1",
            role: "search",
            onSubmit: handleSubmit,
            id: "header-search-form",
            children: o3("label", { className: "flex w-full items-center gap-4", children: [
              o3(SearchIcon, { className: "h-5 w-5" }),
              o3(
                "input",
                {
                  type: "text",
                  value: searchInput,
                  onChange: handleChange,
                  "data-search-input-focus": "",
                  placeholder: settings.placeholder,
                  className: "w-full py-2 text-base outline-none placeholder:pl-1 placeholder:text-theme-text/50 hf:outline-none"
                }
              ),
              o3("span", { className: "sr-only", children: "Search" }),
              o3(
                "button",
                {
                  type: "submit",
                  className: "absolute right-3 top-1/2 flex -translate-y-1/2 appearance-none",
                  children: o3("span", { className: "sr-only", children: "Search" })
                }
              )
            ] })
          }
        ),
        o3("div", { className: "flex justify-end", children: o3("button", { type: "button", onClick: handleClose, children: [
          o3("span", { className: "sr-only", children: "Close Search" }),
          o3(CloseIcon, { className: "h-6 w-6" })
        ] }) })
      ] }),
      o3("div", { className: "container-bg-full", children: o3("hr", { className: "container border-t border-t-gray-200" }) }),
      o3("div", { className: "scrollbar-none absolute inset-x-0 top-full max-h-[calc(100vh-var(--header-height)-4rem)] w-full -translate-y-full overflow-y-scroll bg-theme-bg shadow-md transition-all delay-300 duration-300 group-ac:translate-y-0", children: [
        " ",
        o3(
          "main",
          {
            className: clsx_m_default(
              "container-bg-full relative grid gap-16 overflow-hidden bg-theme-bg pb-14 pt-10 text-theme-text lg:flex"
            ),
            children: [
              blocks.some((block) => "products" in block) ? o3(_, { children: blocks.map((block, index, arr) => {
                const productBlock = "products" in block && upsellProducts.filter(Boolean).length >= (block == null ? void 0 : block.products.length) ? block : null;
                const collectionBlock = "collections" in block && (block == null ? void 0 : block.collections.length) ? block : null;
                if (productBlock) {
                  return o3("section", { className: "flex-1", children: [
                    searchResults.products.length || searchInput && !searchResults.loading ? o3("header", { className: "flex w-full items-baseline justify-between border-b border-b-gray-300 pb-3.5", children: [
                      o3("div", { className: "flex items-baseline gap-4", children: o3(
                        Typography,
                        {
                          fontType: settings.search_results_title_font,
                          children: settings.search_results_title
                        }
                      ) }),
                      o3(
                        "button",
                        {
                          type: "submit",
                          className: "hf:underline",
                          form: "header-search-form",
                          children: "View all"
                        }
                      )
                    ] }) : o3("header", { className: "flex items-baseline justify-between border-b border-b-gray-300 pb-3.5", children: [
                      o3(Typography, { fontType: block == null ? void 0 : block.title_font, children: block == null ? void 0 : block.title }),
                      (block == null ? void 0 : block.url) ? o3("a", { href: block == null ? void 0 : block.url, className: "hf:underline", children: "View all" }) : null
                    ] }),
                    o3(
                      "main",
                      {
                        className: clsx_m_default(
                          "mt-9 grid w-full max-w-full flex-1 grid-cols-[--grid-cols-sm] gap-4 md:grid-cols-[--grid-cols-md] md:gap-8 xl:grid-cols-[--grid-cols] max-md:[&>:nth-child(n+3)]:hidden max-xl:[&>:nth-child(n+4)]:hidden",
                          (searchResults.products.length ? searchResults.products.length : upsellProducts.length) >= 3 && "justify-between"
                        ),
                        style: {
                          "--grid-cols": `repeat(${Math.min(
                            searchResults.products.length ? searchResults.products.length : upsellProducts.length
                          )}, minmax(130px, 280px))`,
                          "--grid-cols-md": `repeat(${Math.min(
                            searchResults.products.length ? searchResults.products.length : upsellProducts.length,
                            3
                          )}, minmax(130px, 280px))`,
                          "--grid-cols-sm": `repeat(${Math.min(
                            searchResults.products.length ? searchResults.products.length : upsellProducts.length,
                            2
                          )}, minmax(130px, 280px))`
                        },
                        children: [
                          ((searchResults == null ? void 0 : searchResults.products.length) || searchInput && !searchResults.loading ? searchResults.products : upsellProducts).map((product) => o3("div", { className: "grid", children: o3(
                            ProductCardContainer,
                            {
                              product: window.transformProducts(product),
                              className: "w-full flex-1"
                            }
                          ) }, product.id)),
                          !searchResults.loading && searchInput && (searchResults == null ? void 0 : searchResults.products.length) === 0 ? o3(
                            Typography,
                            {
                              fontType: settings.search_results_empty_font,
                              children: settings.search_results_empty
                            }
                          ) : null
                        ]
                      }
                    )
                  ] }, index);
                }
                if (collectionBlock) {
                  return o3("section", { className: "sm:min-w-[330px]", children: [
                    o3("header", { className: "flex items-baseline justify-between border-b border-b-gray-300 pb-3.5", children: [
                      o3(Typography, { fontType: block == null ? void 0 : block.title_font, children: block == null ? void 0 : block.title }),
                      (block == null ? void 0 : block.url) ? o3("a", { href: block == null ? void 0 : block.url, className: "hf:underline", children: "View all" }) : null
                    ] }),
                    o3("main", { className: "mt-9 grid gap-6 ", children: collectionBlock == null ? void 0 : collectionBlock.collections.map((collection) => {
                      var _a5, _b5, _c;
                      return o3(
                        "a",
                        {
                          href: `/collections/${collection.handle}`,
                          className: "flex items-center gap-4 hf:underline",
                          children: [
                            o3("picture", { className: "relative h-12 w-12 overflow-hidden rounded-theme-sm bg-theme-text/10", children: o3(
                              Image2,
                              {
                                src: (_a5 = collection == null ? void 0 : collection.image) == null ? void 0 : _a5.src,
                                alt: collection.title,
                                width: Math.ceil(
                                  48 * (((_b5 = collection == null ? void 0 : collection.image) == null ? void 0 : _b5.width) / ((_c = collection == null ? void 0 : collection.image) == null ? void 0 : _c.height))
                                ),
                                height: 48,
                                className: "h-full w-full object-cover object-center"
                              }
                            ) }),
                            o3("div", { className: "megamenu-link", children: collection.title })
                          ]
                        },
                        collection.id
                      );
                    }) })
                  ] }, index);
                }
                return null;
              }) }) : o3(_, { children: [
                o3("section", { className: "flex-1", children: [
                  o3("header", { className: "flex w-full items-baseline justify-between border-b border-b-gray-300 pb-3.5", children: [
                    o3("div", { className: "flex items-baseline gap-4", children: o3(Typography, { fontType: settings.search_results_title_font, children: settings.search_results_title }) }),
                    o3("button", { type: "submit", className: "hf:underline", form: "header-search-form", children: "View all" })
                  ] }),
                  o3(
                    "main",
                    {
                      className: clsx_m_default(
                        "mt-9 grid w-full max-w-full flex-1 grid-cols-[--grid-cols-sm] gap-4 md:grid-cols-[--grid-cols-md] md:gap-8 xl:grid-cols-[--grid-cols] max-md:[&>:nth-child(n+3)]:hidden max-xl:[&>:nth-child(n+4)]:hidden",
                        (searchResults.products.length ? searchResults.products.length : upsellProducts.length) >= 3 && "justify-between"
                      ),
                      style: {
                        "--grid-cols": `repeat(${Math.min(
                          searchResults.products.length ? searchResults.products.length : upsellProducts.length
                        )}, minmax(130px, 280px))`,
                        "--grid-cols-md": `repeat(${Math.min(
                          searchResults.products.length ? searchResults.products.length : upsellProducts.length,
                          3
                        )}, minmax(130px, 280px))`,
                        "--grid-cols-sm": `repeat(${Math.min(
                          searchResults.products.length ? searchResults.products.length : upsellProducts.length,
                          2
                        )}, minmax(130px, 280px))`
                      },
                      children: [
                        searchResults == null ? void 0 : searchResults.products.map((product) => o3("div", { className: "grid", children: o3(
                          ProductCardContainer,
                          {
                            product: window.transformProducts(product),
                            className: "w-full flex-1"
                          }
                        ) }, product.id)),
                        !searchResults.loading && searchInput ? o3(Typography, { fontType: settings.search_results_empty_font, children: settings.search_results_empty }) : null
                      ]
                    }
                  )
                ] }),
                blocks.map((block, index, arr) => {
                  var _a5;
                  const collectionBlock = "collections" in block && (block == null ? void 0 : block.collections.length) ? block : null;
                  if (collectionBlock) {
                    return o3("section", { className: "sm:min-w-[330px]", children: [
                      o3("header", { className: "flex items-baseline justify-between border-b border-b-gray-300 pb-3.5", children: [
                        o3(Typography, { fontType: block == null ? void 0 : block.title_font, children: block == null ? void 0 : block.title }),
                        (block == null ? void 0 : block.url) ? o3("a", { href: block == null ? void 0 : block.url, className: "hf:underline", children: "View all" }) : null
                      ] }),
                      o3("main", { className: "mt-9 grid gap-6 ", children: (_a5 = collectionBlock == null ? void 0 : collectionBlock.collections) == null ? void 0 : _a5.map((collection) => {
                        var _a6, _b5, _c;
                        return o3(
                          "a",
                          {
                            href: `/collections/${collection.handle}`,
                            className: "flex items-center gap-4 hf:underline",
                            children: [
                              o3("picture", { className: "relative h-12 w-12 overflow-hidden rounded-theme-sm bg-theme-text/10", children: o3(
                                Image2,
                                {
                                  src: (_a6 = collection == null ? void 0 : collection.image) == null ? void 0 : _a6.src,
                                  alt: collection.title,
                                  width: Math.ceil(
                                    48 * (((_b5 = collection == null ? void 0 : collection.image) == null ? void 0 : _b5.width) / ((_c = collection == null ? void 0 : collection.image) == null ? void 0 : _c.height))
                                  ),
                                  height: 48,
                                  className: "h-full w-full object-cover object-center"
                                }
                              ) }),
                              o3("div", { className: "megamenu-link", children: collection.title })
                            ]
                          },
                          collection.id
                        );
                      }) })
                    ] }, index);
                  }
                  return null;
                })
              ] }),
              searchResults.loading ? o3("div", { className: "absolute inset-0 z-10 flex w-full items-center justify-center bg-theme-bg/40", children: o3(LoadingSpinner, { loading: true, className: "scale-150" }) }) : null
            ]
          }
        )
      ] })
    ] });
  }, "Search");

  // slide-in-drawers.tsx
  var initSlideInDrawers = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const header = document.querySelector("[data-global-header]");
    const footer = document.querySelector("[data-global-footer]");
    const shopifySections = document.querySelectorAll(".shopify-section");
    document.querySelectorAll("[data-drawer]").forEach((root) => {
      const name = root.dataset.drawer;
      const drawer = {
        name,
        content: root.querySelector("[data-drawer-content]"),
        overlay: root.querySelector("[data-drawer-overlay]"),
        openButtons: document.querySelectorAll(`[data-drawer-open="${name}"]`),
        closeButtons: document.querySelectorAll(`[data-drawer-close="${name}"]`)
      };
      const closeDrawer = /* @__PURE__ */ __name(() => {
        document.dispatchEvent(new Event(`${name}:closed`));
        trapFocus(document.body);
        root.classList.remove("active");
        document.body.style.overflow = "";
        header.style.zIndex = "";
        footer.style.zIndex = "";
        root.style.zIndex = "";
        document.removeEventListener("click", handleClose);
        document.removeEventListener("keydown", handleKeydown);
        shopifySections.forEach(
          (section) => section.classList.remove("shopify-section-drawer-z-index")
        );
        drawer.openButtons.forEach((openButton) => {
          openButton.addEventListener("click", openDrawer);
          openButton.removeEventListener("click", closeDrawer);
        });
        if (!root.classList.contains("hidden")) {
          setTimeout(
            () => {
              if (!root.classList.contains("active")) {
                root.classList.add("hidden");
              }
            },
            300
          );
        }
      }, "closeDrawer");
      const openDrawer = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
        var _a5;
        document.querySelectorAll("[data-drawer]").forEach((otherRoot) => {
          if (otherRoot.classList.contains("active")) {
            const otherName = otherRoot.dataset.drawer;
            otherRoot.classList.add("hidden");
            document.dispatchEvent(new Event(`${otherName}:close`));
          }
        });
        root.classList.remove("hidden");
        yield delay(5);
        document.dispatchEvent(new Event(`${name}:opened`));
        root.classList.add("active");
        trapFocus(drawer.content);
        (_a5 = drawer.content.querySelectorAll(selectorString)[0]) == null ? void 0 : _a5.focus();
        document.body.style.overflow = "hidden";
        footer.style.zIndex = "41";
        shopifySections.forEach((section) => section.classList.add("shopify-section-drawer-z-index"));
        if (window.scrollY < 250 || ["cart", "product", "nav"].includes(name)) {
          header.style.zIndex = "2147483646";
        }
        root.style.zIndex = "2147483647";
        document.addEventListener("click", handleClose);
        document.addEventListener("keydown", handleKeydown);
        drawer.openButtons.forEach((openButton) => {
          openButton.addEventListener("click", closeDrawer);
          openButton.removeEventListener("click", openDrawer);
        });
        const scrollContainer = root.querySelector(`[class*="overflow-y-auto"]`);
        if (scrollContainer) {
          scrollToY(100, 0, scrollContainer);
        }
      }), "openDrawer");
      const handleKeydown = /* @__PURE__ */ __name((e3) => {
        if (e3.key === "Escape") {
          closeDrawer();
        }
      }, "handleKeydown");
      const handleClose = /* @__PURE__ */ __name((e3) => {
        const outsideClick = !drawer.content.contains(e3.target) && ![...drawer.closeButtons].some((el) => el.contains(e3.target)) && ![...drawer.closeButtons].some((el) => el === e3.target) && ![...drawer.openButtons].some((el) => el.contains(e3.target)) && ![...drawer.openButtons].some((el) => el === e3.target) && !document.elementsFromPoint(e3.x, e3.y).some((el) => el === drawer.content);
        if (outsideClick) {
          closeDrawer();
        }
      }, "handleClose");
      document.addEventListener(`${name}:open`, openDrawer);
      document.addEventListener(`${name}:close`, closeDrawer);
      drawer.openButtons.forEach((el) => {
        el.addEventListener("click", openDrawer);
      });
      drawer.closeButtons.forEach((el) => {
        el.addEventListener("click", closeDrawer);
      });
    });
  }), "initSlideInDrawers");

  // slider.tsx
  var initSlider2 = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-slider]").forEach((slider) => {
      const autoRotate = slider.dataset.sliderAutoRotate === "true";
      const rotateDuration = +slider.dataset.sliderSlideDuration;
      const container = slider.querySelector("[data-slider-container]");
      const buttons = slider.querySelectorAll("[data-slider-button]");
      const prev = slider.parentElement.querySelector("[data-slider-prev]");
      const next = slider.parentElement.querySelector("[data-slider-next]");
      const slides = (container == null ? void 0 : container.scrollWidth) / (container == null ? void 0 : container.clientWidth);
      const rotateRef = { current: null };
      const handleResize2 = /* @__PURE__ */ __name(() => {
        clearInterval(rotateRef.current);
        if (slides > 1 && autoRotate) {
          const currentIndex = Math.round(container.scrollLeft / container.clientWidth);
          buttons.forEach((button) => {
            button.classList.remove("active");
          });
          setTimeout(
            () => {
              buttons[currentIndex].classList.add("active");
            },
            2
          );
          rotateRef.current = setInterval(
            () => {
              var _a5;
              const nextPosition = container.scrollLeft + container.clientWidth;
              buttons.forEach((button) => {
                var _a6;
                (_a6 = button.classList) == null ? void 0 : _a6.remove("active");
              });
              (_a5 = container == null ? void 0 : container.classList) == null ? void 0 : _a5.remove("snap-mandatory", "snap-x");
              scrollToX(
                250,
                nextPosition - 50 >= container.scrollWidth - container.clientWidth ? 0 : nextPosition,
                container,
                () => {
                  var _a6, _b5, _c;
                  const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
                  (_b5 = (_a6 = buttons[nextIndex]) == null ? void 0 : _a6.classList) == null ? void 0 : _b5.add("active");
                  (_c = container == null ? void 0 : container.classList) == null ? void 0 : _c.add("snap-mandatory", "snap-x");
                }
              );
            },
            rotateDuration * 1e3
          );
        }
        if (prev && next) {
          prev.style.display = container.scrollLeft ? "" : "none";
          next.style.display = container.scrollLeft + container.clientWidth < container.scrollWidth - 10 ? "" : "none";
        }
      }, "handleResize");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          var _a5;
          const buttonIndex = +((_a5 = button.dataset) == null ? void 0 : _a5.sliderButton);
          const targetPosition = buttonIndex * container.clientWidth;
          if (targetPosition === container.scrollLeft)
            return;
          container.classList.remove("snap-mandatory", "snap-x");
          scrollToX(250, targetPosition, container, () => {
            container.classList.add("snap-mandatory", "snap-x");
            button.classList.add("active");
            handleResize2();
          });
        });
      });
      if (prev) {
        prev.addEventListener("click", () => {
          const buttonIndex = Math.round(container.scrollLeft / container.clientWidth) - 1;
          const targetPosition = buttonIndex * container.clientWidth;
          if (targetPosition === container.scrollLeft)
            return;
          container.classList.remove("snap-mandatory", "snap-x");
          scrollToX(250, targetPosition, container, () => {
            container.classList.add("snap-mandatory", "snap-x");
            handleResize2();
          });
        });
      }
      if (next) {
        next.addEventListener("click", (e3) => {
          console.log(e3);
          const buttonIndex = Math.round(container.scrollLeft / container.clientWidth) + 1;
          const targetPosition = buttonIndex * container.clientWidth;
          if (targetPosition === container.scrollLeft)
            return;
          container.classList.remove("snap-mandatory", "snap-x");
          scrollToX(250, targetPosition, container, () => {
            container.classList.add("snap-mandatory", "snap-x");
            handleResize2();
          });
        });
      }
      handleResize2();
      window.addEventListener("resize", handleResize2);
    });
  }), "initSlider");

  // slideshow.tsx
  var initSlideshow = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
      var _a5, _b5;
      const sectionId = slideshow.dataset.slideshow;
      const slides = slideshow.querySelectorAll("[data-slideshow-slide]");
      const paginationButtons = slideshow.querySelectorAll("[data-slideshow-button]");
      const autoRotate = slideshow.dataset.slideshowAutoRotate === "true";
      const slideTimer = { current: null };
      const currentSlide = {
        slide: [...slides].find((slide) => slide.classList.contains("active")),
        index: +((_b5 = (_a5 = [...slides].find((slide) => slide.classList.contains("active"))) == null ? void 0 : _a5.dataset) == null ? void 0 : _b5.slideshowSlide)
      };
      const setSlideIndex = /* @__PURE__ */ __name((index) => {
        var _a6, _b6;
        currentSlide.slide = slideshow.querySelector(
          `[data-slideshow-slide="${index}"]`
        );
        const slideDuration = +((_b6 = (_a6 = currentSlide.slide) == null ? void 0 : _a6.dataset) == null ? void 0 : _b6.slideshowSlideDuration);
        currentSlide.index = index;
        slides.forEach((slide) => {
          var _a7;
          const slideIndex = +((_a7 = slide == null ? void 0 : slide.dataset) == null ? void 0 : _a7.slideshowSlide);
          if (slideIndex === index) {
            slide.classList.add("active");
          }
          if (slideIndex !== index) {
            slide.classList.remove("active");
          }
        });
        paginationButtons.forEach((button) => {
          const slideIndex = +button.dataset.slideshowButton;
          if (slideIndex === index) {
            button.classList.remove("active");
            setTimeout(
              () => {
                button.classList.add("active");
              },
              1
            );
          }
          if (slideIndex !== index) {
            button.classList.remove("active");
          }
        });
        if (autoRotate) {
          clearTimeout(slideTimer.current);
          slideTimer.current = setTimeout(
            () => {
              const nextIndex = currentSlide.index + 1;
              setSlideIndex(nextIndex >= slides.length ? 0 : nextIndex);
            },
            slideDuration * 1e3
          );
        }
      }, "setSlideIndex");
      paginationButtons.forEach((button) => {
        button.addEventListener("click", (e3) => {
          const slideIndex = +button.dataset.slideshowButton;
          setSlideIndex(slideIndex);
        });
      });
      setSlideIndex(currentSlide.index);
      document.addEventListener(`slideshow:${sectionId}:set-slide`, (e3) => {
        if (typeof e3.detail.index === "number") {
          setSlideIndex(e3.detail.index);
        }
      });
    });
  }), "initSlideshow");

  // slideshow-new.tsx
  var initSlideshowNew = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-slideshow-new]").forEach((slider) => {
      const autoRotate = slider.dataset.slideshowAutoRotate === "true";
      const container = slider.querySelector("[data-slideshow-container]");
      const buttons = slider.querySelectorAll("[data-slideshow-button]");
      const slides = [...slider.querySelectorAll("[data-slideshow-slide]")];
      const slidesVisible = (container == null ? void 0 : container.scrollWidth) / (container == null ? void 0 : container.clientWidth);
      const rotateRef = { current: null };
      const handleResize2 = /* @__PURE__ */ __name(() => {
        clearInterval(rotateRef.current);
        const currentIndex = slides.findIndex(
          (slide) => slide.offsetLeft < container.scrollLeft + 50 && slide.offsetLeft > container.scrollLeft - 50
        );
        if (slides.length > 1 && slidesVisible > 1 && autoRotate && currentIndex !== -1) {
          const rotateDuration = +buttons[currentIndex].dataset.slideshowSlideDuration;
          buttons.forEach((button) => {
            button.classList.remove("active");
          });
          setTimeout(
            () => {
              buttons[currentIndex].classList.add("active");
            },
            2
          );
          rotateRef.current = setInterval(
            () => {
              const nextPosition = (container == null ? void 0 : container.scrollLeft) + (container == null ? void 0 : container.clientWidth);
              buttons.forEach((button) => {
                button == null ? void 0 : button.classList.remove("active");
              });
              container == null ? void 0 : container.classList.remove("snap-mandatory", "snap-x");
              scrollToX(
                250,
                nextPosition - 50 >= container.scrollWidth - container.clientWidth ? 0 : nextPosition,
                container,
                () => {
                  setTimeout(
                    () => {
                      var _a5;
                      const nextIndex = slides.findIndex(
                        (slide) => slide.offsetLeft < container.scrollLeft + 50 && slide.offsetLeft > container.scrollLeft - 50
                      );
                      (_a5 = buttons[nextIndex]) == null ? void 0 : _a5.classList.add("active");
                      container == null ? void 0 : container.classList.add("snap-mandatory", "snap-x");
                    },
                    10
                  );
                }
              );
            },
            rotateDuration * 1e3
          );
        }
      }, "handleResize");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const buttonIndex = +button.dataset.slideshowButton;
          const targetPosition = slides[buttonIndex].offsetLeft;
          if (targetPosition === container.scrollLeft)
            return;
          container.classList.remove("snap-mandatory", "snap-x");
          scrollToX(250, targetPosition, container, () => {
            container.classList.add("snap-mandatory", "snap-x");
            button.classList.add("active");
            handleResize2();
          });
        });
      });
      handleResize2();
      window.addEventListener("resize", handleResize2);
      container.addEventListener("scroll", handleResize2);
    });
  }), "initSlideshowNew");

  // tabs.tsx
  var initTabs = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
      const buttons = tabGroup.querySelectorAll("[data-tabs-button]");
      const tabs = tabGroup.querySelectorAll("[data-tabs-content]");
      buttons.forEach((button) => {
        button.addEventListener("click", (e3) => {
          const tabIndex = +button.dataset.tabsButton;
          buttons.forEach((btn) => {
            btn.classList.remove("active");
          });
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          button.classList.add("active");
          tabGroup.querySelector(`[data-tabs-content="${tabIndex}"]`).classList.add("active");
        });
      });
    });
  }), "initTabs");

  // tooltip.tsx
  init_compat_module();
  init_compat_module();
  var timeout = null;
  var Tooltips = /* @__PURE__ */ __name(() => {
    const { design_tooltips_show } = useGlobalSettings();
    const [tooltips, setTooltips] = h2(
      new Set(document.querySelectorAll("[data-tooltip]"))
    );
    const handleHover = T2((event) => {
      const trigger = event.currentTarget;
      const tooltip = document.querySelector("[data-tooltip-display]");
      const content = trigger.dataset.tooltip;
      const { left, right, width, height, top, bottom } = trigger.getBoundingClientRect();
      if (timeout) {
        clearTimeout(timeout);
      }
      tooltip.style.left = `${left}px`;
      tooltip.style.right = `${right}px`;
      tooltip.style.width = `${width}px`;
      tooltip.style.height = `${height}px`;
      tooltip.style.top = `${top}px`;
      tooltip.style.bottom = `${bottom}px`;
      tooltip.style.opacity = `1`;
      tooltip.dataset.tooltipDisplay = content;
    }, []);
    const handleExit = T2((event) => {
      const tooltip = document.querySelector("[data-tooltip-display]");
      timeout = setTimeout(
        () => {
          tooltip.style.opacity = "";
          setTimeout(
            () => {
              tooltip.style.left = "-9999px";
              tooltip.style.right = "";
              tooltip.style.top = "-9999px";
              tooltip.style.bottom = "";
              tooltip.style.width = "0";
              tooltip.style.height = "0";
              tooltip.dataset.tooltipDisplay = "";
            },
            150
          );
        },
        150
      );
    }, []);
    p2(() => {
      if (!design_tooltips_show)
        return;
      const newNodes = [];
      document.querySelectorAll("[data-tooltip]").forEach((element) => {
        if (!tooltips.has(element)) {
          newNodes.push(element);
        }
      });
      if (newNodes.length) {
        setTooltips((prev) => {
          newNodes.forEach((node) => prev.add(node));
          return /* @__PURE__ */ new Set([...prev]);
        });
      }
      const mutationObserver = new MutationObserver((e3) => {
        e3 == null ? void 0 : e3.forEach((record) => {
          const nodes = [];
          [...record.addedNodes].forEach((node) => {
            var _a5;
            if ((_a5 = node == null ? void 0 : node.dataset) == null ? void 0 : _a5.tooltip) {
              nodes.push(node);
              return;
            }
            if (node instanceof Element) {
              node == null ? void 0 : node.querySelectorAll("[data-tooltip]").forEach((label) => {
                nodes.push(label);
              });
            }
          });
          if (nodes.length) {
            setTooltips((prev) => {
              nodes.forEach((node) => prev.add(node));
              return /* @__PURE__ */ new Set([...prev]);
            });
          }
        });
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }, [design_tooltips_show, tooltips]);
    p2(() => {
      if (!design_tooltips_show)
        return () => {
        };
      tooltips.forEach((tooltip) => {
        tooltip.addEventListener("mouseover", handleHover);
        tooltip.addEventListener("mouseleave", handleExit);
      });
      return () => {
        tooltips.forEach((tooltip) => {
          tooltip.removeEventListener("mouseover", handleHover);
          tooltip.removeEventListener("mouseleave", handleExit);
        });
      };
    }, [design_tooltips_show, handleExit, handleHover, tooltips]);
    return o3(_, {});
  }, "Tooltips");
  var initTooltip = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const tooltipContainer = document.querySelector("[data-tooltip-display]");
    if (tooltipContainer) {
      G(o3(Tooltips, {}), tooltipContainer);
    }
  }), "initTooltip");

  // video-banner.tsx
  var initVideoBanner = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    document.querySelectorAll("[data-video-banner]").forEach((sectionElement) => {
      var _a5;
      const sectionId = (_a5 = sectionElement.dataset) == null ? void 0 : _a5.videoBanner;
      document.addEventListener(`video--${sectionId}:closed`, (e3) => {
        const iframe = sectionElement.querySelector("iframe");
        const video = sectionElement.querySelector("video");
        if (video) {
          video.pause();
        }
        if (iframe) {
          const src = iframe.src;
          iframe.src = "";
          setTimeout(
            () => {
              iframe.src = src;
            },
            100
          );
        }
      });
      document.addEventListener(`video--${sectionId}:opened`, (e3) => {
        const video = sectionElement.querySelector("video");
        if (video) {
          video.play();
        }
      });
    });
  }), "initVideoBanner");

  // store-locator.tsx
  var initStoreLocatorMaps = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
    const config = {
      zoom: 14,
      backgroundColor: "none",
      draggable: false,
      clickableIcons: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      disableDefaultUI: true
    };
    let apiStatus = null;
    const messages = {
      addressError: "Error looking up that address",
      addressNoResults: "No results for that address",
      addressQueryLimit: 'You have exceeded the Google API usage limit. Consider upgrading to a <a href="https://developers.google.com/maps/premium/usage-limits">Premium Plan</a>.',
      authError: 'There was a problem authenticating your Google Maps account. Create and enable the <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">JavaScript API</a> and <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key">Geocoding API</a> permissions of your app.'
    };
    const mapElements = document.querySelectorAll(".map-section");
    const GeoLocate = /* @__PURE__ */ __name((map) => __async(void 0, null, function* () {
      if (!map) {
        return;
      }
      const geocoder = new window.google.maps.Geocoder();
      const address = map.dataset.addressSetting;
      return yield geocoder.geocode({ address });
    }), "GeoLocate");
    const InitAllMaps = /* @__PURE__ */ __name(() => {
      mapElements.forEach((container) => __async(void 0, null, function* () {
        const map = container.querySelector("[data-map]");
        const req_geolocate = yield GeoLocate(map);
        if (req_geolocate.results.length) {
          const map_config = Object.assign(config, {
            center: req_geolocate.results[0].geometry.location
          });
          const gmap = new window.google.maps.Map(map, map_config);
          const marker = new window.google.maps.Marker({
            position: req_geolocate.results[0].geometry.location,
            map: gmap
          });
        } else {
        }
      }));
    }, "InitAllMaps");
    if (mapElements.length) {
      const apiKey = mapElements[0].querySelector("[data-map]").dataset.apiKey;
      window.Shopify;
      if (typeof window.google === "undefined" || typeof window.google.maps === "undefined") {
        const script = document.createElement("script");
        script.onload = function() {
          apiStatus = "loaded";
          InitAllMaps();
        };
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        document.head.appendChild(script);
      }
    }
  }), "initStoreLocatorMaps");

  // theme.tsx
  var initNoJs = /* @__PURE__ */ __name(() => {
    document.querySelectorAll(".no-js-hidden").forEach((element) => element.classList.remove("no-js-hidden"));
  }, "initNoJs");
  var initTheme = /* @__PURE__ */ __name(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    );
    initNoJs();
    initTooltip();
    initFeaturedObjects();
    initSlideshowNew();
    initBundles();
    initDrawerMenu();
    initGlobalEffects();
    initProductsScrollable();
    initProductCards();
    initColorSwatches();
    initSlideInDrawers();
    initCollection();
    initScrollSlider();
    initHeaderMenu();
    initCart();
    initProducts();
    initSearch();
    initAnimationSlide();
    initSlideshow();
    initSlider2();
    initCollapsible();
    initTabs();
    initPasswordInput();
    initForms();
    initAccountOrders();
    initVideoBanner();
    trapFocus(document.body);
    initStoreLocatorMaps();
    initProductAddToCartBarLinks();
    initCartDrawerGiftMessage();
  }, "initTheme");
  initTheme();
  document.addEventListener("shopify:section:load", (e3) => {
    const element = e3.target;
    const { type, disabled } = JSON.parse(element.dataset.shopifyEditorSection);
    initTheme();
  });
  var isExternalUrl = /* @__PURE__ */ __name((url) => {
    var _a5;
    const host = (_a5 = window == null ? void 0 : window.location) == null ? void 0 : _a5.hostname;
    const linkHost = function(url2) {
      var _a6;
      if (/^https?:?\/\//.test(url2)) {
        const anchorElement = document.createElement("a");
        anchorElement.href = url2;
        return anchorElement.hostname;
      } else {
        return (_a6 = window == null ? void 0 : window.location) == null ? void 0 : _a6.hostname;
      }
    }(url);
    return host !== linkHost;
  }, "isExternalUrl");
  var isNotSamePageUrl = /* @__PURE__ */ __name((url) => {
    if (isExternalUrl(url)) {
      return true;
    }
    const path = window.location.pathname;
    const linkPath = function(url2) {
      if (/^https?:?\/\//.test(url2)) {
        const anchorElement = document.createElement("a");
        anchorElement.href = url2;
        return anchorElement.pathname;
      } else {
        const anchorElement = document.createElement("a");
        anchorElement.href = window.location.origin + url2;
        return anchorElement.pathname;
      }
    }(url);
    return path !== linkPath;
  }, "isNotSamePageUrl");
  var theme_default = initTheme;
})();
