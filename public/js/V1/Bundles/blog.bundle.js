(() => {
    "use strict";
    function t(o) {
        return (
            (t =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      }),
            t(o)
        );
    }
    function o(o, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(
                    o,
                    (void 0,
                    (i = (function (o, r) {
                        if ("object" !== t(o) || null === o) return o;
                        var e = o[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(o, "string");
                            if ("object" !== t(n)) return n;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value."
                            );
                        }
                        return String(o);
                    })(n.key)),
                    "symbol" === t(i) ? i : String(i)),
                    n
                );
        }
        var i;
    }
    new ((function () {
        function t() {
            !(function (t, o) {
                if (!(t instanceof o))
                    throw new TypeError("Cannot call a class as a function");
            })(this, t);
        }
        var r, e;
        return (
            (r = t),
            (e = [
                {
                    key: "main",
                    value: function () {
                        console.log("Hello world");
                    },
                },
            ]) && o(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            t
        );
    })())().main();
})();
