const mongoose = require("mongoose")
 //Mongoose -- Não funcional, por enquanto
 mongoose.Promise = global.Promise
 mongoose.connect("mongodb://localhost:27017/sitemaLogin").then(() =>{
     console.log("Conectado!")
 }).catch((err) => {
     console.log("Erro ao se Conectar: "+ err)
 })

 module.exports ={
    mongoose: mongoose

 }