// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8h8mn":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stylesCss = require("./styles.css");
var _router = require("./router/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
console.log("hey", "3001");
new (0, _routerDefault.default)("#app", [
    "login",
    "chat",
    "registration",
    "404",
    "500"
]);

},{"./styles.css":"lW6qc","./router/Router":"khLEj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW6qc":[function() {},{}],"khLEj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _page = require("../modules/Page");
var _pageDefault = parcelHelpers.interopDefault(_page);
var _currentRoute = require("../utils/currentRoute");
class Router {
    constructor(root, routes){
        this.init();
        this.root = root;
        this.routes = routes;
    }
    init() {
        console.log("init");
        window.addEventListener("hashchange", this.changeRoute);
        this.changeRoute();
    }
    changeRoute() {
        let route = (0, _currentRoute.currentRoute)();
        if (route === "") route = "login";
        const page = new (0, _pageDefault.default)();
        page.render(root, route);
    }
    destroy() {
        window.removeEventListener(this.changeRoute);
    }
}
exports.default = Router;

},{"../modules/Page":"dpMFT","../utils/currentRoute":"kfGDM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpMFT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../pages/*/index.js");
var _currentRoute = require("../utils/currentRoute");
var _applyRenderParameters = require("../utils/applyRenderParameters");
class Page {
    constructor(root, route){
        this.root = root;
        this.route = route;
    }
    render(root, name) {
        const parameter = _indexJs[name].default;
        const template = parameter.template;
        const context = parameter.context;
        (0, _applyRenderParameters.applyRenderParameters)(template, context);
    }
    static reRender(newTemplate, newContext) {
        const name = (0, _currentRoute.currentRoute)();
        let context = Object.assign({}, _indexJs[name].default.context);
        Object.keys(context).forEach(function(key) {
            if (newContext[key] != null) context[key] = newContext[key];
        });
        let template = newTemplate || _indexJs[name].default.template;
        (0, _applyRenderParameters.applyRenderParameters)(template, context);
    }
}
exports.default = Page;

},{"../pages/*/index.js":"fgbCN","../utils/currentRoute":"kfGDM","../utils/applyRenderParameters":"a1T8V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgbCN":[function(require,module,exports) {
const _temp0 = require("../404/index.js");
const _temp1 = require("../500/index.js");
const _temp2 = require("../chat/index.js");
const _temp3 = require("../login/index.js");
const _temp4 = require("../registration/index.js");
const _temp5 = require("../settings/index.js");
module.exports = {
    "404": _temp0,
    "500": _temp1,
    "chat": _temp2,
    "login": _temp3,
    "registration": _temp4,
    "settings": _temp5
};

},{"../404/index.js":"3mX9L","../500/index.js":"dhKVG","../chat/index.js":"6IeT6","../login/index.js":"5dBIA","../registration/index.js":"fSkHX","../settings/index.js":"gSXyr"}],"3mX9L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _404Tmpl = require("./404.tmpl");
var _404TmplDefault = parcelHelpers.interopDefault(_404Tmpl);
const context = {
    handleClick: ()=>{
        console.log("hello");
    }
};
exports.default = {
    context,
    template: (0, _404TmplDefault.default)
};

},{"./404.tmpl":"l5kwb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5kwb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
<div class="error-page">
<div class="error-name">
    <h1 class="center-text">404</h1>
    <a class="center-text back-link" href="/">Вернуться к чатам</a>
</div>
</div>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dhKVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _500Tmpl = require("./500.tmpl");
var _500TmplDefault = parcelHelpers.interopDefault(_500Tmpl);
const context = {
    handleClick: ()=>{
        console.log("hello");
    }
};
exports.default = {
    context,
    template: (0, _500TmplDefault.default)
};

},{"./500.tmpl":"hgLGT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgLGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
<div class="error-page">
<div class="error-name">
    <h1 class="center-text">500</h1>
    <a class="center-text back-link" href="/">Вернуться к чатам</a>
</div>
</div>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6IeT6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chatTmpl = require("./chat.tmpl");
var _chatTmplDefault = parcelHelpers.interopDefault(_chatTmpl);
const context = {
    handleClick: ()=>{
        console.log("hello");
    }
};
exports.default = {
    context,
    template: (0, _chatTmplDefault.default)
};

},{"./chat.tmpl":"98xyM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98xyM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
    <div class="chat-wrapper">
    <aside class="history-panel">
        <div class="history-panel__toolbar">
            <div class="history-panel__profile">
                <span>Профиль</span>
            </div>
            <input class="search-input" type="text" placeholder="Поиск">
        </div>
        <div class="history-panel__chat">
            <div class="message">
                <div class="avatar-rounded">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="message__body">
                    <span class="message__name">Андрей</span>
                    <span class="message__preview">Изображение</span>
                </div>
                <div class="message__info">
                    <div class="message__date">10:49</div>
                    <div class="message__bage">
                        <span class="message__count">2</span>
                    </div>
                </div>
            </div>
            <div class="message">
                <div class="avatar-rounded">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="message__body">
                    <span class="message__name">Андрей</span>
                    <span class="message__preview">Изображение</span>
                </div>
                <div class="message__info">
                    <div class="message__date">10:49</div>
                    <div class="message__bage">
                        <span class="message__count">2</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
    <main class="chat-current">
        <div class="chat-current__info-panel">
            <div class="chat-current__info">
                <div class="avatar-rounded">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div>
                    <span>Вадим</span>
                </div>
            </div>
            <div class="chat-current__options">
                ...
            </div>
        </div>
        <div class="chat">
            <div class="chat__date">
                <span>19 июня</span>
            </div>
            <div class="chat__message message-left">
                <div>
                    <p>
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
                        момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                        знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер
                        все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты
                        с пленкой.

                        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                        так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                        на аукционе за 45000 евро.
                    </p>
                </div>
                <div class="message-time"> <span> 11:56</span></div>
            </div>
            <div class="chat__message message-right">
                <div>
                    <p> Супер!</p>
                </div>
                <div class="message-time"> <span> 11:58</span></div>
            </div>
        </div>
        <div class="message-toolbar">
            <button class="clip-button">^</button>
            <input placeholder="Сообщение" class="message-input" type="text">
            <button class="send-message-button">-></button>
        </div>
    </main>
</div>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5dBIA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loginTmpl = require("./login.tmpl");
var _loginTmplDefault = parcelHelpers.interopDefault(_loginTmpl);
const context = {
    formHeading: "Login",
    primaryButtonName: "Authorize",
    secondaryButtonName: "No account?",
    inputs: {
        login: {
            placeholder: "Login"
        },
        password: {
            placeholder: "Password"
        }
    },
    primaryButtonClick: ()=>{
        document.location.href = "http://localhost:1234/#chat";
    },
    secondaryButtonClick: ()=>{
        console.log("hello");
        document.location.href = "http://localhost:1234/#registration";
    }
};
exports.default = {
    context,
    template: (0, _loginTmplDefault.default)
};

},{"./login.tmpl":"iBNh1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBNh1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonPrimaryTmpl = require("../../components/buttons/buttonPrimary/buttonPrimary.tmpl");
var _buttonPrimaryTmplDefault = parcelHelpers.interopDefault(_buttonPrimaryTmpl);
var _buttonSecondaryTmpl = require("../../components/buttons/buttonSecondary/buttonSecondary.tmpl");
var _buttonSecondaryTmplDefault = parcelHelpers.interopDefault(_buttonSecondaryTmpl);
const template = `
<form class="entry-form">
    <h2 class="center-text">{{ formHeading }}</h2>
    <div class="entry-form__inputs">
        <div class="input-container">
            <input required pattern="\S+.*" id="username" class="text-input" type="text">
            <label class="input-label" for="username">{{ inputs.login.placeholder }}</label>
        </div>
        <div class="input-container">
            <input required pattern="\S+.*" id="password" class="text-input" type="text">
            <label class="input-label" for="password">{{ inputs.password.placeholder }}</label>
        </div>
    </div>

<div class="action-buttons">
    ${(0, _buttonPrimaryTmplDefault.default)}
    ${(0, _buttonSecondaryTmplDefault.default)}
</div>
</form>
`;
exports.default = template;

},{"../../components/buttons/buttonPrimary/buttonPrimary.tmpl":"bvroS","../../components/buttons/buttonSecondary/buttonSecondary.tmpl":"81ceB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvroS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
<button onclick="{{ primaryButtonClick }}" type="submit" 
class="button button-primary">{{ primaryButtonName }}</button>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"81ceB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
<button onclick="{{ secondaryButtonClick }}" class="button button-link">{{ secondaryButtonName }}</button>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSkHX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _registrationTmpl = require("./registration.tmpl");
var _registrationTmplDefault = parcelHelpers.interopDefault(_registrationTmpl);
const context = {
    formHeading: "Registration",
    primaryButtonName: "Register",
    secondaryButtonName: "No account?",
    inputs: {
        email: {
            placeholder: "Email@yandex.ru"
        },
        login: {
            placeholder: "Login"
        },
        name: {
            placeholder: "Ivan"
        },
        surname: {
            placeholder: "Ivanov"
        },
        tel: {
            placeholder: "+7 (909) 888 88 88"
        },
        password: {
            placeholder: "Password"
        },
        confirmPassword: {
            placeholder: "Repeat password, please"
        }
    },
    primaryButtonClick: ()=>{
        console.log("hello");
        document.location.href = "http://localhost:1234/#chat";
    }
};
exports.default = {
    context,
    template: (0, _registrationTmplDefault.default)
};

},{"./registration.tmpl":"gVx4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVx4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonPrimaryTmpl = require("../../components/buttons/buttonPrimary/buttonPrimary.tmpl");
var _buttonPrimaryTmplDefault = parcelHelpers.interopDefault(_buttonPrimaryTmpl);
const template = `
<form class="entry-form">
<h2 class="center-text">{{ formHeading }}</h2>
<div class="entry-form__inputs">

    <div class="input-container">
        <input required pattern="\S+.*" id="username" class="text-input" type="text">
        <label class="input-label" for="username">{{ inputs.email.placeholder }}</label>
    </div>
    <div class="input-container">
        <input required pattern="\S+.*" id="password" class="text-input" type="text">
        <label class="input-label" for="password">{{ inputs.login.placeholder }}</label>
    </div>
    <div class="input-container">
        <input required pattern="\S+.*" id="password" class="text-input" type="text">
        <label class="input-label" for="password">{{ inputs.name.placeholder }}</label>
    </div>
    <div class="input-container">
        <input required pattern="\S+.*" id="password" class="text-input" type="text">
        <label class="input-label" for="password">{{ inputs.surname.placeholder }}</label>
    </div>
    <div class="input-container">
        <input required pattern="\S+.*" id="password" class="text-input" type="text">
        <label class="input-label" for="password">{{ inputs.tel.placeholder }}</label>
    </div>
    <div class="input-container">
        <input required pattern="\S+.*" id="password" class="text-input" type="text">
        <label class="input-label" for="password">{{ inputs.password.placeholder }}</label>
    </div>
    <div class="input-container">
        <input required pattern="\S+.*" id="password" class="text-input" type="text">
        <label class="input-label" for="password">{{ inputs.confirmPassword.placeholder }}</label>
    </div> 
</div>

<div class="action-buttons">
    ${(0, _buttonPrimaryTmplDefault.default)}
</div>
</form>
`;
exports.default = template;

},{"../../components/buttons/buttonPrimary/buttonPrimary.tmpl":"bvroS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSXyr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _settingsTmpl = require("./settings.tmpl");
var _settingsTmplDefault = parcelHelpers.interopDefault(_settingsTmpl);
var _page = require("../../modules/Page");
var _pageDefault = parcelHelpers.interopDefault(_page);
var _context = require("./changeData/context");
var _contextDefault = parcelHelpers.interopDefault(_context);
var _changePasswordTmpl = require("./changePassword/changePassword.tmpl");
var _changePasswordTmplDefault = parcelHelpers.interopDefault(_changePasswordTmpl);
var _context1 = require("./changePassword/context");
var _contextDefault1 = parcelHelpers.interopDefault(_context1);
let clicked = false;
const context = {
    nameHeading: "Ivan",
    primaryButtonName: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435",
    secondaryButtonName: "No account?",
    warningButtonName: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    successButtonName: "\u0412\u044B\u0439\u0442\u0438",
    image: "./img/avatar_default.png",
    primaryButtonClick: ()=>{
        const passingContext = clicked ? context : (0, _contextDefault.default);
        (0, _pageDefault.default).reRender(null, passingContext);
        let editableSpans = document.querySelectorAll("[data-editable]");
        editableSpans.forEach((element)=>{
            element.setAttribute("contenteditable", !clicked);
        });
        clicked = !clicked;
    },
    warningButtonClick: ()=>{
        (0, _pageDefault.default).reRender((0, _changePasswordTmplDefault.default), (0, _contextDefault1.default));
    }
};
exports.default = {
    context,
    template: (0, _settingsTmplDefault.default)
};

},{"./settings.tmpl":"gNADH","../../modules/Page":"dpMFT","./changeData/context":"jsliS","./changePassword/changePassword.tmpl":"kIbmp","./changePassword/context":"iCdwW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNADH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonPrimaryTmpl = require("../../components/buttons/buttonPrimary/buttonPrimary.tmpl");
var _buttonPrimaryTmplDefault = parcelHelpers.interopDefault(_buttonPrimaryTmpl);
var _buttonSuccessTmpl = require("../../components/buttons/buttonSuccess/buttonSuccess.tmpl");
var _buttonSuccessTmplDefault = parcelHelpers.interopDefault(_buttonSuccessTmpl);
var _buttonWarningTmpl = require("../../components/buttons/buttonWarning/buttonWarning.tmpl");
var _buttonWarningTmplDefault = parcelHelpers.interopDefault(_buttonWarningTmpl);
const template = `
<div class="settings">
    <div class="settings-heading">
        <div class="avatar-rounded">
            <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png" alt="">
        </div>
        <h2 class="center-text">{{ nameHeading }}</h2>
    </div>
    <div class="settings-table">
        <div class="table-row">
            <span class="setting-name">Почта</span>
            <span data-editable class="setting-value">mail@iandex.ru</span>
        </div>
        <div class="table-row">
        <span class="setting-name">Почта</span>
        <span data-editable class="setting-value">mail@iandex.ru</span>
    </div>
    </div>
    <div class="action-buttons">
    ${(0, _buttonPrimaryTmplDefault.default)}
    ${(0, _buttonWarningTmplDefault.default)}
    ${(0, _buttonSuccessTmplDefault.default)}
    </div>

</div>
`;
exports.default = template;

},{"../../components/buttons/buttonPrimary/buttonPrimary.tmpl":"bvroS","../../components/buttons/buttonSuccess/buttonSuccess.tmpl":"14u4p","../../components/buttons/buttonWarning/buttonWarning.tmpl":"kdMrN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14u4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
<button onclick="{{ successButtonClick }}" class="button button-success">{{ successButtonName }}</button>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdMrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = `
<button onclick="{{ warningButtonClick }}" class="button button-warning">{{ warningButtonName }}</button>
`;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsliS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const editDataContext = {
    primaryButtonName: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
};
exports.default = editDataContext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIbmp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonPrimaryTmpl = require("../../../components/buttons/buttonPrimary/buttonPrimary.tmpl");
var _buttonPrimaryTmplDefault = parcelHelpers.interopDefault(_buttonPrimaryTmpl);
var _buttonSuccessTmpl = require("../../../components/buttons/buttonSuccess/buttonSuccess.tmpl");
var _buttonSuccessTmplDefault = parcelHelpers.interopDefault(_buttonSuccessTmpl);
var _buttonWarningTmpl = require("../../../components/buttons/buttonWarning/buttonWarning.tmpl");
var _buttonWarningTmplDefault = parcelHelpers.interopDefault(_buttonWarningTmpl);
const template = `
<div class="settings">
    <div class="settings-heading">
        <div class="avatar-rounded">
            <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png" alt="">
        </div>
        <h2 class="center-text">{{ nameHeading }}</h2>
    </div>
    <div class="settings-table">
        <div class="table-row">
            <span class="setting-name">Старый пароль</span>
            <span data-editable class="setting-value"></span>
        </div>
        <div class="table-row">
        <span class="setting-name">Новый пароль</span>
        <span data-editable class="setting-value">i</span>
    </div>
    </div>
    <div class="action-buttons">
    ${(0, _buttonPrimaryTmplDefault.default)}
    ${(0, _buttonSuccessTmplDefault.default)}
    </div>

</div>
`;
exports.default = template;

},{"../../../components/buttons/buttonPrimary/buttonPrimary.tmpl":"bvroS","../../../components/buttons/buttonSuccess/buttonSuccess.tmpl":"14u4p","../../../components/buttons/buttonWarning/buttonWarning.tmpl":"kdMrN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCdwW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const editPasswordContext = {
    primaryButtonName: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    successButtonName: "\u0412\u044B\u0439\u0442\u0438"
};
exports.default = editPasswordContext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfGDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentRoute", ()=>currentRoute);
function currentRoute() {
    return window.location.hash.slice(1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1T8V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyRenderParameters", ()=>applyRenderParameters);
var _templator = require("./Templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
function applyRenderParameters(template, context) {
    const tmpl = new (0, _templatorDefault.default)(template);
    const renderedTemplate = tmpl.compile(context);
    root.innerHTML = renderedTemplate;
}

},{"./Templator":"beJ1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beJ1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getJs = require("./get.js");
var _emptyTemplatesCheckerJs = require("./emptyTemplatesChecker.js");
var _loopThroughFieldsJs = require("./loopThroughFields.js");
class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    constructor(template){
        this._template = template;
    }
    compile(ctx) {
        return this._compileTemplate(this._tempalte, ctx);
    }
    _compileTemplate(template, ctx) {
        let tmpl = this._template;
        let key = null;
        const regExp = this.TEMPLATE_REGEXP;
        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while(key = regExp.exec(tmpl))if (key[1]) {
            const tmplValue = key[1].trim();
            const data = (0, _getJs.get)(ctx, tmplValue);
            if (typeof data === "undefined") (0, _emptyTemplatesCheckerJs.emptyTemplatesChecker)(key[1]);
            if (typeof data === "function") {
                // console.log(data)
                window[tmplValue] = data;
                // console.log(window[tmplValue])
                tmpl = tmpl.replace(new RegExp(key[0], "gi"), `window.${key[1].trim()}()`);
                continue;
            }
            tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
        }
        return tmpl;
    }
}
exports.default = Templator;

},{"./get.js":"b3dMR","./emptyTemplatesChecker.js":"a0DLY","./loopThroughFields.js":"6pfZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3dMR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
function get(obj, path, defaultValue) {
    const keys = path.split(".");
    let result = obj;
    for (let key of keys){
        result = result[key];
        if (result === undefined) return defaultValue;
    }
    return result ?? defaultValue;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0DLY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emptyTemplatesChecker", ()=>emptyTemplatesChecker);
function emptyTemplatesChecker(keyName) {
    console.warn(`Please, provide ${keyName} parameter`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pfZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loopThroughFields", ()=>loopThroughFields);
function loopThroughFields(data) {
    console.log(data);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8h8mn","8lqZg"], "8lqZg", "parcelRequirefc40")

//# sourceMappingURL=index.975ef6c8.js.map
