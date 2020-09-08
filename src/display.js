/*
This module does the following:

1 Rendering the UI according to the state of the todolist, and the state of the current view
2 Keeping track of the current view of the user (which project folder/ todo is the user viewing?)
3 Listening to events that change something on the page and publishing this change (to the mediator)
4 Keeping the current state in local storage(or should that happen somewhere else?)

*/
import format from "date-fns/format";
import parseJSON from "date-fns/parseJSON";

const UIhandling = (function() {
    const container = document.querySelector('.content');
    const todolistContent = container.querySelector('.todo-list');
    const editor = document.querySelector('.pop-editor');
    const addTodo = document.querySelector('.add-todo');
    const sortAscend = document.querySelector('.sort-ascend');
    const sortDescend = document.querySelector('.sort-descend');
    const addProject = document.querySelector('.add-project');
    const projectMenu = document.querySelector('.project-menu');
    const projectForm = document.querySelector('.add-project-form');

    const openDatePicker = (e) => {
        e.target.parentElement.nextElementSibling.classList.toggle('active-date');
    }

    const closeDatePicker = (e) => {
        e.target.classList.toggle('active-date');
    }

    const renderEditor = (todo) => {
        editor.innerHTML = "";
        const form = document.createElement('form');
        form.classList = "edit-todo";
        form.innerHTML = 
        `<label for="title-input" class="editor-item">Title</label>
        <input type="text" id="title-input" class="editor-item" value="${todo.title}">
        <label for="date-input" class="editor-item">Due</label>
        <input type="date" id="date-input" class="editor-item" value="${format(parseJSON(todo.dueDate), "yyyy-MM-dd")}">
        <label for="description-input" class="editor-item">Description</label>
        <textarea cols="30" rows="5" id="description-input" class="editor-item">${todo.description}</textarea>
        <label for="priority-input" class="editor-item">Priority</label>
        <input type="number" min="0" max="5" id="priority-input" class="editor-item" value="${todo.priority}">
        <label for="project-input" class="editor-item">Project</label>
        <input type="text" id="project-input" class="editor-item" value="${todo.project}">
        <input type="submit" value="Save" class="editor-item" id="submit">`
        editor.appendChild(form);
    }

    const hideEditor = () => {
        editor.innerHTML = '';
    }

    const renderProjects = (array) => {
        projectMenu.innerHTML = '';
        array.forEach((project, index) => {
            const newProject = document.createElement('div');
            const active = project.active === true ? 'project-active' : '';
            newProject.classList = `project ${active}`;
            newProject.setAttribute('data-project', index);
            newProject.innerHTML = 
            `<p>${project.title}</p>
            <i class="fas fa-times project-icon delete-project-icon" title="Delete"></i>`;
            projectMenu.appendChild(newProject);
        });
    }

    const renderProjectAdder = () => {
        projectForm.innerHTML = 
        `<input type="text" class="add-project-input">
        <input type="submit" value="Add Project" class="add-project-submit">`
    }

    const hideProjectAdder = () => {
        projectForm.innerHTML = '';
    }

    const renderTodos = (array) => {
        todolistContent.innerHTML = '';
        array.forEach((todo, index) => {
            const todoContainer = document.createElement('div');
            const checked = todo.checked ? 'checked' : '';
            todoContainer.classList = 'todo';
            if(todo.index) {
                todoContainer.setAttribute('data-index', todo.index);
            } else {
                todoContainer.setAttribute('data-index', index);
            }
            const date = parseJSON(todo.dueDate);
            const displayDate = format(date, "EEEEEE, do MMM yyyy");
            
            todoContainer.innerHTML = 
            `<i class="fas fa-check todo-icon check-icon ${checked}" title="Check/uncheck"></i>
            <label for="date"><i class="far fa-calendar-alt todo-icon calendar-icon" title="Set date"></i></label>
            <input type="date" id="date" name="date" class="date" value="${format(date, "yyyy-MM-dd")}"> 
            <i class="fas fa-folder todo-icon project-icon" title="Add to project"></i>
            <i class="fas fa-edit todo-icon edit-icon" title="Edit"></i>
            <p class="todo-text">${todo.title}</p>
            <p class="project-text">${todo.project}</p>
            <p class="todo-date">${displayDate}</p>
            <i class="fas fa-times todo-icon delete-icon" title="Delete"></i>`
            todolistContent.appendChild(todoContainer);
        });
    }
    return {container, todolistContent, editor, renderTodos, openDatePicker, closeDatePicker, renderEditor, hideEditor, addTodo, sortDescend, sortAscend, addProject, projectMenu, projectForm, renderProjectAdder, hideProjectAdder, renderProjects}
})();

export {UIhandling};