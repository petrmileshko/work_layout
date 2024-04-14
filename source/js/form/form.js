import Pristine from 'pristinejs/dist/pristine';
import IMask from 'imask';

const initForm = function (formSelector, {
  classTo,
  errorTextParent,
  errorTextClass
}) {
  this.form = document.querySelector(formSelector);

  this.validator = this.form !== null ? new Pristine(this.form, {
    classTo,
    errorTextParent,
    errorTextClass
  }, true) : null;

  this.setValidators = function (params) {

    if (this.validator && params.length && (params instanceof Array)) {

      params.forEach((item) => {
        const element = item.selector ? this.form.querySelector(item.selector) : false;
        if (element && (typeof item.cb === 'function') && item.message.length) {
          this.validator.addValidator(element, item.cb, item.message);
        }
      });

      if (this.form !== null && this.validator) {
        this.form.addEventListener('submit', (evt) => {
          const isValid = this.validator.validate();

          if (!isValid) {
            evt.preventDefault();
          }
        });
      }
    }
  };

  this.initPhoneMasks = function (selector, options) {
    const phoneInputs = this.form.querySelectorAll(selector);

    if (phoneInputs.length) {
      phoneInputs.forEach((item) => {
        IMask(item, options);
      });
    }
  };

  this.initPassword = function (pass, text, toggler) {
    const item = this.form.querySelector(`.${pass}`);
    const itemInput = item.querySelector('input');
    const itemToggler = item.querySelector(`.${toggler}`);

    if (item !== null && itemInput !== null && itemToggler !== null) {
      itemToggler.addEventListener('click',() => {
        if (item.classList.contains(pass)) {
          item.classList.remove(pass);
          item.classList.add(text);
          itemInput.setAttribute('type','text');
        }
        else if(item.classList.contains(text)) {
          item.classList.remove(text);
          item.classList.add(pass);
          itemInput.setAttribute('type','password');
        }
      });
    }
  };
};

export default initForm;
