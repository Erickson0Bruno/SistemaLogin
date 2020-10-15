const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();
const passport = require("passport")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.render("admin/index.handlebars");
    
});

router.get('/login', (req, res) => {
    res.render("admin/admin.handlebars");
});

router.post("/login", (req, res, next) =>{
   // console.log("Passou pelo metodo POST")
    passport.authenticate("local", {
        successRedirect : "/",
        failureRedirect : "/admin/login",
        failureFlash : true
        
    })(req,res, next)


})



module.exports = router