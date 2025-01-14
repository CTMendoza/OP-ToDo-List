/* When a user clicks on Completed Task on the sidebar, the task listed under the task dashboard will be "removed/hidden" and
a list of "completed" task will replace them. 
*/
import { tasksList } from "./newTask";
import { setSelectedTaskId, resetSelectedTaskId, selectedTaskId } from ".";
import { loadTasksFromLocalStorage } from "./localStorage";

const completedTaskHeader = document.querySelector('.completed-tasks');
const dashHeader = document.querySelector('.dashboard-header');
const completedTaskList = document.querySelector('.completed-tasks-list');

function openCompletedTaskTab () {
    completedTaskHeader.addEventListener('click',()=> {
        // tasksList.innerHTML = '';
        completedTaskList.style.display = 'flex';
        dashHeader.textContent = 'Completed Task Dashboard';
        tasksList.style.display = 'none';
        loadTasksFromLocalStorage(completedTaskList,'completedTasks')
    })
}

export {openCompletedTaskTab, dashHeader, completedTaskList};