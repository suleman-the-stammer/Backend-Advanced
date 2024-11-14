// Topic We covered 
// Setting Froms + EJS + Adding Paths of Static Files + Sending/Receiving Data From Front & Backend
//  + Dynamic Routing .
const express = require('express');
const path = require('path');
const app = express();
// These 2 Lines are for Form Setup & to use Form 
 // called Parser for Forms
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'Public')));

// This line is for EJS mean your browser will give you a view of EJS in backend 
app.set('view engine' , 'ejs'); // Means it will show EJS pages

// Setting Up our Routes 
app.get("/" , function(req, res){
    res.render("index")             // This route Will gather data from Index.ejs
});

app.get("/profile/:name/:age" , function(req, res){                   // Performing Dynamic Routing
    res.send(`Welcome Sir ${req.params.name} with the age of ${req.params.age}`)
})

app.listen(3000 , function(){
    console.log(__dirname)  // This will print using npm nodemon index.js
});
