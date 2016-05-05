/**
 * Created by joseantoniocartagena on 8/04/16.
 */

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var ComisionEstudios = sequelize.define('ComisionEstudios', {
        nombre: {
            type: DataTypes.STRING
        },
        fechaInicio: {
            type: DataTypes.DATE,
            field: 'fecha_inicio'
        },
        fechaFin: {
            type: DataTypes.DATE,
            field: 'fecha_fin'
        },
        fechaAutorizacion: {
            type: DataTypes.DATE,
            field: 'fecha_aturoizacion'
        },
        aportes: {
            type: DataTypes.STRING
        }
    });
    return ComisionEstudios;
}