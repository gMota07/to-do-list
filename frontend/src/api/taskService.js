const BASE_URL = 'http://localhost:3333';

export const taskService = {
  async findAll() {
    const res = await fetch(`${BASE_URL}/task`);
    if (!res.ok) throw new Error('Erro ao buscar tarefas');
    return res.json();
  },

  async create(data) {
    const res = await fetch(`${BASE_URL}/task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erro ao criar tarefa');
    return res.json();
  },

  async update(id, data) {
    const res = await fetch(`${BASE_URL}/task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erro ao atualizar tarefa');
    return res.json();
  },

  async delete(id) {
    const res = await fetch(`${BASE_URL}/task/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Erro ao deletar tarefa');
    return res.json();
  },

  async marcar(id) {
    const res = await fetch(`${BASE_URL}/task/marcar/${id}`, {
      method: 'PUT',
    });
    if (!res.ok) throw new Error('Erro ao marcar tarefa');
    return res.json();
  },
};
