import rspack from "@rspack/core";

import { ModuleSystem } from "./utils/constants.js";
import { getOutputDir } from "./utils/getOutputDir.js";
import { getInputPath } from "./utils/getInputPath.js";
import { getOutputFilename } from "./utils/getOutputFilename.js";

const LibraryType = {
  [ModuleSystem.cjs]: "commonjs2",
  [ModuleSystem.esm]: "module",
};

const createConfig = (moduleSystem) => ({
  target: "node",
  mode: "production",
  devtool: false,
  optimization: {
    minimize: false,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({ extractComments: false }),
    ],
  },
  plugins: [new rspack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
  experiments: {
    outputModule: moduleSystem === ModuleSystem.esm ? true : false,
  },
  entry: getInputPath(),
  output: {
    path: getOutputDir(),
    filename: getOutputFilename("rspack", moduleSystem),
    library: { type: LibraryType[moduleSystem] },
  },
});

const configs = [];
for (const moduleSystem of Object.values(ModuleSystem)) {
  configs.push(createConfig(moduleSystem));
}

export default configs;
