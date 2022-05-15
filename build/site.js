import getFiles from "./lib/get-files.js";
import getHtml from "./lib/get-html.js";
import kvPut from "./lib/kv-put.js";

const files = await getFiles("**/*.md");
const mdFiles = await getHtml(files);

const data = Object.fromEntries(
  mdFiles.map(({ meta, html }) => {
    return [meta.url, { ...meta, html }];
  })
);

const json = JSON.stringify(data, null, 2);
await kvPut("site.json", { body: json });
