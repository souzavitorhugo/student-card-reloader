const { Aluno, Escola } = require("../models");

exports.listAll = async (req, res) => {
  try {
    const alunos = await Aluno.findAll({
      order: [["nome", "ASC"]],
      include: Escola
    });

    res.json(alunos);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const aluno = await Aluno.findOne({
      where: { id },
      include: Escola
    });

    if (!!aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ error: "Aluno não encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const novoAluno = await Aluno.create({
      nome: req.body.nome,
      email: req.body.email,
      EscolaId: req.body.EscolaId || 1,
    });

    res.json(novoAluno);
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
      payload.name = req.body.nome;
    }
    if (!!req.body.email) {
      payload.email = req.body.email;
    }
    if (!!req.body.EscolaId) {
      payload.EscolaId = req.body.EscolaId;
    }

    const updatedAluno = await Aluno.update(payload, {
      where: { id },
    });

    res.json({ success: !!updatedAluno && +updatedAluno[0] > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteAluno = await Aluno.destroy({
      where: { id },
    });

    res.json({ success: !!deleteAluno });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
