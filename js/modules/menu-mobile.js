import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const menuListMenu = document.getElementById("menu");

  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, ['click', 'touchstart'], () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    })
  }

  EventSource.forEach(evento => menuButton.addEventListener('click',openMenu));
}

