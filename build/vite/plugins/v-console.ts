// Imports
import path from 'node:path';
import { viteVConsole } from 'vite-plugin-vconsole';

// Utils
import { parseEnv } from '../../utils';

// Type
type ViteEnv = ImportMetaEnv;

/**
 * vConsole
 * https://github.com/vadxq/vite-plugin-vconsole
 * npm install -D vconsole vite-plugin-vconsole
 */
export const configVConsolePlugin = (env: ViteEnv) => {
  return viteVConsole({
    /**
     * entry：入口文件
     */
    entry: path.resolve('src/main.ts'),
    /**
     * enabled： 是否启用插件
     */
    enabled: parseEnv(env.VITE_USE_VCONSOLE),
    /**
     * vconsole 配置
     */
    config: {
      maxLogNumber: 1000,
      theme: 'light'
    }
  });
};
