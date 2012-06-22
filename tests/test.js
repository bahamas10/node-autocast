#!/usr/bin/env node
/**
 * Tests for autocast
 */

var assert = require('assert'),
    autocast = require('../'),
    str_int = '5',
    str_float = '5.6',
    str_fakenumber = '5.6.7',
    str_false = 'false',
    str_true = 'true',
    str_null = 'null',
    str_undefined = 'undefined',
    str_normalstr = 'Just a string';

console.log('Testing Numbers');
assert.strictEqual(autocast(str_int), 5);
assert.strictEqual(autocast(str_float), 5.6);
assert.strictEqual(autocast(str_fakenumber), '5.6.7');

console.log('Testing common data types');
assert.strictEqual(autocast(str_false), false);
assert.strictEqual(autocast(str_true), true);
assert.strictEqual(autocast(str_null), null);
assert.strictEqual(autocast(str_undefined), undefined);
