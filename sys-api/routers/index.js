const { requireAuthMiddleware } = require("../auth");

module.exports = function (app) {
  app.use("/usuarios", require("./usuarios"));
  app.use("/alunos", requireAuthMiddleware, require("./alunos"));
  app.use("/escolas", requireAuthMiddleware, require("./escolas"));
  app.use("/cartao", requireAuthMiddleware, require("./cartao"));
};