import { mkdirSync, writeFileSync } from "node:fs";

// One small good thing from today: after two years of ignoring me, the
// neighbour's cat chose my lap at dawn and fell asleep there.
// The line is fixed on purpose: the entry must be identical on every run.
const LINE =
  "My neighbour's cat, who has ignored me for two years, jumped into my lap at dawn today and fell asleep like we'd always been friends.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
