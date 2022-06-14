---
title: Clouflare Images
url: /code/cloudflare/images
description: Cloudflare Images related content
section: Clouflare
---


- https://developers.cloudflare.com/images/upload-images/direct-creator-upload

```
  .get('/upload-url', async (request, env) => {
    const req = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/images/v1/direct_upload`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.CLOUDFLARE_IMAGES_TOKEN}`,
        },
        body: JSON.stringify({ requireSignedURLs: true }),
      },
    );
    const { result } = await req.json();
    return json({ url: result?.uploadURL });
  })
```

```
export async function postImage(file) {
  const { url } = await get(`/notes/upload-url`);

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Error uploading file to ${url}`, response);
  }

  return await response.json();
}
```