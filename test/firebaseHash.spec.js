/* License: MIT.
 * Copyright (C) 2013, 2014, 2015, Uri Shaked.
 */

'use strict';

var assert = require('assert');
var firebaseHash = require('../lib/firebaseHash');

/* global describe, it */

describe('#firebaseHash', function () {
	it('should return empty hash string for null values', function () {
		assert.equal(firebaseHash(null), '');
	});

	it('should return correct hash for boolean true', function () {
		assert.equal(firebaseHash(true), 'E5z61QM0lN/U2WsOnusszCTkR8M=');
	});

	it('should return correct hash for boolean false', function () {
		assert.equal(firebaseHash(false), 'aSSNoqcS4oQwJ2xxH20rvpp3zP0=');
	});

	it('should return correct hash for numeric values', function () {
		assert.equal(firebaseHash(500), 'Ajg9bohDwTVmqR14o1bVJnneryM=');
	});

	it('should return correct hash for string values', function () {
		assert.equal(firebaseHash('Hello World'), 'B8HWXc7zXMjrsnJxPRj7wrNGqt4=');
	});

	it('should return correct hash for objects with a single key', function () {
		assert.equal(firebaseHash({foo: 'bar'}), 'XnLeTeWQmzTHImTbSMDLg/qMrKY=');
	});

	it('should return correct hash for objects with a multiple keys', function () {
		assert.equal(firebaseHash({z:1,a:'2',b:'true',c:false}), '8qk5vmuZGXWJx+77SGwjYRM0yPA=');
	});
});
