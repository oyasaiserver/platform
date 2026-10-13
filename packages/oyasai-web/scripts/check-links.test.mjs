import assert from "node:assert/strict";
import test from "node:test";
import { checkLinks, inspectHtml } from "./check-links.mjs";

test("built links resolve hubs, relative paths, Japanese anchors and query strings", () => {
  const build = {
    files: new Set([
      "/index.html",
      "/start/index.html",
      "/features/sociallikes/index.html",
    ]),
    pages: new Map([
      [
        "/index.html",
        inspectHtml(
          '<a href="/start/">入口</a><a href="https://example.com/">外部</a>',
        ),
      ],
      [
        "/start/index.html",
        inspectHtml(
          '<a href="../features/sociallikes/?q=1#%E7%9C%8B%E6%9D%BF">機能</a>',
        ),
      ],
      [
        "/features/sociallikes/index.html",
        inspectHtml('<h2 id="看板">看板</h2><a href="#看板">同一ページ</a>'),
      ],
    ]),
  };
  assert.deepEqual(checkLinks(build), {
    pages: 3,
    internal: 3,
    external: 1,
    anchors: 2,
    errors: [],
  });
});

test("missing pages and anchors fail, including leftover Markdown URLs", () => {
  const build = {
    files: new Set(["/index.html"]),
    pages: new Map([
      [
        "/index.html",
        inspectHtml(
          '<a href="/missing/">missing</a><a href="#missing">anchor</a><a href="start.md">old</a>',
        ),
      ],
    ]),
  };
  const result = checkLinks(build);
  assert.equal(result.errors.length, 3);
  assert.match(result.errors[0], /ファイルなし/);
  assert.match(result.errors[1], /アンカーなし/);
});
