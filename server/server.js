require('./config/config');

const express  =  require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/usuario/:id',function(req,res){
    res.json("works")
});

app.post('/usuario',function(req,res){
   let body = req.body;
    res.json({
        body
    });

});

app.put('/usuario',function(req,res){
    res.json("works")
});

app.delete('/usuario',function(req,res){
    res.json("works")
});

app.listen(process.env.PORT,()=>{
    console.log('funciona');
});