import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

type ViteEnv = ImportMetaEnv;

/**
 * createHtmlPlugin
 * https://github.com/vbenjs/vite-plugin-html
 */
export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: env.VITE_TITLE
      }
    }
  });
  return htmlPlugin;
}
