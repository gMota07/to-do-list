import { Router } from "express"
import TaskController from "../controllers/taskControllers.js"

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.get('/', taskController.findAll)

export default taskRoutes