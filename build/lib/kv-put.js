import got from "got";
import { mkdir, writeFile } from "fs/promises";
import { resolve } from "path";

export default async (keyName, opts) => {
  if (process.env.NODE_ENV !== "production") {
    await mkdir(resolve(process.cwd(), "./dist"), { recursive: true });
    await writeFile(
      resolve(process.cwd(), `./dist/${keyName}`),
      opts.body,
      "utf-8"
    );
    return;
  }

  const {
    CLOUDFLARE_API_URL,
    CLOUDFLARE_ACCOUNT_ID,
    CONTENT_KV_ID,
    CLOUDFLARE_API_KEY,
  } = process.env;

  console.log(`Uploading ${keyName}`);
  try {
    return got.put(
      `${CLOUDFLARE_API_URL}accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CONTENT_KV_ID}/values/${keyName}`,
      {
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_KEY}`,
        },
        ...opts,
      }
    );
  } catch (err) {
    console.error(err.response);
    process.exit(-1);
  }
};
