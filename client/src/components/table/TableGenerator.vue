<template>
  <div>
    <ElTable :data="table.list" style="width: 100%">
      <ElTableColumn
        v-for="column in schema.columns"
        :label="column.label"
        :prop="column.key"
        :show-overflow-tooltip="column.tooltip"
      >
        <template slot-scope="{ row }">
          <component
            v-if="column.component"
            :is="column.component"
            :row="row"
            :column="column"
          ></component>
          <template v-else>
            {{ row[column.key] }}
          </template>
        </template>
      </ElTableColumn>
    </ElTable>
    <ElPagination
      v-if="schema.pagination"
      background
      layout="prev, pager, next"
      :current-page="table.currentPage"
      :total="table.total"
      :page-size="table.pageSize"
      @current-change="handlePageChange"
    >
    </ElPagination>
  </div>
</template>

<script>
import baseComponent from './base';
import generatorPropMixinSuper from '../mixin/generatorPropMixinSuper';
import Schema from './TableGenerator.schema';
export default {
  ...Schema,
  mixins: [generatorPropMixinSuper(Schema)],

  components: baseComponent,
  data() {
    this.timer = null;
    return {
      loadingTable: false,
    };
  },
  computed: {
    table() {
      return this.$store.getters[this.schema.dataSource];
    },
  },
  async mounted() {
    if (this.schema.dataSourceAction) {
      await this.$store.dispatch(this.schema.dataSourceAction);
    }
    this.timer && clearTimeout(this.timer);
    this.timer = this.timerRun();
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    timerRun() {
      const { timerUpdaterTimeout, timerUpdaterAction } = this.schema;
      if (!timerUpdaterTimeout) return null;
      return setTimeout(async () => {
        await this.$store.dispatch(timerUpdaterAction);
        this.timerRun();
      }, timerUpdaterTimeout);
    },
    async handlePageChange(page) {
      this.loadingTable = true;
      await this.$store.dispatch(this.schema.dataSourceAction, {
        currentPage: page,
      });
      this.loadingTable = false;
    },
  },
};
</script>

<style scoped></style>
