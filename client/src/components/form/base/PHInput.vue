<template>
  <ElInput :placeholder="field.placeholder" v-model="model[field.model]" />
</template>

<script>
export default {
  name: 'PHInput',
  inject: ['model'],
  props: ['field'],
};
</script>

<style scoped></style>
