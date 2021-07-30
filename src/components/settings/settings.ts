import './settings.scss';
import { BaseComponent } from '../base.component';
import { Select } from './select/select';

export class Settings extends BaseComponent {
  public selectedCardsSettings: string;

  public selectedDififcultSettings: string;

  private readonly selectCards: Select;

  private readonly selectDifficult: Select;

  private readonly cardsTitle: BaseComponent;

  private readonly difficultTitle: BaseComponent;

  constructor() {
    super('div', ['settings__field']);

    this.selectCards = new Select(['select game type', 'cars', 'animals']);
    this.selectCards.setAttribute('id', 'cards');
    this.selectDifficult = new Select(['select type', '4x3', '6x4']);
    this.selectDifficult.setAttribute('id', 'difficult');

    this.cardsTitle = new BaseComponent(
      'div',
      ['settings__title'],
      'Game cards'
    );
    this.difficultTitle = new BaseComponent(
      'div',
      ['settings__title'],
      'Difficulty'
    );

    this.selectedCardsSettings = 'animals';
    this.selectedDififcultSettings = '4x3';

    this.selectCards.select.addEventListener('click', () => {
      this.selectedCardsSettings = this.selectCards.select.value;
    });

    this.selectDifficult.select.addEventListener('click', () => {
      this.selectedDififcultSettings = this.selectDifficult.select.value;
    });

    this.element.appendChild(this.cardsTitle.element);
    this.element.appendChild(this.selectCards.select);
    this.element.appendChild(this.difficultTitle.element);
    this.element.appendChild(this.selectDifficult.select);
  }
}
