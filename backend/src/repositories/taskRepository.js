import sql from "../database/db.js";

class TaskRepository {
    async findAll(){
        const tasks = await sql `SELECT * FROM TAREFA`
        return tasks
    }

    async findById(id){
        const tasks = await sql`SELECT * FROM TAREFA WHERE ID=${id}`
        return tasks[0] || null
    }

    async create(descricao, titulo) {
        const tasks = await sql`
            INSERT INTO tarefa (descricao, titulo)
            VALUES (${descricao}, ${titulo})
            returning *
        `
        return tasks
    }

    async update(id, descricao, titulo, concluida) {
        const tasks = await sql`
            update tarefa
                set titulo = ${titulo},
                descricao = ${descricao},
                concluida = ${concluida}
            where id = ${id}
        `
        return tasks
    }

    async delete(id){
        const task = await sql`
            delete from tarefa where id = ${id}
            returning id
        `
        return task
    }

    async marcar(id, concluida){
        const task = await sql`
            update tarefa
                set concluida = ${concluida}
            where id = ${id}
            returning tarefa
        `
        return task
    }
}

export default TaskRepository