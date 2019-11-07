<template>
  <ElForm :model="model" :rules="rules">
    <FormItem
      v-for="field in schema.fields"
      :key="field.model"
      :field="field"
    />
  </ElForm>
</template>

<script>
import FormItem from './FormItem';
export default {
  name: 'FormGenerator',
  components: { FormItem },
  provide() {
    return {
      model: this.model,
    };
  },
  // props: {
  //   schema: Object,
  //   model: Object,
  // },
  data() {
    return {
      model: {
        name: '12322',
        password: '12322',
        picture: [
          {
            url: 'https://www.w3schools.com/w3css/img_lights.jpg',
            name: '图片1',
          },
        ],
        type: 'A',
        price: 1,
      },
      schema: {
        type: 'form',
        fields: [
          {
            type: 'PHInput',
            label: '产品名称',
            model: 'name',
            rule: [
              { required: true, message: '请输入产品名称', trigger: 'change' },
            ],
          },
          {
            type: 'PHPassword',
            label: '密码',
            model: 'password',
            rule: [
              { required: true, message: '请输入密码', trigger: 'change' },
              {
                min: 6,
                max: 10,
                message: '确保密码在6到10个字符之间',
                trigger: 'change',
              },
            ],
          },
          {
            type: 'PHUpload',
            label: '图片',
            model: 'picture',
            action: 'https://jsonplaceholder.typicode.com/posts/',
            accept: '.png,.jpg',
            default: [
              {
                url:
                  'blob:http://localhost:1234/23229c78-6726-4360-a5ee-658fa979a090',
                name: '图片1',
              },
            ],
            rule: [
              { required: true, message: '请上传产品图片', trigger: 'change' },
            ],
          },
          {
            type: 'PHSelect',
            label: '类型',
            model: 'type',
            required: true,
            default: 'A',
            values: ['A', 'B', 'C', 'D'],
            rule: [
              { required: true, message: '请选择产品类型', trigger: 'change' },
            ],
          },
          {
            type: 'PHNumberInput',
            label: '价格',
            model: 'price',
            default: 1,
            condition: {
              or: [['password', '==', '123456'], ['name', '==', '123']],
              and: [['type', '==', 'A']],
            },
          },
          {
            type: 'PHSubmit',
            action: 'product/create',
          },
        ],
      },
    };
  },

  computed: {
    rules() {
      return this.schema.fields.reduce((rules, field) => {
        rules[field.model] = field.rule;
        return rules;
      }, {});
    },
  },
};
</script>

<style scoped></style>
