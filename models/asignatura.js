/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models  = require(__dirname);
module.exports = function (sequelize, DataTypes) {


    var Asignatura = sequelize.define('Asignatura', {
        codigo: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        horas_semana: {
            type: DataTypes.FLOAT
        }
    },
        {
            classMethods: {
                register: function (asignatura) {
                    return Asignatura.build(asignatura).save();
                }
            }
        });

    return Asignatura;


}