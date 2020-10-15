const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
//const { Strategy } = require("passport");

//Modelo de Usuario
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")

 //Passport Midware
 
module.exports = function(passport){
   
    passport.use(new localStrategy({usernameField: 'email', passwordField: "password"}, (email, senha, done) =>{

        Usuario.findOne({email: email}).then((usuario) => {
            if(!usuario){
                return done(null, false, {message: "Esta conta nao existe"})
            }

            bcrypt.compare( senha, usuario.senha, (erro, batem) =>{
                if(batem){
                    return done(null, usuario)
                }else{
                    return done(null, false, {message:"Senha incorreta"})
                }
            })

        })

    }))

    passport.serializeUser((user, done) => {
        done(null, usuario.id)
    })

    passport.deserializeUser((id, done) =>{
        Usuario.findById(id, (err, usuario) =>{
            done(err, user)
        })
    })




};