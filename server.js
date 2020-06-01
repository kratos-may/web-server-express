const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT ||3000
app.use(express.static(__dirname +'/public'));

// express hbs engine
hbs.registerPartials(__dirname + '/views/partials' );
app.set('view engine', 'hbs');
//helpers
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
})
//rutas
app.get("/", (req,res)=>{
    res.render('home',{
        nombre: "Edgar Querales"
    });
});
app.get("/about", (req,res)=>{
    res.render('about');
});

app.listen(port, console.log(`app corriendo en ${port}`));