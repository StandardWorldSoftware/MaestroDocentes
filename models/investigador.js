/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);


module.exports = function (sequelize, DataTypes) {


    var Investigador = sequelize.define('Investigador', {
        tipoVinculo: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models){
                Investigador.belongsToMany(models.Investigacion, {through: 'GrupoInvestigacion'});
            }
        }
    });
    return Investigador;
}