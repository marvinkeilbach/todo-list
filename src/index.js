import {todoList} from "./todolist";
import {UIhandling} from "./display";

const eventHandlers = (function(){
    let currentProject = "default";
    let todoInEdit = null;
    let x = new Date();

    const addEmptyTodo = () => {
        todoList.addTodo("", x, "", null, "default", "", false);
    }

    const applyProjectFilter = () => {
        if(todoList.getActiveProject() === "default") {
            todoList.getTodoList().forEach((todo, index) => {
                todo.index = index;
            })
            UIhandling.renderTodos(todoList.getTodoList());
        } else {
            const filteredTodos = [...todoList.getTodoList()].filter((todo, index) => {
                todo.index = index;
                return todo.project === todoList.getActiveProject();
            })
            UIhandling.renderTodos(filteredTodos);
        }
    }

    if(todoList.getProjectList().length === 0) {
        todoList.addProject('default', true);
        todoList.saveToLocalStorage();
    }
    UIhandling.renderTodos(todoList.getTodoList());
    UIhandling.renderProjects(todoList.getProjectList());
    applyProjectFilter();

    const unfocusDatePicker = (e) => {
        UIhandling.closeDatePicker(e);
        const todoIndex = e.target.parentElement.dataset.index;
        todoList.editDueDate(new Date(e.target.value), todoIndex);
        applyProjectFilter();
        todoList.saveToLocalStorage();
    }

    const updateProject = (e) => {
        const todoIndex = e.target.parentElement.dataset.index;
        const newProject = todoList.getProjectList()[e.target.options.selectedIndex - 1].title;
        console.log(todoIndex, newProject);
        todoList.editProject(newProject, todoIndex);
        UIhandling.hideProjectPicker(e);
        applyProjectFilter();
    }

    UIhandling.todolistContent.addEventListener('focusout', (e) => {
        if(e.target.id === 'date') {
            unfocusDatePicker(e);
        } else if(e.target.id === 'projects') {
            UIhandling.hideProjectPicker(e);
        }
        
    });
    UIhandling.todolistContent.addEventListener('change', (e) => {
        if(e.target.id === 'date') {
            unfocusDatePicker(e);
        } else if(e.target.id === 'projects') {
            updateProject(e);
            // UIhandling.hideProjectPicker(e);
        }
    });
    
    UIhandling.todolistContent.addEventListener('click', function(e) {
        const todoIndex = e.target.parentElement.dataset.index;
        const currentTodo = todoList.getTodo(todoIndex);
    
        if(e.target.classList.contains('calendar-icon')) {
            UIhandling.openDatePicker(e);
        }
    
        if(e.target.classList.contains('check-icon')) {
            todoList.toggleChecked(todoIndex);
            applyProjectFilter();
        }
    
        if(e.target.classList.contains('edit-icon')) {
            UIhandling.renderEditor(currentTodo);
            todoInEdit = todoIndex;
        }
    
        if(e.target.classList.contains('delete-icon')) {
            todoList.deleteTodo(todoIndex);
            applyProjectFilter();
        }        
        if(e.target.classList.contains('project-icon')) {
            UIhandling.renderProjectPicker(e);
        }
        todoList.saveToLocalStorage();
    });

    UIhandling.editor.addEventListener('click', function(e) {
        if(e.target.id === "submit") {
            const form = e.target.parentElement;
            const title = form[0].value;
            const date = new Date(form[1].value);
            const description = form[2].value;
            const priority = form[3].value;
            const project = form[4].value;
            todoList.editTitle(title, todoInEdit);
            todoList.editDueDate(date, todoInEdit);
            todoList.editDescription(description, todoInEdit);
            todoList.editPriority(priority, todoInEdit);
            todoList.editProject(project, todoInEdit);
            UIhandling.hideEditor();
            applyProjectFilter();
            todoList.saveToLocalStorage();
        }
    });

    UIhandling.addTodo.addEventListener('click', function(e) {
        addEmptyTodo();
        const currentTodo = (todoList.getTodoList())[(todoList.getTodoList().length - 1)];
        todoInEdit = todoList.todoListArray.indexOf(currentTodo);
        applyProjectFilter();
        UIhandling.renderEditor(currentTodo);
    })

    UIhandling.sortAscend.addEventListener('click', function(e) {
        todoList.getTodoList().sort((a, b) => {
            return a.dueDate > b.dueDate ? 1 : a.dueDate < b.dueDate? -1 : 0;
        });
        applyProjectFilter();
        todoList.saveToLocalStorage();
    });

    UIhandling.sortDescend.addEventListener('click', function(e) {
        todoList.getTodoList().sort((a, b) => {
            return a.dueDate > b.dueDate ? -1 : a.dueDate < b.dueDate? 1 : 0;
        });
        applyProjectFilter();
        todoList.saveToLocalStorage();
    });

    UIhandling.addProject.addEventListener('click', UIhandling.renderProjectAdder);

    UIhandling.projectForm.addEventListener('click', function(e) {
        console.log(e.target);
        if(e.target.classList.contains('add-project-submit')) {
            todoList.addProject(e.target.previousElementSibling.value);
            UIhandling.hideProjectAdder();
            UIhandling.renderProjects(todoList.getProjectList());
            applyProjectFilter();
            todoList.saveToLocalStorage();
            console.log(todoList.getProjectList());
        }
    })

    UIhandling.projectMenu.addEventListener('click', function(e) {
        if(e.target.classList.contains('delete-project-icon')) {
            const projectIndex = e.target.parentElement.dataset.project;
            todoList.deleteProject(projectIndex);
            todoList.saveToLocalStorage();
            UIhandling.renderProjects(todoList.getProjectList());
            applyProjectFilter();
        }
        if(e.target.classList.contains('project') || e.target.localName === 'p') {
            let index;
            if(e.target.classList.contains('project')) {
                index = e.target.dataset.project;
            } else {
                index = e.target.parentElement.dataset.project;
            }
            todoList.undoAllActiveProjects();
            todoList.toggleProjectActive(index);
            UIhandling.renderProjects(todoList.getProjectList());
            applyProjectFilter();
        }
    })
})();