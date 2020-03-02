const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = new Sequelize('testapp', 'root', 'root', {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
});

const app = express();

sequelize
    .authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.listen(3002, () => console.log('Server is started'));