import './timer.scss';
import { BaseComponent } from '../base.component';

const ONE_SECOND = 1000;

export class Timer extends BaseComponent {
  private minutes: BaseComponent;

  private numberOfMinutes: number;

  private numberOfSeconds: number;

  private interval: NodeJS.Timeout | null = null;

  constructor() {
    super('div', ['timer']);
    this.minutes = new BaseComponent('div', ['span']);
    this.element.appendChild(this.minutes.element);

    this.numberOfMinutes = 0;
    this.numberOfSeconds = 0;
  }

  timerFunction(): void {
    const currentDate: number = new Date().getTime();
    this.interval = setInterval(() => {
      const newDate: number = new Date().getTime();
      const distance: number = newDate - currentDate;
      this.numberOfMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.numberOfSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.minutes.element.innerHTML = `${Timer.validateTime(
        this.numberOfMinutes
      )}:${Timer.validateTime(this.numberOfSeconds)}`;
    }, ONE_SECOND);
  }

  private static validateTime(time: number) {
    return time >= 10 ? time : `0${time}`;
  }

  clearTimer(): void {
    this.minutes.element.innerHTML = `00:00`;
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getMinutesTime(): number {
    return this.numberOfMinutes * 60;
  }

  getSecondsTime(): number {
    return this.numberOfSeconds;
  }
}
