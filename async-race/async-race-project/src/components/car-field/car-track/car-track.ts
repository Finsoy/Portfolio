import './car-track.scss';
import { BaseComponent } from '../../base_component';
import { carSvg } from '../../../../public/car-svg.svg';
import { finishSvg } from '../../../../public/finish.svg';

export class CarTrack extends BaseComponent {
  btnSelect: BaseComponent | undefined;

  btnRemove: BaseComponent | undefined;

  startEngine: BaseComponent | undefined;

  stopEngine: BaseComponent | undefined;

  private track: BaseComponent | undefined;

  car: BaseComponent | undefined;

  private carName: BaseComponent | undefined;

  private carColor: string | undefined;

  constructor() {
    super('div', ['car-track']);
  }

  createCar(name = '', color = '#fff') {
    this.btnSelect = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-light', 'm-1', 'text-uppercase'],
      'Select'
    );
    this.btnRemove = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-light', 'm-1', 'text-uppercase'],
      'Remove'
    );
    this.startEngine = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-secondary', 'm-1', 'text-uppercase'],
      'Start Engine'
    );
    this.stopEngine = new BaseComponent(
      'button',
      ['btn', 'btn-sm', 'btn-secondary', 'm-1', 'text-uppercase'],
      'Stop Engine'
    );
    this.carName = new BaseComponent(
      'span',
      ['text-white', 'm-2', 'fw-bold'],
      `${name}`
    );
    this.car = new BaseComponent();
    this.carColor = `${color}`;
    this.car.element.innerHTML = `
                <div class="car-inner d-flex justify-content-between">
                <div id="car-svg">
                  <svg version="1.1" id="Cappa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    \t width="99.301px" height="35.301px" viewBox="0 25 99.301 40.301" style="enable-background:new 0 0 99.301 99.301;transform: scale(-1, 1);"
                    \t xml:space="preserve">
                    <g>
                    \t<g>
                    \t\t<path d="M31.174,55.464c-0.041-4.354-3.604-7.85-7.958-7.809c-4.353,0.043-7.848,3.604-7.807,7.957
                    \t\t\tc0.003,0.337,0.034,0.664,0.079,0.99c0.525,3.882,3.861,6.855,7.877,6.816c4.128-0.038,7.477-3.241,7.781-7.282
                    \t\t\tC31.163,55.915,31.176,55.69,31.174,55.464z M22.562,50.656l0.021,2.267c-0.248,0.066-0.479,0.167-0.694,0.299l-1.621-1.59
                    \t\t\tC20.924,51.123,21.704,50.782,22.562,50.656z M19.314,52.606l1.624,1.592c-0.124,0.219-0.219,0.449-0.28,0.695l-2.265,0.023
                    \t\t\tC18.501,54.056,18.822,53.271,19.314,52.606z M18.397,56.28l2.282-0.021c0.067,0.244,0.164,0.473,0.292,0.683l-1.596,1.626
                    \t\t\tC18.872,57.916,18.526,57.134,18.397,56.28z M20.359,59.516l1.588-1.619c0.211,0.12,0.444,0.21,0.686,0.271l0.022,2.273
                    \t\t\tC21.801,60.332,21.019,60.003,20.359,59.516z M28.177,54.823l-2.267,0.022c-0.064-0.247-0.165-0.477-0.292-0.691l1.592-1.624
                    \t\t\tC27.716,53.186,28.051,53.964,28.177,54.823z M23.926,50.643c0.862,0.112,1.648,0.438,2.312,0.932l-1.589,1.62
                    \t\t\tc-0.217-0.126-0.451-0.223-0.7-0.284L23.926,50.643z M24.019,60.428l-0.021-2.273c0.243-0.063,0.472-0.158,0.682-0.284
                    \t\t\tl1.618,1.591C25.647,59.96,24.872,60.303,24.019,60.428z M27.266,58.496l-1.631-1.601c0.121-0.214,0.224-0.439,0.287-0.688
                    \t\t\tl2.264-0.021C28.075,57.044,27.759,57.836,27.266,58.496z"/>
                    \t\t<path d="M84.348,47.333c-4.354,0.043-7.848,3.603-7.807,7.956c0.003,0.338,0.033,0.665,0.078,0.99
                    \t\t\tc0.525,3.882,3.861,6.854,7.877,6.816c4.129-0.038,7.478-3.242,7.781-7.283c0.018-0.223,0.03-0.446,0.028-0.674
                    \t\t\tC92.265,50.785,88.701,47.293,84.348,47.333z M83.693,50.332l0.021,2.267c-0.249,0.067-0.479,0.168-0.693,0.298l-1.621-1.59
                    \t\t\tC82.055,50.798,82.836,50.459,83.693,50.332z M80.445,52.281l1.625,1.594c-0.123,0.218-0.22,0.447-0.279,0.694l-2.266,0.023
                    \t\t\tC79.634,53.731,79.955,52.945,80.445,52.281z M79.529,55.956l2.283-0.021c0.065,0.244,0.163,0.473,0.291,0.684l-1.596,1.626
                    \t\t\tC80.005,57.591,79.656,56.81,79.529,55.956z M81.49,59.19l1.588-1.618c0.211,0.121,0.445,0.21,0.688,0.271l0.021,2.272
                    \t\t\tC82.933,60.006,82.152,59.679,81.49,59.19z M89.31,54.5l-2.267,0.021c-0.064-0.247-0.165-0.476-0.292-0.689l1.593-1.624
                    \t\t\tC88.848,52.861,89.183,53.64,89.31,54.5z M85.058,50.318c0.862,0.111,1.647,0.438,2.312,0.932l-1.588,1.621
                    \t\t\tc-0.217-0.127-0.451-0.224-0.701-0.286L85.058,50.318z M85.15,60.103l-0.021-2.271c0.243-0.064,0.472-0.159,0.683-0.286
                    \t\t\tl1.617,1.591C86.779,59.636,86.004,59.979,85.15,60.103z M88.398,58.17l-1.632-1.601c0.122-0.213,0.226-0.438,0.287-0.686
                    \t\t\tl2.265-0.022C89.207,56.719,88.892,57.512,88.398,58.17z"/>
                    \t\t<path d="M99.229,51.241c-0.091-0.193-0.259-0.342-0.463-0.405l-0.816-0.259l0.574-2.693c0.109-0.513-0.148-1.034-0.625-1.257
                    \t\t\tl-1.051-0.493l0.575-3.284c0.104-0.602-0.287-1.176-0.886-1.299c-6.532-1.347-38.256-9.82-58.813-3.12
                    \t\t\tc-6.015,1.959-15.298,5.51-15.298,5.51S8.512,46.298,0,54.643l0.762,1.776l-0.581,2.324c-0.045,0.178-0.007,0.365,0.102,0.515
                    \t\t\tc0.109,0.146,0.279,0.237,0.462,0.248l14.324,0.724l0.649-0.007c-0.644-1.037-1.088-2.212-1.26-3.479
                    \t\t\tc-0.057-0.41-0.085-0.769-0.088-1.12c-0.046-4.916,3.917-8.956,8.835-9.004c4.958,0,8.96,3.964,9.007,8.835
                    \t\t\tc0.002,0.257-0.012,0.51-0.031,0.763c-0.105,1.392-0.539,2.694-1.216,3.835l44.465-0.498l1.166-0.076
                    \t\t\tc-0.508-0.93-0.855-1.96-1.005-3.06c-0.058-0.41-0.085-0.769-0.088-1.12c-0.046-4.916,3.917-8.956,8.835-9.004
                    \t\t\tc4.958,0,8.961,3.965,9.007,8.836c0.002,0.257-0.011,0.51-0.03,0.763c-0.066,0.885-0.269,1.732-0.578,2.526l0.717-0.047
                    \t\t\tc0.852-0.057,1.617-0.534,2.039-1.274l2.033-1.015l1.719-4.228C99.324,51.657,99.318,51.435,99.229,51.241z M28.259,44.349
                    \t\t\tc-0.182-0.06-0.308-0.225-0.318-0.416c-0.01-0.188,0.098-0.368,0.271-0.446c0.92-0.419,2.458-1.072,4.591-1.843v3.862
                    \t\t\tC31.302,45.297,29.421,44.731,28.259,44.349z M40.88,42.98c-0.257-0.532-0.815-0.851-1.403-0.801
                    \t\t\tc-1.646,0.138-4.814,0.561-5.201,1.799c-0.189,0.605,1.947,1.601,1.947,1.601s-1.195,0.065-2.45,0.013v-4.291
                    \t\t\tc2.1-0.729,4.692-1.539,7.771-2.341c4.423-1.15,10.543-1.388,16.2-1.062l1.738,5.358c-9.862,1.476-18.68,1.829-18.68,1.829
                    \t\t\tl0.209-1.104C41.076,43.644,41.03,43.292,40.88,42.98z M62.466,42.778l-1.503-4.63c5.115,0.504,9.439,1.45,11.126,2.542
                    \t\t\tC69.033,41.533,65.734,42.22,62.466,42.778z"/>
                    \t</g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                </div>
                    
                  <svg class="me-3" height="35" viewBox="0 0 58 58" width="50" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="037---Waypoint-Flag" fill="#fff" fill-rule="nonzero" transform="translate(0 -1)"><path id="Shape" d="m14.678 58.9507 1.0678-.2984c1.0270794-.287091 1.6269982-1.3523947 1.34-2.3795l-12.2083-43.6888c-.17227193-.6165569-.58242107-1.139423-1.14021438-1.4535673-.5577933-.3141444-1.21753647-.3938324-1.83408562-.2215327l-.1379.0385c-1.28397381.3587434-2.0340279 1.6904218-1.6753 2.9744l12.2086 43.6888c.2870014 1.0271063 1.3522895 1.6270863 2.3794 1.3401z"/><path id="Shape" d="m57.67 28.42c-3.8715209-1.930437-7.4530885-4.3944478-10.64-7.32-.2678864-.245221-.3726619-.6216366-.27-.97 1.579074-5.9738125 2.7517572-12.04771023 3.51-18.18.12-1.02-.43-1.32-1.01-.62-11.38 13.61-31.07-2.49-42.79 9.88.14070884.2634479.25140182.5418575.33.83l7.92 28.36c11.74-12.22 31.36 3.78 42.72-9.8.58-.7.69-1.98.23-2.18z"/></g></g></svg>
                </div>
                
                <hr>
        `;

    this.element.append(this.btnSelect.element);
    this.element.append(this.btnRemove.element);
    this.element.append(this.startEngine.element);
    this.element.append(this.stopEngine.element);
    this.element.append(this.carName.element);

    this.track = new BaseComponent('div', ['track']);
    this.car.element.style.fill = `${this.carColor}`;

    this.track.element.append(this.car.element);
    this.element.append(this.track.element);
  }
}
