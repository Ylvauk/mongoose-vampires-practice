/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
	console.log('Connection made!');
});

/**********************************************************************
SEED YOUR DATABASE
Run this code ONCE with `node app.js` -- when you are done, comment it out!
***********************************************************************/

Vampire.insertMany(seedData, (err, vampires) => {
	if (err) {
		console.log(err);
	}
	console.log('added provided vampire data', vampires);
	mongoose.connection.close();
});

/**********************************************************************
Write Your Code Below
***********************************************************************/

// Add some new vampire data
// Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.

/**********************************************************************
QUERYING
***********************************************************************/

// The first one has been done for you!
// After seeding your database, run `node app.js` to see the output in your browser
//1. find all the female vampires in the db
// Vampire.find({ gender: 'f' }, (err, vampires) => {
// 	console.log(vampires);
// 	db.close();
// });
