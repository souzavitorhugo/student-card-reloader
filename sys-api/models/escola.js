'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Escola extends Model {
    static associate(models) {
      models.Escola.hasMany(models.Aluno, {
        foreignikey: "EscolaId",
      })
    }
  }
  Escola.init({
    nome: DataTypes.STRING,
    local: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    qtdeAlunos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Escola',
  });
  return Escola;
};