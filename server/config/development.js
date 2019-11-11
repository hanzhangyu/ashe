// const createSchema = [
//   {
//     type: 'form',
//     fields: [
//       {
//         type: 'PHInput',
//         label: '模块名',
//         model: 'name',
//         default: '新模块',
//       },
//       {
//         type: 'PHSelect',
//         label: '模块类型',
//         model: 'type',
//         default: 'form',
//         linkEdit: '/admin/create/schema/:schemaId/field/${index}',
//         values: ['form', 'table'],
//       },
//       {
//         type: 'PHList',
//         label: 'column 列表',
//         model: 'columns',
//         linkEdit: '/admin/create/schema/:schemaId/column/${index}',
//         condition: { and: [['type', '==', 'table']] },
//       },
//       {
//         type: 'PHList',
//         label: 'field 列表',
//         model: 'fields',
//         condition: { and: [['type', '==', 'form']] },
//       },
//       {
//         model: 'inline',
//         label: 'inline',
//         condition: { and: [['type', '==', 'form']] },
//         type: 'PHSwitch',
//       },
//       // {
//       //   model: 'syncToStore',
//       //   label: 'syncToStore',
//       //   condition: { and: [['type', '==', 'form']] },
//       //   type: 'PHSwitch',
//       // },
//       {
//         model: 'labelWidth',
//         label: 'labelWidth',
//         placeholder: '120px',
//         condition: { and: [['type', '==', 'form']] },
//         type: 'PHInput',
//       },
//       {
//         model: 'pagination',
//         label: 'pagination',
//         condition: { and: [['type', '==', 'table']] },
//         type: 'PHSwitch',
//       },
//       {
//         type: 'PHButton',
//         action: 'schema/addSchema',
//         labelBtn: '确认新增该模块',
//       },
//       {
//         type: 'PHLink',
//         link: '/admin/create',
//         labelLink: '取消并返回新建页面',
//       },
//     ],
//   },
// ];

