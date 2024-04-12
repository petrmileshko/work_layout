/**
 * Функция для инициализации мобильной версии меню с кнопкой типа бургер, передать объекты с описанием классов элемента и активации для элементов (контейнер, меню, бургер)
 * @param {object} container
 * @param {object} menu
 * @param {object} control
 * @returns
 */
function menuMobile(container, menu, control, item) {
  const containerElement = document.querySelector(container.element);
  const menuElement = document.querySelector(menu.element);
  const controlElement = document.querySelector(control.element);
  const menuItems = menuElement.querySelectorAll(`.${item.element}`);
  let menuItemCurrent = menuElement.querySelector(`.${item.activation}`);

  return function () {
    if (containerElement !== null && menuElement !== null && controlElement !== null && menuItems.length && menuItemCurrent !== null) {

      controlElement.addEventListener('click', (e) => {
        e.preventDefault();
        containerElement.classList.toggle(container.activation);
        menuElement.classList.toggle(menu.activation);
        controlElement.classList.toggle(control.activation);
      });

      if (/apple/i.test(navigator.vendor)) {
        controlElement.addEventListener('focus', (e) => {
          e.preventDefault();
        });
      }

      menuElement.addEventListener('click', (e) => {
        if(!e.target.classList.contains(item.activation) && e.target.classList.contains(item.element)) {
          e.target.classList.add(item.activation);
          menuItemCurrent.classList.remove(item.activation);
          menuItemCurrent = e.target;
          if(controlElement.classList.contains(control.activation)) {
            controlElement.classList.remove(control.activation);
            containerElement.classList.remove(container.activation);
            menuElement.classList.remove(menu.activation);
          }
        }
      });
    }
  };
}

export default menuMobile;
