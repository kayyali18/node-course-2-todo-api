const {MongoClient, ObjectId} = require ('mongodb'); //this code is identical to the above


MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log ('Connected to MongoDB server');

  // db.collection ('Todos').find ({
  //   _id: new ObjectId("59e4164fe63a6c0d8cfbbbac")
  // }).toArray ().then ((docs) => {
  //   console.log ('Todos');
  //   console.log (JSON.stringify (docs, undefined, 2));
  // }, (err) => {
  //   console.log ('Unable to fetch todos', err);
  // });

  db.collection ('Todos').find ().count ().then ((count) => {
    console.log (`Todos count: ${count}`);
  }, (err) => {
    console.log ('Unable to fetch todos', err);
  });

  db.collection ('Users').find ({name: 'Ahmad'}).toArray ().then ((user) => {
    console.log (JSON.stringify (user, undefined, 2));
  }, (err) => {
    if (err) return console.log ('Unable to fetch user:', err);
  });
  //db.close (); //closes the connection with db server
});
