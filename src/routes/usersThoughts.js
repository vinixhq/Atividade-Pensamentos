const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

// Rota para cadastrar os usuarios.
router.post("/users", UserController.createUsers);

// Rota para encontrar todos os registros dos usuarios cadastrados na aplicação.
router.get("/users", UserController.findAllUsers);

// Rota para encontrar um registro especifico dos usuarios cadastrados na aplicação.
router.get("/users/:id", UserController.findUser);

// Rota para atualizar um registro registro especifico dos usuarios cadastrados na aplicação.
router.put("/users/:id", UserController.updateUser);

// Rota para deletar um registro especifico dos usuarios cadastrados na aplicação.
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;