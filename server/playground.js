/**
 * @file playground for feature (page creator)
 * @detail
 *  - form 与 table 这两个模板中的 type、column 和 fields 三个配置是预置的，不予许扩展
 *    - fields 中的所有选项也均为内置，因为万物的初始 page creator 依赖于 form schema
 *  - 所有的组件、domain (getter/action)、presenter、framework 均从项目中读取
 *
 *
 * TODO 发现一个问题，就是 page creator 依赖于 所有的 form 组件，不过也不是问题
 *    admin 是在 ashe-client 上设计的
 *    所以通过 ashe-client 去造出 ashe-tv、ashe-mobile 的时候的确需要定死 admin page 的schema （总不能自己修改自己的 schema 吧，超验骇客看多了不好）
 *    所以问题是： 得着重考虑一下 admin page schema 的抽象定义
 *
 * TODO required 的 rule
 *
 * @reservedSchema
 *  - form 中 一定包含 {type: 'form', fields: []}
 *  - table 中 一定包含 {type: 'table', columns: []}
 *  - form/table 组件 field/column 的 schema 结构为
 *    {
 *      form/table: {组件名: {组件 field 字段: 该字段 schema}},
 *      PHInput: {model: {type: String, required: true}}, // form 的 field 例子
 *      TableOperation: {deleteAction: {type: String, required: true}}, // table 的 column 例子
 *     }
 *  - from column 组件保留字段 type 用于标记哪个 form field 组件
 *  - table schema 组件保留字段 label 标记列的标题, key 标记列的数据字段, tooltip 标记列是否需要 tooltip（这个似乎可以去掉）
 */

// region presenter
// region presenters
const PresenterListSchema = ['ashe-client', 'ashe-tv', 'ashe-mobile'];
// endregion
// region template config schema
const FormConfigTemplateSchema = {
  inline: {
    type: Boolean,
  },
  labelWidth: {
    type: String,
  },
};
const TableConfigTemplateSchema = {
  pagination: {
    type: Boolean,
  },
};
// endregion
// region component schema (可以看到组件 prop 里面一定存在 field 或者 column 因为这是模板预置配置) （要素过多需要简化）
const ComponentTableOperationSchema = {
  // 为 table column 设置的一下特殊配置项
  name: 'TableOperation',
  propsSchema: {
    column: {
      deleteAction: {
        type: String,
        required: true,
      },
    },
  },
};
const ComponentTablePhotoFrameSchema = {
  name: 'TablePhotoFrame',
  propsSchema: {
    column: {},
  },
};
const ComponentPHInputSchema = {
  name: 'PHInput',
  propsSchema: {
    field: {
      model: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
      },
    },
  },
};
const ComponentPHButtonSchema = {
  name: 'PHButton',
  propsSchema: {
    field: {
      labelBtn: {
        type: String,
        default: '确定',
      },
    },
  },
};
// endregion
// region combine client schema (简化完之后就还不错)
// {form: {PHInput: {model: {type: String, required: true}}, PHButton: {...} }}
// {table: {TableOperation: {deleteAction: {type: String, required: true}}, TablePhotoFrame: {} }}
const ClientComponentSchema = {
  form: [ComponentPHInputSchema, ComponentPHButtonSchema].reduce(
    (schema, ComponentSchema) => {
      schema[ComponentSchema.name] = ComponentSchema.propsSchema.field;
      return schema;
    },
    {},
  ),
  table: [ComponentTableOperationSchema, ComponentTablePhotoFrameSchema].reduce(
    (schema, ComponentSchema) => {
      schema[ComponentSchema.name] = ComponentSchema.propsSchema.column;
      return schema;
    },
    {},
  ),
};
// endregion
// region combine presenter schema
const PresenterSchema = {
  'ashe-client': ClientComponentSchema,
  'ashe-tv': undefined,
  'ashe-mobile': undefined,
};
// endregion
// endregion

// region core
// region domain schema
const FrameworksListSchema = ['vuex', 'redux', 'mbox', 'dva'];

const VuexSchema = {
  product: {
    getter: {
      table: '为 table 格式化后的产品数据',
    },
    action: {
      getList: '获取所有产品数据',
      updateCountdown: '更新计时器',
      create: '创建产品',
    },
  },
  order: {
    getter: {
      table: '为 table 格式化后的订单数据',
    },
    action: {
      getList: '获取所有订单数据',
      create: '创建订单',
    },
  },
};

const ReduxSchema = {};
// endregion
// region combine core schema
const CoreSchema = {
  vuex: VuexSchema,
  redux: ReduxSchema,
};
// endregion
// endregion

