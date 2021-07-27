const functions = {
  stringLength: (string) => {
    if ((string.length <= 1) || (string.length > 10)) return 'String is not long enough or it is too long, more than 10 char!';
    return string.length;
  },
  reverseString: (string) => string.split('').reverse().join(''),
};

module.exports = functions;