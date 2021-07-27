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