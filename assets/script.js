const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

if (button && menu) {
  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}
