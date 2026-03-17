import 'dotenv/config'
import express from "express"
import tasksRoutes from "./src/routes/taskRoutes.js"

const app = express()

app.use(express.json())

app.use('/tasks', tasksRoutes)

app.listen(process.env.PORT, () =>{
    console.log(`Ligada na porta ${process.env.PORT}`)
})