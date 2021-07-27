const functions = {
  stringLength: (string) => {
    if ((string.length <= 1) || (string.length > 10)) return 'String is not long enough or it is too long, more than 10 char!';
    return string.length;
  },
  reverseString: (string) => string.split('').reverse().join(''),
  calculator: {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    divide: (num1, num2) => num1 / num2,
    multiply: (num1, num2) => num1 * num2,
  },
  capitalize: (string) => {
    if (string.constructor !== String) return 'Nota a string!';

    const str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
  },
};

module.exports = functions;