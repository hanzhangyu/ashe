<template>
  <div>
    <ElButton type="primary" @click="onSubmit">立即创建</ElButton>
    <ElButton>返回</ElButton>
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
