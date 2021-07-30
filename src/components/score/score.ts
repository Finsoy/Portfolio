import { BaseComponent } from '../base.component';
import './score.scss';
import { Player } from './player/player';

export class Score extends BaseComponent {
  readonly scoreTitle: BaseComponent;

  constructor() {
    super('div', ['score__field']);

    this.scoreTitle = new BaseComponent('h1', ['score__title'], 'Best Players');
    this.element.appendChild(this.scoreTitle.element);
  }

  addUser(user: IUser): HTMLElement {
    const title = this.scoreTitle;
    const player = new Player(
      `${user.firstName} ${user.lastName}`,
      user.email,
      user.score
    );
    return player.element;
  }

  addHr() {
    const title = this.scoreTitle;
    const hr = new BaseComponent('hr', []);
    return hr.element;
  }
}
