//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb'); //this code is identical to the above


// var obj = new ObjectID (); //creating a new instance of ObjectID
// console.log (obj);

//to connect to the database
MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log ('Connected to MongoDB server');

  // db.collection ('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) return console.log ('Unable to insert todo', err);
  //
  //   console.log (JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection ('Users').insertOne ({
  //   name: 'Ahmad',
  //   age: 23,
  //   location: 'Denver, CO'
  // }, (err, result) => {
  //   if (err) return console.log ('Unable to insert user', err);
  //
  //   console.log (result.ops [0]._id.getTimestamp ());
  // });

  db.close (); //closes the connection with db server
});
