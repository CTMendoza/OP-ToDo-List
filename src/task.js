//this component creates new task objects based on user entries on the web app
export {Task};

class Task {
    constructor (title, description,priority,dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}