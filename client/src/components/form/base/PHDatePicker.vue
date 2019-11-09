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
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHDatePicker.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
};
</script>

<style scoped></style>
