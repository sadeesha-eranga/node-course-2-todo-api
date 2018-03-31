const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let newUser = new User({
    email: 'msadeeshaeranga@gmail.com'
});

newUser.save().then((result) => {
    console.log('User saved', JSON.stringify(result, undefined, 4));
}).catch((e) => {
    console.log('Unable to save the user', e);
})

// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((result) => {
//     console.log('Todo saved', result);
// }, (e) => {
//     console.log('Unable to save the todo', e);
// });

// let myTodo = new Todo({
//     text: '   Mogoose tutorials   '
// });

// myTodo.save().then((result) => {
//     console.log('Todo saved', result);
// }).catch((e) => {
//     console.log('Unable to save todo', e);
// });