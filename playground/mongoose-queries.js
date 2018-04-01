const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5ac065179fd2e21b64f16315';

let userId = '5abfb6ed77bb261fb0d4e054';

// if (!ObjectID.isValid(userId)) {
//     console.log('ID is not valid');
// }

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find the user');
    }
    console.log(JSON.stringify(user, undefined, 4));
}, (e) => {
    // console.log(e);
});

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => {
//     console.log(e);
// });
