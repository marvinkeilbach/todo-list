const todoList = (function () {
    class Todo {
        constructor(title = "", dueDate = new Date(), description = "", priority = null, project = "default", notes = "") {
            this.title = title;
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.project = project;
            this.notes = notes;
        }
        editTitle(newTitle) {
            this.title = String(newTitle) || "";
        }
        editDueDate(newDate) {
            this.dueDate = format(newDate, "EEEEEE, do MMMM yyyy");
        }
        editDescription(newDescription) {
            this.description = String(newDescription) || "";
        }
        editPriority(newPriority) {
            this.priority = parseInt(newPriority) || null;
        }
        editProject(newProject) {
            this.project = String(newProject);
        }
    }

    const todoListArray = [];

    const addTodo = (title, dueDate, description, priority, project, notes) => {
        const newTodo = new Todo(title, dueDate, description, priority, project, notes);
        todoListArray.push(newTodo);
    }
    const getTodo = (index) => todoListArray[index];
    const getTodoList = () => todoListArray;
    const deleteTodo = (index) => {
        if(todoListArray[index]) {
            todoListArray.splice(index, 1);
        } else {
            console.error("Can't delete, index doesn't exist.");
        }
    }

    return {addTodo, getTodo, getTodoList, deleteTodo};
})();

export {todoList};