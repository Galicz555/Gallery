'use strict'
const express = require('express');
let app = express();

// to be able to use ejs
app.set('view engine', 'ejs');

// to use css in the assets folder
app.use('/assets', express.static('assets'))

//to use ejs (needs home.ejs)
app.get('/', function(req,res){
    res.render('home', {
        imgList: imgList,
        qs: req.query
    });
})

app.listen(3000);

let imgList = [
    {url:"http://getwallpapers.com/wallpaper/full/0/c/5/598675.jpg",
    alt:"angel-wallpaper"},
    {url:"https://images.alphacoders.com/811/811203.png",
    alt:"lancelot"},
    {url:"https://d.newsweek.com/en/full/832470/gun-goddess-miss-fortune-league-legends.jpg",
    alt:"MF"},
    {url:"http://orig11.deviantart.net/d2b7/f/2015/034/1/a/wallpaper___dj_sona_blue_by_chrisedua-d8gltz1.jpg",
    alt:"dj sona"},
];

