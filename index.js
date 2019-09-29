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

  static _onSubmit(evt) {
    evt.preventDefault();

    const newTodo = new Todo(this._todoFormTitle.value, this._todoFormBody.value);
    TodosService.postTodo(newTodo);

    this._addNewTodoElementToList(this._createTodoElement(newTodo));
    this._clearTodoForm();
  }

  static _createTodoElement(todo) {
    const newTodoElement = document.createElement('li');
    newTodoElement.className = 'todo'
    
    const todoTitleElement = document.createElement('h3');
    todoTitleElement.textContent = todo.title;
    const todoCreatedAtElement = document.createElement('h4');
    todoCreatedAtElement.textContent = todo.createdAt;
    const todoBodyElement = document.createElement('p');
    todoBodyElement.textContent = todo.body;

    newTodoElement.append(todoTitleElement, todoCreatedAtElement, todoBodyElement);

    return newTodoElement;
  }

  static _addNewTodoElementToList(todoEle) {
    this._todosList.prepend(todoEle);
  }

  static _clearTodoForm() {
    this._todoForm.reset();
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
