/**
 * Created by joseantoniocartagena on 8/04/16.
 */

module.exports = function (sequelize, DataTypes) {
    var AsesoriaProyecto = sequelize.define('AsesoriaProyecto', {
        titulo: {
            type: DataTypes.STRING
        },
        aspectosRelevantes: {
            type: DataTypes.STRING,
            field: 'aspectos_relevantes'
        }
    });
    return AsesoriaProyecto;
}