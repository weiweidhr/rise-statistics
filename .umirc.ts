import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash'
  },
  base: '/docs/',
  publicPath: '/docs/',
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' }
  ],
  fastRefresh: {},
  dynamicImport: {}
});
