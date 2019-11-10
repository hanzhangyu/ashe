<template>
  <div>
    <div v-for="item in model[field.model]">
      {{ item.name }}
      <ElButton type="primary" icon="el-icon-edit" circle></ElButton>
      <ElButton type="danger" icon="el-icon-delete" circle></ElButton>
    </div>
  </div>
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHList.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
  data() {
    return {
      loadingConfirm: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
