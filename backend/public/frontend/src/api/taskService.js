const BASE_URL = 'http://localhost:3333';

export const taskService = {
  async findAll() {
    const res = await fetch(`/task`);
    if (!res.ok) throw new Error('Erro ao buscar tarefas');
    return res.json();
  },

  async findByID(id) {
    const res = await fetch(`/task/${id}`);
    if (!res.ok) throw new Error('Erro ao buscar tarefa');
    return res.json();
  },

  async create(data) {
    const res = await fetch(`/task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Erro ao criar tarefa');
    return res.json();
  },

  async update(id, data) {
    const res = await fetch(`/task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erro ao atualizar tarefa');
    return res.json();
  },

  async delete(id) {
    const res = await fetch(`/task/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Erro ao deletar tarefa');
  },

  async marcar(id) {
    const res = await fetch(`/task/marcar/${id}`, {
      method: 'PUT'
    });
    if (!res.ok) throw new Error('Erro ao marcar tarefa');
    return res.json();
  },

  async search(vrpesq){
    const res = await fetch(`/task/filtrar/${vrpesq}`,{
      method: 'GET'
    })
    if (!res.ok) throw new Error("Erro ao buscar tarefa")
    return res.json()
  }
};