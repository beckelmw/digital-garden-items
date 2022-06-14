import { writeFile } from "fs/promises";
import buildIndexFile from "./lib/build-index-file.js";
import getFiles from "./lib/get-files.js";
import getMarkdown from "./lib/get-markdown.js";

const files = await getFiles("items/code/**/*.md");
const markdown = await getMarkdown(files);
const meta = markdown.map((x) => x.meta).filter((x) => !!x.section);

// Create the readme.md
const md = await buildIndexFile(meta);
await writeFile("./items/code/index.md", md);
