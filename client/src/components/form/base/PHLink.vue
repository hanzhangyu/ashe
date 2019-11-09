<template>
  <router-link :to="field.link" class="el-button el-button--primary">{{
    field.linkLabel
  }}</router-link>
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHLink.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
};
</script>

<style scoped></style>
