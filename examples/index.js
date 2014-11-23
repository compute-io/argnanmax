'use strict';

var argmax = require( './../lib' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	// Every so often insert a missing value...
	if ( i%10 === 0 ) {
		data[ i ] = null;
	} else {
		data[ i ] = -1 * Math.round( Math.random()*100 );
	}
}
var idx = argmax( data );
console.log( idx );
