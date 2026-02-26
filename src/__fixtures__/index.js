import { createDefaultUserAgentProvider } from "@aws-sdk/util-user-agent-node";

export const getUserAgent = async () =>
  createDefaultUserAgentProvider({
    serviceId: "s3",
    clientVersion: "0.1.0",
  })();
