/**
 * @file validate field, inject model, inject default
 */
import { assertSchema } from '../../utils/helper';

function validator(schema, propKey, prop) {
  // cheer up, run on development only
  const { propsSchema, name } = schema;
  const propSchema = propsSchema[propKey];
  return !Object.keys(propSchema)
    .map(key => {
      const fieldKeySchema = propSchema[key];
      const value = prop[key];
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
}

export default base => schema =>
  Object.assign(base, {
    props: Object.keys(schema.propsSchema).reduce((props, propKey) => {
      props[propKey] = {
        validator: validator.bind(null, schema, propKey),
      };
      return props;
    }, {}),
    // 先这样绑上去吧
    data() {
      this.PropsSchema = schema.propsSchema;
      return {};
    },
  });
