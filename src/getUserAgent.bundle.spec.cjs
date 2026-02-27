const { strictEqual } = require("node:assert");
const { readdirSync } = require("node:fs");
const { join } = require("node:path");
const { describe, it } = require("node:test");

const buildDir = join(__dirname, "__fixtures__", "build");
const files = readdirSync(buildDir).filter((fileName) =>
  fileName.endsWith(".cjs"),
);

describe("getUserAgent from bundles", async () => {
  for (const file of files) {
    it(file, async () => {
      const { getUserAgent } = require(join(buildDir, file));
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
