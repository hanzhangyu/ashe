import { assertSchema } from '../../src/utils/helper';

describe('should assert schema success', () => {
  it('should assert String success', () => {
    expect(assertSchema('1', { type: String })).toBeTruthy();
    expect(assertSchema(new String(1), { type: String })).toBeTruthy();
    expect(assertSchema(1, { type: String })).toBeFalsy();
  });

  it('should assert Number success', () => {
    expect(assertSchema(1, { type: Number })).toBeTruthy();
    expect(assertSchema('1', { type: Number })).toBeFalsy();
  });

  it('should assert Boolean success', () => {
    expect(assertSchema(true, { type: Boolean })).toBeTruthy();
    expect(assertSchema(1, { type: Boolean })).toBeFalsy();
  });

  it('should assert Object success', () => {
    expect(assertSchema({}, { type: Object })).toBeTruthy();
    expect(assertSchema(1, { type: Object })).toBeFalsy();
  });

  it('should assert Custom Type success', () => {
    class A {}
    const a = new A();
    expect(assertSchema(a, { type: A })).toBeTruthy();
    expect(assertSchema({}, { type: A })).toBeFalsy();
  });

  it('should assert Function success', () => {
    expect(assertSchema(() => {}, { type: Function })).toBeTruthy();
    expect(assertSchema(1, { type: Function })).toBeFalsy();
  });

  it('should assert Array success', () => {
    const arySchema = {
      type: Array,
      items: {
        type: Number,
      },
    };
    expect(assertSchema([1, 2, 3, 4], arySchema)).toBeTruthy();
    expect(assertSchema([1, 2, 3, '4'], { type: Array })).toBeTruthy();
    expect(assertSchema([1, 2, 3, '4'], arySchema)).toBeFalsy();
  });
});
