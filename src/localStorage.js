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

function loadTasksFromLocalStorage (taskList) {
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Loaded Tasks:', tasks);
    // Optionally, render tasks on the UI
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className='task-item';

        const taskItemLine1 = document.createElement('div');
        const taskItemLine2 = document.createElement('div');

        const taskTitle = document.createElement('h2');
        taskTitle.textContent = `${task.title}`

        const taskDate = document.createElement('h3');
        taskDate.textContent = `${task.dueDate}`

        const taskPriority = document.createElement('h3');
        taskPriority.className = 'task-priority'

        taskPriority.textContent = `${task.priority}`;
        if (taskPriority.textContent === 'High') {
            taskPriority.style.backgroundColor = 'red'
        } else if(taskPriority.textContent === 'Medium') {
            taskPriority.style.backgroundColor = '#dfdf27'
        } else taskPriority.style.backgroundColor = 'green';

        taskItem.appendChild(taskItemLine1);
        taskItem.appendChild(taskItemLine2);
        taskItemLine1.appendChild(taskTitle);
        taskItemLine2.appendChild(taskDate);
        taskItemLine2.appendChild(taskPriority);

        taskItemLine2.className ='task-item-line2'
        
        taskList.appendChild(taskItem);
        console.log(`Task: ${task.title}, ${task.description}, ${task.priority}, ${task.dueDate}`);
    });
}