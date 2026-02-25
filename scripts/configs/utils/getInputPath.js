import { join } from "node:path";
import { getFixturesDir } from "./getFixturesDir.js";

export const getInputPath = () => join(getFixturesDir(), "index.js");
