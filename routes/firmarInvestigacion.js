/**
 * Created by joseantoniocartagena on 24/04/16.
 */
var express = require('express');
var router = express.Router();
var investigacion = require('../models').Investigacion;

router.route('/')

    .post(function(req,res){
        investigacion.findById(req.body.id).then(function(investigacionId) {
            if (investigacionId) { // if the record exists in the db
                investigacionId.updateAttributes({
                    firmaUserName: req.body.persona
                }).then(function(result){
                    res.send(result);
                });
            }
        });
        res.send("ok");
    });

module.exports = router;
