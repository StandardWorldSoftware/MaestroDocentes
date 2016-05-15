var express = require('express');
var app = new express();
var morgan = require('morgan');
var bodyParser     = require('body-parser');
var passport = require('passport');
var methodOverride = require('method-override');
var db = require('./models');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
db.sequelize.sync().then(function(){


  app.listen(8100,  function(){
    console.log('server on port: 8100...')
  });

  var auth = require('./routes/auth');
  var asignatura = require('./routes/asignatura');
  var docenciaDirecta = require('./routes/docenciaDirecta');
  var evalGrupo = require('./routes/evalGrupo');
  var actividadTipo = require('./routes/actividadTipo');
  var producto = require('./routes/producto');
  var investigacion = require('./routes/investigacion');

  app.use('/investigacion', investigacion);
  app.use('/producto', producto);
  app.use('/actividadTipo', actividadTipo);
  app.use('/evalGrupo', evalGrupo);
  app.use('/login',auth);
  app.use('/maestros', docenciaDirecta);
  app.use('/asignatura', asignatura);
  app.use(express.static('client'));

  console.log("Connected to database");



}, function(err){

  console.log("Database connection error");
  console.log(err);
  throw err;
});