const mongoose = require('mongoose')

const tarefasSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Digite o nome da Tarefa"]
        },
        descricao: {
            type: String,
            required: [true, "Digite a descricao da Tarefa"]
        },
        dificuldade: {
            type: String,
            required: false,
            default: "Baixa"
        }
    },
    {
        timestamps: true
    }
)

const Tarefas = mongoose.model("Tarefas", tarefasSchema)

module.exports = Tarefas;