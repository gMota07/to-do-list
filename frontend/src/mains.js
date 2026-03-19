import {
    loadTasks,
    createTask,
    toggleTask,
    deleteTask,
    openEdit,
    closeEdit,
    saveEdit
} from './controllers/taskController.js';

// deixa funções globais pro HTML funcionar
window.createTask = createTask;
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;
window.openEdit = openEdit;
window.closeEdit = closeEdit;
window.saveEdit = saveEdit;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-titulo')
        .addEventListener('keydown', e => {
            if (e.key === 'Enter') createTask();
        });

    loadTasks();
});