import { Todo } from '../models/todo';

export class TodosService {
  static _todos: Map<number, Todo>;

  static getTodo(todoId: number): Todo {
    return this._todos.get(todoId);
  }

  static getTodos(): Todo[] {
    return [...this._todos.values()];
  }

  static postTodo(todo: Todo): void {
    this._todos.set(todo.id, todo);
  }

  static patchTodo(todo: Todo): void {
    this._todos.set(todo.id, todo);
  }

  static deleteTodo(todoId: number): void {
    this._todos.delete(todoId);
  }
}
