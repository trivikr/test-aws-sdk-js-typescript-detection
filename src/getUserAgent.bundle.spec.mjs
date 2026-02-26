import { strictEqual } from "node:assert";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";

const buildDir = join(import.meta.dirname, "__fixtures__", "build");
const files = readdirSync(buildDir).filter((fileName) =>
  fileName.endsWith(".mjs"),
);

describe("getUserAgent returns values from bundles", async () => {
  const userAgentPrefix = existsSync(
    join(
      import.meta.dirname,
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
      const { getUserAgent } = await import(join(buildDir, file));
      const userAgent = await getUserAgent();
      strictEqual(userAgent[5][0], userAgentPrefix);
    });
  }
});
