import { DomService } from '../services/dom-service';
import { TodosService } from '../services/todos-service';
import { TodosMenuComponent } from '../components/todos-menu-component';
import { Todo } from '../models/todo';

export class TodosComponent {
  private static todosList: HTMLUListElement = document.querySelector('#todos-list');
  private static todoForm: HTMLFormElement = document.querySelector('#todo-form');
  private static todoFormTitle: HTMLInputElement = document.querySelector('#todo-form-title');
  private static todoFormBody: HTMLTextAreaElement = document.querySelector('#todo-form-body');

  static initialize() {
    this.todosList.innerHTML = '';
    this.todosList.append(...TodosService.getTodos());

    this.todoForm.onsubmit = this.onSubmit.bind(this);
  }

  static onDelete(evt) {

  }

  private static onSubmit(evt) {
    evt.preventDefault();

    const newTodo = new Todo(this.todoFormTitle.value, this.todoFormBody.value);
    TodosService.postTodo(newTodo);

    this.addNewTodoElementToList(this.createTodoElement(newTodo));
    this.clearTodoForm();
  }

  private static createTodoElement(todo) {
    const newTodoElement = DomService.createElementFromHTMLString(`
      <li class="todo">
        <h3>${todo.title}</h3>
        <h4>${todo.createdAt}</h4>

        <p>${todo.body}</p>

        <span class="todo-menu-open">...</span>
      </li>
    `);

    newTodoElement.childNodes[7]
      .onclick = TodosMenuComponent.openMenu.bind(TodosMenuComponent);

    return newTodoElement;
  }

  private static addNewTodoElementToList(todoEle) {
    this.todosList.prepend(todoEle);
  }

  private static clearTodoForm() {
    this.todoForm.reset();
  }
}
