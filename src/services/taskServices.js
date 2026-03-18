class TaskService{
    constructor(repository){
        this.repository = repository
    }

    async findAll(){
        return await this.repository.findAll()
    }

    async create(descricao, titulo, concluida){
        return await this.repository.create(descricao, titulo, concluida)
    }

    async update(id, descricao, titulo, concluida){
        return await this.repository.update(id, descricao, titulo, concluida)
    }

    async delete(id){
        return await this.repository.delete(id)
    }

    async marcar(id){
        const tarefa = await this.repository.findById(id)
        if(!tarefa){
            throw new Error("Tarefa não encontrada.")
        }

        const novoStatus = !tarefa.concluida
        return await this.repository.marcar(id, novoStatus)
    }
}

export default TaskService