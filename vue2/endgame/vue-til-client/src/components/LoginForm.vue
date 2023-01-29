<template>
  <form @submit.prevent="handleLogin">
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
    <!-- v-bind:disabled 속성 단축평가로 조건식 적용 (이메일과 비밀번호 형식이 하나라도 일치하지 않으면 버튼 비활성화) -->
    <button type="submit" :disabled="!isUsernameValid || !isPasswordValid">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/apis';
import { validateEmail, validatePassword } from '@/utils';

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

  computed: {
    // 주의: vue 인스턴스 속성들이나 콜백에 화살표 함수를 사용하면 안된다!
    // computed, methods 등의 속성 내에서 선언하는 함수는 절대로 화살표 함수를 사용하면 안된다.
    // 참고: https://ddolcat.tistory.com/1670
    isUsernameValid() {
      return validateEmail(this.userInfo.username);
    },
    isPasswordValid() {
      return validatePassword(this.userInfo.password);
    },
  },

  methods: {
    async handleLogin() {
      try {
        const { data } = await loginUser(this.userInfo);
        // vuex mutation을 호출하여 로그인 요청의 응답 데이터 값으로 로그인한 유저의 정보를 state에 업데이트
        this.$store.commit('setUserInfo', data.user);
        // 뷰 라우터의 Programmic Navigation - 참고: https://router.vuejs.org/guide/essentials/navigation.html
        return this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data;
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
