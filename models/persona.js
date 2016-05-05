/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);

module.exports = function (sequelize, DataTypes) {

    var Persona = sequelize.define('Persona', {

        userName: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombres: {
            type: DataTypes.STRING,
            field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        apellidos: {
            type: DataTypes.STRING,
            field: 'last_name'
        },
        tipo: {
            type: DataTypes.STRING,
        },
        area: {
            type: DataTypes.STRING
        },
        dedicacion: {
            type: DataTypes.STRING //Dedicación en horas
        },
        urlFirma: {
            type: DataTypes.STRING, //Firma de la persona,
            field: 'url_firma'
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function (models) {
                Persona.belongsToMany(models.Observaciones, {through: 'ObservacionesPersona'});
                Persona.hasMany(models.Investigacion);
                Persona.hasMany(models.ActividadesExt, {as : 'firma'});

            },
            login: function(user){
               return  Persona.find({
                    where:{
                        userName:user.userName,
                        password:user.password
                    }
                }).then(function(user){
                   if(user)
                   {
                       return "exits";
                   }
                   return "error";
               })
            },
            register:function(user){
                return Persona.build(user).save();
            }
        }
    });
    return Persona;
}