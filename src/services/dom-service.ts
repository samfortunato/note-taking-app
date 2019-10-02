export class DomService {
  static initialize(): void { }

  static createElementFromHTMLString(htmlString: string): HTMLElement {
    const newElementContainer = document.createElement('template');
    newElementContainer.innerHTML = htmlString.trim();
    const newElement = newElementContainer.content.firstChild;

    return newElement as HTMLElement;
  }
}
