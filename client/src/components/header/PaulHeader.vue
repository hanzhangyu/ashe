<template>
  <div class="header-paul">
    <ElDropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <ElDropdownMenu slot="dropdown">
        <ElDropdownItem>查看</ElDropdownItem>
        <ElDropdownItem>新增</ElDropdownItem>
        <ElDropdownItem>删除</ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
    <span>王小虎</span>
  </div>
</template>

<script>
export default {
  name: 'PaulAside',
};
</script>

<style scoped>
.header-paul {
  text-align: right;
  font-size: 12px;
  background-color: rgb(44, 42, 43);
  color: #fff;
  height: 100%;
}
</style>
