<template>
  <header>
    <div class="logo">
      <router-link to="/"> TIL </router-link>
    </div>
    <div class="navigations">
      <template v-if="loginStatus">
        <span>{{ $store.state.userInfo.nickname }} 님 환영합니다!</span>
        <div @click="handleLogout">로그아웃</div>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link> |
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data() {
    return {};
  },

  mounted() {},

  computed: {
    loginStatus() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    handleLogout() {
      this.$store.commit('setUserInfo', {
        username: '',
        nickname: '',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
