import { BaseComponent } from '../base_component';
import { CarTrack } from './car-track/car-track';

export class CarField extends BaseComponent {
  carTrack: CarTrack;

  readonly btnPrev: BaseComponent;

  readonly btnNext: BaseComponent;

  constructor() {
    super('div', ['car-field', 'mt-3', 'ms-2']);
    this.carTrack = new CarTrack();
    this.element.append(this.carTrack.element);

    this.btnPrev = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-secondary', 'm-1', 'text-uppercase'],
      'Prev'
    );
    this.btnNext = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-secondary', 'm-1', 'text-uppercase'],
      'Next'
    );

    this.element.append(this.btnPrev.element);
    this.element.append(this.btnNext.element);
  }

  addCarTrack() {
    this.carTrack = new CarTrack();
    this.element.append(this.carTrack.element);
  }

  getCarTrack() {
    return this.carTrack;
  }

  addButtons() {
    this.element.append(this.btnPrev.element);
    this.element.append(this.btnNext.element);
  }
}
