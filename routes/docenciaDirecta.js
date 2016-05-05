/**
 * Created by joseantoniocartagena on 21/04/16.
 */
/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var express = require('express');
var router = express.Router();
var models = require('../models');

router.route('/')
    .get(function(req, res){
         models.Grupo.scope({ where: { docenteUserName: req.query.user } }).findAll(
            {include: models.Asignatura}).then(function(result){
            res.send(result);
        });
    })
    .post(function(req,res){
        console.log(req.body.grupo);
        models.Grupo.register(req.body.grupo).then(function(result){
            res.send(result);
        },
            function(err){
                res.send(err);
            });
    });

module.exports = router;
