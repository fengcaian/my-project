export default {
  getConst ({state, commit}) {
    console.log(state.count);
    const name = ['user1', 'user2'];
    const name2 = {
      code: 'mbv',
      url: 'www.baidu.com'
    };
    const user = {
      name: 'userInfo',
      userInfoDetail: {
        address: '深圳',
        phone: '13265894596'
      }
    };
    console.log(...name);
    commit('setConst', {
      ...name2,
      result: user.userInfoDetail
    });
  }
};
