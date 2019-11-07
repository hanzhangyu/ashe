<template>
  <ElAside width="200px" style="background-color: rgb(238, 241, 246)">
    <ElMenu :default-openeds="['1', '3']">
      <ElSubmenu index="1">
        <template slot="title"
          ><i class="el-icon-message"></i>导航一</template
        >
        <ElMenuItemGroup>
          <template slot="title"
            >分组一</template
          >
          <ElMenuItem index="1-1">选项1</ElMenuItem>
          <ElMenuItem index="1-2">选项2</ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="分组2">
          <ElMenuItem index="1-3">选项3</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubmenu index="1-4">
          <template slot="title"
            >选项4</template
          >
          <ElMenuItem index="1-4-1">选项4-1</ElMenuItem>
        </ElSubmenu>
      </ElSubmenu>
      <ElSubmenu index="2">
        <template slot="title"
          ><i class="el-icon-menu"></i>导航二</template
        >
        <ElMenuItemGroup>
          <template slot="title"
            >分组一</template
          >
          <ElMenuItem index="2-1">选项1</ElMenuItem>
          <ElMenuItem index="2-2">选项2</ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="分组2">
          <ElMenuItem index="2-3">选项3</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubmenu index="2-4">
          <template slot="title"
            >选项4</template
          >
          <ElMenuItem index="2-4-1">选项4-1</ElMenuItem>
        </ElSubmenu>
      </ElSubmenu>
      <ElSubmenu index="3">
        <template slot="title"
          ><i class="el-icon-setting"></i>导航三</template
        >
        <ElMenuItemGroup>
          <template slot="title"
            >分组一</template
          >
          <ElMenuItem index="3-1">选项1</ElMenuItem>
          <ElMenuItem index="3-2">选项2</ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="分组2">
          <ElMenuItem index="3-3">选项3</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubmenu index="3-4">
          <template slot="title"
            >选项4</template
          >
          <ElMenuItem index="3-4-1">选项4-1</ElMenuItem>
        </ElSubmenu>
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
