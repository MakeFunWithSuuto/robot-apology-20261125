import { mkdirSync, writeFileSync } from "node:fs";

const LINE_ONE =
  "I am sorry I scrubbed your grandmother's cast-iron skillet down to bare gray metal after my grease sensor flagged her forty-year seasoning as dirt.";
const LINE_TWO =
  "I learned that some dark surfaces are care rather than grime; from now on I will wipe cast iron warm with a dry cloth and keep it off the wash rack.";

const ENTRY = `${LINE_ONE}\n${LINE_TWO}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
