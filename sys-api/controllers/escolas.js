const { Escola } = require("../models");

exports.listAll = async (req, res) => {
  try {
    const escolas = await Escola.findAll({
      order: [["nome", "ASC"]]
    });

    res.json(escolas);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const escola = await Escola.findOne({
      where: { id },
    });

    if (!!escola) {
      res.json(escola);
    } else {
      res.status(404).json({ error: "Escola não encontrada" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const novoEscola = await Escola.create({
      nome: req.body.nome,
      local: req.body.local,
      cnpj: req.body.cnpj,
      qtdeAlunos: req.body.qtdeAlunos
    });

    res.json(novoEscola);
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
    if (!!req.body.local) {
      payload.local = req.body.local;
    }
    if (!!req.body.cnpj) {
      payload.cnpj = req.body.cnpj;
    }
    if (!!req.body.qtdeAlunos) {
      payload.qtdeAlunos = req.body.qtdeAlunos;
    }

    const updatedEscola = await Escola.update(payload, {
      where: { id },
    });

    res.json({ success: !!updatedEscola && +updatedEscola[0] > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteEscola = await Escola.destroy({
      where: { id },
    });

    res.json({ success: !!deleteEscola });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
