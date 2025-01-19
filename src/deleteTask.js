export {deleteTask};
import { setSelectedTaskId, resetSelectedTaskId, selectedTaskId } from ".";

function deleteTask(element) {
    document.addEventListener('click', (event) => {
        if (event.target.matches(element)) {
            const parentLi = event.target.closest('li');
            const taskId = parentLi.getAttribute('data-task-id');
            setSelectedTaskId(taskId);
            const parentUl = event.target.closest('ul')
            const ulClassName =parentUl.className;

            if (ulClassName.includes('completed-tasks-list')) {
                const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
                const completedTasksIndex = Number(selectedTaskId);
                completedTasks.splice(completedTasksIndex, 1);
                localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
            } else {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                const taskIndex = Number(selectedTaskId);
                tasks.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            
            parentLi.remove();
            resetSelectedTaskId();
        }
    });
}