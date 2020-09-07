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

let x = new Date();
let y = format(x, "EEEEEE, do MMMM yyyy");

todoList.addTodo("Clean room", x, "My cool todo", 2, "Personal", "Should do soon");
todoList.addTodo("Unclean room", y, "My uncool todo", 1, "Personal", "Should do soon");