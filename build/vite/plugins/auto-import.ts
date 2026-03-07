import AutoImport from 'unplugin-auto-import/vite';

// tdesign-mobile-vue
// @see https://github.com/Tencent/tdesign-mobile-vue
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';

/**
 * AutoImport
 * https://github.com/unplugin/unplugin-auto-import
 */
export const configAutoImport = () => {
  return AutoImport({
    resolvers: [
      TDesignResolver({
        library: 'mobile-vue',
      })
    ],
  });
};
