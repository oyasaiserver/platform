import { objectKeys } from "@oyasaiserver/cdktf/object";
import { mkdtempDisposable } from "node:fs/promises";
import { suite, test } from "node:test";
import { downloadPlugins } from "../src/download.ts";
import { registry } from "../src/registry.ts";

await suite(import.meta.filename, async () => {
  const remoteIds = objectKeys(registry).filter((id) => {
    return registry[id].type !== "local";
  });

  await test("all plugins can be downloaded", async () => {
    await using tempdir = await mkdtempDisposable("test-plugins-");
    await downloadPlugins(tempdir.path, remoteIds);
  });
});
