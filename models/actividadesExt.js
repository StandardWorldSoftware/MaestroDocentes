/**
 * Created by joseantoniocartagena on 8/04/16.
 */
"use strict";
var models  = require(__dirname);
module.exports = function(sequelize, DataTypes){
    var ActividadesExt = sequelize.define('ActividadesExt', {
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
        tiempoDedicacion: {
            type: DataTypes.STRING,
            field: 'tiempo_dedicacion'
        }
    });
    return ActividadesExt;

}