export {setTaskModalListener, setProjectModalListener}



function setTaskModalListener () {
    const close = document.querySelector('.close');
    const taskModal = document.querySelector('#task-modal');
    const createTaskButton = document.querySelector('.new-task-bttn');
    const form = document.querySelector('.modal-content');
    
    createTaskButton.addEventListener('click', () => {
        taskModal.style.display = "block";
    })   
     
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
