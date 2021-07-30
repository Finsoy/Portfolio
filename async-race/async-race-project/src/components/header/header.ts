import { BaseComponent } from '../base_component';
import './header.scss';

export class Header extends BaseComponent {
  private readonly toGarage: BaseComponent;

  private readonly toWinners: BaseComponent;

  constructor() {
    super('nav', ['navbar', 'navbar-light', 'bg-light']);
    this.toGarage = new BaseComponent(
      'a',
      ['text-dark', 'fs-5', 'btn', 'ms-2', 'p-1'],
      'To Garage'
    );
    this.toGarage.element.setAttribute('href', '#garage');

    this.toWinners = new BaseComponent(
      'a',
      ['text-dark', 'fs-5', 'btn', 'p-1', 'ms-3'],
      'To Winners'
    );
    this.toWinners.element.setAttribute('href', '#winners');

    this.element.append(this.toGarage.element);
    this.element.append(this.toWinners.element);
  }
}
