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
        const task = await this.repository.findById(id)
        if(!task){
            throw new Error("Tarefa não encontrada.")
        }

        const novoStatus = !task.concluida
        return await this.repository.marcar(id, novoStatus)
    }

    async search(vrpesq){
        return await this.repository.search(vrpesq)
    }
}

export default TaskService