import { build } from "esbuild";
import { join } from "node:path";

import { ModuleSystem } from "./utils/constants.js";
import { getOutputDir } from "./utils/getOutputDir.js";
import { getInputPath } from "./utils/getInputPath.js";
import { getOutputFilename } from "./utils/getOutputFilename.js";

const promises = [];
for (const moduleSystem of Object.values(ModuleSystem)) {
  promises.push(
    build({
      bundle: true,
      minify: false,
      entryPoints: [getInputPath()],
      outfile: join(getOutputDir(), getOutputFilename("esbuild", moduleSystem)),
      format: moduleSystem,
      // esbuild defaults to "browser" platform https://esbuild.github.io/api/#platform
      platform: "node",
      banner: {
        js:
          moduleSystem === ModuleSystem.esm
            ? `
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { fileURLToPath as __ftp } from 'url';
import { dirname as __dn } from 'path';
const __dirname = __dn(__ftp(import.meta.url));
    `.trim()
            : "",
      },
    }),
  );
}

await Promise.all(promises);
