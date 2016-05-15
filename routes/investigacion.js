/**
 * Created by joseantoniocartagena on 11/05/16.
 */

var express = require('express');
var router = express.Router();
var models = require('../models');

router.route('/')
    .get(function(req, res){

        models.Investigador.scope({ where: { PersonaUserName: req.query.user } }).findAll({
            include: [{
                model: models.Investigacion
            }]
        }).then(function(result){
            res.send(result);
        });
    })
    .post(function(req,res){
        var investigacion = req.body.grupo.investigacion;
        var investigador = req.body.grupo.investigador;
        models.Investigacion.register(investigacion).then(function(result){
                models.Investigador.register(investigador).then(function(investigador){
                        investigador.addInvestigacion(result.id).then(function(response){
                            res.send(response);
                        });
                    },
                    function(err){
                        res.send(err);
                    });
            },
            function(err){
                res.send(err);
            });
    });

module.exports = router;
