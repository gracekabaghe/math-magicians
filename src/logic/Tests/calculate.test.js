import calculate from '../calculate';

let calcObject = { total: '0', next: null, operation: null };

beforeEach(() => {
  calcObject = { total: '0', next: null, operation: null };
});

describe('sum of numbers', () => {
  test('it gives the correct answer', () => {
    calcObject = calculate(calcObject, '1');
    calcObject = calculate(calcObject, '+');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('6');
  });

  test('it adds numbers', () => {
    calcObject = calculate(calcObject, '1');
    calcObject = calculate(calcObject, '+');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('6');
  });
});

describe('subtraction of numbers', () => {
  test('it gives the correct answer', () => {
    calcObject = calculate(calcObject, '6');
    calcObject = calculate(calcObject, '-');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('20');
  });

  test('it sub integer numbers', () => {
    calcObject = calculate(calcObject, '8');
    calcObject = calculate(calcObject, '-');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('3');
  });
});

describe('multiplication of numbers', () => {
  test('it gives the correct answer', () => {
    calcObject = calculate(calcObject, '7');
    calcObject = calculate(calcObject, 'x');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('35');
  });

  test('it multiplies numbers', () => {
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, 'x');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('30');
  });
});

describe('division of numbers', () => {
  test('it gives the correct answer', () => {
    calcObject = calculate(calcObject, '30');
    calcObject = calculate(calcObject, '÷');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('8');
  });

  test('division of numbers', () => {
    calcObject = calculate(calcObject, '50');
    calcObject = calculate(calcObject, '÷');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('10');
  });
});
