import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// настройка слайдера
const slider = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  // Optional parameters
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true
});

export default {slider};
