const {MongoClient, ObjectId} = require ('mongodb'); //this code is identical to the above


MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log ('Unable to connect to MongoDB server');

  console.log ('Connected to MongoDB server');

  //findOneAndUpdate

  db.collection ('Todos').findOneAndUpdate ({
    _id: new ObjectId ('59e425ce56d1c5956f5bdb25')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then ((result) => {
    console.log (result);
  });

  db.collection ('Users').findOneAndUpdate ({
    _id: new ObjectId ('59e4175c444ef41cb435c5ee')
  }, {
    $set: {
      name: 'Ahmad'
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  }).then ((results) => {
    console.log (results);
  });
  //db.close ();
});
