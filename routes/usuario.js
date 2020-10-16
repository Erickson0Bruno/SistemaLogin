const express = require('express');
const router = express.Router();
const passport = require("passport")

router.get('/', (req, res) => {
    res.render("admin/index.handlebars");

});

module.exports = router
