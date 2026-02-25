const { test } = require("node:test");
const { strictEqual } = require("node:assert");
const { getUserAgent } = require("./getUserAgent.cjs");

test("getUserAgent returns values", async () => {
  const userAgent = await getUserAgent();
  strictEqual(userAgent[0][0], "aws-sdk-js");
  strictEqual(userAgent[1][0], "ua");
  strictEqual(userAgent[3][0], "lang/js");
  strictEqual(userAgent[4][0], "md/nodejs");
});
