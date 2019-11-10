<template>
  <ElButton :loading="loadingConfirm" @click="handleClick">{{
    field.labelBtn || PropsSchema.field.labelBtn.default
  }}</ElButton>
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHButton.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
  data() {
    return {
      loadingConfirm: false,
    };
  },
  methods: {
    async handleClick() {
      // try {
      //   this.loadingConfirm = true;
      //   await this.$store.dispatch(this.field.action, this.model);
      //   this.loadingConfirm = false;
      //
      //   const { submitSuccessLink } = this.field;
      //   if (submitSuccessLink) {
      //     await this.$router.push(submitSuccessLink);
      //   }
      // } catch (err) {
      //   console.error(err);
      //   this.loadingConfirm = false;
      // }
    },
  },
};
</script>

<style scoped></style>
