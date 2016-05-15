var models = require(__dirname);

module.exports = function (sequelize, DataTypes) {
    var Investigacion = sequelize.define('Investigacion', {
        nombre: {
            type: DataTypes.STRING
        },
        horas_semana: {
            type: DataTypes.INTEGER
        },
        productos: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models){
                Investigacion.belongsToMany(models.Investigador, {through: 'GrupoInvestigacion'});
                Investigacion.belongsToMany(models.Producto, {through: models.InvestigacionProducto});
                Investigacion.belongsTo(models.ActividadTipo);
            },
            register: function(investigacion){
                return Investigacion.build(investigacion).save();
            }
        }
    });
    return Investigacion;

}