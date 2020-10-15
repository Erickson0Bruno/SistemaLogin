const express = require('express');
const router = express.Router();
const passport = require("passport")

router.get('/', (req, res) => {
    res.render("admin/index.handlebars");
    
});

router.get('/login', (req, res) => {
    res.render("admin/admin.handlebars");
});

router.post("/login", (req, res, next) =>{
    passport.authenticate("local", {
        successRedirect : "/",
        failureRedirect : "/admin/login",
        failureFlash : true
        
    })(req,res, next)


})



module.exports = router