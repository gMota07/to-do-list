import TaskRepository from "../repositories/taskRepository.js"
import TaskService from "../services/taskServices.js"

class TaskController{

    constructor(){
        this.service = new TaskService(new TaskRepository())
    }

    findAll = async (req, res) => {
        const task = await this.service.findAll()
        res.status(200).json(task)
    }

    create = async(req,res) => {
        const {descricao, titulo, concluida} = req.body;
        const task = await this.service.create(descricao, titulo, concluida)
        res.status(201).json(task)
    }
}

export default TaskController