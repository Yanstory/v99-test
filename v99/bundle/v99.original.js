!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/bundle/",
    n(n.s = 15)
}([function(e, t, n) {
    "use strict";
    e.exports = n(6)
}
, function(e, t, n) {
    "use strict";
    !function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
    }(),
    e.exports = n(7)
}
, function(e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var r = Object.getOwnPropertySymbols
      , i = Object.prototype.hasOwnProperty
      , o = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de",
            "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            }).join(""))
                return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, a, u = function(e) {
            if (null == e)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }(e), s = 1; s < arguments.length; s++) {
            for (var l in n = Object(arguments[s]))
                i.call(n, l) && (u[l] = n[l]);
            if (r) {
                a = r(n);
                for (var c = 0; c < a.length; c++)
                    o.call(n, a[c]) && (u[a[c]] = n[a[c]])
            }
        }
        return u
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    (function(e, r) {
        var i;
        /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
        (function() {
            var o, a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "__lodash_hash_undefined__", c = 500, d = "__lodash_placeholder__", f = 1, h = 2, p = 4, m = 1, v = 2, g = 1, y = 2, b = 4, x = 8, w = 16, _ = 32, E = 64, S = 128, k = 256, T = 512, C = 30, D = "...", P = 800, L = 16, A = 1, M = 2, N = 1 / 0, R = 9007199254740991, O = 1.7976931348623157e308, I = NaN, z = 4294967295, F = z - 1, U = z >>> 1, W = [["ary", S], ["bind", g], ["bindKey", y], ["curry", x], ["curryRight", w], ["flip", T], ["partial", _], ["partialRight", E], ["rearg", k]], B = "[object Arguments]", j = "[object Array]", V = "[object AsyncFunction]", X = "[object Boolean]", H = "[object Date]", G = "[object DOMException]", $ = "[object Error]", Q = "[object Function]", Y = "[object GeneratorFunction]", K = "[object Map]", q = "[object Number]", Z = "[object Null]", J = "[object Object]", ee = "[object Proxy]", te = "[object RegExp]", ne = "[object Set]", re = "[object String]", ie = "[object Symbol]", oe = "[object Undefined]", ae = "[object WeakMap]", ue = "[object WeakSet]", se = "[object ArrayBuffer]", le = "[object DataView]", ce = "[object Float32Array]", de = "[object Float64Array]", fe = "[object Int8Array]", he = "[object Int16Array]", pe = "[object Int32Array]", me = "[object Uint8Array]", ve = "[object Uint8ClampedArray]", ge = "[object Uint16Array]", ye = "[object Uint32Array]", be = /\b__p \+= '';/g, xe = /\b(__p \+=) '' \+/g, we = /(__e\(.*?\)|\b__t\)) \+\n'';/g, _e = /&(?:amp|lt|gt|quot|#39);/g, Ee = /[&<>"']/g, Se = RegExp(_e.source), ke = RegExp(Ee.source), Te = /<%-([\s\S]+?)%>/g, Ce = /<%([\s\S]+?)%>/g, De = /<%=([\s\S]+?)%>/g, Pe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Le = /^\w*$/, Ae = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Me = /[\\^$.*+?()[\]{}|]/g, Ne = RegExp(Me.source), Re = /^\s+|\s+$/g, Oe = /^\s+/, Ie = /\s+$/, ze = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fe = /\{\n\/\* \[wrapped with (.+)\] \*/, Ue = /,? & /, We = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Be = /\\(\\)?/g, je = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ve = /\w*$/, Xe = /^[-+]0x[0-9a-f]+$/i, He = /^0b[01]+$/i, Ge = /^\[object .+?Constructor\]$/, $e = /^0o[0-7]+$/i, Qe = /^(?:0|[1-9]\d*)$/, Ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ke = /($^)/, qe = /['\n\r\u2028\u2029\\]/g, Ze = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Je = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", et = "[\\ud800-\\udfff]", tt = "[" + Je + "]", nt = "[" + Ze + "]", rt = "\\d+", it = "[\\u2700-\\u27bf]", ot = "[a-z\\xdf-\\xf6\\xf8-\\xff]", at = "[^\\ud800-\\udfff" + Je + rt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", ut = "\\ud83c[\\udffb-\\udfff]", st = "[^\\ud800-\\udfff]", lt = "(?:\\ud83c[\\udde6-\\uddff]){2}", ct = "[\\ud800-\\udbff][\\udc00-\\udfff]", dt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", ft = "(?:" + ot + "|" + at + ")", ht = "(?:" + dt + "|" + at + ")", pt = "(?:" + nt + "|" + ut + ")" + "?", mt = "[\\ufe0e\\ufe0f]?" + pt + ("(?:\\u200d(?:" + [st, lt, ct].join("|") + ")[\\ufe0e\\ufe0f]?" + pt + ")*"), vt = "(?:" + [it, lt, ct].join("|") + ")" + mt, gt = "(?:" + [st + nt + "?", nt, lt, ct, et].join("|") + ")", yt = RegExp("['’]", "g"), bt = RegExp(nt, "g"), xt = RegExp(ut + "(?=" + ut + ")|" + gt + mt, "g"), wt = RegExp([dt + "?" + ot + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [tt, dt, "$"].join("|") + ")", ht + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [tt, dt + ft, "$"].join("|") + ")", dt + "?" + ft + "+(?:['’](?:d|ll|m|re|s|t|ve))?", dt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rt, vt].join("|"), "g"), _t = RegExp("[\\u200d\\ud800-\\udfff" + Ze + "\\ufe0e\\ufe0f]"), Et = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, St = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], kt = -1, Tt = {};
            Tt[ce] = Tt[de] = Tt[fe] = Tt[he] = Tt[pe] = Tt[me] = Tt[ve] = Tt[ge] = Tt[ye] = !0,
            Tt[B] = Tt[j] = Tt[se] = Tt[X] = Tt[le] = Tt[H] = Tt[$] = Tt[Q] = Tt[K] = Tt[q] = Tt[J] = Tt[te] = Tt[ne] = Tt[re] = Tt[ae] = !1;
            var Ct = {};
            Ct[B] = Ct[j] = Ct[se] = Ct[le] = Ct[X] = Ct[H] = Ct[ce] = Ct[de] = Ct[fe] = Ct[he] = Ct[pe] = Ct[K] = Ct[q] = Ct[J] = Ct[te] = Ct[ne] = Ct[re] = Ct[ie] = Ct[me] = Ct[ve] = Ct[ge] = Ct[ye] = !0,
            Ct[$] = Ct[Q] = Ct[ae] = !1;
            var Dt = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Pt = parseFloat
              , Lt = parseInt
              , At = "object" == typeof e && e && e.Object === Object && e
              , Mt = "object" == typeof self && self && self.Object === Object && self
              , Nt = At || Mt || Function("return this")()
              , Rt = t && !t.nodeType && t
              , Ot = Rt && "object" == typeof r && r && !r.nodeType && r
              , It = Ot && Ot.exports === Rt
              , zt = It && At.process
              , Ft = function() {
                try {
                    var e = Ot && Ot.require && Ot.require("util").types;
                    return e || zt && zt.binding && zt.binding("util")
                } catch (e) {}
            }()
              , Ut = Ft && Ft.isArrayBuffer
              , Wt = Ft && Ft.isDate
              , Bt = Ft && Ft.isMap
              , jt = Ft && Ft.isRegExp
              , Vt = Ft && Ft.isSet
              , Xt = Ft && Ft.isTypedArray;
            function Ht(e, t, n) {
                switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
            function Gt(e, t, n, r) {
                for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                    var a = e[i];
                    t(r, a, n(a), e)
                }
                return r
            }
            function $t(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
                    ;
                return e
            }
            function Qt(e, t) {
                for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); )
                    ;
                return e
            }
            function Yt(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                    if (!t(e[n], n, e))
                        return !1;
                return !0
            }
            function Kt(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                    var a = e[n];
                    t(a, n, e) && (o[i++] = a)
                }
                return o
            }
            function qt(e, t) {
                return !!(null == e ? 0 : e.length) && sn(e, t, 0) > -1
            }
            function Zt(e, t, n) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                    if (n(t, e[r]))
                        return !0;
                return !1
            }
            function Jt(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
                    i[n] = t(e[n], n, e);
                return i
            }
            function en(e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r; )
                    e[i + n] = t[n];
                return e
            }
            function tn(e, t, n, r) {
                var i = -1
                  , o = null == e ? 0 : e.length;
                for (r && o && (n = e[++i]); ++i < o; )
                    n = t(n, e[i], i, e);
                return n
            }
            function nn(e, t, n, r) {
                var i = null == e ? 0 : e.length;
                for (r && i && (n = e[--i]); i--; )
                    n = t(n, e[i], i, e);
                return n
            }
            function rn(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                    if (t(e[n], n, e))
                        return !0;
                return !1
            }
            var on = fn("length");
            function an(e, t, n) {
                var r;
                return n(e, function(e, n, i) {
                    if (t(e, n, i))
                        return r = n,
                        !1
                }),
                r
            }
            function un(e, t, n, r) {
                for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                    if (t(e[o], o, e))
                        return o;
                return -1
            }
            function sn(e, t, n) {
                return t == t ? function(e, t, n) {
                    var r = n - 1
                      , i = e.length;
                    for (; ++r < i; )
                        if (e[r] === t)
                            return r;
                    return -1
                }(e, t, n) : un(e, cn, n)
            }
            function ln(e, t, n, r) {
                for (var i = n - 1, o = e.length; ++i < o; )
                    if (r(e[i], t))
                        return i;
                return -1
            }
            function cn(e) {
                return e != e
            }
            function dn(e, t) {
                var n = null == e ? 0 : e.length;
                return n ? mn(e, t) / n : I
            }
            function fn(e) {
                return function(t) {
                    return null == t ? o : t[e]
                }
            }
            function hn(e) {
                return function(t) {
                    return null == e ? o : e[t]
                }
            }
            function pn(e, t, n, r, i) {
                return i(e, function(e, i, o) {
                    n = r ? (r = !1,
                    e) : t(n, e, i, o)
                }),
                n
            }
            function mn(e, t) {
                for (var n, r = -1, i = e.length; ++r < i; ) {
                    var a = t(e[r]);
                    a !== o && (n = n === o ? a : n + a)
                }
                return n
            }
            function vn(e, t) {
                for (var n = -1, r = Array(e); ++n < e; )
                    r[n] = t(n);
                return r
            }
            function gn(e) {
                return function(t) {
                    return e(t)
                }
            }
            function yn(e, t) {
                return Jt(t, function(t) {
                    return e[t]
                })
            }
            function bn(e, t) {
                return e.has(t)
            }
            function xn(e, t) {
                for (var n = -1, r = e.length; ++n < r && sn(t, e[n], 0) > -1; )
                    ;
                return n
            }
            function wn(e, t) {
                for (var n = e.length; n-- && sn(t, e[n], 0) > -1; )
                    ;
                return n
            }
            var _n = hn({
                "à": "A",
                "á": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "?": "A",
                "à": "a",
                "á": "a",
                "a": "a",
                "?": "a",
                "?": "a",
                "?": "a",
                "?": "C",
                "?": "c",
                "D": "D",
                "e": "d",
                "è": "E",
                "é": "E",
                "ê": "E",
                "?": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "?": "e",
                "ì": "I",
                "í": "I",
                "?": "I",
                "?": "I",
                "ì": "i",
                "í": "i",
                "?": "i",
                "?": "i",
                "?": "N",
                "?": "n",
                "ò": "O",
                "ó": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "?": "O",
                "ò": "o",
                "ó": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "?": "o",
                "ù": "U",
                "ú": "U",
                "?": "U",
                "ü": "U",
                "ù": "u",
                "ú": "u",
                "?": "u",
                "ü": "u",
                "Y": "Y",
                "y": "y",
                "?": "y",
                "?": "Ae",
                "?": "ae",
                "T": "Th",
                "t": "th",
                "?": "ss",
                "ā": "A",
                "?": "A",
                "?": "A",
                "ā": "a",
                "?": "a",
                "?": "a",
                "?": "C",
                "?": "C",
                "?": "C",
                "?": "C",
                "?": "c",
                "?": "c",
                "?": "c",
                "?": "c",
                "?": "D",
                "?": "D",
                "?": "d",
                "?": "d",
                "ē": "E",
                "?": "E",
                "?": "E",
                "?": "E",
                "ě": "E",
                "ē": "e",
                "?": "e",
                "?": "e",
                "?": "e",
                "ě": "e",
                "?": "G",
                "?": "G",
                "?": "G",
                "?": "G",
                "?": "g",
                "?": "g",
                "?": "g",
                "?": "g",
                "?": "H",
                "?": "H",
                "?": "h",
                "?": "h",
                "?": "I",
                "ī": "I",
                "?": "I",
                "?": "I",
                "?": "I",
                "?": "i",
                "ī": "i",
                "?": "i",
                "?": "i",
                "?": "i",
                "?": "J",
                "?": "j",
                "?": "K",
                "?": "k",
                "?": "k",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "L",
                "?": "l",
                "?": "l",
                "?": "l",
                "?": "l",
                "?": "l",
                "?": "N",
                "?": "N",
                "?": "N",
                "?": "N",
                "ń": "n",
                "?": "n",
                "ň": "n",
                "?": "n",
                "ō": "O",
                "?": "O",
                "?": "O",
                "ō": "o",
                "?": "o",
                "?": "o",
                "?": "R",
                "?": "R",
                "?": "R",
                "?": "r",
                "?": "r",
                "?": "r",
                "?": "S",
                "?": "S",
                "?": "S",
                "?": "S",
                "?": "s",
                "?": "s",
                "?": "s",
                "?": "s",
                "?": "T",
                "?": "T",
                "?": "T",
                "?": "t",
                "?": "t",
                "?": "t",
                "?": "U",
                "ū": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "U",
                "?": "u",
                "ū": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "u",
                "?": "W",
                "?": "w",
                "?": "Y",
                "?": "y",
                "?": "Y",
                "?": "Z",
                "?": "Z",
                "?": "Z",
                "?": "z",
                "?": "z",
                "?": "z",
                "?": "IJ",
                "?": "ij",
                "?": "Oe",
                "?": "oe",
                "?": "'n",
                "?": "s"
            })
              , En = hn({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });
            function Sn(e) {
                return "\\" + Dt[e]
            }
            function kn(e) {
                return _t.test(e)
            }
            function Tn(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach(function(e, r) {
                    n[++t] = [r, e]
                }),
                n
            }
            function Cn(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
            function Dn(e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                    var a = e[n];
                    a !== t && a !== d || (e[n] = d,
                    o[i++] = n)
                }
                return o
            }
            function Pn(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = e
                }),
                n
            }
            function Ln(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = [e, e]
                }),
                n
            }
            function An(e) {
                return kn(e) ? function(e) {
                    var t = xt.lastIndex = 0;
                    for (; xt.test(e); )
                        ++t;
                    return t
                }(e) : on(e)
            }
            function Mn(e) {
                return kn(e) ? function(e) {
                    return e.match(xt) || []
                }(e) : function(e) {
                    return e.split("")
                }(e)
            }
            var Nn = hn({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            });
            var Rn = function e(t) {
                var n, r = (t = null == t ? Nt : Rn.defaults(Nt.Object(), t, Rn.pick(Nt, St))).Array, i = t.Date, Ze = t.Error, Je = t.Function, et = t.Math, tt = t.Object, nt = t.RegExp, rt = t.String, it = t.TypeError, ot = r.prototype, at = Je.prototype, ut = tt.prototype, st = t["__core-js_shared__"], lt = at.toString, ct = ut.hasOwnProperty, dt = 0, ft = (n = /[^.]+$/.exec(st && st.keys && st.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "", ht = ut.toString, pt = lt.call(tt), mt = Nt._, vt = nt("^" + lt.call(ct).replace(Me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), gt = It ? t.Buffer : o, xt = t.Symbol, _t = t.Uint8Array, Dt = gt ? gt.allocUnsafe : o, At = Cn(tt.getPrototypeOf, tt), Mt = tt.create, Rt = ut.propertyIsEnumerable, Ot = ot.splice, zt = xt ? xt.isConcatSpreadable : o, Ft = xt ? xt.iterator : o, on = xt ? xt.toStringTag : o, hn = function() {
                    try {
                        var e = Uo(tt, "defineProperty");
                        return e({}, "", {}),
                        e
                    } catch (e) {}
                }(), On = t.clearTimeout !== Nt.clearTimeout && t.clearTimeout, In = i && i.now !== Nt.Date.now && i.now, zn = t.setTimeout !== Nt.setTimeout && t.setTimeout, Fn = et.ceil, Un = et.floor, Wn = tt.getOwnPropertySymbols, Bn = gt ? gt.isBuffer : o, jn = t.isFinite, Vn = ot.join, Xn = Cn(tt.keys, tt), Hn = et.max, Gn = et.min, $n = i.now, Qn = t.parseInt, Yn = et.random, Kn = ot.reverse, qn = Uo(t, "DataView"), Zn = Uo(t, "Map"), Jn = Uo(t, "Promise"), er = Uo(t, "Set"), tr = Uo(t, "WeakMap"), nr = Uo(tt, "create"), rr = tr && new tr, ir = {}, or = da(qn), ar = da(Zn), ur = da(Jn), sr = da(er), lr = da(tr), cr = xt ? xt.prototype : o, dr = cr ? cr.valueOf : o, fr = cr ? cr.toString : o;
                function hr(e) {
                    if (Du(e) && !gu(e) && !(e instanceof gr)) {
                        if (e instanceof vr)
                            return e;
                        if (ct.call(e, "__wrapped__"))
                            return fa(e)
                    }
                    return new vr(e)
                }
                var pr = function() {
                    function e() {}
                    return function(t) {
                        if (!Cu(t))
                            return {};
                        if (Mt)
                            return Mt(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = o,
                        n
                    }
                }();
                function mr() {}
                function vr(e, t) {
                    this.__wrapped__ = e,
                    this.__actions__ = [],
                    this.__chain__ = !!t,
                    this.__index__ = 0,
                    this.__values__ = o
                }
                function gr(e) {
                    this.__wrapped__ = e,
                    this.__actions__ = [],
                    this.__dir__ = 1,
                    this.__filtered__ = !1,
                    this.__iteratees__ = [],
                    this.__takeCount__ = z,
                    this.__views__ = []
                }
                function yr(e) {
                    var t = -1
                      , n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                function br(e) {
                    var t = -1
                      , n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                function xr(e) {
                    var t = -1
                      , n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                function wr(e) {
                    var t = -1
                      , n = null == e ? 0 : e.length;
                    for (this.__data__ = new xr; ++t < n; )
                        this.add(e[t])
                }
                function _r(e) {
                    var t = this.__data__ = new br(e);
                    this.size = t.size
                }
                function Er(e, t) {
                    var n = gu(e)
                      , r = !n && vu(e)
                      , i = !n && !r && wu(e)
                      , o = !n && !r && !i && Iu(e)
                      , a = n || r || i || o
                      , u = a ? vn(e.length, rt) : []
                      , s = u.length;
                    for (var l in e)
                        !t && !ct.call(e, l) || a && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Go(l, s)) || u.push(l);
                    return u
                }
                function Sr(e) {
                    var t = e.length;
                    return t ? e[wi(0, t - 1)] : o
                }
                function kr(e, t) {
                    return sa(no(e), Rr(t, 0, e.length))
                }
                function Tr(e) {
                    return sa(no(e))
                }
                function Cr(e, t, n) {
                    (n === o || hu(e[t], n)) && (n !== o || t in e) || Mr(e, t, n)
                }
                function Dr(e, t, n) {
                    var r = e[t];
                    ct.call(e, t) && hu(r, n) && (n !== o || t in e) || Mr(e, t, n)
                }
                function Pr(e, t) {
                    for (var n = e.length; n--; )
                        if (hu(e[n][0], t))
                            return n;
                    return -1
                }
                function Lr(e, t, n, r) {
                    return Ur(e, function(e, i, o) {
                        t(r, e, n(e), o)
                    }),
                    r
                }
                function Ar(e, t) {
                    return e && ro(t, is(t), e)
                }
                function Mr(e, t, n) {
                    "__proto__" == t && hn ? hn(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : e[t] = n
                }
                function Nr(e, t) {
                    for (var n = -1, i = t.length, a = r(i), u = null == e; ++n < i; )
                        a[n] = u ? o : Ju(e, t[n]);
                    return a
                }
                function Rr(e, t, n) {
                    return e == e && (n !== o && (e = e <= n ? e : n),
                    t !== o && (e = e >= t ? e : t)),
                    e
                }
                function Or(e, t, n, r, i, a) {
                    var u, s = t & f, l = t & h, c = t & p;
                    if (n && (u = i ? n(e, r, i, a) : n(e)),
                    u !== o)
                        return u;
                    if (!Cu(e))
                        return e;
                    var d = gu(e);
                    if (d) {
                        if (u = function(e) {
                            var t = e.length
                              , n = new e.constructor(t);
                            return t && "string" == typeof e[0] && ct.call(e, "index") && (n.index = e.index,
                            n.input = e.input),
                            n
                        }(e),
                        !s)
                            return no(e, u)
                    } else {
                        var m = jo(e)
                          , v = m == Q || m == Y;
                        if (wu(e))
                            return Ki(e, s);
                        if (m == J || m == B || v && !i) {
                            if (u = l || v ? {} : Xo(e),
                            !s)
                                return l ? function(e, t) {
                                    return ro(e, Bo(e), t)
                                }(e, function(e, t) {
                                    return e && ro(t, os(t), e)
                                }(u, e)) : function(e, t) {
                                    return ro(e, Wo(e), t)
                                }(e, Ar(u, e))
                        } else {
                            if (!Ct[m])
                                return i ? e : {};
                            u = function(e, t, n) {
                                var r, i, o, a = e.constructor;
                                switch (t) {
                                case se:
                                    return qi(e);
                                case X:
                                case H:
                                    return new a(+e);
                                case le:
                                    return function(e, t) {
                                        var n = t ? qi(e.buffer) : e.buffer;
                                        return new e.constructor(n,e.byteOffset,e.byteLength)
                                    }(e, n);
                                case ce:
                                case de:
                                case fe:
                                case he:
                                case pe:
                                case me:
                                case ve:
                                case ge:
                                case ye:
                                    return Zi(e, n);
                                case K:
                                    return new a;
                                case q:
                                case re:
                                    return new a(e);
                                case te:
                                    return (o = new (i = e).constructor(i.source,Ve.exec(i))).lastIndex = i.lastIndex,
                                    o;
                                case ne:
                                    return new a;
                                case ie:
                                    return r = e,
                                    dr ? tt(dr.call(r)) : {}
                                }
                            }(e, m, s)
                        }
                    }
                    a || (a = new _r);
                    var g = a.get(e);
                    if (g)
                        return g;
                    if (a.set(e, u),
                    Nu(e))
                        return e.forEach(function(r) {
                            u.add(Or(r, t, n, r, e, a))
                        }),
                        u;
                    if (Pu(e))
                        return e.forEach(function(r, i) {
                            u.set(i, Or(r, t, n, i, e, a))
                        }),
                        u;
                    var y = d ? o : (c ? l ? Mo : Ao : l ? os : is)(e);
                    return $t(y || e, function(r, i) {
                        y && (r = e[i = r]),
                        Dr(u, i, Or(r, t, n, i, e, a))
                    }),
                    u
                }
                function Ir(e, t, n) {
                    var r = n.length;
                    if (null == e)
                        return !r;
                    for (e = tt(e); r--; ) {
                        var i = n[r]
                          , a = t[i]
                          , u = e[i];
                        if (u === o && !(i in e) || !a(u))
                            return !1
                    }
                    return !0
                }
                function zr(e, t, n) {
                    if ("function" != typeof e)
                        throw new it(s);
                    return ia(function() {
                        e.apply(o, n)
                    }, t)
                }
                function Fr(e, t, n, r) {
                    var i = -1
                      , o = qt
                      , u = !0
                      , s = e.length
                      , l = []
                      , c = t.length;
                    if (!s)
                        return l;
                    n && (t = Jt(t, gn(n))),
                    r ? (o = Zt,
                    u = !1) : t.length >= a && (o = bn,
                    u = !1,
                    t = new wr(t));
                    e: for (; ++i < s; ) {
                        var d = e[i]
                          , f = null == n ? d : n(d);
                        if (d = r || 0 !== d ? d : 0,
                        u && f == f) {
                            for (var h = c; h--; )
                                if (t[h] === f)
                                    continue e;
                            l.push(d)
                        } else
                            o(t, f, r) || l.push(d)
                    }
                    return l
                }
                hr.templateSettings = {
                    escape: Te,
                    evaluate: Ce,
                    interpolate: De,
                    variable: "",
                    imports: {
                        _: hr
                    }
                },
                hr.prototype = mr.prototype,
                hr.prototype.constructor = hr,
                vr.prototype = pr(mr.prototype),
                vr.prototype.constructor = vr,
                gr.prototype = pr(mr.prototype),
                gr.prototype.constructor = gr,
                yr.prototype.clear = function() {
                    this.__data__ = nr ? nr(null) : {},
                    this.size = 0
                }
                ,
                yr.prototype.delete = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0,
                    t
                }
                ,
                yr.prototype.get = function(e) {
                    var t = this.__data__;
                    if (nr) {
                        var n = t[e];
                        return n === l ? o : n
                    }
                    return ct.call(t, e) ? t[e] : o
                }
                ,
                yr.prototype.has = function(e) {
                    var t = this.__data__;
                    return nr ? t[e] !== o : ct.call(t, e)
                }
                ,
                yr.prototype.set = function(e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1,
                    n[e] = nr && t === o ? l : t,
                    this
                }
                ,
                br.prototype.clear = function() {
                    this.__data__ = [],
                    this.size = 0
                }
                ,
                br.prototype.delete = function(e) {
                    var t = this.__data__
                      , n = Pr(t, e);
                    return !(n < 0 || (n == t.length - 1 ? t.pop() : Ot.call(t, n, 1),
                    --this.size,
                    0))
                }
                ,
                br.prototype.get = function(e) {
                    var t = this.__data__
                      , n = Pr(t, e);
                    return n < 0 ? o : t[n][1]
                }
                ,
                br.prototype.has = function(e) {
                    return Pr(this.__data__, e) > -1
                }
                ,
                br.prototype.set = function(e, t) {
                    var n = this.__data__
                      , r = Pr(n, e);
                    return r < 0 ? (++this.size,
                    n.push([e, t])) : n[r][1] = t,
                    this
                }
                ,
                xr.prototype.clear = function() {
                    this.size = 0,
                    this.__data__ = {
                        hash: new yr,
                        map: new (Zn || br),
                        string: new yr
                    }
                }
                ,
                xr.prototype.delete = function(e) {
                    var t = zo(this, e).delete(e);
                    return this.size -= t ? 1 : 0,
                    t
                }
                ,
                xr.prototype.get = function(e) {
                    return zo(this, e).get(e)
                }
                ,
                xr.prototype.has = function(e) {
                    return zo(this, e).has(e)
                }
                ,
                xr.prototype.set = function(e, t) {
                    var n = zo(this, e)
                      , r = n.size;
                    return n.set(e, t),
                    this.size += n.size == r ? 0 : 1,
                    this
                }
                ,
                wr.prototype.add = wr.prototype.push = function(e) {
                    return this.__data__.set(e, l),
                    this
                }
                ,
                wr.prototype.has = function(e) {
                    return this.__data__.has(e)
                }
                ,
                _r.prototype.clear = function() {
                    this.__data__ = new br,
                    this.size = 0
                }
                ,
                _r.prototype.delete = function(e) {
                    var t = this.__data__
                      , n = t.delete(e);
                    return this.size = t.size,
                    n
                }
                ,
                _r.prototype.get = function(e) {
                    return this.__data__.get(e)
                }
                ,
                _r.prototype.has = function(e) {
                    return this.__data__.has(e)
                }
                ,
                _r.prototype.set = function(e, t) {
                    var n = this.__data__;
                    if (n instanceof br) {
                        var r = n.__data__;
                        if (!Zn || r.length < a - 1)
                            return r.push([e, t]),
                            this.size = ++n.size,
                            this;
                        n = this.__data__ = new xr(r)
                    }
                    return n.set(e, t),
                    this.size = n.size,
                    this
                }
                ;
                var Ur = ao($r)
                  , Wr = ao(Qr, !0);
                function Br(e, t) {
                    var n = !0;
                    return Ur(e, function(e, r, i) {
                        return n = !!t(e, r, i)
                    }),
                    n
                }
                function jr(e, t, n) {
                    for (var r = -1, i = e.length; ++r < i; ) {
                        var a = e[r]
                          , u = t(a);
                        if (null != u && (s === o ? u == u && !Ou(u) : n(u, s)))
                            var s = u
                              , l = a
                    }
                    return l
                }
                function Vr(e, t) {
                    var n = [];
                    return Ur(e, function(e, r, i) {
                        t(e, r, i) && n.push(e)
                    }),
                    n
                }
                function Xr(e, t, n, r, i) {
                    var o = -1
                      , a = e.length;
                    for (n || (n = Ho),
                    i || (i = []); ++o < a; ) {
                        var u = e[o];
                        t > 0 && n(u) ? t > 1 ? Xr(u, t - 1, n, r, i) : en(i, u) : r || (i[i.length] = u)
                    }
                    return i
                }
                var Hr = uo()
                  , Gr = uo(!0);
                function $r(e, t) {
                    return e && Hr(e, t, is)
                }
                function Qr(e, t) {
                    return e && Gr(e, t, is)
                }
                function Yr(e, t) {
                    return Kt(t, function(t) {
                        return Su(e[t])
                    })
                }
                function Kr(e, t) {
                    for (var n = 0, r = (t = Gi(t, e)).length; null != e && n < r; )
                        e = e[ca(t[n++])];
                    return n && n == r ? e : o
                }
                function qr(e, t, n) {
                    var r = t(e);
                    return gu(e) ? r : en(r, n(e))
                }
                function Zr(e) {
                    return null == e ? e === o ? oe : Z : on && on in tt(e) ? function(e) {
                        var t = ct.call(e, on)
                          , n = e[on];
                        try {
                            e[on] = o;
                            var r = !0
                        } catch (e) {}
                        var i = ht.call(e);
                        return r && (t ? e[on] = n : delete e[on]),
                        i
                    }(e) : function(e) {
                        return ht.call(e)
                    }(e)
                }
                function Jr(e, t) {
                    return e > t
                }
                function ei(e, t) {
                    return null != e && ct.call(e, t)
                }
                function ti(e, t) {
                    return null != e && t in tt(e)
                }
                function ni(e, t, n) {
                    for (var i = n ? Zt : qt, a = e[0].length, u = e.length, s = u, l = r(u), c = 1 / 0, d = []; s--; ) {
                        var f = e[s];
                        s && t && (f = Jt(f, gn(t))),
                        c = Gn(f.length, c),
                        l[s] = !n && (t || a >= 120 && f.length >= 120) ? new wr(s && f) : o
                    }
                    f = e[0];
                    var h = -1
                      , p = l[0];
                    e: for (; ++h < a && d.length < c; ) {
                        var m = f[h]
                          , v = t ? t(m) : m;
                        if (m = n || 0 !== m ? m : 0,
                        !(p ? bn(p, v) : i(d, v, n))) {
                            for (s = u; --s; ) {
                                var g = l[s];
                                if (!(g ? bn(g, v) : i(e[s], v, n)))
                                    continue e
                            }
                            p && p.push(v),
                            d.push(m)
                        }
                    }
                    return d
                }
                function ri(e, t, n) {
                    var r = null == (e = ta(e, t = Gi(t, e))) ? e : e[ca(Ea(t))];
                    return null == r ? o : Ht(r, e, n)
                }
                function ii(e) {
                    return Du(e) && Zr(e) == B
                }
                function oi(e, t, n, r, i) {
                    return e === t || (null == e || null == t || !Du(e) && !Du(t) ? e != e && t != t : function(e, t, n, r, i, a) {
                        var u = gu(e)
                          , s = gu(t)
                          , l = u ? j : jo(e)
                          , c = s ? j : jo(t)
                          , d = (l = l == B ? J : l) == J
                          , f = (c = c == B ? J : c) == J
                          , h = l == c;
                        if (h && wu(e)) {
                            if (!wu(t))
                                return !1;
                            u = !0,
                            d = !1
                        }
                        if (h && !d)
                            return a || (a = new _r),
                            u || Iu(e) ? Po(e, t, n, r, i, a) : function(e, t, n, r, i, o, a) {
                                switch (n) {
                                case le:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                        return !1;
                                    e = e.buffer,
                                    t = t.buffer;
                                case se:
                                    return !(e.byteLength != t.byteLength || !o(new _t(e), new _t(t)));
                                case X:
                                case H:
                                case q:
                                    return hu(+e, +t);
                                case $:
                                    return e.name == t.name && e.message == t.message;
                                case te:
                                case re:
                                    return e == t + "";
                                case K:
                                    var u = Tn;
                                case ne:
                                    var s = r & m;
                                    if (u || (u = Pn),
                                    e.size != t.size && !s)
                                        return !1;
                                    var l = a.get(e);
                                    if (l)
                                        return l == t;
                                    r |= v,
                                    a.set(e, t);
                                    var c = Po(u(e), u(t), r, i, o, a);
                                    return a.delete(e),
                                    c;
                                case ie:
                                    if (dr)
                                        return dr.call(e) == dr.call(t)
                                }
                                return !1
                            }(e, t, l, n, r, i, a);
                        if (!(n & m)) {
                            var p = d && ct.call(e, "__wrapped__")
                              , g = f && ct.call(t, "__wrapped__");
                            if (p || g) {
                                var y = p ? e.value() : e
                                  , b = g ? t.value() : t;
                                return a || (a = new _r),
                                i(y, b, n, r, a)
                            }
                        }
                        return !!h && (a || (a = new _r),
                        function(e, t, n, r, i, a) {
                            var u = n & m
                              , s = Ao(e)
                              , l = s.length
                              , c = Ao(t).length;
                            if (l != c && !u)
                                return !1;
                            for (var d = l; d--; ) {
                                var f = s[d];
                                if (!(u ? f in t : ct.call(t, f)))
                                    return !1
                            }
                            var h = a.get(e);
                            if (h && a.get(t))
                                return h == t;
                            var p = !0;
                            a.set(e, t),
                            a.set(t, e);
                            for (var v = u; ++d < l; ) {
                                f = s[d];
                                var g = e[f]
                                  , y = t[f];
                                if (r)
                                    var b = u ? r(y, g, f, t, e, a) : r(g, y, f, e, t, a);
                                if (!(b === o ? g === y || i(g, y, n, r, a) : b)) {
                                    p = !1;
                                    break
                                }
                                v || (v = "constructor" == f)
                            }
                            if (p && !v) {
                                var x = e.constructor
                                  , w = t.constructor;
                                x != w && "constructor"in e && "constructor"in t && !("function" == typeof x && x instanceof x && "function" == typeof w && w instanceof w) && (p = !1)
                            }
                            return a.delete(e),
                            a.delete(t),
                            p
                        }(e, t, n, r, i, a))
                    }(e, t, n, r, oi, i))
                }
                function ai(e, t, n, r) {
                    var i = n.length
                      , a = i
                      , u = !r;
                    if (null == e)
                        return !a;
                    for (e = tt(e); i--; ) {
                        var s = n[i];
                        if (u && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                            return !1
                    }
                    for (; ++i < a; ) {
                        var l = (s = n[i])[0]
                          , c = e[l]
                          , d = s[1];
                        if (u && s[2]) {
                            if (c === o && !(l in e))
                                return !1
                        } else {
                            var f = new _r;
                            if (r)
                                var h = r(c, d, l, e, t, f);
                            if (!(h === o ? oi(d, c, m | v, r, f) : h))
                                return !1
                        }
                    }
                    return !0
                }
                function ui(e) {
                    return !(!Cu(e) || (t = e,
                    ft && ft in t)) && (Su(e) ? vt : Ge).test(da(e));
                    var t
                }
                function si(e) {
                    return "function" == typeof e ? e : null == e ? Ls : "object" == typeof e ? gu(e) ? pi(e[0], e[1]) : hi(e) : Us(e)
                }
                function li(e) {
                    if (!qo(e))
                        return Xn(e);
                    var t = [];
                    for (var n in tt(e))
                        ct.call(e, n) && "constructor" != n && t.push(n);
                    return t
                }
                function ci(e) {
                    if (!Cu(e))
                        return function(e) {
                            var t = [];
                            if (null != e)
                                for (var n in tt(e))
                                    t.push(n);
                            return t
                        }(e);
                    var t = qo(e)
                      , n = [];
                    for (var r in e)
                        ("constructor" != r || !t && ct.call(e, r)) && n.push(r);
                    return n
                }
                function di(e, t) {
                    return e < t
                }
                function fi(e, t) {
                    var n = -1
                      , i = bu(e) ? r(e.length) : [];
                    return Ur(e, function(e, r, o) {
                        i[++n] = t(e, r, o)
                    }),
                    i
                }
                function hi(e) {
                    var t = Fo(e);
                    return 1 == t.length && t[0][2] ? Jo(t[0][0], t[0][1]) : function(n) {
                        return n === e || ai(n, e, t)
                    }
                }
                function pi(e, t) {
                    return Qo(e) && Zo(t) ? Jo(ca(e), t) : function(n) {
                        var r = Ju(n, e);
                        return r === o && r === t ? es(n, e) : oi(t, r, m | v)
                    }
                }
                function mi(e, t, n, r, i) {
                    e !== t && Hr(t, function(a, u) {
                        if (Cu(a))
                            i || (i = new _r),
                            function(e, t, n, r, i, a, u) {
                                var s = na(e, n)
                                  , l = na(t, n)
                                  , c = u.get(l);
                                if (c)
                                    Cr(e, n, c);
                                else {
                                    var d = a ? a(s, l, n + "", e, t, u) : o
                                      , f = d === o;
                                    if (f) {
                                        var h = gu(l)
                                          , p = !h && wu(l)
                                          , m = !h && !p && Iu(l);
                                        d = l,
                                        h || p || m ? gu(s) ? d = s : xu(s) ? d = no(s) : p ? (f = !1,
                                        d = Ki(l, !0)) : m ? (f = !1,
                                        d = Zi(l, !0)) : d = [] : Au(l) || vu(l) ? (d = s,
                                        vu(s) ? d = Xu(s) : Cu(s) && !Su(s) || (d = Xo(l))) : f = !1
                                    }
                                    f && (u.set(l, d),
                                    i(d, l, r, a, u),
                                    u.delete(l)),
                                    Cr(e, n, d)
                                }
                            }(e, t, u, n, mi, r, i);
                        else {
                            var s = r ? r(na(e, u), a, u + "", e, t, i) : o;
                            s === o && (s = a),
                            Cr(e, u, s)
                        }
                    }, os)
                }
                function vi(e, t) {
                    var n = e.length;
                    if (n)
                        return Go(t += t < 0 ? n : 0, n) ? e[t] : o
                }
                function gi(e, t, n) {
                    var r = -1;
                    return t = Jt(t.length ? t : [Ls], gn(Io())),
                    function(e, t) {
                        var n = e.length;
                        for (e.sort(t); n--; )
                            e[n] = e[n].value;
                        return e
                    }(fi(e, function(e, n, i) {
                        return {
                            criteria: Jt(t, function(t) {
                                return t(e)
                            }),
                            index: ++r,
                            value: e
                        }
                    }), function(e, t) {
                        return function(e, t, n) {
                            for (var r = -1, i = e.criteria, o = t.criteria, a = i.length, u = n.length; ++r < a; ) {
                                var s = Ji(i[r], o[r]);
                                if (s) {
                                    if (r >= u)
                                        return s;
                                    var l = n[r];
                                    return s * ("desc" == l ? -1 : 1)
                                }
                            }
                            return e.index - t.index
                        }(e, t, n)
                    })
                }
                function yi(e, t, n) {
                    for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                        var a = t[r]
                          , u = Kr(e, a);
                        n(u, a) && Ti(o, Gi(a, e), u)
                    }
                    return o
                }
                function bi(e, t, n, r) {
                    var i = r ? ln : sn
                      , o = -1
                      , a = t.length
                      , u = e;
                    for (e === t && (t = no(t)),
                    n && (u = Jt(e, gn(n))); ++o < a; )
                        for (var s = 0, l = t[o], c = n ? n(l) : l; (s = i(u, c, s, r)) > -1; )
                            u !== e && Ot.call(u, s, 1),
                            Ot.call(e, s, 1);
                    return e
                }
                function xi(e, t) {
                    for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                        var i = t[n];
                        if (n == r || i !== o) {
                            var o = i;
                            Go(i) ? Ot.call(e, i, 1) : Fi(e, i)
                        }
                    }
                    return e
                }
                function wi(e, t) {
                    return e + Un(Yn() * (t - e + 1))
                }
                function _i(e, t) {
                    var n = "";
                    if (!e || t < 1 || t > R)
                        return n;
                    do {
                        t % 2 && (n += e),
                        (t = Un(t / 2)) && (e += e)
                    } while (t);return n
                }
                function Ei(e, t) {
                    return oa(ea(e, t, Ls), e + "")
                }
                function Si(e) {
                    return Sr(hs(e))
                }
                function ki(e, t) {
                    var n = hs(e);
                    return sa(n, Rr(t, 0, n.length))
                }
                function Ti(e, t, n, r) {
                    if (!Cu(e))
                        return e;
                    for (var i = -1, a = (t = Gi(t, e)).length, u = a - 1, s = e; null != s && ++i < a; ) {
                        var l = ca(t[i])
                          , c = n;
                        if (i != u) {
                            var d = s[l];
                            (c = r ? r(d, l, s) : o) === o && (c = Cu(d) ? d : Go(t[i + 1]) ? [] : {})
                        }
                        Dr(s, l, c),
                        s = s[l]
                    }
                    return e
                }
                var Ci = rr ? function(e, t) {
                    return rr.set(e, t),
                    e
                }
                : Ls
                  , Di = hn ? function(e, t) {
                    return hn(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Cs(t),
                        writable: !0
                    })
                }
                : Ls;
                function Pi(e) {
                    return sa(hs(e))
                }
                function Li(e, t, n) {
                    var i = -1
                      , o = e.length;
                    t < 0 && (t = -t > o ? 0 : o + t),
                    (n = n > o ? o : n) < 0 && (n += o),
                    o = t > n ? 0 : n - t >>> 0,
                    t >>>= 0;
                    for (var a = r(o); ++i < o; )
                        a[i] = e[i + t];
                    return a
                }
                function Ai(e, t) {
                    var n;
                    return Ur(e, function(e, r, i) {
                        return !(n = t(e, r, i))
                    }),
                    !!n
                }
                function Mi(e, t, n) {
                    var r = 0
                      , i = null == e ? r : e.length;
                    if ("number" == typeof t && t == t && i <= U) {
                        for (; r < i; ) {
                            var o = r + i >>> 1
                              , a = e[o];
                            null !== a && !Ou(a) && (n ? a <= t : a < t) ? r = o + 1 : i = o
                        }
                        return i
                    }
                    return Ni(e, t, Ls, n)
                }
                function Ni(e, t, n, r) {
                    t = n(t);
                    for (var i = 0, a = null == e ? 0 : e.length, u = t != t, s = null === t, l = Ou(t), c = t === o; i < a; ) {
                        var d = Un((i + a) / 2)
                          , f = n(e[d])
                          , h = f !== o
                          , p = null === f
                          , m = f == f
                          , v = Ou(f);
                        if (u)
                            var g = r || m;
                        else
                            g = c ? m && (r || h) : s ? m && h && (r || !p) : l ? m && h && !p && (r || !v) : !p && !v && (r ? f <= t : f < t);
                        g ? i = d + 1 : a = d
                    }
                    return Gn(a, F)
                }
                function Ri(e, t) {
                    for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                        var a = e[n]
                          , u = t ? t(a) : a;
                        if (!n || !hu(u, s)) {
                            var s = u;
                            o[i++] = 0 === a ? 0 : a
                        }
                    }
                    return o
                }
                function Oi(e) {
                    return "number" == typeof e ? e : Ou(e) ? I : +e
                }
                function Ii(e) {
                    if ("string" == typeof e)
                        return e;
                    if (gu(e))
                        return Jt(e, Ii) + "";
                    if (Ou(e))
                        return fr ? fr.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -N ? "-0" : t
                }
                function zi(e, t, n) {
                    var r = -1
                      , i = qt
                      , o = e.length
                      , u = !0
                      , s = []
                      , l = s;
                    if (n)
                        u = !1,
                        i = Zt;
                    else if (o >= a) {
                        var c = t ? null : Eo(e);
                        if (c)
                            return Pn(c);
                        u = !1,
                        i = bn,
                        l = new wr
                    } else
                        l = t ? [] : s;
                    e: for (; ++r < o; ) {
                        var d = e[r]
                          , f = t ? t(d) : d;
                        if (d = n || 0 !== d ? d : 0,
                        u && f == f) {
                            for (var h = l.length; h--; )
                                if (l[h] === f)
                                    continue e;
                            t && l.push(f),
                            s.push(d)
                        } else
                            i(l, f, n) || (l !== s && l.push(f),
                            s.push(d))
                    }
                    return s
                }
                function Fi(e, t) {
                    return null == (e = ta(e, t = Gi(t, e))) || delete e[ca(Ea(t))]
                }
                function Ui(e, t, n, r) {
                    return Ti(e, t, n(Kr(e, t)), r)
                }
                function Wi(e, t, n, r) {
                    for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); )
                        ;
                    return n ? Li(e, r ? 0 : o, r ? o + 1 : i) : Li(e, r ? o + 1 : 0, r ? i : o)
                }
                function Bi(e, t) {
                    var n = e;
                    return n instanceof gr && (n = n.value()),
                    tn(t, function(e, t) {
                        return t.func.apply(t.thisArg, en([e], t.args))
                    }, n)
                }
                function ji(e, t, n) {
                    var i = e.length;
                    if (i < 2)
                        return i ? zi(e[0]) : [];
                    for (var o = -1, a = r(i); ++o < i; )
                        for (var u = e[o], s = -1; ++s < i; )
                            s != o && (a[o] = Fr(a[o] || u, e[s], t, n));
                    return zi(Xr(a, 1), t, n)
                }
                function Vi(e, t, n) {
                    for (var r = -1, i = e.length, a = t.length, u = {}; ++r < i; ) {
                        var s = r < a ? t[r] : o;
                        n(u, e[r], s)
                    }
                    return u
                }
                function Xi(e) {
                    return xu(e) ? e : []
                }
                function Hi(e) {
                    return "function" == typeof e ? e : Ls
                }
                function Gi(e, t) {
                    return gu(e) ? e : Qo(e, t) ? [e] : la(Hu(e))
                }
                var $i = Ei;
                function Qi(e, t, n) {
                    var r = e.length;
                    return n = n === o ? r : n,
                    !t && n >= r ? e : Li(e, t, n)
                }
                var Yi = On || function(e) {
                    return Nt.clearTimeout(e)
                }
                ;
                function Ki(e, t) {
                    if (t)
                        return e.slice();
                    var n = e.length
                      , r = Dt ? Dt(n) : new e.constructor(n);
                    return e.copy(r),
                    r
                }
                function qi(e) {
                    var t = new e.constructor(e.byteLength);
                    return new _t(t).set(new _t(e)),
                    t
                }
                function Zi(e, t) {
                    var n = t ? qi(e.buffer) : e.buffer;
                    return new e.constructor(n,e.byteOffset,e.length)
                }
                function Ji(e, t) {
                    if (e !== t) {
                        var n = e !== o
                          , r = null === e
                          , i = e == e
                          , a = Ou(e)
                          , u = t !== o
                          , s = null === t
                          , l = t == t
                          , c = Ou(t);
                        if (!s && !c && !a && e > t || a && u && l && !s && !c || r && u && l || !n && l || !i)
                            return 1;
                        if (!r && !a && !c && e < t || c && n && i && !r && !a || s && n && i || !u && i || !l)
                            return -1
                    }
                    return 0
                }
                function eo(e, t, n, i) {
                    for (var o = -1, a = e.length, u = n.length, s = -1, l = t.length, c = Hn(a - u, 0), d = r(l + c), f = !i; ++s < l; )
                        d[s] = t[s];
                    for (; ++o < u; )
                        (f || o < a) && (d[n[o]] = e[o]);
                    for (; c--; )
                        d[s++] = e[o++];
                    return d
                }
                function to(e, t, n, i) {
                    for (var o = -1, a = e.length, u = -1, s = n.length, l = -1, c = t.length, d = Hn(a - s, 0), f = r(d + c), h = !i; ++o < d; )
                        f[o] = e[o];
                    for (var p = o; ++l < c; )
                        f[p + l] = t[l];
                    for (; ++u < s; )
                        (h || o < a) && (f[p + n[u]] = e[o++]);
                    return f
                }
                function no(e, t) {
                    var n = -1
                      , i = e.length;
                    for (t || (t = r(i)); ++n < i; )
                        t[n] = e[n];
                    return t
                }
                function ro(e, t, n, r) {
                    var i = !n;
                    n || (n = {});
                    for (var a = -1, u = t.length; ++a < u; ) {
                        var s = t[a]
                          , l = r ? r(n[s], e[s], s, n, e) : o;
                        l === o && (l = e[s]),
                        i ? Mr(n, s, l) : Dr(n, s, l)
                    }
                    return n
                }
                function io(e, t) {
                    return function(n, r) {
                        var i = gu(n) ? Gt : Lr
                          , o = t ? t() : {};
                        return i(n, e, Io(r, 2), o)
                    }
                }
                function oo(e) {
                    return Ei(function(t, n) {
                        var r = -1
                          , i = n.length
                          , a = i > 1 ? n[i - 1] : o
                          , u = i > 2 ? n[2] : o;
                        for (a = e.length > 3 && "function" == typeof a ? (i--,
                        a) : o,
                        u && $o(n[0], n[1], u) && (a = i < 3 ? o : a,
                        i = 1),
                        t = tt(t); ++r < i; ) {
                            var s = n[r];
                            s && e(t, s, r, a)
                        }
                        return t
                    })
                }
                function ao(e, t) {
                    return function(n, r) {
                        if (null == n)
                            return n;
                        if (!bu(n))
                            return e(n, r);
                        for (var i = n.length, o = t ? i : -1, a = tt(n); (t ? o-- : ++o < i) && !1 !== r(a[o], o, a); )
                            ;
                        return n
                    }
                }
                function uo(e) {
                    return function(t, n, r) {
                        for (var i = -1, o = tt(t), a = r(t), u = a.length; u--; ) {
                            var s = a[e ? u : ++i];
                            if (!1 === n(o[s], s, o))
                                break
                        }
                        return t
                    }
                }
                function so(e) {
                    return function(t) {
                        var n = kn(t = Hu(t)) ? Mn(t) : o
                          , r = n ? n[0] : t.charAt(0)
                          , i = n ? Qi(n, 1).join("") : t.slice(1);
                        return r[e]() + i
                    }
                }
                function lo(e) {
                    return function(t) {
                        return tn(Ss(vs(t).replace(yt, "")), e, "")
                    }
                }
                function co(e) {
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0],t[1]);
                        case 3:
                            return new e(t[0],t[1],t[2]);
                        case 4:
                            return new e(t[0],t[1],t[2],t[3]);
                        case 5:
                            return new e(t[0],t[1],t[2],t[3],t[4]);
                        case 6:
                            return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                        case 7:
                            return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                        }
                        var n = pr(e.prototype)
                          , r = e.apply(n, t);
                        return Cu(r) ? r : n
                    }
                }
                function fo(e) {
                    return function(t, n, r) {
                        var i = tt(t);
                        if (!bu(t)) {
                            var a = Io(n, 3);
                            t = is(t),
                            n = function(e) {
                                return a(i[e], e, i)
                            }
                        }
                        var u = e(t, n, r);
                        return u > -1 ? i[a ? t[u] : u] : o
                    }
                }
                function ho(e) {
                    return Lo(function(t) {
                        var n = t.length
                          , r = n
                          , i = vr.prototype.thru;
                        for (e && t.reverse(); r--; ) {
                            var a = t[r];
                            if ("function" != typeof a)
                                throw new it(s);
                            if (i && !u && "wrapper" == Ro(a))
                                var u = new vr([],!0)
                        }
                        for (r = u ? r : n; ++r < n; ) {
                            var l = Ro(a = t[r])
                              , c = "wrapper" == l ? No(a) : o;
                            u = c && Yo(c[0]) && c[1] == (S | x | _ | k) && !c[4].length && 1 == c[9] ? u[Ro(c[0])].apply(u, c[3]) : 1 == a.length && Yo(a) ? u[l]() : u.thru(a)
                        }
                        return function() {
                            var e = arguments
                              , r = e[0];
                            if (u && 1 == e.length && gu(r))
                                return u.plant(r).value();
                            for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
                                o = t[i].call(this, o);
                            return o
                        }
                    })
                }
                function po(e, t, n, i, a, u, s, l, c, d) {
                    var f = t & S
                      , h = t & g
                      , p = t & y
                      , m = t & (x | w)
                      , v = t & T
                      , b = p ? o : co(e);
                    return function g() {
                        for (var y = arguments.length, x = r(y), w = y; w--; )
                            x[w] = arguments[w];
                        if (m)
                            var _ = Oo(g)
                              , E = function(e, t) {
                                for (var n = e.length, r = 0; n--; )
                                    e[n] === t && ++r;
                                return r
                            }(x, _);
                        if (i && (x = eo(x, i, a, m)),
                        u && (x = to(x, u, s, m)),
                        y -= E,
                        m && y < d) {
                            var S = Dn(x, _);
                            return wo(e, t, po, g.placeholder, n, x, S, l, c, d - y)
                        }
                        var k = h ? n : this
                          , T = p ? k[e] : e;
                        return y = x.length,
                        l ? x = function(e, t) {
                            for (var n = e.length, r = Gn(t.length, n), i = no(e); r--; ) {
                                var a = t[r];
                                e[r] = Go(a, n) ? i[a] : o
                            }
                            return e
                        }(x, l) : v && y > 1 && x.reverse(),
                        f && c < y && (x.length = c),
                        this && this !== Nt && this instanceof g && (T = b || co(T)),
                        T.apply(k, x)
                    }
                }
                function mo(e, t) {
                    return function(n, r) {
                        return function(e, t, n, r) {
                            return $r(e, function(e, i, o) {
                                t(r, n(e), i, o)
                            }),
                            r
                        }(n, e, t(r), {})
                    }
                }
                function vo(e, t) {
                    return function(n, r) {
                        var i;
                        if (n === o && r === o)
                            return t;
                        if (n !== o && (i = n),
                        r !== o) {
                            if (i === o)
                                return r;
                            "string" == typeof n || "string" == typeof r ? (n = Ii(n),
                            r = Ii(r)) : (n = Oi(n),
                            r = Oi(r)),
                            i = e(n, r)
                        }
                        return i
                    }
                }
                function go(e) {
                    return Lo(function(t) {
                        return t = Jt(t, gn(Io())),
                        Ei(function(n) {
                            var r = this;
                            return e(t, function(e) {
                                return Ht(e, r, n)
                            })
                        })
                    })
                }
                function yo(e, t) {
                    var n = (t = t === o ? " " : Ii(t)).length;
                    if (n < 2)
                        return n ? _i(t, e) : t;
                    var r = _i(t, Fn(e / An(t)));
                    return kn(t) ? Qi(Mn(r), 0, e).join("") : r.slice(0, e)
                }
                function bo(e) {
                    return function(t, n, i) {
                        return i && "number" != typeof i && $o(t, n, i) && (n = i = o),
                        t = Wu(t),
                        n === o ? (n = t,
                        t = 0) : n = Wu(n),
                        function(e, t, n, i) {
                            for (var o = -1, a = Hn(Fn((t - e) / (n || 1)), 0), u = r(a); a--; )
                                u[i ? a : ++o] = e,
                                e += n;
                            return u
                        }(t, n, i = i === o ? t < n ? 1 : -1 : Wu(i), e)
                    }
                }
                function xo(e) {
                    return function(t, n) {
                        return "string" == typeof t && "string" == typeof n || (t = Vu(t),
                        n = Vu(n)),
                        e(t, n)
                    }
                }
                function wo(e, t, n, r, i, a, u, s, l, c) {
                    var d = t & x;
                    t |= d ? _ : E,
                    (t &= ~(d ? E : _)) & b || (t &= ~(g | y));
                    var f = [e, t, i, d ? a : o, d ? u : o, d ? o : a, d ? o : u, s, l, c]
                      , h = n.apply(o, f);
                    return Yo(e) && ra(h, f),
                    h.placeholder = r,
                    aa(h, e, t)
                }
                function _o(e) {
                    var t = et[e];
                    return function(e, n) {
                        if (e = Vu(e),
                        n = null == n ? 0 : Gn(Bu(n), 292)) {
                            var r = (Hu(e) + "e").split("e");
                            return +((r = (Hu(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                        }
                        return t(e)
                    }
                }
                var Eo = er && 1 / Pn(new er([, -0]))[1] == N ? function(e) {
                    return new er(e)
                }
                : Os;
                function So(e) {
                    return function(t) {
                        var n = jo(t);
                        return n == K ? Tn(t) : n == ne ? Ln(t) : function(e, t) {
                            return Jt(t, function(t) {
                                return [t, e[t]]
                            })
                        }(t, e(t))
                    }
                }
                function ko(e, t, n, i, a, u, l, c) {
                    var f = t & y;
                    if (!f && "function" != typeof e)
                        throw new it(s);
                    var h = i ? i.length : 0;
                    if (h || (t &= ~(_ | E),
                    i = a = o),
                    l = l === o ? l : Hn(Bu(l), 0),
                    c = c === o ? c : Bu(c),
                    h -= a ? a.length : 0,
                    t & E) {
                        var p = i
                          , m = a;
                        i = a = o
                    }
                    var v = f ? o : No(e)
                      , T = [e, t, n, i, a, p, m, u, l, c];
                    if (v && function(e, t) {
                        var n = e[1]
                          , r = t[1]
                          , i = n | r
                          , o = i < (g | y | S)
                          , a = r == S && n == x || r == S && n == k && e[7].length <= t[8] || r == (S | k) && t[7].length <= t[8] && n == x;
                        if (!o && !a)
                            return e;
                        r & g && (e[2] = t[2],
                        i |= n & g ? 0 : b);
                        var u = t[3];
                        if (u) {
                            var s = e[3];
                            e[3] = s ? eo(s, u, t[4]) : u,
                            e[4] = s ? Dn(e[3], d) : t[4]
                        }
                        (u = t[5]) && (s = e[5],
                        e[5] = s ? to(s, u, t[6]) : u,
                        e[6] = s ? Dn(e[5], d) : t[6]),
                        (u = t[7]) && (e[7] = u),
                        r & S && (e[8] = null == e[8] ? t[8] : Gn(e[8], t[8])),
                        null == e[9] && (e[9] = t[9]),
                        e[0] = t[0],
                        e[1] = i
                    }(T, v),
                    e = T[0],
                    t = T[1],
                    n = T[2],
                    i = T[3],
                    a = T[4],
                    !(c = T[9] = T[9] === o ? f ? 0 : e.length : Hn(T[9] - h, 0)) && t & (x | w) && (t &= ~(x | w)),
                    t && t != g)
                        C = t == x || t == w ? function(e, t, n) {
                            var i = co(e);
                            return function a() {
                                for (var u = arguments.length, s = r(u), l = u, c = Oo(a); l--; )
                                    s[l] = arguments[l];
                                var d = u < 3 && s[0] !== c && s[u - 1] !== c ? [] : Dn(s, c);
                                return (u -= d.length) < n ? wo(e, t, po, a.placeholder, o, s, d, o, o, n - u) : Ht(this && this !== Nt && this instanceof a ? i : e, this, s)
                            }
                        }(e, t, c) : t != _ && t != (g | _) || a.length ? po.apply(o, T) : function(e, t, n, i) {
                            var o = t & g
                              , a = co(e);
                            return function t() {
                                for (var u = -1, s = arguments.length, l = -1, c = i.length, d = r(c + s), f = this && this !== Nt && this instanceof t ? a : e; ++l < c; )
                                    d[l] = i[l];
                                for (; s--; )
                                    d[l++] = arguments[++u];
                                return Ht(f, o ? n : this, d)
                            }
                        }(e, t, n, i);
                    else
                        var C = function(e, t, n) {
                            var r = t & g
                              , i = co(e);
                            return function t() {
                                return (this && this !== Nt && this instanceof t ? i : e).apply(r ? n : this, arguments)
                            }
                        }(e, t, n);
                    return aa((v ? Ci : ra)(C, T), e, t)
                }
                function To(e, t, n, r) {
                    return e === o || hu(e, ut[n]) && !ct.call(r, n) ? t : e
                }
                function Co(e, t, n, r, i, a) {
                    return Cu(e) && Cu(t) && (a.set(t, e),
                    mi(e, t, o, Co, a),
                    a.delete(t)),
                    e
                }
                function Do(e) {
                    return Au(e) ? o : e
                }
                function Po(e, t, n, r, i, a) {
                    var u = n & m
                      , s = e.length
                      , l = t.length;
                    if (s != l && !(u && l > s))
                        return !1;
                    var c = a.get(e);
                    if (c && a.get(t))
                        return c == t;
                    var d = -1
                      , f = !0
                      , h = n & v ? new wr : o;
                    for (a.set(e, t),
                    a.set(t, e); ++d < s; ) {
                        var p = e[d]
                          , g = t[d];
                        if (r)
                            var y = u ? r(g, p, d, t, e, a) : r(p, g, d, e, t, a);
                        if (y !== o) {
                            if (y)
                                continue;
                            f = !1;
                            break
                        }
                        if (h) {
                            if (!rn(t, function(e, t) {
                                if (!bn(h, t) && (p === e || i(p, e, n, r, a)))
                                    return h.push(t)
                            })) {
                                f = !1;
                                break
                            }
                        } else if (p !== g && !i(p, g, n, r, a)) {
                            f = !1;
                            break
                        }
                    }
                    return a.delete(e),
                    a.delete(t),
                    f
                }
                function Lo(e) {
                    return oa(ea(e, o, ya), e + "")
                }
                function Ao(e) {
                    return qr(e, is, Wo)
                }
                function Mo(e) {
                    return qr(e, os, Bo)
                }
                var No = rr ? function(e) {
                    return rr.get(e)
                }
                : Os;
                function Ro(e) {
                    for (var t = e.name + "", n = ir[t], r = ct.call(ir, t) ? n.length : 0; r--; ) {
                        var i = n[r]
                          , o = i.func;
                        if (null == o || o == e)
                            return i.name
                    }
                    return t
                }
                function Oo(e) {
                    return (ct.call(hr, "placeholder") ? hr : e).placeholder
                }
                function Io() {
                    var e = hr.iteratee || As;
                    return e = e === As ? si : e,
                    arguments.length ? e(arguments[0], arguments[1]) : e
                }
                function zo(e, t) {
                    var n, r, i = e.__data__;
                    return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
                }
                function Fo(e) {
                    for (var t = is(e), n = t.length; n--; ) {
                        var r = t[n]
                          , i = e[r];
                        t[n] = [r, i, Zo(i)]
                    }
                    return t
                }
                function Uo(e, t) {
                    var n = function(e, t) {
                        return null == e ? o : e[t]
                    }(e, t);
                    return ui(n) ? n : o
                }
                var Wo = Wn ? function(e) {
                    return null == e ? [] : (e = tt(e),
                    Kt(Wn(e), function(t) {
                        return Rt.call(e, t)
                    }))
                }
                : js
                  , Bo = Wn ? function(e) {
                    for (var t = []; e; )
                        en(t, Wo(e)),
                        e = At(e);
                    return t
                }
                : js
                  , jo = Zr;
                function Vo(e, t, n) {
                    for (var r = -1, i = (t = Gi(t, e)).length, o = !1; ++r < i; ) {
                        var a = ca(t[r]);
                        if (!(o = null != e && n(e, a)))
                            break;
                        e = e[a]
                    }
                    return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && Tu(i) && Go(a, i) && (gu(e) || vu(e))
                }
                function Xo(e) {
                    return "function" != typeof e.constructor || qo(e) ? {} : pr(At(e))
                }
                function Ho(e) {
                    return gu(e) || vu(e) || !!(zt && e && e[zt])
                }
                function Go(e, t) {
                    var n = typeof e;
                    return !!(t = null == t ? R : t) && ("number" == n || "symbol" != n && Qe.test(e)) && e > -1 && e % 1 == 0 && e < t
                }
                function $o(e, t, n) {
                    if (!Cu(n))
                        return !1;
                    var r = typeof t;
                    return !!("number" == r ? bu(n) && Go(t, n.length) : "string" == r && t in n) && hu(n[t], e)
                }
                function Qo(e, t) {
                    if (gu(e))
                        return !1;
                    var n = typeof e;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Ou(e)) || Le.test(e) || !Pe.test(e) || null != t && e in tt(t)
                }
                function Yo(e) {
                    var t = Ro(e)
                      , n = hr[t];
                    if ("function" != typeof n || !(t in gr.prototype))
                        return !1;
                    if (e === n)
                        return !0;
                    var r = No(n);
                    return !!r && e === r[0]
                }
                (qn && jo(new qn(new ArrayBuffer(1))) != le || Zn && jo(new Zn) != K || Jn && "[object Promise]" != jo(Jn.resolve()) || er && jo(new er) != ne || tr && jo(new tr) != ae) && (jo = function(e) {
                    var t = Zr(e)
                      , n = t == J ? e.constructor : o
                      , r = n ? da(n) : "";
                    if (r)
                        switch (r) {
                        case or:
                            return le;
                        case ar:
                            return K;
                        case ur:
                            return "[object Promise]";
                        case sr:
                            return ne;
                        case lr:
                            return ae
                        }
                    return t
                }
                );
                var Ko = st ? Su : Vs;
                function qo(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || ut)
                }
                function Zo(e) {
                    return e == e && !Cu(e)
                }
                function Jo(e, t) {
                    return function(n) {
                        return null != n && n[e] === t && (t !== o || e in tt(n))
                    }
                }
                function ea(e, t, n) {
                    return t = Hn(t === o ? e.length - 1 : t, 0),
                    function() {
                        for (var i = arguments, o = -1, a = Hn(i.length - t, 0), u = r(a); ++o < a; )
                            u[o] = i[t + o];
                        o = -1;
                        for (var s = r(t + 1); ++o < t; )
                            s[o] = i[o];
                        return s[t] = n(u),
                        Ht(e, this, s)
                    }
                }
                function ta(e, t) {
                    return t.length < 2 ? e : Kr(e, Li(t, 0, -1))
                }
                function na(e, t) {
                    if ("__proto__" != t)
                        return e[t]
                }
                var ra = ua(Ci)
                  , ia = zn || function(e, t) {
                    return Nt.setTimeout(e, t)
                }
                  , oa = ua(Di);
                function aa(e, t, n) {
                    var r = t + "";
                    return oa(e, function(e, t) {
                        var n = t.length;
                        if (!n)
                            return e;
                        var r = n - 1;
                        return t[r] = (n > 1 ? "& " : "") + t[r],
                        t = t.join(n > 2 ? ", " : " "),
                        e.replace(ze, "{\n/* [wrapped with " + t + "] */\n")
                    }(r, function(e, t) {
                        return $t(W, function(n) {
                            var r = "_." + n[0];
                            t & n[1] && !qt(e, r) && e.push(r)
                        }),
                        e.sort()
                    }(function(e) {
                        var t = e.match(Fe);
                        return t ? t[1].split(Ue) : []
                    }(r), n)))
                }
                function ua(e) {
                    var t = 0
                      , n = 0;
                    return function() {
                        var r = $n()
                          , i = L - (r - n);
                        if (n = r,
                        i > 0) {
                            if (++t >= P)
                                return arguments[0]
                        } else
                            t = 0;
                        return e.apply(o, arguments)
                    }
                }
                function sa(e, t) {
                    var n = -1
                      , r = e.length
                      , i = r - 1;
                    for (t = t === o ? r : t; ++n < t; ) {
                        var a = wi(n, i)
                          , u = e[a];
                        e[a] = e[n],
                        e[n] = u
                    }
                    return e.length = t,
                    e
                }
                var la = function(e) {
                    var t = uu(e, function(e) {
                        return n.size === c && n.clear(),
                        e
                    })
                      , n = t.cache;
                    return t
                }(function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""),
                    e.replace(Ae, function(e, n, r, i) {
                        t.push(r ? i.replace(Be, "$1") : n || e)
                    }),
                    t
                });
                function ca(e) {
                    if ("string" == typeof e || Ou(e))
                        return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -N ? "-0" : t
                }
                function da(e) {
                    if (null != e) {
                        try {
                            return lt.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }
                function fa(e) {
                    if (e instanceof gr)
                        return e.clone();
                    var t = new vr(e.__wrapped__,e.__chain__);
                    return t.__actions__ = no(e.__actions__),
                    t.__index__ = e.__index__,
                    t.__values__ = e.__values__,
                    t
                }
                var ha = Ei(function(e, t) {
                    return xu(e) ? Fr(e, Xr(t, 1, xu, !0)) : []
                })
                  , pa = Ei(function(e, t) {
                    var n = Ea(t);
                    return xu(n) && (n = o),
                    xu(e) ? Fr(e, Xr(t, 1, xu, !0), Io(n, 2)) : []
                })
                  , ma = Ei(function(e, t) {
                    var n = Ea(t);
                    return xu(n) && (n = o),
                    xu(e) ? Fr(e, Xr(t, 1, xu, !0), o, n) : []
                });
                function va(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r)
                        return -1;
                    var i = null == n ? 0 : Bu(n);
                    return i < 0 && (i = Hn(r + i, 0)),
                    un(e, Io(t, 3), i)
                }
                function ga(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r)
                        return -1;
                    var i = r - 1;
                    return n !== o && (i = Bu(n),
                    i = n < 0 ? Hn(r + i, 0) : Gn(i, r - 1)),
                    un(e, Io(t, 3), i, !0)
                }
                function ya(e) {
                    return null != e && e.length ? Xr(e, 1) : []
                }
                function ba(e) {
                    return e && e.length ? e[0] : o
                }
                var xa = Ei(function(e) {
                    var t = Jt(e, Xi);
                    return t.length && t[0] === e[0] ? ni(t) : []
                })
                  , wa = Ei(function(e) {
                    var t = Ea(e)
                      , n = Jt(e, Xi);
                    return t === Ea(n) ? t = o : n.pop(),
                    n.length && n[0] === e[0] ? ni(n, Io(t, 2)) : []
                })
                  , _a = Ei(function(e) {
                    var t = Ea(e)
                      , n = Jt(e, Xi);
                    return (t = "function" == typeof t ? t : o) && n.pop(),
                    n.length && n[0] === e[0] ? ni(n, o, t) : []
                });
                function Ea(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? e[t - 1] : o
                }
                var Sa = Ei(ka);
                function ka(e, t) {
                    return e && e.length && t && t.length ? bi(e, t) : e
                }
                var Ta = Lo(function(e, t) {
                    var n = null == e ? 0 : e.length
                      , r = Nr(e, t);
                    return xi(e, Jt(t, function(e) {
                        return Go(e, n) ? +e : e
                    }).sort(Ji)),
                    r
                });
                function Ca(e) {
                    return null == e ? e : Kn.call(e)
                }
                var Da = Ei(function(e) {
                    return zi(Xr(e, 1, xu, !0))
                })
                  , Pa = Ei(function(e) {
                    var t = Ea(e);
                    return xu(t) && (t = o),
                    zi(Xr(e, 1, xu, !0), Io(t, 2))
                })
                  , La = Ei(function(e) {
                    var t = Ea(e);
                    return t = "function" == typeof t ? t : o,
                    zi(Xr(e, 1, xu, !0), o, t)
                });
                function Aa(e) {
                    if (!e || !e.length)
                        return [];
                    var t = 0;
                    return e = Kt(e, function(e) {
                        if (xu(e))
                            return t = Hn(e.length, t),
                            !0
                    }),
                    vn(t, function(t) {
                        return Jt(e, fn(t))
                    })
                }
                function Ma(e, t) {
                    if (!e || !e.length)
                        return [];
                    var n = Aa(e);
                    return null == t ? n : Jt(n, function(e) {
                        return Ht(t, o, e)
                    })
                }
                var Na = Ei(function(e, t) {
                    return xu(e) ? Fr(e, t) : []
                })
                  , Ra = Ei(function(e) {
                    return ji(Kt(e, xu))
                })
                  , Oa = Ei(function(e) {
                    var t = Ea(e);
                    return xu(t) && (t = o),
                    ji(Kt(e, xu), Io(t, 2))
                })
                  , Ia = Ei(function(e) {
                    var t = Ea(e);
                    return t = "function" == typeof t ? t : o,
                    ji(Kt(e, xu), o, t)
                })
                  , za = Ei(Aa);
                var Fa = Ei(function(e) {
                    var t = e.length
                      , n = t > 1 ? e[t - 1] : o;
                    return n = "function" == typeof n ? (e.pop(),
                    n) : o,
                    Ma(e, n)
                });
                function Ua(e) {
                    var t = hr(e);
                    return t.__chain__ = !0,
                    t
                }
                function Wa(e, t) {
                    return t(e)
                }
                var Ba = Lo(function(e) {
                    var t = e.length
                      , n = t ? e[0] : 0
                      , r = this.__wrapped__
                      , i = function(t) {
                        return Nr(t, e)
                    };
                    return !(t > 1 || this.__actions__.length) && r instanceof gr && Go(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                        func: Wa,
                        args: [i],
                        thisArg: o
                    }),
                    new vr(r,this.__chain__).thru(function(e) {
                        return t && !e.length && e.push(o),
                        e
                    })) : this.thru(i)
                });
                var ja = io(function(e, t, n) {
                    ct.call(e, n) ? ++e[n] : Mr(e, n, 1)
                });
                var Va = fo(va)
                  , Xa = fo(ga);
                function Ha(e, t) {
                    return (gu(e) ? $t : Ur)(e, Io(t, 3))
                }
                function Ga(e, t) {
                    return (gu(e) ? Qt : Wr)(e, Io(t, 3))
                }
                var $a = io(function(e, t, n) {
                    ct.call(e, n) ? e[n].push(t) : Mr(e, n, [t])
                });
                var Qa = Ei(function(e, t, n) {
                    var i = -1
                      , o = "function" == typeof t
                      , a = bu(e) ? r(e.length) : [];
                    return Ur(e, function(e) {
                        a[++i] = o ? Ht(t, e, n) : ri(e, t, n)
                    }),
                    a
                })
                  , Ya = io(function(e, t, n) {
                    Mr(e, n, t)
                });
                function Ka(e, t) {
                    return (gu(e) ? Jt : fi)(e, Io(t, 3))
                }
                var qa = io(function(e, t, n) {
                    e[n ? 0 : 1].push(t)
                }, function() {
                    return [[], []]
                });
                var Za = Ei(function(e, t) {
                    if (null == e)
                        return [];
                    var n = t.length;
                    return n > 1 && $o(e, t[0], t[1]) ? t = [] : n > 2 && $o(t[0], t[1], t[2]) && (t = [t[0]]),
                    gi(e, Xr(t, 1), [])
                })
                  , Ja = In || function() {
                    return Nt.Date.now()
                }
                ;
                function eu(e, t, n) {
                    return t = n ? o : t,
                    t = e && null == t ? e.length : t,
                    ko(e, S, o, o, o, o, t)
                }
                function tu(e, t) {
                    var n;
                    if ("function" != typeof t)
                        throw new it(s);
                    return e = Bu(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)),
                        e <= 1 && (t = o),
                        n
                    }
                }
                var nu = Ei(function(e, t, n) {
                    var r = g;
                    if (n.length) {
                        var i = Dn(n, Oo(nu));
                        r |= _
                    }
                    return ko(e, r, t, n, i)
                })
                  , ru = Ei(function(e, t, n) {
                    var r = g | y;
                    if (n.length) {
                        var i = Dn(n, Oo(ru));
                        r |= _
                    }
                    return ko(t, r, e, n, i)
                });
                function iu(e, t, n) {
                    var r, i, a, u, l, c, d = 0, f = !1, h = !1, p = !0;
                    if ("function" != typeof e)
                        throw new it(s);
                    function m(t) {
                        var n = r
                          , a = i;
                        return r = i = o,
                        d = t,
                        u = e.apply(a, n)
                    }
                    function v(e) {
                        var n = e - c;
                        return c === o || n >= t || n < 0 || h && e - d >= a
                    }
                    function g() {
                        var e = Ja();
                        if (v(e))
                            return y(e);
                        l = ia(g, function(e) {
                            var n = t - (e - c);
                            return h ? Gn(n, a - (e - d)) : n
                        }(e))
                    }
                    function y(e) {
                        return l = o,
                        p && r ? m(e) : (r = i = o,
                        u)
                    }
                    function b() {
                        var e = Ja()
                          , n = v(e);
                        if (r = arguments,
                        i = this,
                        c = e,
                        n) {
                            if (l === o)
                                return function(e) {
                                    return d = e,
                                    l = ia(g, t),
                                    f ? m(e) : u
                                }(c);
                            if (h)
                                return l = ia(g, t),
                                m(c)
                        }
                        return l === o && (l = ia(g, t)),
                        u
                    }
                    return t = Vu(t) || 0,
                    Cu(n) && (f = !!n.leading,
                    a = (h = "maxWait"in n) ? Hn(Vu(n.maxWait) || 0, t) : a,
                    p = "trailing"in n ? !!n.trailing : p),
                    b.cancel = function() {
                        l !== o && Yi(l),
                        d = 0,
                        r = c = i = l = o
                    }
                    ,
                    b.flush = function() {
                        return l === o ? u : y(Ja())
                    }
                    ,
                    b
                }
                var ou = Ei(function(e, t) {
                    return zr(e, 1, t)
                })
                  , au = Ei(function(e, t, n) {
                    return zr(e, Vu(t) || 0, n)
                });
                function uu(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t)
                        throw new it(s);
                    var n = function() {
                        var r = arguments
                          , i = t ? t.apply(this, r) : r[0]
                          , o = n.cache;
                        if (o.has(i))
                            return o.get(i);
                        var a = e.apply(this, r);
                        return n.cache = o.set(i, a) || o,
                        a
                    };
                    return n.cache = new (uu.Cache || xr),
                    n
                }
                function su(e) {
                    if ("function" != typeof e)
                        throw new it(s);
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }
                uu.Cache = xr;
                var lu = $i(function(e, t) {
                    var n = (t = 1 == t.length && gu(t[0]) ? Jt(t[0], gn(Io())) : Jt(Xr(t, 1), gn(Io()))).length;
                    return Ei(function(r) {
                        for (var i = -1, o = Gn(r.length, n); ++i < o; )
                            r[i] = t[i].call(this, r[i]);
                        return Ht(e, this, r)
                    })
                })
                  , cu = Ei(function(e, t) {
                    var n = Dn(t, Oo(cu));
                    return ko(e, _, o, t, n)
                })
                  , du = Ei(function(e, t) {
                    var n = Dn(t, Oo(du));
                    return ko(e, E, o, t, n)
                })
                  , fu = Lo(function(e, t) {
                    return ko(e, k, o, o, o, t)
                });
                function hu(e, t) {
                    return e === t || e != e && t != t
                }
                var pu = xo(Jr)
                  , mu = xo(function(e, t) {
                    return e >= t
                })
                  , vu = ii(function() {
                    return arguments
                }()) ? ii : function(e) {
                    return Du(e) && ct.call(e, "callee") && !Rt.call(e, "callee")
                }
                  , gu = r.isArray
                  , yu = Ut ? gn(Ut) : function(e) {
                    return Du(e) && Zr(e) == se
                }
                ;
                function bu(e) {
                    return null != e && Tu(e.length) && !Su(e)
                }
                function xu(e) {
                    return Du(e) && bu(e)
                }
                var wu = Bn || Vs
                  , _u = Wt ? gn(Wt) : function(e) {
                    return Du(e) && Zr(e) == H
                }
                ;
                function Eu(e) {
                    if (!Du(e))
                        return !1;
                    var t = Zr(e);
                    return t == $ || t == G || "string" == typeof e.message && "string" == typeof e.name && !Au(e)
                }
                function Su(e) {
                    if (!Cu(e))
                        return !1;
                    var t = Zr(e);
                    return t == Q || t == Y || t == V || t == ee
                }
                function ku(e) {
                    return "number" == typeof e && e == Bu(e)
                }
                function Tu(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= R
                }
                function Cu(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }
                function Du(e) {
                    return null != e && "object" == typeof e
                }
                var Pu = Bt ? gn(Bt) : function(e) {
                    return Du(e) && jo(e) == K
                }
                ;
                function Lu(e) {
                    return "number" == typeof e || Du(e) && Zr(e) == q
                }
                function Au(e) {
                    if (!Du(e) || Zr(e) != J)
                        return !1;
                    var t = At(e);
                    if (null === t)
                        return !0;
                    var n = ct.call(t, "constructor") && t.constructor;
                    return "function" == typeof n && n instanceof n && lt.call(n) == pt
                }
                var Mu = jt ? gn(jt) : function(e) {
                    return Du(e) && Zr(e) == te
                }
                ;
                var Nu = Vt ? gn(Vt) : function(e) {
                    return Du(e) && jo(e) == ne
                }
                ;
                function Ru(e) {
                    return "string" == typeof e || !gu(e) && Du(e) && Zr(e) == re
                }
                function Ou(e) {
                    return "symbol" == typeof e || Du(e) && Zr(e) == ie
                }
                var Iu = Xt ? gn(Xt) : function(e) {
                    return Du(e) && Tu(e.length) && !!Tt[Zr(e)]
                }
                ;
                var zu = xo(di)
                  , Fu = xo(function(e, t) {
                    return e <= t
                });
                function Uu(e) {
                    if (!e)
                        return [];
                    if (bu(e))
                        return Ru(e) ? Mn(e) : no(e);
                    if (Ft && e[Ft])
                        return function(e) {
                            for (var t, n = []; !(t = e.next()).done; )
                                n.push(t.value);
                            return n
                        }(e[Ft]());
                    var t = jo(e);
                    return (t == K ? Tn : t == ne ? Pn : hs)(e)
                }
                function Wu(e) {
                    return e ? (e = Vu(e)) === N || e === -N ? (e < 0 ? -1 : 1) * O : e == e ? e : 0 : 0 === e ? e : 0
                }
                function Bu(e) {
                    var t = Wu(e)
                      , n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }
                function ju(e) {
                    return e ? Rr(Bu(e), 0, z) : 0
                }
                function Vu(e) {
                    if ("number" == typeof e)
                        return e;
                    if (Ou(e))
                        return I;
                    if (Cu(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = Cu(t) ? t + "" : t
                    }
                    if ("string" != typeof e)
                        return 0 === e ? e : +e;
                    e = e.replace(Re, "");
                    var n = He.test(e);
                    return n || $e.test(e) ? Lt(e.slice(2), n ? 2 : 8) : Xe.test(e) ? I : +e
                }
                function Xu(e) {
                    return ro(e, os(e))
                }
                function Hu(e) {
                    return null == e ? "" : Ii(e)
                }
                var Gu = oo(function(e, t) {
                    if (qo(t) || bu(t))
                        ro(t, is(t), e);
                    else
                        for (var n in t)
                            ct.call(t, n) && Dr(e, n, t[n])
                })
                  , $u = oo(function(e, t) {
                    ro(t, os(t), e)
                })
                  , Qu = oo(function(e, t, n, r) {
                    ro(t, os(t), e, r)
                })
                  , Yu = oo(function(e, t, n, r) {
                    ro(t, is(t), e, r)
                })
                  , Ku = Lo(Nr);
                var qu = Ei(function(e, t) {
                    e = tt(e);
                    var n = -1
                      , r = t.length
                      , i = r > 2 ? t[2] : o;
                    for (i && $o(t[0], t[1], i) && (r = 1); ++n < r; )
                        for (var a = t[n], u = os(a), s = -1, l = u.length; ++s < l; ) {
                            var c = u[s]
                              , d = e[c];
                            (d === o || hu(d, ut[c]) && !ct.call(e, c)) && (e[c] = a[c])
                        }
                    return e
                })
                  , Zu = Ei(function(e) {
                    return e.push(o, Co),
                    Ht(us, o, e)
                });
                function Ju(e, t, n) {
                    var r = null == e ? o : Kr(e, t);
                    return r === o ? n : r
                }
                function es(e, t) {
                    return null != e && Vo(e, t, ti)
                }
                var ts = mo(function(e, t, n) {
                    null != t && "function" != typeof t.toString && (t = ht.call(t)),
                    e[t] = n
                }, Cs(Ls))
                  , ns = mo(function(e, t, n) {
                    null != t && "function" != typeof t.toString && (t = ht.call(t)),
                    ct.call(e, t) ? e[t].push(n) : e[t] = [n]
                }, Io)
                  , rs = Ei(ri);
                function is(e) {
                    return bu(e) ? Er(e) : li(e)
                }
                function os(e) {
                    return bu(e) ? Er(e, !0) : ci(e)
                }
                var as = oo(function(e, t, n) {
                    mi(e, t, n)
                })
                  , us = oo(function(e, t, n, r) {
                    mi(e, t, n, r)
                })
                  , ss = Lo(function(e, t) {
                    var n = {};
                    if (null == e)
                        return n;
                    var r = !1;
                    t = Jt(t, function(t) {
                        return t = Gi(t, e),
                        r || (r = t.length > 1),
                        t
                    }),
                    ro(e, Mo(e), n),
                    r && (n = Or(n, f | h | p, Do));
                    for (var i = t.length; i--; )
                        Fi(n, t[i]);
                    return n
                });
                var ls = Lo(function(e, t) {
                    return null == e ? {} : function(e, t) {
                        return yi(e, t, function(t, n) {
                            return es(e, n)
                        })
                    }(e, t)
                });
                function cs(e, t) {
                    if (null == e)
                        return {};
                    var n = Jt(Mo(e), function(e) {
                        return [e]
                    });
                    return t = Io(t),
                    yi(e, n, function(e, n) {
                        return t(e, n[0])
                    })
                }
                var ds = So(is)
                  , fs = So(os);
                function hs(e) {
                    return null == e ? [] : yn(e, is(e))
                }
                var ps = lo(function(e, t, n) {
                    return t = t.toLowerCase(),
                    e + (n ? ms(t) : t)
                });
                function ms(e) {
                    return Es(Hu(e).toLowerCase())
                }
                function vs(e) {
                    return (e = Hu(e)) && e.replace(Ye, _n).replace(bt, "")
                }
                var gs = lo(function(e, t, n) {
                    return e + (n ? "-" : "") + t.toLowerCase()
                })
                  , ys = lo(function(e, t, n) {
                    return e + (n ? " " : "") + t.toLowerCase()
                })
                  , bs = so("toLowerCase");
                var xs = lo(function(e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase()
                });
                var ws = lo(function(e, t, n) {
                    return e + (n ? " " : "") + Es(t)
                });
                var _s = lo(function(e, t, n) {
                    return e + (n ? " " : "") + t.toUpperCase()
                })
                  , Es = so("toUpperCase");
                function Ss(e, t, n) {
                    return e = Hu(e),
                    (t = n ? o : t) === o ? function(e) {
                        return Et.test(e)
                    }(e) ? function(e) {
                        return e.match(wt) || []
                    }(e) : function(e) {
                        return e.match(We) || []
                    }(e) : e.match(t) || []
                }
                var ks = Ei(function(e, t) {
                    try {
                        return Ht(e, o, t)
                    } catch (e) {
                        return Eu(e) ? e : new Ze(e)
                    }
                })
                  , Ts = Lo(function(e, t) {
                    return $t(t, function(t) {
                        t = ca(t),
                        Mr(e, t, nu(e[t], e))
                    }),
                    e
                });
                function Cs(e) {
                    return function() {
                        return e
                    }
                }
                var Ds = ho()
                  , Ps = ho(!0);
                function Ls(e) {
                    return e
                }
                function As(e) {
                    return si("function" == typeof e ? e : Or(e, f))
                }
                var Ms = Ei(function(e, t) {
                    return function(n) {
                        return ri(n, e, t)
                    }
                })
                  , Ns = Ei(function(e, t) {
                    return function(n) {
                        return ri(e, n, t)
                    }
                });
                function Rs(e, t, n) {
                    var r = is(t)
                      , i = Yr(t, r);
                    null != n || Cu(t) && (i.length || !r.length) || (n = t,
                    t = e,
                    e = this,
                    i = Yr(t, is(t)));
                    var o = !(Cu(n) && "chain"in n && !n.chain)
                      , a = Su(e);
                    return $t(i, function(n) {
                        var r = t[n];
                        e[n] = r,
                        a && (e.prototype[n] = function() {
                            var t = this.__chain__;
                            if (o || t) {
                                var n = e(this.__wrapped__);
                                return (n.__actions__ = no(this.__actions__)).push({
                                    func: r,
                                    args: arguments,
                                    thisArg: e
                                }),
                                n.__chain__ = t,
                                n
                            }
                            return r.apply(e, en([this.value()], arguments))
                        }
                        )
                    }),
                    e
                }
                function Os() {}
                var Is = go(Jt)
                  , zs = go(Yt)
                  , Fs = go(rn);
                function Us(e) {
                    return Qo(e) ? fn(ca(e)) : function(e) {
                        return function(t) {
                            return Kr(t, e)
                        }
                    }(e)
                }
                var Ws = bo()
                  , Bs = bo(!0);
                function js() {
                    return []
                }
                function Vs() {
                    return !1
                }
                var Xs = vo(function(e, t) {
                    return e + t
                }, 0)
                  , Hs = _o("ceil")
                  , Gs = vo(function(e, t) {
                    return e / t
                }, 1)
                  , $s = _o("floor");
                var Qs, Ys = vo(function(e, t) {
                    return e * t
                }, 1), Ks = _o("round"), qs = vo(function(e, t) {
                    return e - t
                }, 0);
                return hr.after = function(e, t) {
                    if ("function" != typeof t)
                        throw new it(s);
                    return e = Bu(e),
                    function() {
                        if (--e < 1)
                            return t.apply(this, arguments)
                    }
                }
                ,
                hr.ary = eu,
                hr.assign = Gu,
                hr.assignIn = $u,
                hr.assignInWith = Qu,
                hr.assignWith = Yu,
                hr.at = Ku,
                hr.before = tu,
                hr.bind = nu,
                hr.bindAll = Ts,
                hr.bindKey = ru,
                hr.castArray = function() {
                    if (!arguments.length)
                        return [];
                    var e = arguments[0];
                    return gu(e) ? e : [e]
                }
                ,
                hr.chain = Ua,
                hr.chunk = function(e, t, n) {
                    t = (n ? $o(e, t, n) : t === o) ? 1 : Hn(Bu(t), 0);
                    var i = null == e ? 0 : e.length;
                    if (!i || t < 1)
                        return [];
                    for (var a = 0, u = 0, s = r(Fn(i / t)); a < i; )
                        s[u++] = Li(e, a, a += t);
                    return s
                }
                ,
                hr.compact = function(e) {
                    for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                        var o = e[t];
                        o && (i[r++] = o)
                    }
                    return i
                }
                ,
                hr.concat = function() {
                    var e = arguments.length;
                    if (!e)
                        return [];
                    for (var t = r(e - 1), n = arguments[0], i = e; i--; )
                        t[i - 1] = arguments[i];
                    return en(gu(n) ? no(n) : [n], Xr(t, 1))
                }
                ,
                hr.cond = function(e) {
                    var t = null == e ? 0 : e.length
                      , n = Io();
                    return e = t ? Jt(e, function(e) {
                        if ("function" != typeof e[1])
                            throw new it(s);
                        return [n(e[0]), e[1]]
                    }) : [],
                    Ei(function(n) {
                        for (var r = -1; ++r < t; ) {
                            var i = e[r];
                            if (Ht(i[0], this, n))
                                return Ht(i[1], this, n)
                        }
                    })
                }
                ,
                hr.conforms = function(e) {
                    return function(e) {
                        var t = is(e);
                        return function(n) {
                            return Ir(n, e, t)
                        }
                    }(Or(e, f))
                }
                ,
                hr.constant = Cs,
                hr.countBy = ja,
                hr.create = function(e, t) {
                    var n = pr(e);
                    return null == t ? n : Ar(n, t)
                }
                ,
                hr.curry = function e(t, n, r) {
                    var i = ko(t, x, o, o, o, o, o, n = r ? o : n);
                    return i.placeholder = e.placeholder,
                    i
                }
                ,
                hr.curryRight = function e(t, n, r) {
                    var i = ko(t, w, o, o, o, o, o, n = r ? o : n);
                    return i.placeholder = e.placeholder,
                    i
                }
                ,
                hr.debounce = iu,
                hr.defaults = qu,
                hr.defaultsDeep = Zu,
                hr.defer = ou,
                hr.delay = au,
                hr.difference = ha,
                hr.differenceBy = pa,
                hr.differenceWith = ma,
                hr.drop = function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? Li(e, (t = n || t === o ? 1 : Bu(t)) < 0 ? 0 : t, r) : []
                }
                ,
                hr.dropRight = function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? Li(e, 0, (t = r - (t = n || t === o ? 1 : Bu(t))) < 0 ? 0 : t) : []
                }
                ,
                hr.dropRightWhile = function(e, t) {
                    return e && e.length ? Wi(e, Io(t, 3), !0, !0) : []
                }
                ,
                hr.dropWhile = function(e, t) {
                    return e && e.length ? Wi(e, Io(t, 3), !0) : []
                }
                ,
                hr.fill = function(e, t, n, r) {
                    var i = null == e ? 0 : e.length;
                    return i ? (n && "number" != typeof n && $o(e, t, n) && (n = 0,
                    r = i),
                    function(e, t, n, r) {
                        var i = e.length;
                        for ((n = Bu(n)) < 0 && (n = -n > i ? 0 : i + n),
                        (r = r === o || r > i ? i : Bu(r)) < 0 && (r += i),
                        r = n > r ? 0 : ju(r); n < r; )
                            e[n++] = t;
                        return e
                    }(e, t, n, r)) : []
                }
                ,
                hr.filter = function(e, t) {
                    return (gu(e) ? Kt : Vr)(e, Io(t, 3))
                }
                ,
                hr.flatMap = function(e, t) {
                    return Xr(Ka(e, t), 1)
                }
                ,
                hr.flatMapDeep = function(e, t) {
                    return Xr(Ka(e, t), N)
                }
                ,
                hr.flatMapDepth = function(e, t, n) {
                    return n = n === o ? 1 : Bu(n),
                    Xr(Ka(e, t), n)
                }
                ,
                hr.flatten = ya,
                hr.flattenDeep = function(e) {
                    return null != e && e.length ? Xr(e, N) : []
                }
                ,
                hr.flattenDepth = function(e, t) {
                    return null != e && e.length ? Xr(e, t = t === o ? 1 : Bu(t)) : []
                }
                ,
                hr.flip = function(e) {
                    return ko(e, T)
                }
                ,
                hr.flow = Ds,
                hr.flowRight = Ps,
                hr.fromPairs = function(e) {
                    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                        var i = e[t];
                        r[i[0]] = i[1]
                    }
                    return r
                }
                ,
                hr.functions = function(e) {
                    return null == e ? [] : Yr(e, is(e))
                }
                ,
                hr.functionsIn = function(e) {
                    return null == e ? [] : Yr(e, os(e))
                }
                ,
                hr.groupBy = $a,
                hr.initial = function(e) {
                    return null != e && e.length ? Li(e, 0, -1) : []
                }
                ,
                hr.intersection = xa,
                hr.intersectionBy = wa,
                hr.intersectionWith = _a,
                hr.invert = ts,
                hr.invertBy = ns,
                hr.invokeMap = Qa,
                hr.iteratee = As,
                hr.keyBy = Ya,
                hr.keys = is,
                hr.keysIn = os,
                hr.map = Ka,
                hr.mapKeys = function(e, t) {
                    var n = {};
                    return t = Io(t, 3),
                    $r(e, function(e, r, i) {
                        Mr(n, t(e, r, i), e)
                    }),
                    n
                }
                ,
                hr.mapValues = function(e, t) {
                    var n = {};
                    return t = Io(t, 3),
                    $r(e, function(e, r, i) {
                        Mr(n, r, t(e, r, i))
                    }),
                    n
                }
                ,
                hr.matches = function(e) {
                    return hi(Or(e, f))
                }
                ,
                hr.matchesProperty = function(e, t) {
                    return pi(e, Or(t, f))
                }
                ,
                hr.memoize = uu,
                hr.merge = as,
                hr.mergeWith = us,
                hr.method = Ms,
                hr.methodOf = Ns,
                hr.mixin = Rs,
                hr.negate = su,
                hr.nthArg = function(e) {
                    return e = Bu(e),
                    Ei(function(t) {
                        return vi(t, e)
                    })
                }
                ,
                hr.omit = ss,
                hr.omitBy = function(e, t) {
                    return cs(e, su(Io(t)))
                }
                ,
                hr.once = function(e) {
                    return tu(2, e)
                }
                ,
                hr.orderBy = function(e, t, n, r) {
                    return null == e ? [] : (gu(t) || (t = null == t ? [] : [t]),
                    gu(n = r ? o : n) || (n = null == n ? [] : [n]),
                    gi(e, t, n))
                }
                ,
                hr.over = Is,
                hr.overArgs = lu,
                hr.overEvery = zs,
                hr.overSome = Fs,
                hr.partial = cu,
                hr.partialRight = du,
                hr.partition = qa,
                hr.pick = ls,
                hr.pickBy = cs,
                hr.property = Us,
                hr.propertyOf = function(e) {
                    return function(t) {
                        return null == e ? o : Kr(e, t)
                    }
                }
                ,
                hr.pull = Sa,
                hr.pullAll = ka,
                hr.pullAllBy = function(e, t, n) {
                    return e && e.length && t && t.length ? bi(e, t, Io(n, 2)) : e
                }
                ,
                hr.pullAllWith = function(e, t, n) {
                    return e && e.length && t && t.length ? bi(e, t, o, n) : e
                }
                ,
                hr.pullAt = Ta,
                hr.range = Ws,
                hr.rangeRight = Bs,
                hr.rearg = fu,
                hr.reject = function(e, t) {
                    return (gu(e) ? Kt : Vr)(e, su(Io(t, 3)))
                }
                ,
                hr.remove = function(e, t) {
                    var n = [];
                    if (!e || !e.length)
                        return n;
                    var r = -1
                      , i = []
                      , o = e.length;
                    for (t = Io(t, 3); ++r < o; ) {
                        var a = e[r];
                        t(a, r, e) && (n.push(a),
                        i.push(r))
                    }
                    return xi(e, i),
                    n
                }
                ,
                hr.rest = function(e, t) {
                    if ("function" != typeof e)
                        throw new it(s);
                    return Ei(e, t = t === o ? t : Bu(t))
                }
                ,
                hr.reverse = Ca,
                hr.sampleSize = function(e, t, n) {
                    return t = (n ? $o(e, t, n) : t === o) ? 1 : Bu(t),
                    (gu(e) ? kr : ki)(e, t)
                }
                ,
                hr.set = function(e, t, n) {
                    return null == e ? e : Ti(e, t, n)
                }
                ,
                hr.setWith = function(e, t, n, r) {
                    return r = "function" == typeof r ? r : o,
                    null == e ? e : Ti(e, t, n, r)
                }
                ,
                hr.shuffle = function(e) {
                    return (gu(e) ? Tr : Pi)(e)
                }
                ,
                hr.slice = function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? (n && "number" != typeof n && $o(e, t, n) ? (t = 0,
                    n = r) : (t = null == t ? 0 : Bu(t),
                    n = n === o ? r : Bu(n)),
                    Li(e, t, n)) : []
                }
                ,
                hr.sortBy = Za,
                hr.sortedUniq = function(e) {
                    return e && e.length ? Ri(e) : []
                }
                ,
                hr.sortedUniqBy = function(e, t) {
                    return e && e.length ? Ri(e, Io(t, 2)) : []
                }
                ,
                hr.split = function(e, t, n) {
                    return n && "number" != typeof n && $o(e, t, n) && (t = n = o),
                    (n = n === o ? z : n >>> 0) ? (e = Hu(e)) && ("string" == typeof t || null != t && !Mu(t)) && !(t = Ii(t)) && kn(e) ? Qi(Mn(e), 0, n) : e.split(t, n) : []
                }
                ,
                hr.spread = function(e, t) {
                    if ("function" != typeof e)
                        throw new it(s);
                    return t = null == t ? 0 : Hn(Bu(t), 0),
                    Ei(function(n) {
                        var r = n[t]
                          , i = Qi(n, 0, t);
                        return r && en(i, r),
                        Ht(e, this, i)
                    })
                }
                ,
                hr.tail = function(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? Li(e, 1, t) : []
                }
                ,
                hr.take = function(e, t, n) {
                    return e && e.length ? Li(e, 0, (t = n || t === o ? 1 : Bu(t)) < 0 ? 0 : t) : []
                }
                ,
                hr.takeRight = function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? Li(e, (t = r - (t = n || t === o ? 1 : Bu(t))) < 0 ? 0 : t, r) : []
                }
                ,
                hr.takeRightWhile = function(e, t) {
                    return e && e.length ? Wi(e, Io(t, 3), !1, !0) : []
                }
                ,
                hr.takeWhile = function(e, t) {
                    return e && e.length ? Wi(e, Io(t, 3)) : []
                }
                ,
                hr.tap = function(e, t) {
                    return t(e),
                    e
                }
                ,
                hr.throttle = function(e, t, n) {
                    var r = !0
                      , i = !0;
                    if ("function" != typeof e)
                        throw new it(s);
                    return Cu(n) && (r = "leading"in n ? !!n.leading : r,
                    i = "trailing"in n ? !!n.trailing : i),
                    iu(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: i
                    })
                }
                ,
                hr.thru = Wa,
                hr.toArray = Uu,
                hr.toPairs = ds,
                hr.toPairsIn = fs,
                hr.toPath = function(e) {
                    return gu(e) ? Jt(e, ca) : Ou(e) ? [e] : no(la(Hu(e)))
                }
                ,
                hr.toPlainObject = Xu,
                hr.transform = function(e, t, n) {
                    var r = gu(e)
                      , i = r || wu(e) || Iu(e);
                    if (t = Io(t, 4),
                    null == n) {
                        var o = e && e.constructor;
                        n = i ? r ? new o : [] : Cu(e) && Su(o) ? pr(At(e)) : {}
                    }
                    return (i ? $t : $r)(e, function(e, r, i) {
                        return t(n, e, r, i)
                    }),
                    n
                }
                ,
                hr.unary = function(e) {
                    return eu(e, 1)
                }
                ,
                hr.union = Da,
                hr.unionBy = Pa,
                hr.unionWith = La,
                hr.uniq = function(e) {
                    return e && e.length ? zi(e) : []
                }
                ,
                hr.uniqBy = function(e, t) {
                    return e && e.length ? zi(e, Io(t, 2)) : []
                }
                ,
                hr.uniqWith = function(e, t) {
                    return t = "function" == typeof t ? t : o,
                    e && e.length ? zi(e, o, t) : []
                }
                ,
                hr.unset = function(e, t) {
                    return null == e || Fi(e, t)
                }
                ,
                hr.unzip = Aa,
                hr.unzipWith = Ma,
                hr.update = function(e, t, n) {
                    return null == e ? e : Ui(e, t, Hi(n))
                }
                ,
                hr.updateWith = function(e, t, n, r) {
                    return r = "function" == typeof r ? r : o,
                    null == e ? e : Ui(e, t, Hi(n), r)
                }
                ,
                hr.values = hs,
                hr.valuesIn = function(e) {
                    return null == e ? [] : yn(e, os(e))
                }
                ,
                hr.without = Na,
                hr.words = Ss,
                hr.wrap = function(e, t) {
                    return cu(Hi(t), e)
                }
                ,
                hr.xor = Ra,
                hr.xorBy = Oa,
                hr.xorWith = Ia,
                hr.zip = za,
                hr.zipObject = function(e, t) {
                    return Vi(e || [], t || [], Dr)
                }
                ,
                hr.zipObjectDeep = function(e, t) {
                    return Vi(e || [], t || [], Ti)
                }
                ,
                hr.zipWith = Fa,
                hr.entries = ds,
                hr.entriesIn = fs,
                hr.extend = $u,
                hr.extendWith = Qu,
                Rs(hr, hr),
                hr.add = Xs,
                hr.attempt = ks,
                hr.camelCase = ps,
                hr.capitalize = ms,
                hr.ceil = Hs,
                hr.clamp = function(e, t, n) {
                    return n === o && (n = t,
                    t = o),
                    n !== o && (n = (n = Vu(n)) == n ? n : 0),
                    t !== o && (t = (t = Vu(t)) == t ? t : 0),
                    Rr(Vu(e), t, n)
                }
                ,
                hr.clone = function(e) {
                    return Or(e, p)
                }
                ,
                hr.cloneDeep = function(e) {
                    return Or(e, f | p)
                }
                ,
                hr.cloneDeepWith = function(e, t) {
                    return Or(e, f | p, t = "function" == typeof t ? t : o)
                }
                ,
                hr.cloneWith = function(e, t) {
                    return Or(e, p, t = "function" == typeof t ? t : o)
                }
                ,
                hr.conformsTo = function(e, t) {
                    return null == t || Ir(e, t, is(t))
                }
                ,
                hr.deburr = vs,
                hr.defaultTo = function(e, t) {
                    return null == e || e != e ? t : e
                }
                ,
                hr.divide = Gs,
                hr.endsWith = function(e, t, n) {
                    e = Hu(e),
                    t = Ii(t);
                    var r = e.length
                      , i = n = n === o ? r : Rr(Bu(n), 0, r);
                    return (n -= t.length) >= 0 && e.slice(n, i) == t
                }
                ,
                hr.eq = hu,
                hr.escape = function(e) {
                    return (e = Hu(e)) && ke.test(e) ? e.replace(Ee, En) : e
                }
                ,
                hr.escapeRegExp = function(e) {
                    return (e = Hu(e)) && Ne.test(e) ? e.replace(Me, "\\$&") : e
                }
                ,
                hr.every = function(e, t, n) {
                    var r = gu(e) ? Yt : Br;
                    return n && $o(e, t, n) && (t = o),
                    r(e, Io(t, 3))
                }
                ,
                hr.find = Va,
                hr.findIndex = va,
                hr.findKey = function(e, t) {
                    return an(e, Io(t, 3), $r)
                }
                ,
                hr.findLast = Xa,
                hr.findLastIndex = ga,
                hr.findLastKey = function(e, t) {
                    return an(e, Io(t, 3), Qr)
                }
                ,
                hr.floor = $s,
                hr.forEach = Ha,
                hr.forEachRight = Ga,
                hr.forIn = function(e, t) {
                    return null == e ? e : Hr(e, Io(t, 3), os)
                }
                ,
                hr.forInRight = function(e, t) {
                    return null == e ? e : Gr(e, Io(t, 3), os)
                }
                ,
                hr.forOwn = function(e, t) {
                    return e && $r(e, Io(t, 3))
                }
                ,
                hr.forOwnRight = function(e, t) {
                    return e && Qr(e, Io(t, 3))
                }
                ,
                hr.get = Ju,
                hr.gt = pu,
                hr.gte = mu,
                hr.has = function(e, t) {
                    return null != e && Vo(e, t, ei)
                }
                ,
                hr.hasIn = es,
                hr.head = ba,
                hr.identity = Ls,
                hr.includes = function(e, t, n, r) {
                    e = bu(e) ? e : hs(e),
                    n = n && !r ? Bu(n) : 0;
                    var i = e.length;
                    return n < 0 && (n = Hn(i + n, 0)),
                    Ru(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && sn(e, t, n) > -1
                }
                ,
                hr.indexOf = function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r)
                        return -1;
                    var i = null == n ? 0 : Bu(n);
                    return i < 0 && (i = Hn(r + i, 0)),
                    sn(e, t, i)
                }
                ,
                hr.inRange = function(e, t, n) {
                    return t = Wu(t),
                    n === o ? (n = t,
                    t = 0) : n = Wu(n),
                    function(e, t, n) {
                        return e >= Gn(t, n) && e < Hn(t, n)
                    }(e = Vu(e), t, n)
                }
                ,
                hr.invoke = rs,
                hr.isArguments = vu,
                hr.isArray = gu,
                hr.isArrayBuffer = yu,
                hr.isArrayLike = bu,
                hr.isArrayLikeObject = xu,
                hr.isBoolean = function(e) {
                    return !0 === e || !1 === e || Du(e) && Zr(e) == X
                }
                ,
                hr.isBuffer = wu,
                hr.isDate = _u,
                hr.isElement = function(e) {
                    return Du(e) && 1 === e.nodeType && !Au(e)
                }
                ,
                hr.isEmpty = function(e) {
                    if (null == e)
                        return !0;
                    if (bu(e) && (gu(e) || "string" == typeof e || "function" == typeof e.splice || wu(e) || Iu(e) || vu(e)))
                        return !e.length;
                    var t = jo(e);
                    if (t == K || t == ne)
                        return !e.size;
                    if (qo(e))
                        return !li(e).length;
                    for (var n in e)
                        if (ct.call(e, n))
                            return !1;
                    return !0
                }
                ,
                hr.isEqual = function(e, t) {
                    return oi(e, t)
                }
                ,
                hr.isEqualWith = function(e, t, n) {
                    var r = (n = "function" == typeof n ? n : o) ? n(e, t) : o;
                    return r === o ? oi(e, t, o, n) : !!r
                }
                ,
                hr.isError = Eu,
                hr.isFinite = function(e) {
                    return "number" == typeof e && jn(e)
                }
                ,
                hr.isFunction = Su,
                hr.isInteger = ku,
                hr.isLength = Tu,
                hr.isMap = Pu,
                hr.isMatch = function(e, t) {
                    return e === t || ai(e, t, Fo(t))
                }
                ,
                hr.isMatchWith = function(e, t, n) {
                    return n = "function" == typeof n ? n : o,
                    ai(e, t, Fo(t), n)
                }
                ,
                hr.isNaN = function(e) {
                    return Lu(e) && e != +e
                }
                ,
                hr.isNative = function(e) {
                    if (Ko(e))
                        throw new Ze(u);
                    return ui(e)
                }
                ,
                hr.isNil = function(e) {
                    return null == e
                }
                ,
                hr.isNull = function(e) {
                    return null === e
                }
                ,
                hr.isNumber = Lu,
                hr.isObject = Cu,
                hr.isObjectLike = Du,
                hr.isPlainObject = Au,
                hr.isRegExp = Mu,
                hr.isSafeInteger = function(e) {
                    return ku(e) && e >= -R && e <= R
                }
                ,
                hr.isSet = Nu,
                hr.isString = Ru,
                hr.isSymbol = Ou,
                hr.isTypedArray = Iu,
                hr.isUndefined = function(e) {
                    return e === o
                }
                ,
                hr.isWeakMap = function(e) {
                    return Du(e) && jo(e) == ae
                }
                ,
                hr.isWeakSet = function(e) {
                    return Du(e) && Zr(e) == ue
                }
                ,
                hr.join = function(e, t) {
                    return null == e ? "" : Vn.call(e, t)
                }
                ,
                hr.kebabCase = gs,
                hr.last = Ea,
                hr.lastIndexOf = function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r)
                        return -1;
                    var i = r;
                    return n !== o && (i = (i = Bu(n)) < 0 ? Hn(r + i, 0) : Gn(i, r - 1)),
                    t == t ? function(e, t, n) {
                        for (var r = n + 1; r--; )
                            if (e[r] === t)
                                return r;
                        return r
                    }(e, t, i) : un(e, cn, i, !0)
                }
                ,
                hr.lowerCase = ys,
                hr.lowerFirst = bs,
                hr.lt = zu,
                hr.lte = Fu,
                hr.max = function(e) {
                    return e && e.length ? jr(e, Ls, Jr) : o
                }
                ,
                hr.maxBy = function(e, t) {
                    return e && e.length ? jr(e, Io(t, 2), Jr) : o
                }
                ,
                hr.mean = function(e) {
                    return dn(e, Ls)
                }
                ,
                hr.meanBy = function(e, t) {
                    return dn(e, Io(t, 2))
                }
                ,
                hr.min = function(e) {
                    return e && e.length ? jr(e, Ls, di) : o
                }
                ,
                hr.minBy = function(e, t) {
                    return e && e.length ? jr(e, Io(t, 2), di) : o
                }
                ,
                hr.stubArray = js,
                hr.stubFalse = Vs,
                hr.stubObject = function() {
                    return {}
                }
                ,
                hr.stubString = function() {
                    return ""
                }
                ,
                hr.stubTrue = function() {
                    return !0
                }
                ,
                hr.multiply = Ys,
                hr.nth = function(e, t) {
                    return e && e.length ? vi(e, Bu(t)) : o
                }
                ,
                hr.noConflict = function() {
                    return Nt._ === this && (Nt._ = mt),
                    this
                }
                ,
                hr.noop = Os,
                hr.now = Ja,
                hr.pad = function(e, t, n) {
                    e = Hu(e);
                    var r = (t = Bu(t)) ? An(e) : 0;
                    if (!t || r >= t)
                        return e;
                    var i = (t - r) / 2;
                    return yo(Un(i), n) + e + yo(Fn(i), n)
                }
                ,
                hr.padEnd = function(e, t, n) {
                    e = Hu(e);
                    var r = (t = Bu(t)) ? An(e) : 0;
                    return t && r < t ? e + yo(t - r, n) : e
                }
                ,
                hr.padStart = function(e, t, n) {
                    e = Hu(e);
                    var r = (t = Bu(t)) ? An(e) : 0;
                    return t && r < t ? yo(t - r, n) + e : e
                }
                ,
                hr.parseInt = function(e, t, n) {
                    return n || null == t ? t = 0 : t && (t = +t),
                    Qn(Hu(e).replace(Oe, ""), t || 0)
                }
                ,
                hr.random = function(e, t, n) {
                    if (n && "boolean" != typeof n && $o(e, t, n) && (t = n = o),
                    n === o && ("boolean" == typeof t ? (n = t,
                    t = o) : "boolean" == typeof e && (n = e,
                    e = o)),
                    e === o && t === o ? (e = 0,
                    t = 1) : (e = Wu(e),
                    t === o ? (t = e,
                    e = 0) : t = Wu(t)),
                    e > t) {
                        var r = e;
                        e = t,
                        t = r
                    }
                    if (n || e % 1 || t % 1) {
                        var i = Yn();
                        return Gn(e + i * (t - e + Pt("1e-" + ((i + "").length - 1))), t)
                    }
                    return wi(e, t)
                }
                ,
                hr.reduce = function(e, t, n) {
                    var r = gu(e) ? tn : pn
                      , i = arguments.length < 3;
                    return r(e, Io(t, 4), n, i, Ur)
                }
                ,
                hr.reduceRight = function(e, t, n) {
                    var r = gu(e) ? nn : pn
                      , i = arguments.length < 3;
                    return r(e, Io(t, 4), n, i, Wr)
                }
                ,
                hr.repeat = function(e, t, n) {
                    return t = (n ? $o(e, t, n) : t === o) ? 1 : Bu(t),
                    _i(Hu(e), t)
                }
                ,
                hr.replace = function() {
                    var e = arguments
                      , t = Hu(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                }
                ,
                hr.result = function(e, t, n) {
                    var r = -1
                      , i = (t = Gi(t, e)).length;
                    for (i || (i = 1,
                    e = o); ++r < i; ) {
                        var a = null == e ? o : e[ca(t[r])];
                        a === o && (r = i,
                        a = n),
                        e = Su(a) ? a.call(e) : a
                    }
                    return e
                }
                ,
                hr.round = Ks,
                hr.runInContext = e,
                hr.sample = function(e) {
                    return (gu(e) ? Sr : Si)(e)
                }
                ,
                hr.size = function(e) {
                    if (null == e)
                        return 0;
                    if (bu(e))
                        return Ru(e) ? An(e) : e.length;
                    var t = jo(e);
                    return t == K || t == ne ? e.size : li(e).length
                }
                ,
                hr.snakeCase = xs,
                hr.some = function(e, t, n) {
                    var r = gu(e) ? rn : Ai;
                    return n && $o(e, t, n) && (t = o),
                    r(e, Io(t, 3))
                }
                ,
                hr.sortedIndex = function(e, t) {
                    return Mi(e, t)
                }
                ,
                hr.sortedIndexBy = function(e, t, n) {
                    return Ni(e, t, Io(n, 2))
                }
                ,
                hr.sortedIndexOf = function(e, t) {
                    var n = null == e ? 0 : e.length;
                    if (n) {
                        var r = Mi(e, t);
                        if (r < n && hu(e[r], t))
                            return r
                    }
                    return -1
                }
                ,
                hr.sortedLastIndex = function(e, t) {
                    return Mi(e, t, !0)
                }
                ,
                hr.sortedLastIndexBy = function(e, t, n) {
                    return Ni(e, t, Io(n, 2), !0)
                }
                ,
                hr.sortedLastIndexOf = function(e, t) {
                    if (null != e && e.length) {
                        var n = Mi(e, t, !0) - 1;
                        if (hu(e[n], t))
                            return n
                    }
                    return -1
                }
                ,
                hr.startCase = ws,
                hr.startsWith = function(e, t, n) {
                    return e = Hu(e),
                    n = null == n ? 0 : Rr(Bu(n), 0, e.length),
                    t = Ii(t),
                    e.slice(n, n + t.length) == t
                }
                ,
                hr.subtract = qs,
                hr.sum = function(e) {
                    return e && e.length ? mn(e, Ls) : 0
                }
                ,
                hr.sumBy = function(e, t) {
                    return e && e.length ? mn(e, Io(t, 2)) : 0
                }
                ,
                hr.template = function(e, t, n) {
                    var r = hr.templateSettings;
                    n && $o(e, t, n) && (t = o),
                    e = Hu(e),
                    t = Qu({}, t, r, To);
                    var i, a, u = Qu({}, t.imports, r.imports, To), s = is(u), l = yn(u, s), c = 0, d = t.interpolate || Ke, f = "__p += '", h = nt((t.escape || Ke).source + "|" + d.source + "|" + (d === De ? je : Ke).source + "|" + (t.evaluate || Ke).source + "|$", "g"), p = "//# sourceURL=" + ("sourceURL"in t ? t.sourceURL : "lodash.templateSources[" + ++kt + "]") + "\n";
                    e.replace(h, function(t, n, r, o, u, s) {
                        return r || (r = o),
                        f += e.slice(c, s).replace(qe, Sn),
                        n && (i = !0,
                        f += "' +\n__e(" + n + ") +\n'"),
                        u && (a = !0,
                        f += "';\n" + u + ";\n__p += '"),
                        r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                        c = s + t.length,
                        t
                    }),
                    f += "';\n";
                    var m = t.variable;
                    m || (f = "with (obj) {\n" + f + "\n}\n"),
                    f = (a ? f.replace(be, "") : f).replace(xe, "$1").replace(we, "$1;"),
                    f = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                    var v = ks(function() {
                        return Je(s, p + "return " + f).apply(o, l)
                    });
                    if (v.source = f,
                    Eu(v))
                        throw v;
                    return v
                }
                ,
                hr.times = function(e, t) {
                    if ((e = Bu(e)) < 1 || e > R)
                        return [];
                    var n = z
                      , r = Gn(e, z);
                    t = Io(t),
                    e -= z;
                    for (var i = vn(r, t); ++n < e; )
                        t(n);
                    return i
                }
                ,
                hr.toFinite = Wu,
                hr.toInteger = Bu,
                hr.toLength = ju,
                hr.toLower = function(e) {
                    return Hu(e).toLowerCase()
                }
                ,
                hr.toNumber = Vu,
                hr.toSafeInteger = function(e) {
                    return e ? Rr(Bu(e), -R, R) : 0 === e ? e : 0
                }
                ,
                hr.toString = Hu,
                hr.toUpper = function(e) {
                    return Hu(e).toUpperCase()
                }
                ,
                hr.trim = function(e, t, n) {
                    if ((e = Hu(e)) && (n || t === o))
                        return e.replace(Re, "");
                    if (!e || !(t = Ii(t)))
                        return e;
                    var r = Mn(e)
                      , i = Mn(t);
                    return Qi(r, xn(r, i), wn(r, i) + 1).join("")
                }
                ,
                hr.trimEnd = function(e, t, n) {
                    if ((e = Hu(e)) && (n || t === o))
                        return e.replace(Ie, "");
                    if (!e || !(t = Ii(t)))
                        return e;
                    var r = Mn(e);
                    return Qi(r, 0, wn(r, Mn(t)) + 1).join("")
                }
                ,
                hr.trimStart = function(e, t, n) {
                    if ((e = Hu(e)) && (n || t === o))
                        return e.replace(Oe, "");
                    if (!e || !(t = Ii(t)))
                        return e;
                    var r = Mn(e);
                    return Qi(r, xn(r, Mn(t))).join("")
                }
                ,
                hr.truncate = function(e, t) {
                    var n = C
                      , r = D;
                    if (Cu(t)) {
                        var i = "separator"in t ? t.separator : i;
                        n = "length"in t ? Bu(t.length) : n,
                        r = "omission"in t ? Ii(t.omission) : r
                    }
                    var a = (e = Hu(e)).length;
                    if (kn(e)) {
                        var u = Mn(e);
                        a = u.length
                    }
                    if (n >= a)
                        return e;
                    var s = n - An(r);
                    if (s < 1)
                        return r;
                    var l = u ? Qi(u, 0, s).join("") : e.slice(0, s);
                    if (i === o)
                        return l + r;
                    if (u && (s += l.length - s),
                    Mu(i)) {
                        if (e.slice(s).search(i)) {
                            var c, d = l;
                            for (i.global || (i = nt(i.source, Hu(Ve.exec(i)) + "g")),
                            i.lastIndex = 0; c = i.exec(d); )
                                var f = c.index;
                            l = l.slice(0, f === o ? s : f)
                        }
                    } else if (e.indexOf(Ii(i), s) != s) {
                        var h = l.lastIndexOf(i);
                        h > -1 && (l = l.slice(0, h))
                    }
                    return l + r
                }
                ,
                hr.unescape = function(e) {
                    return (e = Hu(e)) && Se.test(e) ? e.replace(_e, Nn) : e
                }
                ,
                hr.uniqueId = function(e) {
                    var t = ++dt;
                    return Hu(e) + t
                }
                ,
                hr.upperCase = _s,
                hr.upperFirst = Es,
                hr.each = Ha,
                hr.eachRight = Ga,
                hr.first = ba,
                Rs(hr, (Qs = {},
                $r(hr, function(e, t) {
                    ct.call(hr.prototype, t) || (Qs[t] = e)
                }),
                Qs), {
                    chain: !1
                }),
                hr.VERSION = "4.17.11",
                $t(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                    hr[e].placeholder = hr
                }),
                $t(["drop", "take"], function(e, t) {
                    gr.prototype[e] = function(n) {
                        n = n === o ? 1 : Hn(Bu(n), 0);
                        var r = this.__filtered__ && !t ? new gr(this) : this.clone();
                        return r.__filtered__ ? r.__takeCount__ = Gn(n, r.__takeCount__) : r.__views__.push({
                            size: Gn(n, z),
                            type: e + (r.__dir__ < 0 ? "Right" : "")
                        }),
                        r
                    }
                    ,
                    gr.prototype[e + "Right"] = function(t) {
                        return this.reverse()[e](t).reverse()
                    }
                }),
                $t(["filter", "map", "takeWhile"], function(e, t) {
                    var n = t + 1
                      , r = n == A || 3 == n;
                    gr.prototype[e] = function(e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: Io(e, 3),
                            type: n
                        }),
                        t.__filtered__ = t.__filtered__ || r,
                        t
                    }
                }),
                $t(["head", "last"], function(e, t) {
                    var n = "take" + (t ? "Right" : "");
                    gr.prototype[e] = function() {
                        return this[n](1).value()[0]
                    }
                }),
                $t(["initial", "tail"], function(e, t) {
                    var n = "drop" + (t ? "" : "Right");
                    gr.prototype[e] = function() {
                        return this.__filtered__ ? new gr(this) : this[n](1)
                    }
                }),
                gr.prototype.compact = function() {
                    return this.filter(Ls)
                }
                ,
                gr.prototype.find = function(e) {
                    return this.filter(e).head()
                }
                ,
                gr.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }
                ,
                gr.prototype.invokeMap = Ei(function(e, t) {
                    return "function" == typeof e ? new gr(this) : this.map(function(n) {
                        return ri(n, e, t)
                    })
                }),
                gr.prototype.reject = function(e) {
                    return this.filter(su(Io(e)))
                }
                ,
                gr.prototype.slice = function(e, t) {
                    e = Bu(e);
                    var n = this;
                    return n.__filtered__ && (e > 0 || t < 0) ? new gr(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)),
                    t !== o && (n = (t = Bu(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                    n)
                }
                ,
                gr.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }
                ,
                gr.prototype.toArray = function() {
                    return this.take(z)
                }
                ,
                $r(gr.prototype, function(e, t) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(t)
                      , r = /^(?:head|last)$/.test(t)
                      , i = hr[r ? "take" + ("last" == t ? "Right" : "") : t]
                      , a = r || /^find/.test(t);
                    i && (hr.prototype[t] = function() {
                        var t = this.__wrapped__
                          , u = r ? [1] : arguments
                          , s = t instanceof gr
                          , l = u[0]
                          , c = s || gu(t)
                          , d = function(e) {
                            var t = i.apply(hr, en([e], u));
                            return r && f ? t[0] : t
                        };
                        c && n && "function" == typeof l && 1 != l.length && (s = c = !1);
                        var f = this.__chain__
                          , h = !!this.__actions__.length
                          , p = a && !f
                          , m = s && !h;
                        if (!a && c) {
                            t = m ? t : new gr(this);
                            var v = e.apply(t, u);
                            return v.__actions__.push({
                                func: Wa,
                                args: [d],
                                thisArg: o
                            }),
                            new vr(v,f)
                        }
                        return p && m ? e.apply(this, u) : (v = this.thru(d),
                        p ? r ? v.value()[0] : v.value() : v)
                    }
                    )
                }),
                $t(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                    var t = ot[e]
                      , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                      , r = /^(?:pop|shift)$/.test(e);
                    hr.prototype[e] = function() {
                        var e = arguments;
                        if (r && !this.__chain__) {
                            var i = this.value();
                            return t.apply(gu(i) ? i : [], e)
                        }
                        return this[n](function(n) {
                            return t.apply(gu(n) ? n : [], e)
                        })
                    }
                }),
                $r(gr.prototype, function(e, t) {
                    var n = hr[t];
                    if (n) {
                        var r = n.name + "";
                        (ir[r] || (ir[r] = [])).push({
                            name: t,
                            func: n
                        })
                    }
                }),
                ir[po(o, y).name] = [{
                    name: "wrapper",
                    func: o
                }],
                gr.prototype.clone = function() {
                    var e = new gr(this.__wrapped__);
                    return e.__actions__ = no(this.__actions__),
                    e.__dir__ = this.__dir__,
                    e.__filtered__ = this.__filtered__,
                    e.__iteratees__ = no(this.__iteratees__),
                    e.__takeCount__ = this.__takeCount__,
                    e.__views__ = no(this.__views__),
                    e
                }
                ,
                gr.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var e = new gr(this);
                        e.__dir__ = -1,
                        e.__filtered__ = !0
                    } else
                        (e = this.clone()).__dir__ *= -1;
                    return e
                }
                ,
                gr.prototype.value = function() {
                    var e = this.__wrapped__.value()
                      , t = this.__dir__
                      , n = gu(e)
                      , r = t < 0
                      , i = n ? e.length : 0
                      , o = function(e, t, n) {
                        for (var r = -1, i = n.length; ++r < i; ) {
                            var o = n[r]
                              , a = o.size;
                            switch (o.type) {
                            case "drop":
                                e += a;
                                break;
                            case "dropRight":
                                t -= a;
                                break;
                            case "take":
                                t = Gn(t, e + a);
                                break;
                            case "takeRight":
                                e = Hn(e, t - a)
                            }
                        }
                        return {
                            start: e,
                            end: t
                        }
                    }(0, i, this.__views__)
                      , a = o.start
                      , u = o.end
                      , s = u - a
                      , l = r ? u : a - 1
                      , c = this.__iteratees__
                      , d = c.length
                      , f = 0
                      , h = Gn(s, this.__takeCount__);
                    if (!n || !r && i == s && h == s)
                        return Bi(e, this.__actions__);
                    var p = [];
                    e: for (; s-- && f < h; ) {
                        for (var m = -1, v = e[l += t]; ++m < d; ) {
                            var g = c[m]
                              , y = g.iteratee
                              , b = g.type
                              , x = y(v);
                            if (b == M)
                                v = x;
                            else if (!x) {
                                if (b == A)
                                    continue e;
                                break e
                            }
                        }
                        p[f++] = v
                    }
                    return p
                }
                ,
                hr.prototype.at = Ba,
                hr.prototype.chain = function() {
                    return Ua(this)
                }
                ,
                hr.prototype.commit = function() {
                    return new vr(this.value(),this.__chain__)
                }
                ,
                hr.prototype.next = function() {
                    this.__values__ === o && (this.__values__ = Uu(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {
                        done: e,
                        value: e ? o : this.__values__[this.__index__++]
                    }
                }
                ,
                hr.prototype.plant = function(e) {
                    for (var t, n = this; n instanceof mr; ) {
                        var r = fa(n);
                        r.__index__ = 0,
                        r.__values__ = o,
                        t ? i.__wrapped__ = r : t = r;
                        var i = r;
                        n = n.__wrapped__
                    }
                    return i.__wrapped__ = e,
                    t
                }
                ,
                hr.prototype.reverse = function() {
                    var e = this.__wrapped__;
                    if (e instanceof gr) {
                        var t = e;
                        return this.__actions__.length && (t = new gr(this)),
                        (t = t.reverse()).__actions__.push({
                            func: Wa,
                            args: [Ca],
                            thisArg: o
                        }),
                        new vr(t,this.__chain__)
                    }
                    return this.thru(Ca)
                }
                ,
                hr.prototype.toJSON = hr.prototype.valueOf = hr.prototype.value = function() {
                    return Bi(this.__wrapped__, this.__actions__)
                }
                ,
                hr.prototype.first = hr.prototype.head,
                Ft && (hr.prototype[Ft] = function() {
                    return this
                }
                ),
                hr
            }();
            Nt._ = Rn,
            (i = function() {
                return Rn
            }
            .call(t, n, t, r)) === o || (r.exports = i)
        }
        ).call(this)
    }
    ).call(this, n(3), n(10)(e))
}
, function(e, t, n) {
    "use strict";
    const r = n(13)
      , i = n(14);
    function o(e, t) {
        return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
    }
    function a(e, t) {
        return t.decode ? i(e) : e
    }
    function u(e) {
        const t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }
    function s(e, t) {
        const n = function(e) {
            let t;
            switch (e.arrayFormat) {
            case "index":
                return (e,n,r)=>{
                    t = /\[(\d*)\]$/.exec(e),
                    e = e.replace(/\[\d*\]$/, ""),
                    t ? (void 0 === r[e] && (r[e] = {}),
                    r[e][t[1]] = n) : r[e] = n
                }
                ;
            case "bracket":
                return (e,n,r)=>{
                    t = /(\[\])$/.exec(e),
                    e = e.replace(/\[\]$/, ""),
                    t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                }
                ;
            case "comma":
                return (e,t,n)=>{
                    const r = "string" == typeof t && t.split("").indexOf(",") > -1 ? t.split(",") : t;
                    n[e] = r
                }
                ;
            default:
                return (e,t,n)=>{
                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                }
            }
        }(t = Object.assign({
            decode: !0,
            arrayFormat: "none"
        }, t))
          , r = Object.create(null);
        if ("string" != typeof e)
            return r;
        if (!(e = e.trim().replace(/^[?#&]/, "")))
            return r;
        for (const i of e.split("&")) {
            let[e,o] = i.replace(/\+/g, " ").split("=");
            o = void 0 === o ? null : a(o, t),
            n(a(e, t), o, r)
        }
        return Object.keys(r).sort().reduce((e,t)=>{
            const n = r[t];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e,t)=>Number(e) - Number(t)).map(e=>t[e]) : t
            }(n) : e[t] = n,
            e
        }
        , Object.create(null))
    }
    t.extract = u,
    t.parse = s,
    t.stringify = ((e,t)=>{
        if (!e)
            return "";
        const n = function(e) {
            switch (e.arrayFormat) {
            case "index":
                return t=>(n,r)=>{
                    const i = n.length;
                    return void 0 === r ? n : null === r ? [...n, [o(t, e), "[", i, "]"].join("")] : [...n, [o(t, e), "[", o(i, e), "]=", o(r, e)].join("")]
                }
                ;
            case "bracket":
                return t=>(n,r)=>void 0 === r ? n : null === r ? [...n, [o(t, e), "[]"].join("")] : [...n, [o(t, e), "[]=", o(r, e)].join("")];
            case "comma":
                return t=>(n,r,i)=>r ? 0 === i ? [[o(t, e), "=", o(r, e)].join("")] : [[n, o(r, e)].join(",")] : n;
            default:
                return t=>(n,r)=>void 0 === r ? n : null === r ? [...n, o(t, e)] : [...n, [o(t, e), "=", o(r, e)].join("")]
            }
        }(t = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, t))
          , r = Object.keys(e);
        return !1 !== t.sort && r.sort(t.sort),
        r.map(r=>{
            const i = e[r];
            return void 0 === i ? "" : null === i ? o(r, t) : Array.isArray(i) ? i.reduce(n(r), []).join("&") : o(r, t) + "=" + o(i, t)
        }
        ).filter(e=>e.length > 0).join("&")
    }
    ),
    t.parseUrl = ((e,t)=>{
        const n = e.indexOf("#");
        return -1 !== n && (e = e.slice(0, n)),
        {
            url: e.split("?")[0] || "",
            query: s(u(e), t)
        }
    }
    )
}
, function(e, t, n) {
    "use strict";
    /** @license React v16.8.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var r = n(2)
      , i = "function" == typeof Symbol && Symbol.for
      , o = i ? Symbol.for("react.element") : 60103
      , a = i ? Symbol.for("react.portal") : 60106
      , u = i ? Symbol.for("react.fragment") : 60107
      , s = i ? Symbol.for("react.strict_mode") : 60108
      , l = i ? Symbol.for("react.profiler") : 60114
      , c = i ? Symbol.for("react.provider") : 60109
      , d = i ? Symbol.for("react.context") : 60110
      , f = i ? Symbol.for("react.concurrent_mode") : 60111
      , h = i ? Symbol.for("react.forward_ref") : 60112
      , p = i ? Symbol.for("react.suspense") : 60113
      , m = i ? Symbol.for("react.memo") : 60115
      , v = i ? Symbol.for("react.lazy") : 60116
      , g = "function" == typeof Symbol && Symbol.iterator;
    function y(e) {
        for (var t = arguments.length - 1, n = "https://web.archive.org/web/20190331193806/https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++)
            n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !function(e, t, n, r, i, o, a, u) {
            if (!e) {
                if (e = void 0,
                void 0 === t)
                    e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var s = [n, r, i, o, a, u]
                      , l = 0;
                    (e = Error(t.replace(/%s/g, function() {
                        return s[l++]
                    }))).name = "Invariant Violation"
                }
                throw e.framesToPop = 1,
                e
            }
        }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    var b = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , x = {};
    function w(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = x,
        this.updater = n || b
    }
    function _() {}
    function E(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = x,
        this.updater = n || b
    }
    w.prototype.isReactComponent = {},
    w.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e && y("85"),
        this.updater.enqueueSetState(this, e, t, "setState")
    }
    ,
    w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }
    ,
    _.prototype = w.prototype;
    var S = E.prototype = new _;
    S.constructor = E,
    r(S, w.prototype),
    S.isPureReactComponent = !0;
    var k = {
        current: null
    }
      , T = {
        current: null
    }
      , C = Object.prototype.hasOwnProperty
      , D = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function P(e, t, n) {
        var r = void 0
          , i = {}
          , a = null
          , u = null;
        if (null != t)
            for (r in void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t)
                C.call(t, r) && !D.hasOwnProperty(r) && (i[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s)
            i.children = n;
        else if (1 < s) {
            for (var l = Array(s), c = 0; c < s; c++)
                l[c] = arguments[c + 2];
            i.children = l
        }
        if (e && e.defaultProps)
            for (r in s = e.defaultProps)
                void 0 === i[r] && (i[r] = s[r]);
        return {
            $$typeof: o,
            type: e,
            key: a,
            ref: u,
            props: i,
            _owner: T.current
        }
    }
    function L(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var A = /\/+/g
      , M = [];
    function N(e, t, n, r) {
        if (M.length) {
            var i = M.pop();
            return i.result = e,
            i.keyPrefix = t,
            i.func = n,
            i.context = r,
            i.count = 0,
            i
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }
    function R(e) {
        e.result = null,
        e.keyPrefix = null,
        e.func = null,
        e.context = null,
        e.count = 0,
        10 > M.length && M.push(e)
    }
    function O(e, t, n) {
        return null == e ? 0 : function e(t, n, r, i) {
            var u = typeof t;
            "undefined" !== u && "boolean" !== u || (t = null);
            var s = !1;
            if (null === t)
                s = !0;
            else
                switch (u) {
                case "string":
                case "number":
                    s = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                    case o:
                    case a:
                        s = !0
                    }
                }
            if (s)
                return r(i, t, "" === n ? "." + I(t, 0) : n),
                1;
            if (s = 0,
            n = "" === n ? "." : n + ":",
            Array.isArray(t))
                for (var l = 0; l < t.length; l++) {
                    var c = n + I(u = t[l], l);
                    s += e(u, c, r, i)
                }
            else if (c = null === t || "object" != typeof t ? null : "function" == typeof (c = g && t[g] || t["@@iterator"]) ? c : null,
            "function" == typeof c)
                for (t = c.call(t),
                l = 0; !(u = t.next()).done; )
                    s += e(u = u.value, c = n + I(u, l++), r, i);
            else
                "object" === u && y("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
            return s
        }(e, "", t, n)
    }
    function I(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, function(e) {
                return t[e]
            })
        }(e.key) : t.toString(36)
    }
    function z(e, t) {
        e.func.call(e.context, t, e.count++)
    }
    function F(e, t, n) {
        var r = e.result
          , i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++),
        Array.isArray(e) ? U(e, r, n, function(e) {
            return e
        }) : null != e && (L(e) && (e = function(e, t) {
            return {
                $$typeof: o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(A, "$&/") + "/") + n)),
        r.push(e))
    }
    function U(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(A, "$&/") + "/"),
        O(e, F, t = N(t, o, r, i)),
        R(t)
    }
    function W() {
        var e = k.current;
        return null === e && y("307"),
        e
    }
    var B = {
        Children: {
            map: function(e, t, n) {
                if (null == e)
                    return e;
                var r = [];
                return U(e, r, null, t, n),
                r
            },
            forEach: function(e, t, n) {
                if (null == e)
                    return e;
                O(e, z, t = N(null, null, t, n)),
                R(t)
            },
            count: function(e) {
                return O(e, function() {
                    return null
                }, null)
            },
            toArray: function(e) {
                var t = [];
                return U(e, t, null, function(e) {
                    return e
                }),
                t
            },
            only: function(e) {
                return L(e) || y("143"),
                e
            }
        },
        createRef: function() {
            return {
                current: null
            }
        },
        Component: w,
        PureComponent: E,
        createContext: function(e, t) {
            return void 0 === t && (t = null),
            (e = {
                $$typeof: d,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: c,
                _context: e
            },
            e.Consumer = e
        },
        forwardRef: function(e) {
            return {
                $$typeof: h,
                render: e
            }
        },
        lazy: function(e) {
            return {
                $$typeof: v,
                _ctor: e,
                _status: -1,
                _result: null
            }
        },
        memo: function(e, t) {
            return {
                $$typeof: m,
                type: e,
                compare: void 0 === t ? null : t
            }
        },
        useCallback: function(e, t) {
            return W().useCallback(e, t)
        },
        useContext: function(e, t) {
            return W().useContext(e, t)
        },
        useEffect: function(e, t) {
            return W().useEffect(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return W().useImperativeHandle(e, t, n)
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
            return W().useLayoutEffect(e, t)
        },
        useMemo: function(e, t) {
            return W().useMemo(e, t)
        },
        useReducer: function(e, t, n) {
            return W().useReducer(e, t, n)
        },
        useRef: function(e) {
            return W().useRef(e)
        },
        useState: function(e) {
            return W().useState(e)
        },
        Fragment: u,
        StrictMode: s,
        Suspense: p,
        createElement: P,
        cloneElement: function(e, t, n) {
            null == e && y("267", e);
            var i = void 0
              , a = r({}, e.props)
              , u = e.key
              , s = e.ref
              , l = e._owner;
            if (null != t) {
                void 0 !== t.ref && (s = t.ref,
                l = T.current),
                void 0 !== t.key && (u = "" + t.key);
                var c = void 0;
                for (i in e.type && e.type.defaultProps && (c = e.type.defaultProps),
                t)
                    C.call(t, i) && !D.hasOwnProperty(i) && (a[i] = void 0 === t[i] && void 0 !== c ? c[i] : t[i])
            }
            if (1 === (i = arguments.length - 2))
                a.children = n;
            else if (1 < i) {
                c = Array(i);
                for (var d = 0; d < i; d++)
                    c[d] = arguments[d + 2];
                a.children = c
            }
            return {
                $$typeof: o,
                type: e.type,
                key: u,
                ref: s,
                props: a,
                _owner: l
            }
        },
        createFactory: function(e) {
            var t = P.bind(null, e);
            return t.type = e,
            t
        },
        isValidElement: L,
        version: "16.8.2",
        unstable_ConcurrentMode: f,
        unstable_Profiler: l,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: k,
            ReactCurrentOwner: T,
            assign: r
        }
    }
      , j = {
        default: B
    }
      , V = j && B || j;
    e.exports = V.default || V
}
, function(e, t, n) {
    "use strict";
    /** @license React v16.8.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var r = n(0)
      , i = n(2)
      , o = n(8);
    function a(e) {
        for (var t = arguments.length - 1, n = "https://web.archive.org/web/20190331193806/https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++)
            n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !function(e, t, n, r, i, o, a, u) {
            if (!e) {
                if (e = void 0,
                void 0 === t)
                    e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var s = [n, r, i, o, a, u]
                      , l = 0;
                    (e = Error(t.replace(/%s/g, function() {
                        return s[l++]
                    }))).name = "Invariant Violation"
                }
                throw e.framesToPop = 1,
                e
            }
        }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    r || a("227");
    var u = !1
      , s = null
      , l = !1
      , c = null
      , d = {
        onError: function(e) {
            u = !0,
            s = e
        }
    };
    function f(e, t, n, r, i, o, a, l, c) {
        u = !1,
        s = null,
        function(e, t, n, r, i, o, a, u, s) {
            var l = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, l)
            } catch (e) {
                this.onError(e)
            }
        }
        .apply(d, arguments)
    }
    var h = null
      , p = {};
    function m() {
        if (h)
            for (var e in p) {
                var t = p[e]
                  , n = h.indexOf(e);
                if (-1 < n || a("96", e),
                !g[n])
                    for (var r in t.extractEvents || a("97", e),
                    g[n] = t,
                    n = t.eventTypes) {
                        var i = void 0
                          , o = n[r]
                          , u = t
                          , s = r;
                        y.hasOwnProperty(s) && a("99", s),
                        y[s] = o;
                        var l = o.phasedRegistrationNames;
                        if (l) {
                            for (i in l)
                                l.hasOwnProperty(i) && v(l[i], u, s);
                            i = !0
                        } else
                            o.registrationName ? (v(o.registrationName, u, s),
                            i = !0) : i = !1;
                        i || a("98", r, e)
                    }
            }
    }
    function v(e, t, n) {
        b[e] && a("100", e),
        b[e] = t,
        x[e] = t.eventTypes[n].dependencies
    }
    var g = []
      , y = {}
      , b = {}
      , x = {}
      , w = null
      , _ = null
      , E = null;
    function S(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = E(n),
        function(e, t, n, r, i, o, d, h, p) {
            if (f.apply(this, arguments),
            u) {
                if (u) {
                    var m = s;
                    u = !1,
                    s = null
                } else
                    a("198"),
                    m = void 0;
                l || (l = !0,
                c = m)
            }
        }(r, t, void 0, e),
        e.currentTarget = null
    }
    function k(e, t) {
        return null == t && a("30"),
        null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t),
        e) : (e.push(t),
        e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }
    function T(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var C = null;
    function D(e) {
        if (e) {
            var t = e._dispatchListeners
              , n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                    S(e, t[r], n[r]);
            else
                t && S(e, t, n);
            e._dispatchListeners = null,
            e._dispatchInstances = null,
            e.isPersistent() || e.constructor.release(e)
        }
    }
    var P = {
        injectEventPluginOrder: function(e) {
            h && a("101"),
            h = Array.prototype.slice.call(e),
            m()
        },
        injectEventPluginsByName: function(e) {
            var t, n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    p.hasOwnProperty(t) && p[t] === r || (p[t] && a("102", t),
                    p[t] = r,
                    n = !0)
                }
            n && m()
        }
    };
    function L(e, t) {
        var n = e.stateNode;
        if (!n)
            return null;
        var r = w(n);
        if (!r)
            return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
            e = !r;
            break e;
        default:
            e = !1
        }
        return e ? null : (n && "function" != typeof n && a("231", t, typeof n),
        n)
    }
    function A(e) {
        if (null !== e && (C = k(C, e)),
        e = C,
        C = null,
        e && (T(e, D),
        C && a("95"),
        l))
            throw e = c,
            l = !1,
            c = null,
            e
    }
    var M = Math.random().toString(36).slice(2)
      , N = "__reactInternalInstance$" + M
      , R = "__reactEventHandlers$" + M;
    function O(e) {
        if (e[N])
            return e[N];
        for (; !e[N]; ) {
            if (!e.parentNode)
                return null;
            e = e.parentNode
        }
        return 5 === (e = e[N]).tag || 6 === e.tag ? e : null
    }
    function I(e) {
        return !(e = e[N]) || 5 !== e.tag && 6 !== e.tag ? null : e
    }
    function z(e) {
        if (5 === e.tag || 6 === e.tag)
            return e.stateNode;
        a("33")
    }
    function F(e) {
        return e[R] || null
    }
    function U(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);return e || null
    }
    function W(e, t, n) {
        (t = L(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = k(n._dispatchListeners, t),
        n._dispatchInstances = k(n._dispatchInstances, e))
    }
    function B(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t; )
                n.push(t),
                t = U(t);
            for (t = n.length; 0 < t--; )
                W(n[t], "captured", e);
            for (t = 0; t < n.length; t++)
                W(n[t], "bubbled", e)
        }
    }
    function j(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = L(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = k(n._dispatchListeners, t),
        n._dispatchInstances = k(n._dispatchInstances, e))
    }
    function V(e) {
        e && e.dispatchConfig.registrationName && j(e._targetInst, null, e)
    }
    function X(e) {
        T(e, B)
    }
    var H = !("undefined" == typeof window || !window.document || !window.document.createElement);
    function G(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var $ = {
        animationend: G("Animation", "AnimationEnd"),
        animationiteration: G("Animation", "AnimationIteration"),
        animationstart: G("Animation", "AnimationStart"),
        transitionend: G("Transition", "TransitionEnd")
    }
      , Q = {}
      , Y = {};
    function K(e) {
        if (Q[e])
            return Q[e];
        if (!$[e])
            return e;
        var t, n = $[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in Y)
                return Q[e] = n[t];
        return e
    }
    H && (Y = document.createElement("div").style,
    "AnimationEvent"in window || (delete $.animationend.animation,
    delete $.animationiteration.animation,
    delete $.animationstart.animation),
    "TransitionEvent"in window || delete $.transitionend.transition);
    var q = K("animationend")
      , Z = K("animationiteration")
      , J = K("animationstart")
      , ee = K("transitionend")
      , te = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , ne = null
      , re = null
      , ie = null;
    function oe() {
        if (ie)
            return ie;
        var e, t, n = re, r = n.length, i = "value"in ne ? ne.value : ne.textContent, o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++)
            ;
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++)
            ;
        return ie = i.slice(e, 1 < t ? 1 - t : void 0)
    }
    function ae() {
        return !0
    }
    function ue() {
        return !1
    }
    function se(e, t, n, r) {
        for (var i in this.dispatchConfig = e,
        this._targetInst = t,
        this.nativeEvent = n,
        e = this.constructor.Interface)
            e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ae : ue,
        this.isPropagationStopped = ue,
        this
    }
    function le(e, t, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, n, r),
            i
        }
        return new this(e,t,n,r)
    }
    function ce(e) {
        e instanceof this || a("279"),
        e.destructor(),
        10 > this.eventPool.length && this.eventPool.push(e)
    }
    function de(e) {
        e.eventPool = [],
        e.getPooled = le,
        e.release = ce
    }
    i(se.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            this.isDefaultPrevented = ae)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            this.isPropagationStopped = ae)
        },
        persist: function() {
            this.isPersistent = ae
        },
        isPersistent: ue,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t)
                this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null,
            this.isPropagationStopped = this.isDefaultPrevented = ue,
            this._dispatchInstances = this._dispatchListeners = null
        }
    }),
    se.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    },
    se.extend = function(e) {
        function t() {}
        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t;
        return i(o, n.prototype),
        n.prototype = o,
        n.prototype.constructor = n,
        n.Interface = i({}, r.Interface, e),
        n.extend = r.extend,
        de(n),
        n
    }
    ,
    de(se);
    var fe = se.extend({
        data: null
    })
      , he = se.extend({
        data: null
    })
      , pe = [9, 13, 27, 32]
      , me = H && "CompositionEvent"in window
      , ve = null;
    H && "documentMode"in document && (ve = document.documentMode);
    var ge = H && "TextEvent"in window && !ve
      , ye = H && (!me || ve && 8 < ve && 11 >= ve)
      , be = String.fromCharCode(32)
      , xe = {
        beforeInput: {
            phasedRegistrationNames: {
                bubbled: "onBeforeInput",
                captured: "onBeforeInputCapture"
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"]
        },
        compositionEnd: {
            phasedRegistrationNames: {
                bubbled: "onCompositionEnd",
                captured: "onCompositionEndCapture"
            },
            dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
        },
        compositionStart: {
            phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture"
            },
            dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
        },
        compositionUpdate: {
            phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture"
            },
            dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
        }
    }
      , we = !1;
    function _e(e, t) {
        switch (e) {
        case "keyup":
            return -1 !== pe.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
            return !0;
        default:
            return !1
        }
    }
    function Ee(e) {
        return "object" == typeof (e = e.detail) && "data"in e ? e.data : null
    }
    var Se = !1;
    var ke = {
        eventTypes: xe,
        extractEvents: function(e, t, n, r) {
            var i = void 0
              , o = void 0;
            if (me)
                e: {
                    switch (e) {
                    case "compositionstart":
                        i = xe.compositionStart;
                        break e;
                    case "compositionend":
                        i = xe.compositionEnd;
                        break e;
                    case "compositionupdate":
                        i = xe.compositionUpdate;
                        break e
                    }
                    i = void 0
                }
            else
                Se ? _e(e, n) && (i = xe.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = xe.compositionStart);
            return i ? (ye && "ko" !== n.locale && (Se || i !== xe.compositionStart ? i === xe.compositionEnd && Se && (o = oe()) : (re = "value"in (ne = r) ? ne.value : ne.textContent,
            Se = !0)),
            i = fe.getPooled(i, t, n, r),
            o ? i.data = o : null !== (o = Ee(n)) && (i.data = o),
            X(i),
            o = i) : o = null,
            (e = ge ? function(e, t) {
                switch (e) {
                case "compositionend":
                    return Ee(t);
                case "keypress":
                    return 32 !== t.which ? null : (we = !0,
                    be);
                case "textInput":
                    return (e = t.data) === be && we ? null : e;
                default:
                    return null
                }
            }(e, n) : function(e, t) {
                if (Se)
                    return "compositionend" === e || !me && _e(e, t) ? (e = oe(),
                    ie = re = ne = null,
                    Se = !1,
                    e) : null;
                switch (e) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which)
                    }
                    return null;
                case "compositionend":
                    return ye && "ko" !== t.locale ? null : t.data;
                default:
                    return null
                }
            }(e, n)) ? ((t = he.getPooled(xe.beforeInput, t, n, r)).data = e,
            X(t)) : t = null,
            null === o ? t : null === t ? o : [o, t]
        }
    }
      , Te = null
      , Ce = null
      , De = null;
    function Pe(e) {
        if (e = _(e)) {
            "function" != typeof Te && a("280");
            var t = w(e.stateNode);
            Te(e.stateNode, e.type, t)
        }
    }
    function Le(e) {
        Ce ? De ? De.push(e) : De = [e] : Ce = e
    }
    function Ae() {
        if (Ce) {
            var e = Ce
              , t = De;
            if (De = Ce = null,
            Pe(e),
            t)
                for (e = 0; e < t.length; e++)
                    Pe(t[e])
        }
    }
    function Me(e, t) {
        return e(t)
    }
    function Ne(e, t, n) {
        return e(t, n)
    }
    function Re() {}
    var Oe = !1;
    function Ie(e, t) {
        if (Oe)
            return e(t);
        Oe = !0;
        try {
            return Me(e, t)
        } finally {
            Oe = !1,
            (null !== Ce || null !== De) && (Re(),
            Ae())
        }
    }
    var ze = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Fe(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!ze[e.type] : "textarea" === t
    }
    function Ue(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    }
    function We(e) {
        if (!H)
            return !1;
        var t = (e = "on" + e)in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"),
        t = "function" == typeof t[e]),
        t
    }
    function Be(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }
    function je(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = Be(e) ? "checked" : "value"
              , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
              , r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get
                  , o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        r = "" + e,
                        o.call(this, e)
                    }
                }),
                Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }),
                {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null,
                        delete e[t]
                    }
                }
            }
        }(e))
    }
    function Ve(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = "";
        return e && (r = Be(e) ? e.checked ? "true" : "false" : e.value),
        (e = r) !== n && (t.setValue(e),
        !0)
    }
    var Xe = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Xe.hasOwnProperty("ReactCurrentDispatcher") || (Xe.ReactCurrentDispatcher = {
        current: null
    });
    var He = /^(.*)[\\\/]/
      , Ge = "function" == typeof Symbol && Symbol.for
      , $e = Ge ? Symbol.for("react.element") : 60103
      , Qe = Ge ? Symbol.for("react.portal") : 60106
      , Ye = Ge ? Symbol.for("react.fragment") : 60107
      , Ke = Ge ? Symbol.for("react.strict_mode") : 60108
      , qe = Ge ? Symbol.for("react.profiler") : 60114
      , Ze = Ge ? Symbol.for("react.provider") : 60109
      , Je = Ge ? Symbol.for("react.context") : 60110
      , et = Ge ? Symbol.for("react.concurrent_mode") : 60111
      , tt = Ge ? Symbol.for("react.forward_ref") : 60112
      , nt = Ge ? Symbol.for("react.suspense") : 60113
      , rt = Ge ? Symbol.for("react.memo") : 60115
      , it = Ge ? Symbol.for("react.lazy") : 60116
      , ot = "function" == typeof Symbol && Symbol.iterator;
    function at(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = ot && e[ot] || e["@@iterator"]) ? e : null
    }
    function ut(e) {
        if (null == e)
            return null;
        if ("function" == typeof e)
            return e.displayName || e.name || null;
        if ("string" == typeof e)
            return e;
        switch (e) {
        case et:
            return "ConcurrentMode";
        case Ye:
            return "Fragment";
        case Qe:
            return "Portal";
        case qe:
            return "Profiler";
        case Ke:
            return "StrictMode";
        case nt:
            return "Suspense"
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case Je:
                return "Context.Consumer";
            case Ze:
                return "Context.Provider";
            case tt:
                var t = e.render;
                return t = t.displayName || t.name || "",
                e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case rt:
                return ut(e.type);
            case it:
                if (e = 1 === e._status ? e._result : null)
                    return ut(e)
            }
        return null
    }
    function st(e) {
        var t = "";
        do {
            e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
                var n = "";
                break e;
            default:
                var r = e._debugOwner
                  , i = e._debugSource
                  , o = ut(e.type);
                n = null,
                r && (n = ut(r.type)),
                r = o,
                o = "",
                i ? o = " (at " + i.fileName.replace(He, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"),
                n = "\n    in " + (r || "Unknown") + o
            }
            t += n,
            e = e.return
        } while (e);return t
    }
    var lt = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , ct = Object.prototype.hasOwnProperty
      , dt = {}
      , ft = {};
    function ht(e, t, n, r, i) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t
    }
    var pt = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        pt[e] = new ht(e,0,!1,e,null)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        pt[t] = new ht(t,1,!1,e[1],null)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        pt[e] = new ht(e,2,!1,e.toLowerCase(),null)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        pt[e] = new ht(e,2,!1,e,null)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        pt[e] = new ht(e,3,!1,e.toLowerCase(),null)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        pt[e] = new ht(e,3,!0,e,null)
    }),
    ["capture", "download"].forEach(function(e) {
        pt[e] = new ht(e,4,!1,e,null)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        pt[e] = new ht(e,6,!1,e,null)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        pt[e] = new ht(e,5,!1,e.toLowerCase(),null)
    });
    var mt = /[\-:]([a-z])/g;
    function vt(e) {
        return e[1].toUpperCase()
    }
    function gt(e, t, n, r) {
        var i = pt.hasOwnProperty(t) ? pt[t] : null;
        (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
            if (null == t || function(e, t, n, r) {
                if (null !== n && 0 === n.type)
                    return !1;
                switch (typeof t) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                    return !1
                }
            }(e, t, n, r))
                return !0;
            if (r)
                return !1;
            if (null !== n)
                switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
                }
            return !1
        }(t, n, i, r) && (n = null),
        r || null === i ? function(e) {
            return !!ct.call(ft, e) || !ct.call(dt, e) && (lt.test(e) ? ft[e] = !0 : (dt[e] = !0,
            !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName,
        r = i.attributeNamespace,
        null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    function yt(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
            return e;
        default:
            return ""
        }
    }
    function bt(e, t) {
        var n = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }
    function xt(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue
          , r = null != t.checked ? t.checked : t.defaultChecked;
        n = yt(null != t.value ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }
    function wt(e, t) {
        null != (t = t.checked) && gt(e, "checked", t, !1)
    }
    function _t(e, t) {
        wt(e, t);
        var n = yt(t.value)
          , r = t.type;
        if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? St(e, t.type, n) : t.hasOwnProperty("defaultValue") && St(e, t.type, yt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }
    function Et(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""),
        e.defaultChecked = !e.defaultChecked,
        e.defaultChecked = !!e._wrapperState.initialChecked,
        "" !== n && (e.name = n)
    }
    function St(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(mt, vt);
        pt[t] = new ht(t,1,!1,e,null)
    }),
    "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(mt, vt);
        pt[t] = new ht(t,1,!1,e,"http://www.w3.org/1999/xlink")
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(mt, vt);
        pt[t] = new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        pt[e] = new ht(e,1,!1,e.toLowerCase(),null)
    });
    var kt = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };
    function Tt(e, t, n) {
        return (e = se.getPooled(kt.change, e, t, n)).type = "change",
        Le(n),
        X(e),
        e
    }
    var Ct = null
      , Dt = null;
    function Pt(e) {
        A(e)
    }
    function Lt(e) {
        if (Ve(z(e)))
            return e
    }
    function At(e, t) {
        if ("change" === e)
            return t
    }
    var Mt = !1;
    function Nt() {
        Ct && (Ct.detachEvent("onpropertychange", Rt),
        Dt = Ct = null)
    }
    function Rt(e) {
        "value" === e.propertyName && Lt(Dt) && Ie(Pt, e = Tt(Dt, e, Ue(e)))
    }
    function Ot(e, t, n) {
        "focus" === e ? (Nt(),
        Dt = n,
        (Ct = t).attachEvent("onpropertychange", Rt)) : "blur" === e && Nt()
    }
    function It(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Lt(Dt)
    }
    function zt(e, t) {
        if ("click" === e)
            return Lt(t)
    }
    function Ft(e, t) {
        if ("input" === e || "change" === e)
            return Lt(t)
    }
    H && (Mt = We("input") && (!document.documentMode || 9 < document.documentMode));
    var Ut = {
        eventTypes: kt,
        _isInputEventSupported: Mt,
        extractEvents: function(e, t, n, r) {
            var i = t ? z(t) : window
              , o = void 0
              , a = void 0
              , u = i.nodeName && i.nodeName.toLowerCase();
            if ("select" === u || "input" === u && "file" === i.type ? o = At : Fe(i) ? Mt ? o = Ft : (o = It,
            a = Ot) : (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = zt),
            o && (o = o(e, t)))
                return Tt(o, n, r);
            a && a(e, i, t),
            "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && St(i, "number", i.value)
        }
    }
      , Wt = se.extend({
        view: null,
        detail: null
    })
      , Bt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function jt(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Bt[e]) && !!t[e]
    }
    function Vt() {
        return jt
    }
    var Xt = 0
      , Ht = 0
      , Gt = !1
      , $t = !1
      , Qt = Wt.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Vt,
        button: null,
        buttons: null,
        relatedTarget: function(e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        },
        movementX: function(e) {
            if ("movementX"in e)
                return e.movementX;
            var t = Xt;
            return Xt = e.screenX,
            Gt ? "mousemove" === e.type ? e.screenX - t : 0 : (Gt = !0,
            0)
        },
        movementY: function(e) {
            if ("movementY"in e)
                return e.movementY;
            var t = Ht;
            return Ht = e.screenY,
            $t ? "mousemove" === e.type ? e.screenY - t : 0 : ($t = !0,
            0)
        }
    })
      , Yt = Qt.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
    })
      , Kt = {
        mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"]
        }
    }
      , qt = {
        eventTypes: Kt,
        extractEvents: function(e, t, n, r) {
            var i = "mouseover" === e || "pointerover" === e
              , o = "mouseout" === e || "pointerout" === e;
            if (i && (n.relatedTarget || n.fromElement) || !o && !i)
                return null;
            if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window,
            o ? (o = t,
            t = (t = n.relatedTarget || n.toElement) ? O(t) : null) : o = null,
            o === t)
                return null;
            var a = void 0
              , u = void 0
              , s = void 0
              , l = void 0;
            "mouseout" === e || "mouseover" === e ? (a = Qt,
            u = Kt.mouseLeave,
            s = Kt.mouseEnter,
            l = "mouse") : "pointerout" !== e && "pointerover" !== e || (a = Yt,
            u = Kt.pointerLeave,
            s = Kt.pointerEnter,
            l = "pointer");
            var c = null == o ? i : z(o);
            if (i = null == t ? i : z(t),
            (e = a.getPooled(u, o, n, r)).type = l + "leave",
            e.target = c,
            e.relatedTarget = i,
            (n = a.getPooled(s, t, n, r)).type = l + "enter",
            n.target = i,
            n.relatedTarget = c,
            r = t,
            o && r)
                e: {
                    for (i = r,
                    l = 0,
                    a = t = o; a; a = U(a))
                        l++;
                    for (a = 0,
                    s = i; s; s = U(s))
                        a++;
                    for (; 0 < l - a; )
                        t = U(t),
                        l--;
                    for (; 0 < a - l; )
                        i = U(i),
                        a--;
                    for (; l--; ) {
                        if (t === i || t === i.alternate)
                            break e;
                        t = U(t),
                        i = U(i)
                    }
                    t = null
                }
            else
                t = null;
            for (i = t,
            t = []; o && o !== i && (null === (l = o.alternate) || l !== i); )
                t.push(o),
                o = U(o);
            for (o = []; r && r !== i && (null === (l = r.alternate) || l !== i); )
                o.push(r),
                r = U(r);
            for (r = 0; r < t.length; r++)
                j(t[r], "bubbled", e);
            for (r = o.length; 0 < r--; )
                j(o[r], "captured", n);
            return [e, n]
        }
    };
    function Zt(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }
    var Jt = Object.prototype.hasOwnProperty;
    function en(e, t) {
        if (Zt(e, t))
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++)
            if (!Jt.call(t, n[r]) || !Zt(e[n[r]], t[n[r]]))
                return !1;
        return !0
    }
    function tn(e) {
        var t = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            if (0 != (2 & t.effectTag))
                return 1;
            for (; t.return; )
                if (0 != (2 & (t = t.return).effectTag))
                    return 1
        }
        return 3 === t.tag ? 2 : 3
    }
    function nn(e) {
        2 !== tn(e) && a("188")
    }
    function rn(e) {
        if (!(e = function(e) {
            var t = e.alternate;
            if (!t)
                return 3 === (t = tn(e)) && a("188"),
                1 === t ? null : e;
            for (var n = e, r = t; ; ) {
                var i = n.return
                  , o = i ? i.alternate : null;
                if (!i || !o)
                    break;
                if (i.child === o.child) {
                    for (var u = i.child; u; ) {
                        if (u === n)
                            return nn(i),
                            e;
                        if (u === r)
                            return nn(i),
                            t;
                        u = u.sibling
                    }
                    a("188")
                }
                if (n.return !== r.return)
                    n = i,
                    r = o;
                else {
                    u = !1;
                    for (var s = i.child; s; ) {
                        if (s === n) {
                            u = !0,
                            n = i,
                            r = o;
                            break
                        }
                        if (s === r) {
                            u = !0,
                            r = i,
                            n = o;
                            break
                        }
                        s = s.sibling
                    }
                    if (!u) {
                        for (s = o.child; s; ) {
                            if (s === n) {
                                u = !0,
                                n = o,
                                r = i;
                                break
                            }
                            if (s === r) {
                                u = !0,
                                r = o,
                                n = i;
                                break
                            }
                            s = s.sibling
                        }
                        u || a("189")
                    }
                }
                n.alternate !== r && a("190")
            }
            return 3 !== n.tag && a("188"),
            n.stateNode.current === n ? e : t
        }(e)))
            return null;
        for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag)
                return t;
            if (t.child)
                t.child.return = t,
                t = t.child;
            else {
                if (t === e)
                    break;
                for (; !t.sibling; ) {
                    if (!t.return || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return null
    }
    var on = se.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
    })
      , an = se.extend({
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    })
      , un = Wt.extend({
        relatedTarget: null
    });
    function sn(e) {
        var t = e.keyCode;
        return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    }
    var ln = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }
      , cn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }
      , dn = Wt.extend({
        key: function(e) {
            if (e.key) {
                var t = ln[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t
            }
            return "keypress" === e.type ? 13 === (e = sn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Vt,
        charCode: function(e) {
            return "keypress" === e.type ? sn(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? sn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    })
      , fn = Qt.extend({
        dataTransfer: null
    })
      , hn = Wt.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Vt
    })
      , pn = se.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    })
      , mn = Qt.extend({
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
    })
      , vn = [["abort", "abort"], [q, "animationEnd"], [Z, "animationIteration"], [J, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [ee, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]]
      , gn = {}
      , yn = {};
    function bn(e, t) {
        var n = e[0]
          , r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
        t = {
            phasedRegistrationNames: {
                bubbled: r,
                captured: r + "Capture"
            },
            dependencies: [n],
            isInteractive: t
        },
        gn[e] = t,
        yn[n] = t
    }
    [["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["auxclick", "auxClick"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function(e) {
        bn(e, !0)
    }),
    vn.forEach(function(e) {
        bn(e, !1)
    });
    var xn = {
        eventTypes: gn,
        isInteractiveTopLevelEventType: function(e) {
            return void 0 !== (e = yn[e]) && !0 === e.isInteractive
        },
        extractEvents: function(e, t, n, r) {
            var i = yn[e];
            if (!i)
                return null;
            switch (e) {
            case "keypress":
                if (0 === sn(n))
                    return null;
            case "keydown":
            case "keyup":
                e = dn;
                break;
            case "blur":
            case "focus":
                e = un;
                break;
            case "click":
                if (2 === n.button)
                    return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                e = Qt;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                e = fn;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                e = hn;
                break;
            case q:
            case Z:
            case J:
                e = on;
                break;
            case ee:
                e = pn;
                break;
            case "scroll":
                e = Wt;
                break;
            case "wheel":
                e = mn;
                break;
            case "copy":
            case "cut":
            case "paste":
                e = an;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
                e = Yt;
                break;
            default:
                e = se
            }
            return X(t = e.getPooled(i, t, n, r)),
            t
        }
    }
      , wn = xn.isInteractiveTopLevelEventType
      , _n = [];
    function En(e) {
        var t = e.targetInst
          , n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r;
            for (r = n; r.return; )
                r = r.return;
            if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo))
                break;
            e.ancestors.push(n),
            n = O(r)
        } while (n);for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var i = Ue(e.nativeEvent);
            r = e.topLevelType;
            for (var o = e.nativeEvent, a = null, u = 0; u < g.length; u++) {
                var s = g[u];
                s && (s = s.extractEvents(r, t, o, i)) && (a = k(a, s))
            }
            A(a)
        }
    }
    var Sn = !0;
    function kn(e, t) {
        if (!t)
            return null;
        var n = (wn(e) ? Cn : Dn).bind(null, e);
        t.addEventListener(e, n, !1)
    }
    function Tn(e, t) {
        if (!t)
            return null;
        var n = (wn(e) ? Cn : Dn).bind(null, e);
        t.addEventListener(e, n, !0)
    }
    function Cn(e, t) {
        Ne(Dn, e, t)
    }
    function Dn(e, t) {
        if (Sn) {
            var n = Ue(t);
            if (null === (n = O(n)) || "number" != typeof n.tag || 2 === tn(n) || (n = null),
            _n.length) {
                var r = _n.pop();
                r.topLevelType = e,
                r.nativeEvent = t,
                r.targetInst = n,
                e = r
            } else
                e = {
                    topLevelType: e,
                    nativeEvent: t,
                    targetInst: n,
                    ancestors: []
                };
            try {
                Ie(En, e)
            } finally {
                e.topLevelType = null,
                e.nativeEvent = null,
                e.targetInst = null,
                e.ancestors.length = 0,
                10 > _n.length && _n.push(e)
            }
        }
    }
    var Pn = {}
      , Ln = 0
      , An = "_reactListenersID" + ("" + Math.random()).slice(2);
    function Mn(e) {
        return Object.prototype.hasOwnProperty.call(e, An) || (e[An] = Ln++,
        Pn[e[An]] = {}),
        Pn[e[An]]
    }
    function Nn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    function Rn(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function On(e, t) {
        var n, r = Rn(e);
        for (e = 0; r; ) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length,
                e <= t && n >= t)
                    return {
                        node: r,
                        offset: t - e
                    };
                e = n
            }
            e: {
                for (; r; ) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = Rn(r)
        }
    }
    function In() {
        for (var e = window, t = Nn(); t instanceof e.HTMLIFrameElement; ) {
            try {
                e = t.contentDocument.defaultView
            } catch (e) {
                break
            }
            t = Nn(e.document)
        }
        return t
    }
    function zn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    function Fn(e) {
        var t = In()
          , n = e.focusedElem
          , r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && function e(t, n) {
            return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains"in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
        }(n.ownerDocument.documentElement, n)) {
            if (null !== r && zn(n))
                if (t = r.start,
                void 0 === (e = r.end) && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var i = n.textContent.length
                      , o = Math.min(r.start, i);
                    r = void 0 === r.end ? o : Math.min(r.end, i),
                    !e.extend && o > r && (i = r,
                    r = o,
                    o = i),
                    i = On(n, o);
                    var a = On(n, r);
                    i && a && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t),
                    e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                    e.addRange(t)))
                }
            for (t = [],
            e = n; e = e.parentNode; )
                1 === e.nodeType && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for ("function" == typeof n.focus && n.focus(),
            n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Un = H && "documentMode"in document && 11 >= document.documentMode
      , Wn = {
        select: {
            phasedRegistrationNames: {
                bubbled: "onSelect",
                captured: "onSelectCapture"
            },
            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
        }
    }
      , Bn = null
      , jn = null
      , Vn = null
      , Xn = !1;
    function Hn(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Xn || null == Bn || Bn !== Nn(n) ? null : ("selectionStart"in (n = Bn) && zn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        },
        Vn && en(Vn, n) ? null : (Vn = n,
        (e = se.getPooled(Wn.select, jn, e, t)).type = "select",
        e.target = Bn,
        X(e),
        e))
    }
    var Gn = {
        eventTypes: Wn,
        extractEvents: function(e, t, n, r) {
            var i, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
            if (!(i = !o)) {
                e: {
                    o = Mn(o),
                    i = x.onSelect;
                    for (var a = 0; a < i.length; a++) {
                        var u = i[a];
                        if (!o.hasOwnProperty(u) || !o[u]) {
                            o = !1;
                            break e
                        }
                    }
                    o = !0
                }
                i = !o
            }
            if (i)
                return null;
            switch (o = t ? z(t) : window,
            e) {
            case "focus":
                (Fe(o) || "true" === o.contentEditable) && (Bn = o,
                jn = t,
                Vn = null);
                break;
            case "blur":
                Vn = jn = Bn = null;
                break;
            case "mousedown":
                Xn = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                return Xn = !1,
                Hn(n, r);
            case "selectionchange":
                if (Un)
                    break;
            case "keydown":
            case "keyup":
                return Hn(n, r)
            }
            return null
        }
    };
    function $n(e, t) {
        return e = i({
            children: void 0
        }, t),
        (t = function(e) {
            var t = "";
            return r.Children.forEach(e, function(e) {
                null != e && (t += e)
            }),
            t
        }(t.children)) && (e.children = t),
        e
    }
    function Qn(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + yt(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n)
                    return e[i].selected = !0,
                    void (r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }
    function Yn(e, t) {
        return null != t.dangerouslySetInnerHTML && a("91"),
        i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Kn(e, t) {
        var n = t.value;
        null == n && (n = t.defaultValue,
        null != (t = t.children) && (null != n && a("92"),
        Array.isArray(t) && (1 >= t.length || a("93"),
        t = t[0]),
        n = t),
        null == n && (n = "")),
        e._wrapperState = {
            initialValue: yt(n)
        }
    }
    function qn(e, t) {
        var n = yt(t.value)
          , r = yt(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r)
    }
    function Zn(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t)
    }
    P.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),
    w = F,
    _ = I,
    E = z,
    P.injectEventPluginsByName({
        SimpleEventPlugin: xn,
        EnterLeaveEventPlugin: qt,
        ChangeEventPlugin: Ut,
        SelectEventPlugin: Gn,
        BeforeInputEventPlugin: ke
    });
    var Jn = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    function er(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function tr(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? er(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var nr, rr = void 0, ir = (nr = function(e, t) {
        if (e.namespaceURI !== Jn.svg || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for ((rr = rr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>",
            t = rr.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    }
    ,
    "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return nr(e, t)
        })
    }
    : nr);
    function or(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t)
        }
        e.textContent = t
    }
    var ar = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , ur = ["Webkit", "ms", "Moz", "O"];
    function sr(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ar.hasOwnProperty(e) && ar[e] ? ("" + t).trim() : t + "px"
    }
    function lr(e, t) {
        for (var n in e = e.style,
        t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--")
                  , i = sr(n, t[n], r);
                "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
            }
    }
    Object.keys(ar).forEach(function(e) {
        ur.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            ar[t] = ar[e]
        })
    });
    var cr = i({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function dr(e, t) {
        t && (cr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && a("137", e, ""),
        null != t.dangerouslySetInnerHTML && (null != t.children && a("60"),
        "object" == typeof t.dangerouslySetInnerHTML && "__html"in t.dangerouslySetInnerHTML || a("61")),
        null != t.style && "object" != typeof t.style && a("62", ""))
    }
    function fr(e, t) {
        if (-1 === e.indexOf("-"))
            return "string" == typeof t.is;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    function hr(e, t) {
        var n = Mn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = x[t];
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (!n.hasOwnProperty(i) || !n[i]) {
                switch (i) {
                case "scroll":
                    Tn("scroll", e);
                    break;
                case "focus":
                case "blur":
                    Tn("focus", e),
                    Tn("blur", e),
                    n.blur = !0,
                    n.focus = !0;
                    break;
                case "cancel":
                case "close":
                    We(i) && Tn(i, e);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === te.indexOf(i) && kn(i, e)
                }
                n[i] = !0
            }
        }
    }
    function pr() {}
    var mr = null
      , vr = null;
    function gr(e, t) {
        switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
            return !!t.autoFocus
        }
        return !1
    }
    function yr(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var br = "function" == typeof setTimeout ? setTimeout : void 0
      , xr = "function" == typeof clearTimeout ? clearTimeout : void 0
      , wr = o.unstable_scheduleCallback
      , _r = o.unstable_cancelCallback;
    function Er(e) {
        for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; )
            e = e.nextSibling;
        return e
    }
    function Sr(e) {
        for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; )
            e = e.nextSibling;
        return e
    }
    new Set;
    var kr = []
      , Tr = -1;
    function Cr(e) {
        0 > Tr || (e.current = kr[Tr],
        kr[Tr] = null,
        Tr--)
    }
    function Dr(e, t) {
        kr[++Tr] = e.current,
        e.current = t
    }
    var Pr = {}
      , Lr = {
        current: Pr
    }
      , Ar = {
        current: !1
    }
      , Mr = Pr;
    function Nr(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return Pr;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n)
            o[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
        o
    }
    function Rr(e) {
        return null != (e = e.childContextTypes)
    }
    function Or(e) {
        Cr(Ar),
        Cr(Lr)
    }
    function Ir(e) {
        Cr(Ar),
        Cr(Lr)
    }
    function zr(e, t, n) {
        Lr.current !== Pr && a("168"),
        Dr(Lr, t),
        Dr(Ar, n)
    }
    function Fr(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes,
        "function" != typeof r.getChildContext)
            return n;
        for (var o in r = r.getChildContext())
            o in e || a("108", ut(t) || "Unknown", o);
        return i({}, n, r)
    }
    function Ur(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || Pr,
        Mr = Lr.current,
        Dr(Lr, t),
        Dr(Ar, Ar.current),
        !0
    }
    function Wr(e, t, n) {
        var r = e.stateNode;
        r || a("169"),
        n ? (t = Fr(e, t, Mr),
        r.__reactInternalMemoizedMergedChildContext = t,
        Cr(Ar),
        Cr(Lr),
        Dr(Lr, t)) : Cr(Ar),
        Dr(Ar, n)
    }
    var Br = null
      , jr = null;
    function Vr(e) {
        return function(t) {
            try {
                return e(t)
            } catch (e) {}
        }
    }
    function Xr(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.effectTag = 0,
        this.lastEffect = this.firstEffect = this.nextEffect = null,
        this.childExpirationTime = this.expirationTime = 0,
        this.alternate = null
    }
    function Hr(e, t, n, r) {
        return new Xr(e,t,n,r)
    }
    function Gr(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }
    function $r(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Hr(e.tag, t, e.key, e.mode)).elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.effectTag = 0,
        n.nextEffect = null,
        n.firstEffect = null,
        n.lastEffect = null),
        n.childExpirationTime = e.childExpirationTime,
        n.expirationTime = e.expirationTime,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        n.contextDependencies = e.contextDependencies,
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function Qr(e, t, n, r, i, o) {
        var u = 2;
        if (r = e,
        "function" == typeof e)
            Gr(e) && (u = 1);
        else if ("string" == typeof e)
            u = 5;
        else
            e: switch (e) {
            case Ye:
                return Yr(n.children, i, o, t);
            case et:
                return Kr(n, 3 | i, o, t);
            case Ke:
                return Kr(n, 2 | i, o, t);
            case qe:
                return (e = Hr(12, n, t, 4 | i)).elementType = qe,
                e.type = qe,
                e.expirationTime = o,
                e;
            case nt:
                return (e = Hr(13, n, t, i)).elementType = nt,
                e.type = nt,
                e.expirationTime = o,
                e;
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                    case Ze:
                        u = 10;
                        break e;
                    case Je:
                        u = 9;
                        break e;
                    case tt:
                        u = 11;
                        break e;
                    case rt:
                        u = 14;
                        break e;
                    case it:
                        u = 16,
                        r = null;
                        break e
                    }
                a("130", null == e ? e : typeof e, "")
            }
        return (t = Hr(u, n, t, i)).elementType = e,
        t.type = r,
        t.expirationTime = o,
        t
    }
    function Yr(e, t, n, r) {
        return (e = Hr(7, e, r, t)).expirationTime = n,
        e
    }
    function Kr(e, t, n, r) {
        return e = Hr(8, e, r, t),
        t = 0 == (1 & t) ? Ke : et,
        e.elementType = t,
        e.type = t,
        e.expirationTime = n,
        e
    }
    function qr(e, t, n) {
        return (e = Hr(6, e, null, t)).expirationTime = n,
        e
    }
    function Zr(e, t, n) {
        return (t = Hr(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Jr(e, t) {
        e.didError = !1;
        var n = e.earliestPendingTime;
        0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ? e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime = t),
        ni(t, e)
    }
    function ei(e, t) {
        e.didError = !1,
        e.latestPingedTime >= t && (e.latestPingedTime = 0);
        var n = e.earliestPendingTime
          , r = e.latestPendingTime;
        n === t ? e.earliestPendingTime = r === t ? e.latestPendingTime = 0 : r : r === t && (e.latestPendingTime = n),
        n = e.earliestSuspendedTime,
        r = e.latestSuspendedTime,
        0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime = t : n < t ? e.earliestSuspendedTime = t : r > t && (e.latestSuspendedTime = t),
        ni(t, e)
    }
    function ti(e, t) {
        var n = e.earliestPendingTime;
        return n > t && (t = n),
        (e = e.earliestSuspendedTime) > t && (t = e),
        t
    }
    function ni(e, t) {
        var n = t.earliestSuspendedTime
          , r = t.latestSuspendedTime
          , i = t.earliestPendingTime
          , o = t.latestPingedTime;
        0 === (i = 0 !== i ? i : o) && (0 === e || r < e) && (i = r),
        0 !== (e = i) && n > e && (e = n),
        t.nextExpirationTimeToWorkOn = i,
        t.expirationTime = e
    }
    function ri(e, t) {
        if (e && e.defaultProps)
            for (var n in t = i({}, t),
            e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var ii = (new r.Component).refs;
    function oi(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n),
        e.memoizedState = n,
        null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
    }
    var ai = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && 2 === tn(e)
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = _u()
              , i = Ko(r = Ya(r, e));
            i.payload = t,
            null != n && (i.callback = n),
            Va(),
            Zo(e, i),
            Za(e, r)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = _u()
              , i = Ko(r = Ya(r, e));
            i.tag = Xo,
            i.payload = t,
            null != n && (i.callback = n),
            Va(),
            Zo(e, i),
            Za(e, r)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var n = _u()
              , r = Ko(n = Ya(n, e));
            r.tag = Ho,
            null != t && (r.callback = t),
            Va(),
            Zo(e, r),
            Za(e, n)
        }
    };
    function ui(e, t, n, r, i, o, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!en(n, r) || !en(i, o))
    }
    function si(e, t, n) {
        var r = !1
          , i = Pr
          , o = t.contextType;
        return "object" == typeof o && null !== o ? o = jo(o) : (i = Rr(t) ? Mr : Lr.current,
        o = (r = null != (r = t.contextTypes)) ? Nr(e, i) : Pr),
        t = new t(n,o),
        e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
        t.updater = ai,
        e.stateNode = t,
        t._reactInternalFiber = e,
        r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i,
        e.__reactInternalMemoizedMaskedChildContext = o),
        t
    }
    function li(e, t, n, r) {
        e = t.state,
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ai.enqueueReplaceState(t, t.state, null)
    }
    function ci(e, t, n, r) {
        var i = e.stateNode;
        i.props = n,
        i.state = e.memoizedState,
        i.refs = ii;
        var o = t.contextType;
        "object" == typeof o && null !== o ? i.context = jo(o) : (o = Rr(t) ? Mr : Lr.current,
        i.context = Nr(e, o)),
        null !== (o = e.updateQueue) && (na(e, o, n, i, r),
        i.state = e.memoizedState),
        "function" == typeof (o = t.getDerivedStateFromProps) && (oi(e, t, o, n),
        i.state = e.memoizedState),
        "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state,
        "function" == typeof i.componentWillMount && i.componentWillMount(),
        "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
        t !== i.state && ai.enqueueReplaceState(i, i.state, null),
        null !== (o = e.updateQueue) && (na(e, o, n, i, r),
        i.state = e.memoizedState)),
        "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }
    var di = Array.isArray;
    function fi(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                n = n._owner;
                var r = void 0;
                n && (1 !== n.tag && a("309"),
                r = n.stateNode),
                r || a("147", e);
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                    var t = r.refs;
                    t === ii && (t = r.refs = {}),
                    null === e ? delete t[i] : t[i] = e
                }
                )._stringRef = i,
                t)
            }
            "string" != typeof e && a("284"),
            n._owner || a("290", e)
        }
        return e
    }
    function hi(e, t) {
        "textarea" !== e.type && a("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }
    function pi(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n,
                t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                n.nextEffect = null,
                n.effectTag = 8
            }
        }
        function n(n, r) {
            if (!e)
                return null;
            for (; null !== r; )
                t(n, r),
                r = r.sibling;
            return null
        }
        function r(e, t) {
            for (e = new Map; null !== t; )
                null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                t = t.sibling;
            return e
        }
        function i(e, t, n) {
            return (e = $r(e, t)).index = 0,
            e.sibling = null,
            e
        }
        function o(t, n, r) {
            return t.index = r,
            e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2,
            n) : r : (t.effectTag = 2,
            n) : n
        }
        function u(t) {
            return e && null === t.alternate && (t.effectTag = 2),
            t
        }
        function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = qr(n, e.mode, r)).return = e,
            t) : ((t = i(t, n)).return = e,
            t)
        }
        function l(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = fi(e, t, n),
            r.return = e,
            r) : ((r = Qr(n.type, n.key, n.props, null, e.mode, r)).ref = fi(e, t, n),
            r.return = e,
            r)
        }
        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Zr(n, e.mode, r)).return = e,
            t) : ((t = i(t, n.children || [])).return = e,
            t)
        }
        function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag ? ((t = Yr(n, e.mode, r, o)).return = e,
            t) : ((t = i(t, n)).return = e,
            t)
        }
        function f(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
                return (t = qr("" + t, e.mode, n)).return = e,
                t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                case $e:
                    return (n = Qr(t.type, t.key, t.props, null, e.mode, n)).ref = fi(e, null, t),
                    n.return = e,
                    n;
                case Qe:
                    return (t = Zr(t, e.mode, n)).return = e,
                    t
                }
                if (di(t) || at(t))
                    return (t = Yr(t, e.mode, n, null)).return = e,
                    t;
                hi(e, t)
            }
            return null
        }
        function h(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
                return null !== i ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                case $e:
                    return n.key === i ? n.type === Ye ? d(e, t, n.props.children, r, i) : l(e, t, n, r) : null;
                case Qe:
                    return n.key === i ? c(e, t, n, r) : null
                }
                if (di(n) || at(n))
                    return null !== i ? null : d(e, t, n, r, null);
                hi(e, n)
            }
            return null
        }
        function p(e, t, n, r, i) {
            if ("string" == typeof r || "number" == typeof r)
                return s(t, e = e.get(n) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                case $e:
                    return e = e.get(null === r.key ? n : r.key) || null,
                    r.type === Ye ? d(t, e, r.props.children, i, r.key) : l(t, e, r, i);
                case Qe:
                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
                }
                if (di(r) || at(r))
                    return d(t, e = e.get(n) || null, r, i, null);
                hi(t, r)
            }
            return null
        }
        function m(i, a, u, s) {
            for (var l = null, c = null, d = a, m = a = 0, v = null; null !== d && m < u.length; m++) {
                d.index > m ? (v = d,
                d = null) : v = d.sibling;
                var g = h(i, d, u[m], s);
                if (null === g) {
                    null === d && (d = v);
                    break
                }
                e && d && null === g.alternate && t(i, d),
                a = o(g, a, m),
                null === c ? l = g : c.sibling = g,
                c = g,
                d = v
            }
            if (m === u.length)
                return n(i, d),
                l;
            if (null === d) {
                for (; m < u.length; m++)
                    (d = f(i, u[m], s)) && (a = o(d, a, m),
                    null === c ? l = d : c.sibling = d,
                    c = d);
                return l
            }
            for (d = r(i, d); m < u.length; m++)
                (v = p(d, i, m, u[m], s)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key),
                a = o(v, a, m),
                null === c ? l = v : c.sibling = v,
                c = v);
            return e && d.forEach(function(e) {
                return t(i, e)
            }),
            l
        }
        function v(i, u, s, l) {
            var c = at(s);
            "function" != typeof c && a("150"),
            null == (s = c.call(s)) && a("151");
            for (var d = c = null, m = u, v = u = 0, g = null, y = s.next(); null !== m && !y.done; v++,
            y = s.next()) {
                m.index > v ? (g = m,
                m = null) : g = m.sibling;
                var b = h(i, m, y.value, l);
                if (null === b) {
                    m || (m = g);
                    break
                }
                e && m && null === b.alternate && t(i, m),
                u = o(b, u, v),
                null === d ? c = b : d.sibling = b,
                d = b,
                m = g
            }
            if (y.done)
                return n(i, m),
                c;
            if (null === m) {
                for (; !y.done; v++,
                y = s.next())
                    null !== (y = f(i, y.value, l)) && (u = o(y, u, v),
                    null === d ? c = y : d.sibling = y,
                    d = y);
                return c
            }
            for (m = r(i, m); !y.done; v++,
            y = s.next())
                null !== (y = p(m, i, v, y.value, l)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key),
                u = o(y, u, v),
                null === d ? c = y : d.sibling = y,
                d = y);
            return e && m.forEach(function(e) {
                return t(i, e)
            }),
            c
        }
        return function(e, r, o, s) {
            var l = "object" == typeof o && null !== o && o.type === Ye && null === o.key;
            l && (o = o.props.children);
            var c = "object" == typeof o && null !== o;
            if (c)
                switch (o.$$typeof) {
                case $e:
                    e: {
                        for (c = o.key,
                        l = r; null !== l; ) {
                            if (l.key === c) {
                                if (7 === l.tag ? o.type === Ye : l.elementType === o.type) {
                                    n(e, l.sibling),
                                    (r = i(l, o.type === Ye ? o.props.children : o.props)).ref = fi(e, l, o),
                                    r.return = e,
                                    e = r;
                                    break e
                                }
                                n(e, l);
                                break
                            }
                            t(e, l),
                            l = l.sibling
                        }
                        o.type === Ye ? ((r = Yr(o.props.children, e.mode, s, o.key)).return = e,
                        e = r) : ((s = Qr(o.type, o.key, o.props, null, e.mode, s)).ref = fi(e, r, o),
                        s.return = e,
                        e = s)
                    }
                    return u(e);
                case Qe:
                    e: {
                        for (l = o.key; null !== r; ) {
                            if (r.key === l) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling),
                                    (r = i(r, o.children || [])).return = e,
                                    e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r),
                            r = r.sibling
                        }
                        (r = Zr(o, e.mode, s)).return = e,
                        e = r
                    }
                    return u(e)
                }
            if ("string" == typeof o || "number" == typeof o)
                return o = "" + o,
                null !== r && 6 === r.tag ? (n(e, r.sibling),
                (r = i(r, o)).return = e,
                e = r) : (n(e, r),
                (r = qr(o, e.mode, s)).return = e,
                e = r),
                u(e);
            if (di(o))
                return m(e, r, o, s);
            if (at(o))
                return v(e, r, o, s);
            if (c && hi(e, o),
            void 0 === o && !l)
                switch (e.tag) {
                case 1:
                case 0:
                    a("152", (s = e.type).displayName || s.name || "Component")
                }
            return n(e, r)
        }
    }
    var mi = pi(!0)
      , vi = pi(!1)
      , gi = {}
      , yi = {
        current: gi
    }
      , bi = {
        current: gi
    }
      , xi = {
        current: gi
    };
    function wi(e) {
        return e === gi && a("174"),
        e
    }
    function _i(e, t) {
        Dr(xi, t),
        Dr(bi, e),
        Dr(yi, gi);
        var n = t.nodeType;
        switch (n) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : tr(null, "");
            break;
        default:
            t = tr(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
        }
        Cr(yi),
        Dr(yi, t)
    }
    function Ei(e) {
        Cr(yi),
        Cr(bi),
        Cr(xi)
    }
    function Si(e) {
        wi(xi.current);
        var t = wi(yi.current)
          , n = tr(t, e.type);
        t !== n && (Dr(bi, e),
        Dr(yi, n))
    }
    function ki(e) {
        bi.current === e && (Cr(yi),
        Cr(bi))
    }
    var Ti = 0
      , Ci = 2
      , Di = 4
      , Pi = 8
      , Li = 16
      , Ai = 32
      , Mi = 64
      , Ni = 128
      , Ri = Xe.ReactCurrentDispatcher
      , Oi = 0
      , Ii = null
      , zi = null
      , Fi = null
      , Ui = null
      , Wi = null
      , Bi = null
      , ji = 0
      , Vi = null
      , Xi = 0
      , Hi = !1
      , Gi = null
      , $i = 0;
    function Qi() {
        a("307")
    }
    function Yi(e, t) {
        if (null === t)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Zt(e[n], t[n]))
                return !1;
        return !0
    }
    function Ki(e, t, n, r, i, o) {
        if (Oi = o,
        Ii = t,
        Fi = null !== e ? e.memoizedState : null,
        Ri.current = null === Fi ? lo : co,
        t = n(r, i),
        Hi) {
            do {
                Hi = !1,
                $i += 1,
                Fi = null !== e ? e.memoizedState : null,
                Bi = Ui,
                Vi = Wi = zi = null,
                Ri.current = co,
                t = n(r, i)
            } while (Hi);Gi = null,
            $i = 0
        }
        return Ri.current = so,
        (e = Ii).memoizedState = Ui,
        e.expirationTime = ji,
        e.updateQueue = Vi,
        e.effectTag |= Xi,
        e = null !== zi && null !== zi.next,
        Oi = 0,
        Bi = Wi = Ui = Fi = zi = Ii = null,
        ji = 0,
        Vi = null,
        Xi = 0,
        e && a("300"),
        t
    }
    function qi() {
        Ri.current = so,
        Oi = 0,
        Bi = Wi = Ui = Fi = zi = Ii = null,
        ji = 0,
        Vi = null,
        Xi = 0,
        Hi = !1,
        Gi = null,
        $i = 0
    }
    function Zi() {
        var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === Wi ? Ui = Wi = e : Wi = Wi.next = e,
        Wi
    }
    function Ji() {
        if (null !== Bi)
            Bi = (Wi = Bi).next,
            Fi = null !== (zi = Fi) ? zi.next : null;
        else {
            null === Fi && a("310");
            var e = {
                memoizedState: (zi = Fi).memoizedState,
                baseState: zi.baseState,
                queue: zi.queue,
                baseUpdate: zi.baseUpdate,
                next: null
            };
            Wi = null === Wi ? Ui = e : Wi.next = e,
            Fi = zi.next
        }
        return Wi
    }
    function eo(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    function to(e) {
        var t = Ji()
          , n = t.queue;
        if (null === n && a("311"),
        0 < $i) {
            var r = n.dispatch;
            if (null !== Gi) {
                var i = Gi.get(n);
                if (void 0 !== i) {
                    Gi.delete(n);
                    var o = t.memoizedState;
                    do {
                        o = e(o, i.action),
                        i = i.next
                    } while (null !== i);return Zt(o, t.memoizedState) || (_o = !0),
                    t.memoizedState = o,
                    t.baseUpdate === n.last && (t.baseState = o),
                    [o, r]
                }
            }
            return [t.memoizedState, r]
        }
        r = n.last;
        var u = t.baseUpdate;
        if (o = t.baseState,
        null !== u ? (null !== r && (r.next = null),
        r = u.next) : r = null !== r ? r.next : null,
        null !== r) {
            var s = i = null
              , l = r
              , c = !1;
            do {
                var d = l.expirationTime;
                d < Oi ? (c || (c = !0,
                s = u,
                i = o),
                d > ji && (ji = d)) : o = l.eagerReducer === e ? l.eagerState : e(o, l.action),
                u = l,
                l = l.next
            } while (null !== l && l !== r);c || (s = u,
            i = o),
            Zt(o, t.memoizedState) || (_o = !0),
            t.memoizedState = o,
            t.baseUpdate = s,
            t.baseState = i,
            n.eagerReducer = e,
            n.eagerState = o
        }
        return [t.memoizedState, n.dispatch]
    }
    function no(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        },
        null === Vi ? (Vi = {
            lastEffect: null
        }).lastEffect = e.next = e : null === (t = Vi.lastEffect) ? Vi.lastEffect = e.next = e : (n = t.next,
        t.next = e,
        e.next = n,
        Vi.lastEffect = e),
        e
    }
    function ro(e, t, n, r) {
        var i = Zi();
        Xi |= e,
        i.memoizedState = no(t, n, void 0, void 0 === r ? null : r)
    }
    function io(e, t, n, r) {
        var i = Ji();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== zi) {
            var a = zi.memoizedState;
            if (o = a.destroy,
            null !== r && Yi(r, a.deps))
                return void no(Ti, n, o, r)
        }
        Xi |= e,
        i.memoizedState = no(t, n, o, r)
    }
    function oo(e, t) {
        return "function" == typeof t ? (e = e(),
        t(e),
        function() {
            t(null)
        }
        ) : null != t ? (e = e(),
        t.current = e,
        function() {
            t.current = null
        }
        ) : void 0
    }
    function ao() {}
    function uo(e, t, n) {
        25 > $i || a("301");
        var r = e.alternate;
        if (e === Ii || null !== r && r === Ii)
            if (Hi = !0,
            e = {
                expirationTime: Oi,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            },
            null === Gi && (Gi = new Map),
            void 0 === (n = Gi.get(t)))
                Gi.set(t, e);
            else {
                for (t = n; null !== t.next; )
                    t = t.next;
                t.next = e
            }
        else {
            Va();
            var i = _u()
              , o = {
                expirationTime: i = Ya(i, e),
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            }
              , u = t.last;
            if (null === u)
                o.next = o;
            else {
                var s = u.next;
                null !== s && (o.next = s),
                u.next = o
            }
            if (t.last = o,
            0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.eagerReducer))
                try {
                    var l = t.eagerState
                      , c = r(l, n);
                    if (o.eagerReducer = r,
                    o.eagerState = c,
                    Zt(c, l))
                        return
                } catch (e) {}
            Za(e, i)
        }
    }
    var so = {
        readContext: jo,
        useCallback: Qi,
        useContext: Qi,
        useEffect: Qi,
        useImperativeHandle: Qi,
        useLayoutEffect: Qi,
        useMemo: Qi,
        useReducer: Qi,
        useRef: Qi,
        useState: Qi,
        useDebugValue: Qi
    }
      , lo = {
        readContext: jo,
        useCallback: function(e, t) {
            return Zi().memoizedState = [e, void 0 === t ? null : t],
            e
        },
        useContext: jo,
        useEffect: function(e, t) {
            return ro(516, Ni | Mi, e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null,
            ro(4, Di | Ai, oo.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ro(4, Di | Ai, e, t)
        },
        useMemo: function(e, t) {
            var n = Zi();
            return t = void 0 === t ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var r = Zi();
            return t = void 0 !== n ? n(t) : t,
            r.memoizedState = r.baseState = t,
            e = (e = r.queue = {
                last: null,
                dispatch: null,
                eagerReducer: e,
                eagerState: t
            }).dispatch = uo.bind(null, Ii, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            return e = {
                current: e
            },
            Zi().memoizedState = e
        },
        useState: function(e) {
            var t = Zi();
            return "function" == typeof e && (e = e()),
            t.memoizedState = t.baseState = e,
            e = (e = t.queue = {
                last: null,
                dispatch: null,
                eagerReducer: eo,
                eagerState: e
            }).dispatch = uo.bind(null, Ii, e),
            [t.memoizedState, e]
        },
        useDebugValue: ao
    }
      , co = {
        readContext: jo,
        useCallback: function(e, t) {
            var n = Ji();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Yi(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
            e)
        },
        useContext: jo,
        useEffect: function(e, t) {
            return io(516, Ni | Mi, e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null,
            io(4, Di | Ai, oo.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return io(4, Di | Ai, e, t)
        },
        useMemo: function(e, t) {
            var n = Ji();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Yi(t, r[1]) ? r[0] : (e = e(),
            n.memoizedState = [e, t],
            e)
        },
        useReducer: to,
        useRef: function() {
            return Ji().memoizedState
        },
        useState: function(e) {
            return to(eo)
        },
        useDebugValue: ao
    }
      , fo = null
      , ho = null
      , po = !1;
    function mo(e, t) {
        var n = Hr(5, null, null, 0);
        n.elementType = "DELETED",
        n.type = "DELETED",
        n.stateNode = t,
        n.return = e,
        n.effectTag = 8,
        null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
        e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }
    function vo(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
            !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
            !0);
        case 13:
        default:
            return !1
        }
    }
    function go(e) {
        if (po) {
            var t = ho;
            if (t) {
                var n = t;
                if (!vo(e, t)) {
                    if (!(t = Er(n)) || !vo(e, t))
                        return e.effectTag |= 2,
                        po = !1,
                        void (fo = e);
                    mo(fo, n)
                }
                fo = e,
                ho = Sr(t)
            } else
                e.effectTag |= 2,
                po = !1,
                fo = e
        }
    }
    function yo(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag; )
            e = e.return;
        fo = e
    }
    function bo(e) {
        if (e !== fo)
            return !1;
        if (!po)
            return yo(e),
            po = !0,
            !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !yr(t, e.memoizedProps))
            for (t = ho; t; )
                mo(e, t),
                t = Er(t);
        return yo(e),
        ho = fo ? Er(e.stateNode) : null,
        !0
    }
    function xo() {
        ho = fo = null,
        po = !1
    }
    var wo = Xe.ReactCurrentOwner
      , _o = !1;
    function Eo(e, t, n, r) {
        t.child = null === e ? vi(t, null, n, r) : mi(t, e.child, n, r)
    }
    function So(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return Bo(t, i),
        r = Ki(e, t, n, r, o, i),
        null === e || _o ? (t.effectTag |= 1,
        Eo(e, t, r, i),
        t.child) : (t.updateQueue = e.updateQueue,
        t.effectTag &= -517,
        e.expirationTime <= i && (e.expirationTime = 0),
        No(e, t, i))
    }
    function ko(e, t, n, r, i, o) {
        if (null === e) {
            var a = n.type;
            return "function" != typeof a || Gr(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Qr(n.type, null, r, null, t.mode, o)).ref = t.ref,
            e.return = t,
            t.child = e) : (t.tag = 15,
            t.type = a,
            To(e, t, a, r, i, o))
        }
        return a = e.child,
        i < o && (i = a.memoizedProps,
        (n = null !== (n = n.compare) ? n : en)(i, r) && e.ref === t.ref) ? No(e, t, o) : (t.effectTag |= 1,
        (e = $r(a, r)).ref = t.ref,
        e.return = t,
        t.child = e)
    }
    function To(e, t, n, r, i, o) {
        return null !== e && en(e.memoizedProps, r) && e.ref === t.ref && (_o = !1,
        i < o) ? No(e, t, o) : Do(e, t, n, r, o)
    }
    function Co(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }
    function Do(e, t, n, r, i) {
        var o = Rr(n) ? Mr : Lr.current;
        return o = Nr(t, o),
        Bo(t, i),
        n = Ki(e, t, n, r, o, i),
        null === e || _o ? (t.effectTag |= 1,
        Eo(e, t, n, i),
        t.child) : (t.updateQueue = e.updateQueue,
        t.effectTag &= -517,
        e.expirationTime <= i && (e.expirationTime = 0),
        No(e, t, i))
    }
    function Po(e, t, n, r, i) {
        if (Rr(n)) {
            var o = !0;
            Ur(t)
        } else
            o = !1;
        if (Bo(t, i),
        null === t.stateNode)
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            si(t, n, r),
            ci(t, n, r, i),
            r = !0;
        else if (null === e) {
            var a = t.stateNode
              , u = t.memoizedProps;
            a.props = u;
            var s = a.context
              , l = n.contextType;
            "object" == typeof l && null !== l ? l = jo(l) : l = Nr(t, l = Rr(n) ? Mr : Lr.current);
            var c = n.getDerivedStateFromProps
              , d = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
            d || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || s !== l) && li(t, a, r, l),
            $o = !1;
            var f = t.memoizedState;
            s = a.state = f;
            var h = t.updateQueue;
            null !== h && (na(t, h, r, a, i),
            s = t.memoizedState),
            u !== r || f !== s || Ar.current || $o ? ("function" == typeof c && (oi(t, n, c, r),
            s = t.memoizedState),
            (u = $o || ui(t, n, u, r, f, s, l)) ? (d || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
            "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
            t.memoizedProps = r,
            t.memoizedState = s),
            a.props = r,
            a.state = s,
            a.context = l,
            r = u) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
            r = !1)
        } else
            a = t.stateNode,
            u = t.memoizedProps,
            a.props = t.type === t.elementType ? u : ri(t.type, u),
            s = a.context,
            "object" == typeof (l = n.contextType) && null !== l ? l = jo(l) : l = Nr(t, l = Rr(n) ? Mr : Lr.current),
            (d = "function" == typeof (c = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || s !== l) && li(t, a, r, l),
            $o = !1,
            s = t.memoizedState,
            f = a.state = s,
            null !== (h = t.updateQueue) && (na(t, h, r, a, i),
            f = t.memoizedState),
            u !== r || s !== f || Ar.current || $o ? ("function" == typeof c && (oi(t, n, c, r),
            f = t.memoizedState),
            (c = $o || ui(t, n, u, r, s, f, l)) ? (d || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, f, l),
            "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, f, l)),
            "function" == typeof a.componentDidUpdate && (t.effectTag |= 4),
            "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256),
            t.memoizedProps = r,
            t.memoizedState = f),
            a.props = r,
            a.state = f,
            a.context = l,
            r = c) : ("function" != typeof a.componentDidUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256),
            r = !1);
        return Lo(e, t, n, r, o, i)
    }
    function Lo(e, t, n, r, i, o) {
        Co(e, t);
        var a = 0 != (64 & t.effectTag);
        if (!r && !a)
            return i && Wr(t, n, !1),
            No(e, t, o);
        r = t.stateNode,
        wo.current = t;
        var u = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1,
        null !== e && a ? (t.child = mi(t, e.child, null, o),
        t.child = mi(t, null, u, o)) : Eo(e, t, u, o),
        t.memoizedState = r.state,
        i && Wr(t, n, !0),
        t.child
    }
    function Ao(e) {
        var t = e.stateNode;
        t.pendingContext ? zr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && zr(0, t.context, !1),
        _i(e, t.containerInfo)
    }
    function Mo(e, t, n) {
        var r = t.mode
          , i = t.pendingProps
          , o = t.memoizedState;
        if (0 == (64 & t.effectTag)) {
            o = null;
            var a = !1
        } else
            o = {
                timedOutAt: null !== o ? o.timedOutAt : 0
            },
            a = !0,
            t.effectTag &= -65;
        if (null === e)
            if (a) {
                var u = i.fallback;
                e = Yr(null, r, 0, null),
                0 == (1 & t.mode) && (e.child = null !== t.memoizedState ? t.child.child : t.child),
                r = Yr(u, r, n, null),
                e.sibling = r,
                (n = e).return = r.return = t
            } else
                n = r = vi(t, null, i.children, n);
        else
            null !== e.memoizedState ? (u = (r = e.child).sibling,
            a ? (n = i.fallback,
            i = $r(r, r.pendingProps),
            0 == (1 & t.mode) && ((a = null !== t.memoizedState ? t.child.child : t.child) !== r.child && (i.child = a)),
            r = i.sibling = $r(u, n, u.expirationTime),
            n = i,
            i.childExpirationTime = 0,
            n.return = r.return = t) : n = r = mi(t, r.child, i.children, n)) : (u = e.child,
            a ? (a = i.fallback,
            (i = Yr(null, r, 0, null)).child = u,
            0 == (1 & t.mode) && (i.child = null !== t.memoizedState ? t.child.child : t.child),
            (r = i.sibling = Yr(a, r, n, null)).effectTag |= 2,
            n = i,
            i.childExpirationTime = 0,
            n.return = r.return = t) : r = n = mi(t, u, i.children, n)),
            t.stateNode = e.stateNode;
        return t.memoizedState = o,
        t.child = n,
        r
    }
    function No(e, t, n) {
        if (null !== e && (t.contextDependencies = e.contextDependencies),
        t.childExpirationTime < n)
            return null;
        if (null !== e && t.child !== e.child && a("153"),
        null !== t.child) {
            for (n = $r(e = t.child, e.pendingProps, e.expirationTime),
            t.child = n,
            n.return = t; null !== e.sibling; )
                e = e.sibling,
                (n = n.sibling = $r(e, e.pendingProps, e.expirationTime)).return = t;
            n.sibling = null
        }
        return t.child
    }
    function Ro(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            if (e.memoizedProps !== t.pendingProps || Ar.current)
                _o = !0;
            else if (r < n) {
                switch (_o = !1,
                t.tag) {
                case 3:
                    Ao(t),
                    xo();
                    break;
                case 5:
                    Si(t);
                    break;
                case 1:
                    Rr(t.type) && Ur(t);
                    break;
                case 4:
                    _i(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    Uo(t, t.memoizedProps.value);
                    break;
                case 13:
                    if (null !== t.memoizedState)
                        return 0 !== (r = t.child.childExpirationTime) && r >= n ? Mo(e, t, n) : null !== (t = No(e, t, n)) ? t.sibling : null
                }
                return No(e, t, n)
            }
        } else
            _o = !1;
        switch (t.expirationTime = 0,
        t.tag) {
        case 2:
            r = t.elementType,
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            e = t.pendingProps;
            var i = Nr(t, Lr.current);
            if (Bo(t, n),
            i = Ki(null, t, r, e, i, n),
            t.effectTag |= 1,
            "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                if (t.tag = 1,
                qi(),
                Rr(r)) {
                    var o = !0;
                    Ur(t)
                } else
                    o = !1;
                t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
                var u = r.getDerivedStateFromProps;
                "function" == typeof u && oi(t, r, u, e),
                i.updater = ai,
                t.stateNode = i,
                i._reactInternalFiber = t,
                ci(t, r, e, n),
                t = Lo(null, t, r, !0, o, n)
            } else
                t.tag = 0,
                Eo(null, t, i, n),
                t = t.child;
            return t;
        case 16:
            switch (i = t.elementType,
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            o = t.pendingProps,
            e = function(e) {
                var t = e._result;
                switch (e._status) {
                case 1:
                    return t;
                case 2:
                case 0:
                    throw t;
                default:
                    switch (e._status = 0,
                    (t = (t = e._ctor)()).then(function(t) {
                        0 === e._status && (t = t.default,
                        e._status = 1,
                        e._result = t)
                    }, function(t) {
                        0 === e._status && (e._status = 2,
                        e._result = t)
                    }),
                    e._status) {
                    case 1:
                        return e._result;
                    case 2:
                        throw e._result
                    }
                    throw e._result = t,
                    t
                }
            }(i),
            t.type = e,
            i = t.tag = function(e) {
                if ("function" == typeof e)
                    return Gr(e) ? 1 : 0;
                if (null != e) {
                    if ((e = e.$$typeof) === tt)
                        return 11;
                    if (e === rt)
                        return 14
                }
                return 2
            }(e),
            o = ri(e, o),
            u = void 0,
            i) {
            case 0:
                u = Do(null, t, e, o, n);
                break;
            case 1:
                u = Po(null, t, e, o, n);
                break;
            case 11:
                u = So(null, t, e, o, n);
                break;
            case 14:
                u = ko(null, t, e, ri(e.type, o), r, n);
                break;
            default:
                a("306", e, "")
            }
            return u;
        case 0:
            return r = t.type,
            i = t.pendingProps,
            Do(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
        case 1:
            return r = t.type,
            i = t.pendingProps,
            Po(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
        case 3:
            return Ao(t),
            null === (r = t.updateQueue) && a("282"),
            i = null !== (i = t.memoizedState) ? i.element : null,
            na(t, r, t.pendingProps, null, n),
            (r = t.memoizedState.element) === i ? (xo(),
            t = No(e, t, n)) : (i = t.stateNode,
            (i = (null === e || null === e.child) && i.hydrate) && (ho = Sr(t.stateNode.containerInfo),
            fo = t,
            i = po = !0),
            i ? (t.effectTag |= 2,
            t.child = vi(t, null, r, n)) : (Eo(e, t, r, n),
            xo()),
            t = t.child),
            t;
        case 5:
            return Si(t),
            null === e && go(t),
            r = t.type,
            i = t.pendingProps,
            o = null !== e ? e.memoizedProps : null,
            u = i.children,
            yr(r, i) ? u = null : null !== o && yr(r, o) && (t.effectTag |= 16),
            Co(e, t),
            1 !== n && 1 & t.mode && i.hidden ? (t.expirationTime = t.childExpirationTime = 1,
            t = null) : (Eo(e, t, u, n),
            t = t.child),
            t;
        case 6:
            return null === e && go(t),
            null;
        case 13:
            return Mo(e, t, n);
        case 4:
            return _i(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            null === e ? t.child = mi(t, null, r, n) : Eo(e, t, r, n),
            t.child;
        case 11:
            return r = t.type,
            i = t.pendingProps,
            So(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
        case 7:
            return Eo(e, t, t.pendingProps, n),
            t.child;
        case 8:
        case 12:
            return Eo(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (r = t.type._context,
                i = t.pendingProps,
                u = t.memoizedProps,
                Uo(t, o = i.value),
                null !== u) {
                    var s = u.value;
                    if (0 === (o = Zt(s, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, o) : 1073741823))) {
                        if (u.children === i.children && !Ar.current) {
                            t = No(e, t, n);
                            break e
                        }
                    } else
                        for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                            var l = s.contextDependencies;
                            if (null !== l) {
                                u = s.child;
                                for (var c = l.first; null !== c; ) {
                                    if (c.context === r && 0 != (c.observedBits & o)) {
                                        1 === s.tag && ((c = Ko(n)).tag = Ho,
                                        Zo(s, c)),
                                        s.expirationTime < n && (s.expirationTime = n),
                                        null !== (c = s.alternate) && c.expirationTime < n && (c.expirationTime = n),
                                        c = n;
                                        for (var d = s.return; null !== d; ) {
                                            var f = d.alternate;
                                            if (d.childExpirationTime < c)
                                                d.childExpirationTime = c,
                                                null !== f && f.childExpirationTime < c && (f.childExpirationTime = c);
                                            else {
                                                if (!(null !== f && f.childExpirationTime < c))
                                                    break;
                                                f.childExpirationTime = c
                                            }
                                            d = d.return
                                        }
                                        l.expirationTime < n && (l.expirationTime = n);
                                        break
                                    }
                                    c = c.next
                                }
                            } else
                                u = 10 === s.tag && s.type === t.type ? null : s.child;
                            if (null !== u)
                                u.return = s;
                            else
                                for (u = s; null !== u; ) {
                                    if (u === t) {
                                        u = null;
                                        break
                                    }
                                    if (null !== (s = u.sibling)) {
                                        s.return = u.return,
                                        u = s;
                                        break
                                    }
                                    u = u.return
                                }
                            s = u
                        }
                }
                Eo(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type,
            r = (o = t.pendingProps).children,
            Bo(t, n),
            r = r(i = jo(i, o.unstable_observedBits)),
            t.effectTag |= 1,
            Eo(e, t, r, n),
            t.child;
        case 14:
            return o = ri(i = t.type, t.pendingProps),
            ko(e, t, i, o = ri(i.type, o), r, n);
        case 15:
            return To(e, t, t.type, t.pendingProps, r, n);
        case 17:
            return r = t.type,
            i = t.pendingProps,
            i = t.elementType === r ? i : ri(r, i),
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            t.tag = 1,
            Rr(r) ? (e = !0,
            Ur(t)) : e = !1,
            Bo(t, n),
            si(t, r, i),
            ci(t, r, i, n),
            Lo(null, t, r, !0, e, n)
        }
        a("156")
    }
    var Oo = {
        current: null
    }
      , Io = null
      , zo = null
      , Fo = null;
    function Uo(e, t) {
        var n = e.type._context;
        Dr(Oo, n._currentValue),
        n._currentValue = t
    }
    function Wo(e) {
        var t = Oo.current;
        Cr(Oo),
        e.type._context._currentValue = t
    }
    function Bo(e, t) {
        Io = e,
        Fo = zo = null;
        var n = e.contextDependencies;
        null !== n && n.expirationTime >= t && (_o = !0),
        e.contextDependencies = null
    }
    function jo(e, t) {
        return Fo !== e && !1 !== t && 0 !== t && ("number" == typeof t && 1073741823 !== t || (Fo = e,
        t = 1073741823),
        t = {
            context: e,
            observedBits: t,
            next: null
        },
        null === zo ? (null === Io && a("308"),
        zo = t,
        Io.contextDependencies = {
            first: t,
            expirationTime: 0
        }) : zo = zo.next = t),
        e._currentValue
    }
    var Vo = 0
      , Xo = 1
      , Ho = 2
      , Go = 3
      , $o = !1;
    function Qo(e) {
        return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }
    function Yo(e) {
        return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }
    function Ko(e) {
        return {
            expirationTime: e,
            tag: Vo,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }
    function qo(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t,
        e.lastUpdate = t)
    }
    function Zo(e, t) {
        var n = e.alternate;
        if (null === n) {
            var r = e.updateQueue
              , i = null;
            null === r && (r = e.updateQueue = Qo(e.memoizedState))
        } else
            r = e.updateQueue,
            i = n.updateQueue,
            null === r ? null === i ? (r = e.updateQueue = Qo(e.memoizedState),
            i = n.updateQueue = Qo(n.memoizedState)) : r = e.updateQueue = Yo(i) : null === i && (i = n.updateQueue = Yo(r));
        null === i || r === i ? qo(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (qo(r, t),
        qo(i, t)) : (qo(r, t),
        i.lastUpdate = t)
    }
    function Jo(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? e.updateQueue = Qo(e.memoizedState) : ea(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t,
        n.lastCapturedUpdate = t)
    }
    function ea(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = Yo(t)),
        t
    }
    function ta(e, t, n, r, o, a) {
        switch (n.tag) {
        case Xo:
            return "function" == typeof (e = n.payload) ? e.call(a, r, o) : e;
        case Go:
            e.effectTag = -2049 & e.effectTag | 64;
        case Vo:
            if (null == (o = "function" == typeof (e = n.payload) ? e.call(a, r, o) : e))
                break;
            return i({}, r, o);
        case Ho:
            $o = !0
        }
        return r
    }
    function na(e, t, n, r, i) {
        $o = !1;
        for (var o = (t = ea(e, t)).baseState, a = null, u = 0, s = t.firstUpdate, l = o; null !== s; ) {
            var c = s.expirationTime;
            c < i ? (null === a && (a = s,
            o = l),
            u < c && (u = c)) : (l = ta(e, 0, s, l, n, r),
            null !== s.callback && (e.effectTag |= 32,
            s.nextEffect = null,
            null === t.lastEffect ? t.firstEffect = t.lastEffect = s : (t.lastEffect.nextEffect = s,
            t.lastEffect = s))),
            s = s.next
        }
        for (c = null,
        s = t.firstCapturedUpdate; null !== s; ) {
            var d = s.expirationTime;
            d < i ? (null === c && (c = s,
            null === a && (o = l)),
            u < d && (u = d)) : (l = ta(e, 0, s, l, n, r),
            null !== s.callback && (e.effectTag |= 32,
            s.nextEffect = null,
            null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = s : (t.lastCapturedEffect.nextEffect = s,
            t.lastCapturedEffect = s))),
            s = s.next
        }
        null === a && (t.lastUpdate = null),
        null === c ? t.lastCapturedUpdate = null : e.effectTag |= 32,
        null === a && null === c && (o = l),
        t.baseState = o,
        t.firstUpdate = a,
        t.firstCapturedUpdate = c,
        e.expirationTime = u,
        e.memoizedState = l
    }
    function ra(e, t, n) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate,
        t.lastUpdate = t.lastCapturedUpdate),
        t.firstCapturedUpdate = t.lastCapturedUpdate = null),
        ia(t.firstEffect, n),
        t.firstEffect = t.lastEffect = null,
        ia(t.firstCapturedEffect, n),
        t.firstCapturedEffect = t.lastCapturedEffect = null
    }
    function ia(e, t) {
        for (; null !== e; ) {
            var n = e.callback;
            if (null !== n) {
                e.callback = null;
                var r = t;
                "function" != typeof n && a("191", n),
                n.call(r)
            }
            e = e.nextEffect
        }
    }
    function oa(e, t) {
        return {
            value: e,
            source: t,
            stack: st(t)
        }
    }
    function aa(e) {
        e.effectTag |= 4
    }
    var ua = void 0
      , sa = void 0
      , la = void 0
      , ca = void 0;
    ua = function(e, t) {
        for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; null === n.sibling; ) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    sa = function() {}
    ,
    la = function(e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
            var u = t.stateNode;
            switch (wi(yi.current),
            e = null,
            n) {
            case "input":
                a = bt(u, a),
                r = bt(u, r),
                e = [];
                break;
            case "option":
                a = $n(u, a),
                r = $n(u, r),
                e = [];
                break;
            case "select":
                a = i({}, a, {
                    value: void 0
                }),
                r = i({}, r, {
                    value: void 0
                }),
                e = [];
                break;
            case "textarea":
                a = Yn(u, a),
                r = Yn(u, r),
                e = [];
                break;
            default:
                "function" != typeof a.onClick && "function" == typeof r.onClick && (u.onclick = pr)
            }
            dr(n, r),
            u = n = void 0;
            var s = null;
            for (n in a)
                if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
                    if ("style" === n) {
                        var l = a[n];
                        for (u in l)
                            l.hasOwnProperty(u) && (s || (s = {}),
                            s[u] = "")
                    } else
                        "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (b.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
            for (n in r) {
                var c = r[n];
                if (l = null != a ? a[n] : void 0,
                r.hasOwnProperty(n) && c !== l && (null != c || null != l))
                    if ("style" === n)
                        if (l) {
                            for (u in l)
                                !l.hasOwnProperty(u) || c && c.hasOwnProperty(u) || (s || (s = {}),
                                s[u] = "");
                            for (u in c)
                                c.hasOwnProperty(u) && l[u] !== c[u] && (s || (s = {}),
                                s[u] = c[u])
                        } else
                            s || (e || (e = []),
                            e.push(n, s)),
                            s = c;
                    else
                        "dangerouslySetInnerHTML" === n ? (c = c ? c.__html : void 0,
                        l = l ? l.__html : void 0,
                        null != c && l !== c && (e = e || []).push(n, "" + c)) : "children" === n ? l === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(n, "" + c) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (b.hasOwnProperty(n) ? (null != c && hr(o, n),
                        e || l === c || (e = [])) : (e = e || []).push(n, c))
            }
            s && (e = e || []).push("style", s),
            o = e,
            (t.updateQueue = o) && aa(t)
        }
    }
    ,
    ca = function(e, t, n, r) {
        n !== r && aa(t)
    }
    ;
    var da = "function" == typeof WeakSet ? WeakSet : Set;
    function fa(e, t) {
        var n = t.source
          , r = t.stack;
        null === r && null !== n && (r = st(n)),
        null !== n && ut(n.type),
        t = t.value,
        null !== e && 1 === e.tag && ut(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function ha(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t)
                try {
                    t(null)
                } catch (t) {
                    Qa(e, t)
                }
            else
                t.current = null
    }
    function pa(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var r = n = n.next;
            do {
                if ((r.tag & e) !== Ti) {
                    var i = r.destroy;
                    r.destroy = void 0,
                    void 0 !== i && i()
                }
                (r.tag & t) !== Ti && (i = r.create,
                r.destroy = i()),
                r = r.next
            } while (r !== n)
        }
    }
    function ma(e) {
        switch ("function" == typeof jr && jr(e),
        e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            var t = e.updateQueue;
            if (null !== t && null !== (t = t.lastEffect)) {
                var n = t = t.next;
                do {
                    var r = n.destroy;
                    if (void 0 !== r) {
                        var i = e;
                        try {
                            r()
                        } catch (e) {
                            Qa(i, e)
                        }
                    }
                    n = n.next
                } while (n !== t)
            }
            break;
        case 1:
            if (ha(e),
            "function" == typeof (t = e.stateNode).componentWillUnmount)
                try {
                    t.props = e.memoizedProps,
                    t.state = e.memoizedState,
                    t.componentWillUnmount()
                } catch (t) {
                    Qa(e, t)
                }
            break;
        case 5:
            ha(e);
            break;
        case 4:
            ya(e)
        }
    }
    function va(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }
    function ga(e) {
        e: {
            for (var t = e.return; null !== t; ) {
                if (va(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            a("160"),
            n = void 0
        }
        var r = t = void 0;
        switch (n.tag) {
        case 5:
            t = n.stateNode,
            r = !1;
            break;
        case 3:
        case 4:
            t = n.stateNode.containerInfo,
            r = !0;
            break;
        default:
            a("161")
        }
        16 & n.effectTag && (or(t, ""),
        n.effectTag &= -17);
        e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
                if (null === n.return || va(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                if (2 & n.effectTag)
                    continue t;
                if (null === n.child || 4 === n.tag)
                    continue t;
                n.child.return = n,
                n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        for (var i = e; ; ) {
            if (5 === i.tag || 6 === i.tag)
                if (n)
                    if (r) {
                        var o = t
                          , u = i.stateNode
                          , s = n;
                        8 === o.nodeType ? o.parentNode.insertBefore(u, s) : o.insertBefore(u, s)
                    } else
                        t.insertBefore(i.stateNode, n);
                else
                    r ? (u = t,
                    s = i.stateNode,
                    8 === u.nodeType ? (o = u.parentNode).insertBefore(s, u) : (o = u).appendChild(s),
                    null != (u = u._reactRootContainer) || null !== o.onclick || (o.onclick = pr)) : t.appendChild(i.stateNode);
            else if (4 !== i.tag && null !== i.child) {
                i.child.return = i,
                i = i.child;
                continue
            }
            if (i === e)
                break;
            for (; null === i.sibling; ) {
                if (null === i.return || i.return === e)
                    return;
                i = i.return
            }
            i.sibling.return = i.return,
            i = i.sibling
        }
    }
    function ya(e) {
        for (var t = e, n = !1, r = void 0, i = void 0; ; ) {
            if (!n) {
                n = t.return;
                e: for (; ; ) {
                    switch (null === n && a("160"),
                    n.tag) {
                    case 5:
                        r = n.stateNode,
                        i = !1;
                        break e;
                    case 3:
                    case 4:
                        r = n.stateNode.containerInfo,
                        i = !0;
                        break e
                    }
                    n = n.return
                }
                n = !0
            }
            if (5 === t.tag || 6 === t.tag) {
                e: for (var o = t, u = o; ; )
                    if (ma(u),
                    null !== u.child && 4 !== u.tag)
                        u.child.return = u,
                        u = u.child;
                    else {
                        if (u === o)
                            break;
                        for (; null === u.sibling; ) {
                            if (null === u.return || u.return === o)
                                break e;
                            u = u.return
                        }
                        u.sibling.return = u.return,
                        u = u.sibling
                    }
                i ? (o = r,
                u = t.stateNode,
                8 === o.nodeType ? o.parentNode.removeChild(u) : o.removeChild(u)) : r.removeChild(t.stateNode)
            } else if (4 === t.tag) {
                if (null !== t.child) {
                    r = t.stateNode.containerInfo,
                    i = !0,
                    t.child.return = t,
                    t = t.child;
                    continue
                }
            } else if (ma(t),
            null !== t.child) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e)
                    return;
                4 === (t = t.return).tag && (n = !1)
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    function ba(e, t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            pa(Di, Pi, t);
            break;
        case 1:
            break;
        case 5:
            var n = t.stateNode;
            if (null != n) {
                var r = t.memoizedProps;
                e = null !== e ? e.memoizedProps : r;
                var i = t.type
                  , o = t.updateQueue;
                t.updateQueue = null,
                null !== o && function(e, t, n, r, i) {
                    e[R] = i,
                    "input" === n && "radio" === i.type && null != i.name && wt(e, i),
                    fr(n, r),
                    r = fr(n, i);
                    for (var o = 0; o < t.length; o += 2) {
                        var a = t[o]
                          , u = t[o + 1];
                        "style" === a ? lr(e, u) : "dangerouslySetInnerHTML" === a ? ir(e, u) : "children" === a ? or(e, u) : gt(e, a, u, r)
                    }
                    switch (n) {
                    case "input":
                        _t(e, i);
                        break;
                    case "textarea":
                        qn(e, i);
                        break;
                    case "select":
                        t = e._wrapperState.wasMultiple,
                        e._wrapperState.wasMultiple = !!i.multiple,
                        null != (n = i.value) ? Qn(e, !!i.multiple, n, !1) : t !== !!i.multiple && (null != i.defaultValue ? Qn(e, !!i.multiple, i.defaultValue, !0) : Qn(e, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                }(n, o, i, e, r)
            }
            break;
        case 6:
            null === t.stateNode && a("162"),
            t.stateNode.nodeValue = t.memoizedProps;
            break;
        case 3:
        case 12:
            break;
        case 13:
            if (n = t.memoizedState,
            r = void 0,
            e = t,
            null === n ? r = !1 : (r = !0,
            e = t.child,
            0 === n.timedOutAt && (n.timedOutAt = _u())),
            null !== e && function(e, t) {
                for (var n = e; ; ) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t)
                            r.style.display = "none";
                        else {
                            r = n.stateNode;
                            var i = n.memoizedProps.style;
                            i = null != i && i.hasOwnProperty("display") ? i.display : null,
                            r.style.display = sr("display", i)
                        }
                    } else if (6 === n.tag)
                        n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else {
                        if (13 === n.tag && null !== n.memoizedState) {
                            (r = n.child.sibling).return = n,
                            n = r;
                            continue
                        }
                        if (null !== n.child) {
                            n.child.return = n,
                            n = n.child;
                            continue
                        }
                    }
                    if (n === e)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }(e, r),
            null !== (n = t.updateQueue)) {
                t.updateQueue = null;
                var u = t.stateNode;
                null === u && (u = t.stateNode = new da),
                n.forEach(function(e) {
                    var n = function(e, t) {
                        var n = e.stateNode;
                        null !== n && n.delete(t),
                        t = Ya(t = _u(), e),
                        null !== (e = qa(e, t)) && (Jr(e, t),
                        0 !== (t = e.expirationTime) && Eu(e, t))
                    }
                    .bind(null, t, e);
                    u.has(e) || (u.add(e),
                    e.then(n, n))
                })
            }
            break;
        case 17:
            break;
        default:
            a("163")
        }
    }
    var xa = "function" == typeof WeakMap ? WeakMap : Map;
    function wa(e, t, n) {
        (n = Ko(n)).tag = Go,
        n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Mu(r),
            fa(e, t)
        }
        ,
        n
    }
    function _a(e, t, n) {
        (n = Ko(n)).tag = Go;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = t.value;
            n.payload = function() {
                return r(i)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof r && (null === Fa ? Fa = new Set([this]) : Fa.add(this));
            var n = t.value
              , i = t.stack;
            fa(e, t),
            this.componentDidCatch(n, {
                componentStack: null !== i ? i : ""
            })
        }
        ),
        n
    }
    function Ea(e) {
        switch (e.tag) {
        case 1:
            Rr(e.type) && Or();
            var t = e.effectTag;
            return 2048 & t ? (e.effectTag = -2049 & t | 64,
            e) : null;
        case 3:
            return Ei(),
            Ir(),
            0 != (64 & (t = e.effectTag)) && a("285"),
            e.effectTag = -2049 & t | 64,
            e;
        case 5:
            return ki(e),
            null;
        case 13:
            return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64,
            e) : null;
        case 18:
            return null;
        case 4:
            return Ei(),
            null;
        case 10:
            return Wo(e),
            null;
        default:
            return null
        }
    }
    var Sa = Xe.ReactCurrentDispatcher
      , ka = Xe.ReactCurrentOwner
      , Ta = 1073741822
      , Ca = !1
      , Da = null
      , Pa = null
      , La = 0
      , Aa = -1
      , Ma = !1
      , Na = null
      , Ra = !1
      , Oa = null
      , Ia = null
      , za = null
      , Fa = null;
    function Ua() {
        if (null !== Da)
            for (var e = Da.return; null !== e; ) {
                var t = e;
                switch (t.tag) {
                case 1:
                    var n = t.type.childContextTypes;
                    null != n && Or();
                    break;
                case 3:
                    Ei(),
                    Ir();
                    break;
                case 5:
                    ki(t);
                    break;
                case 4:
                    Ei();
                    break;
                case 10:
                    Wo(t)
                }
                e = e.return
            }
        Pa = null,
        La = 0,
        Aa = -1,
        Ma = !1,
        Da = null
    }
    function Wa() {
        for (; null !== Na; ) {
            var e = Na.effectTag;
            if (16 & e && or(Na.stateNode, ""),
            128 & e) {
                var t = Na.alternate;
                null !== t && (null !== (t = t.ref) && ("function" == typeof t ? t(null) : t.current = null))
            }
            switch (14 & e) {
            case 2:
                ga(Na),
                Na.effectTag &= -3;
                break;
            case 6:
                ga(Na),
                Na.effectTag &= -3,
                ba(Na.alternate, Na);
                break;
            case 4:
                ba(Na.alternate, Na);
                break;
            case 8:
                ya(e = Na),
                e.return = null,
                e.child = null,
                e.memoizedState = null,
                e.updateQueue = null,
                null !== (e = e.alternate) && (e.return = null,
                e.child = null,
                e.memoizedState = null,
                e.updateQueue = null)
            }
            Na = Na.nextEffect
        }
    }
    function Ba() {
        for (; null !== Na; ) {
            if (256 & Na.effectTag)
                e: {
                    var e = Na.alternate
                      , t = Na;
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pa(Ci, Ti, t);
                        break e;
                    case 1:
                        if (256 & t.effectTag && null !== e) {
                            var n = e.memoizedProps
                              , r = e.memoizedState;
                            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ri(t.type, n), r),
                            e.__reactInternalSnapshotBeforeUpdate = t
                        }
                        break e;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break e;
                    default:
                        a("163")
                    }
                }
            Na = Na.nextEffect
        }
    }
    function ja(e, t) {
        for (; null !== Na; ) {
            var n = Na.effectTag;
            if (36 & n) {
                var r = Na.alternate
                  , i = Na
                  , o = t;
                switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    pa(Li, Ai, i);
                    break;
                case 1:
                    var u = i.stateNode;
                    if (4 & i.effectTag)
                        if (null === r)
                            u.componentDidMount();
                        else {
                            var s = i.elementType === i.type ? r.memoizedProps : ri(i.type, r.memoizedProps);
                            u.componentDidUpdate(s, r.memoizedState, u.__reactInternalSnapshotBeforeUpdate)
                        }
                    null !== (r = i.updateQueue) && ra(0, r, u);
                    break;
                case 3:
                    if (null !== (r = i.updateQueue)) {
                        if (u = null,
                        null !== i.child)
                            switch (i.child.tag) {
                            case 5:
                                u = i.child.stateNode;
                                break;
                            case 1:
                                u = i.child.stateNode
                            }
                        ra(0, r, u)
                    }
                    break;
                case 5:
                    o = i.stateNode,
                    null === r && 4 & i.effectTag && gr(i.type, i.memoizedProps) && o.focus();
                    break;
                case 6:
                case 4:
                case 12:
                case 13:
                case 17:
                    break;
                default:
                    a("163")
                }
            }
            128 & n && (null !== (i = Na.ref) && (o = Na.stateNode,
            "function" == typeof i ? i(o) : i.current = o)),
            512 & n && (Oa = e),
            Na = Na.nextEffect
        }
    }
    function Va() {
        null !== Ia && _r(Ia),
        null !== za && za()
    }
    function Xa(e, t) {
        Ra = Ca = !0,
        e.current === t && a("177");
        var n = e.pendingCommitExpirationTime;
        0 === n && a("261"),
        e.pendingCommitExpirationTime = 0;
        var r = t.expirationTime
          , i = t.childExpirationTime;
        for (function(e, t) {
            if (e.didError = !1,
            0 === t)
                e.earliestPendingTime = 0,
                e.latestPendingTime = 0,
                e.earliestSuspendedTime = 0,
                e.latestSuspendedTime = 0,
                e.latestPingedTime = 0;
            else {
                t < e.latestPingedTime && (e.latestPingedTime = 0);
                var n = e.latestPendingTime;
                0 !== n && (n > t ? e.earliestPendingTime = e.latestPendingTime = 0 : e.earliestPendingTime > t && (e.earliestPendingTime = e.latestPendingTime)),
                0 === (n = e.earliestSuspendedTime) ? Jr(e, t) : t < e.latestSuspendedTime ? (e.earliestSuspendedTime = 0,
                e.latestSuspendedTime = 0,
                e.latestPingedTime = 0,
                Jr(e, t)) : t > n && Jr(e, t)
            }
            ni(0, e)
        }(e, i > r ? i : r),
        ka.current = null,
        r = void 0,
        1 < t.effectTag ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t,
        r = t.firstEffect) : r = t : r = t.firstEffect,
        mr = Sn,
        vr = function() {
            var e = In();
            if (zn(e)) {
                if ("selectionStart"in e)
                    var t = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                else
                    e: {
                        var n = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                        if (n && 0 !== n.rangeCount) {
                            t = n.anchorNode;
                            var r = n.anchorOffset
                              , i = n.focusNode;
                            n = n.focusOffset;
                            try {
                                t.nodeType,
                                i.nodeType
                            } catch (e) {
                                t = null;
                                break e
                            }
                            var o = 0
                              , a = -1
                              , u = -1
                              , s = 0
                              , l = 0
                              , c = e
                              , d = null;
                            t: for (; ; ) {
                                for (var f; c !== t || 0 !== r && 3 !== c.nodeType || (a = o + r),
                                c !== i || 0 !== n && 3 !== c.nodeType || (u = o + n),
                                3 === c.nodeType && (o += c.nodeValue.length),
                                null !== (f = c.firstChild); )
                                    d = c,
                                    c = f;
                                for (; ; ) {
                                    if (c === e)
                                        break t;
                                    if (d === t && ++s === r && (a = o),
                                    d === i && ++l === n && (u = o),
                                    null !== (f = c.nextSibling))
                                        break;
                                    d = (c = d).parentNode
                                }
                                c = f
                            }
                            t = -1 === a || -1 === u ? null : {
                                start: a,
                                end: u
                            }
                        } else
                            t = null
                    }
                t = t || {
                    start: 0,
                    end: 0
                }
            } else
                t = null;
            return {
                focusedElem: e,
                selectionRange: t
            }
        }(),
        Sn = !1,
        Na = r; null !== Na; ) {
            i = !1;
            var u = void 0;
            try {
                Ba()
            } catch (e) {
                i = !0,
                u = e
            }
            i && (null === Na && a("178"),
            Qa(Na, u),
            null !== Na && (Na = Na.nextEffect))
        }
        for (Na = r; null !== Na; ) {
            i = !1,
            u = void 0;
            try {
                Wa()
            } catch (e) {
                i = !0,
                u = e
            }
            i && (null === Na && a("178"),
            Qa(Na, u),
            null !== Na && (Na = Na.nextEffect))
        }
        for (Fn(vr),
        vr = null,
        Sn = !!mr,
        mr = null,
        e.current = t,
        Na = r; null !== Na; ) {
            i = !1,
            u = void 0;
            try {
                ja(e, n)
            } catch (e) {
                i = !0,
                u = e
            }
            i && (null === Na && a("178"),
            Qa(Na, u),
            null !== Na && (Na = Na.nextEffect))
        }
        if (null !== r && null !== Oa) {
            var s = function(e, t) {
                za = Ia = Oa = null;
                var n = iu;
                iu = !0;
                do {
                    if (512 & t.effectTag) {
                        var r = !1
                          , i = void 0;
                        try {
                            var o = t;
                            pa(Ni, Ti, o),
                            pa(Ti, Mi, o)
                        } catch (e) {
                            r = !0,
                            i = e
                        }
                        r && Qa(t, i)
                    }
                    t = t.nextEffect
                } while (null !== t);iu = n,
                0 !== (n = e.expirationTime) && Eu(e, n),
                cu || iu || Du(1073741823, !1)
            }
            .bind(null, e, r);
            Ia = o.unstable_runWithPriority(o.unstable_NormalPriority, function() {
                return wr(s)
            }),
            za = s
        }
        Ca = Ra = !1,
        "function" == typeof Br && Br(t.stateNode),
        n = t.expirationTime,
        0 === (t = (t = t.childExpirationTime) > n ? t : n) && (Fa = null),
        function(e, t) {
            e.expirationTime = t,
            e.finishedWork = null
        }(e, t)
    }
    function Ha(e) {
        for (; ; ) {
            var t = e.alternate
              , n = e.return
              , r = e.sibling;
            if (0 == (1024 & e.effectTag)) {
                Da = e;
                e: {
                    var o = t
                      , u = La
                      , s = (t = e).pendingProps;
                    switch (t.tag) {
                    case 2:
                    case 16:
                        break;
                    case 15:
                    case 0:
                        break;
                    case 1:
                        Rr(t.type) && Or();
                        break;
                    case 3:
                        Ei(),
                        Ir(),
                        (s = t.stateNode).pendingContext && (s.context = s.pendingContext,
                        s.pendingContext = null),
                        null !== o && null !== o.child || (bo(t),
                        t.effectTag &= -3),
                        sa(t);
                        break;
                    case 5:
                        ki(t);
                        var l = wi(xi.current);
                        if (u = t.type,
                        null !== o && null != t.stateNode)
                            la(o, t, u, s, l),
                            o.ref !== t.ref && (t.effectTag |= 128);
                        else if (s) {
                            var c = wi(yi.current);
                            if (bo(t)) {
                                o = (s = t).stateNode;
                                var d = s.type
                                  , f = s.memoizedProps
                                  , h = l;
                                switch (o[N] = s,
                                o[R] = f,
                                u = void 0,
                                l = d) {
                                case "iframe":
                                case "object":
                                    kn("load", o);
                                    break;
                                case "video":
                                case "audio":
                                    for (d = 0; d < te.length; d++)
                                        kn(te[d], o);
                                    break;
                                case "source":
                                    kn("error", o);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    kn("error", o),
                                    kn("load", o);
                                    break;
                                case "form":
                                    kn("reset", o),
                                    kn("submit", o);
                                    break;
                                case "details":
                                    kn("toggle", o);
                                    break;
                                case "input":
                                    xt(o, f),
                                    kn("invalid", o),
                                    hr(h, "onChange");
                                    break;
                                case "select":
                                    o._wrapperState = {
                                        wasMultiple: !!f.multiple
                                    },
                                    kn("invalid", o),
                                    hr(h, "onChange");
                                    break;
                                case "textarea":
                                    Kn(o, f),
                                    kn("invalid", o),
                                    hr(h, "onChange")
                                }
                                for (u in dr(l, f),
                                d = null,
                                f)
                                    f.hasOwnProperty(u) && (c = f[u],
                                    "children" === u ? "string" == typeof c ? o.textContent !== c && (d = ["children", c]) : "number" == typeof c && o.textContent !== "" + c && (d = ["children", "" + c]) : b.hasOwnProperty(u) && null != c && hr(h, u));
                                switch (l) {
                                case "input":
                                    je(o),
                                    Et(o, f, !0);
                                    break;
                                case "textarea":
                                    je(o),
                                    Zn(o);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    "function" == typeof f.onClick && (o.onclick = pr)
                                }
                                u = d,
                                s.updateQueue = u,
                                (s = null !== u) && aa(t)
                            } else {
                                f = t,
                                o = u,
                                h = s,
                                d = 9 === l.nodeType ? l : l.ownerDocument,
                                c === Jn.html && (c = er(o)),
                                c === Jn.html ? "script" === o ? ((o = d.createElement("div")).innerHTML = "<script><\/script>",
                                d = o.removeChild(o.firstChild)) : "string" == typeof h.is ? d = d.createElement(o, {
                                    is: h.is
                                }) : (d = d.createElement(o),
                                "select" === o && h.multiple && (d.multiple = !0)) : d = d.createElementNS(c, o),
                                (o = d)[N] = f,
                                o[R] = s,
                                ua(o, t, !1, !1),
                                h = o;
                                var p = l
                                  , m = fr(d = u, f = s);
                                switch (d) {
                                case "iframe":
                                case "object":
                                    kn("load", h),
                                    l = f;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < te.length; l++)
                                        kn(te[l], h);
                                    l = f;
                                    break;
                                case "source":
                                    kn("error", h),
                                    l = f;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    kn("error", h),
                                    kn("load", h),
                                    l = f;
                                    break;
                                case "form":
                                    kn("reset", h),
                                    kn("submit", h),
                                    l = f;
                                    break;
                                case "details":
                                    kn("toggle", h),
                                    l = f;
                                    break;
                                case "input":
                                    xt(h, f),
                                    l = bt(h, f),
                                    kn("invalid", h),
                                    hr(p, "onChange");
                                    break;
                                case "option":
                                    l = $n(h, f);
                                    break;
                                case "select":
                                    h._wrapperState = {
                                        wasMultiple: !!f.multiple
                                    },
                                    l = i({}, f, {
                                        value: void 0
                                    }),
                                    kn("invalid", h),
                                    hr(p, "onChange");
                                    break;
                                case "textarea":
                                    Kn(h, f),
                                    l = Yn(h, f),
                                    kn("invalid", h),
                                    hr(p, "onChange");
                                    break;
                                default:
                                    l = f
                                }
                                dr(d, l),
                                c = void 0;
                                var v = d
                                  , g = h
                                  , y = l;
                                for (c in y)
                                    if (y.hasOwnProperty(c)) {
                                        var x = y[c];
                                        "style" === c ? lr(g, x) : "dangerouslySetInnerHTML" === c ? null != (x = x ? x.__html : void 0) && ir(g, x) : "children" === c ? "string" == typeof x ? ("textarea" !== v || "" !== x) && or(g, x) : "number" == typeof x && or(g, "" + x) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (b.hasOwnProperty(c) ? null != x && hr(p, c) : null != x && gt(g, c, x, m))
                                    }
                                switch (d) {
                                case "input":
                                    je(h),
                                    Et(h, f, !1);
                                    break;
                                case "textarea":
                                    je(h),
                                    Zn(h);
                                    break;
                                case "option":
                                    null != f.value && h.setAttribute("value", "" + yt(f.value));
                                    break;
                                case "select":
                                    (l = h).multiple = !!f.multiple,
                                    null != (h = f.value) ? Qn(l, !!f.multiple, h, !1) : null != f.defaultValue && Qn(l, !!f.multiple, f.defaultValue, !0);
                                    break;
                                default:
                                    "function" == typeof l.onClick && (h.onclick = pr)
                                }
                                (s = gr(u, s)) && aa(t),
                                t.stateNode = o
                            }
                            null !== t.ref && (t.effectTag |= 128)
                        } else
                            null === t.stateNode && a("166");
                        break;
                    case 6:
                        o && null != t.stateNode ? ca(o, t, o.memoizedProps, s) : ("string" != typeof s && (null === t.stateNode && a("166")),
                        o = wi(xi.current),
                        wi(yi.current),
                        bo(t) ? (u = (s = t).stateNode,
                        o = s.memoizedProps,
                        u[N] = s,
                        (s = u.nodeValue !== o) && aa(t)) : (u = t,
                        (s = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(s))[N] = t,
                        u.stateNode = s));
                        break;
                    case 11:
                        break;
                    case 13:
                        if (s = t.memoizedState,
                        0 != (64 & t.effectTag)) {
                            t.expirationTime = u,
                            Da = t;
                            break e
                        }
                        s = null !== s,
                        u = null !== o && null !== o.memoizedState,
                        null !== o && !s && u && (null !== (o = o.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = o,
                        o.nextEffect = l) : (t.firstEffect = t.lastEffect = o,
                        o.nextEffect = null),
                        o.effectTag = 8)),
                        (s || u) && (t.effectTag |= 4);
                        break;
                    case 7:
                    case 8:
                    case 12:
                        break;
                    case 4:
                        Ei(),
                        sa(t);
                        break;
                    case 10:
                        Wo(t);
                        break;
                    case 9:
                    case 14:
                        break;
                    case 17:
                        Rr(t.type) && Or();
                        break;
                    case 18:
                        break;
                    default:
                        a("156")
                    }
                    Da = null
                }
                if (t = e,
                1 === La || 1 !== t.childExpirationTime) {
                    for (s = 0,
                    u = t.child; null !== u; )
                        (o = u.expirationTime) > s && (s = o),
                        (l = u.childExpirationTime) > s && (s = l),
                        u = u.sibling;
                    t.childExpirationTime = s
                }
                if (null !== Da)
                    return Da;
                null !== n && 0 == (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect),
                null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect),
                n.lastEffect = e.lastEffect),
                1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e,
                n.lastEffect = e))
            } else {
                if (null !== (e = Ea(e)))
                    return e.effectTag &= 1023,
                    e;
                null !== n && (n.firstEffect = n.lastEffect = null,
                n.effectTag |= 1024)
            }
            if (null !== r)
                return r;
            if (null === n)
                break;
            e = n
        }
        return null
    }
    function Ga(e) {
        var t = Ro(e.alternate, e, La);
        return e.memoizedProps = e.pendingProps,
        null === t && (t = Ha(e)),
        ka.current = null,
        t
    }
    function $a(e, t) {
        Ca && a("243"),
        Va(),
        Ca = !0;
        var n = Sa.current;
        Sa.current = so;
        var r = e.nextExpirationTimeToWorkOn;
        r === La && e === Pa && null !== Da || (Ua(),
        La = r,
        Da = $r((Pa = e).current, null),
        e.pendingCommitExpirationTime = 0);
        for (var i = !1; ; ) {
            try {
                if (t)
                    for (; null !== Da && !Tu(); )
                        Da = Ga(Da);
                else
                    for (; null !== Da; )
                        Da = Ga(Da)
            } catch (t) {
                if (Fo = zo = Io = null,
                qi(),
                null === Da)
                    i = !0,
                    Mu(t);
                else {
                    null === Da && a("271");
                    var o = Da
                      , u = o.return;
                    if (null !== u) {
                        e: {
                            var s = e
                              , l = u
                              , c = o
                              , d = t;
                            if (u = La,
                            c.effectTag |= 1024,
                            c.firstEffect = c.lastEffect = null,
                            null !== d && "object" == typeof d && "function" == typeof d.then) {
                                var f = d;
                                d = l;
                                var h = -1
                                  , p = -1;
                                do {
                                    if (13 === d.tag) {
                                        var m = d.alternate;
                                        if (null !== m && null !== (m = m.memoizedState)) {
                                            p = 10 * (1073741822 - m.timedOutAt);
                                            break
                                        }
                                        "number" == typeof (m = d.pendingProps.maxDuration) && (0 >= m ? h = 0 : (-1 === h || m < h) && (h = m))
                                    }
                                    d = d.return
                                } while (null !== d);d = l;
                                do {
                                    if ((m = 13 === d.tag) && (m = void 0 !== d.memoizedProps.fallback && null === d.memoizedState),
                                    m) {
                                        if (null === (l = d.updateQueue) ? ((l = new Set).add(f),
                                        d.updateQueue = l) : l.add(f),
                                        0 == (1 & d.mode)) {
                                            d.effectTag |= 64,
                                            c.effectTag &= -1957,
                                            1 === c.tag && (null === c.alternate ? c.tag = 17 : ((u = Ko(1073741823)).tag = Ho,
                                            Zo(c, u))),
                                            c.expirationTime = 1073741823;
                                            break e
                                        }
                                        l = u;
                                        var v = (c = s).pingCache;
                                        null === v ? (v = c.pingCache = new xa,
                                        m = new Set,
                                        v.set(f, m)) : void 0 === (m = v.get(f)) && (m = new Set,
                                        v.set(f, m)),
                                        m.has(l) || (m.add(l),
                                        c = Ka.bind(null, c, f, l),
                                        f.then(c, c)),
                                        -1 === h ? s = 1073741823 : (-1 === p && (p = 10 * (1073741822 - ti(s, u)) - 5e3),
                                        s = p + h),
                                        0 <= s && Aa < s && (Aa = s),
                                        d.effectTag |= 2048,
                                        d.expirationTime = u;
                                        break e
                                    }
                                    d = d.return
                                } while (null !== d);d = Error((ut(c.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + st(c))
                            }
                            Ma = !0,
                            d = oa(d, c),
                            s = l;
                            do {
                                switch (s.tag) {
                                case 3:
                                    s.effectTag |= 2048,
                                    s.expirationTime = u,
                                    Jo(s, u = wa(s, d, u));
                                    break e;
                                case 1:
                                    if (h = d,
                                    p = s.type,
                                    c = s.stateNode,
                                    0 == (64 & s.effectTag) && ("function" == typeof p.getDerivedStateFromError || null !== c && "function" == typeof c.componentDidCatch && (null === Fa || !Fa.has(c)))) {
                                        s.effectTag |= 2048,
                                        s.expirationTime = u,
                                        Jo(s, u = _a(s, h, u));
                                        break e
                                    }
                                }
                                s = s.return
                            } while (null !== s)
                        }
                        Da = Ha(o);
                        continue
                    }
                    i = !0,
                    Mu(t)
                }
            }
            break
        }
        if (Ca = !1,
        Sa.current = n,
        Fo = zo = Io = null,
        qi(),
        i)
            Pa = null,
            e.finishedWork = null;
        else if (null !== Da)
            e.finishedWork = null;
        else {
            if (null === (n = e.current.alternate) && a("281"),
            Pa = null,
            Ma) {
                if (i = e.latestPendingTime,
                o = e.latestSuspendedTime,
                u = e.latestPingedTime,
                0 !== i && i < r || 0 !== o && o < r || 0 !== u && u < r)
                    return ei(e, r),
                    void wu(e, n, r, e.expirationTime, -1);
                if (!e.didError && t)
                    return e.didError = !0,
                    r = e.nextExpirationTimeToWorkOn = r,
                    t = e.expirationTime = 1073741823,
                    void wu(e, n, r, t, -1)
            }
            t && -1 !== Aa ? (ei(e, r),
            (t = 10 * (1073741822 - ti(e, r))) < Aa && (Aa = t),
            t = 10 * (1073741822 - _u()),
            t = Aa - t,
            wu(e, n, r, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime = r,
            e.finishedWork = n)
        }
    }
    function Qa(e, t) {
        for (var n = e.return; null !== n; ) {
            switch (n.tag) {
            case 1:
                var r = n.stateNode;
                if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Fa || !Fa.has(r)))
                    return Zo(n, e = _a(n, e = oa(t, e), 1073741823)),
                    void Za(n, 1073741823);
                break;
            case 3:
                return Zo(n, e = wa(n, e = oa(t, e), 1073741823)),
                void Za(n, 1073741823)
            }
            n = n.return
        }
        3 === e.tag && (Zo(e, n = wa(e, n = oa(t, e), 1073741823)),
        Za(e, 1073741823))
    }
    function Ya(e, t) {
        var n = o.unstable_getCurrentPriorityLevel()
          , r = void 0;
        if (0 == (1 & t.mode))
            r = 1073741823;
        else if (Ca && !Ra)
            r = La;
        else {
            switch (n) {
            case o.unstable_ImmediatePriority:
                r = 1073741823;
                break;
            case o.unstable_UserBlockingPriority:
                r = 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0));
                break;
            case o.unstable_NormalPriority:
                r = 1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0));
                break;
            case o.unstable_LowPriority:
            case o.unstable_IdlePriority:
                r = 1;
                break;
            default:
                a("313")
            }
            null !== Pa && r === La && --r
        }
        return n === o.unstable_UserBlockingPriority && (0 === uu || r < uu) && (uu = r),
        r
    }
    function Ka(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
        null !== Pa && La === n ? Pa = null : (t = e.earliestSuspendedTime,
        r = e.latestSuspendedTime,
        0 !== t && n <= t && n >= r && (e.didError = !1,
        (0 === (t = e.latestPingedTime) || t > n) && (e.latestPingedTime = n),
        ni(n, e),
        0 !== (n = e.expirationTime) && Eu(e, n)))
    }
    function qa(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return
          , i = null;
        if (null === r && 3 === e.tag)
            i = e.stateNode;
        else
            for (; null !== r; ) {
                if (n = r.alternate,
                r.childExpirationTime < t && (r.childExpirationTime = t),
                null !== n && n.childExpirationTime < t && (n.childExpirationTime = t),
                null === r.return && 3 === r.tag) {
                    i = r.stateNode;
                    break
                }
                r = r.return
            }
        return i
    }
    function Za(e, t) {
        null !== (e = qa(e, t)) && (!Ca && 0 !== La && t > La && Ua(),
        Jr(e, t),
        Ca && !Ra && Pa === e || Eu(e, e.expirationTime),
        gu > vu && (gu = 0,
        a("185")))
    }
    function Ja(e, t, n, r, i) {
        return o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
            return e(t, n, r, i)
        })
    }
    var eu = null
      , tu = null
      , nu = 0
      , ru = void 0
      , iu = !1
      , ou = null
      , au = 0
      , uu = 0
      , su = !1
      , lu = null
      , cu = !1
      , du = !1
      , fu = null
      , hu = o.unstable_now()
      , pu = 1073741822 - (hu / 10 | 0)
      , mu = pu
      , vu = 50
      , gu = 0
      , yu = null;
    function bu() {
        pu = 1073741822 - ((o.unstable_now() - hu) / 10 | 0)
    }
    function xu(e, t) {
        if (0 !== nu) {
            if (t < nu)
                return;
            null !== ru && o.unstable_cancelCallback(ru)
        }
        nu = t,
        e = o.unstable_now() - hu,
        ru = o.unstable_scheduleCallback(Cu, {
            timeout: 10 * (1073741822 - t) - e
        })
    }
    function wu(e, t, n, r, i) {
        e.expirationTime = r,
        0 !== i || Tu() ? 0 < i && (e.timeoutHandle = br(function(e, t, n) {
            e.pendingCommitExpirationTime = n,
            e.finishedWork = t,
            bu(),
            mu = pu,
            Pu(e, n)
        }
        .bind(null, e, t, n), i)) : (e.pendingCommitExpirationTime = n,
        e.finishedWork = t)
    }
    function _u() {
        return iu ? mu : (Su(),
        0 !== au && 1 !== au || (bu(),
        mu = pu),
        mu)
    }
    function Eu(e, t) {
        null === e.nextScheduledRoot ? (e.expirationTime = t,
        null === tu ? (eu = tu = e,
        e.nextScheduledRoot = e) : (tu = tu.nextScheduledRoot = e).nextScheduledRoot = eu) : t > e.expirationTime && (e.expirationTime = t),
        iu || (cu ? du && (ou = e,
        au = 1073741823,
        Lu(e, 1073741823, !1)) : 1073741823 === t ? Du(1073741823, !1) : xu(e, t))
    }
    function Su() {
        var e = 0
          , t = null;
        if (null !== tu)
            for (var n = tu, r = eu; null !== r; ) {
                var i = r.expirationTime;
                if (0 === i) {
                    if ((null === n || null === tu) && a("244"),
                    r === r.nextScheduledRoot) {
                        eu = tu = r.nextScheduledRoot = null;
                        break
                    }
                    if (r === eu)
                        eu = i = r.nextScheduledRoot,
                        tu.nextScheduledRoot = i,
                        r.nextScheduledRoot = null;
                    else {
                        if (r === tu) {
                            (tu = n).nextScheduledRoot = eu,
                            r.nextScheduledRoot = null;
                            break
                        }
                        n.nextScheduledRoot = r.nextScheduledRoot,
                        r.nextScheduledRoot = null
                    }
                    r = n.nextScheduledRoot
                } else {
                    if (i > e && (e = i,
                    t = r),
                    r === tu)
                        break;
                    if (1073741823 === e)
                        break;
                    n = r,
                    r = r.nextScheduledRoot
                }
            }
        ou = t,
        au = e
    }
    var ku = !1;
    function Tu() {
        return !!ku || !!o.unstable_shouldYield() && (ku = !0)
    }
    function Cu() {
        try {
            if (!Tu() && null !== eu) {
                bu();
                var e = eu;
                do {
                    var t = e.expirationTime;
                    0 !== t && pu <= t && (e.nextExpirationTimeToWorkOn = pu),
                    e = e.nextScheduledRoot
                } while (e !== eu)
            }
            Du(0, !0)
        } finally {
            ku = !1
        }
    }
    function Du(e, t) {
        if (Su(),
        t)
            for (bu(),
            mu = pu; null !== ou && 0 !== au && e <= au && !(ku && pu > au); )
                Lu(ou, au, pu > au),
                Su(),
                bu(),
                mu = pu;
        else
            for (; null !== ou && 0 !== au && e <= au; )
                Lu(ou, au, !1),
                Su();
        if (t && (nu = 0,
        ru = null),
        0 !== au && xu(ou, au),
        gu = 0,
        yu = null,
        null !== fu)
            for (e = fu,
            fu = null,
            t = 0; t < e.length; t++) {
                var n = e[t];
                try {
                    n._onComplete()
                } catch (e) {
                    su || (su = !0,
                    lu = e)
                }
            }
        if (su)
            throw e = lu,
            lu = null,
            su = !1,
            e
    }
    function Pu(e, t) {
        iu && a("253"),
        ou = e,
        au = t,
        Lu(e, t, !1),
        Du(1073741823, !1)
    }
    function Lu(e, t, n) {
        if (iu && a("245"),
        iu = !0,
        n) {
            var r = e.finishedWork;
            null !== r ? Au(e, r, t) : (e.finishedWork = null,
            -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1,
            xr(r)),
            $a(e, n),
            null !== (r = e.finishedWork) && (Tu() ? e.finishedWork = r : Au(e, r, t)))
        } else
            null !== (r = e.finishedWork) ? Au(e, r, t) : (e.finishedWork = null,
            -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1,
            xr(r)),
            $a(e, n),
            null !== (r = e.finishedWork) && Au(e, r, t));
        iu = !1
    }
    function Au(e, t, n) {
        var r = e.firstBatch;
        if (null !== r && r._expirationTime >= n && (null === fu ? fu = [r] : fu.push(r),
        r._defer))
            return e.finishedWork = t,
            void (e.expirationTime = 0);
        e.finishedWork = null,
        e === yu ? gu++ : (yu = e,
        gu = 0),
        o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
            Xa(e, t)
        })
    }
    function Mu(e) {
        null === ou && a("246"),
        ou.expirationTime = 0,
        su || (su = !0,
        lu = e)
    }
    function Nu(e, t) {
        var n = cu;
        cu = !0;
        try {
            return e(t)
        } finally {
            (cu = n) || iu || Du(1073741823, !1)
        }
    }
    function Ru(e, t) {
        if (cu && !du) {
            du = !0;
            try {
                return e(t)
            } finally {
                du = !1
            }
        }
        return e(t)
    }
    function Ou(e, t, n) {
        cu || iu || 0 === uu || (Du(uu, !1),
        uu = 0);
        var r = cu;
        cu = !0;
        try {
            return o.unstable_runWithPriority(o.unstable_UserBlockingPriority, function() {
                return e(t, n)
            })
        } finally {
            (cu = r) || iu || Du(1073741823, !1)
        }
    }
    function Iu(e, t, n, r, i) {
        var o = t.current;
        e: if (n) {
            t: {
                2 === tn(n = n._reactInternalFiber) && 1 === n.tag || a("170");
                var u = n;
                do {
                    switch (u.tag) {
                    case 3:
                        u = u.stateNode.context;
                        break t;
                    case 1:
                        if (Rr(u.type)) {
                            u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                            break t
                        }
                    }
                    u = u.return
                } while (null !== u);a("171"),
                u = void 0
            }
            if (1 === n.tag) {
                var s = n.type;
                if (Rr(s)) {
                    n = Fr(n, s, u);
                    break e
                }
            }
            n = u
        } else
            n = Pr;
        return null === t.context ? t.context = n : t.pendingContext = n,
        t = i,
        (i = Ko(r)).payload = {
            element: e
        },
        null !== (t = void 0 === t ? null : t) && (i.callback = t),
        Va(),
        Zo(o, i),
        Za(o, r),
        r
    }
    function zu(e, t, n, r) {
        var i = t.current;
        return Iu(e, t, n, i = Ya(_u(), i), r)
    }
    function Fu(e) {
        if (!(e = e.current).child)
            return null;
        switch (e.child.tag) {
        case 5:
        default:
            return e.child.stateNode
        }
    }
    function Uu(e) {
        var t = 1073741822 - 25 * (1 + ((1073741822 - _u() + 500) / 25 | 0));
        t >= Ta && (t = Ta - 1),
        this._expirationTime = Ta = t,
        this._root = e,
        this._callbacks = this._next = null,
        this._hasChildren = this._didComplete = !1,
        this._children = null,
        this._defer = !0
    }
    function Wu() {
        this._callbacks = null,
        this._didCommit = !1,
        this._onCommit = this._onCommit.bind(this)
    }
    function Bu(e, t, n) {
        e = {
            current: t = Hr(3, null, null, t ? 3 : 0),
            containerInfo: e,
            pendingChildren: null,
            pingCache: null,
            earliestPendingTime: 0,
            latestPendingTime: 0,
            earliestSuspendedTime: 0,
            latestSuspendedTime: 0,
            latestPingedTime: 0,
            didError: !1,
            pendingCommitExpirationTime: 0,
            finishedWork: null,
            timeoutHandle: -1,
            context: null,
            pendingContext: null,
            hydrate: n,
            nextExpirationTimeToWorkOn: 0,
            expirationTime: 0,
            firstBatch: null,
            nextScheduledRoot: null
        },
        this._internalRoot = t.stateNode = e
    }
    function ju(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }
    function Vu(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            if ("function" == typeof i) {
                var a = i;
                i = function() {
                    var e = Fu(o._internalRoot);
                    a.call(e)
                }
            }
            null != e ? o.legacy_renderSubtreeIntoContainer(e, t, i) : o.render(t, i)
        } else {
            if (o = n._reactRootContainer = function(e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                !t)
                    for (var n; n = e.lastChild; )
                        e.removeChild(n);
                return new Bu(e,!1,t)
            }(n, r),
            "function" == typeof i) {
                var u = i;
                i = function() {
                    var e = Fu(o._internalRoot);
                    u.call(e)
                }
            }
            Ru(function() {
                null != e ? o.legacy_renderSubtreeIntoContainer(e, t, i) : o.render(t, i)
            })
        }
        return Fu(o._internalRoot)
    }
    function Xu(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return ju(t) || a("200"),
        function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: Qe,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }(e, t, null, n)
    }
    Te = function(e, t, n) {
        switch (t) {
        case "input":
            if (_t(e, n),
            t = n.name,
            "radio" === n.type && null != t) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = F(r);
                        i || a("90"),
                        Ve(r),
                        _t(r, i)
                    }
                }
            }
            break;
        case "textarea":
            qn(e, n);
            break;
        case "select":
            null != (t = n.value) && Qn(e, !!n.multiple, t, !1)
        }
    }
    ,
    Uu.prototype.render = function(e) {
        this._defer || a("250"),
        this._hasChildren = !0,
        this._children = e;
        var t = this._root._internalRoot
          , n = this._expirationTime
          , r = new Wu;
        return Iu(e, t, null, n, r._onCommit),
        r
    }
    ,
    Uu.prototype.then = function(e) {
        if (this._didComplete)
            e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []),
            t.push(e)
        }
    }
    ,
    Uu.prototype.commit = function() {
        var e = this._root._internalRoot
          , t = e.firstBatch;
        if (this._defer && null !== t || a("251"),
        this._hasChildren) {
            var n = this._expirationTime;
            if (t !== this) {
                this._hasChildren && (n = this._expirationTime = t._expirationTime,
                this.render(this._children));
                for (var r = null, i = t; i !== this; )
                    r = i,
                    i = i._next;
                null === r && a("251"),
                r._next = i._next,
                this._next = t,
                e.firstBatch = this
            }
            this._defer = !1,
            Pu(e, n),
            t = this._next,
            this._next = null,
            null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
        } else
            this._next = null,
            this._defer = !1
    }
    ,
    Uu.prototype._onComplete = function() {
        if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++)
                    (0,
                    e[t])()
        }
    }
    ,
    Wu.prototype.then = function(e) {
        if (this._didCommit)
            e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []),
            t.push(e)
        }
    }
    ,
    Wu.prototype._onCommit = function() {
        if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    "function" != typeof n && a("191", n),
                    n()
                }
        }
    }
    ,
    Bu.prototype.render = function(e, t) {
        var n = this._internalRoot
          , r = new Wu;
        return null !== (t = void 0 === t ? null : t) && r.then(t),
        zu(e, n, null, r._onCommit),
        r
    }
    ,
    Bu.prototype.unmount = function(e) {
        var t = this._internalRoot
          , n = new Wu;
        return null !== (e = void 0 === e ? null : e) && n.then(e),
        zu(null, t, null, n._onCommit),
        n
    }
    ,
    Bu.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) {
        var r = this._internalRoot
          , i = new Wu;
        return null !== (n = void 0 === n ? null : n) && i.then(n),
        zu(t, r, e, i._onCommit),
        i
    }
    ,
    Bu.prototype.createBatch = function() {
        var e = new Uu(this)
          , t = e._expirationTime
          , n = this._internalRoot
          , r = n.firstBatch;
        if (null === r)
            n.firstBatch = e,
            e._next = null;
        else {
            for (n = null; null !== r && r._expirationTime >= t; )
                n = r,
                r = r._next;
            e._next = r,
            null !== n && (n._next = e)
        }
        return e
    }
    ,
    Me = Nu,
    Ne = Ou,
    Re = function() {
        iu || 0 === uu || (Du(uu, !1),
        uu = 0)
    }
    ;
    var Hu = {
        createPortal: Xu,
        findDOMNode: function(e) {
            if (null == e)
                return null;
            if (1 === e.nodeType)
                return e;
            var t = e._reactInternalFiber;
            return void 0 === t && ("function" == typeof e.render ? a("188") : a("268", Object.keys(e))),
            e = null === (e = rn(t)) ? null : e.stateNode
        },
        hydrate: function(e, t, n) {
            return ju(t) || a("200"),
            Vu(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            return ju(t) || a("200"),
            Vu(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
            return ju(n) || a("200"),
            (null == e || void 0 === e._reactInternalFiber) && a("38"),
            Vu(e, t, n, !1, r)
        },
        unmountComponentAtNode: function(e) {
            return ju(e) || a("40"),
            !!e._reactRootContainer && (Ru(function() {
                Vu(null, null, e, !1, function() {
                    e._reactRootContainer = null
                })
            }),
            !0)
        },
        unstable_createPortal: function() {
            return Xu.apply(void 0, arguments)
        },
        unstable_batchedUpdates: Nu,
        unstable_interactiveUpdates: Ou,
        flushSync: function(e, t) {
            iu && a("187");
            var n = cu;
            cu = !0;
            try {
                return Ja(e, t)
            } finally {
                cu = n,
                Du(1073741823, !1)
            }
        },
        unstable_createRoot: function(e, t) {
            return ju(e) || a("299", "unstable_createRoot"),
            new Bu(e,!0,null != t && !0 === t.hydrate)
        },
        unstable_flushControlled: function(e) {
            var t = cu;
            cu = !0;
            try {
                Ja(e)
            } finally {
                (cu = t) || iu || Du(1073741823, !1)
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [I, z, F, P.injectEventPluginsByName, y, X, function(e) {
                T(e, V)
            }
            , Le, Ae, Dn, A]
        }
    };
    !function(e) {
        var t = e.findFiberByHostInstance;
        (function(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
                return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber)
                return !0;
            try {
                var n = t.inject(e);
                Br = Vr(function(e) {
                    return t.onCommitFiberRoot(n, e)
                }),
                jr = Vr(function(e) {
                    return t.onCommitFiberUnmount(n, e)
                })
            } catch (e) {}
        }
        )(i({}, e, {
            overrideProps: null,
            currentDispatcherRef: Xe.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = rn(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return t ? t(e) : null
            }
        }))
    }({
        findFiberByHostInstance: O,
        bundleType: 0,
        version: "16.8.2",
        rendererPackageName: "react-dom"
    });
    var Gu = {
        default: Hu
    }
      , $u = Gu && Hu || Gu;
    e.exports = $u.default || $u
}
, function(e, t, n) {
    "use strict";
    e.exports = n(9)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        /** @license React v0.13.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = null
          , r = !1
          , i = 3
          , o = -1
          , a = -1
          , u = !1
          , s = !1;
        function l() {
            if (!u) {
                var e = n.expirationTime;
                s ? E() : s = !0,
                _(f, e)
            }
        }
        function c() {
            var e = n
              , t = n.next;
            if (n === t)
                n = null;
            else {
                var r = n.previous;
                n = r.next = t,
                t.previous = r
            }
            e.next = e.previous = null,
            r = e.callback,
            t = e.expirationTime,
            e = e.priorityLevel;
            var o = i
              , u = a;
            i = e,
            a = t;
            try {
                var s = r()
            } finally {
                i = o,
                a = u
            }
            if ("function" == typeof s)
                if (s = {
                    callback: s,
                    priorityLevel: e,
                    expirationTime: t,
                    next: null,
                    previous: null
                },
                null === n)
                    n = s.next = s.previous = s;
                else {
                    r = null,
                    e = n;
                    do {
                        if (e.expirationTime >= t) {
                            r = e;
                            break
                        }
                        e = e.next
                    } while (e !== n);null === r ? r = n : r === n && (n = s,
                    l()),
                    (t = r.previous).next = r.previous = s,
                    s.next = r,
                    s.previous = t
                }
        }
        function d() {
            if (-1 === o && null !== n && 1 === n.priorityLevel) {
                u = !0;
                try {
                    do {
                        c()
                    } while (null !== n && 1 === n.priorityLevel)
                } finally {
                    u = !1,
                    null !== n ? l() : s = !1
                }
            }
        }
        function f(e) {
            u = !0;
            var i = r;
            r = e;
            try {
                if (e)
                    for (; null !== n; ) {
                        var o = t.unstable_now();
                        if (!(n.expirationTime <= o))
                            break;
                        do {
                            c()
                        } while (null !== n && n.expirationTime <= o)
                    }
                else if (null !== n)
                    do {
                        c()
                    } while (null !== n && !S())
            } finally {
                u = !1,
                r = i,
                null !== n ? l() : s = !1,
                d()
            }
        }
        var h, p, m = Date, v = "function" == typeof setTimeout ? setTimeout : void 0, g = "function" == typeof clearTimeout ? clearTimeout : void 0, y = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0, b = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;
        function x(e) {
            h = y(function(t) {
                g(p),
                e(t)
            }),
            p = v(function() {
                b(h),
                e(t.unstable_now())
            }, 100)
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var w = performance;
            t.unstable_now = function() {
                return w.now()
            }
        } else
            t.unstable_now = function() {
                return m.now()
            }
            ;
        var _, E, S, k = null;
        if ("undefined" != typeof window ? k = window : void 0 !== e && (k = e),
        k && k._schedMock) {
            var T = k._schedMock;
            _ = T[0],
            E = T[1],
            S = T[2],
            t.unstable_now = T[3]
        } else if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var C = null
              , D = function(e) {
                if (null !== C)
                    try {
                        C(e)
                    } finally {
                        C = null
                    }
            };
            _ = function(e) {
                null !== C ? setTimeout(_, 0, e) : (C = e,
                setTimeout(D, 0, !1))
            }
            ,
            E = function() {
                C = null
            }
            ,
            S = function() {
                return !1
            }
        } else {
            "undefined" != typeof console && ("function" != typeof y && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
            "function" != typeof b && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
            var P = null
              , L = !1
              , A = -1
              , M = !1
              , N = !1
              , R = 0
              , O = 33
              , I = 33;
            S = function() {
                return R <= t.unstable_now()
            }
            ;
            var z = new MessageChannel
              , F = z.port2;
            z.port1.onmessage = function() {
                L = !1;
                var e = P
                  , n = A;
                P = null,
                A = -1;
                var r = t.unstable_now()
                  , i = !1;
                if (0 >= R - r) {
                    if (!(-1 !== n && n <= r))
                        return M || (M = !0,
                        x(U)),
                        P = e,
                        void (A = n);
                    i = !0
                }
                if (null !== e) {
                    N = !0;
                    try {
                        e(i)
                    } finally {
                        N = !1
                    }
                }
            }
            ;
            var U = function(e) {
                if (null !== P) {
                    x(U);
                    var t = e - R + I;
                    t < I && O < I ? (8 > t && (t = 8),
                    I = t < O ? O : t) : O = t,
                    R = e + I,
                    L || (L = !0,
                    F.postMessage(void 0))
                } else
                    M = !1
            };
            _ = function(e, t) {
                P = e,
                A = t,
                N || 0 > t ? F.postMessage(void 0) : M || (M = !0,
                x(U))
            }
            ,
            E = function() {
                P = null,
                L = !1,
                A = -1
            }
        }
        t.unstable_ImmediatePriority = 1,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_NormalPriority = 3,
        t.unstable_IdlePriority = 5,
        t.unstable_LowPriority = 4,
        t.unstable_runWithPriority = function(e, n) {
            switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
            }
            var r = i
              , a = o;
            i = e,
            o = t.unstable_now();
            try {
                return n()
            } finally {
                i = r,
                o = a,
                d()
            }
        }
        ,
        t.unstable_next = function(e) {
            switch (i) {
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = i
            }
            var r = i
              , a = o;
            i = n,
            o = t.unstable_now();
            try {
                return e()
            } finally {
                i = r,
                o = a,
                d()
            }
        }
        ,
        t.unstable_scheduleCallback = function(e, r) {
            var a = -1 !== o ? o : t.unstable_now();
            if ("object" == typeof r && null !== r && "number" == typeof r.timeout)
                r = a + r.timeout;
            else
                switch (i) {
                case 1:
                    r = a + -1;
                    break;
                case 2:
                    r = a + 250;
                    break;
                case 5:
                    r = a + 1073741823;
                    break;
                case 4:
                    r = a + 1e4;
                    break;
                default:
                    r = a + 5e3
                }
            if (e = {
                callback: e,
                priorityLevel: i,
                expirationTime: r,
                next: null,
                previous: null
            },
            null === n)
                n = e.next = e.previous = e,
                l();
            else {
                a = null;
                var u = n;
                do {
                    if (u.expirationTime > r) {
                        a = u;
                        break
                    }
                    u = u.next
                } while (u !== n);null === a ? a = n : a === n && (n = e,
                l()),
                (r = a.previous).next = a.previous = e,
                e.next = a,
                e.previous = r
            }
            return e
        }
        ,
        t.unstable_cancelCallback = function(e) {
            var t = e.next;
            if (null !== t) {
                if (t === e)
                    n = null;
                else {
                    e === n && (n = t);
                    var r = e.previous;
                    r.next = t,
                    t.previous = r
                }
                e.next = e.previous = null
            }
        }
        ,
        t.unstable_wrapCallback = function(e) {
            var n = i;
            return function() {
                var r = i
                  , a = o;
                i = n,
                o = t.unstable_now();
                try {
                    return e.apply(this, arguments)
                } finally {
                    i = r,
                    o = a,
                    d()
                }
            }
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return i
        }
        ,
        t.unstable_shouldYield = function() {
            return !r && (null !== n && n.expirationTime < a || S())
        }
        ,
        t.unstable_continueExecution = function() {
            null !== n && l()
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_getFirstCallbackNode = function() {
            return n
        }
    }
    ).call(this, n(3))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t) {
    e.exports = "precision mediump float;\r\n\r\nattribute vec2 inPos;\r\nattribute vec4 inColor;\r\nattribute vec2 inUV;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vUV;\r\n\r\nuniform vec2 virtualSize;\r\n\r\nvoid main() {\r\n  vec2 scale = vec2(2.0 / virtualSize.x, -2.0 / virtualSize.y);\r\n  vec2 pos = inPos * scale + vec2(-1, 1);\r\n\r\n  vColor = inColor;\r\n  vUV = inUV;\r\n\r\n  gl_Position = vec4(pos, 0.0, 1.0);\r\n}\r\n"
}
, function(e, t) {
    e.exports = "precision mediump float;\r\n\r\nuniform sampler2D texture;\r\nvarying vec4 vColor;\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n  vec4 tex = texture2D(texture, vUV);\r\n  gl_FragColor = vColor * tex;\r\n\r\n  // gl_FragColor = texture2D(texture, vUV);\r\n}"
}
, function(e, t, n) {
    "use strict";
    e.exports = (e=>encodeURIComponent(e).replace(/[!'()*]/g, e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))
}
, function(e, t, n) {
    "use strict";
    var r = new RegExp("%[a-f0-9]{2}","gi")
      , i = new RegExp("(%[a-f0-9]{2})+","gi");
    function o(e, t) {
        try {
            return decodeURIComponent(e.join(""))
        } catch (e) {}
        if (1 === e.length)
            return e;
        t = t || 1;
        var n = e.slice(0, t)
          , r = e.slice(t);
        return Array.prototype.concat.call([], o(n), o(r))
    }
    function a(e) {
        try {
            return decodeURIComponent(e)
        } catch (i) {
            for (var t = e.match(r), n = 1; n < t.length; n++)
                t = (e = o(t, n).join("")).match(r);
            return e
        }
    }
    e.exports = function(e) {
        if ("string" != typeof e)
            throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        try {
            return e = e.replace(/\+/g, " "),
            decodeURIComponent(e)
        } catch (t) {
            return function(e) {
                for (var t = {
                    "%FE%FF": "??",
                    "%FF%FE": "??"
                }, n = i.exec(e); n; ) {
                    try {
                        t[n[0]] = decodeURIComponent(n[0])
                    } catch (e) {
                        var r = a(n[0]);
                        r !== n[0] && (t[n[0]] = r)
                    }
                    n = i.exec(e)
                }
                t["%C2"] = "?";
                for (var o = Object.keys(t), u = 0; u < o.length; u++) {
                    var s = o[u];
                    e = e.replace(new RegExp(s,"g"), t[s])
                }
                return e
            }(e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i = n(0), o = n(1);
    !function(e) {
        e[e.String = 0] = "String",
        e[e.Count = 1] = "Count",
        e[e.Int = 2] = "Int",
        e[e.Float = 3] = "Float",
        e[e.Struct = 4] = "Struct",
        e[e.Event = 5] = "Event"
    }(r || (r = {}));
    const a = {
        str: (e,t)=>({
            type: r.String,
            key: e,
            val: t
        }),
        int: (e,t)=>({
            type: r.Int,
            key: e,
            val: t
        }),
        count: (e,t)=>({
            type: r.Count,
            key: e,
            val: t
        }),
        float: (e,t)=>({
            type: r.Float,
            key: e,
            val: t
        }),
        struct: (e,t)=>({
            type: r.Struct,
            key: e,
            val: t
        }),
        event: (e,t)=>({
            type: r.Event,
            key: e,
            val: t
        })
    };
    class u {
        constructor() {
            this.propertyListeners = new Set,
            this.logListeners = new Set,
            this.props = [],
            this.propKeys = new Map,
            this.logs = [],
            this.SHOW_LOG = !1,
            this.SHOW_PROP = !1
        }
        updateString(e, t) {
            this.update(r.String, e, t)
        }
        updateInt(e, t) {
            this.update(r.Int, e, t)
        }
        updateCount(e, t) {
            this.update(r.Count, e, t)
        }
        updateFloat(e, t) {
            this.update(r.Float, e, t)
        }
        updateStruct(e, t) {
            this.update(r.Struct, e, t)
        }
        update(e, t, n) {
            const r = this.propKeys
              , i = this.props;
            if (r.has(t)) {
                i[r.get(t)].val = n
            } else {
                const r = {
                    type: e,
                    key: t,
                    val: n
                };
                this.props.push(r),
                this.propKeys.set(t, this.props.length - 1)
            }
        }
        notifyProperty() {
            const e = this.props;
            if (this.SHOW_PROP)
                for (const t of this.propertyListeners)
                    t(e)
        }
        log(e) {
            if (this.logs.push({
                text: e
            }),
            this.logs.length >= 30 && this.logs.shift(),
            !this.SHOW_LOG)
                return;
            const t = this.logs.map(e=>({
                text: e.text.toString()
            }));
            for (const e of this.logListeners)
                e(t)
        }
        performanceLog(e, t) {
            const n = performance || Date
              , r = n.now();
            t();
            const i = n.now() - r;
            this.log(`${e} : ${i}ms`)
        }
        toggleShowProperty() {
            this.showProperty = !this.showProperty
        }
        toggleShowLog() {
            this.showLog = !this.showLog
        }
        set showProperty(e) {
            if (this.SHOW_PROP !== e)
                if (this.SHOW_PROP = e,
                e)
                    this.notifyProperty();
                else
                    for (const e of this.propertyListeners)
                        e(null)
        }
        get showProperty() {
            return this.SHOW_PROP
        }
        set showLog(e) {
            if (this.SHOW_LOG !== e) {
                this.SHOW_LOG = e;
                for (const t of this.logListeners)
                    t(e ? this.logs : null)
            }
        }
        get showLog() {
            return this.SHOW_LOG
        }
        observeProperty(e) {
            this.propertyListeners.add(e)
        }
        unobserveProperty(e) {
            this.propertyListeners.delete(e)
        }
        observeLog(e) {
            this.logListeners.add(e)
        }
        unobserveLog(e) {
            this.logListeners.delete(e)
        }
    }
    function s() {
        return !navigator.userAgent.match(/iPhone|iPad|Android/)
    }
    var l = n(4);
    function c(e) {
        const t = i.createElement("img", {
            className: "jump",
            src: "./manual/bit.png"
        })
          , n = i.createElement("img", {
            className: "rotate",
            src: "./manual/gyoku.png"
        })
          , r = i.createElement("img", {
            className: "ios-icon",
            src: "./manual/ios.png"
        });
        return i.createElement("div", {
            className: "manual-container"
        }, i.createElement("div", {
            className: "body"
        }, i.createElement("h2", null, t, "　これは？　", t), i.createElement("img", {
            className: "image",
            src: "./manual/v99ss.jpg"
        }), i.createElement("br", null), "?最大99体のメード（など）と対戦するSTG", i.createElement("br", null), "（※スマートフォンでは他プレイヤーの表示ができません）", i.createElement("br", null), i.createElement("br", null), "?CPU戦のみで対人対戦はありません", i.createElement("br", null), "?プレイ環境によってはすごく重いので、つよつよPCでのプレイを推奨", i.createElement("br", null), i.createElement("h2", null, t, "　ルール　", t), "?他のすべてのプレイヤーのライフを0にすると勝ち", i.createElement("br", null), "?自分のライフが0になると負け", i.createElement("br", null), i.createElement("br", null), "?敵弾にカスると他プレイヤーを青弾で攻撃", i.createElement("br", null), "?連続してカスるとコンボが増える", i.createElement("br", null), "?コンボが切れたタイミングで青玉攻撃レベル上昇", i.createElement("br", null), "?被弾でコンボがリセット（レベルは上昇しない）", i.createElement("br", null), i.createElement("br", null), "?敵に触ってもペナルティなし", i.createElement("br", null), i.createElement("h2", null, t, "　操作　", t), i.createElement("h3", null, n, " マウス?タッチパネル（推奨）"), i.createElement("div", {
            className: "border"
        }, "?ドラッグ?フリックで移動＋ショット", i.createElement("br", null), "?iPhone, iPad では ", r, " ボタンから「ホーム画面に追加」してプレイすると快適にプレイできます"), i.createElement("h3", null, n, " キーボード"), i.createElement("div", {
            className: "border"
        }, "変更はできません", i.createElement("hr", null), "?カーソルキーで移動", i.createElement("br", null), "?Ｚでショット", i.createElement("br", null), "?ＳＨＩＦＴで低速移動"), i.createElement("h3", null, n, " ゲームパッド"), i.createElement("div", {
            className: "border"
        }, "使えないパッドがあるかもしれません", i.createElement("hr", null), i.createElement("img", {
            src: "./manual/gamepad.svg"
        })), i.createElement("h2", null, t, "　そのた　", t), "?画面横幅が足りないと99人表示できません", i.createElement("br", null), "?残念ながら人同士の対戦は間に合わず", i.createElement("br", null), "?なにかすると、 ", n, "ひらのん", n, " も使える", i.createElement("br", null)))
    }
    function d(e) {
        const t = e.active ? "active" : ""
          , n = e.active ? "? " : "";
        return i.createElement("button", {
            className: t,
            onClick: e.onClick
        }, i.createElement("span", {
            style: {
                position: "absolute",
                left: "7px",
                height: "17px"
            }
        }, n), i.createElement("span", null, e.label))
    }
    function f(e) {
        const t = Object(l.chunk)(e.labels, 3).map((t,n)=>{
            const r = t.map((t,r)=>{
                const o = 3 * n + r;
                return i.createElement(d, {
                    key: n + "-" + r,
                    active: o === e.activeIndex,
                    label: t,
                    onClick: ()=>e.select(o)
                })
            }
            )
              , o = "group col" + t.length;
            return i.createElement("div", {
                key: n,
                className: o
            }, r)
        }
        );
        return i.createElement("div", {
            className: "group-container"
        }, t)
    }
    function h(e) {
        let t = 0
          , n = 0;
        isNaN(e.conf.player) || (t = 9,
        1 === e.conf.player && (n = 1));
        let r = 0;
        switch (e.conf.fps) {
        case 60:
            r = 1;
            break;
        case 30:
            r = 2
        }
        const o = ["9", "19", "33", "51", "73", "99"]
          , [a,u] = i.useState(e.conf.mute ? 1 : 0)
          , [l,d] = i.useState(s() ? e.conf.renderMode : e.conf.renderMode - 1)
          , [h,p] = i.useState(r)
          , [m,v] = i.useState(n)
          , [g,y] = i.useState(t)
          , [b,x] = i.useState(e.conf.count - 2)
          , [w,_] = i.useState(e.conf.isFirstTime())
          , E = ()=>{
            _(!w)
        }
        ;
        let S = null;
        S = w ? i.createElement(i.Fragment, null, i.createElement("div", {
            className: "toggle-button",
            onClick: E
        }, "▼ とじる ▼"), i.createElement(c, null), i.createElement("div", {
            className: "toggle-button",
            onClick: E
        }, "▲ とじる ▲")) : i.createElement("div", {
            className: "toggle-button",
            onClick: E
        }, "あそびかた");
        let k = {
            opacity: .08
        }
          , T = "V I V I T - " + o[b]
          , C = "./icon/v99.png";
        g >= 9 && (k = {},
        1 === m && (T = "H I R A N O N - " + o[b],
        C = "./icon/h99.png")),
        document.title = T;
        let D = null;
        if (s()) {
            const t = ["つよい", "シンプル", "なし"]
              , n = t=>{
                e.conf.renderMode = t,
                d(e.conf.renderMode)
            }
            ;
            D = i.createElement(i.Fragment, null, i.createElement("h2", null, "? 他プレイヤーの表示（つよつよPC以外では「シンプル」を選択してね）"), i.createElement(f, {
                activeIndex: l,
                labels: t,
                select: n
            }))
        }
        return i.createElement("div", {
            className: "config"
        }, i.createElement("h1", null, i.createElement("img", {
            src: C,
            width: "32px",
            height: "32px",
            style: {
                marginLeft: "10px",
                marginRight: "10px",
                borderRadius: "8px"
            }
        }), i.createElement("span", {
            style: {
                marginTop: "6px"
            }
        }, T)), S, i.createElement("h2", null, "?? 音声"), i.createElement(f, {
            activeIndex: a,
            labels: ["あり", "なし"],
            select: t=>{
                e.conf.mute = 1 === t,
                u(t)
            }
        }), D, i.createElement("h2", null, "? 描画間隔"), i.createElement(f, {
            activeIndex: h,
            labels: ["自動", "60FPS", "30FPS"],
            select: t=>{
                switch (t) {
                case 0:
                    e.conf.fps = 0;
                    break;
                case 1:
                    e.conf.fps = 60;
                    break;
                case 2:
                    e.conf.fps = 30
                }
                p(t)
            }
        }), i.createElement("h2", null, "人数（増やすと重くなるよ）"), i.createElement(f, {
            activeIndex: b,
            labels: o,
            select: t=>{
                e.conf.count = t + 2,
                x(t)
            }
        }), i.createElement("div", {
            style: k
        }, i.createElement("h2", null, "?? ひらのん"), i.createElement(f, {
            activeIndex: m,
            labels: ["ＯＦＦ", "ＯＮ"],
            select: t=>{
                y(g + 1),
                g >= 9 && (v(t),
                e.conf.player = t)
            }
        })))
    }
    function p(e) {
        if (e.hide)
            return null;
        let t = null;
        if (e.progress >= 100)
            t = i.createElement("div", {
                onClick: e.onClick,
                className: "start-button"
            }, "はじめる");
        else {
            const n = {
                width: e.progress.toFixed(0) + "%"
            };
            t = i.createElement("div", {
                className: "progress-bar"
            }, i.createElement("div", {
                className: "progress-graph",
                style: n
            }), i.createElement("div", {
                className: "progress-text"
            }, "データを読み込んでいるのです"))
        }
        return i.createElement("div", {
            className: "title-container"
        }, i.createElement(h, {
            conf: e.conf
        }), t, i.createElement("div", {
            className: "copyright"
        }, i.createElement("a", {
            className: "link",
            target: "new",
            href: "https://web.archive.org/web/20190331193806/https://ss-do.sakura.ne.jp/"
        }, "? 2019 瞬殺サレ道？")))
    }
    class m {
        constructor() {
            this.reset()
        }
        reset() {
            this.shot = !1,
            this.slow = !1,
            this.bomb = !1,
            this.dx = 0,
            this.dy = 0,
            this.sx = 0,
            this.sy = 0
        }
        copyFrom(e) {
            this.shot = e.shot,
            this.slow = e.slow,
            this.bomb = e.bomb,
            this.dx = e.dx,
            this.dy = e.dy,
            this.sx = e.sx,
            this.sy = e.sy
        }
    }
    class v {
        constructor(e) {
            this.keys = [],
            this.last = new m,
            this.keydown = (e=>(this.keys[e.keyCode] = !0,
            !1)),
            this.keyup = (t=>(32 === t.keyCode && e.togglePause(),
            82 === t.keyCode && e.reload(),
            this.keys[t.keyCode] = !1,
            !1))
        }
        register() {
            window.addEventListener("keydown", this.keydown),
            window.addEventListener("keyup", this.keyup)
        }
        unregister() {
            window.removeEventListener("keydown", this.keydown),
            window.removeEventListener("keyup", this.keyup)
        }
        poll() {
            const e = this.keys;
            let t = 0
              , n = 0
              , r = !1
              , i = !1
              , o = !1;
            if (r = !!e[90],
            o = !!e[88],
            i = !!e[16],
            t = (e[37] ? -1 : 0) + (e[39] ? 1 : 0),
            n = (e[38] ? -1 : 0) + (e[40] ? 1 : 0),
            0 !== t && 0 !== n) {
                const e = 1 / Math.sqrt(2);
                t *= e,
                n *= e
            }
            this.last.shot = r,
            this.last.bomb = o,
            this.last.slow = i,
            this.last.dx = t,
            this.last.dy = n
        }
        get() {
            return this.last
        }
    }
    class g {
        constructor() {
            this.gamepads = new Map,
            this.connected = (e=>{
                console.log("pad: connect");
                const t = new y(e.gamepad);
                return this.gamepads.set(e.gamepad.index, t),
                !1
            }
            ),
            this.disconnected = (e=>(console.log("pad: disconnect"),
            this.gamepads.delete(e.gamepad.index),
            !1))
        }
        register() {
            window.addEventListener("gamepadconnected", this.connected)
        }
        unregister() {
            window.addEventListener("gamepaddisconnected", this.disconnected)
        }
        poll() {
            this.gamepads.forEach((e,t)=>{
                e.poll()
            }
            )
        }
        get(e) {
            if (this.gamepads.has(e)) {
                return this.gamepads.get(e).get()
            }
            return null
        }
        count() {
            return this.gamepads.size
        }
        inspect() {
            this.gamepads.forEach((e,t)=>e.inspect()),
            0 === this.gamepads.size && console.log("gamepad not found.")
        }
    }
    class y {
        constructor(e) {
            this.pad = e,
            this.last = new m
        }
        get() {
            return this.last
        }
        poll() {
            let e = !1
              , t = !1
              , n = !1
              , r = 0
              , i = 0
              , o = null;
            const a = navigator.getGamepads() || [];
            if (a.length > this.pad.index && (o = a[this.pad.index]),
            null !== o) {
                const a = o.buttons;
                if (r = (a[14].pressed ? -1 : 0) + (a[15].pressed ? 1 : 0),
                i = (a[12].pressed ? -1 : 0) + (a[13].pressed ? 1 : 0),
                0 !== r && 0 !== i) {
                    const e = 1 / Math.sqrt(2);
                    r *= e,
                    i *= e
                } else
                    0 === r && 0 === i && (r = o.axes[0],
                    i = o.axes[1],
                    Math.abs(r) < .1 && (r = 0),
                    Math.abs(i) < .1 && (i = 0));
                e = a[2].pressed,
                t = a[0].pressed,
                n = a[5].pressed
            }
            this.last.shot = e,
            this.last.bomb = t,
            this.last.slow = n,
            this.last.dx = r,
            this.last.dy = i
        }
        inspect() {
            const e = this.pad.index
              , t = this.pad;
            console.log(`${e}: ${t.id} buttons:${t.buttons.length} axis:${t.axes.length}`)
        }
    }
    class b {
        constructor(e) {
            this.registered = !1,
            this.touch = !1,
            this.lastPos = {
                x: 0,
                y: 0
            },
            this.delta = {
                x: 0,
                y: 0
            },
            this.last = new m,
            this.touchStart = (t=>(t.touches.length >= 3 && e.toggleDebugWindow(),
            t.touches.length >= 2 ? (t.preventDefault(),
            !1) : (this.touch = !0,
            this.lastPos.x = t.touches[0].pageX,
            this.lastPos.y = t.touches[0].pageY,
            this.delta.x = 0,
            this.delta.y = 0,
            !1))),
            this.touchEnd = (e=>(this.touch = !1,
            this.delta.x = 0,
            this.delta.y = 0,
            !1)),
            this.touchMove = (e=>{
                if (!this.touch)
                    return this.delta.x = 0,
                    void (this.delta.y = 0);
                const t = e.touches[0].pageX
                  , n = e.touches[0].pageY;
                return 1 !== e.changedTouches.length ? (this.delta.x = 0,
                this.delta.y = 0,
                this.lastPos.x = t,
                this.lastPos.y = n,
                !1) : (e.preventDefault(),
                this.delta.x += t - this.lastPos.x,
                this.delta.y += n - this.lastPos.y,
                this.lastPos.x = t,
                this.lastPos.y = n,
                !1)
            }
            ),
            this.prevent = (e=>(e.preventDefault(),
            !1))
        }
        get supported() {
            return "ontouchend"in document
        }
        register() {
            if (this.registered)
                return !0;
            if (this.supported) {
                const e = {
                    passive: !1
                };
                return window.addEventListener("touchstart", this.touchStart, e),
                window.addEventListener("touchend", this.touchEnd, e),
                window.addEventListener("touchmove", this.touchMove, e),
                this.registered = !0,
                !0
            }
            return this.registered = !1,
            !1
        }
        unregister() {
            this.registered && (window.removeEventListener("touchstart", this.touchStart, !1),
            window.removeEventListener("touchend", this.touchEnd, !1),
            window.removeEventListener("touchmove", this.touchMove, !1),
            this.registered = !1)
        }
        poll() {
            this.last.shot = this.touch,
            this.last.slow = !1,
            this.last.bomb = !1,
            this.last.dx = 0,
            this.last.dy = 0,
            this.last.sx = this.delta.x,
            this.last.sy = this.delta.y,
            this.delta.x = 0,
            this.delta.y = 0
        }
        get() {
            return this.last
        }
    }
    class x {
        constructor(e) {
            this.last = new m,
            this.lastPos = {
                x: 0,
                y: 0
            },
            this.delta = {
                x: 0,
                y: 0
            },
            this.capture = !1,
            this.mouseDown = (t=>(0 === t.button && (this.capture = !0,
            this.lastPos.x = t.pageX,
            this.lastPos.y = t.pageY,
            this.delta.x = 0,
            this.delta.y = 0,
            e.mouseHideStart()),
            !1)),
            this.mouseUp = (t=>{
                if (2 !== t.button)
                    return 0 === t.button && (this.capture = !1,
                    this.delta.x = 0,
                    this.delta.y = 0),
                    !1;
                e.toggleDebugWindow()
            }
            ),
            this.mouseMove = (t=>{
                if (!1 === this.capture)
                    return (t.movementX >= 4 || t.movementY >= 4) && e.mouseHideEnd(),
                    !0;
                const n = t.pageX
                  , r = t.pageY;
                return this.delta.x += n - this.lastPos.x,
                this.delta.y += r - this.lastPos.y,
                this.lastPos.x = n,
                this.lastPos.y = r,
                !1
            }
            )
        }
        poll() {
            this.last.shot = this.capture,
            this.last.slow = !1,
            this.last.bomb = !1,
            this.last.dx = 0,
            this.last.dy = 0,
            this.last.sx = this.delta.x,
            this.last.sy = this.delta.y,
            this.delta.x = 0,
            this.delta.y = 0
        }
        get() {
            return this.last
        }
        register() {
            window.addEventListener("mousedown", this.mouseDown),
            window.addEventListener("mouseup", this.mouseUp),
            window.addEventListener("mousemove", this.mouseMove)
        }
        unregister() {
            window.removeEventListener("mousedown", this.mouseDown),
            window.removeEventListener("mouseup", this.mouseUp),
            window.removeEventListener("mousemove", this.mouseMove)
        }
    }
    class w {
        constructor(e) {
            this.last = new m,
            this.padm = new g,
            this.keym = new v(e),
            this.touchm = new b(e),
            this.mousem = new x(e),
            this.register()
        }
        cleanup() {
            this.unregister()
        }
        poll(e) {
            this.padm.poll(),
            this.keym.poll(),
            this.touchm.poll(),
            this.mousem.poll(),
            this.last.copyFrom(this.keym.get());
            const t = this.last
              , n = this.padm.count();
            for (let e = 0; e < n; e++) {
                const n = this.padm.get(e);
                null !== n && (t.shot = t.shot || n.shot,
                t.bomb = t.bomb || n.bomb,
                t.slow = t.slow || n.slow,
                t.dx += n.dx,
                t.dy += n.dy)
            }
            if (this.touchm.supported) {
                const e = this.touchm.get();
                t.shot = t.shot || e.shot,
                t.bomb = t.bomb || e.bomb,
                t.slow = t.slow || e.slow,
                t.sx = e.sx,
                t.sy = e.sy
            } else {
                const e = this.mousem.get();
                t.shot = t.shot || e.shot,
                t.bomb = t.bomb || e.bomb,
                t.slow = t.slow || e.slow,
                t.sx = e.sx,
                t.sy = e.sy
            }
            t.sx *= e,
            t.sy *= e;
            let r = t.dx * t.dx + t.dy * t.dy;
            r >= 1 && (r = Math.sqrt(r),
            t.dx /= r,
            t.dy /= r)
        }
        get_vcode() {
            return this.last
        }
        register() {
            this.padm.register(),
            this.keym.register(),
            this.touchm.register(),
            this.touchm.supported || (console.log("まうすつかう"),
            this.mousem.register())
        }
        unregister() {
            this.padm.unregister(),
            this.keym.unregister(),
            this.touchm.unregister(),
            this.mousem.unregister()
        }
    }
    var _ = function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function u(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    };
    class E {
        constructor(e) {
            const t = e % 4;
            this.dx = 256 * t,
            this.dy = (e - t) / 4 * 256
        }
    }
    class S {
        constructor() {
            this.offset = new Map,
            this.canvas = document.createElement("canvas"),
            this.canvas.width = 1024,
            this.canvas.height = 1024,
            this.ctx = this.canvas.getContext("2d")
        }
        addAsset(e, t) {
            this.offset.set(e, t.map(e=>new E(e)))
        }
        load(e, t, n) {
            return _(this, void 0, void 0, function*() {
                const r = Array.from(this.offset.keys()).map(e=>new Promise((t,r)=>{
                    const i = new Image;
                    i.src = "./assets/" + e + ".png",
                    i.onload = (r=>{
                        const o = this.offset.get(e);
                        for (const e of o)
                            this.ctx.drawImage(i, e.dx, e.dy);
                        n(),
                        t(r)
                    }
                    ),
                    i.onerror = (e=>{
                        r(e)
                    }
                    )
                }
                ));
                return Promise.all(r).then(()=>{
                    this.ctx.fillStyle = "rgba(0,0,0,0)",
                    this.ctx.clearRect(0, 0, 1, 1024),
                    this.ctx.clearRect(511, 0, 1, 1024),
                    t.performanceLog("createTexture", ()=>{
                        this.texture = e.createTexture(this.ctx.getImageData(0, 0, 1024, 1024))
                    }
                    )
                }
                )
            })
        }
        getTexture() {
            return this.texture
        }
        getOffset(e) {
            return this.offset.get(e)[0]
        }
    }
    class k {
        constructor(e, t, n) {
            this.loader = e,
            e.addAsset(t, n)
        }
        update() {
            const e = this
              , t = e.loader.getTexture();
            for (const n of Object.getOwnPropertyNames(this)) {
                const r = e[n];
                if (r.hasOwnProperty("tex") && (r.tex = t),
                !r.hasOwnProperty("uuid"))
                    continue;
                const i = this.loader.getOffset(r.uuid);
                r.hasOwnProperty("uv") && (r.uv[0] = r.uv[0] / 4 + i.dx / 1024,
                r.uv[1] = r.uv[1] / 4 + i.dy / 1024,
                r.uv[2] = r.uv[2] / 4 + i.dx / 1024,
                r.uv[3] = r.uv[3] / 4 + i.dy / 1024)
            }
        }
    }
    var T = function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function u(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    };
    class C {
        constructor(e, t) {
            this.man = e,
            this.buf = null,
            this.volume = t,
            this.lastTimestamp = -1,
            this.destNode = null
        }
        get timestamp() {
            return this.lastTimestamp
        }
        set timestamp(e) {
            this.lastTimestamp = e
        }
        decode(e) {
            return T(this, void 0, void 0, function*() {
                null === this.buf && (this.destNode = this.man.createGainNode(),
                this.destNode.gain.value = this.volume,
                this.buf = e)
            })
        }
        prepare(e) {
            e.buffer = this.buf,
            e.connect(this.destNode)
        }
        playInner() {
            const e = this.man.getBufferSource();
            return this.prepare(e),
            e.start(0),
            e
        }
        play() {
            if (null === this.buf)
                return;
            const e = this.man;
            if (e.isMuteSection)
                return;
            const t = e.getTimestamp();
            this.timestamp + 2 >= t || (this.timestamp = t,
            this.playInner())
        }
    }
    class D extends C {
        constructor(e, t, n, r) {
            super(e, t),
            this.loopStart = n,
            this.loopEnd = r,
            this.sourceNode = null
        }
        prepare(e) {
            super.prepare(e),
            e.loopStart = this.loopStart,
            e.loopEnd = this.loopEnd,
            e.loop = !0
        }
        play() {
            null === this.sourceNode && (this.sourceNode = this.playInner())
        }
        stop() {
            null !== this.sourceNode && (this.sourceNode.stop(),
            this.sourceNode = null)
        }
    }
    class P {
        constructor() {
            this.ctx = null,
            this.masterVolumeNode = null,
            this.count = -1,
            this.conf = null,
            this.waitPromise = new Promise((e,t)=>{
                this.onInitialized = e,
                this.onError = t
            }
            ),
            this.muteSection = !1
        }
        wait() {
            return this.waitPromise
        }
        initialize(e) {
            if (null !== this.ctx)
                return;
            const t = window;
            this.ctx = new (t.AudioContext || t.webkitAudioContext),
            this.masterVolumeNode = this.ctx.createGain(),
            this.masterVolumeNode.connect(this.ctx.destination),
            this.conf = e,
            this.count = -1,
            this.update(),
            this.onInitialized()
        }
        update() {
            this.count += 1;
            const e = this.conf;
            if (this.masterVolumeNode) {
                const t = e.volume * (e.mute ? 0 : 1);
                this.masterVolumeNode.gain.value = t
            }
        }
        get isMuteSection() {
            return this.muteSection
        }
        enterMuteSection() {
            this.muteSection = !0
        }
        leaveMuteSection() {
            this.muteSection = !1
        }
        checkInitialized() {
            if (null === this.ctx)
                throw new Error("initialize する前に AudioManager のメソッドが呼ばれた")
        }
        createGainNode() {
            this.checkInitialized();
            const e = this.ctx.createGain();
            return e.connect(this.masterVolumeNode),
            e
        }
        getTimestamp() {
            return this.count
        }
        getBufferSource() {
            return this.checkInitialized(),
            this.ctx.createBufferSource()
        }
    }
    class L {
        constructor() {
            this.man = new P,
            this.sounds = new Map
        }
        load(e, t, n) {
            return T(this, void 0, void 0, function*() {
                const t = window
                  , r = new (t.OfflineAudioContext || t.webkitOfflineAudioContext)(2,1764e3,44100)
                  , i = e=>new Promise((t,n)=>{
                    r.decodeAudioData(e, t, n)
                }
                )
                  , o = e.map(e=>new Promise((t,r)=>{
                    fetch("./assets/" + e + ".mp3").then(e=>e.arrayBuffer()).then(i).then(r=>{
                        this.sounds.set(e, r),
                        n(),
                        t()
                    }
                    ).catch(e=>r(e))
                }
                ));
                return Promise.all(o)
            })
        }
        get(e) {
            return this.sounds.get(e)
        }
    }
    class A extends k {
        constructor(e, t, n) {
            super(e, t, n);
            this.all = {
                tex: null,
                uuid: "e0c98cf0-3774-11e9-b339-fd6df69924ce",
                x: 0,
                y: 0,
                w: 256,
                h: 256,
                uv: [0, 0, 1, 1],
                col: [1, 1, 1, 1]
            }
        }
    }
    class M extends k {
        constructor(e, t, n) {
            super(e, t, n);
            this.all = {
                tex: null,
                uuid: "e0c9db10-3774-11e9-b339-fd6df69924ce",
                x: 0,
                y: 0,
                w: 256,
                h: 256,
                uv: [0, 0, 1, 1],
                col: [1, 1, 1, 1]
            }
        }
    }
    class N extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.t00 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 0,
                w: 32,
                h: 32,
                uv: [0, 0, .125, .125],
                col: [1, 1, 1, 1]
            },
            this.t01 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 32,
                w: 32,
                h: 32,
                uv: [0, .125, .125, .25],
                col: [1, 1, 1, 1]
            },
            this.t02 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 64,
                w: 32,
                h: 32,
                uv: [0, .25, .125, .375],
                col: [1, 1, 1, 1]
            },
            this.t03 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 96,
                w: 32,
                h: 32,
                uv: [0, .375, .125, .5],
                col: [1, 1, 1, 1]
            },
            this.t04 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 128,
                w: 32,
                h: 32,
                uv: [0, .5, .125, .625],
                col: [1, 1, 1, 1]
            },
            this.t05 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 160,
                w: 32,
                h: 32,
                uv: [0, .625, .125, .75],
                col: [1, 1, 1, 1]
            },
            this.tori0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 232,
                w: 24,
                h: 24,
                uv: [0, .90625, .09375, 1],
                col: [1, 1, 1, 1]
            },
            this.tori0001 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 24,
                y: 232,
                w: 24,
                h: 24,
                uv: [.09375, .90625, .1875, 1],
                col: [1, 1, 1, 1]
            },
            this.tori0002 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 232,
                w: 24,
                h: 24,
                uv: [.1875, .90625, .28125, 1],
                col: [1, 1, 1, 1]
            },
            this.tori0003 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 56,
                y: 208,
                w: 24,
                h: 24,
                uv: [.21875, .8125, .3125, .90625],
                col: [1, 1, 1, 1]
            },
            this.heri0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 120,
                y: 0,
                w: 72,
                h: 40,
                uv: [.46875, 0, .75, .15625],
                col: [1, 1, 1, 1]
            },
            this.heri0001 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 120,
                y: 40,
                w: 72,
                h: 40,
                uv: [.46875, .15625, .75, .3125],
                col: [1, 1, 1, 1]
            },
            this.heri0002 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 120,
                y: 80,
                w: 72,
                h: 40,
                uv: [.46875, .3125, .75, .46875],
                col: [1, 1, 1, 1]
            },
            this.heri0003 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 120,
                y: 120,
                w: 72,
                h: 40,
                uv: [.46875, .46875, .75, .625],
                col: [1, 1, 1, 1]
            },
            this.heri0004 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 120,
                y: 160,
                w: 72,
                h: 40,
                uv: [.46875, .625, .75, .78125],
                col: [1, 1, 1, 1]
            },
            this.missile0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 84,
                w: 36,
                h: 20,
                uv: [.75, .328125, .890625, .40625],
                col: [1, 1, 1, 1]
            },
            this.missile0001 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 104,
                w: 36,
                h: 20,
                uv: [.75, .40625, .890625, .484375],
                col: [1, 1, 1, 1]
            },
            this.missile0002 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 124,
                w: 36,
                h: 20,
                uv: [.75, .484375, .890625, .5625],
                col: [1, 1, 1, 1]
            },
            this.missile0003 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 144,
                w: 36,
                h: 20,
                uv: [.75, .5625, .890625, .640625],
                col: [1, 1, 1, 1]
            },
            this.kani0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 0,
                w: 52,
                h: 84,
                uv: [.75, 0, .953125, .328125],
                col: [1, 1, 1, 1]
            },
            this.propela0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 192,
                w: 64,
                h: 64,
                uv: [.75, .75, 1, 1],
                col: [1, 1, 1, 1]
            },
            this.enx_0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 44,
                w: 40,
                h: 40,
                uv: [.125, .171875, .28125, .328125],
                col: [1, 1, 1, 1]
            },
            this.enx_0001 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 84,
                w: 40,
                h: 40,
                uv: [.125, .328125, .28125, .484375],
                col: [1, 1, 1, 1]
            },
            this.enx_0002 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 124,
                w: 40,
                h: 40,
                uv: [.125, .484375, .28125, .640625],
                col: [1, 1, 1, 1]
            },
            this.joint0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 192,
                w: 56,
                h: 32,
                uv: [0, .75, .21875, .875],
                col: [1, 1, 1, 1]
            },
            this.enl_0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 72,
                y: 44,
                w: 48,
                h: 52,
                uv: [.28125, .171875, .46875, .375],
                col: [1, 1, 1, 1]
            },
            this.enl_0001 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 72,
                y: 96,
                w: 48,
                h: 52,
                uv: [.28125, .375, .46875, .578125],
                col: [1, 1, 1, 1]
            },
            this.enl_0002 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 72,
                y: 148,
                w: 48,
                h: 52,
                uv: [.28125, .578125, .46875, .78125],
                col: [1, 1, 1, 1]
            },
            this.bomber0000 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 0,
                w: 80,
                h: 44,
                uv: [.125, 0, .4375, .171875],
                col: [1, 1, 1, 1]
            },
            this.m01 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 88,
                y: 208,
                w: 52,
                h: 48,
                uv: [.34375, .8125, .546875, 1],
                col: [1, 1, 1, 1]
            },
            this.m02 = {
                tex: r,
                uuid: "799628b0-3d76-11e9-8c3b-15cc4d5b0d33",
                x: 140,
                y: 208,
                w: 52,
                h: 48,
                uv: [.546875, .8125, .75, 1],
                col: [1, 1, 1, 1]
            }
        }
    }
    class R extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.t00 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 0,
                w: 32,
                h: 32,
                uv: [0, 0, .125, .125],
                col: [1, 1, 1, 1]
            },
            this.t01 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 0,
                w: 48,
                h: 48,
                uv: [.125, 0, .3125, .1875],
                col: [1, 1, 1, 1]
            },
            this.t02 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 0,
                w: 48,
                h: 48,
                uv: [.3125, 0, .5, .1875],
                col: [1, 1, 1, 1]
            },
            this.t03 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 0,
                w: 64,
                h: 64,
                uv: [.5, 0, .75, .25],
                col: [1, 1, 1, 1]
            },
            this.t04 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 0,
                w: 64,
                h: 64,
                uv: [.75, 0, 1, .25],
                col: [1, 1, 1, 1]
            },
            this.t05 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 48,
                w: 64,
                h: 64,
                uv: [0, .1875, .25, .4375],
                col: [1, 1, 1, 1]
            },
            this.t06 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 48,
                w: 64,
                h: 64,
                uv: [.25, .1875, .5, .4375],
                col: [1, 1, 1, 1]
            },
            this.t07 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 64,
                w: 64,
                h: 64,
                uv: [.5, .25, .75, .5],
                col: [1, 1, 1, 1]
            },
            this.t08 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 64,
                w: 64,
                h: 64,
                uv: [.75, .25, 1, .5],
                col: [1, 1, 1, 1]
            },
            this.t09 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 112,
                w: 64,
                h: 64,
                uv: [0, .4375, .25, .6875],
                col: [1, 1, 1, 1]
            },
            this.t10 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 112,
                w: 64,
                h: 64,
                uv: [.25, .4375, .5, .6875],
                col: [1, 1, 1, 1]
            },
            this.t11 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 128,
                w: 64,
                h: 64,
                uv: [.5, .5, .75, .75],
                col: [1, 1, 1, 1]
            },
            this.t12 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 128,
                w: 64,
                h: 64,
                uv: [.75, .5, 1, .75],
                col: [1, 1, 1, 1]
            },
            this.t13 = {
                tex: r,
                uuid: "c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 176,
                w: 64,
                h: 64,
                uv: [0, .6875, .25, .9375],
                col: [1, 1, 1, 1]
            }
        }
    }
    class O extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.t00 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 0,
                w: 32,
                h: 32,
                uv: [0, 0, .125, .125],
                col: [0, 0, 0, 1]
            },
            this.t01 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 0,
                w: 48,
                h: 48,
                uv: [.125, 0, .3125, .1875],
                col: [0, 0, 0, 1]
            },
            this.t02 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 0,
                w: 48,
                h: 48,
                uv: [.3125, 0, .5, .1875],
                col: [0, 0, 0, 1]
            },
            this.t03 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 0,
                w: 64,
                h: 64,
                uv: [.5, 0, .75, .25],
                col: [0, 0, 0, 1]
            },
            this.t04 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 0,
                w: 64,
                h: 64,
                uv: [.75, 0, 1, .25],
                col: [0, 0, 0, 1]
            },
            this.t05 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 48,
                w: 64,
                h: 64,
                uv: [0, .1875, .25, .4375],
                col: [0, 0, 0, 1]
            },
            this.t06 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 48,
                w: 64,
                h: 64,
                uv: [.25, .1875, .5, .4375],
                col: [0, 0, 0, 1]
            },
            this.t07 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 64,
                w: 64,
                h: 64,
                uv: [.5, .25, .75, .5],
                col: [0, 0, 0, 1]
            },
            this.t08 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 64,
                w: 64,
                h: 64,
                uv: [.75, .25, 1, .5],
                col: [0, 0, 0, 1]
            },
            this.t09 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 112,
                w: 64,
                h: 64,
                uv: [0, .4375, .25, .6875],
                col: [0, 0, 0, 1]
            },
            this.t10 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 112,
                w: 64,
                h: 64,
                uv: [.25, .4375, .5, .6875],
                col: [0, 0, 0, 1]
            },
            this.t11 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 128,
                w: 64,
                h: 64,
                uv: [.5, .5, .75, .75],
                col: [0, 0, 0, 1]
            },
            this.t12 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 128,
                w: 64,
                h: 64,
                uv: [.75, .5, 1, .75],
                col: [0, 0, 0, 1]
            },
            this.t13 = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 176,
                w: 64,
                h: 64,
                uv: [0, .6875, .25, .9375],
                col: [0, 0, 0, 1]
            },
            this.buzzEffect = {
                tex: r,
                uuid: "c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 208,
                w: 64,
                h: 32,
                uv: [.5, .8125, .75, .9375],
                col: [1, 1, 1, 1]
            }
        }
    }
    class I extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.t00 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 144,
                w: 16,
                h: 16,
                uv: [0, .5625, .0625, .625],
                col: [1, 1, 1, 1]
            },
            this.t01 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 144,
                w: 16,
                h: 16,
                uv: [.0625, .5625, .125, .625],
                col: [1, 1, 1, 1]
            },
            this.t02 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 144,
                w: 16,
                h: 16,
                uv: [.125, .5625, .1875, .625],
                col: [1, 1, 1, 1]
            },
            this.t03 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 144,
                w: 16,
                h: 16,
                uv: [.1875, .5625, .25, .625],
                col: [1, 1, 1, 1]
            },
            this.t04 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 144,
                w: 16,
                h: 16,
                uv: [.25, .5625, .3125, .625],
                col: [1, 1, 1, 1]
            },
            this.t05 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 144,
                w: 16,
                h: 16,
                uv: [.3125, .5625, .375, .625],
                col: [1, 1, 1, 1]
            },
            this.t06 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 144,
                w: 16,
                h: 16,
                uv: [.375, .5625, .4375, .625],
                col: [1, 1, 1, 1]
            },
            this.t07 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 144,
                w: 16,
                h: 16,
                uv: [.4375, .5625, .5, .625],
                col: [1, 1, 1, 1]
            },
            this.t08 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 144,
                w: 16,
                h: 16,
                uv: [.5, .5625, .5625, .625],
                col: [1, 1, 1, 1]
            },
            this.t09 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 144,
                w: 16,
                h: 16,
                uv: [.5625, .5625, .625, .625],
                col: [1, 1, 1, 1]
            },
            this.t10 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 160,
                y: 144,
                w: 16,
                h: 16,
                uv: [.625, .5625, .6875, .625],
                col: [1, 1, 1, 1]
            },
            this.t11 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 176,
                y: 144,
                w: 16,
                h: 16,
                uv: [.6875, .5625, .75, .625],
                col: [1, 1, 1, 1]
            },
            this.t12 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 144,
                w: 16,
                h: 16,
                uv: [.75, .5625, .8125, .625],
                col: [1, 1, 1, 1]
            },
            this.t13 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 208,
                y: 144,
                w: 16,
                h: 16,
                uv: [.8125, .5625, .875, .625],
                col: [1, 1, 1, 1]
            },
            this.t14 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 224,
                y: 144,
                w: 16,
                h: 16,
                uv: [.875, .5625, .9375, .625],
                col: [1, 1, 1, 1]
            },
            this.t15 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 240,
                y: 144,
                w: 16,
                h: 16,
                uv: [.9375, .5625, 1, .625],
                col: [1, 1, 1, 1]
            },
            this.t16 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 160,
                w: 16,
                h: 16,
                uv: [0, .625, .0625, .6875],
                col: [1, 1, 1, 1]
            },
            this.t17 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 160,
                w: 16,
                h: 16,
                uv: [.0625, .625, .125, .6875],
                col: [1, 1, 1, 1]
            },
            this.t18 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 160,
                w: 16,
                h: 16,
                uv: [.125, .625, .1875, .6875],
                col: [1, 1, 1, 1]
            },
            this.t19 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 160,
                w: 16,
                h: 16,
                uv: [.1875, .625, .25, .6875],
                col: [1, 1, 1, 1]
            },
            this.t20 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 160,
                w: 16,
                h: 16,
                uv: [.25, .625, .3125, .6875],
                col: [1, 1, 1, 1]
            },
            this.t21 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 160,
                w: 16,
                h: 16,
                uv: [.3125, .625, .375, .6875],
                col: [1, 1, 1, 1]
            },
            this.t22 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 160,
                w: 16,
                h: 16,
                uv: [.375, .625, .4375, .6875],
                col: [1, 1, 1, 1]
            },
            this.t23 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 160,
                w: 16,
                h: 16,
                uv: [.4375, .625, .5, .6875],
                col: [1, 1, 1, 1]
            },
            this.t24 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 160,
                w: 16,
                h: 16,
                uv: [.5, .625, .5625, .6875],
                col: [1, 1, 1, 1]
            },
            this.t25 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 160,
                w: 16,
                h: 16,
                uv: [.5625, .625, .625, .6875],
                col: [1, 1, 1, 1]
            },
            this.t26 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 176,
                w: 16,
                h: 16,
                uv: [0, .6875, .0625, .75],
                col: [1, 1, 1, 1]
            },
            this.t27 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 176,
                w: 16,
                h: 16,
                uv: [.0625, .6875, .125, .75],
                col: [1, 1, 1, 1]
            },
            this.t28 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 176,
                w: 16,
                h: 16,
                uv: [.125, .6875, .1875, .75],
                col: [1, 1, 1, 1]
            },
            this.t29 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 176,
                w: 16,
                h: 16,
                uv: [.1875, .6875, .25, .75],
                col: [1, 1, 1, 1]
            },
            this.t30 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 176,
                w: 16,
                h: 16,
                uv: [.25, .6875, .3125, .75],
                col: [1, 1, 1, 1]
            },
            this.t31 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 176,
                w: 16,
                h: 16,
                uv: [.3125, .6875, .375, .75],
                col: [1, 1, 1, 1]
            },
            this.t32 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 176,
                w: 16,
                h: 16,
                uv: [.375, .6875, .4375, .75],
                col: [1, 1, 1, 1]
            },
            this.t33 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 176,
                w: 16,
                h: 16,
                uv: [.4375, .6875, .5, .75],
                col: [1, 1, 1, 1]
            },
            this.t34 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 176,
                w: 16,
                h: 16,
                uv: [.5, .6875, .5625, .75],
                col: [1, 1, 1, 1]
            },
            this.t35 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 176,
                w: 16,
                h: 16,
                uv: [.5625, .6875, .625, .75],
                col: [1, 1, 1, 1]
            },
            this.t36 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 160,
                y: 176,
                w: 16,
                h: 16,
                uv: [.625, .6875, .6875, .75],
                col: [1, 1, 1, 1]
            },
            this.t37 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 176,
                y: 176,
                w: 16,
                h: 16,
                uv: [.6875, .6875, .75, .75],
                col: [1, 1, 1, 1]
            },
            this.t38 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 176,
                w: 16,
                h: 16,
                uv: [.75, .6875, .8125, .75],
                col: [1, 1, 1, 1]
            },
            this.t39 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 208,
                y: 176,
                w: 16,
                h: 16,
                uv: [.8125, .6875, .875, .75],
                col: [1, 1, 1, 1]
            },
            this.t40 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 224,
                y: 176,
                w: 16,
                h: 16,
                uv: [.875, .6875, .9375, .75],
                col: [1, 1, 1, 1]
            },
            this.t41 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 240,
                y: 176,
                w: 16,
                h: 16,
                uv: [.9375, .6875, 1, .75],
                col: [1, 1, 1, 1]
            },
            this.t42 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 192,
                w: 16,
                h: 16,
                uv: [0, .75, .0625, .8125],
                col: [1, 1, 1, 1]
            },
            this.t43 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 192,
                w: 16,
                h: 16,
                uv: [.0625, .75, .125, .8125],
                col: [1, 1, 1, 1]
            },
            this.t44 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 192,
                w: 16,
                h: 16,
                uv: [.125, .75, .1875, .8125],
                col: [1, 1, 1, 1]
            },
            this.t45 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 192,
                w: 16,
                h: 16,
                uv: [.1875, .75, .25, .8125],
                col: [1, 1, 1, 1]
            },
            this.t46 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 192,
                w: 16,
                h: 16,
                uv: [.25, .75, .3125, .8125],
                col: [1, 1, 1, 1]
            },
            this.t47 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 192,
                w: 16,
                h: 16,
                uv: [.3125, .75, .375, .8125],
                col: [1, 1, 1, 1]
            },
            this.t48 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 192,
                w: 16,
                h: 16,
                uv: [.375, .75, .4375, .8125],
                col: [1, 1, 1, 1]
            },
            this.t49 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 192,
                w: 16,
                h: 16,
                uv: [.4375, .75, .5, .8125],
                col: [1, 1, 1, 1]
            },
            this.t50 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 192,
                w: 16,
                h: 16,
                uv: [.5, .75, .5625, .8125],
                col: [1, 1, 1, 1]
            },
            this.t51 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 192,
                w: 16,
                h: 16,
                uv: [.5625, .75, .625, .8125],
                col: [1, 1, 1, 1]
            },
            this.t52 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 208,
                w: 16,
                h: 16,
                uv: [0, .8125, .0625, .875],
                col: [1, 1, 1, 1]
            },
            this.t53 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 208,
                w: 16,
                h: 16,
                uv: [.0625, .8125, .125, .875],
                col: [1, 1, 1, 1]
            },
            this.t54 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 208,
                w: 16,
                h: 16,
                uv: [.125, .8125, .1875, .875],
                col: [1, 1, 1, 1]
            },
            this.t55 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 208,
                w: 16,
                h: 16,
                uv: [.1875, .8125, .25, .875],
                col: [1, 1, 1, 1]
            },
            this.t56 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 208,
                w: 16,
                h: 16,
                uv: [.25, .8125, .3125, .875],
                col: [1, 1, 1, 1]
            },
            this.t57 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 208,
                w: 16,
                h: 16,
                uv: [.3125, .8125, .375, .875],
                col: [1, 1, 1, 1]
            },
            this.t58 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 208,
                w: 16,
                h: 16,
                uv: [.375, .8125, .4375, .875],
                col: [1, 1, 1, 1]
            },
            this.t59 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 208,
                w: 16,
                h: 16,
                uv: [.4375, .8125, .5, .875],
                col: [1, 1, 1, 1]
            },
            this.t60 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 208,
                w: 16,
                h: 16,
                uv: [.5, .8125, .5625, .875],
                col: [1, 1, 1, 1]
            },
            this.t61 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 208,
                w: 16,
                h: 16,
                uv: [.5625, .8125, .625, .875],
                col: [1, 1, 1, 1]
            },
            this.t62 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 224,
                w: 16,
                h: 16,
                uv: [0, .875, .0625, .9375],
                col: [1, 1, 1, 1]
            },
            this.t63 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 224,
                w: 16,
                h: 16,
                uv: [.0625, .875, .125, .9375],
                col: [1, 1, 1, 1]
            },
            this.t64 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 224,
                w: 16,
                h: 16,
                uv: [.125, .875, .1875, .9375],
                col: [1, 1, 1, 1]
            },
            this.t65 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 224,
                w: 16,
                h: 16,
                uv: [.1875, .875, .25, .9375],
                col: [1, 1, 1, 1]
            },
            this.t66 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 224,
                w: 16,
                h: 16,
                uv: [.25, .875, .3125, .9375],
                col: [1, 1, 1, 1]
            },
            this.t67 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 224,
                w: 16,
                h: 16,
                uv: [.3125, .875, .375, .9375],
                col: [1, 1, 1, 1]
            },
            this.t68 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 224,
                w: 16,
                h: 16,
                uv: [.375, .875, .4375, .9375],
                col: [1, 1, 1, 1]
            },
            this.t69 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 224,
                w: 16,
                h: 16,
                uv: [.4375, .875, .5, .9375],
                col: [1, 1, 1, 1]
            },
            this.t70 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 224,
                w: 16,
                h: 16,
                uv: [.5, .875, .5625, .9375],
                col: [1, 1, 1, 1]
            },
            this.t71 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 224,
                w: 16,
                h: 16,
                uv: [.5625, .875, .625, .9375],
                col: [1, 1, 1, 1]
            },
            this.t72 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 160,
                y: 224,
                w: 16,
                h: 16,
                uv: [.625, .875, .6875, .9375],
                col: [1, 1, 1, 1]
            },
            this.t73 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 176,
                y: 224,
                w: 16,
                h: 16,
                uv: [.6875, .875, .75, .9375],
                col: [1, 1, 1, 1]
            },
            this.t74 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 224,
                w: 16,
                h: 16,
                uv: [.75, .875, .8125, .9375],
                col: [1, 1, 1, 1]
            },
            this.t75 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 208,
                y: 224,
                w: 16,
                h: 16,
                uv: [.8125, .875, .875, .9375],
                col: [1, 1, 1, 1]
            },
            this.t76 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 224,
                y: 224,
                w: 16,
                h: 16,
                uv: [.875, .875, .9375, .9375],
                col: [1, 1, 1, 1]
            },
            this.t77 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 240,
                y: 224,
                w: 16,
                h: 16,
                uv: [.9375, .875, 1, .9375],
                col: [1, 1, 1, 1]
            },
            this.t78 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 240,
                w: 16,
                h: 16,
                uv: [0, .9375, .0625, 1],
                col: [1, 1, 1, 1]
            },
            this.t79 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 16,
                y: 240,
                w: 16,
                h: 16,
                uv: [.0625, .9375, .125, 1],
                col: [1, 1, 1, 1]
            },
            this.t80 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 32,
                y: 240,
                w: 16,
                h: 16,
                uv: [.125, .9375, .1875, 1],
                col: [1, 1, 1, 1]
            },
            this.t81 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 48,
                y: 240,
                w: 16,
                h: 16,
                uv: [.1875, .9375, .25, 1],
                col: [1, 1, 1, 1]
            },
            this.t82 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 64,
                y: 240,
                w: 16,
                h: 16,
                uv: [.25, .9375, .3125, 1],
                col: [1, 1, 1, 1]
            },
            this.t83 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 80,
                y: 240,
                w: 16,
                h: 16,
                uv: [.3125, .9375, .375, 1],
                col: [1, 1, 1, 1]
            },
            this.t84 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 96,
                y: 240,
                w: 16,
                h: 16,
                uv: [.375, .9375, .4375, 1],
                col: [1, 1, 1, 1]
            },
            this.t85 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 112,
                y: 240,
                w: 16,
                h: 16,
                uv: [.4375, .9375, .5, 1],
                col: [1, 1, 1, 1]
            },
            this.t86 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 128,
                y: 240,
                w: 16,
                h: 16,
                uv: [.5, .9375, .5625, 1],
                col: [1, 1, 1, 1]
            },
            this.t87 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 144,
                y: 240,
                w: 16,
                h: 16,
                uv: [.5625, .9375, .625, 1],
                col: [1, 1, 1, 1]
            },
            this.t88 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 160,
                y: 240,
                w: 16,
                h: 16,
                uv: [.625, .9375, .6875, 1],
                col: [1, 1, 1, 1]
            },
            this.t89 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 176,
                y: 240,
                w: 16,
                h: 16,
                uv: [.6875, .9375, .75, 1],
                col: [1, 1, 1, 1]
            },
            this.t90 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 240,
                w: 16,
                h: 16,
                uv: [.75, .9375, .8125, 1],
                col: [1, 1, 1, 1]
            },
            this.t91 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 208,
                y: 240,
                w: 16,
                h: 16,
                uv: [.8125, .9375, .875, 1],
                col: [1, 1, 1, 1]
            },
            this.t92 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 240,
                y: 128,
                w: 16,
                h: 16,
                uv: [.9375, .5, 1, .5625],
                col: [1, 1, 1, 1]
            },
            this.t93 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 0,
                y: 56,
                w: 64,
                h: 64,
                uv: [0, .21875, .25, .46875],
                col: [1, 1, 1, 1]
            },
            this.t94 = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 224,
                y: 240,
                w: 16,
                h: 16,
                uv: [.875, .9375, .9375, 1],
                col: [1, 1, 1, 1]
            },
            this.KA = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 160,
                y: 160,
                w: 16,
                h: 16,
                uv: [.625, .625, .6875, .6875],
                col: [1, 1, 1, 1]
            },
            this.SU = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 176,
                y: 160,
                w: 16,
                h: 16,
                uv: [.6875, .625, .75, .6875],
                col: [1, 1, 1, 1]
            },
            this.RI = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 192,
                y: 160,
                w: 16,
                h: 16,
                uv: [.75, .625, .8125, .6875],
                col: [1, 1, 1, 1]
            },
            this.white = {
                tex: r,
                uuid: "d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",
                x: 208,
                y: 192,
                w: 16,
                h: 16,
                uv: [.8125, .75, .875, .8125],
                col: [1, 1, 1, 1]
            }
        }
    }
    class z extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.R0 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 0,
                y: 0,
                w: 32,
                h: 56,
                uv: [0, 0, .125, .21875],
                col: [1, 1, 1, 1]
            },
            this.R1 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 32,
                y: 0,
                w: 32,
                h: 56,
                uv: [.125, 0, .25, .21875],
                col: [1, 1, 1, 1]
            },
            this.R2 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 64,
                y: 0,
                w: 32,
                h: 56,
                uv: [.25, 0, .375, .21875],
                col: [1, 1, 1, 1]
            },
            this.R3 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 96,
                y: 0,
                w: 32,
                h: 56,
                uv: [.375, 0, .5, .21875],
                col: [1, 1, 1, 1]
            },
            this.R4 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 128,
                y: 0,
                w: 32,
                h: 56,
                uv: [.5, 0, .625, .21875],
                col: [1, 1, 1, 1]
            },
            this.R5 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 160,
                y: 0,
                w: 32,
                h: 56,
                uv: [.625, 0, .75, .21875],
                col: [1, 1, 1, 1]
            },
            this.R6 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 192,
                y: 0,
                w: 32,
                h: 56,
                uv: [.75, 0, .875, .21875],
                col: [1, 1, 1, 1]
            },
            this.R7 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 224,
                y: 0,
                w: 32,
                h: 56,
                uv: [.875, 0, 1, .21875],
                col: [1, 1, 1, 1]
            },
            this.L0 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 0,
                y: 56,
                w: 32,
                h: 56,
                uv: [0, .21875, .125, .4375],
                col: [1, 1, 1, 1]
            },
            this.L1 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 32,
                y: 56,
                w: 32,
                h: 56,
                uv: [.125, .21875, .25, .4375],
                col: [1, 1, 1, 1]
            },
            this.L2 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 64,
                y: 56,
                w: 32,
                h: 56,
                uv: [.25, .21875, .375, .4375],
                col: [1, 1, 1, 1]
            },
            this.L3 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 96,
                y: 56,
                w: 32,
                h: 56,
                uv: [.375, .21875, .5, .4375],
                col: [1, 1, 1, 1]
            },
            this.L4 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 128,
                y: 56,
                w: 32,
                h: 56,
                uv: [.5, .21875, .625, .4375],
                col: [1, 1, 1, 1]
            },
            this.L5 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 160,
                y: 56,
                w: 32,
                h: 56,
                uv: [.625, .21875, .75, .4375],
                col: [1, 1, 1, 1]
            },
            this.L6 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 192,
                y: 56,
                w: 32,
                h: 56,
                uv: [.75, .21875, .875, .4375],
                col: [1, 1, 1, 1]
            },
            this.L7 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 224,
                y: 56,
                w: 32,
                h: 56,
                uv: [.875, .21875, 1, .4375],
                col: [1, 1, 1, 1]
            },
            this.CW0 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 0,
                y: 112,
                w: 32,
                h: 56,
                uv: [0, .4375, .125, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW1 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 32,
                y: 112,
                w: 32,
                h: 56,
                uv: [.125, .4375, .25, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW2 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 64,
                y: 112,
                w: 32,
                h: 56,
                uv: [.25, .4375, .375, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW3 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 96,
                y: 112,
                w: 32,
                h: 56,
                uv: [.375, .4375, .5, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW4 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 128,
                y: 112,
                w: 32,
                h: 56,
                uv: [.5, .4375, .625, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW5 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 160,
                y: 112,
                w: 32,
                h: 56,
                uv: [.625, .4375, .75, .65625],
                col: [1, 1, 1, 1]
            },
            this.RW0 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 192,
                y: 112,
                w: 32,
                h: 56,
                uv: [.75, .4375, .875, .65625],
                col: [1, 1, 1, 1]
            },
            this.LW0 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 224,
                y: 112,
                w: 32,
                h: 56,
                uv: [.875, .4375, 1, .65625],
                col: [1, 1, 1, 1]
            },
            this.RW1 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 0,
                y: 168,
                w: 32,
                h: 56,
                uv: [0, .65625, .125, .875],
                col: [1, 1, 1, 1]
            },
            this.LW1 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 32,
                y: 168,
                w: 32,
                h: 56,
                uv: [.125, .65625, .25, .875],
                col: [1, 1, 1, 1]
            },
            this.RW2 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 64,
                y: 168,
                w: 32,
                h: 56,
                uv: [.25, .65625, .375, .875],
                col: [1, 1, 1, 1]
            },
            this.LW2 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 96,
                y: 168,
                w: 32,
                h: 56,
                uv: [.375, .65625, .5, .875],
                col: [1, 1, 1, 1]
            },
            this.RW3 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 128,
                y: 168,
                w: 32,
                h: 56,
                uv: [.5, .65625, .625, .875],
                col: [1, 1, 1, 1]
            },
            this.LW3 = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 160,
                y: 168,
                w: 32,
                h: 56,
                uv: [.625, .65625, .75, .875],
                col: [1, 1, 1, 1]
            },
            this.ShotR = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 136,
                y: 232,
                w: 32,
                h: 16,
                uv: [.53125, .90625, .65625, .96875],
                col: [1, 1, 1, .4]
            },
            this.BitB = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 0,
                y: 224,
                w: 32,
                h: 32,
                uv: [0, .875, .125, 1],
                col: [1, 1, 1, 1]
            },
            this.BitR = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 32,
                y: 224,
                w: 32,
                h: 32,
                uv: [.125, .875, .25, 1],
                col: [1, 1, 1, 1]
            },
            this.ShotG = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 208,
                y: 224,
                w: 16,
                h: 16,
                uv: [.8125, .875, .875, .9375],
                col: [1, 1, 1, .42]
            },
            this.ShotY = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 208,
                y: 240,
                w: 16,
                h: 16,
                uv: [.8125, .9375, .875, 1],
                col: [1, 1, 1, .42]
            },
            this.ShotB = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 224,
                y: 224,
                w: 16,
                h: 16,
                uv: [.875, .875, .9375, .9375],
                col: [1, 1, 1, .42]
            },
            this.BitC = {
                tex: r,
                uuid: "79dbce50-3651-11e9-896b-71ac2c9717d8",
                x: 200,
                y: 176,
                w: 16,
                h: 16,
                uv: [.78125, .6875, .84375, .75],
                col: [1, 1, 1, 1]
            }
        }
    }
    class F extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.R0 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 0,
                y: 0,
                w: 32,
                h: 56,
                uv: [0, 0, .125, .21875],
                col: [1, 1, 1, 1]
            },
            this.R1 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 32,
                y: 0,
                w: 32,
                h: 56,
                uv: [.125, 0, .25, .21875],
                col: [1, 1, 1, 1]
            },
            this.R2 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 64,
                y: 0,
                w: 32,
                h: 56,
                uv: [.25, 0, .375, .21875],
                col: [1, 1, 1, 1]
            },
            this.R3 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 96,
                y: 0,
                w: 32,
                h: 56,
                uv: [.375, 0, .5, .21875],
                col: [1, 1, 1, 1]
            },
            this.R4 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 128,
                y: 0,
                w: 32,
                h: 56,
                uv: [.5, 0, .625, .21875],
                col: [1, 1, 1, 1]
            },
            this.R5 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 160,
                y: 0,
                w: 32,
                h: 56,
                uv: [.625, 0, .75, .21875],
                col: [1, 1, 1, 1]
            },
            this.R6 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 192,
                y: 0,
                w: 32,
                h: 56,
                uv: [.75, 0, .875, .21875],
                col: [1, 1, 1, 1]
            },
            this.R7 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 224,
                y: 0,
                w: 32,
                h: 56,
                uv: [.875, 0, 1, .21875],
                col: [1, 1, 1, 1]
            },
            this.L0 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 0,
                y: 56,
                w: 32,
                h: 56,
                uv: [0, .21875, .125, .4375],
                col: [1, 1, 1, 1]
            },
            this.L1 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 32,
                y: 56,
                w: 32,
                h: 56,
                uv: [.125, .21875, .25, .4375],
                col: [1, 1, 1, 1]
            },
            this.L2 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 64,
                y: 56,
                w: 32,
                h: 56,
                uv: [.25, .21875, .375, .4375],
                col: [1, 1, 1, 1]
            },
            this.L3 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 96,
                y: 56,
                w: 32,
                h: 56,
                uv: [.375, .21875, .5, .4375],
                col: [1, 1, 1, 1]
            },
            this.L4 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 128,
                y: 56,
                w: 32,
                h: 56,
                uv: [.5, .21875, .625, .4375],
                col: [1, 1, 1, 1]
            },
            this.L5 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 160,
                y: 56,
                w: 32,
                h: 56,
                uv: [.625, .21875, .75, .4375],
                col: [1, 1, 1, 1]
            },
            this.L6 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 192,
                y: 56,
                w: 32,
                h: 56,
                uv: [.75, .21875, .875, .4375],
                col: [1, 1, 1, 1]
            },
            this.L7 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 224,
                y: 56,
                w: 32,
                h: 56,
                uv: [.875, .21875, 1, .4375],
                col: [1, 1, 1, 1]
            },
            this.CW0 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 0,
                y: 112,
                w: 32,
                h: 56,
                uv: [0, .4375, .125, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW1 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 32,
                y: 112,
                w: 32,
                h: 56,
                uv: [.125, .4375, .25, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW2 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 64,
                y: 112,
                w: 32,
                h: 56,
                uv: [.25, .4375, .375, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW3 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 96,
                y: 112,
                w: 32,
                h: 56,
                uv: [.375, .4375, .5, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW4 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 128,
                y: 112,
                w: 32,
                h: 56,
                uv: [.5, .4375, .625, .65625],
                col: [1, 1, 1, 1]
            },
            this.CW5 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 160,
                y: 112,
                w: 32,
                h: 56,
                uv: [.625, .4375, .75, .65625],
                col: [1, 1, 1, 1]
            },
            this.RW0 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 192,
                y: 112,
                w: 32,
                h: 56,
                uv: [.75, .4375, .875, .65625],
                col: [1, 1, 1, 1]
            },
            this.LW0 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 224,
                y: 112,
                w: 32,
                h: 56,
                uv: [.875, .4375, 1, .65625],
                col: [1, 1, 1, 1]
            },
            this.RW1 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 0,
                y: 168,
                w: 32,
                h: 56,
                uv: [0, .65625, .125, .875],
                col: [1, 1, 1, 1]
            },
            this.LW1 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 32,
                y: 168,
                w: 32,
                h: 56,
                uv: [.125, .65625, .25, .875],
                col: [1, 1, 1, 1]
            },
            this.RW2 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 64,
                y: 168,
                w: 32,
                h: 56,
                uv: [.25, .65625, .375, .875],
                col: [1, 1, 1, 1]
            },
            this.LW2 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 96,
                y: 168,
                w: 32,
                h: 56,
                uv: [.375, .65625, .5, .875],
                col: [1, 1, 1, 1]
            },
            this.RW3 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 128,
                y: 168,
                w: 32,
                h: 56,
                uv: [.5, .65625, .625, .875],
                col: [1, 1, 1, 1]
            },
            this.LW3 = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 160,
                y: 168,
                w: 32,
                h: 56,
                uv: [.625, .65625, .75, .875],
                col: [1, 1, 1, 1]
            },
            this.BitB = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 8,
                y: 232,
                w: 16,
                h: 16,
                uv: [.03125, .90625, .09375, .96875],
                col: [1, 1, 1, 1]
            },
            this.BitR = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 40,
                y: 232,
                w: 16,
                h: 16,
                uv: [.15625, .90625, .21875, .96875],
                col: [1, 1, 1, 1]
            },
            this.ShotB = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 208,
                y: 208,
                w: 16,
                h: 16,
                uv: [.8125, .8125, .875, .875],
                col: [1, 1, 1, 1]
            },
            this.ShotR = {
                tex: r,
                uuid: "da229b30-4287-11e9-92e7-2f4b65878a35",
                x: 208,
                y: 224,
                w: 16,
                h: 16,
                uv: [.8125, .875, .875, .9375],
                col: [1, 1, 1, .5]
            }
        }
    }
    class U extends k {
        constructor(e, t, n) {
            super(e, t, n);
            const r = null;
            this.shot0000 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 8,
                y: 8,
                w: 16,
                h: 16,
                uv: [.03125, .03125, .09375, .09375],
                col: [1, 1, 1, 1]
            },
            this.shot0001 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 8,
                y: 32,
                w: 16,
                h: 16,
                uv: [.03125, .125, .09375, .1875],
                col: [1, 1, 1, 1]
            },
            this.shot0002 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 8,
                y: 56,
                w: 16,
                h: 16,
                uv: [.03125, .21875, .09375, .28125],
                col: [1, 1, 1, 1]
            },
            this.shot0003 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 8,
                y: 80,
                w: 16,
                h: 16,
                uv: [.03125, .3125, .09375, .375],
                col: [1, 1, 1, 1]
            },
            this.shot0004 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 8,
                y: 104,
                w: 16,
                h: 16,
                uv: [.03125, .40625, .09375, .46875],
                col: [1, 1, 1, 1]
            },
            this.shot0005 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 8,
                y: 128,
                w: 16,
                h: 16,
                uv: [.03125, .5, .09375, .5625],
                col: [1, 1, 1, 1]
            },
            this.shot0006 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 0,
                w: 32,
                h: 32,
                uv: [.625, 0, .75, .125],
                col: [1, 1, 1, 1]
            },
            this.shot0007 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 24,
                w: 32,
                h: 32,
                uv: [.625, .09375, .75, .21875],
                col: [1, 1, 1, 1]
            },
            this.shot0008 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 48,
                w: 32,
                h: 32,
                uv: [.625, .1875, .75, .3125],
                col: [1, 1, 1, 1]
            },
            this.shot0009 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 72,
                w: 32,
                h: 32,
                uv: [.625, .28125, .75, .40625],
                col: [1, 1, 1, 1]
            },
            this.shot0010 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 96,
                w: 32,
                h: 32,
                uv: [.625, .375, .75, .5],
                col: [1, 1, 1, 1]
            },
            this.shot0011 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 120,
                w: 32,
                h: 32,
                uv: [.625, .46875, .75, .59375],
                col: [1, 1, 1, 1]
            },
            this.shot0012 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 160,
                y: 144,
                w: 32,
                h: 32,
                uv: [.625, .5625, .75, .6875],
                col: [1, 1, 1, 1]
            },
            this.shot0013 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 8,
                w: 16,
                h: 16,
                uv: [.90625, .03125, .96875, .09375],
                col: [1, 1, 1, 1]
            },
            this.shot0014 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 32,
                w: 16,
                h: 16,
                uv: [.90625, .125, .96875, .1875],
                col: [1, 1, 1, 1]
            },
            this.shot0015 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 56,
                w: 16,
                h: 16,
                uv: [.90625, .21875, .96875, .28125],
                col: [1, 1, 1, 1]
            },
            this.shot0016 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 80,
                w: 16,
                h: 16,
                uv: [.90625, .3125, .96875, .375],
                col: [1, 1, 1, 1]
            },
            this.shot0017 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 104,
                w: 16,
                h: 16,
                uv: [.90625, .40625, .96875, .46875],
                col: [1, 1, 1, 1]
            },
            this.shot0018 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 128,
                w: 16,
                h: 16,
                uv: [.90625, .5, .96875, .5625],
                col: [1, 1, 1, 1]
            },
            this.shot0019 = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 232,
                y: 152,
                w: 16,
                h: 16,
                uv: [.90625, .59375, .96875, .65625],
                col: [1, 1, 1, 1]
            },
            this.shot_ssgL = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 96,
                y: 176,
                w: 16,
                h: 16,
                uv: [.375, .6875, .4375, .75],
                col: [1, 1, 1, 1]
            },
            this.shot_ssgS = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 112,
                y: 176,
                w: 16,
                h: 16,
                uv: [.4375, .6875, .5, .75],
                col: [1, 1, 1, 1]
            },
            this.shot_ll = {
                tex: r,
                uuid: "90bce620-36da-11e9-b339-fd6df69924ce",
                x: 32,
                y: 192,
                w: 32,
                h: 32,
                uv: [.125, .75, .25, .875],
                col: [1, 1, 1, 1]
            }
        }
    }
    class W {
        constructor(e) {
            this.SE_BOMB_STD = new C(e,1),
            this.SE_BUZZ = new C(e,1),
            this.SE_CHARGE = new C(e,1),
            this.SE_CLOSE = new C(e,1),
            this.SE_DAMAGE_L = new C(e,.3),
            this.SE_DAMAGE_S = new C(e,1),
            this.SE_ENEMY_DESTROY = new C(e,1),
            this.SE_GBREAK = new C(e,1),
            this.SE_GFLAME = new C(e,1),
            this.SE_HIT = new C(e,.5),
            this.SE_LLASER_2 = new C(e,1),
            this.SE_LVUP2 = new C(e,1),
            this.SE_MBLAST_HIT = new C(e,1),
            this.SE_MISSILE_1 = new C(e,1),
            this.SE_MISSILE_2 = new C(e,.3),
            this.SE_OCTSTAR = new C(e,1),
            this.SE_OCTSTAR_2 = new C(e,1),
            this.SE_SLASER2 = new C(e,1)
        }
    }
    class B {
        constructor(e) {
            this.BSR_00R = new D(e,1,26.943854875283446,85.44943310657597)
        }
    }
    var j = function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function u(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    };
    const V = new class {
        constructor() {
            this.imageLoader = new S,
            this.audioLoader = new L,
            this.audioManager = new P,
            this.BG1A = new A(this.imageLoader,"e0c98cf0-3774-11e9-b339-fd6df69924ce",[0, 1, 8, 9]),
            this.BG1B = new M(this.imageLoader,"e0c9db10-3774-11e9-b339-fd6df69924ce",[4, 5, 12, 13]),
            this.enemy = new N(this.imageLoader,"799628b0-3d76-11e9-8c3b-15cc4d5b0d33",[2]),
            this.exp_1 = new R(this.imageLoader,"c23ebad0-3f08-11e9-8c3b-15cc4d5b0d33",[3]),
            this.exp_2 = new O(this.imageLoader,"c23ebad1-3f08-11e9-8c3b-15cc4d5b0d33",[6]),
            this.Font = new I(this.imageLoader,"d7af17f0-3f0a-11e9-8c3b-15cc4d5b0d33",[7]),
            this.Player = new z(this.imageLoader,"79dbce50-3651-11e9-896b-71ac2c9717d8",[10]),
            this.Player2 = new F(this.imageLoader,"da229b30-4287-11e9-92e7-2f4b65878a35",[11]),
            this.Shot = new U(this.imageLoader,"90bce620-36da-11e9-b339-fd6df69924ce",[14]),
            this.Sound = new W(this.audioManager),
            this.Music = new B(this.audioManager)
        }
        load(e, t, n) {
            return j(this, void 0, void 0, function*() {
                n(0);
                let r = 0;
                const i = ()=>{
                    n(100 * (r += 1) / 28)
                }
                  , o = this.imageLoader.load(e, t, i)
                  , a = this.audioLoader.load(["1f245990-3c10-11e9-b339-fd6df69924ce", "12c584e0-3bd8-11e9-b339-fd6df69924ce", "12c584e2-3bd8-11e9-b339-fd6df69924ce", "12c5abf0-3bd8-11e9-b339-fd6df69924ce", "12c5abf1-3bd8-11e9-b339-fd6df69924ce", "12c5abf2-3bd8-11e9-b339-fd6df69924ce", "12c5abf3-3bd8-11e9-b339-fd6df69924ce", "12c5abf4-3bd8-11e9-b339-fd6df69924ce", "12c5d300-3bd8-11e9-b339-fd6df69924ce", "12c5d301-3bd8-11e9-b339-fd6df69924ce", "12c5d302-3bd8-11e9-b339-fd6df69924ce", "12c5d305-3bd8-11e9-b339-fd6df69924ce", "12c62121-3bd8-11e9-b339-fd6df69924ce", "12c62123-3bd8-11e9-b339-fd6df69924ce", "12c62124-3bd8-11e9-b339-fd6df69924ce", "12c62126-3bd8-11e9-b339-fd6df69924ce", "12c64830-3bd8-11e9-b339-fd6df69924ce", "12c64831-3bd8-11e9-b339-fd6df69924ce", "12c64835-3bd8-11e9-b339-fd6df69924ce"], t, i);
                yield Promise.all([o, a]),
                this.BG1A.update(),
                this.BG1B.update(),
                this.enemy.update(),
                this.exp_1.update(),
                this.exp_2.update(),
                this.Font.update(),
                this.Player.update(),
                this.Player2.update(),
                this.Shot.update(),
                n(100),
                yield this.audioManager.wait();
                const u = [this.Sound.SE_BOMB_STD.decode(this.audioLoader.get("12c584e0-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_BUZZ.decode(this.audioLoader.get("12c584e2-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_CHARGE.decode(this.audioLoader.get("12c5abf0-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_CLOSE.decode(this.audioLoader.get("12c5abf1-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_DAMAGE_L.decode(this.audioLoader.get("12c5abf2-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_DAMAGE_S.decode(this.audioLoader.get("12c5abf3-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_ENEMY_DESTROY.decode(this.audioLoader.get("12c5abf4-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_GBREAK.decode(this.audioLoader.get("12c5d300-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_GFLAME.decode(this.audioLoader.get("12c5d301-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_HIT.decode(this.audioLoader.get("12c5d302-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_LLASER_2.decode(this.audioLoader.get("12c5d305-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_LVUP2.decode(this.audioLoader.get("12c62121-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_MBLAST_HIT.decode(this.audioLoader.get("12c62123-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_MISSILE_1.decode(this.audioLoader.get("12c62124-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_MISSILE_2.decode(this.audioLoader.get("12c62126-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_OCTSTAR.decode(this.audioLoader.get("12c64830-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_OCTSTAR_2.decode(this.audioLoader.get("12c64831-3bd8-11e9-b339-fd6df69924ce")), this.Sound.SE_SLASER2.decode(this.audioLoader.get("12c64835-3bd8-11e9-b339-fd6df69924ce")), this.Music.BSR_00R.decode(this.audioLoader.get("1f245990-3c10-11e9-b339-fd6df69924ce"))];
                yield Promise.all(u)
            })
        }
    }
    ;
    var X = {
        vert: n(11),
        frag: n(12)
    };
    class H {
        constructor(e, t, n) {
            this.shaderInst = e.createShader(n),
            this.errorMessage = null,
            e.shaderSource(this.shader, t),
            e.compileShader(this.shader),
            e.getShaderParameter(this.shader, e.COMPILE_STATUS) || (this.errorMessage = e.getShaderInfoLog(this.shader))
        }
        get error() {
            return this.errorMessage
        }
        get shader() {
            return this.shaderInst
        }
    }
    class G {
        constructor(e, t) {
            this.gl = e;
            let n = {
                vert: null,
                frag: null,
                link: null
            };
            this.errorMessages = null;
            const r = new H(e,t.vert,e.VERTEX_SHADER);
            r.error && (n.vert = r.error);
            const i = new H(e,t.frag,e.FRAGMENT_SHADER);
            if (i.error && (n.frag = i.error),
            this.program = e.createProgram(),
            e.attachShader(this.program, r.shader),
            e.attachShader(this.program, i.shader),
            e.linkProgram(this.program),
            !e.getProgramParameter(this.program, e.LINK_STATUS)) {
                const t = e.getProgramInfoLog(this.program);
                n.link = t
            }
            (n.vert || n.frag || n.link) && (this.errorMessages = n)
        }
        getAttribLocation(e) {
            return this.gl.getAttribLocation(this.program, e)
        }
        setUniformF(e, t) {
            const n = this.gl
              , r = n.getUniformLocation(this.program, e);
            null !== r && n.uniform1f(r, t)
        }
        setUniformF2(e, t, n) {
            const r = this.gl
              , i = r.getUniformLocation(this.program, e);
            null !== i && r.uniform2f(i, t, n)
        }
        use() {
            return !this.errorMessages && (this.gl.useProgram(this.program),
            !0)
        }
        get error() {
            return this.errorMessages
        }
    }
    const $ = 2 * Math.PI
      , Q = {
        D0: 0 * $ / 256,
        D1: 1 * $ / 256,
        D2: 2 * $ / 256,
        D3: 3 * $ / 256,
        D4: 4 * $ / 256,
        D5: 5 * $ / 256,
        D6: 6 * $ / 256,
        D7: 7 * $ / 256,
        D8: 8 * $ / 256,
        D9: 9 * $ / 256,
        D10: 10 * $ / 256,
        D11: 11 * $ / 256,
        D12: 12 * $ / 256,
        D13: 13 * $ / 256,
        D14: 14 * $ / 256,
        D15: 15 * $ / 256,
        D16: 16 * $ / 256,
        D17: 17 * $ / 256,
        D18: 18 * $ / 256,
        D19: 19 * $ / 256,
        D20: 20 * $ / 256,
        D21: 21 * $ / 256,
        D22: 22 * $ / 256,
        D23: 23 * $ / 256,
        D24: 24 * $ / 256,
        D25: 25 * $ / 256,
        D26: 26 * $ / 256,
        D27: 27 * $ / 256,
        D28: 28 * $ / 256,
        D29: 29 * $ / 256,
        D30: 30 * $ / 256,
        D31: 31 * $ / 256,
        D32: 32 * $ / 256,
        D33: 33 * $ / 256,
        D34: 34 * $ / 256,
        D35: 35 * $ / 256,
        D36: 36 * $ / 256,
        D37: 37 * $ / 256,
        D38: 38 * $ / 256,
        D39: 39 * $ / 256,
        D40: 40 * $ / 256,
        D41: 41 * $ / 256,
        D42: 42 * $ / 256,
        D43: 43 * $ / 256,
        D44: 44 * $ / 256,
        D45: 45 * $ / 256,
        D46: 46 * $ / 256,
        D47: 47 * $ / 256,
        D48: 48 * $ / 256,
        D49: 49 * $ / 256,
        D50: 50 * $ / 256,
        D51: 51 * $ / 256,
        D52: 52 * $ / 256,
        D53: 53 * $ / 256,
        D54: 54 * $ / 256,
        D55: 55 * $ / 256,
        D56: 56 * $ / 256,
        D57: 57 * $ / 256,
        D58: 58 * $ / 256,
        D59: 59 * $ / 256,
        D60: 60 * $ / 256,
        D61: 61 * $ / 256,
        D62: 62 * $ / 256,
        D63: 63 * $ / 256,
        D64: 64 * $ / 256,
        D65: 65 * $ / 256,
        D66: 66 * $ / 256,
        D67: 67 * $ / 256,
        D68: 68 * $ / 256,
        D69: 69 * $ / 256,
        D70: 70 * $ / 256,
        D71: 71 * $ / 256,
        D72: 72 * $ / 256,
        D73: 73 * $ / 256,
        D74: 74 * $ / 256,
        D75: 75 * $ / 256,
        D76: 76 * $ / 256,
        D77: 77 * $ / 256,
        D78: 78 * $ / 256,
        D79: 79 * $ / 256,
        D80: 80 * $ / 256,
        D81: 81 * $ / 256,
        D82: 82 * $ / 256,
        D83: 83 * $ / 256,
        D84: 84 * $ / 256,
        D85: 85 * $ / 256,
        D86: 86 * $ / 256,
        D87: 87 * $ / 256,
        D88: 88 * $ / 256,
        D89: 89 * $ / 256,
        D90: 90 * $ / 256,
        D91: 91 * $ / 256,
        D92: 92 * $ / 256,
        D93: 93 * $ / 256,
        D94: 94 * $ / 256,
        D95: 95 * $ / 256,
        D96: 96 * $ / 256,
        D97: 97 * $ / 256,
        D98: 98 * $ / 256,
        D99: 99 * $ / 256,
        D100: 100 * $ / 256,
        D101: 101 * $ / 256,
        D102: 102 * $ / 256,
        D103: 103 * $ / 256,
        D104: 104 * $ / 256,
        D105: 105 * $ / 256,
        D106: 106 * $ / 256,
        D107: 107 * $ / 256,
        D108: 108 * $ / 256,
        D109: 109 * $ / 256,
        D110: 110 * $ / 256,
        D111: 111 * $ / 256,
        D112: 112 * $ / 256,
        D113: 113 * $ / 256,
        D114: 114 * $ / 256,
        D115: 115 * $ / 256,
        D116: 116 * $ / 256,
        D117: 117 * $ / 256,
        D118: 118 * $ / 256,
        D119: 119 * $ / 256,
        D120: 120 * $ / 256,
        D121: 121 * $ / 256,
        D122: 122 * $ / 256,
        D123: 123 * $ / 256,
        D124: 124 * $ / 256,
        D125: 125 * $ / 256,
        D126: 126 * $ / 256,
        D127: 127 * $ / 256,
        D128: 128 * $ / 256,
        D129: 129 * $ / 256,
        D130: 130 * $ / 256,
        D131: 131 * $ / 256,
        D132: 132 * $ / 256,
        D133: 133 * $ / 256,
        D134: 134 * $ / 256,
        D135: 135 * $ / 256,
        D136: 136 * $ / 256,
        D137: 137 * $ / 256,
        D138: 138 * $ / 256,
        D139: 139 * $ / 256,
        D140: 140 * $ / 256,
        D141: 141 * $ / 256,
        D142: 142 * $ / 256,
        D143: 143 * $ / 256,
        D144: 144 * $ / 256,
        D145: 145 * $ / 256,
        D146: 146 * $ / 256,
        D147: 147 * $ / 256,
        D148: 148 * $ / 256,
        D149: 149 * $ / 256,
        D150: 150 * $ / 256,
        D151: 151 * $ / 256,
        D152: 152 * $ / 256,
        D153: 153 * $ / 256,
        D154: 154 * $ / 256,
        D155: 155 * $ / 256,
        D156: 156 * $ / 256,
        D157: 157 * $ / 256,
        D158: 158 * $ / 256,
        D159: 159 * $ / 256,
        D160: 160 * $ / 256,
        D161: 161 * $ / 256,
        D162: 162 * $ / 256,
        D163: 163 * $ / 256,
        D164: 164 * $ / 256,
        D165: 165 * $ / 256,
        D166: 166 * $ / 256,
        D167: 167 * $ / 256,
        D168: 168 * $ / 256,
        D169: 169 * $ / 256,
        D170: 170 * $ / 256,
        D171: 171 * $ / 256,
        D172: 172 * $ / 256,
        D173: 173 * $ / 256,
        D174: 174 * $ / 256,
        D175: 175 * $ / 256,
        D176: 176 * $ / 256,
        D177: 177 * $ / 256,
        D178: 178 * $ / 256,
        D179: 179 * $ / 256,
        D180: 180 * $ / 256,
        D181: 181 * $ / 256,
        D182: 182 * $ / 256,
        D183: 183 * $ / 256,
        D184: 184 * $ / 256,
        D185: 185 * $ / 256,
        D186: 186 * $ / 256,
        D187: 187 * $ / 256,
        D188: 188 * $ / 256,
        D189: 189 * $ / 256,
        D190: 190 * $ / 256,
        D191: 191 * $ / 256,
        D192: 192 * $ / 256,
        D193: 193 * $ / 256,
        D194: 194 * $ / 256,
        D195: 195 * $ / 256,
        D196: 196 * $ / 256,
        D197: 197 * $ / 256,
        D198: 198 * $ / 256,
        D199: 199 * $ / 256,
        D200: 200 * $ / 256,
        D201: 201 * $ / 256,
        D202: 202 * $ / 256,
        D203: 203 * $ / 256,
        D204: 204 * $ / 256,
        D205: 205 * $ / 256,
        D206: 206 * $ / 256,
        D207: 207 * $ / 256,
        D208: 208 * $ / 256,
        D209: 209 * $ / 256,
        D210: 210 * $ / 256,
        D211: 211 * $ / 256,
        D212: 212 * $ / 256,
        D213: 213 * $ / 256,
        D214: 214 * $ / 256,
        D215: 215 * $ / 256,
        D216: 216 * $ / 256,
        D217: 217 * $ / 256,
        D218: 218 * $ / 256,
        D219: 219 * $ / 256,
        D220: 220 * $ / 256,
        D221: 221 * $ / 256,
        D222: 222 * $ / 256,
        D223: 223 * $ / 256,
        D224: 224 * $ / 256,
        D225: 225 * $ / 256,
        D226: 226 * $ / 256,
        D227: 227 * $ / 256,
        D228: 228 * $ / 256,
        D229: 229 * $ / 256,
        D230: 230 * $ / 256,
        D231: 231 * $ / 256,
        D232: 232 * $ / 256,
        D233: 233 * $ / 256,
        D234: 234 * $ / 256,
        D235: 235 * $ / 256,
        D236: 236 * $ / 256,
        D237: 237 * $ / 256,
        D238: 238 * $ / 256,
        D239: 239 * $ / 256,
        D240: 240 * $ / 256,
        D241: 241 * $ / 256,
        D242: 242 * $ / 256,
        D243: 243 * $ / 256,
        D244: 244 * $ / 256,
        D245: 245 * $ / 256,
        D246: 246 * $ / 256,
        D247: 247 * $ / 256,
        D248: 248 * $ / 256,
        D249: 249 * $ / 256,
        D250: 250 * $ / 256,
        D251: 251 * $ / 256,
        D252: 252 * $ / 256,
        D253: 253 * $ / 256,
        D254: 254 * $ / 256,
        D255: 255 * $ / 256,
        D256: 256 * $ / 256
    };
    class Y {
        get(e, t) {
            return "number" == typeof t ? t : t(e)
        }
        expr(e) {
            return t=>e(t)
        }
        rand(e, t) {
            return this.expr(n=>{
                const r = this.get(n, e)
                  , i = this.get(n, t);
                return Math.random() * (i - r) + r
            }
            )
        }
        neg(e) {
            return this.expr(t=>-this.get(t, e))
        }
        add(...e) {
            return this.expr(t=>e.map(e=>this.get(t, e)).reduce((e,t)=>e + t))
        }
        sub(...e) {
            return this.expr(t=>e.map(e=>this.get(t, e)).reduce((e,t)=>e - t))
        }
        mul(...e) {
            return this.expr(t=>e.map(e=>this.get(t, e)).reduce((e,t)=>e * t))
        }
        div(...e) {
            return this.expr(t=>e.map(e=>this.get(t, e)).reduce((e,t)=>e / t))
        }
        atan2(e, t) {
            return this.expr(n=>Math.atan2(this.get(n, t), this.get(n, e)))
        }
    }
    const K = Q
      , q = {
        linear: e=>e,
        inQuad: e=>e * e,
        outQuad: e=>-e * (e - 2),
        inOutQuad: e=>(e *= 2) < 1 ? .5 * e * e : .5 * (-(e -= 1) * (e - 2) + 1),
        inCubic: e=>e * e * e,
        outCubic: e=>(e -= 1) * e * e + 1,
        inOutCubic: e=>(e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2),
        inQuart: e=>e * e * e * e,
        outQuart: e=>-((e -= 1) * e * e * e - 1),
        inOutQuart: e=>(e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2),
        inQuint: e=>e * e * e * e * e,
        outQuint: e=>(e -= 1) * e * e * e * e + 1,
        inOutQuint: e=>(e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2),
        inBack: e=>e * e * (1.25 * e - .25) + 0,
        outBack: e=>{}
        ,
        inOutBack: e=>{}
    }
      , Z = new Y;
    var J, ee, te;
    !function(e) {
        e[e.NEXT = 0] = "NEXT",
        e[e.JMP = 1] = "JMP",
        e[e.END = 2] = "END"
    }(J || (J = {})),
    function(e) {
        e[e.None = 0] = "None",
        e[e.SyncDir = 1] = "SyncDir",
        e[e.SyncDirN = 2] = "SyncDirN",
        e[e.SyncPlayer = 3] = "SyncPlayer"
    }(ee || (ee = {}));
    class ne {
        constructor(e) {
            this.index = e
        }
        get(e) {
            return e.LOCAL_[this.index]
        }
        set(e, t) {
            e.LOCAL_[this.index] = Z.get(e, t)
        }
        add(e, t) {
            e.LOCAL_[this.index] += Z.get(e, t)
        }
    }
    class re {
        constructor() {
            this.code = [],
            this.localLevel = [],
            this.local = 0,
            this.maxLocal = 0,
            this.closed = !1
        }
        getCode() {
            if (0 !== this.localLevel.length)
                throw new Error("internal error : invalid local level.");
            return this.closed || (this.free(),
            this.closed = !0),
            this.code
        }
        shape(e, t=1) {
            this.code.push(n=>(n.shape = e,
            n.size = Z.get(n, t),
            n.cr = .5 * Math.min(e.w, e.h) * n.size,
            J.NEXT))
        }
        pos(e, t) {
            this.code.push(n=>(n.x = Z.get(n, e),
            n.y = Z.get(n, t),
            J.NEXT))
        }
        makeUserVar(e) {
            const t = this.makeLocal(1);
            return this.code.push(n=>(n.LOCAL_[t] = Z.get(n, e),
            J.NEXT)),
            new ne(t)
        }
        makeLocal(e=1) {
            const t = this.local;
            return this.local += e,
            this.maxLocal += e,
            t
        }
        pushLocalState() {
            const e = this.local;
            this.localLevel.push(e)
        }
        popLocalState() {
            const e = this.localLevel.pop();
            this.local = e
        }
        localRef(e) {
            return t=>t.LOCAL_[e]
        }
        nop(e) {
            this.pushLocalState();
            const t = this.makeLocal();
            this.code.push(n=>(n.LOCAL_[t] = Z.get(n, e),
            J.NEXT)),
            this.code.push(e=>{
                const n = e.LOCAL_[t];
                return n <= 0 ? J.NEXT : (e.LOCAL_[t] = n - 1,
                J.END)
            }
            ),
            this.popLocalState()
        }
        legacyMov(e, t, n) {
            this.pushLocalState();
            const r = this.makeLocal(2)
              , i = this.makeLocal(1);
            this.code.push(o=>{
                const a = Z.get(o, e)
                  , u = Z.get(o, t);
                return o.LOCAL_[r + 0] = Math.cos(a) * u,
                o.LOCAL_[r + 1] = Math.sin(a) * u,
                o.LOCAL_[i] = Z.get(o, n),
                J.NEXT
            }
            ),
            this.code.push(e=>{
                if (e.LOCAL_[i] <= 0)
                    return J.NEXT;
                e.LOCAL_[i] -= 1;
                const t = e.LOCAL_[r + 0]
                  , n = e.LOCAL_[r + 1];
                return e.x += t,
                e.y += n,
                J.END
            }
            ),
            this.popLocalState()
        }
        legacyAcc(e, t, n, r) {
            this.pushLocalState();
            const i = this.makeLocal(3)
              , o = this.makeLocal(1);
            this.code.push(a=>(a.LOCAL_[i + 0] = Z.get(a, e),
            a.LOCAL_[i + 1] = Z.get(a, t),
            a.LOCAL_[i + 2] = Z.get(a, n),
            a.LOCAL_[o] = Z.get(a, r),
            J.NEXT)),
            this.code.push(e=>{
                if (e.LOCAL_[o] <= 0)
                    return J.NEXT;
                e.LOCAL_[o] -= 1;
                const t = e.LOCAL_[i + 0]
                  , n = e.LOCAL_[i + 1]
                  , r = e.LOCAL_[i + 2];
                return e.x += Math.cos(t) * n,
                e.y += Math.sin(t) * n,
                e.LOCAL_[i + 1] += r,
                J.END
            }
            ),
            this.popLocalState()
        }
        move(e, t, n, r=q.linear, i=ee.None) {
            this.pushLocalState();
            const o = this.makeLocal(2)
              , a = this.makeLocal(2)
              , u = this.makeLocal(2)
              , s = this.makeLocal()
              , l = this.makeLocal();
            this.code.push(r=>{
                const c = Z.get(r, e) - r.x
                  , d = Z.get(r, t) - r.y;
                if (r.LOCAL_[o + 0] = r.x,
                r.LOCAL_[o + 1] = r.y,
                r.LOCAL_[a + 0] = c,
                r.LOCAL_[a + 1] = d,
                i === ee.SyncDir) {
                    const e = r.d % K.D256;
                    let t = Math.atan2(d, c) - e;
                    t < -Math.PI ? t += Math.PI : t > Math.PI && (t -= Math.PI),
                    r.LOCAL_[u + 0] = e,
                    r.LOCAL_[u + 1] = t
                }
                return r.LOCAL_[s] = Z.get(r, n),
                r.LOCAL_[l] = 0,
                J.NEXT
            }
            ),
            this.code.push(e=>{
                const t = e.LOCAL_[s]
                  , n = e.LOCAL_[l];
                if (n >= t)
                    return J.NEXT;
                const c = r(n / t);
                return e.x = e.LOCAL_[o + 0] + e.LOCAL_[a + 0] * c,
                e.y = e.LOCAL_[o + 1] + e.LOCAL_[a + 1] * c,
                i === ee.SyncDir ? e.d = e.LOCAL_[u + 0] + e.LOCAL_[u + 1] * c : i === ee.SyncPlayer && e.syncAngleToPlayer(),
                e.LOCAL_[l] = n + 1,
                J.END
            }
            ),
            this.popLocalState()
        }
        roll(e, t, n, r, i, o=q.linear, a=ee.SyncDir) {
            this.pushLocalState();
            const u = this.makeLocal(2)
              , s = this.makeLocal(2)
              , l = this.makeLocal(2)
              , c = this.makeLocal()
              , d = this.makeLocal();
            this.code.push(o=>{
                const a = Z.get(o, e)
                  , f = Z.get(o, t)
                  , h = o.x - a
                  , p = o.y - f;
                return o.LOCAL_[u + 0] = a,
                o.LOCAL_[u + 1] = f,
                o.LOCAL_[s + 0] = Math.sqrt(h * h + p * p),
                o.LOCAL_[s + 1] = Math.atan2(p, h),
                o.LOCAL_[l + 0] = Z.get(o, n),
                o.LOCAL_[l + 1] = Z.get(o, r),
                o.LOCAL_[c] = Z.get(o, i),
                o.LOCAL_[d] = 0,
                J.NEXT
            }
            ),
            this.code.push(e=>{
                const t = e.LOCAL_[c]
                  , n = e.LOCAL_[d];
                if (n >= t)
                    return J.NEXT;
                const r = o(n / t)
                  , i = e.LOCAL_[s + 0] + e.LOCAL_[l + 0] * r
                  , f = e.LOCAL_[s + 1] + e.LOCAL_[l + 1] * r;
                switch (e.x = e.LOCAL_[u + 0] + Math.cos(f) * i,
                e.y = e.LOCAL_[u + 1] + Math.sin(f) * i,
                a) {
                case ee.SyncDir:
                    {
                        const t = e.LOCAL_[l + 1];
                        0 !== t && (e.d = f + (t > 0 ? K.D64 : -K.D64));
                        break
                    }
                case ee.SyncDirN:
                    e.d = f;
                    break;
                case ee.SyncPlayer:
                    e.syncAngleToPlayer()
                }
                return e.LOCAL_[d] = n + 1,
                J.END
            }
            ),
            this.popLocalState()
        }
        label() {
            return this.code.length
        }
        jmp(e) {
            this.code.push(t=>(t.PC_ = e,
            J.JMP))
        }
        loop_inf(e) {
            const t = this.label();
            e(),
            this.jmp(t)
        }
        loop(e, t) {
            this.pushLocalState();
            const n = this.makeLocal()
              , r = this.makeLocal()
              , i = this.localRef(r);
            this.code.push(t=>(t.LOCAL_[n] = Z.get(t, e),
            t.LOCAL_[r] = 0,
            J.NEXT));
            const o = this.label();
            let a = -1;
            this.code.push(e=>e.LOCAL_[r] < e.LOCAL_[n] ? (e.LOCAL_[r] += 1,
            J.NEXT) : (e.PC_ = a,
            J.JMP)),
            t(i),
            this.jmp(o),
            a = this.label(),
            this.popLocalState()
        }
        kill() {
            this.code.push(e=>(e.kill(),
            J.END))
        }
        free() {
            this.code.push(e=>(e.free(),
            J.END))
        }
        set(e, t=0, n=0) {
            this.code.push(r=>{
                const i = r.x + Z.get(r, t)
                  , o = r.y + Z.get(r, n);
                return r.manager.set(e, i, o),
                J.NEXT
            }
            )
        }
        setAbs(e, t, n) {
            this.code.push(r=>(r.manager.set(e, Z.get(r, t), Z.get(r, n)),
            J.NEXT))
        }
        change(e) {
            this.code.push(t=>(t.CODE_ = e,
            t.PC_ = 0,
            J.JMP))
        }
        custom(e) {
            this.code.push(e)
        }
        attack(e) {
            this.code.push(t=>{
                const n = t.manager.shotCmd();
                return n.pos(t),
                e(t, n),
                J.NEXT
            }
            )
        }
        autoCommand(e, t) {
            this.code.push(n=>(n.setAutoCommand(t, Z.get(n, e)),
            J.NEXT))
        }
        autoAttack(e, t) {
            const n = new re;
            n.attack(t),
            n.custom(e=>J.END),
            this.autoCommand(e, n.getCode())
        }
        stopAuto() {
            this.code.push(e=>(e.setAutoCommand(null, 0),
            J.NEXT))
        }
        onKill(e) {
            this.code.push(t=>(t.ONKILL_ = e,
            J.NEXT))
        }
        get x() {
            return e=>e.x
        }
        set x(e) {
            this.code.push(t=>(t.x = Z.get(t, e),
            J.NEXT))
        }
        get y() {
            return e=>e.y
        }
        set y(e) {
            this.code.push(t=>(t.y = Z.get(t, e),
            J.NEXT))
        }
        get d() {
            return e=>e.d
        }
        set d(e) {
            this.code.push(t=>(t.d = Z.get(t, e),
            J.NEXT))
        }
        get sp() {
            return e=>e.sp
        }
        set sp(e) {
            this.code.push(t=>(t.sp = Z.get(t, e),
            J.NEXT))
        }
        setFlag(e) {
            this.code.push(t=>(t.flag |= e,
            J.NEXT))
        }
        removeFlag(e) {
            this.code.push(t=>(t.flag &= ~e,
            J.NEXT))
        }
    }
    class ie {
        constructor(e, t) {
            let n = null;
            const r = Math.max(6, 6 * t);
            r < 65536 ? (n = new Int16Array(r),
            this.bufferType = e.UNSIGNED_SHORT) : (n = new Int32Array(r),
            this.bufferType = e.UNSIGNED_INT);
            for (let e = 0, t = 0; e < r; e += 6,
            t += 4)
                n[e + 0] = t + 0,
                n[e + 1] = t + 1,
                n[e + 2] = t + 2,
                n[e + 3] = t + 2,
                n[e + 4] = t + 3,
                n[e + 5] = t + 0;
            this.buffer = e.createBuffer(),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.buffer),
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
        }
        getPrimVertexSize() {
            return 4
        }
        draw(e, t) {
            const n = 6 * t;
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.buffer),
            e.drawElements(e.TRIANGLES, n, this.bufferType, 0)
        }
    }
    class oe {
        constructor(e, t, n, r=null) {
            this.buffer = e.createBuffer(),
            this.data = new Float32Array(t * n),
            this.elementSize = n,
            this.pos = 0,
            this.attribLocation = r,
            e.bindBuffer(e.ARRAY_BUFFER, this.buffer),
            e.bufferData(e.ARRAY_BUFFER, this.data, e.STREAM_DRAW),
            e.bindBuffer(e.ARRAY_BUFFER, null)
        }
        clear() {
            this.pos = 0
        }
        writeFloat(e) {
            this.data[this.pos] = e,
            this.pos += 1
        }
        writeFloat2(e, t) {
            const n = this.pos;
            this.data[n] = e,
            this.data[n + 1] = t,
            this.pos += 2
        }
        writeFloat3(e, t, n) {
            const r = this.pos;
            this.data[r] = e,
            this.data[r + 1] = t,
            this.data[r + 2] = n,
            this.pos += 3
        }
        writeFloat4(e, t, n, r) {
            const i = this.pos;
            this.data[i] = e,
            this.data[i + 1] = t,
            this.data[i + 2] = n,
            this.data[i + 3] = r,
            this.pos += 4
        }
        writeArray(e) {
            this.data.set(e, this.pos),
            this.pos += e.length
        }
        setAttribLocation(e) {
            this.attribLocation = e
        }
        apply(e) {
            const t = this.data.subarray(0, this.pos)
              , n = this.attribLocation;
            e.bindBuffer(e.ARRAY_BUFFER, this.buffer),
            e.bufferSubData(e.ARRAY_BUFFER, 0, t),
            e.enableVertexAttribArray(n),
            e.vertexAttribPointer(n, this.elementSize, e.FLOAT, !1, 0, 0),
            this.pos = 0
        }
    }
    class ae {
        constructor(e, t, n, r, i) {
            t.use(),
            this.gl = e,
            this.effect = t,
            this.indexBuffer = r,
            this.maxPrims = i,
            this.curPrims = 0;
            const o = i * r.getPrimVertexSize();
            this.arrayBuffers = n.map(n=>{
                const r = t.getAttribLocation(n.attribName);
                return new oe(e,o,n.attirbElementSize,r)
            }
            )
        }
        setVirtualSize(e, t) {
            this.effect.setUniformF2("virtualSize", e, t)
        }
        get(e) {
            return this.arrayBuffers[e]
        }
        addPrim(e) {
            this.curPrims + e > this.maxPrims && this.draw(),
            this.curPrims += e
        }
        addLinePoints(e) {
            this.curPrims + e > this.maxPrims && this.drawLine(),
            this.curPrims += e
        }
        draw() {
            if (this.curPrims <= 0)
                return;
            const e = this.gl;
            for (const t of this.arrayBuffers)
                t.apply(e);
            this.indexBuffer.draw(e, this.curPrims),
            this.curPrims = 0
        }
        drawLine() {
            if (this.curPrims <= 0)
                return;
            const e = this.gl;
            for (const t of this.arrayBuffers)
                t.apply(e);
            e.drawArrays(e.LINES, 0, this.curPrims),
            this.curPrims = 0
        }
    }
    class ue {
        constructor(e, t) {
            this.gl = e,
            this.lastTexture = null,
            this.alphaMode = fe.Normal,
            this.debugLineMode = !1,
            this.whiteTexture = t;
            const n = new G(e,X);
            n.error && console.error(n.error);
            const r = new ie(e,8192);
            this.buffers = new ae(e,n,[{
                attribName: "inPos",
                attirbElementSize: 2
            }, {
                attribName: "inUV",
                attirbElementSize: 2
            }, {
                attribName: "inColor",
                attirbElementSize: 4
            }],r,8192)
        }
        setVirtualSize(e) {
            this.buffers.setVirtualSize(e[0], e[1])
        }
        flush() {
            this.debugLineMode ? this.buffers.drawLine() : this.buffers.draw()
        }
        setAlphaMode(e) {
            const t = this.gl;
            switch (this.alphaMode !== e && this.flush(),
            this.alphaMode = e,
            e) {
            case fe.Add:
                t.enable(t.BLEND),
                t.blendFunc(t.SRC_ALPHA, t.ONE);
                break;
            case fe.None:
                t.disable(t.BLEND);
                break;
            case fe.Shadow:
                t.enable(t.BLEND),
                t.blendFunc(t.SRC_ALPHA_SATURATE, t.ONE_MINUS_SRC_ALPHA);
                break;
            case fe.Normal:
                t.enable(t.BLEND),
                t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA)
            }
        }
        beginDebugLineMode() {
            if (!this.debugLineMode && (this.flush(),
            this.debugLineMode = !0,
            this.lastTexture !== this.whiteTexture)) {
                const e = this.gl;
                e.activeTexture(e.TEXTURE0),
                e.bindTexture(e.TEXTURE_2D, this.whiteTexture),
                this.lastTexture = this.whiteTexture
            }
        }
        endDebugLineMode() {
            this.debugLineMode && (this.flush(),
            this.debugLineMode = !1)
        }
        setTexture(e, t=!1) {
            if (!t && e === this.lastTexture)
                return;
            this.flush();
            const n = this.gl;
            n.bindTexture(n.TEXTURE_2D, e),
            this.lastTexture = e
        }
        writeUVCol(e) {
            const t = this.buffers.get(1)
              , n = this.buffers.get(2);
            t.writeFloat2(e.uv[0], e.uv[1]),
            t.writeFloat2(e.uv[2], e.uv[1]),
            t.writeFloat2(e.uv[2], e.uv[3]),
            t.writeFloat2(e.uv[0], e.uv[3]);
            for (let t = 0; t < 4; t++)
                n.writeArray(e.col)
        }
        writeUVCol2(e, t) {
            const n = this.buffers.get(1)
              , r = this.buffers.get(2);
            n.writeFloat2(e.uv[0], e.uv[1]),
            n.writeFloat2(e.uv[2], e.uv[1]),
            n.writeFloat2(e.uv[2], e.uv[3]),
            n.writeFloat2(e.uv[0], e.uv[3]);
            for (let e = 0; e < 4; e++)
                r.writeArray(t)
        }
        writeUVCol3(e, t, n) {
            const r = this.buffers.get(1)
              , i = this.buffers.get(2);
            r.writeFloat2(e.uv[0], e.uv[1]),
            r.writeFloat2(e.uv[2], e.uv[1]),
            r.writeFloat2(e.uv[2], e.uv[3]),
            r.writeFloat2(e.uv[0], e.uv[3]),
            i.writeArray(t),
            i.writeArray(t),
            i.writeArray(n),
            i.writeArray(n)
        }
        writeLinePos(e, t, n) {
            const r = this.buffers.get(0)
              , i = this.buffers.get(1)
              , o = this.buffers.get(2);
            r.writeFloat2(e, t),
            i.writeFloat2(0, 0),
            o.writeArray(n)
        }
        line(e, t, n, r, i) {
            this.writeLinePos(e, t, i),
            this.writeLinePos(n, r, i),
            this.buffers.addLinePoints(2)
        }
        rect(e, t, n, r, i) {
            this.writeLinePos(e, t, i),
            this.writeLinePos(n, t, i),
            this.writeLinePos(n, t, i),
            this.writeLinePos(n, r, i),
            this.writeLinePos(n, r, i),
            this.writeLinePos(e, r, i),
            this.writeLinePos(e, r, i),
            this.writeLinePos(e, t, i),
            this.buffers.addLinePoints(8)
        }
        circle(e, t, n, r) {
            let i = e + n
              , o = t;
            for (let a = 1; a <= 8; a++) {
                const u = K.D256 * a / 8
                  , s = e + n * Math.cos(u)
                  , l = t + n * Math.sin(u);
                this.writeLinePos(i, o, r),
                this.writeLinePos(s, l, r),
                i = s,
                o = l
            }
            this.buffers.addLinePoints(16)
        }
        render(e, t, n, r) {
            this.setTexture(e.tex),
            this.buffers.addPrim(1);
            const i = this.buffers.get(0);
            let {w: o, h: a} = e;
            o *= r,
            a *= r,
            i.writeFloat2(t, n),
            i.writeFloat2(t + o, n),
            i.writeFloat2(t + o, n + a),
            i.writeFloat2(t, n + a),
            this.writeUVCol(e)
        }
        renderColor(e, t, n, r, i) {
            this.setTexture(e.tex),
            this.buffers.addPrim(1);
            const o = this.buffers.get(0);
            let {w: a, h: u} = e;
            a *= i,
            u *= i,
            o.writeFloat2(t, n),
            o.writeFloat2(t + a, n),
            o.writeFloat2(t + a, n + u),
            o.writeFloat2(t, n + u),
            this.writeUVCol2(e, r)
        }
        renderC(e, t, n, r) {
            this.setTexture(e.tex),
            this.buffers.addPrim(1);
            const i = this.buffers.get(0);
            let {w: o, h: a} = e;
            o *= r *= .5,
            a *= r,
            i.writeFloat2(t - o, n - a),
            i.writeFloat2(t + o, n - a),
            i.writeFloat2(t + o, n + a),
            i.writeFloat2(t - o, n + a),
            this.writeUVCol(e)
        }
        renderCR(e, t, n, r, i) {
            this.setTexture(e.tex),
            this.buffers.addPrim(1);
            const o = this.buffers.get(0)
              , {w: a, h: u} = e;
            i *= .5;
            const s = Math.cos(r) * i
              , l = Math.sin(r) * i
              , c = s * a - l * u
              , d = s * a + l * u
              , f = l * a + s * u
              , h = l * a - s * u;
            o.writeFloat2(t - c, n - f),
            o.writeFloat2(t + d, n + h),
            o.writeFloat2(t + c, n + f),
            o.writeFloat2(t - d, n - h),
            this.writeUVCol(e)
        }
        renderLine(e, t, n, r, i, o) {
            this.setTexture(e.tex),
            this.buffers.addPrim(1);
            const a = this.buffers.get(0)
              , u = Math.atan2(n - i, t - r) - K.D64
              , s = Math.cos(u) * o
              , l = Math.sin(u) * o;
            a.writeFloat2(t + s, n + l),
            a.writeFloat2(r + s, i + l),
            a.writeFloat2(r - s, i - l),
            a.writeFloat2(t - s, n - l),
            this.writeUVCol(e)
        }
        renderLineC(e, t, n, r, i, o, a, u) {
            this.setTexture(e.tex),
            this.buffers.addPrim(1);
            const s = this.buffers.get(0)
              , l = Math.atan2(n - i, t - r) - K.D64
              , c = Math.cos(l) * o
              , d = Math.sin(l) * o;
            s.writeFloat2(t + c, n + d),
            s.writeFloat2(r + c, i + d),
            s.writeFloat2(r - c, i - d),
            s.writeFloat2(t - c, n - d),
            this.writeUVCol3(e, a, u)
        }
    }
    !function(e) {
        e[e.Left = 0] = "Left",
        e[e.Right = 1] = "Right",
        e[e.Center = 2] = "Center"
    }(te || (te = {}));
    class se {
        constructor(e, t) {
            this.dic = new Map,
            this.emptyWidth = e,
            this.deltaX = t
        }
        def(e, t) {
            const n = this.dic;
            let r = 0;
            for (const i of e)
                n.set(i, t[r]),
                r += 1
        }
        draw(e, t, n, r, i, o=te.Left) {
            const a = this.dic
              , u = this.emptyWidth
              , s = this.deltaX;
            t += this.getAlignDelta(r, o);
            for (const o of r) {
                const r = a.get(o);
                r ? (e.renderColor(r, t, n, i),
                t += r.w) : t += u,
                t += s
            }
        }
        drawS(e, t, n, r, i, o=te.Left, a=1) {
            const u = this.dic
              , s = this.emptyWidth * a
              , l = this.deltaX * a;
            t += this.getAlignDelta(r, o) * a;
            for (const o of r) {
                const r = u.get(o);
                r ? (e.renderColor(r, t, n, i, a),
                t += r.w * a) : t += s,
                t += l
            }
        }
        getAlignDelta(e, t) {
            if (t !== te.Left) {
                const n = this.getWidth(e) - this.deltaX;
                return t === te.Center ? -n / 2 : -n
            }
            return this.deltaX / 2
        }
        getWidth(e) {
            const t = this.dic
              , n = this.emptyWidth
              , r = this.deltaX;
            let i = 0;
            for (const o of e) {
                const e = t.get(o);
                i += r + (e ? e.w : n)
            }
            return i
        }
    }
    class le extends se {
        constructor() {
            super(16, -4);
            const e = V.Font
              , t = [e.t00, e.t01, e.t02, e.t03, e.t04, e.t05, e.t06, e.t07, e.t08, e.t09, e.t10, e.t11, e.t12, e.t13, e.t14, e.t15]
              , n = [e.t16, e.t17, e.t18, e.t19, e.t20, e.t21, e.t22, e.t23, e.t24, e.t25]
              , r = [e.t26, e.t27, e.t28, e.t29, e.t30, e.t31, e.t32, e.t33, e.t34, e.t35, e.t36, e.t37, e.t38, e.t39, e.t40, e.t41]
              , i = [e.t42, e.t43, e.t44, e.t45, e.t46, e.t47, e.t48, e.t49, e.t50, e.t51]
              , o = [e.t52, e.t53, e.t54, e.t55, e.t56, e.t57, e.t58, e.t59, e.t60, e.t61]
              , a = [e.t62, e.t63, e.t64, e.t65, e.t66, e.t67, e.t68, e.t69, e.t70, e.t71, e.t72, e.t73, e.t74, e.t75, e.t76, e.t77]
              , u = [e.t78, e.t79, e.t80, e.t81, e.t82, e.t83, e.t84, e.t85, e.t86, e.t87, e.t88, e.t89, e.t90, e.t91, e.t94];
            this.def("ABCDEFGHIJKLMNOP", t),
            this.def("QRSTUVWXYZ", n),
            this.def("abcdefghijklmnop", r),
            this.def("qrstuvwxyz", i),
            this.def("0123456789", o),
            this.def("!?\"#$%&'()+-*/=,", a),
            this.def(".;:@~\\[]{}^<>_|", u),
            this.def("?", [e.t92]),
            this.def("死", [e.t26]),
            this.def("カスリ", [e.KA, e.SU, e.RI])
        }
    }
    const ce = new class {
        constructor() {
            this.White = [1, 1, 1, 1],
            this.Black = [0, 0, 0, 1],
            this.Red = [1, 0, 0, 1],
            this.Pink = [1, .5, .5, 1],
            this.Green = [0, 1, 0, 1],
            this.Blue = [0, 0, 1, 1],
            this.Cyan = [0, 1, 1, 1],
            this.Orange = [1, .8, 0, 1],
            this.Yellow = [1, 1, 0, 1],
            this.LightGray = [.75, .75, .75, 1],
            this.Gray = [.5, .5, .5, 1],
            this.V99Gray = [.1875, .1875, .1875, 1],
            this.V99GraySub = [.15, .15, .15, 1]
        }
    }
    ;
    class de {
        constructor(e) {
            this.gl = e,
            this.tex = this.createTexture(e),
            this.fb = e.createFramebuffer(),
            this.size = {
                x: -1,
                y: -1
            }
        }
        createTexture(e) {
            const t = e.createTexture();
            return e.bindTexture(e.TEXTURE_2D, t),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
            t
        }
        resizeBuffer(e, t) {
            const n = this.gl
              , r = this.tex
              , i = this.fb;
            n.bindTexture(n.TEXTURE_2D, r),
            n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, e, t, 0, n.RGBA, n.UNSIGNED_BYTE, null),
            n.bindFramebuffer(n.FRAMEBUFFER, i),
            n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, r, 0)
        }
        resizeAndBind(e, t) {
            e !== this.size.x || t !== this.size.y ? (this.resizeBuffer(e, t),
            this.size.x = e,
            this.size.y = t) : this.bindBuffer()
        }
        bindBuffer() {
            const e = this.gl;
            e.bindFramebuffer(e.FRAMEBUFFER, this.fb)
        }
        unbindBuffer() {
            const e = this.gl;
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        bindTexture() {
            const e = this.gl;
            e.bindTexture(e.TEXTURE_2D, this.tex)
        }
    }
    var fe, he;
    !function(e) {
        e[e.None = 0] = "None",
        e[e.Normal = 1] = "Normal",
        e[e.Add = 2] = "Add",
        e[e.Shadow = 3] = "Shadow"
    }(fe || (fe = {}));
    class pe {
        constructor(e, t) {
            this.canvas = e;
            const n = e.getContext("webgl", {
                antialias: !1,
                depth: !1,
                alpha: !1,
                stencil: !1,
                preserveDrawingBuffer: !0,
                powerPreference: "high-performance"
            });
            this.gl = n,
            this.rbatch = new ue(n,this.createColorTexture(ce.White)),
            this.bsrFont = new le,
            this.virtualSize = t,
            this.rbatch.setAlphaMode(fe.Normal),
            this.rbatch.setVirtualSize(t),
            n.disable(n.DITHER),
            n.disable(n.DEPTH_TEST),
            n.disable(n.STENCIL_TEST),
            n.disable(n.POLYGON_OFFSET_FILL),
            n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
            n.disable(n.SAMPLE_COVERAGE)
        }
        setVirtualSize(e) {
            this.rbatch.setVirtualSize(e)
        }
        resetVirtualSize() {
            this.rbatch.setVirtualSize(this.virtualSize)
        }
        setAlphaMode(e) {
            this.rbatch.setAlphaMode(e)
        }
        setTexture(e=null) {
            e ? e.tex : this.defaultTexture;
            this.rbatch.setTexture(e, !0)
        }
        createColorTexture(e) {
            const t = new Uint8ClampedArray(e.map(e=>255 * e))
              , n = new ImageData(t,1,1);
            return this.createTexture(n)
        }
        createFrameBuffer() {
            return new de(this.gl)
        }
        createTexture(e) {
            const t = this.gl
              , n = t.createTexture();
            return t.bindTexture(t.TEXTURE_2D, n),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
            t.generateMipmap(t.TEXTURE_2D),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT),
            t.bindTexture(t.TEXTURE_2D, null),
            this.defaultTexture = n,
            n
        }
        setViewport(e, t, n, r) {
            this.gl.viewport(e, t, n, r)
        }
        flush() {
            this.rbatch.flush()
        }
        beginDebugLine() {
            this.rbatch.beginDebugLineMode()
        }
        endDebugLine() {
            this.rbatch.endDebugLineMode()
        }
        clear(e, t, n, r, i) {
            const o = this.gl;
            o.clearColor(i[0], i[1], i[2], i[3]),
            o.clear(o.COLOR_BUFFER_BIT)
        }
        render(e, t, n, r=1) {
            this.rbatch.render(e, t, n, r)
        }
        renderColor(e, t, n, r, i=1) {
            this.rbatch.renderColor(e, t, n, r, i)
        }
        renderC(e, t, n, r) {
            this.rbatch.renderC(e, t, n, r)
        }
        renderCR(e, t, n, r, i) {
            this.rbatch.renderCR(e, t, n, r, i)
        }
        renderLine(e, t, n, r, i, o) {
            this.rbatch.renderLine(e, t, n, r, i, o)
        }
        renderLineC(e, t, n, r, i, o, a, u) {
            this.rbatch.renderLineC(e, t, n, r, i, o, a, u)
        }
        debugLine(e, t, n, r, i) {
            this.rbatch.line(e, t, n, r, i)
        }
        debugRect(e, t, n, r, i) {
            this.rbatch.rect(e, t, n, r, i)
        }
        debugCircle(e, t, n, r) {
            this.rbatch.circle(e, t, n, r)
        }
        text(e, t, n, r=ce.White, i=te.Left) {
            this.bsrFont.draw(this, e, t, n, r, i)
        }
        textS(e, t, n, r=ce.White, i=te.Left, o) {
            this.bsrFont.drawS(this, e, t, n, r, i, o)
        }
    }
    !function(e) {
        e[e.Normal = 0] = "Normal",
        e[e.Simple = 1] = "Simple",
        e[e.None = 2] = "None"
    }(he || (he = {}));
    class me {
        constructor() {
            this.fps = 0,
            this.mute = !1,
            this.volume = .8,
            this.renderMode = s() ? he.Normal : he.None,
            this.player = 0,
            this.count = 99
        }
    }
    class ve {
        constructor() {
            this.deserialize()
        }
        isFirstTime() {
            return this.firstTime
        }
        clear() {
            localStorage.clear()
        }
        deserialize() {
            this.data = new me,
            localStorage.length < 6 ? this.firstTime = !0 : this.firstTime = !1,
            this.fps = parseInt(localStorage.getItem("fps"), 10),
            this.mute = "true" === localStorage.getItem("mute"),
            this.volume = parseFloat(localStorage.getItem("volume")),
            this.renderMode = parseInt(localStorage.getItem("renderMode"), 10),
            this.player = parseInt(localStorage.getItem("player"), 10),
            this.count = parseInt(localStorage.getItem("count"), 10)
        }
        get fps() {
            return this.data.fps
        }
        set fps(e) {
            60 !== e && 30 !== e && 0 !== e && (e = 0),
            this.data.fps = e,
            localStorage.setItem("fps", e.toString())
        }
        get mute() {
            return this.data.mute
        }
        set mute(e) {
            e = !!e,
            this.data.mute = e,
            localStorage.setItem("mute", e.toString())
        }
        get volume() {
            return this.data.volume
        }
        set volume(e) {
            isNaN(e) && (e = .8),
            e < 0 && (e = 0),
            e > 1 && (e = 1),
            this.data.volume = e,
            localStorage.setItem("volume", e.toString())
        }
        get renderMode() {
            return this.data.renderMode
        }
        set renderMode(e) {
            switch (isNaN(e) && (e = s() ? he.Normal : he.None),
            e) {
            case he.None:
            case he.Simple:
            case he.Normal:
                break;
            default:
                e = he.Normal
            }
            s() || (e = he.None),
            this.data.renderMode = e,
            localStorage.setItem("renderMode", e.toString())
        }
        get player() {
            return this.data.player
        }
        set player(e) {
            isNaN(e) || 1 !== e && (e = 0),
            this.data.player = e,
            localStorage.setItem("player", e.toString())
        }
        get count() {
            return this.data.count
        }
        set count(e) {
            isNaN(e) ? e = 7 : (e < 0 || e > 7) && (e = 7),
            this.data.count = e,
            localStorage.setItem("count", e.toString())
        }
    }
    class ge {
        constructor() {
            this.fps = 0,
            this.frames = 0,
            this.startMs = this.startTime = this.prevTime = performance.now(),
            this.renderMs = 0,
            this.updateMs = 0,
            this.debugMs = 0,
            this.memUsed = 0,
            this.memSize = 0
        }
        begin() {
            this.startTime = performance.now()
        }
        end() {
            this.frames += 1;
            const e = performance.now();
            this.startTime;
            e >= this.prevTime + 1e3 && (this.fps = 1e3 * this.frames / (e - this.prevTime),
            this.prevTime = e,
            this.frames = 0)
        }
        beginUpdate() {
            this.startMs = performance.now()
        }
        endUpdate() {
            this.updateMs = performance.now() - this.startMs
        }
        beginRender() {
            this.startMs = performance.now()
        }
        endRender() {
            this.renderMs = performance.now() - this.startMs
        }
        beginDebug() {
            this.startMs = performance.now()
        }
        endDebug() {
            this.debugMs = performance.now() - this.startMs
        }
        getFps() {
            return this.fps.toFixed(1)
        }
        padding(e) {
            const t = e.toFixed(0);
            return t.length <= 1 ? " " + t : t
        }
        getUpdateMs() {
            return this.updateMs
        }
        getRenderMs() {
            return this.renderMs
        }
        getDebugMs() {
            return this.debugMs
        }
    }
    class ye {
        constructor(e, t) {
            this.render = t,
            this.name = e,
            this.start = 0,
            this.passed = 0
        }
        beginProf() {
            this.start = performance.now()
        }
        endProf() {
            this.passed = performance.now() - this.start
        }
    }
    class be {
        constructor() {
            this.list = []
        }
        profIdx() {
            const e = this.list.length;
            return e < 10 ? "0" + e : "" + e
        }
        setAlphaMode(e) {
            const t = this.profIdx() + ":α" + fe[e]
              , n = new ye(t,t=>t.setAlphaMode(e));
            this.list.push(n)
        }
        addFunc(e, t) {
            const n = new ye(this.profIdx() + ":" + e,t);
            this.list.push(n)
        }
        addPool(e, t) {
            const n = new ye(this.profIdx() + ":" + e,e=>t.render(e));
            this.list.push(n)
        }
        render(e) {
            const t = this.list;
            for (const n of t)
                n.beginProf(),
                n.render(e),
                n.endProf();
            e.flush()
        }
        debug(e) {
            const t = this.list
              , n = [];
            for (const e of t)
                null !== e.name && n.push(a.float(e.name, e.passed));
            e.updateStruct("RenderList", n)
        }
    }
    const xe = 0
      , we = 320
      , _e = (xe + we) / 2
      , Ee = 0
      , Se = 480
      , ke = (Ee + Se) / 2;
    var Te, Ce;
    !function(e) {
        e[e.Active = 0] = "Active",
        e[e.Free = 1] = "Free"
    }(Te || (Te = {}));
    class De {
        constructor() {
            this.state = Te.Free
        }
        init() {
            this.state = Te.Active
        }
        kill() {
            this.free()
        }
        free() {
            this.state = Te.Free
        }
    }
    class Pe {
        constructor(e, t) {
            const n = [];
            for (let r = 0; r < t; r++)
                n[r] = e();
            this.taskPool = n,
            this.freeTasks = this.taskPool.slice(),
            this.activeTasks = []
        }
        count() {
            return this.activeTasks.length
        }
        spawn() {
            const e = this.freeTasks.pop() || null;
            return null !== e && (e.init(),
            this.activeTasks.push(e)),
            e
        }
        forEach(e) {
            const t = this.activeTasks;
            for (const n of t)
                n.state === Te.Active && e(n)
        }
        find(e) {
            const t = this.activeTasks;
            for (const n of t)
                if (n.state === Te.Active && e(n))
                    return n;
            return null
        }
        gbc() {
            const e = this.activeTasks
              , t = e.length;
            let n = 0;
            for (let r = 0; r < t; r++) {
                const t = e[r];
                t.state !== Te.Free ? (r !== n && (e[n] = t),
                n += 1) : this.freeTasks.push(t)
            }
            t !== n && (e.length = n)
        }
        killAll() {
            const e = this.activeTasks;
            for (const t of e)
                t.kill();
            this.gbc()
        }
        freeAll() {
            const e = this.activeTasks;
            for (const t of e)
                t.free();
            this.gbc()
        }
    }
    class Le extends De {
        constructor() {
            super(),
            this.init()
        }
        setParam(e, t, n, r, i, o) {
            this.x = e,
            this.y = t,
            this.d = Math.random() * Q.D256,
            this.v = r,
            this.scale = n,
            this.count = 0,
            this.anmWeight = o,
            this.anmPtnList = i,
            this.ptn = i[0]
        }
        update() {
            const e = this.anmPtnList
              , t = Math.floor(this.count / this.anmWeight);
            if (t >= e.length)
                return void this.free();
            this.ptn = e[t],
            this.count += 1;
            const n = this.v;
            this.v *= .99,
            this.x += Math.cos(this.d) * n,
            this.y += Math.sin(this.d) * n
        }
        render(e) {
            e.renderCR(this.ptn, this.x, this.y, this.d, this.scale)
        }
    }
    class Ae {
        constructor(e, t, n) {
            this.pool = new Pe(()=>new Le,e),
            this.anmPtnList = t,
            this.anmWeight = n
        }
        init() {
            this.pool.freeAll()
        }
        update() {
            this.pool.forEach(e=>e.update()),
            this.pool.gbc()
        }
        render(e) {
            this.pool.forEach(t=>t.render(e))
        }
        set(e, t, n, r) {
            const i = this.pool.spawn();
            null !== i && i.setParam(e, t, n, r, this.anmPtnList, this.anmWeight)
        }
        setD(e, t, n, r, i) {
            const o = this.pool.spawn();
            null !== o && (o.setParam(e, t, r, i, this.anmPtnList, this.anmWeight),
            o.d = n)
        }
        count() {
            return this.pool.count()
        }
    }
    class Me extends De {
        constructor() {
            super(),
            this.init()
        }
        init() {
            super.init(),
            this.setParam(0, 0, 0)
        }
        setParam(e, t, n) {
            this.x = e,
            this.y = t,
            this.d = n,
            this.l = 0,
            this.lmax = 40 + 30 * Math.random(),
            this.w = 1.5 + 2.5 * Math.random(),
            this.v = 4 + 8 * Math.random(),
            this.count = 0,
            this.c = [1, 1, 1, 1]
        }
        update() {
            this.count >= 24 ? this.kill() : (this.l < this.lmax ? this.l += this.v : (this.x += Math.cos(this.d) * this.v,
            this.y += Math.sin(this.d) * this.v),
            this.c[3] = 1 - this.count / 24,
            this.count += 1)
        }
        render(e) {
            const t = Math.cos(this.d) * this.l
              , n = Math.sin(this.d) * this.l
              , r = V.exp_2.buzzEffect;
            e.renderLineC(r, this.x, this.y, this.x + t, this.y + n, this.w, this.c, ce.White)
        }
    }
    class Ne {
        constructor(e) {
            this.pool = new Pe(()=>new Me,e)
        }
        init() {
            this.pool.freeAll()
        }
        update() {
            this.pool.forEach(e=>e.update()),
            this.pool.gbc()
        }
        render(e) {
            this.pool.forEach(t=>t.render(e))
        }
        set(e, t, n) {
            const r = this.pool.spawn();
            null !== r && r.setParam(e, t, n)
        }
        count() {
            return this.pool.count()
        }
    }
    class Re extends De {
        constructor() {
            super(),
            this.init(),
            this.color = [1, 1, 1, 1],
            this.setParam(0, 0, null, 0, Re.mvGameStart)
        }
        setParam(e, t, n, r, i) {
            this.x = e,
            this.y = t,
            this.s = n,
            this.count = 0,
            this.rep = r,
            this.color[0] = 1,
            this.color[1] = 1,
            this.color[2] = 1,
            this.color[3] = 1,
            this.onUpdate = i
        }
        update() {
            this.onUpdate(this)
        }
        render(e) {
            e.text(this.x, this.y, this.s, this.color, te.Left)
        }
        static mvGameStart(e) {
            e.count < e.rep ? (e.color[3] = 0,
            e.count += 1) : (e.count = 0,
            e.rep = 120 - e.rep,
            e.onUpdate = Re.mvGameStartWait)
        }
        static mvGameStartWait(e) {
            e.count < e.rep ? e.count < 10 ? (e.y += 4,
            e.color[3] = Math.min(1, e.color[3] + .2)) : e.count : e.count < e.rep + 20 ? (e.y += .8,
            e.color[0] -= .05,
            e.color[1] -= .05,
            e.color[2] -= .05,
            e.color[3] -= .05) : e.kill(),
            e.count += 1
        }
    }
    !function(e) {
        e[e.GameStart = 0] = "GameStart",
        e[e.GameOver = 1] = "GameOver"
    }(Ce || (Ce = {}));
    class Oe {
        constructor(e) {
            this.pool = new Pe(()=>new Re,e)
        }
        init() {
            this.pool.freeAll()
        }
        update() {
            this.pool.forEach(e=>e.update()),
            this.pool.gbc()
        }
        render(e) {
            this.pool.forEach(t=>t.render(e))
        }
        setChar(e, t, n, r, i) {
            const o = this.pool.spawn();
            null !== o && o.setParam(e, t, n, r, i)
        }
        setGameStart(e, t, n, r) {
            let i = e - 16 * n.length / 2
              , o = r;
            for (const e of n)
                this.setChar(i, t - 40, e, o, Re.mvGameStart),
                i += 16,
                o += 2
        }
        setGameOver(e, t, n) {}
        set(e, t, n, r, i) {
            switch (r) {
            case Ce.GameStart:
                return this.setGameStart(e, t, n, i);
            case Ce.GameOver:
                return this.setGameOver(e, t, n)
            }
        }
        count() {
            return this.pool.count()
        }
    }
    const Ie = 64
      , ze = 256
      , Fe = 128
      , Ue = 128;
    class We {
        init() {}
        update() {}
        debug(e) {}
        setBaseExplosion(e, t, n) {}
        setSubExplosion(e, t, n) {}
        setBuzz(e, t, n) {}
        setText(e, t, n, r, i) {}
        renderBlacksmoke(e) {}
        renderExplosion(e) {}
        renderBuzz(e) {}
        renderText(e) {}
    }
    class Be {
        constructor() {
            const e = V.exp_2
              , t = V.exp_1
              , n = [e.t00, e.t01, e.t02, e.t03, e.t04, e.t05, e.t06, e.t07, e.t08, e.t09, e.t10, e.t11, e.t12, e.t13]
              , r = [t.t00, t.t01, t.t02, t.t03, t.t04, t.t05, t.t06, t.t07, t.t08, t.t09, t.t10, t.t11, t.t12, t.t13];
            this.blackSmoke = new Ae(Ie,n,3),
            this.explosion = new Ae(ze,r,2),
            this.buzz = new Ne(Fe),
            this.text = new Oe(Ue)
        }
        init() {
            this.blackSmoke.init(),
            this.explosion.init(),
            this.buzz.init(),
            this.text.init()
        }
        update() {
            this.blackSmoke.update(),
            this.explosion.update(),
            this.buzz.update(),
            this.text.update()
        }
        renderBlacksmoke(e) {
            this.blackSmoke.render(e)
        }
        renderExplosion(e) {
            this.explosion.render(e)
        }
        renderBuzz(e) {
            this.buzz.render(e)
        }
        renderText(e) {
            this.text.render(e)
        }
        debug(e) {
            const t = [a.count("blackSmoke", [this.blackSmoke.count(), Ie]), a.count("explosion", [this.explosion.count(), ze]), a.count("buzz", [this.buzz.count(), Fe]), a.count("text", [this.text.count(), Ue])];
            e.updateStruct("Effect", t)
        }
        setBaseExplosion(e, t, n) {
            this.explosion.set(e, t, .1 * n, 1.8),
            this.explosion.set(e, t, .2 * n, 1.6),
            this.explosion.set(e, t, .3 * n, 1.2),
            this.explosion.set(e, t, .7 * n, .1),
            this.explosion.set(e, t, 1.1 * n, 1.2),
            this.blackSmoke.set(e, t, 1.9 * n, .6)
        }
        setSubExplosion(e, t, n) {
            this.explosion.set(e, t, .08 * n, 1.8 * Math.random() + 2)
        }
        setBuzzLine(e, t) {
            const n = t.x - e.x
              , r = t.y - e.y
              , i = Math.atan2(r, n) + Math.random() * Q.D16 - Q.D8
              , o = .2 + .2 * Math.random()
              , a = 4 * Math.random()
              , u = Math.random() * Q.D256
              , s = e.x + n * o + Math.cos(u) * a
              , l = e.y + r * o + Math.sin(u) * a;
            this.buzz.set(s, l, i)
        }
        setBuzz(e, t, n) {
            for (let n = 0; n < 3; n++)
                this.setBuzzLine(e, t)
        }
        setText(e, t, n, r, i) {
            this.text.set(e, t, n, r, i)
        }
    }
    function je(e, t, n) {
        return e < t ? t : e > n ? n : e
    }
    function Ve(e, t) {
        const n = e.x - t.x
          , r = e.y - t.y;
        return n * n + r * r < e.cr * t.cr
    }
    var Xe;
    !function(e) {
        e[e.Default = 0] = "Default",
        e[e.AddAlpha = 1] = "AddAlpha",
        e[e.UseShadowAdd = 2] = "UseShadowAdd",
        e[e.Destroy = 4] = "Destroy",
        e[e.SetEffect = 8] = "SetEffect",
        e[e.Buzz = 16] = "Buzz"
    }(Xe || (Xe = {}));
    const He = .1;
    class Ge extends De {
        static rpNorm(e, t) {
            t.renderC(e.shape, e.x, e.y, e.size)
        }
        static rpAngle(e, t) {
            t.renderCR(e.shape, e.x, e.y, e.d, e.size)
        }
        static rpRandom(e, t) {
            t.renderCR(e.shape, e.x, e.y, e.d + e.x + e.y, e.size)
        }
        static mvNormalEfcInit(e) {
            e.size += He * e.effectRep,
            e.updateProc = Ge.mvNormalEfc,
            Ge.mvNormalEfc(e)
        }
        static mvNormalEfc(e) {
            e.effectRep > 0 ? (e.effectRep -= 1,
            e.size -= He,
            e.x += .4 * e.vx,
            e.y += .4 * e.vy) : (e.flags &= ~(Xe.AddAlpha | Xe.SetEffect),
            e.updateProc = Ge.mvNormal,
            Ge.mvNormal(e))
        }
        static mvNormal(e) {
            e.x += e.vx,
            e.y += e.vy
        }
        static mvAccelEfcInit(e) {
            e.size += He * e.effectRep,
            e.updateProc = Ge.mvAccelEfc,
            Ge.mvAccelEfc(e)
        }
        static mvAccelEfc(e) {
            e.effectRep > 0 ? (e.effectRep -= 1,
            e.size -= He,
            Ge.mvAccel(e)) : (e.flags &= ~(Xe.AddAlpha | Xe.SetEffect),
            e.updateProc = Ge.mvAccel,
            Ge.mvAccel(e))
        }
        static mvAccel(e) {
            if (!(e.rep > 0))
                return e.vx *= e.v,
                e.vy *= e.v,
                e.updateProc = Ge.mvNormal,
                void Ge.mvNormal(e);
            e.rep -= 1,
            e.v += e.a,
            e.x += e.vx * e.v,
            e.y += e.vy * e.v
        }
        static mvDelete(e) {
            e.effectRep <= 0 && e.free(),
            e.effectRep -= 1,
            e.v *= .98,
            e.size *= .9,
            e.x += e.vx * e.v,
            e.y += e.vy * e.v
        }
        constructor() {
            super(),
            this.setDefault()
        }
        kill() {
            0 == (this.flags & Xe.Destroy) && (this.updateProc = Ge.mvDelete,
            this.flags = Xe.AddAlpha | Xe.Destroy,
            this.effectRep = 12,
            this.v *= .5,
            this.vx = Math.cos(this.d),
            this.vy = Math.sin(this.d))
        }
        setDefault() {
            this.x = 0,
            this.y = 0,
            this.cr = 0,
            this.v = 0,
            this.d = 0,
            this.a = 0,
            this.vx = 0,
            this.vy = 0,
            this.rep = 0,
            this.effectRep = 0,
            this.damage = 10,
            this.size = 1,
            this.shape = null,
            this.flags = Xe.Default,
            this.renderProc = Ge.rpNorm,
            this.updateProc = Ge.mvNormal
        }
        debug_render(e, t) {
            0 == (this.flags & (Xe.Destroy | Xe.SetEffect)) && e.debugCircle(this.x, this.y, this.cr, t)
        }
    }
    class $e {
        constructor(e, t, n, r) {
            this.pool = new Pe(()=>new Ge,n),
            this.area = e,
            this.effect = t,
            this.debugLineColor = r
        }
        init() {
            this.pool.freeAll()
        }
        count() {
            return this.pool.count()
        }
        update() {
            this.pool.forEach(e=>e.updateProc(e)),
            this.gameAreaCollision()
        }
        renderShadow(e, t) {
            this.pool.forEach(t=>{
                0 != (t.flags & Xe.UseShadowAdd) && t.renderProc(t, e)
            }
            )
        }
        render(e) {
            this.pool.forEach(t=>{
                0 == (t.flags & (Xe.AddAlpha | Xe.UseShadowAdd)) && t.renderProc(t, e)
            }
            )
        }
        renderEffect(e) {
            this.pool.forEach(t=>{
                0 != (t.flags & Xe.AddAlpha) && t.renderProc(t, e)
            }
            )
        }
        debug_render(e) {
            const t = this.debugLineColor;
            this.pool.forEach(n=>n.debug_render(e, t))
        }
        gameAreaCollision() {
            const e = this.area;
            this.pool.forEach(t=>{
                (function(e, t) {
                    return !(e.x <= t.sx - e.cr || e.y <= t.sy - e.cr || e.x >= t.ex + e.cr || e.y >= t.ey + e.cr)
                }
                )(t, e) || t.free()
            }
            ),
            this.pool.gbc()
        }
        forEach(e) {
            this.pool.forEach(e)
        }
        find(e) {
            return this.pool.find(e)
        }
        set() {
            return this.pool.spawn()
        }
    }
    class Qe {
        constructor(e) {
            this.sman = e,
            this.targetPos = {
                x: 0,
                y: 0
            },
            this.hasTarget = !1,
            this.tpl = new Ge
        }
        targetrAngle() {
            if (this.hasTarget) {
                const e = this.targetPos.y - this.tpl.y
                  , t = this.targetPos.x - this.tpl.x;
                return Math.atan2(e, t)
            }
            return Math.PI / 2
        }
        target(e) {
            this.targetPos.x = e.x,
            this.targetPos.y = e.y,
            this.hasTarget = !0
        }
        unsetTarget() {
            this.hasTarget = !1
        }
        reset() {
            this.tpl.setDefault(),
            this.unsetTarget()
        }
        pos(e) {
            this.tpl.x = e.x,
            this.tpl.y = e.y
        }
        posXY(e, t) {
            this.tpl.x = e,
            this.tpl.y = t
        }
        posDeltaXY(e, t) {
            this.tpl.x += e,
            this.tpl.y += t
        }
        damage(e) {
            this.tpl.damage = e
        }
        shape(e) {
            this.tpl.shape = e.shape,
            this.tpl.size = e.size,
            this.tpl.renderProc = e.render,
            this.tpl.cr = e.hitSize
        }
        useShadowAdd(e) {
            e ? this.tpl.flags |= Xe.UseShadowAdd : this.tpl.flags &= ~Xe.UseShadowAdd
        }
        moveNormal(e, t=!1) {
            this.tpl.v = e,
            this.tpl.a = 0,
            this.tpl.rep = 0,
            t ? (this.tpl.updateProc = Ge.mvNormalEfcInit,
            this.tpl.effectRep = 8,
            this.tpl.flags |= Xe.AddAlpha | Xe.SetEffect) : this.tpl.updateProc = Ge.mvNormal
        }
        moveAccel(e, t, n, r=!1) {
            this.tpl.v = e,
            this.tpl.a = t,
            this.tpl.rep = n,
            r ? (this.tpl.updateProc = Ge.mvAccelEfcInit,
            this.tpl.effectRep = 8,
            this.tpl.flags |= Xe.AddAlpha | Xe.SetEffect) : this.tpl.updateProc = Ge.mvAccel
        }
        speed(e, t, n) {
            this.tpl.v = e,
            this.tpl.a = t,
            this.tpl.rep = n
        }
        moveExtra(e) {
            this.tpl.updateProc = e
        }
        setTplD(e) {
            return this.setTplDV(e, this.tpl.v)
        }
        setTplDV(e, t) {
            const n = this.tpl
              , r = this.sman.set();
            return null !== r && (r.x = n.x,
            r.y = n.y,
            r.v = t,
            r.d = e,
            0 === n.a ? (r.vx = Math.cos(e) * t,
            r.vy = Math.sin(e) * t) : (r.vx = Math.cos(e),
            r.vy = Math.sin(e)),
            r.a = n.a,
            r.rep = n.rep,
            r.effectRep = n.effectRep,
            r.flags = n.flags,
            r.damage = n.damage,
            r.size = n.size,
            r.shape = n.shape,
            r.cr = n.cr,
            r.renderProc = n.renderProc,
            r.updateProc = n.updateProc,
            r.manager = n.manager,
            !0)
        }
        wayV(e, t, n, r) {
            if (n <= 0)
                return;
            let i = t;
            n % 2 == 0 ? i /= 2 : (this.setTplDV(e, r),
            n -= 1),
            n /= 2;
            for (let o = 1; o <= n; o++)
                this.setTplDV(e + i, r),
                this.setTplDV(e - i, r),
                i += t
        }
        way(e, t, n) {
            this.wayV(e, t, n, this.tpl.v)
        }
        wayZ(e, t, n) {
            e += this.targetrAngle(),
            this.way(e, t, n)
        }
        wayS(e, t, n, r) {
            let i = this.tpl.v;
            for (let o = 0; o < r; o++)
                this.wayV(e, t, n, i),
                i += Qe.NUMSET_DELTA_SPEED
        }
        waySZ(e, t, n, r) {
            e += this.targetrAngle(),
            this.wayS(e, t, n, r)
        }
        allV(e, t, n) {
            if (t <= 0)
                return;
            let r = e;
            const i = 2 * Math.PI / t;
            for (let e = 0; e < t; e++)
                this.setTplDV(r, n),
                r += i
        }
        all(e, t) {
            this.allV(e, t, this.tpl.v)
        }
        allZ(e, t) {
            e += this.targetrAngle(),
            this.all(e, t)
        }
        allS(e, t, n) {
            let r = this.tpl.v;
            for (let i = 0; i < n; i++)
                this.allV(e, t, r),
                r += Qe.NUMSET_DELTA_SPEED
        }
        allSZ(e, t, n) {
            e += this.targetrAngle(),
            this.allS(e, t, n)
        }
        one(e) {
            this.setTplD(e)
        }
        oneZ(e) {
            e += this.targetrAngle(),
            this.one(e)
        }
        oneS(e, t) {
            let n = this.tpl.v;
            for (let r = 0; r < t; r++)
                this.setTplDV(e, n),
                n += Qe.NUMSET_DELTA_SPEED
        }
        oneSZ(e, t) {
            e += this.targetrAngle(),
            this.oneS(e, t)
        }
        rnd(e, t, n, r=0) {
            const i = this.tpl.v
              , o = .5 * t;
            for (let a = 0; a < n; a++) {
                const n = i + Math.random() * r
                  , a = e + Math.random() * t - o;
                this.setTplDV(a, n)
            }
        }
        rndZ(e, t, n, r=0) {
            e += this.targetrAngle(),
            this.rnd(e, t, n, r)
        }
    }
    Qe.NUMSET_DELTA_SPEED = .1;
    class Ye {
        constructor(e, t, n, r) {
            this.shape = e,
            this.size = t,
            this.hitSize = n,
            this.render = r
        }
    }
    class Ke {
        constructor(e, t) {
            this.sprite = e,
            this.rate = t
        }
    }
    class qe extends Ke {
        constructor(e) {
            super(e, 6),
            this.kNormalColorTag = ""
        }
    }
    class Ze extends Ke {
        constructor(e) {
            super(e, 4),
            this.kArrowColorTag = ""
        }
    }
    class Je {
    }
    Je.Blue = new qe(V.Shot.shot0013),
    Je.Orange = new qe(V.Shot.shot0014),
    Je.Purple = new qe(V.Shot.shot0015),
    Je.Green = new qe(V.Shot.shot0016),
    Je.Yellow = new qe(V.Shot.shot0017),
    Je.Red = new qe(V.Shot.shot0018),
    Je.Silver = new qe(V.Shot.shot0019),
    Je.SSGL = new qe(V.Shot.shot_ssgL);
    class et {
    }
    et.Blue = new Ze(V.Shot.shot0000),
    et.Green = new Ze(V.Shot.shot0003),
    et.Purple = new Ze(V.Shot.shot0002),
    et.Yellow = new Ze(V.Shot.shot0004),
    et.Orange = new Ze(V.Shot.shot0001),
    et.Red = new Ze(V.Shot.shot0005),
    et.BlueArrow = new Ze(V.Shot.shot0006),
    et.GreenArrow = new Ze(V.Shot.shot0007),
    et.PurpleArrow = new Ze(V.Shot.shot0008),
    et.YellowArrow = new Ze(V.Shot.shot0009),
    et.OrangeArrow = new Ze(V.Shot.shot0010),
    et.RedArrow = new Ze(V.Shot.shot0011),
    et.ExtraArrow = new Ze(V.Shot.shot0012);
    class tt {
        static llaser(e) {
            return new Ye(V.Shot.shot_ll,e,8 * e,Ge.rpRandom)
        }
        static normal(e, t) {
            return new Ye(e.sprite,t,t * e.rate,Ge.rpAngle)
        }
        static angle(e, t) {
            return new Ye(e.sprite,t,t * e.rate,Ge.rpAngle)
        }
    }
    tt.vivitShot = new Ye(V.Player.ShotR,1.8,9.5,Ge.rpAngle),
    tt.hiranonShot = new Ye(V.Player2.ShotR,1.8,9.5,Ge.rpAngle);
    const nt = 128;
    var rt;
    !function(e) {
        e[e.Vivit = 0] = "Vivit",
        e[e.Hirano = 1] = "Hirano"
    }(rt || (rt = {}));
    class it extends $e {
        constructor(e, t) {
            super(e, t, nt, ce.Green),
            this.cmd = new Qe(this)
        }
        setVivitShot(e, t) {
            const n = tt.vivitShot
              , r = this.cmd;
            r.reset(),
            r.damage(1),
            r.moveNormal(12),
            r.shape(n),
            r.posXY(e.x - 6 * Math.cos(t * K.D12), e.y),
            r.one(-K.D64),
            r.posXY(e.x + 6 * Math.cos(t * K.D12), e.y),
            r.one(-K.D64);
            const i = Math.sin(t * K.D24) * K.D3;
            r.posXY(e.x - 24, e.y),
            r.one(-K.D64 - K.D2 + i),
            r.posXY(e.x + 24, e.y),
            r.one(-K.D64 + K.D2 - i)
        }
        static mvHiranoShotInit(e) {
            e.vx = 10 * Math.cos(e.d),
            e.vy = 10 * Math.sin(e.d),
            e.rep = 18,
            e.updateProc = it.mvHiranoShot,
            e.updateProc(e)
        }
        static mvHiranoShot(e) {
            e.rep <= 0 ? e.kill() : (e.x += e.vx,
            e.y += e.vy,
            e.rep -= 1)
        }
        setHiranoShot(e, t) {
            const n = tt.hiranonShot
              , r = this.cmd;
            r.reset(),
            r.damage(3),
            r.moveExtra(it.mvHiranoShotInit),
            r.shape(n),
            r.posXY(e.x - 12 * Math.cos(t * K.D12), e.y),
            r.one(-K.D64),
            r.posXY(e.x + 12 * Math.cos(t * K.D12), e.y),
            r.one(-K.D64);
            const i = Math.sin(t * K.D24) * K.D3;
            r.posXY(e.x - 24, e.y),
            r.one(K.D64 + K.D32 + i),
            r.posXY(e.x + 24, e.y),
            r.one(K.D64 - K.D32 - i)
        }
        debug(e) {
            e.updateCount("PlayerShot", [this.count(), nt])
        }
    }
    class ot {
        constructor(e) {
            this.owner = e,
            this.init()
        }
        init() {
            this.combo = 0,
            this.count = 0,
            this.level = 0
        }
        update() {
            if (this.count > 0 && (this.count -= 1,
            0 === this.count)) {
                const e = Math.floor(this.combo / 50);
                this.level += e,
                e > 0 && this.level < 99 && V.Sound.SE_CHARGE.play(),
                this.level > 99 && (this.level = 99),
                this.combo = 0
            }
        }
        onDamage() {
            this.combo = 0,
            this.count = 0
        }
        onBuzz() {
            this.count = ot.COMBO_WAITCOUNT,
            this.combo % 10 == 0 && this.owner.sendComboAttack(this.level),
            this.combo += 1
        }
    }
    ot.COMBO_WAITCOUNT = 90;
    const at = 100;
    class ut {
        constructor(e, t, n) {
            this.area = {
                sx: t.sx + 10,
                sy: t.sy + 20,
                ex: t.ex - 10,
                ey: t.ey - 20
            },
            this.shotManager = n,
            this.bitShift = {
                x: 0,
                y: 0
            },
            this.combo = new ot(e),
            this.init(rt.Vivit)
        }
        init(e) {
            const t = this.area;
            if (this.combo.init(),
            this.count = 0,
            this.cr = 3,
            this.buzzRadius = 30,
            this.dead = !1,
            this.sp = at,
            this.x = (t.ex + t.sx) / 2,
            this.y = t.ey - 50,
            this.bitShift.x = this.x,
            this.bitShift.y = this.y,
            this.shotWait = 0,
            this.animeCount = 0,
            this.animeStat = 0,
            this.playerID = e,
            e === rt.Hirano) {
                const e = V.Player2;
                this.animePtnList = [[e.LW0, e.LW1, e.LW2, e.LW3], [e.L0, e.L1, e.L2, e.L3, e.L4, e.L5, e.L6, e.L7], [e.CW0, e.CW1, e.CW2, e.CW3, e.CW4, e.CW5], [e.R0, e.R1, e.R2, e.R3, e.R4, e.R5, e.R6, e.R7], [e.RW0, e.RW1, e.RW2, e.RW3]],
                this.animePtn = e.CW0,
                this.bitPtn = e.BitR
            } else {
                const e = V.Player;
                this.animePtnList = [[e.LW0, e.LW1, e.LW2, e.LW3], [e.L0, e.L1, e.L2, e.L3, e.L4, e.L5, e.L6, e.L7], [e.CW0, e.CW1, e.CW2, e.CW3, e.CW4, e.CW5], [e.R0, e.R1, e.R2, e.R3, e.R4, e.R5, e.R6, e.R7], [e.RW0, e.RW1, e.RW2, e.RW3]],
                this.animePtn = e.CW0,
                this.bitPtn = e.BitC
            }
        }
        onHit(e) {
            this.dead || (this.sp <= e ? (this.sp = 0,
            this.kill()) : (this.sp -= e,
            this.combo.onDamage(),
            V.Sound.SE_DAMAGE_S.play()))
        }
        kill() {
            this.dead || (V.Sound.SE_GBREAK.play(),
            this.dead = !0)
        }
        onBuzz(e) {
            this.combo.onBuzz(),
            this.shotManager.effect.setBuzz(this, e, this.combo.combo),
            V.Sound.SE_BUZZ.play()
        }
        update(e) {
            let t = 0
              , n = 0;
            var r, i;
            e.slow ? (t += 3 * e.dx,
            n += 3 * e.dy) : (t += 6 * e.dx,
            n += 6 * e.dy),
            t += e.sx,
            n += e.sy,
            this.x += t,
            this.y += n,
            e.shot ? (0 === this.shotWait && (this.playerID === rt.Hirano ? this.shotManager.setHiranoShot(this, this.count) : this.shotManager.setVivitShot(this, this.count)),
            this.shotWait += 1,
            this.shotWait > 1 && (this.shotWait = 0)) : 0 !== this.shotWait && (this.shotWait -= 1),
            this.updateAnime(t),
            r = this,
            i = this.area,
            r.x = je(r.x, i.sx, i.ex),
            r.y = je(r.y, i.sy, i.ey),
            this.count += 1,
            this.bitShift.x += .38 * (this.x - this.bitShift.x),
            this.bitShift.y += .38 * (this.y - this.bitShift.y),
            this.combo.update()
        }
        updateAnime(e) {
            switch (this.animeStat) {
            case 0:
                e < 0 ? this.setFirstPtn(-2) : e > 0 ? this.setFirstPtn(2) : this.updateLoopAnime(6);
                break;
            case 1:
                this.updateMiddleAnime(e > 0 ? 1 : -1, 3);
                break;
            case -1:
                this.updateMiddleAnime(e < 0 ? 1 : -1, 3);
                break;
            case 2:
                e > 0 ? this.updateLoopAnime(5) : this.setLastPtn(1, 3);
                break;
            case -2:
                e < 0 ? this.updateLoopAnime(5) : this.setLastPtn(-1, 3)
            }
        }
        getPtnList() {
            return this.animePtnList[this.animeStat + 2]
        }
        setFirstPtn(e) {
            this.animeStat = e;
            const t = this.getPtnList();
            this.animeCount = 0,
            this.animePtn = t[0]
        }
        setLastPtn(e, t) {
            this.animeStat = e;
            const n = this.getPtnList();
            this.animeCount = t * n.length,
            this.animePtn = n[n.length - 1]
        }
        updateMiddleAnime(e, t) {
            const n = this.getPtnList();
            this.animeCount += e,
            this.animeCount < 0 ? this.setFirstPtn(0) : this.animeCount >= t * n.length ? this.setFirstPtn(2 * this.animeStat) : this.animePtn = n[Math.trunc(this.animeCount / t)]
        }
        updateLoopAnime(e) {
            const t = this.getPtnList();
            this.animeCount += 1,
            this.animeCount >= t.length * e && (this.animeCount = 0),
            this.animePtn = t[Math.trunc(this.animeCount / e)]
        }
        render(e) {
            e.renderC(this.animePtn, this.x, this.y, 1);
            const t = this.bitShift;
            let n = 0;
            if (0 !== this.shotWait && (n = 1.8 * Math.sin(this.count * K.D38)),
            this.playerID === rt.Hirano) {
                const r = this.count * K.D8;
                e.renderCR(this.bitPtn, t.x + 24, t.y + n, 0 + r, 1),
                e.renderCR(this.bitPtn, t.x - 24, t.y + n, 0 - r, 1)
            } else
                e.renderCR(this.bitPtn, t.x + 24, t.y + n, -K.D64 + K.D2, 1),
                e.renderCR(this.bitPtn, t.x - 24, t.y + n, -K.D64 - K.D2, 1)
        }
        debug_render(e) {
            this.cr;
            e.debugCircle(this.x, this.y, this.cr, ce.Green),
            e.debugCircle(this.x, this.y, this.buzzRadius, ce.Blue)
        }
        debug(e) {
            const t = [a.float("x", this.x), a.float("y", this.y), a.int("shotWait", this.shotWait), a.int("animeCount", this.animeCount), a.int("animeStat", this.animeStat)];
            e.updateStruct("Player", t)
        }
    }
    const st = [.85, .85, 1, 1]
      , lt = [.98, .5, .1, 1]
      , ct = [.18, .18, .6, 1];
    function dt(e, t, n, r) {
        for (let i = 0; i < 4; i++)
            e[i] = t[i] * (1 - r) + n[i] * r
    }
    class ft {
        constructor(e) {
            this.player = e,
            this.sprite = Object.assign({}, V.BG1A.all),
            this.sprite.x = 0,
            this.sprite.y = 0,
            this.sprite.w = 512,
            this.sprite.h = 1024,
            this.sprite.uv = [0, 0, .5, 1],
            this.init()
        }
        init() {
            this.scroll = 0,
            this.timezone = 0,
            this.blendColor = [1, 1, 1, 1]
        }
        update() {
            const e = Math.max(1, Math.min(5.5, .03 * this.player.combo.combo));
            this.scroll += 2 * e,
            this.scroll >= 512 && (this.scroll -= 512);
            const t = this.timezone;
            t < .5 ? dt(this.blendColor, st, lt, 2 * t) : dt(this.blendColor, lt, ct, 2 * (t - .5)),
            this.timezone = Math.min(1, this.timezone + 1e-4)
        }
        render(e) {
            const t = this.scroll;
            e.renderColor(this.sprite, -96, t - 512, this.blendColor)
        }
        debug(e) {
            e.updateInt("Background.scroll", this.scroll)
        }
    }
    const ht = 512;
    class pt extends $e {
        constructor(e, t) {
            super(e, t, ht, ce.Red)
        }
    }
    class mt {
        constructor(e, t) {
            this.shot = new pt(e,t)
        }
        getShotCommand() {
            return new Qe(this.shot)
        }
        init() {
            this.shot.init()
        }
        update() {
            this.shot.update()
        }
        renderShadow(e, t) {
            this.shot.renderShadow(e, t)
        }
        render(e) {
            this.shot.render(e)
        }
        renderEffect(e) {
            this.shot.renderEffect(e)
        }
        debug_render(e) {
            this.shot.debug_render(e)
        }
        debug(e) {
            e.updateCount("EnemyShot", [this.shot.count(), ht])
        }
        forEachShot(e) {
            this.shot.forEach(e)
        }
        findShot(e) {
            return this.shot.find(e)
        }
    }
    class vt {
        constructor(e) {
            this.name = e,
            this.clusterShift = 4;
            const t = Se - Ee >> this.clusterShift;
            this.clusterLevelMax = t - 1,
            this.cluster = new Array(t)
        }
        clear() {
            const e = this.cluster.length;
            for (let t = 0; t < e; t++)
                this.cluster[t] = []
        }
        add(e) {
            const t = e.y - e.cr
              , n = e.y + e.cr
              , r = this.cluster
              , i = this.clusterLevelMax
              , o = this.clusterShift
              , a = Math.max(0, Math.min(i, t >> o))
              , u = Math.max(0, Math.min(i, n >> o));
            for (let t = a; t <= u; t++)
                r[t].push(e)
        }
        hitCheckOne(e, t) {
            const n = this.cluster
              , r = this.clusterLevelMax
              , i = this.clusterShift
              , o = Math.max(0, Math.min(r, e.y - e.cr >> i))
              , a = Math.max(0, Math.min(r, e.y + e.cr >> i));
            for (let r = o; r <= a; r++) {
                const i = n[r]
                  , o = i.length;
                for (let n = 0; n < o; n++) {
                    const r = i[n];
                    if (Ve(r, e))
                        return void t(r)
                }
            }
        }
        debug(e) {
            const t = this.cluster
              , n = t.length
              , r = [];
            for (let e = 0; e < n; e++)
                r.push(a.int(`[${e}]`, t[e].length));
            e.updateStruct(this.name, r)
        }
    }
    var gt;
    function yt(e, t) {
        t.renderCR(e.shape, e.x, e.y, e.d, e.size)
    }
    !function(e) {
        e[e.Clip = 1] = "Clip",
        e[e.Damage = 2] = "Damage",
        e[e.HitPlayerShot = 4] = "HitPlayerShot",
        e[e.HitPlayer = 8] = "HitPlayer",
        e[e.Destroy = 16] = "Destroy",
        e[e.AlphaAdd = 32] = "AlphaAdd",
        e[e.Default = 14] = "Default"
    }(gt || (gt = {}));
    class bt extends De {
        constructor(e) {
            super(),
            this.manager = e,
            this.LOCAL_ = new Array(32),
            this.init()
        }
        init() {
            super.init(),
            this.x = 0,
            this.y = 0,
            this.cr = 0,
            this.d = 0,
            this.shape = null,
            this.PC_ = 0,
            this.SLEEP_ = !1,
            this.CODE_ = null,
            this.REP_ = 0,
            this.ONKILL_ = null,
            this.AUTO_ = null,
            this.AUTO_INTERVAL_ = 0,
            this.AUTO_COUNT_ = 0,
            this.sp = 1,
            this.size = 1,
            this.flag = gt.Default,
            this.renderProc = yt
        }
        setEntryPoint(e) {
            this.CODE_ = e,
            this.ONKILL_ = null,
            this.PC_ = 0,
            this.AUTO_ = null,
            this.update(),
            this.SLEEP_ = !0
        }
        syncAngleToPlayer() {
            let e = this.manager.getPlayerAngle(this) - this.d;
            e < -Math.PI ? e += Math.PI : e > Math.PI && (e -= Math.PI),
            this.d += .1 * e
        }
        onDamage(e) {
            if (!(this.flag & gt.Destroy))
                if (this.sp -= e,
                this.sp < 0) {
                    if (null !== this.ONKILL_ && (this.CODE_ = this.ONKILL_,
                    this.PC_ = 0,
                    this.innerUpdate(),
                    this.sp > 0))
                        return;
                    this.sp = 0,
                    this.flag |= gt.Destroy | gt.AlphaAdd,
                    V.Sound.SE_BOMB_STD.play(),
                    this.manager.setBaseExplosion(this.x, this.y, .75)
                } else
                    V.Sound.SE_HIT.play()
        }
        update() {
            this.SLEEP_ && (this.SLEEP_ = !1),
            this.flag & gt.Destroy ? this.updateDestroy() : (this.innerUpdate(),
            this.runAutoCommand())
        }
        setAutoCommand(e, t) {
            this.AUTO_COUNT_ = 0,
            this.AUTO_INTERVAL_ = t,
            this.AUTO_ = e
        }
        runAutoCommand() {
            if (null !== this.AUTO_) {
                if (0 === this.AUTO_COUNT_)
                    for (const e of this.AUTO_) {
                        if (e(this) === J.END)
                            break
                    }
                0 !== this.AUTO_INTERVAL_ && (this.AUTO_COUNT_ += 1,
                this.AUTO_COUNT_ >= this.AUTO_INTERVAL_ && (this.AUTO_COUNT_ = 0))
            }
        }
        innerUpdate() {
            for (; ; ) {
                const e = this.CODE_[this.PC_](this);
                if (e === J.END)
                    return;
                e === J.NEXT && (this.PC_ += 1)
            }
        }
        updateDestroy() {
            this.size *= .85,
            this.x += .8 * Math.cos(this.d),
            this.y += .8 * Math.sin(this.d),
            Math.random() < .3 && this.manager.setSubExplosion(this.x, this.y, this.size),
            this.size < .01 && this.kill()
        }
        render(e) {
            this.renderProc(this, e)
        }
        debug_render(e) {
            if (0 != (this.flag & gt.Destroy))
                return;
            const t = this.cr;
            e.debugCircle(this.x, this.y, t, ce.Red)
        }
    }
    const xt = 256;
    class wt {
        constructor(e, t, n, r) {
            this.enemyPool = new Pe(()=>new bt(this),xt),
            this.cluster = new vt("EnemyCL"),
            this.rect = e,
            this.player = n,
            this.effect = r,
            this.shotCommand = t.getShotCommand()
        }
        shotCmd() {
            return this.shotCommand.reset(),
            this.shotCommand.target(this.player),
            this.shotCommand
        }
        getPlayerAngle(e) {
            const t = this.player.x - e.x
              , n = this.player.y - e.y;
            return Math.atan2(n, t)
        }
        init() {
            this.enemyPool.freeAll()
        }
        count() {
            return this.enemyPool.count()
        }
        selectRandom() {
            return this.enemyPool.find(e=>{
                if (e.flag & gt.Destroy)
                    return !1;
                if (0 == (e.flag & gt.Damage))
                    return !1;
                const t = Math.abs(e.x - _e)
                  , n = Math.abs(e.y - ke);
                return t < _e - 20 && n < ke - 20
            }
            )
        }
        update() {
            this.enemyPool.forEach(e=>e.update()),
            this.gameAreaCollision()
        }
        render(e) {
            this.enemyPool.forEach(t=>{
                0 == (t.flag & gt.AlphaAdd) && t.render(e)
            }
            )
        }
        renderEffect(e) {
            this.enemyPool.forEach(t=>{
                0 != (t.flag & gt.AlphaAdd) && t.render(e)
            }
            )
        }
        debug_render(e) {
            this.enemyPool.forEach(t=>t.debug_render(e))
        }
        debug(e) {
            e.updateCount("Enemy", [this.enemyPool.count(), xt]),
            this.cluster.debug(e)
        }
        gameAreaCollision() {
            this.rect;
            const e = this.cluster;
            e.clear(),
            this.enemyPool.forEach(t=>{
                0 == (t.flag & gt.Destroy) && e.add(t)
            }
            ),
            this.enemyPool.gbc()
        }
        hitCheckOne(e, t) {
            this.cluster.hitCheckOne(e, t)
        }
        forEach(e, t) {
            this.enemyPool.forEach(t)
        }
        set(e, t, n) {
            const r = this.enemyPool.spawn();
            if (null !== r)
                return r.x = t,
                r.y = n,
                r.d = K.D64,
                r.setEntryPoint(e),
                r
        }
        setBaseExplosion(e, t, n) {
            this.effect.setBaseExplosion(e, t, n)
        }
        setSubExplosion(e, t, n) {
            this.effect.setSubExplosion(e, t, n)
        }
    }
    var _t;
    !function(e) {
        e[e.NEXT = 0] = "NEXT",
        e[e.JMP = 1] = "JMP",
        e[e.END = 2] = "END"
    }(_t || (_t = {}));
    class Et extends De {
        constructor(e, t) {
            super(),
            this.parent = e,
            this.manager = t,
            this.init()
        }
        init() {
            super.init(),
            this.PC_ = 0,
            this.CODE_ = [],
            this.REP_ = 0,
            this.gr0 = 0,
            this.gr1 = 0,
            this.SLEEP_ = !1
        }
        setEntryPoint(e) {
            this.CODE_ = e,
            this.PC_ = 0,
            this.REP_ = 0,
            this.gr0 = 0,
            this.gr1 = 0,
            this.update(),
            this.SLEEP_ = !0
        }
        update() {
            for (this.SLEEP_ && (this.SLEEP_ = !1); ; ) {
                const e = this.CODE_[this.PC_](this);
                if (e === _t.END)
                    return;
                e === _t.NEXT && (this.PC_ += 1)
            }
        }
    }
    const St = 64;
    class kt {
        constructor(e) {
            this.pool = new Pe(()=>new Et(this,e),St),
            this.eman = e,
            this.init()
        }
        init() {
            this.pool.freeAll()
        }
        update() {
            this.pool.forEach(e=>e.update()),
            this.pool.gbc()
        }
        debug(e) {
            e.updateCount("EnemySet", [this.pool.count(), St])
        }
        set(e) {
            const t = this.pool.spawn();
            null !== t && t.setEntryPoint(e)
        }
    }
    class Tt {
        constructor(e, t) {
            this.em = e,
            this.psm = t
        }
        update() {
            const e = this.em;
            this.psm.forEach(t=>{
                t.flags !== Xe.Destroy && e.hitCheckOne(t, e=>{
                    e.onDamage(t.damage),
                    t.kill()
                }
                )
            }
            )
        }
    }
    class Ct {
        constructor(e, t) {
            this.player = e,
            this.ea = t
        }
        update() {
            const e = this.player;
            this.ea.forEachShot(t=>{
                if (0 != (t.flags & Xe.Destroy))
                    return;
                const n = function(e, t) {
                    const n = e.x - t.x
                      , r = e.y - t.y;
                    return n * n + r * r
                }(e, t)
                  , r = e.buzzRadius + t.cr;
                n < r * r ? (0 == (t.flags & Xe.Buzz) && (e.onBuzz(t),
                t.flags |= Xe.Buzz),
                0 == (t.flags & Xe.SetEffect) && Ve(e, t) && (t.kill(),
                e.onHit(t.damage))) : t.flags &= ~Xe.Buzz
            }
            )
        }
    }
    class Dt {
        constructor(e, t, n) {
            this.player = e,
            this.enemy = t,
            this.attack = n,
            this.init()
        }
        init() {
            this.state = null,
            this.count = 0,
            this.amp = 0,
            this.targetEnemy = null,
            this.changeTekitouState()
        }
        setTargetEnemy() {
            this.targetEnemy = this.enemy.selectRandom()
        }
        getTargetEnemy() {
            const e = this.targetEnemy;
            return null === e ? null : e.state === Te.Free ? null : e.flag & gt.Destroy ? null : e
        }
        playerX() {
            return this.player.x
        }
        playerY() {
            return this.player.y
        }
        playerCR() {
            return this.player.cr
        }
        static mvGuruGuru(e, t) {
            t.sx = Math.cos(e.count * Q.D16) * e.amp,
            t.sy = Math.sin(e.count * Q.D16) * e.amp,
            e.setTargetEnemy(),
            null !== e.getTargetEnemy() && e.changeState(Dt.mvDestroy)
        }
        static mvFuraFura(e, t) {
            t.sx = Math.cos(e.count * Q.D8) * e.amp * 1.5,
            e.setTargetEnemy(),
            null !== e.getTargetEnemy() && e.changeState(Dt.mvDestroy)
        }
        static mvWait(e, t) {
            if (e.checkDanger())
                return void e.changeState(Dt.mvAvoid);
            let n = _e - e.playerX()
              , r = ke + 150 - e.playerY();
            Math.abs(n) < 50 && (n = 0),
            Math.abs(r) < 50 && (r = 0);
            const i = Math.sqrt(n * n + r * r);
            0 !== i && (n /= i,
            r /= i);
            let o = 6;
            i < o && (o = i),
            t.sx = n * o,
            t.sy = r * o,
            e.setTargetEnemy(),
            null !== e.getTargetEnemy() && e.changeState(Dt.mvDestroy)
        }
        static mvDestroy(e, t) {
            if (e.checkDanger())
                return void e.changeState(Dt.mvAvoid);
            const n = e.getTargetEnemy();
            if (null !== n) {
                t.shot = !0;
                let r = n.x - e.playerX()
                  , i = n.y + 190 - e.playerY()
                  , o = 4;
                const a = Math.sqrt(r * r + i * i);
                0 !== a && (r /= a,
                i /= a),
                a < o && (o = a),
                t.sx = r * o,
                t.sy = i * o
            } else {
                e.setTargetEnemy(),
                null === e.getTargetEnemy() && e.changeState(Dt.mvWait)
            }
        }
        forEachShot(e) {
            this.attack.forEachShot(e)
        }
        checkDanger() {
            const e = this.player.x
              , t = this.player.y;
            this.player.cr;
            return null !== this.attack.findShot(n=>{
                const r = e - n.x
                  , i = t - n.y;
                return Math.abs(r) < 30 && Math.abs(i) < 30
            }
            )
        }
        static mvAvoid(e, t) {
            t.shot = !0;
            const n = e.playerX()
              , r = e.playerY()
              , i = e.playerCR();
            let o = 0
              , a = 0
              , u = 0;
            e.forEachShot(e=>{
                let t = n - e.x
                  , s = r - e.y;
                if (Math.abs(t) > 100 && Math.abs(s) > 100)
                    return;
                const l = i + e.cr + 5;
                let c = Math.sqrt(t * t + s * s);
                0 === c && (c = i + e.cr + 1,
                n < _e ? (t = Math.cos(e.d + Q.D64) * c,
                s = Math.sin(e.d + Q.D64) * c) : (t = Math.cos(e.d - Q.D64) * c,
                s = Math.sin(e.d - Q.D64) * c)),
                c >= l || (o += t / c * (l - c),
                a += s / c * (l - c),
                u += 1)
            }
            ),
            0 !== u ? (t.sx = o / u,
            t.sy = a / u) : e.changeState(Dt.mvDestroy)
        }
        changeState(e) {
            this.state = e,
            this.count = 0
        }
        changeTekitouState() {
            const e = 100 * Math.random();
            this.amp = 2 * Math.random() + 2,
            Math.random() < .5 && (this.amp = -this.amp),
            e < 20 ? this.changeState(Dt.mvWait) : e < 60 ? this.changeState(Dt.mvGuruGuru) : this.changeState(Dt.mvFuraFura)
        }
        update(e) {
            e.reset(),
            this.state(this, e),
            this.count += 1
        }
    }
    const Pt = we
      , Lt = Se;
    class At {
        constructor() {
            this.set(0, 0, 0)
        }
        set(e, t, n) {
            this.width = e,
            this.height = t,
            this.rightAreaX = n
        }
        existSubArea() {
            return !(this.width <= 200)
        }
    }
    class Mt {
        constructor() {
            this.mainArea = {
                sx: 0,
                sy: 0,
                ex: 0,
                ey: 0
            },
            this.subArea = new At,
            this.subAreaPos = [],
            this.gridCount = 0,
            this.hasSubArea = !1,
            this.touchWeight = 1,
            this.canvasWidth = -1,
            this.canvasHeight = -1,
            this.create()
        }
        create(e=7) {
            if (this.gridCount === e)
                return;
            this.gridCount = e;
            const t = e * e * 2;
            for (let e = 0; e <= t; e++)
                this.subAreaPos[e] = {
                    x: 0,
                    y: 0
                }
        }
        getTouchWeight() {
            return this.touchWeight
        }
        resize(e) {
            const t = window.innerWidth
              , n = window.innerHeight;
            if (this.canvasWidth === t && this.canvasHeight === n)
                return !1;
            let r = t
              , i = n
              , o = 0
              , a = 0
              , u = 1;
            const s = i * Pt / Lt;
            return t > s ? (o = (t - (r = s)) / 2,
            u = Pt / r) : (a = n - (i = r * Lt / Pt),
            u = Lt / i),
            this.canvasWidth = e.width = t,
            this.canvasHeight = e.height = n,
            this.mainArea.sx = o,
            this.mainArea.sy = a,
            this.mainArea.ex = o + r,
            this.mainArea.ey = a + i,
            this.updateSubArea(o, i, o + r),
            this.touchWeight = u,
            !0
        }
        updateSubArea(e, t, n) {
            if (this.subArea.set(e, t, n),
            !this.subArea.existSubArea())
                return void (this.hasSubArea = !1);
            const r = this.gridCount;
            let i = Math.floor(n + 16)
              , o = 16
              , a = Math.floor((e - 16 * (r + 1)) / r)
              , u = Math.floor(a * Lt / Pt)
              , s = a + 16
              , l = u + 16
              , c = Math.floor((t - l * r + 16) / 2);
            l * r + 16 > t && (u = Math.floor((t - 16 * (r + 1)) / r),
            s = (a = Math.floor(u * Pt / Lt)) + 16,
            l = u + 16,
            c = Math.floor((t - l * r + 16) / 2),
            i = Math.floor(n + 16),
            o = e - s * r);
            const d = r * r;
            let f = 0;
            for (let e = 0; e < r; e++)
                for (let t = 0; t < r; t++)
                    this.subAreaPos[1 + f].x = o + s * e,
                    this.subAreaPos[1 + f].y = c + l * t,
                    this.subAreaPos[1 + f + d].x = i + s * e,
                    this.subAreaPos[1 + f + d].y = c + l * t,
                    f += 1;
            this.subAreaWidth = a,
            this.subAreaHeight = u,
            l * r + 16 > this.subArea.height ? this.hasSubArea = !1 : this.hasSubArea = !0
        }
        getSubarea() {
            return this.subArea
        }
        canRenderSubarea() {
            return this.hasSubArea
        }
        setViewport(e, t) {
            if (t === Mt.MainAreaID) {
                const t = this.mainArea;
                e.setViewport(t.sx, t.sy, t.ex - t.sx, t.ey - t.sy)
            } else if (t === Mt.ScreenAreaID)
                e.setVirtualSize([this.canvasWidth, this.canvasHeight]),
                e.setViewport(0, 0, this.canvasWidth, this.canvasHeight);
            else {
                const n = this.subAreaPos[t];
                e.setViewport(n.x, this.subArea.height - n.y - this.subAreaHeight, this.subAreaWidth, this.subAreaHeight)
            }
        }
        getWorldFromID(e, t, n) {
            if (t === Mt.MainAreaID) {
                const t = this.mainArea;
                e.x = t.sx + n.x * (t.ex - t.sx) / Pt,
                e.y = t.sy + n.y * (t.ey - t.sy) / Lt
            } else if (t === Mt.ScreenAreaID)
                e.x = n.x,
                e.y = n.y;
            else {
                const r = this.subAreaPos[t];
                e.x = r.x + n.x * this.subAreaWidth / Pt,
                e.y = r.y + n.y * this.subAreaHeight / Lt
            }
        }
    }
    Mt.MainAreaID = 0,
    Mt.ScreenAreaID = -1;
    const Nt = new Y;
    class Rt {
        constructor() {
            this.code = [],
            this.closed = !1
        }
        getCode() {
            return this.closed || (this.kill(),
            this.closed = !0),
            this.code
        }
        kill() {
            this.code.push(e=>(e.kill(),
            _t.END))
        }
        spawn(e, t, n) {
            this.code.push(r=>(r.manager.set(e, Nt.get(r, t), Nt.get(r, n)),
            _t.NEXT))
        }
        spawnD(e, t, n, r) {
            this.code.push(i=>{
                const o = i.manager.set(e, Nt.get(i, t), Nt.get(i, n));
                return null !== o && (o.d = Nt.get(i, r)),
                _t.NEXT
            }
            )
        }
        sub(e) {
            this.code.push(t=>(t.parent.set(e.getCode()),
            _t.NEXT))
        }
        change(e) {
            const t = e.getCode();
            this.code.push(e=>(e.CODE_ = t,
            e.PC_ = 0,
            _t.JMP))
        }
        restart() {
            this.code.push(e=>(e.PC_ = 0,
            _t.JMP))
        }
        wait() {
            this.code.push(e=>{
                return 0 === e.manager.count() ? _t.NEXT : _t.END
            }
            )
        }
        nop(e=1) {
            e <= 0 || (this.code.push(t=>(t.REP_ = Nt.get(t, e),
            _t.NEXT)),
            this.code.push(e=>e.REP_ <= 0 ? _t.NEXT : (e.REP_ -= 1,
            _t.END)))
        }
        repsetCode(e, t, n) {
            if (t <= 0)
                return;
            let r = 0;
            const i = 1 / (t - 1);
            for (let o = 1; o <= t; o++)
                n(r),
                o !== t && this.nop(e),
                r += i
        }
        repsetCodeX(e, t, n) {
            if (t <= 0)
                return;
            let r = 0;
            const i = 1 / t;
            for (let o = 1; o <= t; o++)
                n(r),
                o !== t && this.nop(e),
                r += i
        }
        set(e, t, n, r=0, i=1) {
            this.repsetCode(r, i, ()=>{
                this.spawn(e, t, n)
            }
            )
        }
        xset(e, t, n, r, i=0, o=1) {
            const a = Nt.sub(n, t);
            this.repsetCode(i, o, n=>{
                this.spawn(e, Nt.expr(e=>Nt.get(e, t) + Nt.get(e, a) * n), r)
            }
            )
        }
        yset(e, t, n, r, i=0, o=1) {
            const a = Nt.sub(r, n);
            this.repsetCode(i, o, r=>{
                this.spawn(e, t, Nt.expr(e=>Nt.get(e, n) + Nt.get(e, a) * r))
            }
            )
        }
        vset(e, t, n, r=0, i=1) {
            const o = t[0]
              , a = t[1]
              , u = Nt.sub(n[0], o)
              , s = Nt.sub(n[1], a);
            this.repsetCode(r, i, t=>{
                const n = Nt.expr(e=>Nt.get(e, o) + Nt.get(e, u) * t)
                  , r = Nt.expr(e=>Nt.get(e, a) + Nt.get(e, s) * t);
                this.spawn(e, n, r)
            }
            )
        }
        dset(e, t, n, r, i, o=0, a=1) {
            this.repsetCodeX(o, a, o=>{
                this.spawnD(e, t, n, Nt.add(r, Nt.mul(i, o)))
            }
            )
        }
        cset(e, t, n, r, i, o, a=0, u=1) {
            this.repsetCode(a, u, a=>{
                const u = Nt.expr(e=>Nt.get(e, i) + Nt.get(e, o) * a)
                  , s = Nt.expr(e=>Nt.get(e, t) + Nt.get(e, r) * Math.cos(Nt.get(e, u)))
                  , l = Nt.expr(e=>Nt.get(e, n) + Nt.get(e, r) * Math.sin(Nt.get(e, u)));
                this.spawnD(e, s, l, u)
            }
            )
        }
        custom(e) {
            this.code.push(e)
        }
        get gr0() {
            return e=>e.gr0
        }
        set gr0(e) {
            this.code.push(t=>(t.gr0 = Nt.get(t, e),
            _t.NEXT))
        }
        get gr1() {
            return e=>e.gr1
        }
        set gr1(e) {
            this.code.push(t=>(t.gr1 = Nt.get(t, e),
            _t.NEXT))
        }
    }
    function Ot(e, t, n) {
        const r = tt.normal(Je.SSGL, .5);
        e.loop(n, n=>{
            e.attack((e,n)=>{
                n.moveNormal(6, !0),
                n.shape(r),
                n.one(t),
                V.Sound.SE_MISSILE_2.play()
            }
            ),
            e.nop(2)
        }
        )
    }
    function It(e) {
        const t = new re;
        tt.normal(Je.SSGL, .5);
        return t.sp = 30,
        t.shape(V.enemy.t01),
        t.move(t.x, Z.add(t.y, 40), 20, q.outCubic),
        Ot(t, Q.D64, e),
        t.move(t.x, Z.add(t.y, 20), 20, q.outQuad),
        t.move(t.x, Z.add(t.y, -80), 30, q.inQuad),
        t.free(),
        t.getCode()
    }
    function zt(e) {
        const t = new re;
        tt.normal(Je.SSGL, .5);
        return t.sp = 1,
        t.d = Q.D0,
        t.shape(V.enemy.t01),
        t.move(Z.add(t.x, 40), t.y, 20, q.outCubic),
        Ot(t, Q.D0, e),
        t.move(Z.add(t.x, 20), t.y, 20, q.outQuad),
        t.move(Z.add(t.x, -80), t.y, 30, q.inQuad),
        t.free(),
        t.getCode()
    }
    function Ft(e) {
        const t = new re;
        tt.normal(Je.SSGL, .5);
        return t.sp = 1,
        t.d = Q.D128,
        t.shape(V.enemy.t01),
        t.move(Z.add(t.x, -40), t.y, 20, q.outCubic),
        Ot(t, Q.D128, e),
        t.move(Z.add(t.x, -20), t.y, 20, q.outQuad),
        t.move(Z.add(t.x, 80), t.y, 30, q.inQuad),
        t.free(),
        t.getCode()
    }
    const Ut = It(42)
      , Wt = zt(42)
      , Bt = Ft(42)
      , jt = It(84)
      , Vt = zt(84)
      , Xt = Ft(84);
    function Ht() {
        const e = new Rt;
        return e.sub(function(e) {
            const t = new Rt;
            t.gr0 = Nt.rand(0, 28);
            const n = Nt.add(Ee + 10, t.gr0)
              , r = Nt.add(Se - 30, t.gr0);
            return t.yset(Wt, xe - 30, n, r, 8, e),
            t
        }(11)),
        e.nop(150),
        e.sub(function() {
            const e = new Rt;
            e.set(Ut, _e, Ee - 30);
            for (let t = 1; t < 5; t++)
                e.nop(10),
                e.set(Ut, _e - 40 * t, Ee - 30),
                e.set(Ut, _e + 40 * t, Ee - 30);
            return e
        }()),
        e.nop(150),
        e.sub(function(e) {
            const t = new Rt;
            t.gr0 = Nt.rand(0, 28);
            const n = Nt.add(Ee + 10, t.gr0)
              , r = Nt.add(Se - 30, t.gr0);
            return t.yset(Bt, we + 30, n, r, 8, e),
            t
        }(11)),
        e
    }
    const Gt = function() {
        const e = new re
          , t = tt.angle(et.ExtraArrow, 1);
        e.sp = 110,
        e.shape(V.enemy.m01),
        e.move(e.x, Z.add(e.y, 200, Z.rand(0, 90)), 60, q.outQuad, ee.SyncPlayer),
        e.loop(8, n=>{
            e.attack((e,r)=>{
                const i = K.D36 - K.D26 * (Z.get(e, n) / 8);
                r.moveAccel(4 + .2 * Z.get(e, n), -.1, 35, !0),
                r.shape(t),
                r.oneS(e.d + i, 6),
                r.oneS(e.d - i, 6),
                V.Sound.SE_MISSILE_2.play()
            }
            ),
            e.nop(2)
        }
        );
        const n = Z.expr(e=>e.x - 800 * Math.cos(e.d))
          , r = Z.expr(e=>e.y - 800 * Math.sin(e.d));
        return e.move(n, r, 150, q.inQuad, ee.None),
        e.getCode()
    }();
    const $t = function() {
        const e = tt.angle(et.Blue, 1)
          , t = tt.angle(et.Red, 1)
          , n = new re;
        n.sp = 1e3,
        n.removeFlag(gt.Damage),
        n.shape(V.enemy.t04);
        const r = n.makeUserVar(K.D128)
          , i = n.makeUserVar(3);
        return n.d = Z.atan2(Z.sub(_e, n.x), Z.sub(400, n.y)),
        n.loop(62, t=>{
            n.legacyMov(n.d, e=>i.get(e), 1),
            n.attack((n,i)=>{
                t(n) % 4 == 0 && (i.moveNormal(7, !0),
                i.shape(e),
                i.way(n.d, r.get(n), 2),
                V.Sound.SE_MISSILE_1.play(),
                r.add(n, -K.D7))
            }
            ),
            n.custom(e=>(i.add(e, -8 / 256),
            J.NEXT))
        }
        ),
        n.attack((e,n)=>{
            tt.normal(Je.Red, 1),
            n.moveNormal(7.2, !0),
            n.shape(t),
            n.way(e.d, r.get(e), 2)
        }
        ),
        n.legacyAcc(Z.add(n.d, K.D128), 0, .5, 30),
        n.free(),
        n.getCode()
    }();
    function Qt(e, t) {
        const n = tt.angle(et.OrangeArrow, 1);
        t.moveNormal(7, !0),
        t.shape(n),
        t.one(e.d),
        V.Sound.SE_MISSILE_2.play()
    }
    function Yt() {
        const e = new Rt;
        return e.gr0 = Nt.rand(K.D0, K.D256),
        e.cset(function(e) {
            const t = new re;
            return t.shape(V.enemy.t02),
            t.sp = 1e3,
            t.autoAttack(3, Qt),
            t.roll(_e, ke, Z.neg(e), K.D192, 180, q.outQuad, ee.SyncDirN),
            t.roll(_e, ke, e, K.D192, 180, q.inQuad, ee.SyncDirN),
            t.free(),
            t.getCode()
        }(200), _e, ke, 300, e.gr0, K.D256, 0, 24),
        e
    }
    function Kt(e, t) {
        const n = tt.llaser(1.8 + .5 * Math.random());
        t.moveNormal(18, !1),
        t.shape(n),
        t.posDeltaXY(4 * Math.random() - 2, 0),
        t.useShadowAdd(!0),
        t.rnd(e.d, K.D1, 1, 0)
    }
    function qt(e, t, n, r) {
        const i = new re;
        i.sp = 1e3,
        i.shape(V.enemy.kani0000);
        const o = i.makeUserVar(i.x)
          , a = i.makeUserVar(i.y);
        return i.autoAttack(1, Kt),
        i.loop(750, u=>{
            i.custom(i=>(i.x = o.get(i) + Math.cos(i.d) * n,
            i.y = a.get(i) + Math.sin(i.d) * n,
            o.set(i, o.get(i) + e),
            a.set(i, a.get(i) + t),
            i.d += r,
            J.NEXT)),
            i.nop(1)
        }
        ),
        i.getCode()
    }
    const Zt = qt(0, 1, 50, .1 * K.D1)
      , Jt = qt(0, 1, 50, .1 * -K.D1);
    const en = function() {
        const e = new re;
        return e.attack((e,t)=>{
            for (let e = 0; e < 4; e++) {
                const e = .7 + .3 * Math.random()
                  , n = tt.angle(et.ExtraArrow, e)
                  , r = Math.random() * K.D4 - K.D2
                  , i = 2 * Math.random() + 2;
                t.moveNormal(i, !0),
                t.shape(n),
                t.oneZ(r)
            }
        }
        ),
        e.getCode()
    }();
    const tn = function() {
        const e = new re;
        return e.sp = 1,
        e.shape(V.enemy.t00),
        e.onKill(en),
        e.roll(Z.add(e.x, -280), e.y, 0, K.D70, 150, q.inQuad, ee.SyncDir),
        e.getCode()
    }();
    const nn = function() {
        const e = new re;
        return e.sp = 1,
        e.shape(V.enemy.t00),
        e.onKill(en),
        e.roll(Z.add(e.x, 280), e.y, 0, -K.D70, 150, q.inQuad, ee.SyncDir),
        e.getCode()
    }();
    function rn(e, t) {
        const n = tt.llaser(1.5 + .5 * Math.random());
        t.moveNormal(18, !1),
        t.shape(n),
        t.posDeltaXY(4 * Math.random() - 2, 0),
        t.useShadowAdd(!0),
        t.rnd(e.d, K.D1, 1, 0)
    }
    const on = function() {
        const e = new re;
        e.sp = 110,
        e.shape(V.enemy.enl_0002),
        e.d = K.D64,
        e.move(e.x, Z.add(e.y, 200), 60, q.outQuad, ee.None),
        e.autoAttack(1, rn),
        e.loop(18, t=>{
            e.move(e.x, Z.add(e.y, -6), 2, q.linear, ee.None),
            e.move(e.x, Z.add(e.y, 4), 2, q.linear, ee.None)
        }
        ),
        e.stopAuto();
        const t = Z.expr(e=>e.x - 800 * Math.cos(e.d))
          , n = Z.expr(e=>e.y - 800 * Math.sin(e.d));
        return e.move(t, n, 150, q.inQuad, ee.None),
        e.getCode()
    }();
    const an = function() {
        const e = new re;
        return e.sp = 200,
        e.shape(V.enemy.enl_0002),
        e.d = K.D0,
        e.autoAttack(1, rn),
        e.move(e.x, Se + 20, 800, q.linear, ee.None),
        e.getCode()
    }();
    const un = function() {
        const e = new re;
        return e.sp = 200,
        e.shape(V.enemy.enl_0002),
        e.d = K.D128,
        e.autoAttack(1, rn),
        e.move(e.x, Se + 20, 800, q.linear, ee.None),
        e.getCode()
    }();
    function sn(e) {
        const t = new Rt;
        return t.set(tn, e, Ee - 30, 13, 18),
        t
    }
    function ln(e) {
        const t = new Rt;
        return t.set(nn, e, Ee - 30, 13, 18),
        t
    }
    function cn(e, t) {
        const n = new Rt;
        return n.set(an, e, Ee - 80, 90, t),
        n
    }
    function dn(e, t) {
        const n = new Rt;
        return n.set(un, e, Ee - 80, 90, t),
        n
    }
    const fn = function() {
        const e = new re
          , t = tt.angle(et.OrangeArrow, .9);
        return e.shape(V.enemy.t02),
        e.custom(e=>(e.sp = 2,
        J.NEXT)),
        e.move(e.x, 400, 100, q.inOutCubic),
        e.attack((e,n)=>{
            n.moveNormal(4, !0),
            n.shape(t),
            n.way(e.d, K.D24, 3)
        }
        ),
        e.move(e.x, 20, 100, q.inOutCubic),
        e.loop_inf(()=>{
            const n = Z.rand(-30, 5)
              , r = Z.rand(-K.D60, K.D60);
            e.roll(160, 240, n, r, 80, q.inOutQuart, ee.SyncPlayer),
            e.loop(8, ()=>{
                e.attack((e,n)=>{
                    n.moveNormal(4, !0),
                    n.shape(t),
                    n.way(e.d, K.D24, 3)
                }
                ),
                e.nop(5)
            }
            )
        }
        ),
        e.loop_inf(()=>{
            e.move(e.x, 400, 100, q.inOutCubic),
            e.move(e.x, 20, 100, q.inOutCubic)
        }
        ),
        e.getCode()
    }();
    !function() {
        const e = new re;
        e.shape(V.enemy.t00);
        const t = Z.add(e.y, 490);
        e.move(e.x, t, 80, q.inCubic),
        e.kill(),
        e.getCode()
    }();
    function hn(e) {
        const t = new re
          , n = Z.rand(xe + 20, we - 20)
          , r = Z.rand(Ee + 20, Ee + 180);
        return t.sp = 16,
        t.shape(V.enemy.t00),
        t.move(n, r, 40, q.outQuart, ee.SyncPlayer),
        t.autoAttack(4, function(e) {
            return (t,n)=>{
                const r = tt.angle(et.PurpleArrow, 1.1);
                n.moveNormal(6, !0),
                n.shape(r),
                n.way(t.d, K.D24 - K.D2 * e, e),
                V.Sound.SE_MISSILE_2.play()
            }
        }(e)),
        t.nop(32),
        t.stopAuto(),
        t.legacyAcc(Z.add(t.d, K.D128), 4, .4, 120),
        t.getCode()
    }
    const pn = hn(1)
      , mn = hn(3);
    const vn = function() {
        const e = new Rt;
        return e.nop(120),
        e.change(function() {
            const e = new Rt;
            return e.sub(function() {
                const e = new Rt;
                return e.set(on, _e - 100, Ee - 80),
                e.set(on, _e + 100, Ee - 80),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.set(Gt, Nt.rand(xe + 80, we - 80), Ee - 30, 80, 3),
                e
            }()),
            e.nop(240),
            e.wait(),
            e.sub(Ht()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                e.gr0 = Nt.rand(0, 28);
                const t = Nt.add(Ee + 10, e.gr0)
                  , n = Nt.add(Se - 30, e.gr0);
                return e.yset(Vt, xe - 40, t, n, 0, 4),
                e.yset(Xt, we + 40, Nt.add(t, 440 / 6), Nt.add(n, 440 / 6), 0, 4),
                e.xset(jt, xe + 30, we - 30, Ee - 30, 0, 5),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.set(pn, Nt.rand(xe, we), xe - 30, 2, 10),
                e.nop(60),
                e.set(pn, Nt.rand(xe, we), xe - 30, 2, 10),
                e.nop(60),
                e.set(pn, Nt.rand(xe, we), xe - 30, 2, 10),
                e.nop(60),
                e.set(pn, Nt.rand(xe, we), xe - 30, 2, 10),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.sub(cn(_e + 40, 4)),
                e.sub(dn(_e - 40, 4)),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.xset(fn, xe + 10, we - 10, Ee - 30, 5, 12),
                e.nop(60),
                e.xset(fn, we - 10, xe + 10, Ee - 30, 5, 12),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.sub(cn(xe + 40, 3)),
                e.nop(320),
                e.sub(dn(we - 40, 3)),
                e
            }()),
            e.wait(),
            e.sub(Yt()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.dset(Zt, _e, Ee - 100, Q.D0, Q.D256, 0, 5),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.set(mn, Nt.rand(xe, we), xe - 30, 2, 10),
                e.nop(60),
                e.set(mn, Nt.rand(xe, we), xe - 30, 2, 10),
                e.nop(60),
                e.set(mn, Nt.rand(xe, we), xe - 30, 2, 10),
                e.nop(60),
                e.set(mn, Nt.rand(xe, we), xe - 30, 2, 10),
                e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                for (let t = 0; t < 4; t++)
                    e.custom(()=>(V.Sound.SE_GFLAME.play(),
                    _t.NEXT)),
                    e.xset($t, _e - 180, _e - 180 + 360, -16, 3, 13),
                    e.custom(()=>(V.Sound.SE_GFLAME.play(),
                    _t.NEXT)),
                    e.xset($t, _e + 180, _e + 180 - 360, -16, 3, 13);
                return e
            }()),
            e.wait(),
            e.sub(function() {
                const e = new Rt;
                return e.dset(Zt, _e + 120, Ee - 100, Q.D0, Q.D256, 0, 3),
                e.nop(180),
                e.dset(Jt, _e - 120, Ee - 100, Q.D0, Q.D256, 0, 3),
                e.nop(180),
                e.dset(Zt, _e + 120, Ee - 100, Q.D0, Q.D256, 0, 3),
                e.nop(600),
                e.sub(sn(we - 100)),
                e.nop(20),
                e.sub(sn(we - 20)),
                e.nop(180),
                e.sub(ln(xe + 100)),
                e.nop(20),
                e.sub(ln(xe + 20)),
                e
            }()),
            e.wait(),
            e.restart(),
            e
        }()),
        e.getCode()
    }();
    class gn {
        constructor(e) {
            this.cmd = e,
            this.type = 2
        }
        init() {
            this.cmd.reset()
        }
        set(e, t, n) {
            const r = this.cmd;
            switch (r.reset(),
            r.pos(t),
            r.target(n),
            this.type) {
            case 0:
                this.way(r, e);
                break;
            case 1:
                this.one(r, e);
                break;
            case 2:
                this.rnd(r, e)
            }
            this.type = (this.type + 1) % 3
        }
        way(e, t) {
            const n = tt.normal(Je.Blue, .6);
            e.shape(n);
            const r = 2 + Math.min(4, t / 20)
              , i = 1 + Math.min(30, t / 3)
              , o = Math.random() * Q.D8 - Q.D4;
            e.moveNormal(r, !0),
            e.wayZ(o, .4 * Q.D1, i)
        }
        rnd(e, t) {
            const n = tt.normal(Je.Blue, .8);
            e.shape(n);
            const r = 1 + Math.min(2, t / 40)
              , i = .5 * r
              , o = 1 + Math.min(33, t / 3);
            e.moveNormal(r, !0),
            e.rndZ(0, Q.D100, o, i)
        }
        one(e, t) {
            const n = tt.normal(Je.Blue, .6);
            e.shape(n);
            const r = 2 + Math.min(4, t / 20)
              , i = 1 + Math.min(30, t / 3)
              , o = Math.random() * Q.D8 - Q.D4;
            e.moveNormal(r, !0),
            e.oneSZ(o, i)
        }
    }
    class yn {
        constructor(e, t, n) {
            this.id = e,
            this.comboMan = t,
            this.comboTarget = null,
            this.area = {
                sx: xe,
                sy: Ee,
                ex: we,
                ey: Se
            },
            this.lastInput = new m,
            this.rank = -1,
            this.blendColor = [0, 0, 0, 0],
            this.ai = null,
            n ? this.createNormal() : this.createLite()
        }
        createNormal() {
            const e = new Be
              , t = new it(this.area,e)
              , n = new ut(this,this.area,t)
              , r = new ft(n)
              , i = new mt(this.area,e)
              , o = new wt(this.area,i,n,e)
              , a = new kt(o)
              , u = new Tt(o,t)
              , s = new Ct(n,i);
            this.player = n,
            this.enemySet = a,
            this.effect = e,
            this.comboAttackCommand = new gn(i.getShotCommand()),
            this.ai = new Dt(n,o,i),
            this.initList = [t, a, o, i, r, e],
            this.updateList = [t, a, o, i, r, e, u, s];
            const l = this.renderList = new be;
            l.addPool("BG", r),
            l.addFunc("Blacksmoke", t=>e.renderBlacksmoke(t)),
            l.setAlphaMode(fe.Shadow),
            l.addFunc("EnemyAttack(S)", e=>i.renderShadow(e, !1)),
            l.setAlphaMode(fe.Add),
            l.addFunc("Buzz", t=>e.renderBuzz(t)),
            l.addFunc("Explosion", t=>e.renderExplosion(t)),
            l.setAlphaMode(fe.Normal),
            l.addPool("Enemy", o),
            l.addPool("PlayerShot", t),
            l.addPool("Player", n),
            l.setAlphaMode(fe.Add),
            l.addFunc("EnemyAttack(S)", e=>i.renderShadow(e, !0)),
            l.setAlphaMode(fe.Normal),
            l.addPool("EnemyAttack", i),
            l.setAlphaMode(fe.Add),
            l.addFunc("PlayerShot(E)", e=>t.renderEffect(e)),
            l.addFunc("Enemy(E)", e=>o.renderEffect(e)),
            l.addFunc("EnemyAttack(E)", e=>i.renderEffect(e)),
            l.setAlphaMode(fe.Normal),
            l.addFunc("Fader", e=>{
                const t = this.blendColor;
                0 !== t[3] && e.renderColor(V.Font.white, 0, 0, t, 30)
            }
            ),
            l.addFunc("Text", t=>e.renderText(t)),
            this.debugList = [t, a, o, i, r, n, e, l],
            this.debugRenderList = [n, t, o, i]
        }
        createLite() {
            const e = new We
              , t = new it(this.area,e)
              , n = new ut(this,this.area,t)
              , r = new ft(n)
              , i = new mt(this.area,e)
              , o = new wt(this.area,i,n,e)
              , a = new kt(o)
              , u = new Tt(o,t)
              , s = new Ct(n,i);
            this.player = n,
            this.enemySet = a,
            this.effect = e,
            this.comboAttackCommand = new gn(i.getShotCommand()),
            this.ai = new Dt(n,o,i),
            this.initList = [t, a, o, i, r],
            this.updateList = [t, a, o, i, r, u, s],
            this.debugList = [],
            this.debugRenderList = [];
            const l = this.renderList = new be;
            l.setAlphaMode(fe.Normal),
            l.addPool("BG", r),
            l.addPool("Enemy", o),
            l.addPool("Player", n),
            l.setAlphaMode(fe.Add),
            l.addFunc("EnemyAttack(SA)", e=>i.renderShadow(e, !0)),
            l.setAlphaMode(fe.Normal),
            l.addPool("EnemyAttack", i),
            l.addFunc("Rank", e=>this.renderRank(e))
        }
        renderRank(e, t=!1) {
            t && e.renderColor(V.Font.white, 0, 0, ce.V99GraySub, 30);
            const n = this.blendColor;
            if (0 !== n[3] && e.renderColor(V.Font.white, 0, 0, n, 30),
            this.rank >= 0) {
                const t = this.getRank().toString();
                1 === this.rank ? e.textS(_e, 128, "WON", ce.Pink, te.Center, 5) : e.textS(_e, 128, "LOST", ce.Cyan, te.Center, 5),
                e.textS(_e, Se - 170, t, ce.White, te.Center, 8)
            } else {
                const t = this.comboTarget;
                t && t.id === Mt.MainAreaID && e.textS(_e, Se - 80, "DANGER", ce.Yellow, te.Center, 4);
                const n = this.getPlayerSP() + "%";
                e.textS(2, 2, n, ce.White, te.Left, 3)
            }
        }
        init(e, t) {
            this.rank = -1,
            this.player.init(e),
            this.blendColor = [0, 0, 0, 1];
            for (const e of this.initList)
                e.init();
            let n = e === rt.Hirano ? "HIRANON-" : "VIVIT-";
            n += t,
            this.effect.setText(_e, ke - 15, n, Ce.GameStart, 0),
            this.effect.setText(_e, ke + 15, "2019/04/01 VER", Ce.GameStart, 40),
            this.ai.init(),
            this.enemySet.set(vn),
            this.comboAttackCommand.init()
        }
        recvComboAttack(e, t) {
            0 === this.id && V.Sound.SE_MISSILE_2.play(),
            this.comboAttackCommand.set(e, t, this.getPlayerPos())
        }
        sendComboAttack(e) {
            this.comboTarget && (0 === this.id && V.Sound.SE_OCTSTAR.play(),
            this.comboMan.set(e, this, this.comboTarget))
        }
        setTarget(e) {
            this.comboTarget = e
        }
        getID() {
            return this.id
        }
        getPlayerPos() {
            return this.player
        }
        getPlayerSP() {
            return this.player.sp
        }
        getPlayerID() {
            return 1 !== this.player.playerID ? 0 : 1
        }
        getBuzzCombo() {
            return this.player.combo.combo
        }
        getComboLevel() {
            return this.player.combo.level
        }
        playerDead() {
            return this.player.dead
        }
        getRank() {
            return this.rank
        }
        setRank(e) {
            this.rank = e,
            0 === this.getID() && (1 === e ? (V.Sound.SE_LVUP2.play(),
            this.effect.setText(_e, ke, "WON", Ce.GameStart, 0),
            this.player.dead = !0) : (this.effect.setText(_e, ke - 20, "LOST", Ce.GameStart, 0),
            this.effect.setText(_e, ke + 20, e.toString(), Ce.GameStart, 0)))
        }
        setInput(e) {
            this.player.dead ? this.lastInput.reset() : this.lastInput = e
        }
        setAIInput() {
            this.player.dead ? this.lastInput.reset() : this.ai.update(this.lastInput)
        }
        update() {
            if (this.rank >= 0)
                return this.blendColor[3] = Math.min(.85, this.blendColor[3] + .04),
                this.effect.update(),
                !0;
            this.blendColor[3] = Math.max(0, this.blendColor[3] - .02),
            this.player.update(this.lastInput);
            for (const e of this.updateList)
                e.update();
            return !this.player.dead
        }
        render(e, t=!1) {
            t ? (this.renderRank(e, !0),
            e.flush()) : this.renderList.render(e)
        }
        debug(e) {
            for (const t of this.debugList)
                t.debug(e)
        }
        debug_render(e) {
            for (const t of this.debugRenderList)
                t.debug_render(e)
        }
    }
    const bn = 256
      , xn = 40;
    class wn {
        constructor() {
            this.id = -1,
            this.localPos = {
                x: 0,
                y: 0
            },
            this.worldPos = {
                x: 0,
                y: 0
            }
        }
        set(e, t, n, r) {
            this.id = e,
            this.localPos.x = t,
            this.localPos.y = n,
            r.getWorldFromID(this.worldPos, e, this.localPos)
        }
        layoutChanged(e) {
            e.getWorldFromID(this.worldPos, this.id, this.localPos)
        }
    }
    class _n extends De {
        constructor(e) {
            super(),
            this.level = 0,
            this.toGame = null,
            this.fromPos = new wn,
            this.toPos = new wn,
            this.pos = {
                x: 0,
                y: 0
            },
            this.count = 0,
            this.needRender = !1,
            this.layout = e
        }
        setParam(e, t, n) {
            const r = this.layout
              , i = t.getPlayerPos();
            this.level = e,
            this.toGame = n,
            this.fromPos.set(t.getID(), i.x, i.y, r);
            const o = we - xe - 10
              , a = Math.random() * o + 5;
            this.toPos.set(n.getID(), a, Ee + 5, r),
            this.pos.x = this.fromPos.worldPos.x,
            this.pos.y = this.fromPos.worldPos.y,
            this.count = 0,
            this.needRender = t.getID() === Mt.MainAreaID || n.getID() === Mt.MainAreaID
        }
        update() {
            if (this.count >= xn)
                return this.toGame.recvComboAttack(this.level, this.toPos.localPos),
                void this.kill();
            const e = this.count / xn
              , t = this.fromPos
              , n = this.toPos
              , r = this.layout;
            t.layoutChanged(r),
            n.layoutChanged(r);
            const i = n.worldPos.x - t.worldPos.x
              , o = n.worldPos.y - t.worldPos.y
              , a = Math.sqrt(i * i + o * o);
            let u = 0
              , s = 0;
            if (0 !== a) {
                const e = 100 / a;
                i < 0 ? (u = -o * e,
                s = i * e) : (u = o * e,
                s = -i * e)
            }
            this.pos.x = t.worldPos.x + i * e + u * Math.sin(e * Q.D128),
            this.pos.y = t.worldPos.y + o * e + s * Math.sin(e * Q.D128),
            this.count += 1
        }
        render(e) {
            this.needRender && e.renderC(V.Shot.shot0013, this.pos.x, this.pos.y, 2)
        }
    }
    class En {
        constructor(e) {
            this.pool = new Pe(()=>new _n(e),bn),
            this.layout = e
        }
        init() {
            this.pool.freeAll()
        }
        set(e, t, n) {
            const r = this.pool.spawn();
            null !== r && r.setParam(e, t, n)
        }
        update() {
            this.layout;
            this.pool.forEach(e=>e.update()),
            this.pool.gbc()
        }
        render(e) {
            this.pool.forEach(t=>t.render(e))
        }
        debug(e) {}
    }
    var Sn = function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function u(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    };
    class kn {
        constructor(e, t, n, r) {
            this.debugMan = null,
            this.showCollision = !1,
            this.paused = !1,
            this.shutdown = !1,
            this.forceRedraw98 = !0,
            this.conf = r,
            this.stats = new ge,
            this.count = 0,
            this.frame = 0,
            this.afterGameOver = 0,
            this.frameSkip = !1,
            this.touchWeight = 1,
            this.canvas = e,
            this.renderer = t,
            this.event = n,
            this.lastUpdate = performance.now(),
            this.writeCount = 0,
            this.fbuffer = t.createFrameBuffer(),
            this.layout = new Mt;
            const i = {
                mouseHideStart: ()=>{
                    this.showCursor(!1)
                }
                ,
                mouseHideEnd: ()=>{
                    this.showCursor(!0)
                }
                ,
                toggleDebugWindow: ()=>{}
                ,
                togglePause: ()=>{}
                ,
                reload: ()=>{}
            };
            this.input = new w(i),
            this.comboAttack = new En(this.layout),
            this.games = [],
            this.totalPlayers = 99;
            for (let e = 0; e < this.totalPlayers; e++)
                this.games[e] = new yn(e,this.comboAttack,e === Mt.MainAreaID);
            this.activePlayerID = new Set
        }
        showCursor(e) {
            const t = this.canvas.classList;
            e ? t.remove("hide-cursor") : t.add("hide-cursor")
        }
        getPassedFrames() {
            return this.frame
        }
        getPlayerRank() {
            return this.games[0].getRank()
        }
        getTotalPlayers() {
            return this.totalPlayers
        }
        getPlayerID() {
            return this.games[0].getPlayerID()
        }
        getComboLevel() {
            return this.games[0].getComboLevel()
        }
        get_vcode() {
            return this.input.get_vcode()
        }
        togglePause() {
            this.paused = !this.paused
        }
        setDebugManager(e) {
            this.debugMan = e
        }
        init() {
            return Sn(this, void 0, void 0, function*() {
                this.reload(),
                this.update(),
                this.render(),
                requestAnimationFrame(()=>this.mainLoop())
            })
        }
        cleanup() {
            this.shutdown = !0,
            this.input.cleanup()
        }
        reload() {
            this.event.beforeReload(this);
            const e = this.conf.count
              , t = e * e * 2 + 1
              , n = this.activePlayerID;
            this.writeCount = 0,
            this.count = 0,
            this.frame = 0,
            this.afterGameOver = 0,
            V.Music.BSR_00R.stop(),
            this.activePlayerID.clear(),
            this.comboAttack.init();
            const r = this.games;
            let i = this.conf.player;
            for (let e = 0; e < t; e++) {
                const o = r[e];
                o.init(i, t),
                n.add(o.getID()),
                i = Math.random() > .5 ? rt.Vivit : rt.Hirano
            }
            this.totalPlayers = t,
            this.layout.create(e),
            this.changeTarget(),
            V.audioManager.leaveMuteSection(),
            V.Music.BSR_00R.play()
        }
        selectTarget(e, t) {
            if (e.length <= 1)
                return null;
            let n = Math.floor(Math.random() * e.length);
            return e[n] === t && (n = (n + 1) % e.length),
            this.games[e[n]]
        }
        changeTarget() {
            const e = this.totalPlayers
              , t = Array.from(this.activePlayerID.entries()).map(e=>e[0])
              , n = this.games;
            for (let r = 0; r < e; r++) {
                const e = n[r];
                if (!e.playerDead()) {
                    const n = this.selectTarget(t, e.getID());
                    e.setTarget(n)
                }
            }
        }
        mainLoop() {
            if (this.shutdown)
                return;
            requestAnimationFrame(()=>this.mainLoop());
            let e = !0;
            if (30 === this.conf.fps && (this.count % 2 == 0 && (e = !1),
            this.count += 1),
            V.audioManager.update(),
            this.input.poll(1.25 * this.touchWeight),
            0 === this.conf.fps) {
                const e = performance.now();
                let t = e - this.lastUpdate
                  , n = 5;
                this.stats.beginUpdate();
                do {
                    this.update(),
                    t -= 1e3 / 60,
                    n -= 1
                } while (t > 1e3 / 60 && n > 0);this.stats.endUpdate(),
                this.lastUpdate = e
            } else
                this.stats.beginUpdate(),
                this.update(),
                this.stats.endUpdate();
            this.writeCount += 1,
            e && (this.stats.begin(),
            this.stats.beginRender(),
            this.render(),
            this.stats.endRender(),
            this.stats.end()),
            this.stats.beginDebug(),
            this.debug(),
            this.stats.endDebug()
        }
        debug() {
            const e = this.debugMan;
            if (null !== e && e.showProperty) {
                this.games[0].debug(e),
                this.debugKeycode(e),
                this.debugMenu(e);
                {
                    const t = this.canvas.parentElement
                      , n = `${t.clientWidth} x ${t.clientHeight}`
                      , r = [a.str("FPS", this.stats.getFps()), a.float("Update", this.stats.getUpdateMs()), a.float("Render", this.stats.getRenderMs()), a.float("Debug", this.stats.getDebugMs()), a.str("Skip", this.frameSkip ? "ON" : "OFF"), a.str("Size", n)];
                    e.updateStruct("Performance", r)
                }
                e.notifyProperty()
            }
        }
        update() {
            if (this.paused)
                return;
            const e = this.activePlayerID.size;
            let t = !1;
            const n = this.games;
            this.comboAttack.update(),
            n[Mt.MainAreaID].setInput(this.get_vcode());
            const r = this.totalPlayers;
            for (let e = 1; e < r; e++)
                n[e].setAIInput();
            for (let i = 0; i < r; i++) {
                const r = n[i];
                r.update() || (r.setRank(e),
                this.activePlayerID.delete(r.getID()),
                t = !0),
                V.audioManager.enterMuteSection()
            }
            V.audioManager.leaveMuteSection(),
            1 === this.activePlayerID.size && (this.activePlayerID.forEach(e=>{
                n[e].setRank(1)
            }
            ),
            this.activePlayerID.clear()),
            t && this.changeTarget(),
            n[0].playerDead() ? (60 === this.afterGameOver && this.event.onGameOver(this),
            this.afterGameOver += 1) : this.frame += 1
        }
        resize() {
            const e = this.layout
              , t = this.canvas;
            this.forceRedraw98 = e.resize(t),
            this.touchWeight = e.getTouchWeight()
        }
        debugMenu(e) {
            const t = e=>e ? " [O N]" : " [OFF]"
              , n = [a.event("Collision", {
                label: t(this.showCollision),
                click: ()=>{
                    this.showCollision = !this.showCollision
                }
            }), a.event("Reload", {
                label: "",
                click: ()=>{
                    this.reload()
                }
            }), a.event("Pause", {
                label: t(this.paused),
                click: ()=>{
                    this.togglePause()
                }
            }), a.event("InitConfig", {
                label: "",
                click: ()=>{
                    this.conf.clear(),
                    window.location.reload()
                }
            })];
            e.updateStruct("Debug", n)
        }
        debugKeycode(e) {
            const t = this.get_vcode();
            let n = "";
            t.shot && (n += "[SHOT]"),
            t.bomb && (n += "[BOMB]"),
            t.slow && (n += "[SLOW]");
            const r = [a.float("dx", t.dx), a.float("dy", t.dy), a.float("sx", t.sx), a.float("sy", t.sy), a.str("button", n)];
            e.updateStruct("Input", r)
        }
        render() {
            const e = this.renderer;
            this.resize();
            {
                const t = this.layout.getSubarea();
                t.width >= 0 && (e.clear(0, 0, t.width, t.height, ce.V99Gray),
                e.clear(t.rightAreaX, 0, t.width, t.height, ce.V99Gray))
            }
            const t = this.games[Mt.MainAreaID];
            this.layout.setViewport(this.renderer, Mt.MainAreaID),
            t.render(e),
            this.renderHUD(e, t),
            e.flush(),
            this.showCollision && (e.setAlphaMode(fe.None),
            e.beginDebugLine(),
            this.games[0].debug_render(e),
            e.endDebugLine()),
            this.conf.renderMode !== he.None && this.render98(e),
            this.conf.renderMode !== he.None && (this.layout.setViewport(e, Mt.ScreenAreaID),
            e.setAlphaMode(fe.Add),
            this.comboAttack.render(e),
            e.flush(),
            e.resetVirtualSize()),
            e.setAlphaMode(fe.Normal)
        }
        render98(e) {
            const t = this.layout;
            if (!t.canRenderSubarea())
                return;
            const n = this.totalPlayers
              , r = Math.floor(Math.max(1, Math.sqrt(n / 3)));
            let i = this.forceRedraw98;
            const o = this.writeCount % r;
            r <= 2 && (i = !0);
            const a = this.games
              , u = this.conf.renderMode === he.Simple
              , s = this.canvas;
            u ? i = !0 : (this.fbuffer.resizeAndBind(s.width, s.height),
            this.renderer.setTexture());
            for (let s = 1; s < n; s++) {
                const n = a[s];
                (s % r === o || i) && (t.setViewport(e, s),
                n.render(e, u))
            }
            if (!u) {
                this.fbuffer.unbindBuffer(),
                this.fbuffer.bindTexture(),
                this.renderer.setTexture(),
                t.setViewport(e, Mt.ScreenAreaID);
                const n = {
                    x: 0,
                    y: 0,
                    w: s.width,
                    h: s.height,
                    uuid: null,
                    uv: [0, 1, 1, 0],
                    col: ce.White,
                    tex: this.fbuffer.tex
                };
                this.renderer.render(n, 0, 0, 1)
            }
        }
        renderHUD(e, t) {
            const n = t.getPlayerSP() + "%"
              , r = `${this.activePlayerID.size}/${this.totalPlayers}`
              , i = t.getBuzzCombo().toString()
              , o = "LV" + t.getComboLevel().toString();
            e.text(2, 3, "?", ce.White, te.Left),
            e.text(2, Se - 16 - 3, r, ce.White, te.Left),
            e.text(_e, 3, o, ce.Pink, te.Center),
            e.text(16, 2, n, ce.White, te.Left),
            e.text(318, 16, i, ce.Orange, te.Right),
            e.text(318, 3, "KASURI", ce.White, te.Right),
            e.text(318, Se - 16 - 3, this.stats.getFps(), ce.White, te.Right)
        }
    }
    function Tn(e) {
        const t = e.data
          , [n,o] = i.useState(!1);
        let a = t.val
          , u = null
          , s = "";
        switch (t.type) {
        case r.String:
            break;
        case r.Int:
            a = a.toFixed(0);
            break;
        case r.Count:
            a = a.map(e=>parseInt(e, 10)).join(" / ");
            break;
        case r.Float:
            a = a.toFixed(5);
            break;
        case r.Event:
            const l = a;
            u = l.click,
            a = l.label,
            s = "event";
            break;
        case r.Struct:
            if (n) {
                u = (()=>{
                    o(!1)
                }
                );
                const n = a.map(t=>i.createElement(Tn, {
                    key: t.key,
                    data: t,
                    level: e.level + 1
                }));
                return i.createElement(i.Fragment, null, i.createElement("tr", {
                    className: "header",
                    onClick: u
                }, i.createElement("td", {
                    colSpan: 2
                }, "- ", t.key)), n)
            }
            return u = (()=>{
                o(!0)
            }
            ),
            i.createElement("tr", {
                className: "header",
                onClick: u,
                title: "クリックして展開"
            }, i.createElement("td", {
                colSpan: 2
            }, "+ ", t.key))
        }
        const l = {
            paddingLeft: 20 * e.level
        };
        return i.createElement("tr", {
            onClick: u,
            className: s
        }, i.createElement("td", {
            style: l
        }, t.key), i.createElement("td", null, a))
    }
    class Cn extends i.Component {
        constructor(e) {
            super(e),
            this.state = {
                data: [],
                hide: !0
            },
            this.listener = (e=>{
                null === e ? this.setState({
                    hide: !0
                }) : this.setState({
                    hide: !1,
                    data: e
                })
            }
            )
        }
        componentDidMount() {
            this.props.debug.observeProperty(this.listener)
        }
        componentWillUnmount() {
            this.props.debug.unobserveProperty(this.listener)
        }
        render() {
            if (this.state.hide)
                return null;
            const e = this.state.data.map(e=>i.createElement(Tn, {
                key: e.key,
                data: e,
                level: 0
            }));
            return i.createElement("div", {
                className: "debug-window property-area"
            }, i.createElement("table", {
                className: "debug"
            }, i.createElement("tbody", null, e)))
        }
    }
    class Dn extends i.Component {
        constructor(e) {
            super(e),
            this.state = {
                data: [],
                hide: !0
            },
            this.listener = (e=>{
                e ? this.setState({
                    data: e,
                    hide: !1
                }) : this.setState({
                    hide: !0
                })
            }
            )
        }
        componentDidMount() {
            this.props.debug.observeLog(this.listener)
        }
        componentWillUnmount() {
            this.props.debug.unobserveLog(this.listener)
        }
        render() {
            if (this.state.hide)
                return null;
            const e = this.state.data.map((e,t)=>i.createElement("div", {
                className: "log",
                key: t
            }, e.text.toString()));
            return i.createElement("div", {
                className: "debug-window log-area"
            }, i.createElement("div", {
                className: "header"
            }, "LOG"), e)
        }
    }
    var Pn = n(5);
    function Ln(e) {
        const t = {
            url: e.url,
            hashtags: e.hash,
            text: e.text
        }
          , n = "https://web.archive.org/web/20190331193806/https://twitter.com/share?" + Object(Pn.stringify)(t);
        return i.createElement("a", {
            href: n,
            target: "new",
            rel: "noopener"
        }, i.createElement("div", {
            className: "item"
        }, e.title))
    }
    function An(e) {
        if (!e.visible)
            return null;
        const t = e.debug
          , n = e.game;
        return i.createElement(i.Fragment, null, i.createElement("div", {
            onClick: ()=>t.toggleShowProperty(),
            className: "switch debug-sw"
        }, "デバッグ"), i.createElement("div", {
            onClick: ()=>t.toggleShowLog(),
            className: "switch log-sw"
        }, "ログ"), i.createElement("div", {
            onClick: ()=>n.reload(),
            className: "switch reload-sw"
        }, "やり直す"), i.createElement("div", {
            onClick: ()=>window.location.reload(),
            className: "switch title-sw"
        }, "タイトル"), i.createElement(Cn, {
            debug: t
        }), i.createElement(Dn, {
            debug: t
        }))
    }
    function Mn(e) {
        const t = i.createElement("img", {
            className: "jump",
            src: "./manual/bit.png"
        })
          , n = (i.createElement("img", {
            className: "rotate",
            src: "./manual/gyoku.png"
        }),
        e.game)
          , r = n.getPlayerRank()
          , o = t
          , a = Math.floor(n.getPassedFrames() / 60)
          , u = `${r}位`
          , s = `${1 === n.getPlayerID() ? "HIRANON" : "VIVIT"}-${n.getTotalPlayers()} : ${u} (${a}秒生存) LV${n.getComboLevel()}`
          , l = r > 1 ? `ゲームオーバー / ${u}` : "勝ち残りました";
        return i.createElement("div", {
            className: "menu show-menu"
        }, i.createElement("div", {
            className: "title"
        }, o, " ", l, " ", o), i.createElement(Ln, {
            title: "結果をツイートする",
            text: s,
            hash: "VIVIT99",
            url: "https://web.archive.org/web/20190331193806/https://ss-do.sakura.ne.jp/v99"
        }), i.createElement("div", {
            onClick: ()=>{
                e.close(),
                n.reload()
            }
            ,
            className: "item"
        }, "リトライ"), i.createElement("div", {
            onClick: ()=>window.location.reload(),
            className: "item"
        }, "タイトルに戻る"))
    }
    var Nn = function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function u(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(e, t || [])).next())
        }
        )
    };
    const Rn = !1
      , On = !1
      , In = 320
      , zn = 480
      , Fn = `background: url('${location.href}icon/v99.png') no-repeat left 0; line-height: 32px; font-weight: bold;`;
    console.log("%c       VIVIT-99  (2019/04/01)", Fn),
    window.addEventListener("load", ()=>{
        const e = new ve
          , t = new u;
        !function(e) {
            "serviceWorker"in navigator ? navigator.serviceWorker.register("./service_worker.js").then(t=>{
                e.log("ServiceWorker が登録されました")
            }
            ).catch(t=>{
                e.log(t.toString())
            }
            ) : e.log("ServiceWorker が登録できませんでした")
        }(t),
        function(e, t) {
            Nn(this, void 0, void 0, function*() {
                const n = document.getElementsByTagName("html")[0]
                  , r = document.getElementById("main")
                  , a = document.getElementById("game")
                  , u = document.getElementById("title")
                  , s = document.getElementById("game-ui")
                  , l = document.getElementById("debug-ui");
                window.v99conf = e,
                r.addEventListener("contextmenu", e=>(e.preventDefault(),
                !1));
                const c = ()=>{
                    V.audioManager.initialize(e)
                }
                  , d = new pe(a,[In, zn]);
                Rn && On ? (c(),
                yield V.load(d, t, e=>Nn(this, void 0, void 0, function*() {}))) : yield V.load(d, t, t=>Nn(this, void 0, void 0, function*() {
                    100 === t ? (Object(o.render)(i.createElement(p, {
                        conf: e,
                        progress: t,
                        hide: !1,
                        onClick: c
                    }), u),
                    yield V.audioManager.wait(),
                    Object(o.unmountComponentAtNode)(u)) : Object(o.render)(i.createElement(p, {
                        conf: e,
                        progress: t,
                        hide: !1,
                        onClick: c
                    }), u)
                })),
                n.classList.add("fixed-height");
                let f = new kn(a,d,{
                    onGameOver: e=>{
                        Object(o.render)(i.createElement(Mn, {
                            game: e,
                            close: ()=>Object(o.unmountComponentAtNode)(s)
                        }), s)
                    }
                    ,
                    beforeReload: e=>{
                        Object(o.unmountComponentAtNode)(s)
                    }
                },e);
                f.setDebugManager(t),
                f.init(),
                u.style.display = "none",
                a.width = window.innerWidth,
                a.height = window.innerHeight,
                r.style.display = "block",
                Rn && Object(o.render)(i.createElement(An, {
                    visible: !0,
                    debug: t,
                    game: f
                }), l)
            })
        }(e, t)
    }
    )
}
]);
/*
     FILE ARCHIVED ON 19:38:06 Mar 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:16:00 Jun 18, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 30.93 (3)
  esindex: 0.009
  captures_list: 48.249
  CDXLines.iter: 11.821 (3)
  PetaboxLoader3.datanode: 37.438 (4)
  exclusion.robots: 0.365
  exclusion.robots.policy: 0.328
  RedisCDXSource: 1.71
  PetaboxLoader3.resolve: 125.252
  load_resource: 161.026
*/
