<template>
  <ElForm
    :model="model"
    :rules="rules"
    :inline="schema.inline"
    :label-width="schema.labelWidth || '100px'"
  >
    <FormItem
      v-for="field in schema.fields"
      :key="field.model"
      :field="field"
    />
  </ElForm>
</template>

<script>
import FormItem from './FormItem';
import generatorPropMixinSuper from '../mixin/generatorPropMixinSuper';
import Schema from './FormGenerator.schema';
export default {
  ...Schema,
  mixins: [generatorPropMixinSuper(Schema)],

  components: { FormItem },
  provide() {
    return {
      model: this.model,
    };
  },
  computed: {
    rules() {
      return this.schema.fields.reduce((rules, field) => {
        rules[field.model] = field.rule;
        return rules;
      }, {});
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
