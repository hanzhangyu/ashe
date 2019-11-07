<template>
  <div>
    <ElButton type="primary" @click="onSubmit">{{
      field.labelConfirm || '立即创建'
    }}</ElButton>
    <ElButton v-if="field.showCancel">{{
      field.labelCancel || '取消'
    }}</ElButton>
  </div>
</template>

<script>
export default {
  name: 'PHSubmit',
  inject: ['model'],
  props: ['field'],
  methods: {
    onSubmit() {
      console.log(
        `dispatch ${this.field.action} to submit: ${JSON.stringify(
          this.model,
        )}`,
      );
    },
  },
};
</script>

<style scoped></style>
