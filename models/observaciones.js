/**
 * Created by joseantoniocartagena on 19/04/16.
 */
/**
 * Created by joseantoniocartagena on 6/04/16.
 */

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var Observaciones = sequelize.define('Observaciones', {
        tipo: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models){
                Observaciones.belongsToMany(models.Persona, {through: 'ObservacionesPersona'});
            }
        }
    });

    return Observaciones;
};