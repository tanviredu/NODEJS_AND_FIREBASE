var express = require('express'); // express framework
var logger = require('morgan');   // logger
var bodyParser = require('body-parser');
var app = express();
app.use(logger('dev'));

// we want to serve the javascript and html
// ejs means embadded javascript

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
        //console.log(req.body.breakfast);
    var breakfast = req.body.breakfast
    
    // render with necessary information
    // just like the django or laravel
    //except the differenceis that it will use
    // ejs tag rather than jinja tag
    // laravel and django  = jinja
    // nodejs  = ejs
    return res.render('result.ejs',{data:breakfast});

}); 


app.listen(3000,()=>{
    console.log("Server is started");
});