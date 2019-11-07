<template>
  <ElFormItem v-if="visible" :label="field.label" :prop="field.model">
    <component :is="field.type" :field="field"></component>
  </ElFormItem>
</template>

<script>
import baseComponent from './base';
import conditionMixin from '../mixin/conditionMixin';
export default {
  name: 'FormItem',
  components: baseComponent,
  mixins: [conditionMixin],
  inject: ['model'],
  props: ['field'],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.visible);
  },
};
</script>

<style scoped></style>
