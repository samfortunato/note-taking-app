import { Service } from "../models/service";

export class DomService implements Service {
  static initialize(): void { }

  static createElementFromHTMLString(htmlString: string): HTMLElement {
    const newElementContainer = document.createElement('template');
    newElementContainer.innerHTML = htmlString.trim();
    const newElement = newElementContainer.content.firstChild;

    return newElement as HTMLElement;
  }
}
