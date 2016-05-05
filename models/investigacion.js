var models = require(__dirname);

module.exports = function (sequelize, DataTypes) {
    var Investigacion = sequelize.define('Investigacion', {
        nombre: {
            type: DataTypes.STRING
        },
        idActividad: {
            type: DataTypes.STRING
        },
        horas_semana: {
            type: DataTypes.INTEGER
        }
    },
    {
        classMethods: {
            associate: function(models){
                Investigacion.belongsToMany(models.Investigador, {through: 'GrupoInvestigacion'});
                Investigacion.belongsToMany(models.Producto, {through: 'InvestigacionProducto'});
                Investigacion.belongsTo(models.ActividadTipo);
            }
        }
    });
    return Investigacion;

}