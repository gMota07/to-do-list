import 'dotenv/config'
import express from "express"
import cors from 'cors'
import path from 'path'
import tasksRoutes from "./src/routes/taskRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
})
app.use(tasksRoutes)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`Ligada na porta ${PORT}`)
})