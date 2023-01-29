<template>
  <form @submit.prevent="handleLogin">
    <div>
      <label for="username">
        id:
        <input type="text" id="username" v-model="userInfo.username" />
      </label>
    </div>
    <div>
      <label for="password">
        pw:
        <input type="password" id="password" v-model="userInfo.password" />
      </label>
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '../apis';

export default {
  name: 'LoginForm',

  data() {
    return {
      userInfo: {
        username: '',
        password: '',
      },
      logMessage: '',
    };
  },

  mounted() {},

  methods: {
    async handleLogin() {
      try {
        const { data } = await loginUser(this.userInfo);
        this.logMessage = `${data.message}!! ${data.user.username} 님 환영합니다.`;
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.userInfo = {
        username: '',
        password: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
