const Tarefas = require("../models/tarefasModel");
const asyncHandler = require('express-async-handler')

const getTarefas = asyncHandler(async(req, res) => {
    try { 
        const tarefas = await Tarefas.find({});
        res.status(200).json(tarefas)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getTarefaPorId =  asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const tarefa = await Tarefas.findById(id);
        res.status(200).json(tarefa)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const postTarefa = asyncHandler(async (req, res) => {
    try{
        const tarefa = await Tarefas.create(req.body)
        res.status(200).json(tarefa)
    }
    catch (error){
        res.status(500)
        throw new Error(error.message)
    }
})

const putTarefa = asyncHandler(async (req, res) => {
    try{
        const{id} = req.params;
        const tarefa = await Tarefas.findByIdAndUpdate(id, req.body);
        if(!tarefa) {
            return res.status(404).json({message: "Tarefa não encontrada"})
        }
        res.status(200).json(tarefa);
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteTarefa = asyncHandler(async (req, res) => {
    try{
        const {id} = await req.params;
        const tarefa = await Tarefas.findByIdAndDelete(id);
        if(!tarefa){
            res.status(404)
            throw new Error({message: "Tarefa não encontrada"})
        }
        res.status(200).json(tarefa)
    }
    catch (error){
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getTarefas,
    getTarefaPorId,
    postTarefa,
    putTarefa,
    deleteTarefa
}