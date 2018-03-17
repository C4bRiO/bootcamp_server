'use strict';
module.exports = (sequelize, DataTypes) => {
  var Evento = sequelize.define('Evento', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    direccion: DataTypes.TEXT
  }, {});
  Evento.associate = function(models) {
    // associations can be defined here
  };
  return Evento;
};