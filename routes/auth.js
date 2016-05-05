/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var express = require('express');
var router = express.Router();
var persona = require('../models').Persona;
router.route('/')
    .post(function(req,res){
        persona.login(req.body.user).then(function(result){
            res.send(result);
        })

    });
router.route('/register')

    .post(function(req,res){
        persona.register(req.body.user).then(function(result){
                console.log(req.body.user);
                res.send(result);
            },
            function(err){
                console.log(err);
                res.send(err);
            });
    });

module.exports = router;
