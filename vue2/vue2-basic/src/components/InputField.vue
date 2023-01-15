<template>
  <label for="name">
    이름:
    <input
      type="text"
      id="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'VueInputField',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
