import { TodosComponent } from '../components/todos-component';

export class AppController {
  private static components = [
    TodosComponent,
  ];

  static start(): void {
    this.components.forEach(component => component.initialize());
  }
}
