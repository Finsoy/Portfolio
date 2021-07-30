import { About } from '../about/about';
import { Score } from '../score/score';
import { Settings } from '../settings/settings';

interface T {
  path: string;
  component: HTMLElement;
}

export class Router {
  rootElement: HTMLElement;

  readonly about: About;

  readonly score: Score;

  readonly settings: Settings;

  private readonly routes: Array<T>;

  private currentRouteName: string;

  private currentRoute: HTMLElement;

  private defaultRoute: T;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;

    this.about = new About();

    this.score = new Score();

    this.settings = new Settings();

    this.routes = [
      {
        path: '',
        component: this.about.element,
      },
      {
        path: 'score',
        component: this.score.element,
      },
      {
        path: 'settings',
        component: this.settings.element,
      },
    ];

    this.defaultRoute = {
      path: 'default',
      component: this.about.element,
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

    return this.currentRoute ? this.currentRoute : this.defaultRoute.component;
  }
}
