const user = require('./models/user');
const session = {};

user.register({}, {
    email: 'arad@book.ru',
    password: 121212,
    name: 121212
})
    .then(user => console.log(user))
    .catch(err => console.log(err));
