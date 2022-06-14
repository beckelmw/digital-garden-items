import groupBy from "./group-by.js";
import { pipe, sortBy, prop } from "ramda";

export default async (files) => {
  const mapData = (arr) =>
    arr.map(({ title, url, section }) => {
      return {
        Name: `[${title}](${url}.md)`,
        Section: section,
      };
    });

  const buildList = (sections) =>
    Object.keys(sections)
      .map(
        (section) =>
          `### ${section}\n${sections[section]
            .map((s) => `  - ${s.Name}`)
            .join("\n")}`
      )
      .join("\n\n");

  const tables = pipe(
    mapData,
    sortBy(prop("Name")),
    groupBy("Section"),
    buildList
  )(files);

  const md = `---
title: Code
url: /code
---

${tables}

`;

  return md;
};
