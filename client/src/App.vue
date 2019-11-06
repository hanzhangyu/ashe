<template>
  <div id="app">
    {{ hello }}
    <section v-for="schema in schemas">
      <component
        :is="SCHEMA_TYPE_MAP[schema.type]"
        :schema="schema"
      ></component>
    </section>
    <!--    <FormGenerator :schema=""></FormGenerator>-->
  </div>
</template>

<script>
import FormGenerator from './components/FormGenerator.vue';

export default {
  name: 'App',
  components: { FormGenerator },
  data() {
    this.SCHEMA_TYPE_MAP = {
      form: 'FormGenerator',
      table: 'TableGenerator',
    };
    return {
      hello: 'world',
      schemas: [],
    };
  },
  async mounted() {
    const data = await fetch(
      'http://localhost:3000/ashe/app/product/create',
    ).then(res => res.json());
    console.log(data);
    this.schemas = data;
    this.process();
  },
  methods: {
    // TODO refactor and move to use case or entity
    process() {
      const processor = this.processSchemas();
      this.schemas.forEach(schema => processor[schema.type](schema));
    },
    processSchemas() {
      return {
        form(schema) {
          // 提取 model
          // 提取 rule
        },
        table() {},
      };
    },
  },
};
</script>
