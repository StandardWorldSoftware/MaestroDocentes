/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var Producto = sequelize.define('Producto', {
        nombre: {
            type: DataTypes.STRING
        },
        codigo: {
            type: DataTypes.STRING
        },
        valor: {
            type: DataTypes.FLOAT
        },
        descripcion: {
            type: DataTypes.STRING
        },
        cantidad: {
            type: DataTypes.INTEGER
        }
    },
    {
        classMethods: {
            associate: function(models){
                Producto.belongsToMany(models.Investigacion, {through: 'InvestigacionProducto'});
            }
        }
    });
    return Producto;
}