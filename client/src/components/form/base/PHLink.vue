<template>
  <router-link :to="field.link" class="el-button el-button--primary">{{ field.linkLabel }}</router-link>
</template>

<script>
export default {
  name: 'PHLink',
  props: ['field'],
};
</script>

<style scoped></style>
