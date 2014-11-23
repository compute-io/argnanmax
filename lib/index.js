/**
*
*	COMPUTE: argnanmax
*
*
*	DESCRIPTION:
*		- Computes the maximum value of an array ignoring non-numeric values and returns the corresponding array indices.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: argnanmax( arr )
*	Computes the maximum value of an array ignoring non-numeric values and returns the corresponding array indices.
*
* @param {Array} arr - array of values
* @returns {Array} array indices
*/
function argnanmax( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'argnanmax()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		max = Number.NEGATIVE_INFINITY,
		idx = [],
		val;

	for ( var i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( typeof val !== 'number' || val !== val ) {
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
	return idx;
} // end FUNCTION argnanmax()


// EXPORTS //

module.exports = argnanmax;
