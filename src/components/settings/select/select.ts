import './select.scss';
import { BaseComponent } from '../../base.component';

export class Select {
  private readonly option: Array<BaseComponent>;

  readonly select: HTMLSelectElement;

  constructor(private readonly options: Array<string>) {
    this.select = document.createElement('select');
    this.select.className = 'select';
    this.option = [
      new BaseComponent('option', [], options[0]),
      new BaseComponent('option', [], options[1]),
      new BaseComponent('option', [], options[2]),
    ];
    this.option[0].element.setAttribute('disabled', '');
    this.option[0].element.setAttribute('selected', '');
    this.option.forEach((value) => {
      this.select.appendChild(value.element);
    });
  }

  setAttribute(type: string, value: string) {
    this.select.setAttribute(type, value);
  }
}
