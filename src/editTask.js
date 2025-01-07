//if user clicks a task-item, they will open the task modal and will be able to edit and save current task
export {selectTaskElement, editTaskElement};
import { loadTasksFromLocalStorage } from "./localStorage";

const taskList = document.querySelector('.tasks-list');
const taskModal = document.querySelector('#task-modal');
const taskTitleInput = taskModal.querySelector('input[name="task_title"]');
const taskDescriptionInput = taskModal.querySelector('textarea[name="task_description"]');
const taskPrioritySelect = taskModal.querySelector('select[name="task_priority"]');
const taskDateInput = taskModal.querySelector('input[name="task_date"]');
const close = taskModal.querySelector('.close');
const saveTaskButton = taskModal.querySelector('.submit-bttn');
let selectedTaskId = null;

function selectTaskElement () {
        taskList.addEventListener('click', (event) => {
            const clickedElement = event.target;
            
            if(clickedElement.tagName === 'LI') {
                const taskId = clickedElement.getAttribute('data-task-id') - 1;
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                const task = tasks[taskId];
    
                if (task) {
                    // Populate modal with task data
                    selectedTaskId = taskId;
                    taskTitleInput.value = task.title;
                    taskDescriptionInput.value = task.description;
                    taskPrioritySelect.value = task.priority;
                    taskDateInput.value = task.dueDate;
                    
                    //Open the modal
                    taskModal.style.display = 'block';
                }
            }
            close.addEventListener('click', () => {
                taskModal.style.display = 'none';
            });
        })  
}

function editTaskElement () {
 saveTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Only proceed if there is a valid taskId selected
    if(selectedTaskId !== null) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTask = tasks[selectedTaskId];

         // Update the task object with new values
         updatedTask.title = taskTitleInput.value;
         updatedTask.description = taskDescriptionInput.value;
         updatedTask.priority = taskPrioritySelect.value;
         updatedTask.dueDate = taskDateInput.value;

         // Save the updated task list to localStorage
         localStorage.setItem('tasks', JSON.stringify(tasks));
        //clicking the save button will also close the modal
         taskModal.style.display = 'none';
         loadTasksFromLocalStorage(taskList);
    }
 })
}
