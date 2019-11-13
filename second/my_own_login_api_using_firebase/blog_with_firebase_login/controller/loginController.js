const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');





const loginapp = express.Router();

loginapp.use(bodyParser.json());
loginapp.use(bodyParser.urlencoded({ extended: true }));



loginapp.post('/login',(req,res)=>{
    //console.log(req.body.username);
    //console.log(req.body.password);
    var loginCred  = {
        username:req.body.username,
        password:req.body.password
    }
    res.json(loginCred);

    // add the credential to the firebase



})

module.exports = loginapp;