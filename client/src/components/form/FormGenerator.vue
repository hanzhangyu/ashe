<template>
  <ElForm :model="model" :rules="rules" :inline="schema.config.inline">
    <FormItem
      v-for="field in schema.fields"
      :key="field.model"
      :field="field"
    />
  </ElForm>
</template>

<script>
import FormItem from './FormItem';
export default {
  name: 'FormGenerator',
  components: { FormItem },
  provide() {
    return {
      model: this.model,
    };
  },
  props: {
    schema: Object,
    model: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
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
