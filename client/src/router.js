import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const createTemplatePage = () => import('./views/SchemaTemplate.vue');

const router = new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_PATH,
  routes: [
    {
      path: '/product',
      name: 'productList',
      component: createTemplatePage,
    },
    {
      path: '/product/create',
      name: 'productCreate',
      component: createTemplatePage,
    },
    {
      path: '/admin/create',
      name: 'adminCreatePage',
      component: createTemplatePage,
    },
    {
      path: '/admin/create/schema',
      name: 'adminCreatePageSchema',
      component: createTemplatePage,
    },
  ],
});

export default router;
