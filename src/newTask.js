// this component will create a new task
// will also store newTask inside an array?? Or this will be this will be its own component
import  {Task} from './task'
export {createNewTask};

function createNewTask () {
    let newTask = new Task ('Task 1', 'this is a new task', '1/1/2025', 'critical', 'here is some extra info about this task' );
    console.log(newTask);
}