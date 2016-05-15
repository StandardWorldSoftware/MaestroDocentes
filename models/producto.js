/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var Producto = sequelize.define('Producto', {
        nombre: {
            type: DataTypes.STRING,
            unique: true
        },
        valor: {
            type: DataTypes.FLOAT
        },
        descripcion: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models){
                Producto.belongsToMany(models.Investigacion, {through: models.InvestigacionProducto});
            },
            register: function (producto) {
                return Producto.build(producto).save();
            }
        }
    });
    return Producto;
}