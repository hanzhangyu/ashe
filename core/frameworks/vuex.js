import Vue from 'vue';
import Vuex from 'vuex';
import { state, modules } from '../adapaters/vuex';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state,
    modules,
  });
}
