import {Component, View, NgFor} from "angular2/angular2";
import {TodoService} from "./todo.svc";
import {TodoItemRenderer} from "./todoItemRenderer";

@Component({
  selector: "todo-list"
})

@View({
  directives: [NgFor, TodoItemRenderer],
  template: `
    <ul class="list-group">
      <todo-item-renderer  *ng-for="#todo of todoService.todos"
      [todo]="todo">
      </todo-item-renderer>
    </ul>
  `
})

export class TodoList {
  constructor(
    public  todoService:TodoService
  ){}
}
