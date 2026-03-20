import 'dotenv/config'
import express from "express"
import cors from 'cors'
import path from 'path'
import tasksRoutes from "./src/routes/taskRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('API rodando 🚀')
})
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
})
app.use(tasksRoutes)

app.listen(process.env.PORT, () =>{
    console.log(`Ligada na porta ${process.env.PORT}`)
})