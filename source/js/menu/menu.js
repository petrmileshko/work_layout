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
  const menuItems = menuElement !== null ? menuElement.querySelectorAll(`.${item.element}`) : null;
  let menuItemCurrent = menuElement !== null ? menuElement.querySelector(`.${item.activation}`) : null;

  return function () {
    if (containerElement !== null && menuElement !== null && controlElement !== null && menuItems.length && menuItemCurrent !== null) {

      if (window.location.href !== menuItemCurrent.href && window.location.href.includes('#')) {
        menuItemCurrent.classList.remove(item.activation);
        setCurrentItem(window.location.href.split('#')[1], item.activation);
      }
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
        if (!e.target.classList.contains(item.activation) && e.target.classList.contains(item.element)) {
          unsetCurrentItem(item.activation);
          e.target.classList.add(item.activation);
          menuItemCurrent = e.target;
          if (controlElement.classList.contains(control.activation)) {
            controlElement.classList.remove(control.activation);
            containerElement.classList.remove(container.activation);
            menuElement.classList.remove(menu.activation);
          }
        }
      });
    }
  };

  function setCurrentItem(name, className) {
    menuItems.forEach((element) => {
      if (element.href.includes(name)) {
        element.classList.add(className);
      }
    });
  }

  function unsetCurrentItem(className) {
    menuItems.forEach((element) => {
      element.classList.remove(className);
    });
  }
}

export default menuMobile;
