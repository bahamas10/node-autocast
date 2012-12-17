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
> var autocast = require('autocast');
[Function: autocast]
> autocast('5')
5
> autocast('5.8')
5.8
> autocast('5.8.8')
'5.8.8'
> autocast('null')
null
> autocast('undefined')
undefined
> autocast('NaN')
NaN
> autocast('true')
true
> autocast('false')
false
> autocast('normal string')
'normal string'
> autocast('0xff')
255
> autocast('1e3')
1000
> autocast('0001')
1
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
