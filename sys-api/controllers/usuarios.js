const jwt = require("jsonwebtoken");

const { TOKEN_SECRET } = require("../env");
const { Usuario } = require("../models");

exports.checkLogin = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({
    attributes: ["id", "nome", "email", "cpf", "telefone", "tipo"],
    where: { email, senha },
    raw: true,
  });

  if (!!usuario) {
    const token = jwt.sign({ ...usuario, sub: usuario.id }, TOKEN_SECRET);

    res.json({
      usuario,
      token,
      success: true,
      error: false,
    });
  } else {
    res.status(401).json({ error: "Usuário e/ou Senha inválido(s)" });
  }
};

exports.listAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      order: [["nome", "ASC"]]
    });

    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};