import './garage.scss';
import { BaseComponent } from '../base_component';
import { ICar } from '../../shared/ICar';
import { CreateField } from '../create-field/create-field';
import { UpdateField } from '../update-field/update-field';
import { CarField } from '../car-field/car-field';
import { CarTrack } from '../car-field/car-track/car-track';
import { WinModal } from '../win-modal/win-modal';

const WIDTH_CAR = 170;

type Response = {
  velocity: number;
  distance: number;
};

export class Garage extends BaseComponent {
  private countFinishedCar = 0;

  winCar: ICar = {
    name: 'test',
    color: 'test',
    id: 0,
  };

  private readonly garageTitle: BaseComponent;

  private readonly pageNumber: BaseComponent;

  private countCars = 0;

  private currentPage = 0;

  readonly createField: CreateField;

  readonly updateField: UpdateField;

  readonly btnRace: BaseComponent;

  private readonly btnReset: BaseComponent;

  private readonly btnGenerateCars: BaseComponent;

  private readonly carField: CarField;

  arrayCars: Array<ICar> = [];

  private selectedCar: ICar = this.arrayCars[0];

  private readonly maxCarsInPage: number = 7;

  private myRequestAnimationFrame = 0;

  private maxSpeed = 0;

  private winModal: WinModal;

  countWins = 0;

  winTime = 0;

