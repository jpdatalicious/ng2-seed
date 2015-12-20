import {Component, View, Input,NgClass} from "angular2/angular2";
import {TodoModel} from "./todo.svc";

@Component({
  selector: 'todo-item-renderer'
})
@View({
  directives:[NgClass],
  styles:[`
      .${TodoModel.COMPLETED}{
        text-decoration: line-through;
      }
      .${TodoModel.STARTED} {
        color: green;
      }
    `],
  template: `
  <li class="list-group-item" style="padding:2em;">
   <span [ng-class]="todo.status">{{ todo.title }}</span>
    <button class="btn btn-primary pull-right" (click)="todo.toggle()">toggle</button>
  </li>
  `
})

export class TodoItemRenderer {
  @Input() todo:TodoModel;
}
