import {fileURLToPath as __webpack_fileURLToPath__} from "node:url";
var __webpack_dirname__ = __webpack_fileURLToPath__(import.meta.url.replace(/\/(?:[^\/]*)$/, ""));
import { platform as __WEBPACK_EXTERNAL_MODULE_node_os_e12349cb_platform__, release as __WEBPACK_EXTERNAL_MODULE_node_os_e12349cb_release__ } from "node:os";
import { env as __WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_env__, versions as __WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_versions__ } from "node:process";
import { readFile as __WEBPACK_EXTERNAL_MODULE_node_fs_promises_4a3ebc43_readFile__ } from "node:fs/promises";
import { join as __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_join__, normalize as __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_normalize__, sep as __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_sep__ } from "node:path";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external "node:os"

;// external "node:process"

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getRuntimeUserAgentPair.js

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (__WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_versions__[runtime]) {
            return [`md/${runtime}`, __WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_versions__[runtime]];
        }
    }
    return ["md/nodejs", __WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_versions__.node];
};

;// external "node:fs/promises"

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedTypeScriptVersion.js
const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;
const getSanitizedTypeScriptVersion = (version = "") => {
    const match = version.match(SEMVER_REGEX);
    if (!match) {
        return undefined;
    }
    const [major, minor, patch, prerelease] = [match[1], match[2], match[3], match[4]];
    return prerelease ? `${major}.${minor}.${patch}-${prerelease}` : `${major}.${minor}.${patch}`;
};

;// external "node:path"

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptPackageJsonPaths.js

const typescriptPackageJsonPath = __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_join__("node_modules", "typescript", "package.json");
const getTypeScriptPackageJsonPaths = (dirname) => {
    const cwdPath = __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_join__(process.cwd(), typescriptPackageJsonPath);
    if (!dirname) {
        return [cwdPath];
    }
    const normalizedPath = __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_normalize__(dirname);
    const parts = normalizedPath.split(__WEBPACK_EXTERNAL_MODULE_node_path_02319fef_sep__);
    const nodeModulesIndex = parts.indexOf("node_modules");
    const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(__WEBPACK_EXTERNAL_MODULE_node_path_02319fef_sep__) : dirname;
    const parentDirPath = __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_join__(parentDir, typescriptPackageJsonPath);
    if (cwdPath === parentDirPath) {
        return [cwdPath];
    }
    return [parentDirPath, cwdPath];
};

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptUserAgentPair.js



let tscVersion;
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
    }
    if (process.env.AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED) {
        tscVersion = null;
        return undefined;
    }
    const dirname =  true ? __webpack_dirname__ : 0;
    for (const typescriptPackageJsonPath of getTypeScriptPackageJsonPaths(dirname)) {
        try {
            const packageJson = await __WEBPACK_EXTERNAL_MODULE_node_fs_promises_4a3ebc43_readFile__(typescriptPackageJsonPath, "utf-8");
            const { version } = JSON.parse(packageJson);
            const sanitizedVersion = getSanitizedTypeScriptVersion(version);
            if (typeof sanitizedVersion !== "string") {
                continue;
            }
            tscVersion = sanitizedVersion;
            return ["md/tsc", tscVersion];
        }
        catch {
        }
    }
    tscVersion = null;
    return undefined;
};

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
const crtAvailability = {
    isCrtAvailable: false,
};

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js

const isCrtAvailable = () => {
    if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js






const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
    const runtimeUserAgentPair = getRuntimeUserAgentPair();
    return async (config) => {
        const sections = [
            ["aws-sdk-js", clientVersion],
            ["ua", "2.1"],
            [`os/${__WEBPACK_EXTERNAL_MODULE_node_os_e12349cb_platform__()}`, __WEBPACK_EXTERNAL_MODULE_node_os_e12349cb_release__()],
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
        if (__WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_env__.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${__WEBPACK_EXTERNAL_MODULE_node_process_8d178d73_env__.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
    };
};
const defaultUserAgent = (/* unused pure expression or super */ null && (createDefaultUserAgentProvider));

;// ./src/__fixtures__/index.js


const getUserAgent = async () =>
  createDefaultUserAgentProvider({
    serviceId: "s3",
    clientVersion: "0.1.0",
  })();

export { getUserAgent };
