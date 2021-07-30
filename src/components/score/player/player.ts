import { BaseComponent } from '../../base.component';
import img from '../../../assets/avatar-icon.png';
import './player.scss';

export class Player extends BaseComponent {
  private readonly playerInfo: BaseComponent;

  private readonly playerImg: BaseComponent;

  private readonly infoContent: BaseComponent;

  private readonly playerName: BaseComponent;

  private readonly playerEmail: BaseComponent;

  private readonly playerScore: BaseComponent;

  private readonly scoreText: BaseComponent;

  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly scoreCount: number
  ) {
    super('div', ['player']);

    this.playerInfo = new BaseComponent('div', ['player__info']);

    this.playerImg = new BaseComponent('img', ['player__avatar']);
    this.playerImg.element.setAttribute('src', `${img}`);
    this.playerImg.element.setAttribute('alt', `avatar`);

    this.infoContent = new BaseComponent('div', []);

    this.playerName = new BaseComponent('div', ['player-name'], name);

    this.playerEmail = new BaseComponent('div', ['player-email'], email);

    this.playerScore = new BaseComponent('div', ['player__score'], 'Score:');

    this.scoreText = new BaseComponent(
      'span',
      ['score__text'],
      `${scoreCount}`
    );

    this.element.appendChild(this.playerInfo.element);
    this.element.appendChild(this.playerScore.element);

    this.playerInfo.element.appendChild(this.playerImg.element);
    this.playerInfo.element.appendChild(this.infoContent.element);

    this.infoContent.element.appendChild(this.playerName.element);
    this.infoContent.element.appendChild(this.playerEmail.element);

    this.playerScore.element.appendChild(this.scoreText.element);
  }
}
