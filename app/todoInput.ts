import {Component, View } from "angular2/angular2";
import {TodoService} from "./todo.svc";

@Component({
  selector: "todo-input"
})
@View({
  template: `
    <input type="text" placeholder="im a value" #input-name/>
    <!-- <button (click)="onClick(inputName.value)">Clickety</button>  -->
    <button class="btn btn-primary" on-click="onClick($event, inputName.value)">Clickety</button>
  `
})

export class TodoInput {
  constructor(
    public todoService:TodoService
  ){
      console.log('todoService', this.todoService);
  }

  onClick(e, name) {
    this.todoService.addTodo(name);
  }
}
