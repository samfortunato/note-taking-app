import { TodosService } from '../services/todos-service';
import { DomService } from '../services/dom-service';
import { TodosComponent } from '../components/todos-component';
import { TodosMenuComponent } from '../components/todos-menu-component';

export class AppEngine {
  private static services = [
    DomService,
    TodosService,
  ];

  private static components = [
    TodosComponent,
    TodosMenuComponent,
  ];

  static start(): void {
    this.services.forEach(service => service.initialize());
    this.components.forEach(component => component.initialize());
  }
}
