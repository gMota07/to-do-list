import sql from "../database/db.js";

class TaskRepository {
    async findAll(){
        const tasks = await sql `SELECT * FROM TAREFA`
        return tasks
    }

    async create(descricao, titulo, concluida){
        const tasks = await sql `INSERT INTO TAREFA(${descricao}, ${titulo} , ${concluida})`
        return tasks
    }
}

export default TaskRepository