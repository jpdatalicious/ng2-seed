import {Component, View, FORM_DIRECTIVES } from "angular2/angular2";
import {TodoService, TodoModel} from "./todo.svc";

@Component({
  selector: "todo-input-ng-model"
})
@View({
  directives:[FORM_DIRECTIVES],
  template: `
    <form (ng-submit)="onSubmit()">
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="sizing-addon1">@</span>
      <input type="text"
        [(ng-model)]="todoModel.title"
        class="form-control" placeholder="todo ..." aria-describedby="sizing-addon1">
    </div>
    </form>
  `
})

export class TodoInputNgModel {
        something: number;
  todoModel:TodoModel = new TodoModel();

  constructor(
    public todoService:TodoService
  ){
      console.log('todoService', this.todoService);
  }

  onSubmit =() => {
    this.todoService.addTodo(this.todoModel);
    this.todoModel = new TodoModel(); // to avoid issue
  };
}
