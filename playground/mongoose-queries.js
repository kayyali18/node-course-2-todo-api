const {ObjectID} = require ('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user'); //acces the collection through my models

var todoID = '59fa404eaa3c8d102fd67555';
var userID = '59e6cae569d2af2428f7fb6e';

if (!ObjectID.isValid (todoID)) {
  console.log ('ID not valid');
};

Todo.find ({ //queries by what you give it
  _id: todoID
}).then ((todos) => {
  console.log ('Todos', todos);
});

Todo.findOne ({
  _id: todoID
}).then ((todo) => {
  console.log ('Todo', todo);
});

Todo.findById (todoID).then ((todo) => {
  if (!todo) {
    return console.log ('ID not found');
  };
  console.log ('Todo By Id', todo);
}).catch ((e) => console.log (e));


//writing the code above in a different manner
User.findById (userID).then ((user) => {
  if (!user) {
    return console.log ('Unable to find user');
  }

  console.log ('User by ID', user);
}, (e) => {
  console.log (e);
});
