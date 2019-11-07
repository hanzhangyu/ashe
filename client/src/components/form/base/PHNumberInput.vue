<template>
  <ElInputNumber
    :placeholder="field.placeholder"
    controls-position="right"
    v-model="model[field.model]"
  />
</template>

<script>
export default {
  name: 'PHNumberInput',
  inject: ['model'],
  props: ['field'],
};
</script>

<style scoped></style>
