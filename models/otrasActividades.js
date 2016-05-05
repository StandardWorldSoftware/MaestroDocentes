/**
 * Created by joseantoniocartagena on 6/04/16.
 */

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var OtrasActividades = sequelize.define('OtrasActividades', {
        actividad: {
            type: DataTypes.STRING
        },
        tiempoDedicacion: {
            type: DataTypes.INTEGER,
            field: 'tiempo_dedicacion'
        },
        descripcion: {
            type: DataTypes.STRING
        },
        archivo: {
            type: DataTypes.STRING
        }
    });

    return OtrasActividades;
};