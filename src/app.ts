import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { CardsField } from './components/cards-field/cards-field';
import { Router } from './components/router/router';
import { BaseComponent } from './components/base.component';

export class App {
  private readonly rootElement: HTMLElement;

  private readonly game: Game;

  private readonly cardsField: CardsField;

  private readonly header: Header;

  private readonly about: About;

  private readonly appField: BaseComponent;

  private router: Router;

  constructor(element: HTMLElement) {
    this.rootElement = element;

    this.header = new Header();
    this.header.render();
    this.rootElement.appendChild(this.header.element);

    // Game field
    this.game = new Game();

    this.appField = new BaseComponent('div', ['app-field']);
    this.rootElement.append(this.appField.element);

    this.router = new Router(this.appField.element);
    this.appField.element.append(this.router.render());
    window.addEventListener('hashchange', () => {
      this.appField.element.append(this.router.render());
      this.game.element.remove();
      this.header.render();
      this.pushArrayToSCore();
    });

    this.header.registerBtn.element.addEventListener('click', (e) => {
      this.game.openModal();
      this.header.startGameBtn.element.classList.remove('hidden-btn');
      this.header.stopGameBtn.element.classList.remove('hidden-btn');
      this.header.registerBtn.element.classList.add('hidden-btn');
    });
    this.header.startGameBtn.element.addEventListener('click', async () => {
      await this.start();
      await this.readFromDatabase();
    });

    this.header.stopGameBtn.element.addEventListener('click', () => {
      this.header.render();
      this.router.render();
      console.log(`1111`);
    });

    // this.modal = new Modal();
    // this.rootElement.appendChild(this.modal.element);

    this.about = new About();

    this.cardsField = new CardsField();
  }

  async start(): Promise<void> {
    this.appField.element.innerHTML = ``;
    this.rootElement.appendChild(this.game.element);
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    let newCategory = categories[0];
    const cat = categories.forEach((item) => {
      if (item.category === this.router.settings.selectedCardsSettings) {
        newCategory = item;
      }
    });
    if (this.router.settings.selectedDififcultSettings === '4x3') {
      const arrForImages: Array<string> = [];
      let count = 0;
      const images = newCategory.images.forEach((name) => {
        if (count < 6) {
          count++;
          arrForImages.push(`${newCategory.category}/${name}`);
        }
      });
      await this.game.newGame(
        arrForImages,
        this.router.settings.selectedDififcultSettings
      );
    } else if (this.router.settings.selectedDififcultSettings === '6x4') {
      const arrForImages: Array<string> = [];
      let count = 0;
      const images = newCategory.images.forEach((name) => {
        if (count < 10) {
          count++;
          arrForImages.push(`${newCategory.category}/${name}`);
        }
      });
      await this.game.newGame(
        arrForImages,
        this.router.settings.selectedDififcultSettings
      );
    }
  }

  readFromDatabase() {
    this.game.readFromDatabase();
  }

  pushArrayToSCore() {
    this.router.score.element.innerHTML = ``;
    this.router.score.element.appendChild(this.router.score.scoreTitle.element);
    let countArrayFromDB = 0;
    this.game.readFromDatabase().then((res) => {
      res.sort((a, b) => b.score - a.score);
      res.forEach((item) => {
        console.log(item);
        if (countArrayFromDB <= 10) {
          this.router.score.element.appendChild(
            this.router.score.addUser(item)
          );
          this.router.score.element.appendChild(this.router.score.addHr());
          countArrayFromDB++;
        }
      });
    });
  }
}
