import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { parse, walkSync, ELEMENT_NODE } from "ultrahtml";

export function inspectHtml(html) {
  const ids = new Set();
  const links = [];
  walkSync(parse(html), (node) => {
    if (node.type !== ELEMENT_NODE) return;
    if (node.attributes.id !== undefined) ids.add(node.attributes.id);
    if (node.name === "a" && node.attributes.href !== undefined) {
      links.push(node.attributes.href);
    }
  });
  return { ids, links };
}

export async function loadBuild(directory = "dist") {
  const entries = await readdir(directory, {
    recursive: true,
    withFileTypes: true,
  });
  const files = new Set();
  const pages = new Map();
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const file = path.join(entry.parentPath, entry.name);
    const key = "/" + path.relative(directory, file).split(path.sep).join("/");
    files.add(key);
    if (entry.name.endsWith(".html")) {
      pages.set(key, inspectHtml(await readFile(file, "utf8")));
    }
  }
  return { files, pages };
}

export function checkLinks({ files, pages }) {
  const origin = "https://wiki.invalid";
  const errors = [];
  let internal = 0;
  let external = 0;
  let anchors = 0;
  for (const [file, page] of pages) {
    const route = file.replace(/index\.html$/, "");
    for (const href of page.links) {
      try {
        const url = new URL(href, origin + route);
        if (url.origin !== origin) {
          external++;
          continue;
        }
        internal++;
        const pathname = decodeURIComponent(url.pathname);
        const target = files.has(pathname)
          ? pathname
          : pathname.replace(/\/$/, "") + "/index.html";
        if (!files.has(target)) {
          errors.push(`${route}: ${href} — ファイルなし`);
        } else if (url.hash) {
          anchors++;
          if (
            !pages.get(target)?.ids.has(decodeURIComponent(url.hash.slice(1)))
          ) {
            errors.push(`${route}: ${href} — アンカーなし`);
          }
        }
      } catch (error) {
        errors.push(`${route}: ${href} — ${error.message}`);
      }
    }
  }
  return { pages: pages.size, internal, external, anchors, errors };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const result = checkLinks(await loadBuild());
  console.log(JSON.stringify(result, null, 2));
  if (result.pages === 0 || result.errors.length) process.exitCode = 1;
}
