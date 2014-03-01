/*jslint node : true, nomen: true, plusplus: true, vars: true*/
"use strict";
var assert = require('assert'),
    sigma = require('../src/index.js'),
    vows = require('vows');


vows.describe('Key-Value message parser').addBatch({
    'a default message parser': {
        topic: sigma,
        'has a `parse` method' : function (parser) {
            assert.ok(parser.parse);
        },
        'has a `format` method' : function (parser) {
            assert.ok(parser.format);
        },
        'can parse a message' : {
            topic : function (parser) {
                return parser.parse('key=value;other=val');
            },
            'and return a parsed object' : function (parsed) {
                assert.ok(parsed.key);
                assert.ok(parsed.other);
                assert.equal(parsed.key, 'value');
                assert.equal(parsed.other, 'val');
            }
        }
    }
}).addBatch({
    'a message parser with custom separator and delimiter': {
        topic: function () {
            return sigma({ delimiter : '?', separator : '-'});
        },
        'has a `parse` method' : function (parser) {
            assert.ok(parser.parse);
        },
        'has a `format` method' : function (parser) {
            assert.ok(parser.format);
        },
        'can parse a message whith these chars' : {
            topic : function (parser) {
                return parser.parse('key-value?other-val');
            },
            'and return a parsed object' : function (parsed) {
                assert.ok(parsed.key);
                assert.ok(parsed.other);
                assert.equal(parsed.key, 'value');
                assert.equal(parsed.other, 'val');
            }
        }
    }
}).export(module);