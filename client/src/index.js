import Vue from 'vue';
import { createStore } from 'ashe-core/frameworks/vuex';
import './components/element';
import App from './app.vue';

new Vue({
  el: '#app',
  store: createStore(),
  render(h) {
    return h(App);
  },
});
// const app = new Vue(App).$mount('#root') // https://github.com/vuejs/vue-hot-reload-api/issues/61 我去 还有问题。。。
