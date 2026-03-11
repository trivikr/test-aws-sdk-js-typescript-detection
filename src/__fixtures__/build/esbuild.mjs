import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { fileURLToPath as __ftp } from 'url';
import { dirname as __dn } from 'path';
const __dirname = __dn(__ftp(import.meta.url));
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
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

// node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/@smithy/types/dist-cjs/index.js"(exports) {
    "use strict";
    exports.HttpAuthLocation = void 0;
    (function(HttpAuthLocation) {
      HttpAuthLocation["HEADER"] = "header";
      HttpAuthLocation["QUERY"] = "query";
    })(exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));
    exports.HttpApiKeyAuthLocation = void 0;
    (function(HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(exports.HttpApiKeyAuthLocation || (exports.HttpApiKeyAuthLocation = {}));
    exports.EndpointURLScheme = void 0;
    (function(EndpointURLScheme) {
      EndpointURLScheme["HTTP"] = "http";
      EndpointURLScheme["HTTPS"] = "https";
    })(exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));
    exports.AlgorithmId = void 0;
    (function(AlgorithmId) {
      AlgorithmId["MD5"] = "md5";
      AlgorithmId["CRC32"] = "crc32";
      AlgorithmId["CRC32C"] = "crc32c";
      AlgorithmId["SHA1"] = "sha1";
      AlgorithmId["SHA256"] = "sha256";
    })(exports.AlgorithmId || (exports.AlgorithmId = {}));
    var getChecksumConfiguration = (runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => exports.AlgorithmId.SHA256,
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => exports.AlgorithmId.MD5,
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    };
    var resolveChecksumRuntimeConfig = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    };
    var getDefaultClientConfiguration = (runtimeConfig) => {
      return getChecksumConfiguration(runtimeConfig);
    };
    var resolveDefaultRuntimeConfig = (config) => {
      return resolveChecksumRuntimeConfig(config);
    };
    exports.FieldPosition = void 0;
    (function(FieldPosition) {
      FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
      FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
    })(exports.FieldPosition || (exports.FieldPosition = {}));
    var SMITHY_CONTEXT_KEY2 = "__smithy_context";
    exports.IniSectionType = void 0;
    (function(IniSectionType) {
      IniSectionType["PROFILE"] = "profile";
      IniSectionType["SSO_SESSION"] = "sso-session";
      IniSectionType["SERVICES"] = "services";
    })(exports.IniSectionType || (exports.IniSectionType = {}));
    exports.RequestHandlerProtocol = void 0;
    (function(RequestHandlerProtocol) {
      RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
    })(exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));
    exports.SMITHY_CONTEXT_KEY = SMITHY_CONTEXT_KEY2;
    exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
    exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
  }
});

// node_modules/@smithy/core/dist-es/getSmithyContext.js
var import_types, getSmithyContext;
var init_getSmithyContext = __esm({
  "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    import_types = __toESM(require_dist_cjs());
    getSmithyContext = (context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {});
  }
});

// node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/@smithy/util-middleware/dist-cjs/index.js"(exports) {
    "use strict";
    var types = require_dist_cjs();
    var getSmithyContext7 = (context) => context[types.SMITHY_CONTEXT_KEY] || (context[types.SMITHY_CONTEXT_KEY] = {});
    var normalizeProvider2 = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
    exports.getSmithyContext = getSmithyContext7;
    exports.normalizeProvider = normalizeProvider2;
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map2 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map2.set(scheme.schemeId, scheme);
  }
  return map2;
}
var import_util_middleware, httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    import_util_middleware = __toESM(require_dist_cjs2());
    init_resolveAuthOptions();
    httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports) {
    "use strict";
    var types = require_dist_cjs();
    var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
      return {
        setHttpHandler(handler) {
          runtimeConfig.httpHandler = handler;
        },
        httpHandler() {
          return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
          runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return runtimeConfig.httpHandler.httpHandlerConfigs();
        }
      };
    };
    var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    };
    var Field = class {
      name;
      kind;
      values;
      constructor({ name, kind = types.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      add(value) {
        this.values.push(value);
      }
      set(values) {
        this.values = values;
      }
      remove(value) {
        this.values = this.values.filter((v) => v !== value);
      }
      toString() {
        return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
      }
      get() {
        return this.values;
      }
    };
    var Fields = class {
      entries = {};
      encoding;
      constructor({ fields = [], encoding = "utf-8" }) {
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    var HttpRequest10 = class _HttpRequest {
      method;
      protocol;
      hostname;
      port;
      path;
      query;
      headers;
      username;
      password;
      fragment;
      body;
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request) {
        const cloned = new _HttpRequest({
          ...request,
          headers: { ...request.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
    var HttpResponse4 = class {
      statusCode;
      reason;
      headers;
      body;
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    exports.Field = Field;
    exports.Fields = Fields;
    exports.HttpRequest = HttpRequest10;
    exports.HttpResponse = HttpResponse4;
    exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
    exports.isValidHostname = isValidHostname;
    exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;
  }
});

// node_modules/@smithy/middleware-serde/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/@smithy/middleware-serde/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs3();
    var deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error2) {
        Object.defineProperty(error2, "$response", {
          value: response,
          enumerable: false,
          writable: false,
          configurable: false
        });
        if (!("$metadata" in error2)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error2.message += "\n  " + hint;
          } catch (e) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error2.$responseBodyText !== "undefined") {
            if (error2.$response) {
              error2.$response.body = error2.$responseBodyText;
            }
          }
          try {
            if (protocolHttp.HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error2.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader2(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader2(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader2(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e) {
          }
        }
        throw error2;
      }
    };
    var findHeader2 = (pattern, headers) => {
      return (headers.find(([k]) => {
        return k.match(pattern);
      }) || [void 0, void 0])[1];
    };
    var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
      const endpointConfig = options;
      const endpoint = context.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context.endpointV2.url) : endpointConfig.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request
      });
    };
    var deserializerMiddlewareOption2 = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    var serializerMiddlewareOption3 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    function getSerdePlugin(config, serializer, deserializer) {
      return {
        applyToStack: (commandStack) => {
          commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption2);
          commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption3);
        }
      };
    }
    exports.deserializerMiddleware = deserializerMiddleware;
    exports.deserializerMiddlewareOption = deserializerMiddlewareOption2;
    exports.getSerdePlugin = getSerdePlugin;
    exports.serializerMiddleware = serializerMiddleware;
    exports.serializerMiddlewareOption = serializerMiddlewareOption3;
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var import_middleware_serde, httpAuthSchemeMiddlewareOptions, getHttpAuthSchemePlugin;
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    import_middleware_serde = __toESM(require_dist_cjs4());
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
    };
    getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var import_protocol_http, import_util_middleware2, defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    import_protocol_http = __toESM(require_dist_cjs3());
    import_util_middleware2 = __toESM(require_dist_cjs2());
    defaultErrorHandler = (signingProperties) => (error2) => {
      throw error2;
    };
    defaultSuccessHandler = (httpResponse, signingProperties) => {
    };
    httpSigningMiddleware = (config) => (next, context) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = (0, import_util_middleware2.getSmithyContext)(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware"
    };
    getHttpSigningPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  };
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
      let command = new CommandCtor(input);
      command = withCommand(command) ?? command;
      return await client.send(command, ...args);
    };
    get = (fromObject, path) => {
      let cursor2 = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor2 || typeof cursor2 !== "object") {
          return void 0;
        }
        cursor2 = cursor2[step];
      }
      return cursor2;
    };
  }
});

// node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports) {
    "use strict";
    var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
    exports.isArrayBuffer = isArrayBuffer;
  }
});

// node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports) {
    "use strict";
    var isArrayBuffer = require_dist_cjs5();
    var buffer = __require("buffer");
    var fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer.isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return buffer.Buffer.from(input, offset, length);
    };
    var fromString = (input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? buffer.Buffer.from(input, encoding) : buffer.Buffer.from(input);
    };
    exports.fromArrayBuffer = fromArrayBuffer;
    exports.fromString = fromString;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs6();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase645 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
    exports.fromBase64 = fromBase645;
  }
});

// node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs7 = __commonJS({
  "node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports) {
    "use strict";
    var utilBufferFrom = require_dist_cjs6();
    var fromUtf84 = (input) => {
      const buf = utilBufferFrom.fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
    var toUint8Array2 = (data2) => {
      if (typeof data2 === "string") {
        return fromUtf84(data2);
      }
      if (ArrayBuffer.isView(data2)) {
        return new Uint8Array(data2.buffer, data2.byteOffset, data2.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data2);
    };
    var toUtf87 = (input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return utilBufferFrom.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    };
    exports.fromUtf8 = fromUtf84;
    exports.toUint8Array = toUint8Array2;
    exports.toUtf8 = toUtf87;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs6();
    var util_utf8_1 = require_dist_cjs7();
    var toBase645 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    };
    exports.toBase64 = toBase645;
  }
});

// node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "node_modules/@smithy/util-base64/dist-cjs/index.js"(exports) {
    "use strict";
    var fromBase645 = require_fromBase64();
    var toBase645 = require_toBase64();
    Object.prototype.hasOwnProperty.call(fromBase645, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: fromBase645["__proto__"]
    });
    Object.keys(fromBase645).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = fromBase645[k];
    });
    Object.prototype.hasOwnProperty.call(toBase645, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: toBase645["__proto__"]
    });
    Object.keys(toBase645).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = toBase645[k];
    });
  }
});

// node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js
var require_ChecksumStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs8();
    var stream_1 = __require("stream");
    var ChecksumStream = class extends stream_1.Duplex {
      expectedChecksum;
      checksumSourceLocation;
      checksum;
      source;
      base64Encoder;
      pendingCallback = null;
      constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) {
        super();
        if (typeof source.pipe === "function") {
          this.source = source;
        } else {
          throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
        }
        this.base64Encoder = base64Encoder ?? util_base64_1.toBase64;
        this.expectedChecksum = expectedChecksum;
        this.checksum = checksum;
        this.checksumSourceLocation = checksumSourceLocation;
        this.source.pipe(this);
      }
      _read(size) {
        if (this.pendingCallback) {
          const callback = this.pendingCallback;
          this.pendingCallback = null;
          callback();
        }
      }
      _write(chunk, encoding, callback) {
        try {
          this.checksum.update(chunk);
          const canPushMore = this.push(chunk);
          if (!canPushMore) {
            this.pendingCallback = callback;
            return;
          }
        } catch (e) {
          return callback(e);
        }
        return callback();
      }
      async _final(callback) {
        try {
          const digest = await this.checksum.digest();
          const received = this.base64Encoder(digest);
          if (this.expectedChecksum !== received) {
            return callback(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}" in response header "${this.checksumSourceLocation}".`));
          }
        } catch (e) {
          return callback(e);
        }
        this.push(null);
        return callback();
      }
    };
    exports.ChecksumStream = ChecksumStream;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js
var require_stream_type_check = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBlob = exports.isReadableStream = void 0;
    var isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
    exports.isReadableStream = isReadableStream;
    var isBlob = (blob) => {
      return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
    };
    exports.isBlob = isBlob;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js
var require_ChecksumStream_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChecksumStream = void 0;
    var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {
    };
    var ChecksumStream = class extends ReadableStreamRef {
    };
    exports.ChecksumStream = ChecksumStream;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js
var require_createChecksumStream_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs8();
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_browser_1 = require_ChecksumStream_browser();
    var createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
      if (!(0, stream_type_check_1.isReadableStream)(source)) {
        throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
      }
      const encoder = base64Encoder ?? util_base64_1.toBase64;
      if (typeof TransformStream !== "function") {
        throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
      }
      const transform = new TransformStream({
        start() {
        },
        async transform(chunk, controller) {
          checksum.update(chunk);
          controller.enqueue(chunk);
        },
        async flush(controller) {
          const digest = await checksum.digest();
          const received = encoder(digest);
          if (expectedChecksum !== received) {
            const error2 = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`);
            controller.error(error2);
          } else {
            controller.terminate();
          }
        }
      });
      source.pipeThrough(transform);
      const readable = transform.readable;
      Object.setPrototypeOf(readable, ChecksumStream_browser_1.ChecksumStream.prototype);
      return readable;
    };
    exports.createChecksumStream = createChecksumStream;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js
var require_createChecksumStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createChecksumStream = createChecksumStream;
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_1 = require_ChecksumStream();
    var createChecksumStream_browser_1 = require_createChecksumStream_browser();
    function createChecksumStream(init) {
      if (typeof ReadableStream === "function" && (0, stream_type_check_1.isReadableStream)(init.source)) {
        return (0, createChecksumStream_browser_1.createChecksumStream)(init);
      }
      return new ChecksumStream_1.ChecksumStream(init);
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js
var require_ByteArrayCollector = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ByteArrayCollector = void 0;
    var ByteArrayCollector = class {
      allocByteArray;
      byteLength = 0;
      byteArrays = [];
      constructor(allocByteArray) {
        this.allocByteArray = allocByteArray;
      }
      push(byteArray) {
        this.byteArrays.push(byteArray);
        this.byteLength += byteArray.byteLength;
      }
      flush() {
        if (this.byteArrays.length === 1) {
          const bytes = this.byteArrays[0];
          this.reset();
          return bytes;
        }
        const aggregation = this.allocByteArray(this.byteLength);
        let cursor2 = 0;
        for (let i = 0; i < this.byteArrays.length; ++i) {
          const bytes = this.byteArrays[i];
          aggregation.set(bytes, cursor2);
          cursor2 += bytes.byteLength;
        }
        this.reset();
        return aggregation;
      }
      reset() {
        this.byteArrays = [];
        this.byteLength = 0;
      }
    };
    exports.ByteArrayCollector = ByteArrayCollector;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js
var require_createBufferedReadableStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBufferedReadable = void 0;
    exports.createBufferedReadableStream = createBufferedReadableStream;
    exports.merge = merge;
    exports.flush = flush;
    exports.sizeOf = sizeOf;
    exports.modeOf = modeOf;
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    function createBufferedReadableStream(upstream, size, logger2) {
      const reader = upstream.getReader();
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = ["", new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2))];
      let mode = -1;
      const pull = async (controller) => {
        const { value, done } = await reader.read();
        const chunk = value;
        if (done) {
          if (mode !== -1) {
            const remainder = flush(buffers, mode);
            if (sizeOf(remainder) > 0) {
              controller.enqueue(remainder);
            }
          }
          controller.close();
        } else {
          const chunkMode = modeOf(chunk, false);
          if (mode !== chunkMode) {
            if (mode >= 0) {
              controller.enqueue(flush(buffers, mode));
            }
            mode = chunkMode;
          }
          if (mode === -1) {
            controller.enqueue(chunk);
            return;
          }
          const chunkSize = sizeOf(chunk);
          bytesSeen += chunkSize;
          const bufferSize = sizeOf(buffers[mode]);
          if (chunkSize >= size && bufferSize === 0) {
            controller.enqueue(chunk);
          } else {
            const newSize = merge(buffers, mode, chunk);
            if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
              streamBufferingLoggedWarning = true;
              logger2?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
            }
            if (newSize >= size) {
              controller.enqueue(flush(buffers, mode));
            } else {
              await pull(controller);
            }
          }
        }
      };
      return new ReadableStream({
        pull
      });
    }
    exports.createBufferedReadable = createBufferedReadableStream;
    function merge(buffers, mode, chunk) {
      switch (mode) {
        case 0:
          buffers[0] += chunk;
          return sizeOf(buffers[0]);
        case 1:
        case 2:
          buffers[mode].push(chunk);
          return sizeOf(buffers[mode]);
      }
    }
    function flush(buffers, mode) {
      switch (mode) {
        case 0:
          const s = buffers[0];
          buffers[0] = "";
          return s;
        case 1:
        case 2:
          return buffers[mode].flush();
      }
      throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
    }
    function sizeOf(chunk) {
      return chunk?.byteLength ?? chunk?.length ?? 0;
    }
    function modeOf(chunk, allowBuffer = true) {
      if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
        return 2;
      }
      if (chunk instanceof Uint8Array) {
        return 1;
      }
      if (typeof chunk === "string") {
        return 0;
      }
      return -1;
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js
var require_createBufferedReadable = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBufferedReadable = createBufferedReadable;
    var node_stream_1 = __require("node:stream");
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    var createBufferedReadableStream_1 = require_createBufferedReadableStream();
    var stream_type_check_1 = require_stream_type_check();
    function createBufferedReadable(upstream, size, logger2) {
      if ((0, stream_type_check_1.isReadableStream)(upstream)) {
        return (0, createBufferedReadableStream_1.createBufferedReadableStream)(upstream, size, logger2);
      }
      const downstream = new node_stream_1.Readable({ read() {
      } });
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = [
        "",
        new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2)),
        new ByteArrayCollector_1.ByteArrayCollector((size2) => Buffer.from(new Uint8Array(size2)))
      ];
      let mode = -1;
      upstream.on("data", (chunk) => {
        const chunkMode = (0, createBufferedReadableStream_1.modeOf)(chunk, true);
        if (mode !== chunkMode) {
          if (mode >= 0) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
          mode = chunkMode;
        }
        if (mode === -1) {
          downstream.push(chunk);
          return;
        }
        const chunkSize = (0, createBufferedReadableStream_1.sizeOf)(chunk);
        bytesSeen += chunkSize;
        const bufferSize = (0, createBufferedReadableStream_1.sizeOf)(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
          downstream.push(chunk);
        } else {
          const newSize = (0, createBufferedReadableStream_1.merge)(buffers, mode, chunk);
          if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
            streamBufferingLoggedWarning = true;
            logger2?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
          }
          if (newSize >= size) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
        }
      });
      upstream.on("end", () => {
        if (mode !== -1) {
          const remainder = (0, createBufferedReadableStream_1.flush)(buffers, mode);
          if ((0, createBufferedReadableStream_1.sizeOf)(remainder) > 0) {
            downstream.push(remainder);
          }
        }
        downstream.push(null);
      });
      return downstream;
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.browser.js
var require_getAwsChunkedEncodingStream_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAwsChunkedEncodingStream = void 0;
    var getAwsChunkedEncodingStream = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && bodyLengthChecker !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const reader = readableStream.getReader();
      return new ReadableStream({
        async pull(controller) {
          const { value, done } = await reader.read();
          if (done) {
            controller.enqueue(`0\r
`);
            if (checksumRequired) {
              const checksum = base64Encoder(await digest);
              controller.enqueue(`${checksumLocationName}:${checksum}\r
`);
              controller.enqueue(`\r
`);
            }
            controller.close();
          } else {
            controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r
${value}\r
`);
          }
        }
      });
    };
    exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
    var node_stream_1 = __require("node:stream");
    var getAwsChunkedEncodingStream_browser_1 = require_getAwsChunkedEncodingStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    function getAwsChunkedEncodingStream(stream, options) {
      const readable = stream;
      const readableStream = stream;
      if ((0, stream_type_check_1.isReadableStream)(readableStream)) {
        return (0, getAwsChunkedEncodingStream_browser_1.getAwsChunkedEncodingStream)(readableStream, options);
      }
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readable) : void 0;
      const awsChunkedEncodingStream = new node_stream_1.Readable({
        read: () => {
        }
      });
      readable.on("data", (data2) => {
        const length = bodyLengthChecker(data2) || 0;
        if (length === 0) {
          return;
        }
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data2);
        awsChunkedEncodingStream.push("\r\n");
      });
      readable.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js
var require_headStream_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headStream = headStream;
    async function headStream(stream, bytes) {
      let byteLengthCounter = 0;
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          byteLengthCounter += value?.byteLength ?? 0;
        }
        if (byteLengthCounter >= bytes) {
          break;
        }
        isDone = done;
      }
      reader.releaseLock();
      const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
      let offset = 0;
      for (const chunk of chunks) {
        if (chunk.byteLength > collected.byteLength - offset) {
          collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
          break;
        } else {
          collected.set(chunk, offset);
        }
        offset += chunk.length;
      }
      return collected;
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/headStream.js
var require_headStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/headStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headStream = void 0;
    var stream_1 = __require("stream");
    var headStream_browser_1 = require_headStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    var headStream = (stream, bytes) => {
      if ((0, stream_type_check_1.isReadableStream)(stream)) {
        return (0, headStream_browser_1.headStream)(stream, bytes);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
          resolve(bytes2);
        });
      });
    };
    exports.headStream = headStream;
    var Collector = class extends stream_1.Writable {
      buffers = [];
      limit = Infinity;
      bytesBuffered = 0;
      _write(chunk, encoding, callback) {
        this.buffers.push(chunk);
        this.bytesBuffered += chunk.byteLength ?? 0;
        if (this.bytesBuffered >= this.limit) {
          const excess = this.bytesBuffered - this.limit;
          const tailBuffer = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
          this.emit("finish");
        }
        callback();
      }
    };
  }
});

// node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports) {
    "use strict";
    var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
    var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
    var escapeUriPath = (uri) => uri.split("/").map(escapeUri).join("/");
    exports.escapeUri = escapeUri;
    exports.escapeUriPath = escapeUriPath;
  }
});

// node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports) {
    "use strict";
    var utilUriEscape = require_dist_cjs9();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = utilUriEscape.escapeUri(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${utilUriEscape.escapeUri(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${utilUriEscape.escapeUri(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    exports.buildQueryString = buildQueryString;
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs3();
    var querystringBuilder = require_dist_cjs10();
    var http = __require("http");
    var https = __require("https");
    var stream = __require("stream");
    var http2 = __require("http2");
    function buildAbortError(abortSignal) {
      const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
      if (reason) {
        if (reason instanceof Error) {
          return reason;
        }
        const abortError2 = new Error(String(reason));
        abortError2.name = "AbortError";
        return abortError2;
      }
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return abortError;
    }
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = (headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    };
    var timing = {
      setTimeout: (cb, ms) => setTimeout(cb, ms),
      clearTimeout: (timeoutId) => clearTimeout(timeoutId)
    };
    var DEFER_EVENT_LISTENER_TIME$2 = 1e3;
    var setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return -1;
      }
      const registerTimeout = (offset) => {
        const timeoutId = timing.setTimeout(() => {
          request.destroy();
          reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${timeoutInMs} ms.`), {
            name: "TimeoutError"
          }));
        }, timeoutInMs - offset);
        const doWithSocket = (socket) => {
          if (socket?.connecting) {
            socket.on("connect", () => {
              timing.clearTimeout(timeoutId);
            });
          } else {
            timing.clearTimeout(timeoutId);
          }
        };
        if (request.socket) {
          doWithSocket(request.socket);
        } else {
          request.on("socket", doWithSocket);
        }
      };
      if (timeoutInMs < 2e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME$2), DEFER_EVENT_LISTENER_TIME$2);
    };
    var setRequestTimeout = (req, reject, timeoutInMs = 0, throwOnRequestTimeout, logger2) => {
      if (timeoutInMs) {
        return timing.setTimeout(() => {
          let msg = `@smithy/node-http-handler - [${throwOnRequestTimeout ? "ERROR" : "WARN"}] a request has exceeded the configured ${timeoutInMs} ms requestTimeout.`;
          if (throwOnRequestTimeout) {
            const error2 = Object.assign(new Error(msg), {
              name: "TimeoutError",
              code: "ETIMEDOUT"
            });
            req.destroy(error2);
            reject(error2);
          } else {
            msg += ` Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.`;
            logger2?.warn?.(msg);
          }
        }, timeoutInMs);
      }
      return -1;
    };
    var DEFER_EVENT_LISTENER_TIME$1 = 3e3;
    var setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME$1) => {
      if (keepAlive !== true) {
        return -1;
      }
      const registerListener = () => {
        if (request.socket) {
          request.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
        } else {
          request.on("socket", (socket) => {
            socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
          });
        }
      };
      if (deferTimeMs === 0) {
        registerListener();
        return 0;
      }
      return timing.setTimeout(registerListener, deferTimeMs);
    };
    var DEFER_EVENT_LISTENER_TIME = 3e3;
    var setSocketTimeout = (request, reject, timeoutInMs = 0) => {
      const registerTimeout = (offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = () => {
          request.destroy();
          reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${timeoutInMs} ms of inactivity (configured by client requestHandler).`), { name: "TimeoutError" }));
        };
        if (request.socket) {
          request.socket.setTimeout(timeout, onTimeout);
          request.on("close", () => request.socket?.removeListener("timeout", onTimeout));
        } else {
          request.setTimeout(timeout, onTimeout);
        }
      };
      if (0 < timeoutInMs && timeoutInMs < 6e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
    };
    var MIN_WAIT_TIME = 6e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME, externalAgent = false) {
      const headers = request.headers ?? {};
      const expect = headers.Expect || headers.expect;
      let timeoutId = -1;
      let sendBody = true;
      if (!externalAgent && expect === "100-continue") {
        sendBody = await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              timing.clearTimeout(timeoutId);
              resolve(true);
            });
            httpRequest.on("response", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
            httpRequest.on("error", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
          })
        ]);
      }
      if (sendBody) {
        writeBody(httpRequest, request.body);
      }
    }
    function writeBody(httpRequest, body) {
      if (body instanceof stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        const isBuffer = Buffer.isBuffer(body);
        const isString = typeof body === "string";
        if (isBuffer || isString) {
          if (isBuffer && body.byteLength === 0) {
            httpRequest.end();
          } else {
            httpRequest.end(body);
          }
          return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
          httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
          return;
        }
        httpRequest.end(Buffer.from(body));
        return;
      }
      httpRequest.end();
    }
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var NodeHttpHandler = class _NodeHttpHandler {
      config;
      configProvider;
      socketWarningTimestamp = 0;
      externalAgent = false;
      metadata = { handlerProtocol: "http/1.1" };
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger2 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger2?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent, throwOnRequestTimeout, logger: logger2 } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout,
          socketTimeout,
          socketAcquisitionWarningTimeout,
          throwOnRequestTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof http.Agent || typeof httpAgent?.destroy === "function") {
              this.externalAgent = true;
              return httpAgent;
            }
            return new http.Agent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof https.Agent || typeof httpsAgent?.destroy === "function") {
              this.externalAgent = true;
              return httpsAgent;
            }
            return new https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: logger2
        };
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request, { abortSignal, requestTimeout } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject) => {
          const config = this.config;
          let writeRequestBodyPromise = void 0;
          const timeouts = [];
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _reject(arg);
          };
          if (abortSignal?.aborted) {
            const abortError = buildAbortError(abortSignal);
            reject(abortError);
            return;
          }
          const isSSL = request.protocol === "https:";
          const headers = request.headers ?? {};
          const expectContinue = (headers.Expect ?? headers.expect) === "100-continue";
          let agent = isSSL ? config.httpsAgent : config.httpAgent;
          if (expectContinue && !this.externalAgent) {
            agent = new (isSSL ? https.Agent : http.Agent)({
              keepAlive: false,
              maxSockets: Infinity
            });
          }
          timeouts.push(timing.setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, config.logger);
          }, config.socketAcquisitionWarningTimeout ?? (config.requestTimeout ?? 2e3) + (config.connectionTimeout ?? 1e3)));
          const queryString = querystringBuilder.buildQueryString(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          let hostname = request.hostname ?? "";
          if (hostname[0] === "[" && hostname.endsWith("]")) {
            hostname = request.hostname.slice(1, -1);
          } else {
            hostname = request.hostname;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: hostname,
            method: request.method,
            path,
            port: request.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? https.request : http.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new protocolHttp.HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          if (abortSignal) {
            const onAbort = () => {
              req.destroy();
              const abortError = buildAbortError(abortSignal);
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const effectiveRequestTimeout = requestTimeout ?? config.requestTimeout;
          timeouts.push(setConnectionTimeout(req, reject, config.connectionTimeout));
          timeouts.push(setRequestTimeout(req, reject, effectiveRequestTimeout, config.throwOnRequestTimeout, config.logger ?? console));
          timeouts.push(setSocketTimeout(req, reject, config.socketTimeout));
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            timeouts.push(setSocketKeepAlive(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            }));
          }
          writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout, this.externalAgent).catch((e) => {
            timeouts.forEach(timing.clearTimeout);
            return _reject(e);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    var NodeHttp2ConnectionPool = class {
      sessions = [];
      constructor(sessions) {
        this.sessions = sessions ?? [];
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
    var NodeHttp2ConnectionManager = class {
      constructor(config) {
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      config;
      sessionCache = /* @__PURE__ */ new Map();
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = http2.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
            if (err) {
              throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString());
            }
          });
        }
        session.unref();
        const destroySessionCb = () => {
          session.destroy();
          this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
          session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
      }
      deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
          return;
        }
        if (!existingConnectionPool.contains(session)) {
          return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
      }
      release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
      }
      destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
          for (const session of connectionPool) {
            if (!session.destroyed) {
              session.destroy();
            }
            connectionPool.remove(session);
          }
          this.sessionCache.delete(key);
        }
      }
      setMaxConcurrentStreams(maxConcurrentStreams) {
        if (maxConcurrentStreams && maxConcurrentStreams <= 0) {
          throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
      }
      setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
      }
      getUrlString(request) {
        return request.destination.toString();
      }
    };
    var NodeHttp2Handler = class _NodeHttp2Handler {
      config;
      configProvider;
      metadata = { handlerProtocol: "h2" };
      connectionManager = new NodeHttp2ConnectionManager({});
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttp2Handler(instanceOrOptions);
      }
      constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((opts) => {
              resolve(opts || {});
            }).catch(reject);
          } else {
            resolve(options || {});
          }
        });
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal, requestTimeout } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout: configRequestTimeout, disableConcurrentStreams } = this.config;
        const effectiveRequestTimeout = requestTimeout ?? configRequestTimeout;
        return new Promise((_resolve, _reject) => {
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          };
          if (abortSignal?.aborted) {
            fulfilled = true;
            const abortError = buildAbortError(abortSignal);
            reject(abortError);
            return;
          }
          const { hostname, method, port, protocol, query } = request;
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
          const requestContext = { destination: new URL(authority) };
          const session = this.connectionManager.lease(requestContext, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = (err) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err);
          };
          const queryString = querystringBuilder.buildQueryString(query || {});
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [http2.constants.HTTP2_HEADER_PATH]: path,
            [http2.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new protocolHttp.HttpResponse({
              statusCode: headers[":status"] || -1,
              headers: getTransformedHeaders(headers),
              body: req
            });
            fulfilled = true;
            resolve({ response: httpResponse });
            if (disableConcurrentStreams) {
              session.close();
              this.connectionManager.deleteSession(authority, session);
            }
          });
          if (effectiveRequestTimeout) {
            req.setTimeout(effectiveRequestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${effectiveRequestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            const onAbort = () => {
              req.close();
              const abortError = buildAbortError(abortSignal);
              rejectWithDestroy(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
          });
          req.on("close", () => {
            session.unref();
            if (disableConcurrentStreams) {
              session.destroy();
            }
            if (!fulfilled) {
              rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
            }
          });
          writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    var Collector = class extends stream.Writable {
      bufferedBytes = [];
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    var streamCollector = (stream2) => {
      if (isReadableStreamInstance(stream2)) {
        return collectReadableStream(stream2);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream2.pipe(collector);
        stream2.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    };
    var isReadableStreamInstance = (stream2) => typeof ReadableStream === "function" && stream2 instanceof ReadableStream;
    async function collectReadableStream(stream2) {
      const chunks = [];
      const reader = stream2.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    exports.DEFAULT_REQUEST_TIMEOUT = DEFAULT_REQUEST_TIMEOUT;
    exports.NodeHttp2Handler = NodeHttp2Handler;
    exports.NodeHttpHandler = NodeHttpHandler;
    exports.streamCollector = streamCollector;
  }
});

// node_modules/@smithy/fetch-http-handler/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "node_modules/@smithy/fetch-http-handler/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs3();
    var querystringBuilder = require_dist_cjs10();
    var utilBase64 = require_dist_cjs8();
    function createRequest(url, requestOptions) {
      return new Request(url, requestOptions);
    }
    function requestTimeout(timeoutInMs = 0) {
      return new Promise((resolve, reject) => {
        if (timeoutInMs) {
          setTimeout(() => {
            const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
            timeoutError.name = "TimeoutError";
            reject(timeoutError);
          }, timeoutInMs);
        }
      });
    }
    var keepAliveSupport = {
      supported: void 0
    };
    var FetchHttpHandler = class _FetchHttpHandler {
      config;
      configProvider;
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _FetchHttpHandler(instanceOrOptions);
      }
      constructor(options) {
        if (typeof options === "function") {
          this.configProvider = options().then((opts) => opts || {});
        } else {
          this.config = options ?? {};
          this.configProvider = Promise.resolve(this.config);
        }
        if (keepAliveSupport.supported === void 0) {
          keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
        }
      }
      destroy() {
      }
      async handle(request, { abortSignal, requestTimeout: requestTimeout$1 } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        const requestTimeoutInMs = requestTimeout$1 ?? this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        const credentials = this.config.credentials;
        if (abortSignal?.aborted) {
          const abortError = buildAbortError(abortSignal);
          return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = querystringBuilder.buildQueryString(request.query || {});
        if (queryString) {
          path += `?${queryString}`;
        }
        if (request.fragment) {
          path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
          const username = request.username ?? "";
          const password = request.password ?? "";
          auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
        const requestOptions = {
          body,
          headers: new Headers(request.headers),
          method,
          credentials
        };
        if (this.config?.cache) {
          requestOptions.cache = this.config.cache;
        }
        if (body) {
          requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
          requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
          requestOptions.keepalive = keepAlive;
        }
        if (typeof this.config.requestInit === "function") {
          Object.assign(requestOptions, this.config.requestInit(request));
        }
        let removeSignalEventListener = () => {
        };
        const fetchRequest = createRequest(url, requestOptions);
        const raceOfPromises = [
          fetch(fetchRequest).then((response) => {
            const fetchHeaders = response.headers;
            const transformedHeaders = {};
            for (const pair of fetchHeaders.entries()) {
              transformedHeaders[pair[0]] = pair[1];
            }
            const hasReadableStream = response.body != void 0;
            if (!hasReadableStream) {
              return response.blob().then((body2) => ({
                response: new protocolHttp.HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: body2
                })
              }));
            }
            return {
              response: new protocolHttp.HttpResponse({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: response.body
              })
            };
          }),
          requestTimeout(requestTimeoutInMs)
        ];
        if (abortSignal) {
          raceOfPromises.push(new Promise((resolve, reject) => {
            const onAbort = () => {
              const abortError = buildAbortError(abortSignal);
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
            } else {
              abortSignal.onabort = onAbort;
            }
          }));
        }
        return Promise.race(raceOfPromises).finally(removeSignalEventListener);
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          config[key] = value;
          return config;
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    function buildAbortError(abortSignal) {
      const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
      if (reason) {
        if (reason instanceof Error) {
          return reason;
        }
        const abortError2 = new Error(String(reason));
        abortError2.name = "AbortError";
        return abortError2;
      }
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return abortError;
    }
    var streamCollector = async (stream) => {
      if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) {
          return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
      }
      return collectStream(stream);
    };
    async function collectBlob(blob) {
      const base64 = await readToBase64(blob);
      const arrayBuffer = utilBase64.fromBase64(base64);
      return new Uint8Array(arrayBuffer);
    }
    async function collectStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    function readToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.readyState !== 2) {
            return reject(new Error("Reader aborted too early"));
          }
          const result = reader.result ?? "";
          const commaIndex = result.indexOf(",");
          const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
          resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    }
    exports.FetchHttpHandler = FetchHttpHandler;
    exports.keepAliveSupport = keepAliveSupport;
    exports.streamCollector = streamCollector;
  }
});

