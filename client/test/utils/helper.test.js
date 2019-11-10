import { assertSchema } from '../../src/utils/helper';

describe('should assert schema success', () => {
  it('should assert String success', () => {
    expect(assertSchema('1', { type: 'string' })).toBeTruthy();
    expect(assertSchema(new String(1), { type: 'string' })).toBeFalsy();
    expect(assertSchema(1, { type: 'string' })).toBeFalsy();
  });

  it('should assert Number success', () => {
    expect(assertSchema(1, { type: 'number' })).toBeTruthy();
    expect(assertSchema('1', { type: 'number' })).toBeFalsy();
  });

  it('should assert Boolean success', () => {
    expect(assertSchema(true, { type: 'boolean' })).toBeTruthy();
    expect(assertSchema(1, { type: 'boolean' })).toBeFalsy();
  });

  it('should assert Object success', () => {
    expect(assertSchema({}, { type: 'object' })).toBeTruthy();
    expect(assertSchema(1, { type: 'object' })).toBeFalsy();
  });

  it('should assert Custom Type failed', () => {
    class A {}
    const a = new A();
    expect(assertSchema(a, { type: A })).toBeFalsy();
    expect(assertSchema(a, { type: 'object' })).toBeTruthy();
  });

  it('should assert Function failed', () => {
    expect(assertSchema(() => {}, { type: 'function' })).toBeFalsy();
  });

  it('should assert Symbol failed', () => {
    expect(assertSchema(Symbol('foo'), { type: 'symbol' })).toBeFalsy();
  });

  it('should assert Array success', () => {
    const arySchema = {
      type: 'array',
      items: {
        type: 'number',
      },
    };
    expect(assertSchema([1, 2, 3, 4], arySchema)).toBeTruthy();
    expect(assertSchema([1, 2, 3, '4'], { type: 'array' })).toBeTruthy();
    expect(assertSchema([1, 2, 3, '4'], arySchema)).toBeFalsy();
  });
});
