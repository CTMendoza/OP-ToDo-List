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
    
    taskList.innerHTML = ''; // reset taskList to avoid duplicates
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Loaded Tasks:', tasks);

    tasks.forEach((task, index) => {
        let taskItem = taskList.querySelector(`[data-task-id="${index}"]`);

        // If taskItem doesn't exist, create it
        if (!taskItem) {
            taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.setAttribute('data-task-id', index); // set task's index as its data-id

            const deleteButton = document.createElement('div');
            deleteButton.className = 'ion--trash';

            const taskItemLine1 = document.createElement('div');
            taskItemLine1.className = 'task-item-line1';
            const taskItemLine2 = document.createElement('div');
            taskItemLine2.className = 'task-item-line2';

            const taskTitle = document.createElement('h2');
            taskTitle.className = 'title';
            taskTitle.textContent = task.title;

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.name = 'complete';
            checkBox.className = 'complete';

            const taskDate = document.createElement('h3');
            taskDate.className = 'due-date';
            taskDate.textContent = task.dueDate;

            const taskPriority = document.createElement('h3');
            taskPriority.className = 'task-priority';
            taskPriority.textContent = task.priority;

            // Set background color based on priority
            if (taskPriority.textContent === 'High') {
                taskPriority.style.backgroundColor = 'red';
            } else if (taskPriority.textContent === 'Medium') {
                taskPriority.style.backgroundColor = '#dfdf27';
            } else {
                taskPriority.style.backgroundColor = 'green';
            }

            taskItem.appendChild(taskItemLine1);
            taskItem.appendChild(taskItemLine2);
            taskItemLine1.appendChild(checkBox);
            taskItemLine1.appendChild(taskTitle);
            taskItemLine2.appendChild(deleteButton);
            taskItemLine2.appendChild(taskDate);
            taskItemLine2.appendChild(taskPriority);

            taskList.appendChild(taskItem);
        } else {
            // If taskItem exists, just update its content
            const taskTitle = taskItem.querySelector('.title');
            const taskDate = taskItem.querySelector('.due-date');
            const taskPriority = taskItem.querySelector('.task-priority');

            taskTitle.textContent = task.title;
            taskDate.textContent = task.dueDate;
            taskPriority.textContent = task.priority;

            // Update background color based on priority
            if (taskPriority.textContent === 'High') {
                taskPriority.style.backgroundColor = 'red';
            } else if (taskPriority.textContent === 'Medium') {
                taskPriority.style.backgroundColor = '#dfdf27';
            } else {
                taskPriority.style.backgroundColor = 'green';
            }
        }
    })
}