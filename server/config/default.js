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
        },
      ],
      '/app/product/create': [
        {
          type: 'form',
          fields: [
            {
              type: 'Input',
              label: '产品名称',
              model: 'name',
              required: true,
              message: '请输入产品名称',
              trigger: 'change',
            },
            {
              type: 'Upload',
              label: '图片',
              model: 'picture',
              required: true,
              message: '请上传产品图片',
              trigger: 'change',
            },
            {
              type: 'Select',
              label: '类型',
              model: 'type',
              required: true,
              default: 'A',
              values: ['A', 'B', 'C', 'D'],
            },
            {
              type: 'NumberInput',
              label: '限购',
              model: 'id',
              required: true,
              message: '请输入产品名称',
              trigger: 'change',
              default: true,
              condition: [
                // mongodb operator like
                ['type', '$eq', 'A'],
              ],
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
