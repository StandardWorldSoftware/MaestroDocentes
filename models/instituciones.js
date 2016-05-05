/**
 * Created by joseantoniocartagena on 8/04/16.
 */
module.exports = function (sequelize, DataTypes) {

    var Instituciones = sequelize.define('Instituciones', {
        tipo: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        }
    },
    {
        classMethods: {
            associate: function(models){
                Instituciones.hasMany(models.ComisionEstudios);
            }
        }
    });
    return Instituciones;
}