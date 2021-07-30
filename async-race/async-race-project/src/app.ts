import { Router } from './components/router/router';
import { Header } from './components/header/header';

export class App {
  private readonly rootElement: HTMLElement;

  private router: Router;

  private header: Header;

  constructor(element: HTMLElement) {
    this.rootElement = element;

    this.header = new Header();
    document.body.prepend(this.header.element);

    this.router = new Router(this.rootElement);
    this.rootElement.append(this.router.render());
    window.addEventListener('hashchange', () => {
      this.router.garage.btnRace.element.classList.remove('disable');

      this.rootElement.append(this.router.render());
    });
    this.router.garage.createField.btnCreate.element.addEventListener(
      'click',
      () => {
        this.rootElement.append(this.router.render());
      }
    );
  }
}
