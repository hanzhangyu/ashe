<template>
  <div>
    <ElTable :data="list" style="width: 100%">
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
            :data="row[column.key]"
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
      :total="1000"
    >
    </ElPagination>
  </div>
</template>

<script>
import baseComponent from './base';
export default {
  name: 'FormGenerator',
  components: baseComponent,
  // props: {
  //   schema: Object,
  //   model: Object,
  // },
  data() {
    return {
      list: [
        {
          id: '123',
          name: 'name122313123113123',
          type: 'AAA',
          price: 1.1,
          picture: [
            {
              url: 'https://www.w3schools.com/w3css/img_lights.jpg',
              name: '图片1',
            },
            {
              url: 'https://www.w3schools.com/w3css/img_forest.jpg',
              name: '图片2',
            },
          ],
          desc: '第一个产品',
        },
      ],
      schema: {
        type: 'table',
        pagination: true,
        columns: [
          { label: '产品编号', key: 'id', tooltip: true },
          { label: '名称', key: 'name', tooltip: true },
          { label: '类型', key: 'type', tooltip: true },
          { label: '价格', key: 'price', tooltip: true },
          { label: '照片集', key: 'picture', component: 'TablePhotoFrame' },
          { label: '备注', key: 'desc', tooltip: true },
          {
            label: '操作',
            key: 'operation',
            component: 'TableOperation',
            deleteAction: 'product/delete',
            updateAction: 'product/openUpdater',
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
