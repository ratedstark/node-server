require('./config/config');

const express  =  require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/usuario/:id',function(req,res){
    res.json("get works")
});

app.post('/',function(req,res){
   res.json("post");
});

app.put('/',function(req,res){
    res.json("put works")
});

app.delete('/',function(req,res){
    res.json(" delete works")
});

app.listen(process.env.PORT,()=>{
    console.log('funciona');
});