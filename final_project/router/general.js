const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();




public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return search('/', null, res)});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return search('isbn', req.params['isbn'], res) });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return search('author', req.params['author'], res)});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return search('title', req.params['title'], res)});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return search('review', req.params['isbn'], res)});



  public.post('/register', (req, res) => {
    const db = isValid(req.body.username);
    let note = 'is not valid (2 to 8 characters, lowercase or numbers)'
      , code = 401
      ;
    if (db === 0) note = 'is unavailable';
    else if (db === 1) {
        code = 200;
        users.push({
            username: req.body.username,
            password: req.body.password
        });
        note = 'successfully registered, you can login'
    }
    return res.status(code).json({ message: `${req.body.username} ${note}` })
});

module.exports.general = public_users;
