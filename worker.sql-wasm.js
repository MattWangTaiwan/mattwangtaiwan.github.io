
// We are modularizing this manually because the current modularize setting in Emscripten has some issues:
// https://github.com/kripken/emscripten/issues/5820
// In addition, When you use emcc's modularization, it still expects to export a global object called `Module`,
// which is able to be used/called before the WASM is loaded.
// The modularization below exports a promise that loads and resolves to the actual sql.js module.
// That way, this module can't be used before the WASM is finished loading.

// We are going to define a function that a user will call to start loading initializing our Sql.js library
// However, that function might be called multiple times, and on subsequent calls, we don't actually want it to instantiate a new instance of the Module
// Instead, we want to return the previously loaded module

// TODO: Make this not declare a global if used in the browser
var initSqlJsPromise = undefined;

var initSqlJs = function (moduleConfig) {

    if (initSqlJsPromise) {
        return initSqlJsPromise;
    }
    // If we're here, we've never called this function before
    initSqlJsPromise = new Promise(function (resolveModule, reject) {

        // We are modularizing this manually because the current modularize setting in Emscripten has some issues:
        // https://github.com/kripken/emscripten/issues/5820

        // The way to affect the loading of emcc compiled modules is to create a variable called `Module` and add
        // properties to it, like `preRun`, `postRun`, etc
        // We are using that to get notified when the WASM has finished loading.
        // Only then will we return our promise

        // If they passed in a moduleConfig object, use that
        // Otherwise, initialize Module to the empty object
        var Module = typeof moduleConfig !== 'undefined' ? moduleConfig : {};

        // EMCC only allows for a single onAbort function (not an array of functions)
        // So if the user defined their own onAbort function, we remember it and call it
        var originalOnAbortFunction = Module['onAbort'];
        Module['onAbort'] = function (errorThatCausedAbort) {
            reject(new Error(errorThatCausedAbort));
            if (originalOnAbortFunction) {
                originalOnAbortFunction(errorThatCausedAbort);
            }
        };

        Module['postRun'] = Module['postRun'] || [];
        Module['postRun'].push(function () {
            // When Emscripted calls postRun, this promise resolves with the built Module
            resolveModule(Module);
        });

        // There is a section of code in the emcc-generated code below that looks like this:
        // (Note that this is lowercase `module`)
        // if (typeof module !== 'undefined') {
        //     module['exports'] = Module;
        // }
        // When that runs, it's going to overwrite our own modularization export efforts in shell-post.js!
        // The only way to tell emcc not to emit it is to pass the MODULARIZE=1 or MODULARIZE_INSTANCE=1 flags,
        // but that carries with it additional unnecessary baggage/bugs we don't want either.
        // So, we have three options:
        // 1) We undefine `module`
        // 2) We remember what `module['exports']` was at the beginning of this function and we restore it later
        // 3) We write a script to remove those lines of code as part of the Make process.
        //
        // Since those are the only lines of code that care about module, we will undefine it. It's the most straightforward
        // of the options, and has the side effect of reducing emcc's efforts to modify the module if its output were to change in the future.
        // That's a nice side effect since we're handling the modularization efforts ourselves
        module = undefined;

        // The emcc-generated code and shell-post.js code goes below,
        // meaning that all of it runs inside of this promise. If anything throws an exception, our promise will abort

        var e; e || (e = typeof Module !== 'undefined' ? Module : {}); null;
        e.onRuntimeInitialized = function () {
            function a(h, l) { this.Ra = h; this.db = l; this.Qa = 1; this.lb = [] } function b(h, l) { this.db = l; l = aa(h) + 1; this.eb = ba(l); if (null === this.eb) throw Error("Unable to allocate memory for the SQL string"); k(h, m, this.eb, l); this.jb = this.eb; this.$a = this.pb = null } function c(h) {
                this.filename = "dbfile_" + (4294967295 * Math.random() >>> 0); if (null != h) {
                    var l = this.filename, p = l ? r("//" + l) : "/"; l = ca(!0, !0); p = da(p, (void 0 !== l ? l : 438) & 4095 | 32768, 0); if (h) {
                        if ("string" === typeof h) {
                            for (var q = Array(h.length), B =
                                0, ha = h.length; B < ha; ++B)q[B] = h.charCodeAt(B); h = q
                        } ea(p, l | 146); q = u(p, "w"); fa(q, h, 0, h.length, 0, void 0); ka(q); ea(p, l)
                    }
                } this.handleError(g(this.filename, d)); this.db = x(d, "i32"); nc(this.db); this.fb = {}; this.Xa = {}
            } var d = y(4), f = e.cwrap, g = f("sqlite3_open", "number", ["string", "number"]), n = f("sqlite3_close_v2", "number", ["number"]), t = f("sqlite3_exec", "number", ["number", "string", "number", "number", "number"]), w = f("sqlite3_changes", "number", ["number"]), v = f("sqlite3_prepare_v2", "number", ["number", "string", "number", "number",
                "number"]), C = f("sqlite3_sql", "string", ["number"]), H = f("sqlite3_normalized_sql", "string", ["number"]), Y = f("sqlite3_prepare_v2", "number", ["number", "number", "number", "number", "number"]), oc = f("sqlite3_bind_text", "number", ["number", "number", "number", "number", "number"]), pb = f("sqlite3_bind_blob", "number", ["number", "number", "number", "number", "number"]), pc = f("sqlite3_bind_double", "number", ["number", "number", "number"]), qc = f("sqlite3_bind_int", "number", ["number", "number", "number"]), rc = f("sqlite3_bind_parameter_index",
                    "number", ["number", "string"]), sc = f("sqlite3_step", "number", ["number"]), tc = f("sqlite3_errmsg", "string", ["number"]), uc = f("sqlite3_column_count", "number", ["number"]), vc = f("sqlite3_data_count", "number", ["number"]), wc = f("sqlite3_column_double", "number", ["number", "number"]), xc = f("sqlite3_column_text", "string", ["number", "number"]), yc = f("sqlite3_column_blob", "number", ["number", "number"]), zc = f("sqlite3_column_bytes", "number", ["number", "number"]), Ac = f("sqlite3_column_type", "number", ["number", "number"]), Bc =
                    f("sqlite3_column_name", "string", ["number", "number"]), Cc = f("sqlite3_reset", "number", ["number"]), Dc = f("sqlite3_clear_bindings", "number", ["number"]), Ec = f("sqlite3_finalize", "number", ["number"]), Fc = f("sqlite3_create_function_v2", "number", "number string number number number number number number number".split(" ")), Gc = f("sqlite3_value_type", "number", ["number"]), Hc = f("sqlite3_value_bytes", "number", ["number"]), Ic = f("sqlite3_value_text", "string", ["number"]), Jc = f("sqlite3_value_blob", "number", ["number"]),
                Kc = f("sqlite3_value_double", "number", ["number"]), Lc = f("sqlite3_result_double", "", ["number", "number"]), qb = f("sqlite3_result_null", "", ["number"]), Mc = f("sqlite3_result_text", "", ["number", "string", "number", "number"]), Nc = f("sqlite3_result_blob", "", ["number", "number", "number", "number"]), Oc = f("sqlite3_result_int", "", ["number", "number"]), rb = f("sqlite3_result_error", "", ["number", "string", "number"]), nc = f("RegisterExtensionFunctions", "number", ["number"]); a.prototype.bind = function (h) {
                    if (!this.Ra) throw "Statement closed";
                    this.reset(); return Array.isArray(h) ? this.Bb(h) : null != h && "object" === typeof h ? this.Cb(h) : !0
                }; a.prototype.step = function () { if (!this.Ra) throw "Statement closed"; this.Qa = 1; var h = sc(this.Ra); switch (h) { case 100: return !0; case 101: return !1; default: throw this.db.handleError(h); } }; a.prototype.Ib = function (h) { null == h && (h = this.Qa, this.Qa += 1); return wc(this.Ra, h) }; a.prototype.Jb = function (h) { null == h && (h = this.Qa, this.Qa += 1); return xc(this.Ra, h) }; a.prototype.getBlob = function (h) {
                    null == h && (h = this.Qa, this.Qa += 1); var l =
                        zc(this.Ra, h); h = yc(this.Ra, h); for (var p = new Uint8Array(l), q = 0; q < l; q += 1)p[q] = z[h + q]; return p
                }; a.prototype.get = function (h) { null != h && this.bind(h) && this.step(); h = []; for (var l = vc(this.Ra), p = 0; p < l; p += 1)switch (Ac(this.Ra, p)) { case 1: case 2: h.push(this.Ib(p)); break; case 3: h.push(this.Jb(p)); break; case 4: h.push(this.getBlob(p)); break; default: h.push(null) }return h }; a.prototype.getColumnNames = function () { for (var h = [], l = uc(this.Ra), p = 0; p < l; p += 1)h.push(Bc(this.Ra, p)); return h }; a.prototype.getAsObject = function (h) {
                    h =
                    this.get(h); for (var l = this.getColumnNames(), p = {}, q = 0; q < l.length; q += 1)p[l[q]] = h[q]; return p
                }; a.prototype.getSQL = function () { return C(this.Ra) }; a.prototype.getNormalizedSQL = function () { return H(this.Ra) }; a.prototype.run = function (h) { null != h && this.bind(h); this.step(); return this.reset() }; a.prototype.Fb = function (h, l) { null == l && (l = this.Qa, this.Qa += 1); h = la(h); var p = ma(h); this.lb.push(p); this.db.handleError(oc(this.Ra, l, p, h.length - 1, 0)) }; a.prototype.Ab = function (h, l) {
                    null == l && (l = this.Qa, this.Qa += 1); var p = ma(h);
                    this.lb.push(p); this.db.handleError(pb(this.Ra, l, p, h.length, 0))
                }; a.prototype.Eb = function (h, l) { null == l && (l = this.Qa, this.Qa += 1); this.db.handleError((h === (h | 0) ? qc : pc)(this.Ra, l, h)) }; a.prototype.Db = function (h) { null == h && (h = this.Qa, this.Qa += 1); pb(this.Ra, h, 0, 0, 0) }; a.prototype.tb = function (h, l) {
                    null == l && (l = this.Qa, this.Qa += 1); switch (typeof h) { case "string": this.Fb(h, l); return; case "number": case "boolean": this.Eb(h + 0, l); return; case "object": if (null === h) { this.Db(l); return } if (null != h.length) { this.Ab(h, l); return } }throw "Wrong API use : tried to bind a value of an unknown type (" +
                        h + ").";
                }; a.prototype.Cb = function (h) { var l = this; Object.keys(h).forEach(function (p) { var q = rc(l.Ra, p); 0 !== q && l.tb(h[p], q) }); return !0 }; a.prototype.Bb = function (h) { for (var l = 0; l < h.length; l += 1)this.tb(h[l], l + 1); return !0 }; a.prototype.reset = function () { return 0 === Dc(this.Ra) && 0 === Cc(this.Ra) }; a.prototype.freemem = function () { for (var h; void 0 !== (h = this.lb.pop());)na(h) }; a.prototype.free = function () { var h = 0 === Ec(this.Ra); delete this.db.fb[this.Ra]; this.Ra = 0; return h }; b.prototype.next = function () {
                    if (null === this.eb) return { done: !0 };
                    null !== this.$a && (this.$a.free(), this.$a = null); if (!this.db.db) throw this.nb(), Error("Database closed"); var h = oa(), l = y(4); pa(d); pa(l); try { this.db.handleError(Y(this.db.db, this.jb, -1, d, l)); this.jb = x(l, "i32"); var p = x(d, "i32"); if (0 === p) return this.nb(), { done: !0 }; this.$a = new a(p, this.db); this.db.fb[p] = this.$a; return { value: this.$a, done: !1 } } catch (q) { throw this.pb = A(this.jb), this.nb(), q; } finally { qa(h) }
                }; b.prototype.nb = function () { na(this.eb); this.eb = null }; b.prototype.getRemainingSQL = function () {
                    return null !==
                        this.pb ? this.pb : A(this.jb)
                }; "function" === typeof Symbol && "symbol" === typeof Symbol.iterator && (b.prototype[Symbol.iterator] = function () { return this }); c.prototype.run = function (h, l) { if (!this.db) throw "Database closed"; if (l) { h = this.prepare(h, l); try { h.step() } finally { h.free() } } else this.handleError(t(this.db, h, 0, 0, d)); return this }; c.prototype.exec = function (h, l) {
                    if (!this.db) throw "Database closed"; var p = oa(), q = null; try {
                        var B = aa(h) + 1, ha = y(B); k(h, z, ha, B); var D = ha; var ia = y(4); for (h = []; 0 !== x(D, "i8");) {
                            pa(d); pa(ia);
                            this.handleError(Y(this.db, D, -1, d, ia)); var ja = x(d, "i32"); D = x(ia, "i32"); if (0 !== ja) { B = null; q = new a(ja, this); for (null != l && q.bind(l); q.step();)null === B && (B = { columns: q.getColumnNames(), values: [] }, h.push(B)), B.values.push(q.get()); q.free() }
                        } return h
                    } catch (E) { throw q && q.free(), E; } finally { qa(p) }
                }; c.prototype.each = function (h, l, p, q) { "function" === typeof l && (q = p, p = l, l = void 0); h = this.prepare(h, l); try { for (; h.step();)p(h.getAsObject()) } finally { h.free() } if ("function" === typeof q) return q() }; c.prototype.prepare = function (h,
                    l) { pa(d); this.handleError(v(this.db, h, -1, d, 0)); h = x(d, "i32"); if (0 === h) throw "Nothing to prepare"; var p = new a(h, this); null != l && p.bind(l); return this.fb[h] = p }; c.prototype.iterateStatements = function (h) { return new b(h, this) }; c.prototype["export"] = function () { Object.values(this.fb).forEach(function (l) { l.free() }); Object.values(this.Xa).forEach(ra); this.Xa = {}; this.handleError(n(this.db)); var h = sa(this.filename); this.handleError(g(this.filename, d)); this.db = x(d, "i32"); return h }; c.prototype.close = function () {
                        null !==
                        this.db && (Object.values(this.fb).forEach(function (h) { h.free() }), Object.values(this.Xa).forEach(ra), this.Xa = {}, this.handleError(n(this.db)), ta("/" + this.filename), this.db = null)
                    }; c.prototype.handleError = function (h) { if (0 === h) return null; h = tc(this.db); throw Error(h); }; c.prototype.getRowsModified = function () { return w(this.db) }; c.prototype.create_function = function (h, l) {
                        Object.prototype.hasOwnProperty.call(this.Xa, h) && (ua(this.Xa[h]), delete this.Xa[h]); var p = va(function (q, B, ha) {
                            for (var D, ia = [], ja = 0; ja < B; ja +=
                                1) { var E = x(ha + 4 * ja, "i32"), R = Gc(E); if (1 === R || 2 === R) E = Kc(E); else if (3 === R) E = Ic(E); else if (4 === R) { R = E; E = Hc(R); R = Jc(R); for (var wb = new Uint8Array(E), Ea = 0; Ea < E; Ea += 1)wb[Ea] = z[R + Ea]; E = wb } else E = null; ia.push(E) } try { D = l.apply(null, ia) } catch (Rc) { rb(q, Rc, -1); return } switch (typeof D) {
                                    case "boolean": Oc(q, D ? 1 : 0); break; case "number": Lc(q, D); break; case "string": Mc(q, D, -1, -1); break; case "object": null === D ? qb(q) : null != D.length ? (B = ma(D), Nc(q, B, D.length, -1), na(B)) : rb(q, "Wrong API use : tried to return a value of an unknown type (" +
                                        D + ").", -1); break; default: qb(q)
                                }
                        }); this.Xa[h] = p; this.handleError(Fc(this.db, h, l.length, 1, 0, p, 0, 0, 0)); return this
                    }; e.Database = c
        }; var wa = {}, F; for (F in e) e.hasOwnProperty(F) && (wa[F] = e[F]); var xa = "./this.program", ya = !1, G = !1, za = !1, Aa = !1; ya = "object" === typeof window; G = "function" === typeof importScripts; za = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node; Aa = !ya && !za && !G; var I = "", Ba, Ca, Da, Fa;
        if (za) I = G ? require("path").dirname(I) + "/" : __dirname + "/", Ba = function (a, b) { Da || (Da = require("fs")); Fa || (Fa = require("path")); a = Fa.normalize(a); return Da.readFileSync(a, b ? null : "utf8") }, Ca = function (a) { a = Ba(a, !0); a.buffer || (a = new Uint8Array(a)); assert(a.buffer); return a }, 1 < process.argv.length && (xa = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), "undefined" !== typeof module && (module.exports = e), e.inspect = function () { return "[Emscripten Module object]" }; else if (Aa) "undefined" != typeof read && (Ba = function (a) { return read(a) }),
            Ca = function (a) { if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a)); a = read(a, "binary"); assert("object" === typeof a); return a }, "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print); else if (ya || G) G ? I = self.location.href : document.currentScript && (I = document.currentScript.src), I = 0 !== I.indexOf("blob:") ? I.substr(0, I.lastIndexOf("/") + 1) : "", Ba = function (a) {
                var b = new XMLHttpRequest; b.open("GET",
                    a, !1); b.send(null); return b.responseText
            }, G && (Ca = function (a) { var b = new XMLHttpRequest; b.open("GET", a, !1); b.responseType = "arraybuffer"; b.send(null); return new Uint8Array(b.response) }); var Ga = e.print || console.log.bind(console), J = e.printErr || console.warn.bind(console); for (F in wa) wa.hasOwnProperty(F) && (e[F] = wa[F]); wa = null; e.thisProgram && (xa = e.thisProgram); var Ha = [], Ia; function ua(a) { Ia.delete(Ja.get(a)); Ha.push(a) }
        function va(a) {
            var b = Ja; if (!Ia) { Ia = new WeakMap; for (var c = 0; c < b.length; c++) { var d = b.get(c); d && Ia.set(d, c) } } if (Ia.has(a)) a = Ia.get(a); else {
                if (Ha.length) c = Ha.pop(); else { c = b.length; try { b.grow(1) } catch (n) { if (!(n instanceof RangeError)) throw n; throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."; } } try { b.set(c, a) } catch (n) {
                    if (!(n instanceof TypeError)) throw n; if ("function" === typeof WebAssembly.Function) {
                        var f = { i: "i32", j: "i64", f: "f32", d: "f64" }, g = { parameters: [], results: [] }; for (d = 1; 4 > d; ++d)g.parameters.push(f["viii"[d]]);
                        d = new WebAssembly.Function(g, a)
                    } else { f = [1, 0, 1, 96]; g = { i: 127, j: 126, f: 125, d: 124 }; f.push(3); for (d = 0; 3 > d; ++d)f.push(g["iii"[d]]); f.push(0); f[1] = f.length - 2; d = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(f, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])); d = new WebAssembly.Module(d); d = (new WebAssembly.Instance(d, { e: { f: a } })).exports.f } b.set(c, d)
                } Ia.set(a, c); a = c
            } return a
        } function ra(a) { ua(a) } var Ka; e.wasmBinary && (Ka = e.wasmBinary); var noExitRuntime; e.noExitRuntime && (noExitRuntime = e.noExitRuntime);
        "object" !== typeof WebAssembly && K("no native wasm support detected");
        function pa(a) { var b = "i32"; "*" === b.charAt(b.length - 1) && (b = "i32"); switch (b) { case "i1": z[a >> 0] = 0; break; case "i8": z[a >> 0] = 0; break; case "i16": La[a >> 1] = 0; break; case "i32": L[a >> 2] = 0; break; case "i64": M = [0, (N = 0, 1 <= +Math.abs(N) ? 0 < N ? (Math.min(+Math.floor(N / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((N - +(~~N >>> 0)) / 4294967296) >>> 0 : 0)]; L[a >> 2] = M[0]; L[a + 4 >> 2] = M[1]; break; case "float": Ma[a >> 2] = 0; break; case "double": Na[a >> 3] = 0; break; default: K("invalid type for setValue: " + b) } }
        function x(a, b) { b = b || "i8"; "*" === b.charAt(b.length - 1) && (b = "i32"); switch (b) { case "i1": return z[a >> 0]; case "i8": return z[a >> 0]; case "i16": return La[a >> 1]; case "i32": return L[a >> 2]; case "i64": return L[a >> 2]; case "float": return Ma[a >> 2]; case "double": return Na[a >> 3]; default: K("invalid type for getValue: " + b) }return null } var Oa, Ja, Pa = !1; function assert(a, b) { a || K("Assertion failed: " + b) } function Qa(a) { var b = e["_" + a]; assert(b, "Cannot call unknown function " + a + ", make sure it is exported"); return b }
        function Ra(a, b, c, d) { var f = { string: function (v) { var C = 0; if (null !== v && void 0 !== v && 0 !== v) { var H = (v.length << 2) + 1; C = y(H); k(v, m, C, H) } return C }, array: function (v) { var C = y(v.length); z.set(v, C); return C } }, g = Qa(a), n = []; a = 0; if (d) for (var t = 0; t < d.length; t++) { var w = f[c[t]]; w ? (0 === a && (a = oa()), n[t] = w(d[t])) : n[t] = d[t] } c = g.apply(null, n); c = function (v) { return "string" === b ? A(v) : "boolean" === b ? !!v : v }(c); 0 !== a && qa(a); return c } var Sa = 0, Ta = 1;
        function ma(a) { var b = Sa == Ta ? y(a.length) : ba(a.length); a.subarray || a.slice ? m.set(a, b) : m.set(new Uint8Array(a), b); return b } var Ua = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function Va(a, b, c) { var d = b + c; for (c = b; a[c] && !(c >= d);)++c; if (16 < c - b && a.subarray && Ua) return Ua.decode(a.subarray(b, c)); for (d = ""; b < c;) { var f = a[b++]; if (f & 128) { var g = a[b++] & 63; if (192 == (f & 224)) d += String.fromCharCode((f & 31) << 6 | g); else { var n = a[b++] & 63; f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | n : (f & 7) << 18 | g << 12 | n << 6 | a[b++] & 63; 65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023)) } } else d += String.fromCharCode(f) } return d } function A(a, b) { return a ? Va(m, a, b) : "" }
        function k(a, b, c, d) { if (!(0 < d)) return 0; var f = c; d = c + d - 1; for (var g = 0; g < a.length; ++g) { var n = a.charCodeAt(g); if (55296 <= n && 57343 >= n) { var t = a.charCodeAt(++g); n = 65536 + ((n & 1023) << 10) | t & 1023 } if (127 >= n) { if (c >= d) break; b[c++] = n } else { if (2047 >= n) { if (c + 1 >= d) break; b[c++] = 192 | n >> 6 } else { if (65535 >= n) { if (c + 2 >= d) break; b[c++] = 224 | n >> 12 } else { if (c + 3 >= d) break; b[c++] = 240 | n >> 18; b[c++] = 128 | n >> 12 & 63 } b[c++] = 128 | n >> 6 & 63 } b[c++] = 128 | n & 63 } } b[c] = 0; return c - f }
        function aa(a) { for (var b = 0, c = 0; c < a.length; ++c) { var d = a.charCodeAt(c); 55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023); 127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4 } return b } function Wa(a) { var b = aa(a) + 1, c = ba(b); c && k(a, z, c, b); return c } var Xa, z, m, La, L, Ma, Na;
        function Ya(a) { Xa = a; e.HEAP8 = z = new Int8Array(a); e.HEAP16 = La = new Int16Array(a); e.HEAP32 = L = new Int32Array(a); e.HEAPU8 = m = new Uint8Array(a); e.HEAPU16 = new Uint16Array(a); e.HEAPU32 = new Uint32Array(a); e.HEAPF32 = Ma = new Float32Array(a); e.HEAPF64 = Na = new Float64Array(a) } var Za = e.INITIAL_MEMORY || 16777216; e.wasmMemory ? Oa = e.wasmMemory : Oa = new WebAssembly.Memory({ initial: Za / 65536, maximum: 32768 }); Oa && (Xa = Oa.buffer); Za = Xa.byteLength; Ya(Xa); var $a = [], ab = [], bb = [], cb = [];
        function db() { var a = e.preRun.shift(); $a.unshift(a) } var eb = 0, fb = null, gb = null; e.preloadedImages = {}; e.preloadedAudios = {}; function K(a) { if (e.onAbort) e.onAbort(a); J(a); Pa = !0; throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info."); } function hb(a) { var b = ib; return String.prototype.startsWith ? b.startsWith(a) : 0 === b.indexOf(a) } function jb() { return hb("data:application/octet-stream;base64,") } var ib = "sql-wasm.wasm";
        if (!jb()) { var kb = ib; ib = e.locateFile ? e.locateFile(kb, I) : I + kb } function lb() { try { if (Ka) return new Uint8Array(Ka); if (Ca) return Ca(ib); throw "both async and sync fetching of the wasm failed"; } catch (a) { K(a) } } function mb() { return Ka || !ya && !G || "function" !== typeof fetch || hb("file://") ? Promise.resolve().then(lb) : fetch(ib, { credentials: "same-origin" }).then(function (a) { if (!a.ok) throw "failed to load wasm binary file at '" + ib + "'"; return a.arrayBuffer() }).catch(function () { return lb() }) } var N, M;
        function nb(a) { for (; 0 < a.length;) { var b = a.shift(); if ("function" == typeof b) b(e); else { var c = b.Hb; "number" === typeof c ? void 0 === b.mb ? Ja.get(c)() : Ja.get(c)(b.mb) : c(void 0 === b.mb ? null : b.mb) } } } function ob(a) { return a.replace(/\b_Z[\w\d_]+/g, function (b) { return b === b ? b : b + " [" + b + "]" }) }
        function sb() { function a(g) { return (g = g.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? g[1] : "GMT" } if (!tb) { tb = !0; L[ub() >> 2] = 60 * (new Date).getTimezoneOffset(); var b = (new Date).getFullYear(), c = new Date(b, 0, 1); b = new Date(b, 6, 1); L[vb() >> 2] = Number(c.getTimezoneOffset() != b.getTimezoneOffset()); var d = a(c), f = a(b); d = Wa(d); f = Wa(f); b.getTimezoneOffset() < c.getTimezoneOffset() ? (L[xb() >> 2] = d, L[xb() + 4 >> 2] = f) : (L[xb() >> 2] = f, L[xb() + 4 >> 2] = d) } } var tb;
        function yb(a, b) { for (var c = 0, d = a.length - 1; 0 <= d; d--) { var f = a[d]; "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--) } if (b) for (; c; c--)a.unshift(".."); return a } function r(a) { var b = "/" === a.charAt(0), c = "/" === a.substr(-1); (a = yb(a.split("/").filter(function (d) { return !!d }), !b).join("/")) || b || (a = "."); a && c && (a += "/"); return (b ? "/" : "") + a }
        function zb(a) { var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1); a = b[0]; b = b[1]; if (!a && !b) return "."; b && (b = b.substr(0, b.length - 1)); return a + b } function Ab(a) { if ("/" === a) return "/"; a = r(a); a = a.replace(/\/$/, ""); var b = a.lastIndexOf("/"); return -1 === b ? a : a.substr(b + 1) } function Bb(a) { L[Cb() >> 2] = a }
        function Db() { if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) { var a = new Uint8Array(1); return function () { crypto.getRandomValues(a); return a[0] } } if (za) try { var b = require("crypto"); return function () { return b.randomBytes(1)[0] } } catch (c) { } return function () { K("randomDevice") } }
        function Eb() { for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) { b = 0 <= c ? arguments[c] : "/"; if ("string" !== typeof b) throw new TypeError("Arguments to path.resolve must be strings"); if (!b) return ""; a = b + "/" + a; b = "/" === b.charAt(0) } a = yb(a.split("/").filter(function (d) { return !!d }), !b).join("/"); return (b ? "/" : "") + a || "." } var Fb = []; function Gb(a, b) { Fb[a] = { input: [], output: [], cb: b }; Hb(a, Ib) }
        var Ib = {
            open: function (a) { var b = Fb[a.node.rdev]; if (!b) throw new O(43); a.tty = b; a.seekable = !1 }, close: function (a) { a.tty.cb.flush(a.tty) }, flush: function (a) { a.tty.cb.flush(a.tty) }, read: function (a, b, c, d) { if (!a.tty || !a.tty.cb.xb) throw new O(60); for (var f = 0, g = 0; g < d; g++) { try { var n = a.tty.cb.xb(a.tty) } catch (t) { throw new O(29); } if (void 0 === n && 0 === f) throw new O(6); if (null === n || void 0 === n) break; f++; b[c + g] = n } f && (a.node.timestamp = Date.now()); return f }, write: function (a, b, c, d) {
                if (!a.tty || !a.tty.cb.qb) throw new O(60);
                try { for (var f = 0; f < d; f++)a.tty.cb.qb(a.tty, b[c + f]) } catch (g) { throw new O(29); } d && (a.node.timestamp = Date.now()); return f
            }
        }, Jb = {
            xb: function (a) {
                if (!a.input.length) {
                    var b = null; if (za) { var c = Buffer.zb ? Buffer.zb(256) : new Buffer(256), d = 0; try { d = Da.readSync(process.stdin.fd, c, 0, 256, null) } catch (f) { if (-1 != f.toString().indexOf("EOF")) d = 0; else throw f; } 0 < d ? b = c.slice(0, d).toString("utf-8") : b = null } else "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" ==
                        typeof readline && (b = readline(), null !== b && (b += "\n")); if (!b) return null; a.input = la(b, !0)
                } return a.input.shift()
            }, qb: function (a, b) { null === b || 10 === b ? (Ga(Va(a.output, 0)), a.output = []) : 0 != b && a.output.push(b) }, flush: function (a) { a.output && 0 < a.output.length && (Ga(Va(a.output, 0)), a.output = []) }
        }, Kb = { qb: function (a, b) { null === b || 10 === b ? (J(Va(a.output, 0)), a.output = []) : 0 != b && a.output.push(b) }, flush: function (a) { a.output && 0 < a.output.length && (J(Va(a.output, 0)), a.output = []) } }, P = {
            Va: null, Wa: function () {
                return P.createNode(null,
                    "/", 16895, 0)
            }, createNode: function (a, b, c, d) {
                if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new O(63); P.Va || (P.Va = {
                    dir: { node: { Ua: P.Na.Ua, Ta: P.Na.Ta, lookup: P.Na.lookup, gb: P.Na.gb, rename: P.Na.rename, unlink: P.Na.unlink, rmdir: P.Na.rmdir, readdir: P.Na.readdir, symlink: P.Na.symlink }, stream: { Za: P.Oa.Za } }, file: { node: { Ua: P.Na.Ua, Ta: P.Na.Ta }, stream: { Za: P.Oa.Za, read: P.Oa.read, write: P.Oa.write, sb: P.Oa.sb, hb: P.Oa.hb, ib: P.Oa.ib } }, link: { node: { Ua: P.Na.Ua, Ta: P.Na.Ta, readlink: P.Na.readlink }, stream: {} }, ub: {
                        node: {
                            Ua: P.Na.Ua,
                            Ta: P.Na.Ta
                        }, stream: Lb
                    }
                }); c = Mb(a, b, c, d); Q(c.mode) ? (c.Na = P.Va.dir.node, c.Oa = P.Va.dir.stream, c.Ma = {}) : 32768 === (c.mode & 61440) ? (c.Na = P.Va.file.node, c.Oa = P.Va.file.stream, c.Sa = 0, c.Ma = null) : 40960 === (c.mode & 61440) ? (c.Na = P.Va.link.node, c.Oa = P.Va.link.stream) : 8192 === (c.mode & 61440) && (c.Na = P.Va.ub.node, c.Oa = P.Va.ub.stream); c.timestamp = Date.now(); a && (a.Ma[b] = c); return c
            }, Sb: function (a) { if (a.Ma && a.Ma.subarray) { for (var b = [], c = 0; c < a.Sa; ++c)b.push(a.Ma[c]); return b } return a.Ma }, Tb: function (a) {
                return a.Ma ? a.Ma.subarray ?
                    a.Ma.subarray(0, a.Sa) : new Uint8Array(a.Ma) : new Uint8Array(0)
            }, vb: function (a, b) { var c = a.Ma ? a.Ma.length : 0; c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Ma, a.Ma = new Uint8Array(b), 0 < a.Sa && a.Ma.set(c.subarray(0, a.Sa), 0)) }, Pb: function (a, b) {
                if (a.Sa != b) if (0 == b) a.Ma = null, a.Sa = 0; else {
                    if (!a.Ma || a.Ma.subarray) { var c = a.Ma; a.Ma = new Uint8Array(b); c && a.Ma.set(c.subarray(0, Math.min(b, a.Sa))) } else if (a.Ma || (a.Ma = []), a.Ma.length > b) a.Ma.length = b; else for (; a.Ma.length < b;)a.Ma.push(0); a.Sa =
                        b
                }
            }, Na: {
                Ua: function (a) { var b = {}; b.dev = 8192 === (a.mode & 61440) ? a.id : 1; b.ino = a.id; b.mode = a.mode; b.nlink = 1; b.uid = 0; b.gid = 0; b.rdev = a.rdev; Q(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Sa : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0; b.atime = new Date(a.timestamp); b.mtime = new Date(a.timestamp); b.ctime = new Date(a.timestamp); b.Gb = 4096; b.blocks = Math.ceil(b.size / b.Gb); return b }, Ta: function (a, b) {
                    void 0 !== b.mode && (a.mode = b.mode); void 0 !== b.timestamp && (a.timestamp = b.timestamp); void 0 !== b.size && P.Pb(a,
                        b.size)
                }, lookup: function () { throw Nb[44]; }, gb: function (a, b, c, d) { return P.createNode(a, b, c, d) }, rename: function (a, b, c) { if (Q(a.mode)) { try { var d = Ob(b, c) } catch (g) { } if (d) for (var f in d.Ma) throw new O(55); } delete a.parent.Ma[a.name]; a.name = c; b.Ma[c] = a; a.parent = b }, unlink: function (a, b) { delete a.Ma[b] }, rmdir: function (a, b) { var c = Ob(a, b), d; for (d in c.Ma) throw new O(55); delete a.Ma[b] }, readdir: function (a) { var b = [".", ".."], c; for (c in a.Ma) a.Ma.hasOwnProperty(c) && b.push(c); return b }, symlink: function (a, b, c) {
                    a = P.createNode(a,
                        b, 41471, 0); a.link = c; return a
                }, readlink: function (a) { if (40960 !== (a.mode & 61440)) throw new O(28); return a.link }
            }, Oa: {
                read: function (a, b, c, d, f) { var g = a.node.Ma; if (f >= a.node.Sa) return 0; a = Math.min(a.node.Sa - f, d); if (8 < a && g.subarray) b.set(g.subarray(f, f + a), c); else for (d = 0; d < a; d++)b[c + d] = g[f + d]; return a }, write: function (a, b, c, d, f, g) {
                    b.buffer === z.buffer && (g = !1); if (!d) return 0; a = a.node; a.timestamp = Date.now(); if (b.subarray && (!a.Ma || a.Ma.subarray)) {
                        if (g) return a.Ma = b.subarray(c, c + d), a.Sa = d; if (0 === a.Sa && 0 === f) return a.Ma =
                            b.slice(c, c + d), a.Sa = d; if (f + d <= a.Sa) return a.Ma.set(b.subarray(c, c + d), f), d
                    } P.vb(a, f + d); if (a.Ma.subarray && b.subarray) a.Ma.set(b.subarray(c, c + d), f); else for (g = 0; g < d; g++)a.Ma[f + g] = b[c + g]; a.Sa = Math.max(a.Sa, f + d); return d
                }, Za: function (a, b, c) { 1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Sa); if (0 > b) throw new O(28); return b }, sb: function (a, b, c) { P.vb(a.node, b + c); a.node.Sa = Math.max(a.node.Sa, b + c) }, hb: function (a, b, c, d, f, g) {
                    assert(0 === b); if (32768 !== (a.node.mode & 61440)) throw new O(43); a = a.node.Ma;
                    if (g & 2 || a.buffer !== Xa) { if (0 < d || d + c < a.length) a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c); d = !0; g = 16384 * Math.ceil(c / 16384); for (b = ba(g); c < g;)z[b + c++] = 0; c = b; if (!c) throw new O(48); z.set(a, c) } else d = !1, c = a.byteOffset; return { Ob: c, kb: d }
                }, ib: function (a, b, c, d, f) { if (32768 !== (a.node.mode & 61440)) throw new O(43); if (f & 2) return 0; P.Oa.write(a, b, 0, d, c, !1); return 0 }
            }
        }, Pb = null, Qb = {}, S = [], Rb = 1, T = null, Sb = !0, U = {}, O = null, Nb = {};
        function V(a, b) { a = Eb("/", a); b = b || {}; if (!a) return { path: "", node: null }; var c = { wb: !0, rb: 0 }, d; for (d in c) void 0 === b[d] && (b[d] = c[d]); if (8 < b.rb) throw new O(32); a = yb(a.split("/").filter(function (n) { return !!n }), !1); var f = Pb; c = "/"; for (d = 0; d < a.length; d++) { var g = d === a.length - 1; if (g && b.parent) break; f = Ob(f, a[d]); c = r(c + "/" + a[d]); f.ab && (!g || g && b.wb) && (f = f.ab.root); if (!g || b.Ya) for (g = 0; 40960 === (f.mode & 61440);)if (f = Tb(c), c = Eb(zb(c), f), f = V(c, { rb: b.rb }).node, 40 < g++) throw new O(32); } return { path: c, node: f } }
        function Ub(a) { for (var b; ;) { if (a === a.parent) return a = a.Wa.yb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a; b = b ? a.name + "/" + b : a.name; a = a.parent } } function Vb(a, b) { for (var c = 0, d = 0; d < b.length; d++)c = (c << 5) - c + b.charCodeAt(d) | 0; return (a + c >>> 0) % T.length } function Wb(a) { var b = Vb(a.parent.id, a.name); if (T[b] === a) T[b] = a.bb; else for (b = T[b]; b;) { if (b.bb === a) { b.bb = a.bb; break } b = b.bb } }
        function Ob(a, b) { var c; if (c = (c = Xb(a, "x")) ? c : a.Na.lookup ? 0 : 2) throw new O(c, a); for (c = T[Vb(a.id, b)]; c; c = c.bb) { var d = c.name; if (c.parent.id === a.id && d === b) return c } return a.Na.lookup(a, b) } function Mb(a, b, c, d) { a = new Yb(a, b, c, d); b = Vb(a.parent.id, a.name); a.bb = T[b]; return T[b] = a } function Q(a) { return 16384 === (a & 61440) } var Zb = { r: 0, rs: 1052672, "r+": 2, w: 577, wx: 705, xw: 705, "w+": 578, "wx+": 706, "xw+": 706, a: 1089, ax: 1217, xa: 1217, "a+": 1090, "ax+": 1218, "xa+": 1218 };
        function $b(a) { var b = ["r", "w", "rw"][a & 3]; a & 512 && (b += "w"); return b } function Xb(a, b) { if (Sb) return 0; if (-1 === b.indexOf("r") || a.mode & 292) { if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) return 2 } else return 2; return 0 } function ac(a, b) { try { return Ob(a, b), 20 } catch (c) { } return Xb(a, "wx") } function bc(a, b, c) { try { var d = Ob(a, b) } catch (f) { return f.Pa } if (a = Xb(a, "wx")) return a; if (c) { if (!Q(d.mode)) return 54; if (d === d.parent || "/" === Ub(d)) return 10 } else if (Q(d.mode)) return 31; return 0 }
        function cc(a) { var b = 4096; for (a = a || 0; a <= b; a++)if (!S[a]) return a; throw new O(33); } function dc(a, b) { ec || (ec = function () { }, ec.prototype = {}); var c = new ec, d; for (d in a) c[d] = a[d]; a = c; b = cc(b); a.fd = b; return S[b] = a } var Lb = { open: function (a) { a.Oa = Qb[a.node.rdev].Oa; a.Oa.open && a.Oa.open(a) }, Za: function () { throw new O(70); } }; function Hb(a, b) { Qb[a] = { Oa: b } }
        function fc(a, b) { var c = "/" === b, d = !b; if (c && Pb) throw new O(10); if (!c && !d) { var f = V(b, { wb: !1 }); b = f.path; f = f.node; if (f.ab) throw new O(10); if (!Q(f.mode)) throw new O(54); } b = { type: a, Ub: {}, yb: b, Mb: [] }; a = a.Wa(b); a.Wa = b; b.root = a; c ? Pb = a : f && (f.ab = b, f.Wa && f.Wa.Mb.push(b)) } function da(a, b, c) { var d = V(a, { parent: !0 }).node; a = Ab(a); if (!a || "." === a || ".." === a) throw new O(28); var f = ac(d, a); if (f) throw new O(f); if (!d.Na.gb) throw new O(63); return d.Na.gb(d, a, b, c) } function W(a, b) { da(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0) }
        function hc(a, b, c) { "undefined" === typeof c && (c = b, b = 438); da(a, b | 8192, c) } function ic(a, b) { if (!Eb(a)) throw new O(44); var c = V(b, { parent: !0 }).node; if (!c) throw new O(44); b = Ab(b); var d = ac(c, b); if (d) throw new O(d); if (!c.Na.symlink) throw new O(63); c.Na.symlink(c, b, a) }
        function ta(a) { var b = V(a, { parent: !0 }).node, c = Ab(a), d = Ob(b, c), f = bc(b, c, !1); if (f) throw new O(f); if (!b.Na.unlink) throw new O(63); if (d.ab) throw new O(10); try { U.willDeletePath && U.willDeletePath(a) } catch (g) { J("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + g.message) } b.Na.unlink(b, c); Wb(d); try { if (U.onDeletePath) U.onDeletePath(a) } catch (g) { J("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + g.message) } }
        function Tb(a) { a = V(a).node; if (!a) throw new O(44); if (!a.Na.readlink) throw new O(28); return Eb(Ub(a.parent), a.Na.readlink(a)) } function jc(a, b) { a = V(a, { Ya: !b }).node; if (!a) throw new O(44); if (!a.Na.Ua) throw new O(63); return a.Na.Ua(a) } function kc(a) { return jc(a, !0) } function ea(a, b) { var c; "string" === typeof a ? c = V(a, { Ya: !0 }).node : c = a; if (!c.Na.Ta) throw new O(63); c.Na.Ta(c, { mode: b & 4095 | c.mode & -4096, timestamp: Date.now() }) }
        function lc(a) { var b; "string" === typeof a ? b = V(a, { Ya: !0 }).node : b = a; if (!b.Na.Ta) throw new O(63); b.Na.Ta(b, { timestamp: Date.now() }) } function mc(a, b) { if (0 > b) throw new O(28); var c; "string" === typeof a ? c = V(a, { Ya: !0 }).node : c = a; if (!c.Na.Ta) throw new O(63); if (Q(c.mode)) throw new O(31); if (32768 !== (c.mode & 61440)) throw new O(28); if (a = Xb(c, "w")) throw new O(a); c.Na.Ta(c, { size: b, timestamp: Date.now() }) }
        function u(a, b, c, d) {
            if ("" === a) throw new O(44); if ("string" === typeof b) { var f = Zb[b]; if ("undefined" === typeof f) throw Error("Unknown file open mode: " + b); b = f } c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0; if ("object" === typeof a) var g = a; else { a = r(a); try { g = V(a, { Ya: !(b & 131072) }).node } catch (n) { } } f = !1; if (b & 64) if (g) { if (b & 128) throw new O(20); } else g = da(a, c, 0), f = !0; if (!g) throw new O(44); 8192 === (g.mode & 61440) && (b &= -513); if (b & 65536 && !Q(g.mode)) throw new O(54); if (!f && (c = g ? 40960 === (g.mode & 61440) ? 32 : Q(g.mode) &&
                ("r" !== $b(b) || b & 512) ? 31 : Xb(g, $b(b)) : 44)) throw new O(c); b & 512 && mc(g, 0); b &= -131713; d = dc({ node: g, path: Ub(g), flags: b, seekable: !0, position: 0, Oa: g.Oa, Rb: [], error: !1 }, d); d.Oa.open && d.Oa.open(d); !e.logReadFiles || b & 1 || (Pc || (Pc = {}), a in Pc || (Pc[a] = 1, J("FS.trackingDelegate error on read file: " + a))); try { U.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= 1), 0 !== (b & 2097155) && (g |= 2), U.onOpenFile(a, g)) } catch (n) { J("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + n.message) } return d
        }
        function ka(a) { if (null === a.fd) throw new O(8); a.ob && (a.ob = null); try { a.Oa.close && a.Oa.close(a) } catch (b) { throw b; } finally { S[a.fd] = null } a.fd = null } function Qc(a, b, c) { if (null === a.fd) throw new O(8); if (!a.seekable || !a.Oa.Za) throw new O(70); if (0 != c && 1 != c && 2 != c) throw new O(28); a.position = a.Oa.Za(a, b, c); a.Rb = [] }
        function Sc(a, b, c, d, f) { if (0 > d || 0 > f) throw new O(28); if (null === a.fd) throw new O(8); if (1 === (a.flags & 2097155)) throw new O(8); if (Q(a.node.mode)) throw new O(31); if (!a.Oa.read) throw new O(28); var g = "undefined" !== typeof f; if (!g) f = a.position; else if (!a.seekable) throw new O(70); b = a.Oa.read(a, b, c, d, f); g || (a.position += b); return b }
        function fa(a, b, c, d, f, g) { if (0 > d || 0 > f) throw new O(28); if (null === a.fd) throw new O(8); if (0 === (a.flags & 2097155)) throw new O(8); if (Q(a.node.mode)) throw new O(31); if (!a.Oa.write) throw new O(28); a.seekable && a.flags & 1024 && Qc(a, 0, 2); var n = "undefined" !== typeof f; if (!n) f = a.position; else if (!a.seekable) throw new O(70); b = a.Oa.write(a, b, c, d, f, g); n || (a.position += b); try { if (a.path && U.onWriteToFile) U.onWriteToFile(a.path) } catch (t) { J("FS.trackingDelegate['onWriteToFile']('" + a.path + "') threw an exception: " + t.message) } return b }
        function sa(a) { var b = { encoding: "binary" }; b = b || {}; b.flags = b.flags || "r"; b.encoding = b.encoding || "binary"; if ("utf8" !== b.encoding && "binary" !== b.encoding) throw Error('Invalid encoding type "' + b.encoding + '"'); var c, d = u(a, b.flags); a = jc(a).size; var f = new Uint8Array(a); Sc(d, f, 0, a, 0); "utf8" === b.encoding ? c = Va(f, 0) : "binary" === b.encoding && (c = f); ka(d); return c }
        function Tc() { O || (O = function (a, b) { this.node = b; this.Qb = function (c) { this.Pa = c }; this.Qb(a); this.message = "FS error" }, O.prototype = Error(), O.prototype.constructor = O, [44].forEach(function (a) { Nb[a] = new O(a); Nb[a].stack = "<generic error, no stack>" })) } var Uc; function ca(a, b) { var c = 0; a && (c |= 365); b && (c |= 146); return c }
        function Vc(a, b, c) {
            a = r("/dev/" + a); var d = ca(!!b, !!c); Wc || (Wc = 64); var f = Wc++ << 8 | 0; Hb(f, { open: function (g) { g.seekable = !1 }, close: function () { c && c.buffer && c.buffer.length && c(10) }, read: function (g, n, t, w) { for (var v = 0, C = 0; C < w; C++) { try { var H = b() } catch (Y) { throw new O(29); } if (void 0 === H && 0 === v) throw new O(6); if (null === H || void 0 === H) break; v++; n[t + C] = H } v && (g.node.timestamp = Date.now()); return v }, write: function (g, n, t, w) { for (var v = 0; v < w; v++)try { c(n[t + v]) } catch (C) { throw new O(29); } w && (g.node.timestamp = Date.now()); return v } });
            hc(a, d, f)
        } var Wc, X = {}, ec, Pc, Xc = {};
        function Yc(a, b, c) {
            try { var d = a(b) } catch (f) { if (f && f.node && r(b) !== r(Ub(f.node))) return -54; throw f; } L[c >> 2] = d.dev; L[c + 4 >> 2] = 0; L[c + 8 >> 2] = d.ino; L[c + 12 >> 2] = d.mode; L[c + 16 >> 2] = d.nlink; L[c + 20 >> 2] = d.uid; L[c + 24 >> 2] = d.gid; L[c + 28 >> 2] = d.rdev; L[c + 32 >> 2] = 0; M = [d.size >>> 0, (N = d.size, 1 <= +Math.abs(N) ? 0 < N ? (Math.min(+Math.floor(N / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((N - +(~~N >>> 0)) / 4294967296) >>> 0 : 0)]; L[c + 40 >> 2] = M[0]; L[c + 44 >> 2] = M[1]; L[c + 48 >> 2] = 4096; L[c + 52 >> 2] = d.blocks; L[c + 56 >> 2] = d.atime.getTime() / 1E3 | 0; L[c + 60 >> 2] =
                0; L[c + 64 >> 2] = d.mtime.getTime() / 1E3 | 0; L[c + 68 >> 2] = 0; L[c + 72 >> 2] = d.ctime.getTime() / 1E3 | 0; L[c + 76 >> 2] = 0; M = [d.ino >>> 0, (N = d.ino, 1 <= +Math.abs(N) ? 0 < N ? (Math.min(+Math.floor(N / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((N - +(~~N >>> 0)) / 4294967296) >>> 0 : 0)]; L[c + 80 >> 2] = M[0]; L[c + 84 >> 2] = M[1]; return 0
        } var Zc = void 0; function $c() { Zc += 4; return L[Zc - 4 >> 2] } function Z(a) { a = S[a]; if (!a) throw new O(8); return a } var ad = {};
        function bd() { if (!cd) { var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: xa || "./this.program" }, b; for (b in ad) a[b] = ad[b]; var c = []; for (b in a) c.push(b + "=" + a[b]); cd = c } return cd } var cd, dd; za ? dd = function () { var a = process.hrtime(); return 1E3 * a[0] + a[1] / 1E6 } : "undefined" !== typeof dateNow ? dd = dateNow : dd = function () { return performance.now() };
        function ed(a) { for (var b = dd(); dd() - b < a / 1E3;); } e._usleep = ed; function Yb(a, b, c, d) { a || (a = this); this.parent = a; this.Wa = a.Wa; this.ab = null; this.id = Rb++; this.name = b; this.mode = c; this.Na = {}; this.Oa = {}; this.rdev = d } Object.defineProperties(Yb.prototype, { read: { get: function () { return 365 === (this.mode & 365) }, set: function (a) { a ? this.mode |= 365 : this.mode &= -366 } }, write: { get: function () { return 146 === (this.mode & 146) }, set: function (a) { a ? this.mode |= 146 : this.mode &= -147 } } }); Tc(); T = Array(4096); fc(P, "/"); W("/tmp"); W("/home"); W("/home/web_user");
        (function () { W("/dev"); Hb(259, { read: function () { return 0 }, write: function (b, c, d, f) { return f } }); hc("/dev/null", 259); Gb(1280, Jb); Gb(1536, Kb); hc("/dev/tty", 1280); hc("/dev/tty1", 1536); var a = Db(); Vc("random", a); Vc("urandom", a); W("/dev/shm"); W("/dev/shm/tmp") })(); W("/proc"); W("/proc/self"); W("/proc/self/fd");
        fc({ Wa: function () { var a = Mb("/proc/self", "fd", 16895, 73); a.Na = { lookup: function (b, c) { var d = S[+c]; if (!d) throw new O(8); b = { parent: null, Wa: { yb: "fake" }, Na: { readlink: function () { return d.path } } }; return b.parent = b } }; return a } }, "/proc/self/fd"); function la(a, b) { var c = Array(aa(a) + 1); a = k(a, c, 0, c.length); b && (c.length = a); return c } ab.push({ Hb: function () { fd() } });
        var id = {
            b: function (a, b, c, d) { K("Assertion failed: " + A(a) + ", at: " + [b ? A(b) : "unknown filename", c, d ? A(d) : "unknown function"]) }, r: function (a, b) {
                sb(); a = new Date(1E3 * L[a >> 2]); L[b >> 2] = a.getSeconds(); L[b + 4 >> 2] = a.getMinutes(); L[b + 8 >> 2] = a.getHours(); L[b + 12 >> 2] = a.getDate(); L[b + 16 >> 2] = a.getMonth(); L[b + 20 >> 2] = a.getFullYear() - 1900; L[b + 24 >> 2] = a.getDay(); var c = new Date(a.getFullYear(), 0, 1); L[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0; L[b + 36 >> 2] = -(60 * a.getTimezoneOffset()); var d = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
                c = c.getTimezoneOffset(); a = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0; L[b + 32 >> 2] = a; a = L[xb() + (a ? 4 : 0) >> 2]; L[b + 40 >> 2] = a; return b
            }, j: function (a, b) { try { a = A(a); if (b & -8) var c = -28; else { var d; (d = V(a, { Ya: !0 }).node) ? (a = "", b & 4 && (a += "r"), b & 2 && (a += "w"), b & 1 && (a += "x"), c = a && Xb(d, a) ? -2 : 0) : c = -44 } return c } catch (f) { return "undefined" !== typeof X && f instanceof O || K(f), -f.Pa } }, v: function (a, b) { try { return a = A(a), ea(a, b), 0 } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), -c.Pa } }, D: function (a) {
                try {
                    return a = A(a),
                        lc(a), 0
                } catch (b) { return "undefined" !== typeof X && b instanceof O || K(b), -b.Pa }
            }, w: function (a, b) { try { var c = S[a]; if (!c) throw new O(8); ea(c.node, b); return 0 } catch (d) { return "undefined" !== typeof X && d instanceof O || K(d), -d.Pa } }, E: function (a) { try { var b = S[a]; if (!b) throw new O(8); lc(b.node); return 0 } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), -c.Pa } }, c: function (a, b, c) {
                Zc = c; try {
                    var d = Z(a); switch (b) {
                        case 0: var f = $c(); return 0 > f ? -28 : u(d.path, d.flags, 0, f).fd; case 1: case 2: return 0; case 3: return d.flags;
                        case 4: return f = $c(), d.flags |= f, 0; case 12: return f = $c(), La[f + 0 >> 1] = 2, 0; case 13: case 14: return 0; case 16: case 8: return -28; case 9: return Bb(28), -1; default: return -28
                    }
                } catch (g) { return "undefined" !== typeof X && g instanceof O || K(g), -g.Pa }
            }, x: function (a, b) { try { var c = Z(a); return Yc(jc, c.path, b) } catch (d) { return "undefined" !== typeof X && d instanceof O || K(d), -d.Pa } }, i: function (a, b, c) {
                try { var d = S[a]; if (!d) throw new O(8); if (0 === (d.flags & 2097155)) throw new O(28); mc(d.node, c); return 0 } catch (f) {
                    return "undefined" !== typeof X &&
                        f instanceof O || K(f), -f.Pa
                }
            }, J: function (a, b) { try { if (0 === b) return -28; if (b < aa("/") + 1) return -68; k("/", m, a, b); return a } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), -c.Pa } }, F: function () { return 0 }, e: function () { return 42 }, u: function (a, b) { try { return a = A(a), Yc(kc, a, b) } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), -c.Pa } }, t: function (a, b) {
                try { return a = A(a), a = r(a), "/" === a[a.length - 1] && (a = a.substr(0, a.length - 1)), W(a, b), 0 } catch (c) {
                    return "undefined" !== typeof X && c instanceof O || K(c),
                        -c.Pa
                }
            }, A: function (a, b, c, d, f, g) {
                try { a: { g <<= 12; var n = !1; if (0 !== (d & 16) && 0 !== a % 16384) var t = -28; else { if (0 !== (d & 32)) { var w = gd(16384, b); if (!w) { t = -48; break a } hd(w, 0, b); n = !0 } else { var v = S[f]; if (!v) { t = -8; break a } var C = g; if (0 !== (c & 2) && 0 === (d & 2) && 2 !== (v.flags & 2097155)) throw new O(2); if (1 === (v.flags & 2097155)) throw new O(2); if (!v.Oa.hb) throw new O(43); var H = v.Oa.hb(v, a, b, C, c, d); w = H.Ob; n = H.kb } Xc[w] = { Lb: w, Kb: b, kb: n, fd: f, Nb: c, flags: d, offset: g }; t = w } } return t } catch (Y) {
                    return "undefined" !== typeof X && Y instanceof O || K(Y),
                        -Y.Pa
                }
            }, z: function (a, b) { try { if (-1 === (a | 0) || 0 === b) var c = -28; else { var d = Xc[a]; if (d && b === d.Kb) { var f = S[d.fd]; if (d.Nb & 2) { var g = d.flags, n = d.offset, t = m.slice(a, a + b); f && f.Oa.ib && f.Oa.ib(f, t, n, b, g) } Xc[a] = null; d.kb && na(d.Lb) } c = 0 } return c } catch (w) { return "undefined" !== typeof X && w instanceof O || K(w), -w.Pa } }, y: function (a, b, c) { Zc = c; try { var d = A(a), f = $c(); return u(d, b, f).fd } catch (g) { return "undefined" !== typeof X && g instanceof O || K(g), -g.Pa } }, G: function (a, b, c) {
                try { var d = Z(a); return Sc(d, z, b, c) } catch (f) {
                    return "undefined" !==
                        typeof X && f instanceof O || K(f), -f.Pa
                }
            }, l: function (a, b, c) { try { a = A(a); if (0 >= c) var d = -28; else { var f = Tb(a), g = Math.min(c, aa(f)), n = z[b + g]; k(f, m, b, c + 1); z[b + g] = n; d = g } return d } catch (t) { return "undefined" !== typeof X && t instanceof O || K(t), -t.Pa } }, C: function (a) {
                try {
                    a = A(a); var b = V(a, { parent: !0 }).node, c = Ab(a), d = Ob(b, c), f = bc(b, c, !0); if (f) throw new O(f); if (!b.Na.rmdir) throw new O(63); if (d.ab) throw new O(10); try { U.willDeletePath && U.willDeletePath(a) } catch (g) {
                        J("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " +
                            g.message)
                    } b.Na.rmdir(b, c); Wb(d); try { if (U.onDeletePath) U.onDeletePath(a) } catch (g) { J("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + g.message) } return 0
                } catch (g) { return "undefined" !== typeof X && g instanceof O || K(g), -g.Pa }
            }, f: function (a, b) { try { return a = A(a), Yc(jc, a, b) } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), -c.Pa } }, H: function (a) { try { return a = A(a), ta(a), 0 } catch (b) { return "undefined" !== typeof X && b instanceof O || K(b), -b.Pa } }, n: function (a, b, c) { m.copyWithin(a, b, b + c) },
            d: function (a) { a >>>= 0; var b = m.length; if (2147483648 < a) return !1; for (var c = 1; 4 >= c; c *= 2) { var d = b * (1 + .2 / c); d = Math.min(d, a + 100663296); d = Math.max(16777216, a, d); 0 < d % 65536 && (d += 65536 - d % 65536); a: { try { Oa.grow(Math.min(2147483648, d) - Xa.byteLength + 65535 >>> 16); Ya(Oa.buffer); var f = 1; break a } catch (g) { } f = void 0 } if (f) return !0 } return !1 }, p: function (a, b) { var c = 0; bd().forEach(function (d, f) { var g = b + c; f = L[a + 4 * f >> 2] = g; for (g = 0; g < d.length; ++g)z[f++ >> 0] = d.charCodeAt(g); z[f >> 0] = 0; c += d.length + 1 }); return 0 }, q: function (a, b) {
                var c =
                    bd(); L[a >> 2] = c.length; var d = 0; c.forEach(function (f) { d += f.length + 1 }); L[b >> 2] = d; return 0
            }, g: function (a) { try { var b = Z(a); ka(b); return 0 } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), c.Pa } }, o: function (a, b) { try { var c = Z(a); z[b >> 0] = c.tty ? 2 : Q(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4; return 0 } catch (d) { return "undefined" !== typeof X && d instanceof O || K(d), d.Pa } }, m: function (a, b, c, d, f) {
                try {
                    var g = Z(a); a = 4294967296 * c + (b >>> 0); if (-9007199254740992 >= a || 9007199254740992 <= a) return -61; Qc(g, a, d); M = [g.position >>>
                        0, (N = g.position, 1 <= +Math.abs(N) ? 0 < N ? (Math.min(+Math.floor(N / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((N - +(~~N >>> 0)) / 4294967296) >>> 0 : 0)]; L[f >> 2] = M[0]; L[f + 4 >> 2] = M[1]; g.ob && 0 === a && 0 === d && (g.ob = null); return 0
                } catch (n) { return "undefined" !== typeof X && n instanceof O || K(n), n.Pa }
            }, K: function (a) { try { var b = Z(a); return b.Oa && b.Oa.fsync ? -b.Oa.fsync(b) : 0 } catch (c) { return "undefined" !== typeof X && c instanceof O || K(c), c.Pa } }, I: function (a, b, c, d) {
                try {
                    a: {
                        for (var f = Z(a), g = a = 0; g < c; g++) {
                            var n = fa(f, z, L[b + 8 * g >> 2], L[b + (8 *
                                g + 4) >> 2], void 0); if (0 > n) { var t = -1; break a } a += n
                        } t = a
                    } L[d >> 2] = t; return 0
                } catch (w) { return "undefined" !== typeof X && w instanceof O || K(w), w.Pa }
            }, h: function (a) { var b = Date.now(); L[a >> 2] = b / 1E3 | 0; L[a + 4 >> 2] = b % 1E3 * 1E3 | 0; return 0 }, a: Oa, k: function (a, b) { if (0 === a) return Bb(28), -1; var c = L[a >> 2]; a = L[a + 4 >> 2]; if (0 > a || 999999999 < a || 0 > c) return Bb(28), -1; 0 !== b && (L[b >> 2] = 0, L[b + 4 >> 2] = 0); return ed(1E6 * c + a / 1E3) }, B: function (a) {
                switch (a) {
                    case 30: return 16384; case 85: return 131072; case 132: case 133: case 12: case 137: case 138: case 15: case 235: case 16: case 17: case 18: case 19: case 20: case 149: case 13: case 10: case 236: case 153: case 9: case 21: case 22: case 159: case 154: case 14: case 77: case 78: case 139: case 80: case 81: case 82: case 68: case 67: case 164: case 11: case 29: case 47: case 48: case 95: case 52: case 51: case 46: case 79: return 200809;
                    case 27: case 246: case 127: case 128: case 23: case 24: case 160: case 161: case 181: case 182: case 242: case 183: case 184: case 243: case 244: case 245: case 165: case 178: case 179: case 49: case 50: case 168: case 169: case 175: case 170: case 171: case 172: case 97: case 76: case 32: case 173: case 35: return -1; case 176: case 177: case 7: case 155: case 8: case 157: case 125: case 126: case 92: case 93: case 129: case 130: case 131: case 94: case 91: return 1; case 74: case 60: case 69: case 70: case 4: return 1024; case 31: case 42: case 72: return 32;
                    case 87: case 26: case 33: return 2147483647; case 34: case 1: return 47839; case 38: case 36: return 99; case 43: case 37: return 2048; case 0: return 2097152; case 3: return 65536; case 28: return 32768; case 44: return 32767; case 75: return 16384; case 39: return 1E3; case 89: return 700; case 71: return 256; case 40: return 255; case 2: return 100; case 180: return 64; case 25: return 20; case 5: return 16; case 6: return 6; case 73: return 4; case 84: return "object" === typeof navigator ? navigator.hardwareConcurrency || 1 : 1
                }Bb(28); return -1
            },
            L: function (a) { var b = Date.now() / 1E3 | 0; a && (L[a >> 2] = b); return b }, s: function (a, b) { if (b) { var c = 1E3 * L[b + 8 >> 2]; c += L[b + 12 >> 2] / 1E3 } else c = Date.now(); a = A(a); try { b = c; var d = V(a, { Ya: !0 }).node; d.Na.Ta(d, { timestamp: Math.max(b, c) }); return 0 } catch (f) { a = f; if (!(a instanceof O)) { a += " : "; a: { d = Error(); if (!d.stack) { try { throw Error(); } catch (g) { d = g } if (!d.stack) { d = "(no stack trace available)"; break a } } d = d.stack.toString() } e.extraStackTrace && (d += "\n" + e.extraStackTrace()); d = ob(d); throw a + d; } Bb(a.Pa); return -1 } }
        };
        (function () {
            function a(f) { e.asm = f.exports; Ja = e.asm.M; eb--; e.monitorRunDependencies && e.monitorRunDependencies(eb); 0 == eb && (null !== fb && (clearInterval(fb), fb = null), gb && (f = gb, gb = null, f())) } function b(f) { a(f.instance) } function c(f) { return mb().then(function (g) { return WebAssembly.instantiate(g, d) }).then(f, function (g) { J("failed to asynchronously prepare wasm: " + g); K(g) }) } var d = { a: id }; eb++; e.monitorRunDependencies && e.monitorRunDependencies(eb); if (e.instantiateWasm) try { return e.instantiateWasm(d, a) } catch (f) {
                return J("Module.instantiateWasm callback failed with error: " +
                    f), !1
            } (function () { if (Ka || "function" !== typeof WebAssembly.instantiateStreaming || jb() || hb("file://") || "function" !== typeof fetch) return c(b); fetch(ib, { credentials: "same-origin" }).then(function (f) { return WebAssembly.instantiateStreaming(f, d).then(b, function (g) { J("wasm streaming compile failed: " + g); J("falling back to ArrayBuffer instantiation"); return c(b) }) }) })(); return {}
        })();
        var fd = e.___wasm_call_ctors = function () { return (fd = e.___wasm_call_ctors = e.asm.N).apply(null, arguments) }, hd = e._memset = function () { return (hd = e._memset = e.asm.O).apply(null, arguments) }; e._sqlite3_free = function () { return (e._sqlite3_free = e.asm.P).apply(null, arguments) }; var Cb = e.___errno_location = function () { return (Cb = e.___errno_location = e.asm.Q).apply(null, arguments) }; e._sqlite3_finalize = function () { return (e._sqlite3_finalize = e.asm.R).apply(null, arguments) };
        e._sqlite3_reset = function () { return (e._sqlite3_reset = e.asm.S).apply(null, arguments) }; e._sqlite3_clear_bindings = function () { return (e._sqlite3_clear_bindings = e.asm.T).apply(null, arguments) }; e._sqlite3_value_blob = function () { return (e._sqlite3_value_blob = e.asm.U).apply(null, arguments) }; e._sqlite3_value_text = function () { return (e._sqlite3_value_text = e.asm.V).apply(null, arguments) }; e._sqlite3_value_bytes = function () { return (e._sqlite3_value_bytes = e.asm.W).apply(null, arguments) };
        e._sqlite3_value_double = function () { return (e._sqlite3_value_double = e.asm.X).apply(null, arguments) }; e._sqlite3_value_int = function () { return (e._sqlite3_value_int = e.asm.Y).apply(null, arguments) }; e._sqlite3_value_type = function () { return (e._sqlite3_value_type = e.asm.Z).apply(null, arguments) }; e._sqlite3_result_blob = function () { return (e._sqlite3_result_blob = e.asm._).apply(null, arguments) }; e._sqlite3_result_double = function () { return (e._sqlite3_result_double = e.asm.$).apply(null, arguments) };
        e._sqlite3_result_error = function () { return (e._sqlite3_result_error = e.asm.aa).apply(null, arguments) }; e._sqlite3_result_int = function () { return (e._sqlite3_result_int = e.asm.ba).apply(null, arguments) }; e._sqlite3_result_int64 = function () { return (e._sqlite3_result_int64 = e.asm.ca).apply(null, arguments) }; e._sqlite3_result_null = function () { return (e._sqlite3_result_null = e.asm.da).apply(null, arguments) }; e._sqlite3_result_text = function () { return (e._sqlite3_result_text = e.asm.ea).apply(null, arguments) };
        e._sqlite3_step = function () { return (e._sqlite3_step = e.asm.fa).apply(null, arguments) }; e._sqlite3_column_count = function () { return (e._sqlite3_column_count = e.asm.ga).apply(null, arguments) }; e._sqlite3_data_count = function () { return (e._sqlite3_data_count = e.asm.ha).apply(null, arguments) }; e._sqlite3_column_blob = function () { return (e._sqlite3_column_blob = e.asm.ia).apply(null, arguments) }; e._sqlite3_column_bytes = function () { return (e._sqlite3_column_bytes = e.asm.ja).apply(null, arguments) };
        e._sqlite3_column_double = function () { return (e._sqlite3_column_double = e.asm.ka).apply(null, arguments) }; e._sqlite3_column_text = function () { return (e._sqlite3_column_text = e.asm.la).apply(null, arguments) }; e._sqlite3_column_type = function () { return (e._sqlite3_column_type = e.asm.ma).apply(null, arguments) }; e._sqlite3_column_name = function () { return (e._sqlite3_column_name = e.asm.na).apply(null, arguments) }; e._sqlite3_bind_blob = function () { return (e._sqlite3_bind_blob = e.asm.oa).apply(null, arguments) };
        e._sqlite3_bind_double = function () { return (e._sqlite3_bind_double = e.asm.pa).apply(null, arguments) }; e._sqlite3_bind_int = function () { return (e._sqlite3_bind_int = e.asm.qa).apply(null, arguments) }; e._sqlite3_bind_text = function () { return (e._sqlite3_bind_text = e.asm.ra).apply(null, arguments) }; e._sqlite3_bind_parameter_index = function () { return (e._sqlite3_bind_parameter_index = e.asm.sa).apply(null, arguments) }; e._sqlite3_sql = function () { return (e._sqlite3_sql = e.asm.ta).apply(null, arguments) };
        e._sqlite3_normalized_sql = function () { return (e._sqlite3_normalized_sql = e.asm.ua).apply(null, arguments) }; e._sqlite3_errmsg = function () { return (e._sqlite3_errmsg = e.asm.va).apply(null, arguments) }; e._sqlite3_exec = function () { return (e._sqlite3_exec = e.asm.wa).apply(null, arguments) }; e._sqlite3_prepare_v2 = function () { return (e._sqlite3_prepare_v2 = e.asm.xa).apply(null, arguments) }; e._sqlite3_changes = function () { return (e._sqlite3_changes = e.asm.ya).apply(null, arguments) };
        e._sqlite3_close_v2 = function () { return (e._sqlite3_close_v2 = e.asm.za).apply(null, arguments) }; e._sqlite3_create_function_v2 = function () { return (e._sqlite3_create_function_v2 = e.asm.Aa).apply(null, arguments) }; e._sqlite3_open = function () { return (e._sqlite3_open = e.asm.Ba).apply(null, arguments) }; var ba = e._malloc = function () { return (ba = e._malloc = e.asm.Ca).apply(null, arguments) }, na = e._free = function () { return (na = e._free = e.asm.Da).apply(null, arguments) };
        e._RegisterExtensionFunctions = function () { return (e._RegisterExtensionFunctions = e.asm.Ea).apply(null, arguments) };
        var xb = e.__get_tzname = function () { return (xb = e.__get_tzname = e.asm.Fa).apply(null, arguments) }, vb = e.__get_daylight = function () { return (vb = e.__get_daylight = e.asm.Ga).apply(null, arguments) }, ub = e.__get_timezone = function () { return (ub = e.__get_timezone = e.asm.Ha).apply(null, arguments) }, oa = e.stackSave = function () { return (oa = e.stackSave = e.asm.Ia).apply(null, arguments) }, qa = e.stackRestore = function () { return (qa = e.stackRestore = e.asm.Ja).apply(null, arguments) }, y = e.stackAlloc = function () {
            return (y = e.stackAlloc = e.asm.Ka).apply(null,
                arguments)
        }, gd = e._memalign = function () { return (gd = e._memalign = e.asm.La).apply(null, arguments) }; e.cwrap = function (a, b, c, d) { c = c || []; var f = c.every(function (g) { return "number" === g }); return "string" !== b && f && !d ? Qa(a) : function () { return Ra(a, b, c, arguments) } }; e.UTF8ToString = A; e.stackSave = oa; e.stackRestore = qa; e.stackAlloc = y; var jd; gb = function kd() { jd || ld(); jd || (gb = kd) };
        function ld() {
            function a() {
                if (!jd && (jd = !0, e.calledRun = !0, !Pa)) {
                    e.noFSInit || Uc || (Uc = !0, Tc(), e.stdin = e.stdin, e.stdout = e.stdout, e.stderr = e.stderr, e.stdin ? Vc("stdin", e.stdin) : ic("/dev/tty", "/dev/stdin"), e.stdout ? Vc("stdout", null, e.stdout) : ic("/dev/tty", "/dev/stdout"), e.stderr ? Vc("stderr", null, e.stderr) : ic("/dev/tty1", "/dev/stderr"), u("/dev/stdin", "r"), u("/dev/stdout", "w"), u("/dev/stderr", "w")); nb(ab); Sb = !1; nb(bb); if (e.onRuntimeInitialized) e.onRuntimeInitialized(); if (e.postRun) for ("function" == typeof e.postRun &&
                        (e.postRun = [e.postRun]); e.postRun.length;) { var b = e.postRun.shift(); cb.unshift(b) } nb(cb)
                }
            } if (!(0 < eb)) { if (e.preRun) for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;)db(); nb($a); 0 < eb || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function () { setTimeout(function () { e.setStatus("") }, 1); a() }, 1)) : a()) }
        } e.run = ld; if (e.preInit) for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;)e.preInit.pop()(); noExitRuntime = !0; ld();


        // The shell-pre.js and emcc-generated code goes above
        return Module;
    }); // The end of the promise being returned

    return initSqlJsPromise;
} // The end of our initSqlJs function

