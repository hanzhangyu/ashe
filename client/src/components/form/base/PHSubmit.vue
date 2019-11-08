<template>
  <div>
    <ElButton type="primary" :loading="loadingConfirm" @click="onSubmit">{{
      field.labelConfirm || '立即创建'
    }}</ElButton>

    <!--  考虑分离两个按钮  -->
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
  data() {
    return {
      loadingConfirm: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.loadingConfirm = true;
        console.log(
          `dispatch ${this.field.action} to submit: ${JSON.stringify(
            this.model,
          )}`,
        );
        await this.$store.dispatch(this.field.action, this.model);
        this.loadingConfirm = false;

        const { submitSuccessLink } = this.field;
        if (submitSuccessLink) {
          await this.$router.push(submitSuccessLink);
        }
      } catch (err) {
        console.error(err);
        this.loadingConfirm = false;
      }
    },
  },
};
</script>

<style scoped></style>
