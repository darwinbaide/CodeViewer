function() {
    return function() {
        var k = this;

        function l(a) { return void 0 !== a }

        function m(a) { return "string" == typeof a }

        function aa(a, b) { a = a.split("."); var c = k;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());) !a.length && l(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} }

        function ba(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }

        function ca(a, b, c) { return a.call.apply(a.bind, arguments) }

        function da(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d); return a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

        function ea(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea = ca : ea = da; return ea.apply(null, arguments) }

        function fa(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var b = c.slice();
                b.push.apply(b, arguments); return a.apply(this, b) } }

        function p(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.L = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.K = function(a, c, f) { for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e]; return b.prototype[c].apply(a, d) } };

        function ga(a, b) { this.code = a;
            this.a = q[a] || ha;
            this.message = b || "";
            a = this.a.replace(/((?:^|\s+)[a-z])/g, function(a) { return a.toUpperCase().replace(/^[\s\xa0]+/g, "") });
            b = a.length - 5; if (0 > b || a.indexOf("Error", b) != b) a += "Error";
            this.name = a;
            a = Error(this.message);
            a.name = this.name;
            this.stack = a.stack || "" }
        p(ga, Error);
        var ha = "unknown error",
            q = { 15: "element not selectable", 11: "element not visible" };
        q[31] = ha;
        q[30] = ha;
        q[24] = "invalid cookie domain";
        q[29] = "invalid element coordinates";
        q[12] = "invalid element state";
        q[32] = "invalid selector";
        q[51] = "invalid selector";
        q[52] = "invalid selector";
        q[17] = "javascript error";
        q[405] = "unsupported operation";
        q[34] = "move target out of bounds";
        q[27] = "no such alert";
        q[7] = "no such element";
        q[8] = "no such frame";
        q[23] = "no such window";
        q[28] = "script timeout";
        q[33] = "session not created";
        q[10] = "stale element reference";
        q[21] = "timeout";
        q[25] = "unable to set cookie";
        q[26] = "unexpected alert open";
        q[13] = ha;
        q[9] = "unknown command";
        ga.prototype.toString = function() { return this.name + ": " + this.message };
        var ia = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };

        function ja(a, b) { this.width = a;
            this.height = b }
        ja.prototype.toString = function() { return "(" + this.width + " x " + this.height + ")" };
        ja.prototype.ceil = function() { this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height); return this };
        ja.prototype.floor = function() { this.width = Math.floor(this.width);
            this.height = Math.floor(this.height); return this };
        ja.prototype.round = function() { this.width = Math.round(this.width);
            this.height = Math.round(this.height); return this };

        function ka(a, b) { var c = la; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
        var ma = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") };

        function na(a, b) { return a < b ? -1 : a > b ? 1 : 0 }

        function oa(a) { return String(a).replace(/\-([a-z])/g, function(a, c) { return c.toUpperCase() }) };
        /*

         The MIT License

         Copyright (c) 2007 Cybozu Labs, Inc.
         Copyright (c) 2012 Google Inc.

         Permission is hereby granted, free of charge, to any person obtaining a copy
         of this software and associated documentation files (the "Software"), to
         deal in the Software without restriction, including without limitation the
         rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
         sell copies of the Software, and to permit persons to whom the Software is
         furnished to do so, subject to the following conditions:

         The above copyright notice and this permission notice shall be included in
         all copies or substantial portions of the Software.

         THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
         FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
         IN THE SOFTWARE.
        */
        function pa(a, b, c) { this.a = a;
            this.b = b || 1;
            this.f = c || 1 };

        function qa(a) { this.b = a;
            this.a = 0 }

        function ra(a) { a = a.match(sa); for (var b = 0; b < a.length; b++) ta.test(a[b]) && a.splice(b, 1); return new qa(a) }
        var sa = /\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,
            ta = /^\s/;

        function t(a, b) { return a.b[a.a + (b || 0)] }

        function u(a) { return a.b[a.a++] }

        function ua(a) { return a.b.length <= a.a };
        var v;
        a: { var va = k.navigator; if (va) { var wa = va.userAgent; if (wa) { v = wa; break a } }
            v = "" }

        function x(a) { return -1 != v.indexOf(a) };

        function y(a, b) { this.h = a;
            this.c = l(b) ? b : null;
            this.b = null; switch (a) {
                case "comment":
                    this.b = 8; break;
                case "text":
                    this.b = 3; break;
                case "processing-instruction":
                    this.b = 7; break;
                case "node":
                    break;
                default:
                    throw Error("Unexpected argument"); } }

        function xa(a) { return "comment" == a || "text" == a || "processing-instruction" == a || "node" == a }
        y.prototype.a = function(a) { return null === this.b || this.b == a.nodeType };
        y.prototype.f = function() { return this.h };
        y.prototype.toString = function() { var a = "Kind Test: " + this.h;
            null === this.c || (a += z(this.c)); return a };

        function ya(a, b) { this.j = a.toLowerCase();
            a = "*" == this.j ? "*" : "http://www.w3.org/1999/xhtml";
            this.c = b ? b.toLowerCase() : a }
        ya.prototype.a = function(a) { var b = a.nodeType; if (1 != b && 2 != b) return !1;
            b = l(a.localName) ? a.localName : a.nodeName; return "*" != this.j && this.j != b.toLowerCase() ? !1 : "*" == this.c ? !0 : this.c == (a.namespaceURI ? a.namespaceURI.toLowerCase() : "http://www.w3.org/1999/xhtml") };
        ya.prototype.f = function() { return this.j };
        ya.prototype.toString = function() { return "Name Test: " + ("http://www.w3.org/1999/xhtml" == this.c ? "" : this.c + ":") + this.j };

        function za(a) { switch (a.nodeType) {
                case 1:
                    return fa(Aa, a);
                case 9:
                    return za(a.documentElement);
                case 11:
                case 10:
                case 6:
                case 12:
                    return Ba;
                default:
                    return a.parentNode ? za(a.parentNode) : Ba } }

        function Ba() { return null }

        function Aa(a, b) { if (a.prefix == b) return a.namespaceURI || "http://www.w3.org/1999/xhtml"; var c = a.getAttributeNode("xmlns:" + b); return c && c.specified ? c.value || null : a.parentNode && 9 != a.parentNode.nodeType ? Aa(a.parentNode, b) : null };

        function Ca(a, b) { if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, 0) : -1; for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1 }

        function A(a, b) { for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) }

        function Da(a, b) { for (var c = a.length, d = [], e = 0, f = m(a) ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) { var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h) }
            return d }

        function Ea(a, b, c) { var d = c;
            A(a, function(c, f) { d = b.call(void 0, d, c, f, a) }); return d }

        function Fa(a, b) { for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1 }

        function Ga(a, b) { for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0 }

        function Ha(a, b) { a: { for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) { b = e; break a }
                b = -1 } return 0 > b ? null : m(a) ? a.charAt(b) : a[b] }

        function Ia(a) { return Array.prototype.concat.apply([], arguments) }

        function Ja(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) };

        function Ka() { return x("iPhone") && !x("iPod") && !x("iPad") };
        var La = "backgroundColor borderTopColor borderRightColor borderBottomColor borderLeftColor color outlineColor".split(" "),
            Ma = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,
            Na = /^#(?:[0-9a-f]{3}){1,2}$/i,
            Oa = /^(?:rgba)?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(0|1|0\.\d*)\)$/i,
            Pa = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

        function Qa() { return (x("Chrome") || x("CriOS")) && !x("Edge") };

        function Ra(a, b) { this.x = l(a) ? a : 0;
            this.y = l(b) ? b : 0 }
        Ra.prototype.toString = function() { return "(" + this.x + ", " + this.y + ")" };
        Ra.prototype.ceil = function() { this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y); return this };
        Ra.prototype.floor = function() { this.x = Math.floor(this.x);
            this.y = Math.floor(this.y); return this };
        Ra.prototype.round = function() { this.x = Math.round(this.x);
            this.y = Math.round(this.y); return this };
        var Sa = x("Opera"),
            B = x("Trident") || x("MSIE"),
            Ta = x("Edge"),
            Ua = x("Gecko") && !(-1 != v.toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
            Va = -1 != v.toLowerCase().indexOf("webkit") && !x("Edge");

        function Wa() { var a = k.document; return a ? a.documentMode : void 0 }
        var Xa;
        a: { var Ya = "",
                Za = function() { var a = v; if (Ua) return /rv\:([^\);]+)(\)|;)/.exec(a); if (Ta) return /Edge\/([\d\.]+)/.exec(a); if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Va) return /WebKit\/(\S+)/.exec(a); if (Sa) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Za && (Ya = Za ? Za[1] : ""); if (B) { var $a = Wa(); if (null != $a && $a > parseFloat(Ya)) { Xa = String($a); break a } }
            Xa = Ya }
        var la = {};

        function ab(a) { return ka(a, function() { for (var b = 0, c = ma(String(Xa)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; !b && f < e; f++) { var g = c[f] || "",
                        h = d[f] || "";
                    do { g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""]; if (0 == g[0].length && 0 == h[0].length) break;
                        b = na(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || na(0 == g[2].length, 0 == h[2].length) || na(g[2], h[2]);
                        g = g[3];
                        h = h[3] } while (!b) } return 0 <= b }) }
        var bb;
        var cb = k.document;
        bb = cb && B ? Wa() || ("CSS1Compat" == cb.compatMode ? parseInt(Xa, 10) : 5) : void 0;

        function db(a, b, c, d) { this.c = a;
            this.a = b;
            this.b = c;
            this.f = d }
        db.prototype.toString = function() { return "(" + this.c + "t, " + this.a + "r, " + this.b + "b, " + this.f + "l)" };
        db.prototype.ceil = function() { this.c = Math.ceil(this.c);
            this.a = Math.ceil(this.a);
            this.b = Math.ceil(this.b);
            this.f = Math.ceil(this.f); return this };
        db.prototype.floor = function() { this.c = Math.floor(this.c);
            this.a = Math.floor(this.a);
            this.b = Math.floor(this.b);
            this.f = Math.floor(this.f); return this };
        db.prototype.round = function() { this.c = Math.round(this.c);
            this.a = Math.round(this.a);
            this.b = Math.round(this.b);
            this.f = Math.round(this.f); return this };
        var eb = x("Firefox"),
            fb = Ka() || x("iPod"),
            gb = x("iPad"),
            hb = x("Android") && !(Qa() || x("Firefox") || x("Opera") || x("Silk")),
            ib = Qa(),
            jb = x("Safari") && !(Qa() || x("Coast") || x("Opera") || x("Edge") || x("Silk") || x("Android")) && !(Ka() || x("iPad") || x("iPod"));
        var D = B && !(9 <= Number(bb)),
            kb = B && !(8 <= Number(bb));

        function E(a, b, c, d) { this.a = a;
            this.b = b;
            this.width = c;
            this.height = d }
        E.prototype.toString = function() { return "(" + this.a + ", " + this.b + " - " + this.width + "w x " + this.height + "h)" };
        E.prototype.ceil = function() { this.a = Math.ceil(this.a);
            this.b = Math.ceil(this.b);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height); return this };
        E.prototype.floor = function() { this.a = Math.floor(this.a);
            this.b = Math.floor(this.b);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height); return this };
        E.prototype.round = function() { this.a = Math.round(this.a);
            this.b = Math.round(this.b);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height); return this };

        function lb(a) { return (a = a.exec(v)) ? a[1] : "" }(function() { if (eb) return lb(/Firefox\/([0-9.]+)/); if (B || Ta || Sa) return Xa; if (ib) return Ka() || x("iPad") || x("iPod") ? lb(/CriOS\/([0-9.]+)/) : lb(/Chrome\/([0-9.]+)/); if (jb && !(Ka() || x("iPad") || x("iPod"))) return lb(/Version\/([0-9.]+)/); if (fb || gb) { var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(v); if (a) return a[1] + "." + a[2] } else if (hb) return (a = lb(/Android\s+([0-9.]+)/)) ? a : lb(/Version\/([0-9.]+)/); return "" })();

        function mb(a, b, c, d) { this.a = a;
            this.nodeName = c;
            this.nodeValue = d;
            this.nodeType = 2;
            this.parentNode = this.ownerElement = b }

        function nb(a, b) { var c = kb && "href" == b.nodeName ? a.getAttribute(b.nodeName, 2) : b.nodeValue; return new mb(b, a, b.nodeName, c) };
        var ob, pb = function() { if (!Ua) return !1; var a = k.Components; if (!a) return !1; try { if (!a.classes) return !1 } catch (e) { return !1 } var b = a.classes,
                    a = a.interfaces,
                    c = b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),
                    d = b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo).version;
                ob = function(a) { c.compare(d, "" + a) }; return !0 }(),
            qb = B && !(9 <= Number(bb));
        hb && pb && ob(2.3);
        hb && pb && ob(4);
        jb && pb && ob(6);

        function rb(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

        function sb(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (B && !(9 <= Number(bb))) { if (9 == a.nodeType) return -1; if (9 == b.nodeType) return 1 }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) { var c = 1 == a.nodeType,
                    d = 1 == b.nodeType; if (c && d) return a.sourceIndex - b.sourceIndex; var e = a.parentNode,
                    f = b.parentNode; return e == f ? tb(a, b) : !c && rb(e, b) ? -1 * ub(a, b) : !d && rb(f, a) ? ub(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex) }
            d = F(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a = d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(k.Range.START_TO_END, a)
        }

        function ub(a, b) { var c = a.parentNode; if (c == b) return -1; for (; b.parentNode != c;) b = b.parentNode; return tb(b, a) }

        function tb(a, b) { for (; b = b.previousSibling;)
                if (b == a) return -1;
            return 1 }

        function F(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

        function vb(a, b) { a && (a = a.parentNode); for (var c = 0; a;) { if (b(a)) return a;
                a = a.parentNode;
                c++ } return null }

        function wb(a) { this.a = a || k.document || document }
        wb.prototype.getElementsByTagName = function(a, b) { return (b || this.a).getElementsByTagName(String(a)) };

        function G(a) { var b = null,
                c = a.nodeType;
            1 == c && (b = a.textContent, b = void 0 == b || null == b ? a.innerText : b, b = void 0 == b || null == b ? "" : b); if ("string" != typeof b)
                if (D && "title" == a.nodeName.toLowerCase() && 1 == c) b = a.text;
                else if (9 == c || 1 == c) { a = 9 == c ? a.documentElement : a.firstChild; for (var c = 0, d = [], b = ""; a;) { do 1 != a.nodeType && (b += a.nodeValue), D && "title" == a.nodeName.toLowerCase() && (b += a.text), d[c++] = a; while (a = a.firstChild); for (; c && !(a = d[--c].nextSibling);); } } else b = a.nodeValue; return "" + b }

        function H(a, b, c) { if (null === b) return !0; try { if (!a.getAttribute) return !1 } catch (d) { return !1 }
            kb && "class" == b && (b = "className"); return null == c ? !!a.getAttribute(b) : a.getAttribute(b, 2) == c }

        function xb(a, b, c, d, e) { return (D ? yb : zb).call(null, a, b, m(c) ? c : null, m(d) ? d : null, e || new I) }

        function yb(a, b, c, d, e) { if (a instanceof ya || 8 == a.b || c && null === a.b) { var f = b.all; if (!f) return e; var g = Ab(a); if ("*" != g && (f = b.getElementsByTagName(g), !f)) return e; if (c) { var h = []; for (a = 0; b = f[a++];) H(b, c, d) && h.push(b);
                    f = h } for (a = 0; b = f[a++];) "*" == g && "!" == b.tagName || J(e, b); return e }
            Bb(a, b, c, d, e); return e }

        function zb(a, b, c, d, e) { b.getElementsByName && d && "name" == c && !B ? (b = b.getElementsByName(d), A(b, function(b) { a.a(b) && J(e, b) })) : b.getElementsByClassName && d && "class" == c ? (b = b.getElementsByClassName(d), A(b, function(b) { b.className == d && a.a(b) && J(e, b) })) : a instanceof y ? Bb(a, b, c, d, e) : b.getElementsByTagName && (b = b.getElementsByTagName(a.f()), A(b, function(a) { H(a, c, d) && J(e, a) })); return e }

        function Cb(a, b, c, d, e) { var f; if ((a instanceof ya || 8 == a.b || c && null === a.b) && (f = b.childNodes)) { var g = Ab(a); if ("*" != g && (f = Da(f, function(a) { return a.tagName && a.tagName.toLowerCase() == g }), !f)) return e;
                c && (f = Da(f, function(a) { return H(a, c, d) }));
                A(f, function(a) { "*" == g && ("!" == a.tagName || "*" == g && 1 != a.nodeType) || J(e, a) }); return e } return Db(a, b, c, d, e) }

        function Db(a, b, c, d, e) { for (b = b.firstChild; b; b = b.nextSibling) H(b, c, d) && a.a(b) && J(e, b); return e }

        function Bb(a, b, c, d, e) { for (b = b.firstChild; b; b = b.nextSibling) H(b, c, d) && a.a(b) && J(e, b), Bb(a, b, c, d, e) }

        function Ab(a) { if (a instanceof y) { if (8 == a.b) return "!"; if (null === a.b) return "*" } return a.f() };

        function K(a, b) { b && "string" !== typeof b && (b = b.toString()); return !!a && 1 == a.nodeType && (!b || a.tagName.toUpperCase() == b) };

        function I() { this.b = this.a = null;
            this.l = 0 }

        function Eb(a) { this.node = a;
            this.a = this.b = null }

        function Fb(a, b) { if (!a.a) return b; if (!b.a) return a; var c = a.a;
            b = b.a; for (var d = null, e, f = 0; c && b;) { e = c.node; var g = b.node;
                e == g || e instanceof mb && g instanceof mb && e.a == g.a ? (e = c, c = c.a, b = b.a) : 0 < sb(c.node, b.node) ? (e = b, b = b.a) : (e = c, c = c.a);
                (e.b = d) ? d.a = e: a.a = e;
                d = e;
                f++ } for (e = c || b; e;) e.b = d, d = d.a = e, f++, e = e.a;
            a.b = d;
            a.l = f; return a }

        function Gb(a, b) { b = new Eb(b);
            b.a = a.a;
            a.b ? a.a.b = b : a.a = a.b = b;
            a.a = b;
            a.l++ }

        function J(a, b) { b = new Eb(b);
            b.b = a.b;
            a.a ? a.b.a = b : a.a = a.b = b;
            a.b = b;
            a.l++ }

        function Hb(a) { return (a = a.a) ? a.node : null }

        function Ib(a) { return (a = Hb(a)) ? G(a) : "" }

        function L(a, b) { return new Jb(a, !!b) }

        function Jb(a, b) { this.f = a;
            this.b = (this.s = b) ? a.b : a.a;
            this.a = null }

        function N(a) { var b = a.b; if (b) { var c = a.a = b;
                a.b = a.s ? b.b : b.a; return c.node } return null };

        function O(a) { this.i = a;
            this.b = this.g = !1;
            this.f = null }

        function z(a) { return "  " + a.toString().split("").join("  ") }

        function Kb(a, b) { a.g = b }

        function Lb(a, b) { a.b = b }

        function Q(a, b) { a = a.a(b); return a instanceof I ? +Ib(a) : +a }

        function R(a, b) { a = a.a(b); return a instanceof I ? Ib(a) : "" + a }

        function Mb(a, b) { a = a.a(b); return a instanceof I ? !!a.l : !!a };

        function Nb(a, b, c) { O.call(this, a.i);
            this.c = a;
            this.h = b;
            this.o = c;
            this.g = b.g || c.g;
            this.b = b.b || c.b;
            this.c == Ob && (c.b || c.g || 4 == c.i || 0 == c.i || !b.f ? b.b || b.g || 4 == b.i || 0 == b.i || !c.f || (this.f = { name: c.f.name, u: b }) : this.f = { name: b.f.name, u: c }) }
        p(Nb, O);

        function Pb(a, b, c, d, e) {
            b = b.a(d);
            c = c.a(d);
            var f;
            if (b instanceof I && c instanceof I) { b = L(b); for (d = N(b); d; d = N(b))
                    for (e = L(c), f = N(e); f; f = N(e))
                        if (a(G(d), G(f))) return !0;
                return !1 }
            if (b instanceof I || c instanceof I) { b instanceof I ? (e = b, d = c) : (e = c, d = b);
                f = L(e); for (var g = typeof d, h = N(f); h; h = N(f)) { switch (g) {
                        case "number":
                            h = +G(h); break;
                        case "boolean":
                            h = !!G(h); break;
                        case "string":
                            h = G(h); break;
                        default:
                            throw Error("Illegal primitive type for comparison."); } if (e == b && a(h, d) || e == c && a(d, h)) return !0 } return !1 }
            return e ? "boolean" ==
                typeof b || "boolean" == typeof c ? a(!!b, !!c) : "number" == typeof b || "number" == typeof c ? a(+b, +c) : a(b, c) : a(+b, +c)
        }
        Nb.prototype.a = function(a) { return this.c.m(this.h, this.o, a) };
        Nb.prototype.toString = function() { var a = "Binary Expression: " + this.c,
                a = a + z(this.h); return a += z(this.o) };

        function Qb(a, b, c, d) { this.I = a;
            this.D = b;
            this.i = c;
            this.m = d }
        Qb.prototype.toString = function() { return this.I };
        var Rb = {};

        function S(a, b, c, d) { if (Rb.hasOwnProperty(a)) throw Error("Binary operator already created: " + a);
            a = new Qb(a, b, c, d); return Rb[a.toString()] = a }
        S("div", 6, 1, function(a, b, c) { return Q(a, c) / Q(b, c) });
        S("mod", 6, 1, function(a, b, c) { return Q(a, c) % Q(b, c) });
        S("*", 6, 1, function(a, b, c) { return Q(a, c) * Q(b, c) });
        S("+", 5, 1, function(a, b, c) { return Q(a, c) + Q(b, c) });
        S("-", 5, 1, function(a, b, c) { return Q(a, c) - Q(b, c) });
        S("<", 4, 2, function(a, b, c) { return Pb(function(a, b) { return a < b }, a, b, c) });
        S(">", 4, 2, function(a, b, c) { return Pb(function(a, b) { return a > b }, a, b, c) });
        S("<=", 4, 2, function(a, b, c) { return Pb(function(a, b) { return a <= b }, a, b, c) });
        S(">=", 4, 2, function(a, b, c) { return Pb(function(a, b) { return a >= b }, a, b, c) });
        var Ob = S("=", 3, 2, function(a, b, c) { return Pb(function(a, b) { return a == b }, a, b, c, !0) });
        S("!=", 3, 2, function(a, b, c) { return Pb(function(a, b) { return a != b }, a, b, c, !0) });
        S("and", 2, 2, function(a, b, c) { return Mb(a, c) && Mb(b, c) });
        S("or", 1, 2, function(a, b, c) { return Mb(a, c) || Mb(b, c) });

        function Sb(a, b) { if (b.a.length && 4 != a.i) throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");
            O.call(this, a.i);
            this.c = a;
            this.h = b;
            this.g = a.g;
            this.b = a.b }
        p(Sb, O);
        Sb.prototype.a = function(a) { a = this.c.a(a); return Tb(this.h, a) };
        Sb.prototype.toString = function() { var a = "Filter:" + z(this.c); return a += z(this.h) };

        function Ub(a, b) { if (b.length < a.C) throw Error("Function " + a.j + " expects at least" + a.C + " arguments, " + b.length + " given"); if (null !== a.A && b.length > a.A) throw Error("Function " + a.j + " expects at most " + a.A + " arguments, " + b.length + " given");
            a.H && A(b, function(b, d) { if (4 != b.i) throw Error("Argument " + d + " to function " + a.j + " is not of type Nodeset: " + b); });
            O.call(this, a.i);
            this.v = a;
            this.c = b;
            Kb(this, a.g || Fa(b, function(a) { return a.g }));
            Lb(this, a.G && !b.length || a.F && !!b.length || Fa(b, function(a) { return a.b })) }
        p(Ub, O);
        Ub.prototype.a = function(a) { return this.v.m.apply(null, Ia(a, this.c)) };
        Ub.prototype.toString = function() { var a = "Function: " + this.v; if (this.c.length) var b = Ea(this.c, function(a, b) { return a + z(b) }, "Arguments:"),
                a = a + z(b); return a };

        function Vb(a, b, c, d, e, f, g, h, r) { this.j = a;
            this.i = b;
            this.g = c;
            this.G = d;
            this.F = e;
            this.m = f;
            this.C = g;
            this.A = l(h) ? h : g;
            this.H = !!r }
        Vb.prototype.toString = function() { return this.j };
        var Wb = {};

        function T(a, b, c, d, e, f, g, h) { if (Wb.hasOwnProperty(a)) throw Error("Function already created: " + a + ".");
            Wb[a] = new Vb(a, b, c, d, !1, e, f, g, h) }
        T("boolean", 2, !1, !1, function(a, b) { return Mb(b, a) }, 1);
        T("ceiling", 1, !1, !1, function(a, b) { return Math.ceil(Q(b, a)) }, 1);
        T("concat", 3, !1, !1, function(a, b) { return Ea(Ja(arguments, 1), function(b, d) { return b + R(d, a) }, "") }, 2, null);
        T("contains", 2, !1, !1, function(a, b, c) { b = R(b, a);
            a = R(c, a); return -1 != b.indexOf(a) }, 2);
        T("count", 1, !1, !1, function(a, b) { return b.a(a).l }, 1, 1, !0);
        T("false", 2, !1, !1, function() { return !1 }, 0);
        T("floor", 1, !1, !1, function(a, b) { return Math.floor(Q(b, a)) }, 1);
        T("id", 4, !1, !1, function(a, b) {
            function c(a) { if (D) { var b = e.all[a]; if (b) { if (b.nodeType && a == b.id) return b; if (b.length) return Ha(b, function(b) { return a == b.id }) } return null } return e.getElementById(a) } var d = a.a,
                e = 9 == d.nodeType ? d : d.ownerDocument;
            a = R(b, a).split(/\s+/); var f = [];
            A(a, function(a) { a = c(a);!a || 0 <= Ca(f, a) || f.push(a) });
            f.sort(sb); var g = new I;
            A(f, function(a) { J(g, a) }); return g }, 1);
        T("lang", 2, !1, !1, function() { return !1 }, 1);
        T("last", 1, !0, !1, function(a) { if (1 != arguments.length) throw Error("Function last expects ()"); return a.f }, 0);
        T("local-name", 3, !1, !0, function(a, b) { return (a = b ? Hb(b.a(a)) : a.a) ? a.localName || a.nodeName.toLowerCase() : "" }, 0, 1, !0);
        T("name", 3, !1, !0, function(a, b) { return (a = b ? Hb(b.a(a)) : a.a) ? a.nodeName.toLowerCase() : "" }, 0, 1, !0);
        T("namespace-uri", 3, !0, !1, function() { return "" }, 0, 1, !0);
        T("normalize-space", 3, !1, !0, function(a, b) { return (b ? R(b, a) : G(a.a)).replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "") }, 0, 1);
        T("not", 2, !1, !1, function(a, b) { return !Mb(b, a) }, 1);
        T("number", 1, !1, !0, function(a, b) { return b ? Q(b, a) : +G(a.a) }, 0, 1);
        T("position", 1, !0, !1, function(a) { return a.b }, 0);
        T("round", 1, !1, !1, function(a, b) { return Math.round(Q(b, a)) }, 1);
        T("starts-with", 2, !1, !1, function(a, b, c) { b = R(b, a);
            a = R(c, a); return !b.lastIndexOf(a, 0) }, 2);
        T("string", 3, !1, !0, function(a, b) { return b ? R(b, a) : G(a.a) }, 0, 1);
        T("string-length", 1, !1, !0, function(a, b) { return (b ? R(b, a) : G(a.a)).length }, 0, 1);
        T("substring", 3, !1, !1, function(a, b, c, d) { c = Q(c, a); if (isNaN(c) || Infinity == c || -Infinity == c) return "";
            d = d ? Q(d, a) : Infinity; if (isNaN(d) || -Infinity === d) return "";
            c = Math.round(c) - 1; var e = Math.max(c, 0);
            a = R(b, a); return Infinity == d ? a.substring(e) : a.substring(e, c + Math.round(d)) }, 2, 3);
        T("substring-after", 3, !1, !1, function(a, b, c) { b = R(b, a);
            a = R(c, a);
            c = b.indexOf(a); return -1 == c ? "" : b.substring(c + a.length) }, 2);
        T("substring-before", 3, !1, !1, function(a, b, c) { b = R(b, a);
            a = R(c, a);
            a = b.indexOf(a); return -1 == a ? "" : b.substring(0, a) }, 2);
        T("sum", 1, !1, !1, function(a, b) { a = L(b.a(a));
            b = 0; for (var c = N(a); c; c = N(a)) b += +G(c); return b }, 1, 1, !0);
        T("translate", 3, !1, !1, function(a, b, c, d) { b = R(b, a);
            c = R(c, a); var e = R(d, a);
            d = {}; for (var f = 0; f < c.length; f++) a = c.charAt(f), a in d || (d[a] = e.charAt(f));
            c = ""; for (f = 0; f < b.length; f++) a = b.charAt(f), c += a in d ? d[a] : a; return c }, 3);
        T("true", 2, !1, !1, function() { return !0 }, 0);

        function Xb(a) { O.call(this, 3);
            this.c = a.substring(1, a.length - 1) }
        p(Xb, O);
        Xb.prototype.a = function() { return this.c };
        Xb.prototype.toString = function() { return "Literal: " + this.c };

        function Yb(a) { O.call(this, 1);
            this.c = a }
        p(Yb, O);
        Yb.prototype.a = function() { return this.c };
        Yb.prototype.toString = function() { return "Number: " + this.c };

        function Zb(a, b) { O.call(this, a.i);
            this.h = a;
            this.c = b;
            this.g = a.g;
            this.b = a.b;
            1 == this.c.length && (a = this.c[0], a.w || a.c != $b || (a = a.o, "*" != a.f() && (this.f = { name: a.f(), u: null }))) }
        p(Zb, O);

        function ac() { O.call(this, 4) }
        p(ac, O);
        ac.prototype.a = function(a) { var b = new I;
            a = a.a;
            9 == a.nodeType ? J(b, a) : J(b, a.ownerDocument); return b };
        ac.prototype.toString = function() { return "Root Helper Expression" };

        function bc() { O.call(this, 4) }
        p(bc, O);
        bc.prototype.a = function(a) { var b = new I;
            J(b, a.a); return b };
        bc.prototype.toString = function() { return "Context Helper Expression" };

        function cc(a) { return "/" == a || "//" == a }
        Zb.prototype.a = function(a) { var b = this.h.a(a); if (!(b instanceof I)) throw Error("Filter expression must evaluate to nodeset.");
            a = this.c; for (var c = 0, d = a.length; c < d && b.l; c++) { var e = a[c],
                    f = L(b, e.c.s); if (e.g || e.c != dc)
                    if (e.g || e.c != ec) { var g = N(f); for (b = e.a(new pa(g)); g = N(f);) g = e.a(new pa(g)), b = Fb(b, g) } else g = N(f), b = e.a(new pa(g));
                else { for (g = N(f);
                        (b = N(f)) && (!g.contains || g.contains(b)) && b.compareDocumentPosition(g) & 8; g = b);
                    b = e.a(new pa(g)) } } return b };
        Zb.prototype.toString = function() { var a = "Path Expression:" + z(this.h); if (this.c.length) { var b = Ea(this.c, function(a, b) { return a + z(b) }, "Steps:");
                a += z(b) } return a };

        function fc(a, b) { this.a = a;
            this.s = !!b }

        function Tb(a, b, c) { for (c = c || 0; c < a.a.length; c++)
                for (var d = a.a[c], e = L(b), f = b.l, g, h = 0; g = N(e); h++) { var r = a.s ? f - h : h + 1;
                    g = d.a(new pa(g, r, f)); if ("number" == typeof g) r = r == g;
                    else if ("string" == typeof g || "boolean" == typeof g) r = !!g;
                    else if (g instanceof I) r = 0 < g.l;
                    else throw Error("Predicate.evaluate returned an unexpected type."); if (!r) { r = e;
                        g = r.f; var w = r.a; if (!w) throw Error("Next must be called at least once before remove."); var n = w.b,
                            w = w.a;
                        n ? n.a = w : g.a = w;
                        w ? w.b = n : g.b = n;
                        g.l--;
                        r.a = null } }
            return b }
        fc.prototype.toString = function() { return Ea(this.a, function(a, b) { return a + z(b) }, "Predicates:") };

        function gc(a) { O.call(this, 1);
            this.c = a;
            this.g = a.g;
            this.b = a.b }
        p(gc, O);
        gc.prototype.a = function(a) { return -Q(this.c, a) };
        gc.prototype.toString = function() { return "Unary Expression: -" + z(this.c) };

        function hc(a) { O.call(this, 4);
            this.c = a;
            Kb(this, Fa(this.c, function(a) { return a.g }));
            Lb(this, Fa(this.c, function(a) { return a.b })) }
        p(hc, O);
        hc.prototype.a = function(a) { var b = new I;
            A(this.c, function(c) { c = c.a(a); if (!(c instanceof I)) throw Error("Path expression must evaluate to NodeSet.");
                b = Fb(b, c) }); return b };
        hc.prototype.toString = function() { return Ea(this.c, function(a, b) { return a + z(b) }, "Union Expression:") };

        function U(a, b, c, d) { O.call(this, 4);
            this.c = a;
            this.o = b;
            this.h = c || new fc([]);
            this.w = !!d;
            b = this.h;
            b = 0 < b.a.length ? b.a[0].f : null;
            a.J && b && (a = b.name, a = D ? a.toLowerCase() : a, this.f = { name: a, u: b.u });
            a: { a = this.h; for (b = 0; b < a.a.length; b++)
                    if (c = a.a[b], c.g || 1 == c.i || 0 == c.i) { a = !0; break a }
                a = !1 }
            this.g = a }
        p(U, O);
        U.prototype.a = function(a) { var b = a.a,
                c = this.f,
                d = null,
                e = null,
                f = 0;
            c && (d = c.name, e = c.u ? R(c.u, a) : null, f = 1); if (this.w)
                if (this.g || this.c != ic)
                    if (b = L((new U(jc, new y("node"))).a(a)), c = N(b))
                        for (a = this.m(c, d, e, f); c = N(b);) a = Fb(a, this.m(c, d, e, f));
                    else a = new I;
            else a = xb(this.o, b, d, e), a = Tb(this.h, a, f);
            else a = this.m(a.a, d, e, f); return a };
        U.prototype.m = function(a, b, c, d) { a = this.c.v(this.o, a, b, c); return a = Tb(this.h, a, d) };
        U.prototype.toString = function() { var a = "Step:" + z("Operator: " + (this.w ? "//" : "/"));
            this.c.j && (a += z("Axis: " + this.c));
            a += z(this.o); if (this.h.a.length) { var b = Ea(this.h.a, function(a, b) { return a + z(b) }, "Predicates:");
                a += z(b) } return a };

        function kc(a, b, c, d) { this.j = a;
            this.v = b;
            this.s = c;
            this.J = d }
        kc.prototype.toString = function() { return this.j };
        var lc = {};

        function V(a, b, c, d) { if (lc.hasOwnProperty(a)) throw Error("Axis already created: " + a);
            b = new kc(a, b, c, !!d); return lc[a] = b }
        V("ancestor", function(a, b) { for (var c = new I; b = b.parentNode;) a.a(b) && Gb(c, b); return c }, !0);
        V("ancestor-or-self", function(a, b) { var c = new I;
            do a.a(b) && Gb(c, b); while (b = b.parentNode); return c }, !0);
        var $b = V("attribute", function(a, b) { var c = new I,
                    d = a.f(); if ("style" == d && D && b.style) return J(c, new mb(b.style, b, "style", b.style.cssText)), c; var e = b.attributes; if (e)
                    if (a instanceof y && null === a.b || "*" == d)
                        for (d = 0; a = e[d]; d++) D ? a.nodeValue && J(c, nb(b, a)) : J(c, a);
                    else(a = e.getNamedItem(d)) && (D ? a.nodeValue && J(c, nb(b, a)) : J(c, a));
                return c }, !1),
            ic = V("child", function(a, b, c, d, e) { return (D ? Cb : Db).call(null, a, b, m(c) ? c : null, m(d) ? d : null, e || new I) }, !1, !0);
        V("descendant", xb, !1, !0);
        var jc = V("descendant-or-self", function(a, b, c, d) { var e = new I;
                H(b, c, d) && a.a(b) && J(e, b); return xb(a, b, c, d, e) }, !1, !0),
            dc = V("following", function(a, b, c, d) { var e = new I;
                do
                    for (var f = b; f = f.nextSibling;) H(f, c, d) && a.a(f) && J(e, f), e = xb(a, f, c, d, e); while (b = b.parentNode); return e }, !1, !0);
        V("following-sibling", function(a, b) { for (var c = new I; b = b.nextSibling;) a.a(b) && J(c, b); return c }, !1);
        V("namespace", function() { return new I }, !1);
        var mc = V("parent", function(a, b) { var c = new I; if (9 == b.nodeType) return c; if (2 == b.nodeType) return J(c, b.ownerElement), c;
                b = b.parentNode;
                a.a(b) && J(c, b); return c }, !1),
            ec = V("preceding", function(a, b, c, d) { var e = new I,
                    f = [];
                do f.unshift(b); while (b = b.parentNode); for (var g = 1, h = f.length; g < h; g++) { var r = []; for (b = f[g]; b = b.previousSibling;) r.unshift(b); for (var w = 0, n = r.length; w < n; w++) b = r[w], H(b, c, d) && a.a(b) && J(e, b), e = xb(a, b, c, d, e) } return e }, !0, !0);
        V("preceding-sibling", function(a, b) { for (var c = new I; b = b.previousSibling;) a.a(b) && Gb(c, b); return c }, !0);
        var nc = V("self", function(a, b) { var c = new I;
            a.a(b) && J(c, b); return c }, !1);

        function oc(a, b) { this.a = a;
            this.b = b }

        function pc(a) { for (var b, c = [];;) { W(a, "Missing right hand side of binary expression.");
                b = qc(a); var d = u(a.a); if (!d) break; var e = (d = Rb[d] || null) && d.D; if (!e) { a.a.a--; break } for (; c.length && e <= c[c.length - 1].D;) b = new Nb(c.pop(), c.pop(), b);
                c.push(b, d) } for (; c.length;) b = new Nb(c.pop(), c.pop(), b); return b }

        function W(a, b) { if (ua(a.a)) throw Error(b); }

        function rc(a, b) { a = u(a.a); if (a != b) throw Error("Bad token, expected: " + b + " got: " + a); }

        function sc(a) { a = u(a.a); if (")" != a) throw Error("Bad token: " + a); }

        function tc(a) { a = u(a.a); if (2 > a.length) throw Error("Unclosed literal string"); return new Xb(a) }

        function uc(a) {
            var b = [];
            if (cc(t(a.a))) { var c = u(a.a); var d = t(a.a); if ("/" == c && (ua(a.a) || "." != d && ".." != d && "@" != d && "*" != d && !/(?![0-9])[\w]/.test(d))) return new ac;
                d = new ac;
                W(a, "Missing next location step.");
                c = vc(a, c);
                b.push(c) } else {
                a: {
                    c = t(a.a);d = c.charAt(0);
                    switch (d) {
                        case "$":
                            throw Error("Variable reference not allowed in HTML XPath");
                        case "(":
                            u(a.a);
                            c = pc(a);
                            W(a, 'unclosed "("');
                            rc(a, ")");
                            break;
                        case '"':
                        case "'":
                            c = tc(a);
                            break;
                        default:
                            if (isNaN(+c))
                                if (!xa(c) && /(?![0-9])[\w]/.test(d) && "(" == t(a.a, 1)) {
                                    c = u(a.a);
                                    c = Wb[c] || null;
                                    u(a.a);
                                    for (d = [];
                                        ")" != t(a.a);) { W(a, "Missing function argument list.");
                                        d.push(pc(a)); if ("," != t(a.a)) break;
                                        u(a.a) }
                                    W(a, "Unclosed function argument list.");
                                    sc(a);
                                    c = new Ub(c, d)
                                } else { c = null; break a }
                            else c = new Yb(+u(a.a))
                    }
                    "[" == t(a.a) && (d = new fc(wc(a)), c = new Sb(c, d))
                }
                if (c)
                    if (cc(t(a.a))) d = c;
                    else return c;
                else c = vc(a, "/"),
                d = new bc,
                b.push(c)
            }
            for (; cc(t(a.a));) c = u(a.a), W(a, "Missing next location step."), c = vc(a, c), b.push(c);
            return new Zb(d, b)
        }

        function vc(a, b) {
            if ("/" != b && "//" != b) throw Error('Step op should be "/" or "//"');
            if ("." == t(a.a)) { var c = new U(nc, new y("node"));
                u(a.a); return c }
            if (".." == t(a.a)) return c = new U(mc, new y("node")), u(a.a), c;
            if ("@" == t(a.a)) { var d = $b;
                u(a.a);
                W(a, "Missing attribute name") } else if ("::" == t(a.a, 1)) { if (!/(?![0-9])[\w]/.test(t(a.a).charAt(0))) throw Error("Bad token: " + u(a.a)); var e = u(a.a);
                d = lc[e] || null; if (!d) throw Error("No axis with name: " + e);
                u(a.a);
                W(a, "Missing node name") } else d = ic;
            e = t(a.a);
            if (/(?![0-9])[\w\*]/.test(e.charAt(0)))
                if ("(" ==
                    t(a.a, 1)) { if (!xa(e)) throw Error("Invalid node type: " + e);
                    e = u(a.a); if (!xa(e)) throw Error("Invalid type name: " + e);
                    rc(a, "(");
                    W(a, "Bad nodetype"); var f = t(a.a).charAt(0),
                        g = null; if ('"' == f || "'" == f) g = tc(a);
                    W(a, "Bad nodetype");
                    sc(a);
                    e = new y(e, g) } else if (e = u(a.a), f = e.indexOf(":"), -1 == f) e = new ya(e);
            else { var g = e.substring(0, f); if ("*" == g) var h = "*";
                else if (h = a.b(g), !h) throw Error("Namespace prefix not declared: " + g);
                e = e.substr(f + 1);
                e = new ya(e, h) } else throw Error("Bad token: " + u(a.a));
            a = new fc(wc(a), d.s);
            return c ||
                new U(d, e, a, "//" == b)
        }

        function wc(a) { for (var b = [];
                "[" == t(a.a);) { u(a.a);
                W(a, "Missing predicate expression."); var c = pc(a);
                b.push(c);
                W(a, "Unclosed predicate expression.");
                rc(a, "]") } return b }

        function qc(a) { if ("-" == t(a.a)) return u(a.a), new gc(qc(a)); var b = uc(a); if ("|" != t(a.a)) a = b;
            else { for (b = [b];
                    "|" == u(a.a);) W(a, "Missing next union location path."), b.push(uc(a));
                a.a.a--;
                a = new hc(b) } return a };

        function xc(a, b) { if (!a.length) throw Error("Empty XPath expression.");
            a = ra(a); if (ua(a)) throw Error("Invalid XPath expression.");
            b ? "function" == ba(b) || (b = ea(b.lookupNamespaceURI, b)) : b = function() { return null }; var c = pc(new oc(a, b)); if (!ua(a)) throw Error("Bad token: " + u(a));
            this.evaluate = function(a, b) { a = c.a(new pa(a)); return new X(a, b) } }

        function X(a, b) {
            if (!b)
                if (a instanceof I) b = 4;
                else if ("string" == typeof a) b = 2;
            else if ("number" == typeof a) b = 1;
            else if ("boolean" == typeof a) b = 3;
            else throw Error("Unexpected evaluation result.");
            if (2 != b && 1 != b && 3 != b && !(a instanceof I)) throw Error("value could not be converted to the specified type");
            this.resultType = b;
            switch (b) {
                case 2:
                    this.stringValue = a instanceof I ? Ib(a) : "" + a;
                    break;
                case 1:
                    this.numberValue = a instanceof I ? +Ib(a) : +a;
                    break;
                case 3:
                    this.booleanValue = a instanceof I ? 0 < a.l : !!a;
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    var c =
                        L(a);
                    var d = [];
                    for (var e = N(c); e; e = N(c)) d.push(e instanceof mb ? e.a : e);
                    this.snapshotLength = a.l;
                    this.invalidIteratorState = !1;
                    break;
                case 8:
                case 9:
                    a = Hb(a);
                    this.singleNodeValue = a instanceof mb ? a.a : a;
                    break;
                default:
                    throw Error("Unknown XPathResult type.");
            }
            var f = 0;
            this.iterateNext = function() { if (4 != b && 5 != b) throw Error("iterateNext called with wrong result type"); return f >= d.length ? null : d[f++] };
            this.snapshotItem = function(a) {
                if (6 != b && 7 != b) throw Error("snapshotItem called with wrong result type");
                return a >= d.length ||
                    0 > a ? null : d[a]
            }
        }
        X.ANY_TYPE = 0;
        X.NUMBER_TYPE = 1;
        X.STRING_TYPE = 2;
        X.BOOLEAN_TYPE = 3;
        X.UNORDERED_NODE_ITERATOR_TYPE = 4;
        X.ORDERED_NODE_ITERATOR_TYPE = 5;
        X.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
        X.ORDERED_NODE_SNAPSHOT_TYPE = 7;
        X.ANY_UNORDERED_NODE_TYPE = 8;
        X.FIRST_ORDERED_NODE_TYPE = 9;

        function yc(a) { this.lookupNamespaceURI = za(a) }

        function zc(a, b) { a = a || k; var c = a.Document && a.Document.prototype || a.document; if (!c.evaluate || b) a.XPathResult = X, c.evaluate = function(a, b, c, g) { return (new xc(a, c)).evaluate(b, g) }, c.createExpression = function(a, b) { return new xc(a, b) }, c.createNSResolver = function(a) { return new yc(a) } }
        aa("wgxpath.install", zc);
        var Ac = function() { var a = { M: "http://www.w3.org/2000/svg" }; return function(b) { return a[b] || null } }();

        function Bc(a, b) {
            var c = F(a);
            if (!c.documentElement) return null;
            (B || hb) && zc(c ? c.parentWindow || c.defaultView : window);
            try {
                var d = c.createNSResolver ? c.createNSResolver(c.documentElement) : Ac;
                if (B && !ab(7)) return c.evaluate.call(c, b, a, d, 9, null);
                if (!B || 9 <= Number(bb)) {
                    for (var e = {}, f = c.getElementsByTagName("*"), g = 0; g < f.length; ++g) { var h = f[g],
                            r = h.namespaceURI; if (r && !e[r]) { var w = h.lookupPrefix(r); if (!w) var n = r.match(".*/(\\w+)/?$"),
                                w = n ? n[1] : "xhtml";
                            e[r] = w } }
                    var C = {},
                        M;
                    for (M in e) C[e[M]] = M;
                    d = function(a) {
                        return C[a] ||
                            null
                    }
                }
                try { return c.evaluate(b, a, d, 9, null) } catch (P) { if ("TypeError" === P.name) return d = c.createNSResolver ? c.createNSResolver(c.documentElement) : Ac, c.evaluate(b, a, d, 9, null); throw P; }
            } catch (P) { if (!Ua || "NS_ERROR_ILLEGAL_VALUE" != P.name) throw new ga(32, "Unable to locate an element with the xpath expression " + b + " because of the following error:" + P); }
        }

        function Cc(a, b) { var c = function() { var c = Bc(b, a); return c ? c.singleNodeValue || null : b.selectSingleNode ? (c = F(b), c.setProperty && c.setProperty("SelectionLanguage", "XPath"), b.selectSingleNode(a)) : null }(); if (null !== c && (!c || 1 != c.nodeType)) throw new ga(32, 'The result of the xpath expression "' + a + '" is: ' + c + ". It should be an element."); return c };
        var Dc = "function" === typeof ShadowRoot;

        function Ec(a) { for (a = a.parentNode; a && 1 != a.nodeType && 9 != a.nodeType && 11 != a.nodeType;) a = a.parentNode; return K(a) ? a : null }

        function Y(a, b) {
            b = oa(b);
            if ("float" == b || "cssFloat" == b || "styleFloat" == b) b = qb ? "styleFloat" : "cssFloat";
            a: { var c = b; var d = F(a); if (d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null))) { c = d[c] || d.getPropertyValue(c) || ""; break a }
                c = "" }
            a = c || Fc(a, b);
            if (null === a) a = null;
            else if (0 <= Ca(La, b)) {
                b: { var e = a.match(Oa); if (e && (b = Number(e[1]), c = Number(e[2]), d = Number(e[3]), e = Number(e[4]), 0 <= b && 255 >= b && 0 <= c && 255 >= c && 0 <= d && 255 >= d && 0 <= e && 1 >= e)) { b = [b, c, d, e]; break b }
                    b = null }
                if (!b) b: {
                    if (d = a.match(Pa))
                        if (b =
                            Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= b && 255 >= b && 0 <= c && 255 >= c && 0 <= d && 255 >= d) { b = [b, c, d, 1]; break b }
                    b = null
                }
                if (!b) b: { b = a.toLowerCase();c = ia[b.toLowerCase()]; if (!c && (c = "#" == b.charAt(0) ? b : "#" + b, 4 == c.length && (c = c.replace(Ma, "#$1$1$2$2$3$3")), !Na.test(c))) { b = null; break b }
                    b = [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16), 1] }
                a = b ? "rgba(" + b.join(", ") + ")" : a
            }
            return a
        }

        function Fc(a, b) { var c = a.currentStyle || a.style,
                d = c[b];!l(d) && "function" == ba(c.getPropertyValue) && (d = c.getPropertyValue(b)); return "inherit" != d ? l(d) ? d : null : (a = Ec(a)) ? Fc(a, b) : null }

        function Gc(a, b, c) {
            function d(a) { var b = Hc(a); return 0 < b.height && 0 < b.width ? !0 : K(a, "PATH") && (0 < b.height || 0 < b.width) ? (a = Y(a, "stroke-width"), !!a && 0 < parseInt(a, 10)) : "hidden" != Y(a, "overflow") && Fa(a.childNodes, function(a) { return 3 == a.nodeType || K(a) && d(a) }) }

            function e(a) { return Ic(a) == Z && Ga(a.childNodes, function(a) { return !K(a) || e(a) || !d(a) }) }
            if (!K(a)) throw Error("Argument to isShown must be of type Element");
            if (K(a, "BODY")) return !0;
            if (K(a, "OPTION") || K(a, "OPTGROUP")) return a = vb(a, function(a) { return K(a, "SELECT") }), !!a && Gc(a, !0, c);
            var f = Jc(a);
            if (f) return !!f.B && 0 < f.rect.width && 0 < f.rect.height && Gc(f.B, b, c);
            if (K(a, "INPUT") && "hidden" == a.type.toLowerCase() || K(a, "NOSCRIPT")) return !1;
            f = Y(a, "visibility");
            return "collapse" != f && "hidden" != f && c(a) && (b || Kc(a)) && d(a) ? !e(a) : !1
        }
        var Z = "hidden";

        function Ic(a) {
            function b(a) {
                function b(a) { return a == g ? !0 : !Y(a, "display").lastIndexOf("inline", 0) || "absolute" == c && "static" == Y(a, "position") ? !1 : !0 } var c = Y(a, "position"); if ("fixed" == c) return w = !0, a == g ? null : g; for (a = Ec(a); a && !b(a);) a = Ec(a); return a }

            function c(a) { var b = a; if ("visible" == r)
                    if (a == g && h) b = h;
                    else if (a == h) return { x: "visible", y: "visible" };
                b = { x: Y(b, "overflow-x"), y: Y(b, "overflow-y") };
                a == g && (b.x = "visible" == b.x ? "auto" : b.x, b.y = "visible" == b.y ? "auto" : b.y); return b }

            function d(a) {
                if (a == g) {
                    var b = (new wb(f)).a;
                    a = b.scrollingElement ? b.scrollingElement : Va || "CSS1Compat" != b.compatMode ? b.body || b.documentElement : b.documentElement;
                    b = b.parentWindow || b.defaultView;
                    a = B && ab("10") && b.pageYOffset != a.scrollTop ? new Ra(a.scrollLeft, a.scrollTop) : new Ra(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
                } else a = new Ra(a.scrollLeft, a.scrollTop);
                return a
            }
            var e = Lc(a);
            var f = F(a),
                g = f.documentElement,
                h = f.body,
                r = Y(g, "overflow"),
                w;
            for (a = b(a); a; a = b(a)) {
                var n = c(a);
                if ("visible" != n.x || "visible" != n.y) {
                    var C = Hc(a);
                    if (!C.width || !C.height) return Z;
                    var M = e.a < C.a,
                        P = e.b < C.b;
                    if (M && "hidden" == n.x || P && "hidden" == n.y) return Z;
                    if (M && "visible" != n.x || P && "visible" != n.y) { M = d(a);
                        P = e.b < C.b - M.y; if (e.a < C.a - M.x && "visible" != n.x || P && "visible" != n.x) return Z;
                        e = Ic(a); return e == Z ? Z : "scroll" }
                    M = e.f >= C.a + C.width;
                    C = e.c >= C.b + C.height;
                    if (M && "hidden" == n.x || C && "hidden" == n.y) return Z;
                    if (M && "visible" != n.x || C && "visible" != n.y) { if (w && (n = d(a), e.f >= g.scrollWidth - n.x || e.a >= g.scrollHeight - n.y)) return Z;
                        e = Ic(a); return e == Z ? Z : "scroll" }
                }
            }
            return "none"
        }

        function Hc(a) {
            var b = Jc(a);
            if (b) return b.rect;
            if (K(a, "HTML")) return a = F(a), a = ((a ? a.parentWindow || a.defaultView : window) || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body, a = new ja(a.clientWidth, a.clientHeight), new E(0, 0, a.width, a.height);
            try { var c = a.getBoundingClientRect() } catch (d) { return new E(0, 0, 0, 0) }
            b = new E(c.left, c.top, c.right - c.left, c.bottom - c.top);
            B && a.ownerDocument.body && (a = F(a), b.a -= a.documentElement.clientLeft + a.body.clientLeft, b.b -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }

        function Jc(a) { var b = K(a, "MAP"); if (!b && !K(a, "AREA")) return null; var c = b ? a : K(a.parentNode, "MAP") ? a.parentNode : null,
                d = null,
                e = null;
            c && c.name && (d = Cc('/descendant::*[@usemap = "#' + c.name + '"]', F(c))) && (e = Hc(d), b || "default" == a.shape.toLowerCase() || (a = Mc(a), b = Math.min(Math.max(a.a, 0), e.width), c = Math.min(Math.max(a.b, 0), e.height), e = new E(b + e.a, c + e.b, Math.min(a.width, e.width - b), Math.min(a.height, e.height - c)))); return { B: d, rect: e || new E(0, 0, 0, 0) } }

        function Mc(a) { var b = a.shape.toLowerCase();
            a = a.coords.split(","); if ("rect" == b && 4 == a.length) { var b = a[0],
                    c = a[1]; return new E(b, c, a[2] - b, a[3] - c) } if ("circle" == b && 3 == a.length) return b = a[2], new E(a[0] - b, a[1] - b, 2 * b, 2 * b); if ("poly" == b && 2 < a.length) { for (var b = a[0], c = a[1], d = b, e = c, f = 2; f + 1 < a.length; f += 2) b = Math.min(b, a[f]), d = Math.max(d, a[f]), c = Math.min(c, a[f + 1]), e = Math.max(e, a[f + 1]); return new E(b, c, d - b, e - c) } return new E(0, 0, 0, 0) }

        function Lc(a) { a = Hc(a); return new db(a.b, a.a + a.width, a.b + a.height, a.a) }

        function Kc(a) { if (qb) { if ("relative" == Y(a, "position")) return 1;
                a = Y(a, "filter"); return (a = a.match(/^alpha\(opacity=(\d*)\)/) || a.match(/^progid:DXImageTransform.Microsoft.Alpha\(Opacity=(\d*)\)/)) ? Number(a[1]) / 100 : 1 } return Nc(a) }

        function Nc(a) { var b = 1,
                c = Y(a, "opacity");
            c && (b = Number(c));
            (a = Ec(a)) && (b *= Nc(a)); return b };
        aa("_", function(a, b) {
            function c(a) { if (K(a) && "none" == Y(a, "display")) return !1; var b;
                (b = a.parentNode) && b.shadowRoot && void 0 !== a.assignedSlot ? b = a.assignedSlot ? a.assignedSlot.parentNode : null : a.getDestinationInsertionPoints && (a = a.getDestinationInsertionPoints(), 0 < a.length && (b = a[a.length - 1])); if (Dc && b instanceof ShadowRoot) { if (b.host.shadowRoot !== b) return !1;
                    b = b.host } return !b || 9 != b.nodeType && 11 != b.nodeType ? b && c(b) : !0 } return Gc(a, !!b, c) });;
        return this._.apply(null, arguments);
    }.apply({ navigator: typeof window != 'undefined' ? window.navigator : null, document: typeof window != 'undefined' ? window.document : null }, arguments);
}