autocast
========

Easily and automatically cast common datatypes in JavaScript

Usage
-----

Node.js

``` js
var autocast = require('autocast');
```

Web

``` html
<script src="autocast.min.js"></script>
<!-- // defines autocast() -->
```

Example
-------

``` js
var autocast = require('autocast');
var x;

x = autocast('5')
// x => 5
x = autocast('5.8')
// x => 5.8
x = autocast('5.8.8')
// x => '5.8.8'
x = autocast('null')
// x => null
x = autocast('undefined')
// x => undefined
x = autocast('NaN')
// x => NaN
x = autocast('true')
// x => true
x = autocast('false')
// x => false
x = autocast('normal string')
// x => 'normal string'
```

Install
------

    npm install autocast

Tests
-----

    npm test

License
-------

MIT Licensed
