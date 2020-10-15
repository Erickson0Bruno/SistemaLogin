//loading modules
const express = require('express')
const handlebars =  require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const admin = require('./routes/admin')
const user = require('./routes/usuario')
const home = require('./routes/home')
const path = require('path')
const mongooe = require("mongoose")
const session = require("express-session")
const flash = require("connect-flash")
//const usuarios = require("./routes/usuario")
const passport = require('passport')
require("./config/authorization")(passport)
//Configurations 
    //Session
    app.use(session({
        secret: "teste",
        resave: true,
        saveUninitialized: true
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash())

    app.use(flash());
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //HadleBars 
    app.engine('handlebars', handlebars({defaultLayout : 'main'}));
    app.set('view engine', 'handlebars');
    app.set('views', 'views');
    
    //Mongoose
    mongooe.Promise = global.Promise
    mongooe.connect("mongodb://localhost:27017/sitemaLogin").then(() =>{
        console.log("Conectado!")
    }).catch((err) => {
        console.log("Erro ao se Conectar: "+ err)
    })

    //Public -- pasta do bootstrap
    app.use(express.static(path.join(__dirname, "public")));

    //Midwares
    app.use((req, res, next) =>{
        res.locals.success_mgs = req,flash("success_mgs")  
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
        next()

    })
   
//Routes
app.use('/admin', admin);
app.use('/usuario', user);
app.use('/', home)



//Others
const PORT = 8081
app.listen(PORT, function(){
    console.log("Teste de Conexão")
})
