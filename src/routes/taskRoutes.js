import { Router } from "express"
import TaskController from "../controllers/taskControllers.js"

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.get('/task', taskController.findAll)
taskRoutes.post('/task', taskController.create)
taskRoutes.put('/task/:id', taskController.update)
taskRoutes.delete('/task/:id', taskController.delete)
taskRoutes.put('/task/marcar/:id', taskController.marcar)

export default taskRoutes