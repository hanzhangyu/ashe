<template>
  <div class="header-paul">
    <span>{{ pageName }}</span>
  </div>
</template>

<script>
export default {
  name: 'PaulAside',
  computed: {
    pageName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.header-paul {
  text-align: center;
  font-size: 18px;
  background-color: rgb(44, 42, 43);
  color: #fff;
  line-height: 60px;
}
</style>
