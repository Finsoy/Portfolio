import './game.scss';
import { BaseComponent } from '../base.component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { delay } from '../../shared/delay';
import { Timer } from '../timer/timer';
import { SHOW_TIME } from '../../shared/constants';
import { Scoring } from '../scoring/scoring';
import { ModalWin } from '../modal/modal-win/modal-win';
import { Database } from '../Database/database';
import { Modal } from '../modal/modal';

const FLIP_DELAY = 1500;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly modal: Modal;

  private readonly database: Database;

  private activeCard?: Card;

  private isAnimation = false;

  private readonly timer: Timer;

  private wrongCompare = 0;

  private compare = 0;

  private scoring: Scoring;

  private countSuccsessCompare = 0;

  private modalWin: ModalWin;

  public isGameOver: boolean;

  constructor() {
    super('div', ['field']);

    this.database = new Database('finsoyDB');
    this.database.init();

    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);

    this.modal = new Modal();
    document.body.append(this.modal.element);

    this.timer = new Timer();

    this.scoring = new Scoring();

    this.modalWin = new ModalWin();
    this.element.append(this.modalWin.element);

    this.isGameOver = false;
  }

  async newGame(images: string[], settingsField: string): Promise<void> {
    this.isGameOver = false;
    this.wrongCompare = 0;
    this.compare = 0;
    this.countSuccsessCompare = 0;
    this.scoring.clearScoreResult();
    this.cardsField.clear();
    this.timer.clearTimer();
    this.element.insertBefore(this.timer.element, this.cardsField.element);

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      if (settingsField === '6x4') {
        this.cardsField.element.style.paddingTop = '5px';
        card.changeSizeFieldToBig();
      } else card.changeSizeFieldToNormal();
      card.element.addEventListener('click', () =>
        this.cardHandler(card, settingsField)
      );
    });

    this.cardsField.addCards(cards);
    setTimeout(() => {
      this.timer.timerFunction();
    }, SHOW_TIME);
  }

  private async cardHandler(card: Card, settingsField: string) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();
    this.activeCard?.cardStandart();
    card.cardStandart();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.cardFailed();
      card.cardFailed();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.wrongCompare++;
    } else {
      this.activeCard.cardSuccsess();
      card.cardSuccsess();
      await delay(FLIP_DELAY);
      this.activeCard?.cardStandart();
      card.cardStandart();
      // SCORE RESULT
      this.scoring.scoreResult(
        this.compare,
        this.wrongCompare,
        this.timer.getSecondsTime() + this.timer.getMinutesTime()
      );
      this.countSuccsessCompare++;
      if (settingsField === '4x3') {
        if (this.countSuccsessCompare === 6) {
          this.gameOver();
        }
      } else if (settingsField === '6x4') {
        if (this.countSuccsessCompare === 10) {
          this.gameOver();
        }
      }
    }
    this.compare++;
    this.activeCard = undefined;
    this.isAnimation = false;
  }

  getScore(): number {
    return this.scoring.getScoreResult();
  }

  gameOver() {
    this.modalWin.changeTime(
      this.timer.getMinutesTime(),
      this.timer.getSecondsTime()
    );
    this.modalWin.changeTextWin();
    this.modalWin.openModal();
    this.isGameOver = true;
    this.database.addUserToDB(
      this.modal.modalForm.getFirstNameProperties(),
      this.modal.modalForm.getLastNameProperties(),
      this.modal.modalForm.getEmailProperties(),
      this.getScore()
    );
    console.log(
      this.modal.modalForm.getFirstNameProperties(),
      this.modal.modalForm.getLastNameProperties(),
      this.modal.modalForm.getEmailProperties(),
      this.getScore()
    );
    this.timer.clearTimer();
  }

  openModal() {
    this.modal.openModal();
  }

  readFromDatabase(): Promise<Array<IUser>> {
    return this.database.readAll();
  }

  getUser(): Promise<IUser> {
    return this.database.getUser();
  }
}
