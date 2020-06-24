/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: null,
  },
  getters: {
    getUid(state) {
      console.log('getters获取uid：', state.uid);
      return state.uid;
    },
  },
  mutations: {
    setUid(state, uid) {
      state.uid = uid;
    },
  },
  actions: {
    setUid(context, uid) {
      context.commit('setUid', uid);
      console.log('设置uid为：', uid);
    },
  },
  modules: {
  },
});
