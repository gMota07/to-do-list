import TaskRepository from "../repositories/taskRepository.js"
import TaskService from "../services/taskServices.js"

class TaskController{

    constructor(){
        this.service = new TaskService(new TaskRepository())
    }

    findAll = async (req, res) => {
        try{
            const task = await this.service.findAll()
            res.status(200).json(task)
        }catch(err){
            res.status(500).json({error: err.message})
        }
    }

    create = async(req,res) => {
        console.log(req.body)
        try{
            const {descricao, titulo} = req.body;
            const task = await this.service.create(descricao, titulo)
            
            res.status(201).json(task[0])
        }catch(err){
            res.status(500).json({error: err.message})
        }
    }

    update = async(req,res) => {
        try{
            const id = req.params.id
            const { descricao, titulo, concluida } = req.body
            const task = await this.service.update(id, descricao, titulo, concluida)
            //console.log()
            res.status(200).json(task[0])
        }catch(err){
            res.status(500).json({error: err.message})
        }
    }
    
    delete = async(req,res) => {
        try{
            const id = req.params.id
            const task = await this.service.delete(id)
            res.status(200).json(task)
        }catch(err){
            if(err.message === "Tarefa não encontrada"){
                return res.status(404).json({error: err.message})
            }
            res.status(500).json({error: err.message})
        }
        
    }

    marcar = async(req,res) => {
        try{
            const id = req.params.id
            const task = await this.service.marcar(id)

            res.status(200).json(task[0])
        }catch(err){
            if(isNaN(req.params.id)){
                return res.status(400).json({error: "ID inválido"})
            }
            res.status(500).json({error: err.message})
        }
    }
}

export default TaskController