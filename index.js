/**
 * Common strings to cast
 */
var common_strings = {
  'true': true,
  'false': false,
  'undefined': undefined,
  'null': null,
  'NaN': NaN
};

/**
 * Given a value, try and cast it
 */
module.exports = function(s) {
  var key;

  // Don't cast Date objects
  if (s instanceof Date) return s;

  // Try to cast it to a number
  if ((key = +s) == key) return key;

  // Try to make it a common string
  for (key in common_strings) {
    if (s === key) return common_strings[key];
  }

  // Give up
  return s;
};
