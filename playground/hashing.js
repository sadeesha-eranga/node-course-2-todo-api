const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

let hashPassword = '$2a$10$AcOVeChaBFPK8W7OivHJCObAMP4wcWOTxFDPzKthedBg7AdPbP7PW';

bcrypt.compare(password, hashPassword, (err, res) => {
    console.log(res);
});


// let data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// let decoded = jwt.verify(token, '123abc');
// console.log(decoded);
