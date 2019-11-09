export default {
  name: 'PHUpload',
  fieldSchema: {
    model: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    accept: {
      type: String,
      required: true,
    },
  },
};
