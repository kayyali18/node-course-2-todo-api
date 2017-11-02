const {ObjectID} = require ('mongodb');

var express = require ('express');
var bodyParser = require ('body-parser');

var {mongoose} = require ('./db/mongoose');
var {Todo} = require ('./models/todo');
var {User} = require ('./models/user');

var app = express ();

app.use (bodyParser.json ());


// POST request
app.post ('/todos', (req, res) => {
  var todo = new Todo ({
    text: req.body.text
  });

  todo.save ().then ((doc) => {
    res.send (doc);
  }, (e) => {
    res.status (400).send (e);
  });
});

// GET request
app.get ('/todos', (req, res) => {
  Todo.find ().then ((todos) => {
    res.send ({todos});
  }, (e) => {
    res.status (400).send (e);
  });
});

//GET request /todos/123(id) --make it dynamic
//params is an object with key value and key is param in url
// app.get ('/todos/:id', (req, res) => {
//   let id = req.params.id;
//
//   //validate id using isValid
//     //not valid give 404 response
//   if (!ObjectID.isValid (id)) {
//     res.status (404).send ()
//   }
//   // findById
//   Todo.findById (id).then ((todo) => {
//     //success
//       //if todo - send it back
//     if (todo) {
//       res.send (todo);
//     }
//     // if no todo - send back 404 with empty body
//     if (!todo) {
//       res.status (404);
//       res.send (todo);
//     }
//   }).catch ((e) => {
//     //error
//       // send back 400 req was not valid send back nothing
//       res.status (400);
//   });
// });

//Andrew's Work

app.get ('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid (id)) {
    return res.status (404).send ();
  }

  Todo.findById (id).then ((todo) => {
    if (!todo) {
      return res.status (404).send ();
    }

    res.send ({todo});
  }).catch ((e) => {
    res.status (400).send ();
  });
});

app.listen (3000, () => {
  console.log ('Server started on port 3000');
});


module.exports = {app};
