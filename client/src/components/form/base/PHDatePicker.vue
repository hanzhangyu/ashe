<template>
  <ElDatePicker
    v-model="model[field.model]"
    align="right"
    type="date"
    placeholder="选择日期"
    value-format="timestamp"
  >
  </ElDatePicker>
</template>

<script>
export default {
  name: 'PHDatePicker',
  inject: ['model'],
  props: ['field'],
};
</script>

<style scoped></style>
