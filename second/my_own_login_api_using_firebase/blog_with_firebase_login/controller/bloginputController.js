const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');





const bloginputapp = express.Router();

bloginputapp.use(bodyParser.json());
bloginputapp.use(bodyParser.urlencoded({ extended: true }));





module.exports = bloginputapp;