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
      order: [["nome", "ASC"]],
    });

    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findOne({
      where: { id },
    });

    if (!!usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuario não encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const novoUsuario = await Usuario.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      senha: req.body.senha,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      tipo: req.body.tipo,
      CartaoId: req.body.CartaoId || 1,
      AlunoId: req.body.AlunoId || 1
    });

    res.json(novoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const payload = {};
    if (!!req.body.nome) {
      payload.nome = req.body.nome;
    }
    if (!!req.body.nome) {
      payload.sobrenome = req.body.sobrenome;
    }
    if (!!req.body.email) {
      payload.email = req.body.email;
    }
    if (!!req.body.senha) {
      payload.senha = req.body.senha;
    }
    if (!!req.body.cpf) {
      payload.cpf = req.body.cpf;
    }
    if (!!req.body.telefone) {
      payload.telefone = req.body.telefone;
    }
    if (!!req.body.tipo) {
      payload.tipo = req.body.tipo;
    }
    if (!!req.body.CartaoId) {
      payload.CartaoId = req.body.CartaoId;
    }
    if (!!req.body.AlunoId) {
      payload.AlunoId = req.body.AlunoId;
    }

    const updatedUsuario = await Usuario.update(payload, {
      where: { id },
    });

    res.json({ success: !!updatedUsuario && +updatedUsuario[0] > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUsuario = await Usuario.destroy({
      where: { id },
    });

    res.json({ success: !!deleteUsuario });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};