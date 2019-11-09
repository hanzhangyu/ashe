/**
 * @file validate field, inject model, inject default
 */
import { assertSchema } from '../../utils/helper';

export default schema => ({
  inject: ['model'],
  props: {
    field: {
      validator(fieldProp) {
        // cheer up, run on development only
        const { fieldSchema, name } = schema;
        return !Object.keys(fieldSchema)
          .map(key => {
            const fieldKeySchema = fieldSchema[key];
            const value = fieldProp[key];
            let valid;
            if (value === undefined) valid = !fieldKeySchema.required;
            else valid = assertSchema(value, fieldKeySchema);
            if (!valid)
              console.warn(
                `${key} in ${name} with value: `,
                value,
                ' for schema: ',
                fieldKeySchema,
              );
            return valid;
          })
          .includes(false);
      },
      // 忘了 key 不存在不是 props 不存在，这样的话只能使用 JSX 配合 destructing assignment 了，略显尴尬
      // default() {
      //   return Object.keys(fieldSchema).reduce((props, key) => {
      //     const { default: defaultVal } = fieldSchema[key];
      //     if (defaultVal) {
      //       props[key] = defaultVal;
      //     }
      //     return props;
      //   }, {});
      // },
    },
  },
  // 先这样绑上去吧
  data() {
    this.FieldSchema = schema.fieldSchema;
    return {};
  },
});
