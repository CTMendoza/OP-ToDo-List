export {openTaskModal, closeTaskModal, setProjectModalListener}



function openTaskModal () {
    const taskModal = document.querySelector('#task-modal');
    const createTaskButton = document.querySelector('.new-task-bttn');
    createTaskButton.addEventListener('click', () => {
        taskModal.style.display = "block";
    })   
}

function closeTaskModal () {
    const taskModal = document.querySelector('#task-modal');
    const close = document.querySelector('.close');
    const form = document.querySelector('.modal-content');
    close.addEventListener('click', () => {
        form.reset();
        taskModal.style.display = 'none';
    })
}

function setProjectModalListener () {
    const projectModal = document.querySelector('#project-modal');
    const createProjectButton = document.querySelector('.new-project-bttn')
    createProjectButton.addEventListener('click', () => {
        projectModal.style.display = 'block';
    })
}
