import { platform, release } from 'node:os';
import { versions, env } from 'node:process';
import { readFile } from 'node:fs/promises';
import { normalize, sep, join } from 'node:path';

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (versions[runtime]) {
            return [`md/${runtime}`, versions[runtime]];
        }
    }
    return ["md/nodejs", versions.node];
};

const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;
const getSanitizedTypeScriptVersion = (version = "") => {
    const match = version.match(SEMVER_REGEX);
    if (!match) {
        return undefined;
    }
    const [major, minor, patch, prerelease] = [match[1], match[2], match[3], match[4]];
    return prerelease ? `${major}.${minor}.${patch}-${prerelease}` : `${major}.${minor}.${patch}`;
};

const getTypeScriptPackageJsonPath = (dirname = "") => {
    let nodeModulesPath;
    const normalizedPath = normalize(dirname);
    const parts = normalizedPath.split(sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    if (nodeModulesIndex !== -1) {
        nodeModulesPath = parts.slice(0, nodeModulesIndex).join(sep);
    }
    else {
        nodeModulesPath = dirname;
    }
    return join(nodeModulesPath, "node_modules", "typescript", "package.json");
};

let tscVersion;
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
    }
    try {
        const packageJson = await readFile(getTypeScriptPackageJsonPath(__dirname), "utf-8");
        const { version } = JSON.parse(packageJson);
        const sanitizedVersion = getSanitizedTypeScriptVersion(version);
        if (typeof sanitizedVersion !== "string") {
            tscVersion = null;
            return undefined;
        }
        tscVersion = sanitizedVersion;
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
            [`os/${platform()}`, release()],
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
        if (env.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
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

export { getUserAgent };
