class Todo {
  constructor(title, body) {
    this.id = Random.uniqueId();
    this.title = title;
    this.body = body;
  }
}

class Todos {
  static _todos = new Map();
  static _todosHTMLList = document.querySelector('#todos-list');

  static addTodo(todo) {
    this._todos.set(todo.id, todo);
  }

  static updateTodo(todo) {
    this._todos.set(todo.id, todo);
  }

  static deleteTodo(todo) {
    this._todos.delete(todo.id);
  }
}

class TodosInterface {
  static _addTodoForm = document.querySelector('#todo-form');

  static initialize() {
    this._addTodoForm.onsubmit = this.handleSubmit.bind(this);
  }

  static handleSubmit(evt) {
    evt.preventDefault();


  }
}

class AppEngine {
  static _initialize() {
    TodosInterface.initialize();
  }

  static start() {
    this._initialize();
  }
}

AppEngine.start();
