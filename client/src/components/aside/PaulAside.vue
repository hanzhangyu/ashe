<template>
  <ElAside width="200px" style="background-color: rgb(238, 241, 246)">
    <ElMenu :default-openeds="['1', '3']" router>
      <ElSubmenu index="1">
        <template slot="title"
          ><i class="el-icon-message"></i>产品管理</template
        >
        <ElMenuItem index="/product">产品列表</ElMenuItem>
        <ElMenuItem index="/product/create">新建产品</ElMenuItem>
      </ElSubmenu>
      <ElSubmenu index="2">
        <template slot="title"
          ><i class="el-icon-s-order"></i>订单管理</template
        >
        <ElMenuItem index="/order">订单列表(去创建吧)</ElMenuItem>
        <ElMenuItem index="/order/create">新建订单(去创建吧)</ElMenuItem>
      </ElSubmenu>
      <ElSubmenu index="3">
        <template slot="title"
          ><i class="el-icon-s-tools"></i>系统管理</template
        >
        <ElMenuItem index="/admin/page">页面管理</ElMenuItem>
        <ElMenuItem index="/admin/module">模块管理</ElMenuItem>
        <ElMenuItem index="/admin/field">表单域管理</ElMenuItem>
        <ElMenuItem index="/admin/column">表格管理</ElMenuItem>
        <ElMenuItem index="/admin/route">路由管理 (TODO,参数)</ElMenuItem>
      </ElSubmenu>
    </ElMenu>
  </ElAside>
</template>

<script>
export default {
  name: 'PaulAside',
};
</script>

<style scoped></style>
