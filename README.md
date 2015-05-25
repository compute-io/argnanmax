argnanmax
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the maximum value of an array ignoring non-numeric values and returns the corresponding array indices.


## Installation

``` bash
$ npm install compute-argnanmax
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var argmax = require( 'compute-argnanmax' );
```

#### argmax( arr[, accessor] )

Computes the maximum value of an `array` ignoring non-numeric values and returns the corresponding `array` indices.

``` javascript
var data = [ null, -5, NaN, true, -3, -2, 'beep' ];

var idx = argmax( data );
// returns [5]
```

For non-numeric `arrays`, provide an accessor `function` for accessing numeric values

``` javascript
var arr = [
	{'x':-5},
	{'x':null},
	{'x':-2},
	{'x':-3},
	{'x':null},
	{'x':-7}
];

function getValue( d, i ) {
	return d.x;
}

var idx = argmax( arr, getValue );
// returns [2]
```

Note: if an input `array` does not contain any numeric values, the function returns `null`.


## Examples

``` javascript
var argmax = require( 'compute-argnanmax' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT).


---
## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-argnanmax.svg
[npm-url]: https://npmjs.org/package/compute-argnanmax

[travis-image]: http://img.shields.io/travis/compute-io/argnanmax/master.svg
[travis-url]: https://travis-ci.org/compute-io/argnanmax

[coveralls-image]: https://img.shields.io/coveralls/compute-io/argnanmax/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/argnanmax?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/argnanmax.svg
[dependencies-url]: https://david-dm.org/compute-io/argnanmax

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/argnanmax.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/argnanmax

[github-issues-image]: http://img.shields.io/github/issues/compute-io/argnanmax.svg
[github-issues-url]: https://github.com/compute-io/argnanmax/issues
