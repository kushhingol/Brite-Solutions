require("dotenv").config();
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const environmentConfiguration = require('./Configuration/configuration')
const routes = require('./Routes/routes');
const errorHandler = require('./_helpers/errorHandler')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// api routes
app.use(routes.Users, require('./Users/users.controller'));

// global error handler
app.use(errorHandler);


const port = environmentConfiguration.port;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});