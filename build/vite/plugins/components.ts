import Components from 'unplugin-vue-components/vite';

// tdesign-mobile-vue
// @see https://github.com/Tencent/tdesign-mobile-vue
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';

// Icons
import IconsResolver from 'unplugin-icons/resolver';

/**
 * Components
 * https://github.com/antfu/unplugin-vue-components
 */
export const configComponentsPlugin = () => {
  const configComponentsPlugin = Components({
    resolvers: [
      // TDesign
      TDesignResolver({
        library: 'mobile-vue',
      }),

      IconsResolver({
        // 设置前缀
        // prefix: 'icon'
        //
        //取消前缀
        // this is optional, default enabling all the collections supported by Iconify
        //注意要报取消前缀的图标对应的图标集ID添加至下方，否则不生效
        //只要是取消了前缀，之前的使用方式也不生效，除非手动引入
        // prefix: false,
        // enabledCollections: ['ep'],
        //
        //集合别名
        // alias: {
        //   el: 'ep'
        //   // fas: 'fa-solid'
        //   // ...
        // }
        //
        //当与解析器一起使用进行自动导入时，您需要告诉它您的自定义集合名称：
        //标识自定义图标集
        customCollections: ['custom'],
      }),
    ]
  });
  return configComponentsPlugin;
};
