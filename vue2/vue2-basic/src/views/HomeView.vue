<template>
  <div>
    <h1>홈페이지</h1>
    <form action="">
      <InputField v-model="name" />
      <br />
      <button type="submit">Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from '../components/InputField.vue';

export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped>
/* scoped 속성을 넣어줘야 해당 파일에서만 css 적용됨 */
</style>
