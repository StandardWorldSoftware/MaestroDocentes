/**
 * Created by joseantoniocartagena on 8/04/16.
 */
var models  = require(__dirname);

module.exports = function(sequelize, DataTypes){

    var Publicacion = sequelize.define('Publicacion', {
        nombre: {
            type: DataTypes.STRING
        },
        autor: {
            type: DataTypes.STRING
        },
        coautor: {
            type: DataTypes.STRING
        }
    });
    return Publicacion;
};
