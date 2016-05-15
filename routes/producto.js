/**
 * Created by joseantoniocartagena on 11/05/16.
 */

var express = require('express');
var router = express.Router();
var producto = require('../models').Producto;

router.route('/')
    .get(function(req, res) {
        producto.findAll().then(function (result) {
            res.send(result);
        });
    })
    .post(function(req,res){
        producto.register(req.body.asignatura).then(function(result){
                res.send(result);
            },
            function(err){
                res.send(err);
            });

    });

module.exports = router;
