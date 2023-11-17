const express = require('express')
const Tarefas = require('../models/tarefasModel')
const {getTarefas, getTarefaPorId, postTarefa,
putTarefa, deleteTarefa} = require("../controllers/tarefaController")

const router = express.Router();

router.get('/', getTarefas)

router.get('/:id', getTarefaPorId)

router.post('/', postTarefa)

router.put("/:id", putTarefa)

router.delete('/:id', deleteTarefa)

module.exports = router;