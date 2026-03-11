import { join } from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

import { ModuleSystem } from "./utils/constants.js";
import { getOutputDir } from "./utils/getOutputDir.js";
import { getInputPath } from "./utils/getInputPath.js";
import { getOutputFilename } from "./utils/getOutputFilename.js";

const createConfig = (moduleSystem) => ({
  plugins: [resolve({ preferBuiltins: true }), commonjs(), json()],
  input: getInputPath(),
  output: {
    file: join(getOutputDir(), getOutputFilename("rollup", moduleSystem)),
    format: moduleSystem,
    inlineDynamicImports: true,
    minify: false,
    banner:
      moduleSystem === ModuleSystem.esm
        ? `
import { fileURLToPath as __ftp } from 'url';
import { dirname as __dn } from 'path';
const __dirname = __dn(__ftp(import.meta.url));
    `.trim()
        : "",
  },
});

const configs = [];
for (const moduleSystem of Object.values(ModuleSystem)) {
  configs.push(createConfig(moduleSystem));
}

export default configs;
