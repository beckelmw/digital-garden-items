---
title: Clouflare Worker
url: /code/cloudflare/workers
description: Cloudflare Workers related content
section: Clouflare
---

### Secrets

- https://developers.cloudflare.com/workers/platform/environment-variables
- https://developers.cloudflare.com/workers/cli-wrangler/commands#secret

```
wrangler secret put <name>
```

### Auth

- https://github.com/tsndr/cloudflare-worker-jwt

nodejs libraries supported https://workers.cloudflare.com/works

### Examples

- https://developers.cloudflare.com/workers/examples

### Routing

- https://github.com/kwhitley/itty-router
- https://github.com/kwhitley/itty-router-extras#readme

```
import { status, ThrowableRouter, missing } from 'itty-router-extras';
import notesRouter from './notes.mjs';

const router = ThrowableRouter()
  .all('/api/notes/*', notesRouter.handle)
  .get('/favicon.ico', () => {
    return status(200);
  })
  .all('*', () => missing());

export default {
  fetch: router.handle,
};

```

### HTML templates

- Streaming https://github.com/popeindustries/lit-html-server
- https://lit-html.polymer-project.org/guide/getting-started

### Unit testing

- https://blog.cloudflare.com/unit-testing-workers-in-cloudflare-workers/

### Email

- https://guido.io/posts/sending-email-from-cloudflare-workers/
- https://mailchannels.zendesk.com/hc/en-us/articles/4565898358413-Sending-Email-from-Cloudflare-Workers-using-MailChannels-Send-API

### Local testing

- https://github.com/cloudflare/miniflare

### Debugging with vscode

- https://miniflare.dev/recipes/debugger.html

Had to add `cwd` due to using npm workspaces

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  ""version"": ""0.2.0"",
  ""configurations"": [
    {
      ""name"": ""Miniflare (npm)"",
      ""type"": ""node"",
      ""request"": ""launch"",
      ""runtimeExecutable"": ""npm"",
      ""cwd"": ""${workspaceFolder}/projects/notes"",
      ""runtimeArgs"": [""run"", ""dev""], // same script name as in package.json
      ""skipFiles"": [""<node_internals>/**""]
    }
  ]
}
```

### NPM Scripts

```
{
    ""build"": ""esbuild --bundle --sourcemap --outfile=./dist/index.mjs ./src/index.mjs --format=esm"",
    ""dev"": ""miniflare --watch --debug"",
    ""publish"": ""wrangler publish
}
```

## HTML Rewriter

- https://stanislas.blog/2020/05/native-image-lazy-loading-ghost-cloudflare-worker/
- https://jross.me/using-cloudflare-workers-htmlrewriter-to-extend-ghost-pro/
- https://developers.cloudflare.com/workers/runtime-apis/html-rewriter

## PDF Generation examples

- https://github.com/adamschwartz/generate.invoice.workers.dev/blob/master/index.js

## Internationalization

- https://dev.to/cloudflareworkers/localizing-applications-with-cloudflare-worker-s-new-streaming-html-rewriter-1k41