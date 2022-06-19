const router = require("express").Router();

const usuariosController = require("../controllers/usuarios");

// group => /usuarios
router.post("/login", usuariosController.checkLogin);

// exporting routes to use in app
module.exports = router;
