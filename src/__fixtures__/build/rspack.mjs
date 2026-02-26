import {fileURLToPath as __rspack_fileURLToPath} from "node:url";
import {dirname as __rspack_dirname} from "node:path";
import { createRequire as __rspack_createRequire } from "node:module";
const __rspack_createRequire_require = __rspack_createRequire(import.meta.url);
// The require scope
var __webpack_require__ = {};

// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ getUserAgent)
});

;// CONCATENATED MODULE: external "node:os"
const external_node_os_namespaceObject = __rspack_createRequire_require("node:os");
;// CONCATENATED MODULE: external "node:process"
const external_node_process_namespaceObject = __rspack_createRequire_require("node:process");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getRuntimeUserAgentPair.js

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (external_node_process_namespaceObject.versions[runtime]) {
            return [`md/${runtime}`, external_node_process_namespaceObject.versions[runtime]];
        }
    }
    return ["md/nodejs", external_node_process_namespaceObject.versions.node];
};

;// CONCATENATED MODULE: external "node:fs/promises"
const promises_namespaceObject = __rspack_createRequire_require("node:fs/promises");
;// CONCATENATED MODULE: external "node:path"
const external_node_path_namespaceObject = __rspack_createRequire_require("node:path");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptPackageJsonPath.js

const getTypeScriptPackageJsonPath = (dirname = "") => {
    let nodeModulesPath;
    const normalizedPath = (0,external_node_path_namespaceObject.normalize)(dirname);
    const parts = normalizedPath.split(external_node_path_namespaceObject.sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    if (nodeModulesIndex !== -1) {
        nodeModulesPath = parts.slice(0, nodeModulesIndex).join(external_node_path_namespaceObject.sep);
    }
    else {
        nodeModulesPath = dirname;
    }
    return (0,external_node_path_namespaceObject.join)(nodeModulesPath, "node_modules", "typescript", "package.json");
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptUserAgentPair.js
var getTypeScriptUserAgentPair_dirname = __rspack_dirname(__rspack_fileURLToPath(import.meta.url));


let tscVersion;
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
    }
    try {
        const packageJson = await (0,promises_namespaceObject.readFile)(getTypeScriptPackageJsonPath(getTypeScriptUserAgentPair_dirname), "utf-8");
        const { version } = JSON.parse(packageJson);
        if (typeof version !== "string") {
            tscVersion = null;
            return undefined;
        }
        tscVersion = version;
        return ["md/tsc", tscVersion];
    }
    catch {
        tscVersion = null;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
const crtAvailability = {
    isCrtAvailable: false,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js

const isCrtAvailable = () => {
    if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js






const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
    const runtimeUserAgentPair = getRuntimeUserAgentPair();
    return async (config) => {
        const sections = [
            ["aws-sdk-js", clientVersion],
            ["ua", "2.1"],
            [`os/${(0,external_node_os_namespaceObject.platform)()}`, (0,external_node_os_namespaceObject.release)()],
            ["lang/js"],
            runtimeUserAgentPair,
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
        if (external_node_process_namespaceObject.env.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${external_node_process_namespaceObject.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
    };
};
const defaultUserAgent = (/* unused pure expression or super */ null && (createDefaultUserAgentProvider));

;// CONCATENATED MODULE: ./src/__fixtures__/index.js


const getUserAgent = async () =>
  createDefaultUserAgentProvider({
    serviceId: "s3",
    clientVersion: "0.1.0",
  })();

var __webpack_exports__getUserAgent = __webpack_exports__.$;
export { __webpack_exports__getUserAgent as getUserAgent };
