/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);

module.exports = function (sequelize, DataTypes) {

    var Grupo = sequelize.define('Grupo', {
        numero: {
                type: DataTypes.INTEGER,
                unique: 'compositeIndex'
        },
            CodigoAsignatura: {
            type: DataTypes.STRING,
            unique: 'compositeIndex'
        },
            evaluacionJefe: {
                type: DataTypes.DECIMAL
            }
        },
        {
            classMethods: {
                associate: function (models) {
                   Grupo.belongsToMany(models.Estudiante, {through: 'GrupoEstudiante'});
                   Grupo.belongsTo(models.Asignatura, {foreignKey: 'CodigoAsignatura'});
                   Grupo.belongsTo(models.Persona, {as: 'docente'});
                },
                register:function(grupo){
                    return Grupo.build(grupo).save();
                },
                delete:function(grupo){
                    return Grupo.destroy(grupo);
                }
            }
        });
    return Grupo;
}