// node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports) {
    "use strict";
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    exports.fromHex = fromHex;
    exports.toHex = toHex;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js
var require_sdk_stream_mixin_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdkStreamMixin = void 0;
    var fetch_http_handler_1 = require_dist_cjs12();
    var util_base64_1 = require_dist_cjs8();
    var util_hex_encoding_1 = require_dist_cjs13();
    var util_utf8_1 = require_dist_cjs7();
    var stream_type_check_1 = require_stream_type_check();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      if (!isBlobInstance(stream) && !(0, stream_type_check_1.isReadableStream)(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, fetch_http_handler_1.streamCollector)(stream);
      };
      const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return (0, util_base64_1.toBase64)(buf);
          } else if (encoding === "hex") {
            return (0, util_hex_encoding_1.toHex)(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return (0, util_utf8_1.toUtf8)(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if ((0, stream_type_check_1.isReadableStream)(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }
      });
    };
    exports.sdkStreamMixin = sdkStreamMixin2;
    var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs11();
    var util_buffer_from_1 = require_dist_cjs6();
    var stream_1 = __require("stream");
    var sdk_stream_mixin_browser_1 = require_sdk_stream_mixin_browser();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      if (!(stream instanceof stream_1.Readable)) {
        try {
          return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
        } catch (e) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof stream_1.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        }
      });
    };
    exports.sdkStreamMixin = sdkStreamMixin2;
  }
});

// node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js
var require_splitStream_browser = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitStream = splitStream;
    async function splitStream(stream) {
      if (typeof stream.stream === "function") {
        stream = stream.stream();
      }
      const readableStream = stream;
      return readableStream.tee();
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/splitStream.js
var require_splitStream = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/splitStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitStream = splitStream;
    var stream_1 = __require("stream");
    var splitStream_browser_1 = require_splitStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    async function splitStream(stream) {
      if ((0, stream_type_check_1.isReadableStream)(stream) || (0, stream_type_check_1.isBlob)(stream)) {
        return (0, splitStream_browser_1.splitStream)(stream);
      }
      const stream1 = new stream_1.PassThrough();
      const stream2 = new stream_1.PassThrough();
      stream.pipe(stream1);
      stream.pipe(stream2);
      return [stream1, stream2];
    }
  }
});

// node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs14 = __commonJS({
  "node_modules/@smithy/util-stream/dist-cjs/index.js"(exports) {
    "use strict";
    var utilBase64 = require_dist_cjs8();
    var utilUtf8 = require_dist_cjs7();
    var ChecksumStream = require_ChecksumStream();
    var createChecksumStream = require_createChecksumStream();
    var createBufferedReadable = require_createBufferedReadable();
    var getAwsChunkedEncodingStream = require_getAwsChunkedEncodingStream();
    var headStream = require_headStream();
    var sdkStreamMixin2 = require_sdk_stream_mixin();
    var splitStream = require_splitStream();
    var streamTypeCheck = require_stream_type_check();
    var Uint8ArrayBlobAdapter2 = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        if (typeof source === "string") {
          if (encoding === "base64") {
            return _Uint8ArrayBlobAdapter.mutate(utilBase64.fromBase64(source));
          }
          return _Uint8ArrayBlobAdapter.mutate(utilUtf8.fromUtf8(source));
        }
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        if (encoding === "base64") {
          return utilBase64.toBase64(this);
        }
        return utilUtf8.toUtf8(this);
      }
    };
    exports.isBlob = streamTypeCheck.isBlob;
    exports.isReadableStream = streamTypeCheck.isReadableStream;
    exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter2;
    Object.prototype.hasOwnProperty.call(ChecksumStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: ChecksumStream["__proto__"]
    });
    Object.keys(ChecksumStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = ChecksumStream[k];
    });
    Object.prototype.hasOwnProperty.call(createChecksumStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: createChecksumStream["__proto__"]
    });
    Object.keys(createChecksumStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = createChecksumStream[k];
    });
    Object.prototype.hasOwnProperty.call(createBufferedReadable, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: createBufferedReadable["__proto__"]
    });
    Object.keys(createBufferedReadable).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = createBufferedReadable[k];
    });
    Object.prototype.hasOwnProperty.call(getAwsChunkedEncodingStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: getAwsChunkedEncodingStream["__proto__"]
    });
    Object.keys(getAwsChunkedEncodingStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getAwsChunkedEncodingStream[k];
    });
    Object.prototype.hasOwnProperty.call(headStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: headStream["__proto__"]
    });
    Object.keys(headStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = headStream[k];
    });
    Object.prototype.hasOwnProperty.call(sdkStreamMixin2, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: sdkStreamMixin2["__proto__"]
    });
    Object.keys(sdkStreamMixin2).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = sdkStreamMixin2[k];
    });
    Object.prototype.hasOwnProperty.call(splitStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: splitStream["__proto__"]
    });
    Object.keys(splitStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = splitStream[k];
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var import_util_stream, collectBody;
var init_collect_stream_body = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    import_util_stream = __toESM(require_dist_cjs14());
    collectBody = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref;
var init_deref = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/deref.js"() {
    deref = (schemaRef) => {
      if (typeof schemaRef === "function") {
        return schemaRef();
      }
      return schemaRef;
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
var operation;
var init_operation = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js"() {
    operation = (namespace, name, traits, input, output) => ({
      name,
      namespace,
      traits,
      input,
      output
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
var import_protocol_http2, import_util_middleware3, schemaDeserializationMiddleware, findHeader;
var init_schemaDeserializationMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js"() {
    import_protocol_http2 = __toESM(require_dist_cjs3());
    import_util_middleware3 = __toESM(require_dist_cjs2());
    init_operation();
    schemaDeserializationMiddleware = (config) => (next, context) => async (args) => {
      const { response } = await next(args);
      const { operationSchema } = (0, import_util_middleware3.getSmithyContext)(context);
      const [, ns, n, t, i, o] = operationSchema ?? [];
      try {
        const parsed = await config.protocol.deserializeResponse(operation(ns, n, t, i, o), {
          ...config,
          ...context
        }, response);
        return {
          response,
          output: parsed
        };
      } catch (error2) {
        Object.defineProperty(error2, "$response", {
          value: response,
          enumerable: false,
          writable: false,
          configurable: false
        });
        if (!("$metadata" in error2)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error2.message += "\n  " + hint;
          } catch (e) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error2.$responseBodyText !== "undefined") {
            if (error2.$response) {
              error2.$response.body = error2.$responseBodyText;
            }
          }
          try {
            if (import_protocol_http2.HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error2.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e) {
          }
        }
        throw error2;
      }
    };
    findHeader = (pattern, headers) => {
      return (headers.find(([k]) => {
        return k.match(pattern);
      }) || [void 0, void 0])[1];
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
var import_util_middleware4, schemaSerializationMiddleware;
var init_schemaSerializationMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js"() {
    import_util_middleware4 = __toESM(require_dist_cjs2());
    init_operation();
    schemaSerializationMiddleware = (config) => (next, context) => async (args) => {
      const { operationSchema } = (0, import_util_middleware4.getSmithyContext)(context);
      const [, ns, n, t, i, o] = operationSchema ?? [];
      const endpoint = context.endpointV2?.url && config.urlParser ? async () => config.urlParser(context.endpointV2.url) : config.endpoint;
      const request = await config.protocol.serializeRequest(operation(ns, n, t, i, o), args.input, {
        ...config,
        ...context,
        endpoint
      });
      return next({
        ...args,
        request
      });
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
function getSchemaSerdePlugin(config) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption2);
      commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
      config.protocol.setSerdeContext(config);
    }
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption2;
var init_getSchemaSerdePlugin = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js"() {
    init_schemaDeserializationMiddleware();
    init_schemaSerializationMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption2 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js
var Schema;
var init_Schema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js"() {
    Schema = class {
      name;
      namespace;
      traits;
      static assign(instance, values) {
        const schema = Object.assign(instance, values);
        return schema;
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const list2 = lhs;
          return list2.symbol === this.symbol;
        }
        return isPrototype;
      }
      getName() {
        return this.namespace + "#" + this.name;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js
var ListSchema, list;
var init_ListSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js"() {
    init_Schema();
    ListSchema = class _ListSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/lis");
      name;
      traits;
      valueSchema;
      symbol = _ListSchema.symbol;
    };
    list = (namespace, name, traits, valueSchema) => Schema.assign(new ListSchema(), {
      name,
      namespace,
      traits,
      valueSchema
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js
var MapSchema, map;
var init_MapSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js"() {
    init_Schema();
    MapSchema = class _MapSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/map");
      name;
      traits;
      keySchema;
      valueSchema;
      symbol = _MapSchema.symbol;
    };
    map = (namespace, name, traits, keySchema, valueSchema) => Schema.assign(new MapSchema(), {
      name,
      namespace,
      traits,
      keySchema,
      valueSchema
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js
var OperationSchema, op;
var init_OperationSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js"() {
    init_Schema();
    OperationSchema = class _OperationSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/ope");
      name;
      traits;
      input;
      output;
      symbol = _OperationSchema.symbol;
    };
    op = (namespace, name, traits, input, output) => Schema.assign(new OperationSchema(), {
      name,
      namespace,
      traits,
      input,
      output
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js
var StructureSchema, struct;
var init_StructureSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js"() {
    init_Schema();
    StructureSchema = class _StructureSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/str");
      name;
      traits;
      memberNames;
      memberList;
      symbol = _StructureSchema.symbol;
    };
    struct = (namespace, name, traits, memberNames, memberList) => Schema.assign(new StructureSchema(), {
      name,
      namespace,
      traits,
      memberNames,
      memberList
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js
var ErrorSchema, error;
var init_ErrorSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js"() {
    init_Schema();
    init_StructureSchema();
    ErrorSchema = class _ErrorSchema extends StructureSchema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/err");
      ctor;
      symbol = _ErrorSchema.symbol;
    };
    error = (namespace, name, traits, memberNames, memberList, ctor) => Schema.assign(new ErrorSchema(), {
      name,
      namespace,
      traits,
      memberNames,
      memberList,
      ctor: null
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
function translateTraits(indicator) {
  if (typeof indicator === "object") {
    return indicator;
  }
  indicator = indicator | 0;
  const traits = {};
  let i = 0;
  for (const trait of [
    "httpLabel",
    "idempotent",
    "idempotencyToken",
    "sensitive",
    "httpPayload",
    "httpResponseCode",
    "httpQueryParams"
  ]) {
    if ((indicator >> i++ & 1) === 1) {
      traits[trait] = 1;
    }
  }
  return traits;
}
var init_translateTraits = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
function member(memberSchema, memberName) {
  if (memberSchema instanceof NormalizedSchema) {
    return Object.assign(memberSchema, {
      memberName,
      _isMemberSchema: true
    });
  }
  const internalCtorAccess = NormalizedSchema;
  return new internalCtorAccess(memberSchema, memberName);
}
var anno, NormalizedSchema, isMemberSchema, isStaticSchema;
var init_NormalizedSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js"() {
    init_deref();
    init_translateTraits();
    anno = {
      it: /* @__PURE__ */ Symbol.for("@smithy/nor-struct-it")
    };
    NormalizedSchema = class _NormalizedSchema {
      ref;
      memberName;
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/nor");
      symbol = _NormalizedSchema.symbol;
      name;
      schema;
      _isMemberSchema;
      traits;
      memberTraits;
      normalizedTraits;
      constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (isMemberSchema(_ref)) {
          traitStack.push(_ref[1]);
          _ref = _ref[0];
          schema = deref(_ref);
          this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
          this.memberTraits = {};
          for (let i = traitStack.length - 1; i >= 0; --i) {
            const traitSet = traitStack[i];
            Object.assign(this.memberTraits, translateTraits(traitSet));
          }
        } else {
          this.memberTraits = 0;
        }
        if (schema instanceof _NormalizedSchema) {
          const computedMemberTraits = this.memberTraits;
          Object.assign(this, schema);
          this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
          this.normalizedTraits = void 0;
          this.memberName = memberName ?? schema.memberName;
          return;
        }
        this.schema = deref(schema);
        if (isStaticSchema(this.schema)) {
          this.name = `${this.schema[1]}#${this.schema[2]}`;
          this.traits = this.schema[3];
        } else {
          this.name = this.memberName ?? String(schema);
          this.traits = 0;
        }
        if (this._isMemberSchema && !memberName) {
          throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
        }
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const ns = lhs;
          return ns.symbol === this.symbol;
        }
        return isPrototype;
      }
      static of(ref) {
        const sc = deref(ref);
        if (sc instanceof _NormalizedSchema) {
          return sc;
        }
        if (isMemberSchema(sc)) {
          const [ns, traits] = sc;
          if (ns instanceof _NormalizedSchema) {
            Object.assign(ns.getMergedTraits(), translateTraits(traits));
            return ns;
          }
          throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
        }
        return new _NormalizedSchema(sc);
      }
      getSchema() {
        const sc = this.schema;
        if (Array.isArray(sc) && sc[0] === 0) {
          return sc[4];
        }
        return sc;
      }
      getName(withNamespace = false) {
        const { name } = this;
        const short = !withNamespace && name && name.includes("#");
        return short ? name.split("#")[1] : name || void 0;
      }
      getMemberName() {
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isListSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
      }
      isMapSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
      }
      isStructSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        const id = sc[0];
        return id === 3 || id === -3 || id === 4;
      }
      isUnionSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        return sc[0] === 4;
      }
      isBlobSchema() {
        const sc = this.getSchema();
        return sc === 21 || sc === 42;
      }
      isTimestampSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" && sc >= 4 && sc <= 7;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isDocumentSchema() {
        return this.getSchema() === 15;
      }
      isStringSchema() {
        return this.getSchema() === 0;
      }
      isBooleanSchema() {
        return this.getSchema() === 2;
      }
      isNumericSchema() {
        return this.getSchema() === 1;
      }
      isBigIntegerSchema() {
        return this.getSchema() === 17;
      }
      isBigDecimalSchema() {
        return this.getSchema() === 19;
      }
      isStreaming() {
        const { streaming } = this.getMergedTraits();
        return !!streaming || this.getSchema() === 42;
      }
      isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
      }
      getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits()
        });
      }
      getMemberTraits() {
        return translateTraits(this.memberTraits);
      }
      getOwnTraits() {
        return translateTraits(this.traits);
      }
      getKeySchema() {
        const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!isDoc && !isMap) {
          throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        const memberSchema = isDoc ? 15 : schema[4] ?? 0;
        return member([memberSchema, 0], "key");
      }
      getValueSchema() {
        const sc = this.getSchema();
        const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
        const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
        if (memberSchema != null) {
          return member([memberSchema, 0], isMap ? "value" : "member");
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
      }
      getMemberSchema(memberName) {
        const struct2 = this.getSchema();
        if (this.isStructSchema() && struct2[4].includes(memberName)) {
          const i = struct2[4].indexOf(memberName);
          const memberSchema = struct2[5][i];
          return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
        }
        if (this.isDocumentSchema()) {
          return member([15, 0], memberName);
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
      }
      getMemberSchemas() {
        const buffer = {};
        try {
          for (const [k, v] of this.structIterator()) {
            buffer[k] = v;
          }
        } catch (ignored) {
        }
        return buffer;
      }
      getEventStreamMember() {
        if (this.isStructSchema()) {
          for (const [memberName, memberSchema] of this.structIterator()) {
            if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
              return memberName;
            }
          }
        }
        return "";
      }
      *structIterator() {
        if (this.isUnitSchema()) {
          return;
        }
        if (!this.isStructSchema()) {
          throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        }
        const struct2 = this.getSchema();
        const z = struct2[4].length;
        let it = struct2[anno.it];
        if (it && z === it.length) {
          yield* it;
          return;
        }
        it = Array(z);
        for (let i = 0; i < z; ++i) {
          const k = struct2[4][i];
          const v = member([struct2[5][i], 0], k);
          yield it[i] = [k, v];
        }
        struct2[anno.it] = it;
      }
    };
    isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
    isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js
var SimpleSchema, sim, simAdapter;
var init_SimpleSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js"() {
    init_Schema();
    SimpleSchema = class _SimpleSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/sim");
      name;
      schemaRef;
      traits;
      symbol = _SimpleSchema.symbol;
    };
    sim = (namespace, name, schemaRef, traits) => Schema.assign(new SimpleSchema(), {
      name,
      namespace,
      traits,
      schemaRef
    });
    simAdapter = (namespace, name, traits, schemaRef) => Schema.assign(new SimpleSchema(), {
      name,
      namespace,
      traits,
      schemaRef
    });
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js
var SCHEMA;
var init_sentinels = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js"() {
    SCHEMA = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry;
var init_TypeRegistry = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js"() {
    TypeRegistry = class _TypeRegistry {
      namespace;
      schemas;
      exceptions;
      static registries = /* @__PURE__ */ new Map();
      constructor(namespace, schemas = /* @__PURE__ */ new Map(), exceptions = /* @__PURE__ */ new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
        this.exceptions = exceptions;
      }
      static for(namespace) {
        if (!_TypeRegistry.registries.has(namespace)) {
          _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
        }
        return _TypeRegistry.registries.get(namespace);
      }
      copyFrom(other) {
        const { schemas, exceptions } = this;
        for (const [k, v] of other.schemas) {
          if (!schemas.has(k)) {
            schemas.set(k, v);
          }
        }
        for (const [k, v] of other.exceptions) {
          if (!exceptions.has(k)) {
            exceptions.set(k, v);
          }
        }
      }
      register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        for (const r of [this, _TypeRegistry.for(qualifiedName.split("#")[0])]) {
          r.schemas.set(qualifiedName, schema);
        }
      }
      getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
          throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
      }
      registerError(es, ctor) {
        const $error = es;
        const ns = $error[1];
        for (const r of [this, _TypeRegistry.for(ns)]) {
          r.schemas.set(ns + "#" + $error[2], $error);
          r.exceptions.set($error, ctor);
        }
      }
      getErrorCtor(es) {
        const $error = es;
        if (this.exceptions.has($error)) {
          return this.exceptions.get($error);
        }
        const registry = _TypeRegistry.for($error[1]);
        return registry.exceptions.get($error);
      }
      getBaseException() {
        for (const exceptionKey of this.exceptions.keys()) {
          if (Array.isArray(exceptionKey)) {
            const [, ns, name] = exceptionKey;
            const id = ns + "#" + name;
            if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
              return exceptionKey;
            }
          }
        }
        return void 0;
      }
      find(predicate) {
        return [...this.schemas.values()].find(predicate);
      }
      clear() {
        this.schemas.clear();
        this.exceptions.clear();
      }
      normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
          return shapeId;
        }
        return this.namespace + "#" + shapeId;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/index.js
var schema_exports = {};
__export(schema_exports, {
  ErrorSchema: () => ErrorSchema,
  ListSchema: () => ListSchema,
  MapSchema: () => MapSchema,
  NormalizedSchema: () => NormalizedSchema,
  OperationSchema: () => OperationSchema,
  SCHEMA: () => SCHEMA,
  Schema: () => Schema,
  SimpleSchema: () => SimpleSchema,
  StructureSchema: () => StructureSchema,
  TypeRegistry: () => TypeRegistry,
  deref: () => deref,
  deserializerMiddlewareOption: () => deserializerMiddlewareOption,
  error: () => error,
  getSchemaSerdePlugin: () => getSchemaSerdePlugin,
  isStaticSchema: () => isStaticSchema,
  list: () => list,
  map: () => map,
  op: () => op,
  operation: () => operation,
  serializerMiddlewareOption: () => serializerMiddlewareOption2,
  sim: () => sim,
  simAdapter: () => simAdapter,
  struct: () => struct,
  translateTraits: () => translateTraits
});
var init_schema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/index.js"() {
    init_deref();
    init_getSchemaSerdePlugin();
    init_ListSchema();
    init_MapSchema();
    init_OperationSchema();
    init_operation();
    init_ErrorSchema();
    init_NormalizedSchema();
    init_Schema();
    init_SimpleSchema();
    init_StructureSchema();
    init_sentinels();
    init_translateTraits();
    init_TypeRegistry();
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js
var copyDocumentWithTransform;
var init_copyDocumentWithTransform = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js"() {
    copyDocumentWithTransform = (source, schemaRef, transform = (_) => _) => source;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var parseBoolean, expectBoolean, expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectInt, expectInt32, expectShort, expectByte, expectSizedInt, castInt, expectNonNull, expectObject, expectString, expectUnion, strictParseDouble, strictParseFloat, strictParseFloat32, NUMBER_REGEX, parseNumber, limitedParseDouble, handleFloat, limitedParseFloat, limitedParseFloat32, parseFloatString, strictParseLong, strictParseInt, strictParseInt32, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    parseBoolean = (value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    };
    expectBoolean = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    };
    expectNumber = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    };
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = (value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    };
    expectLong = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    };
    expectInt = expectLong;
    expectInt32 = (value) => expectSizedInt(value, 32);
    expectShort = (value) => expectSizedInt(value, 16);
    expectByte = (value) => expectSizedInt(value, 8);
    expectSizedInt = (value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    };
    castInt = (value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    };
    expectNonNull = (value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    };
    expectObject = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    };
    expectString = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    };
    expectUnion = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = expectObject(value);
      const setKeys = Object.entries(asObject).filter(([, v]) => v != null).map(([k]) => k);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    };
    strictParseDouble = (value) => {
      if (typeof value == "string") {
        return expectNumber(parseNumber(value));
      }
      return expectNumber(value);
    };
    strictParseFloat = strictParseDouble;
    strictParseFloat32 = (value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    };
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = (value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    };
    limitedParseDouble = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber(value);
    };
    handleFloat = limitedParseDouble;
    limitedParseFloat = limitedParseDouble;
    limitedParseFloat32 = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectFloat32(value);
    };
    parseFloatString = (value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    };
    strictParseLong = (value) => {
      if (typeof value === "string") {
        return expectLong(parseNumber(value));
      }
      return expectLong(value);
    };
    strictParseInt = strictParseLong;
    strictParseInt32 = (value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    };
    strictParseShort = (value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    };
    strictParseByte = (value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    };
    stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    };
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString(date2) {
  const year2 = date2.getUTCFullYear();
  const month = date2.getUTCMonth();
  const dayOfWeek = date2.getUTCDay();
  const dayOfMonthInt = date2.getUTCDate();
  const hoursInt = date2.getUTCHours();
  const minutesInt = date2.getUTCMinutes();
  const secondsInt = date2.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year2} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, parseRfc3339DateTime, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime, parseEpochTimestamp, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year2 = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    };
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year2 = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date2 = buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date2.setTime(date2.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date2;
    };
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    parseRfc7231DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    };
    parseEpochTimestamp = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
      } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    };
    buildDate = (year2, month, day, time2) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year2, adjustedMonth, day);
      return new Date(Date.UTC(year2, adjustedMonth, day, parseDateValue(time2.hours, "hour", 0, 23), parseDateValue(time2.minutes, "minute", 0, 59), parseDateValue(time2.seconds, "seconds", 0, 60), parseMilliseconds(time2.fractionalMilliseconds)));
    };
    parseTwoDigitYear = (value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    };
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = (input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    };
    parseMonthByShortName = (value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    };
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = (year2, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year2)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year2}: ${day}`);
      }
    };
    isLeapYear = (year2) => {
      return year2 % 4 === 0 && (year2 % 100 !== 0 || year2 % 400 === 0);
    };
    parseDateValue = (value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    };
    parseMilliseconds = (value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    };
    parseOffsetToMilliseconds = (value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    };
    stripLeadingZeroes = (value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    };
  }
});

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op2) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op2[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op2[0] & 2 ? y["return"] : op2[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op2[1])).done) return t;
      if (y = 0, t) op2 = [op2[0] & 2, t.value];
      switch (op2[0]) {
        case 0:
        case 1:
          t = op2;
          break;
        case 4:
          _.label++;
          return { value: op2[1], done: false };
        case 5:
          _.label++;
          y = op2[1];
          op2 = [0];
          continue;
        case 7:
          op2 = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op2[0] === 6 || op2[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op2[0] === 3 && (!t || op2[1] > t[0] && op2[1] < t[3])) {
            _.label = op2[1];
            break;
          }
          if (op2[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op2;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op2);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op2 = body.call(thisArg, _);
    } catch (e) {
      op2 = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op2[0] & 5) throw op2[1];
    return { value: op2[0] ? op2[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error2) {
    e = { error: error2 };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state2, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state2.get(receiver);
}
function __classPrivateFieldSet(receiver, state2, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state2.set(receiver, value), value;
}
function __classPrivateFieldIn(state2, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error2, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/@smithy/uuid/dist-cjs/randomUUID.js
var require_randomUUID = __commonJS({
  "node_modules/@smithy/uuid/dist-cjs/randomUUID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomUUID = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var crypto_1 = tslib_1.__importDefault(__require("crypto"));
    exports.randomUUID = crypto_1.default.randomUUID.bind(crypto_1.default);
  }
});

// node_modules/@smithy/uuid/dist-cjs/index.js
var require_dist_cjs15 = __commonJS({
  "node_modules/@smithy/uuid/dist-cjs/index.js"(exports) {
    "use strict";
    var randomUUID = require_randomUUID();
    var decimalToHex = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    var v4 = () => {
      if (randomUUID.randomUUID) {
        return randomUUID.randomUUID();
      }
      const rnds = new Uint8Array(16);
      crypto.getRandomValues(rnds);
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
    };
    exports.v4 = v4;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/generateIdempotencyToken.js
var import_uuid;
var init_generateIdempotencyToken = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/generateIdempotencyToken.js"() {
    import_uuid = __toESM(require_dist_cjs15());
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString;
var init_lazy_json = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    LazyJsonString = function LazyJsonString2(val) {
      const str = Object.assign(new String(val), {
        deserializeJSON() {
          return JSON.parse(String(val));
        },
        toString() {
          return String(val);
        },
        toJSON() {
          return String(val);
        }
      });
      return str;
    };
    LazyJsonString.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
      }
      return LazyJsonString(JSON.stringify(object));
    };
    LazyJsonString.fromObject = LazyJsonString.from;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function quoteHeader(part) {
  if (part.includes(",") || part.includes('"')) {
    part = `"${part.replace(/"/g, '\\"')}"`;
  }
  return part;
}
var init_quote_header = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js
function range(v, min, max) {
  const _v = Number(v);
  if (_v < min || _v > max) {
    throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
  }
}
var ddd, mmm, time, date, year, RFC3339_WITH_OFFSET2, IMF_FIXDATE2, RFC_850_DATE2, ASC_TIME2, months, _parseEpochTimestamp, _parseRfc3339DateTimeWithOffset, _parseRfc7231DateTime;
var init_schema_date_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js"() {
    ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
    mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
    time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
    date = `(\\d?\\d)`;
    year = `(\\d{4})`;
    RFC3339_WITH_OFFSET2 = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
    IMF_FIXDATE2 = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
    RFC_850_DATE2 = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
    ASC_TIME2 = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    _parseEpochTimestamp = (value) => {
      if (value == null) {
        return void 0;
      }
      let num = NaN;
      if (typeof value === "number") {
        num = value;
      } else if (typeof value === "string") {
        if (!/^-?\d*\.?\d+$/.test(value)) {
          throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
        }
        num = Number.parseFloat(value);
      } else if (typeof value === "object" && value.tag === 1) {
        num = value.value;
      }
      if (isNaN(num) || Math.abs(num) === Infinity) {
        throw new TypeError("Epoch timestamps must be valid finite numbers.");
      }
      return new Date(Math.round(num * 1e3));
    };
    _parseRfc3339DateTimeWithOffset = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC3339 timestamps must be strings");
      }
      const matches = RFC3339_WITH_OFFSET2.exec(value);
      if (!matches) {
        throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
      }
      const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
      range(monthStr, 1, 12);
      range(dayStr, 1, 31);
      range(hours, 0, 23);
      range(minutes, 0, 59);
      range(seconds, 0, 60);
      const date2 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1e3) : 0));
      date2.setUTCFullYear(Number(yearStr));
      if (offsetStr.toUpperCase() != "Z") {
        const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [void 0, "+", 0, 0];
        const scalar = sign === "-" ? 1 : -1;
        date2.setTime(date2.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1e3 + Number(offsetM) * 60 * 1e3));
      }
      return date2;
    };
    _parseRfc7231DateTime = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC7231 timestamps must be strings.");
      }
      let day;
      let month;
      let year2;
      let hour;
      let minute;
      let second;
      let fraction;
      let matches;
      if (matches = IMF_FIXDATE2.exec(value)) {
        [, day, month, year2, hour, minute, second, fraction] = matches;
      } else if (matches = RFC_850_DATE2.exec(value)) {
        [, day, month, year2, hour, minute, second, fraction] = matches;
        year2 = (Number(year2) + 1900).toString();
      } else if (matches = ASC_TIME2.exec(value)) {
        [, month, day, hour, minute, second, fraction, year2] = matches;
      }
      if (year2 && second) {
        const timestamp = Date.UTC(Number(year2), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1e3) : 0);
        range(day, 1, 31);
        range(hour, 0, 23);
        range(minute, 0, 59);
        range(second, 0, 60);
        const date2 = new Date(timestamp);
        date2.setUTCFullYear(Number(year2));
        return date2;
      }
      throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
