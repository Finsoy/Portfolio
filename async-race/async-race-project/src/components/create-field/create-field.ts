import './create-field.scss';
import { BaseComponent } from '../base_component';
import { ICar } from '../../shared/ICar';
import { generateCarsFunction } from '../../shared/genereateCarsFunction';

export class CreateField extends BaseComponent {
  private readonly inputName: HTMLInputElement;

  private readonly selectColor: HTMLInputElement;

  readonly btnCreate: BaseComponent;

  private readonly garageUrl: string = 'http://127.0.0.1:3000/garage';

  carId = 0;

  constructor() {
    super('div', ['d-block']);
    this.inputName = document.createElement('input');
    this.inputName.className = 'm-2 input-name';
    this.inputName.setAttribute('type', 'text');
    this.element.append(this.inputName);

    this.selectColor = document.createElement('input');
    this.selectColor.className = 'm-1';
    this.selectColor.setAttribute('type', 'color');
    this.element.append(this.selectColor);

    this.btnCreate = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-light', 'm-2', 'text-uppercase'],
      'Create'
    );
    this.element.append(this.btnCreate.element);

    this.btnCreate.element.addEventListener('click', () => {
      this.addCar({
        name: this.inputName.value,
        color: this.selectColor.value,
        id: this.carId,
      });
    });
  }

  render(parentNode: HTMLElement) {
    parentNode.append(this.element);
  }

  async addCar(car: ICar) {
    const { garageUrl } = this;
    const response = await fetch(garageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(car),
    });
  }

  async add100Car() {
    let i = 0;
    while (i < 100) {
      const randomCar = generateCarsFunction();
      randomCar.id = this.carId;
      this.addCar(randomCar);
      i++;
    }
  }
}
