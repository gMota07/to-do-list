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
}

export default TaskService