import { setSelectedTaskId, resetSelectedTaskId, selectedTaskId } from ".";
import { deleteTask } from "./deleteTask";

export function completeTask() {
    document.addEventListener('click', (event) => {
        if (event.target.matches('.complete')) {
            const parentLi = event.target.closest('li');
            const taskId = parentLi.getAttribute('data-task-id');
            setSelectedTaskId(taskId);
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
            const taskIndex = Number(selectedTaskId);
            const completedTask = tasks.splice(taskIndex, 1);
            completedTasks.push(completedTask[0])
            localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
            localStorage.setItem('tasks', JSON.stringify(tasks));
            parentLi.remove();
            resetSelectedTaskId();
        }
    });
}
