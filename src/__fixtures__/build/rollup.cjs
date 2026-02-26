'use strict';

var os = require('os');
var process = require('process');
var promises = require('node:fs/promises');
var node_path = require('node:path');

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (process.versions[runtime]) {
            return [`md/${runtime}`, process.versions[runtime]];
        }
    }
    return ["md/nodejs", process.versions.node];
};

const getTypeScriptPackageJsonPath = (dirname = "") => {
    let nodeModulesPath;
    const normalizedPath = node_path.normalize(dirname);
    const parts = normalizedPath.split(node_path.sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    if (nodeModulesIndex !== -1) {
        nodeModulesPath = parts.slice(0, nodeModulesIndex + 1).join(node_path.sep);
    }
    else {
        nodeModulesPath = dirname;
    }
    return node_path.join(nodeModulesPath, "typescript", "package.json");
};

let tscVersion;
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (tscVersion) {
        return ["md/tsc", tscVersion];
    }
    try {
        const packageJson = await promises.readFile(getTypeScriptPackageJsonPath(__dirname), "utf-8");
        tscVersion = JSON.parse(packageJson).version;
        return ["md/tsc", tscVersion];
    }
    catch {
        tscVersion = null;
    }
};

const isCrtAvailable = () => {
    return null;
};

const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
    const runtimeUserAgentPair = getRuntimeUserAgentPair();
    return async (config) => {
        const sections = [
            ["aws-sdk-js", clientVersion],
            ["ua", "2.1"],
            [`os/${os.platform()}`, os.release()],
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
        if (process.env.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${process.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
    };
};

const getUserAgent = async () =>
  createDefaultUserAgentProvider({
    serviceId: "s3",
    clientVersion: "0.1.0",
  })();

exports.getUserAgent = getUserAgent;
