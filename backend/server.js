import 'dotenv/config'
import express from "express"
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import tasksRoutes from "./src/routes/taskRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

// 🔥 resolver caminho correto no Render
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 🔥 caminho absoluto da pasta public
const publicPath = path.join(__dirname, 'public')

// 🔥 servir arquivos estáticos
app.use(express.static(publicPath))

// 🔥 rota principal (FORÇADA)
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

// 🔥 rotas API
app.use(tasksRoutes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Ligada na porta ${PORT}`)
})