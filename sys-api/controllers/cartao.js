const { Aluno, Cartao } = require("../models");

exports.listAll = async (req, res) => {
  try {
    const cartao = await Cartao.findAll({
      order: [["numero", "ASC"]]
    });

    res.json(cartao);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const cartao = await Cartao.findOne({
      where: { id },
    });

    if (!!cartao) {
      res.json(cartao);
    } else {
      res.status(404).json({ error: "Cartão não encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const novoCartao = await Cartao.create({
      numero: req.body.numero,
      senha: req.body.senha,
      validade: req.body.validade,
      credito: req.body.credito
    });

    res.json(novoCartao);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const payload = {};
    if (!!req.body.numero) {
      payload.numero = req.body.numero;
    }
    if (!!req.body.senha) {
      payload.senha = req.body.senha;
    }
    if (!!req.body.validade) {
      payload.validade = req.body.validade;
    }
    if (!!req.body.credito) {
      payload.credito = req.body.credito;
    }

    const updatedCartao = await Cartao.update(payload, {
      where: { id },
    });

    res.json({ success: !!updatedCartao && +updatedCartao[0] > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteCartao = await Cartao.destroy({
      where: { id },
    });

    res.json({ success: !!deleteCartao });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
