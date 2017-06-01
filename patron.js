const express = require('express');
var router = express.Router();
var Patron = require("./models").Patron;


router.get('/', function(req, res){
    Patron.findAll().then(function(patrons) {
        res.render('all_patrons', {patrons: patrons})
    });
});

router.post('/new', function(req, res){
    Patron.create(req.body).then(function() {
        res.redirect("/all_patrons");
    });
});

router.get('/new_patron', function(req, res){
    res.render('new_patron')
});

router.get('/patron_detail/:id', function(req, res){
    Patron.findById(req.params.id).then(function(patron){
        res.render('patron_detail', {patron: patron})
    });

});

module.exports = router;