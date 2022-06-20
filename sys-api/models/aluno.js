'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      models.Aluno.belongsTo(models.Escola, {
        foreignikey: "EscolaId",
      }),
      models.Aluno.hasMany(models.Cartao, {
        foreignikey: "AlunoId",
      }),
      models.Aluno.hasMany(models.Usuario, {
        foreignikey: "AlunoId",
      })
    }
  }
  
  Aluno.init({
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "E-mail inválido",
        },
      },
    },
    EscolaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};