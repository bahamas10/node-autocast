#!/usr/bin/env node
/**
 * Tests for autocast
 */

var assert = require('assert'),
    autocast = require('../');

console.log('Testing Numbers...');
assert.strictEqual(autocast('5'), 5);
assert.strictEqual(autocast('5.6'), 5.6);
assert.strictEqual(autocast('5.6.7'), '5.6.7');
console.log('ok');

console.log('Testing common data types...');
assert.strictEqual(autocast('false'), false);
assert.strictEqual(autocast('true'), true);
assert.strictEqual(autocast('null'), null);
assert.strictEqual(autocast('undefined'), undefined);
console.log('ok');

console.log('Testing strings...');
assert.strictEqual(autocast('some string'), 'some string');
assert.strictEqual(autocast('!'), '!');
console.log('ok');
