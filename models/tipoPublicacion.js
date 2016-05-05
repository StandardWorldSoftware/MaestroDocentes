/**
 * Created by joseantoniocartagena on 8/04/16.
 */

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var TipoPublicacion = sequelize.define('TipoPublicacion',{
        tipo: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models) {
                TipoPublicacion.hasMany(models.Publicacion, {
                    constraints: false
                });
            }
        }
    });
    return TipoPublicacion;
}