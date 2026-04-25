// Imports
import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// Utils
import { getCurrentBranch, getCurrentCommitId } from '@elinzy/git';

// Type
type ViteEnv = ImportMetaEnv;

/**
 * createHtmlPlugin
 * https://github.com/vbenjs/vite-plugin-html
 */
export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {},
      tags: [
        {
          tag: 'meta',
          attrs: {
            'data-env': env.VITE_APP_MODE || 'unknown',
            'data-refs': getCurrentBranch() || 'unknown',
            'data-hash': getCurrentCommitId() || 'unknown',
            'data-timestamp': Date.now() || 'unknown',
          },
          injectTo: 'head-prepend',
        }
      ],
    }
  });
  return htmlPlugin;
}
