'use strict'
const express = require('express');
let app = express();

// to be able to use ejs
app.set('view engine', 'ejs');

// to use css in the assets folder
app.use('/assets', express.static('assets'))

//to use ejs (needs home.ejs)
app.get('/', function(req,res){
    res.render('home');
})

app.listen(3000);