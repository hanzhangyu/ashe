<template>
  <ElContainer>
    <PaulAside></PaulAside>

    <ElContainer>
      <!-- https://element.eleme.cn/#/zh-CN/component/container#container-bu-ju-rong-qi TODO 这里有个 bug，实际上是子组件名全等于 el-header 才会生效 -->
      <el-header>
        <PaulHeader></PaulHeader>
      </el-header>

      <ElMain>
        <RouterView />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script>
import Headers from './components/header';
import Asides from './components/aside';
export default {
  name: 'App',
  components: Object.assign({}, Headers, Asides),
  data() {
    return {
      hello: 'world',
    };
  },
  async mounted() {
    console.log(await this.$store.dispatch('schema/getSkeletonSchema'));
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
}
</style>
