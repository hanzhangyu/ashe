module.exports = {
  host: '0.0.0.0',
  port: '3000',

  page: {
    skeleton: {
      header: 'PaulHeader',
      aside: 'PaulAside',
      main: 'PaulMain',
      footer: 'PaulFooter',
    },
    views: {
      '/app/product': [
        {
          type: 'form',
          fields: [
            {
              type: 'DatePicker',
              label: '开始时间',
              model: 'start_ts',
            },
            {
              type: 'DatePicker',
              label: '结束时间',
              model: 'end_ts',
            },
            {
              type: 'Input',
              label: '搜索',
              model: 'query',
            },
          ],
        },
        {
          type: 'table',
          pagination: true,
          columns: [
            { label: '产品编号', key: 'id', tooltip: true },
            { label: '名称', key: 'name', tooltip: true },
            { label: '类型', key: 'type', tooltip: true },
            { label: '价格', key: 'price', tooltip: true },
            { label: '照片集', key: 'picture', component: 'TablePhotoFrame' },
            { label: '备注', key: 'desc', tooltip: true },
            { label: '倒计时', key: 'delist' },
            {
              label: '操作',
              key: 'operation',
              component: 'TableOperation',
              deleteAction: 'product/delete',
              updateAction: 'product/openUpdater',
            },
          ],
        },
      ],
      '/app/product/create': [
        {
          type: 'form',
          fields: [
            {
              type: 'PHInput',
              label: '产品名称',
              model: 'name',
              rule: [
                {
                  required: true,
                  message: '请输入产品名称',
                  trigger: 'change',
                },
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
                {
                  required: true,
                  message: '请上传产品图片',
                  trigger: 'change',
                },
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
                {
                  required: true,
                  message: '请选择产品类型',
                  trigger: 'change',
                },
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
          config: {
            // todo
          },
        },
      ],
    },
  },
};
