import './about.scss';
import rule1_img from '../../assets/rules1.png';
import rule2_img from '../../assets/rules2.png';
import rule3_img from '../../assets/rules3.png';
import { BaseComponent } from '../base.component';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about__field']);
    const title = new BaseComponent('h1', ['about__title']);
    const rule1 = new BaseComponent('div', ['about__rules']);
    const rule2 = new BaseComponent('div', ['about__rules']);
    const rule3 = new BaseComponent('div', ['about__rules']);

    title.element.textContent = 'How to play?';

    rule1.element.innerHTML = `
        <div class='about__logo'>
        <img src=${rule1_img} alt='rules-icon'>
        </div>
        <span class='rules__text'>Register new player in game</span>
    `;
    rule2.element.innerHTML = `
        <div class='about__logo'>
        <img src=${rule2_img} alt='rules-icon'>
        </div>
        <span class='rules__text'>Configure your game settings</span>
    `;
    rule3.element.innerHTML = `
        <div class='about__logo'>
        <img src=${rule3_img} alt='rules-icon'>
        </div>
        <span class='rules__text'>Start you new game! Remember card positions and match it before times up.</span>
    `;

    this.element.appendChild(title.element);
    this.element.appendChild(rule1.element);
    this.element.appendChild(rule2.element);
    this.element.appendChild(rule3.element);
  }
}
