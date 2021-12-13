import operate from '../operate';

describe('tests for the operate function', () => {
  test('it expects 9 + 1 to be 10', () => {
    expect(operate(9, 1, '+')).toEqual('10');
  });
  test('it expects 62 - 2 to be 60', () => {
    expect(operate(62, 2, '-')).toEqual('60');
  });
  test('it expects 4 x 0 to be 0', () => {
    expect(operate(4, 0, 'x')).toEqual('0');
  });
  test('it expects 1 ÷ 1 to be 1', () => {
    expect(operate(1, 1, '÷')).toEqual('1');
  });
});