  constructor() {
    super('div', ['garage']);

    this.winModal = new WinModal();
    this.element.append(this.winModal.element);

    this.garageTitle = new BaseComponent(
      'h2',
      ['text-white', 'm-2'],
      `Garage (${this.countCars})`
    );
    this.element.append(this.garageTitle.element);

    this.pageNumber = new BaseComponent(
      'h3',
      ['text-white', 'm-2'],
      `Page #${this.currentPage}`
    );
    this.element.append(this.pageNumber.element);

    this.createField = new CreateField();
    this.createField.render(this.element);

    this.updateField = new UpdateField();
    this.updateField.render(this.element);

    this.btnRace = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-secondary', 'ms-2', 'me-1', 'text-uppercase'],
      'Race'
    );
    this.btnReset = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-secondary', 'm-1', 'text-uppercase'],
      'Reset'
    );
    this.btnGenerateCars = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-light', 'm-1', 'text-uppercase'],
      'Generate Cars'
    );

    this.element.append(this.btnRace.element);
    this.element.append(this.btnReset.element);
    this.element.append(this.btnGenerateCars.element);

    this.carField = new CarField();
    this.element.append(this.carField.element);

    this.carField.btnNext.element.addEventListener('click', () => {
      this.displayNextPage();
    });
    this.carField.btnPrev.element.addEventListener('click', () => {
      this.displayPrevPage();
    });
    this.updateField.btnUpdate.element.addEventListener('click', async () => {
      await this.updateCar();
    });
    this.btnGenerateCars.element.addEventListener('click', () => {
      this.createField.add100Car();
      this.displayCars();
    });
  }

  async getCars(url: string) {
    this.arrayCars = [];
    const response = await fetch(url);
    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      const json: Array<ICar> = await response.json();
      json.forEach((item) => {
        this.arrayCars.push(item);
      });
      await this.getCountCars(url);
    } else {
      alert(`Ошибка HTTP: ${response.status}`);
    }
  }

  async displayCars() {
    await this.getCars('http://127.0.0.1:3000/garage');
    this.carField.element.innerHTML = ``;

    const start = this.maxCarsInPage * this.currentPage;
    const end = start + this.maxCarsInPage;
    const paginatedItems = this.arrayCars.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
      const item = paginatedItems[i];
      this.carField.addCarTrack();
      const currentCarTrack = this.carField.getCarTrack();
      this.carField.carTrack.createCar(item.name, item.color);

      this.carField.carTrack.btnRemove?.element.addEventListener(
        'click',
        () => {
          this.deleteCar('http://127.0.0.1:3000/garage', item.id);
        }
      );
      this.carField.carTrack.btnSelect?.element.addEventListener(
        'click',
        () => {
          this.selectedCar = item;
        }
      );
      this.carField.carTrack.startEngine?.element.addEventListener(
        'click',
        async () => {
          const response = await this.startOrStopCarEngine(item, 'started');
          await this.animate(currentCarTrack, item, response);
        }
      );
      this.carField.carTrack.stopEngine?.element.addEventListener(
        'click',
        async () => {
          currentCarTrack.startEngine?.element.classList.remove('disable');
          this.stopAnimate(currentCarTrack);
          const response = await this.startOrStopCarEngine(item, 'stopped');
        }
      );
      this.btnRace.element.addEventListener('click', async () => {
        this.btnRace.element.classList.add('disable');
        const response = await this.startOrStopCarEngine(item, 'started');
        await this.animate(currentCarTrack, item, response);
      });
      this.btnReset.element.addEventListener('click', async () => {
        this.btnRace.element.classList.remove('disable');
        const response = await this.startOrStopCarEngine(item, 'stopped');
        this.stopAnimate(currentCarTrack);
        await this.startOrStopCarEngine(item, 'stopped');
        this.stopAnimate(currentCarTrack);
        currentCarTrack.startEngine?.element.classList.remove('disable');
      });
    }
    this.carField.addButtons();
  }

  displayNextPage() {
    this.currentPage++;
    this.pageNumber.element.innerHTML = `
        Page #${this.currentPage}
        `;
    this.displayCars();
  }

  displayPrevPage() {
    this.currentPage--;
    this.pageNumber.element.innerHTML = `
        Page #${this.currentPage}
        `;
    this.displayCars();
  }

  async getCountCars(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    this.countCars = json.length;
    this.garageTitle.element.innerHTML = `
        Garage (${this.countCars})`;
  }

  async deleteCar(url: string, idCar: number) {
    const deleteUrl = `${url}/${idCar}`;
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
    });
    await this.displayCars();
  }

  async updateCar() {
    await this.updateField.updateCar(
      'http://127.0.0.1:3000/garage',
      this.selectedCar
    );
    await this.displayCars();
  }

  async startOrStopCarEngine(car: ICar, status: string) {
    this.countCars = 0;
    const response = await fetch(
      `http://127.0.0.1:3000/engine?id=${car.id}&status=${status}`
    );
    const json = await response.json();
    return {
      velocity: json.velocity,
      distance: json.distance,
    };
  }

  async getDriveStatusCar(car: ICar) {
    this.countCars = 0;
    try {
      const status = 'drive';
      const response = await fetch(
        `http://127.0.0.1:3000/engine?id=${car.id}&status=${status}`
      );
      const json = await response.json();
      return json.success;
    } catch (e) {
      return false;
    }
  }

  async animate(currentCarTrack: CarTrack, car: ICar, response: Response) {
    const startTime = new Date().getSeconds();
    let distanceTraveled = 0;
    const svgCar: HTMLElement =
      currentCarTrack.element.querySelector('#car-svg')!;

    const step = () => {
      currentCarTrack.startEngine?.element.classList.add('disable');

      const maxWidth = window.innerWidth;
      const finishTime = response.distance / response.velocity / 5; // added 5 to reduce the speed of the car animation
      const velocity = maxWidth / finishTime;
      distanceTraveled += velocity;
      svgCar.style.transform = `translateX(${distanceTraveled}px)`;

      if (response.velocity > this.maxSpeed) {
        this.maxSpeed = response.velocity;
      }

      if (distanceTraveled < maxWidth - WIDTH_CAR) {
        this.myRequestAnimationFrame = requestAnimationFrame(step);
      } else {
        this.countWins++;
        if (car !== this.winCar) {
          this.countWins = 0;
        }
        this.countFinishedCar++;
        if (this.countFinishedCar <= 1) {
          const endTime = new Date().getSeconds();
          this.winCar = car;
          this.winTime = endTime - startTime;
          this.winModal.open(car.name, this.winTime);
          setTimeout(() => {
            this.winModal.close();
          }, 3000);
        }
      }
    };

    this.myRequestAnimationFrame = requestAnimationFrame(step);

    const status = await this.getDriveStatusCar(car);
    if (!status) {
      await cancelAnimationFrame(this.myRequestAnimationFrame);
    }
  }

  stopAnimate(currentCarTrack: CarTrack) {
    const svgCar: HTMLElement =
      currentCarTrack.element.querySelector('#car-svg')!;
    svgCar.style.transform = 'translateX(0px)';
    console.log(currentCarTrack.element);
    cancelAnimationFrame(this.myRequestAnimationFrame);
  }
}
