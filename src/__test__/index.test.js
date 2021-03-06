const functions = require('../index');

test('Takes any string as an argument and returns its characters count', () => {
  expect(functions.stringLength('marijan')).toBe(7);
});

test('Takes any string as an argument and returns its characters count', () => {
  expect(functions.stringLength('marijan')).not.toBe(8);
});

test('Check if string is to short or too long then return error', () => {
  expect(functions.stringLength('m')).toBe('String is not long enough or it is too long, more than 10 char!');
  expect(functions.stringLength('123456789011')).toBe('String is not long enough or it is too long, more than 10 char!');
});

test('Reverse string provided as argument', () => {
  expect(functions.reverseString('1234567890')).toBe('0987654321');
});

describe('My calculator can', () => {
  test('Add', () => {
    expect(functions.calculator.add(2, 2)).toBe(4);
  });
  test('Substract', () => {
    expect(functions.calculator.subtract(10, 2)).toBe(8);
  });
  test('Divide', () => {
    expect(functions.calculator.divide(10, 2)).toBe(5);
  });
  test('Multiply', () => {
    expect(functions.calculator.multiply(10, 2)).toBe(20);
  });
});

describe('You should create function which will capitalize string', () => {
  test('String is capitalized', () => {
    expect(functions.capitalize('marijan')).toBe('Marijan');
  });
  test('Argumnet is not string', () => {
    expect(functions.capitalize(12)).toBe('Nota a string!');
  });
});