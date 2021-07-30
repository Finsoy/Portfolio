import './win-modal.scss';
import { BaseComponent } from '../base_component';

export class WinModal extends BaseComponent {
  private modelCar = '';

  private time = 0;

  constructor() {
    super('div', ['modal-inner']);
  }

  render() {
    this.element.innerHTML = `         
            <!-- Modal -->
            <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    Win ${this.modelCar} arrived in ${this.time} seconds!!!
                  </div>
                </div>
              </div>
            </div>
        `;
  }

  open(model: string, time: number) {
    this.modelCar = model;
    this.time = time;
    this.element.classList.add('active');
    this.render();
  }

  close() {
    this.element.classList.remove('active');
    this.render();
  }
}
