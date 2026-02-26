const { strictEqual } = require("node:assert");
const { existsSync, readdirSync } = require("node:fs");
const { join } = require("node:path");
const { describe, it } = require("node:test");

const buildDir = join(__dirname, "__fixtures__", "build");
const files = readdirSync(buildDir).filter((fileName) =>
  fileName.endsWith(".cjs"),
);

describe("getUserAgent returns values from bundles", async () => {
  const userAgentPrefix = existsSync(
    join(
      __dirname,
      "__fixtures__",
      "build",
      "node_modules",
      "typescript",
      "package.json",
    ),
  )
    ? "md/tsc"
    : "api/s3";

  for (const file of files) {
    it(`${file}: getUserAgent returns '${userAgentPrefix}'`, async () => {
      const { getUserAgent } = require(join(buildDir, file));
      const userAgent = await getUserAgent();
      strictEqual(userAgent[5][0], userAgentPrefix);
    });
  }
});
