<template>
  <div>
    <ElButton
      type="danger"
      icon="el-icon-delete"
      circle
      @click="handleDelete"
    />
  </div>
</template>

<script>
import tablePropMixinSuper from '../../mixin/tablePropMixinSuper';
import Schema from './TableOperation.schema';
export default {
  ...Schema,
  mixins: [tablePropMixinSuper(Schema)],
  methods: {
    handleDelete() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          console.log(`删除 action: `, this.column.deleteAction);
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
  },
};
</script>

<style scoped></style>
