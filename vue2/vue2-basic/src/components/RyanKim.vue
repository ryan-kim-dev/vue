<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button @click="updateName">이름 업데이트</button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'title props의 초기값',
    },
  },

  data() {
    return {
      name: '라이언',
      // 만약 props에 name이 있다면 data의 name을 사용하지 말아야 한다.
      // avoid mutating a prop directly ...생략
    };
  },

  methods: {
    updateName() {
      this.name = '라이언 이름 업데이트';
    },
  },
};
</script>
<style></style>
