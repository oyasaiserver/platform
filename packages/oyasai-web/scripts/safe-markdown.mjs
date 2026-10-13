// Raw HTML is never passed to Astro's compiler or the browser.
export const safeMarkdown = {
  name: "oyasai-safe-markdown",
  html(node, context) {
    context.removeNode(node);
  },
  link(node, context) {
    if (!safeUrl(node.url)) context.removeNode(node);
  },
  image(node, context) {
    if (!safeUrl(node.url)) context.removeNode(node);
  },
  definition(node, context) {
    if (!safeUrl(node.url)) context.removeNode(node);
  },
};

export function safeUrl(value) {
  try {
    return ["http:", "https:", "mailto:"].includes(
      new URL(value, "https://oyasai.io/").protocol,
    );
  } catch {
    return false;
  }
}
