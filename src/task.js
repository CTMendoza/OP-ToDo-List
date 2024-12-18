//this component creates new task objects based on user entries on the web app
export {Task};

class Task {
    constructor (title, description,dueDate, priority,notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}