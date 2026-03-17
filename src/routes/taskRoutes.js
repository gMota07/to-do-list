import { Router } from "express"
import TaskController from "../controllers/taskControllers.js"

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.get('/task', taskController.findAll)
taskRoutes.post('/task', taskController.create)

export default taskRoutes