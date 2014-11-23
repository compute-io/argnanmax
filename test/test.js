'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmax = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-argnanmax', function tests() {

	it( 'should export a function', function test() {
		expect( argmax ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmax( value );
			};
		}
	});

	it( 'should compute the maximum value ignoring non-numeric values and return the corresponding indices', function test() {
		var data, expected, actual;

		data = [ -8, null, -20, -50, null, -30, -8, -20 ];
		expected = [ 0, 6 ];
		actual = argmax( data );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if an array does not contain numeric values', function test() {
		var data;

		data = [ 'beep', 'boop', 'bap', null ];

		assert.deepEqual( argmax(data), [] );
	});

});
