import sql from "../database/db.js";

class TaskRepository {
    async findAll(){
        const tasks = await sql `SELECT * FROM TAREFA`
        return tasks
    }
}

export default TaskRepository