// region create page schema form (page creator)
// region admin create page form schema, url: /admin/create
const AdminCreatePageSchema = {
  type: 'form',
  fields: [
    {
      type: 'PHSelect',
      label: '请选择表现层库',
      model: 'presenter',
      default: 'ashe-client', // emmmm，好像莫得卵用，这一个只是一个标记性的选项，告诉开发者，生成的这个 page schema 适用于该表现层
      values: PresenterListSchema,
    },
    {
      type: 'PHSelect',
      label: '请选择框架',
      model: 'framework',
      default: 'vuex',
      values: FrameworksListSchema,
    },
    {
      type: 'PHInput',
      label: 'URL',
      model: 'path',
      default: '/example',
      rule: [
        {
          required: true,
          message: '请输入 URL',
          trigger: 'change',
        },
        {
          validatorAction: 'admin/urlValidate', // TODO 在 rule 初始化时生成 validator
          message: '确保名称在6到10个字符之间',
          trigger: 'change',
        },
      ],
    },
    {
      type: 'PHList',
      label: '模块列表',
      // TODO 实现该组件
    },
    {
      type: 'PHButton',
      action: 'schema/openAddSchema',
      labelBtn: '新增模块',
    },
    {
      type: 'PHSubmit',
      action: 'schema/createPage',
      labelConfirm: '创建页面',
    },
  ],
};
// endregion
// region admin create schema form schema, url: /admin/create/schema
const AdminCreateSchemaSchema = {
  type: 'form',
  fields: [
    {
      type: 'PHInput',
      label: '模块名',
      model: 'name',
      default: '新模块',
    },
    {
      type: 'PHSelect',
      label: '模块类型',
      model: 'type',
      default: 'form',
      values: ['form', 'table'],
    },
    {
      type: 'PHList',
      label: 'column 列表',
      model: 'columns',
      condition: {
        and: [['type', '==', 'table']], // 我去，我实现的 condition DSL 还挺好用的
      },
      // TODO 实现该组件
    },
    {
      type: 'PHList',
      label: 'field 列表',
      model: 'fields',
      condition: {
        and: [['type', '==', 'form']], // 我去，我实现的 condition DSL 还挺好用的
      },
      // TODO 实现该组件
    },
    {
      type: 'PHButton',
      action: 'schema/addSchema',
      labelBtn: '确认新增该模块',
    },
    {
      type: 'PHLink',
      link: '/admin/create',
      labelLink: '取消并返回新建页面',
    },
    ...Object.keys(FormConfigTemplateSchema).map(configKey => {
      const configSchema = FormConfigTemplateSchema[configKey];
      const fieldSchema = {
        model: configKey,
        label: configKey,
        condition: {
          and: [['type', '==', 'form']],
        },
      };
      switch (configSchema.type) {
        case Boolean:
          fieldSchema.type = 'PHSwitch';
          break;
        case String:
          fieldSchema.type = 'PHInput';
          break;
      }

      return fieldSchema;
    }, []),
    ...Object.keys(TableConfigTemplateSchema).map(configKey => {
      const configSchema = TableConfigTemplateSchema[configKey];
      const fieldSchema = {
        model: configKey,
        label: configKey,
        condition: {
          and: [['type', '==', 'table']],
        },
      };
      switch (configSchema.type) {
        case Boolean:
          fieldSchema.type = 'PHSwitch';
          break;
        case String:
          fieldSchema.type = 'PHInput';
          break;
      }

      return fieldSchema;
    }, []),
  ],
};
// endregion
// region admin create field form schema, url: /admin/create/schema/field
const FormComponentNames = Object.keys(ClientComponentSchema.form);
const FormComponentFieldSchemas = Object.values(ClientComponentSchema.form);

const AdminCreateFieldSchema = {
  type: 'form',
  fields: [
    {
      type: 'PHSelect',
      label: 'type',
      tips: '选择表单项的组件',
      model: 'type',
      default: FormComponentNames[0],
      values: FormComponentNames,
    },
    ...FormComponentNames.map((compName, index) => {
      // 所有的组件
      const compSchema = FormComponentFieldSchemas[index];
      const compSchemaFieldEntries = Object.entries(compSchema);
      return compSchemaFieldEntries.map(([compFieldName, compFieldSchema]) => {
        // 所有组件的内部 field
        const fieldSchema = {
          label: compFieldName,
          model: compFieldName,
          condition: {
            and: [['type', '==', compName]], // 当 field type 为该组件是才出现该组件的配置项
          },
        };

        switch (compFieldSchema.type) {
          case Boolean:
            fieldSchema.type = 'PHSwitch';
            break;
          case String:
            fieldSchema.type = 'PHInput';
            break;
          case Array:
            fieldSchema.type = 'PHInput';
            fieldSchema.tips = '该数组请用逗号分隔';
        }

        return fieldSchema;
      });
    }).flat(),
  ],
};
// endregion
// region admin create column form schema, url: /admin/create/schema/column
const TableComponentNames = Object.keys(ClientComponentSchema.table);
const TableComponentFieldSchemas = Object.values(ClientComponentSchema.table);
const AdminCreateColumnSchema = {
  type: 'form',
  fields: [
    {
      type: 'PHInput',
      label: '列的名称',
      model: 'label',
      rule: [{ required: true, message: '请输入列名', trigger: 'change' }],
    },
    {
      type: 'PHInput',
      label: '列的数据字段',
      model: 'key',
      rule: [
        { required: true, message: '请输入列的数据字段', trigger: 'change' },
      ],
    },
    {
      type: 'PHSwitch',
      label: '列是否需要 tooltip',
      model: 'tooltip',
      default: true,
    },
    ...TableComponentNames.map((compName, index) => {
      // 所有的组件
      const compSchema = TableComponentFieldSchemas[index];
      const compSchemaFieldEntries = Object.entries(compSchema);
      return compSchemaFieldEntries.map(([compFieldName, compFieldSchema]) => {
        // 所有组件的内部 field
        const fieldSchema = {
          label: compFieldName,
          model: compFieldName,
          condition: {
            and: [['type', '==', compName]], // 当 field type 为该组件是才出现该组件的配置项
          },
        };

        switch (compFieldSchema.type) {
          case Boolean:
            fieldSchema.type = 'PHSwitch';
            break;
          case String:
            fieldSchema.type = 'PHInput';
            break;
          case Array:
            fieldSchema.type = 'PHInput';
            fieldSchema.tips = '该数组请用逗号分隔';
        }

        return fieldSchema;
      });
    }).flat(),
  ],
};
// endregion
// endregion

console.log(JSON.stringify(AdminCreatePageSchema));
console.log(JSON.stringify(AdminCreateSchemaSchema));
console.log(JSON.stringify(AdminCreateFieldSchema));
console.log(JSON.stringify(AdminCreateColumnSchema));
