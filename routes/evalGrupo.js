/**
 * Created by joseantoniocartagena on 24/04/16.
 */
var express = require('express');
var router = express.Router();
var grupo = require('../models').Grupo;

router.route('/')
    .get(function(req, res){
        grupo.scope({where: {CodigoAsignatura : req.query.codigo}}).findAll().then(function(result){
            res.send(result);
        });


    })
    .post(function(req,res){
        grupo.findById(req.body.id).then(function(grupoId) {
            if (grupoId) { // if the record exists in the db
                grupoId.updateAttributes({
                    evaluacionJefe: req.body.nota
                }).then(function(result){
                    res.send(result);
                });
            }
        });
        res.send("ok");
    });

module.exports = router;
