class Todo {
  constructor(title, body) {
    this.id = Random.uniqueId();
    this.title = title;
    this.body = body;
  }
}

class TodosController {
  static _todos = new Map();

  static getTodo(todoId) {
    return this._todos.get(todoId);
  }

  static getAllTodos() {
    return [...this._todos.values()];
  }

  static getAllTodoIds() {
    return [...this._todos.keys()];
  }

  static postTodo(todo) {
    const newTodo = new Todo(todo.title, todo.body);
    this._todos.set(newTodo.id, newTodo);
  }

  static patchTodo(todo) {
    this._todos.set(todo.id, todo);
  }

  static deleteTodo(todoId) {
    this._todos.delete(todoId);
  }

  static deleteAllTodos() {    
    this.getAllTodoIds().forEach(todoId => this._todos.delete(todoId));
  }
}

class TodosView {
  static todosList = document.querySelector('#todos-list');
  static todoForm = document.querySelector('#todo-form');
  static todoFormTodoTitle = document.querySelector('#todo-form #todo-title');
  static todoFormTodoBody = document.querySelector('#todo-form #todo-body');

  static initialize() {
    this.todoForm.addEventListener('submit', this.onPost.bind(this));
  }
  
  static onPost(evt) {
    evt.preventDefault();

    TodosController.postTodo({
      title: this.todoFormTodoTitle.value,
      body: this.todoFormTodoBody.textContent,
    });
  }

  static updateTodos() {
    
  }
}

class TodosComponent {
  static _parts = [TodosController, TodosView];

  static initialize() {
    this._parts.forEach(part => { if (part.initialize) part.initialize(); });
  }
}
