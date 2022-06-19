const express = require("express");
const cors = require("cors");

const { Aluno, Escola } = require("./models");

const routes = require("./routers");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.json({ ok: true });
});

routes(app);

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/`);
});