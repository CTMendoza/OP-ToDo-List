// create functions to save task form data to an array in localStorage and to load existing data from array from localStorage
export {saveTasksToLocalStorage, loadTasksFromLocalStorage}

function saveTasksToLocalStorage (newTask) {
     // Retrieve the current tasks from localStorage
     let tasks = JSON.parse(localStorage.getItem('tasks'));

     // If tasks is null (doesn't exist), initialize it as an empty array
     if (!tasks) {
         tasks = [];
     }
    // Add the new task to the list of tasks
    tasks.push(newTask);
    // Save the updated list of tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(`tasks array: ${tasks}`)
}

function loadTasksFromLocalStorage () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Loaded Tasks:', tasks);

    // Optionally, render tasks on the UI
    tasks.forEach(task => {
        console.log(`Task: ${task.title}, ${task.description}, ${task.priority}, ${task.dueDate}`);
    });
}