import { copyFileSync } from 'node:fs';

export default {
  base: './',
  plugins: [
    {
      // assets.js 体积过大且需保持原样，不参与打包，构建后直接复制到产物根目录
      name: 'bm-copy-assets',
      closeBundle() {
        copyFileSync('assets.js', 'dist/assets.js');
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
};
