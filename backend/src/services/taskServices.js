class TaskService{
    constructor(repository){
        this.repository = repository
    }

    async findAll(){
        return await this.repository.findAll()
    }
    async findById(id){
        return await this.repository.findById(id)
    }

    async create(descricao, titulo){
        if(!descricao){
            descricao = ""
        }
        return await this.repository.create(descricao, titulo)
    }

    async update(id, descricao, titulo){
        return await this.repository.update(id, descricao, titulo)
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