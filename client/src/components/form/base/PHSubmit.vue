<template>
  <div>
    <ElButton type="primary" :loading="loadingConfirm" @click="onSubmit">{{
      field.labelConfirm || PropsSchema.field.labelConfirm.default
    }}</ElButton>

    <!--  考虑分离两个按钮，手动写 FieldSchema.labelCancel.default 有点恶心啊  -->
    <ElButton v-if="field.showCancel">{{
      field.labelCancel || PropsSchema.field.labelCancel.default
    }}</ElButton>
  </div>
</template>

<script>
// 如果统一提交接口，那么 submit 可以只需要一个提交地址即可
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHSubmit.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
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
