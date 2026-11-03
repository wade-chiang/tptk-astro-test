// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://pt.tptk.com.tw',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [yaml()] },
});
