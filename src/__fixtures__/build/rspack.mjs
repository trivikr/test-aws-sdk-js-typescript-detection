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

;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/types.js
var types_SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(types_SelectorType || (types_SelectorType = {}));

;// CONCATENATED MODULE: external "node:fs/promises"
const promises_namespaceObject = __rspack_createRequire_require("node:fs/promises");
;// CONCATENATED MODULE: external "node:path"
const external_node_path_namespaceObject = __rspack_createRequire_require("node:path");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getNodeModulesParentDirs.js

const getNodeModulesParentDirs = (dirname) => {
    const cwd = process.cwd();
    if (!dirname) {
        return [cwd];
    }
    const normalizedPath = (0,external_node_path_namespaceObject.normalize)(dirname);
    const parts = normalizedPath.split(external_node_path_namespaceObject.sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(external_node_path_namespaceObject.sep) : normalizedPath;
    if (cwd === parentDir) {
        return [cwd];
    }
    return [parentDir, cwd];
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedTypeScriptVersion.js
const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;
const getSanitizedTypeScriptVersion = (version = "") => {
    const match = version.match(SEMVER_REGEX);
    if (!match) {
        return undefined;
    }
    const [major, minor, patch, prerelease] = [match[1], match[2], match[3], match[4]];
    return prerelease ? `${major}.${minor}.${patch}-${prerelease}` : `${major}.${minor}.${patch}`;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedDevTypeScriptVersion.js

const ALLOWED_PREFIXES = ["^", "~", ">=", "<=", ">", "<"];
const ALLOWED_DIST_TAGS = ["latest", "beta", "dev", "rc", "insiders", "next"];
const getSanitizedDevTypeScriptVersion = (version = "") => {
    if (ALLOWED_DIST_TAGS.includes(version)) {
        return version;
    }
    const prefix = ALLOWED_PREFIXES.find((p) => version.startsWith(p)) ?? "";
    const sanitizedTypeScriptVersion = getSanitizedTypeScriptVersion(version.slice(prefix.length));
    if (!sanitizedTypeScriptVersion) {
        return undefined;
    }
    return `${prefix}${sanitizedTypeScriptVersion}`;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptUserAgentPair.js
var getTypeScriptUserAgentPair_dirname = __rspack_dirname(__rspack_fileURLToPath(import.meta.url));






let tscVersion;
const TS_PACKAGE_JSON = (0,external_node_path_namespaceObject.join)("node_modules", "typescript", "package.json");
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
    }
    let isTypeScriptDetectionDisabled = false;
    try {
        isTypeScriptDetectionDisabled =
            booleanSelector(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", types_SelectorType.ENV) || false;
    }
    catch { }
    if (isTypeScriptDetectionDisabled) {
        tscVersion = null;
        return undefined;
    }
    const dirname =  true ? getTypeScriptUserAgentPair_dirname : 0;
    const nodeModulesParentDirs = getNodeModulesParentDirs(dirname);
    let versionFromApp;
    for (const nodeModulesParentDir of nodeModulesParentDirs) {
        try {
            const appPackageJsonPath = (0,external_node_path_namespaceObject.join)(nodeModulesParentDir, "package.json");
            const packageJson = await (0,promises_namespaceObject.readFile)(appPackageJsonPath, "utf-8");
            const { dependencies, devDependencies } = JSON.parse(packageJson);
            const version = devDependencies?.typescript ?? dependencies?.typescript;
            if (typeof version !== "string") {
                continue;
            }
            versionFromApp = version;
            break;
        }
        catch {
        }
    }
    if (!versionFromApp) {
        tscVersion = null;
        return undefined;
    }
    let versionFromNodeModules;
    for (const nodeModulesParentDir of nodeModulesParentDirs) {
        try {
            const tsPackageJsonPath = (0,external_node_path_namespaceObject.join)(nodeModulesParentDir, TS_PACKAGE_JSON);
            const packageJson = await (0,promises_namespaceObject.readFile)(tsPackageJsonPath, "utf-8");
            const { version } = JSON.parse(packageJson);
            const sanitizedVersion = getSanitizedTypeScriptVersion(version);
            if (typeof sanitizedVersion !== "string") {
                continue;
            }
            versionFromNodeModules = sanitizedVersion;
            break;
        }
        catch {
        }
    }
    if (versionFromNodeModules) {
        tscVersion = versionFromNodeModules;
        return ["md/tsc", tscVersion];
    }
    const sanitizedVersion = getSanitizedDevTypeScriptVersion(versionFromApp);
    if (typeof sanitizedVersion !== "string") {
        tscVersion = null;
        return undefined;
    }
    tscVersion = `dev_${sanitizedVersion}`;
    return ["md/tsc", tscVersion];
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