// This bit below is copied almost exactly from what you get when you use the MODULARIZE=1 flag with emcc
// However, we don't want to use the emcc modularization. See shell-pre.js
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = initSqlJs;
    // This will allow the module to be used in ES6 or CommonJS
    module.exports.default = initSqlJs;
}
else if (typeof define === 'function' && define['amd']) {
    define([], function () { return initSqlJs; });
}
else if (typeof exports === 'object') {
    exports["Module"] = initSqlJs;
}
/* global initSqlJs */
/* eslint-env worker */
/* eslint no-restricted-globals: ["error"] */

"use strict";

var db;

function onModuleReady(SQL) {
    function createDb(data) {
        if (db != null) db.close();
        db = new SQL.Database(data);
        return db;
    }

    var buff; var data; var result;
    data = this["data"];
    switch (data && data["action"]) {
        case "open":
            buff = data["buffer"];
            createDb(buff && new Uint8Array(buff));
            return postMessage({
                id: data["id"],
                ready: true
            });
        case "exec":
            if (db === null) {
                createDb();
            }
            if (!data["sql"]) {
                throw "exec: Missing query string";
            }
            return postMessage({
                id: data["id"],
                results: db.exec(data["sql"], data["params"])
            });
        case "each":
            if (db === null) {
                createDb();
            }
            var callback = function callback(row) {
                return postMessage({
                    id: data["id"],
                    row: row,
                    finished: false
                });
            };
            var done = function done() {
                return postMessage({
                    id: data["id"],
                    finished: true
                });
            };
            return db.each(data["sql"], data["params"], callback, done);
        case "export":
            buff = db["export"]();
            result = {
                id: data["id"],
                buffer: buff
            };
            try {
                return postMessage(result, [result]);
            } catch (error) {
                return postMessage(result);
            }
        case "close":
            if (db) {
                db.close();
            }
            return postMessage({
                id: data["id"]
            });
        default:
            throw new Error("Invalid action : " + (data && data["action"]));
    }
}

function onError(err) {
    return postMessage({
        id: this["data"]["id"],
        error: err["message"]
    });
}

if (typeof importScripts === "function") {
    db = null;
    var sqlModuleReady = initSqlJs();
    self.onmessage = function onmessage(event) {
        return sqlModuleReady
            .then(onModuleReady.bind(event))
            .catch(onError.bind(event));
    };
}
