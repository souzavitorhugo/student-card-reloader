const { Aluno, Cartao } = require("../models");

exports.listAll = async (req, res) => {
    try{
        const cartao = await Cartao.findAll({
            order: [["numero", "ASC"]],
            include: Aluno
        });

        res.json(cartao);
    } catch (err){
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
    