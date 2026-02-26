const { strictEqual } = require("node:assert");
const { it } = require("node:test");
const { getUserAgent } = require("./getUserAgent.cjs");

it("getUserAgent", async () => {
  const userAgent = await getUserAgent();

  if (process.env.TS_VERSION) {
    strictEqual(userAgent[5][0], "md/tsc");
    strictEqual(userAgent[5][1], process.env.TS_VERSION);
  } else {
    strictEqual(userAgent[5][0], "api/s3");
  }
});
