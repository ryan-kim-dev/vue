<template>
  <form @submit.prevent="handleRegister">
    <div>
      <label for="username">
        id:
        <input type="text" id="username" v-model="userInfo.username" />
      </label>
      <p v-show="!isUsernameValid">이메일 형식이 올바르지 않습니다.</p>
    </div>
    <div>
      <label for="password">
        pw:
        <input type="password" id="password" v-model="userInfo.password" />
      </label>
      <p v-show="!isPasswordValid">
        비밀번호는 8자 이상, 영문 소문자와 숫자의 조합이어야 합니다.
      </p>
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
import { validateEmail, validatePassword } from '../utils';

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

  computed: {
    isUsernameValid() {
      return validateEmail(this.userInfo.username);
    },
    isPasswordValid() {
      return validatePassword(this.userInfo.password);
    },
  },

  methods: {
    async handleRegister() {
      try {
        const { status, data } = await registerUser(this.userInfo);
        if (status === 200)
          this.logMessage = `${data.username} 으로 가입되었습니다.`;
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
        nickname: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
