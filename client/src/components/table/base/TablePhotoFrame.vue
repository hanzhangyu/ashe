<template>
  <div>
    <i class="el-icon-picture" @click="handleOpen"></i>
    <ElDialog :visible.sync="dialogVisible">
      <template v-for="(pic, index) in row[column.key]">
        <h3 :key="index">{{ pic.name }}</h3>
        <img width="100%" :src="pic.url" :alt="pic.name" :title="pic.name" />
      </template>
    </ElDialog>
  </div>
</template>

<script>
import tablePropMixinSuper from '../../mixin/tablePropMixinSuper';
import Schema from './TablePhotoFrame.schema';
export default {
  name: 'TablePhotoFrame',
  props: ['row', 'column'],
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleOpen() {
      this.dialogVisible = true;
    },
  },
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
