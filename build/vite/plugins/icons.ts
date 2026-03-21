// Imports
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import Icons from 'unplugin-icons/vite';
import { ExternalPackageIconLoader, FileSystemIconLoader } from 'unplugin-icons/loaders';

/**
 * createIconsPlugin
 * https://github.com/unplugin/unplugin-icons/tree/main
 */
export const configIconsPlugin = () => {
  return Icons({
    // vue2 vue3 jsx
    compiler: 'vue3',

    // defaultClass: '',
    defaultStyle: 'ttt',

    // 必须显式启用 iconify 类型（否则无法解析 @iconify-json/*）
    // iconify: true,

    // 若仅需 SVG 内联，可设为 false；但绝大多数场景需 true
    // svg: true,

    // 自动安装缺失图标包（v0.17+ 强烈推荐）
    autoInstall: true,

    // 确保作用域覆盖 .vue/.tsx 文件
    include: [/\.vue$/, /\.tsx?$/],

    // 可选：指定图标别名映射（解决路径歧义）
    customCollections: {
      custom: FileSystemIconLoader('./src/icons/svg', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
      ),
    },

    // iconCustomizer(collection, icon, props) {},
  });
};
