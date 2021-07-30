import './modal-win.scss';
import { BaseComponent } from '../../base.component';

export class ModalWin extends BaseComponent {
  private readonly winInner: BaseComponent;

  private minutes: number;

  private seconds: number;

  private readonly winText: BaseComponent;

  private readonly winButton: BaseComponent;

  constructor() {
    super('div', ['win__wrapper', 'hidden']);

    this.winInner = new BaseComponent('div', ['win__inner']);

    this.minutes = 0;

    this.seconds = 0;

    this.winText = new BaseComponent('div', []);
    this.winButton = new BaseComponent('a', ['win__button'], 'ok');
    this.winButton.element.setAttribute('href', '#score');

    this.element.append(this.winInner.element);

    this.winInner.element.append(this.winText.element);
    this.winInner.element.append(this.winButton.element);

    this.element.addEventListener('click', (e) => {
      this.closeModal(e);
    });

    this.winButton.element.addEventListener('click', (e) => {
      this.closeModal(e);
    });
  }

  closeModal(e: MouseEvent) {
    if (e.target === this.element) {
      this.element.classList.add('hidden');
    }
  }

  openModal() {
    this.element.classList.remove('hidden');
  }

  changeTime(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  changeTextWin() {
    this.winText.element.textContent = `Congratulations! You successfully found all matches on ${this.minutes}:${this.seconds} minutes.`;
  }
}
