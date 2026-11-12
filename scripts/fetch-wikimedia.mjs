// Rapatrie les photos Wikimedia Commons sur le site (plus rapide que de les charger depuis Wikimedia).
// Lancé par le workflow GitHub « Rapatrier les photos Wikimedia ». Nécessite ImageMagick (convert).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const src = readFileSync('src/data/photos.ts', 'utf8');
const files = [...src.matchAll(/file: '((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
const manifestPath = 'src/data/wm-local.json';
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
mkdirSync('public/images/wm', { recursive: true });

const slug = (f) => f.replace(/\.[a-z]+$/i, '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

for (const file of files) {
  if (manifest[file]) continue;
  const base = `/images/wm/${slug(file)}`;
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1920`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'chauffeurmadagascar.com image mirror (contact via site)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const tmp = `/tmp/${slug(file)}`;
    writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
    for (const w of [800, 1600]) {
      execFileSync('convert', [tmp, '-auto-orient', '-strip', '-resize', `${w}x>`, '-sampling-factor', '4:2:0', '-interlace', 'JPEG', '-quality', '78', `public${base}-${w}.jpg`]);
    }
    manifest[file] = base;
    console.log('OK', file);
  } catch (e) {
    console.log('ÉCHEC', file, e.message);
  }
  await new Promise((r) => setTimeout(r, 1500));
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
