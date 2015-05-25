'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' ),
	isNumber = require( 'validate.io-number' );

// ARGNANMAX //

/**
* FUNCTION: argnanmax( arr[, accessor] )
*	Computes the maximum value of an array ignoring non-numeric values and returns the corresponding array indices.
*
* @param {Number[]|Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Array|Null} array indices or null
*/
function argnanmax( arr, clbk ) {
	var len = arr.length,
		max = Number.NEGATIVE_INFINITY,
		idx = [],
		val,
		i;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'argnanmax()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'argnanmax()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}

	if ( !len ) {
		return null;
	}

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ], i );
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( val > max ) {
				max = val;
				idx.length = 0;
				idx.push( i );
			}
			else if ( val === max ) {
				idx.push( i );
			}
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( !isNumber( val ) ) {
				continue;
			}
			if ( val > max ) {
				max = val;
				idx.length = 0;
				idx.push( i );
			}
			else if ( val === max ) {
				idx.push( i );
			}
		}
	}
	return idx;
} // end FUNCTION argnanmax()


// EXPORTS //

module.exports = argnanmax;
