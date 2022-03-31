import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash'
  },
  base: '/rise-statistics/',
  publicPath: '/rise-statistics/',
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
