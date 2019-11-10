<template>
  <ElPopover
    placement="top-start"
    :title="column.title"
    width="200"
    trigger="hover"
  >
    <ElButton slot="reference">{{ row[column.key].length }} 个</ElButton>
    <div>
      <RouterLink
        style="display: block"
        v-for="item in row[column.key]"
        :to="item.link"
        >{{ item.name }}</RouterLink
      >
    </div>
  </ElPopover>
</template>

<script>
import tablePropMixinSuper from '../../mixin/tablePropMixinSuper';
import Schema from './TableLinkListPopover.schema';
export default {
  ...Schema,
  mixins: [tablePropMixinSuper(Schema)],
};
</script>

<style scoped>
.el-icon-picture {
  cursor: pointer;
  font-size: 32px;
}
.el-icon-picture:hover {
  color: #3a8ee6;
}
</style>
