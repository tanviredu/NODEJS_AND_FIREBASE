const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
app = express();
const loginController = require('./controller/loginController');
const blogController = require('./controller/blogController');
const fetchallController = require('./controller/fetchallController');
const fetchoneController = require('./controller/fetchoneController');
const blogInputController = require('./controller/bloginputController');

const port = 3000;
app.use(bodyParser.json());


// this is very important we save the root location to a global
//variable so all the submodules can catch it
// cause it is hard to return to the previous directory
//global.appRoute = path.resolve(__dirname) //just save the whole location


app.use('/',loginController);
//app.use('/blog',blogController);
//app.use('/bloginput',blogInputController);
//app.use('/fetchall',fetchallController);
//app.use('/fetchone',fetchoneController);

// setting all the static file javascript and css all
app.use(express.static(__dirname+'/views'));



app.listen(3000,()=>{
    console.log("Server Started");
});