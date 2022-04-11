const btnMenu = document.getElementById('btnmenu');
const menu = document.getElementById('menu');
const exitBtn = document.getElementById('exitbtn');
const menuElements = document.querySelectorAll('#mobile-menu a');

btnMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
});

exitBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});

for (let i = 0; i < menuElements.length; i += 1) {
  menuElements[i].addEventListener('click', () => {
		menu.style.display = 'none';
  });
}