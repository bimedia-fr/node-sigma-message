node-sigma-message
==================

simple key-value message parser and formater

introduction
------------
Format and parses string containing key-value pairs. 

synopsis
--------

```javascript
var parser = require('sigma-message')();

var obj = parse('key=value;other=val');
console.log(obj);
// outputs {key:value,other:val}
```  

installation
------------

    $ npm install sigma-message

API
===

parser(config)
----------------
The constructor function creates a new `parser`. Optionnal parameter `options` allow to change separator and delimiter.
`config` :

* `delimiter` :  default is ';'
* `separator` :  default is '='

.parse(string)
------------------------------------
Parse a string and return an objet containing key and values.

.format(obj)
------------------------------------
Returns a string containing parameters properties and values.

