/*
This module does the following:

1 Rendering the UI according to the state of the todolist, and the state of the current view
2 Keeping track of the current view of the user (which project folder/ todo is the user viewing?)
3 Listening to events that change something on the page and publishing this change (to the mediator)
4 Keeping the current state in local storage(or should that happen somewhere else?)

*/

const UIhandling = (function() {
    const container = document.querySelector('.content');
    const calendarIcon = container.querySelectorAll('.calendar-icon');
    const datePicker = container.querySelectorAll('#date');

    const openDatePicker = (e) => {
        e.target.parentElement.nextElementSibling.classList.toggle('active-date');
    }

    const closeDatePicker = (e) => {
        e.target.classList.toggle('active-date');
    }

    datePicker.forEach(picker => {
        picker.addEventListener('change', closeDatePicker);
    })

    calendarIcon.forEach(icon => {
        icon.addEventListener('click', openDatePicker);
    });



})();

export {UIhandling};