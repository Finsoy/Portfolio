import './modal-form.scss';
import { BaseComponent } from '../../base.component';
import { EMAIL_PATTERN, NAME_PATTERN } from '../../../shared/constants';

export class ModalForm extends BaseComponent {
  private readonly inputField1: BaseComponent;

  private readonly label1: BaseComponent;

  private readonly input1: HTMLInputElement;

  private readonly inputField2: BaseComponent;

  private readonly label2: BaseComponent;

  private readonly input2: HTMLInputElement;

  private readonly inputField3: BaseComponent;

  private readonly label3: BaseComponent;

  private readonly input3: HTMLInputElement;

  private readonly btnAdd: BaseComponent;

  private readonly btnCancel: BaseComponent;

  constructor() {
    super('div', ['modal__form']);
    this.inputField1 = new BaseComponent('div', ['input__field']);
    this.inputField2 = new BaseComponent('div', ['input__field']);
    this.inputField3 = new BaseComponent('div', ['input__field']);

    this.label1 = new BaseComponent('label', []);
    this.label1.element.setAttribute('for', 'first-name');
    this.label1.element.textContent = 'First Name';

    this.input1 = document.createElement('input');
    this.input1.setAttribute('type', 'text');
    this.input1.setAttribute('id', 'first-name');
    this.input1.setAttribute('placeholder', 'Jessie');
    this.input1.setAttribute('required', '');
    this.input1.setAttribute('maxlength', '30');
    this.input1.setAttribute('pattern', NAME_PATTERN);

    this.label2 = new BaseComponent('label', []);
    this.label2.element.setAttribute('for', 'last-name');
    this.label2.element.textContent = 'Last Name';

    this.input2 = document.createElement('input');
    this.input2.setAttribute('type', 'text');
    this.input2.setAttribute('id', 'last-name');
    this.input2.setAttribute('placeholder', 'Doe');
    this.input2.setAttribute('required', '');
    this.input2.setAttribute('maxlength', '30');
    this.input2.setAttribute('pattern', NAME_PATTERN);

    this.label3 = new BaseComponent('label', []);
    this.label3.element.setAttribute('for', 'email');
    this.label3.element.textContent = 'E-mail';

    this.input3 = document.createElement('input');
    this.input3.setAttribute('type', 'email');
    this.input3.setAttribute('id', 'email');
    this.input3.setAttribute('placeholder', 'Jessie.Doe@gmail.com');
    this.input3.setAttribute('required', '');
    this.input3.setAttribute('maxlength', '30');
    this.input3.setAttribute('pattern', EMAIL_PATTERN);

    this.btnAdd = new BaseComponent('button', ['form-add'], 'add user');
    this.btnAdd.element.setAttribute('submit', '');

    this.btnCancel = new BaseComponent('button', ['form-cancel'], 'cancel');

    //  Appends elements
    this.element.appendChild(this.inputField1.element);
    this.element.appendChild(this.inputField2.element);
    this.element.appendChild(this.inputField3.element);

    this.inputField1.element.appendChild(this.label1.element);
    this.inputField1.element.appendChild(this.input1);

    this.inputField2.element.appendChild(this.label2.element);
    this.inputField2.element.appendChild(this.input2);

    this.inputField3.element.appendChild(this.label3.element);
    this.inputField3.element.appendChild(this.input3);

    this.input1.addEventListener('input', () => {
      if (ModalForm.checkValid(this.input1)) {
        this.inputField1.element.classList.add('succsess');
        this.inputField1.element.classList.remove('failed');
        this.input1.setCustomValidity('');
      } else {
        this.input1.setCustomValidity(
          'The field should not contain service characters or consist only of numbers'
        );
        this.inputField1.element.classList.remove('succsess');
        this.inputField1.element.classList.add('failed');
      }
    });

    this.input2.addEventListener('input', () => {
      if (ModalForm.checkValid(this.input2)) {
        this.inputField2.element.classList.add('succsess');
        this.inputField2.element.classList.remove('failed');
        this.input2.setCustomValidity('');
      } else {
        this.input2.setCustomValidity(
          'The field should not contain service characters or consist only of numbers'
        );
        this.inputField2.element.classList.remove('succsess');
        this.inputField2.element.classList.add('failed');
      }
    });

    this.input3.addEventListener('input', () => {
      if (ModalForm.checkValid(this.input3)) {
        this.inputField3.element.classList.add('succsess');
        this.inputField3.element.classList.remove('failed');
        this.input3.setCustomValidity('');
      } else {
        this.inputField3.element.classList.remove('succsess');
        this.inputField3.element.classList.add('failed');
      }
    });
  }

  public static checkValid(input: HTMLInputElement): boolean {
    return !(
      Number(input.value) ||
      input.value === '' ||
      input.validity.patternMismatch
    );
  }

  public checkStateButtonToSubmit(button: HTMLElement): void {
    if (
      ModalForm.checkValid(this.input1) &&
      ModalForm.checkValid(this.input2) &&
      ModalForm.checkValid(this.input3)
    ) {
      button.classList.remove('disabled');
      button.classList.add('active');
      this.inputField1.element.classList.add('succsess');
      this.inputField1.element.classList.remove('failed');
    } else {
      button.classList.add('disabled');
      button.classList.remove('active');
    }
  }

  public clearAllInputsValue(): void {
    this.input1.value = '';
    this.input2.value = '';
    this.input3.value = '';
  }

  public getFirstNameProperties(): string {
    return this.input1.value;
  }

  public getLastNameProperties(): string {
    return this.input2.value;
  }

  public getEmailProperties(): string {
    return this.input3.value;
  }
}
