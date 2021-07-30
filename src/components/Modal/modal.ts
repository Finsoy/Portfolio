import './modal.scss';
import avatarImg from '../../assets/avatar-icon.png';
import { BaseComponent } from '../base.component';
import { ModalForm } from './modal-form/modal-form';

export class Modal extends BaseComponent {
  readonly modalForm: ModalForm;

  private readonly modalInner: BaseComponent;

  private readonly modalTitle: BaseComponent;

  private readonly formWrapper: BaseComponent;

  private readonly avatarImage: BaseComponent;

  private readonly btnAdd: BaseComponent;

  private readonly btnCancel: BaseComponent;

  constructor() {
    super('div', ['modal__wrapper', 'hidden']);
    this.modalForm = new ModalForm();
    this.modalInner = new BaseComponent('form', ['modal__inner']);
    this.modalTitle = new BaseComponent('div', ['modal__title']);
    this.modalTitle.element.textContent = 'Register new Player';
    this.formWrapper = new BaseComponent('div', ['form__wrapper']);
    this.avatarImage = new BaseComponent('img', ['form__avatar']);
    this.avatarImage.element.setAttribute('src', `${avatarImg}`);

    this.btnAdd = new BaseComponent(
      'button',
      ['form-add', 'disabled'],
      'add user'
    );
    this.btnAdd.element.setAttribute('type', 'submit');

    this.btnCancel = new BaseComponent('button', ['form-cancel'], 'cancel');

    this.element.appendChild(this.modalInner.element);
    this.modalInner.element.appendChild(this.modalTitle.element);

    this.modalInner.element.appendChild(this.formWrapper.element);

    this.formWrapper.element.appendChild(this.modalForm.element);
    this.formWrapper.element.appendChild(this.avatarImage.element);

    this.modalInner.element.appendChild(this.btnAdd.element);
    this.modalInner.element.appendChild(this.btnCancel.element);

    this.element.addEventListener('click', (e) => {
      this.closeModal(e);
    });
    this.btnAdd.element.addEventListener('click', (e) => {
      e.preventDefault();
    });
    this.btnCancel.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.modalForm.clearAllInputsValue();
    });
  }

  closeModal(e: MouseEvent) {
    if (
      e.target === this.element ||
      e.target === this.btnCancel.element ||
      e.target === this.btnAdd.element
    ) {
      this.element.classList.add('hidden');
    }
  }

  openModal() {
    this.element.classList.remove('hidden');
    setInterval(() => {
      this.modalForm.checkStateButtonToSubmit(this.btnAdd.element);
    }, 500);
  }
}
