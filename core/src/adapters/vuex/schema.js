import { SchemaInteractor } from '../../useCases';

function state() {
  return {
    skeleton: {
      header: null,
      aside: null,
      main: null,
      footer: null,
    },
    views: {},
    // models: {},
  };
}

const mutations = {
  SET_VIEWS_SCHEMA(state, { schemas, path }) {
    state.views = Object.assign({}, state.views, { [path]: schemas });
  },
  SET_SKELETON_SCHEMA(state, schema) {
    state.skeleton = schema;
  },
  // PERSIST_MODEL(state, { path, models }) {
  //   state.models[path] = models;
  // },
};

const actions = {
  // async persistModels({ commit }, payload) {
  //   commit('PERSIST_MODEL', payload);
  // },
  // async recoverModels({ state }, path) {
  //   return state.models[path];
  // },
  async fetchPageSchema(_, path) {
    const { schemas, models } = await SchemaInteractor.getPageSchema(path);
    return { schemas, path, models }; // 因为 model 需要在组件 create 之前就绪，才好传入初始值
  },
  getModelFromSchema(_, schemas) {
    return SchemaInteractor.getModelFromSchema(schemas);
  },
  async setPageSchema({ commit }, { schemas, path, models }) {
    commit('SET_VIEWS_SCHEMA', { schemas, path });
  },
  async getSkeletonSchema({ commit }) {
    const schema = await SchemaInteractor.getSkeletonSchema();
    commit('SET_SKELETON_SCHEMA', schema);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
