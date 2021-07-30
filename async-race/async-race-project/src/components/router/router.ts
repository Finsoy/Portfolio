import { Garage } from '../pages/garage';
import { Winners } from '../pages/winners';

interface T {
  path: string;
  component: HTMLElement;
}

export class Router {
  rootElement: HTMLElement;

  readonly garage: Garage;

  readonly winners: Winners;

  private readonly routes: Array<T>;

  private currentRouteName: string;

  private currentRoute: HTMLElement;

  private defaultRoute: T;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;

    this.garage = new Garage();

    this.winners = new Winners();

    this.routes = [
      {
        path: 'garage',
        component: this.garage.element,
      },
      {
        path: 'winners',
        component: this.winners.element,
      },
    ];

    this.defaultRoute = {
      path: 'default',
      component: this.garage.element,
    };

    this.currentRouteName = this.routes[0].path;
    this.currentRoute = this.routes[0].component;
  }

  render(): HTMLElement {
    this.rootElement.innerHTML = ``;
    this.currentRouteName = window.location.hash.slice(1);

    this.routes.forEach((item) => {
      if (item.path === this.currentRouteName) {
        this.currentRoute = item.component;
      }
    });

    if (this.currentRouteName === 'winners') {
      console.log('заглушка');
      this.winners.addLine(
        this.garage.winCar,
        this.garage.countWins,
        this.garage.winTime
      );
      this.winners.render();
    } else {
      this.garage.getCountCars('http://127.0.0.1:3000/garage');
      this.garage.displayCars();
    }

    return this.currentRoute ? this.currentRoute : this.defaultRoute.component;
  }
}
