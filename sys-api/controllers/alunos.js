const { Aluno, Escola } = require("../models");

exports.listAll = async (req, res) => {
    try{
        const alunos = await Aluno.findAll({
            order: [["nome", "ASC"]],
            include: Escola
        });

        res.json(alunos);
    } catch (err){
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
    