module.exports = {
  host: '0.0.0.0',
  port: '3000',

  page: {
    skeleton: {
      header: 'HanHeader',
      aside: 'PaulAside',
      main: 'PaulMain',
      footer: 'PaulFooter',
    },
    // views: {
    //   '/app/product': [
    //     {
    //       type: 'form',
    //       fields: [
    //         {
    //           type: 'PHDatePicker',
    //           label: '开始时间',
    //           model: 'start_ts',
    //         },
    //         {
    //           type: 'PHDatePicker',
    //           label: '结束时间',
    //           model: 'end_ts',
    //         },
    //         {
    //           type: 'PHInput',
    //           label: '搜索',
    //           model: 'query',
    //         },
    //         {
    //           type: 'PHSubmit',
    //           action: 'product/getList',
    //           showCancel: false,
    //           labelConfirm: '搜索',
    //         },
    //         {
    //           type: 'PHLink',
    //           link: '/product/create',
    //           labelLink: '创建产品',
    //         },
    //       ],
    //       inline: true,
    //       // syncToStore: true,
    //       modelSource: 'product/form',
    //       modelSourceAction: 'product/syncForm',
    //     },
    //     {
    //       type: 'table',
    //       pagination: true,
    //       dataSourceAction: 'product/getList',
    //       dataSource: 'product/table',
    //       timerUpdaterTimeout: 10000,
    //       timerUpdaterAction: 'product/updateCountdown',
    //       columns: [
    //         { label: '产品编号', key: 'id', tooltip: true },
    //         { label: '名称', key: 'name', tooltip: true },
    //         { label: '类型', key: 'type', tooltip: true },
    //         { label: '价格', key: 'price', tooltip: true },
    //         { label: '照片集', key: 'picture', component: 'TablePhotoFrame' },
    //         { label: '备注', key: 'desc', tooltip: true },
    //         { label: '倒计时', key: 'countdown' },
    //         {
    //           label: '操作',
    //           key: 'operation',
    //           component: 'TableOperation',
    //           deleteAction: 'product/delete',
    //           updateAction: 'product/openUpdater',
    //         },
    //       ],
    //     },
    //   ],
    //   '/app/product/create': [
    //     {
    //       type: 'form',
    //       fields: [
    //         {
    //           type: 'PHInput',
    //           label: '产品名称',
    //           model: 'name',
    //           default: '123',
    //           rule: [
    //             {
    //               required: true,
    //               message: '请输入产品名称',
    //               trigger: 'change',
    //             },
    //             {
    //               min: 6,
    //               max: 10,
    //               message: '确保名称在6到10个字符之间',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHUpload',
    //           label: '图集',
    //           model: 'picture',
    //           action: 'https://jsonplaceholder.typicode.com/posts/',
    //           accept: '.png,.jpg',
    //           default: [],
    //           rule: [
    //             {
    //               required: true,
    //               message: '请上传产品图片',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHSelect',
    //           label: '类型',
    //           model: 'type',
    //           default: 'A',
    //           values: ['A', 'B', 'C', 'D'],
    //           rule: [
    //             {
    //               required: true,
    //               message: '请选择产品类型',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHDatePicker',
    //           label: '下架时间',
    //           model: 'delist',
    //         },
    //         {
    //           type: 'PHInput',
    //           label: '备注',
    //           model: 'desc',
    //         },
    //         {
    //           type: 'PHNumberInput',
    //           label: '价格',
    //           model: 'price',
    //           tips:
    //             '（只有密码为 123456，或者 名字为 123，并且类型为 A 时才可选择）',
    //           default: 1,
    //           min: 0,
    //           condition: {
    //             or: [['password', '==', '123456'], ['name', '==', '123']],
    //             and: [['type', '==', 'A']],
    //           },
    //         },
    //         {
    //           type: 'PHSubmit',
    //           action: 'product/create',
    //           submitSuccessLink: '/product',
    //           // submitSuccessAction: '', 不需要，这个 action 可由上一个 action 发起
    //         },
    //         {
    //           type: 'PHLink',
    //           link: '/product',
    //           labelLink: '返回列表',
    //         },
    //       ],
    //     },
    //   ],
    //   // region refactoring
    //   '/app/admin/create': [
    //     {
    //       type: 'form',
    //       fields: [
    //         {
    //           type: 'PHSelect',
    //           label: '请选择框架',
    //           model: 'framework',
    //           default: 'vuex',
    //           values: ['vuex', 'redux', 'mobx'],
    //         },
    //         {
    //           type: 'PHInput',
    //           label: 'URL',
    //           model: 'path',
    //           default: '/example',
    //           rule: [
    //             {
    //               required: true,
    //               message: '请输入 URL',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHSelect',
    //           label: '请选择业务模块',
    //           model: 'domain',
    //           default: 'product',
    //           values: ['product', 'order'],
    //         },
    //         {
    //           type: 'PHList',
    //           action: 'schema/addSchema',
    //           label: '模块列表',
    //           model: 'schemas',
    //           default: [
    //             {
    //               name: '产品列表页',
    //               type: 'table',
    //               pagination: true,
    //               dataSourceAction: 'product/getList',
    //               dataSource: 'product/table',
    //               timerUpdaterTimeout: 10000,
    //               timerUpdaterAction: 'product/updateCountdown',
    //               columns: [
    //                 { label: '产品编号', key: 'id', tooltip: true },
    //                 { label: '名称', key: 'name', tooltip: true },
    //                 { label: '类型', key: 'type', tooltip: true },
    //                 { label: '价格', key: 'price', tooltip: true },
    //                 {
    //                   label: '照片集',
    //                   key: 'picture',
    //                   component: 'TablePhotoFrame',
    //                 },
    //                 { label: '备注', key: 'desc', tooltip: true },
    //                 { label: '倒计时', key: 'countdown' },
    //                 {
    //                   label: '操作',
    //                   key: 'operation',
    //                   component: 'TableOperation',
    //                   deleteAction: 'product/delete',
    //                   updateAction: 'product/openUpdater',
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHLink',
    //           link: '/admin/create/schema',
    //           labelLink: '新增模块',
    //         },
    //         {
    //           type: 'PHSubmit',
    //           action: 'admin/createPage',
    //           labelConfirm: '创建页面',
    //         },
    //       ],
    //       labelWidth: '120px',
    //       // syncToStore: true,
    //     },
    //   ],
    //   '/app/admin/create/schema/': createSchema,
    //   '/app/admin/create/schema/:id': createSchema,
    //   // endregion
    //
    //   '/app/admin/page': [
    //     {
    //       type: 'form',
    //       fields: [
    //         {
    //           type: 'PHInput',
    //           label: '页面名称',
    //           model: 'name',
    //           rule: [
    //             {
    //               required: true,
    //               message: '请输入页面名称',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHSelect',
    //           label: '适用客户端',
    //           model: 'presenter',
    //           default: 'ashe-client',
    //           values: ['ashe-client', 'ashe-tv', 'ashe-mobile'],
    //         },
    //         {
    //           type: 'PHSelect',
    //           label: '框架',
    //           model: 'framework',
    //           default: 'vuex',
    //           values: ['vuex', 'redux', 'mobx'],
    //         },
    //         {
    //           type: 'PHInput',
    //           label: 'URL',
    //           model: 'path',
    //           default: '/example',
    //           rule: [
    //             {
    //               required: true,
    //               message: '请输入 URL',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHAsyncMultiSelect',
    //           label: '模块列表',
    //           model: 'modules',
    //           dataSourceAction: 'adminModule/searchOption',
    //           default: [],
    //         },
    //         {
    //           type: 'PHSubmit',
    //           action: 'admin/createPage',
    //           labelConfirm: '创建页面',
    //         },
    //       ],
    //       labelWidth: '120px',
    //       // syncToStore: true,
    //     },
    //     {
    //       type: 'table',
    //       pagination: true,
    //       dataSourceAction: 'adminPage/getList',
    //       dataSource: 'adminPage/table',
    //       columns: [
    //         { label: 'ID', key: 'id', tooltip: true },
    //         { label: 'URL', key: 'url', tooltip: true },
    //         { label: '名称', key: 'name', tooltip: true },
    //         { label: '适用客户端', key: 'presenter', tooltip: true },
    //         { label: '框架', key: 'framework', tooltip: true },
    //         {
    //           label: '模块列表',
    //           key: 'modules',
    //           component: 'TableLinkListPopover',
    //           title: '所有模块（点击跳转）',
    //         },
    //         {
    //           label: '操作',
    //           key: 'operation',
    //           component: 'TableOperation',
    //           deleteAction: 'adminPage/delete',
    //           linkEdit: '/admin/page/${id}',
    //         },
    //       ],
    //     },
    //   ],
    //   '/app/admin/page/:id': [
    //     {
    //       type: 'form',
    //       fields: [
    //         {
    //           type: 'PHInput',
    //           label: '页面名称',
    //           model: 'name',
    //           rule: [
    //             {
    //               required: true,
    //               message: '请输入页面名称',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHSelect',
    //           label: '适用客户端',
    //           model: 'presenter',
    //           default: 'ashe-client',
    //           values: ['ashe-client', 'ashe-tv', 'ashe-mobile'],
    //         },
    //         {
    //           type: 'PHSelect',
    //           label: '框架',
    //           model: 'framework',
    //           default: 'vuex',
    //           values: ['vuex', 'redux', 'mobx'],
    //         },
    //         {
    //           type: 'PHInput',
    //           label: 'URL',
    //           model: 'path',
    //           default: '/example',
    //           rule: [
    //             {
    //               required: true,
    //               message: '请输入 URL',
    //               trigger: 'change',
    //             },
    //           ],
    //         },
    //         {
    //           type: 'PHAsyncMultiSelect',
    //           label: '模块列表',
    //           model: 'modules',
    //           dataSourceAction: 'adminModule/searchOption',
    //           default: [],
    //         },
    //         {
    //           type: 'PHSubmit',
    //           action: 'admin/editPage',
    //           labelConfirm: '修改页面',
    //         },
    //         {
    //           type: 'PHLink',
    //           link: '/admin/page',
    //           labelLink: '返回页面列表页',
    //         },
    //       ],
    //       labelWidth: '120px',
    //       // syncToStore: true,
    //       modelSource: 'adminPage/form',
    //       modelSourceAction: 'adminPage/syncForm',
    //     },
    //   ],
    //   '/app/admin/module': [],
    //   '/app/admin/field': [],
    //   '/app/admin/column': [],
    // },
  },
};
