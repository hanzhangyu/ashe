import Vue from 'vue';
import { createStore } from 'ashe-core/src/frameworks/vuex';
import router from './router';
import './components/element';
import App from './app.vue';

new Vue({
  el: '#app',
  router,
  store: createStore(router),
  render(h) {
    return h(App);
  },
});
// const app = new Vue(App).$mount('#root') // https://github.com/vuejs/vue-hot-reload-api/issues/61 我去 还有问题。。。
