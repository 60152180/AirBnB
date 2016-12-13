var express = require('express'),
    Post = require('../models/Posts');
var router = express.Router();
var mongoose = require('mongoose');

var cities = {}

router.get('/', function(req,res,next){
  Post.find({}).sort('-createdAt').exec(function(err,hosts){
    if(err){
        return next(err);
    }
    res.render('posts/index', {hosts: hosts});
  });
});

module.exports = router;