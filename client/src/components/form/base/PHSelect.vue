<template>
  <ElSelect v-model="model[field.model]" :placeholder="field.placeholder">
    <ElOption v-for="item in field.values" :key="item" :value="item"></ElOption>
  </ElSelect>
</template>

<script>
export default {
  name: 'PHSelect',
  inject: ['model'],
  props: ['field'],
};
</script>

<style scoped></style>
