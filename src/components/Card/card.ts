import './card.scss';
import { BaseComponent } from '../base.component';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  readonly card: BaseComponent;

  isFlipped = false;

  constructor(readonly image?: string) {
    super('div', ['card-container']);
    this.card = new BaseComponent('div', ['card']);

    this.card.element.innerHTML = `
        <div class="card__front" style="background-image: url('./images/${image}')"></div>
        <div class="card__color"></div>
        <div class="card__back"></div>
    `;

    this.element.appendChild(this.card.element);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip();
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  public cardSuccsess(): void {
    this.card.element.classList.add('succsess');
    this.card.element.classList.remove('failed');
  }

  public cardFailed(): void {
    this.card.element.classList.remove('succsess');
    this.card.element.classList.add('failed');
  }

  public cardStandart(): void {
    this.card.element.classList.remove('failed');
    this.card.element.classList.remove('succsess');
  }

  public changeSizeFieldToBig() {
    this.element.classList.add('big');
    this.card.element.classList.add('big');
  }

  public changeSizeFieldToNormal() {
    this.element.classList.remove('big');
    this.card.element.classList.remove('big');
  }
}
