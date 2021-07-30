import { BaseComponent } from '../base_component';
import { ICar } from '../../shared/ICar';

export class Winners extends BaseComponent {
  private readonly winnersTitle: BaseComponent;

  private readonly pageNumber: BaseComponent;

  private countCars = 0;

  private countPage = 0;

  private table: BaseComponent;

  private tableHead: BaseComponent;

  private tableBody: BaseComponent;

  private tableBodyElement: BaseComponent;

  private iterator = 1;

  constructor() {
    super('div', ['winners']);
    this.winnersTitle = new BaseComponent(
      'h1',
      ['text-white', 'm-3'],
      `Winners (${this.countCars})`
    );
    this.element.append(this.winnersTitle.element);

    this.pageNumber = new BaseComponent(
      'h3',
      ['text-white', 'm-3'],
      `Page #${this.countPage}`
    );
    this.element.append(this.pageNumber.element);

    this.table = new BaseComponent('table', ['table', 'table-success']);
    this.tableHead = new BaseComponent('thead');
    this.tableHead.element.innerHTML = `
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Car</th>
      <th scope="col">Name</th>
      <th scope="col">Wins</th>
      <th scope="col">Time</th>
    </tr>
    `;
    this.tableBody = new BaseComponent('tbody');
    this.tableBodyElement = new BaseComponent('tr');
    this.element.append(this.table.element);
  }

  addLine(car: ICar, wins = 0, time = 0) {
    const bodyElement = new BaseComponent('tr');
    bodyElement.element.innerHTML = `
            <th scope="row">${this.iterator++}</th>
        <td>${car.color}</td>
        <td>${car.name}</td>
        <td>${wins}</td>
        <td>${time}</td>
    `;
    this.tableBody.element.append(bodyElement.element);
  }

  render() {
    this.table.element.append(this.tableHead.element);
    this.table.element.append(this.tableBody.element);
  }
}
