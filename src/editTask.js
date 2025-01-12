//if user clicks a task-item, they will open the task modal and will be able to edit and save current task
export {selectTaskElement, editTaskElement, selectedTaskId};
import { loadTasksFromLocalStorage } from "./localStorage";
import { setSelectedTaskId, resetSelectedTaskId, selectedTaskId } from ".";

const taskList = document.querySelector('.tasks-list');
const taskModal = document.querySelector('#task-modal');
const taskTitleInput = taskModal.querySelector('input[name="task_title"]');
const taskDescriptionInput = taskModal.querySelector('textarea[name="task_description"]');
const taskPrioritySelect = taskModal.querySelector('select[name="task_priority"]');
const taskDateInput = taskModal.querySelector('input[name="task_date"]');
const close = taskModal.querySelector('.close');
const saveTaskButton = taskModal.querySelector('.submit-bttn');

function selectTaskElement () {
        taskList.addEventListener('click', (event) => {
            const clickedElement = event.target;
            
            if(clickedElement.tagName === 'LI') {
                const taskId = clickedElement.getAttribute('data-task-id');
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                const task = tasks[taskId];
                console.log(`taskId value: ${taskId}`);
    
                if (task) {
                    // Populate modal with task data
                     // Set the selected task ID using setSelectedTaskId
                    setSelectedTaskId(taskId);
                    console.log(`selectedTaskId value: ${selectedTaskId}`)
                    console.log(`Selected Task: ${JSON.stringify(task)}`);
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
                resetSelectedTaskId();
                console.log(`selectedTaskId value: ${selectedTaskId}`);
            });
        })  
}

function editTaskElement (taskTitle, taskDescription, taskPriority, taskDate) {

    // Only proceed if there is a valid taskId selected
    if(selectedTaskId !== null) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTask = tasks[selectedTaskId];

         // Update the task object with new values
         updatedTask.title = taskTitle;
         updatedTask.description = taskDescription;
         updatedTask.priority = taskPriority;
         updatedTask.dueDate = taskDate;

         // Save the updated task list to localStorage
         localStorage.setItem('tasks', JSON.stringify(tasks));

        //clicking the save button will also close the modal
         taskModal.style.display = 'none';
         console.log('Updated Tasks:', tasks);  // Log updated tasks to verify
         loadTasksFromLocalStorage(taskList);
    }
}
