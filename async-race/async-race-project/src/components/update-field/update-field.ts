import { BaseComponent } from '../base_component';
import { ICar } from '../../shared/ICar';

export class UpdateField extends BaseComponent {
  private readonly inputName: HTMLInputElement;

  private readonly selectColor: HTMLInputElement;

  readonly btnUpdate: BaseComponent;

  constructor() {
    super('div', ['d-block', 'm-0']);
    this.inputName = document.createElement('input');
    this.inputName.className = 'm-2 input-name';
    this.inputName.setAttribute('type', 'text');
    this.element.append(this.inputName);

    this.selectColor = document.createElement('input');
    this.selectColor.className = 'm-1';
    this.selectColor.setAttribute('type', 'color');
    this.element.append(this.selectColor);

    this.btnUpdate = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-light', 'm-2', 'text-uppercase'],
      'Update'
    );
    this.element.append(this.btnUpdate.element);
  }

  render(parentNode: HTMLElement) {
    parentNode.append(this.element);
  }

  async updateCar(url: string, car: ICar) {
    car.name = this.inputName.value;
    car.color = this.selectColor.value;
    const updateUrl = `${url}/${car.id}`;
    const response = await fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(car),
    });
  }
}
