const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id: '5ac13650067827f5aaf6a844'
}).then((result) => {
    console.log(result);
});

// Todo.findByIdAndRemove('5ac13650067827f5aaf6a844').then((todo) => {
//     console.log(todo);
// });