'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cartao extends Model {
    static associate(models) {
      models.Aluno.hasMany(models.Usuario, {
        foreignikey: "CartaoId",
      })
    }
  }
  
  Cartao.init({
    numero: DataTypes.INTEGER,
    senha: DataTypes.STRING,
    validade: DataTypes.DATE,
    credito: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cartao',
  });
  return Cartao;
};