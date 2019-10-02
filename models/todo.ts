export class Todo {
  id: number;
  title: string;
  body: string;
  createdAt: string;

  constructor(title: string, body: string) {
    this.id = 1;
    this.title = title;
    this.body = body;
    this.createdAt = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' });
  }
}
