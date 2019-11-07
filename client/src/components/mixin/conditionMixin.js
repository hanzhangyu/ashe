/**
 * @file 处理条件 DSL
 * {or: [['password', '==', '123456'], ['name', '==', '123']], and: [['type', '==', 'A']]}
 */

const parseGroup = (group, model) =>
  group.map(expression => {
    const [key, operator, value] = expression;
    switch (operator) {
      case '>':
        return model[key] > value;
      case '<':
        return model[key] < value;
      case '>=':
        return model[key] >= value;
      case '<=':
        return model[key] <= value;
      case '==':
        return model[key] === value;
      case '!=':
        return model[key] !== value;
    }
  });

const processCondition = (condition, model) => {
  let { or = true, and = true } = condition;
  or = or === true ? true : parseGroup(or, model).includes(true);
  and = and === true ? true : !parseGroup(and, model).includes(false);
  return or && and;
};

export default {
  computed: {
    visible() {
      if (!this.field.condition) return true;
      return processCondition(this.field.condition, this.model);
    },
  },
};
