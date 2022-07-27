/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
require("dotenv").config();
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
SEED YOUR DATABASE AFTER YOU CREATE YOUR SCHEMA
Run this code ONCE with `node app.js` -- when you are done, comment it out!
***********************************************************************/

// Vampire.insertMany(seedData, (err, vampires) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('added provided vampire data', vampires);
// 	mongoose.connection.close();
// });

/**********************************************************************
Write Your Code Below
***********************************************************************/
// Add some new vampire data
const vampire1 = {
  name: "Arabella",
  hair_color: "black",
  eye_color: "blue",
  dob: new Date(1643, 3, 13, 11, 3),
  loves: ["wine", "fruit", "classical music"],
  location: "Rome,Italy",
  gender: "f",
  victims: 1643,
};
const vampire2 = {
  name: "Beatrice",
  title: "Terror of the Town",
  hair_color: "blonde",
  eye_color: "green",
  dob: new Date(1211, 8, 3, 12, 3),
  loves: ["movies", "hunting", "driving"],
  location: "Portland,Oregon",
  gender: "f",
  victims: 290,
};
const vampire3 = {
  name: "Amos",
  title: "The Duke",
  hair_color: "white",
  eye_color: "red",
  dob: new Date(1521, 9, 14, 10, 5),
  loves: ["mansions", "outdoors", "sleeping"],
  location: "Memphis,Tennessee",
  gender: "m",
  victims: 1358,
};
const vampire4 = {
  name: "Cyril",
  hair_color: "gray",
  eye_color: "gray",
  dob: new Date(1412, 5, 2, 9, 3),
  loves: ["books", "games", "fashion"],
  location: "Paris,France",
  gender: "m",
  victims: 476,
};
// Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.
Vampire.create(vampire1,(error,vampire) => {
	if(error){console.log(error)
	}else{console.log(vampire)}
})
Vampire.create(vampire2,(error,vampire) => {
	if(error){console.log(error)
	}else{console.log(vampire)}
})
Vampire.create(vampire3,(error,vampire) => {
	if(error){console.log(error)
	}else{console.log(vampire)}
})
Vampire.create(vampire4,(error,vampire) => {
	if(error){console.log(error)
	}else{console.log(vampire)}
})

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

Vampire.find({ victims: { $gt: 500 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ victims: { $lte: 150 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ victims: { $lte: 150 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ victims: { $ne: 210234 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ title: { $exists: true } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find({ victims: { $exists: false } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find(
  { victims: { $exists: false }, title: { $exists: true } },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find({ victims: { $exists: true, $gt: 1000 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find(
  {
    location: { $in: ["New Orleans, Louisiana, US", "New York, New York, US"] },
  },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find(
  { loves: { $in: ["brooding", "being tragic"] } },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find(
  { $or: [{ victims: { $gt: 1000 } }, { loves: "marshmallows" }] },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find(
  { $or: [{ eye_color: "green" }, { hair_color: "red" }] },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find(
  { loves: { $in: ["frilly shirtsleeves", "frilly collars"] } },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find({ loves: "brooding" }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find(
  {
    loves: {
      $in: [
        "appearing innocent",
        "trickery",
        "lurking in rotting mansions",
        "R&B music",
      ],
    },
  },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find(
  { loves: "ribbons", eye_color: { $ne: "brown" } },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find({ location: { $ne: "Rome,Italy" } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.find(
  {
    loves: {
      $nin: [
        "fancy cloaks",
        "frilly shirtsleeves",
        "appearing innocent",
        "being tragic",
        "brooding",
      ],
    },
  },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.find({ victims: { $lt: 200 } }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.findOneAndReplace(
  { name: { $eq: "Claudia" } },
  { name: "Claude" },
  { new: true },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.findOneAndReplace(
  { gender: { $eq: "m" } },
  { name: "Guy Man" },
  { new: true },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.findOneAndUpdate(
  { name: "Claude" },
  { $set: { gender: "m" } },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.updateMany(
  { gender: "f" },
  { $set: { gender: "female" } },
  (err, vampires) => {
    console.log(vampires);
    db.close();
  }
);

Vampire.findOneAndRemove({ hair_color: "brown" }, (err, vampires) => {
  console.log(vampires);
  db.close();
});

Vampire.deleteMany({ eye_color: "blue" }, (err, vampires) => {
  console.log(vampires);
  db.close();
});
