<template>
  <ElSelect v-model="model[field.model]" :placeholder="field.placeholder">
    <ElOption v-for="item in field.values" :key="item" :value="item"></ElOption>
  </ElSelect>
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHSelect.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
};
</script>

<style scoped></style>
