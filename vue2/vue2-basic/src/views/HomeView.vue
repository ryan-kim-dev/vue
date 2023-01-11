<template>
  <div>
    <h1>{{ name }}</h1>
    <RyanKim title="Home" />
  </div>
</template>

<script>
import RyanKim from '@/components/RyanKim.vue'; // @: src

export default {
  components: {
    RyanKim,
  },
  data() {
    return {
      name: 'hyeonho',
    };
  },
};
</script>

<style scoped>
/* scoped 속성을 넣어줘야 해당 파일에서만 css 적용됨 */
</style>
