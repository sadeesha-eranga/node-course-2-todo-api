// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5abf065be8a5a23eaed569a1')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5abf2506985cdef5af93f6ef')
    }, {
        $set: {
            name: "Sadeesha",
            location: "Sri Lanka"
        },
        $inc: {
            age: 3
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});