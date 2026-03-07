// Imports
import uni from '@dcloudio/vite-plugin-uni';
import { type PluginOption } from 'vite';

// Type
type ViteEnv = ImportMetaEnv;

export const createVitePlugin = (env: ViteEnv, isBuild: boolean) => {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        /**
         * uni
         * @see https://uniapp.dcloud.net.cn/
         */
        uni(),
    ];

    return vitePlugins;
}