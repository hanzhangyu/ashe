<template>
  <ElSelect
    v-model="model[field.model]"
    :placeholder="field.placeholder"
    :remote-method="remoteMethod"
    :loading="loading"
    :multiple="field.multiple"
    :filterable="field.filterable"
    remote
  >
    <ElOption
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    ></ElOption>
  </ElSelect>
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHButton.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
  data() {
    return {
      loading: false,
      options: [],
    };
  },
  methods: {
    async remoteMethod(query) {
      this.loading = true;
      this.options = (await this.$store.dispatch(
        this.field.dataSourceAction,
        query,
      )).list; // 从 store 获取数据也未尝不可
      this.loading = false;
    },
  },
  mounted() {
    this.remoteMethod();
  },
};
</script>

<style scoped></style>
