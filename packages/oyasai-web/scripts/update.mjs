import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import {
  cpSync,
  chmodSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";

const children = new Set();
function run(command, args, cwd, seconds = 180) {
  return new Promise((resolve, reject) => {
    const child = execFile(
      "timeout",
      ["--kill-after=10s", `${seconds}s`, command, ...args],
      {
        cwd,
        detached: true,
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
        env: {
          ...process.env,
          GIT_TERMINAL_PROMPT: "0",
          GIT_CONFIG_NOSYSTEM: "1",
          GIT_CONFIG_GLOBAL: "/dev/null",
          ASTRO_TELEMETRY_DISABLED: "1",
        },
      },
      (error, stdout, stderr) => {
        children.delete(child.pid);
        if (stderr) console.error(stderr.trim());
        if (error) reject(error);
        else resolve(stdout);
      },
    );
    children.add(child.pid);
  });
}

export async function extractContent(repository, sha, destination) {
  const entries = (await run("git", ["ls-tree", "-rz", sha], repository))
    .split("\0")
    .filter(Boolean);
  let count = 0;
  for (const entry of entries) {
    const separator = entry.indexOf("\t");
    const header = entry.slice(0, separator);
    const file = entry.slice(separator + 1);
    const [mode, type, oid] = header.split(" ");
    assert.ok(
      mode !== "120000" && mode !== "160000",
      `リンク・submodule は取得できません: ${file}`,
    );
    if (!file.startsWith("src/content/docs/")) continue;
    assert.ok(!/\.mdx$/i.test(file), `MDX は取得できません: ${file}`);
    if (!file.endsWith(".md")) continue;
    assert.ok(
      type === "blob" && ["100644", "100755"].includes(mode),
      `通常ファイルではありません: ${file}`,
    );
    const relative = file.slice("src/content/docs/".length);
    assert.ok(
      !/[\\\x00-\x1f]/.test(relative) &&
        relative.split("/").every((part) => part && !part.startsWith(".")),
      `不正な原稿パス: ${file}`,
    );
    const target = path.join(destination, relative);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(
      target,
      await run("git", ["cat-file", "blob", oid], repository),
    );
    count++;
  }
  assert.ok(count > 0, "Markdown 原稿がありません");
  for (const file of ["index.md", "404.md"])
    assert.ok(existsSync(path.join(destination, file)), `${file} が必要です`);
}

async function buildSite(workspace) {
  await run(
    process.execPath,
    [
      "--preserve-symlinks",
      "--preserve-symlinks-main",
      "node_modules/astro/bin/astro.mjs",
      "build",
    ],
    workspace,
    600,
  );
  for (const check of ["check-links.mjs", "check-search.mjs"]) {
    console.log(
      await run(process.execPath, [`scripts/${check}`], workspace, 180),
    );
  }
  for (const file of [
    "index.html",
    "404.html",
    "pagefind/pagefind-entry.json",
  ]) {
    assert.ok(
      existsSync(path.join(workspace, "dist", file)),
      `生成物がありません: ${file}`,
    );
  }
}

export async function update({
  dataDir = process.env.OYASAI_WEB_DATA || "/data",
  toolsDir = process.env.OYASAI_WEB_TOOLS,
  repo = "https://github.com/oyasaiserver/wiki.git",
  toolId = readFileSync(path.join(toolsDir, "tool-id"), "utf8").trim(),
  build = buildSite,
} = {}) {
  mkdirSync(path.join(dataDir, "releases"), { recursive: true });
  const remote = (
    await run(
      "git",
      ["ls-remote", "--exit-code", repo, "refs/heads/main"],
      dataDir,
    )
  ).trim();
  assert.match(remote, /^[0-9a-f]{40}\s+refs\/heads\/main$/);
  const sha = remote.split(/\s/)[0];
  const id = createHash("sha256").update(`${sha}\n${toolId}`).digest("hex");
  const current = path.join(dataDir, "current");
  if (existsSync(path.join(current, "success.json"))) {
    const previous = JSON.parse(
      readFileSync(path.join(current, "success.json"), "utf8"),
    );
    if (
      previous.sha === sha &&
      previous.toolId === toolId &&
      existsSync(path.join(current, "site/index.html"))
    ) {
      console.log(`変更なし: ${sha}`);
      return "skipped";
    }
  }

  const temporary = realpathSync(mkdtempSync(path.join(dataDir, ".build-")));
  const pending = path.join(dataDir, ".current-next");
  try {
    const repository = path.join(temporary, "repository");
    mkdirSync(repository);
    await run("git", ["init", "--quiet"], repository);
    await run(
      "git",
      ["fetch", "--depth=1", "--no-tags", repo, sha],
      repository,
    );
    assert.equal(
      (await run("git", ["rev-parse", "FETCH_HEAD"], repository)).trim(),
      sha,
    );
    const workspace = path.join(temporary, "workspace");
    mkdirSync(workspace);
    for (const file of [
      "package.json",
      "astro.config.mjs",
      "tsconfig.json",
      "public",
      "scripts",
      "src",
    ]) {
      cpSync(path.join(toolsDir, file), path.join(workspace, file), {
        recursive: true,
      });
    }
    symlinkSync(
      path.join(toolsDir, "node_modules"),
      path.join(workspace, "node_modules"),
    );
    // Nix store directories are read-only; this copied directory receives the Git blobs.
    chmodSync(path.join(workspace, "src/content"), 0o755);
    const docs = path.join(workspace, "src/content/docs");
    rmSync(docs, { recursive: true, force: true });
    await extractContent(repository, sha, docs);
    await build(workspace);

    const release = path.join(dataDir, "releases", id);
    const staged = path.join(temporary, "release");
    mkdirSync(staged);
    renameSync(path.join(workspace, "dist"), path.join(staged, "site"));
    writeFileSync(
      path.join(staged, "success.json"),
      JSON.stringify({ sha, toolId }) + "\n",
    );
    // A completed release may survive a crash immediately before the pointer swap.
    if (!existsSync(release)) renameSync(staged, release);
    rmSync(pending, { force: true });
    symlinkSync(path.join("releases", id), pending);
    renameSync(pending, current);
    console.log(`公開版を更新: ${sha} (${id})`);
    return "published";
  } finally {
    rmSync(pending, { force: true });
    rmSync(temporary, { recursive: true, force: true });
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  for (const signal of ["SIGINT", "SIGTERM"])
    process.on(signal, () => {
      for (const pid of children) {
        try {
          process.kill(-pid, "SIGKILL");
        } catch (error) {
          if (error.code !== "ESRCH") throw error;
        }
      }
      process.exit(143);
    });
  try {
    await update();
  } catch (error) {
    console.error("更新に失敗しました。現行版を維持します。", error);
    process.exitCode = 1;
  }
}
