/* 
Work out the logic of how to CONNECT the todolist logic, and the display. Make the todolist subscribe to, and the display publish to a mediator.

Whenever an event is fired, the display publishes a "change" (add, delete, etc.) event to the mediator.
Whenever a change event is published to the mediator, the todolist receives it (subscriber to "updateList" topic) and updates accordingly.
Whenever the todolist updates, it publishes its current status (array of all todo objects) to the mediator (post-change).
Whenever the current status is published, the display receives the new data (subscriber to "currentList" topic).

display >>>updateList>>> M >>>updateList>>> todolist
display <<<currentList<<< M <<<currentList<<< todoList
*/
import format from "date-fns/format";
import add from "date-fns/add";
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
        todoList.addProject('default', true);}
    UIhandling.renderTodos(todoList.getTodoList());
    UIhandling.renderProjects(todoList.getProjectList());
    applyProjectFilter();

    UIhandling.todolistContent.addEventListener('change', function(e){
        if(e.target.id = 'date') {
            UIhandling.closeDatePicker(e);
            const todoIndex = e.target.parentElement.dataset.index;
            todoList.editDueDate(new Date(e.target.value), todoIndex);
            applyProjectFilter();
            todoList.saveToLocalStorage();
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
            const projectIndex = todoList.getProjectList().indexOf(e.target.parentElement.dataset.project);
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