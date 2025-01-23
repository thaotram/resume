import type { PluginOption, UserConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import autoImport from 'unplugin-auto-import/vite';
import icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { ViteImageOptimizer as viteImageOptimizer } from 'vite-plugin-image-optimizer';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteAutoImports } from './vite.config.auto-import';
import {
  customCollections,
  customIconsResolver,
} from './vite.config.unplugin-icons';

const typesGeneratedFolder = 'src/types/generated';

export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  const devPlugins: PluginOption[] = [];

  if (mode === 'development') {
    const { i18nextHMRPlugin } = await import('i18next-hmr/vite');
    devPlugins.push(i18nextHMRPlugin({ localesDir: './public/locales' }));
  }

  return {
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [
      react(),
      nodePolyfills(),
      tsconfigPaths(),
      autoImport({
        imports: [viteAutoImports],
        resolvers: [customIconsResolver],
        dts: resolve(__dirname, typesGeneratedFolder, 'auto-imports.d.ts'),
      }),
      viteImageOptimizer(),
      icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections,
      }),
    ].concat(devPlugins),
  };
});
