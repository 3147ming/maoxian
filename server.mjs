import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { constants as zlibConstants, createBrotliCompress, createGzip } from 'node:zlib';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const defaultRoot = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(process.env.ROOT || defaultRoot);
const port = Number(process.env.PORT || 5173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const compressible = new Set(['.html', '.js', '.mjs', '.css', '.json', '.map', '.txt', '.md', '.svg', '.gltf']);

function pickEncoding(header) {
  const value = (header || '').toLowerCase();
  if (/\bbr\b/.test(value)) return 'br';
  if (/\bgzip\b/.test(value)) return 'gzip';
  return null;
}

function etagOf(info) {
  return `W/"${info.size.toString(16)}-${Math.floor(info.mtimeMs).toString(16)}"`;
}

function sendText(res, status, text) {
  res.writeHead(status, {
    'content-type': 'text/plain; charset=utf-8',
    'cache-control': 'no-store'
  });
  res.end(text);
}

createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    sendText(res, 405, 'Method Not Allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    sendText(res, 400, 'Bad Request');
    return;
  }

  const rel = normalize(pathname).replace(/^[\\/]+/, '');
  let file = join(root, rel || 'index.html');
  if (!file.startsWith(root.endsWith(sep) ? root : root + sep)) {
    sendText(res, 403, 'Forbidden');
    return;
  }

  let info;
  try {
    info = await stat(file);
    if (info.isDirectory()) {
      file = join(file, 'index.html');
      info = await stat(file);
    }
  } catch {
    sendText(res, 404, 'Not Found');
    return;
  }

  const ext = extname(file).toLowerCase();
  const etag = etagOf(info);
  const headers = {
    'content-type': types[ext] || 'application/octet-stream',
    'cache-control': 'no-cache',
    'etag': etag,
    'vary': 'accept-encoding'
  };

  const inm = req.headers['if-none-match'];
  if (inm && inm.split(',').some((tag) => tag.trim().replace(/^W\//, '') === etag.replace(/^W\//, ''))) {
    res.writeHead(304, headers);
    res.end();
    return;
  }

  const encoding = compressible.has(ext) ? pickEncoding(req.headers['accept-encoding']) : null;

  if (encoding) {
    headers['content-encoding'] = encoding;
    res.writeHead(200, headers);
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    const stream = createReadStream(file);
    const packer = encoding === 'br'
      ? createBrotliCompress({
          params: {
            [zlibConstants.BROTLI_PARAM_QUALITY]: 5
          }
        })
      : createGzip({ level: 6 });
    stream.on('error', () => res.destroy());
    packer.on('error', () => res.destroy());
    stream.pipe(packer).pipe(res);
    return;
  }

  headers['content-length'] = String(info.size);
  res.writeHead(200, headers);
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  const stream = createReadStream(file);
  stream.on('error', () => res.destroy());
  stream.pipe(res);
}).listen(port, () => {
  console.log(`INK-BLADE-3D running at http://localhost:${port} (root: ${root})`);
});
