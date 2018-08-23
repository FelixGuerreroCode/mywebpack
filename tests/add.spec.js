const assert = require("assert");
const R = require("Ramda");
const Bacon = require("baconjs");
const addModule = require("../src/add");

function isAmerican( person ){
	return person.country === "USA"; 
}

function isNaturalized( person ){
	return person.naturalized === true; 
}

function isOlderThan17( person ){
	var age = R.prop( "age" );
	return  R.gt( age( person ), 16 );
}

function multiply( a, b ){
	return a * b;
}

function add( numberToAdd, value ){
	return value + numberToAdd;
}

function square( value ){
	return value * value;
}

describe("Eligibility", () => {
	it("Good people", () => {
		var foreignerEligibleNaturalized = {
			country : "mexico",
			age : 19,
			name : "foreignEligible",
			naturalized : true
		};

		var foreignerNotEligible = {
			country : "mexico",
			age : 19,
			name : "foreignEligible",
			naturalized : false
		};

		var localEligible = {
			country : "USA",
			age : 19,
			name : "localEligible",
			naturalized : null
		};

		var localNotEligible = {
			country : "USA",
			age : 9,
			name : "localNotElible",
			naturalized : null
		};

		// USA and greater than 17

		var people = [ foreignerEligibleNaturalized, foreignerNotEligible, localNotEligible, localEligible ];
		var isCitizen = R.either( isAmerican, isNaturalized );

		var goodPeopleToVote = R.pipe( R.filter( R.both( isCitizen, isOlderThan17 ) ), console.log  )( people );

		var initValueOne = 2;
		var initValueTwo = 2;
		var addTwo = R.curry( add )( 2 );

		var finalValue = R.pipe( multiply, addTwo, square )( initValueOne, initValueTwo );

		assert.equal( finalValue, 36, "incorrect from pipe" );
		assert.equal( true, true, "The value of zip is incorrect" );
	});


});


describe("testing2", () => {
	it("books", () => {
		var books = [ 
			{ title : "2018", year : 2018 },
			{ title : "2019", year : 2019 }
		];

		var logPrefix = function( prefix, text ){
			return console.log( prefix + " " + text );
		};

		var is2018 = R.propEq( "year", 2018 );

		var matchesFor2918 = R.filter( is2018 );

		var bookTitle = R.prop( "title" );
		var titleOnly = R.map( bookTitle );

		var logIt = R.partial( logPrefix, [ "Debug:" ] ); 

		R.pipe( matchesFor2918, titleOnly, logIt )( books );

		assert.equal( true, true, "The value of zip is incorrect" );
	});

	describe("Status filterting", () => {
		it("list of users ", () => {
			var users = [ { name: "John", status: "Active"},
				{ name: "Mike", status: "Inactive"},
				{ name: "Rachel", status: "Active" },
				{ name: "", status: "Active" }
			];

			var isActiveUser = R.propEq( "status", "Active" );
			var isNotEmptyUser = R.reject( R.propEq( "name", "" ) );
			var onlyTwoRecords = R.take( 2 );

			var activeUsers = R.pipe( 
				R.filter( isActiveUser ), 
				isNotEmptyUser,
				onlyTwoRecords
				)( users );
			console.log( activeUsers );
			assert.equal( true, true, "The value of zip is incorrect" );
		});
	});
});
