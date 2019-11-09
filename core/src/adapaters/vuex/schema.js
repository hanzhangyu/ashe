import { SchemaInteractor } from '../../useCases';

function state() {
  return {
    skeleton: {
      header: 'PaulHeader',
      aside: 'PaulAside',
      main: 'PaulMain',
      footer: 'PaulFooter',
    },
    views: {},
    viewsHide: {},
  };
}

const mutations = {
  SET_VIEWS_SCHEMA(state, { schemas, path }) {
    state.views = Object.assign({}, state.views, { [path]: schemas });
  },
  SET_SKELETON_SCHEMA(state, schema) {
    state.skeleton = schema;
  },
  HIDE_VIEWS_SCHEMA(state, path) {
    state.viewsHide[path] = state.views[path];
    state.views[path] = null;
  },
  RECOVER_VIEWS_SCHEMA(state, path) {
    state.views[path] = state.viewsHide[path];
    state.viewsHide[path] = null;
  },
};

const actions = {
  async getPageSchema(_, path) {
    const { schemas, models } = await SchemaInteractor.getPageSchema(path);
    return { schemas, path, models }; // 因为 model 需要在组件 create 之前就绪，才好传入初始值
  },
  hidePageSchema({ commit }, { schemas, path }) {
    commit('HIDE_VIEWS_SCHEMA', path);
    return SchemaInteractor.getModelFromSchema(schemas);
  },
  recoverPageSchema({ commit }, path) {
    commit('RECOVER_VIEWS_SCHEMA', path);
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
