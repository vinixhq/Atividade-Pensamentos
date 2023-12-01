const express = require("express");
const ThoughtsController = require("../controllers/ThoughtsController");
const router = express.Router();

// Rota responsável por redirecionar para página dashboard.
router.get("/thoughts/dashboard", ThoughtsController.dashboard);

// Rota responsável por redirecionar para a pagina de cadastrar o pensamento.
router.get("/thoughts-create", ThoughtsController.registerThought);

// Rota para cadastrar os pensamentos na aplicação.
router.post("/thoughts/create", ThoughtsController.createThought);

router.post("/thoughts/edit", ThoughtsController.showPageEditThought);
router.get("/thoughts/update/:id", ThoughtsController.updateThought);

// Rota para deletar um registro especifico dos pensamentos cadastrados na aplicação.
router.post("/thoughts/remove/:id", ThoughtsController.deleteThought);

module.exports = router;