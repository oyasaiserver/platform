import { readdir, rm } from "node:fs/promises";
export async function clearWorkspace() {
  if (process.cwd() !== "/workspace" || process.env.HOME !== "/workspace")
    throw new Error("Unexpected workspace");
  // A shell may leave background children; remove them before clearing the shared tmpfs.
  for (let round = 0; round < 5; round++) {
    const others = (await readdir("/proc")).filter(
      (p) => /^\d+$/.test(p) && Number(p) !== process.pid,
    );
    if (!others.length) break;
    for (const pid of others) {
      try {
        process.kill(Number(pid), "SIGKILL");
      } catch (e: any) {
        if (e.code !== "ESRCH") throw e;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 10));
    if (round === 4) throw new Error("Workspace children survived");
  }
  for (const name of await readdir("/workspace"))
    await rm(`/workspace/${name}`, { recursive: true, force: true });
}
