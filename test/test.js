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


	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmax( [1,2,3], value );
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


	it( 'should compute the maximum value and return the corresponding indices using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':-8},
			{'x':null},
			{'x':-20},
			{'x':-50},
			{'x':null},
			{'x':-30},
			{'x':-8},
			{'x':-20},
		];

		actual = argmax( data, getValue );
		expected = [ 0, 6 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmax( [] ) );
	});

});
