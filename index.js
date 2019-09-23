class Todo {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

class Todos {
  static todos = [];
  static todosHTMLList = document.querySelector('#todos-list');

  static addTodo(todo) {
    this.todos.unshift(todo);
  }

  static createTodoHTML(todo) {
    const todoElement = document.createElement('li');
    const todoTitle = document.createElement('h2');
    const todoBody = document.createElement('p');

    todoTitle.textContent = todo.title;
    todoBody.textContent = todo.body;
    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoBody);

    return todoElement;
  }

  static refreshTodos() {
    this.todos.forEach((todo) => {
      this.todosHTMLList.appendChild(this.createTodoHTML(todo));
    });
  }
}

document.querySelector('#todo-form input[type="submit"]')
  .onclick((evt) => {
    evt.preventDefault();

    const todoTitle = document.querySelector('#todo-title').value;
    const todoBody = document.querySelector('#todo-body').textContent;
    const newTodo = new Todo(todoTitle, todoBody);

    Todos.addTodo(newTodo);
  });
