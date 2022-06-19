const { Escola } = require("../models");

exports.listAll = async (req, res) => {
    try{
        const escolas = await Escola.findAll({
            order: [["name", "ASC"]]
        });

        res.json(escolas);
    } catch (err){
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
    