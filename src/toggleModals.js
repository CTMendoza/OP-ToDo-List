export {setTaskModalListener, setProjectModalListener}

function setTaskModalListener () {
    const taskModal = document.querySelector('#task-modal');
    const createTaskButton = document.querySelector('.new-task-bttn');
    createTaskButton.addEventListener('click', () => {
    taskModal.style.display = "block";
})
}

function setProjectModalListener () {
    const projectModal = document.querySelector('#project-modal');
    const createProjectButton = document.querySelector('.new-project-bttn')
    createProjectButton.addEventListener('click', () => {
        projectModal.style.display = 'block';
    })
}
