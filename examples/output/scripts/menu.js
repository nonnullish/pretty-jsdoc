const toggleMenu = () => {
  const menu = document.querySelector('nav.layout-nav');
  const button = document.querySelector('.menu-toggle');

  const isToggled = Number(menu.style.opacity) === 1;

  if (isToggled) {
    menu.style = undefined;
    button.style.transform = 'rotate(0deg)';
  } else {
    menu.style.height = 'auto';
    menu.style.opacity = 1;
    button.style.transform = 'rotate(180deg)';
  }
}
