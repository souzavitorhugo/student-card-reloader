const router = require("express").Router();
const { requireAuthMiddleware } = require("../auth");

const usuariosController = require("../controllers/usuarios");

// group => /usuarios
router.post("/login", usuariosController.checkLogin);
router.get("/", requireAuthMiddleware, usuariosController.listAll);
router.get("/:id", requireAuthMiddleware, usuariosController.findOne);
router.post("/", requireAuthMiddleware, usuariosController.create);
router.put("/:id", requireAuthMiddleware, usuariosController.update);
router.delete("/:id", requireAuthMiddleware, usuariosController.destroy);

// exporting routes to use in app
module.exports = router;
