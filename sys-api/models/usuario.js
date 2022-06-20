'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      models.Usuario.belongsTo(models.Aluno, {
        foreignikey: "AlunoId",
      })
    }
  }
  
  Usuario.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "E-mail inválido",
        },
      },
    },
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    tipo: DataTypes.STRING,
    AlunoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};