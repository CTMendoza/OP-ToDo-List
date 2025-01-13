export {deleteTask};
import { setSelectedTaskId, resetSelectedTaskId, selectedTaskId } from ".";

function deleteTask() {
    document.addEventListener('click', (event) => {
        if (event.target.matches('.ion--trash')) {
            const parentLi = event.target.closest('li');
            const taskId = parentLi.getAttribute('data-task-id');
            setSelectedTaskId(taskId);
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskIndex = Number(selectedTaskId);
            tasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            parentLi.remove();
            resetSelectedTaskId();
        }
    });
}