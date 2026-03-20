# 🧠 API de Gerenciamento de Tarefas (Express)

API RESTful desenvolvida com Express para gerenciamento de tarefas,
seguindo boas práticas de arquitetura em camadas.

## Tela Inicial
!["Tela de Tarefas"](/img/Tela.jpg)
## Pesquisa por ID
!["Tela de Pesquisa"](/img/TelaPesquisa.jpg)
## Pesquisa por Titulo
!["Tela de Pesquisa"](/img/TelaPesqNome.jpg)
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
GET /task/filtrar/:vrpesq\
POST /task\
PUT /task/:id\
PUT /task/marcar/:id\
DELETE /task/:id

------------------------------------------------------------------------

## 👨‍💻 Autor

Gabriel Mota