function splitEvery(value, delimiter, numDelimiters) {
  if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
    throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
  }
  const segments = value.split(delimiter);
  if (numDelimiters === 1) {
    return segments;
  }
  const compoundSegments = [];
  let currentSegment = "";
  for (let i = 0; i < segments.length; i++) {
    if (currentSegment === "") {
      currentSegment = segments[i];
    } else {
      currentSegment += delimiter + segments[i];
    }
    if ((i + 1) % numDelimiters === 0) {
      compoundSegments.push(currentSegment);
      currentSegment = "";
    }
  }
  if (currentSegment !== "") {
    compoundSegments.push(currentSegment);
  }
  return compoundSegments;
}
var init_split_every = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
var splitHeader;
var init_split_header = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
    splitHeader = (value) => {
      const z = value.length;
      const values = [];
      let withinQuotes = false;
      let prevChar = void 0;
      let anchor = 0;
      for (let i = 0; i < z; ++i) {
        const char = value[i];
        switch (char) {
          case `"`:
            if (prevChar !== "\\") {
              withinQuotes = !withinQuotes;
            }
            break;
          case ",":
            if (!withinQuotes) {
              values.push(value.slice(anchor, i));
              anchor = i + 1;
            }
            break;
          default:
        }
        prevChar = char;
      }
      values.push(value.slice(anchor));
      return values.map((v) => {
        v = v.trim();
        const z2 = v.length;
        if (z2 < 2) {
          return v;
        }
        if (v[0] === `"` && v[z2 - 1] === `"`) {
          v = v.slice(1, z2 - 1);
        }
        return v.replace(/\\"/g, '"');
      });
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
function nv(input) {
  return new NumericValue(String(input), "bigDecimal");
}
var format, NumericValue;
var init_NumericValue = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
    format = /^-?\d*(\.\d+)?$/;
    NumericValue = class _NumericValue {
      string;
      type;
      constructor(string, type) {
        this.string = string;
        this.type = type;
        if (!format.test(string)) {
          throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
        }
      }
      toString() {
        return this.string;
      }
      static [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
          return false;
        }
        const _nv = object;
        return _NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/index.js
var serde_exports = {};
__export(serde_exports, {
  LazyJsonString: () => LazyJsonString,
  NumericValue: () => NumericValue,
  _parseEpochTimestamp: () => _parseEpochTimestamp,
  _parseRfc3339DateTimeWithOffset: () => _parseRfc3339DateTimeWithOffset,
  _parseRfc7231DateTime: () => _parseRfc7231DateTime,
  copyDocumentWithTransform: () => copyDocumentWithTransform,
  dateToUtcString: () => dateToUtcString,
  expectBoolean: () => expectBoolean,
  expectByte: () => expectByte,
  expectFloat32: () => expectFloat32,
  expectInt: () => expectInt,
  expectInt32: () => expectInt32,
  expectLong: () => expectLong,
  expectNonNull: () => expectNonNull,
  expectNumber: () => expectNumber,
  expectObject: () => expectObject,
  expectShort: () => expectShort,
  expectString: () => expectString,
  expectUnion: () => expectUnion,
  generateIdempotencyToken: () => import_uuid.v4,
  handleFloat: () => handleFloat,
  limitedParseDouble: () => limitedParseDouble,
  limitedParseFloat: () => limitedParseFloat,
  limitedParseFloat32: () => limitedParseFloat32,
  logger: () => logger,
  nv: () => nv,
  parseBoolean: () => parseBoolean,
  parseEpochTimestamp: () => parseEpochTimestamp,
  parseRfc3339DateTime: () => parseRfc3339DateTime,
  parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime: () => parseRfc7231DateTime,
  quoteHeader: () => quoteHeader,
  splitEvery: () => splitEvery,
  splitHeader: () => splitHeader,
  strictParseByte: () => strictParseByte,
  strictParseDouble: () => strictParseDouble,
  strictParseFloat: () => strictParseFloat,
  strictParseFloat32: () => strictParseFloat32,
  strictParseInt: () => strictParseInt,
  strictParseInt32: () => strictParseInt32,
  strictParseLong: () => strictParseLong,
  strictParseShort: () => strictParseShort
});
var init_serde = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/index.js"() {
    init_copyDocumentWithTransform();
    init_date_utils();
    init_generateIdempotencyToken();
    init_lazy_json();
    init_parse_utils();
    init_quote_header();
    init_schema_date_utils();
    init_split_every();
    init_split_header();
    init_NumericValue();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
var SerdeContext;
var init_SerdeContext = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js"() {
    SerdeContext = class {
      serdeContext;
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
var import_util_utf8, EventStreamSerde;
var init_EventStreamSerde = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
    import_util_utf8 = __toESM(require_dist_cjs7());
    EventStreamSerde = class {
      marshaller;
      serializer;
      deserializer;
      serdeContext;
      defaultContentType;
      constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const marshaller = this.marshaller;
        const eventStreamMember = requestSchema.getEventStreamMember();
        const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
        const serializer = this.serializer;
        const defaultContentType = this.defaultContentType;
        const initialRequestMarker = /* @__PURE__ */ Symbol("initialRequestMarker");
        const eventStreamIterable = {
          async *[Symbol.asyncIterator]() {
            if (initialRequest) {
              const headers = {
                ":event-type": { type: "string", value: "initial-request" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: defaultContentType }
              };
              serializer.write(requestSchema, initialRequest);
              const body = serializer.flush();
              yield {
                [initialRequestMarker]: true,
                headers,
                body
              };
            }
            for await (const page of eventStream) {
              yield page;
            }
          }
        };
        return marshaller.serialize(eventStreamIterable, (event) => {
          if (event[initialRequestMarker]) {
            return {
              headers: event.headers,
              body: event.body
            };
          }
          const unionMember = Object.keys(event).find((key) => {
            return key !== "__type";
          }) ?? "";
          const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
          const headers = {
            ":event-type": { type: "string", value: eventType },
            ":message-type": { type: "string", value: "event" },
            ":content-type": { type: "string", value: explicitPayloadContentType ?? defaultContentType },
            ...additionalHeaders
          };
          return {
            headers,
            body
          };
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const marshaller = this.marshaller;
        const eventStreamMember = responseSchema.getEventStreamMember();
        const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
        const memberSchemas = unionSchema.getMemberSchemas();
        const initialResponseMarker = /* @__PURE__ */ Symbol("initialResponseMarker");
        const asyncIterable = marshaller.deserialize(response.body, async (event) => {
          const unionMember = Object.keys(event).find((key) => {
            return key !== "__type";
          }) ?? "";
          const body = event[unionMember].body;
          if (unionMember === "initial-response") {
            const dataObject = await this.deserializer.read(responseSchema, body);
            delete dataObject[eventStreamMember];
            return {
              [initialResponseMarker]: true,
              ...dataObject
            };
          } else if (unionMember in memberSchemas) {
            const eventStreamSchema = memberSchemas[unionMember];
            if (eventStreamSchema.isStructSchema()) {
              const out = {};
              let hasBindings = false;
              for (const [name, member2] of eventStreamSchema.structIterator()) {
                const { eventHeader, eventPayload } = member2.getMergedTraits();
                hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                if (eventPayload) {
                  if (member2.isBlobSchema()) {
                    out[name] = body;
                  } else if (member2.isStringSchema()) {
                    out[name] = (this.serdeContext?.utf8Encoder ?? import_util_utf8.toUtf8)(body);
                  } else if (member2.isStructSchema()) {
                    out[name] = await this.deserializer.read(member2, body);
                  }
                } else if (eventHeader) {
                  const value = event[unionMember].headers[name]?.value;
                  if (value != null) {
                    if (member2.isNumericSchema()) {
                      if (value && typeof value === "object" && "bytes" in value) {
                        out[name] = BigInt(value.toString());
                      } else {
                        out[name] = Number(value);
                      }
                    } else {
                      out[name] = value;
                    }
                  }
                }
              }
              if (hasBindings) {
                return {
                  [unionMember]: out
                };
              }
              if (body.byteLength === 0) {
                return {
                  [unionMember]: {}
                };
              }
            }
            return {
              [unionMember]: await this.deserializer.read(eventStreamSchema, body)
            };
          } else {
            return {
              $unknown: event
            };
          }
        });
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        const firstEvent = await asyncIterator.next();
        if (firstEvent.done) {
          return asyncIterable;
        }
        if (firstEvent.value?.[initialResponseMarker]) {
          if (!responseSchema) {
            throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          }
          for (const [key, value] of Object.entries(firstEvent.value)) {
            initialResponseContainer[key] = value;
          }
        }
        return {
          async *[Symbol.asyncIterator]() {
            if (!firstEvent?.value?.[initialResponseMarker]) {
              yield firstEvent.value;
            }
            while (true) {
              const { done, value } = await asyncIterator.next();
              if (done) {
                break;
              }
              yield value;
            }
          }
        };
      }
      writeEventBody(unionMember, unionSchema, event) {
        const serializer = this.serializer;
        let eventType = unionMember;
        let explicitPayloadMember = null;
        let explicitPayloadContentType;
        const isKnownSchema = (() => {
          const struct2 = unionSchema.getSchema();
          return struct2[4].includes(unionMember);
        })();
        const additionalHeaders = {};
        if (!isKnownSchema) {
          const [type, value] = event[unionMember];
          eventType = type;
          serializer.write(15, value);
        } else {
          const eventSchema = unionSchema.getMemberSchema(unionMember);
          if (eventSchema.isStructSchema()) {
            for (const [memberName, memberSchema] of eventSchema.structIterator()) {
              const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
              if (eventPayload) {
                explicitPayloadMember = memberName;
              } else if (eventHeader) {
                const value = event[unionMember][memberName];
                let type = "binary";
                if (memberSchema.isNumericSchema()) {
                  if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                    type = "integer";
                  } else {
                    type = "long";
                  }
                } else if (memberSchema.isTimestampSchema()) {
                  type = "timestamp";
                } else if (memberSchema.isStringSchema()) {
                  type = "string";
                } else if (memberSchema.isBooleanSchema()) {
                  type = "boolean";
                }
                if (value != null) {
                  additionalHeaders[memberName] = {
                    type,
                    value
                  };
                  delete event[unionMember][memberName];
                }
              }
            }
            if (explicitPayloadMember !== null) {
              const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
              if (payloadSchema.isBlobSchema()) {
                explicitPayloadContentType = "application/octet-stream";
              } else if (payloadSchema.isStringSchema()) {
                explicitPayloadContentType = "text/plain";
              }
              serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
            } else {
              serializer.write(eventSchema, event[unionMember]);
            }
          } else if (eventSchema.isUnitSchema()) {
            serializer.write(eventSchema, {});
          } else {
            throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
          }
        }
        const messageSerialization = serializer.flush() ?? new Uint8Array();
        const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? import_util_utf8.fromUtf8)(messageSerialization) : messageSerialization;
        return {
          body,
          eventType,
          explicitPayloadContentType,
          additionalHeaders
        };
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/index.js
var event_streams_exports = {};
__export(event_streams_exports, {
  EventStreamSerde: () => EventStreamSerde
});
var init_event_streams = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/index.js"() {
    init_EventStreamSerde();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var import_protocol_http3, HttpProtocol;
var init_HttpProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js"() {
    init_schema();
    import_protocol_http3 = __toESM(require_dist_cjs3());
    init_SerdeContext();
    HttpProtocol = class extends SerdeContext {
      options;
      compositeErrorRegistry;
      constructor(options) {
        super();
        this.options = options;
        this.compositeErrorRegistry = TypeRegistry.for(options.defaultNamespace);
        for (const etr of options.errorTypeRegistries ?? []) {
          this.compositeErrorRegistry.copyFrom(etr);
        }
      }
      getRequestType() {
        return import_protocol_http3.HttpRequest;
      }
      getResponseType() {
        return import_protocol_http3.HttpResponse;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
          this.getPayloadCodec().setSerdeContext(serdeContext);
        }
      }
      updateServiceEndpoint(request, endpoint) {
        if ("url" in endpoint) {
          request.protocol = endpoint.url.protocol;
          request.hostname = endpoint.url.hostname;
          request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
          request.path = endpoint.url.pathname;
          request.fragment = endpoint.url.hash || void 0;
          request.username = endpoint.url.username || void 0;
          request.password = endpoint.url.password || void 0;
          if (!request.query) {
            request.query = {};
          }
          for (const [k, v] of endpoint.url.searchParams.entries()) {
            request.query[k] = v;
          }
          return request;
        } else {
          request.protocol = endpoint.protocol;
          request.hostname = endpoint.hostname;
          request.port = endpoint.port ? Number(endpoint.port) : void 0;
          request.path = endpoint.path;
          request.query = {
            ...endpoint.query
          };
          return request;
        }
      }
      setHostPrefix(request, operationSchema, input) {
        if (this.serdeContext?.disableHostPrefix) {
          return;
        }
        const inputNs = NormalizedSchema.of(operationSchema.input);
        const opTraits = translateTraits(operationSchema.traits ?? {});
        if (opTraits.endpoint) {
          let hostPrefix = opTraits.endpoint?.[0];
          if (typeof hostPrefix === "string") {
            const hostLabelInputs = [...inputNs.structIterator()].filter(([, member2]) => member2.getMergedTraits().hostLabel);
            for (const [name] of hostLabelInputs) {
              const replacement = input[name];
              if (typeof replacement !== "string") {
                throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
              }
              hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
            }
            request.hostname = hostPrefix + request.hostname;
          }
        }
      }
      deserializeMetadata(output) {
        return {
          httpStatusCode: output.statusCode,
          requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
          extendedRequestId: output.headers["x-amz-id-2"],
          cfId: output.headers["x-amz-cf-id"]
        };
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.serializeEventStream({
          eventStream,
          requestSchema,
          initialRequest
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.deserializeEventStream({
          response,
          responseSchema,
          initialResponseContainer
        });
      }
      async loadEventStreamCapability() {
        const { EventStreamSerde: EventStreamSerde2 } = await Promise.resolve().then(() => (init_event_streams(), event_streams_exports));
        return new EventStreamSerde2({
          marshaller: this.getEventStreamMarshaller(),
          serializer: this.serializer,
          deserializer: this.deserializer,
          serdeContext: this.serdeContext,
          defaultContentType: this.getDefaultContentType()
        });
      }
      getDefaultContentType() {
        throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        void schema;
        void context;
        void response;
        void arg4;
        void arg5;
        return [];
      }
      getEventStreamMarshaller() {
        const context = this.serdeContext;
        if (!context.eventStreamMarshaller) {
          throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        }
        return context.eventStreamMarshaller;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
var import_protocol_http4, import_util_stream2, HttpBindingProtocol;
var init_HttpBindingProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js"() {
    init_schema();
    init_serde();
    import_protocol_http4 = __toESM(require_dist_cjs3());
    import_util_stream2 = __toESM(require_dist_cjs14());
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpProtocol();
    HttpBindingProtocol = class extends HttpProtocol {
      async serializeRequest(operationSchema, _input, context) {
        const input = {
          ..._input ?? {}
        };
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const payloadMemberNames = [];
        const payloadMemberSchemas = [];
        let hasNonHttpBindingMember = false;
        let payload2;
        const request = new import_protocol_http4.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
          const opTraits = translateTraits(operationSchema.traits);
          if (opTraits.http) {
            request.method = opTraits.http[0];
            const [path, search] = opTraits.http[1].split("?");
            if (request.path == "/") {
              request.path = path;
            } else {
              request.path += path;
            }
            const traitSearchParams = new URLSearchParams(search ?? "");
            Object.assign(query, Object.fromEntries(traitSearchParams));
          }
        }
        for (const [memberName, memberNs] of ns.structIterator()) {
          const memberTraits = memberNs.getMergedTraits() ?? {};
          const inputMemberValue = input[memberName];
          if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
            if (memberTraits.httpLabel) {
              if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) {
                throw new Error(`No value provided for input HTTP label: ${memberName}.`);
              }
            }
            continue;
          }
          if (memberTraits.httpPayload) {
            const isStreaming = memberNs.isStreaming();
            if (isStreaming) {
              const isEventStream = memberNs.isStructSchema();
              if (isEventStream) {
                if (input[memberName]) {
                  payload2 = await this.serializeEventStream({
                    eventStream: input[memberName],
                    requestSchema: ns
                  });
                }
              } else {
                payload2 = inputMemberValue;
              }
            } else {
              serializer.write(memberNs, inputMemberValue);
              payload2 = serializer.flush();
            }
            delete input[memberName];
          } else if (memberTraits.httpLabel) {
            serializer.write(memberNs, inputMemberValue);
            const replacement = serializer.flush();
            if (request.path.includes(`{${memberName}+}`)) {
              request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
            } else if (request.path.includes(`{${memberName}}`)) {
              request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
            }
            delete input[memberName];
          } else if (memberTraits.httpHeader) {
            serializer.write(memberNs, inputMemberValue);
            headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
            delete input[memberName];
          } else if (typeof memberTraits.httpPrefixHeaders === "string") {
            for (const [key, val] of Object.entries(inputMemberValue)) {
              const amalgam = memberTraits.httpPrefixHeaders + key;
              serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
              headers[amalgam.toLowerCase()] = serializer.flush();
            }
            delete input[memberName];
          } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
            this.serializeQuery(memberNs, inputMemberValue, query);
            delete input[memberName];
          } else {
            hasNonHttpBindingMember = true;
            payloadMemberNames.push(memberName);
            payloadMemberSchemas.push(memberNs);
          }
        }
        if (hasNonHttpBindingMember && input) {
          const [namespace, name] = (ns.getName(true) ?? "#Unknown").split("#");
          const requiredMembers = ns.getSchema()[6];
          const payloadSchema = [
            3,
            namespace,
            name,
            ns.getMergedTraits(),
            payloadMemberNames,
            payloadMemberSchemas,
            void 0
          ];
          if (requiredMembers) {
            payloadSchema[6] = requiredMembers;
          } else {
            payloadSchema.pop();
          }
          serializer.write(payloadSchema, input);
          payload2 = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload2;
        return request;
      }
      serializeQuery(ns, data2, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
          for (const [key, val] of Object.entries(data2)) {
            if (!(key in query)) {
              const valueSchema = ns.getValueSchema();
              Object.assign(valueSchema.getMergedTraits(), {
                ...traits,
                httpQuery: key,
                httpQueryParams: void 0
              });
              this.serializeQuery(valueSchema, val, query);
            }
          }
          return;
        }
        if (ns.isListSchema()) {
          const sparse = !!ns.getMergedTraits().sparse;
          const buffer = [];
          for (const item of data2) {
            serializer.write([ns.getValueSchema(), traits], item);
            const serializable = serializer.flush();
            if (sparse || serializable !== void 0) {
              buffer.push(serializable);
            }
          }
          query[traits.httpQuery] = buffer;
        } else {
          serializer.write([ns, traits], data2);
          query[traits.httpQuery] = serializer.flush();
        }
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            const dataFromBody = await deserializer.read(ns, bytes);
            for (const member2 of nonHttpBindingMembers) {
              if (dataFromBody[member2] != null) {
                dataObject[member2] = dataFromBody[member2];
              }
            }
          }
        } else if (nonHttpBindingMembers.discardResponseBody) {
          await collectBody(response.body, context);
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        let dataObject;
        if (arg4 instanceof Set) {
          dataObject = arg5;
        } else {
          dataObject = arg4;
        }
        let discardResponseBody = true;
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMemberTraits();
          if (memberTraits.httpPayload) {
            discardResponseBody = false;
            const isStreaming = memberSchema.isStreaming();
            if (isStreaming) {
              const isEventStream = memberSchema.isStructSchema();
              if (isEventStream) {
                dataObject[memberName] = await this.deserializeEventStream({
                  response,
                  responseSchema: ns
                });
              } else {
                dataObject[memberName] = (0, import_util_stream2.sdkStreamMixin)(response.body);
              }
            } else if (response.body) {
              const bytes = await collectBody(response.body, context);
              if (bytes.byteLength > 0) {
                dataObject[memberName] = await deserializer.read(memberSchema, bytes);
              }
            }
          } else if (memberTraits.httpHeader) {
            const key = String(memberTraits.httpHeader).toLowerCase();
            const value = response.headers[key];
            if (null != value) {
              if (memberSchema.isListSchema()) {
                const headerListValueSchema = memberSchema.getValueSchema();
                headerListValueSchema.getMergedTraits().httpHeader = key;
                let sections;
                if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                  sections = splitEvery(value, ",", 2);
                } else {
                  sections = splitHeader(value);
                }
                const list2 = [];
                for (const section of sections) {
                  list2.push(await deserializer.read(headerListValueSchema, section.trim()));
                }
                dataObject[memberName] = list2;
              } else {
                dataObject[memberName] = await deserializer.read(memberSchema, value);
              }
            }
          } else if (memberTraits.httpPrefixHeaders !== void 0) {
            dataObject[memberName] = {};
            for (const [header, value] of Object.entries(response.headers)) {
              if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                const valueSchema = memberSchema.getValueSchema();
                valueSchema.getMergedTraits().httpHeader = header;
                dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
              }
            }
          } else if (memberTraits.httpResponseCode) {
            dataObject[memberName] = response.statusCode;
          } else {
            nonHttpBindingMembers.push(memberName);
          }
        }
        nonHttpBindingMembers.discardResponseBody = discardResponseBody;
        return nonHttpBindingMembers;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
var import_protocol_http5, RpcProtocol;
var init_RpcProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js"() {
    init_schema();
    import_protocol_http5 = __toESM(require_dist_cjs3());
    init_collect_stream_body();
    init_HttpProtocol();
    RpcProtocol = class extends HttpProtocol {
      async serializeRequest(operationSchema, input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let payload2;
        const request = new import_protocol_http5.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
        }
        const _input = {
          ...input
        };
        if (input) {
          const eventStreamMember = ns.getEventStreamMember();
          if (eventStreamMember) {
            if (_input[eventStreamMember]) {
              const initialRequest = {};
              for (const [memberName, memberSchema] of ns.structIterator()) {
                if (memberName !== eventStreamMember && _input[memberName]) {
                  serializer.write(memberSchema, _input[memberName]);
                  initialRequest[memberName] = serializer.flush();
                }
              }
              payload2 = await this.serializeEventStream({
                eventStream: _input[eventStreamMember],
                requestSchema: ns,
                initialRequest
              });
            }
          } else {
            serializer.write(schema, _input);
            payload2 = serializer.flush();
          }
        }
        request.headers = headers;
        request.query = query;
        request.body = payload2;
        request.method = "POST";
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
          dataObject[eventStreamMember] = await this.deserializeEventStream({
            response,
            responseSchema: ns,
            initialResponseContainer: dataObject
          });
        } else {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(ns, bytes));
          }
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath;
var init_resolve_path = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue == null || labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var import_protocol_http6, RequestBuilder;
var init_requestBuilder = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
    import_protocol_http6 = __toESM(require_dist_cjs3());
    init_resolve_path();
    RequestBuilder = class {
      input;
      context;
      query = {};
      method = "";
      headers = {};
      path = "";
      body = null;
      hostname = "";
      resolvePathStack = [];
      constructor(input, context) {
        this.input = input;
        this.context = context;
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new import_protocol_http6.HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function determineTimestampFormat(ns, settings) {
  if (settings.timestampFormat.useTrait) {
    if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
      return ns.getSchema();
    }
  }
  const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
  const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : void 0 : void 0;
  return bindingFormat ?? settings.timestampFormat.default;
}
var init_determineTimestampFormat = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
var import_util_base64, import_util_utf82, FromStringShapeDeserializer;
var init_FromStringShapeDeserializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js"() {
    init_schema();
    init_serde();
    import_util_base64 = __toESM(require_dist_cjs8());
    import_util_utf82 = __toESM(require_dist_cjs7());
    init_SerdeContext();
    init_determineTimestampFormat();
    FromStringShapeDeserializer = class extends SerdeContext {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      read(_schema, data2) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isListSchema()) {
          return splitHeader(data2).map((item) => this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
          return (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(data2);
        }
        if (ns.isTimestampSchema()) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              return _parseRfc3339DateTimeWithOffset(data2);
            case 6:
              return _parseRfc7231DateTime(data2);
            case 7:
              return _parseEpochTimestamp(data2);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", data2);
              return new Date(data2);
          }
        }
        if (ns.isStringSchema()) {
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = data2;
          if (mediaType) {
            if (ns.getMergedTraits().httpHeader) {
              intermediateValue = this.base64ToUtf8(intermediateValue);
            }
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString.from(intermediateValue);
            }
            return intermediateValue;
          }
        }
        if (ns.isNumericSchema()) {
          return Number(data2);
        }
        if (ns.isBigIntegerSchema()) {
          return BigInt(data2);
        }
        if (ns.isBigDecimalSchema()) {
          return new NumericValue(data2, "bigDecimal");
        }
        if (ns.isBooleanSchema()) {
          return String(data2).toLowerCase() === "true";
        }
        return data2;
      }
      base64ToUtf8(base64String) {
        return (this.serdeContext?.utf8Encoder ?? import_util_utf82.toUtf8)((this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(base64String));
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
var import_util_utf83, HttpInterceptingShapeDeserializer;
var init_HttpInterceptingShapeDeserializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js"() {
    init_schema();
    import_util_utf83 = __toESM(require_dist_cjs7());
    init_SerdeContext();
    init_FromStringShapeDeserializer();
    HttpInterceptingShapeDeserializer = class extends SerdeContext {
      codecDeserializer;
      stringDeserializer;
      constructor(codecDeserializer, codecSettings) {
        super();
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
      }
      setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
      }
      read(schema, data2) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        const toString = this.serdeContext?.utf8Encoder ?? import_util_utf83.toUtf8;
        if (traits.httpHeader || traits.httpResponseCode) {
          return this.stringDeserializer.read(ns, toString(data2));
        }
        if (traits.httpPayload) {
          if (ns.isBlobSchema()) {
            const toBytes = this.serdeContext?.utf8Decoder ?? import_util_utf83.fromUtf8;
            if (typeof data2 === "string") {
              return toBytes(data2);
            }
            return data2;
          } else if (ns.isStringSchema()) {
            if ("byteLength" in data2) {
              return toString(data2);
            }
            return data2;
          }
        }
        return this.codecDeserializer.read(ns, data2);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
var import_util_base642, ToStringShapeSerializer;
var init_ToStringShapeSerializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js"() {
    init_schema();
    init_serde();
    import_util_base642 = __toESM(require_dist_cjs8());
    init_SerdeContext();
    init_determineTimestampFormat();
    ToStringShapeSerializer = class extends SerdeContext {
      settings;
      stringBuffer = "";
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        switch (typeof value) {
          case "object":
            if (value === null) {
              this.stringBuffer = "null";
              return;
            }
            if (ns.isTimestampSchema()) {
              if (!(value instanceof Date)) {
                throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
              }
              const format2 = determineTimestampFormat(ns, this.settings);
              switch (format2) {
                case 5:
                  this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                  break;
                case 6:
                  this.stringBuffer = dateToUtcString(value);
                  break;
                case 7:
                  this.stringBuffer = String(value.getTime() / 1e3);
                  break;
                default:
                  console.warn("Missing timestamp format, using epoch seconds", value);
                  this.stringBuffer = String(value.getTime() / 1e3);
              }
              return;
            }
            if (ns.isBlobSchema() && "byteLength" in value) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(value);
              return;
            }
            if (ns.isListSchema() && Array.isArray(value)) {
              let buffer = "";
              for (const item of value) {
                this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
                const headerItem = this.flush();
                const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader(headerItem);
                if (buffer !== "") {
                  buffer += ", ";
                }
                buffer += serialized;
              }
              this.stringBuffer = buffer;
              return;
            }
            this.stringBuffer = JSON.stringify(value, null, 2);
            break;
          case "string":
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = value;
            if (mediaType) {
              const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
              if (isJson) {
                intermediateValue = LazyJsonString.from(intermediateValue);
              }
              if (ns.getMergedTraits().httpHeader) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(intermediateValue.toString());
                return;
              }
            }
            this.stringBuffer = value;
            break;
          default:
            if (ns.isIdempotencyToken()) {
              this.stringBuffer = (0, import_uuid.v4)();
            } else {
              this.stringBuffer = String(value);
            }
        }
      }
      flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
var HttpInterceptingShapeSerializer;
var init_HttpInterceptingShapeSerializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js"() {
    init_schema();
    init_ToStringShapeSerializer();
    HttpInterceptingShapeSerializer = class {
      codecSerializer;
      stringSerializer;
      buffer;
      constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
      }
      setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
          this.stringSerializer.write(ns, value);
          this.buffer = this.stringSerializer.flush();
          return;
        }
        return this.codecSerializer.write(ns, value);
      }
      flush() {
        if (this.buffer !== void 0) {
          const buffer = this.buffer;
          this.buffer = void 0;
          return buffer;
        }
        return this.codecSerializer.flush();
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var protocols_exports = {};
__export(protocols_exports, {
  FromStringShapeDeserializer: () => FromStringShapeDeserializer,
  HttpBindingProtocol: () => HttpBindingProtocol,
  HttpInterceptingShapeDeserializer: () => HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer: () => HttpInterceptingShapeSerializer,
  HttpProtocol: () => HttpProtocol,
  RequestBuilder: () => RequestBuilder,
  RpcProtocol: () => RpcProtocol,
  SerdeContext: () => SerdeContext,
  ToStringShapeSerializer: () => ToStringShapeSerializer,
  collectBody: () => collectBody,
  determineTimestampFormat: () => determineTimestampFormat,
  extendedEncodeURIComponent: () => extendedEncodeURIComponent,
  requestBuilder: () => requestBuilder,
  resolvedPath: () => resolvedPath
});
var init_protocols = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpBindingProtocol();
    init_HttpProtocol();
    init_RpcProtocol();
    init_requestBuilder();
    init_resolve_path();
    init_FromStringShapeDeserializer();
    init_HttpInterceptingShapeDeserializer();
    init_HttpInterceptingShapeSerializer();
    init_ToStringShapeSerializer();
    init_determineTimestampFormat();
    init_SerdeContext();
  }
});

// node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js
var init_requestBuilder2 = __esm({
  "node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js"() {
    init_protocols();
  }
});

// node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature = __esm({
  "node_modules/@smithy/core/dist-es/setFeature.js"() {
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      authSchemes = /* @__PURE__ */ new Map();
      constructor(config) {
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var import_protocol_http7, import_types2, HttpApiKeyAuthSigner;
var init_httpApiKeyAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    import_protocol_http7 = __toESM(require_dist_cjs3());
    import_types2 = __toESM(require_dist_cjs());
    HttpApiKeyAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
          throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
          throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
          throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
          throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = import_protocol_http7.HttpRequest.clone(httpRequest);
        if (signingProperties.in === import_types2.HttpApiKeyAuthLocation.QUERY) {
          clonedRequest.query[signingProperties.name] = identity.apiKey;
        } else if (signingProperties.in === import_types2.HttpApiKeyAuthLocation.HEADER) {
          clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
        } else {
          throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + signingProperties.in + "`");
        }
        return clonedRequest;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var import_protocol_http8, HttpBearerAuthSigner;
var init_httpBearerAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    import_protocol_http8 = __toESM(require_dist_cjs3());
    HttpBearerAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = import_protocol_http8.HttpRequest.clone(httpRequest);
        if (!identity.token) {
          throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
      return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    };
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
    memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/@smithy/core/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
  EXPIRATION_MS: () => EXPIRATION_MS,
  HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
  HttpBearerAuthSigner: () => HttpBearerAuthSigner,
  NoAuthSigner: () => NoAuthSigner,
  createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
  createPaginator: () => createPaginator,
  doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
  getHttpSigningPlugin: () => getHttpSigningPlugin,
  getSmithyContext: () => getSmithyContext,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
  httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
  httpSigningMiddleware: () => httpSigningMiddleware,
  httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
  isIdentityExpired: () => isIdentityExpired,
  memoizeIdentityProvider: () => memoizeIdentityProvider,
  normalizeProvider: () => normalizeProvider,
  requestBuilder: () => requestBuilder,
  setFeature: () => setFeature
});
var init_dist_es = __esm({
  "node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider();
    init_createPaginator();
    init_requestBuilder2();
    init_setFeature();
    init_util_identity_and_auth();
  }
});

// node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "node_modules/@smithy/util-endpoints/dist-cjs/index.js"(exports) {
    "use strict";
    var types = require_dist_cjs();
    var EndpointCache = class {
      capacity;
      data = /* @__PURE__ */ new Map();
      parameters = [];
      constructor({ size, params }) {
        this.capacity = size ?? 50;
        if (params) {
          this.parameters = params;
        }
      }
      get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
          return resolver();
        }
        if (!this.data.has(key)) {
          if (this.data.size > this.capacity + 10) {
            const keys = this.data.keys();
            let i = 0;
            while (true) {
              const { value, done } = keys.next();
              this.data.delete(value);
              if (done || ++i > 10) {
                break;
              }
            }
          }
          this.data.set(key, resolver());
        }
        return this.data.get(key);
      }
      size() {
        return this.data.size;
      }
      hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
          return false;
        }
        for (const param of parameters) {
          const val = String(endpointParams[param] ?? "");
          if (val.includes("|;")) {
            return false;
          }
          buffer += val + "|;";
        }
        return buffer;
      }
    };
    var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
    var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    var isValidHostLabel = (value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    };
    var customEndpointFunctions = {};
    var debugId = "endpoints";
    function toDebugString(input) {
      if (typeof input !== "object" || input == null) {
        return input;
      }
      if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
      }
      if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
      }
      return JSON.stringify(input, null, 2);
    }
    var EndpointError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
    var booleanEquals = (value1, value2) => value1 === value2;
    var getAttrPathList = (path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    };
    var getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value);
    var isSet = (value) => value != null;
    var not = (value) => !value;
    var DEFAULT_PORTS = {
      [types.EndpointURLScheme.HTTP]: 80,
      [types.EndpointURLScheme.HTTPS]: 443
    };
    var parseURL = (value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error2) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(types.EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    };
    var stringEquals = (value1, value2) => value1 === value2;
    var substring = (input, start, stop, reverse) => {
      if (start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    };
    var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
    var endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
    var evaluateTemplate = (template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    };
    var getReferenceValue = ({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    };
    var evaluateExpression = (obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return group$2.callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    };
    var callFunction = ({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : group$2.evaluateExpression(arg, "arg", options));
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    };
    var group$2 = {
      evaluateExpression,
      callFunction
    };
    var evaluateCondition = ({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    };
    var evaluateConditions = (conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    };
    var getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      })
    }), {});
    var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: group$1.getEndpointProperty(propertyVal, options)
    }), {});
    var getEndpointProperty = (property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return group$1.getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    };
    var group$1 = {
      getEndpointProperty,
      getEndpointProperties
    };
    var getEndpointUrl = (endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error2) {
          console.error(`Failed to construct URL with ${expression}`, error2);
          throw error2;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    };
    var evaluateEndpointRule = (endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    };
    var evaluateErrorRule = (errorRule, options) => {
      const { conditions, error: error2 } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError(evaluateExpression(error2, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      }));
    };
    var evaluateRules = (rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = group.evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError(`Rules evaluation failed`);
    };
    var evaluateTreeRule = (treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return group.evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    };
    var group = {
      evaluateRules,
      evaluateTreeRule
    };
    var resolveEndpoint = (ruleSetObject, options) => {
      const { endpointParams, logger: logger2 } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v]) => v.default != null).map(([k, v]) => [k, v.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v]) => v.required).map(([k]) => k);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    };
    exports.EndpointCache = EndpointCache;
    exports.EndpointError = EndpointError;
    exports.customEndpointFunctions = customEndpointFunctions;
    exports.isIpAddress = isIpAddress;
    exports.isValidHostLabel = isValidHostLabel;
    exports.resolveEndpoint = resolveEndpoint;
  }
});

// node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "node_modules/@smithy/querystring-parser/dist-cjs/index.js"(exports) {
    "use strict";
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    exports.parseQueryString = parseQueryString;
  }
});

