import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  readlinkSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { update } from "./update.mjs";

test("SHA/tool identity, promotion, offline restart, failed build and untrusted Git entries", async () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "oyasai-web-test-"));
  const repo = path.join(root, "repo");
  const dataDir = path.join(root, "data");
  const toolsDir = path.resolve(".");
  const git = (...args) =>
    execFileSync("git", args, { cwd: repo, encoding: "utf8" });
  let builds = 0;
  try {
    mkdirSync(repo);
    git("init", "-b", "main", "--quiet");
    git("config", "user.email", "test@example.invalid");
    git("config", "user.name", "Test");
    cpSync("test/content", path.join(repo, "src/content/docs"), {
      recursive: true,
    });
    writeFileSync(
      path.join(repo, "package.json"),
      '{"scripts":{"build":"exit 1"}}',
    );
    git("add", ".");
    git("commit", "--quiet", "-m", "fixture");
    const build = (workspace) => {
      builds++;
      assert.equal(existsSync(path.join(workspace, ".git")), false);
      assert.equal(
        JSON.parse(readFileSync(path.join(workspace, "package.json"))).name,
        "oyasai-web",
      );
      mkdirSync(path.join(workspace, "dist"));
      writeFileSync(
        path.join(workspace, "dist/index.html"),
        `version ${builds}`,
      );
    };
    const options = { repo, dataDir, toolsDir, toolId: "tools-1", build };
    assert.equal(await update(options), "published");
    const current = path.join(dataDir, "current");
    const first = readlinkSync(current);
    assert.equal(await update(options), "skipped");
    assert.equal(builds, 1);
    assert.equal(await update({ ...options, toolId: "tools-2" }), "published");
    assert.notEqual(readlinkSync(current), first);
    const second = readlinkSync(current);

    writeFileSync(
      path.join(repo, "src/content/docs/start/index.md"),
      "invalid frontmatter",
    );
    git("add", ".");
    git("commit", "--quiet", "-m", "changed");
    await assert.rejects(
      () =>
        update({
          ...options,
          build: () => {
            throw new Error("build failed");
          },
        }),
      /build failed/,
    );
    assert.equal(readlinkSync(current), second);
    assert.equal(
      readFileSync(path.join(current, "site/index.html"), "utf8"),
      "version 2",
    );
    await assert.rejects(() =>
      update({ ...options, repo: path.join(root, "missing") }),
    );
    assert.equal(readlinkSync(current), second);
    assert.equal(await update(options), "published");
    const third = readlinkSync(current);
    assert.notEqual(third, second);

    const untrusted = path.join(repo, "src/content/docs/unsafe.mdx");
    writeFileSync(untrusted, "export const unsafe = true;");
    git("add", ".");
    git("commit", "--quiet", "-m", "mdx");
    await assert.rejects(() => update(options), /MDX/);
    assert.equal(readlinkSync(current), third);
    rmSync(untrusted);
    symlinkSync("/etc/passwd", path.join(repo, "src/content/docs/unsafe.md"));
    git("add", ".");
    git("commit", "--quiet", "-m", "symlink");
    await assert.rejects(() => update(options), /リンク/);
    assert.equal(readlinkSync(current), third);
    rmSync(path.join(repo, "src/content/docs/unsafe.md"));
    git("add", ".");
    git(
      "update-index",
      "--add",
      "--cacheinfo",
      `160000,${git("rev-parse", "HEAD").trim()},module`,
    );
    git("commit", "--quiet", "-m", "submodule");
    await assert.rejects(() => update(options), /submodule/);
    assert.equal(readlinkSync(current), third);
    git("update-index", "--force-remove", "module");
    cpSync("test/content", path.join(repo, "src/content/docs"), {
      recursive: true,
    });
    git("add", ".");
    git("commit", "--quiet", "-m", "valid renderer fixture");
    assert.equal(await update({ ...options, build: undefined }), "published");
    assert.ok(
      existsSync(path.join(current, "site/pagefind/pagefind-entry.json")),
    );
    assert.doesNotMatch(
      readFileSync(path.join(current, "site/index.html"), "utf8"),
      /oyasaiUnsafe|onerror=|javascript:/,
    );
    const rendered = readlinkSync(current);
    writeFileSync(
      path.join(repo, "src/content/docs/index.md"),
      "---\ntitle: malicious\nhead:\n  - tag: script\n    content: alert(1)\n---\n",
    );
    git("add", ".");
    git("commit", "--quiet", "-m", "unsafe frontmatter");
    await assert.rejects(() => update({ ...options, build: undefined }));
    assert.equal(readlinkSync(current), rendered);
    assert.equal(
      readdirSync(dataDir).some((entry) => entry.startsWith(".build-")),
      false,
    );
    assert.equal(existsSync(path.join(dataDir, ".current-next")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
