<template>
  <div>
    <p>{{ name }}</p>
    <button @click="updateName">이름 업데이트</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '라이언',
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
