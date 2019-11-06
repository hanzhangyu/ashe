<template>
  <div id="app">
    {{ hello }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hello: 'world',
    };
  },
  async mounted() {
    const data = await fetch(
      'http://localhost:3000/ashe/app/product/create',
    ).then(res => res.json());
    console.log(data);
  },
};
</script>
