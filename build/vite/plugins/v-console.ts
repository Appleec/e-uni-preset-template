import path from 'path';
import { viteVConsole } from 'vite-plugin-vconsole';

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
    enabled: env.VITE_USE_VCONSOLE === 'true',
    /**
     * vconsole 配置
     */
    config: {
      maxLogNumber: 1000,
      theme: 'light'
    }
  });
};
