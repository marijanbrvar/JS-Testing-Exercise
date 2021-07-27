const functions = require('../index');

test('Takes any string as an argument and returns its characters count', () => {
  expect(functions.stringLength('marijan')).toBe(7);
});

test('Takes any string as an argument and returns its characters count', () => {
  expect(functions.stringLength('marijan')).not.toBe(8);
});