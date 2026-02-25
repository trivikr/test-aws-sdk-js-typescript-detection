const { strictEqual } = require("node:assert");
const { existsSync } = require("node:fs");
const { join } = require("node:path");
const { test } = require("node:test");
const { getUserAgent } = require("./getUserAgent.cjs");

test("getUserAgent returns values", async () => {
  const userAgent = await getUserAgent();
  strictEqual(userAgent[0][0], "aws-sdk-js");
  strictEqual(userAgent[1][0], "ua");
  strictEqual(userAgent[3][0], "lang/js");
  strictEqual(userAgent[4][0], "md/nodejs");
  if (
    existsSync(
      join(process.cwd(), "node_modules", "typescript", "package.json"),
    )
  ) {
    strictEqual(userAgent[5][0], "md/tsc");
  } else {
    strictEqual(userAgent[5][0], "api/s3");
  }
});
