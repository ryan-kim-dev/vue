import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      nickname: '',
    },
  },
  getters: {
    // vuex의 getters는 computed 처럼 리턴값을 가진다.
    isLoggedIn(state) {
      // 로그인 여부를 boolean값으로 반환
      return state.userInfo.username !== '';
    },
  },
  mutations: {
    setUserInfo(state, loginUser) {
      return (state.userInfo = loginUser);
    },
    clearUserInfo(state) {
      return (state.userInfo = {
        username: '',
        nickname: '',
      });
    },
  },
});
