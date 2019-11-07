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
      models: [],
    };
  },
  computed: {
    schemas() {
      const schemas = this.$store.state.schema.views[this.$route.path];
      return schemas || [];
    },
  },
  async mounted() {
    this.models = await this.$store.dispatch(
      'schema/getPageSchema',
      this.$route.path,
    );
  },
};
</script>
