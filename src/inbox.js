import { tasksList } from "./newTask";
import { loadTasksFromLocalStorage } from "./localStorage";
import { dashHeader, completedTaskList } from "./completedTask";
export {openTaskInbox};

const taskInbox = document.querySelector('.tasks-inbox');

function openTaskInbox () {
    taskInbox.addEventListener('click', () => {
        tasksList.style.display = 'flex';
        tasksList.innerHTML= '';
        dashHeader.textContent = 'Tasks Inbox';
        completedTaskList.style.display = 'none';
        loadTasksFromLocalStorage(tasksList);
    })
}