// submit form data and 
export {submitFormData}
import { createNewTask } from "./newTask";

const form = document.querySelector('.modal-content');
const taskModal = document.querySelector('#task-modal');

function  submitFormData () {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // retrieve form data
        const taskData = new FormData(form);
        // extract form data and store it into a new task object using createNewTask imported from newTask.js module
        createNewTask(taskData.get('task_title'), taskData.get('task_description'), taskData.get('task_priority'), taskData.get('task_date'))
        // reset form and close modal
        form.reset();
        taskModal.style.display = 'none';
    })
}