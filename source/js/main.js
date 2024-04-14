//import './ui/slider/slider.js';
import {
  clearNoJs,
  validateEmail,
  validateLogin
} from './utils/utils.js';
import menuMobile from './menu/menu.js';
import initForm from './form/form.js';

// подготовка элементов шапки сайта для работы когда JS включен и нет сбоя
clearNoJs(
  '.page__header',
  '--nojs'
)();

// Инициализация меню для мобильной версии
menuMobile({
  element: '.page__header',
  activation: 'page__header--opened'
}, {
  element: '.menu',
  activation: 'menu--opened'
}, {
  element: '.burger__icon',
  activation: 'burger__icon--opened'
},
{
  element: 'menu__link',
  activation: 'menu__link--current'
})();

//Инициализация валидатора для login
const login = new initForm(
  '#login', {
    classTo: 'form__label',
    errorTextParent: 'form__label',
    errorTextClass: 'form__label--error'
  }
);

login.setValidators([{
  selector: '[name="userlogin"]',
  cb: validateLogin,
  message: 'Не допустимые символы! Масимум 35.'
}]);

//Установка переключения режима скрыто/октрыто для поля ввода пароля
login.initPassword('form__label--password','form__label--text','form__input-toggler');


//Инициализация валидатора для restore
const restore = new initForm(
  '#restore', {
    classTo: 'form__label',
    errorTextParent: 'form__label',
    errorTextClass: 'form__label--error'
  }
);

restore.setValidators([{
  selector: '[name="usermail"]',
  cb: validateEmail,
  message: 'Укажите правильное имя почты, не более 35 символов!'
}]);
