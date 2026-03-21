// Imports
import uni from '@dcloudio/vite-plugin-uni';
import { type PluginOption } from 'vite';

// Type
type ViteEnv = ImportMetaEnv;

// Plugins
import { configAutoImport } from './auto-import';
import { configComponentsPlugin } from './components';
import { configHtmlPlugin } from './html';
import { configVConsolePlugin } from './v-console';
import { configIconsPlugin } from './icons';

export const createVitePlugin = (env: ViteEnv, isBuild: boolean) => {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        /**
         * uni
         * @see https://uniapp.dcloud.net.cn/
         */
        uni(),
    ];

    // unplugin-auto-import/vite'
    vitePlugins.push(configAutoImport());
    // unplugin-vue-components/vite
    vitePlugins.push(configComponentsPlugin());
    // vConsole
    vitePlugins.push(configVConsolePlugin(env));
    // icons
    vitePlugins.push(configIconsPlugin());

    if (isBuild) {
        vitePlugins.push(configHtmlPlugin(env, isBuild));
    }

    return vitePlugins;
}