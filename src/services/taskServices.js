class TaskService{
    constructor(repository){
        this.repository = repository
    }

    async findAll(){
        return await this.repository.findAll()
    }
}

export default TaskService