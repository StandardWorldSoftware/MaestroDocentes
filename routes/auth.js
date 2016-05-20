/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var express = require('express');
var router = express.Router();
var persona = require('../models').Persona;
var multer = require('multer');
var fileName;
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './client/assets/images/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        fileName = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        cb(null, fileName);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');



router.route('/')
    .post(function(req,res){
        persona.login(req.body.user).then(function(result){
            res.send(result);
        })

    });
router.route('/register')

    .post(function(req,res){
        persona.register(req.body.user).then(function(result){
                res.send(result);
            },
            function(err){
                console.log(err);
                res.send(err);
            });
    });
router.route('/upload')
    .post(function(req,res){
        upload(req,res,function(err){
            if(err){
                res.json({error_code:1,err_desc:err});
                return;
            }
            res.send(fileName);
        });
    });

module.exports = router;
