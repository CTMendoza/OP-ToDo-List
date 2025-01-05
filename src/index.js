import "./styles.css";
import { createNewTask } from "./newTask";
import { openTaskModal, closeTaskModal, setProjectModalListener } from "./toggleModals";
import { submitFormData } from "./submitForm";
import { loadTasksFromLocalStorage } from "./localStorage";
import { selectTaskElement, editTaskElement } from "./editTask";
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
    editTaskElement();
});

// console.log('hello');
// createNewTask();

