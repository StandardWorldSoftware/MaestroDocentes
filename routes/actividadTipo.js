/**
 * Created by joseantoniocartagena on 11/05/16.
 */

var express = require('express');
var router = express.Router();
var actividadTipo = require('../models').ActividadTipo;

router.route('/')
    .get(function(req, res) {
        actividadTipo.findAll().then(function (result) {
            res.send(result);
        });
    })
        .post(function(req,res){
        actividadTipo.register(req.body.asignatura).then(function(result){
                res.send(result);
            },
            function(err){
                res.send(err);
            });

    });

module.exports = router;
