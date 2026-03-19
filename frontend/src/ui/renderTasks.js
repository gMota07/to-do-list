import { esc } from '../utils/esc.js';

export function renderTasks(tasks) {
    

    return tasks.map(task => `
    <div class="task-item ${task.concluida ? 'done' : ''}" id="task-${task.id}">
      
      <button class="check-btn ${task.concluida ? 'done' : ''}" onclick="toggleTask('${task.id}')">
        <svg width="15" height="10" viewBox="0 0 10 10">
          <path d="M1.5 5l2.5 2.5 4.5-4.5"
            stroke="#000"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="task-body">
        <div class="task-titulo">${esc(task.titulo)}</div>
        <div><small>#${task.id}</small></div>

        ${task.descricao ? `<div class="task-desc">${esc(task.descricao)}</div>` : ''}

        <div class="task-actions">
            <button class="btn btn-ghost btn-sm" onclick="openEdit('${task.id}')">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask('${task.id}')">Excluir</button>
        </div>

        <div class="edit-form" id="edit-${task.id}">
            <input id="edit-titulo-${task.id}" type="text" />
            <textarea id="edit-desc-${task.id}"></textarea>

            <div class="edit-form-btns">
                <button class="btn btn-primary btn-sm" onclick="saveEdit('${task.id}')">Salvar</button>
                <button class="btn btn-ghost btn-sm" onclick="closeEdit('${task.id}')">Cancelar</button>
            </div>
        </div>
      </div>
    </div>
  `).join('');
}