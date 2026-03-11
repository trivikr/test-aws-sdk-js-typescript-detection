import { strictEqual } from "node:assert";
import { it } from "node:test";
import { getUserAgent } from "./getUserAgent.mjs";

it("getUserAgent", async () => {
  const userAgent = await getUserAgent();

  if (
    process.env.TSC_VERSION &&
    !process.env.AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED
  ) {
    strictEqual(userAgent[5][0], "md/tsc");
    strictEqual(userAgent[5][1], process.env.TSC_VERSION);
  } else {
    strictEqual(userAgent[5][0], "api/s3");
  }
});
