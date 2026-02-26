import { join } from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

import { ModuleSystem } from "./utils/constants.js";
import { getOutputDir } from "./utils/getOutputDir.js";
import { getInputPath } from "./utils/getInputPath.js";
import { getOutputFilename } from "./utils/getOutputFilename.js";

const createConfig = (minify, moduleSystem) => ({
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    ...(minify ? [terser()] : []),
    json(),
  ],
  input: getInputPath(),
  output: {
    file: join(
      getOutputDir(),
      getOutputFilename("rollup", minify, moduleSystem),
    ),
    format: moduleSystem,
    inlineDynamicImports: true,
    minify,
  },
});

const configs = [];
for (const minify of [true, false]) {
  for (const moduleSystem of Object.values(ModuleSystem)) {
    configs.push(createConfig(minify, moduleSystem));
  }
}

export default configs;
