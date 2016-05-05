/**
 * Created by joseantoniocartagena on 24/04/16.
 */
var express = require('express');
var router = express.Router();
var asignatura = require('../models').Asignatura;

router.route('/')
    .get(function(req, res){
        asignatura.findAll().then(function(result){
            res.send(result);
        });


    })
    .post(function(req,res){
        asignatura.register(req.body.asignatura).then(function(result){
                console.log(result)
                res.send(result);
            },
            function(err){
                console.log(err);
                res.send(err);
            });
    });

module.exports = router;
