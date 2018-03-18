var express = require('express');
var router = express.Router();
var User = require('../models/User');


/* GET ALL users */
router.get('/', function(req, res, next) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.json(users);

    });
});

//registrarse
router.post('/register', function(req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
//login
router.post('/login', function(req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    User.findOne({name: name,password: password}, function(err, user){
        if(err){
            next(err);
        }
        if(!user){
            return res.status(494).send();
        }
        return res.status(200).send('estas loegadisimo!');
    });

});
router.get('/removeone/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.get('/removeall', function(req, res, next) {
    User.remove(function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/login', function(req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  User.findOne({name: name,password: password}, function(err, user){
    if(err){
      next(err);
    }
    if(!user){
      return res.status(494).send();
    }
    return res.status(200).send('estas loegadisimo!');
  });

});
//proba
router.post('/proba', function(req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    var address = req.body.address;

    var newuser = new User();
    newuser.name = name;
    newuser.password= password;
    newuser.address = address;
    newuser.save(function(err, saveuser){
      if (err){
        next(err);
      }
      res.json(saveuser);
    });

});



module.exports = router;
