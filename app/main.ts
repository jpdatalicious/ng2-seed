import {bootstrap, Component, View} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todo.svc";
import {TodoList} from "./todoList";
import {TodoInputNgModel} from "./todoInputNgModel";

@Component({
    selector:"app"
})
@View({
  directives:[TodoInput,TodoList, TodoInputNgModel],
  template: `
      <div class="container">
        <div class="jumbotron">
          <todo-input-ng-model></todo-input-ng-model>
          <div class="row">
            <todo-list></todo-list>
          </div>
        </div>
      </div>
  `
})
class App{}

bootstrap(App, [TodoService]);
