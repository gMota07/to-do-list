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
}

export default TaskController