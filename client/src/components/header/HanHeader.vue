<template>
  <div class="header-han">
    <span>{{pageName}} - {{ pageUrl }}</span>
  </div>
</template>

<script>
export default {
  name: 'PaulAside',
  computed: {
    pageName() {
      return this.$route.name;
    },
    pageUrl() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.header-han {
  text-align: center;
  font-size: 18px;
  background-color: rgb(44, 42, 43);
  color: #fff;
  line-height: 60px;
}
</style>
