import Vue from 'Vue';

export default {
  setConst (state, args) {
    Vue.set(state, args.name, args.result);
  },
  setAuthInfo (state, args) {
    Vue.set(state, args.name, args.result);
  }
};
