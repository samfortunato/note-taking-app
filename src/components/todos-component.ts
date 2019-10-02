import { DomService } from '../services/dom-service';
import { TodosService } from '../services/todos-service';
import { TodosMenuComponent } from './todos-menu-component';
import { Todo } from '../models/todo';

export class TodosComponent {
  private static todos: Todo[];

  private static todosList: HTMLUListElement;
  private static todoForm: HTMLFormElement;
  private static todoFormTitle: HTMLInputElement;
  private static todoFormBody: HTMLTextAreaElement;

  static initialize(): void {
    this.todosList = document.querySelector('#todos-list');
    this.todoForm = document.querySelector('#todo-form');
    this.todoFormTitle = document.querySelector('#todo-form-title');
    this.todoFormBody = document.querySelector('#todo-form-body');

    this.setupTodoElements();

    this.todoForm.onsubmit = this.onSubmit.bind(this);
  }

  // static onDelete(evt: MouseEvent) {

  // }

  private static setupTodoElements(): void {
    this.todosList.innerHTML = '';

    this.todos = TodosService.getTodos();
    this.todos.forEach((todo) => {
      const todoEle = this.createTodoElement(todo);
      this.todosList.append(todoEle);
    });
  }

  private static onSubmit(evt: Event): void {
    evt.preventDefault();

    const newTodo = new Todo(this.todoFormTitle.value, this.todoFormBody.value);
    TodosService.postTodo(newTodo);

    this.addNewTodoElementToList(this.createTodoElement(newTodo));
    this.clearTodoForm();
  }

  private static createTodoElement(todo: Todo): HTMLLIElement {
    const newTodoElement = DomService.createElementFromHTMLString(`
      <li class="todo">
        <h3>${todo.title}</h3>
        <h4>${todo.createdAt}</h4>

        <p>${todo.body}</p>
      </li>
    `);

    const todoMenu = DomService.createElementFromHTMLString(`<span class="todo-menu-open">...</span>`);
    todoMenu.addEventListener('click', TodosMenuComponent.openMenu.bind(TodosMenuComponent));
    newTodoElement.append(todoMenu);

    return newTodoElement as HTMLLIElement;
  }

  private static addNewTodoElementToList(todoEle: HTMLLIElement): void {
    this.todosList.prepend(todoEle);
  }

  private static clearTodoForm(): void {
    this.todoForm.reset();
  }
}
