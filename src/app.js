const express = require('express');
const authController = require('./controllers/auth.controller');
const createUserCrontroller = require('./controllers/createUser.controller');
const { validateLogin } = require('./middlewares/validateLogin');
const { validateNewUser } = require('./middlewares/validateNewUser');

// ...

const app = express();

app.use(express.json());

app.post('/login', validateLogin, authController.auth);
app.post('/user', validateNewUser, createUserCrontroller.createUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
