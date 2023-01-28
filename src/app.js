const express = require('express');
const authController = require('./controllers/auth.controller');
const { validateLogin } = require('./middlewares/validateLogin');

// ...

const app = express();

app.use(express.json());

app.post('/login', validateLogin, authController.auth);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
