import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parse, walkSync, TEXT_NODE } from "ultrahtml";
import { querySelector } from "ultrahtml/selector";
import { loadBuild } from "./check-links.mjs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = pathToFileURL(path.resolve("dist") + "/");
const entry = JSON.parse(
  await readFile(new URL("pagefind/pagefind-entry.json", dist), "utf8"),
);
const indexed = [];
for (const [file] of (await loadBuild()).pages) {
  const html = await readFile(new URL("." + file, dist), "utf8");
  const tree = parse(html);
  assert.equal(querySelector(tree, "html").attributes.lang, "ja", file);
  const body = querySelector(tree, "[data-pagefind-body]");
  if (!body) continue;
  const content = querySelector(body, ".sl-markdown-content");
  let query = "";
  if (content)
    walkSync(content, (node) => {
      for (
        let ancestor = node.parent;
        ancestor && ancestor !== content;
        ancestor = ancestor.parent
      ) {
        if (ancestor.attributes?.["data-pagefind-ignore"] !== undefined) return;
      }
      if (
        node.type === TEXT_NODE &&
        /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(
          node.value,
        )
      )
        query += node.value.trim() + " ";
    });
  assert.ok(query, `${file}: 日本語の本文が必要です`);
  indexed.push({ query, route: file.replace(/index\.html$/, "") });
}
assert.ok(indexed.length > 0, "検索対象ページがありません");
assert.equal(
  entry.languages.ja.page_count,
  indexed.length,
  "日本語索引と生成ページ数が一致する",
);

// Execute the generated search bundle entirely from disk, including its WASM index.
globalThis.document = {
  currentScript: null,
  querySelector: (selector) =>
    selector === "html" ? { getAttribute: () => "ja" } : null,
};
globalThis.fetch = async (input) => {
  const url = new URL(String(input), "https://wiki.invalid");
  assert.equal(url.origin, "https://wiki.invalid");
  assert.ok(
    url.pathname.startsWith("/pagefind/") && !url.pathname.includes(".."),
  );
  return new Response(await readFile(new URL("." + url.pathname, dist)), {
    headers: { "Content-Type": "application/octet-stream" },
  });
};
let pagefind;
try {
  const bundle = await import(new URL("pagefind/pagefind.js", dist));
  pagefind = bundle.createInstance({ basePath: "/pagefind/", baseUrl: "/" });
  const segmenter = new Intl.Segmenter("ja", { granularity: "word" });
  for (const { query, route } of indexed) {
    const words = [...segmenter.segment(query)].filter(
      (word) =>
        word.isWordLike &&
        /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]{2}/u.test(
          word.segment,
        ),
    );
    let found = false;
    for (const { segment } of words) {
      const search = await pagefind.search(segment);
      const results = await Promise.all(
        search.results.map((result) => result.data()),
      );
      if (results.some((result) => result.url === route)) {
        found = true;
        break;
      }
    }
    assert.ok(found, `${route} が日本語の本文で検索できる`);
  }
  assert.equal((await pagefind.search('"qzxvkjp987654321"')).results.length, 0);
  console.log(
    `日本語検索: ${indexed.length} ページ、各ページの本文とゼロ件検索を確認`,
  );
} finally {
  await pagefind?.destroy();
}
