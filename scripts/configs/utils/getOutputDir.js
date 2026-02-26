import { join } from "node:path";
import { getFixturesDir } from "./getFixturesDir.js";

export const getOutputDir = () => join(getFixturesDir(), "build");
