'use strict';
exports.__esModule = true;
var vite_1 = require('vite');
var vite_plugin_svelte_1 = require('@sveltejs/vite-plugin-svelte');
var vite_tsconfig_paths_1 = require('vite-tsconfig-paths');
// https://vitejs.dev/config/
exports['default'] = (0, vite_1.defineConfig)({
  plugins: [
    (0, vite_plugin_svelte_1.svelte)(),
    (0, vite_tsconfig_paths_1['default'])({
      root: 'svelte',
    }),
  ],
  server: {
    port: 4000,
  },
  build: {
    outDir: 'client',
  },
});
