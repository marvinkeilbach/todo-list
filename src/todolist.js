const todoList = (function () {
    class Todo {
        constructor(title = "", dueDate = new Date(), description = "", priority = null, project = "default", notes = "", checked = false) {
            this.title = title;
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.project = project;
            this.notes = notes;
            this.checked = checked;
        }
    }
    class Project {
        constructor(title = "", active = false) {
            this.title = title;
            this.active = active;
        }
    }

    const todoListArray = JSON.parse(localStorage.getItem('todoListArray')) || [];
    const projectListArray = JSON.parse(localStorage.getItem('projectListArray')) || [];

    const saveToLocalStorage = () => {
        localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
        localStorage.setItem('projectListArray', JSON.stringify(projectListArray));
    }

    const addTodo = (title, dueDate, description, priority, project, notes, checked) => {
        const newTodo = new Todo(title, dueDate, description, priority, project, notes, checked);
        todoListArray.push(newTodo);
        saveToLocalStorage();
    }
    const editTitle = (newTitle, index) => {
        todoListArray[index].title = String(newTitle) || "";
    }
    const editDueDate = (newDate, index) => {
        todoListArray[index].dueDate = newDate;
    }
    const editDescription = (newDescription, index) => {
        todoListArray[index].description = String(newDescription) || "";
    }
    const editPriority = (newPriority, index) => {
        todoListArray[index].priority = parseInt(newPriority) || null;
    }
    const editProject = (newProject, index) => {
        todoListArray[index].project = String(newProject);
    }
    const toggleChecked = (index) => {
        todoListArray[index].checked = !todoListArray[index].checked;
    }
    const getTodo = (index) => todoListArray[index];
    const getTodoList = () => todoListArray;
    const deleteTodo = (index) => {
        if(todoListArray[index]) {
            todoListArray.splice(index, 1);
            saveToLocalStorage();
        } else {
            console.error("Can't delete, index doesn't exist.");
        }
    }

    const getProjectList = () => projectListArray;
    const addProject = (title, active) => {
        const newProject = new Project(title, active);
        projectListArray.push(newProject);
    };
    const deleteProject = (index) => projectListArray.splice(index, 1);
    const toggleProjectActive = (index) => projectListArray[index].active = !projectListArray[index].active;
    const undoAllActiveProjects = () => projectListArray.forEach(array => array.active = false);
    const getActiveProject = () => {
        let active = '';
        projectListArray.forEach(project => {
            if(project.active === true) {
                active = project.title;
            };
        });
        return active;
    }

    return {addTodo, getTodo, getTodoList, deleteTodo, todoListArray, saveToLocalStorage, editTitle, editDueDate, editDescription, editPriority, editProject, toggleChecked, getProjectList, addProject, deleteProject, toggleProjectActive, undoAllActiveProjects, getActiveProject};
})();

export {todoList};