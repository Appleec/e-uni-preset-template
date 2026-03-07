import Components from 'unplugin-vue-components/vite';

// tdesign-mobile-vue
// @see https://github.com/Tencent/tdesign-mobile-vue
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';

/**
 * Components
 * https://github.com/antfu/unplugin-vue-components
 */
export const configComponentsPlugin = () => {
  const configComponentsPlugin = Components({
    resolvers: [
      TDesignResolver({
        library: 'mobile-vue',
      })
    ]
  });
  return configComponentsPlugin;
};
