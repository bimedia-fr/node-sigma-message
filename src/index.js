/*jslint node : true, nomen: true, plusplus: true, vars: true*/
"use strict";


// Key Value Module
// ----------------

// Default key value separator is '='.
// Default pair delimiter is ';'.
//
// You can pass any other `separator` or `delimiter` as parameter.
// ```js
// { delimiter : '?', separator : '-'}
// ```
module.exports =  function (opts) {
    var o = opts || {};
    var options = {
        delimiter : o.delimiter || ';',
        separator : o.separator || '='
    };

    return {
        // Parse a string and return an object containing keys and values
        parse : function (input) {
            return input.split(options.delimiter).reduce(function (prev, curr) {
                var elem = curr.split(options.separator);
                if (elem[0]) {
                    prev[elem[0]] = elem[1];
                }
                return prev;
            }, {});
        },
        // Format an object as a String containing every keys and values 
        format : function format(output) {
            return Object.keys(output).map(function (key) {
                return key + options.separator + output[key];
            }).join(options.delimiter);
        }
    };
};