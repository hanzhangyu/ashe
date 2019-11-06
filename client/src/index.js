import Vue from 'vue';
import App from './app.vue';

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
// const app = new Vue(App).$mount('#root') // https://github.com/vuejs/vue-hot-reload-api/issues/61 我去 还有问题。。。
