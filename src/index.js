import "./styles.css";
import { createNewTask } from "./newTask";
import { setTaskModalListener, setProjectModalListener } from "./toggleModals";
import { submitFormData } from "./submitForm";
// document.addEventListener('DOMContentLoaded', () => {
//     setTaskModalListener();
// });
setTaskModalListener();
setProjectModalListener();
submitFormData();
// console.log('hello');
// createNewTask();

