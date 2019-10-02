export class DomService {
  static createElementFromHTMLString<T>(htmlString: string): T {
    const newElementContainer = document.createElement('template');
    newElementContainer.innerHTML = htmlString.trim();
    const newElement = newElementContainer.content.firstChild;

    return newElement as T;
  }
}
