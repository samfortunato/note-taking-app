import { DomService } from '../services/dom-service';

export class TodosMenuComponent {
  private static menu: HTMLDivElement;

  static initialize(): void {
    this.menu = this.createMenu();
  }

  static openMenu(): void {
    document.body.append(this.menu);
  }

  static closeMenu(evt: MouseEvent): void {
    if ((evt.target as HTMLElement).id === 'modal-container') {
      this.menu.remove();
    }
  }

  private static createMenu(): HTMLDivElement {
    const menu = DomService.createElementFromHTMLString(`
      <div id="modal-container">
        <ul id="todo-menu">
          <li data-option="edit">Edit</li>
          <li data-option="delete">Delete</li>
        </ul>
      </div>
    `);

    menu.onclick = this.closeMenu.bind(this);

    return menu as HTMLDivElement;
  }
}
