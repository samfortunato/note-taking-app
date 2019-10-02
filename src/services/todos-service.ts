import { Todo } from '../models/todo';

export class TodosService {
  private static todos: Map<number, Todo>;

  static initialize(): void {
    this.todos = new Map<number, Todo>();
  }

  static getTodo(todoId: number): Todo {
    return this.todos.get(todoId);
  }

  static getTodos(): Todo[] {
    return [...this.todos.values()];
  }

  static postTodo(todo: Todo): void {
    this.todos.set(todo.id, todo);
  }

  static patchTodo(todo: Todo): void {
    this.todos.set(todo.id, todo);
  }

  static deleteTodo(todoId: number): void {
    this.todos.delete(todoId);
  }
}
