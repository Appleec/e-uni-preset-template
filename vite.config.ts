// Imports
import { defineConfig, loadEnv, type UserConfigExport } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Utils
import { parseEnv } from './build/utils';

// Configuration
import { createViteProxy } from './build/vite/proxy';
import { createVitePlugin } from './build/vite/plugins';
import { createViteBuild } from './build/vite/build';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  const isBuild = command === 'build';

  const config: UserConfigExport = {
    base: env.VITE_BASE_PATH,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // define: {},
    server: {
      host: '0.0.0.0',
      port: 8888, // Set the service startup port number
      strictPort: false,
      cors: true, // Allow cross-domain
      open: false, // Configure whether to automatically open the browser when the service starts
      proxy: createViteProxy(env),
    },
    plugins: createVitePlugin(env, isBuild),
    esbuild: {
      drop: !parseEnv(env.VITE_USE_DEBUG) ? ['console', 'debugger'] : [],
    },
    build: createViteBuild(env, isBuild),
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@use "src/styles/var.scss";`,
        },
      },
    },
  };

  return config;
});
