// this component will create a new task
// will also store newTask into an array?? Or this will be this will be its own component
import  {Task} from './task';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './localStorage';
export {createNewTask};


function createNewTask (title, description, priority, dueDate) {
    let newTask = new Task (title, description, priority, dueDate);
    saveTasksToLocalStorage(newTask);
    loadTasksFromLocalStorage();
}