import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createSatteriMarkdownProcessor } from "@astrojs/markdown-satteri";
import { safeMarkdown } from "./safe-markdown.mjs";

test("raw HTML, Astro directives and unsafe URLs are removed; Markdown remains", async () => {
  const processor = await createSatteriMarkdownProcessor({
    mdastPlugins: [safeMarkdown],
  });
  const result = await processor.render(
    '<script>alert(1)</script>\n\n<img src=x onerror="alert(1)">\n\n<span set:html="danger">text</span>\n\n[bad](javascript:alert%281%29)\n\n![bad](data:text/html,bad)\n\n[good](/start/)\n\n**日本語**',
  );
  assert.doesNotMatch(
    result.code,
    /<script|onerror|set:html|javascript:|data:text\/html/,
  );
  assert.match(result.code, /href="\/start\/"/);
  assert.match(result.code, /<strong>日本語<\/strong>/);
});

test("fixture build never emits raw HTML or unsafe attributes", () => {
  const html = readFileSync("dist/index.html", "utf8");
  assert.doesNotMatch(html, /oyasaiUnsafe|onerror=|javascript:/);
});
