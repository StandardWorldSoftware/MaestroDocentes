/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);

module.exports = function (sequelize, DataTypes) {

    var Estudiante = sequelize.define('Estudiante', {
            cedula: {
                type: DataTypes.INTEGER,
                primaryKey: true
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Estudiante.belongsToMany(models.Grupo, {through: 'GrupoEstudiante'});
                },
                register:function(estudiante){
                    return Estudiante.build(estudiante).save();
                }
            }
        });
    return Estudiante;
}