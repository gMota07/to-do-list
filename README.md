# 🧠 API de Gerenciamento de Tarefas (Express)

API RESTful desenvolvida com Express para gerenciamento de tarefas,
seguindo boas práticas de arquitetura em camadas.

!["Tarefa Tela"](/img/PaginaPrincipal.jpg)
------------------------------------------------------------------------

## 🚀 Funcionalidades

-   Criar tarefas\
-   Listar tarefas\
-   Buscar por ID\
-   Atualizar tarefas\
-   Deletar tarefas\
-   Marcar como concluída

------------------------------------------------------------------------

## 🧱 Arquitetura

    src/
     ┣ controllers/
     ┣ services/
     ┣ repositories/
     ┣ routes/
     ┗ database/

------------------------------------------------------------------------

## 🛠️ Tecnologias

-   Node.js\
-   Express\
-   PostgreSQL

------------------------------------------------------------------------

## ⚙️ Como rodar

### 1. Instalar dependências

    npm install

### 2. Configurar .env

    DATABASE_URL=postgres://usuario:senha@localhost:5432/seubanco

### 3. Criar tabela

    node create-table.js

### 4. Rodar servidor

    npm run dev

Servidor: http://localhost:3333

------------------------------------------------------------------------

## 🔌 Endpoints

GET /task\
GET /task/:id\
POST /task\
PUT /task/:id\
PUT /task/marcar/:id\
DELETE /task/:id

------------------------------------------------------------------------

## 👨‍💻 Autor

Gabriel Mota
