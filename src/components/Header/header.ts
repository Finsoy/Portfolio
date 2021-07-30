import './header.scss';
import question from '../../assets/question.svg';
import score from '../../assets/stars.svg';
import settings from '../../assets/settings.svg';
import { BaseComponent } from '../base.component';

export class Header extends BaseComponent {
  private readonly headerLogo: BaseComponent;

  private readonly menu: BaseComponent;

  readonly about: BaseComponent;

  readonly score: BaseComponent;

  readonly settings: BaseComponent;

  readonly registerBtn: BaseComponent;

  readonly startGameBtn: BaseComponent;

  readonly stopGameBtn: BaseComponent;

  constructor() {
    super('header', ['header']);

    this.headerLogo = new BaseComponent('img', ['header__logo']);
    this.menu = new BaseComponent('ul', ['header__menu']);
    this.about = new BaseComponent('li', ['header__item', 'item__about']);
    this.score = new BaseComponent('li', ['header__item']);
    this.settings = new BaseComponent('li', ['header__item']);

    this.about.element.innerHTML = `
         <a href='#'>
         <img class='item__logo' src=${question} alt='question'>
         About Game</a>
    `;
    this.score.element.innerHTML = `
        <a href='#score'>
        <img class='item__logo' src=${score} alt='stars'>
        Best Score</a>
    `;
    this.settings.element.innerHTML = `
        <a href='#settings'>
        <img class='item__logo' src=${settings} alt='settings'>
        Game Settings</a>
    `;

    this.registerBtn = new BaseComponent('button', ['register__btn']);
    this.registerBtn.element.innerText = 'register new player';

    this.startGameBtn = new BaseComponent('button', [
      'register__btn',
      'hidden-btn',
    ]);
    this.startGameBtn.element.textContent = 'Start Game';

    this.stopGameBtn = new BaseComponent('a', ['register__btn', 'hidden-btn']);
    this.stopGameBtn.element.setAttribute('href', '#');
    this.stopGameBtn.element.textContent = 'Stop Game';

    this.element.appendChild(this.headerLogo.element);
    this.element.appendChild(this.menu.element);
    this.element.appendChild(this.registerBtn.element);
    this.element.appendChild(this.startGameBtn.element);
    this.element.appendChild(this.stopGameBtn.element);
    this.menu.element.appendChild(this.about.element);
    this.menu.element.appendChild(this.score.element);
    this.menu.element.appendChild(this.settings.element);
  }

  render() {
    this.about.element.classList.remove('active');
    this.score.element.classList.remove('active');
    this.settings.element.classList.remove('active');
    const currentRouteName = window.location.hash.slice(1);

    if (currentRouteName === '') {
      this.about.element.classList.add('active');
    } else if (currentRouteName === 'score') {
      this.score.element.classList.add('active');
    } else if (currentRouteName === 'settings') {
      this.settings.element.classList.add('active');
    }
  }
}
