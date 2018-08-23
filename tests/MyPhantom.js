var R = require( "ramda" );
var Bacon = require( "baconjs" );

function openPage( link ){
	var page = require('webpage').create();

	var pageStream = Bacon.fromCallback( function( callback ){
		page.open( link, callback );
	}).map( function( status ){
		if( status === "success") {
			console.log( "Successful connection to: " + link );
		}else{
			console.log( "Failure connecting to: " + link );
		}
		page.render('example.png');
		return link;
	});

	return pageStream;

}

var pageStreams = R.map( openPage )(
	[ 
		"http://www.amazon.com", 
		"http://www.google.com" 
	] );
	
var allStreams = Bacon.combineAsArray( pageStreams );
allStreams.onValue( function( values ){
	phantom.exit();
});


