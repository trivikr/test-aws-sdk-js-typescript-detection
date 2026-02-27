import { strictEqual } from "node:assert";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";

const buildDir = join(import.meta.dirname, "__fixtures__", "build");
const files = readdirSync(buildDir).filter((fileName) =>
  fileName.endsWith(".mjs"),
);

describe("getUserAgent from bundles", async () => {
  for (const file of files) {
    it(file, async () => {
      const { getUserAgent } = await import(join(buildDir, file));
      const userAgent = await getUserAgent();

      if (process.env.TSC_VERSION) {
        strictEqual(userAgent[5][0], "md/tsc");
        strictEqual(userAgent[5][1], process.env.TSC_VERSION);
      } else {
        strictEqual(userAgent[5][0], "api/s3");
      }
    });
  }
});
