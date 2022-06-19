'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cartao extends Model {
    static associate(models) {
      models.Cartao.belongsTo(models.Aluno, {
        foreignikey: "AlunoId",
      })
    }
  }
  
  Cartao.init({
    numero: DataTypes.INTEGER,
    senha: DataTypes.STRING,
    validade: DataTypes.DATE,
    credito: DataTypes.FLOAT,
    AlunoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cartao',
  });
  return Cartao;
};