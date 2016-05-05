/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
    var TipoEstudio = sequelize.define('TipoEstudio', {
        nombre: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models){
                TipoEstudio.hasMany(models.ComisionEstudios);
            }
        }
    });
    return TipoEstudio;
};