class DOMService {
  static createElementFromHTMLString(htmlString) {
    const newElementContainer = document.createElement('template');
    newElementContainer.innerHTML = htmlString.trim();
    const newElement = newElementContainer.content.firstChild;

    return newElement;
  }
}

class Todo {
  constructor(title, body) {
    this.id = 1;
    this.title = title;
    this.body = body;
    this.createdAt = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' });
  }
}

class TodosService {
  static _todos = new Map();

  static getTodo(todoId) {
    return this._todos.get(todoId);
  }

  static getTodos() {
    return [...this._todos.values()];
  }

  static postTodo(todo) {
    this._todos.set(todo.id, todo);
  }

  static patchTodo(todo) {
    this._todos.set(todo.id, todo);
  }

  static deleteTodo(todoId) {
    this._todos.delete(todoId);
  }
}

class TodosComponent {
  static _todosList = document.querySelector('#todos-list');
  static _todoForm = document.querySelector('#todo-form');
  static _todoFormTitle = document.querySelector('#todo-form-title');
  static _todoFormBody = document.querySelector('#todo-form-body');

  static initialize() {
    this._todosList.innerHTML = '';
    this._todosList.append(...TodosService.getTodos());

    this._todoForm.onsubmit = this._onSubmit.bind(this);
  }

  static onDelete(evt) {

  }

  static _onSubmit(evt) {
    evt.preventDefault();

    const newTodo = new Todo(this._todoFormTitle.value, this._todoFormBody.value);
    TodosService.postTodo(newTodo);

    this._addNewTodoElementToList(this._createTodoElement(newTodo));
    this._clearTodoForm();
  }

  static _createTodoElement(todo) {
    const newTodoElement = DOMService.createElementFromHTMLString(`
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

  static _addNewTodoElementToList(todoEle) {
    this._todosList.prepend(todoEle);
  }

  static _clearTodoForm() {
    this._todoForm.reset();
  }
}

class TodosMenuComponent {
  static _menu = this._createMenu();

  static openMenu(evt) {
    document.body.append(this._menu);
  }

  static closeMenu(evt) {
    if (evt.target.id === 'modal-container') {
      this._menu.remove();
    }
  }

  static _createMenu() {
    const menu = DOMService.createElementFromHTMLString(`
      <div id="modal-container">
        <ul id="todo-menu">
          <li data-option="edit">Edit</li>
          <li data-option="delete">Delete</li>
        </ul>
      </div>
    `);

    menu.onclick = this.closeMenu.bind(this);

    return menu;
  }
}

class AppController {
  static _components = [
    TodosComponent,
  ];

  static start() {
    this._components.forEach(component => component.initialize());
  }
}

AppController.start();