// node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "node_modules/@smithy/url-parser/dist-cjs/index.js"(exports) {
    "use strict";
    var querystringParser = require_dist_cjs17();
    var parseUrl = (url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = querystringParser.parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
    exports.parseUrl = parseUrl;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js"(exports) {
    "use strict";
    var utilEndpoints = require_dist_cjs16();
    var urlParser = require_dist_cjs18();
    var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!utilEndpoints.isValidHostLabel(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if (utilEndpoints.isIpAddress(value)) {
        return false;
      }
      return true;
    };
    var ARN_DELIMITER = ":";
    var RESOURCE_DELIMITER = "/";
    var parseArn = (value) => {
      const segments = value.split(ARN_DELIMITER);
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
        return null;
      const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId
      };
    };
    var partitions = [
      {
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-east-2": {
            description: "Asia Pacific (Taipei)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "ap-southeast-5": {
            description: "Asia Pacific (Malaysia)"
          },
          "ap-southeast-6": {
            description: "Asia Pacific (New Zealand)"
          },
          "ap-southeast-7": {
            description: "Asia Pacific (Thailand)"
          },
          "aws-global": {
            description: "aws global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "mx-central-1": {
            description: "Mexico (Central)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      },
      {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "aws-cn global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      },
      {
        id: "aws-eusc",
        outputs: {
          dnsSuffix: "amazonaws.eu",
          dualStackDnsSuffix: "api.amazonwebservices.eu",
          implicitGlobalRegion: "eusc-de-east-1",
          name: "aws-eusc",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
        regions: {
          "eusc-de-east-1": {
            description: "AWS European Sovereign Cloud (Germany)"
          }
        }
      },
      {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "api.aws.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "aws-iso global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      },
      {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "api.aws.scloud",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "aws-iso-b global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          },
          "us-isob-west-1": {
            description: "US ISOB West"
          }
        }
      },
      {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-e-global": {
            description: "aws-iso-e global region"
          },
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      },
      {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "api.aws.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-f-global": {
            description: "aws-iso-f global region"
          },
          "us-isof-east-1": {
            description: "US ISOF EAST"
          },
          "us-isof-south-1": {
            description: "US ISOF SOUTH"
          }
        }
      },
      {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "aws-us-gov global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }
    ];
    var version = "1.1";
    var partitionsInfo = {
      partitions,
      version
    };
    var selectedPartitionsInfo = partitionsInfo;
    var selectedUserAgentPrefix = "";
    var partition = (value) => {
      const { partitions: partitions2 } = selectedPartitionsInfo;
      for (const partition2 of partitions2) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions2) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions2.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    };
    var setPartitionInfo = (partitionsInfo2, userAgentPrefix = "") => {
      selectedPartitionsInfo = partitionsInfo2;
      selectedUserAgentPrefix = userAgentPrefix;
    };
    var useDefaultPartitionInfo = () => {
      setPartitionInfo(partitionsInfo, "");
    };
    var getUserAgentPrefix = () => selectedUserAgentPrefix;
    var awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    utilEndpoints.customEndpointFunctions.aws = awsEndpointFunctions;
    var resolveDefaultAwsRegionalEndpointsConfig = (input) => {
      if (typeof input.endpointProvider !== "function") {
        throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
      }
      const { endpoint } = input;
      if (endpoint === void 0) {
        input.endpoint = async () => {
          return toEndpointV1(input.endpointProvider({
            Region: typeof input.region === "function" ? await input.region() : input.region,
            UseDualStack: typeof input.useDualstackEndpoint === "function" ? await input.useDualstackEndpoint() : input.useDualstackEndpoint,
            UseFIPS: typeof input.useFipsEndpoint === "function" ? await input.useFipsEndpoint() : input.useFipsEndpoint,
            Endpoint: void 0
          }, { logger: input.logger }));
        };
      }
      return input;
    };
    var toEndpointV1 = (endpoint) => urlParser.parseUrl(endpoint.url);
    exports.EndpointError = utilEndpoints.EndpointError;
    exports.isIpAddress = utilEndpoints.isIpAddress;
    exports.resolveEndpoint = utilEndpoints.resolveEndpoint;
    exports.awsEndpointFunctions = awsEndpointFunctions;
    exports.getUserAgentPrefix = getUserAgentPrefix;
    exports.partition = partition;
    exports.resolveDefaultAwsRegionalEndpointsConfig = resolveDefaultAwsRegionalEndpointsConfig;
    exports.setPartitionInfo = setPartitionInfo;
    exports.toEndpointV1 = toEndpointV1;
    exports.useDefaultPartitionInfo = useDefaultPartitionInfo;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false
    };
    emitWarningIfUnsupportedVersion = (version) => {
      if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 20) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js ${version} in January 2026.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/c895JFp`);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js
function setTokenFeature(token, feature, value) {
  if (!token.$source) {
    token.$source = {};
  }
  token.$source[feature] = value;
  return token;
}
var init_setTokenFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature2();
    init_setTokenFeature();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var import_protocol_http9, getDateHeader;
var init_getDateHeader = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    import_protocol_http9 = __toESM(require_dist_cjs3());
    getDateHeader = (response) => import_protocol_http9.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var import_protocol_http10, throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer, AWSSDKSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    import_protocol_http10 = __toESM(require_dist_cjs3());
    init_utils();
    throwSigningPropertyError = (name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    };
    validateSigningProperties = async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingRegionSet = signingProperties?.signingRegionSet;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName
      };
    };
    AwsSdkSigV4Signer = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http10.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if (first?.name === "sigv4a" && second?.name === "sigv4") {
            signingRegion = second?.signingRegion ?? signingRegion;
            signingName = second?.signingName ?? signingName;
          }
        }
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error2) => {
          const serverTime = error2.ServerTime ?? getDateHeader(error2.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error2.$metadata) {
              error2.$metadata.clockSkewCorrected = true;
            }
          }
          throw error2;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
    AWSSDKSigV4Signer = AwsSdkSigV4Signer;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var import_protocol_http11, AwsSdkSigV4ASigner;
var init_AwsSdkSigV4ASigner = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js"() {
    import_protocol_http11 = __toESM(require_dist_cjs3());
    init_utils();
    init_AwsSdkSigV4Signer();
    AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http11.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName
        });
        return signedRequest;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js
var getArrayForCommaSeparatedString;
var init_getArrayForCommaSeparatedString = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js"() {
    getArrayForCommaSeparatedString = (str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js
var getBearerTokenEnvKey;
var init_getBearerTokenEnvKey = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js"() {
    getBearerTokenEnvKey = (signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js
var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY, NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY, NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
var init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js"() {
    init_getArrayForCommaSeparatedString();
    init_getBearerTokenEnvKey();
    NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
    NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
    NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
      environmentVariableSelector: (env, options) => {
        if (options?.signingName) {
          const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
          if (bearerTokenKey in env)
            return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env))
          return void 0;
        return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
      },
      configFileSelector: (profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
          return void 0;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
      },
      default: []
    };
  }
});

// node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "node_modules/@smithy/property-provider/dist-cjs/index.js"(exports) {
    "use strict";
    var ProviderError2 = class _ProviderError extends Error {
      name = "ProviderError";
      tryNextLink;
      constructor(message, options = true) {
        let logger2;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger2 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger2 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger2?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error2, options = true) {
        return Object.assign(new this(error2.message, options), error2);
      }
    };
    var CredentialsProviderError = class _CredentialsProviderError extends ProviderError2 {
      name = "CredentialsProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
    var TokenProviderError = class _TokenProviderError extends ProviderError2 {
      name = "TokenProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
    var chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError2("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
    var fromStatic = (staticValue) => () => Promise.resolve(staticValue);
    var memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
    exports.CredentialsProviderError = CredentialsProviderError;
    exports.ProviderError = ProviderError2;
    exports.TokenProviderError = TokenProviderError;
    exports.chain = chain;
    exports.fromStatic = fromStatic;
    exports.memoize = memoize;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var import_property_provider, resolveAwsSdkSigV4AConfig, NODE_SIGV4A_CONFIG_OPTIONS;
var init_resolveAwsSdkSigV4AConfig = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    init_dist_es();
    import_property_provider = __toESM(require_dist_cjs20());
    resolveAwsSdkSigV4AConfig = (config) => {
      config.sigv4aSigningRegionSet = normalizeProvider(config.sigv4aSigningRegionSet);
      return config;
    };
    NODE_SIGV4A_CONFIG_OPTIONS = {
      environmentVariableSelector(env) {
        if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
          return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
        }
        throw new import_property_provider.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: true
        });
      },
      configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
          return (profile.sigv4a_signing_region_set ?? "").split(",").map((_) => _.trim());
        }
        throw new import_property_provider.ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: true
        });
      },
      default: void 0
    };
  }
});

// node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "node_modules/@smithy/signature-v4/dist-cjs/index.js"(exports) {
    "use strict";
    var utilHexEncoding = require_dist_cjs13();
    var utilUtf8 = require_dist_cjs7();
    var isArrayBuffer = require_dist_cjs5();
    var protocolHttp = require_dist_cjs3();
    var utilMiddleware = require_dist_cjs2();
    var utilUriEscape = require_dist_cjs9();
    var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    var REGION_SET_PARAM = "X-Amz-Region-Set";
    var AUTH_HEADER = "authorization";
    var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    var DATE_HEADER = "date";
    var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    var SHA256_HEADER = "x-amz-content-sha256";
    var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    var HOST_HEADER = "host";
    var ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    var PROXY_HEADER_PATTERN = /^proxy-/;
    var SEC_HEADER_PATTERN = /^sec-/;
    var UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
    var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    var ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
    var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    var MAX_CACHE_SIZE = 50;
    var KEY_TYPE_IDENTIFIER = "aws4_request";
    var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
    var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${utilHexEncoding.toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    };
    var clearCredentialCache = () => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    };
    var hmac = (ctor, secret, data2) => {
      const hash = new ctor(secret);
      hash.update(utilUtf8.toUint8Array(data2));
      return hash.digest();
    };
    var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    };
    var getPayloadHash = async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer.isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(utilUtf8.toUint8Array(body));
        return utilHexEncoding.toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    };
    var HeaderFormatter = class {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = utilUtf8.fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = utilUtf8.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(utilHexEncoding.fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var Int64 = class _Int64 {
      bytes;
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
          bytes[i] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(utilHexEncoding.toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    function negate(bytes) {
      for (let i = 0; i < 8; i++) {
        bytes[i] ^= 255;
      }
      for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
          break;
      }
    }
    var hasHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    };
    var moveHeadersToQuery = (request, options = {}) => {
      const { headers, query = {} } = protocolHttp.HttpRequest.clone(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query
      };
    };
    var prepareRequest = (request) => {
      request = protocolHttp.HttpRequest.clone(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    };
    var getCanonicalQuery = ({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = utilUriEscape.escapeUri(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${utilUriEscape.escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${utilUriEscape.escapeUri(value2)}`]), []).sort().join("&");
        }
      }
      return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    };
    var iso8601 = (time2) => toDate(time2).toISOString().replace(/\.\d{3}Z$/, "Z");
    var toDate = (time2) => {
      if (typeof time2 === "number") {
        return new Date(time2 * 1e3);
      }
      if (typeof time2 === "string") {
        if (Number(time2)) {
          return new Date(Number(time2) * 1e3);
        }
        return new Date(time2);
      }
      return time2;
    };
    var SignatureV4Base = class {
      service;
      regionProvider;
      credentialProvider;
      sha256;
      uriEscapePath;
      applyChecksum;
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = utilMiddleware.normalizeProvider(region);
        this.credentialProvider = utilMiddleware.normalizeProvider(credentials);
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update(utilUtf8.toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${utilHexEncoding.toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = utilUriEscape.escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
      formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      }
      getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
      }
    };
    var SignatureV42 = class extends SignatureV4Base {
      headerFormatter = new HeaderFormatter();
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath
        });
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload: payload2 }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload2 }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = utilHexEncoding.toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(utilUtf8.toUint8Array(stringToSign));
        return utilHexEncoding.toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
        const hash = new this.sha256(await keyPromise);
        hash.update(utilUtf8.toUint8Array(stringToSign));
        return utilHexEncoding.toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
    };
    var signatureV4aContainer = {
      SignatureV4a: null
    };
    exports.ALGORITHM_IDENTIFIER = ALGORITHM_IDENTIFIER;
    exports.ALGORITHM_IDENTIFIER_V4A = ALGORITHM_IDENTIFIER_V4A;
    exports.ALGORITHM_QUERY_PARAM = ALGORITHM_QUERY_PARAM;
    exports.ALWAYS_UNSIGNABLE_HEADERS = ALWAYS_UNSIGNABLE_HEADERS;
    exports.AMZ_DATE_HEADER = AMZ_DATE_HEADER;
    exports.AMZ_DATE_QUERY_PARAM = AMZ_DATE_QUERY_PARAM;
    exports.AUTH_HEADER = AUTH_HEADER;
    exports.CREDENTIAL_QUERY_PARAM = CREDENTIAL_QUERY_PARAM;
    exports.DATE_HEADER = DATE_HEADER;
    exports.EVENT_ALGORITHM_IDENTIFIER = EVENT_ALGORITHM_IDENTIFIER;
    exports.EXPIRES_QUERY_PARAM = EXPIRES_QUERY_PARAM;
    exports.GENERATED_HEADERS = GENERATED_HEADERS;
    exports.HOST_HEADER = HOST_HEADER;
    exports.KEY_TYPE_IDENTIFIER = KEY_TYPE_IDENTIFIER;
    exports.MAX_CACHE_SIZE = MAX_CACHE_SIZE;
    exports.MAX_PRESIGNED_TTL = MAX_PRESIGNED_TTL;
    exports.PROXY_HEADER_PATTERN = PROXY_HEADER_PATTERN;
    exports.REGION_SET_PARAM = REGION_SET_PARAM;
    exports.SEC_HEADER_PATTERN = SEC_HEADER_PATTERN;
    exports.SHA256_HEADER = SHA256_HEADER;
    exports.SIGNATURE_HEADER = SIGNATURE_HEADER;
    exports.SIGNATURE_QUERY_PARAM = SIGNATURE_QUERY_PARAM;
    exports.SIGNED_HEADERS_QUERY_PARAM = SIGNED_HEADERS_QUERY_PARAM;
    exports.SignatureV4 = SignatureV42;
    exports.SignatureV4Base = SignatureV4Base;
    exports.TOKEN_HEADER = TOKEN_HEADER;
    exports.TOKEN_QUERY_PARAM = TOKEN_QUERY_PARAM;
    exports.UNSIGNABLE_PATTERNS = UNSIGNABLE_PATTERNS;
    exports.UNSIGNED_PAYLOAD = UNSIGNED_PAYLOAD;
    exports.clearCredentialCache = clearCredentialCache;
    exports.createScope = createScope;
    exports.getCanonicalHeaders = getCanonicalHeaders;
    exports.getCanonicalQuery = getCanonicalQuery;
    exports.getPayloadHash = getPayloadHash;
    exports.getSigningKey = getSigningKey;
    exports.hasHeader = hasHeader;
    exports.moveHeadersToQuery = moveHeadersToQuery;
    exports.prepareRequest = prepareRequest;
    exports.signatureV4aContainer = signatureV4aContainer;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider(credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      };
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
var import_signature_v4, resolveAwsSdkSigV4Config, resolveAWSSDKSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_client();
    init_dist_es();
    import_signature_v4 = __toESM(require_dist_cjs21());
    resolveAwsSdkSigV4Config = (config) => {
      let inputCredentials = config.credentials;
      let isUserSupplied = !!config.credentials;
      let resolvedCredentials = void 0;
      Object.defineProperty(config, "credentials", {
        set(credentials) {
          if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
            isUserSupplied = true;
          }
          inputCredentials = credentials;
          const memoizedProvider = normalizeCredentialProvider(config, {
            credentials: inputCredentials,
            credentialDefaultProvider: config.credentialDefaultProvider
          });
          const boundProvider = bindCallerConfig(config, memoizedProvider);
          if (isUserSupplied && !boundProvider.attributed) {
            const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
            resolvedCredentials = async (options) => {
              const creds = await boundProvider(options);
              const attributedCreds = creds;
              if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
                return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
              }
              return attributedCreds;
            };
            resolvedCredentials.memoized = boundProvider.memoized;
            resolvedCredentials.configBound = boundProvider.configBound;
            resolvedCredentials.attributed = true;
          } else {
            resolvedCredentials = boundProvider;
          }
        },
        get() {
          return resolvedCredentials;
        },
        enumerable: true,
        configurable: true
      });
      config.credentials = inputCredentials;
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider(config.signer);
      } else if (config.regionInfoProvider) {
        signer = () => normalizeProvider(config.region)().then(async (region) => [
          await config.regionInfoProvider(region, {
            useFipsEndpoint: await config.useFipsEndpoint(),
            useDualstackEndpoint: await config.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        });
      } else {
        signer = async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config.signingName || config.defaultSigningName,
            signingRegion: await normalizeProvider(config.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        };
      }
      const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer
      });
      return resolvedConfig;
    };
    resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_AwsSdkSigV4ASigner();
    init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS();
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
    init_getBearerTokenEnvKey();
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/cbor-types.js
function alloc(size) {
  return typeof Buffer !== "undefined" ? Buffer.alloc(size) : new Uint8Array(size);
}
function tag(data2) {
  data2[tagSymbol] = true;
  return data2;
}
var majorUint64, majorNegativeInt64, majorUnstructuredByteString, majorUtf8String, majorList, majorMap, majorTag, majorSpecial, specialFalse, specialTrue, specialNull, specialUndefined, extendedOneByte, extendedFloat16, extendedFloat32, extendedFloat64, minorIndefinite, tagSymbol;
var init_cbor_types = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/cbor-types.js"() {
    majorUint64 = 0;
    majorNegativeInt64 = 1;
    majorUnstructuredByteString = 2;
    majorUtf8String = 3;
    majorList = 4;
    majorMap = 5;
    majorTag = 6;
    majorSpecial = 7;
    specialFalse = 20;
    specialTrue = 21;
    specialNull = 22;
    specialUndefined = 23;
    extendedOneByte = 24;
    extendedFloat16 = 25;
    extendedFloat32 = 26;
    extendedFloat64 = 27;
    minorIndefinite = 31;
    tagSymbol = /* @__PURE__ */ Symbol("@smithy/core/cbor::tagSymbol");
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/cbor-decode.js
function setPayload(bytes) {
  payload = bytes;
  dataView = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
}
function decode(at, to) {
  if (at >= to) {
    throw new Error("unexpected end of (decode) payload.");
  }
  const major = (payload[at] & 224) >> 5;
  const minor = payload[at] & 31;
  switch (major) {
    case majorUint64:
    case majorNegativeInt64:
    case majorTag:
      let unsignedInt;
      let offset;
      if (minor < 24) {
        unsignedInt = minor;
        offset = 1;
      } else {
        switch (minor) {
          case extendedOneByte:
          case extendedFloat16:
          case extendedFloat32:
          case extendedFloat64:
            const countLength = minorValueToArgumentLength[minor];
            const countOffset = countLength + 1;
            offset = countOffset;
            if (to - at < countOffset) {
              throw new Error(`countLength ${countLength} greater than remaining buf len.`);
            }
            const countIndex = at + 1;
            if (countLength === 1) {
              unsignedInt = payload[countIndex];
            } else if (countLength === 2) {
              unsignedInt = dataView.getUint16(countIndex);
            } else if (countLength === 4) {
              unsignedInt = dataView.getUint32(countIndex);
            } else {
              unsignedInt = dataView.getBigUint64(countIndex);
            }
            break;
          default:
            throw new Error(`unexpected minor value ${minor}.`);
        }
      }
      if (major === majorUint64) {
        _offset = offset;
        return castBigInt(unsignedInt);
      } else if (major === majorNegativeInt64) {
        let negativeInt;
        if (typeof unsignedInt === "bigint") {
          negativeInt = BigInt(-1) - unsignedInt;
        } else {
          negativeInt = -1 - unsignedInt;
        }
        _offset = offset;
        return castBigInt(negativeInt);
      } else {
        if (minor === 2 || minor === 3) {
          const length = decodeCount(at + offset, to);
          let b = BigInt(0);
          const start = at + offset + _offset;
          for (let i = start; i < start + length; ++i) {
            b = b << BigInt(8) | BigInt(payload[i]);
          }
          _offset = offset + _offset + length;
          return minor === 3 ? -b - BigInt(1) : b;
        } else if (minor === 4) {
          const decimalFraction = decode(at + offset, to);
          const [exponent, mantissa] = decimalFraction;
          const normalizer = mantissa < 0 ? -1 : 1;
          const mantissaStr = "0".repeat(Math.abs(exponent) + 1) + String(BigInt(normalizer) * BigInt(mantissa));
          let numericString;
          const sign = mantissa < 0 ? "-" : "";
          numericString = exponent === 0 ? mantissaStr : mantissaStr.slice(0, mantissaStr.length + exponent) + "." + mantissaStr.slice(exponent);
          numericString = numericString.replace(/^0+/g, "");
          if (numericString === "") {
            numericString = "0";
          }
          if (numericString[0] === ".") {
            numericString = "0" + numericString;
          }
          numericString = sign + numericString;
          _offset = offset + _offset;
          return nv(numericString);
        } else {
          const value = decode(at + offset, to);
          const valueOffset = _offset;
          _offset = offset + valueOffset;
          return tag({ tag: castBigInt(unsignedInt), value });
        }
      }
    case majorUtf8String:
    case majorMap:
    case majorList:
    case majorUnstructuredByteString:
      if (minor === minorIndefinite) {
        switch (major) {
          case majorUtf8String:
            return decodeUtf8StringIndefinite(at, to);
          case majorMap:
            return decodeMapIndefinite(at, to);
          case majorList:
            return decodeListIndefinite(at, to);
          case majorUnstructuredByteString:
            return decodeUnstructuredByteStringIndefinite(at, to);
        }
      } else {
        switch (major) {
          case majorUtf8String:
            return decodeUtf8String(at, to);
          case majorMap:
            return decodeMap(at, to);
          case majorList:
            return decodeList(at, to);
          case majorUnstructuredByteString:
            return decodeUnstructuredByteString(at, to);
        }
      }
    default:
      return decodeSpecial(at, to);
  }
}
function bytesToUtf8(bytes, at, to) {
  if (USE_BUFFER && bytes.constructor?.name === "Buffer") {
    return bytes.toString("utf-8", at, to);
  }
  if (textDecoder) {
    return textDecoder.decode(bytes.subarray(at, to));
  }
  return (0, import_util_utf84.toUtf8)(bytes.subarray(at, to));
}
function demote(bigInteger) {
  const num = Number(bigInteger);
  if (num < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < num) {
    console.warn(new Error(`@smithy/core/cbor - truncating BigInt(${bigInteger}) to ${num} with loss of precision.`));
  }
  return num;
}
function bytesToFloat16(a, b) {
  const sign = a >> 7;
  const exponent = (a & 124) >> 2;
  const fraction = (a & 3) << 8 | b;
  const scalar = sign === 0 ? 1 : -1;
  let exponentComponent;
  let summation;
  if (exponent === 0) {
    if (fraction === 0) {
      return 0;
    } else {
      exponentComponent = Math.pow(2, 1 - 15);
      summation = 0;
    }
  } else if (exponent === 31) {
    if (fraction === 0) {
      return scalar * Infinity;
    } else {
      return NaN;
    }
  } else {
    exponentComponent = Math.pow(2, exponent - 15);
    summation = 1;
  }
  summation += fraction / 1024;
  return scalar * (exponentComponent * summation);
}
function decodeCount(at, to) {
  const minor = payload[at] & 31;
  if (minor < 24) {
    _offset = 1;
    return minor;
  }
  if (minor === extendedOneByte || minor === extendedFloat16 || minor === extendedFloat32 || minor === extendedFloat64) {
    const countLength = minorValueToArgumentLength[minor];
    _offset = countLength + 1;
    if (to - at < _offset) {
      throw new Error(`countLength ${countLength} greater than remaining buf len.`);
    }
    const countIndex = at + 1;
    if (countLength === 1) {
      return payload[countIndex];
    } else if (countLength === 2) {
      return dataView.getUint16(countIndex);
    } else if (countLength === 4) {
      return dataView.getUint32(countIndex);
    }
    return demote(dataView.getBigUint64(countIndex));
  }
  throw new Error(`unexpected minor value ${minor}.`);
}
function decodeUtf8String(at, to) {
  const length = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  if (to - at < length) {
    throw new Error(`string len ${length} greater than remaining buf len.`);
  }
  const value = bytesToUtf8(payload, at, at + length);
  _offset = offset + length;
  return value;
}
function decodeUtf8StringIndefinite(at, to) {
  at += 1;
  const vector = [];
  for (const base = at; at < to; ) {
    if (payload[at] === 255) {
      const data2 = alloc(vector.length);
      data2.set(vector, 0);
      _offset = at - base + 2;
      return bytesToUtf8(data2, 0, data2.length);
    }
    const major = (payload[at] & 224) >> 5;
    const minor = payload[at] & 31;
    if (major !== majorUtf8String) {
      throw new Error(`unexpected major type ${major} in indefinite string.`);
    }
    if (minor === minorIndefinite) {
      throw new Error("nested indefinite string.");
    }
    const bytes = decodeUnstructuredByteString(at, to);
    const length = _offset;
    at += length;
    for (let i = 0; i < bytes.length; ++i) {
      vector.push(bytes[i]);
    }
  }
  throw new Error("expected break marker.");
}
function decodeUnstructuredByteString(at, to) {
  const length = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  if (to - at < length) {
    throw new Error(`unstructured byte string len ${length} greater than remaining buf len.`);
  }
  const value = payload.subarray(at, at + length);
  _offset = offset + length;
  return value;
}
function decodeUnstructuredByteStringIndefinite(at, to) {
  at += 1;
  const vector = [];
  for (const base = at; at < to; ) {
    if (payload[at] === 255) {
      const data2 = alloc(vector.length);
      data2.set(vector, 0);
      _offset = at - base + 2;
      return data2;
    }
    const major = (payload[at] & 224) >> 5;
    const minor = payload[at] & 31;
    if (major !== majorUnstructuredByteString) {
      throw new Error(`unexpected major type ${major} in indefinite string.`);
    }
    if (minor === minorIndefinite) {
      throw new Error("nested indefinite string.");
    }
    const bytes = decodeUnstructuredByteString(at, to);
    const length = _offset;
    at += length;
    for (let i = 0; i < bytes.length; ++i) {
      vector.push(bytes[i]);
    }
  }
  throw new Error("expected break marker.");
}
function decodeList(at, to) {
  const listDataLength = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  const base = at;
  const list2 = Array(listDataLength);
  for (let i = 0; i < listDataLength; ++i) {
    const item = decode(at, to);
    const itemOffset = _offset;
    list2[i] = item;
    at += itemOffset;
  }
  _offset = offset + (at - base);
  return list2;
}
function decodeListIndefinite(at, to) {
  at += 1;
  const list2 = [];
  for (const base = at; at < to; ) {
    if (payload[at] === 255) {
      _offset = at - base + 2;
      return list2;
    }
    const item = decode(at, to);
    const n = _offset;
    at += n;
    list2.push(item);
  }
  throw new Error("expected break marker.");
}
function decodeMap(at, to) {
  const mapDataLength = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  const base = at;
  const map2 = {};
  for (let i = 0; i < mapDataLength; ++i) {
    if (at >= to) {
      throw new Error("unexpected end of map payload.");
    }
    const major = (payload[at] & 224) >> 5;
    if (major !== majorUtf8String) {
      throw new Error(`unexpected major type ${major} for map key at index ${at}.`);
    }
    const key = decode(at, to);
    at += _offset;
    const value = decode(at, to);
    at += _offset;
    map2[key] = value;
  }
  _offset = offset + (at - base);
  return map2;
}
function decodeMapIndefinite(at, to) {
  at += 1;
  const base = at;
  const map2 = {};
  for (; at < to; ) {
    if (at >= to) {
      throw new Error("unexpected end of map payload.");
    }
    if (payload[at] === 255) {
      _offset = at - base + 2;
      return map2;
    }
    const major = (payload[at] & 224) >> 5;
    if (major !== majorUtf8String) {
      throw new Error(`unexpected major type ${major} for map key.`);
    }
    const key = decode(at, to);
    at += _offset;
    const value = decode(at, to);
    at += _offset;
    map2[key] = value;
  }
  throw new Error("expected break marker.");
}
function decodeSpecial(at, to) {
  const minor = payload[at] & 31;
  switch (minor) {
    case specialTrue:
    case specialFalse:
      _offset = 1;
      return minor === specialTrue;
    case specialNull:
      _offset = 1;
      return null;
    case specialUndefined:
      _offset = 1;
      return null;
    case extendedFloat16:
      if (to - at < 3) {
        throw new Error("incomplete float16 at end of buf.");
      }
      _offset = 3;
      return bytesToFloat16(payload[at + 1], payload[at + 2]);
    case extendedFloat32:
      if (to - at < 5) {
        throw new Error("incomplete float32 at end of buf.");
      }
      _offset = 5;
      return dataView.getFloat32(at + 1);
    case extendedFloat64:
      if (to - at < 9) {
        throw new Error("incomplete float64 at end of buf.");
      }
      _offset = 9;
      return dataView.getFloat64(at + 1);
    default:
      throw new Error(`unexpected minor value ${minor}.`);
  }
}
function castBigInt(bigInt) {
  if (typeof bigInt === "number") {
    return bigInt;
  }
  const num = Number(bigInt);
  if (Number.MIN_SAFE_INTEGER <= num && num <= Number.MAX_SAFE_INTEGER) {
    return num;
  }
  return bigInt;
}
var import_util_utf84, USE_TEXT_DECODER, USE_BUFFER, payload, dataView, textDecoder, _offset, minorValueToArgumentLength;
var init_cbor_decode = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/cbor-decode.js"() {
    init_serde();
    import_util_utf84 = __toESM(require_dist_cjs7());
    init_cbor_types();
    USE_TEXT_DECODER = typeof TextDecoder !== "undefined";
    USE_BUFFER = typeof Buffer !== "undefined";
    payload = alloc(0);
    dataView = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    textDecoder = USE_TEXT_DECODER ? new TextDecoder() : null;
    _offset = 0;
    minorValueToArgumentLength = {
      [extendedOneByte]: 1,
      [extendedFloat16]: 2,
      [extendedFloat32]: 4,
      [extendedFloat64]: 8
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/cbor-encode.js
function ensureSpace(bytes) {
  const remaining = data.byteLength - cursor;
  if (remaining < bytes) {
    if (cursor < 16e6) {
      resize(Math.max(data.byteLength * 4, data.byteLength + bytes));
    } else {
      resize(data.byteLength + bytes + 16e6);
    }
  }
}
function toUint8Array() {
  const out = alloc(cursor);
  out.set(data.subarray(0, cursor), 0);
  cursor = 0;
  return out;
}
function resize(size) {
  const old = data;
  data = alloc(size);
  if (old) {
    if (old.copy) {
      old.copy(data, 0, 0, old.byteLength);
    } else {
      data.set(old, 0);
    }
  }
  dataView2 = new DataView(data.buffer, data.byteOffset, data.byteLength);
}
function encodeHeader(major, value) {
  if (value < 24) {
    data[cursor++] = major << 5 | value;
  } else if (value < 1 << 8) {
    data[cursor++] = major << 5 | 24;
    data[cursor++] = value;
  } else if (value < 1 << 16) {
    data[cursor++] = major << 5 | extendedFloat16;
    dataView2.setUint16(cursor, value);
    cursor += 2;
  } else if (value < 2 ** 32) {
    data[cursor++] = major << 5 | extendedFloat32;
    dataView2.setUint32(cursor, value);
    cursor += 4;
  } else {
    data[cursor++] = major << 5 | extendedFloat64;
    dataView2.setBigUint64(cursor, typeof value === "bigint" ? value : BigInt(value));
    cursor += 8;
  }
}
function encode(_input) {
  const encodeStack = [_input];
  while (encodeStack.length) {
    const input = encodeStack.pop();
    ensureSpace(typeof input === "string" ? input.length * 4 : 64);
    if (typeof input === "string") {
      if (USE_BUFFER2) {
        encodeHeader(majorUtf8String, Buffer.byteLength(input));
        cursor += data.write(input, cursor);
      } else {
        const bytes = (0, import_util_utf85.fromUtf8)(input);
        encodeHeader(majorUtf8String, bytes.byteLength);
        data.set(bytes, cursor);
        cursor += bytes.byteLength;
      }
      continue;
    } else if (typeof input === "number") {
      if (Number.isInteger(input)) {
        const nonNegative = input >= 0;
        const major = nonNegative ? majorUint64 : majorNegativeInt64;
        const value = nonNegative ? input : -input - 1;
        if (value < 24) {
          data[cursor++] = major << 5 | value;
        } else if (value < 256) {
          data[cursor++] = major << 5 | 24;
          data[cursor++] = value;
        } else if (value < 65536) {
          data[cursor++] = major << 5 | extendedFloat16;
          data[cursor++] = value >> 8;
          data[cursor++] = value;
        } else if (value < 4294967296) {
          data[cursor++] = major << 5 | extendedFloat32;
          dataView2.setUint32(cursor, value);
          cursor += 4;
        } else {
          data[cursor++] = major << 5 | extendedFloat64;
          dataView2.setBigUint64(cursor, BigInt(value));
          cursor += 8;
        }
        continue;
      }
      data[cursor++] = majorSpecial << 5 | extendedFloat64;
      dataView2.setFloat64(cursor, input);
      cursor += 8;
      continue;
    } else if (typeof input === "bigint") {
      const nonNegative = input >= 0;
      const major = nonNegative ? majorUint64 : majorNegativeInt64;
      const value = nonNegative ? input : -input - BigInt(1);
      const n = Number(value);
      if (n < 24) {
        data[cursor++] = major << 5 | n;
      } else if (n < 256) {
        data[cursor++] = major << 5 | 24;
        data[cursor++] = n;
      } else if (n < 65536) {
        data[cursor++] = major << 5 | extendedFloat16;
        data[cursor++] = n >> 8;
        data[cursor++] = n & 255;
      } else if (n < 4294967296) {
        data[cursor++] = major << 5 | extendedFloat32;
        dataView2.setUint32(cursor, n);
        cursor += 4;
      } else if (value < BigInt("18446744073709551616")) {
        data[cursor++] = major << 5 | extendedFloat64;
        dataView2.setBigUint64(cursor, value);
        cursor += 8;
      } else {
        const binaryBigInt = value.toString(2);
        const bigIntBytes = new Uint8Array(Math.ceil(binaryBigInt.length / 8));
        let b = value;
        let i = 0;
        while (bigIntBytes.byteLength - ++i >= 0) {
          bigIntBytes[bigIntBytes.byteLength - i] = Number(b & BigInt(255));
          b >>= BigInt(8);
        }
        ensureSpace(bigIntBytes.byteLength * 2);
        data[cursor++] = nonNegative ? 194 : 195;
        if (USE_BUFFER2) {
          encodeHeader(majorUnstructuredByteString, Buffer.byteLength(bigIntBytes));
        } else {
          encodeHeader(majorUnstructuredByteString, bigIntBytes.byteLength);
        }
        data.set(bigIntBytes, cursor);
        cursor += bigIntBytes.byteLength;
      }
      continue;
    } else if (input === null) {
      data[cursor++] = majorSpecial << 5 | specialNull;
      continue;
    } else if (typeof input === "boolean") {
      data[cursor++] = majorSpecial << 5 | (input ? specialTrue : specialFalse);
      continue;
    } else if (typeof input === "undefined") {
      throw new Error("@smithy/core/cbor: client may not serialize undefined value.");
    } else if (Array.isArray(input)) {
      for (let i = input.length - 1; i >= 0; --i) {
        encodeStack.push(input[i]);
      }
      encodeHeader(majorList, input.length);
      continue;
    } else if (typeof input.byteLength === "number") {
      ensureSpace(input.length * 2);
      encodeHeader(majorUnstructuredByteString, input.length);
      data.set(input, cursor);
      cursor += input.byteLength;
      continue;
    } else if (typeof input === "object") {
      if (input instanceof NumericValue) {
        const decimalIndex = input.string.indexOf(".");
        const exponent = decimalIndex === -1 ? 0 : decimalIndex - input.string.length + 1;
        const mantissa = BigInt(input.string.replace(".", ""));
        data[cursor++] = 196;
        encodeStack.push(mantissa);
        encodeStack.push(exponent);
        encodeHeader(majorList, 2);
        continue;
      }
      if (input[tagSymbol]) {
        if ("tag" in input && "value" in input) {
          encodeStack.push(input.value);
          encodeHeader(majorTag, input.tag);
          continue;
        } else {
          throw new Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(input));
        }
      }
      const keys = Object.keys(input);
      for (let i = keys.length - 1; i >= 0; --i) {
        const key = keys[i];
        encodeStack.push(input[key]);
        encodeStack.push(key);
      }
      encodeHeader(majorMap, keys.length);
      continue;
    }
    throw new Error(`data type ${input?.constructor?.name ?? typeof input} not compatible for encoding.`);
  }
}
var import_util_utf85, USE_BUFFER2, initialSize, data, dataView2, cursor;
var init_cbor_encode = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/cbor-encode.js"() {
    init_serde();
    import_util_utf85 = __toESM(require_dist_cjs7());
    init_cbor_types();
    USE_BUFFER2 = typeof Buffer !== "undefined";
    initialSize = 2048;
    data = alloc(initialSize);
    dataView2 = new DataView(data.buffer, data.byteOffset, data.byteLength);
    cursor = 0;
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/cbor.js
var cbor;
var init_cbor = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/cbor.js"() {
    init_cbor_decode();
    init_cbor_encode();
    cbor = {
      deserialize(payload2) {
        setPayload(payload2);
        return decode(0, payload2.length);
      },
      serialize(input) {
        try {
          encode(input);
          return toUint8Array();
        } catch (e) {
          toUint8Array();
          throw e;
        }
      },
      resizeEncodingBuffer(size) {
        resize(size);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/parseCborBody.js
var dateToTag, loadSmithyRpcV2CborErrorCode;
var init_parseCborBody = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/parseCborBody.js"() {
    init_cbor_types();
    dateToTag = (date2) => {
      return tag({
        tag: 1,
        value: date2.getTime() / 1e3
      });
    };
    loadSmithyRpcV2CborErrorCode = (output, data2) => {
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      if (data2["__type"] !== void 0) {
        return sanitizeErrorCode(data2["__type"]);
      }
      const codeKey = Object.keys(data2).find((key) => key.toLowerCase() === "code");
      if (codeKey && data2[codeKey] !== void 0) {
        return sanitizeErrorCode(data2[codeKey]);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/CborCodec.js
var import_util_base643, CborCodec, CborShapeSerializer, CborShapeDeserializer;
var init_CborCodec = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/CborCodec.js"() {
    init_protocols();
    init_schema();
    init_serde();
    init_serde();
    import_util_base643 = __toESM(require_dist_cjs8());
    init_cbor();
    init_parseCborBody();
    CborCodec = class extends SerdeContext {
      createSerializer() {
        const serializer = new CborShapeSerializer();
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new CborShapeDeserializer();
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
    CborShapeSerializer = class extends SerdeContext {
      value;
      write(schema, value) {
        this.value = this.serialize(schema, value);
      }
      serialize(schema, source) {
        const ns = NormalizedSchema.of(schema);
        if (source == null) {
          if (ns.isIdempotencyToken()) {
            return (0, import_uuid.v4)();
          }
          return source;
        }
        if (ns.isBlobSchema()) {
          if (typeof source === "string") {
            return (this.serdeContext?.base64Decoder ?? import_util_base643.fromBase64)(source);
          }
          return source;
        }
        if (ns.isTimestampSchema()) {
          if (typeof source === "number" || typeof source === "bigint") {
            return dateToTag(new Date(Number(source) / 1e3 | 0));
          }
          return dateToTag(source);
        }
        if (typeof source === "function" || typeof source === "object") {
          const sourceObject = source;
          if (ns.isListSchema() && Array.isArray(sourceObject)) {
            const sparse = !!ns.getMergedTraits().sparse;
            const newArray = [];
            let i = 0;
            for (const item of sourceObject) {
              const value = this.serialize(ns.getValueSchema(), item);
              if (value != null || sparse) {
                newArray[i++] = value;
              }
            }
            return newArray;
          }
          if (sourceObject instanceof Date) {
            return dateToTag(sourceObject);
          }
          const newObject = {};
          if (ns.isMapSchema()) {
            const sparse = !!ns.getMergedTraits().sparse;
            for (const key of Object.keys(sourceObject)) {
              const value = this.serialize(ns.getValueSchema(), sourceObject[key]);
              if (value != null || sparse) {
                newObject[key] = value;
              }
            }
          } else if (ns.isStructSchema()) {
            for (const [key, memberSchema] of ns.structIterator()) {
              const value = this.serialize(memberSchema, sourceObject[key]);
              if (value != null) {
                newObject[key] = value;
              }
            }
            const isUnion = ns.isUnionSchema();
            if (isUnion && Array.isArray(sourceObject.$unknown)) {
              const [k, v] = sourceObject.$unknown;
              newObject[k] = v;
            } else if (typeof sourceObject.__type === "string") {
              for (const [k, v] of Object.entries(sourceObject)) {
                if (!(k in newObject)) {
                  newObject[k] = this.serialize(15, v);
                }
              }
            }
          } else if (ns.isDocumentSchema()) {
            for (const key of Object.keys(sourceObject)) {
              newObject[key] = this.serialize(ns.getValueSchema(), sourceObject[key]);
            }
          } else if (ns.isBigDecimalSchema()) {
            return sourceObject;
          }
          return newObject;
        }
        return source;
      }
      flush() {
        const buffer = cbor.serialize(this.value);
        this.value = void 0;
        return buffer;
      }
    };
    CborShapeDeserializer = class extends SerdeContext {
      read(schema, bytes) {
        const data2 = cbor.deserialize(bytes);
        return this.readValue(schema, data2);
      }
      readValue(_schema, value) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isTimestampSchema()) {
          if (typeof value === "number") {
            return _parseEpochTimestamp(value);
          }
          if (typeof value === "object") {
            if (value.tag === 1 && "value" in value) {
              return _parseEpochTimestamp(value.value);
            }
          }
        }
        if (ns.isBlobSchema()) {
          if (typeof value === "string") {
            return (this.serdeContext?.base64Decoder ?? import_util_base643.fromBase64)(value);
          }
          return value;
        }
        if (typeof value === "undefined" || typeof value === "boolean" || typeof value === "number" || typeof value === "string" || typeof value === "bigint" || typeof value === "symbol") {
          return value;
        } else if (typeof value === "object") {
          if (value === null) {
            return null;
          }
          if ("byteLength" in value) {
            return value;
          }
          if (value instanceof Date) {
            return value;
          }
          if (ns.isDocumentSchema()) {
            return value;
          }
          if (ns.isListSchema()) {
            const newArray = [];
            const memberSchema = ns.getValueSchema();
            for (const item of value) {
              const itemValue = this.readValue(memberSchema, item);
              newArray.push(itemValue);
            }
            return newArray;
          }
          const newObject = {};
          if (ns.isMapSchema()) {
            const targetSchema = ns.getValueSchema();
            for (const key of Object.keys(value)) {
              const itemValue = this.readValue(targetSchema, value[key]);
              newObject[key] = itemValue;
            }
          } else if (ns.isStructSchema()) {
            const isUnion = ns.isUnionSchema();
            let keys;
            if (isUnion) {
              keys = new Set(Object.keys(value).filter((k) => k !== "__type"));
            }
            for (const [key, memberSchema] of ns.structIterator()) {
              if (isUnion) {
                keys.delete(key);
              }
              if (value[key] != null) {
                newObject[key] = this.readValue(memberSchema, value[key]);
              }
            }
            if (isUnion && keys?.size === 1 && Object.keys(newObject).length === 0) {
              const k = keys.values().next().value;
              newObject.$unknown = [k, value[k]];
            } else if (typeof value.__type === "string") {
              for (const [k, v] of Object.entries(value)) {
                if (!(k in newObject)) {
                  newObject[k] = v;
                }
              }
            }
          } else if (value instanceof NumericValue) {
            return value;
          }
          return newObject;
        } else {
          return value;
        }
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/SmithyRpcV2CborProtocol.js
var import_util_middleware5, SmithyRpcV2CborProtocol;
var init_SmithyRpcV2CborProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/SmithyRpcV2CborProtocol.js"() {
    init_protocols();
    init_schema();
    init_schema();
    import_util_middleware5 = __toESM(require_dist_cjs2());
    init_CborCodec();
    init_parseCborBody();
    SmithyRpcV2CborProtocol = class extends RpcProtocol {
      codec = new CborCodec();
      serializer = this.codec.createSerializer();
      deserializer = this.codec.createDeserializer();
      constructor({ defaultNamespace, errorTypeRegistries }) {
        super({ defaultNamespace, errorTypeRegistries });
      }
      getShapeId() {
        return "smithy.protocols#rpcv2Cbor";
      }
      getPayloadCodec() {
        return this.codec;
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        Object.assign(request.headers, {
          "content-type": this.getDefaultContentType(),
          "smithy-protocol": "rpc-v2-cbor",
          accept: this.getDefaultContentType()
        });
        if (deref(operationSchema.input) === "unit") {
          delete request.body;
          delete request.headers["content-type"];
        } else {
          if (!request.body) {
            this.serializer.write(15, {});
            request.body = this.serializer.flush();
          }
          try {
            request.headers["content-length"] = String(request.body.byteLength);
          } catch (e) {
          }
        }
        const { service, operation: operation2 } = (0, import_util_middleware5.getSmithyContext)(context);
        const path = `/service/${service}/operation/${operation2}`;
        if (request.path.endsWith("/")) {
          request.path += path.slice(1);
        } else {
          request.path += path;
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorName = loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";
        const errorMetadata = {
          $metadata: metadata,
          $fault: response.statusCode <= 500 ? "client" : "server"
        };
        let namespace = this.options.defaultNamespace;
        if (errorName.includes("#")) {
          [namespace] = errorName.split("#");
        }
        const registry = this.compositeErrorRegistry;
        const nsRegistry = TypeRegistry.for(namespace);
        registry.copyFrom(nsRegistry);
        let errorSchema;
        try {
          errorSchema = registry.getSchema(errorName);
        } catch (e) {
          if (dataObject.Message) {
            dataObject.message = dataObject.Message;
          }
          const syntheticRegistry = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
          registry.copyFrom(syntheticRegistry);
          const baseExceptionSchema = registry.getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor2 = registry.getErrorCtor(baseExceptionSchema);
            throw Object.assign(new ErrorCtor2({ name: errorName }), errorMetadata, dataObject);
          }
          throw Object.assign(new Error(errorName), errorMetadata, dataObject);
        }
        const ns = NormalizedSchema.of(errorSchema);
        const ErrorCtor = registry.getErrorCtor(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member2] of ns.structIterator()) {
          output[name] = this.deserializer.readValue(member2, dataObject[name]);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
      getDefaultContentType() {
        return "application/cbor";
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/cbor/index.js
var init_cbor2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/cbor/index.js"() {
    init_parseCborBody();
    init_SmithyRpcV2CborProtocol();
    init_CborCodec();
  }
});

// node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "node_modules/@smithy/middleware-stack/dist-cjs/index.js"(exports) {
    "use strict";
    var getAllAliases = (name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    };
    var getMiddlewareNameWithAliases = (name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    };
    var constructStack = () => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
      const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      };
      const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      };
      const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      };
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    };
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
    exports.constructStack = constructStack;
  }
});

