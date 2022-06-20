const router = require("express").Router();

const cartaoController = require("../controllers/cartao")

router.get("/", cartaoController.listAll);
router.get("/:id", cartaoController.findOne);
// router.post("/", cartaoController.create);
// router.put("/:id", cartaoController.update);
// router.delete("/:id", cartaoController.destroy);

//exportar as rotas para uilizar no app
module.exports = router;