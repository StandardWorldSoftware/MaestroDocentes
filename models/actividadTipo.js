/**
 * Created by joseantoniocartagena on 8/04/16.
 */
"use strict";

module.exports = function(sequelize, DataTypes){
    var ActividadTipo = sequelize.define('ActividadTipo', {
        descripcion: {
           type: DataTypes.STRING,
           unique: true
        },
        horas_semana: {
            type: DataTypes.INTEGER
        }
    },
        {
            classMethods: {
                register: function (actividad) {
                    return ActividadTipo.build(actividad).save();
                }
            }
        });
    return ActividadTipo;
}