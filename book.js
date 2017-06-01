const express = require('express');
var router = express.Router();
var Book = require("./models").Book;


router.get('/', function (req, res) {
    Book.findAll().then(function(books){
        res.render('all_books', {books: books})
    })

});

router.post('/', function(req, res){
    Book.create(req.body).then(function(){
        res.redirect("/all_books");
    });
});

router.get('/new_book', function(req, res, next){
    res.render('new_book', {book: Book.build()})
});

router.get('/return_book', function(req, res){
    res.render('return_book')
});

router.get('/checked_books', function(req, res){
    res.render('checked_books')
});

router.get('/overdue_books', function(req, res) {
    res.render('overdue_books')
});

router.get('/book_detail', function(req, res){
    res.render('book_detail')
});

module.exports = router;