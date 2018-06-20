const R = require( "ramda" );
const fs = require( "fs" );

const readFile = path => fs.readFileSync( path, { encoding : "utf-8" } );

function isTrue( x ){
	return x;
}

function factorial( num ){
	var nextNumber = num - 1;
	if( nextNumber === 1 ){
		return num;
	}
	var mult =  num * factorial( nextNumber );
	return mult;
}

const add = ( a, b ) => {
	var maxNumber = 5;
	var theFactorial = factorial( maxNumber );


	var names = [ " ONe", " TWO ", " three  " ];
	var statusArray = [ true, false, true ];

	R.pipe( 
		R.map( R.complement( isTrue ) ),
		console.log )( statusArray );

	R.pipe( 
		R.map( R.trim ), 
		R.map( R.toLower ), 
		console.log )( names );

	var files =  [ './src/files/bitcoin.csv', './src/files/tether.csv'];
	var triggerCommandsOn = R.pipe( 
		R.map( readFile ),
		R.map( R.dropLast( 1 ) ),
		R.map( R.split( "\n" ) ),
		R.map( R.map( R.split( "\t" ) ) ),
		R.map( R.map( R.drop( 1 ) ) ),
		console.log 
	);

	//triggerCommandsOn( files );
	return a + b;	
};

//export default add;
module.exports = add;
