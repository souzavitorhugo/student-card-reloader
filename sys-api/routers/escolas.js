const router = require("express").Router();

const escolasController = require("../controllers/escolas")

router.get("/", escolasController.listAll);
router.get("/:id", escolasController.findOne);
router.post("/", escolasController.create);
router.put("/:id", escolasController.update);
router.delete("/:id", escolasController.destroy);

//exportar as rotas para uilizar no app
module.exports = router;