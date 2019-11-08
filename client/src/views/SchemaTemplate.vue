<template>
  <div>
    <section v-for="(schema, index) in schemas">
      <component
        :is="SCHEMA_TYPE_MAP[schema.type]"
        :schema="schema"
        :model="models[index]"
      ></component>
    </section>
  </div>
</template>

<script>
import FormGenerator from '../components/form/FormGenerator';
import TableGenerator from '../components/table/TableGenerator';

export default {
  name: 'SchemaTemplate',
  components: { FormGenerator, TableGenerator },
  data() {
    this.SCHEMA_TYPE_MAP = {
      form: 'FormGenerator',
      table: 'TableGenerator',
    };
    return {
      routeChanging: false,
      models: [],
    };
  },
  watch: {
    async $route({ path }) {
      this.routeChanging = true;
      const prevSchema = this.$store.state.schema.views[this.$route.path] || [];
      if (prevSchema.length === 0) {
        this.getSchema(path);
        this.routeChanging = false;
        return;
      }
      this.models = await this.$store.dispatch('schema/hidePageSchema', {
        schemas: prevSchema,
        path,
      });
      await this.$store.dispatch('schema/recoverPageSchema', path);
      this.routeChanging = false;
    },
  },
  computed: {
    schemas() {
      if (this.routeChanging) return [];
      return this.$store.state.schema.views[this.$route.path] || [];
    },
  },
  async mounted() {
    this.getSchema(this.$route.path);
  },
  methods: {
    async getSchema(path) {
      console.log('start get schema');
      const data = await this.$store.dispatch('schema/getPageSchema', path);
      this.models = data.models;
      await this.$store.dispatch('schema/setPageSchema', data);
    },
  },
  updated() {
    console.log('updated');
  },
};
</script>
