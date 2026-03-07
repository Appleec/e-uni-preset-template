import { viteMockServe } from 'vite-plugin-mock';

type ViteEnv = ImportMetaEnv;

/**
 * Mock
 * https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md
 * npm install -D mockjs vite-plugin-mock
 */
export const configMockPlugin = (env: ViteEnv) => {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    enable: env.VITE_USE_MOCK === 'true',
    watchFiles: true,
    logger: true,
  });
};
