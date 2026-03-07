// Imports
import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// Utils
import { getCurrentBranch, getCurrentCommitId } from '../../utils';

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
            'data-env': env.NODE_ENV || 'unknown',
            'data-branch': getCurrentBranch() || 'unknown',
            'data-commit-id': getCurrentCommitId() || 'unknown',
            'data-build-timestamp': Date.now() || 'unknown',
          },
          injectTo: 'head-prepend',
        }
      ],
    }
  });
  return htmlPlugin;
}
