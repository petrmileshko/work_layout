//import './ui/slider/slider.js';
import clearNoJs from './utils/utils.js';
import menuMobile from './menu/menu.js';

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

console.log('Бизнес процессы v1.0');
