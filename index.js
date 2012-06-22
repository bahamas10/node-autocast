/**
 * Common strings to cast
 */
var common_strings = {
  'true': true,
  'false': false,
  'undefined': undefined,
  'null': null
};

/**
 * Given a value, try and cast it
 */
module.exports = function(s) {
  // Try to cast it to a number
  if (+s) return +s;

  // Try to make it a comman string
  for (var key in common_strings) {
    if (s === key) return common_strings[key];
  }

  // Give up
  return s;
};
