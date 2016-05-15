/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var InvestigacionProducto = sequelize.define('InvestigacionProducto', {
            cantidad: {
                type: DataTypes.INTEGER
            }
        },
        {
            classMethods: {
                register: function (producto) {
                    return Producto.build(producto).save();
                }
            }
        });
    return InvestigacionProducto;
}