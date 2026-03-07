type ViteEnv = ImportMetaEnv;

export const createViteProxy = (env: ViteEnv) => {
  return {
    [env.VITE_BASE_API]: {
      target: 'https://test-dxzg-api.dexunzhenggu.cn',
      // target: 'http://127.0.0.1:8888',
      changeOrigin: true,
      secure: true,
      rewrite: (path) => {
        console.log('=>', path);
        return path.replace(new RegExp(env.VITE_BASE_API), '');
      },
    },
  };
};
