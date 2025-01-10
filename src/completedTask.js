/* When a user clicks on Completed Task on the sidebar, the task listed under the task dashboard will be "removed/hidden" and
a list of "completed" task will replace them. 
*/
import { tasksList } from "./newTask";


const completedTaskButton = document.querySelector('.completed-tasks');
const dashHeader = document.querySelector('.dashboard-header')

function openCompletedTaskTab () {
    completedTaskButton.addEventListener('click',()=> {
        tasksList.innerHTML = '';
        dashHeader.textContent = 'Completed Task Dashboard';
    })
}

export {openCompletedTaskTab, dashHeader};