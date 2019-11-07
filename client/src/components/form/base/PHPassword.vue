<template>
  <ElInput type="password" v-model="model[field.model]" />
</template>

<script>
export default {
  name: 'PHPassword',
  inject: ['model'],
  props: ['field'],
};
</script>

<style scoped></style>
