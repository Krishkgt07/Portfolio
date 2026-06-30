const fs = require('fs');
const path = require('path');

const files = {
  '_libraries/process.wasm': 'https://app.spline.design/_libraries/process.wasm',
  '_libraries/boolean.wasm': 'https://app.spline.design/_libraries/boolean.wasm',
  '_libraries/navmesh.wasm': 'https://app.spline.design/_libraries/navmesh.wasm',
  'assets/static/rapier_wasm3d_bg.ap61jT-6.wasm': 'https://app.spline.design/assets/static/rapier_wasm3d_bg.ap61jT-6.wasm'
};

async function download() {
  console.log('Downloading WebAssembly libraries from app.spline.design...');
  for (const [relPath, url] of Object.entries(files)) {
    try {
      const fullPath = path.join('public', relPath);
      // Ensure directory exists
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      
      console.log(url, '=> status:', res.status);
      if (res.status === 200) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(fullPath, Buffer.from(buf));
        console.log(`Saved public/${relPath} (${buf.byteLength} bytes)`);
      } else {
        console.error(`Failed to download ${relPath}: status ${res.status}`);
      }
    } catch (e) {
      console.error(`Error downloading ${relPath}:`, e.message);
    }
  }
}

download();
