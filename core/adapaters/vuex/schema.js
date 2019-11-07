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
  };
}

const mutations = {
  SET_VIEWS_SCHEMA(state, { schemas, path }) {
    state.views = Object.assign({}, { [path]: schemas });
  },
  SET_SKELETON_SCHEMA(state, schema) {
    state.skeleton = schema;
  },
};

const actions = {
  async getPageSchema({ commit }, path) {
    const { schemas, models } = await SchemaInteractor.getPageSchema(path);
    commit('SET_VIEWS_SCHEMA', { schemas, path });
    return models;
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
