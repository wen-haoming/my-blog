import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', exact: false, component: '@/pages/login' },
    { path: '/',exact: false, component: '@/pages/main/index',
        routes:[
        {path:'/',exact: true, component:'@/pages/list'},
        {path:'/addArticle',exact: true, component:'@/pages/addArticle'}
      ]
  },
    ],
});
