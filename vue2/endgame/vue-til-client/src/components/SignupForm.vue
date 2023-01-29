<template>
  <form @submit.prevent="handleRegister">
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
    <div>
      <label for="nickname">
        nickname:
        <input type="text" id="nickname" v-model="userInfo.nickname" />
      </label>
    </div>
    <button type="submit">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/apis';

export default {
  name: 'SignupForm',

  data() {
    return {
      userInfo: {
        username: '',
        password: '',
        nickname: '',
      },
      logMessage: '',
    };
  },

  mounted() {},

  methods: {
    async handleRegister() {
      const { status, data } = await registerUser(this.userInfo);
      if (status === 200)
        this.logMessage = `${data.username} 으로 가입되었습니다.`;
      return this.initForm();
    },
    initForm() {
      this.userInfo = {
        username: '',
        password: '',
        nickname: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
