const router = require("express").Router();

const usuariosController = require("../controllers/usuarios");

// group => /usuarios
router.post("/login", usuariosController.checkLogin);
router.get("/", usuariosController.listAll);
router.get("/:id", usuariosController.findOne);
router.post("/", usuariosController.create);
router.put("/:id", usuariosController.update);
router.delete("/:id", usuariosController.destroy);

// exporting routes to use in app
module.exports = router;
