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
   // reset taskList to having no child elements so that child elements are not rendered twice
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Loaded Tasks:', tasks);
    // render tasks on the UI
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className='task-item';

        // Set a unique data-task-id for each taskItem
        taskItem.setAttribute('data-task-id', index + 1);

        const deleteButton = document.createElement('div');
        deleteButton.className = 'ion--trash';

        const taskItemLine1 = document.createElement('div');
        taskItemLine1.className ='task-item-line1'
        const taskItemLine2 = document.createElement('div');
        taskItemLine2.className ='task-item-line2'

        const taskTitle = document.createElement('h2');
        taskTitle.className = 'title';
        taskTitle.textContent = `${task.title}`

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.name = 'complete';
        checkBox.className = 'complete'

        const taskDate = document.createElement('h3');
        taskDate.className = 'due-date'
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
        taskItemLine1.appendChild(checkBox);
        taskItemLine1.appendChild(taskTitle);
        taskItemLine2.appendChild(deleteButton);
        taskItemLine2.appendChild(taskDate);
        taskItemLine2.appendChild(taskPriority);

        taskItemLine2.className ='task-item-line2'
        
        taskList.appendChild(taskItem);
        console.log(`Task: ${task.title}, ${task.description}, ${task.priority}, ${task.dueDate}`);
    });
}