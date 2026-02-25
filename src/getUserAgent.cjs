const {
  createDefaultUserAgentProvider,
} = require("@aws-sdk/util-user-agent-node");

const getUserAgent = async () =>
  createDefaultUserAgentProvider({
    serviceId: "s3",
    clientVersion: "0.1.0",
  })();

module.exports = { getUserAgent };
