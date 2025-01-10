import { tasksList } from "./newTask";
import { loadTasksFromLocalStorage } from "./localStorage";
import { dashHeader } from "./completedTask";
export {openTaskInbox};

const taskInbox = document.querySelector('.tasks-inbox');

function openTaskInbox () {
    taskInbox.addEventListener('click', () => {
        tasksList.innerHTML= '';
        dashHeader.textContent = 'Tasks Inbox';
        loadTasksFromLocalStorage(tasksList);
    })
}