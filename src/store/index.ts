/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { Tip } from '../utils/constructors';
import { TipType } from '../utils/tip';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: null,
    newq: null,
    tip: '',
    tipType: '',
    showTip: false,
  },
  getters: {
  },
  mutations: {
    setUid(state, uid) {
      state.uid = uid;
    },
    closeTip(state) {
      state.showTip = false;
    },
    submitQuestion(state, qa) {
      state.newq = qa;
      console.log(`成功新建qid为${qa.qid}的问题`);
    },
    showTip(state, tip:Tip) {
      state.tip = tip.tip;
      state.tipType = tip.type;
      state.showTip = true;
      setTimeout(() => {
        state.showTip = false;
      }, tip?.timeout ?? 2000);
    },
  },
  actions: {
    submitQuestion(context, qa) {
      context.commit('submitQuestion', qa);
    },
    showTip(context, tip:Tip) {
      context.commit('showTip', tip);
    },
    closeTip(context) {
      context.commit('closeTip');
    },
    setUid(context, uid) {
      context.commit('setUid', uid);
      console.log('设置uid为：', uid);
    },
  },
  modules: {
  },
});
