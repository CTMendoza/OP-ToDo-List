import "./styles.css";
import { createNewTask } from "./newTask";
import { setTaskModalListener, setProjectModalListener } from "./toggleModals";
import { submitFormData } from "./submitForm";
import { loadTasksFromLocalStorage } from "./localStorage";
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
    setTaskModalListener();
    setProjectModalListener();
    submitFormData();
});

// console.log('hello');
// createNewTask();

