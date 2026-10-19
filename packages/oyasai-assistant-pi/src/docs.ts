import {
  constants,
  closeSync,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import { join, relative, sep } from "node:path";

// Snapshot only the three supported Markdown files; never offer an arbitrary filesystem tool.
export class Docs {
  private files = new Map<string, string>();
  private readonly root: string;

  constructor(directory: string) {
    const root = realpathSync(directory);
    this.root = root;
    let total = 0;
    for (const project of readdirSync(root, { withFileTypes: true })) {
      if (!project.isDirectory() || !/^[a-z0-9-]+$/.test(project.name))
        continue;
      for (const name of ["PROJECT.md", "player.md", "operator.md"]) {
        const file = join(root, project.name, name);
        try {
          if (!lstatSync(file).isFile()) continue;
        } catch {
          continue;
        }
        const rel = relative(root, realpathSync(file));
        if (rel.startsWith(`..${sep}`) || rel === "..")
          throw new Error("Document outside root");
        const fd = openSync(file, constants.O_RDONLY | constants.O_NOFOLLOW);
        try {
          const stat = fstatSync(fd);
          if (!stat.isFile() || stat.size > 512 * 1024)
            throw new Error("Document too large");
          total += stat.size;
          if (total > 10 * 1024 * 1024 || this.files.size >= 500)
            throw new Error("Too many documents");
          this.files.set(
            `${project.name}/${name}`,
            readFileSync(fd, "utf8").replace(
              /^---\r?\n[\s\S]*?\r?\n---\r?\n/,
              "",
            ),
          );
        } finally {
          closeSync(fd);
        }
      }
    }
  }

  instructions(): string {
    return ["AGENTS.md", "INDEX.md"]
      .map((name) => {
        try {
          return `${name}:\n${readFileSync(join(this.root, name), "utf8")}`;
        } catch (error: any) {
          if (error.code === "ENOENT") return "";
          throw error;
        }
      })
      .join("\n");
  }

  search(query: string): string {
    if (!query.trim() || query.length > 200)
      return "検索語は 1〜200 文字にしてください。";
    if (/^(fawe|worldguard|luckperms|coreprotect)$/i.test(query.trim()))
      return "外部プラグインの使い方は収録していません。一般知識と明記して回答してください。";
    const terms = query.toLowerCase().trim().split(/\s+/).slice(0, 8);
    const hits: { title: string; text: string; score: number }[] = [];
    for (const [path, text] of this.files) {
      const project = path.split("/")[0].replaceAll("-", "");
      for (const section of sections(text)) {
        const title = section.ancestry;
        const body = section.text.toLowerCase();
        if (
          !terms.every(
            (term) =>
              (body + title.toLowerCase()).includes(term) ||
              path.toLowerCase().includes(term) ||
              project.includes(term.replaceAll("-", "")),
          )
        )
          continue;
        const first = Math.max(
          0,
          body.indexOf(terms.find((term) => body.includes(term)) ?? ""),
        );
        const score =
          terms.filter((term) => title.toLowerCase().includes(term)).length *
            5 +
          terms.filter((term) =>
            body.includes("`/" + term.replace(/^\//, "") + "`"),
          ).length *
            4 -
          (/AI 作業入口|既知の制限|判断の記録/.test(title) ? 5 : 0) +
          (terms.includes("設定") && /config\.yml|設定と既定値/.test(title)
            ? 4
            : 0);
        hits.push({
          title: `${path} / ${title} (read_doc heading=${JSON.stringify(section.heading)})`,
          text: section.text.slice(
            Math.max(0, first - 150),
            Math.max(0, first - 150) + 1200,
          ),
          score,
        });
      }
    }
    return (
      hits
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map((hit) => `${hit.title}\n${hit.text}`)
        .join("\n\n") ||
      "該当資料なし。外部プラグインなどは一般知識と断って回答してください。関係のない資料は読み歩かないでください。"
    );
  }

  read(path: string, heading: string): string {
    const text = this.files.get(path);
    const section =
      text && sections(text).find((section) => section.heading === heading);
    return section
      ? `${path} / ${section.ancestry}\n${section.text.slice(0, 4000)}`
      : "資料名または見出しが不正です。search_docs が返す資料名・見出しを指定してください。";
  }
}

function sections(text: string) {
  const parents: string[] = [];
  return text.split(/(?=^#{1,6} )/m).flatMap((text) => {
    const match = /^(#{1,6}) (.+)\r?\n/.exec(text);
    if (!match) return [];
    parents.length = match[1].length - 1;
    parents.push(match[2].trim());
    if (!text.slice(match[0].length).trim()) return [];
    return [
      {
        heading: match[2].trim(),
        ancestry: parents.filter(Boolean).join(" / "),
        text,
      },
    ];
  });
}
