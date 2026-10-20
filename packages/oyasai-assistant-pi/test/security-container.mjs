import assert from "node:assert/strict";
import fs from "node:fs";
import net from "node:net";
import crypto from "node:crypto";
assert.equal(process.getuid(), 1000);
assert.equal(process.env.OYASAI_ASSISTANT_API_KEY, undefined);
assert.ok(
  !Object.keys(process.env).some((k) => /KEY|TOKEN|PASSWORD|SECRET/i.test(k)),
);
for (const path of [
  "/home/server",
  "/server",
  "/plugins",
  "/world",
  "/home/node/.oyasai-assistant-key",
  "/workspace/.oyasai-assistant-key",
])
  assert.ok(!fs.existsSync(path), path);
for (const path of [
  "/docs/.container-write-probe",
  "/app/.container-write-probe",
  "/tmp/.container-write-probe",
  "/dev/shm/.container-write-probe",
]) {
  assert.throws(
    () => fs.writeFileSync(path, "probe"),
    (e) => ["EROFS", "EACCES", "ENOENT"].includes(e.code),
  );
}
fs.writeFileSync("/workspace/probe", "tmpfs writable");
assert.equal(fs.readFileSync("/workspace/probe", "utf8"), "tmpfs writable");
let scanned = 0;
function scan(path) {
  for (const e of fs.readdirSync(path, { withFileTypes: true })) {
    const p = path + "/" + e.name;
    if (e.isDirectory()) scan(p);
    else if (e.isFile()) {
      const data = fs.readFileSync(p);
      assert.ok(
        !/sk-or-v1-[a-f0-9]{64}/.test(data.toString("utf8")),
        "unexpected credential material",
      );
      scanned++;
    }
  }
}
scan("/app");
scan("/docs");
scan("/home");
scan("/workspace");
for (const [host, port] of [
  ["1.1.1.1", 443],
  ["127.0.0.1", 25575],
]) {
  await new Promise((resolve, reject) => {
    const s = net.connect({ host, port });
    s.on("connect", () => {
      s.destroy();
      reject(new Error("network reachable"));
    });
    s.on("error", () => resolve());
    s.setTimeout(1500, () => {
      s.destroy();
      resolve();
    });
  });
}
const status = fs.readFileSync("/proc/self/status", "utf8");
assert.match(status, /CapEff:\s+0+\n/);
assert.match(status, /NoNewPrivs:\s+1/);
const limits = {};
for (const f of ["memory.max", "cpu.max", "pids.max"])
  limits[f] = fs.readFileSync("/sys/fs/cgroup/" + f, "utf8").trim();
assert.equal(limits["memory.max"], "536870912");
assert.equal(limits["cpu.max"], "100000 100000");
assert.equal(limits["pids.max"], "64");
console.log(
  JSON.stringify({
    uid: process.getuid(),
    network: "external and RCON unreachable",
    credentials:
      "no secret environment or OpenRouter credential in scanned files",
    scanned,
    readOnly: "docs/root/tmp",
    workspace: "writable tmpfs",
    serverDirectories: "absent",
    capabilities: "none",
    noNewPrivileges: true,
    limits,
  }),
);
