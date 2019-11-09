<template>
  <ElInputNumber
    :placeholder="field.placeholder"
    controls-position="right"
    v-model="model[field.model]"
    :min="field.min"
  />
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHNumberInput.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
};
</script>

<style scoped></style>
