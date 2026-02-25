import rspack from "@rspack/core";

import { ModuleSystem } from "./utils/constants.js";
import { getOutputDir } from "./utils/getOutputDir.js";
import { getInputPath } from "./utils/getInputPath.js";
import { getOutputFilename } from "./utils/getOutputFilename.js";

const LibraryType = {
  [ModuleSystem.cjs]: "commonjs2",
  [ModuleSystem.esm]: "module",
};

const createConfig = (minify, moduleSystem) => ({
  target: "node",
  mode: "production",
  devtool: false,
  optimization: {
    minimize: minify,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({ extractComments: false }),
    ],
  },
  plugins: [new rspack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
  experiments: { outputModule: true },
  entry: getInputPath(),
  output: {
    path: getOutputDir(),
    filename: getOutputFilename("rspack", minify, moduleSystem),
    library: { type: LibraryType[moduleSystem] },
  },
});

const configs = [];
for (const minify of [true, false]) {
  for (const moduleSystem of Object.values(ModuleSystem)) {
    configs.push(createConfig(minify, moduleSystem));
  }
}

export default configs;
