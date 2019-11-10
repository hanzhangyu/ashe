export default {
  name: 'TableGenerator',
  propsSchema: {
    schema: {
      // {type: 'table', columns: []} 这两个是系统预置的
      pagination: {
        type: 'boolean',
      },
      dataSource: {
        type: 'string',
      },
      dataSourceAction: {
        type: 'string',
      },
      timerUpdaterTimeout: {
        type: 'number',
      },
      timerUpdaterAction: {
        type: 'string',
      },
    },
  },
};
