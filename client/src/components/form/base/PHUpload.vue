<template>
  <div>
    <ElUpload
      :action="field.action"
      :accept="field.accept"
      list-type="picture-card"
      :file-list="defaultList"
      :on-success="handleSuccess"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-error="handleError"
      ><i class="el-icon-plus"></i
    ></ElUpload>
    <ElDialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </ElDialog>
  </div>
</template>

<script>
import formPropMixinSuper from '../../mixin/formPropMixinSuper';
import Schema from './PHUpload.schema';
export default {
  ...Schema,
  mixins: [formPropMixinSuper(Schema)],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      defaultList: this.model[this.field.model].map(({ url, name }) => ({
        url,
        name,
      })),
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log('success:', file);
      this.model[this.field.model].push({ url: file.url, name: file.name });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleError(err, file) {
      this.$message.error(`${file.name} ${err.message || '上传失败'}`);
    },
  },
};
</script>

<style scoped></style>
