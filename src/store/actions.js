import * as API from '@/api';
import localRouterInfo from '@/router';
import Vue from 'vue';
export default {
  getConst ({state, commit}) {
    console.log(state.count);
    const name = ['user1', 'user2'];
    const user = {
      name: 'userInfo',
      userInfoDetail: {
        address: '深圳',
        phone: '13265894596'
      }
    };
    console.log(...name);
    commit('setConst', {
      name: 'user',
      result: user.userInfoDetail
    });
  },
  getAuthInfo ({ state, commit }) {
    new Vue().axios.get(API.getFuncTreeList)
      .then(({ data: { result } }) => {
        console.log(result);
        console.log(localRouterInfo);
        commit('setAuthInfo', {
          name: 'authList',
          result
        });
      });
  }
};
