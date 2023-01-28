const express = require('express');
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const { validateLogin } = require('./middlewares/validateLogin');
const { validateNewUser } = require('./middlewares/validateNewUser');
const { validateToken } = require('./middlewares/validateToken');
// ...

const app = express();

app.use(express.json());

app.post('/login', validateLogin, authController.auth);
app.post('/user', validateNewUser, userController.createUser);
app.get('/user', validateToken, userController.getAll);
app.get('/user/:id', validateToken, userController.getById);
app.post('/categories', validateToken, categoryController.createCategory);
app.get('/categories', validateToken, categoryController.getAll);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