// node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "node_modules/@smithy/smithy-client/dist-cjs/index.js"(exports) {
    "use strict";
    var middlewareStack = require_dist_cjs22();
    var protocols = (init_protocols(), __toCommonJS(protocols_exports));
    var types = require_dist_cjs();
    var schema = (init_schema(), __toCommonJS(schema_exports));
    var serde = (init_serde(), __toCommonJS(serde_exports));
    var Client = class {
      config;
      middlewareStack = middlewareStack.constructStack();
      initConfig;
      handlers;
      constructor(config) {
        this.config = config;
        const { protocol, protocolSettings } = config;
        if (protocolSettings) {
          if (typeof protocol === "function") {
            config.protocol = new protocol(protocolSettings);
          }
        }
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
        let handler;
        if (useHandlerCache) {
          if (!this.handlers) {
            this.handlers = /* @__PURE__ */ new WeakMap();
          }
          const handlers = this.handlers;
          if (handlers.has(command.constructor)) {
            handler = handlers.get(command.constructor);
          } else {
            handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
            handlers.set(command.constructor, handler);
          }
        } else {
          delete this.handlers;
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
          handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
      }
    };
    var SENSITIVE_STRING$1 = "***SensitiveInformation***";
    function schemaLogFilter(schema$1, data2) {
      if (data2 == null) {
        return data2;
      }
      const ns = schema.NormalizedSchema.of(schema$1);
      if (ns.getMergedTraits().sensitive) {
        return SENSITIVE_STRING$1;
      }
      if (ns.isListSchema()) {
        const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
        if (isSensitive) {
          return SENSITIVE_STRING$1;
        }
      } else if (ns.isMapSchema()) {
        const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
        if (isSensitive) {
          return SENSITIVE_STRING$1;
        }
      } else if (ns.isStructSchema() && typeof data2 === "object") {
        const object = data2;
        const newObject = {};
        for (const [member2, memberNs] of ns.structIterator()) {
          if (object[member2] != null) {
            newObject[member2] = schemaLogFilter(memberNs, object[member2]);
          }
        }
        return newObject;
      }
      return data2;
    }
    var Command = class {
      middlewareStack = middlewareStack.constructStack();
      schema;
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger2 } = configuration;
        const handlerExecutionContext = {
          logger: logger2,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [types.SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
    };
    var ClassBuilder = class {
      _init = () => {
      };
      _ep = {};
      _middlewareFn = () => [];
      _commandName = "";
      _clientName = "";
      _additionalContext = {};
      _smithyContext = {};
      _inputFilterSensitiveLog = void 0;
      _outputFilterSensitiveLog = void 0;
      _serializer = null;
      _deserializer = null;
      _operationSchema;
      init(cb) {
        this._init = cb;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation2, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation: operation2,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      sc(operation2) {
        this._operationSchema = operation2;
        this._smithyContext.operationSchema = operation2;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          input;
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.input = input ?? {};
            closure._init(this);
            this.schema = closure._operationSchema;
          }
          resolveMiddleware(stack, configuration, options) {
            const op2 = closure._operationSchema;
            const input = op2?.[4] ?? op2?.input;
            const output = op2?.[5] ?? op2?.output;
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op2 ? schemaLogFilter.bind(null, input) : (_) => _),
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op2 ? schemaLogFilter.bind(null, output) : (_) => _),
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
          serialize = closure._serializer;
          deserialize = closure._deserializer;
        };
      }
    };
    var SENSITIVE_STRING = "***SensitiveInformation***";
    var createAggregatedClient = (commands, Client2, options) => {
      for (const [command, CommandCtor] of Object.entries(commands)) {
        const methodImpl = async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
      const { paginators = {}, waiters = {} } = options ?? {};
      for (const [paginatorName, paginatorFn] of Object.entries(paginators)) {
        if (Client2.prototype[paginatorName] === void 0) {
          Client2.prototype[paginatorName] = function(commandInput = {}, paginationConfiguration, ...rest) {
            return paginatorFn({
              ...paginationConfiguration,
              client: this
            }, commandInput, ...rest);
          };
        }
      }
      for (const [waiterName, waiterFn] of Object.entries(waiters)) {
        if (Client2.prototype[waiterName] === void 0) {
          Client2.prototype[waiterName] = async function(commandInput = {}, waiterConfiguration, ...rest) {
            let config = waiterConfiguration;
            if (typeof waiterConfiguration === "number") {
              config = {
                maxWaitTime: waiterConfiguration
              };
            }
            return waiterFn({
              ...config,
              client: this
            }, commandInput, ...rest);
          };
        }
      }
    };
    var ServiceException = class _ServiceException extends Error {
      $fault;
      $response;
      $retryable;
      $metadata;
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
      static isInstance(value) {
        if (!value)
          return false;
        const candidate = value;
        return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
      }
      static [Symbol.hasInstance](instance) {
        if (!instance)
          return false;
        const candidate = instance;
        if (this === _ServiceException) {
          return _ServiceException.isInstance(instance);
        }
        if (_ServiceException.isInstance(instance)) {
          if (candidate.name && this.name) {
            return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
          }
          return this.prototype.isPrototypeOf(instance);
        }
        return false;
      }
    };
    var decorateServiceException2 = (exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
        if (exception[k] == void 0 || exception[k] === "") {
          exception[k] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    };
    var throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException2(response, parsedBody);
    };
    var withBaseException = (ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    };
    var deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    var loadConfigsForDefaultMode = (mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    };
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion2 = (version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    };
    var knownAlgorithms = Object.values(types.AlgorithmId);
    var getChecksumConfiguration = (runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in types.AlgorithmId) {
        const algorithmId = types.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
        checksumAlgorithms.push({
          algorithmId: () => id,
          checksumConstructor: () => ChecksumCtor
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
          const id = algo.algorithmId();
          const ctor = algo.checksumConstructor();
          if (knownAlgorithms.includes(id)) {
            runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
          } else {
            runtimeConfig.checksumAlgorithms[id] = ctor;
          }
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    };
    var resolveChecksumRuntimeConfig = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        const id = checksumAlgorithm.algorithmId();
        if (knownAlgorithms.includes(id)) {
          runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
        }
      });
      return runtimeConfig;
    };
    var getRetryConfiguration = (runtimeConfig) => {
      return {
        setRetryStrategy(retryStrategy) {
          runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return runtimeConfig.retryStrategy;
        }
      };
    };
    var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    };
    var getDefaultExtensionConfiguration = (runtimeConfig) => {
      return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
    };
    var getDefaultClientConfiguration = getDefaultExtensionConfiguration;
    var resolveDefaultRuntimeConfig = (config) => {
      return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
    };
    var getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
    var getValueFromTextNode3 = (obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode3(obj[key]);
        }
      }
      return obj;
    };
    var isSerializableHeaderValue = (value) => {
      return value != null;
    };
    var NoOpLogger = class {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
    function map2(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    var convertMap = (target) => {
      const output = {};
      for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
      }
      return output;
    };
    var take = (source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    };
    var mapWithFilter = (target, filter, instructions) => {
      return map2(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    };
    var applyInstruction = (target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    };
    var nonNullish = (_) => _ != null;
    var pass = (_) => _;
    var serializeFloat = (value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    };
    var serializeDateTime = (date2) => date2.toISOString().replace(".000Z", "Z");
    var _json = (obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    };
    exports.collectBody = protocols.collectBody;
    exports.extendedEncodeURIComponent = protocols.extendedEncodeURIComponent;
    exports.resolvedPath = protocols.resolvedPath;
    exports.Client = Client;
    exports.Command = Command;
    exports.NoOpLogger = NoOpLogger;
    exports.SENSITIVE_STRING = SENSITIVE_STRING;
    exports.ServiceException = ServiceException;
    exports._json = _json;
    exports.convertMap = convertMap;
    exports.createAggregatedClient = createAggregatedClient;
    exports.decorateServiceException = decorateServiceException2;
    exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion2;
    exports.getArrayIfSingleItem = getArrayIfSingleItem;
    exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
    exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
    exports.getValueFromTextNode = getValueFromTextNode3;
    exports.isSerializableHeaderValue = isSerializableHeaderValue;
    exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;
    exports.map = map2;
    exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
    exports.serializeDateTime = serializeDateTime;
    exports.serializeFloat = serializeFloat;
    exports.take = take;
    exports.throwDefaultError = throwDefaultError;
    exports.withBaseException = withBaseException;
    Object.prototype.hasOwnProperty.call(serde, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: serde["__proto__"]
    });
    Object.keys(serde).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = serde[k];
    });
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
var import_smithy_client, ProtocolLib;
var init_ProtocolLib = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js"() {
    init_schema();
    import_smithy_client = __toESM(require_dist_cjs23());
    ProtocolLib = class {
      queryCompat;
      constructor(queryCompat = false) {
        this.queryCompat = queryCompat;
      }
      resolveRestContentType(defaultContentType, inputSchema) {
        const members = inputSchema.getMemberSchemas();
        const httpPayloadMember = Object.values(members).find((m) => {
          return !!m.getMergedTraits().httpPayload;
        });
        if (httpPayloadMember) {
          const mediaType = httpPayloadMember.getMergedTraits().mediaType;
          if (mediaType) {
            return mediaType;
          } else if (httpPayloadMember.isStringSchema()) {
            return "text/plain";
          } else if (httpPayloadMember.isBlobSchema()) {
            return "application/octet-stream";
          } else {
            return defaultContentType;
          }
        } else if (!inputSchema.isUnitSchema()) {
          const hasBody = Object.values(members).find((m) => {
            const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
            const noPrefixHeaders = httpPrefixHeaders === void 0;
            return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
          });
          if (hasBody) {
            return defaultContentType;
          }
        }
      }
      async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
        let namespace = defaultNamespace;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [namespace, errorName] = errorIdentifier.split("#");
        }
        const errorMetadata = {
          $metadata: metadata,
          $fault: response.statusCode < 500 ? "client" : "server"
        };
        const registry = TypeRegistry.for(namespace);
        try {
          const errorSchema = getErrorSchema?.(registry, errorName) ?? registry.getSchema(errorIdentifier);
          return { errorSchema, errorMetadata };
        } catch (e) {
          dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
          const synthetic = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
          const baseExceptionSchema = synthetic.getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
            throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
          }
          throw this.decorateServiceException(Object.assign(new Error(errorName), errorMetadata), dataObject);
        }
      }
      decorateServiceException(exception, additions = {}) {
        if (this.queryCompat) {
          const msg = exception.Message ?? additions.Message;
          const error2 = (0, import_smithy_client.decorateServiceException)(exception, additions);
          if (msg) {
            error2.message = msg;
          }
          error2.Error = {
            ...error2.Error,
            Type: error2.Error?.Type,
            Code: error2.Error?.Code,
            Message: error2.Error?.message ?? error2.Error?.Message ?? msg
          };
          const reqId = error2.$metadata.requestId;
          if (reqId) {
            error2.RequestId = reqId;
          }
          return error2;
        }
        return (0, import_smithy_client.decorateServiceException)(exception, additions);
      }
      setQueryCompatError(output, response) {
        const queryErrorHeader = response.headers?.["x-amzn-query-error"];
        if (output !== void 0 && queryErrorHeader != null) {
          const [Code, Type] = queryErrorHeader.split(";");
          const entries = Object.entries(output);
          const Error2 = {
            Code,
            Type
          };
          Object.assign(output, Error2);
          for (const [k, v] of entries) {
            Error2[k === "message" ? "Message" : k] = v;
          }
          delete Error2.__type;
          output.Error = Error2;
        }
      }
      queryCompatOutput(queryCompatErrorData, errorData) {
        if (queryCompatErrorData.Error) {
          errorData.Error = queryCompatErrorData.Error;
        }
        if (queryCompatErrorData.Type) {
          errorData.Type = queryCompatErrorData.Type;
        }
        if (queryCompatErrorData.Code) {
          errorData.Code = queryCompatErrorData.Code;
        }
      }
      findQueryCompatibleError(registry, errorName) {
        try {
          return registry.getSchema(errorName);
        } catch (e) {
          return registry.find((schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName);
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/cbor/AwsSmithyRpcV2CborProtocol.js
var AwsSmithyRpcV2CborProtocol;
var init_AwsSmithyRpcV2CborProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/cbor/AwsSmithyRpcV2CborProtocol.js"() {
    init_cbor2();
    init_schema();
    init_ProtocolLib();
    AwsSmithyRpcV2CborProtocol = class extends SmithyRpcV2CborProtocol {
      awsQueryCompatible;
      mixin;
      constructor({ defaultNamespace, awsQueryCompatible }) {
        super({ defaultNamespace });
        this.awsQueryCompatible = !!awsQueryCompatible;
        this.mixin = new ProtocolLib(this.awsQueryCompatible);
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (this.awsQueryCompatible) {
          request.headers["x-amzn-query-mode"] = "true";
        }
        return request;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        if (this.awsQueryCompatible) {
          this.mixin.setQueryCompatError(dataObject, response);
        }
        const errorName = (() => {
          const compatHeader = response.headers["x-amzn-query-error"];
          if (compatHeader && this.awsQueryCompatible) {
            return compatHeader.split(";")[0];
          }
          return loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";
        })();
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorName, this.options.defaultNamespace, response, dataObject, metadata, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member2] of ns.structIterator()) {
          if (dataObject[name] != null) {
            output[name] = this.deserializer.readValue(member2, dataObject[name]);
          }
        }
        if (this.awsQueryCompatible) {
          this.mixin.queryCompatOutput(dataObject, output);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var _toStr, _toBool, _toNum;
var init_coercing_serializers = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
    _toStr = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "number" || typeof val === "bigint") {
        const warning = new Error(`Received number ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
      }
      if (typeof val === "boolean") {
        const warning = new Error(`Received boolean ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
      }
      return val;
    };
    _toBool = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "number") {
      }
      if (typeof val === "string") {
        const lowercase = val.toLowerCase();
        if (val !== "" && lowercase !== "false" && lowercase !== "true") {
          const warning = new Error(`Received string "${val}" where a boolean was expected.`);
          warning.name = "Warning";
          console.warn(warning);
        }
        return val !== "" && lowercase !== "false";
      }
      return val;
    };
    _toNum = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "boolean") {
      }
      if (typeof val === "string") {
        const num = Number(val);
        if (num.toString() !== val) {
          const warning = new Error(`Received string "${val}" where a number was expected.`);
          warning.name = "Warning";
          console.warn(warning);
          return val;
        }
        return num;
      }
      return val;
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
var SerdeContextConfig;
var init_ConfigurableSerdeContext = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js"() {
    SerdeContextConfig = class {
      serdeContext;
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js
var UnionSerde;
var init_UnionSerde = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js"() {
    UnionSerde = class {
      from;
      to;
      keys;
      constructor(from, to) {
        this.from = from;
        this.to = to;
        this.keys = new Set(Object.keys(this.from).filter((k) => k !== "__type"));
      }
      mark(key) {
        this.keys.delete(key);
      }
      hasUnknown() {
        return this.keys.size === 1 && Object.keys(this.to).length === 0;
      }
      writeUnknown() {
        if (this.hasUnknown()) {
          const k = this.keys.values().next().value;
          const v = this.from[k];
          this.to.$unknown = [k, v];
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
function jsonReviver(key, value, context) {
  if (context?.source) {
    const numericString = context.source;
    if (typeof value === "number") {
      if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
        const isFractional = numericString.includes(".");
        if (isFractional) {
          return new NumericValue(numericString, "bigDecimal");
        } else {
          return BigInt(numericString);
        }
      }
    }
  }
  return value;
}
var init_jsonReviver = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js"() {
    init_serde();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var import_smithy_client2, import_util_utf86, collectBodyString;
var init_common = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    import_smithy_client2 = __toESM(require_dist_cjs23());
    import_util_utf86 = __toESM(require_dist_cjs7());
    collectBodyString = (streamBody, context) => (0, import_smithy_client2.collectBody)(streamBody, context).then((body) => (context?.utf8Encoder ?? import_util_utf86.toUtf8)(body));
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e) {
          if (e?.name === "SyntaxError") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
      }
      return {};
    });
    parseJsonErrorBody = async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    loadRestJsonErrorCode = (output, data2) => {
      const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data2 && typeof data2 === "object") {
        const codeKey = findKey(data2, "code");
        if (codeKey && data2[codeKey] !== void 0) {
          return sanitizeErrorCode(data2[codeKey]);
        }
        if (data2["__type"] !== void 0) {
          return sanitizeErrorCode(data2["__type"]);
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
var import_util_base644, JsonShapeDeserializer;
var init_JsonShapeDeserializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_util_base644 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    init_UnionSerde();
    init_jsonReviver();
    init_parseJsonBody();
    JsonShapeDeserializer = class extends SerdeContextConfig {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      async read(schema, data2) {
        return this._read(schema, typeof data2 === "string" ? JSON.parse(data2, jsonReviver) : await parseJsonBody(data2, this.serdeContext));
      }
      readObject(schema, data2) {
        return this._read(schema, data2);
      }
      _read(schema, value) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (isObject) {
          if (ns.isStructSchema()) {
            const record = value;
            const union = ns.isUnionSchema();
            const out = {};
            let nameMap = void 0;
            const { jsonName } = this.settings;
            if (jsonName) {
              nameMap = {};
            }
            let unionSerde;
            if (union) {
              unionSerde = new UnionSerde(record, out);
            }
            for (const [memberName, memberSchema] of ns.structIterator()) {
              let fromKey = memberName;
              if (jsonName) {
                fromKey = memberSchema.getMergedTraits().jsonName ?? fromKey;
                nameMap[fromKey] = memberName;
              }
              if (union) {
                unionSerde.mark(fromKey);
              }
              if (record[fromKey] != null) {
                out[memberName] = this._read(memberSchema, record[fromKey]);
              }
            }
            if (union) {
              unionSerde.writeUnknown();
            } else if (typeof record.__type === "string") {
              for (const [k, v] of Object.entries(record)) {
                const t = jsonName ? nameMap[k] ?? k : k;
                if (!(t in out)) {
                  out[t] = v;
                }
              }
            }
            return out;
          }
          if (Array.isArray(value) && ns.isListSchema()) {
            const listMember = ns.getValueSchema();
            const out = [];
            for (const item of value) {
              out.push(this._read(listMember, item));
            }
            return out;
          }
          if (ns.isMapSchema()) {
            const mapMember = ns.getValueSchema();
            const out = {};
            for (const [_k, _v] of Object.entries(value)) {
              out[_k] = this._read(mapMember, _v);
            }
            return out;
          }
        }
        if (ns.isBlobSchema() && typeof value === "string") {
          return (0, import_util_base644.fromBase64)(value);
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return LazyJsonString.from(value);
          }
          return value;
        }
        if (ns.isTimestampSchema() && value != null) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              return parseRfc3339DateTimeWithOffset(value);
            case 6:
              return parseRfc7231DateTime(value);
            case 7:
              return parseEpochTimestamp(value);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", value);
              return new Date(value);
          }
        }
        if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
          return BigInt(value);
        }
        if (ns.isBigDecimalSchema() && value != void 0) {
          if (value instanceof NumericValue) {
            return value;
          }
          const untyped = value;
          if (untyped.type === "bigDecimal" && "string" in untyped) {
            return new NumericValue(untyped.string, untyped.type);
          }
          return new NumericValue(String(value), "bigDecimal");
        }
        if (ns.isNumericSchema() && typeof value === "string") {
          switch (value) {
            case "Infinity":
              return Infinity;
            case "-Infinity":
              return -Infinity;
            case "NaN":
              return NaN;
          }
          return value;
        }
        if (ns.isDocumentSchema()) {
          if (isObject) {
            const out = Array.isArray(value) ? [] : {};
            for (const [k, v] of Object.entries(value)) {
              if (v instanceof NumericValue) {
                out[k] = v;
              } else {
                out[k] = this._read(ns, v);
              }
            }
            return out;
          } else {
            return structuredClone(value);
          }
        }
        return value;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js
var NUMERIC_CONTROL_CHAR, JsonReplacer;
var init_jsonReplacer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js"() {
    init_serde();
    NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
    JsonReplacer = class {
      values = /* @__PURE__ */ new Map();
      counter = 0;
      stage = 0;
      createReplacer() {
        if (this.stage === 1) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 1;
        return (key, value) => {
          if (value instanceof NumericValue) {
            const v = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
            this.values.set(`"${v}"`, value.string);
            return v;
          }
          if (typeof value === "bigint") {
            const s = value.toString();
            const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
            this.values.set(`"${v}"`, s);
            return v;
          }
          return value;
        };
      }
      replaceInJson(json) {
        if (this.stage === 0) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 2;
        if (this.counter === 0) {
          return json;
        }
        for (const [key, value] of this.values) {
          json = json.replace(key, value);
        }
        return json;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
var import_util_base645, JsonShapeSerializer;
var init_JsonShapeSerializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_util_base645 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    init_jsonReplacer();
    JsonShapeSerializer = class extends SerdeContextConfig {
      settings;
      buffer;
      useReplacer = false;
      rootSchema;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        this.rootSchema = NormalizedSchema.of(schema);
        this.buffer = this._write(this.rootSchema, value);
      }
      writeDiscriminatedDocument(schema, value) {
        this.write(schema, value);
        if (typeof this.buffer === "object") {
          this.buffer.__type = NormalizedSchema.of(schema).getName(true);
        }
      }
      flush() {
        const { rootSchema, useReplacer } = this;
        this.rootSchema = void 0;
        this.useReplacer = false;
        if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
          if (!useReplacer) {
            return JSON.stringify(this.buffer);
          }
          const replacer = new JsonReplacer();
          return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
        }
        return this.buffer;
      }
      _write(schema, value, container) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (isObject) {
          if (ns.isStructSchema()) {
            const record = value;
            const out = {};
            const { jsonName } = this.settings;
            let nameMap = void 0;
            if (jsonName) {
              nameMap = {};
            }
            for (const [memberName, memberSchema] of ns.structIterator()) {
              const serializableValue = this._write(memberSchema, record[memberName], ns);
              if (serializableValue !== void 0) {
                let targetKey = memberName;
                if (jsonName) {
                  targetKey = memberSchema.getMergedTraits().jsonName ?? memberName;
                  nameMap[memberName] = targetKey;
                }
                out[targetKey] = serializableValue;
              }
            }
            if (ns.isUnionSchema() && Object.keys(out).length === 0) {
              const { $unknown } = record;
              if (Array.isArray($unknown)) {
                const [k, v] = $unknown;
                out[k] = this._write(15, v);
              }
            } else if (typeof record.__type === "string") {
              for (const [k, v] of Object.entries(record)) {
                const targetKey = jsonName ? nameMap[k] ?? k : k;
                if (!(targetKey in out)) {
                  out[targetKey] = this._write(15, v);
                }
              }
            }
            return out;
          }
          if (Array.isArray(value) && ns.isListSchema()) {
            const listMember = ns.getValueSchema();
            const out = [];
            const sparse = !!ns.getMergedTraits().sparse;
            for (const item of value) {
              if (sparse || item != null) {
                out.push(this._write(listMember, item));
              }
            }
            return out;
          }
          if (ns.isMapSchema()) {
            const mapMember = ns.getValueSchema();
            const out = {};
            const sparse = !!ns.getMergedTraits().sparse;
            for (const [_k, _v] of Object.entries(value)) {
              if (sparse || _v != null) {
                out[_k] = this._write(mapMember, _v);
              }
            }
            return out;
          }
          if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
            if (ns === this.rootSchema) {
              return value;
            }
            return (this.serdeContext?.base64Encoder ?? import_util_base645.toBase64)(value);
          }
          if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                return value.toISOString().replace(".000Z", "Z");
              case 6:
                return dateToUtcString(value);
              case 7:
                return value.getTime() / 1e3;
              default:
                console.warn("Missing timestamp format, using epoch seconds", value);
                return value.getTime() / 1e3;
            }
          }
          if (value instanceof NumericValue) {
            this.useReplacer = true;
          }
        }
        if (value === null && container?.isStructSchema()) {
          return void 0;
        }
        if (ns.isStringSchema()) {
          if (typeof value === "undefined" && ns.isIdempotencyToken()) {
            return (0, import_uuid.v4)();
          }
          const mediaType = ns.getMergedTraits().mediaType;
          if (value != null && mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              return LazyJsonString.from(value);
            }
          }
          return value;
        }
        if (typeof value === "number" && ns.isNumericSchema()) {
          if (Math.abs(value) === Infinity || isNaN(value)) {
            return String(value);
          }
          return value;
        }
        if (typeof value === "string" && ns.isBlobSchema()) {
          if (ns === this.rootSchema) {
            return value;
          }
          return (this.serdeContext?.base64Encoder ?? import_util_base645.toBase64)(value);
        }
        if (typeof value === "bigint") {
          this.useReplacer = true;
        }
        if (ns.isDocumentSchema()) {
          if (isObject) {
            const out = Array.isArray(value) ? [] : {};
            for (const [k, v] of Object.entries(value)) {
              if (v instanceof NumericValue) {
                this.useReplacer = true;
                out[k] = v;
              } else {
                out[k] = this._write(ns, v);
              }
            }
            return out;
          } else {
            return structuredClone(value);
          }
        }
        return value;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js
