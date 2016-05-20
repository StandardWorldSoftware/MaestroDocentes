/**
 * Created by joseantoniocartagena on 11/05/16.
 */

var express = require('express');
var router = express.Router();
var models = require('../models');

router.route('/')
    .get(function(req, res){

        models.Investigacion.scope({ where: { docenteUserName: req.query.user } }).findAll(
            { include: [{ all: true }]}
        ).then(function(result){
            res.send(result);
        });
    })
    .post(function(req,res){
        var investigacion = req.body.grupo.investigacion;
        models.Investigacion.register(investigacion).then(function(result){
                res.send(result);
            },
            function(err){
                res.send(err);
            });
    });

module.exports = router;
