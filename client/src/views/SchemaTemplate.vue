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
      pagePrepared: false,
      models: [],
    };
  },
  watch: {
    async $route({ path }, { path: prevPath }) {
      this.pagePrepared = false;

      // check the prev url`s model is persistent or not
      await this.persistModel(prevPath);

      // get current page schema
      await this.getSchema(path);

      this.pagePrepared = true;
    },
  },
  computed: {
    schemas() {
      if (!this.pagePrepared) return []; // disable schema when route changing
      return this.$store.state.schema.views[this.$route.path] || [];
    },
  },
  async mounted() {
    await this.getSchema(this.$route.path);
    this.pagePrepared = true;
  },
  methods: {
    async getSchema(path) {
      const schemas = this.$store.state.schema.views[path];

      if (schemas) {
        // reenter, recover from store
        this.generateModel({
          models: await this.$store.dispatch(
            'schema/getModelFromSchema',
            schemas,
          ),
          schemas,
        });
      } else {
        const data = await this.$store.dispatch('schema/fetchPageSchema', path);
        this.generateModel(data);
        await this.$store.dispatch('schema/setPageSchema', data);
      }
    },

    generateModel({ schemas, models: defaultModels }) {
      this.models = defaultModels.map((model, index) => {
        const schema = schemas[index];
        if (schema.type !== 'form') return null;
        if (!schema.modelSource) return model;
        return { ...this.$store.getters[schema.modelSource] } || model;
      });
    },

    persistModel(path) {
      const schemas = this.$store.state.schema.views[path];
      schemas.forEach((schema, index) => {
        if (!schema.modelSourceAction || schema.type !== 'form') return;
        this.$store.dispatch(schema.modelSourceAction, this.models[index]);
      });
    },
  },
  updated() {
    console.log('updated');
  },
};
</script>