var JsonCodec;
var init_JsonCodec = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js"() {
    init_ConfigurableSerdeContext();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    JsonCodec = class extends SerdeContextConfig {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new JsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new JsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
var AwsJsonRpcProtocol;
var init_AwsJsonRpcProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_JsonCodec();
    init_parseJsonBody();
    AwsJsonRpcProtocol = class extends RpcProtocol {
      serializer;
      deserializer;
      serviceTarget;
      codec;
      mixin;
      awsQueryCompatible;
      constructor({ defaultNamespace, serviceTarget, awsQueryCompatible, jsonCodec }) {
        super({
          defaultNamespace
        });
        this.serviceTarget = serviceTarget;
        this.codec = jsonCodec ?? new JsonCodec({
          timestampFormat: {
            useTrait: true,
            default: 7
          },
          jsonName: false
        });
        this.serializer = this.codec.createSerializer();
        this.deserializer = this.codec.createDeserializer();
        this.awsQueryCompatible = !!awsQueryCompatible;
        this.mixin = new ProtocolLib(this.awsQueryCompatible);
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
          request.path += "/";
        }
        Object.assign(request.headers, {
          "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
          "x-amz-target": `${this.serviceTarget}.${operationSchema.name}`
        });
        if (this.awsQueryCompatible) {
          request.headers["x-amzn-query-mode"] = "true";
        }
        if (deref(operationSchema.input) === "unit" || !request.body) {
          request.body = "{}";
        }
        return request;
      }
      getPayloadCodec() {
        return this.codec;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        if (this.awsQueryCompatible) {
          this.mixin.setQueryCompatError(dataObject, response);
        }
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member2] of ns.structIterator()) {
          if (dataObject[name] != null) {
            output[name] = this.codec.createDeserializer().readObject(member2, dataObject[name]);
          }
        }
        if (this.awsQueryCompatible) {
          this.mixin.queryCompatOutput(dataObject, output);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js
var AwsJson1_0Protocol;
var init_AwsJson1_0Protocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js"() {
    init_AwsJsonRpcProtocol();
    AwsJson1_0Protocol = class extends AwsJsonRpcProtocol {
      constructor({ defaultNamespace, serviceTarget, awsQueryCompatible, jsonCodec }) {
        super({
          defaultNamespace,
          serviceTarget,
          awsQueryCompatible,
          jsonCodec
        });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_0";
      }
      getJsonRpcVersion() {
        return "1.0";
      }
      getDefaultContentType() {
        return "application/x-amz-json-1.0";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
var AwsJson1_1Protocol;
var init_AwsJson1_1Protocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js"() {
    init_AwsJsonRpcProtocol();
    AwsJson1_1Protocol = class extends AwsJsonRpcProtocol {
      constructor({ defaultNamespace, serviceTarget, awsQueryCompatible, jsonCodec }) {
        super({
          defaultNamespace,
          serviceTarget,
          awsQueryCompatible,
          jsonCodec
        });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_1";
      }
      getJsonRpcVersion() {
        return "1.1";
      }
      getDefaultContentType() {
        return "application/x-amz-json-1.1";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js
var AwsRestJsonProtocol;
var init_AwsRestJsonProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_JsonCodec();
    init_parseJsonBody();
    AwsRestJsonProtocol = class extends HttpBindingProtocol {
      serializer;
      deserializer;
      codec;
      mixin = new ProtocolLib();
      constructor({ defaultNamespace }) {
        super({
          defaultNamespace
        });
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 7
          },
          httpBindings: true,
          jsonName: true
        };
        this.codec = new JsonCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getShapeId() {
        return "aws.protocols#restJson1";
      }
      getPayloadCodec() {
        return this.codec;
      }
      setSerdeContext(serdeContext) {
        this.codec.setSerdeContext(serdeContext);
        super.setSerdeContext(serdeContext);
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
          const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
          if (contentType) {
            request.headers["content-type"] = contentType;
          }
        }
        if (request.body == null && request.headers["content-type"] === this.getDefaultContentType()) {
          request.body = "{}";
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const output = await super.deserializeResponse(operationSchema, context, response);
        const outputSchema = NormalizedSchema.of(operationSchema.output);
        for (const [name, member2] of outputSchema.structIterator()) {
          if (member2.getMemberTraits().httpPayload && !(name in output)) {
            output[name] = null;
          }
        }
        return output;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member2] of ns.structIterator()) {
          const target = member2.getMergedTraits().jsonName ?? name;
          output[name] = this.codec.createDeserializer().readObject(member2, dataObject[target]);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
      getDefaultContentType() {
        return "application/json";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var import_smithy_client3, awsExpectUnion;
var init_awsExpectUnion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    import_smithy_client3 = __toESM(require_dist_cjs23());
    awsExpectUnion = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return (0, import_smithy_client3.expectUnion)(value);
    };
  }
});

// node_modules/fast-xml-parser/lib/fxp.cjs
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/lib/fxp.cjs"(exports, module) {
    (() => {
      "use strict";
      var t = { d: (e2, n2) => {
        for (var i2 in n2) t.o(n2, i2) && !t.o(e2, i2) && Object.defineProperty(e2, i2, { enumerable: true, get: n2[i2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      t.r(e), t.d(e, { XMLBuilder: () => gt, XMLParser: () => it, XMLValidator: () => xt });
      const n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = new RegExp("^[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
      function s(t2, e2) {
        const n2 = [];
        let i2 = e2.exec(t2);
        for (; i2; ) {
          const s2 = [];
          s2.startIndex = e2.lastIndex - i2[0].length;
          const r2 = i2.length;
          for (let t3 = 0; t3 < r2; t3++) s2.push(i2[t3]);
          n2.push(s2), i2 = e2.exec(t2);
        }
        return n2;
      }
      const r = function(t2) {
        return !(null == i.exec(t2));
      }, o = { allowBooleanAttributes: false, unpairedTags: [] };
      function a(t2, e2) {
        e2 = Object.assign({}, o, e2);
        const n2 = [];
        let i2 = false, s2 = false;
        "\uFEFF" === t2[0] && (t2 = t2.substr(1));
        for (let r2 = 0; r2 < t2.length; r2++) if ("<" === t2[r2] && "?" === t2[r2 + 1]) {
          if (r2 += 2, r2 = u(t2, r2), r2.err) return r2;
        } else {
          if ("<" !== t2[r2]) {
            if (l(t2[r2])) continue;
            return m("InvalidChar", "char '" + t2[r2] + "' is not expected.", N(t2, r2));
          }
          {
            let o2 = r2;
            if (r2++, "!" === t2[r2]) {
              r2 = d(t2, r2);
              continue;
            }
            {
              let a2 = false;
              "/" === t2[r2] && (a2 = true, r2++);
              let h2 = "";
              for (; r2 < t2.length && ">" !== t2[r2] && " " !== t2[r2] && "	" !== t2[r2] && "\n" !== t2[r2] && "\r" !== t2[r2]; r2++) h2 += t2[r2];
              if (h2 = h2.trim(), "/" === h2[h2.length - 1] && (h2 = h2.substring(0, h2.length - 1), r2--), !b(h2)) {
                let e3;
                return e3 = 0 === h2.trim().length ? "Invalid space after '<'." : "Tag '" + h2 + "' is an invalid name.", m("InvalidTag", e3, N(t2, r2));
              }
              const p2 = c(t2, r2);
              if (false === p2) return m("InvalidAttr", "Attributes for '" + h2 + "' have open quote.", N(t2, r2));
              let f2 = p2.value;
              if (r2 = p2.index, "/" === f2[f2.length - 1]) {
                const n3 = r2 - f2.length;
                f2 = f2.substring(0, f2.length - 1);
                const s3 = g(f2, e2);
                if (true !== s3) return m(s3.err.code, s3.err.msg, N(t2, n3 + s3.err.line));
                i2 = true;
              } else if (a2) {
                if (!p2.tagClosed) return m("InvalidTag", "Closing tag '" + h2 + "' doesn't have proper closing.", N(t2, r2));
                if (f2.trim().length > 0) return m("InvalidTag", "Closing tag '" + h2 + "' can't have attributes or invalid starting.", N(t2, o2));
                if (0 === n2.length) return m("InvalidTag", "Closing tag '" + h2 + "' has not been opened.", N(t2, o2));
                {
                  const e3 = n2.pop();
                  if (h2 !== e3.tagName) {
                    let n3 = N(t2, e3.tagStartPos);
                    return m("InvalidTag", "Expected closing tag '" + e3.tagName + "' (opened in line " + n3.line + ", col " + n3.col + ") instead of closing tag '" + h2 + "'.", N(t2, o2));
                  }
                  0 == n2.length && (s2 = true);
                }
              } else {
                const a3 = g(f2, e2);
                if (true !== a3) return m(a3.err.code, a3.err.msg, N(t2, r2 - f2.length + a3.err.line));
                if (true === s2) return m("InvalidXml", "Multiple possible root nodes found.", N(t2, r2));
                -1 !== e2.unpairedTags.indexOf(h2) || n2.push({ tagName: h2, tagStartPos: o2 }), i2 = true;
              }
              for (r2++; r2 < t2.length; r2++) if ("<" === t2[r2]) {
                if ("!" === t2[r2 + 1]) {
                  r2++, r2 = d(t2, r2);
                  continue;
                }
                if ("?" !== t2[r2 + 1]) break;
                if (r2 = u(t2, ++r2), r2.err) return r2;
              } else if ("&" === t2[r2]) {
                const e3 = x(t2, r2);
                if (-1 == e3) return m("InvalidChar", "char '&' is not expected.", N(t2, r2));
                r2 = e3;
              } else if (true === s2 && !l(t2[r2])) return m("InvalidXml", "Extra text at the end", N(t2, r2));
              "<" === t2[r2] && r2--;
            }
          }
        }
        return i2 ? 1 == n2.length ? m("InvalidTag", "Unclosed tag '" + n2[0].tagName + "'.", N(t2, n2[0].tagStartPos)) : !(n2.length > 0) || m("InvalidXml", "Invalid '" + JSON.stringify(n2.map((t3) => t3.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : m("InvalidXml", "Start tag expected.", 1);
      }
      function l(t2) {
        return " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2;
      }
      function u(t2, e2) {
        const n2 = e2;
        for (; e2 < t2.length; e2++) if ("?" == t2[e2] || " " == t2[e2]) {
          const i2 = t2.substr(n2, e2 - n2);
          if (e2 > 5 && "xml" === i2) return m("InvalidXml", "XML declaration allowed only at the start of the document.", N(t2, e2));
          if ("?" == t2[e2] && ">" == t2[e2 + 1]) {
            e2++;
            break;
          }
          continue;
        }
        return e2;
      }
      function d(t2, e2) {
        if (t2.length > e2 + 5 && "-" === t2[e2 + 1] && "-" === t2[e2 + 2]) {
          for (e2 += 3; e2 < t2.length; e2++) if ("-" === t2[e2] && "-" === t2[e2 + 1] && ">" === t2[e2 + 2]) {
            e2 += 2;
            break;
          }
        } else if (t2.length > e2 + 8 && "D" === t2[e2 + 1] && "O" === t2[e2 + 2] && "C" === t2[e2 + 3] && "T" === t2[e2 + 4] && "Y" === t2[e2 + 5] && "P" === t2[e2 + 6] && "E" === t2[e2 + 7]) {
          let n2 = 1;
          for (e2 += 8; e2 < t2.length; e2++) if ("<" === t2[e2]) n2++;
          else if (">" === t2[e2] && (n2--, 0 === n2)) break;
        } else if (t2.length > e2 + 9 && "[" === t2[e2 + 1] && "C" === t2[e2 + 2] && "D" === t2[e2 + 3] && "A" === t2[e2 + 4] && "T" === t2[e2 + 5] && "A" === t2[e2 + 6] && "[" === t2[e2 + 7]) {
          for (e2 += 8; e2 < t2.length; e2++) if ("]" === t2[e2] && "]" === t2[e2 + 1] && ">" === t2[e2 + 2]) {
            e2 += 2;
            break;
          }
        }
        return e2;
      }
      const h = '"', p = "'";
      function c(t2, e2) {
        let n2 = "", i2 = "", s2 = false;
        for (; e2 < t2.length; e2++) {
          if (t2[e2] === h || t2[e2] === p) "" === i2 ? i2 = t2[e2] : i2 !== t2[e2] || (i2 = "");
          else if (">" === t2[e2] && "" === i2) {
            s2 = true;
            break;
          }
          n2 += t2[e2];
        }
        return "" === i2 && { value: n2, index: e2, tagClosed: s2 };
      }
      const f = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
      function g(t2, e2) {
        const n2 = s(t2, f), i2 = {};
        for (let t3 = 0; t3 < n2.length; t3++) {
          if (0 === n2[t3][1].length) return m("InvalidAttr", "Attribute '" + n2[t3][2] + "' has no space in starting.", y(n2[t3]));
          if (void 0 !== n2[t3][3] && void 0 === n2[t3][4]) return m("InvalidAttr", "Attribute '" + n2[t3][2] + "' is without value.", y(n2[t3]));
          if (void 0 === n2[t3][3] && !e2.allowBooleanAttributes) return m("InvalidAttr", "boolean attribute '" + n2[t3][2] + "' is not allowed.", y(n2[t3]));
          const s2 = n2[t3][2];
          if (!E(s2)) return m("InvalidAttr", "Attribute '" + s2 + "' is an invalid name.", y(n2[t3]));
          if (Object.prototype.hasOwnProperty.call(i2, s2)) return m("InvalidAttr", "Attribute '" + s2 + "' is repeated.", y(n2[t3]));
          i2[s2] = 1;
        }
        return true;
      }
      function x(t2, e2) {
        if (";" === t2[++e2]) return -1;
        if ("#" === t2[e2]) return (function(t3, e3) {
          let n3 = /\d/;
          for ("x" === t3[e3] && (e3++, n3 = /[\da-fA-F]/); e3 < t3.length; e3++) {
            if (";" === t3[e3]) return e3;
            if (!t3[e3].match(n3)) break;
          }
          return -1;
        })(t2, ++e2);
        let n2 = 0;
        for (; e2 < t2.length; e2++, n2++) if (!(t2[e2].match(/\w/) && n2 < 20)) {
          if (";" === t2[e2]) break;
          return -1;
        }
        return e2;
      }
      function m(t2, e2, n2) {
        return { err: { code: t2, msg: e2, line: n2.line || n2, col: n2.col } };
      }
      function E(t2) {
        return r(t2);
      }
      function b(t2) {
        return r(t2);
      }
      function N(t2, e2) {
        const n2 = t2.substring(0, e2).split(/\r?\n/);
        return { line: n2.length, col: n2[n2.length - 1].length + 1 };
      }
      function y(t2) {
        return t2.startIndex + t2[1].length;
      }
      const T = { preserveOrder: false, attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, removeNSPrefix: false, allowBooleanAttributes: false, parseTagValue: true, parseAttributeValue: false, trimValues: true, cdataPropName: false, numberParseOptions: { hex: true, leadingZeros: true, eNotation: true }, tagValueProcessor: function(t2, e2) {
        return e2;
      }, attributeValueProcessor: function(t2, e2) {
        return e2;
      }, stopNodes: [], alwaysCreateTextNode: false, isArray: () => false, commentPropName: false, unpairedTags: [], processEntities: true, htmlEntities: false, ignoreDeclaration: false, ignorePiTags: false, transformTagName: false, transformAttributeName: false, updateTag: function(t2, e2, n2) {
        return t2;
      }, captureMetaData: false, maxNestedTags: 100, strictReservedNames: true };
      function w(t2) {
        return "boolean" == typeof t2 ? { enabled: t2, maxEntitySize: 1e4, maxExpansionDepth: 10, maxTotalExpansions: 1e3, maxExpandedLength: 1e5, allowedTags: null, tagFilter: null } : "object" == typeof t2 && null !== t2 ? { enabled: false !== t2.enabled, maxEntitySize: t2.maxEntitySize ?? 1e4, maxExpansionDepth: t2.maxExpansionDepth ?? 10, maxTotalExpansions: t2.maxTotalExpansions ?? 1e3, maxExpandedLength: t2.maxExpandedLength ?? 1e5, allowedTags: t2.allowedTags ?? null, tagFilter: t2.tagFilter ?? null } : w(true);
      }
      const v = function(t2) {
        const e2 = Object.assign({}, T, t2);
        return e2.processEntities = w(e2.processEntities), e2;
      };
      let O;
      O = "function" != typeof Symbol ? "@@xmlMetadata" : /* @__PURE__ */ Symbol("XML Node Metadata");
      class I {
        constructor(t2) {
          this.tagname = t2, this.child = [], this[":@"] = /* @__PURE__ */ Object.create(null);
        }
        add(t2, e2) {
          "__proto__" === t2 && (t2 = "#__proto__"), this.child.push({ [t2]: e2 });
        }
        addChild(t2, e2) {
          "__proto__" === t2.tagname && (t2.tagname = "#__proto__"), t2[":@"] && Object.keys(t2[":@"]).length > 0 ? this.child.push({ [t2.tagname]: t2.child, ":@": t2[":@"] }) : this.child.push({ [t2.tagname]: t2.child }), void 0 !== e2 && (this.child[this.child.length - 1][O] = { startIndex: e2 });
        }
        static getMetaDataSymbol() {
          return O;
        }
      }
      class P {
        constructor(t2) {
          this.suppressValidationErr = !t2, this.options = t2;
        }
        readDocType(t2, e2) {
          const n2 = /* @__PURE__ */ Object.create(null);
          if ("O" !== t2[e2 + 3] || "C" !== t2[e2 + 4] || "T" !== t2[e2 + 5] || "Y" !== t2[e2 + 6] || "P" !== t2[e2 + 7] || "E" !== t2[e2 + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
          {
            e2 += 9;
            let i2 = 1, s2 = false, r2 = false, o2 = "";
            for (; e2 < t2.length; e2++) if ("<" !== t2[e2] || r2) if (">" === t2[e2]) {
              if (r2 ? "-" === t2[e2 - 1] && "-" === t2[e2 - 2] && (r2 = false, i2--) : i2--, 0 === i2) break;
            } else "[" === t2[e2] ? s2 = true : o2 += t2[e2];
            else {
              if (s2 && S(t2, "!ENTITY", e2)) {
                let i3, s3;
                if (e2 += 7, [i3, s3, e2] = this.readEntityExp(t2, e2 + 1, this.suppressValidationErr), -1 === s3.indexOf("&")) {
                  const t3 = i3.replace(/[.\-+*:]/g, "\\.");
                  n2[i3] = { regx: RegExp(`&${t3};`, "g"), val: s3 };
                }
              } else if (s2 && S(t2, "!ELEMENT", e2)) {
                e2 += 8;
                const { index: n3 } = this.readElementExp(t2, e2 + 1);
                e2 = n3;
              } else if (s2 && S(t2, "!ATTLIST", e2)) e2 += 8;
              else if (s2 && S(t2, "!NOTATION", e2)) {
                e2 += 9;
                const { index: n3 } = this.readNotationExp(t2, e2 + 1, this.suppressValidationErr);
                e2 = n3;
              } else {
                if (!S(t2, "!--", e2)) throw new Error("Invalid DOCTYPE");
                r2 = true;
              }
              i2++, o2 = "";
            }
            if (0 !== i2) throw new Error("Unclosed DOCTYPE");
          }
          return { entities: n2, i: e2 };
        }
        readEntityExp(t2, e2) {
          e2 = A(t2, e2);
          let n2 = "";
          for (; e2 < t2.length && !/\s/.test(t2[e2]) && '"' !== t2[e2] && "'" !== t2[e2]; ) n2 += t2[e2], e2++;
          if (C(n2), e2 = A(t2, e2), !this.suppressValidationErr) {
            if ("SYSTEM" === t2.substring(e2, e2 + 6).toUpperCase()) throw new Error("External entities are not supported");
            if ("%" === t2[e2]) throw new Error("Parameter entities are not supported");
          }
          let i2 = "";
          if ([e2, i2] = this.readIdentifierVal(t2, e2, "entity"), false !== this.options.enabled && this.options.maxEntitySize && i2.length > this.options.maxEntitySize) throw new Error(`Entity "${n2}" size (${i2.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
          return [n2, i2, --e2];
        }
        readNotationExp(t2, e2) {
          e2 = A(t2, e2);
          let n2 = "";
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) n2 += t2[e2], e2++;
          !this.suppressValidationErr && C(n2), e2 = A(t2, e2);
          const i2 = t2.substring(e2, e2 + 6).toUpperCase();
          if (!this.suppressValidationErr && "SYSTEM" !== i2 && "PUBLIC" !== i2) throw new Error(`Expected SYSTEM or PUBLIC, found "${i2}"`);
          e2 += i2.length, e2 = A(t2, e2);
          let s2 = null, r2 = null;
          if ("PUBLIC" === i2) [e2, s2] = this.readIdentifierVal(t2, e2, "publicIdentifier"), '"' !== t2[e2 = A(t2, e2)] && "'" !== t2[e2] || ([e2, r2] = this.readIdentifierVal(t2, e2, "systemIdentifier"));
          else if ("SYSTEM" === i2 && ([e2, r2] = this.readIdentifierVal(t2, e2, "systemIdentifier"), !this.suppressValidationErr && !r2)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
          return { notationName: n2, publicIdentifier: s2, systemIdentifier: r2, index: --e2 };
        }
        readIdentifierVal(t2, e2, n2) {
          let i2 = "";
          const s2 = t2[e2];
          if ('"' !== s2 && "'" !== s2) throw new Error(`Expected quoted string, found "${s2}"`);
          for (e2++; e2 < t2.length && t2[e2] !== s2; ) i2 += t2[e2], e2++;
          if (t2[e2] !== s2) throw new Error(`Unterminated ${n2} value`);
          return [++e2, i2];
        }
        readElementExp(t2, e2) {
          e2 = A(t2, e2);
          let n2 = "";
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) n2 += t2[e2], e2++;
          if (!this.suppressValidationErr && !r(n2)) throw new Error(`Invalid element name: "${n2}"`);
          let i2 = "";
          if ("E" === t2[e2 = A(t2, e2)] && S(t2, "MPTY", e2)) e2 += 4;
          else if ("A" === t2[e2] && S(t2, "NY", e2)) e2 += 2;
          else if ("(" === t2[e2]) {
            for (e2++; e2 < t2.length && ")" !== t2[e2]; ) i2 += t2[e2], e2++;
            if (")" !== t2[e2]) throw new Error("Unterminated content model");
          } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${t2[e2]}"`);
          return { elementName: n2, contentModel: i2.trim(), index: e2 };
        }
        readAttlistExp(t2, e2) {
          e2 = A(t2, e2);
          let n2 = "";
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) n2 += t2[e2], e2++;
          C(n2), e2 = A(t2, e2);
          let i2 = "";
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) i2 += t2[e2], e2++;
          if (!C(i2)) throw new Error(`Invalid attribute name: "${i2}"`);
          e2 = A(t2, e2);
          let s2 = "";
          if ("NOTATION" === t2.substring(e2, e2 + 8).toUpperCase()) {
            if (s2 = "NOTATION", "(" !== t2[e2 = A(t2, e2 += 8)]) throw new Error(`Expected '(', found "${t2[e2]}"`);
            e2++;
            let n3 = [];
            for (; e2 < t2.length && ")" !== t2[e2]; ) {
              let i3 = "";
              for (; e2 < t2.length && "|" !== t2[e2] && ")" !== t2[e2]; ) i3 += t2[e2], e2++;
              if (i3 = i3.trim(), !C(i3)) throw new Error(`Invalid notation name: "${i3}"`);
              n3.push(i3), "|" === t2[e2] && (e2++, e2 = A(t2, e2));
            }
            if (")" !== t2[e2]) throw new Error("Unterminated list of notations");
            e2++, s2 += " (" + n3.join("|") + ")";
          } else {
            for (; e2 < t2.length && !/\s/.test(t2[e2]); ) s2 += t2[e2], e2++;
            const n3 = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
            if (!this.suppressValidationErr && !n3.includes(s2.toUpperCase())) throw new Error(`Invalid attribute type: "${s2}"`);
          }
          e2 = A(t2, e2);
          let r2 = "";
          return "#REQUIRED" === t2.substring(e2, e2 + 8).toUpperCase() ? (r2 = "#REQUIRED", e2 += 8) : "#IMPLIED" === t2.substring(e2, e2 + 7).toUpperCase() ? (r2 = "#IMPLIED", e2 += 7) : [e2, r2] = this.readIdentifierVal(t2, e2, "ATTLIST"), { elementName: n2, attributeName: i2, attributeType: s2, defaultValue: r2, index: e2 };
        }
      }
      const A = (t2, e2) => {
        for (; e2 < t2.length && /\s/.test(t2[e2]); ) e2++;
        return e2;
      };
      function S(t2, e2, n2) {
        for (let i2 = 0; i2 < e2.length; i2++) if (e2[i2] !== t2[n2 + i2 + 1]) return false;
        return true;
      }
      function C(t2) {
        if (r(t2)) return t2;
        throw new Error(`Invalid entity name ${t2}`);
      }
      const $ = /^[-+]?0x[a-fA-F0-9]+$/, V = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, D = { hex: true, leadingZeros: true, decimalPoint: ".", eNotation: true };
      const j = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
      class L {
        constructor(t2) {
          var e2;
          if (this.options = t2, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "\xA2" }, pound: { regex: /&(pound|#163);/g, val: "\xA3" }, yen: { regex: /&(yen|#165);/g, val: "\xA5" }, euro: { regex: /&(euro|#8364);/g, val: "\u20AC" }, copyright: { regex: /&(copy|#169);/g, val: "\xA9" }, reg: { regex: /&(reg|#174);/g, val: "\xAE" }, inr: { regex: /&(inr|#8377);/g, val: "\u20B9" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (t3, e3) => K(e3, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (t3, e3) => K(e3, 16, "&#x") } }, this.addExternalEntities = F, this.parseXml = R, this.parseTextData = M, this.resolveNameSpace = k, this.buildAttributesMap = U, this.isItStopNode = X, this.replaceEntitiesValue = Y, this.readStopNodeData = q, this.saveTextToParentTag = G, this.addChild = B, this.ignoreAttributesFn = "function" == typeof (e2 = this.options.ignoreAttributes) ? e2 : Array.isArray(e2) ? (t3) => {
            for (const n2 of e2) {
              if ("string" == typeof n2 && t3 === n2) return true;
              if (n2 instanceof RegExp && n2.test(t3)) return true;
            }
          } : () => false, this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.options.stopNodes && this.options.stopNodes.length > 0) {
            this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
            for (let t3 = 0; t3 < this.options.stopNodes.length; t3++) {
              const e3 = this.options.stopNodes[t3];
              "string" == typeof e3 && (e3.startsWith("*.") ? this.stopNodesWildcard.add(e3.substring(2)) : this.stopNodesExact.add(e3));
            }
          }
        }
      }
      function F(t2) {
        const e2 = Object.keys(t2);
        for (let n2 = 0; n2 < e2.length; n2++) {
          const i2 = e2[n2], s2 = i2.replace(/[.\-+*:]/g, "\\.");
          this.lastEntities[i2] = { regex: new RegExp("&" + s2 + ";", "g"), val: t2[i2] };
        }
      }
      function M(t2, e2, n2, i2, s2, r2, o2) {
        if (void 0 !== t2 && (this.options.trimValues && !i2 && (t2 = t2.trim()), t2.length > 0)) {
          o2 || (t2 = this.replaceEntitiesValue(t2, e2, n2));
          const i3 = this.options.tagValueProcessor(e2, t2, n2, s2, r2);
          return null == i3 ? t2 : typeof i3 != typeof t2 || i3 !== t2 ? i3 : this.options.trimValues || t2.trim() === t2 ? Z(t2, this.options.parseTagValue, this.options.numberParseOptions) : t2;
        }
      }
      function k(t2) {
        if (this.options.removeNSPrefix) {
          const e2 = t2.split(":"), n2 = "/" === t2.charAt(0) ? "/" : "";
          if ("xmlns" === e2[0]) return "";
          2 === e2.length && (t2 = n2 + e2[1]);
        }
        return t2;
      }
      const _ = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
      function U(t2, e2, n2) {
        if (true !== this.options.ignoreAttributes && "string" == typeof t2) {
          const i2 = s(t2, _), r2 = i2.length, o2 = {};
          for (let t3 = 0; t3 < r2; t3++) {
            const s2 = this.resolveNameSpace(i2[t3][1]);
            if (this.ignoreAttributesFn(s2, e2)) continue;
            let r3 = i2[t3][4], a2 = this.options.attributeNamePrefix + s2;
            if (s2.length) if (this.options.transformAttributeName && (a2 = this.options.transformAttributeName(a2)), "__proto__" === a2 && (a2 = "#__proto__"), void 0 !== r3) {
              this.options.trimValues && (r3 = r3.trim()), r3 = this.replaceEntitiesValue(r3, n2, e2);
              const t4 = this.options.attributeValueProcessor(s2, r3, e2);
              o2[a2] = null == t4 ? r3 : typeof t4 != typeof r3 || t4 !== r3 ? t4 : Z(r3, this.options.parseAttributeValue, this.options.numberParseOptions);
            } else this.options.allowBooleanAttributes && (o2[a2] = true);
          }
          if (!Object.keys(o2).length) return;
          if (this.options.attributesGroupName) {
            const t3 = {};
            return t3[this.options.attributesGroupName] = o2, t3;
          }
          return o2;
        }
      }
      const R = function(t2) {
        t2 = t2.replace(/\r\n?/g, "\n");
        const e2 = new I("!xml");
        let n2 = e2, i2 = "", s2 = "";
        this.entityExpansionCount = 0, this.currentExpandedLength = 0;
        const r2 = new P(this.options.processEntities);
        for (let o2 = 0; o2 < t2.length; o2++) if ("<" === t2[o2]) if ("/" === t2[o2 + 1]) {
          const e3 = z(t2, ">", o2, "Closing Tag is not closed.");
          let r3 = t2.substring(o2 + 2, e3).trim();
          if (this.options.removeNSPrefix) {
            const t3 = r3.indexOf(":");
            -1 !== t3 && (r3 = r3.substr(t3 + 1));
          }
          this.options.transformTagName && (r3 = this.options.transformTagName(r3)), n2 && (i2 = this.saveTextToParentTag(i2, n2, s2));
          const a2 = s2.substring(s2.lastIndexOf(".") + 1);
          if (r3 && -1 !== this.options.unpairedTags.indexOf(r3)) throw new Error(`Unpaired tag can not be used as closing tag: </${r3}>`);
          let l2 = 0;
          a2 && -1 !== this.options.unpairedTags.indexOf(a2) ? (l2 = s2.lastIndexOf(".", s2.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l2 = s2.lastIndexOf("."), s2 = s2.substring(0, l2), n2 = this.tagsNodeStack.pop(), i2 = "", o2 = e3;
        } else if ("?" === t2[o2 + 1]) {
          let e3 = W(t2, o2, false, "?>");
          if (!e3) throw new Error("Pi Tag is not closed.");
          if (i2 = this.saveTextToParentTag(i2, n2, s2), this.options.ignoreDeclaration && "?xml" === e3.tagName || this.options.ignorePiTags) ;
          else {
            const t3 = new I(e3.tagName);
            t3.add(this.options.textNodeName, ""), e3.tagName !== e3.tagExp && e3.attrExpPresent && (t3[":@"] = this.buildAttributesMap(e3.tagExp, s2, e3.tagName)), this.addChild(n2, t3, s2, o2);
          }
          o2 = e3.closeIndex + 1;
        } else if ("!--" === t2.substr(o2 + 1, 3)) {
          const e3 = z(t2, "-->", o2 + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const r3 = t2.substring(o2 + 4, e3 - 2);
            i2 = this.saveTextToParentTag(i2, n2, s2), n2.add(this.options.commentPropName, [{ [this.options.textNodeName]: r3 }]);
          }
          o2 = e3;
        } else if ("!D" === t2.substr(o2 + 1, 2)) {
          const e3 = r2.readDocType(t2, o2);
          this.docTypeEntities = e3.entities, o2 = e3.i;
        } else if ("![" === t2.substr(o2 + 1, 2)) {
          const e3 = z(t2, "]]>", o2, "CDATA is not closed.") - 2, r3 = t2.substring(o2 + 9, e3);
          i2 = this.saveTextToParentTag(i2, n2, s2);
          let a2 = this.parseTextData(r3, n2.tagname, s2, true, false, true, true);
          null == a2 && (a2 = ""), this.options.cdataPropName ? n2.add(this.options.cdataPropName, [{ [this.options.textNodeName]: r3 }]) : n2.add(this.options.textNodeName, a2), o2 = e3 + 2;
        } else {
          let r3 = W(t2, o2, this.options.removeNSPrefix), a2 = r3.tagName;
          const l2 = r3.rawTagName;
          let u2 = r3.tagExp, d2 = r3.attrExpPresent, h2 = r3.closeIndex;
          if (this.options.transformTagName) {
            const t3 = this.options.transformTagName(a2);
            u2 === a2 && (u2 = t3), a2 = t3;
          }
          if (this.options.strictReservedNames && (a2 === this.options.commentPropName || a2 === this.options.cdataPropName)) throw new Error(`Invalid tag name: ${a2}`);
          n2 && i2 && "!xml" !== n2.tagname && (i2 = this.saveTextToParentTag(i2, n2, s2, false));
          const p2 = n2;
          p2 && -1 !== this.options.unpairedTags.indexOf(p2.tagname) && (n2 = this.tagsNodeStack.pop(), s2 = s2.substring(0, s2.lastIndexOf("."))), a2 !== e2.tagname && (s2 += s2 ? "." + a2 : a2);
          const c2 = o2;
          if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, s2, a2)) {
            let e3 = "";
            if (u2.length > 0 && u2.lastIndexOf("/") === u2.length - 1) "/" === a2[a2.length - 1] ? (a2 = a2.substr(0, a2.length - 1), s2 = s2.substr(0, s2.length - 1), u2 = a2) : u2 = u2.substr(0, u2.length - 1), o2 = r3.closeIndex;
            else if (-1 !== this.options.unpairedTags.indexOf(a2)) o2 = r3.closeIndex;
            else {
              const n3 = this.readStopNodeData(t2, l2, h2 + 1);
              if (!n3) throw new Error(`Unexpected end of ${l2}`);
              o2 = n3.i, e3 = n3.tagContent;
            }
            const i3 = new I(a2);
            a2 !== u2 && d2 && (i3[":@"] = this.buildAttributesMap(u2, s2, a2)), e3 && (e3 = this.parseTextData(e3, a2, s2, true, d2, true, true)), s2 = s2.substr(0, s2.lastIndexOf(".")), i3.add(this.options.textNodeName, e3), this.addChild(n2, i3, s2, c2);
          } else {
            if (u2.length > 0 && u2.lastIndexOf("/") === u2.length - 1) {
              if ("/" === a2[a2.length - 1] ? (a2 = a2.substr(0, a2.length - 1), s2 = s2.substr(0, s2.length - 1), u2 = a2) : u2 = u2.substr(0, u2.length - 1), this.options.transformTagName) {
                const t4 = this.options.transformTagName(a2);
                u2 === a2 && (u2 = t4), a2 = t4;
              }
              const t3 = new I(a2);
              a2 !== u2 && d2 && (t3[":@"] = this.buildAttributesMap(u2, s2, a2)), this.addChild(n2, t3, s2, c2), s2 = s2.substr(0, s2.lastIndexOf("."));
            } else {
              if (-1 !== this.options.unpairedTags.indexOf(a2)) {
                const t3 = new I(a2);
                a2 !== u2 && d2 && (t3[":@"] = this.buildAttributesMap(u2, s2)), this.addChild(n2, t3, s2, c2), s2 = s2.substr(0, s2.lastIndexOf(".")), o2 = r3.closeIndex;
                continue;
              }
              {
                const t3 = new I(a2);
                if (this.tagsNodeStack.length > this.options.maxNestedTags) throw new Error("Maximum nested tags exceeded");
                this.tagsNodeStack.push(n2), a2 !== u2 && d2 && (t3[":@"] = this.buildAttributesMap(u2, s2, a2)), this.addChild(n2, t3, s2, c2), n2 = t3;
              }
            }
            i2 = "", o2 = h2;
          }
        }
        else i2 += t2[o2];
        return e2.child;
      };
      function B(t2, e2, n2, i2) {
        this.options.captureMetaData || (i2 = void 0);
        const s2 = this.options.updateTag(e2.tagname, n2, e2[":@"]);
        false === s2 || ("string" == typeof s2 ? (e2.tagname = s2, t2.addChild(e2, i2)) : t2.addChild(e2, i2));
      }
      const Y = function(t2, e2, n2) {
        if (-1 === t2.indexOf("&")) return t2;
        const i2 = this.options.processEntities;
        if (!i2.enabled) return t2;
        if (i2.allowedTags && !i2.allowedTags.includes(e2)) return t2;
        if (i2.tagFilter && !i2.tagFilter(e2, n2)) return t2;
        for (let e3 in this.docTypeEntities) {
          const n3 = this.docTypeEntities[e3], s2 = t2.match(n3.regx);
          if (s2) {
            if (this.entityExpansionCount += s2.length, i2.maxTotalExpansions && this.entityExpansionCount > i2.maxTotalExpansions) throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${i2.maxTotalExpansions}`);
            const e4 = t2.length;
            if (t2 = t2.replace(n3.regx, n3.val), i2.maxExpandedLength && (this.currentExpandedLength += t2.length - e4, this.currentExpandedLength > i2.maxExpandedLength)) throw new Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${i2.maxExpandedLength}`);
          }
        }
        if (-1 === t2.indexOf("&")) return t2;
        for (let e3 in this.lastEntities) {
          const n3 = this.lastEntities[e3];
          t2 = t2.replace(n3.regex, n3.val);
        }
        if (-1 === t2.indexOf("&")) return t2;
        if (this.options.htmlEntities) for (let e3 in this.htmlEntities) {
          const n3 = this.htmlEntities[e3];
          t2 = t2.replace(n3.regex, n3.val);
        }
        return t2.replace(this.ampEntity.regex, this.ampEntity.val);
      };
      function G(t2, e2, n2, i2) {
        return t2 && (void 0 === i2 && (i2 = 0 === e2.child.length), void 0 !== (t2 = this.parseTextData(t2, e2.tagname, n2, false, !!e2[":@"] && 0 !== Object.keys(e2[":@"]).length, i2)) && "" !== t2 && e2.add(this.options.textNodeName, t2), t2 = ""), t2;
      }
      function X(t2, e2, n2, i2) {
        return !(!e2 || !e2.has(i2)) || !(!t2 || !t2.has(n2));
      }
      function z(t2, e2, n2, i2) {
        const s2 = t2.indexOf(e2, n2);
        if (-1 === s2) throw new Error(i2);
        return s2 + e2.length - 1;
      }
      function W(t2, e2, n2, i2 = ">") {
        const s2 = (function(t3, e3, n3 = ">") {
          let i3, s3 = "";
          for (let r3 = e3; r3 < t3.length; r3++) {
            let e4 = t3[r3];
            if (i3) e4 === i3 && (i3 = "");
            else if ('"' === e4 || "'" === e4) i3 = e4;
            else if (e4 === n3[0]) {
              if (!n3[1]) return { data: s3, index: r3 };
              if (t3[r3 + 1] === n3[1]) return { data: s3, index: r3 };
            } else "	" === e4 && (e4 = " ");
            s3 += e4;
          }
        })(t2, e2 + 1, i2);
        if (!s2) return;
        let r2 = s2.data;
        const o2 = s2.index, a2 = r2.search(/\s/);
        let l2 = r2, u2 = true;
        -1 !== a2 && (l2 = r2.substring(0, a2), r2 = r2.substring(a2 + 1).trimStart());
        const d2 = l2;
        if (n2) {
          const t3 = l2.indexOf(":");
          -1 !== t3 && (l2 = l2.substr(t3 + 1), u2 = l2 !== s2.data.substr(t3 + 1));
        }
        return { tagName: l2, tagExp: r2, closeIndex: o2, attrExpPresent: u2, rawTagName: d2 };
      }
      function q(t2, e2, n2) {
        const i2 = n2;
        let s2 = 1;
        for (; n2 < t2.length; n2++) if ("<" === t2[n2]) if ("/" === t2[n2 + 1]) {
          const r2 = z(t2, ">", n2, `${e2} is not closed`);
          if (t2.substring(n2 + 2, r2).trim() === e2 && (s2--, 0 === s2)) return { tagContent: t2.substring(i2, n2), i: r2 };
          n2 = r2;
        } else if ("?" === t2[n2 + 1]) n2 = z(t2, "?>", n2 + 1, "StopNode is not closed.");
        else if ("!--" === t2.substr(n2 + 1, 3)) n2 = z(t2, "-->", n2 + 3, "StopNode is not closed.");
        else if ("![" === t2.substr(n2 + 1, 2)) n2 = z(t2, "]]>", n2, "StopNode is not closed.") - 2;
        else {
          const i3 = W(t2, n2, ">");
          i3 && ((i3 && i3.tagName) === e2 && "/" !== i3.tagExp[i3.tagExp.length - 1] && s2++, n2 = i3.closeIndex);
        }
      }
      function Z(t2, e2, n2) {
        if (e2 && "string" == typeof t2) {
          const e3 = t2.trim();
          return "true" === e3 || "false" !== e3 && (function(t3, e4 = {}) {
            if (e4 = Object.assign({}, D, e4), !t3 || "string" != typeof t3) return t3;
            let n3 = t3.trim();
            if (void 0 !== e4.skipLike && e4.skipLike.test(n3)) return t3;
            if ("0" === t3) return 0;
            if (e4.hex && $.test(n3)) return (function(t4) {
              if (parseInt) return parseInt(t4, 16);
              if (Number.parseInt) return Number.parseInt(t4, 16);
              if (window && window.parseInt) return window.parseInt(t4, 16);
              throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
            })(n3);
            if (n3.includes("e") || n3.includes("E")) return (function(t4, e5, n4) {
              if (!n4.eNotation) return t4;
              const i3 = e5.match(j);
              if (i3) {
                let s2 = i3[1] || "";
                const r2 = -1 === i3[3].indexOf("e") ? "E" : "e", o2 = i3[2], a2 = s2 ? t4[o2.length + 1] === r2 : t4[o2.length] === r2;
                return o2.length > 1 && a2 ? t4 : 1 !== o2.length || !i3[3].startsWith(`.${r2}`) && i3[3][0] !== r2 ? n4.leadingZeros && !a2 ? (e5 = (i3[1] || "") + i3[3], Number(e5)) : t4 : Number(e5);
              }
              return t4;
            })(t3, n3, e4);
            {
              const s2 = V.exec(n3);
              if (s2) {
                const r2 = s2[1] || "", o2 = s2[2];
                let a2 = (i2 = s2[3]) && -1 !== i2.indexOf(".") ? ("." === (i2 = i2.replace(/0+$/, "")) ? i2 = "0" : "." === i2[0] ? i2 = "0" + i2 : "." === i2[i2.length - 1] && (i2 = i2.substring(0, i2.length - 1)), i2) : i2;
                const l2 = r2 ? "." === t3[o2.length + 1] : "." === t3[o2.length];
                if (!e4.leadingZeros && (o2.length > 1 || 1 === o2.length && !l2)) return t3;
                {
                  const i3 = Number(n3), s3 = String(i3);
                  if (0 === i3) return i3;
                  if (-1 !== s3.search(/[eE]/)) return e4.eNotation ? i3 : t3;
                  if (-1 !== n3.indexOf(".")) return "0" === s3 || s3 === a2 || s3 === `${r2}${a2}` ? i3 : t3;
                  let l3 = o2 ? a2 : n3;
                  return o2 ? l3 === s3 || r2 + l3 === s3 ? i3 : t3 : l3 === s3 || l3 === r2 + s3 ? i3 : t3;
                }
              }
              return t3;
            }
            var i2;
          })(t2, n2);
        }
        return void 0 !== t2 ? t2 : "";
      }
      function K(t2, e2, n2) {
        const i2 = Number.parseInt(t2, e2);
        return i2 >= 0 && i2 <= 1114111 ? String.fromCodePoint(i2) : n2 + t2 + ";";
      }
      const Q = I.getMetaDataSymbol();
      function J(t2, e2) {
        return H(t2, e2);
      }
      function H(t2, e2, n2) {
        let i2;
        const s2 = {};
        for (let r2 = 0; r2 < t2.length; r2++) {
          const o2 = t2[r2], a2 = tt(o2);
          let l2 = "";
          if (l2 = void 0 === n2 ? a2 : n2 + "." + a2, a2 === e2.textNodeName) void 0 === i2 ? i2 = o2[a2] : i2 += "" + o2[a2];
          else {
            if (void 0 === a2) continue;
            if (o2[a2]) {
              let t3 = H(o2[a2], e2, l2);
              const n3 = nt(t3, e2);
              o2[":@"] ? et(t3, o2[":@"], l2, e2) : 1 !== Object.keys(t3).length || void 0 === t3[e2.textNodeName] || e2.alwaysCreateTextNode ? 0 === Object.keys(t3).length && (e2.alwaysCreateTextNode ? t3[e2.textNodeName] = "" : t3 = "") : t3 = t3[e2.textNodeName], void 0 !== o2[Q] && "object" == typeof t3 && null !== t3 && (t3[Q] = o2[Q]), void 0 !== s2[a2] && Object.prototype.hasOwnProperty.call(s2, a2) ? (Array.isArray(s2[a2]) || (s2[a2] = [s2[a2]]), s2[a2].push(t3)) : e2.isArray(a2, l2, n3) ? s2[a2] = [t3] : s2[a2] = t3;
            }
          }
        }
        return "string" == typeof i2 ? i2.length > 0 && (s2[e2.textNodeName] = i2) : void 0 !== i2 && (s2[e2.textNodeName] = i2), s2;
      }
      function tt(t2) {
        const e2 = Object.keys(t2);
        for (let t3 = 0; t3 < e2.length; t3++) {
          const n2 = e2[t3];
          if (":@" !== n2) return n2;
        }
      }
      function et(t2, e2, n2, i2) {
        if (e2) {
          const s2 = Object.keys(e2), r2 = s2.length;
          for (let o2 = 0; o2 < r2; o2++) {
            const r3 = s2[o2];
            i2.isArray(r3, n2 + "." + r3, true, true) ? t2[r3] = [e2[r3]] : t2[r3] = e2[r3];
          }
        }
      }
      function nt(t2, e2) {
        const { textNodeName: n2 } = e2, i2 = Object.keys(t2).length;
        return 0 === i2 || !(1 !== i2 || !t2[n2] && "boolean" != typeof t2[n2] && 0 !== t2[n2]);
      }
      class it {
        constructor(t2) {
          this.externalEntities = {}, this.options = v(t2);
        }
        parse(t2, e2) {
          if ("string" != typeof t2 && t2.toString) t2 = t2.toString();
          else if ("string" != typeof t2) throw new Error("XML data is accepted in String or Bytes[] form.");
          if (e2) {
            true === e2 && (e2 = {});
            const n3 = a(t2, e2);
            if (true !== n3) throw Error(`${n3.err.msg}:${n3.err.line}:${n3.err.col}`);
          }
          const n2 = new L(this.options);
          n2.addExternalEntities(this.externalEntities);
          const i2 = n2.parseXml(t2);
          return this.options.preserveOrder || void 0 === i2 ? i2 : J(i2, this.options);
        }
        addEntity(t2, e2) {
          if (-1 !== e2.indexOf("&")) throw new Error("Entity value can't have '&'");
          if (-1 !== t2.indexOf("&") || -1 !== t2.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
          if ("&" === e2) throw new Error("An entity with value '&' is not permitted");
          this.externalEntities[t2] = e2;
        }
        static getMetaDataSymbol() {
          return I.getMetaDataSymbol();
        }
      }
      function st(t2, e2) {
        let n2 = "";
        return e2.format && e2.indentBy.length > 0 && (n2 = "\n"), rt(t2, e2, "", n2);
      }
      function rt(t2, e2, n2, i2) {
        let s2 = "", r2 = false;
        if (!Array.isArray(t2)) {
          if (null != t2) {
            let n3 = t2.toString();
            return n3 = ut(n3, e2), n3;
          }
          return "";
        }
        for (let o2 = 0; o2 < t2.length; o2++) {
          const a2 = t2[o2], l2 = ot(a2);
          if (void 0 === l2) continue;
          let u2 = "";
          if (u2 = 0 === n2.length ? l2 : `${n2}.${l2}`, l2 === e2.textNodeName) {
            let t3 = a2[l2];
            lt(u2, e2) || (t3 = e2.tagValueProcessor(l2, t3), t3 = ut(t3, e2)), r2 && (s2 += i2), s2 += t3, r2 = false;
            continue;
          }
          if (l2 === e2.cdataPropName) {
            r2 && (s2 += i2), s2 += `<![CDATA[${a2[l2][0][e2.textNodeName]}]]>`, r2 = false;
            continue;
          }
          if (l2 === e2.commentPropName) {
            s2 += i2 + `<!--${a2[l2][0][e2.textNodeName]}-->`, r2 = true;
            continue;
          }
          if ("?" === l2[0]) {
            const t3 = at(a2[":@"], e2), n3 = "?xml" === l2 ? "" : i2;
            let o3 = a2[l2][0][e2.textNodeName];
            o3 = 0 !== o3.length ? " " + o3 : "", s2 += n3 + `<${l2}${o3}${t3}?>`, r2 = true;
            continue;
          }
          let d2 = i2;
          "" !== d2 && (d2 += e2.indentBy);
          const h2 = i2 + `<${l2}${at(a2[":@"], e2)}`, p2 = rt(a2[l2], e2, u2, d2);
          -1 !== e2.unpairedTags.indexOf(l2) ? e2.suppressUnpairedNode ? s2 += h2 + ">" : s2 += h2 + "/>" : p2 && 0 !== p2.length || !e2.suppressEmptyNode ? p2 && p2.endsWith(">") ? s2 += h2 + `>${p2}${i2}</${l2}>` : (s2 += h2 + ">", p2 && "" !== i2 && (p2.includes("/>") || p2.includes("</")) ? s2 += i2 + e2.indentBy + p2 + i2 : s2 += p2, s2 += `</${l2}>`) : s2 += h2 + "/>", r2 = true;
        }
        return s2;
      }
      function ot(t2) {
        const e2 = Object.keys(t2);
        for (let n2 = 0; n2 < e2.length; n2++) {
          const i2 = e2[n2];
          if (Object.prototype.hasOwnProperty.call(t2, i2) && ":@" !== i2) return i2;
        }
      }
      function at(t2, e2) {
        let n2 = "";
        if (t2 && !e2.ignoreAttributes) for (let i2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, i2)) continue;
          let s2 = e2.attributeValueProcessor(i2, t2[i2]);
          s2 = ut(s2, e2), true === s2 && e2.suppressBooleanAttributes ? n2 += ` ${i2.substr(e2.attributeNamePrefix.length)}` : n2 += ` ${i2.substr(e2.attributeNamePrefix.length)}="${s2}"`;
        }
        return n2;
      }
      function lt(t2, e2) {
        let n2 = (t2 = t2.substr(0, t2.length - e2.textNodeName.length - 1)).substr(t2.lastIndexOf(".") + 1);
        for (let i2 in e2.stopNodes) if (e2.stopNodes[i2] === t2 || e2.stopNodes[i2] === "*." + n2) return true;
        return false;
      }
      function ut(t2, e2) {
        if (t2 && t2.length > 0 && e2.processEntities) for (let n2 = 0; n2 < e2.entities.length; n2++) {
          const i2 = e2.entities[n2];
          t2 = t2.replace(i2.regex, i2.val);
        }
        return t2;
      }
      const dt = { attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, cdataPropName: false, format: false, indentBy: "  ", suppressEmptyNode: false, suppressUnpairedNode: true, suppressBooleanAttributes: true, tagValueProcessor: function(t2, e2) {
        return e2;
      }, attributeValueProcessor: function(t2, e2) {
        return e2;
      }, preserveOrder: false, commentPropName: false, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: true, stopNodes: [], oneListGroup: false };
      function ht(t2) {
        var e2;
        this.options = Object.assign({}, dt, t2), true === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
          return false;
        } : (this.ignoreAttributesFn = "function" == typeof (e2 = this.options.ignoreAttributes) ? e2 : Array.isArray(e2) ? (t3) => {
          for (const n2 of e2) {
            if ("string" == typeof n2 && t3 === n2) return true;
            if (n2 instanceof RegExp && n2.test(t3)) return true;
          }
        } : () => false, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = ft), this.processTextOrObjNode = pt, this.options.format ? (this.indentate = ct, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
          return "";
        }, this.tagEndChar = ">", this.newLine = "");
      }
      function pt(t2, e2, n2, i2) {
        const s2 = this.j2x(t2, n2 + 1, i2.concat(e2));
        return void 0 !== t2[this.options.textNodeName] && 1 === Object.keys(t2).length ? this.buildTextValNode(t2[this.options.textNodeName], e2, s2.attrStr, n2) : this.buildObjectNode(s2.val, e2, s2.attrStr, n2);
      }
      function ct(t2) {
        return this.options.indentBy.repeat(t2);
      }
      function ft(t2) {
        return !(!t2.startsWith(this.options.attributeNamePrefix) || t2 === this.options.textNodeName) && t2.substr(this.attrPrefixLen);
      }
      ht.prototype.build = function(t2) {
        return this.options.preserveOrder ? st(t2, this.options) : (Array.isArray(t2) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t2 = { [this.options.arrayNodeName]: t2 }), this.j2x(t2, 0, []).val);
      }, ht.prototype.j2x = function(t2, e2, n2) {
        let i2 = "", s2 = "";
        const r2 = n2.join(".");
        for (let o2 in t2) if (Object.prototype.hasOwnProperty.call(t2, o2)) if (void 0 === t2[o2]) this.isAttribute(o2) && (s2 += "");
        else if (null === t2[o2]) this.isAttribute(o2) || o2 === this.options.cdataPropName ? s2 += "" : "?" === o2[0] ? s2 += this.indentate(e2) + "<" + o2 + "?" + this.tagEndChar : s2 += this.indentate(e2) + "<" + o2 + "/" + this.tagEndChar;
        else if (t2[o2] instanceof Date) s2 += this.buildTextValNode(t2[o2], o2, "", e2);
        else if ("object" != typeof t2[o2]) {
          const n3 = this.isAttribute(o2);
          if (n3 && !this.ignoreAttributesFn(n3, r2)) i2 += this.buildAttrPairStr(n3, "" + t2[o2]);
          else if (!n3) if (o2 === this.options.textNodeName) {
            let e3 = this.options.tagValueProcessor(o2, "" + t2[o2]);
            s2 += this.replaceEntitiesValue(e3);
          } else s2 += this.buildTextValNode(t2[o2], o2, "", e2);
        } else if (Array.isArray(t2[o2])) {
          const i3 = t2[o2].length;
          let r3 = "", a2 = "";
          for (let l2 = 0; l2 < i3; l2++) {
            const i4 = t2[o2][l2];
            if (void 0 === i4) ;
            else if (null === i4) "?" === o2[0] ? s2 += this.indentate(e2) + "<" + o2 + "?" + this.tagEndChar : s2 += this.indentate(e2) + "<" + o2 + "/" + this.tagEndChar;
            else if ("object" == typeof i4) if (this.options.oneListGroup) {
              const t3 = this.j2x(i4, e2 + 1, n2.concat(o2));
              r3 += t3.val, this.options.attributesGroupName && i4.hasOwnProperty(this.options.attributesGroupName) && (a2 += t3.attrStr);
            } else r3 += this.processTextOrObjNode(i4, o2, e2, n2);
            else if (this.options.oneListGroup) {
              let t3 = this.options.tagValueProcessor(o2, i4);
              t3 = this.replaceEntitiesValue(t3), r3 += t3;
            } else r3 += this.buildTextValNode(i4, o2, "", e2);
          }
          this.options.oneListGroup && (r3 = this.buildObjectNode(r3, o2, a2, e2)), s2 += r3;
        } else if (this.options.attributesGroupName && o2 === this.options.attributesGroupName) {
          const e3 = Object.keys(t2[o2]), n3 = e3.length;
          for (let s3 = 0; s3 < n3; s3++) i2 += this.buildAttrPairStr(e3[s3], "" + t2[o2][e3[s3]]);
        } else s2 += this.processTextOrObjNode(t2[o2], o2, e2, n2);
        return { attrStr: i2, val: s2 };
      }, ht.prototype.buildAttrPairStr = function(t2, e2) {
        return e2 = this.options.attributeValueProcessor(t2, "" + e2), e2 = this.replaceEntitiesValue(e2), this.options.suppressBooleanAttributes && "true" === e2 ? " " + t2 : " " + t2 + '="' + e2 + '"';
      }, ht.prototype.buildObjectNode = function(t2, e2, n2, i2) {
        if ("" === t2) return "?" === e2[0] ? this.indentate(i2) + "<" + e2 + n2 + "?" + this.tagEndChar : this.indentate(i2) + "<" + e2 + n2 + this.closeTag(e2) + this.tagEndChar;
        {
          let s2 = "</" + e2 + this.tagEndChar, r2 = "";
          return "?" === e2[0] && (r2 = "?", s2 = ""), !n2 && "" !== n2 || -1 !== t2.indexOf("<") ? false !== this.options.commentPropName && e2 === this.options.commentPropName && 0 === r2.length ? this.indentate(i2) + `<!--${t2}-->` + this.newLine : this.indentate(i2) + "<" + e2 + n2 + r2 + this.tagEndChar + t2 + this.indentate(i2) + s2 : this.indentate(i2) + "<" + e2 + n2 + r2 + ">" + t2 + s2;
        }
      }, ht.prototype.closeTag = function(t2) {
        let e2 = "";
        return -1 !== this.options.unpairedTags.indexOf(t2) ? this.options.suppressUnpairedNode || (e2 = "/") : e2 = this.options.suppressEmptyNode ? "/" : `></${t2}`, e2;
      }, ht.prototype.buildTextValNode = function(t2, e2, n2, i2) {
        if (false !== this.options.cdataPropName && e2 === this.options.cdataPropName) return this.indentate(i2) + `<![CDATA[${t2}]]>` + this.newLine;
        if (false !== this.options.commentPropName && e2 === this.options.commentPropName) return this.indentate(i2) + `<!--${t2}-->` + this.newLine;
        if ("?" === e2[0]) return this.indentate(i2) + "<" + e2 + n2 + "?" + this.tagEndChar;
        {
          let s2 = this.options.tagValueProcessor(e2, t2);
          return s2 = this.replaceEntitiesValue(s2), "" === s2 ? this.indentate(i2) + "<" + e2 + n2 + this.closeTag(e2) + this.tagEndChar : this.indentate(i2) + "<" + e2 + n2 + ">" + s2 + "</" + e2 + this.tagEndChar;
        }
      }, ht.prototype.replaceEntitiesValue = function(t2) {
        if (t2 && t2.length > 0 && this.options.processEntities) for (let e2 = 0; e2 < this.options.entities.length; e2++) {
          const n2 = this.options.entities[e2];
          t2 = t2.replace(n2.regex, n2.val);
        }
        return t2;
      };
      const gt = ht, xt = { validate: a };
      module.exports = e;
    })();
  }
});

// node_modules/@aws-sdk/xml-builder/dist-cjs/xml-parser.js
var require_xml_parser = __commonJS({
  "node_modules/@aws-sdk/xml-builder/dist-cjs/xml-parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseXML = parseXML3;
    var fast_xml_parser_1 = require_fxp();
    var parser = new fast_xml_parser_1.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_, val) => val.trim() === "" && val.includes("\n") ? "" : void 0,
      maxNestedTags: 1024
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    function parseXML3(xmlString) {
      return parser.parse(xmlString, true);
    }
  }
});

// node_modules/@aws-sdk/xml-builder/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "node_modules/@aws-sdk/xml-builder/dist-cjs/index.js"(exports) {
    "use strict";
    var xmlParser = require_xml_parser();
    function escapeAttribute(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function escapeElement(value) {
      return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
    }
    var XmlText2 = class {
      value;
      constructor(value) {
        this.value = value;
      }
      toString() {
        return escapeElement("" + this.value);
      }
    };
    var XmlNode2 = class _XmlNode {
      name;
      children;
      attributes = {};
      static of(name, childText, withName) {
        const node = new _XmlNode(name);
        if (childText !== void 0) {
          node.addChildNode(new XmlText2(childText));
        }
        if (withName !== void 0) {
          node.withName(withName);
        }
        return node;
      }
      constructor(name, children = []) {
        this.name = name;
        this.children = children;
      }
      withName(name) {
        this.name = name;
        return this;
      }
      addAttribute(name, value) {
        this.attributes[name] = value;
        return this;
      }
      addChildNode(child) {
        this.children.push(child);
        return this;
      }
      removeAttribute(name) {
        delete this.attributes[name];
        return this;
      }
      n(name) {
        this.name = name;
        return this;
      }
      c(child) {
        this.children.push(child);
        return this;
      }
      a(name, value) {
        if (value != null) {
          this.attributes[name] = value;
        }
        return this;
      }
      cc(input, field, withName = field) {
        if (input[field] != null) {
          const node = _XmlNode.of(field, input[field]).withName(withName);
          this.c(node);
        }
      }
      l(input, listName, memberName, valueProvider) {
        if (input[listName] != null) {
          const nodes = valueProvider();
          nodes.map((node) => {
            node.withName(memberName);
            this.c(node);
          });
        }
      }
      lc(input, listName, memberName, valueProvider) {
        if (input[listName] != null) {
          const nodes = valueProvider();
          const containerNode = new _XmlNode(memberName);
          nodes.map((node) => {
            containerNode.c(node);
          });
          this.c(containerNode);
        }
      }
      toString() {
        const hasChildren = Boolean(this.children.length);
        let xmlText = `<${this.name}`;
        const attributes = this.attributes;
        for (const attributeName of Object.keys(attributes)) {
          const attribute = attributes[attributeName];
          if (attribute != null) {
            xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
          }
        }
        return xmlText += !hasChildren ? "/>" : `>${this.children.map((c) => c.toString()).join("")}</${this.name}>`;
      }
    };
    exports.parseXML = xmlParser.parseXML;
    exports.XmlNode = XmlNode2;
    exports.XmlText = XmlText2;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js
var import_xml_builder, import_smithy_client4, import_util_utf87, XmlShapeDeserializer;
var init_XmlShapeDeserializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js"() {
    import_xml_builder = __toESM(require_dist_cjs24());
    init_protocols();
    init_schema();
    import_smithy_client4 = __toESM(require_dist_cjs23());
    import_util_utf87 = __toESM(require_dist_cjs7());
    init_ConfigurableSerdeContext();
    init_UnionSerde();
    XmlShapeDeserializer = class extends SerdeContextConfig {
      settings;
      stringDeserializer;
      constructor(settings) {
        super();
        this.settings = settings;
        this.stringDeserializer = new FromStringShapeDeserializer(settings);
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.stringDeserializer.setSerdeContext(serdeContext);
      }
      read(schema, bytes, key) {
        const ns = NormalizedSchema.of(schema);
        const memberSchemas = ns.getMemberSchemas();
        const isEventPayload = ns.isStructSchema() && ns.isMemberSchema() && !!Object.values(memberSchemas).find((memberNs) => {
          return !!memberNs.getMemberTraits().eventPayload;
        });
        if (isEventPayload) {
          const output = {};
          const memberName = Object.keys(memberSchemas)[0];
          const eventMemberSchema = memberSchemas[memberName];
          if (eventMemberSchema.isBlobSchema()) {
            output[memberName] = bytes;
          } else {
            output[memberName] = this.read(memberSchemas[memberName], bytes);
          }
          return output;
        }
        const xmlString = (this.serdeContext?.utf8Encoder ?? import_util_utf87.toUtf8)(bytes);
        const parsedObject = this.parseXml(xmlString);
        return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
      }
      readSchema(_schema, value) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isUnitSchema()) {
          return;
        }
        const traits = ns.getMergedTraits();
        if (ns.isListSchema() && !Array.isArray(value)) {
          return this.readSchema(ns, [value]);
        }
        if (value == null) {
          return value;
        }
        if (typeof value === "object") {
          const flat = !!traits.xmlFlattened;
          if (ns.isListSchema()) {
            const listValue = ns.getValueSchema();
            const buffer2 = [];
            const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
            const source = flat ? value : (value[0] ?? value)[sourceKey];
            if (source == null) {
              return buffer2;
            }
            const sourceArray = Array.isArray(source) ? source : [source];
            for (const v of sourceArray) {
              buffer2.push(this.readSchema(listValue, v));
            }
            return buffer2;
          }
          const buffer = {};
          if (ns.isMapSchema()) {
            const keyNs = ns.getKeySchema();
            const memberNs = ns.getValueSchema();
            let entries;
            if (flat) {
              entries = Array.isArray(value) ? value : [value];
            } else {
              entries = Array.isArray(value.entry) ? value.entry : [value.entry];
            }
            const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
            const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
            for (const entry of entries) {
              const key = entry[keyProperty];
              const value2 = entry[valueProperty];
              buffer[key] = this.readSchema(memberNs, value2);
            }
            return buffer;
          }
          if (ns.isStructSchema()) {
            const union = ns.isUnionSchema();
            let unionSerde;
            if (union) {
              unionSerde = new UnionSerde(value, buffer);
            }
            for (const [memberName, memberSchema] of ns.structIterator()) {
              const memberTraits = memberSchema.getMergedTraits();
              const xmlObjectKey = !memberTraits.httpPayload ? memberSchema.getMemberTraits().xmlName ?? memberName : memberTraits.xmlName ?? memberSchema.getName();
              if (union) {
                unionSerde.mark(xmlObjectKey);
              }
              if (value[xmlObjectKey] != null) {
                buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
              }
            }
            if (union) {
              unionSerde.writeUnknown();
            }
            return buffer;
          }
          if (ns.isDocumentSchema()) {
            return value;
          }
          throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
        }
        if (ns.isListSchema()) {
          return [];
        }
        if (ns.isMapSchema() || ns.isStructSchema()) {
          return {};
        }
        return this.stringDeserializer.read(ns, value);
      }
      parseXml(xml) {
        if (xml.length) {
          let parsedObj;
          try {
            parsedObj = (0, import_xml_builder.parseXML)(xml);
          } catch (e) {
            if (e && typeof e === "object") {
              Object.defineProperty(e, "$responseBodyText", {
                value: xml
              });
            }
            throw e;
          }
          const textNodeName = "#text";
          const key = Object.keys(parsedObj)[0];
          const parsedObjToReturn = parsedObj[key];
          if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
          }
          return (0, import_smithy_client4.getValueFromTextNode)(parsedObjToReturn);
        }
        return {};
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js
var import_smithy_client5, import_util_base646, QueryShapeSerializer;
var init_QueryShapeSerializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_smithy_client5 = __toESM(require_dist_cjs23());
    import_util_base646 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    QueryShapeSerializer = class extends SerdeContextConfig {
      settings;
      buffer;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value, prefix = "") {
        if (this.buffer === void 0) {
          this.buffer = "";
        }
        const ns = NormalizedSchema.of(schema);
        if (prefix && !prefix.endsWith(".")) {
          prefix += ".";
        }
        if (ns.isBlobSchema()) {
          if (typeof value === "string" || value instanceof Uint8Array) {
            this.writeKey(prefix);
            this.writeValue((this.serdeContext?.base64Encoder ?? import_util_base646.toBase64)(value));
          }
        } else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          } else if (ns.isIdempotencyToken()) {
            this.writeKey(prefix);
            this.writeValue((0, import_uuid.v4)());
          }
        } else if (ns.isBigIntegerSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isBigDecimalSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(value instanceof NumericValue ? value.string : String(value));
          }
        } else if (ns.isTimestampSchema()) {
          if (value instanceof Date) {
            this.writeKey(prefix);
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                this.writeValue(value.toISOString().replace(".000Z", "Z"));
                break;
              case 6:
                this.writeValue((0, import_smithy_client5.dateToUtcString)(value));
                break;
              case 7:
                this.writeValue(String(value.getTime() / 1e3));
                break;
            }
          }
        } else if (ns.isDocumentSchema()) {
          if (Array.isArray(value)) {
            this.write(64 | 15, value, prefix);
          } else if (value instanceof Date) {
            this.write(4, value, prefix);
          } else if (value instanceof Uint8Array) {
            this.write(21, value, prefix);
          } else if (value && typeof value === "object") {
            this.write(128 | 15, value, prefix);
          } else {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isListSchema()) {
          if (Array.isArray(value)) {
            if (value.length === 0) {
              if (this.settings.serializeEmptyLists) {
                this.writeKey(prefix);
                this.writeValue("");
              }
            } else {
              const member2 = ns.getValueSchema();
              const flat = this.settings.flattenLists || ns.getMergedTraits().xmlFlattened;
              let i = 1;
              for (const item of value) {
                if (item == null) {
                  continue;
                }
                const traits = member2.getMergedTraits();
                const suffix = this.getKey("member", traits.xmlName, traits.ec2QueryName);
                const key = flat ? `${prefix}${i}` : `${prefix}${suffix}.${i}`;
                this.write(member2, item, key);
                ++i;
              }
            }
          }
        } else if (ns.isMapSchema()) {
          if (value && typeof value === "object") {
            const keySchema = ns.getKeySchema();
            const memberSchema = ns.getValueSchema();
            const flat = ns.getMergedTraits().xmlFlattened;
            let i = 1;
            for (const [k, v] of Object.entries(value)) {
              if (v == null) {
                continue;
              }
              const keyTraits = keySchema.getMergedTraits();
              const keySuffix = this.getKey("key", keyTraits.xmlName, keyTraits.ec2QueryName);
              const key = flat ? `${prefix}${i}.${keySuffix}` : `${prefix}entry.${i}.${keySuffix}`;
              const valTraits = memberSchema.getMergedTraits();
              const valueSuffix = this.getKey("value", valTraits.xmlName, valTraits.ec2QueryName);
              const valueKey = flat ? `${prefix}${i}.${valueSuffix}` : `${prefix}entry.${i}.${valueSuffix}`;
              this.write(keySchema, k, key);
              this.write(memberSchema, v, valueKey);
              ++i;
            }
          }
        } else if (ns.isStructSchema()) {
          if (value && typeof value === "object") {
            let didWriteMember = false;
            for (const [memberName, member2] of ns.structIterator()) {
              if (value[memberName] == null && !member2.isIdempotencyToken()) {
                continue;
              }
              const traits = member2.getMergedTraits();
              const suffix = this.getKey(memberName, traits.xmlName, traits.ec2QueryName, "struct");
              const key = `${prefix}${suffix}`;
              this.write(member2, value[memberName], key);
              didWriteMember = true;
            }
            if (!didWriteMember && ns.isUnionSchema()) {
              const { $unknown } = value;
              if (Array.isArray($unknown)) {
                const [k, v] = $unknown;
                const key = `${prefix}${k}`;
                this.write(15, v, key);
              }
            }
          }
        } else if (ns.isUnitSchema()) {
        } else {
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
        }
      }
      flush() {
        if (this.buffer === void 0) {
          throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        }
        const str = this.buffer;
        delete this.buffer;
        return str;
      }
      getKey(memberName, xmlName, ec2QueryName, keySource) {
        const { ec2, capitalizeKeys } = this.settings;
        if (ec2 && ec2QueryName) {
          return ec2QueryName;
        }
        const key = xmlName ?? memberName;
        if (capitalizeKeys && keySource === "struct") {
          return key[0].toUpperCase() + key.slice(1);
        }
        return key;
      }
      writeKey(key) {
        if (key.endsWith(".")) {
          key = key.slice(0, key.length - 1);
        }
        this.buffer += `&${extendedEncodeURIComponent(key)}=`;
      }
      writeValue(value) {
        this.buffer += extendedEncodeURIComponent(value);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js
var AwsQueryProtocol;
var init_AwsQueryProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_XmlShapeDeserializer();
    init_QueryShapeSerializer();
    AwsQueryProtocol = class extends RpcProtocol {
      options;
      serializer;
      deserializer;
      mixin = new ProtocolLib();
      constructor(options) {
        super({
          defaultNamespace: options.defaultNamespace
        });
        this.options = options;
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 5
          },
          httpBindings: false,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace,
          serializeEmptyLists: true
        };
        this.serializer = new QueryShapeSerializer(settings);
        this.deserializer = new XmlShapeDeserializer(settings);
      }
      getShapeId() {
        return "aws.protocols#awsQuery";
      }
      setSerdeContext(serdeContext) {
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
      }
      getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
          request.path += "/";
        }
        Object.assign(request.headers, {
          "content-type": `application/x-www-form-urlencoded`
        });
        if (deref(operationSchema.input) === "unit" || !request.body) {
          request.body = "";
        }
        const action = operationSchema.name.split("#")[1] ?? operationSchema.name;
        request.body = `Action=${action}&Version=${this.options.version}` + request.body;
        if (request.body.endsWith("&")) {
          request.body = request.body.slice(-1);
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes2 = await collectBody(response.body, context);
          if (bytes2.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes2));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const shortName = operationSchema.name.split("#")[1] ?? operationSchema.name;
        const awsQueryResultKey = ns.isStructSchema() && this.useNestedResult() ? shortName + "Result" : void 0;
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject
        };
        return output;
      }
      useNestedResult() {
        return true;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
        const errorData = this.loadQueryError(dataObject) ?? {};
        const message = this.loadQueryErrorMessage(dataObject);
        errorData.message = message;
        errorData.Error = {
          Type: errorData.Type,
          Code: errorData.Code,
          Message: message
        };
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, errorData, metadata, this.mixin.findQueryCompatibleError);
        const ns = NormalizedSchema.of(errorSchema);
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {
          Type: errorData.Error.Type,
          Code: errorData.Error.Code,
          Error: errorData.Error
        };
        for (const [name, member2] of ns.structIterator()) {
          const target = member2.getMergedTraits().xmlName ?? name;
          const value = errorData[target] ?? dataObject[target];
          output[name] = this.deserializer.readSchema(member2, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
      loadQueryErrorCode(output, data2) {
        const code = (data2.Errors?.[0]?.Error ?? data2.Errors?.Error ?? data2.Error)?.Code;
        if (code !== void 0) {
          return code;
        }
        if (output.statusCode == 404) {
          return "NotFound";
        }
      }
      loadQueryError(data2) {
        return data2.Errors?.[0]?.Error ?? data2.Errors?.Error ?? data2.Error;
      }
      loadQueryErrorMessage(data2) {
        const errorData = this.loadQueryError(data2);
        return errorData?.message ?? errorData?.Message ?? data2.message ?? data2.Message ?? "Unknown";
      }
      getDefaultContentType() {
        return "application/x-www-form-urlencoded";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js
var AwsEc2QueryProtocol;
var init_AwsEc2QueryProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js"() {
    init_AwsQueryProtocol();
    AwsEc2QueryProtocol = class extends AwsQueryProtocol {
      options;
      constructor(options) {
        super(options);
        this.options = options;
        const ec2Settings = {
          capitalizeKeys: true,
          flattenLists: true,
          serializeEmptyLists: false,
          ec2: true
        };
        Object.assign(this.serializer.settings, ec2Settings);
      }
      getShapeId() {
        return "aws.protocols#ec2Query";
      }
      useNestedResult() {
        return false;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QuerySerializerSettings.js
var init_QuerySerializerSettings = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QuerySerializerSettings.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_xml_builder2, import_smithy_client6, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    import_xml_builder2 = __toESM(require_dist_cjs24());
    import_smithy_client6 = __toESM(require_dist_cjs23());
    init_common();
    parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        let parsedObj;
        try {
          parsedObj = (0, import_xml_builder2.parseXML)(encoded);
        } catch (e) {
          if (e && typeof e === "object") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return (0, import_smithy_client6.getValueFromTextNode)(parsedObjToReturn);
      }
      return {};
    });
    parseXmlErrorBody = async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    loadRestXmlErrorCode = (output, data2) => {
      if (data2?.Error?.Code !== void 0) {
        return data2.Error.Code;
      }
      if (data2?.Code !== void 0) {
        return data2.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js
var import_xml_builder3, import_smithy_client7, import_util_base647, XmlShapeSerializer;
var init_XmlShapeSerializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js"() {
    import_xml_builder3 = __toESM(require_dist_cjs24());
    init_protocols();
    init_schema();
    init_serde();
    import_smithy_client7 = __toESM(require_dist_cjs23());
    import_util_base647 = __toESM(require_dist_cjs8());
    init_ConfigurableSerdeContext();
    XmlShapeSerializer = class extends SerdeContextConfig {
      settings;
      stringBuffer;
      byteBuffer;
      buffer;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        if (ns.isStringSchema() && typeof value === "string") {
          this.stringBuffer = value;
        } else if (ns.isBlobSchema()) {
          this.byteBuffer = "byteLength" in value ? value : (this.serdeContext?.base64Decoder ?? import_util_base647.fromBase64)(value);
        } else {
          this.buffer = this.writeStruct(ns, value, void 0);
          const traits = ns.getMergedTraits();
          if (traits.httpPayload && !traits.xmlName) {
            this.buffer.withName(ns.getName());
          }
        }
      }
      flush() {
        if (this.byteBuffer !== void 0) {
          const bytes = this.byteBuffer;
          delete this.byteBuffer;
          return bytes;
        }
        if (this.stringBuffer !== void 0) {
          const str = this.stringBuffer;
          delete this.stringBuffer;
          return str;
        }
        const buffer = this.buffer;
        if (this.settings.xmlNamespace) {
          if (!buffer?.attributes?.["xmlns"]) {
            buffer.addAttribute("xmlns", this.settings.xmlNamespace);
          }
        }
        delete this.buffer;
        return buffer.toString();
      }
      writeStruct(ns, value, parentXmlns) {
        const traits = ns.getMergedTraits();
        const name = ns.isMemberSchema() && !traits.httpPayload ? ns.getMemberTraits().xmlName ?? ns.getMemberName() : traits.xmlName ?? ns.getName();
        if (!name || !ns.isStructSchema()) {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(true)}.`);
        }
        const structXmlNode = import_xml_builder3.XmlNode.of(name);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const val = value[memberName];
          if (val != null || memberSchema.isIdempotencyToken()) {
            if (memberSchema.getMergedTraits().xmlAttribute) {
              structXmlNode.addAttribute(memberSchema.getMergedTraits().xmlName ?? memberName, this.writeSimple(memberSchema, val));
              continue;
            }
            if (memberSchema.isListSchema()) {
              this.writeList(memberSchema, val, structXmlNode, xmlns);
            } else if (memberSchema.isMapSchema()) {
              this.writeMap(memberSchema, val, structXmlNode, xmlns);
            } else if (memberSchema.isStructSchema()) {
              structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
            } else {
              const memberNode = import_xml_builder3.XmlNode.of(memberSchema.getMergedTraits().xmlName ?? memberSchema.getMemberName());
              this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
              structXmlNode.addChildNode(memberNode);
            }
          }
        }
        const { $unknown } = value;
        if ($unknown && ns.isUnionSchema() && Array.isArray($unknown) && Object.keys(value).length === 1) {
          const [k, v] = $unknown;
          const node = import_xml_builder3.XmlNode.of(k);
          if (typeof v !== "string") {
            if (value instanceof import_xml_builder3.XmlNode || value instanceof import_xml_builder3.XmlText) {
              structXmlNode.addChildNode(value);
            } else {
              throw new Error(`@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.`);
            }
          }
          this.writeSimpleInto(0, v, node, xmlns);
          structXmlNode.addChildNode(node);
        }
        if (xmlns) {
          structXmlNode.addAttribute(xmlnsAttr, xmlns);
        }
        return structXmlNode;
      }
      writeList(listMember, array, container, parentXmlns) {
        if (!listMember.isMemberSchema()) {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`);
        }
        const listTraits = listMember.getMergedTraits();
        const listValueSchema = listMember.getValueSchema();
        const listValueTraits = listValueSchema.getMergedTraits();
        const sparse = !!listValueTraits.sparse;
        const flat = !!listTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);
        const writeItem = (container2, value) => {
          if (listValueSchema.isListSchema()) {
            this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container2, xmlns);
          } else if (listValueSchema.isMapSchema()) {
            this.writeMap(listValueSchema, value, container2, xmlns);
          } else if (listValueSchema.isStructSchema()) {
            const struct2 = this.writeStruct(listValueSchema, value, xmlns);
            container2.addChildNode(struct2.withName(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member"));
          } else {
            const listItemNode = import_xml_builder3.XmlNode.of(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member");
            this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
            container2.addChildNode(listItemNode);
          }
        };
        if (flat) {
          for (const value of array) {
            if (sparse || value != null) {
              writeItem(container, value);
            }
          }
        } else {
          const listNode = import_xml_builder3.XmlNode.of(listTraits.xmlName ?? listMember.getMemberName());
          if (xmlns) {
            listNode.addAttribute(xmlnsAttr, xmlns);
          }
          for (const value of array) {
            if (sparse || value != null) {
              writeItem(listNode, value);
            }
          }
          container.addChildNode(listNode);
        }
      }
      writeMap(mapMember, map2, container, parentXmlns, containerIsMap = false) {
        if (!mapMember.isMemberSchema()) {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`);
        }
        const mapTraits = mapMember.getMergedTraits();
        const mapKeySchema = mapMember.getKeySchema();
        const mapKeyTraits = mapKeySchema.getMergedTraits();
        const keyTag = mapKeyTraits.xmlName ?? "key";
        const mapValueSchema = mapMember.getValueSchema();
        const mapValueTraits = mapValueSchema.getMergedTraits();
        const valueTag = mapValueTraits.xmlName ?? "value";
        const sparse = !!mapValueTraits.sparse;
        const flat = !!mapTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);
        const addKeyValue = (entry, key, val) => {
          const keyNode = import_xml_builder3.XmlNode.of(keyTag, key);
          const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
          if (keyXmlns) {
            keyNode.addAttribute(keyXmlnsAttr, keyXmlns);
          }
          entry.addChildNode(keyNode);
          let valueNode = import_xml_builder3.XmlNode.of(valueTag);
          if (mapValueSchema.isListSchema()) {
            this.writeList(mapValueSchema, val, valueNode, xmlns);
          } else if (mapValueSchema.isMapSchema()) {
            this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
          } else if (mapValueSchema.isStructSchema()) {
            valueNode = this.writeStruct(mapValueSchema, val, xmlns);
          } else {
            this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
          }
          entry.addChildNode(valueNode);
        };
        if (flat) {
          for (const [key, val] of Object.entries(map2)) {
            if (sparse || val != null) {
              const entry = import_xml_builder3.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
              addKeyValue(entry, key, val);
              container.addChildNode(entry);
            }
          }
        } else {
          let mapNode;
          if (!containerIsMap) {
            mapNode = import_xml_builder3.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
            if (xmlns) {
              mapNode.addAttribute(xmlnsAttr, xmlns);
            }
            container.addChildNode(mapNode);
          }
          for (const [key, val] of Object.entries(map2)) {
            if (sparse || val != null) {
              const entry = import_xml_builder3.XmlNode.of("entry");
              addKeyValue(entry, key, val);
              (containerIsMap ? container : mapNode).addChildNode(entry);
            }
          }
        }
      }
      writeSimple(_schema, value) {
        if (null === value) {
          throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
        }
        const ns = NormalizedSchema.of(_schema);
        let nodeContents = null;
        if (value && typeof value === "object") {
          if (ns.isBlobSchema()) {
            nodeContents = (this.serdeContext?.base64Encoder ?? import_util_base647.toBase64)(value);
          } else if (ns.isTimestampSchema() && value instanceof Date) {
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                nodeContents = value.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                nodeContents = (0, import_smithy_client7.dateToUtcString)(value);
                break;
              case 7:
                nodeContents = String(value.getTime() / 1e3);
                break;
              default:
                console.warn("Missing timestamp format, using http date", value);
                nodeContents = (0, import_smithy_client7.dateToUtcString)(value);
                break;
            }
          } else if (ns.isBigDecimalSchema() && value) {
            if (value instanceof NumericValue) {
              return value.string;
            }
            return String(value);
          } else if (ns.isMapSchema() || ns.isListSchema()) {
            throw new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
          } else {
            throw new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(true)}`);
          }
        }
        if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
          nodeContents = String(value);
        }
        if (ns.isStringSchema()) {
          if (value === void 0 && ns.isIdempotencyToken()) {
            nodeContents = (0, import_uuid.v4)();
          } else {
            nodeContents = String(value);
          }
        }
        if (nodeContents === null) {
          throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
        }
        return nodeContents;
      }
      writeSimpleInto(_schema, value, into, parentXmlns) {
        const nodeContents = this.writeSimple(_schema, value);
        const ns = NormalizedSchema.of(_schema);
        const content = new import_xml_builder3.XmlText(nodeContents);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        if (xmlns) {
          into.addAttribute(xmlnsAttr, xmlns);
        }
        into.addChildNode(content);
      }
      getXmlnsAttribute(ns, parentXmlns) {
        const traits = ns.getMergedTraits();
        const [prefix, xmlns] = traits.xmlNamespace ?? [];
        if (xmlns && xmlns !== parentXmlns) {
          return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
        }
        return [void 0, void 0];
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js
var XmlCodec;
var init_XmlCodec = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js"() {
    init_ConfigurableSerdeContext();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    XmlCodec = class extends SerdeContextConfig {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new XmlShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new XmlShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js
var AwsRestXmlProtocol;
var init_AwsRestXmlProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_parseXmlBody();
    init_XmlCodec();
    AwsRestXmlProtocol = class extends HttpBindingProtocol {
      codec;
      serializer;
      deserializer;
      mixin = new ProtocolLib();
      constructor(options) {
        super(options);
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 5
          },
          httpBindings: true,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace
        };
        this.codec = new XmlCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getPayloadCodec() {
        return this.codec;
      }
      getShapeId() {
        return "aws.protocols#restXml";
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
          const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
          if (contentType) {
            request.headers["content-type"] = contentType;
          }
        }
        if (typeof request.body === "string" && request.headers["content-type"] === this.getDefaultContentType() && !request.body.startsWith("<?xml ") && !this.hasUnstructuredPayloadBinding(inputSchema)) {
          request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";
        if (dataObject.Error && typeof dataObject.Error === "object") {
          for (const key of Object.keys(dataObject.Error)) {
            dataObject[key] = dataObject.Error[key];
            if (key.toLowerCase() === "message") {
              dataObject.message = dataObject.Error[key];
            }
          }
        }
        if (dataObject.RequestId && !metadata.requestId) {
          metadata.requestId = dataObject.RequestId;
        }
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.Error?.message ?? dataObject.Error?.Message ?? dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member2] of ns.structIterator()) {
          const target = member2.getMergedTraits().xmlName ?? name;
          const value = dataObject.Error?.[target] ?? dataObject[target];
          output[name] = this.codec.createDeserializer().readSchema(member2, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
      getDefaultContentType() {
        return "application/xml";
      }
      hasUnstructuredPayloadBinding(ns) {
        for (const [, member2] of ns.structIterator()) {
          if (member2.getMergedTraits().httpPayload) {
            return !(member2.isStructSchema() || member2.isMapSchema() || member2.isListSchema());
          }
        }
        return false;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_AwsSmithyRpcV2CborProtocol();
    init_coercing_serializers();
    init_AwsJson1_0Protocol();
    init_AwsJson1_1Protocol();
    init_AwsJsonRpcProtocol();
    init_AwsRestJsonProtocol();
    init_JsonCodec();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_AwsEc2QueryProtocol();
    init_AwsQueryProtocol();
    init_QuerySerializerSettings();
    init_QueryShapeSerializer();
    init_AwsRestXmlProtocol();
    init_XmlCodec();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    init_parseXmlBody();
  }
});

// node_modules/@aws-sdk/core/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
  AwsEc2QueryProtocol: () => AwsEc2QueryProtocol,
  AwsJson1_0Protocol: () => AwsJson1_0Protocol,
  AwsJson1_1Protocol: () => AwsJson1_1Protocol,
  AwsJsonRpcProtocol: () => AwsJsonRpcProtocol,
  AwsQueryProtocol: () => AwsQueryProtocol,
  AwsRestJsonProtocol: () => AwsRestJsonProtocol,
  AwsRestXmlProtocol: () => AwsRestXmlProtocol,
  AwsSdkSigV4ASigner: () => AwsSdkSigV4ASigner,
  AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
  AwsSmithyRpcV2CborProtocol: () => AwsSmithyRpcV2CborProtocol,
  JsonCodec: () => JsonCodec,
  JsonShapeDeserializer: () => JsonShapeDeserializer,
  JsonShapeSerializer: () => JsonShapeSerializer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NODE_SIGV4A_CONFIG_OPTIONS: () => NODE_SIGV4A_CONFIG_OPTIONS,
  QueryShapeSerializer: () => QueryShapeSerializer,
  XmlCodec: () => XmlCodec,
  XmlShapeDeserializer: () => XmlShapeDeserializer,
  XmlShapeSerializer: () => XmlShapeSerializer,
  _toBool: () => _toBool,
  _toNum: () => _toNum,
  _toStr: () => _toStr,
  awsExpectUnion: () => awsExpectUnion,
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  getBearerTokenEnvKey: () => getBearerTokenEnvKey,
  loadRestJsonErrorCode: () => loadRestJsonErrorCode,
  loadRestXmlErrorCode: () => loadRestXmlErrorCode,
  parseJsonBody: () => parseJsonBody,
  parseJsonErrorBody: () => parseJsonErrorBody,
  parseXmlBody: () => parseXmlBody,
  parseXmlErrorBody: () => parseXmlErrorBody,
  resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
  resolveAwsSdkSigV4AConfig: () => resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature2,
  setTokenFeature: () => setTokenFeature,
  state: () => state,
  validateSigningProperties: () => validateSigningProperties
});
var init_dist_es2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client();
    init_httpAuthSchemes2();
    init_protocols2();
  }
});

