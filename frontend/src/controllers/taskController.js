import { taskService } from '../api/taskService.js';
import { renderTasks } from '../ui/renderTasks.js';
import { showToast } from '../ui/toast.js';

export async function loadTasks() {
    
    const list = document.getElementById('task-list');
    const input = document.getElementById('searchTask')
    
    const valor = String(input.value).trim() || "ALL";
    //console.log(valor)
    try {
        //console.log("Carregando tarefas..")
        let tasks;
        if(valor == "ALL"){
            tasks = await taskService.findAll(); // array com todas as tarefas
            if (!tasks.length) {
                list.innerHTML = '<p>Nenhuma tarefa ainda.</p>';
                return;
            }
        }else{
            tasks =  await taskService.search(valor) //array com objeto q contem todos os atributos da tarefa
            if(!tasks.length){
                list.innerHTML = '<p>Nenhuma tarefa referente a essa pesquisa.</p>'
            }
        }
        //console.log(`tarefas: ${JSON.stringify(tasks)}`)
        list.innerHTML = renderTasks(tasks);

    } catch (e) {
        list.innerHTML = '<p>Erro ao carregar tarefas.</p>';
        showToast('❌ ' + e.message);
    }
}

export async function createTask() {
    const titulo = document.getElementById('new-titulo').value.trim();
    const descricao = document.getElementById('new-desc').value.trim();

    if (!titulo) {
        showToast('Informe um título');
        return;
    }

    try {
        await taskService.create({ titulo, descricao });

        document.getElementById('new-titulo').value = '';
        document.getElementById('new-desc').value = '';

        showToast('✓ Tarefa criada');
        loadTasks();

    } catch (e) {
        showToast('❌ ' + e.message);
    }
}

export async function toggleTask(id) {
    try {
        await taskService.marcar(id);
        const stat = await taskService.findByID(id);

        stat.concluida
            ? showToast(`✓ Tarefa #${id} concluída`)
            : showToast(`Tarefa #${id} desmarcada`);

        loadTasks();

    } catch (e) {
        showToast('❌ ' + e.message);
    }
}

export async function deleteTask(id) {
    try {
        await taskService.delete(id);
        showToast('✓ Tarefa excluída');
        loadTasks();
    } catch (e) {
        showToast('❌ ' + e.message);
    }
}

export function openEdit(id) {
    const taskEl = document.getElementById(`task-${id}`);
    const titulo = taskEl.querySelector('.task-titulo').textContent;
    const descEl = taskEl.querySelector('.task-desc');
    const desc = descEl ? descEl.textContent : '';

    document.getElementById(`edit-titulo-${id}`).value = titulo;
    document.getElementById(`edit-desc-${id}`).value = desc;
    document.getElementById(`edit-${id}`).classList.add('open');
}

export function closeEdit(id) {
    document.getElementById(`edit-${id}`).classList.remove('open');
}

export async function saveEdit(id) {
    const titulo = document.getElementById(`edit-titulo-${id}`).value.trim();
    const descricao = document.getElementById(`edit-desc-${id}`).value.trim();

    if (!titulo) {
        showToast('Título obrigatório');
        return;
    }

    try {
        await taskService.update(id, { titulo, descricao });
        showToast('✓ Atualizado');
        loadTasks();
    } catch (e) {
        showToast('❌ ' + e.message);
    }
}

