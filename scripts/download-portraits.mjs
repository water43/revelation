import { writeFile, mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import path from 'node:path';

const portraits = {
  tagore:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rabindranath_Tagore_in_1909.jpg/800px-Rabindranath_Tagore_in_1909.jpg',
  yeats:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/800px-William_Butler_Yeats_by_George_Charles_Beresford.jpg',
  heraclitus:
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Heraclitus%2C_Johannes_Moreelse.jpg',
  parmenides: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Parmenides.jpg',
  kant: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Immanuel_Kant_-_Gemaelde_1.jpg',
  hegel: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Hegel_portrait_by_Schlesinger_1831.jpg',
  nietzsche: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
  eliot:
    'https://upload.wikimedia.org/wikipedia/commons/2/2b/Thomas_Stearns_Eliot_1920_snapshot_by_Lady_Ottoline_Morrell.jpg',
};

const outDir = path.resolve('public/portraits');
await mkdir(outDir, { recursive: true });

async function download(slug, url) {
  const proxies = [
    url,
    `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ''))}&w=800&output=jpg`,
    `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=800&output=jpg`,
  ];

  for (const candidate of proxies) {
    try {
      const res = await fetch(candidate, {
        headers: { 'User-Agent': 'RevelationGallery/0.1 (educational; contact via github.com/water43/revelation)' },
        redirect: 'follow',
        signal: AbortSignal.timeout(45000),
      });
      if (!res.ok) {
        console.log(`${slug}: HTTP ${res.status} via ${candidate.slice(0, 48)}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 2000) {
        console.log(`${slug}: too small (${buf.length})`);
        continue;
      }
      const ext = candidate.includes('output=jpg') || url.includes('.jpg') ? 'jpg' : 'jpg';
      const file = path.join(outDir, `${slug}.${ext}`);
      await writeFile(file, buf);
      console.log(`${slug}: OK ${buf.length} bytes`);
      return true;
    } catch (err) {
      console.log(`${slug}: fail ${err.message}`);
    }
  }
  return false;
}

let ok = 0;
for (const [slug, url] of Object.entries(portraits)) {
  if (await download(slug, url)) ok += 1;
}
console.log(`done ${ok}/${Object.keys(portraits).length}`);
if (ok < Object.keys(portraits).length) process.exit(1);
