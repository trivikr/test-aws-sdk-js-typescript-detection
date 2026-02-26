import {fileURLToPath as __webpack_fileURLToPath__} from "node:url";
var __webpack_dirname__ = __webpack_fileURLToPath__(import.meta.url.replace(/\/(?:[^\/]*)$/, ""));
import { platform as __WEBPACK_EXTERNAL_MODULE_os_platform__, release as __WEBPACK_EXTERNAL_MODULE_os_release__ } from "os";
import { env as __WEBPACK_EXTERNAL_MODULE_process_env__, versions as __WEBPACK_EXTERNAL_MODULE_process_versions__ } from "process";
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

;// external "os"

;// external "process"

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getRuntimeUserAgentPair.js

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (__WEBPACK_EXTERNAL_MODULE_process_versions__[runtime]) {
            return [`md/${runtime}`, __WEBPACK_EXTERNAL_MODULE_process_versions__[runtime]];
        }
    }
    return ["md/nodejs", __WEBPACK_EXTERNAL_MODULE_process_versions__.node];
};

;// external "node:fs/promises"

;// external "node:path"

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptPackageJsonPath.js

const getTypeScriptPackageJsonPath = (dirname = "") => {
    let nodeModulesPath;
    const normalizedPath = __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_normalize__(dirname);
    const parts = normalizedPath.split(__WEBPACK_EXTERNAL_MODULE_node_path_02319fef_sep__);
    const nodeModulesIndex = parts.indexOf("node_modules");
    if (nodeModulesIndex !== -1) {
        nodeModulesPath = parts.slice(0, nodeModulesIndex).join(__WEBPACK_EXTERNAL_MODULE_node_path_02319fef_sep__);
    }
    else {
        nodeModulesPath = dirname;
    }
    return __WEBPACK_EXTERNAL_MODULE_node_path_02319fef_join__(nodeModulesPath, "node_modules", "typescript", "package.json");
};

;// ./node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptUserAgentPair.js


let tscVersion;
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (tscVersion) {
        return ["md/tsc", tscVersion];
    }
    try {
        const packageJson = await __WEBPACK_EXTERNAL_MODULE_node_fs_promises_4a3ebc43_readFile__(getTypeScriptPackageJsonPath(__webpack_dirname__), "utf-8");
        tscVersion = JSON.parse(packageJson).version;
        return ["md/tsc", tscVersion];
    }
    catch {
        tscVersion = null;
    }
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
            [`os/${__WEBPACK_EXTERNAL_MODULE_os_platform__()}`, __WEBPACK_EXTERNAL_MODULE_os_release__()],
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
        if (__WEBPACK_EXTERNAL_MODULE_process_env__.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${__WEBPACK_EXTERNAL_MODULE_process_env__.AWS_EXECUTION_ENV}`]);
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
