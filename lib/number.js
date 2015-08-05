'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var floor = Math.floor;


// MEDIAN //

/**
* FUNCTION median( lambda )
*	Computes the distribution median for a Poisson distribution with parameter lambda.
*
* @param {Number} lambda - mean parameter
* @returns {Number} distribution median
*/
function median( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return floor( lambda + 1/3 - 0.02/lambda );
} // end FUNCTION median()


// EXPORTS

module.exports =  median;
