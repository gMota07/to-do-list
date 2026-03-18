const BASE_URL = 'http://localhost:3333';

const taskService = {
  async findAll() {
    const res = await fetch(`${BASE_URL}/task`);
    if (!res.ok) throw new Error('Erro ao buscar tarefas');
    return res.json();
  },
  async create(data) {
    const res = await fetch(`${BASE_URL}/task`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        titulo: document.getElementById("new-titulo").value,
        descricao: document.getElementById("new-desc").value
        })
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
    const res = await fetch(`${BASE_URL}/task/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Erro ao deletar tarefa');
    return res.json();
  },
  async marcar(id) {
    const res = await fetch(`${BASE_URL}/task/marcar/${id}`, { method: 'PUT' });
    console.log("res: ",res)
    if (!res.ok) throw new Error('Erro ao marcar tarefa');
    return res.json();
  },
};

// Toast
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// Render
async function loadTasks() {
  const list = document.getElementById('task-list');
  try {
    const tasks = await taskService.findAll();
    if (!tasks.length) {
      list.innerHTML = '<p class="empty">nenhuma tarefa ainda.</p>';
      return;
    }
    list.innerHTML = tasks.map(task => `
      <div class="task-item ${task.completedAt || task.completed ? 'done' : ''}" id="task-${task.id}">
        <button class="check-btn" onclick="toggleTask('${task.id}')" titulo="Marcar como concluída">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="task-body">
          <div class="task-titulo">${esc(task.titulo)}</div>
          ${task.descricao ? `<div class="task-desc">${esc(task.descricao)}</div>` : ''}
          <div class="task-actions">
            <button class="btn btn-ghost btn-sm" onclick="openEdit('${task.id}', ${JSON.stringify(esc(task.titulo))}, ${JSON.stringify(esc(task.descricao || ''))})">editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask('${task.id}')">excluir</button>
          </div>
          <div class="edit-form" id="edit-${task.id}">
            <input id="edit-titulo-${task.id}" type="text" />
            <textarea id="edit-desc-${task.id}"></textarea>
            <div class="edit-form-btns">
              <button class="btn btn-primary btn-sm" onclick="saveEdit('${task.id}')">salvar</button>
              <button class="btn btn-ghost btn-sm" onclick="closeEdit('${task.id}')">cancelar</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  } catch (e) {
    list.innerHTML = '<p class="empty">erro ao carregar tarefas.</p>';
    showToast('❌ ' + e.message);
  }
}

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function createTask() {
  const titulo = document.getElementById('new-titulo').value.trim();
  const descricao = document.getElementById('new-desc').value.trim();
  if (!titulo) { showToast('informe um título'); return; }
  try {
    await taskService.create({ titulo, descricao });
    document.getElementById('new-titulo').value = '';
    document.getElementById('new-desc').value = '';
    showToast('✓ tarefa criada');
    loadTasks();
  } catch(e) { showToast('❌ ' + e.message); }
}

async function toggleTask(id) {
  try {
    const result = await taskService.marcar(id);
    console.log(`marcar: ${JSON.stringify(result)}`)
    showToast('✓ atualizado');
    loadTasks();
  } catch(e) { 
        console.error('error: ', e)
        showToast('❌ ' + e.message); 
    }
}

async function deleteTask(id) {
  try {
    await taskService.delete(id);
    showToast('✓ excluída');
    loadTasks();
  } catch(e) { showToast('❌ ' + e.message); }
}

function openEdit(id, titulo, desc) {
  document.getElementById(`edit-titulo-${id}`).value = titulo;
  document.getElementById(`edit-desc-${id}`).value = desc;
  document.getElementById(`edit-${id}`).classList.add('open');
}
function closeEdit(id) {
  document.getElementById(`edit-${id}`).classList.remove('open');
}
async function saveEdit(id) {
  const titulo = document.getElementById(`edit-titulo-${id}`).value.trim();
  const descricao = document.getElementById(`edit-desc-${id}`).value.trim();
  if (!titulo) { showToast('título obrigatório'); return; }
  try {
    await taskService.update(id, { titulo, descricao });
    showToast('✓ atualizado');
    loadTasks();
  } catch(e) { showToast('❌ ' + e.message); }
}

// Enter para criar tarefa
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('new-titulo').addEventListener('keydown', e => {
    if (e.key === 'Enter') createTask();
  });
  loadTasks();
});