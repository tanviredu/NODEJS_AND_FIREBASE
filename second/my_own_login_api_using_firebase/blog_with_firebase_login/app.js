const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
app = express();
const loginController = require('./controller/loginController');
const blogController = require('./controller/blogController');
const fetchallController = require('./controller/fetchallController');
const fetchoneController = require('./controller/fetchoneController');

const port = 3000;
app.use(bodyParser.json());


// this is very important we save the root location to a global
//variable so all the submodules can catch it
// cause it is hard to return to the previous directory
global.appRoute = path.resolve(__dirname) //just save the whole location
app.use('/')



app.listen(3000);