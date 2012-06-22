autocast
========

Easily and automatically cast common datatypes in JavaScript

Install
------

Install locally to use as a madule

    npm install autocast

Usage
-----

``` js
var autocast = require('autocast');
```

Example
-------

``` js
var autocast = require('autocast'),
    x;

x = autocast('5')
// x => 5
x = autocast('5.8')
// x => 5.8
x = autocast('5.8.8')
// x => '5.8.8'
x = autocast('null')
// x => null
x = autocast('true')
// x => true
x = autocast('false')
// x => false
x = autocast('normal string')
// x => 'normal string'
```

Tests
-----

    npm test

License
-------

MIT Licensed
