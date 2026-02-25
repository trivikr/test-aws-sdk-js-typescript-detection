import { build } from "esbuild";
import { join } from "node:path";

import { ModuleSystem } from "./utils/constants.js";
import { getOutputDir } from "./utils/getOutputDir.js";
import { getInputPath } from "./utils/getInputPath.js";
import { getOutputFilename } from "./utils/getOutputFilename.js";

const promises = [];
for (const minify of [true, false]) {
  for (const moduleSystem of Object.values(ModuleSystem)) {
    promises.push(
      build({
        bundle: true,
        minify,
        entryPoints: [getInputPath()],
        outfile: join(
          getOutputDir(),
          getOutputFilename("esbuild", minify, moduleSystem),
        ),
        format: moduleSystem,
        // esbuild defaults to "browser" platform https://esbuild.github.io/api/#platform
        platform: "node",
      }),
    );
  }
}

await Promise.all(promises);
