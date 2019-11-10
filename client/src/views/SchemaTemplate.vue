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

const PERSIST_STATUS = {
  none: 0,
  some: 1,
  every: 2,
};

function persistStatusCheck(models) {
  let status = PERSIST_STATUS.none;
  models.forEach(model => model !== null && status++);
  if (status === models.length) status = PERSIST_STATUS.every;
  else if (status !== PERSIST_STATUS.none) status = PERSIST_STATUS.some;
  return status;
}

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
      await this.persistModels(prevPath);

      const currentSchemas = this.$store.state.schema.views[path] || [];
      // first enter the url, get schema from server
      if (currentSchemas.length === 0) {
        this.fetchSchema(path);
        this.pagePrepared = true;
        return;
      }

      // reenter, recover from store （这考虑到一个页面的多个表单可以选用不同的同步逻辑，代码有点多呀）
      await this.recoverModels(path, currentSchemas);

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
    await this.fetchSchema(this.$route.path);
    this.pagePrepared = true;
  },
  methods: {
    async fetchSchema(path) {
      console.log('start get schema');
      const data = await this.$store.dispatch('schema/fetchPageSchema', path);
      this.models = data.models;
      await this.$store.dispatch('schema/setPageSchema', data);
    },
    getPersistSchema(schema, index) {
      if (schema.type === 'form' && schema.syncToStore)
        return this.models[index];
      return null;
    },
    async persistModels(path) {
      const schemas = this.$store.state.schema.views[path];
      const persistModels = schemas.map(this.getPersistSchema);
      if (persistStatusCheck(persistModels) !== PERSIST_STATUS.none) {
        await this.$store.dispatch('schema/persistModels', {
          path,
          models: persistModels,
        });
      }
    },
    async recoverModels(path, schemas) {
      const currentPersistModels = schemas.map(this.getPersistSchema);
      const status = persistStatusCheck(currentPersistModels);
      switch (status) {
        case PERSIST_STATUS.every:
          this.models = await this.$store.dispatch(
            'schema/recoverModels',
            path,
          );
          break;
        case PERSIST_STATUS.none:
          this.models = await this.$store.dispatch(
            'schema/getModelFromSchema',
            schemas,
          );
          break;
        default:
          const defaultModels = await this.$store.dispatch(
            'schema/getModelFromSchema',
            schemas,
          );
          const recoverModels = await this.$store.dispatch(
            'schema/recoverModels',
            path,
          );

          // reuse recover
          recoverModels.forEach((model, index) => {
            const defaultModel = defaultModels[index];
            if (model === null && defaultModel !== null) {
              recoverModels[index] = defaultModel;
            }
          });
          this.models = recoverModels;
      }
    },
  },
  updated() {
    console.log('updated');
  },
};
</script>
