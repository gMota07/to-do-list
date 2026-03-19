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

    async update(id, descricao, titulo) {
        //console.log(id, descricao, titulo)
        const task = await sql`
            update tarefa
                set descricao = ${descricao},
                titulo = ${titulo}
            where id = ${id}
            returning *
        `
        return task[0]
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

    async search(vrpesq){
        let task;

        // força string pra evitar erro de length
        const valor = String(vrpesq).trim();
        console.log(valor)
        if (valor === "ALL") {
            task = await sql`
                SELECT * FROM tarefa
            `;
        } 
        else if (isNaN(valor) && valor.length > 2) {
            // texto -> busca por título
            task = await sql`
                SELECT * FROM tarefa 
                WHERE titulo ILIKE ${'%' + valor + '%'}
            `;
        } 
        else if (!isNaN(valor)) {
            // número -> busca por id
            task = await sql`
                SELECT * FROM tarefa 
                WHERE id = ${Number(valor)}
            `;
        } 
        else {
            // fallback (ex: texto curto tipo "a")
            return [];
        }

        return task;
    }
}

export default TaskRepository