import { mkdirSync, writeFileSync } from "node:fs";

const LINE_ONE =
  "I am sorry I scrubbed your grandmother's cast-iron skillet to bare metal because I trusted my grease sensor over forty years of her hands.";
const LINE_TWO =
  "I learned that a dark coat on iron is care rather than grime, so I will wipe it with a dry cloth and never put it in the dishwasher again.";

const ENTRY = `${LINE_ONE}\n${LINE_TWO}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
