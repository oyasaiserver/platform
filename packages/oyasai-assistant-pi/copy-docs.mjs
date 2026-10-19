import {
  chmodSync,
  copyFileSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import { join, resolve, sep } from "node:path";

// Usage: node copy-docs.mjs <platform checkout> <Misumaru checkout> <new private destination>
const [platformArg, privateArg, destinationArg] = process.argv.slice(2);
if (!platformArg || !privateArg || !destinationArg)
  throw new Error("Three paths required");
const platform = realpathSync(platformArg);
const destination = resolve(destinationArg);
if (
  destination.startsWith(platform + sep) &&
  !destination.startsWith(join(platform, "build") + sep)
)
  throw new Error(
    "Never copy operational documents into the public repository",
  );
mkdirSync(destination, { mode: 0o700 }); // Fail if already present; do not retain stale documents.
let count = 0;
for (const [root, names] of [
  [join(platform, "docs/Projects"), ["PROJECT.md", "player.md"]],
  [join(realpathSync(privateArg), "Projects"), ["operator.md"]],
]) {
  for (const project of readdirSync(root, { withFileTypes: true })) {
    if (!project.isDirectory() || !/^[a-z0-9-]+$/.test(project.name)) continue;
    for (const name of names) {
      const source = join(root, project.name, name);
      try {
        if (!lstatSync(source).isFile()) continue;
      } catch {
        continue;
      }
      const target = join(destination, project.name);
      mkdirSync(target, { recursive: true, mode: 0o700 });
      copyFileSync(source, join(target, name));
      chmodSync(join(target, name), 0o600);
      count++;
    }
  }
}
console.log(`Copied ${count} documents into a private data directory.`);