// node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "node_modules/@smithy/service-error-classification/dist-cjs/index.js"(exports) {
    "use strict";
    var CLOCK_SKEW_ERROR_CODES = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch"
    ];
    var THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
    var isRetryableByTrait = (error2) => error2?.$retryable !== void 0;
    var isClockSkewError = (error2) => CLOCK_SKEW_ERROR_CODES.includes(error2.name);
    var isClockSkewCorrectedError = (error2) => error2.$metadata?.clockSkewCorrected;
    var isBrowserNetworkError = (error2) => {
      const errorMessages = /* @__PURE__ */ new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed"
      ]);
      const isValid = error2 && error2 instanceof TypeError;
      if (!isValid) {
        return false;
      }
      return errorMessages.has(error2.message);
    };
    var isThrottlingError = (error2) => error2.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error2.name) || error2.$retryable?.throttling == true;
    var isTransientError = (error2, depth = 0) => isRetryableByTrait(error2) || isClockSkewCorrectedError(error2) || TRANSIENT_ERROR_CODES.includes(error2.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error2?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error2?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error2.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error2) || error2.cause !== void 0 && depth <= 10 && isTransientError(error2.cause, depth + 1);
    var isServerError = (error2) => {
      if (error2.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error2.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error2)) {
          return true;
        }
        return false;
      }
      return false;
    };
    exports.isBrowserNetworkError = isBrowserNetworkError;
    exports.isClockSkewCorrectedError = isClockSkewCorrectedError;
    exports.isClockSkewError = isClockSkewError;
    exports.isRetryableByTrait = isRetryableByTrait;
    exports.isServerError = isServerError;
    exports.isThrottlingError = isThrottlingError;
    exports.isTransientError = isTransientError;
  }
});

