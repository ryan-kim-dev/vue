<template>
  <div>
    <h1>회원가입 페이지</h1>
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
  name: 'SignupPage',
  components: {
    SignupForm,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
