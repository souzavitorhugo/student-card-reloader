const router = require("express").Router();

const alunosController = require("../controllers/alunos")

router.get("/", alunosController.listAll);
router.get("/:id", alunosController.findOne);
router.post("/", alunosController.create);
router.put("/:id", alunosController.update);
router.delete("/:id", alunosController.destroy);

//exportar as rotas para uilizar no app
module.exports = router;