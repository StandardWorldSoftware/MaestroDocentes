/**
 * Created by joseantoniocartagena on 8/04/16.
 */
"use strict";

module.exports = function(sequelize, DataTypes){
    var ActividadTipo = sequelize.define('ActividadTipo', {
        descripcion: {
           type: DataTypes.STRING
        }
    });
    return ActividadTipo;
}