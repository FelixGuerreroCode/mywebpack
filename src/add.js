const R = require( "ramda" );

const add = ( a, b ) => {
	var isString = R.is( String );
	console.log( "testing: " + isString( "testing" ) );
	return a + b;	
};

//export default add;
module.exports = add;