// node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "node_modules/@smithy/util-retry/dist-cjs/index.js"(exports) {
    "use strict";
    var serviceErrorClassification = require_dist_cjs25();
    exports.RETRY_MODES = void 0;
    (function(RETRY_MODES) {
      RETRY_MODES["STANDARD"] = "standard";
      RETRY_MODES["ADAPTIVE"] = "adaptive";
    })(exports.RETRY_MODES || (exports.RETRY_MODES = {}));
    var DEFAULT_MAX_ATTEMPTS = 3;
    var DEFAULT_RETRY_MODE = exports.RETRY_MODES.STANDARD;
    var DefaultRateLimiter = class _DefaultRateLimiter {
      static setTimeoutFn = setTimeout;
      beta;
      minCapacity;
      minFillRate;
      scaleConstant;
      smooth;
      currentCapacity = 0;
      enabled = false;
      lastMaxRate = 0;
      measuredTxRate = 0;
      requestCount = 0;
      fillRate;
      lastThrottleTime;
      lastTimestamp = 0;
      lastTxRateBucket;
      maxCapacity;
      timeWindow = 0;
      constructor(options) {
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (serviceErrorClassification.isThrottlingError(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
    var DEFAULT_RETRY_DELAY_BASE = 100;
    var MAXIMUM_RETRY_DELAY = 20 * 1e3;
    var THROTTLING_RETRY_DELAY_BASE = 500;
    var INITIAL_RETRY_TOKENS = 500;
    var RETRY_COST = 5;
    var TIMEOUT_RETRY_COST = 10;
    var NO_RETRY_INCREMENT = 1;
    var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    var REQUEST_HEADER = "amz-sdk-request";
    var getDefaultRetryBackoffStrategy = () => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      };
      const setDelayBase = (delay) => {
        delayBase = delay;
      };
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    };
    var createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = () => retryCount;
      const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
      const getRetryCost = () => retryCost;
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    };
    var StandardRetryStrategy = class {
      maxAttempts;
      mode = exports.RETRY_MODES.STANDARD;
      capacity = INITIAL_RETRY_TOKENS;
      retryBackoffStrategy = getDefaultRetryBackoffStrategy();
      maxAttemptsProvider;
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error2) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
    var AdaptiveRetryStrategy = class {
      maxAttemptsProvider;
      rateLimiter;
      standardRetryStrategy;
      mode = exports.RETRY_MODES.ADAPTIVE;
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
    var ConfiguredRetryStrategy = class extends StandardRetryStrategy {
      computeNextBackoffDelay;
      constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
          this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        } else {
          this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
      }
    };
    exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
    exports.ConfiguredRetryStrategy = ConfiguredRetryStrategy;
    exports.DEFAULT_MAX_ATTEMPTS = DEFAULT_MAX_ATTEMPTS;
    exports.DEFAULT_RETRY_DELAY_BASE = DEFAULT_RETRY_DELAY_BASE;
    exports.DEFAULT_RETRY_MODE = DEFAULT_RETRY_MODE;
    exports.DefaultRateLimiter = DefaultRateLimiter;
    exports.INITIAL_RETRY_TOKENS = INITIAL_RETRY_TOKENS;
    exports.INVOCATION_ID_HEADER = INVOCATION_ID_HEADER;
    exports.MAXIMUM_RETRY_DELAY = MAXIMUM_RETRY_DELAY;
    exports.NO_RETRY_INCREMENT = NO_RETRY_INCREMENT;
    exports.REQUEST_HEADER = REQUEST_HEADER;
    exports.RETRY_COST = RETRY_COST;
    exports.StandardRetryStrategy = StandardRetryStrategy;
    exports.THROTTLING_RETRY_DELAY_BASE = THROTTLING_RETRY_DELAY_BASE;
    exports.TIMEOUT_RETRY_COST = TIMEOUT_RETRY_COST;
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js
var require_dist_cjs27 = __commonJS({
  "node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js"(exports) {
    "use strict";
    var core = (init_dist_es(), __toCommonJS(dist_es_exports));
    var utilEndpoints = require_dist_cjs19();
    var protocolHttp = require_dist_cjs3();
    var core$1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var utilRetry = require_dist_cjs26();
    var DEFAULT_UA_APP_ID = void 0;
    function isValidUserAgentAppId(appId) {
      if (appId === void 0) {
        return true;
      }
      return typeof appId === "string" && appId.length <= 50;
    }
    function resolveUserAgentConfig(input) {
      const normalizedAppIdProvider = core.normalizeProvider(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
      const { customUserAgent } = input;
      return Object.assign(input, {
        customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
        userAgentAppId: async () => {
          const appId = await normalizedAppIdProvider();
          if (!isValidUserAgentAppId(appId)) {
            const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
            if (typeof appId !== "string") {
              logger2?.warn("userAgentAppId must be a string or undefined.");
            } else if (appId.length > 50) {
              logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
            }
          }
          return appId;
        }
      });
    }
    var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
    async function checkFeatures(context, config, args) {
      const request = args.request;
      if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
        core$1.setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
      }
      if (typeof config.retryStrategy === "function") {
        const retryStrategy = await config.retryStrategy();
        if (typeof retryStrategy.mode === "string") {
          switch (retryStrategy.mode) {
            case utilRetry.RETRY_MODES.ADAPTIVE:
              core$1.setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
              break;
            case utilRetry.RETRY_MODES.STANDARD:
              core$1.setFeature(context, "RETRY_MODE_STANDARD", "E");
              break;
          }
        }
      }
      if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
          core$1.setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (await config.accountIdEndpointMode?.()) {
          case "disabled":
            core$1.setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
          case "preferred":
            core$1.setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
          case "required":
            core$1.setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
        }
      }
      const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
      if (identity?.$source) {
        const credentials = identity;
        if (credentials.accountId) {
          core$1.setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries(credentials.$source ?? {})) {
          core$1.setFeature(context, key, value);
        }
      }
    }
    var USER_AGENT = "user-agent";
    var X_AMZ_USER_AGENT = "x-amz-user-agent";
    var SPACE = " ";
    var UA_NAME_SEPARATOR = "/";
    var UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
    var UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
    var UA_ESCAPE_CHAR = "-";
    var BYTE_LIMIT = 1024;
    function encodeFeatures(features) {
      let buffer = "";
      for (const key in features) {
        const val = features[key];
        if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
          if (buffer.length) {
            buffer += "," + val;
          } else {
            buffer += val;
          }
          continue;
        }
        break;
      }
      return buffer;
    }
    var userAgentMiddleware = (options) => (next, context) => async (args) => {
      const { request } = args;
      if (!protocolHttp.HttpRequest.isInstance(request)) {
        return next(args);
      }
      const { headers } = request;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      await checkFeatures(context, options, args);
      const awsContext = context;
      defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const appId = await options.userAgentAppId();
      if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app`, `${appId}`]));
      }
      const prefix = utilEndpoints.getUserAgentPrefix();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request
      });
    };
    var escapeUserAgent = (userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    };
    var getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    var getUserAgentPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }
    });
    exports.DEFAULT_UA_APP_ID = DEFAULT_UA_APP_ID;
    exports.getUserAgentMiddlewareOptions = getUserAgentMiddlewareOptions;
    exports.getUserAgentPlugin = getUserAgentPlugin;
    exports.resolveUserAgentConfig = resolveUserAgentConfig;
    exports.userAgentMiddleware = userAgentMiddleware;
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js"(exports) {
    "use strict";
    var node_os = __require("node:os");
    var node_process = __require("node:process");
    var promises = __require("node:fs/promises");
    var node_path = __require("node:path");
    var middlewareUserAgent = require_dist_cjs27();
    var getRuntimeUserAgentPair = () => {
      const runtimesToCheck = ["deno", "bun", "llrt"];
      for (const runtime of runtimesToCheck) {
        if (node_process.versions[runtime]) {
          return [`md/${runtime}`, node_process.versions[runtime]];
        }
      }
      return ["md/nodejs", node_process.versions.node];
    };
    var SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;
    var getSanitizedTypeScriptVersion = (version = "") => {
      const match = version.match(SEMVER_REGEX);
      if (!match) {
        return void 0;
      }
      const [major, minor, patch, prerelease] = [match[1], match[2], match[3], match[4]];
      return prerelease ? `${major}.${minor}.${patch}-${prerelease}` : `${major}.${minor}.${patch}`;
    };
    var typescriptPackageJsonPath = node_path.join("node_modules", "typescript", "package.json");
    var getTypeScriptPackageJsonPaths = (dirname) => {
      const cwdPath = node_path.join(process.cwd(), typescriptPackageJsonPath);
      if (!dirname) {
        return [cwdPath];
      }
      const normalizedPath = node_path.normalize(dirname);
      const parts = normalizedPath.split(node_path.sep);
      const nodeModulesIndex = parts.indexOf("node_modules");
      const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(node_path.sep) : dirname;
      const parentDirPath = node_path.join(parentDir, typescriptPackageJsonPath);
      if (cwdPath === parentDirPath) {
        return [cwdPath];
      }
      return [parentDirPath, cwdPath];
    };
    var tscVersion;
    var getTypeScriptUserAgentPair = async () => {
      if (tscVersion === null) {
        return void 0;
      } else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
      }
      if (process.env.AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED) {
        tscVersion = null;
        return void 0;
      }
      const dirname = typeof __dirname !== "undefined" ? __dirname : void 0;
      for (const typescriptPackageJsonPath2 of getTypeScriptPackageJsonPaths(dirname)) {
        try {
          const packageJson = await promises.readFile(typescriptPackageJsonPath2, "utf-8");
          const { version } = JSON.parse(packageJson);
          const sanitizedVersion = getSanitizedTypeScriptVersion(version);
          if (typeof sanitizedVersion !== "string") {
            continue;
          }
          tscVersion = sanitizedVersion;
          return ["md/tsc", tscVersion];
        } catch {
        }
      }
      tscVersion = null;
      return void 0;
    };
    var crtAvailability = {
      isCrtAvailable: false
    };
    var isCrtAvailable = () => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    };
    var createDefaultUserAgentProvider2 = ({ serviceId, clientVersion }) => {
      const runtimeUserAgentPair = getRuntimeUserAgentPair();
      return async (config) => {
        const sections = [
          ["aws-sdk-js", clientVersion],
          ["ua", "2.1"],
          [`os/${node_os.platform()}`, node_os.release()],
          ["lang/js"],
          runtimeUserAgentPair
        ];
        const typescriptUserAgentPair = await getTypeScriptUserAgentPair();
        if (typescriptUserAgentPair) {
          sections.push(typescriptUserAgentPair);
        }
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
          sections.push(crtAvailable);
        }
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (node_process.env.AWS_EXECUTION_ENV) {
          sections.push([`exec-env/${node_process.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
      };
    };
    var defaultUserAgent = createDefaultUserAgentProvider2;
    var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    var UA_APP_ID_INI_NAME = "sdk_ua_app_id";
    var UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
    var NODE_APP_ID_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
      configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED],
      default: middlewareUserAgent.DEFAULT_UA_APP_ID
    };
    exports.NODE_APP_ID_CONFIG_OPTIONS = NODE_APP_ID_CONFIG_OPTIONS;
    exports.UA_APP_ID_ENV_NAME = UA_APP_ID_ENV_NAME;
    exports.UA_APP_ID_INI_NAME = UA_APP_ID_INI_NAME;
    exports.createDefaultUserAgentProvider = createDefaultUserAgentProvider2;
    exports.crtAvailability = crtAvailability;
    exports.defaultUserAgent = defaultUserAgent;
  }
});

// src/__fixtures__/index.js
var import_util_user_agent_node = __toESM(require_dist_cjs28(), 1);
var getUserAgent = async () => (0, import_util_user_agent_node.createDefaultUserAgentProvider)({
  serviceId: "s3",
  clientVersion: "0.1.0"
})();
export {
  getUserAgent
};
