# Mongoose Vampires

For this assignment, you will be using some of the mongoose commands that you learned today and you will be **reading the documents** to find **new** queries to complete the following activities. Researching queries and implementing them is a big part of this lab!

![mongoose](https://s-media-cache-ak0.pinimg.com/564x/ee/b7/a9/eeb7a99383582d53e65ffcc0e4a225bd.jpg)

## Technical Requirements

1. Must be able to run without syntax errors
1. Must get functionality required for each section working

## Deliverables

1. An `app.js` file with your solutions to the prompts below.

# Resources

Note that some of these prompts will be challenging! Do your best and utilize the following resources to research the commands you will need:

- Your notes from today
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- Google to find Stack Overflow articles and more

# Setup

1. Fork and clone this directory.
1. Check out a dev branch to work on.
1. Run `npm i` to download dependencies.
1. Open the project in vscode, you'll be working with some starter code in the `models` folder and the `app.js` file
1. Create a `.env` file in the root of your repo.

Inside `.env`:

- Paste your connection string (yours will look different than the one below!)

```
DATABASE_URL=mongodb+srv://sei:<password>@sei-w0kys.azure.mongodb.net/test?retryWrites=true
```

You need to update the connection string as follows:

1. Replace with the password of the database user you created.
1. _IMPORTANT_: The connection string by default connects to a namespace (database) named myFirstDatabase. However, this should be updated to your preferred namespace (database) name. For example, "vampires": `...mongodb.net/vampires?retryWrites=true...`.

Complete the prompts below. When complete, submit your work with a pull request on the original repo.

Unless otherwise stated, homework is due by 9 am ET the next class day.

# The Exercise

# What is a schema?

A schema is a way to organize, ahead of time, what a group of data is going to look like. This can be at various levels of a database depending on what kind of databases you are using.

Mongo, is schema-less on the database level. It doesn't care what the data looks like and will take in virtually anything as long as it's syntactically correct.

## If MongoDB doesn't need schemas, why are they important?

Even when you are using MongoDB, an inherently schema-less database, a schema can be very helpful. It helps control what is going into the database so that you can both know what is going into it, and to make validations. Note that with MongoDB, even if a piece of data is not a part of your original schema, you can still store it.

## Mongoose

This is where mongoose comes in. Instead of manually making sure everything we are putting into our database makes sense and conforms to some type of structure, Mongoose allows us to define schemas.

Mongoose, in the background, can enforce these schemas (as strictly as you like) in order to make sense of the data going into the database and to allow validation. It provides powerful and developer-friendly tools to do this.

## Building a Schema

Lets design a schema using mongoose and then use it to create some documents and eventually query for those documents.

Our vampire collection will look something like this:

```javascript
var vampire = {
  name: 'Chocula',
  title: 'Count'
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal','marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2,
}
```

1. Build a vampire **schema** and **model** that matches the object above inside the `models/vampires.js` file

1. Go to the [Mongoose documentation](https://mongoosejs.com/docs/schematypes.html) to learn more about validations and defaults

1. The **name field is required**, so make sure that the schema accommodates for that.

1. Also, **no vampire will have less than 0 victims**, so add that into the schema as a validation.

1. Lastly, set the **default value of the hair color to black**.

## Inserting Seed Data Using Mongoose

Insert data into the database using the following steps:

### Add the vampire data that we gave you

1. We have required `seed_vampires.js` for you in the `app.js` file. This is an array of Vampires for you to insert into your database.

1. Write this command and run it **ONCE** in `app.js` - once you are done, comment it out or else every time you run it it will make duplicates of your data.

```javascript
Vampire.insertMany(seedData, (err, vampires) => {
	if (err) {
		console.log(err);
	}
	console.log('added provided vampire data', vampires);
	mongoose.connection.close();
});
```

1. remember run your file with `node app.js`

### Add some new vampire data

1. Using the create method, create 4 new vampires with any qualities that you like.

## [Querying](https://mongoosejs.com/docs/api.html#model_Model.find)

### Select by comparison

Write a different query for each of the following:

> Check out the [docs](https://mongoosejs.com/docs/tutorials/query_casting.html) for more examples.
> All the [comparison query operators](https://docs.mongodb.com/manual/reference/operator/query-comparison/) supported by MongoDB

1. Find all the vampires that have a gender of female
2. have greater than 500 victims
3. have fewer than or equal to 150 victims
4. have a victim count is not equal to 210234
5. have greater than 150 AND fewer than 500 victims

### Select by exists or does not exist

Select all the vampires that:

1. have a key of 'title'
2. do not have a key of 'victims'
3. have a title AND no victims
4. have victims AND the victims they have are greater than 1000

### Select with OR

Select all the vampires that:

1. are from New York, New York, US or New Orleans, Louisiana, US
2. love brooding or being tragic
3. have more than 1000 victims or love marshmallows
4. have red hair or green eyes

### Before you continue on to part two, you should know that Mongoose has some sweet [helper functions](https://mongoosejs.com/docs/queries.html#queries) that can make all this a little easier. See below.

Mongoose's default find gives you an array of objects. But what if you know you only want one object? These convenience methods just give you one object without the usual array surrounding it.

```javascript
Article.findById('5757191bce5579b805705900', (err, article) => {
	console.log(article);
});
```

```javascript
Article.findOne({ author: 'Matt' }, (err, article) => {
	console.log(article);
});
```

```javascript
Article.findByIdAndUpdate(
  '5757191bce5579b805705900', // id of what to update
  { $set: { author: 'Matthew' } }, // how to update it
  { new : true }, // tells findOneAndUpdate to return modified article, not the original
  (err, article)=>{
    console.log(article);
  });
});
```

```javascript
Article.findOneAndUpdate(
  { author: 'Matt' }, // search criteria of what to update
  { $set: { author: 'Matthew' } }, // how to update it
  { new : true }, // tells findOneAndUpdate to return modified article, not the original
  (err, article)=>{
    console.log(article);
  });
});
```

```javascript
Article.findByIdAndRemove('5757191bce5579b805705900', (err, article) => {
	console.log(article); // log article that was removed
});
```

```javascript
Article.findOneAndRemove({ author: 'Matt' }, (err, article) => {
	console.log(article); // log article that was removed
});
```

### Select objects that match one of several values

Select all the vampires that:

1. love either frilly shirtsleeves or frilly collars
2. love brooding
3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

### Negative Selection

Select all vampires that:

1. love ribbons but do not have brown eyes
2. are not from Rome
3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
4. have not killed more than 200 people

## Replace

1. replace the vampire called 'Claudia' with a vampire called 'Claude', and any other properties you'd like
2. replace the first male vampire with another whose name is 'Guy Man', and any other properties you'd like

## Update

1. Update 'Claude' to have a gender of 'm'
1. We now no longer want to categorize female gender as "f", but rather as **female**. Update all females so that the they are of gender "female".

## Remove

1. Remove a single document wherein the hair_color is 'brown'
2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
   <hr>
