const { strictEqual } = require("node:assert");
const { existsSync } = require("node:fs");
const { join } = require("node:path");
const { describe, it } = require("node:test");
const { getUserAgent } = require("./getUserAgent.cjs");

describe("getUserAgent returns values", async () => {
  const userAgent = await getUserAgent();

  const prefixToTest = [
    [0, "aws-sdk-js"],
    [1, "ua"],
    // [2, "os/darwin"], // Skipping as this changes based on OS platform
    [3, "lang/js"],
    [4, "md/nodejs"],
  ];

  if (
    existsSync(
      join(process.cwd(), "node_modules", "typescript", "package.json"),
    )
  ) {
    prefixToTest.push([5, "md/tsc"]);
    prefixToTest.push([6, "api/s3"]);
  } else {
    prefixToTest.push([5, "api/s3"]);
  }

  for (const [index, expected] of prefixToTest) {
    it(`should return '${expected}' at index [${index}][0]`, () => {
      strictEqual(userAgent[index][0], expected);
    });
  }
});
