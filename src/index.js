import "./styles.css";
import { createNewTask } from "./newTask";
import { openTaskModal, closeTaskModal, setProjectModalListener } from "./toggleModals";
import { submitFormData } from "./submitForm";
import { loadTasksFromLocalStorage } from "./localStorage";
import { selectTaskElement, editTaskElement } from "./editTask";
import { openCompletedTaskTab } from "./completedTask";
import { openTaskInbox } from "./inbox";

// Define selectedTaskId as a global variable here
export  {setSelectedTaskId, resetSelectedTaskId}

export let selectedTaskId = null;

function setSelectedTaskId(taskId) {
    selectedTaskId = taskId;
}

function resetSelectedTaskId() {
    selectedTaskId = null;
}
// document.addEventListener('DOMContentLoaded', () => {
//     setTaskModalListener();
// });
document.addEventListener('DOMContentLoaded', () => {
    const tasksList = document.querySelector('.tasks-list');
    if (tasksList) {
        loadTasksFromLocalStorage(tasksList);
    } else {
        console.error('Task list element not found.');
    }
    openTaskModal();
    closeTaskModal();
    setProjectModalListener();
    submitFormData();
    selectTaskElement();
    openCompletedTaskTab();
    openTaskInbox();
});

// console.log('hello');
// createNewTask();

