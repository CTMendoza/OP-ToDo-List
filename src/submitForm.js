// submit form data and 
export {submitFormData}
import { createNewTask } from "./newTask";
import { editTaskElement } from "./editTask";
import { setSelectedTaskId, resetSelectedTaskId, selectedTaskId } from ".";

const form = document.querySelector('.modal-content');
const taskModal = document.querySelector('#task-modal');

function submitFormData() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
       
        // Extract individual values from the modal inputs
       const taskTitle = document.querySelector('#task-title').value;
       const taskDescription = document.querySelector('#task-description').value;
       const taskPriority = document.querySelector('#task-priority').value;
       const taskDate = document.querySelector('#task-date').value;

        // If a task is being edited, update it; otherwise, create a new task
        if (selectedTaskId !== null) {  // We check the value of selectedTaskId directly
            // Editing an existing task
            editTaskElement(taskTitle, taskDescription, taskPriority, taskDate);
        } else {
            // Creating a new task
            createNewTask(taskTitle, taskDescription, taskPriority, taskDate);
        }

        // Reset form and close modal
        form.reset();
        taskModal.style.display = 'none';

        // Reset selectedTaskId after task is saved (via resetSelectedTaskId function)
        resetSelectedTaskId();
    });
}