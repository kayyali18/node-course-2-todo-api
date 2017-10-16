const {MongoClient, ObjectId} = require ('mongodb'); //this code is identical to the above


MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log ('Unable to connect to MongoDB server');

  console.log ('Connected to MongoDB server');

  //deleteMany
  // db.collection ('Todos').deleteMany ({text: 'Eat lunch'}).then ((result) => {
  //   console.log (result);
  // });
  //deleteOne
  // db.collection ('Todos').deleteOne ({text: 'Eat lunch'}).then ((result) => {
  //   console.log (result);
  // });
  //findOneAndDelete
  // db.collection ('Todos').findOneAndDelete ({completed: false}).then ((result) => {
  //   console.log (result);
  // });

  //challenge
  db.collection ('Users').deleteMany ({name: 'Ahmad'}).then ((result) => {
    console.log (result);
  });

  db.collection ('Users').findOneAndDelete ({_id: ObjectId("59e4192308f03c09c847ad12")}).then ((result) => {
    console.log (result);
  });

  //db.close ();
});
