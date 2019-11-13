var express = require('express'); // express framework
var logger = require('morgan');   // logger
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
var app = express();
app.use(logger('dev'));



// we make a middleware right here after that you can code in other file
// create authentiacate middleware

function isAuthenticate(){
    // suppose you will give an access to a page 
    // but before you do that this will pass
    // through this function  that we call middleware
    // if he pass then go to the page
    // in the middlware we have to do a 
    //additional parameter next so after that 
    // it will pass the result to the next
}

var serviceAccount = require('./sdk.json')

var firebaseadmin = admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL:'https://nodefirebase-87b89.firebaseio.com'
    
})

// we want to serve the javascript and html
// ejs means embadded javascript

// we will make a route to the homecomingQUeen page
// but to access it you have to go through  a middleware
// the rule of adding a  middleware is in a route function
//first is the url then then callback function
//middeware sits between them

app.get('/homecoming-queen',isAuthenticate,(req,res)=>{
    res.render('homecomingQueen.ejs');
})

app.set('view engine','ejs'); // we no longer use the normal html and css
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static('views')); // this will server all the css and javascript in there recursively and also ejs use normal html no tnsn
app.set('views',__dirname+'/views'); // when we show the word
                                    // views we ment this path


app.get('/',(req,res)=>{
    //res.send("<h1>prep for prep</h1>");
    res.render('home.ejs');
});

app.post('/',(req,res)=>{
 // we are going to add something else
}); 


app.listen(3000,()=>{
    console.log("Server is started");
});